import{S as O,o as C,k as F,l as K,v as E,j as I,U as _,w as T,g,x as k,y as z,z as G,A as H,B as V,C as x,D as Z,H as $,E as J,F as Q,G as N,I as L,J as j,K as q,L as W,M as X,N as p,O as ee,P as re,Q as ne,R as te,T as ae,V as ie,u as fe,d as B,W as se,X as ue,m as le}from"./index-client.tN2euk7f.js";function S(a,c=null,P){if(typeof a!="object"||a===null||O in a)return a;const o=G(a);if(o!==C&&o!==F)return a;var s=new Map,l=H(a),v=E(0),d;return new Proxy(a,{defineProperty(n,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&K();var t=s.get(e);return t===void 0?(t=E(r.value),s.set(e,t)):I(t,S(r.value,d)),!0},deleteProperty(n,e){var r=s.get(e),t=r!==void 0?r.v!==_:e in n;return r!==void 0&&I(r,_),t&&M(v),t},get(n,e,r){var y;if(e===O)return a;var t=s.get(e),f=e in n;if(t===void 0&&(!f||(y=T(n,e))!=null&&y.writable)&&(t=E(S(f?n[e]:_,d)),s.set(e,t)),t!==void 0){var i=g(t);return i===_?void 0:i}return Reflect.get(n,e,r)},getOwnPropertyDescriptor(n,e){var r=Reflect.getOwnPropertyDescriptor(n,e);if(r&&"value"in r){var t=s.get(e);t&&(r.value=g(t))}else if(r===void 0){var f=s.get(e),i=f==null?void 0:f.v;if(f!==void 0&&i!==_)return{enumerable:!0,configurable:!0,value:i,writable:!0}}return r},has(n,e){var i;if(e===O)return!0;var r=s.get(e),t=r!==void 0&&r.v!==_||Reflect.has(n,e);if(r!==void 0||k!==null&&(!t||(i=T(n,e))!=null&&i.writable)){r===void 0&&(r=E(t?S(n[e],d):_),s.set(e,r));var f=g(r);if(f===_)return!1}return t},set(n,e,r,t){var w;var f=s.get(e),i=e in n;if(f===void 0?(!i||(w=T(n,e))!=null&&w.writable)&&(f=E(void 0),I(f,S(r,d)),s.set(e,f)):(i=f.v!==_,I(f,S(r,d))),l&&e==="length")for(var y=r;y<n.length;y+=1){var A=s.get(y+"");A!==void 0&&I(A,_)}var h=Reflect.getOwnPropertyDescriptor(n,e);if(h!=null&&h.set&&h.set.call(t,r),!i){if(l&&typeof e=="string"){var R=s.get("length");if(R!==void 0){var b=Number(e);Number.isInteger(b)&&b>=R.v&&I(R,b+1)}}M(v)}return!0},ownKeys(n){g(v);var e=Reflect.ownKeys(n).filter(f=>{var i=s.get(f);return i===void 0||i.v!==_});for(var[r,t]of s)t.v!==_&&!(r in n)&&e.push(r);return e},setPrototypeOf(){z()}})}function M(a,c=1){I(a,a.v+c)}function U(a){return a!==null&&typeof a=="object"&&O in a?a[O]:a}function ve(a,c){return Object.is(U(a),U(c))}function _e(a,c,P,o=null,s=!1){x&&Z();var l=a,v=null,d=null,n=null,e=s?X:0;V(()=>{if(n===(n=!!c()))return;let r=!1;if(x){const t=l.data===$;n===t&&(l=J(),Q(l),N(!1),r=!0)}n?(v?L(v):v=j(()=>P(l)),d&&q(d,()=>{d=null})):(d?L(d):o&&(d=j(()=>o(l))),v&&q(v,()=>{v=null})),r&&N(!0)},e),x&&(l=W)}function ce(a,c,P,o){var w;var s=(P&te)!==0,l=(P&ae)!==0,v=(P&ie)!==0,d=(P&ue)!==0,n=a[c],e=(w=T(a,c))==null?void 0:w.set,r=o,t=!0,f=()=>(d&&t&&(t=!1,r=fe(o)),r);n===void 0&&o!==void 0&&(e&&l&&p(),n=f(),e&&e(n));var i;if(l)i=()=>{var u=a[c];return u===void 0?f():(t=!0,u)};else{var y=(s?B:se)(()=>a[c]);y.f|=ee,i=()=>{var u=g(y);return u!==void 0&&(r=void 0),u===void 0?r:u}}if(!(P&re))return i;if(e){var A=a.$$legacy;return function(u,m){return arguments.length>0?((!l||!m||A)&&e(m?i():u),u):i()}}var h=!1,R=le(n),b=B(()=>{var u=i(),m=g(R);return h?(h=!1,m):R.v=u});return s||(b.equals=ne),function(u,m){var Y=g(b);if(arguments.length>0){const D=m?g(b):l&&v?S(u):u;return b.equals(D)||(h=!0,I(R,D),g(b)),u}return Y}}export{S as a,ve as b,_e as i,ce as p};