let n;const e=new Array(32);function t(n){return e[n]}e.fill(void 0),e.push(void 0,null,!0,!1);let _=e.length;function r(n){const r=t(n);return function(n){n<36||(e[n]=_,_=n)}(n),r}let o=0,i=null;function c(){return null!==i&&i.buffer===n.memory.buffer||(i=new Uint8Array(n.memory.buffer)),i}let a=new TextEncoder("utf-8");const l="function"==typeof a.encodeInto?function(n,e){return a.encodeInto(n,e)}:function(n,e){const t=a.encode(n);return e.set(t),{read:n.length,written:t.length}};function u(n,e,t){if(void 0===t){const t=a.encode(n),_=e(t.length);return c().subarray(_,_+t.length).set(t),o=t.length,_}let _=n.length,r=e(_);const i=c();let u=0;for(;u<_;u++){const e=n.charCodeAt(u);if(e>127)break;i[r+u]=e}if(u!==_){0!==u&&(n=n.slice(u)),r=t(r,_,_=u+3*n.length);const e=c().subarray(r+u,r+_);u+=l(n,e).written}return o=u,r}function w(n){return null==n}let b=null;function f(){return null!==b&&b.buffer===n.memory.buffer||(b=new Int32Array(n.memory.buffer)),b}let g=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});function s(n,e){return g.decode(c().subarray(n,n+e))}function d(n){_===e.length&&e.push(e.length+1);const t=_;return _=e[t],e[t]=n,t}g.decode();let m=32;function y(n){if(1==m)throw new Error("out of js stack");return e[--m]=n,m}function h(n,e){return 0===n?t(e):s(n,e)}function v(e){n.__wbindgen_exn_store(d(e))}(function _(i){let c;void 0===i&&(i=import.meta.url.replace(/\.js$/,"_bg.wasm"));const a={wbg:{}};if(a.wbg.__wbindgen_object_drop_ref=function(n){r(n)},a.wbg.__widl_f_length_computable_ProgressEvent=function(n){return t(n).lengthComputable},a.wbg.__widl_f_loaded_ProgressEvent=function(n){return t(n).loaded},a.wbg.__widl_f_total_ProgressEvent=function(n){return t(n).total},a.wbg.__wbg_new0_926efe275b9bd771=function(){return d(new Date)},a.wbg.__wbg_toUTCString_c6c53dddfae1eb43=function(n){return d(t(n).toUTCString())},a.wbg.__wbindgen_string_get=function(e,_){const r=t(_);var i="string"==typeof r?r:void 0,c=w(i)?0:u(i,n.__wbindgen_malloc,n.__wbindgen_realloc),a=o;f()[e/4+1]=a,f()[e/4+0]=c},a.wbg.__wbindgen_string_new=function(n,e){return d(s(n,e))},a.wbg.__widl_f_log_1_=function(n){console.log(t(n))},a.wbg.__wbg_new_b43fc449db38d3bd=function(n,e){var t=h(n,e);return d(new Error(t))},a.wbg.__widl_f_abort_FileReader=function(n){t(n).abort()},a.wbg.__wbindgen_cb_drop=function(n){const e=r(n).original;if(1==e.cnt--)return e.a=0,!0;return!1},a.wbg.__widl_f_result_FileReader=function(n){try{return d(t(n).result)}catch(n){v(n)}},a.wbg.__widl_f_error_FileReader=function(n){var e=t(n).error;return w(e)?0:d(e)},a.wbg.__wbg_new_59cb74e423758ede=function(){return d(new Error)},a.wbg.__wbg_stack_558ba5917b466edd=function(e,_){var r=u(t(_).stack,n.__wbindgen_malloc,n.__wbindgen_realloc),i=o;f()[e/4+1]=i,f()[e/4+0]=r},a.wbg.__wbg_error_4bb6c2a97407129a=function(e,t){var _=h(e,t);0!==e&&n.__wbindgen_free(e,t),console.error(_)},a.wbg.__widl_f_document_Window=function(n){var e=t(n).document;return w(e)?0:d(e)},a.wbg.__widl_f_create_element_Document=function(n,e,_){try{var r=h(e,_);return d(t(n).createElement(r))}catch(n){v(n)}},a.wbg.__widl_f_append_child_Node=function(n,e){try{return d(t(n).appendChild(t(e)))}catch(n){v(n)}},a.wbg.__widl_f_body_Document=function(n){var e=t(n).body;return w(e)?0:d(e)},a.wbg.__widl_f_remove_property_CSSStyleDeclaration=function(e,_,r,i){try{var c=h(r,i),a=u(t(_).removeProperty(c),n.__wbindgen_malloc,n.__wbindgen_realloc),l=o;f()[e/4+1]=l,f()[e/4+0]=a}catch(n){v(n)}},a.wbg.__widl_f_set_property_with_priority_CSSStyleDeclaration=function(n,e,_,r,o,i,c){try{var a=h(e,_),l=h(r,o),u=h(i,c);t(n).setProperty(a,l,u)}catch(n){v(n)}},a.wbg.__widl_f_get_property_value_CSSStyleDeclaration=function(e,_,r,i){try{var c=h(r,i),a=u(t(_).getPropertyValue(c),n.__wbindgen_malloc,n.__wbindgen_realloc),l=o;f()[e/4+1]=l,f()[e/4+0]=a}catch(n){v(n)}},a.wbg.__widl_f_css_rules_CSSStyleSheet=function(n){try{return d(t(n).cssRules)}catch(n){v(n)}},a.wbg.__widl_f_length_CSSRuleList=function(n){return t(n).length},a.wbg.__widl_f_insert_rule_with_index_CSSStyleSheet=function(n,e,_,r){try{var o=h(e,_);return t(n).insertRule(o,r>>>0)}catch(n){v(n)}},a.wbg.__widl_f_get_CSSRuleList=function(n,e){var _=t(n)[e>>>0];return w(_)?0:d(_)},a.wbg.__widl_f_style_CSSStyleRule=function(n){return d(t(n).style)},a.wbg.__widl_f_set_type_HTMLStyleElement=function(n,e,_){var r=h(e,_);t(n).type=r},a.wbg.__widl_f_head_Document=function(n){var e=t(n).head;return w(e)?0:d(e)},a.wbg.__widl_f_sheet_HTMLStyleElement=function(n){var e=t(n).sheet;return w(e)?0:d(e)},a.wbg.__widl_instanceof_HTMLElement=function(n){return t(n)instanceof HTMLElement},a.wbg.__widl_f_style_HTMLElement=function(n){return d(t(n).style)},a.wbg.__widl_f_set_text_content_Node=function(n,e,_){var r=h(e,_);t(n).textContent=r},a.wbg.__wbindgen_object_clone_ref=function(n){return d(t(n))},a.wbg.__widl_instanceof_HTMLInputElement=function(n){return t(n)instanceof HTMLInputElement},a.wbg.__widl_f_set_attribute_Element=function(n,e,_,r,o){try{var i=h(e,_),c=h(r,o);t(n).setAttribute(i,c)}catch(n){v(n)}},a.wbg.__wbg_addevent_5d5369f0d7dd3732=function(n,e,_,r){var o,i,c,a=h(e,_);o=t(n),i=a,c=t(r),o.addEventListener(i,c,{capture:!1,once:!1,passive:!0})},a.wbg.__widl_f_class_list_Element=function(n){return d(t(n).classList)},a.wbg.__widl_f_add_1_DOMTokenList=function(n,e,_){try{var r=h(e,_);t(n).add(r)}catch(n){v(n)}},a.wbg.__wbg_opentab_10c716a31bba302a=function(n,e){var t,_=h(n,e);t=_,chrome.tabs.create({url:chrome.runtime.getURL(t)})},a.wbg.__widl_f_confirm_with_message_Window=function(n,e,_){try{var r=h(e,_);return t(n).confirm(r)}catch(n){v(n)}},a.wbg.__widl_f_get_element_by_id_Document=function(n,e,_){var r=h(e,_),o=t(n).getElementById(r);return w(o)?0:d(o)},a.wbg.__widl_f_click_HTMLElement=function(n){t(n).click()},a.wbg.__wbindgen_cb_forget=function(n){r(n)},a.wbg.__wbg_removeevent_73b2322cc4310f4b=function(n,e,_,r){var o,i,c,a=h(e,_);o=t(n),i=a,c=t(r),o.removeEventListener(i,c,!1)},a.wbg.__widl_f_performance_Window=function(n){var e=t(n).performance;return w(e)?0:d(e)},a.wbg.__widl_f_now_Performance=function(n){return t(n).now()},a.wbg.__wbg_strtoblob_7a5bf7a4d3ec3d5e=function(n,e){var t=h(n,e);return d(new Blob([t],{type:"application/json"}))},a.wbg.__wbg_currentdate_37f91e30b34db27d=function(e){var t=u((new Date).toISOString().replace(new RegExp("\\:","g"),"_"),n.__wbindgen_malloc,n.__wbindgen_realloc),_=o;f()[e/4+1]=_,f()[e/4+0]=t},a.wbg.__wbg_download_d6b3f624d35cbd2b=function(n,e,_){var r,o,i=h(n,e);return d((r=i,o=t(_),new Promise((function(n,e){var t=URL.createObjectURL(o);chrome.downloads.download({url:t,filename:r,saveAs:!0,conflictAction:"prompt"},(function(){URL.revokeObjectURL(t),n()}))}))))},a.wbg.__wbindgen_is_undefined=function(n){return void 0===t(n)},a.wbg.__wbg_sendmessageraw_06db037e50adb455=function(n,e){var t,_=h(n,e);return d((t=_,new Promise((function(n,e){chrome.runtime.sendMessage(null,t,null,(function(t){null!=chrome.runtime.lastError?e(new Error(chrome.runtime.lastError.message)):n(t)}))}))))},a.wbg.__widl_f_files_HTMLInputElement=function(n){var e=t(n).files;return w(e)?0:d(e)},a.wbg.__widl_f_length_FileList=function(n){return t(n).length},a.wbg.__widl_f_get_FileList=function(n,e){var _=t(n)[e>>>0];return w(_)?0:d(_)},a.wbg.__widl_f_set_value_HTMLInputElement=function(n,e,_){var r=h(e,_);t(n).value=r},a.wbg.__widl_f_new_FileReader=function(){try{return d(new FileReader)}catch(n){v(n)}},a.wbg.__widl_f_set_onprogress_FileReader=function(n,e){t(n).onprogress=t(e)},a.wbg.__widl_f_set_onabort_FileReader=function(n,e){t(n).onabort=t(e)},a.wbg.__widl_f_set_onerror_FileReader=function(n,e){t(n).onerror=t(e)},a.wbg.__widl_f_set_onload_FileReader=function(n,e){t(n).onload=t(e)},a.wbg.__widl_f_read_as_text_FileReader=function(n,e){try{t(n).readAsText(t(e))}catch(n){v(n)}},a.wbg.__wbindgen_throw=function(n,e){throw new Error(s(n,e))},a.wbg.__wbindgen_rethrow=function(n){throw r(n)},a.wbg.__wbg_then_79de0b6809569306=function(n,e){return d(t(n).then(t(e)))},a.wbg.__wbg_resolve_4e9c46f7e8321315=function(n){return d(Promise.resolve(t(n)))},a.wbg.__wbg_then_5a9068d7b674caf9=function(n,e,_){return d(t(n).then(t(e),t(_)))},a.wbg.__wbg_globalThis_1c2aa6db3ecb073e=function(){try{return d(globalThis.globalThis)}catch(n){v(n)}},a.wbg.__wbg_self_e5cdcdef79894248=function(){try{return d(self.self)}catch(n){v(n)}},a.wbg.__wbg_window_44ec8ac43884a4cf=function(){try{return d(window.window)}catch(n){v(n)}},a.wbg.__wbg_global_c9abcb94a14733fe=function(){try{return d(global.global)}catch(n){v(n)}},a.wbg.__wbg_newnoargs_a9cd98b36c38f53e=function(n,e){var t=h(n,e);return d(new Function(t))},a.wbg.__wbg_call_222be890f6f564bb=function(n,e){try{return d(t(n).call(t(e)))}catch(n){v(n)}},a.wbg.__widl_instanceof_Window=function(n){return t(n)instanceof Window},a.wbg.__wbindgen_closure_wrapper528=function(t,_,r){const o={a:t,b:_,cnt:1},i=t=>{o.cnt++;const _=o.a;o.a=0;try{return function(t,_,r){try{n.wasm_bindgen__convert__closures__invoke1_mut_ref__h666f6e5ee99e6c0b(t,_,y(r))}finally{e[m++]=void 0}}(_,o.b,t)}finally{0==--o.cnt?n.__wbindgen_export_2.get(40)(_,o.b):o.a=_}};return i.original=o,d(i)},a.wbg.__wbindgen_closure_wrapper626=function(e,t,_){const r={a:e,b:t,cnt:1},o=e=>{r.cnt++;const t=r.a;r.a=0;try{return function(e,t,_){n.wasm_bindgen__convert__closures__invoke1_mut__h19967a6884e2c850(e,t,d(_))}(t,r.b,e)}finally{0==--r.cnt?n.__wbindgen_export_2.get(40)(t,r.b):r.a=t}};return o.original=r,d(o)},a.wbg.__wbindgen_closure_wrapper612=function(e,t,_){const r={a:e,b:t,cnt:1},o=e=>{r.cnt++;const t=r.a;r.a=0;try{return function(e,t,_){n.wasm_bindgen__convert__closures__invoke1_mut__h19967a6884e2c850(e,t,d(_))}(t,r.b,e)}finally{0==--r.cnt?n.__wbindgen_export_2.get(40)(t,r.b):r.a=t}};return o.original=r,d(o)},a.wbg.__wbindgen_closure_wrapper529=function(t,_,r){const o={a:t,b:_,cnt:1},i=t=>{o.cnt++;const _=o.a;o.a=0;try{return function(t,_,r){try{n.wasm_bindgen__convert__closures__invoke1_mut_ref__h666f6e5ee99e6c0b(t,_,y(r))}finally{e[m++]=void 0}}(_,o.b,t)}finally{0==--o.cnt?n.__wbindgen_export_2.get(40)(_,o.b):o.a=_}};return i.original=o,d(i)},a.wbg.__wbindgen_closure_wrapper463=function(t,_,r){const o={a:t,b:_,cnt:1},i=t=>{o.cnt++;const _=o.a;o.a=0;try{return function(t,_,r){try{n.wasm_bindgen__convert__closures__invoke1_mut_ref__h666f6e5ee99e6c0b(t,_,y(r))}finally{e[m++]=void 0}}(_,o.b,t)}finally{0==--o.cnt?n.__wbindgen_export_2.get(40)(_,o.b):o.a=_}};return i.original=o,d(i)},"function"==typeof URL&&i instanceof URL||"string"==typeof i||"function"==typeof Request&&i instanceof Request){const n=fetch(i);c="function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(n,a).catch(e=>n.then(n=>{if("application/wasm"!=n.headers.get("Content-Type"))return console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e),n.arrayBuffer();throw e}).then(n=>WebAssembly.instantiate(n,a))):n.then(n=>n.arrayBuffer()).then(n=>WebAssembly.instantiate(n,a))}else c=WebAssembly.instantiate(i,a).then(n=>n instanceof WebAssembly.Instance?{instance:n,module:i}:n);return c.then(({instance:e,module:t})=>(n=e.exports,_.__wbindgen_wasm_module=t,n.__wbindgen_start(),n))})(chrome.runtime.getURL("js/popup.wasm")).catch(console.error);
//# sourceMappingURL=popup.js.map