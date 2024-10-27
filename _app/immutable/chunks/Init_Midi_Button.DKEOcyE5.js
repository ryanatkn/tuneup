import{a as o,t as d,b as B,d as O,e as Y,h as Z}from"./disclose-version.BKNlT-YU.js";import{av as $,aw as ee,b as ae,C as te,e as P,u as re,s as M,c as _,r as c,t as A,g as n,p as se,a as ie,k as V,a1 as G,f as S,d as z,n as ne}from"./index-client.BoyXeee0.js";import{d as oe,s as p,r as H,e as Q,i as R}from"./string.CDuhMoWR.js";import{b as le,p as j,a as W,i as h}from"./props.D3HXCBXF.js";import{r as ue,D as ce,q as ve,t as F,u as U}from"./index.vgoooqTj.js";function Oe(e,a,s,r=!0){r&&s();for(var t of a)e.addEventListener(t,s);$(()=>{for(var i of a)e.removeEventListener(i,s)})}function X(e,a,s,r=s){e.addEventListener(a,s);const t=e.__on_r;t?e.__on_r=()=>{t(),r()}:e.__on_r=r,oe()}function J(e,a,s=a){var r=ee();X(e,"input",()=>{var t=K(e)?N(e.value):e.value;s(t),r&&t!==(t=a())&&(e.value=t??"")}),ae(()=>{var t=a();if(te&&e.defaultValue!==e.value){s(e.value);return}K(e)&&t===N(e.value)||e.type==="date"&&!t&&!e.value||t!==e.value&&(e.value=t??"")})}function K(e){var a=e.type;return a==="number"||a==="range"}function N(e){return e===""?null:+e}function T(e,a,s){if(e.multiple)return fe(e,a);for(var r of e.options){var t=k(r);if(le(t,a)){r.selected=!0;return}}(!s||a!==void 0)&&(e.selectedIndex=-1)}function _e(e,a){let s=!0;P(()=>{a&&T(e,re(a),s),s=!1;var r=new MutationObserver(()=>{var t=e.__value;T(e,t)});return r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{r.disconnect()}})}function de(e,a,s=a){var r=!0;X(e,"change",()=>{var t;if(e.multiple)t=[].map.call(e.querySelectorAll(":checked"),k);else{var i=e.querySelector(":checked");t=i&&k(i)}s(t)}),P(()=>{var t=a();if(T(e,t,r),r&&t===void 0){var i=e.querySelector(":checked");i!==null&&(t=k(i),s(t))}e.__value=t,r=!1}),_e(e)}function fe(e,a){for(var s of e.options)s.selected=~a.indexOf(k(s))}function k(e){return"__value"in e?e.__value:e.value}let y;const me=e=>{console.log("resetting midi_access"),y=void 0,e.midi_access=null},be=async e=>{const a=e.midi_access;if(a)return a;if(y)return y;const s=ue();y=s,console.log("request_access midi_access",s);try{const r=await s;return s!==y?y:(e.midi_access=r,r)}catch(r){return console.error("request_access failed",r),y}};var ge=d('<label class="text_align_center"><div class="title">volume</div> <div class="row"><input type="number" class="svelte-1q1myf8"> <input type="range"></div></label>');function Se(e,a){let s=j(a,"volume",31,()=>W(ce));var r=ge(),t=M(_(r),2),i=_(t);H(i),p(i,"step",.01),p(i,"min",0),p(i,"max",1);var f=M(i,2);H(f),p(f,"step",.01),p(f,"min",0),p(f,"max",1),c(t),c(r),J(i,s),J(f,s),o(e,r)}var pe=d("<option> </option>"),ye=d('<div class="mb_lg"><label class="text_align_center"><div class="title">instrument</div> <select></select></label></div>');function ze(e,a){let s=j(a,"instrument",15);var r=ye(),t=_(r),i=M(_(t),2);Q(i,21,()=>ve,R,(f,m)=>{var l=pe(),D={},b=_(l,!0);c(l),A(()=>{D!==(D=n(m))&&(l.value=(l.__value=n(m))==null?"":n(m)),B(b,n(m))}),o(f,l)}),c(i),c(t),c(r),de(i,s),o(e,r)}var Ie=async(e,a,s,r,t)=>{console.log("requesting midi access"),V(a,"pending");try{me(s.midi_state),await r()(s.midi_state),V(a,"success")}catch(i){console.error("failed to request midi access",i),V(a,"failure"),V(t,W(i.message))}},qe=d('<li class="svelte-13ivzsn"><small> </small></li>'),xe=d("<div><div>MIDI devices</div> <ul></ul></div>"),he=d("<span>no MIDI devices found, try again?</span>"),ke=d("<span>requesting MIDI access</span>"),Me=d("<span>failed to request MIDI access<!></span>"),De=d("connect MIDI &nbsp;<code>c</code>",1),we=d('<button type="button" class="big svelte-13ivzsn"><!></button>');function Fe(e,a){se(a,!0);const s=j(a,"request_access",3,be);let r=G("initial");const t=z(()=>a.midi_state.midi_access&&Array.from(a.midi_state.midi_access.inputs.values())),i=z(()=>{var b;return((b=n(t))==null?void 0:b.length)??0}),f=z(()=>n(i)>0||n(r)==="pending");let m=G(void 0);var l=we();l.__click=[Ie,r,a,s,m];var D=_(l);h(D,()=>a.midi_state.midi_access,b=>{var I=O(),C=S(I);h(C,()=>{var v;return(v=n(t))==null?void 0:v.length},v=>{var u=xe(),w=M(_(u),2);Q(w,21,()=>n(t),R,(q,g)=>{var x=qe(),L=_(x),E=_(L,!0);c(L),c(x),A(()=>B(E,n(g).name)),o(q,x)}),c(w),c(u),o(v,u)},v=>{var u=he();F(1,u,()=>U),o(v,u)}),o(b,I)},b=>{var I=O(),C=S(I);h(C,()=>n(r)==="pending",v=>{var u=ke();F(1,u,()=>U),o(v,u)},v=>{var u=O(),w=S(u);h(w,()=>n(r)==="failure",q=>{var g=Me(),x=M(_(g));h(x,()=>n(m),L=>{var E=Y();A(()=>B(E,`: ${n(m)??""}`)),o(L,E)}),c(g),F(1,g,()=>U),o(q,g)},q=>{var g=De();ne(),o(q,g)},!0),o(v,u)},!0),o(b,I)}),c(l),A(()=>{l.disabled=n(f),p(l,"title",a.midi_state.midi_access?"MIDI is ready!":"connect your MIDI device [c]")}),o(e,l),ie()}Z(["click"]);export{ze as I,Se as V,de as a,J as b,Fe as c,_e as i,Oe as l,be as r,T as s};
