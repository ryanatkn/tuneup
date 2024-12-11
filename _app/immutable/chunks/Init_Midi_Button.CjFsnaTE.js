import{r as Y,a as c,t as b,b as K,h as ie,d as U,e as ne}from"./disclose-version.DbIX9lBU.js";import{u as Z,b as le,z as oe,e as $,s as M,c as m,r as d,t as V,g as o,p as ce,k as S,a as ve,_ as R,f as B,d as T,n as ue}from"./index-client.BoISVktJ.js";import{s as p,r as W,e as ee,i as ae}from"./string.CP9_p8aN.js";import{b as de,p as P,a as te,i as h}from"./props.Dc3VY8m1.js";import{r as _e,D as fe,q as me,t as j,u as G}from"./index.DY9TdQ-H.js";function X(e,a,s=a){Y(e,"input",t=>{var r=t?e.defaultValue:e.value;if(r=H(e)?J(r):r,s(r),r!==(r=a())){var i=e.selectionStart,n=e.selectionEnd;e.value=r??"",n!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(n,e.value.length))}}),(oe&&e.defaultValue!==e.value||Z(a)==null&&e.value)&&s(H(e)?J(e.value):e.value),le(()=>{var t=a();H(e)&&t===J(e.value)||e.type==="date"&&!t&&!e.value||t!==e.value&&(e.value=t??"")})}function H(e){var a=e.type;return a==="number"||a==="range"}function J(e){return e===""?null:+e}function N(e,a,s){if(e.multiple)return ye(e,a);for(var t of e.options){var r=x(t);if(de(r,a)){t.selected=!0;return}}(!s||a!==void 0)&&(e.selectedIndex=-1)}function be(e,a){let s=!0;$(()=>{a&&N(e,Z(a),s),s=!1;var t=new MutationObserver(()=>{var r=e.__value;N(e,r)});return t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}})}function ge(e,a,s=a){var t=!0;Y(e,"change",r=>{var i=r?"[selected]":":checked",n;if(e.multiple)n=[].map.call(e.querySelectorAll(i),x);else{var _=e.querySelector(i)??e.querySelector("option:not([disabled])");n=_&&x(_)}s(n)}),$(()=>{var r=a();if(N(e,r,t),t&&r===void 0){var i=e.querySelector(":checked");i!==null&&(r=x(i),s(r))}e.__value=r,t=!1}),be(e)}function ye(e,a){for(var s of e.options)s.selected=~a.indexOf(x(s))}function x(e){return"__value"in e?e.__value:e.value}let q;const pe=e=>{console.log("resetting midi_access"),q=void 0,e.midi_access=null},qe=async e=>{const a=e.midi_access;if(a)return a;if(q)return q;const s=_e();q=s,console.log("request_access midi_access",s);try{const t=await s;return s!==q?q:(e.midi_access=t,t)}catch(t){return console.error("request_access failed",t),q}};var Ie=b('<label class="text_align_center"><div class="title">volume</div> <div class="row"><input type="number" class="svelte-1q1myf8"> <input type="range"></div></label>');function Ue(e,a){let s=P(a,"volume",31,()=>te(fe));var t=Ie(),r=M(m(t),2),i=m(r);W(i),p(i,"step",.01),p(i,"min",0),p(i,"max",1);var n=M(i,2);W(n),p(n,"step",.01),p(n,"min",0),p(n,"max",1),d(r),d(t),X(i,s),X(n,s),c(e,t)}var he=b("<option> </option>"),xe=b('<div class="mb_lg"><label class="text_align_center"><div class="title">instrument</div> <select></select></label></div>');function Be(e,a){let s=P(a,"instrument",15);var t=xe(),r=m(t),i=M(m(r),2);ee(i,21,()=>me,ae,(n,_)=>{var u=he(),k={},w=m(u,!0);d(u),V(()=>{k!==(k=o(_))&&(u.value=(u.__value=o(_))==null?"":o(_)),K(w,o(_))}),c(n,u)}),d(i),d(r),d(t),ge(i,s),c(e,t)}var Me=async(e,a,s,t,r)=>{console.log("requesting midi access"),S(a,"pending");try{pe(s.midi_state),await t()(s.midi_state),S(a,"success")}catch(i){console.error("failed to request midi access",i),S(a,"failure"),S(r,te(i.message))}},ke=b('<li class="svelte-13ivzsn"><small> </small></li>'),De=b("<div><div>MIDI devices</div> <ul></ul></div>"),Se=b("<span>no MIDI devices found, try again?</span>"),Ve=b("<span>requesting MIDI access</span>"),we=b("<span>failed to request MIDI access<!></span>"),Ee=b("connect MIDI &nbsp;<code>c</code>",1),ze=b('<button type="button" class="big svelte-13ivzsn"><!></button>');function Te(e,a){ve(a,!0);const s=P(a,"request_access",3,qe);let t=R("initial");const r=T(()=>a.midi_state.midi_access&&Array.from(a.midi_state.midi_access.inputs.values())),i=T(()=>{var g;return((g=o(r))==null?void 0:g.length)??0}),n=T(()=>o(i)>0||o(t)==="pending");let _=R(void 0);var u=ze();u.__click=[Me,t,a,s,_];var k=m(u);{var w=g=>{var I=U(),E=B(I);{var z=v=>{var l=De(),D=M(m(l),2);ee(D,21,()=>o(r),ae,(L,O)=>{var f=ke(),y=m(f),C=m(y,!0);d(y),d(f),V(()=>K(C,o(O).name)),c(L,f)}),d(D),d(l),c(v,l)},A=v=>{var l=Se();j(1,l,()=>G),c(v,l)};h(E,v=>{var l;(l=o(r))!=null&&l.length?v(z):v(A,!1)})}c(g,I)},re=g=>{var I=U(),E=B(I);{var z=v=>{var l=Ve();j(1,l,()=>G),c(v,l)},A=v=>{var l=U(),D=B(l);{var L=f=>{var y=we(),C=M(m(y));{var se=F=>{var Q=ne();V(()=>K(Q,`: ${o(_)??""}`)),c(F,Q)};h(C,F=>{o(_)&&F(se)})}d(y),j(1,y,()=>G),c(f,y)},O=f=>{var y=Ee();ue(),c(f,y)};h(D,f=>{o(t)==="failure"?f(L):f(O,!1)},!0)}c(v,l)};h(E,v=>{o(t)==="pending"?v(z):v(A,!1)},!0)}c(g,I)};h(k,g=>{a.midi_state.midi_access?g(w):g(re,!1)})}d(u),V(()=>{u.disabled=o(n),p(u,"title",a.midi_state.midi_access?"MIDI is ready!":"connect your MIDI device [c]")}),c(e,u),ce()}ie(["click"]);export{Be as I,Ue as V,ge as a,X as b,Te as c,be as i,qe as r,N as s};
