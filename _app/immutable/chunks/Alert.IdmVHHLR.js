import{d as A,a as s,t as d,e as P,b as Q}from"./disclose-version.DbIX9lBU.js";import{a as R,f as u,p as S,c as v,r as _,t as b,g as r,s as T,d as l}from"./index-client.BoISVktJ.js";import{p as U,i as g}from"./props.Dc3VY8m1.js";import{a as q,b as z,c as B}from"./string.CP9_p8aN.js";const C={inform:{color:"var(--text_color_3)",icon:"✻"},help:{color:"var(--color_b_5)",icon:"➺"},error:{color:"var(--color_c_5)",icon:"!?"}};var V=d('<div class="icon svelte-tarwjh"><!></div>'),W=d('<!> <div class="content svelte-tarwjh"><!></div>',1),X=d("<button><!></button>"),Y=d("<div><!></div>");function at(D,t){R(t,!0);const h=o=>{var a=W(),e=u(a);{var n=f=>{var m=V(),L=v(m);{var M=i=>{var c=P();b(()=>Q(c,r(k))),s(i,c)},N=i=>{var c=A(),O=u(c);B(O,()=>t.icon,()=>r(k)),s(i,c)};g(L,i=>{!t.icon||typeof t.icon=="string"?i(M):i(N,!1)})}_(m),s(f,m)};g(e,f=>{t.icon!==null&&f(n)})}var y=T(e,2),K=v(y);B(K,()=>t.children),_(y),s(o,a)},E=U(t,"status",3,"inform"),x=l(()=>C[E()]),F=l(()=>r(x).color),G=l(()=>r(x).icon),j=l(()=>t.color??r(F)),k=l(()=>typeof t.icon=="string"?t.icon:r(G)??C.inform.icon);var w=A(),H=u(w);{var I=o=>{var a=X();let e;var n=v(a);h(n),_(a),b(()=>{e=q(a,e,{class:"message",type:"button",onclick:t.onclick,disabled:t.disabled,...t.attrs},"svelte-tarwjh"),z(a,"--text_color",r(j))}),s(o,a)},J=o=>{var a=Y();let e;var n=v(a);h(n),_(a),b(()=>{e=q(a,e,{role:"alert",class:"message panel",...t.attrs},"svelte-tarwjh"),z(a,"--text_color",r(j))}),s(o,a)};g(H,o=>{t.onclick?o(I):o(J,!1)})}s(D,w),S()}export{at as A};
