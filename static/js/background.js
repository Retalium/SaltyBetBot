let n;const e=new Array(32);function t(n){return e[n]}e.fill(void 0),e.push(void 0,null,!0,!1);let _=0,r=null;function o(){return null!==r&&r.buffer===n.memory.buffer||(r=new Uint8Array(n.memory.buffer)),r}let c=new TextEncoder("utf-8");const i="function"==typeof c.encodeInto?function(n,e){return c.encodeInto(n,e)}:function(n,e){const t=c.encode(n);return e.set(t),{read:n.length,written:t.length}};function a(n,e,t){if(void 0===t){const t=c.encode(n),r=e(t.length);return o().subarray(r,r+t.length).set(t),_=t.length,r}let r=n.length,a=e(r);const b=o();let u=0;for(;u<r;u++){const e=n.charCodeAt(u);if(e>127)break;b[a+u]=e}if(u!==r){0!==u&&(n=n.slice(u)),a=t(a,r,r=u+3*n.length);const e=o().subarray(a+u,a+r);u+=i(n,e).written}return _=u,a}function b(n){return null==n}let u=null;function w(){return null!==u&&u.buffer===n.memory.buffer||(u=new Int32Array(n.memory.buffer)),u}let f=e.length;function s(n){const _=t(n);return function(n){n<36||(e[n]=f,f=n)}(n),_}let g=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});function l(n,e){return g.decode(o().subarray(n,n+e))}function d(n){f===e.length&&e.push(e.length+1);const t=f;return f=e[t],e[t]=n,t}g.decode();let m=32;function h(n){if(1==m)throw new Error("out of js stack");return e[--m]=n,m}function y(n,e){return 0===n?t(e):l(n,e)}function p(e){n.__wbindgen_exn_store(d(e))}let v=null;(function r(o){let c;void 0===o&&(o=import.meta.url.replace(/\.js$/,"_bg.wasm"));const i={wbg:{}};if(i.wbg.__widl_f_error_1_=function(n){console.error(t(n))},i.wbg.__wbg_instanceof_Error_e318332a76ed904b=function(n){return t(n)instanceof Error},i.wbg.__wbg_message_39baa88d1ff3386a=function(n){return d(t(n).message)},i.wbg.__wbindgen_string_get=function(e,r){const o=t(r);var c="string"==typeof o?o:void 0,i=b(c)?0:a(c,n.__wbindgen_malloc,n.__wbindgen_realloc),u=_;w()[e/4+1]=u,w()[e/4+0]=i},i.wbg.__wbindgen_object_drop_ref=function(n){s(n)},i.wbg.__widl_f_object_store_IDBTransaction=function(n,e,_){try{var r=y(e,_);return d(t(n).objectStore(r))}catch(n){p(n)}},i.wbg.__widl_f_add_IDBObjectStore=function(n,e){try{return d(t(n).add(t(e)))}catch(n){p(n)}},i.wbg.__wbindgen_cb_drop=function(n){const e=s(n).original;if(1==e.cnt--)return e.a=0,!0;return!1},i.wbg.__wbindgen_string_new=function(n,e){return d(l(n,e))},i.wbg.__widl_f_log_1_=function(n){console.log(t(n))},i.wbg.__widl_f_clear_IDBObjectStore=function(n){try{return d(t(n).clear())}catch(n){p(n)}},i.wbg.__widl_f_get_all_IDBObjectStore=function(n){try{return d(t(n).getAll())}catch(n){p(n)}},i.wbg.__wbindgen_object_clone_ref=function(n){return d(t(n))},i.wbg.__widl_f_set_onsuccess_IDBRequest=function(n,e){t(n).onsuccess=t(e)},i.wbg.__widl_f_set_onerror_IDBRequest=function(n,e){t(n).onerror=t(e)},i.wbg.__wbg_length_1881309ca6f2ebd6=function(n){return t(n).length},i.wbg.__wbg_get_bf32bf170c3d4d9a=function(n,e){return d(t(n)[e>>>0])},i.wbg.__wbg_call_6c4ea719458624eb=function(n,e,_){try{return d(t(n).call(t(e),t(_)))}catch(n){p(n)}},i.wbg.__wbindgen_is_undefined=function(n){return void 0===t(n)},i.wbg.__wbg_new_4fee7e2900033464=function(){return d(new Array)},i.wbg.__wbg_push_ba9b5e3c25cff8f9=function(n,e){return t(n).push(t(e))},i.wbg.__wbg_removetabs_ee935c04f8aa5977=function(n){var e,_;return d((e=t(n),_=e.map((function(n){return n.id})),new Promise((function(n,e){chrome.tabs.remove(_,(function(){null!=chrome.runtime.lastError?e(new Error(chrome.runtime.lastError.message)):n()}))}))))},i.wbg.__wbg_new0_926efe275b9bd771=function(){return d(new Date)},i.wbg.__wbg_toUTCString_c6c53dddfae1eb43=function(n){return d(t(n).toUTCString())},i.wbg.__wbg_chromeonconnect_5ed2be58fdccfdfa=function(){return d(chrome.runtime.onConnect)},i.wbg.__wbg_addListener_2ac5cbd510ccd7c6=function(n,e){t(n).addListener(t(e))},i.wbg.__widl_f_indexed_db_Window=function(n){try{var e=t(n).indexedDB;return b(e)?0:d(e)}catch(n){p(n)}},i.wbg.__widl_f_open_with_u32_IDBFactory=function(n,e,_,r){try{var o=y(e,_);return d(t(n).open(o,r>>>0))}catch(n){p(n)}},i.wbg.__widl_f_set_onupgradeneeded_IDBOpenDBRequest=function(n,e){t(n).onupgradeneeded=t(e)},i.wbg.__widl_f_set_onblocked_IDBOpenDBRequest=function(n,e){t(n).onblocked=t(e)},i.wbg.__wbg_chromeonmessage_ce55601db77c298f=function(){return d(chrome.runtime.onMessage)},i.wbg.__widl_f_close_IDBDatabase=function(n){t(n).close()},i.wbg.__widl_f_performance_Window=function(n){var e=t(n).performance;return b(e)?0:d(e)},i.wbg.__widl_f_now_Performance=function(n){return t(n).now()},i.wbg.__wbg_sender_da7503d2b86e62be=function(n){return d(t(n).sender)},i.wbg.__wbg_tab_c51db073e6629cb2=function(n){var e=t(n).tab;return b(e)?0:d(e)},i.wbg.__wbg_disconnect_9b6a4e5b14a30a8f=function(n){t(n).disconnect()},i.wbg.__wbg_onDisconnect_1678887fe804d850=function(n){return d(t(n).onDisconnect)},i.wbg.__wbg_name_c7fb65250233ceef=function(e,r){var o=a(t(r).name,n.__wbindgen_malloc,n.__wbindgen_realloc),c=_;w()[e/4+1]=c,w()[e/4+0]=o},i.wbg.__wbg_onMessage_39105b92abbad6eb=function(n){return d(t(n).onMessage)},i.wbg.__wbg_removeListener_f1deaca333139c3d=function(n,e){t(n).removeListener(t(e))},i.wbg.__wbg_postMessage_9cd8a6302d77f2ce=function(n,e,_){var r=y(e,_);t(n).postMessage(r)},i.wbg.__widl_f_open_cursor_IDBObjectStore=function(n){try{return d(t(n).openCursor())}catch(n){p(n)}},i.wbg.__wbg_fetch_4c5410c19d844163=function(n,e){var t,_=y(n,e);return d((t=_,fetch(chrome.runtime.getURL(t),{credentials:"same-origin",mode:"same-origin"}).then((function(n){return n.text()}))))},i.wbg.__widl_f_result_IDBRequest=function(n){try{return d(t(n).result)}catch(n){p(n)}},i.wbg.__wbindgen_is_null=function(n){return null===t(n)},i.wbg.__widl_instanceof_IDBCursorWithValue=function(n){return t(n)instanceof IDBCursorWithValue},i.wbg.__widl_f_value_IDBCursorWithValue=function(n){try{return d(t(n).value)}catch(n){p(n)}},i.wbg.__widl_f_delete_IDBCursor=function(n){try{return d(t(n).delete())}catch(n){p(n)}},i.wbg.__widl_f_continue_IDBCursor=function(n){try{t(n).continue()}catch(n){p(n)}},i.wbg.__widl_instanceof_IDBDatabase=function(n){return t(n)instanceof IDBDatabase},i.wbg.__wbg_new_b43fc449db38d3bd=function(n,e){var t=y(n,e);return d(new Error(t))},i.wbg.__widl_f_old_version_IDBVersionChangeEvent=function(n){return t(n).oldVersion},i.wbg.__widl_f_new_version_IDBVersionChangeEvent=function(e,_){var r=t(_).newVersion;(null!==v&&v.buffer===n.memory.buffer||(v=new Float64Array(n.memory.buffer)),v)[e/8+1]=b(r)?0:r,w()[e/4+0]=!b(r)},i.wbg.__wbg_new_66e20d51c3e33b63=function(){return d(new Object)},i.wbg.__wbg_set_c3a2ba27703a6186=function(n,e,_){try{return Reflect.set(t(n),t(e),t(_))}catch(n){p(n)}},i.wbg.__widl_f_create_object_store_with_optional_parameters_IDBDatabase=function(n,e,_,r){try{var o=y(e,_);return d(t(n).createObjectStore(o,t(r)))}catch(n){p(n)}},i.wbg.__widl_f_error_IDBRequest=function(n){try{var e=t(n).error;return b(e)?0:d(e)}catch(n){p(n)}},i.wbg.__wbg_new_59cb74e423758ede=function(){return d(new Error)},i.wbg.__wbg_stack_558ba5917b466edd=function(e,r){var o=a(t(r).stack,n.__wbindgen_malloc,n.__wbindgen_realloc),c=_;w()[e/4+1]=c,w()[e/4+0]=o},i.wbg.__wbg_error_4bb6c2a97407129a=function(e,t){var _=y(e,t);0!==e&&n.__wbindgen_free(e,t),console.error(_)},i.wbg.__wbg_globalThis_1c2aa6db3ecb073e=function(){try{return d(globalThis.globalThis)}catch(n){p(n)}},i.wbg.__wbg_self_e5cdcdef79894248=function(){try{return d(self.self)}catch(n){p(n)}},i.wbg.__wbg_window_44ec8ac43884a4cf=function(){try{return d(window.window)}catch(n){p(n)}},i.wbg.__wbg_global_c9abcb94a14733fe=function(){try{return d(global.global)}catch(n){p(n)}},i.wbg.__wbg_newnoargs_a9cd98b36c38f53e=function(n,e){var t=y(n,e);return d(new Function(t))},i.wbg.__wbg_call_222be890f6f564bb=function(n,e){try{return d(t(n).call(t(e)))}catch(n){p(n)}},i.wbg.__widl_instanceof_Window=function(n){return t(n)instanceof Window},i.wbg.__widl_f_error_IDBTransaction=function(n){var e=t(n).error;return b(e)?0:d(e)},i.wbg.__wbg_isArray_75d2a6bfd8cafa2d=function(n){return Array.isArray(t(n))},i.wbg.__widl_f_set_oncomplete_IDBTransaction=function(n,e){t(n).oncomplete=t(e)},i.wbg.__widl_f_set_onerror_IDBTransaction=function(n,e){t(n).onerror=t(e)},i.wbg.__widl_f_set_onabort_IDBTransaction=function(n,e){t(n).onabort=t(e)},i.wbg.__widl_f_transaction_with_str_sequence_and_mode_IDBDatabase=function(n,e,_){try{return d(t(n).transaction(t(e),s(_)))}catch(n){p(n)}},i.wbg.__wbindgen_throw=function(n,e){throw new Error(l(n,e))},i.wbg.__wbindgen_rethrow=function(n){throw s(n)},i.wbg.__wbg_then_5a9068d7b674caf9=function(n,e,_){return d(t(n).then(t(e),t(_)))},i.wbg.__wbg_then_79de0b6809569306=function(n,e){return d(t(n).then(t(e)))},i.wbg.__wbg_resolve_4e9c46f7e8321315=function(n){return d(Promise.resolve(t(n)))},i.wbg.__wbindgen_closure_wrapper152=function(t,_,r){const o={a:t,b:_,cnt:1},c=t=>{o.cnt++;const _=o.a;o.a=0;try{return function(t,_,r){try{n.wasm_bindgen__convert__closures__invoke1_mut_ref__h39b5784912149d2c(t,_,h(r))}finally{e[m++]=void 0}}(_,o.b,t)}finally{0==--o.cnt?n.__wbindgen_export_2.get(31)(_,o.b):o.a=_}};return c.original=o,d(c)},i.wbg.__wbindgen_closure_wrapper320=function(e,t,_){const r={a:e,b:t,cnt:1},o=()=>{r.cnt++;const e=r.a;r.a=0;try{return function(e,t){n.wasm_bindgen__convert__closures__invoke0_mut__h19111114a018b954(e,t)}(e,r.b)}finally{0==--r.cnt?n.__wbindgen_export_2.get(31)(e,r.b):r.a=e}};return o.original=r,d(o)},i.wbg.__wbindgen_closure_wrapper666=function(e,t,_){const r={a:e,b:t,cnt:1},o=e=>{r.cnt++;const t=r.a;r.a=0;try{return function(e,t,_){n.wasm_bindgen__convert__closures__invoke1_mut__h19967a6884e2c850(e,t,d(_))}(t,r.b,e)}finally{0==--r.cnt?n.__wbindgen_export_2.get(31)(t,r.b):r.a=t}};return o.original=r,d(o)},i.wbg.__wbindgen_closure_wrapper151=function(t,_,r){const o={a:t,b:_,cnt:1},c=t=>{o.cnt++;const _=o.a;o.a=0;try{return function(t,_,r){try{n.wasm_bindgen__convert__closures__invoke1_mut_ref__h39b5784912149d2c(t,_,h(r))}finally{e[m++]=void 0}}(_,o.b,t)}finally{0==--o.cnt?n.__wbindgen_export_2.get(31)(_,o.b):o.a=_}};return c.original=o,d(c)},i.wbg.__wbindgen_closure_wrapper319=function(e,t,r){const o={a:e,b:t,cnt:1},c=(e,t)=>{o.cnt++;const r=o.a;o.a=0;try{return function(e,t,r,o){var c=a(r,n.__wbindgen_malloc,n.__wbindgen_realloc),i=_;n.wasm_bindgen__convert__closures__invoke2_mut__h01acf11cadf3b97e(e,t,c,i,d(o))}(r,o.b,e,t)}finally{0==--o.cnt?n.__wbindgen_export_2.get(31)(r,o.b):o.a=r}};return c.original=o,d(c)},i.wbg.__wbindgen_closure_wrapper130=function(t,_,r){const o={a:t,b:_,cnt:1},c=t=>{o.cnt++;const _=o.a;o.a=0;try{return function(t,_,r){try{n.wasm_bindgen__convert__closures__invoke1_mut_ref__h39b5784912149d2c(t,_,h(r))}finally{e[m++]=void 0}}(_,o.b,t)}finally{0==--o.cnt?n.__wbindgen_export_2.get(31)(_,o.b):o.a=_}};return c.original=o,d(c)},i.wbg.__wbindgen_closure_wrapper318=function(e,t,_){const r={a:e,b:t,cnt:1},o=()=>{r.cnt++;const e=r.a;r.a=0;try{return function(e,t){n.wasm_bindgen__convert__closures__invoke0_mut__h19111114a018b954(e,t)}(e,r.b)}finally{0==--r.cnt?n.__wbindgen_export_2.get(31)(e,r.b):r.a=e}};return o.original=r,d(o)},i.wbg.__wbindgen_closure_wrapper148=function(e,t,_){const r={a:e,b:t,cnt:1},o=e=>{r.cnt++;const t=r.a;r.a=0;try{return function(e,t,_){n.wasm_bindgen__convert__closures__invoke1_mut__h19967a6884e2c850(e,t,d(_))}(t,r.b,e)}finally{0==--r.cnt?n.__wbindgen_export_2.get(31)(t,r.b):r.a=t}};return o.original=r,d(o)},i.wbg.__wbindgen_closure_wrapper157=function(e,t,r){const o={a:e,b:t,cnt:1},c=(e,t,r)=>{o.cnt++;const c=o.a;o.a=0;try{return function(e,t,r,o,c){var i=a(r,n.__wbindgen_malloc,n.__wbindgen_realloc),b=_;return 0!==n.wasm_bindgen__convert__closures__invoke3_mut__hcdc590f5def17a1a(e,t,i,b,d(o),d(c))}(c,o.b,e,t,r)}finally{0==--o.cnt?n.__wbindgen_export_2.get(31)(c,o.b):o.a=c}};return c.original=o,d(c)},"function"==typeof URL&&o instanceof URL||"string"==typeof o||"function"==typeof Request&&o instanceof Request){const n=fetch(o);c="function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(n,i).catch(e=>n.then(n=>{if("application/wasm"!=n.headers.get("Content-Type"))return console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e),n.arrayBuffer();throw e}).then(n=>WebAssembly.instantiate(n,i))):n.then(n=>n.arrayBuffer()).then(n=>WebAssembly.instantiate(n,i))}else c=WebAssembly.instantiate(o,i).then(n=>n instanceof WebAssembly.Instance?{instance:n,module:o}:n);return c.then(({instance:e,module:t})=>(n=e.exports,r.__wbindgen_wasm_module=t,n.__wbindgen_start(),n))})(chrome.runtime.getURL("js/background.wasm")).catch(console.error);
//# sourceMappingURL=background.js.map
