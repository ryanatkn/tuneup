function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_app/immutable/nodes/0.5_iLkVzo.js","_app/immutable/chunks/disclose-version.C5EwI3-V.js","_app/immutable/chunks/index-client.Cqv4GYu1.js","_app/immutable/chunks/props.DNuZbuIM.js","_app/immutable/chunks/style.BTM4hw-r.js","_app/immutable/chunks/stores.DfClaHUM.js","_app/immutable/chunks/entry.nfH6CHmd.js","_app/immutable/chunks/index.CwT31mQy.js","_app/immutable/chunks/Dialog.BQJphxn6.js","_app/immutable/chunks/this.D7faLO31.js","_app/immutable/assets/Dialog.B3STp2O0.css","_app/immutable/chunks/Init_Midi_Button.dCbANCj0.js","_app/immutable/assets/Init_Midi_Button.C6cU80G8.css","_app/immutable/chunks/Footer.D3z4EzVS.js","_app/immutable/assets/Footer.C5UvJ2ib.css","_app/immutable/chunks/string.Dn_jmF-S.js","_app/immutable/assets/0.B7liyTDj.css","_app/immutable/nodes/1.DVkYmyEV.js","_app/immutable/nodes/2.BwkvqggZ.js","_app/immutable/chunks/Header.CtmPjt1F.js","_app/immutable/assets/Header.DDofPb0C.css","_app/immutable/assets/2.zNDGydlQ.css","_app/immutable/nodes/3.BMC7MPa4.js","_app/immutable/chunks/Back_Button.BO94UVdB.js","_app/immutable/assets/Back_Button.DfaSSV_z.css","_app/immutable/chunks/Alert.BnMwJceV.js","_app/immutable/assets/Alert.LQgBNiea.css","_app/immutable/assets/3.DdH6XdN6.css","_app/immutable/nodes/4.BO1v1lMN.js","_app/immutable/chunks/Level_Stats_Summary.DFGdvGDj.js","_app/immutable/assets/Level_Stats_Summary.DF9Dba8C.css","_app/immutable/assets/4.CD6OURcv.css","_app/immutable/nodes/5.DK2DSFWL.js","_app/immutable/assets/5.CbJZYwfl.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var V=(n,t,r)=>{if(!t.has(n))throw TypeError("Cannot "+r)};var c=(n,t,r)=>(V(n,t,"read from private field"),r?r.call(n):t.get(n)),L=(n,t,r)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,r)},A=(n,t,r,o)=>(V(n,t,"write to private field"),o?o.call(n,r):t.set(n,r),r);import{x as W,z as G,A as H,g as R,s as k,h as J,m as K,p as M,Q as N,F as X,R as Y,a as Z,T as $,j as O,t as tt}from"../chunks/index-client.Cqv4GYu1.js";import{h as j,g as et,l as rt,L as st,M as nt,N as ot,f as P,d as T,a as b,s as B,t as U,c as at,e as it,b as ct,r as lt}from"../chunks/disclose-version.C5EwI3-V.js";import{p,i as C,a as ut}from"../chunks/props.DNuZbuIM.js";import{b as D}from"../chunks/this.D7faLO31.js";function I(n,t,r){j&&et();var o=n,a,e;W(()=>{a!==(a=t())&&(e&&(H(e),e=null),a&&(e=G(()=>r(o,a))))}),j&&(o=rt)}function dt(n){return class extends ft{constructor(t){super({component:n,...t})}}}var m,d;class ft{constructor(t){L(this,m,void 0);L(this,d,void 0);var r=new Map,o=(e,s)=>{var l=K(s);return r.set(e,l),l};const a=new Proxy({...t.props||{},$$events:{}},{get(e,s){return R(r.get(s)??o(s,Reflect.get(e,s)))},has(e,s){return R(r.get(s)??o(s,Reflect.get(e,s))),Reflect.has(e,s)},set(e,s,l){return k(r.get(s)??o(s,l),l),Reflect.set(e,s,l)}});A(this,d,(t.hydrate?st:nt)(t.component,{target:t.target,props:a,context:t.context,intro:t.intro??!1,recover:t.recover})),A(this,m,a.$$events);for(const e of Object.keys(c(this,d)))e==="$set"||e==="$destroy"||e==="$on"||J(this,e,{get(){return c(this,d)[e]},set(s){c(this,d)[e]=s},enumerable:!0});c(this,d).$set=e=>{Object.assign(a,e)},c(this,d).$destroy=()=>{ot(c(this,d))}}$set(t){c(this,d).$set(t)}$on(t,r){c(this,m)[t]=c(this,m)[t]||[];const o=(...a)=>r.call(this,...a);return c(this,m)[t].push(o),()=>{c(this,m)[t]=c(this,m)[t].filter(a=>a!==o)}}$destroy(){c(this,d).$destroy()}}m=new WeakMap,d=new WeakMap;const _t="modulepreload",ht=function(n){return"/"+n},q={},E=function(t,r,o){let a=Promise.resolve();if(r&&r.length>0){const e=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.all(r.map(u=>{if(u=ht(u),u in q)return;q[u]=!0;const v=u.endsWith(".css"),w=v?'[rel="stylesheet"]':"";if(!!o)for(let f=e.length-1;f>=0;f--){const h=e[f];if(h.href===u&&(!v||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${w}`))return;const i=document.createElement("link");if(i.rel=v?"stylesheet":_t,v||(i.as="script",i.crossOrigin=""),i.href=u,l&&i.setAttribute("nonce",l),document.head.appendChild(i),v)return new Promise((f,h)=>{i.addEventListener("load",f),i.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${u}`)))})}))}return a.then(()=>t()).catch(e=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=e,window.dispatchEvent(s),!s.defaultPrevented)throw e})},kt={};var mt=U('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),vt=U("<!> <!>",1);function gt(n,t){M(t,!0);let r=p(t,"components",15,()=>[]),o=p(t,"data_0",3,null),a=p(t,"data_1",3,null);N(()=>t.stores.page.set(t.page)),X(()=>{t.stores,t.page,t.constructors,r(),t.form,o(),a(),t.stores.page.notify()});let e=O(!1),s=O(!1),l=O(null);Y(()=>{const g=t.stores.page.subscribe(()=>{R(e)&&(k(s,!0),$().then(()=>{k(l,ut(document.title||"untitled page"))}))});return k(e,!0),g});var u=vt(),v=P(u);C(v,()=>t.constructors[1],g=>{var i=T(),f=P(i);I(f,()=>t.constructors[0],(h,y)=>{D(y(h,{get data(){return o()},children:(_,yt)=>{var S=T(),z=P(S);I(z,()=>t.constructors[1],(F,Q)=>{D(Q(F,{get data(){return a()},get form(){return t.form}}),x=>r()[1]=x,()=>{var x;return(x=r())==null?void 0:x[1]})}),b(_,S)},$$slots:{default:!0}}),_=>r()[0]=_,()=>{var _;return(_=r())==null?void 0:_[0]})}),b(g,i)},g=>{var i=T(),f=P(i);I(f,()=>t.constructors[0],(h,y)=>{D(y(h,{get data(){return o()},get form(){return t.form}}),_=>r()[0]=_,()=>{var _;return(_=r())==null?void 0:_[0]})}),b(g,i)});var w=B(B(v,!0));C(w,()=>R(e),g=>{var i=mt(),f=at(i);C(f,()=>R(s),h=>{var y=it();tt(()=>ct(y,R(l))),b(h,y)}),lt(i),b(g,i)}),b(n,u),Z()}const wt=dt(gt),Lt=[()=>E(()=>import("../nodes/0.5_iLkVzo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])),()=>E(()=>import("../nodes/1.DVkYmyEV.js"),__vite__mapDeps([17,1,2,5,6])),()=>E(()=>import("../nodes/2.BwkvqggZ.js"),__vite__mapDeps([18,1,2,4,6,19,13,3,5,14,20,21])),()=>E(()=>import("../nodes/3.BMC7MPa4.js"),__vite__mapDeps([22,1,2,3,4,23,7,6,24,11,12,19,13,5,14,20,25,26,27])),()=>E(()=>import("../nodes/4.BO1v1lMN.js"),__vite__mapDeps([28,1,2,6,19,13,4,3,5,14,20,7,11,12,23,24,9,8,10,25,26,15,29,30,31])),()=>E(()=>import("../nodes/5.DK2DSFWL.js"),__vite__mapDeps([32,1,2,3,4,7,6,23,24,9,15,29,30,33]))],At=[],Ot={"/":[2],"/piano":[3],"/trainer":[4],"/trainer/level":[5]},Tt={handleError:({error:n})=>{console.error(n)},reroute:()=>{}};export{Ot as dictionary,Tt as hooks,kt as matchers,Lt as nodes,wt as root,At as server_loads};