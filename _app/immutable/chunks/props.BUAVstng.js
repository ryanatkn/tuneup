import{S as A,o as F,k as K,l as h,v as k,j as I,w as T,U as _,g as b,x as z,y as G,z as H,A as V,B as Z,C as N,D as $,H as J,E as Q,F as W,G as L,I as j,J as q,K as B,L as X,M as p,N as ee,O as re,P as ne,Q as te,R as ae,T as fe,V as ie,u as se,d as M,W as ue,X as le,m as de}from"./index-client.tYQFSbcU.js";function O(t,o=null,g){if(typeof t!="object"||t===null||A in t)return t;const y=H(t);if(y!==F&&y!==K)return t;var f=new Map,u=V(t),c=h(0);u&&f.set("length",h(t.length));var v;return new Proxy(t,{defineProperty(n,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&k();var a=f.get(e);return a===void 0?(a=h(r.value),f.set(e,a)):I(a,O(r.value,v)),!0},deleteProperty(n,e){var r=f.get(e);return r===void 0?e in n&&f.set(e,h(_)):(I(r,_),U(c)),!0},get(n,e,r){var l;if(e===A)return t;var a=f.get(e),i=e in n;if(a===void 0&&(!i||(l=T(n,e))!=null&&l.writable)&&(a=h(O(i?n[e]:_,v)),f.set(e,a)),a!==void 0){var s=b(a);return s===_?void 0:s}return Reflect.get(n,e,r)},getOwnPropertyDescriptor(n,e){var r=Reflect.getOwnPropertyDescriptor(n,e);if(r&&"value"in r){var a=f.get(e);a&&(r.value=b(a))}else if(r===void 0){var i=f.get(e),s=i==null?void 0:i.v;if(i!==void 0&&s!==_)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(n,e){var s;if(e===A)return!0;var r=f.get(e),a=r!==void 0&&r.v!==_||Reflect.has(n,e);if(r!==void 0||z!==null&&(!a||(s=T(n,e))!=null&&s.writable)){r===void 0&&(r=h(a?O(n[e],v):_),f.set(e,r));var i=b(r);if(i===_)return!1}return a},set(n,e,r,a){var P;var i=f.get(e),s=e in n;if(u&&e==="length")for(var l=r;l<i.v;l+=1){var R=f.get(l+"");R!==void 0?I(R,_):l in n&&(R=h(_),f.set(l+"",R))}i===void 0?(!s||(P=T(n,e))!=null&&P.writable)&&(i=h(void 0),I(i,O(r,v)),f.set(e,i)):(s=i.v!==_,I(i,O(r,v)));var S=Reflect.getOwnPropertyDescriptor(n,e);if(S!=null&&S.set&&S.set.call(a,r),!s){if(u&&typeof e=="string"){var w=f.get("length"),m=Number(e);Number.isInteger(m)&&m>=w.v&&I(w,m+1)}U(c)}return!0},ownKeys(n){b(c);var e=Reflect.ownKeys(n).filter(i=>{var s=f.get(i);return s===void 0||s.v!==_});for(var[r,a]of f)a.v!==_&&!(r in n)&&e.push(r);return e},setPrototypeOf(){G()}})}function U(t,o=1){I(t,t.v+o)}function Y(t){return t!==null&&typeof t=="object"&&A in t?t[A]:t}function _e(t,o){return Object.is(Y(t),Y(o))}function ce(t,o,g,y=null,f=!1){N&&$();var u=t,c=null,v=null,n=null,e=f?p:0;Z(()=>{if(n===(n=!!o()))return;let r=!1;if(N){const a=u.data===J;n===a&&(u=Q(),W(u),L(!1),r=!0)}n?(c?j(c):c=q(()=>g(u)),v&&B(v,()=>{v=null})):(v?j(v):y&&(v=q(()=>y(u))),c&&B(c,()=>{c=null})),r&&L(!0)},e),N&&(u=X)}function oe(t,o,g,y){var x;var f=(g&ae)!==0,u=(g&fe)!==0,c=(g&ie)!==0,v=(g&le)!==0,n=t[o],e=(x=T(t,o))==null?void 0:x.set,r=y,a=!0,i=!1,s=()=>(i=!0,a&&(a=!1,v?r=se(y):r=y),r);n===void 0&&y!==void 0&&(e&&u&&ee(),n=s(),e&&e(n));var l;if(u)l=()=>{var d=t[o];return d===void 0?s():(a=!0,i=!1,d)};else{var R=(f?M:ue)(()=>t[o]);R.f|=re,l=()=>{var d=b(R);return d!==void 0&&(r=void 0),d===void 0?r:d}}if(!(g&ne))return l;if(e){var S=t.$$legacy;return function(d,E){return arguments.length>0?((!u||!E||S)&&e(E?l():d),d):l()}}var w=!1,m=de(n),P=M(()=>{var d=l(),E=b(m);return w?(w=!1,E):m.v=d});return f||(P.equals=te),function(d,E){var C=b(P);if(arguments.length>0){const D=E?b(P):u&&c?O(d):d;return P.equals(D)||(w=!0,I(m,D),i&&r!==void 0&&(r=D),b(P)),d}return C}}export{O as a,_e as b,ce as i,oe as p};
