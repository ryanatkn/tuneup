import{h as ye,g as Je,l as Oe,U as Qe,c as v,s as l,a as u,t as k,r as n,d as le,f as G,b as ue,u as Ae,q as Ve,$ as Ye,v as pe,w as $e,n as et}from"../chunks/disclose-version.C5EwI3-V.js";import{x as tt,W as at,A as lt,z as rt,p as Q,t as c,a as V,g as t,d,H as Ne,R as Re,s as M,j as T,F as je,u as qe,X as ze}from"../chunks/index-client.Cqv4GYu1.js";import{i as L,p as z,a as ce}from"../chunks/props.DNuZbuIM.js";import{e as me,s as U,i as ge,b as y,t as ae}from"../chunks/style.BTM4hw-r.js";import{t as O,u as st,G as it,v as J,x as nt,y as vt,g as We,j as _t,n as Ie,w as Be,k as Se,i as ot,s as E,A as Le,B as Me}from"../chunks/index.CwT31mQy.js";import{M as dt,b as ct,P as ut,B as mt}from"../chunks/Back_Button.BO94UVdB.js";import{b as Te}from"../chunks/this.D7faLO31.js";import{p as gt}from"../chunks/string.Dn_jmF-S.js";import{L as ft}from"../chunks/Level_Stats_Summary.DFGdvGDj.js";function Ke(b,e,s){ye&&Je();var m=b,_=Qe,g;tt(()=>{at(_,_=e())&&(g&&lt(g),g=rt(()=>s(m)))}),ye&&(m=Oe)}var bt=k('<div class="level svelte-99rq2n" aria-hidden="true"></div>'),xt=k('<div class="level_progress_indicator svelte-99rq2n"><!> <div class="progress_bar" aria-label="level progress"></div></div>');function ht(b,e){Q(e,!0);const s=(i,r,o,x)=>i==="complete"?"var(--lighten_5)":o[x]?r&&x===r.index?"var(--lighten_4)":"var(--lighten_2)":"transparent",m=d(()=>e.level.status==="complete"?1:e.level.trial?(e.level.trial.index+.5)/e.level.level_data.trial_count:0);var _=xt(),g=v(_);me(g,65,()=>({length:e.level.level_data.trial_count}),ge,(i,r,o)=>{var x=bt();c(()=>y(x,"background-color",s(e.level.status,e.level.trial,e.level.trials,Ne(o)))),u(i,x)});var q=l(l(g,!0));U(q,"aria-valuemin",0),U(q,"aria-valuemax",100),c(()=>U(q,"aria-valuenow",Math.floor(t(m)*100))),n(_),c(()=>y(_,"--progress_bar_percent",t(m))),u(b,_),V()}var kt=k('<div class="trial svelte-1jf8emz" aria-hidden="true"></div>'),wt=k('<div class="trial_progress_indicator svelte-1jf8emz"><!> <div class="progress_bar svelte-1jf8emz" aria-label="trial progress"></div></div>');function yt(b,e){Q(e,!0);const s=d(()=>e.level.trial?e.level.trial.presenting_index??e.level.trial.guessing_index:null),m=(i,r,o)=>i==="showing_failure_feedback"?"transparent":i==="complete"||i==="showing_success_feedback"?"var(--lighten_4)":r===o?"var(--lighten_3)":o!==null&&r<o?"var(--lighten_2)":"transparent",_=d(()=>{var i,r;return e.level.status==="initial"||e.level.status==="showing_failure_feedback"?0:e.level.status==="complete"||e.level.status==="showing_success_feedback"?1:((i=e.level.trial)==null?void 0:i.presenting_index)!=null?(e.level.trial.presenting_index+.5)/e.level.trial.sequence.length:((r=e.level.trial)==null?void 0:r.guessing_index)!=null?(e.level.trial.guessing_index+.5)/e.level.trial.sequence.length:0});var g=le(),q=G(g);L(q,()=>e.level.trial,i=>{var r=wt(),o=v(r);me(o,65,()=>({length:e.level.trial.sequence.length}),ge,(C,K,I)=>{var P=kt();c(()=>y(P,"background-color",m(e.level.status,Ne(I),t(s)))),u(C,P)});var x=l(l(o,!0));U(x,"aria-valuemin",0),U(x,"aria-valuemax",100),c(()=>U(x,"aria-valuenow",Math.floor(t(_)*100))),n(r),c(()=>y(r,"--progress_bar_percent",t(_))),O(3,r,()=>st),u(i,r)}),u(b,g),V()}var jt=k('<div class="burst-item svelte-zx8aeo"> </div>'),qt=k('<div class="burst svelte-zx8aeo"></div>');function Pe(b,e){Q(e,!0);const s=z(e,"duration",3,2e3),m=z(e,"x_radius",3,250),_=z(e,"y_radius",3,250),g=z(e,"scale_min",3,1),q=z(e,"scale_max",3,it),i=z(e,"hue_rotation_min",3,0),r=z(e,"hue_rotation_max",3,0),o=z(e,"start_rotation_min",3,0),x=z(e,"start_rotation_max",3,359),C=z(e,"end_rotation_min",3,0),K=z(e,"end_rotation_max",3,359);let I=T(!1),P;Re(()=>(P=setTimeout(()=>M(I,!0),s()),()=>clearTimeout(P)));var D=le(),Y=G(D);L(Y,()=>!t(I),p=>{var N=qt();me(N,73,()=>({length:e.count}),ge,(re,F,se)=>{var j=jt();c(()=>y(j,"--target_x",`${J(-m(),m())??""}px`)),c(()=>y(j,"--target_y",`${J(-_(),_())??""}px`)),c(()=>y(j,"--scale",nt(g(),q()))),c(()=>y(j,"--start_rotation",`${J(o(),x())??""}deg`)),c(()=>y(j,"--end_rotation",`${J(C(),K())??""}deg`)),c(()=>y(j,"--hue_rotation",`${J(i(),r())??""}deg`));var $=v(j);c(()=>ue($,vt(e.items))),n(j),u(re,j)}),n(N),c(()=>y(N,"--animation_timer",`${s()??""}ms`)),u(p,N)}),u(b,D),V()}const zt=(b,e,s)=>{b.target===t(e)&&s.level.retry_trial()};var It=k('<div class="size_xl3 text_align_center">flawless run!</div>'),Bt=k('<div class="size_xl3"> </div> <div> </div>',1),St=(b,e)=>e.exit_level(),Lt=(b,e)=>e.level.reset(),Mt=k('<div class="completed_level_feedback svelte-16m1rsw"><div class="pane shadow_d_xl p_xl3 pt_0 box svelte-16m1rsw"><div class="box row"><div class="completed_header_icon svelte-16m1rsw">♫</div> <div class="completed_header_icon svelte-16m1rsw">♩<sup>♪</sup></div></div> <div class="panel p_md mb_md box w_100"><div class="panel p_md mb_md box"><!></div> <div class="panel p_md"><!></div></div> <button type="button" class="big mb_md">go back to the map &nbsp;<code>Space</code></button> <button type="button" class="big">replay level &nbsp;<code>r</code></button></div></div>'),Tt=k('<div class="feedback_text_bursts svelte-16m1rsw"><div><!> <!></div></div>'),Kt=k('<!> <div class="level svelte-16m1rsw" aria-hidden="true"><div class="level_progress svelte-16m1rsw" title="level progress"><!></div> <div class="trial_progress svelte-16m1rsw" title="trial progress"><!></div> <div class="piano_wrapper svelte-16m1rsw"><!></div> <div class="feedback svelte-16m1rsw"><!> <!></div></div>',1);function Pt(b,e){Q(e,!0);const s=We(),m=_t();let _=T(void 0);const g=d(()=>e.level),q=d(()=>{let{level_data:a}=t(g);return[a]}),i=d(()=>t(q)[0]),r=d(()=>{var a;return(a=e.level.trial)==null?void 0:a.guessing_index}),o=d(()=>e.level.status==="presenting_prompt"?null:s.playing_notes),x=d(()=>e.level.trial&&new Set([e.level.trial.sequence[0]]));Re(()=>{e.level.start()});const C=a=>{console.log("press note key",a),e.level.guess(a)};let K=T(0),I=T(null);const P=d(()=>e.level.status==="waiting_for_input"),D=d(()=>e.level.status==="showing_success_feedback"),Y=d(()=>e.level.status==="showing_failure_feedback"),p=d(()=>e.level.status==="complete");je(()=>{t(D)&&qe(N)}),je(()=>{t(Y)&&qe(re)});const N=()=>{ze(K),M(I,"success"),$()},re=()=>{ze(K),M(I,"failure"),$()};let F=T(void 0),se=T(0),j=T(0);const $=()=>{if(!t(F))return;const a=e.level.last_guess;if(a===null)return;const h=t(F).querySelector(`[data-note="${a}"]`);if(!h)return;const w=h.getBoundingClientRect();M(se,ce(w.x)),M(j,w.y+w.height/2)},Ee=d(()=>t(P)&&t(r)===0),fe=20;let ie=T(void 0);const Ge=a=>{if(!(ot(a.target)||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey))switch(a.key){case"r":{E(a),e.level.reset();return}case" ":switch(e.level.status){case"complete":{E(a),e.exit_level();return}default:{E(a),e.level.retry_trial();return}}case"d":{E(a),e.level.guess_correctly();return}case"a":{E(a),e.level.guess_incorrectly();return}case"w":{E(a),e.level.win();return}}};var be=Kt();Ve("keydown",Ye,Ge,!0);var xe=G(be);dt(xe,{get midi_access(){return s.midi_access},onnotestart:(a,h)=>{e.level.status==="complete"?Ie(s,m(),a,Be(s.volume,h),s.instrument):(console.log("guessing level.status",e.level.status),e.level.guess(a))},onnotestop:a=>{Se(a)}});var R=l(l(xe,!0));Te(R,a=>M(ie,ce(a)),()=>t(ie)),R.__click=[zt,ie,e];var ne=v(R),Ue=v(ne);ht(Ue,{get level(){return e.level}}),n(ne);var ve=l(l(ne,!0)),Ce=v(ve);yt(Ce,{get level(){return e.level}}),n(ve);var H=l(l(ve,!0));Te(H,a=>M(F,ce(a)),()=>t(F)),y(H,"padding",`${fe}px`);var De=v(H);L(De,()=>t(_),a=>{var h=d(()=>t(_)-fe*2),w=d(()=>{var f;return(f=e.level.trial)==null?void 0:f.valid_notes}),B=d(()=>e.level.status==="waiting_for_input"?f=>C(f):e.level.status==="complete"?f=>Ie(s,m(),f,Be(s.volume,null),s.instrument):void 0),W=d(()=>e.level.status==="complete"?f=>Se(f):void 0);ut(a,{get width(){return t(h)},get min_note(){return t(i).min_note},get max_note(){return t(i).max_note},get enabled_notes(){return t(w)},get pressed_keys(){return t(o)},get highlighted_keys(){return t(x)},get onpress(){return t(B)},get onrelease(){return t(W)}})}),n(H);var X=l(l(H,!0)),he=v(X);L(he,()=>t(p),a=>{var h=Mt(),w=v(h),B=v(w),W=v(B),f=l(l(W,!0));l(v(f)),n(f),n(B);var S=l(l(B,!0)),A=v(S),Z=v(A);L(Z,()=>e.level.mistakes===0,oe=>{var te=It();u(oe,te)},oe=>{var te=Bt(),de=G(te),Xe=v(de);n(de);var we=l(l(de,!0)),Ze=v(we);c(()=>ue(Ze,`mistake${gt(e.level.mistakes)??""} this run`)),n(we),c(()=>ue(Xe,e.level.mistakes)),u(oe,te)}),n(A);var ke=l(l(A,!0)),He=v(ke);ft(He,{get level_data(){return t(i)},get level_stats(){return e.level_stats}}),n(ke),n(S);var ee=l(l(S,!0));ee.__click=[St,e],l(v(ee)),n(ee);var _e=l(l(ee,!0));_e.__click=[Lt,e],l(v(_e)),n(_e),n(w),n(h),O(3,w,()=>Le),O(1,B,()=>Le,()=>({duration:3e3})),O(1,W,()=>Me,()=>({duration:4e3,x:-200})),O(1,f,()=>Me,()=>({duration:4e3,x:200})),u(a,h)});var Fe=l(l(he,!0));L(Fe,()=>t(I)!==null,a=>{var h=Tt(),w=v(h),B=v(w);L(B,()=>t(I)==="success",f=>{var S=le(),A=G(S);Ke(A,()=>t(K),Z=>{Pe(Z,{count:11,items:["🎵","🎶","🌸","🌻","🌼","🍀"]})}),u(f,S)});var W=l(l(B,!0));L(W,()=>t(I)==="failure",f=>{var S=le(),A=G(S);Ke(A,()=>t(K),Z=>{Pe(Z,{count:5,items:["🦜","⁉","❔","❌"]})}),u(f,S)}),n(w),n(h),c(()=>y(w,"transform",`translate3d(${t(se)??""}px, ${t(j)??""}px, 0)`)),u(a,h)}),n(X),n(R),c(()=>{ae(R,"initial",t(Ee)),ae(X,"success",t(D)),ae(X,"failure",t(Y)),ae(X,"complete",t(p))}),ct(R,"clientWidth",a=>M(_,a)),u(b,be),V()}Ae(["click"]);var At=k('<div class="level svelte-1jfpjrg"><!></div>'),Nt=k('<div class="box h_100"><p>No level found, <button type="button">go back</button> to the map.</p></div>'),Rt=k('<main class="svelte-1jfpjrg"><!> <!></main>');function Zt(b,e){Q(e,!0);const s=We(),m=d(()=>{var i;return(i=s.selected_project_data)==null?void 0:i.level_stats});var _=Rt();pe(i=>{$e.title="Earbetter trainer level"});var g=v(_);mt(g,{get onclick(){return s.exit_level}});var q=l(l(g,!0));L(q,()=>s.level&&t(m),i=>{var r=At(),o=v(r);Pt(o,{get level(){return s.level},get level_stats(){return t(m)},get exit_level(){return s.exit_level}}),n(r),u(i,r)},i=>{var r=Nt(),o=v(r),x=l(v(o));x.__click=s.exit_level,et(),n(o),n(r),u(i,r)}),n(_),u(b,_),V()}Ae(["click"]);export{Zt as component};