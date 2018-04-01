use std;
use std::collections::{ HashMap };
use record::{ Record, Mode, Winner, Tier };
use genetic::{ Gene, gen_rand_index, rand_is_percent, MUTATION_RATE, choose2 };
use types::{Lookup, LookupSide, LookupFilter, LookupStatistic};


// TODO this should take into account the user's real limit
const SALT_MINE_AMOUNT: f64 = 400.0; // TODO verify that this is correct

// TODO this should take into account the user's real limit
const TOURNAMENT_BALANCE: f64 = 1000.0 + (22.0 * 25.0);


#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum Bet {
    Left(f64),
    Right(f64),
    None,
}

impl Bet {
    pub fn swap(&self) -> Self {
        match *self {
            Bet::Left(a) => Bet::Right(a),
            Bet::Right(a) => Bet::Left(a),
            Bet::None => Bet::None,
        }
    }
}


pub trait Simulator {
    fn matches_len(&self, &str) -> usize;
    fn current_money(&self) -> f64;
    fn lookup_character(&self, &str) -> &[Record];
}


pub trait Strategy: Sized + std::fmt::Debug {
    fn bet<A: Simulator>(&self, simulation: &A, tier: &Tier, left: &str, right: &str) -> Bet;
}


pub trait Calculate<A> {
    fn calculate<B: Simulator>(&self, &B, &Tier, &str, &str) -> A;

    fn precalculate(&self) -> Option<A> {
        None
    }

    fn optimize(self) -> Self where Self: Sized {
        self
    }
}


pub mod lookup {
    use std::iter::IntoIterator;
    use record::{Record, Winner};


    fn iterate_percentage<'a, A, B, C>(iter: A, default: B, mut matches: C) -> f64
        where A: IntoIterator<Item = &'a Record>,
              B: FnOnce() -> f64,
              C: FnMut(&'a Record) -> bool {
        let mut output: f64 = 0.0;
        let mut len: f64 = 0.0;

        for record in iter {
            len += 1.0;

            if matches(record) {
                output += 1.0;
            }
        }

        if len == 0.0 {
            default()

        } else {
            output / len
        }
    }

    fn iterate<'a, A, B>(iter: A, initial: f64, mut f: B) -> f64
        where A: IntoIterator<Item = &'a Record>,
              B: FnMut(f64, &'a Record) -> f64 {
        let mut output: f64 = initial;
        let mut len: f64 = 0.0;

        for record in iter {
            len += 1.0;
            output = f(output, record);
        }

        if len == 0.0 {
            // TODO should this return 0.0 instead ?
            output

        } else {
            output / len
        }
    }

    pub fn upsets<'a, A>(iter: A, name: &str) -> f64
        where A: IntoIterator<Item = &'a Record> {
        // TODO is 0.0 or 0.5 better ?
        iterate_percentage(iter, || 0.0, |record| {
            // TODO what about mirror matches ?
            // TODO better detection for whether the character matches or not
            (record.left.name == name &&
             (record.right.bet_amount / record.left.bet_amount) > 1.0) ||

            (record.right.name == name &&
             (record.left.bet_amount / record.right.bet_amount) > 1.0)
        })
    }

    pub fn favored<'a, A>(iter: A, name: &str) -> f64
        where A: IntoIterator<Item = &'a Record> {
        // TODO is 0.0 or 0.5 better ?
        iterate_percentage(iter, || 0.0, |record| {
            // TODO what about mirror matches ?
            // TODO better detection for whether the character matches or not
            (record.left.name == name &&
             (record.left.bet_amount / record.right.bet_amount) > 1.0) ||

            (record.right.name == name &&
             (record.right.bet_amount / record.left.bet_amount) > 1.0)
        })
    }

    pub fn bet_amount<'a, A>(iter: A, name: &str) -> f64
        where A: IntoIterator<Item = &'a Record> {
        iterate(iter, 0.0, |bet_amount, record| {
            // TODO what about mirror matches ?
            // TODO better detection for whether the character matches or not
            if record.left.name == name {
                bet_amount + record.left.bet_amount

            } else {
                bet_amount + record.right.bet_amount
            }
        })
    }

    pub fn duration<'a, A>(iter: A) -> f64
        where A: IntoIterator<Item = &'a Record> {
        iterate(iter, 0.0, |duration, record| duration + (record.duration as f64))
    }

    pub fn winrate<'a, A>(iter: A, name: &str) -> f64
        where A: IntoIterator<Item = &'a Record> {
        // TODO what about mirror matches ?
        iterate_percentage(iter, || 0.5, |record| record.is_winner(name))
    }

    pub fn odds<'a, A>(iter: A, name: &str) -> f64
        where A: IntoIterator<Item = &'a Record> {
        iterate(iter, 0.0, |odds, record| {
            // TODO what about mirror matches ?
            // TODO better detection for whether the character matches or not
            if record.left.name == name {
                odds + (record.right.bet_amount / record.left.bet_amount)

            } else {
                odds + (record.left.bet_amount / record.right.bet_amount)
            }
        })
    }

    pub fn earnings<'a, A>(iter: A, name: &str, bet_amount: f64) -> f64
        where A: IntoIterator<Item = &'a Record> {
        let mut earnings: f64 = 0.0;

        for record in iter {
            // TODO is this correct ?
            if record.left.name != record.right.name {
                match record.winner {
                    // TODO better detection for whether the character matches or not
                    Winner::Left => if record.left.name == name {
                        earnings += bet_amount * (record.right.bet_amount / (record.left.bet_amount + bet_amount));

                    } else {
                        earnings -= bet_amount;
                    },

                    // TODO better detection for whether the character matches or not
                    Winner::Right => if record.right.name == name {
                        earnings += bet_amount * (record.left.bet_amount / (record.right.bet_amount + bet_amount));

                    } else {
                        earnings -= bet_amount;
                    },
                }
            }
        }

        earnings
    }

    pub fn matches_len<'a, A>(iter: A) -> f64
        where A: IntoIterator<Item = &'a Record> {
        let mut len: f64 = 0.0;

        for _ in iter {
            len += 1.0;
        }

        len
    }
}


impl LookupStatistic {
    fn lookup<'a, A>(&self, name: &str, iter: A) -> f64
        where A: Iterator<Item = &'a Record> {
        match *self {
            LookupStatistic::Upsets => lookup::upsets(iter, name),
            LookupStatistic::Favored => lookup::favored(iter, name),
            LookupStatistic::Winrate => lookup::winrate(iter, name),
            LookupStatistic::Earnings => unimplemented!(), //lookup::earnings(iter, name),
            LookupStatistic::Odds => lookup::odds(iter, name),
            LookupStatistic::BetAmount => lookup::bet_amount(iter, name),
            LookupStatistic::Duration => lookup::duration(iter),
            LookupStatistic::MatchesLen => lookup::matches_len(iter),
        }
    }
}

impl Gene for LookupStatistic {
    fn new() -> Self {
        let rand = gen_rand_index(8u32);

        if rand == 0 {
            LookupStatistic::Upsets

        } else if rand == 1 {
            LookupStatistic::Favored

        } else if rand == 2 {
            LookupStatistic::Winrate

        } else if rand == 3 {
            LookupStatistic::Odds

        } else if rand == 4 {
            LookupStatistic::Earnings

        } else if rand == 5 {
            LookupStatistic::MatchesLen

        } else if rand == 6 {
            LookupStatistic::BetAmount

        } else {
            LookupStatistic::Duration
        }
    }

    fn choose(&self, other: &Self) -> Self {
        // Random mutation
        if rand_is_percent(MUTATION_RATE) {
            Gene::new()

        } else {
            choose2(self, other)
        }
    }
}


impl LookupFilter {
    fn lookup(&self, stat: &LookupStatistic, left: &str, right: &str, matches: &[Record]) -> f64 {
        match *self {
            LookupFilter::All => stat.lookup(left, matches.into_iter()),

            LookupFilter::Specific => stat.lookup(left, matches.into_iter().filter(|record|
                (record.left.name == right) ||
                (record.right.name == right))),
        }
    }
}

impl Gene for LookupFilter {
    fn new() -> Self {
        let rand = gen_rand_index(2u32);

        if rand == 0 {
            LookupFilter::All

        } else {
            LookupFilter::Specific
        }
    }

    fn choose(&self, other: &Self) -> Self {
        // Random mutation
        if rand_is_percent(MUTATION_RATE) {
            Gene::new()

        } else {
            choose2(self, other)
        }
    }
}


impl Gene for LookupSide {
    fn new() -> Self {
        let rand = gen_rand_index(2u32);

        if rand == 0 {
            LookupSide::Left

        } else {
            LookupSide::Right
        }
    }

    fn choose(&self, other: &Self) -> Self {
        // Random mutation
        if rand_is_percent(MUTATION_RATE) {
            Gene::new()

        } else {
            choose2(self, other)
        }
    }
}


impl Calculate<f64> for Lookup {
    fn calculate<A: Simulator>(&self, simulation: &A, _tier: &Tier, left: &str, right: &str) -> f64 {
        match *self {
            Lookup::Sum => simulation.current_money(),

            Lookup::Character(ref side, ref filter, ref stat) => match *side {
                LookupSide::Left =>
                    filter.lookup(stat, left, right, simulation.lookup_character(left)),

                LookupSide::Right =>
                    filter.lookup(stat, right, left, simulation.lookup_character(right)),
            },
        }
    }
}

impl Gene for Lookup {
    fn new() -> Self {
        let rand = gen_rand_index(2u32);

        if rand == 0 {
            Lookup::Sum

        } else {
            Lookup::Character(Gene::new(), Gene::new(), Gene::new())
        }
    }

    // TODO is this correct ?
    fn choose(&self, other: &Self) -> Self {
        // Random mutation
        if rand_is_percent(MUTATION_RATE) {
            Gene::new()

        } else {
            match *self {
                Lookup::Character(ref father1, ref father2, ref father3) => match *other {
                    Lookup::Character(ref mother1, ref mother2, ref mother3) => Lookup::Character(father1.choose(&mother1), father2.choose(&mother2), father3.choose(&mother3)),
                    _ => choose2(self, other),
                },
                _ => choose2(self, other),
            }
        }
    }
}



#[derive(Debug)]
pub struct Simulation<A, B> where A: Strategy, B: Strategy {
    pub matchmaking_strategy: Option<A>,
    pub tournament_strategy: Option<B>,
    pub record_len: f64,
    pub sum: f64,
    pub tournament_sum: f64,
    pub in_tournament: bool,
    pub successes: f64,
    pub failures: f64,
    pub max_character_len: usize,
    pub characters: HashMap<String, Vec<Record>>,
}

impl<A, B> Simulation<A, B> where A: Strategy, B: Strategy {
    pub fn new() -> Self {
        Self {
            matchmaking_strategy: None,
            tournament_strategy: None,
            record_len: 0.0,
            sum: SALT_MINE_AMOUNT,
            tournament_sum: TOURNAMENT_BALANCE,
            in_tournament: false,
            successes: 0.0,
            failures: 0.0,
            max_character_len: 0,
            characters: HashMap::new()
        }
    }

    fn insert_match(&mut self, key: String, record: Record) {
        let matches = self.characters.entry(key).or_insert_with(|| vec![]);

        matches.push(record);

        let len = matches.len();

        if len > self.max_character_len {
            self.max_character_len = len;
        }
    }

    // TODO figure out a way to remove the clones
    pub fn insert_record(&mut self, record: Record) {
        let left = record.left.name.clone();
        let right = record.right.name.clone();

        if left != right {
            self.record_len += 1.0;
            self.insert_match(left, record.clone());
            self.insert_match(right, record);
        }
    }

    fn sum(&self) -> f64 {
        if self.in_tournament {
            self.tournament_sum

        } else {
            self.sum
        }
    }

    fn is_in_mines(&self) -> bool {
        if self.in_tournament {
            self.tournament_sum <= TOURNAMENT_BALANCE

        } else {
            self.sum <= SALT_MINE_AMOUNT
        }
    }

    fn clamp(&self, bet_amount: f64) -> f64 {
        let sum = self.sum();

        if self.is_in_mines() {
            sum

        } else {
            let rounded = bet_amount.round();

            if rounded < 1.0 {
                1.0

            } else if rounded > sum {
                sum

            } else {
                rounded
            }
        }
    }

    pub fn pick_winner<C>(&self, strategy: &C, tier: &Tier, left: &str, right: &str) -> Bet where C: Strategy {
        if left != right {
            match strategy.bet(self, tier, left, right) {
                Bet::Left(bet_amount) => if bet_amount > 0.0 {
                    return Bet::Left(self.clamp(bet_amount))
                },

                Bet::Right(bet_amount) => if bet_amount > 0.0 {
                    return Bet::Right(self.clamp(bet_amount))
                },

                Bet::None => {},
            }
        }

        if self.is_in_mines() {
            Bet::Left(self.sum())

            // TODO use randomness
            /*if Gene::new() {
                Bet::Left(self.sum())

            } else {
                Bet::Right(self.sum())
            }*/

        } else {
            Bet::None
        }
    }

    fn calculate(&mut self, record: &Record) {
        // TODO make this more efficient
        let record = record.clone().shuffle();

        // TODO if there is too long of a duration between two tournament matches, treat it as two different tournaments
        let winner = match record.mode {
            Mode::Matchmaking => {
                if self.in_tournament {
                    self.in_tournament = false;
                    self.sum += self.tournament_sum;
                    self.tournament_sum = TOURNAMENT_BALANCE;
                }

                match self.matchmaking_strategy {
                    Some(ref a) => self.pick_winner(a, &record.tier, &record.left.name, &record.right.name),
                    None => return,
                }
            },
            Mode::Tournament => {
                self.in_tournament = true;

                match self.tournament_strategy {
                    Some(ref a) => self.pick_winner(a, &record.tier, &record.left.name, &record.right.name),
                    None => return,
                }
            },
        };

        let increase = match winner {
            Bet::Left(bet_amount) => match record.winner {
                Winner::Left => {
                    let odds = record.right.bet_amount / record.left.bet_amount;
                    self.successes += 1.0;
                    (bet_amount * odds).ceil()
                },

                Winner::Right => {
                    self.failures += 1.0;
                    -bet_amount
                },
            },

            Bet::Right(bet_amount) => match record.winner {
                Winner::Right => {
                    let odds = record.left.bet_amount / record.right.bet_amount;
                    self.successes += 1.0;
                    (bet_amount * odds).ceil()
                },

                Winner::Left => {
                    self.failures += 1.0;
                    -bet_amount
                },
            },

            Bet::None => 0.0,
        };

        if self.in_tournament {
            self.tournament_sum += increase;

            if self.tournament_sum <= 0.0 {
                self.tournament_sum = TOURNAMENT_BALANCE;
            }

        } else {
            self.sum += increase;

            if self.sum <= 0.0 {
                self.sum = SALT_MINE_AMOUNT;
            }
        }
    }

    pub fn simulate(&mut self, records: Vec<Record>) {
        for record in records.into_iter() {
            self.calculate(&record);
            self.insert_record(record);
        }

        // TODO code duplication
        if self.in_tournament {
            self.in_tournament = false;
            self.sum += self.tournament_sum;
            self.tournament_sum = TOURNAMENT_BALANCE;
        }
    }

    pub fn insert_records(&mut self, records: Vec<Record>) {
        for record in records.into_iter() {
            self.insert_record(record);
        }
    }

    pub fn winrate(&self, name: &str) -> f64 {
        lookup::winrate(self.lookup_character(name), name)
    }
}

impl<A, B> Simulator for Simulation<A, B> where A: Strategy, B: Strategy {
    fn matches_len(&self, name: &str) -> usize {
        self.lookup_character(name).len()
    }

    fn current_money(&self) -> f64 {
        self.sum()
    }

    fn lookup_character(&self, name: &str) -> &[Record] {
        self.characters.get(name).map(|x| x.as_slice()).unwrap_or(&[])
    }
}
