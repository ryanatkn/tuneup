import{a as c,t as k,c as p,s as ve,d as Se,e as Re,h as Ue}from"../chunks/disclose-version.BZ0CqQI7.js";import{C as he,D as We,B as Je,aA as Ye,K as Ze,J as Fe,L as He,U as Oe,p as H,t as f,a as O,c as v,s as h,r,g as t,d as u,f as R,am as Ke,j as K,_ as M,Y as xe,$ as Qe,u as ke,aB as we,a0 as Ve,n as Xe}from"../chunks/index-client.tYQFSbcU.js";import{i as L,p as B,a as pe}from"../chunks/props.BUAVstng.js";import{e as oe,s as U,i as de,b as y,t as X}from"../chunks/style.Hj4NPC1L.js";import{t as _e,u as $e,G as et,v as F,x as tt,y as at,g as Me,j as lt,n as ye,w as je,k as qe,i as st,s as G,A as ze}from"../chunks/index.RjCIe0pU.js";import{M as it,b as rt,P as nt,B as vt}from"../chunks/Back_Button.CWuhrikM.js";import{b as Be}from"../chunks/this.BTgI8tk9.js";import{p as _t}from"../chunks/string.Dn_jmF-S.js";import{L as ot}from"../chunks/Level_Stats_Summary.CVoiWGer.js";function Ie(b,e,s){he&&We();var m=b,n=Oe,o;Je(()=>{Ye(n,n=e())&&(o&&Ze(o),o=Fe(()=>s(m)))}),he&&(m=He)}var dt=k('<div class="level svelte-99rq2n" aria-hidden="true"></div>'),ct=k('<div class="level_progress_indicator svelte-99rq2n"><!> <div class="progress_bar" aria-label="level progress"></div></div>');function ut(b,e){H(e,!0);const s=(i,l,_,d)=>i==="complete"?"var(--lighten_5)":_[d]?l&&d===l.index?"var(--lighten_4)":"var(--lighten_2)":"transparent",m=u(()=>e.level.status==="complete"?1:e.level.trial?(e.level.trial.index+.5)/e.level.level_data.trial_count:0);var n=ct(),o=v(n);oe(o,17,()=>({length:e.level.level_data.trial_count}),de,(i,l,_)=>{var d=dt();f(()=>y(d,"background-color",s(e.level.status,e.level.trial,e.level.trials,_))),c(i,d)});var q=h(o,2);U(q,"aria-valuemin",0),U(q,"aria-valuemax",100),r(n),f(()=>{y(n,"--progress_bar_percent",t(m)),U(q,"aria-valuenow",Math.floor(t(m)*100))}),c(b,n),O()}var mt=k('<div class="trial svelte-1jf8emz" aria-hidden="true"></div>'),gt=k('<div class="trial_progress_indicator svelte-1jf8emz"><!> <div class="progress_bar svelte-1jf8emz" aria-label="trial progress"></div></div>');function ft(b,e){H(e,!0);const s=u(()=>e.level.trial?e.level.trial.presenting_index??e.level.trial.guessing_index:null),m=(i,l,_)=>i==="showing_failure_feedback"?"transparent":i==="complete"||i==="showing_success_feedback"?"var(--lighten_4)":l===_?"var(--lighten_3)":_!==null&&l<_?"var(--lighten_2)":"transparent",n=u(()=>{var i,l;return e.level.status==="initial"||e.level.status==="showing_failure_feedback"?0:e.level.status==="complete"||e.level.status==="showing_success_feedback"?1:((i=e.level.trial)==null?void 0:i.presenting_index)!=null?(e.level.trial.presenting_index+.5)/e.level.trial.sequence.length:((l=e.level.trial)==null?void 0:l.guessing_index)!=null?(e.level.trial.guessing_index+.5)/e.level.trial.sequence.length:0});var o=p(),q=R(o);L(q,()=>e.level.trial,i=>{var l=gt(),_=v(l);oe(_,17,()=>({length:e.level.trial.sequence.length}),de,(z,T,P)=>{var S=mt();f(()=>y(S,"background-color",m(e.level.status,P,t(s)))),c(z,S)});var d=h(_,2);U(d,"aria-valuemin",0),U(d,"aria-valuemax",100),r(l),f(()=>{y(l,"--progress_bar_percent",t(n)),U(d,"aria-valuenow",Math.floor(t(n)*100))}),_e(3,l,()=>$e),c(i,l)}),c(b,o),O()}var bt=k('<div class="burst-item svelte-zx8aeo"> </div>'),ht=k('<div class="burst svelte-zx8aeo"></div>');function Le(b,e){H(e,!0);const s=B(e,"duration",3,2e3),m=B(e,"x_radius",3,250),n=B(e,"y_radius",3,250),o=B(e,"scale_min",3,1),q=B(e,"scale_max",3,et),i=B(e,"hue_rotation_min",3,0),l=B(e,"hue_rotation_max",3,0),_=B(e,"start_rotation_min",3,0),d=B(e,"start_rotation_max",3,359),z=B(e,"end_rotation_min",3,0),T=B(e,"end_rotation_max",3,359);let P=M(!1),S;Ke(()=>(S=setTimeout(()=>K(P,!0),s()),()=>clearTimeout(S)));var W=p(),$=R(W);L($,()=>!t(P),ee=>{var I=ht();oe(I,21,()=>({length:e.count}),de,(Q,te)=>{var j=bt();f(()=>y(j,"--target_x",`${F(-m(),m())??""}px`)),f(()=>y(j,"--target_y",`${F(-n(),n())??""}px`)),f(()=>y(j,"--scale",tt(o(),q()))),f(()=>y(j,"--start_rotation",`${F(_(),d())??""}deg`)),f(()=>y(j,"--end_rotation",`${F(z(),T())??""}deg`)),f(()=>y(j,"--hue_rotation",`${F(i(),l())??""}deg`));var ae=v(j);f(()=>ve(ae,at(e.items))),r(j),c(Q,j)}),r(I),f(()=>y(I,"--animation_timer",`${s()??""}ms`)),c(ee,I)}),c(b,W),O()}const xt=(b,e,s)=>{b.target===t(e)&&s.level.retry_trial()};var kt=k('<div class="size_xl3 text_align_center">flawless run!</div>'),wt=k('<div class="size_xl3"> </div> <div> </div>',1),yt=(b,e)=>e.exit_level(),jt=(b,e)=>e.level.reset(),qt=k('<div class="completed_level_feedback svelte-16m1rsw"><div class="pane shadow_d_xl p_xl3 pt_0 box svelte-16m1rsw"><div class="box row"><div class="completed_header_icon svelte-16m1rsw">♫</div> <div class="completed_header_icon svelte-16m1rsw">♩<sup>♪</sup></div></div> <div class="panel p_md mb_md box w_100"><div class="panel p_md mb_md box"><!></div> <div class="panel p_md"><!></div></div> <button type="button" class="big mb_md">go back to the map &nbsp;<code>Space</code></button> <button type="button" class="big">replay level &nbsp;<code>r</code></button></div></div>'),zt=k('<div class="feedback_text_bursts svelte-16m1rsw"><div><!> <!></div></div>'),Bt=k('<!> <div class="level svelte-16m1rsw" aria-hidden="true"><div class="level_progress svelte-16m1rsw" title="level progress"><!></div> <div class="trial_progress svelte-16m1rsw" title="trial progress"><!></div> <div class="piano_wrapper svelte-16m1rsw"><!></div> <div class="feedback svelte-16m1rsw"><!> <!></div></div>',1);function It(b,e){H(e,!0);const s=Me(),m=lt();let n=M(void 0);const o=u(()=>e.level.level_data),q=u(()=>{var a;return(a=e.level.trial)==null?void 0:a.guessing_index}),i=u(()=>e.level.status==="presenting_prompt"?null:s.playing_notes),l=u(()=>e.level.trial&&new Set([e.level.trial.sequence[0]]));Ke(()=>{e.level.start()});const _=a=>{console.log("press note key",a),e.level.guess(a)};let d=M(0),z=M(null);const T=u(()=>e.level.status==="waiting_for_input"),P=u(()=>e.level.status==="showing_success_feedback"),S=u(()=>e.level.status==="showing_failure_feedback"),W=u(()=>e.level.status==="complete");xe(()=>{t(P)&&ke($)}),xe(()=>{t(S)&&ke(ee)});const $=()=>{we(d),K(z,"success"),j()},ee=()=>{we(d),K(z,"failure"),j()};let I=M(void 0),Q=M(0),te=M(0);const j=()=>{if(!t(I))return;const a=e.level.last_guess;if(a===null)return;const x=t(I).querySelector(`[data-note="${a}"]`);if(!x)return;const w=x.getBoundingClientRect();K(Q,pe(w.x)),K(te,w.y+w.height/2)},ae=u(()=>t(T)&&t(q)===0),ce=20;let le=M(void 0);const Te=a=>{if(!(st(a.target)||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey))switch(a.key){case"r":{G(a),e.level.reset();return}case" ":switch(e.level.status){case"complete":{G(a),e.exit_level();return}default:{G(a),e.level.retry_trial();return}}case"d":{G(a),e.level.guess_correctly();return}case"a":{G(a),e.level.guess_incorrectly();return}case"w":{G(a),e.level.win();return}}};var ue=Bt();Re("keydown",Qe,Te,!0);var me=R(ue);it(me,{get midi_access(){return s.midi_access},onnotestart:(a,x)=>{e.level.status==="complete"?ye(s,m(),a,je(s.volume,x),s.instrument):(console.log("guessing level.status",e.level.status),e.level.guess(a))},onnotestop:a=>{qe(a)}});var D=h(me,2);Be(D,a=>K(le,a),()=>t(le)),D.__click=[xt,le,e];var se=v(D),Pe=v(se);ut(Pe,{get level(){return e.level}}),r(se);var ie=h(se,2),Ae=v(ie);ft(Ae,{get level(){return e.level}}),r(ie);var J=h(ie,2);Be(J,a=>K(I,a),()=>t(I)),y(J,"padding",`${ce}px`);var Ne=v(J);L(Ne,()=>t(n),a=>{var x=u(()=>t(n)-ce*2),w=u(()=>{var g;return(g=e.level.trial)==null?void 0:g.valid_notes}),A=u(()=>e.level.status==="waiting_for_input"?g=>_(g):e.level.status==="complete"?g=>ye(s,m(),g,je(s.volume,null),s.instrument):void 0),N=u(()=>e.level.status==="complete"?g=>qe(g):void 0);nt(a,{get width(){return t(x)},get min_note(){return t(o).min_note},get max_note(){return t(o).max_note},get enabled_notes(){return t(w)},get pressed_keys(){return t(i)},get highlighted_keys(){return t(l)},get onpress(){return t(A)},get onrelease(){return t(N)}})}),r(J);var Y=h(J,2),ge=v(Y);L(ge,()=>t(W),a=>{var x=qt(),w=v(x),A=v(w),N=h(A,2),g=v(N),C=v(g);L(C,()=>e.level.mistakes===0,re=>{var V=kt();c(re,V)},re=>{var V=wt(),ne=R(V),Ee=v(ne);r(ne);var be=h(ne,2),Ge=v(be);f(()=>ve(Ge,`mistake${_t(e.level.mistakes)??""} this run`)),r(be),f(()=>ve(Ee,e.level.mistakes)),c(re,V)}),r(g);var E=h(g,2),Z=v(E);ot(Z,{get level_data(){return t(o)},get level_stats(){return e.level_stats}}),r(E),r(N);var fe=h(N,2);fe.__click=[yt,e];var De=h(fe,2);De.__click=[jt,e],r(w),r(x),_e(3,w,()=>ze),_e(1,A,()=>ze,()=>({duration:3e3})),c(a,x)});var Ce=h(ge,2);L(Ce,()=>t(z)!==null,a=>{var x=zt(),w=v(x),A=v(w);L(A,()=>t(z)==="success",g=>{var C=p(),E=R(C);Ie(E,()=>t(d),Z=>{Le(Z,{count:11,items:["🎵","🎶","🌸","🌻","🌼","🍀"]})}),c(g,C)});var N=h(A,2);L(N,()=>t(z)==="failure",g=>{var C=p(),E=R(C);Ie(E,()=>t(d),Z=>{Le(Z,{count:5,items:["🦜","⁉","❔","❌"]})}),c(g,C)}),r(w),r(x),f(()=>y(w,"transform",`translate3d(${t(Q)??""}px, ${t(te)??""}px, 0)`)),c(a,x)}),r(Y),r(D),f(()=>{X(D,"initial",t(ae)),X(Y,"success",t(P)),X(Y,"failure",t(S)),X(Y,"complete",t(W))}),rt(D,"clientWidth",a=>K(n,a)),c(b,ue),O()}Se(["click"]);var Lt=k('<div class="level svelte-1jfpjrg"><!></div>'),St=k('<div class="box h_100"><p>No level found, <button type="button">go back</button> to the map.</p></div>'),Kt=k('<main class="svelte-1jfpjrg"><!> <!></main>');function Rt(b,e){H(e,!0);const s=Me(),m=u(()=>{var i;return(i=s.selected_project_data)==null?void 0:i.level_stats});var n=Kt();Ue(i=>{Ve.title="Earbetter trainer level"});var o=v(n);vt(o,{get onclick(){return s.exit_level}});var q=h(o,2);L(q,()=>s.level&&t(m),i=>{var l=Lt(),_=v(l);It(_,{get level(){return s.level},get level_stats(){return t(m)},get exit_level(){return s.exit_level}}),r(l),c(i,l)},i=>{var l=St(),_=v(l),d=h(v(_));d.__click=function(...z){var T;(T=s.exit_level)==null||T.apply(this,z)},Xe(),r(_),r(l),c(i,l)}),r(n),c(b,n),O()}Se(["click"]);export{Rt as component};
