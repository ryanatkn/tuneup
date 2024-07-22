var ge=Object.defineProperty;var be=(a,e,t)=>e in a?ge(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var oe=(a,e,t)=>(be(a,typeof e!="symbol"?e+"":e,t),t),p=(a,e,t)=>{if(!e.has(a))throw TypeError("Cannot "+t)};var H=(a,e,t)=>(p(a,e,"read from private field"),t?t.call(a):e.get(a)),U=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)},$=(a,e,t,o)=>(p(a,e,"write to private field"),o?o.call(a,t):e.set(a,t),t);var ue=(a,e,t)=>(p(a,e,"access private method"),t);import{e as ke,u as ve,p as R,g as c,t as X,a as V,d as w,s as ee,j as ye,H as P,G as me,F as we}from"./index-client.Cqv4GYu1.js";import{u as _e,c as ie,e as xe,b as Te,a as M,d as se,f as ce,r as J,q as Y,t as G,$ as te}from"./disclose-version.C5EwI3-V.js";import{c as re,s as j,t as B,b as I,e as Ee}from"./style.BTM4hw-r.js";import{p as m,i as q}from"./props.DNuZbuIM.js";import{C as he,s as de,E as ne,F as Me,a as ze,b as Le,H as He}from"./index.CwT31mQy.js";var A,D,F,O,fe;const Q=class Q{constructor(e){U(this,O);U(this,A,new WeakMap);U(this,D,void 0);U(this,F,void 0);$(this,F,e)}observe(e,t){var o=H(this,A).get(e)||new Set;return o.add(t),H(this,A).set(e,o),ue(this,O,fe).call(this).observe(e,H(this,F)),()=>{var g=H(this,A).get(e);g.delete(t),g.size===0&&(H(this,A).delete(e),H(this,D).unobserve(e))}}};A=new WeakMap,D=new WeakMap,F=new WeakMap,O=new WeakSet,fe=function(){return H(this,D)??$(this,D,new ResizeObserver(e=>{for(var t of e){Q.entries.set(t.target,t);for(var o of H(this,A).get(t.target)||[])o(t)}}))},oe(Q,"entries",new WeakMap);let le=Q;var Se=new le({box:"border-box"});function Ve(a,e,t){var o=Se.observe(a,()=>t(a[e]));ke(()=>(ve(()=>t(a[e])),o))}const Be=(a,e)=>{let t=a.previousSibling;for(;t;){if(e(t))return t;t=t.previousSibling}return null},Ae=(a,e)=>{let t=a.nextSibling;for(;t;){if(e(t))return t;t=t.nextSibling}return null};var Ie=G("C4",1),Ke=G('<div class="middle_c svelte-gdrax4"><!></div>'),Pe=G('<button type="button" class="piano_key svelte-gdrax4"><!></button>');function De(a,e){R(e,!0);const t=m(e,"clickable",3,!0),o=m(e,"enabled",3,!0),g=m(e,"pressed",3,!1),_=m(e,"highlighted",3,!1),b=m(e,"emphasized",3,!1),r=m(e,"middle_c_label",3,!0),u=m(e,"allow_sticking",3,!1),y=w(()=>he.has(e.note)),x=w(()=>!c(y)),h=w(()=>e.note===60),k=i=>{const n=Be(i,l=>l instanceof HTMLButtonElement);n==null||n.focus()},z=i=>{const n=Ae(i,l=>l instanceof HTMLButtonElement);n==null||n.focus()},T=i=>{var l;const{key:n}=i;switch(n){case" ":case"Enter":{de(i),(l=e.onpress)==null||l.call(e,e.note),i.currentTarget.focus();break}case"ArrowLeft":{k(i.currentTarget);break}case"ArrowRight":{z(i.currentTarget);break}}},E=i=>{var l;const{key:n}=i;switch(n){case" ":case"Enter":{de(i),(l=e.onrelease)==null||l.call(e,e.note);break}}},f=w(()=>t()&&o());var s=Pe();s.__keydown=function(...i){const n=c(f)?T:void 0;return n==null?void 0:n.apply(this,i)},s.__keyup=function(...i){const n=c(f)?E:void 0;return n==null?void 0:n.apply(this,i)},s.__mousedown=function(...i){const n=c(f)?l=>{var v;(v=e.onpress)==null||v.call(e,e.note),l.currentTarget.focus()}:void 0;return n==null?void 0:n.apply(this,i)},s.__mouseup=function(...i){const n=c(f)?()=>{var l;(l=e.onrelease)==null||l.call(e,e.note)}:void 0;return n==null?void 0:n.apply(this,i)},s.__focusout=function(...i){const n=c(f)&&!u()?()=>{var l;(l=e.onrelease)==null||l.call(e,e.note)}:void 0;return n==null?void 0:n.apply(this,i)};var d=ie(s);q(d,()=>c(h)&&r(),i=>{var n=Ke(),l=ie(n);q(l,()=>typeof r()=="string",v=>{var L=xe();X(()=>Te(L,r())),M(v,L)},v=>{var L=se(),Z=ce(L);q(Z,()=>typeof r()=="boolean",N=>{var K=Ie();M(N,K)},N=>{var K=se(),C=ce(K);re(C,r),M(N,K)},!0),M(v,L)}),J(n),M(i,n)}),J(s),X(()=>{j(s,"tabindex",c(f)?void 0:-1),j(s,"aria-label",`piano key for midi ${e.note??""}`),j(s,"data-note",e.note),B(s,"natural",c(y)),B(s,"accidental",c(x)),B(s,"disabled",!o()),B(s,"clickable",c(f)),B(s,"active",g()),B(s,"highlighted",_()),B(s,"emphasized",b()),I(s,"left",`${e.left_offset??""}px`)}),Y("mouseenter",s,function(...i){const n=c(f)&&e.pressing_any?l=>{var v;(v=e.onpress)==null||v.call(e,e.note),l.currentTarget.focus()}:void 0;return n==null?void 0:n.apply(this,i)},!1),Y("mouseleave",s,function(...i){const n=c(f)?()=>{var l;(l=e.onrelease)==null||l.call(e,e.note)}:void 0;return n==null?void 0:n.apply(this,i)},!1),M(a,s),V()}_e(["keydown","keyup","mousedown","mouseup","focusout"]);const Ge=5,Ne=7/12,Ue=.7,ae={1:0,2:-3/5,3:0,4:-2/5,5:0,6:0,7:-2/3,8:0,9:-1/2,10:0,11:-1/3,12:0},We=(a,e,t,o=500)=>{const g=Math.abs(ae[ne[e]]);let _=Math.abs(ae[ne[t]]);_&&(_=1-_);const b=t-e+1;if(b<=0)return{piano_keys:[],natural_key_height:o,natural_key_width:0,accidental_key_height:0,accidental_key_width:0};const r=Me(e,t),u=a/(r.length+(g+_))|0,y=u*Ne|0,x=Math.min(o,y*Ge)|0,h=x*Ue|0;let k=0;const z=[];for(let T=0;T<b;T++){const E=T+e;let f,s,d;he.has(E)?(f=u,s=x,d=k*u+g*y,k++):(f=y,s=h,d=k*u+ae[ne[E]]*y+g*y),z.push({note:E,left_offset:d,width:f,height:s})}return{piano_keys:z,natural_key_height:x,natural_key_width:u,accidental_key_height:h,accidental_key_width:y}};var Ye=G('<div class="piano svelte-d5674k"></div>');function Ze(a,e){R(e,!0);const t=m(e,"max_height",11,()=>{}),o=m(e,"min_note",3,ze),g=m(e,"max_note",3,Le),_=m(e,"enabled_notes",3,null),b=m(e,"pressed_keys",3,null),r=m(e,"highlighted_keys",3,null),u=m(e,"emphasized_keys",3,null),y=m(e,"clickable",3,!0),x=w(()=>We(e.width,o(),g(),t())),h=w(()=>{let{piano_keys:i,natural_key_width:n,natural_key_height:l,accidental_key_width:v,accidental_key_height:L}=c(x);return[i,n,l,v,L]}),k=w(()=>c(h)[0]),z=w(()=>c(h)[1]),T=w(()=>c(h)[2]),E=w(()=>c(h)[3]),f=w(()=>c(h)[4]);let s=ye(!1);var d=Ye();Y("mousedown",te,()=>ee(s,!0),!0),Y("mouseup",te,()=>ee(s,!1),!0),Y("mouseleave",te,()=>ee(s,!1),!1),Ee(d,77,()=>c(k),(i,n)=>P(P(i)).note,(i,n,l)=>{let v=()=>P(P(n)).note,L=()=>P(P(n)).left_offset;var Z=w(()=>!_()||_().has(v())),N=w(()=>{var S;return(S=b())==null?void 0:S.has(v())}),K=w(()=>{var S;return(S=r())==null?void 0:S.has(v())}),C=w(()=>{var S;return(S=u())==null?void 0:S.has(v())});De(i,{get note(){return v()},get left_offset(){return L()},get clickable(){return y()},get enabled(){return c(Z)},get pressed(){return c(N)},get highlighted(){return c(K)},get emphasized(){return c(C)},get middle_c_label(){return e.middle_c_label},get allow_sticking(){return e.allow_sticking},get pressing_any(){return c(s)},get onpress(){return e.onpress},get onrelease(){return e.onrelease}})}),J(d),X(()=>{j(d,"aria-disabled",!y()),B(d,"disabled",!y()),I(d,"width",`${e.width??""}px`),I(d,"height",`${c(T)??""}px`),I(d,"--piano_natural_key_width",`${c(z)??""}px`),I(d,"--piano_natural_key_height",`${c(T)??""}px`),I(d,"--piano_accidental_key_width",`${c(E)??""}px`),I(d,"--piano_accidental_key_height",`${c(f)??""}px`)}),M(a,d),V()}var W=(a=>(a[a.Stop=8]="Stop",a[a.Start=9]="Start",a[a.Knob=11]="Knob",a[a.PitchBend=14]="PitchBend",a))(W||{});function Ce(a,e){R(e,!0);const t=console.log.bind(console),o=r=>{var z,T,E,f,s,d,i;const u=He(r),{command:y,channel:x,note:h,velocity:k}=u;switch(t("midimessage",y,u),y){case W.Stop:{x===0?(z=e.onnotestop)==null||z.call(e,h,k):x===9?(T=e.onpadstop)==null||T.call(e,h,k):t("unknown MIDI stop command",u);break}case W.Start:{x===0?k===0?(E=e.onnotestop)==null||E.call(e,h,k):(f=e.onnotestart)==null||f.call(e,h,k):x===9?k===0?(s=e.onpadstop)==null||s.call(e,h,k):(d=e.onpadstart)==null||d.call(e,h,k):t("unknown MIDI start command",u);break}case W.Knob:{h===1?(i=e.onmodwheel)==null||i.call(e,k):t("unknown MIDI knob command",u);break}case W.PitchBend:{t("unhandled MIDI pitch bend",u);break}default:t("unrecognized MIDI command",u)}},g=[],_=()=>{for(const r of g)r();g.length=0};me(_);const b=r=>{if(g.length&&_(),!!r)for(const u of r.inputs.values())u.addEventListener("midimessage",o),g.push(()=>{u.removeEventListener("midimessage",o)})};we(()=>b(e.midi_access)),V()}var je=G("←",1),Fe=G('<button type="button" class="icon_button plain_button svelte-1gk9bl5"><!></button>');function pe(a,e){R(e,!0);const t=m(e,"title",3,"go back");var o=Fe();o.__click=function(..._){const b=e.onclick;return b==null?void 0:b.apply(this,_)};var g=ie(o);q(g,()=>e.children,_=>{var b=se(),r=ce(b);re(r,()=>e.children),M(_,b)},_=>{var b=je();M(_,b)}),J(o),X(()=>j(o,"title",t())),M(a,o),V()}_e(["click"]);export{pe as B,Ce as M,Ze as P,Ve as b};