var Hg=Object.defineProperty;var Gg=(i,e,t)=>e in i?Hg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var za=(i,e,t)=>(Gg(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Dt(){}const Wg=i=>i;function ni(i,e){for(const t in e)i[t]=e[t];return i}function Qh(i){return i()}function fu(){return Object.create(null)}function kn(i){i.forEach(Qh)}function Js(i){return typeof i=="function"}function Ke(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}let uo;function ta(i,e){return i===e?!0:(uo||(uo=document.createElement("a")),uo.href=e,i===uo.href)}function Xg(i){return Object.keys(i).length===0}function Mc(i,...e){if(i==null){for(const n of e)n(void 0);return Dt}const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function xn(i){let e;return Mc(i,t=>e=t)(),e}function Kt(i,e,t){i.$$.on_destroy.push(Mc(e,t))}function _t(i,e,t,n){if(i){const r=ep(i,e,t,n);return i[0](r)}}function ep(i,e,t,n){return i[1]&&n?ni(t.ctx.slice(),i[1](n(e))):t.ctx}function vt(i,e,t,n){if(i[2]&&n){const r=i[2](n(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function xt(i,e,t,n,r,s){if(r){const o=ep(e,t,n,s);i.p(o,r)}}function yt(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Bs(i){const e={};for(const t in i)t[0]!=="$"&&(e[t]=i[t]);return e}function du(i,e){const t={};e=new Set(e);for(const n in i)!e.has(n)&&n[0]!=="$"&&(t[n]=i[n]);return t}function is(i){return i&&Js(i.destroy)?i.destroy:Dt}const tp=typeof window<"u";let jg=tp?()=>window.performance.now():()=>Date.now(),Sc=tp?i=>requestAnimationFrame(i):Dt;const Vr=new Set;function np(i){Vr.forEach(e=>{e.c(i)||(Vr.delete(e),e.f())}),Vr.size!==0&&Sc(np)}function $g(i){let e;return Vr.size===0&&Sc(np),{promise:new Promise(t=>{Vr.add(e={c:i,f:t})}),abort(){Vr.delete(e)}}}function Ue(i,e){i.appendChild(e)}function ip(i){if(!i)return document;const e=i.getRootNode?i.getRootNode():i.ownerDocument;return e&&e.host?e:i.ownerDocument}function Yg(i){const e=Fe("style");return e.textContent="/* empty */",qg(ip(i),e),e.sheet}function qg(i,e){return Ue(i.head||i,e),e.sheet}function Me(i,e,t){i.insertBefore(e,t||null)}function ye(i){i.parentNode&&i.parentNode.removeChild(i)}function rp(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function Fe(i){return document.createElement(i)}function Rt(i){return document.createTextNode(i)}function lt(){return Rt(" ")}function wi(){return Rt("")}function Rs(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function Ne(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}const Kg=["width","height"];function na(i,e){const t=Object.getOwnPropertyDescriptors(i.__proto__);for(const n in e)e[n]==null?i.removeAttribute(n):n==="style"?i.style.cssText=e[n]:n==="__value"?i.value=i[n]=e[n]:t[n]&&t[n].set&&Kg.indexOf(n)===-1?i[n]=e[n]:Ne(i,n,e[n])}function Zg(i){return Array.from(i.childNodes)}function $r(i,e){e=""+e,i.data!==e&&(i.data=e)}function hu(i,e,t,n){t==null?i.style.removeProperty(e):i.style.setProperty(e,t,n?"important":"")}function sp(i,e,{bubbles:t=!1,cancelable:n=!1}={}){return new CustomEvent(i,{detail:e,bubbles:t,cancelable:n})}function ia(i,e){return new i(e)}const ra=new Map;let sa=0;function Jg(i){let e=5381,t=i.length;for(;t--;)e=(e<<5)-e^i.charCodeAt(t);return e>>>0}function Qg(i,e){const t={stylesheet:Yg(e),rules:{}};return ra.set(i,t),t}function pu(i,e,t,n,r,s,o,a=0){const l=16.666/n;let c=`{
`;for(let p=0;p<=1;p+=l){const m=e+(t-e)*s(p);c+=p*100+`%{${o(m,1-m)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,f=`__svelte_${Jg(u)}_${a}`,d=ip(i),{stylesheet:h,rules:g}=ra.get(d)||Qg(d,i);g[f]||(g[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const _=i.style.animation||"";return i.style.animation=`${_?`${_}, `:""}${f} ${n}ms linear ${r}ms 1 both`,sa+=1,f}function e_(i,e){const t=(i.style.animation||"").split(", "),n=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),r=t.length-n.length;r&&(i.style.animation=n.join(", "),sa-=r,sa||t_())}function t_(){Sc(()=>{sa||(ra.forEach(i=>{const{ownerNode:e}=i.stylesheet;e&&ye(e)}),ra.clear())})}let Vs;function Cs(i){Vs=i}function or(){if(!Vs)throw new Error("Function called outside component initialization");return Vs}function n_(i){or().$$.before_update.push(i)}function rs(i){or().$$.on_mount.push(i)}function Ea(i){or().$$.after_update.push(i)}function ar(i){or().$$.on_destroy.push(i)}function i_(){const i=or();return(e,t,{cancelable:n=!1}={})=>{const r=i.$$.callbacks[e];if(r){const s=sp(e,t,{cancelable:n});return r.slice().forEach(o=>{o.call(i,s)}),!s.defaultPrevented}return!0}}function Bl(i,e){return or().$$.context.set(i,e),e}function zt(i){return or().$$.context.get(i)}const Nr=[],nr=[];let kr=[];const Vl=[],op=Promise.resolve();let kl=!1;function ap(){kl||(kl=!0,op.then(lp))}function Ec(){return ap(),op}function ks(i){kr.push(i)}function r_(i){Vl.push(i)}const Ha=new Set;let fr=0;function lp(){if(fr!==0)return;const i=Vs;do{try{for(;fr<Nr.length;){const e=Nr[fr];fr++,Cs(e),s_(e.$$)}}catch(e){throw Nr.length=0,fr=0,e}for(Cs(null),Nr.length=0,fr=0;nr.length;)nr.pop()();for(let e=0;e<kr.length;e+=1){const t=kr[e];Ha.has(t)||(Ha.add(t),t())}kr.length=0}while(Nr.length);for(;Vl.length;)Vl.pop()();kl=!1,Ha.clear(),Cs(i)}function s_(i){if(i.fragment!==null){i.update(),kn(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(ks)}}function o_(i){const e=[],t=[];kr.forEach(n=>i.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),kr=e}let ds;function a_(){return ds||(ds=Promise.resolve(),ds.then(()=>{ds=null})),ds}function Ga(i,e,t){i.dispatchEvent(sp(`${e?"intro":"outro"}${t}`))}const Yo=new Set;let Qn;function un(){Qn={r:0,c:[],p:Qn}}function fn(){Qn.r||kn(Qn.c),Qn=Qn.p}function J(i,e){i&&i.i&&(Yo.delete(i),i.i(e))}function ie(i,e,t,n){if(i&&i.o){if(Yo.has(i))return;Yo.add(i),Qn.c.push(()=>{Yo.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}const l_={duration:0};function mu(i,e,t,n){let s=e(i,t,{direction:"both"}),o=n?0:1,a=null,l=null,c=null,u;function f(){c&&e_(i,c)}function d(g,_){const p=g.b-o;return _*=Math.abs(p),{a:o,b:g.b,d:p,duration:_,start:g.start,end:g.start+_,group:g.group}}function h(g){const{delay:_=0,duration:p=300,easing:m=Wg,tick:x=Dt,css:v}=s||l_,y={start:jg()+_,b:g};g||(y.group=Qn,Qn.r+=1),"inert"in i&&(g?u!==void 0&&(i.inert=u):(u=i.inert,i.inert=!0)),a||l?l=y:(v&&(f(),c=pu(i,o,g,p,_,m,v)),g&&x(0,1),a=d(y,p),ks(()=>Ga(i,g,"start")),$g(E=>{if(l&&E>l.start&&(a=d(l,p),l=null,Ga(i,a.b,"start"),v&&(f(),c=pu(i,o,a.b,a.duration,0,m,s.css))),a){if(E>=a.end)x(o=a.b,1-o),Ga(i,a.b,"end"),l||(a.b?f():--a.group.r||kn(a.group.c)),a=null;else if(E>=a.start){const A=E-a.start;o=a.a+a.d*m(A/a.duration),x(o,1-o)}}return!!(a||l)}))}return{run(g){Js(s)?a_().then(()=>{s=s({direction:g?"in":"out"}),h(g)}):h(g)},end(){f(),a=l=null}}}function Ri(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function cp(i,e){ie(i,1,1,()=>{e.delete(i.key)})}function up(i,e,t,n,r,s,o,a,l,c,u,f){let d=i.length,h=s.length,g=d;const _={};for(;g--;)_[i[g].key]=g;const p=[],m=new Map,x=new Map,v=[];for(g=h;g--;){const S=f(r,s,g),P=t(S);let N=o.get(P);N?n&&v.push(()=>N.p(S,e)):(N=c(P,S),N.c()),m.set(P,p[g]=N),P in _&&x.set(P,Math.abs(g-_[P]))}const y=new Set,E=new Set;function A(S){J(S,1),S.m(a,u),o.set(S.key,S),u=S.first,h--}for(;d&&h;){const S=p[h-1],P=i[d-1],N=S.key,b=P.key;S===P?(u=S.first,d--,h--):m.has(b)?!o.has(N)||y.has(N)?A(S):E.has(b)?d--:x.get(N)>x.get(b)?(E.add(N),A(S)):(y.add(b),d--):(l(P,o),d--)}for(;d--;){const S=i[d];m.has(S.key)||l(S,o)}for(;h;)A(p[h-1]);return kn(v),p}function fp(i,e){const t={},n={},r={$$scope:1};let s=i.length;for(;s--;){const o=i[s],a=e[s];if(a){for(const l in o)l in a||(n[l]=1);for(const l in a)r[l]||(t[l]=a[l],r[l]=1);i[s]=a}else for(const l in o)r[l]=1}for(const o in n)o in t||(t[o]=void 0);return t}function c_(i,e,t){const n=i.$$.props[e];n!==void 0&&(i.$$.bound[n]=t,t(i.$$.ctx[n]))}function Ae(i){i&&i.c()}function Ee(i,e,t){const{fragment:n,after_update:r}=i.$$;n&&n.m(e,t),ks(()=>{const s=i.$$.on_mount.map(Qh).filter(Js);i.$$.on_destroy?i.$$.on_destroy.push(...s):kn(s),i.$$.on_mount=[]}),r.forEach(ks)}function Te(i,e){const t=i.$$;t.fragment!==null&&(o_(t.after_update),kn(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function u_(i,e){i.$$.dirty[0]===-1&&(Nr.push(i),ap(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function tt(i,e,t,n,r,s,o=null,a=[-1]){const l=Vs;Cs(i);const c=i.$$={fragment:null,ctx:[],props:s,update:Dt,not_equal:r,bound:fu(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:fu(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(i,e.props||{},(f,d,...h)=>{const g=h.length?h[0]:d;return c.ctx&&r(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&u_(i,f)),d}):[],c.update(),u=!0,kn(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=Zg(e.target);c.fragment&&c.fragment.l(f),f.forEach(ye)}else c.fragment&&c.fragment.c();e.intro&&J(i.$$.fragment),Ee(i,e.target,e.anchor),lp()}Cs(l)}class nt{constructor(){za(this,"$$");za(this,"$$set")}$destroy(){Te(this,1),this.$destroy=Dt}$on(e,t){if(!Js(t))return Dt;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!Xg(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const f_="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(f_);function dp(i){var e,t,n="";if(typeof i=="string"||typeof i=="number")n+=i;else if(typeof i=="object")if(Array.isArray(i)){var r=i.length;for(e=0;e<r;e++)i[e]&&(t=dp(i[e]))&&(n&&(n+=" "),n+=t)}else for(t in i)i[t]&&(n&&(n+=" "),n+=t);return n}function d_(){for(var i,e,t=0,n="",r=arguments.length;t<r;t++)(i=arguments[t])&&(e=dp(i))&&(n&&(n+=" "),n+=e);return n}const Tc="-";function h_(i){const e=m_(i),{conflictingClassGroups:t,conflictingClassGroupModifiers:n}=i;function r(o){const a=o.split(Tc);return a[0]===""&&a.length!==1&&a.shift(),hp(a,e)||p_(o)}function s(o,a){const l=t[o]||[];return a&&n[o]?[...l,...n[o]]:l}return{getClassGroupId:r,getConflictingClassGroupIds:s}}function hp(i,e){var o;if(i.length===0)return e.classGroupId;const t=i[0],n=e.nextPart.get(t),r=n?hp(i.slice(1),n):void 0;if(r)return r;if(e.validators.length===0)return;const s=i.join(Tc);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId}const gu=/^\[(.+)\]$/;function p_(i){if(gu.test(i)){const e=gu.exec(i)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function m_(i){const{theme:e,prefix:t}=i,n={nextPart:new Map,validators:[]};return __(Object.entries(i.classGroups),t).forEach(([s,o])=>{zl(o,n,s,e)}),n}function zl(i,e,t,n){i.forEach(r=>{if(typeof r=="string"){const s=r===""?e:_u(e,r);s.classGroupId=t;return}if(typeof r=="function"){if(g_(r)){zl(r(n),e,t,n);return}e.validators.push({validator:r,classGroupId:t});return}Object.entries(r).forEach(([s,o])=>{zl(o,_u(e,s),t,n)})})}function _u(i,e){let t=i;return e.split(Tc).forEach(n=>{t.nextPart.has(n)||t.nextPart.set(n,{nextPart:new Map,validators:[]}),t=t.nextPart.get(n)}),t}function g_(i){return i.isThemeGetter}function __(i,e){return e?i.map(([t,n])=>{const r=n.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[t,r]}):i}function v_(i){if(i<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,n=new Map;function r(s,o){t.set(s,o),e++,e>i&&(e=0,n=t,t=new Map)}return{get(s){let o=t.get(s);if(o!==void 0)return o;if((o=n.get(s))!==void 0)return r(s,o),o},set(s,o){t.has(s)?t.set(s,o):r(s,o)}}}const pp="!";function x_(i){const e=i.separator,t=e.length===1,n=e[0],r=e.length;return function(o){const a=[];let l=0,c=0,u;for(let _=0;_<o.length;_++){let p=o[_];if(l===0){if(p===n&&(t||o.slice(_,_+r)===e)){a.push(o.slice(c,_)),c=_+r;continue}if(p==="/"){u=_;continue}}p==="["?l++:p==="]"&&l--}const f=a.length===0?o:o.substring(c),d=f.startsWith(pp),h=d?f.substring(1):f,g=u&&u>c?u-c:void 0;return{modifiers:a,hasImportantModifier:d,baseClassName:h,maybePostfixModifierPosition:g}}}function y_(i){if(i.length<=1)return i;const e=[];let t=[];return i.forEach(n=>{n[0]==="["?(e.push(...t.sort(),n),t=[]):t.push(n)}),e.push(...t.sort()),e}function b_(i){return{cache:v_(i.cacheSize),splitModifiers:x_(i),...h_(i)}}const M_=/\s+/;function S_(i,e){const{splitModifiers:t,getClassGroupId:n,getConflictingClassGroupIds:r}=e,s=new Set;return i.trim().split(M_).map(o=>{const{modifiers:a,hasImportantModifier:l,baseClassName:c,maybePostfixModifierPosition:u}=t(o);let f=n(u?c.substring(0,u):c),d=!!u;if(!f){if(!u)return{isTailwindClass:!1,originalClassName:o};if(f=n(c),!f)return{isTailwindClass:!1,originalClassName:o};d=!1}const h=y_(a).join(":");return{isTailwindClass:!0,modifierId:l?h+pp:h,classGroupId:f,originalClassName:o,hasPostfixModifier:d}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:a,classGroupId:l,hasPostfixModifier:c}=o,u=a+l;return s.has(u)?!1:(s.add(u),r(l,c).forEach(f=>s.add(a+f)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function E_(){let i=0,e,t,n="";for(;i<arguments.length;)(e=arguments[i++])&&(t=mp(e))&&(n&&(n+=" "),n+=t);return n}function mp(i){if(typeof i=="string")return i;let e,t="";for(let n=0;n<i.length;n++)i[n]&&(e=mp(i[n]))&&(t&&(t+=" "),t+=e);return t}function T_(i,...e){let t,n,r,s=o;function o(l){const c=e.reduce((u,f)=>f(u),i());return t=b_(c),n=t.cache.get,r=t.cache.set,s=a,a(l)}function a(l){const c=n(l);if(c)return c;const u=S_(l,t);return r(l,u),u}return function(){return s(E_.apply(null,arguments))}}function Mt(i){const e=t=>t[i]||[];return e.isThemeGetter=!0,e}const gp=/^\[(?:([a-z-]+):)?(.+)\]$/i,A_=/^\d+\/\d+$/,w_=new Set(["px","full","screen"]),R_=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C_=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,P_=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,L_=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,D_=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function Wn(i){return Yi(i)||w_.has(i)||A_.test(i)}function li(i){return ss(i,"length",k_)}function Yi(i){return!!i&&!Number.isNaN(Number(i))}function fo(i){return ss(i,"number",Yi)}function hs(i){return!!i&&Number.isInteger(Number(i))}function I_(i){return i.endsWith("%")&&Yi(i.slice(0,-1))}function qe(i){return gp.test(i)}function ci(i){return R_.test(i)}const N_=new Set(["length","size","percentage"]);function U_(i){return ss(i,N_,_p)}function O_(i){return ss(i,"position",_p)}const F_=new Set(["image","url"]);function B_(i){return ss(i,F_,H_)}function V_(i){return ss(i,"",z_)}function ps(){return!0}function ss(i,e,t){const n=gp.exec(i);return n?n[1]?typeof e=="string"?n[1]===e:e.has(n[1]):t(n[2]):!1}function k_(i){return C_.test(i)&&!P_.test(i)}function _p(){return!1}function z_(i){return L_.test(i)}function H_(i){return D_.test(i)}function G_(){const i=Mt("colors"),e=Mt("spacing"),t=Mt("blur"),n=Mt("brightness"),r=Mt("borderColor"),s=Mt("borderRadius"),o=Mt("borderSpacing"),a=Mt("borderWidth"),l=Mt("contrast"),c=Mt("grayscale"),u=Mt("hueRotate"),f=Mt("invert"),d=Mt("gap"),h=Mt("gradientColorStops"),g=Mt("gradientColorStopPositions"),_=Mt("inset"),p=Mt("margin"),m=Mt("opacity"),x=Mt("padding"),v=Mt("saturate"),y=Mt("scale"),E=Mt("sepia"),A=Mt("skew"),S=Mt("space"),P=Mt("translate"),N=()=>["auto","contain","none"],b=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto",qe,e],K=()=>[qe,e],Q=()=>["",Wn,li],L=()=>["auto",Yi,qe],k=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],X=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],$=()=>["start","end","center","between","around","evenly","stretch"],U=()=>["","0",qe],q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],te=()=>[Yi,fo],fe=()=>[Yi,qe];return{cacheSize:500,separator:":",theme:{colors:[ps],spacing:[Wn,li],blur:["none","",ci,qe],brightness:te(),borderColor:[i],borderRadius:["none","","full",ci,qe],borderSpacing:K(),borderWidth:Q(),contrast:te(),grayscale:U(),hueRotate:fe(),invert:U(),gap:K(),gradientColorStops:[i],gradientColorStopPositions:[I_,li],inset:R(),margin:R(),opacity:te(),padding:K(),saturate:te(),scale:te(),sepia:U(),skew:fe(),space:K(),translate:K()},classGroups:{aspect:[{aspect:["auto","square","video",qe]}],container:["container"],columns:[{columns:[ci]}],"break-after":[{"break-after":q()}],"break-before":[{"break-before":q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...k(),qe]}],overflow:[{overflow:b()}],"overflow-x":[{"overflow-x":b()}],"overflow-y":[{"overflow-y":b()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[_]}],"inset-x":[{"inset-x":[_]}],"inset-y":[{"inset-y":[_]}],start:[{start:[_]}],end:[{end:[_]}],top:[{top:[_]}],right:[{right:[_]}],bottom:[{bottom:[_]}],left:[{left:[_]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",hs,qe]}],basis:[{basis:R()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",qe]}],grow:[{grow:U()}],shrink:[{shrink:U()}],order:[{order:["first","last","none",hs,qe]}],"grid-cols":[{"grid-cols":[ps]}],"col-start-end":[{col:["auto",{span:["full",hs,qe]},qe]}],"col-start":[{"col-start":L()}],"col-end":[{"col-end":L()}],"grid-rows":[{"grid-rows":[ps]}],"row-start-end":[{row:["auto",{span:[hs,qe]},qe]}],"row-start":[{"row-start":L()}],"row-end":[{"row-end":L()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",qe]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",qe]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...$()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...$(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...$(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[S]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[S]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",qe,e]}],"min-w":[{"min-w":[qe,e,"min","max","fit"]}],"max-w":[{"max-w":[qe,e,"none","full","min","max","fit","prose",{screen:[ci]},ci]}],h:[{h:[qe,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[qe,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[qe,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[qe,e,"auto","min","max","fit"]}],"font-size":[{text:["base",ci,li]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",fo]}],"font-family":[{font:[ps]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",qe]}],"line-clamp":[{"line-clamp":["none",Yi,fo]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Wn,qe]}],"list-image":[{"list-image":["none",qe]}],"list-style-type":[{list:["none","disc","decimal",qe]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[i]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[i]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Wn,li]}],"underline-offset":[{"underline-offset":["auto",Wn,qe]}],"text-decoration-color":[{decoration:[i]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:K()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",qe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",qe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...k(),O_]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",U_]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},B_]}],"bg-color":[{bg:[i]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:V()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[Wn,qe]}],"outline-w":[{outline:[Wn,li]}],"outline-color":[{outline:[i]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[i]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[Wn,li]}],"ring-offset-color":[{"ring-offset":[i]}],shadow:[{shadow:["","inner","none",ci,V_]}],"shadow-color":[{shadow:[ps]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":X()}],"bg-blend":[{"bg-blend":X()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",ci,qe]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[f]}],saturate:[{saturate:[v]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",qe]}],duration:[{duration:fe()}],ease:[{ease:["linear","in","out","in-out",qe]}],delay:[{delay:fe()}],animate:[{animate:["none","spin","ping","pulse","bounce",qe]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[hs,qe]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[A]}],"skew-y":[{"skew-y":[A]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",qe]}],accent:[{accent:["auto",i]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",qe]}],"caret-color":[{caret:[i]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":K()}],"scroll-mx":[{"scroll-mx":K()}],"scroll-my":[{"scroll-my":K()}],"scroll-ms":[{"scroll-ms":K()}],"scroll-me":[{"scroll-me":K()}],"scroll-mt":[{"scroll-mt":K()}],"scroll-mr":[{"scroll-mr":K()}],"scroll-mb":[{"scroll-mb":K()}],"scroll-ml":[{"scroll-ml":K()}],"scroll-p":[{"scroll-p":K()}],"scroll-px":[{"scroll-px":K()}],"scroll-py":[{"scroll-py":K()}],"scroll-ps":[{"scroll-ps":K()}],"scroll-pe":[{"scroll-pe":K()}],"scroll-pt":[{"scroll-pt":K()}],"scroll-pr":[{"scroll-pr":K()}],"scroll-pb":[{"scroll-pb":K()}],"scroll-pl":[{"scroll-pl":K()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",qe]}],fill:[{fill:[i,"none"]}],"stroke-w":[{stroke:[Wn,li,fo]}],stroke:[{stroke:[i,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const W_=T_(G_);function Un(...i){return W_(d_(i))}function X_(i){let e,t,n;const r=i[2].default,s=_t(r,i,i[1],null);return{c(){e=Fe("div"),s&&s.c(),Ne(e,"class",t=Un("h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",i[0]))},m(o,a){Me(o,e,a),s&&s.m(e,null),n=!0},p(o,[a]){s&&s.p&&(!n||a&2)&&xt(s,r,o,o[1],n?vt(r,o[1],a,null):yt(o[1]),null),(!n||a&1&&t!==(t=Un("h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",o[0])))&&Ne(e,"class",t)},i(o){n||(J(s,o),n=!0)},o(o){ie(s,o),n=!1},d(o){o&&ye(e),s&&s.d(o)}}}function j_(i,e,t){let{$$slots:n={},$$scope:r}=e,{className:s}=e;return i.$$set=o=>{"className"in o&&t(0,s=o.className),"$$scope"in o&&t(1,r=o.$$scope)},[s,r,n]}class $_ extends nt{constructor(e){super(),tt(this,e,j_,X_,Ke,{className:0})}}function Y_(i){let e,t,n,r,s,o,a;const l=i[8].default,c=_t(l,i,i[7],null);return{c(){e=Fe("div"),t=Fe("div"),c&&c.c(),Ne(t,"class",n=Un("relative flex items-center justify-center transition-all duration-200 ease-linear",i[0])),hu(t,"transform-style","preserve-3d"),Ne(e,"class",r=Un("flex items-center justify-center py-20",i[1])),hu(e,"perspective","1000px")},m(u,f){Me(u,e,f),Ue(e,t),c&&c.m(t,null),i[9](t),s=!0,o||(a=[Rs(t,"mouseenter",i[4]),Rs(t,"mousemove",i[3]),Rs(t,"mouseleave",i[5])],o=!0)},p(u,[f]){c&&c.p&&(!s||f&128)&&xt(c,l,u,u[7],s?vt(l,u[7],f,null):yt(u[7]),null),(!s||f&1&&n!==(n=Un("relative flex items-center justify-center transition-all duration-200 ease-linear",u[0])))&&Ne(t,"class",n),(!s||f&2&&r!==(r=Un("flex items-center justify-center py-20",u[1])))&&Ne(e,"class",r)},i(u){s||(J(c,u),s=!0)},o(u){ie(c,u),s=!1},d(u){u&&ye(e),c&&c.d(u),i[9](null),o=!1,kn(a)}}}function q_(i,e,t){let{$$slots:n={},$$scope:r}=e,{className:s}=e,{containerClassName:o=void 0}=e,{isMouseEntered:a=!1}=e,l;const c=h=>{if(!l)return;const{left:g,top:_,width:p,height:m}=l.getBoundingClientRect(),x=(h.clientX-g-p/2)/25,v=(h.clientY-_-m/2)/25;t(2,l.style.transform=`rotateY(${x}deg) rotateX(${v}deg)`,l)},u=h=>{t(6,a=!0)},f=h=>{l&&(t(6,a=!1),t(2,l.style.transform="rotateY(0deg) rotateX(0deg)",l))};function d(h){nr[h?"unshift":"push"](()=>{l=h,t(2,l)})}return i.$$set=h=>{"className"in h&&t(0,s=h.className),"containerClassName"in h&&t(1,o=h.containerClassName),"isMouseEntered"in h&&t(6,a=h.isMouseEntered),"$$scope"in h&&t(7,r=h.$$scope)},[s,o,l,c,u,f,a,r,n,d]}class K_ extends nt{constructor(e){super(),tt(this,e,q_,Y_,Ke,{className:0,containerClassName:1,isMouseEntered:6})}}function Z_(i){let e,t,n;const r=i[11].default,s=_t(r,i,i[10],null);let o=[{class:t=Un("w-fit transition duration-200 ease-linear",i[0])},i[2]],a={};for(let l=0;l<o.length;l+=1)a=ni(a,o[l]);return{c(){e=Fe("div"),s&&s.c(),na(e,a)},m(l,c){Me(l,e,c),s&&s.m(e,null),i[12](e),n=!0},p(l,[c]){s&&s.p&&(!n||c&1024)&&xt(s,r,l,l[10],n?vt(r,l[10],c,null):yt(l[10]),null),na(e,a=fp(o,[(!n||c&1&&t!==(t=Un("w-fit transition duration-200 ease-linear",l[0])))&&{class:t},c&4&&l[2]]))},i(l){n||(J(s,l),n=!0)},o(l){ie(s,l),n=!1},d(l){l&&ye(e),s&&s.d(l),i[12](null)}}}function J_(i,e,t){let{$$slots:n={},$$scope:r}=e,{className:s}=e,{translateX:o=0}=e,{translateY:a=0}=e,{translateZ:l=0}=e,{rotateX:c=0}=e,{rotateY:u=0}=e,{rotateZ:f=0}=e,{isMouseEntered:d=!1}=e,h;const g=()=>{h&&(d?t(1,h.style.transform=`translateX(${o}px) translateY(${a}px) translateZ(${l}px) rotateX(${c}deg) rotateY(${u}deg) rotateZ(${f}deg)`,h):t(1,h.style.transform="translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",h))};function _(p){nr[p?"unshift":"push"](()=>{h=p,t(1,h)})}return i.$$set=p=>{t(2,e=ni(ni({},e),Bs(p))),"className"in p&&t(0,s=p.className),"translateX"in p&&t(3,o=p.translateX),"translateY"in p&&t(4,a=p.translateY),"translateZ"in p&&t(5,l=p.translateZ),"rotateX"in p&&t(6,c=p.rotateX),"rotateY"in p&&t(7,u=p.rotateY),"rotateZ"in p&&t(8,f=p.rotateZ),"isMouseEntered"in p&&t(9,d=p.isMouseEntered),"$$scope"in p&&t(10,r=p.$$scope)},i.$$.update=()=>{i.$$.dirty&512&&g()},e=Bs(e),[s,h,e,o,a,l,c,u,f,d,r,n,_]}class ms extends nt{constructor(e){super(),tt(this,e,J_,Z_,Ke,{className:0,translateX:3,translateY:4,translateZ:5,rotateX:6,rotateY:7,rotateZ:8,isMouseEntered:9})}}function Q_(i){let e;return{c(){e=Rt(i[0])},m(t,n){Me(t,e,n)},p(t,n){n&1&&$r(e,t[0])},d(t){t&&ye(e)}}}function ev(i){let e;return{c(){e=Rt(i[1])},m(t,n){Me(t,e,n)},p(t,n){n&2&&$r(e,t[1])},d(t){t&&ye(e)}}}function tv(i){let e,t;return{c(){e=Fe("img"),ta(e.src,t=i[2])||Ne(e,"src",t),Ne(e,"height","1000"),Ne(e,"width","1000"),Ne(e,"class","h-50 w-full rounded-xl object-cover group-hover/card:shadow-xl"),Ne(e,"alt","thumbnail")},m(n,r){Me(n,e,r)},p(n,r){r&4&&!ta(e.src,t=n[2])&&Ne(e,"src",t)},d(n){n&&ye(e)}}}function vu(i){let e;return{c(){e=Rt("View Demo →")},m(t,n){Me(t,e,n)},d(t){t&&ye(e)}}}function nv(i){let e,t=i[3]&&vu();return{c(){t&&t.c(),e=wi()},m(n,r){t&&t.m(n,r),Me(n,e,r)},p(n,r){n[3]?t||(t=vu(),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(n){n&&ye(e),t&&t.d(n)}}}function iv(i){let e;return{c(){e=Rt("Source code")},m(t,n){Me(t,e,n)},d(t){t&&ye(e)}}}function rv(i){let e,t,n,r,s,o,a,l,c,u,f;return e=new ms({props:{isMouseEntered:i[4],translateZ:50,className:"text-xl font-bold text-white dark:text-white",$$slots:{default:[Q_]},$$scope:{ctx:i}}}),n=new ms({props:{isMouseEntered:i[4],translateZ:60,className:"text-white text-sm max-w-sm mt-2 dark:text-white",$$slots:{default:[ev]},$$scope:{ctx:i}}}),s=new ms({props:{isMouseEntered:i[4],translateZ:100,className:"w-full mt-4",$$slots:{default:[tv]},$$scope:{ctx:i}}}),l=new ms({props:{isMouseEntered:i[4],translateZ:20,className:"px-4 py-2 rounded-xl text-xs font-normal dark:text-white",$$slots:{default:[nv]},$$scope:{ctx:i}}}),u=new ms({props:{isMouseEntered:i[4],translateZ:20,className:"px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold",$$slots:{default:[iv]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment),t=lt(),Ae(n.$$.fragment),r=lt(),Ae(s.$$.fragment),o=lt(),a=Fe("div"),Ae(l.$$.fragment),c=lt(),Ae(u.$$.fragment),Ne(a,"class","mt-12 flex items-center justify-between")},m(d,h){Ee(e,d,h),Me(d,t,h),Ee(n,d,h),Me(d,r,h),Ee(s,d,h),Me(d,o,h),Me(d,a,h),Ee(l,a,null),Ue(a,c),Ee(u,a,null),f=!0},p(d,h){const g={};h&16&&(g.isMouseEntered=d[4]),h&65&&(g.$$scope={dirty:h,ctx:d}),e.$set(g);const _={};h&16&&(_.isMouseEntered=d[4]),h&66&&(_.$$scope={dirty:h,ctx:d}),n.$set(_);const p={};h&16&&(p.isMouseEntered=d[4]),h&68&&(p.$$scope={dirty:h,ctx:d}),s.$set(p);const m={};h&16&&(m.isMouseEntered=d[4]),h&72&&(m.$$scope={dirty:h,ctx:d}),l.$set(m);const x={};h&16&&(x.isMouseEntered=d[4]),h&64&&(x.$$scope={dirty:h,ctx:d}),u.$set(x)},i(d){f||(J(e.$$.fragment,d),J(n.$$.fragment,d),J(s.$$.fragment,d),J(l.$$.fragment,d),J(u.$$.fragment,d),f=!0)},o(d){ie(e.$$.fragment,d),ie(n.$$.fragment,d),ie(s.$$.fragment,d),ie(l.$$.fragment,d),ie(u.$$.fragment,d),f=!1},d(d){d&&(ye(t),ye(r),ye(o),ye(a)),Te(e,d),Te(n,d),Te(s,d),Te(l),Te(u)}}}function sv(i){let e,t;return e=new $_({props:{className:"backdrop-blur-sm bg-indigo-300/25 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-96 h-auto rounded-xl p-6 border  ",$$slots:{default:[rv]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&95&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function ov(i){let e,t,n;function r(o){i[5](o)}let s={className:"inter-var",$$slots:{default:[sv]},$$scope:{ctx:i}};return i[4]!==void 0&&(s.isMouseEntered=i[4]),e=new K_({props:s}),nr.push(()=>c_(e,"isMouseEntered",r)),{c(){Ae(e.$$.fragment)},m(o,a){Ee(e,o,a),n=!0},p(o,[a]){const l={};a&95&&(l.$$scope={dirty:a,ctx:o}),!t&&a&16&&(t=!0,l.isMouseEntered=o[4],r_(()=>t=!1)),e.$set(l)},i(o){n||(J(e.$$.fragment,o),n=!0)},o(o){ie(e.$$.fragment,o),n=!1},d(o){Te(e,o)}}}function av(i,e,t){let n=!1,{title:r}=e,{description:s}=e,{image:o}=e,{demo:a}=e;function l(c){n=c,t(4,n)}return i.$$set=c=>{"title"in c&&t(0,r=c.title),"description"in c&&t(1,s=c.description),"image"in c&&t(2,o=c.image),"demo"in c&&t(3,a=c.demo)},[r,s,o,a,n,l]}class lv extends nt{constructor(e){super(),tt(this,e,av,ov,Ke,{title:0,description:1,image:2,demo:3})}}function cv(i){let e,t;const n=i[1].default,r=_t(n,i,i[0],null);return{c(){e=Fe("nav"),r&&r.c(),Ne(e,"class","ring-2 ring-blue-500 backdrop-blur-sm bg-white/30 boder relative flex justify-center space-x-4 rounded-full bg-black px-8 py-2 shadow-input dark:border-white/[0.2]")},m(s,o){Me(s,e,o),r&&r.m(e,null),t=!0},p(s,[o]){r&&r.p&&(!t||o&1)&&xt(r,n,s,s[0],t?vt(n,s[0],o,null):yt(s[0]),null)},i(s){t||(J(r,s),t=!0)},o(s){ie(r,s),t=!1},d(s){s&&ye(e),r&&r.d(s)}}}function uv(i,e,t){let{$$slots:n={},$$scope:r}=e;return i.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,n]}class fv extends nt{constructor(e){super(),tt(this,e,uv,cv,Ke,{})}}function dv(i){let e,t;const n=i[2].default,r=_t(n,i,i[1],null);let s=[{class:"text-neutral-700 hover:text-white dark:text-neutral-200"},i[0]],o={};for(let a=0;a<s.length;a+=1)o=ni(o,s[a]);return{c(){e=Fe("a"),r&&r.c(),na(e,o)},m(a,l){Me(a,e,l),r&&r.m(e,null),t=!0},p(a,[l]){r&&r.p&&(!t||l&2)&&xt(r,n,a,a[1],t?vt(n,a[1],l,null):yt(a[1]),null),na(e,o=fp(s,[{class:"text-neutral-700 hover:text-white dark:text-neutral-200"},l&1&&a[0]]))},i(a){t||(J(r,a),t=!0)},o(a){ie(r,a),t=!1},d(a){a&&ye(e),r&&r.d(a)}}}function hv(i,e,t){let{$$slots:n={},$$scope:r}=e;return i.$$set=s=>{t(0,e=ni(ni({},e),Bs(s))),"$$scope"in s&&t(1,r=s.$$scope)},e=Bs(e),[e,r,n]}class yn extends nt{constructor(e){super(),tt(this,e,hv,dv,Ke,{})}}var zs;(function(i){i[i.Entering=0]="Entering",i[i.Present=1]="Present",i[i.Exiting=2]="Exiting"})(zs||(zs={}));var xu;(function(i){i[i.Hide=0]="Hide",i[i.Show=1]="Show"})(xu||(xu={}));const vp=1/60*1e3,pv=typeof performance<"u"?()=>performance.now():()=>Date.now(),xp=typeof window<"u"?i=>window.requestAnimationFrame(i):i=>setTimeout(()=>i(pv()),vp);function mv(i){let e=[],t=[],n=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const f=u&&r,d=f?e:t;return c&&o.add(l),d.indexOf(l)===-1&&(d.push(l),f&&r&&(n=e.length)),l},cancel:l=>{const c=t.indexOf(l);c!==-1&&t.splice(c,1),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,t]=[t,e],t.length=0,n=e.length,n)for(let c=0;c<n;c++){const u=e[c];u(l),o.has(u)&&(a.schedule(u),i())}r=!1,s&&(s=!1,a.process(l))}};return a}const gv=40;let Hl=!0,Hs=!1,Gl=!1;const zr={delta:0,timestamp:0},Qs=["read","update","preRender","render","postRender"],Ta=Qs.reduce((i,e)=>(i[e]=mv(()=>Hs=!0),i),{}),Rn=Qs.reduce((i,e)=>{const t=Ta[e];return i[e]=(n,r=!1,s=!1)=>(Hs||vv(),t.schedule(n,r,s)),i},{}),Ps=Qs.reduce((i,e)=>(i[e]=Ta[e].cancel,i),{}),Or=Qs.reduce((i,e)=>(i[e]=()=>Ta[e].process(zr),i),{}),_v=i=>Ta[i].process(zr),yp=i=>{Hs=!1,zr.delta=Hl?vp:Math.max(Math.min(i-zr.timestamp,gv),1),zr.timestamp=i,Gl=!0,Qs.forEach(_v),Gl=!1,Hs&&(Hl=!1,xp(yp))},vv=()=>{Hs=!0,Hl=!0,Gl||xp(yp)},oa=()=>zr;function bp(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(i);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(i,n[r])&&(t[n[r]]=i[n[r]]);return t}var yu=function(){};const aa=(i,e,t)=>Math.min(Math.max(t,i),e),Wa=.001,xv=.01,yv=10,bv=.05,Mv=1;function Sv({duration:i=800,bounce:e=.25,velocity:t=0,mass:n=1}){let r,s,o=1-e;o=aa(bv,Mv,o),i=aa(xv,yv,i/1e3),o<1?(r=c=>{const u=c*o,f=u*i,d=u-t,h=Wl(c,o),g=Math.exp(-f);return Wa-d/h*g},s=c=>{const f=c*o*i,d=f*t+t,h=Math.pow(o,2)*Math.pow(c,2)*i,g=Math.exp(-f),_=Wl(Math.pow(c,2),o);return(-r(c)+Wa>0?-1:1)*((d-h)*g)/_}):(r=c=>{const u=Math.exp(-c*i),f=(c-t)*i+1;return-Wa+u*f},s=c=>{const u=Math.exp(-c*i),f=(t-c)*(i*i);return u*f});const a=5/i,l=Tv(r,s,a);if(i=i*1e3,isNaN(l))return{stiffness:100,damping:10,duration:i};{const c=Math.pow(l,2)*n;return{stiffness:c,damping:o*2*Math.sqrt(n*c),duration:i}}}const Ev=12;function Tv(i,e,t){let n=t;for(let r=1;r<Ev;r++)n=n-i(n)/e(n);return n}function Wl(i,e){return i*Math.sqrt(1-e*e)}const Av=["duration","bounce"],wv=["stiffness","damping","mass"];function bu(i,e){return e.some(t=>i[t]!==void 0)}function Rv(i){let e=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},i);if(!bu(i,wv)&&bu(i,Av)){const t=Sv(i);e=Object.assign(Object.assign(Object.assign({},e),t),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}function Ac(i){var{from:e=0,to:t=1,restSpeed:n=2,restDelta:r}=i,s=bp(i,["from","to","restSpeed","restDelta"]);const o={done:!1,value:e};let{stiffness:a,damping:l,mass:c,velocity:u,duration:f,isResolvedFromDuration:d}=Rv(s),h=Mu,g=Mu;function _(){const p=u?-(u/1e3):0,m=t-e,x=l/(2*Math.sqrt(a*c)),v=Math.sqrt(a/c)/1e3;if(r===void 0&&(r=Math.min(Math.abs(t-e)/100,.4)),x<1){const y=Wl(v,x);h=E=>{const A=Math.exp(-x*v*E);return t-A*((p+x*v*m)/y*Math.sin(y*E)+m*Math.cos(y*E))},g=E=>{const A=Math.exp(-x*v*E);return x*v*A*(Math.sin(y*E)*(p+x*v*m)/y+m*Math.cos(y*E))-A*(Math.cos(y*E)*(p+x*v*m)-y*m*Math.sin(y*E))}}else if(x===1)h=y=>t-Math.exp(-v*y)*(m+(p+v*m)*y);else{const y=v*Math.sqrt(x*x-1);h=E=>{const A=Math.exp(-x*v*E),S=Math.min(y*E,300);return t-A*((p+x*v*m)*Math.sinh(S)+y*m*Math.cosh(S))/y}}}return _(),{next:p=>{const m=h(p);if(d)o.done=p>=f;else{const x=g(p)*1e3,v=Math.abs(x)<=n,y=Math.abs(t-m)<=r;o.done=v&&y}return o.value=o.done?t:m,o},flipTarget:()=>{u=-u,[e,t]=[t,e],_()}}}Ac.needsInterpolation=(i,e)=>typeof i=="string"||typeof e=="string";const Mu=i=>0,Gs=(i,e,t)=>{const n=e-i;return n===0?1:(t-i)/n},dn=(i,e,t)=>-t*i+t*e+i,Mp=(i,e)=>t=>Math.max(Math.min(t,e),i),Ls=i=>i%1?Number(i.toFixed(5)):i,Ws=/(-)?([\d]*\.?[\d])+/g,Xl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Cv=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function eo(i){return typeof i=="string"}const lr={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},Ds=Object.assign(Object.assign({},lr),{transform:Mp(0,1)}),ho=Object.assign(Object.assign({},lr),{default:1}),to=i=>({test:e=>eo(e)&&e.endsWith(i)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${i}`}),_i=to("deg"),Hr=to("%"),He=to("px"),Pv=to("vh"),Lv=to("vw"),Su=Object.assign(Object.assign({},Hr),{parse:i=>Hr.parse(i)/100,transform:i=>Hr.transform(i*100)}),wc=(i,e)=>t=>!!(eo(t)&&Cv.test(t)&&t.startsWith(i)||e&&Object.prototype.hasOwnProperty.call(t,e)),Sp=(i,e,t)=>n=>{if(!eo(n))return n;const[r,s,o,a]=n.match(Ws);return{[i]:parseFloat(r),[e]:parseFloat(s),[t]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},qi={test:wc("hsl","hue"),parse:Sp("hue","saturation","lightness"),transform:({hue:i,saturation:e,lightness:t,alpha:n=1})=>"hsla("+Math.round(i)+", "+Hr.transform(Ls(e))+", "+Hr.transform(Ls(t))+", "+Ls(Ds.transform(n))+")"},Dv=Mp(0,255),Xa=Object.assign(Object.assign({},lr),{transform:i=>Math.round(Dv(i))}),bi={test:wc("rgb","red"),parse:Sp("red","green","blue"),transform:({red:i,green:e,blue:t,alpha:n=1})=>"rgba("+Xa.transform(i)+", "+Xa.transform(e)+", "+Xa.transform(t)+", "+Ls(Ds.transform(n))+")"};function Iv(i){let e="",t="",n="",r="";return i.length>5?(e=i.substr(1,2),t=i.substr(3,2),n=i.substr(5,2),r=i.substr(7,2)):(e=i.substr(1,1),t=i.substr(2,1),n=i.substr(3,1),r=i.substr(4,1),e+=e,t+=t,n+=n,r+=r),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(n,16),alpha:r?parseInt(r,16)/255:1}}const jl={test:wc("#"),parse:Iv,transform:bi.transform},Qt={test:i=>bi.test(i)||jl.test(i)||qi.test(i),parse:i=>bi.test(i)?bi.parse(i):qi.test(i)?qi.parse(i):jl.parse(i),transform:i=>eo(i)?i:i.hasOwnProperty("red")?bi.transform(i):qi.transform(i)},Ep="${c}",Tp="${n}";function Nv(i){var e,t,n,r;return isNaN(i)&&eo(i)&&((t=(e=i.match(Ws))===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0)+((r=(n=i.match(Xl))===null||n===void 0?void 0:n.length)!==null&&r!==void 0?r:0)>0}function Ap(i){typeof i=="number"&&(i=`${i}`);const e=[];let t=0;const n=i.match(Xl);n&&(t=n.length,i=i.replace(Xl,Ep),e.push(...n.map(Qt.parse)));const r=i.match(Ws);return r&&(i=i.replace(Ws,Tp),e.push(...r.map(lr.parse))),{values:e,numColors:t,tokenised:i}}function wp(i){return Ap(i).values}function Rp(i){const{values:e,numColors:t,tokenised:n}=Ap(i),r=e.length;return s=>{let o=n;for(let a=0;a<r;a++)o=o.replace(a<t?Ep:Tp,a<t?Qt.transform(s[a]):Ls(s[a]));return o}}const Uv=i=>typeof i=="number"?0:i;function Ov(i){const e=wp(i);return Rp(i)(e.map(Uv))}const ii={test:Nv,parse:wp,createTransformer:Rp,getAnimatableNone:Ov},Fv=new Set(["brightness","contrast","saturate","opacity"]);function Bv(i){let[e,t]=i.slice(0,-1).split("(");if(e==="drop-shadow")return i;const[n]=t.match(Ws)||[];if(!n)return i;const r=t.replace(n,"");let s=Fv.has(e)?1:0;return n!==t&&(s*=100),e+"("+s+r+")"}const Vv=/([a-z-]*)\(.*?\)/g,$l=Object.assign(Object.assign({},ii),{getAnimatableNone:i=>{const e=i.match(Vv);return e?e.map(Bv).join(" "):i}});function ja(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*(2/3-t)*6:i}function Eu({hue:i,saturation:e,lightness:t,alpha:n}){i/=360,e/=100,t/=100;let r=0,s=0,o=0;if(!e)r=s=o=t;else{const a=t<.5?t*(1+e):t+e-t*e,l=2*t-a;r=ja(l,a,i+1/3),s=ja(l,a,i),o=ja(l,a,i-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:n}}const kv=(i,e,t)=>{const n=i*i,r=e*e;return Math.sqrt(Math.max(0,t*(r-n)+n))},zv=[jl,bi,qi],Tu=i=>zv.find(e=>e.test(i)),Cp=(i,e)=>{let t=Tu(i),n=Tu(e),r=t.parse(i),s=n.parse(e);t===qi&&(r=Eu(r),t=bi),n===qi&&(s=Eu(s),n=bi);const o=Object.assign({},r);return a=>{for(const l in o)l!=="alpha"&&(o[l]=kv(r[l],s[l],a));return o.alpha=dn(r.alpha,s.alpha,a),t.transform(o)}},Yl=i=>typeof i=="number",Hv=(i,e)=>t=>e(i(t)),no=(...i)=>i.reduce(Hv);function Pp(i,e){return Yl(i)?t=>dn(i,e,t):Qt.test(i)?Cp(i,e):Dp(i,e)}const Lp=(i,e)=>{const t=[...i],n=t.length,r=i.map((s,o)=>Pp(s,e[o]));return s=>{for(let o=0;o<n;o++)t[o]=r[o](s);return t}},Gv=(i,e)=>{const t=Object.assign(Object.assign({},i),e),n={};for(const r in t)i[r]!==void 0&&e[r]!==void 0&&(n[r]=Pp(i[r],e[r]));return r=>{for(const s in n)t[s]=n[s](r);return t}};function Au(i){const e=ii.parse(i),t=e.length;let n=0,r=0,s=0;for(let o=0;o<t;o++)n||typeof e[o]=="number"?n++:e[o].hue!==void 0?s++:r++;return{parsed:e,numNumbers:n,numRGB:r,numHSL:s}}const Dp=(i,e)=>{const t=ii.createTransformer(e),n=Au(i),r=Au(e);return n.numHSL===r.numHSL&&n.numRGB===r.numRGB&&n.numNumbers>=r.numNumbers?no(Lp(n.parsed,r.parsed),t):o=>`${o>0?e:i}`},Wv=(i,e)=>t=>dn(i,e,t);function Xv(i){if(typeof i=="number")return Wv;if(typeof i=="string")return Qt.test(i)?Cp:Dp;if(Array.isArray(i))return Lp;if(typeof i=="object")return Gv}function jv(i,e,t){const n=[],r=t||Xv(i[0]),s=i.length-1;for(let o=0;o<s;o++){let a=r(i[o],i[o+1]);if(e){const l=Array.isArray(e)?e[o]:e;a=no(l,a)}n.push(a)}return n}function $v([i,e],[t]){return n=>t(Gs(i,e,n))}function Yv(i,e){const t=i.length,n=t-1;return r=>{let s=0,o=!1;if(r<=i[0]?o=!0:r>=i[n]&&(s=n-1,o=!0),!o){let l=1;for(;l<t&&!(i[l]>r||l===n);l++);s=l-1}const a=Gs(i[s],i[s+1],r);return e[s](a)}}function Ip(i,e,{clamp:t=!0,ease:n,mixer:r}={}){const s=i.length;yu(s===e.length),yu(!n||!Array.isArray(n)||n.length===s-1),i[0]>i[s-1]&&(i=[].concat(i),e=[].concat(e),i.reverse(),e.reverse());const o=jv(e,n,r),a=s===2?$v(i,o):Yv(i,o);return t?l=>a(aa(i[0],i[s-1],l)):a}const Aa=i=>e=>1-i(1-e),Rc=i=>e=>e<=.5?i(2*e)/2:(2-i(2*(1-e)))/2,qv=i=>e=>Math.pow(e,i),Np=i=>e=>e*e*((i+1)*e-i),Kv=i=>{const e=Np(i);return t=>(t*=2)<1?.5*e(t):.5*(2-Math.pow(2,-10*(t-1)))},Up=1.525,Zv=4/11,Jv=8/11,Qv=9/10,Op=i=>i,Cc=qv(2),e0=Aa(Cc),Fp=Rc(Cc),Bp=i=>1-Math.sin(Math.acos(i)),Vp=Aa(Bp),t0=Rc(Vp),Pc=Np(Up),n0=Aa(Pc),i0=Rc(Pc),r0=Kv(Up),s0=4356/361,o0=35442/1805,a0=16061/1805,la=i=>{if(i===1||i===0)return i;const e=i*i;return i<Zv?7.5625*e:i<Jv?9.075*e-9.9*i+3.4:i<Qv?s0*e-o0*i+a0:10.8*i*i-20.52*i+10.72},l0=Aa(la),c0=i=>i<.5?.5*(1-la(1-i*2)):.5*la(i*2-1)+.5;function u0(i,e){return i.map(()=>e||Fp).splice(0,i.length-1)}function f0(i){const e=i.length;return i.map((t,n)=>n!==0?n/(e-1):0)}function d0(i,e){return i.map(t=>t*e)}function qo({from:i=0,to:e=1,ease:t,offset:n,duration:r=300}){const s={done:!1,value:i},o=Array.isArray(e)?e:[i,e],a=d0(n&&n.length===o.length?n:f0(o),r);function l(){return Ip(a,o,{ease:Array.isArray(t)?t:u0(o,t)})}let c=l();return{next:u=>(s.value=c(u),s.done=u>=r,s),flipTarget:()=>{o.reverse(),c=l()}}}function h0({velocity:i=0,from:e=0,power:t=.8,timeConstant:n=350,restDelta:r=.5,modifyTarget:s}){const o={done:!1,value:e};let a=t*i;const l=e+a,c=s===void 0?l:s(l);return c!==l&&(a=c-e),{next:u=>{const f=-a*Math.exp(-u/n);return o.done=!(f>r||f<-r),o.value=o.done?c:c+f,o},flipTarget:()=>{}}}const wu={keyframes:qo,spring:Ac,decay:h0};function p0(i){if(Array.isArray(i.to))return qo;if(wu[i.type])return wu[i.type];const e=new Set(Object.keys(i));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?qo:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?Ac:qo}function kp(i,e,t=0){return i-e-t}function m0(i,e,t=0,n=!0){return n?kp(e+-i,e,t):e-(i-e)+t}function g0(i,e,t,n){return n?i>=e+t:i<=-t}const _0=i=>{const e=({delta:t})=>i(t);return{start:()=>Rn.update(e,!0),stop:()=>Ps.update(e)}};function zp(i){var e,t,{from:n,autoplay:r=!0,driver:s=_0,elapsed:o=0,repeat:a=0,repeatType:l="loop",repeatDelay:c=0,onPlay:u,onStop:f,onComplete:d,onRepeat:h,onUpdate:g}=i,_=bp(i,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:p}=_,m,x=0,v=_.duration,y,E=!1,A=!0,S;const P=p0(_);!((t=(e=P).needsInterpolation)===null||t===void 0)&&t.call(e,n,p)&&(S=Ip([0,100],[n,p],{clamp:!1}),n=0,p=100);const N=P(Object.assign(Object.assign({},_),{from:n,to:p}));function b(){x++,l==="reverse"?(A=x%2===0,o=m0(o,v,c,A)):(o=kp(o,v,c),l==="mirror"&&N.flipTarget()),E=!1,h&&h()}function R(){m.stop(),d&&d()}function K(L){if(A||(L=-L),o+=L,!E){const k=N.next(Math.max(0,o));y=k.value,S&&(y=S(y)),E=A?k.done:o<=0}g==null||g(y),E&&(x===0&&(v??(v=o)),x<a?g0(o,v,c,A)&&b():R())}function Q(){u==null||u(),m=s(K),m.start()}return r&&Q(),{stop:()=>{f==null||f(),m.stop()}}}function Hp(i,e){return e?i*(1e3/e):0}function v0({from:i=0,velocity:e=0,min:t,max:n,power:r=.8,timeConstant:s=750,bounceStiffness:o=500,bounceDamping:a=10,restDelta:l=1,modifyTarget:c,driver:u,onUpdate:f,onComplete:d,onStop:h}){let g;function _(v){return t!==void 0&&v<t||n!==void 0&&v>n}function p(v){return t===void 0?n:n===void 0||Math.abs(t-v)<Math.abs(n-v)?t:n}function m(v){g==null||g.stop(),g=zp(Object.assign(Object.assign({},v),{driver:u,onUpdate:y=>{var E;f==null||f(y),(E=v.onUpdate)===null||E===void 0||E.call(v,y)},onComplete:d,onStop:h}))}function x(v){m(Object.assign({type:"spring",stiffness:o,damping:a,restDelta:l},v))}if(_(i))x({from:i,velocity:e,to:p(i)});else{let v=r*e+i;typeof c<"u"&&(v=c(v));const y=p(v),E=y===t?-1:1;let A,S;const P=N=>{A=S,S=N,e=Hp(N-A,oa().delta),(E===1&&N>y||E===-1&&N<y)&&x({from:N,to:y,velocity:e})};m({type:"decay",from:i,velocity:e,timeConstant:s,power:r,restDelta:l,modifyTarget:c,onUpdate:_(v)?P:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const ql=i=>i.hasOwnProperty("x")&&i.hasOwnProperty("y"),Ru=i=>ql(i)&&i.hasOwnProperty("z"),po=(i,e)=>Math.abs(i-e);function Gp(i,e){if(Yl(i)&&Yl(e))return po(i,e);if(ql(i)&&ql(e)){const t=po(i.x,e.x),n=po(i.y,e.y),r=Ru(i)&&Ru(e)?po(i.z,e.z):0;return Math.sqrt(Math.pow(t,2)+Math.pow(n,2)+Math.pow(r,2))}}const Wp=(i,e)=>1-3*e+3*i,Xp=(i,e)=>3*e-6*i,jp=i=>3*i,ca=(i,e,t)=>((Wp(e,t)*i+Xp(e,t))*i+jp(e))*i,$p=(i,e,t)=>3*Wp(e,t)*i*i+2*Xp(e,t)*i+jp(e),x0=1e-7,y0=10;function b0(i,e,t,n,r){let s,o,a=0;do o=e+(t-e)/2,s=ca(o,n,r)-i,s>0?t=o:e=o;while(Math.abs(s)>x0&&++a<y0);return o}const M0=8,S0=.001;function E0(i,e,t,n){for(let r=0;r<M0;++r){const s=$p(e,t,n);if(s===0)return e;const o=ca(e,t,n)-i;e-=o/s}return e}const Ko=11,mo=1/(Ko-1);function T0(i,e,t,n){if(i===e&&t===n)return Op;const r=new Float32Array(Ko);for(let o=0;o<Ko;++o)r[o]=ca(o*mo,i,t);function s(o){let a=0,l=1;const c=Ko-1;for(;l!==c&&r[l]<=o;++l)a+=mo;--l;const u=(o-r[l])/(r[l+1]-r[l]),f=a+u*mo,d=$p(f,i,t);return d>=S0?E0(o,f,i,t):d===0?f:b0(o,a,a+mo,i,t)}return o=>o===0||o===1?o:ca(s(o),e,n)}function Yp(i,e){i.indexOf(e)===-1&&i.push(e)}function qp(i,e){var t=i.indexOf(e);t>-1&&i.splice(t,1)}var Zo=function(){function i(){this.subscriptions=[]}return i.prototype.add=function(e){var t=this;return Yp(this.subscriptions,e),function(){return qp(t.subscriptions,e)}},i.prototype.notify=function(e,t,n){var r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(var s=0;s<r;s++){var o=this.subscriptions[s];o&&o(e,t,n)}},i.prototype.getSize=function(){return this.subscriptions.length},i.prototype.clear=function(){this.subscriptions.length=0},i}(),A0=function(i){return!isNaN(parseFloat(i))},w0=function(){function i(e,t){var n=this;this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Zo,this.velocityUpdateSubscribers=new Zo,this.renderSubscribers=new Zo,this.canTrackVelocity=!1,this.updateAndNotify=function(r,s){s===void 0&&(s=!0),n.prev=n.current,n.current=r;var o=oa(),a=o.delta,l=o.timestamp;n.lastUpdated!==l&&(n.timeDelta=a,n.lastUpdated=l,Rn.postRender(n.scheduleVelocityCheck)),n.prev!==n.current&&n.updateSubscribers.notify(n.current),n.velocityUpdateSubscribers.getSize()&&n.velocityUpdateSubscribers.notify(n.getVelocity()),s&&n.renderSubscribers.notify(n.current)},this.scheduleVelocityCheck=function(){return Rn.postRender(n.velocityCheck)},this.velocityCheck=function(r){var s=r.timestamp;s!==n.lastUpdated&&(n.prev=n.current,n.velocityUpdateSubscribers.notify(n.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=A0(this.current),this.onSubscription=()=>{},this.onUnsubscription=()=>{},t&&(this.onSubscription=()=>{if(this.updateSubscribers.getSize()+this.velocityUpdateSubscribers.getSize()+this.renderSubscribers.getSize()===0){const r=t();this.onUnsubscription=()=>{},r&&(this.onUnsubscription=()=>{this.updateSubscribers.getSize()+this.velocityUpdateSubscribers.getSize()+this.renderSubscribers.getSize()===0&&r()})}})}return i.prototype.onChange=function(e){this.onSubscription();const t=this.updateSubscribers.add(e);return()=>{t(),this.onUnsubscription()}},i.prototype.subscribe=function(e){return this.onChange(e)},i.prototype.clearListeners=function(){this.updateSubscribers.clear(),this.onUnsubscription()},i.prototype.onRenderRequest=function(e){this.onSubscription(),e(this.get());const t=this.renderSubscribers.add(e);return()=>{t(),this.onUnsubscription()}},i.prototype.attach=function(e){this.passiveEffect=e},i.prototype.set=function(e,t){t===void 0&&(t=!0),!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)},i.prototype.update=function(e){this.set(e(this.get()))},i.prototype.get=function(){this.onSubscription();const e=this.current;return this.onUnsubscription(),e},i.prototype.getPrevious=function(){return this.prev},i.prototype.getVelocity=function(){this.onSubscription();const e=this.canTrackVelocity?Hp(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0;return this.onUnsubscription(),e},i.prototype.start=function(e){var t=this;return this.stop(),new Promise(function(n){t.hasAnimated=!0,t.stopAnimation=e(n)}).then(function(){return t.clearAnimation()})},i.prototype.stop=function(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()},i.prototype.isAnimating=function(){return!!this.stopAnimation},i.prototype.clearAnimation=function(){this.stopAnimation=null},i.prototype.destroy=function(){this.updateSubscribers.clear(),this.renderSubscribers.clear(),this.stop(),this.onUnsubscription()},i}();function Ji(i,e){return new w0(i,e)}const dr=[];function Kp(i,e){return{subscribe:Pn(i,e).subscribe}}function Pn(i,e=Dt){let t;const n=new Set;function r(a){if(Ke(i,a)&&(i=a,t)){const l=!dr.length;for(const c of n)c[1](),dr.push(c,i);if(l){for(let c=0;c<dr.length;c+=2)dr[c][0](dr[c+1]);dr.length=0}}}function s(a){r(a(i))}function o(a,l=Dt){const c=[a,l];return n.add(c),n.size===1&&(t=e(r,s)||Dt),a(i),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:o}}function R0(i,e,t){const n=!Array.isArray(i),r=n?[i]:i;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return Kp(t,(o,a)=>{let l=!1;const c=[];let u=0,f=Dt;const d=()=>{if(u)return;f();const g=e(n?c[0]:c,o,a);s?o(g):f=Js(g)?g:Dt},h=r.map((g,_)=>Mc(g,p=>{c[_]=p,u&=~(1<<_),l&&d()},()=>{u|=1<<_}));return l=!0,d(),function(){kn(h),f(),l=!1}})}const cr=(i,e)=>{if(!e||!window)return;let t=e;for(;t=t.parentNode;)if(t.motionDomContext&&t.motionDomContext.has(i))return t.motionDomContext.get(i)},Zp=(i,e,t)=>{e&&window&&(e.motionDomContext||(e.motionDomContext=new Map),e.motionDomContext.set(i,t))};var Ci=i=>cr("MotionConfig",i)||Pn({transformPagePoint:function(e){return e},isStatic:!1});function C0(i){let e;const t=i[2].default,n=_t(t,i,i[1],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&2)&&xt(n,t,r,r[1],e?vt(t,r[1],s,null):yt(r[1]),null)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}const ws=i=>cr("ScaleCorrection",i)||Pn([]),Jp=()=>Pn([]),P0=i=>{const e=zt(ws)||ws(i),t=ws();Bl(ws,t),Zp("ScaleCorrection",i,t),Bl(Jp,e)};function L0(i,e,t){let{$$slots:n={},$$scope:r}=e,{isCustom:s}=e;return P0(s),i.$$set=o=>{"isCustom"in o&&t(0,s=o.isCustom),"$$scope"in o&&t(1,r=o.$$scope)},[s,r,n]}class D0 extends nt{constructor(e){super(),tt(this,e,L0,C0,Ke,{isCustom:0})}}const I0=D0;function si(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(i);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(i,n[r])&&(t[n[r]]=i[n[r]]);return t}function Ut(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return s}function hn(i,e,t){if(t||arguments.length===2)for(var n=0,r=e.length,s;n<r;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return i.concat(s||Array.prototype.slice.call(e))}var ua=function(i){return i*1e3},N0={linear:Op,easeIn:Cc,easeInOut:Fp,easeOut:e0,circIn:Bp,circInOut:t0,circOut:Vp,backIn:Pc,backInOut:i0,backOut:n0,anticipate:r0,bounceIn:l0,bounceInOut:c0,bounceOut:la},Cu=function(i){if(Array.isArray(i)){var e=Ut(i,4),t=e[0],n=e[1],r=e[2],s=e[3];return T0(t,n,r,s)}else if(typeof i=="string")return N0[i];return i},U0=function(i){return Array.isArray(i)&&typeof i[0]!="number"},Pu=function(i,e){return i==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&ii.test(e)&&!e.startsWith("url("))},Xs=function(i){return Array.isArray(i)},Fi=function(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}},go=function(i){return{type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}},$a=function(){return{type:"keyframes",ease:"linear",duration:.3}},O0=function(i){return{type:"keyframes",duration:.8,values:i}},Lu={x:Fi,y:Fi,z:Fi,rotate:Fi,rotateX:Fi,rotateY:Fi,rotateZ:Fi,scaleX:go,scaleY:go,scale:go,opacity:$a,backgroundColor:$a,color:$a,default:go},F0=function(i,e){var t;return Xs(e)?t=O0:t=Lu[i]||Lu.default,Object.assign({to:e},t(e))},Du=Object.assign(Object.assign({},lr),{transform:Math.round}),Qp={borderWidth:He,borderTopWidth:He,borderRightWidth:He,borderBottomWidth:He,borderLeftWidth:He,borderRadius:He,radius:He,borderTopLeftRadius:He,borderTopRightRadius:He,borderBottomRightRadius:He,borderBottomLeftRadius:He,width:He,maxWidth:He,height:He,maxHeight:He,size:He,top:He,right:He,bottom:He,left:He,padding:He,paddingTop:He,paddingRight:He,paddingBottom:He,paddingLeft:He,margin:He,marginTop:He,marginRight:He,marginBottom:He,marginLeft:He,rotate:_i,rotateX:_i,rotateY:_i,rotateZ:_i,scale:ho,scaleX:ho,scaleY:ho,scaleZ:ho,skew:_i,skewX:_i,skewY:_i,distance:He,translateX:He,translateY:He,translateZ:He,x:He,y:He,z:He,perspective:He,transformPerspective:He,opacity:Ds,originX:Su,originY:Su,originZ:He,zIndex:Du,fillOpacity:Ds,strokeOpacity:Ds,numOctaves:Du},B0=Object.assign(Object.assign({},Qp),{color:Qt,backgroundColor:Qt,outlineColor:Qt,fill:Qt,stroke:Qt,borderColor:Qt,borderTopColor:Qt,borderRightColor:Qt,borderBottomColor:Qt,borderLeftColor:Qt,filter:$l,WebkitFilter:$l}),Lc=function(i){return B0[i]};function Dc(i,e){var t,n=Lc(i);return n!==$l&&(n=ii),(t=n.getAnimatableNone)===null||t===void 0?void 0:t.call(n,e)}function V0(i){i.when,i.delay,i.delayChildren,i.staggerChildren,i.staggerDirection,i.repeat,i.repeatType,i.repeatDelay,i.from;var e=si(i,["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(e).length}function k0(i){var e=i.ease,t=i.times,n=i.yoyo,r=i.flip,s=i.loop,o=si(i,["ease","times","yoyo","flip","loop"]),a=Object.assign({},o);return t&&(a.offset=t),o.duration&&(a.duration=ua(o.duration)),o.repeatDelay&&(a.repeatDelay=ua(o.repeatDelay)),e&&(a.ease=U0(e)?e.map(Cu):Cu(e)),o.type==="tween"&&(a.type="keyframes"),(n||s||r)&&(n?a.repeatType="reverse":s?a.repeatType="loop":r&&(a.repeatType="mirror"),a.repeat=s||n||r||o.repeat),o.type!=="spring"&&(a.type="keyframes"),a}function z0(i,e){var t,n=Ic(i,e)||{};return(t=n.delay)!==null&&t!==void 0?t:0}function H0(i){return Array.isArray(i.to)&&i.to[0]===null&&(i.to=hn([],Ut(i.to)),i.to[0]=i.from),i}function G0(i,e,t){var n;return Array.isArray(e.to)&&((n=i.duration)!==null&&n!==void 0||(i.duration=.8)),H0(e),V0(i)||(i=Object.assign(Object.assign({},i),F0(t,e.to))),Object.assign(Object.assign({},e),k0(i))}function W0(i,e,t,n,r){var s,o=Ic(n,i),a=(s=o.from)!==null&&s!==void 0?s:e.get(),l=Pu(i,t);a==="none"&&l&&typeof t=="string"?a=Dc(i,t):Iu(a)&&typeof t=="string"?a=Nu(t):!Array.isArray(t)&&Iu(t)&&typeof a=="string"&&(t=Nu(a));var c=Pu(i,a);function u(){var d={from:a,to:t,velocity:e.getVelocity(),onComplete:r,onUpdate:function(h){return e.set(h)}};return o.type==="inertia"||o.type==="decay"?v0(Object.assign(Object.assign({},d),o)):zp(Object.assign(Object.assign({},G0(o,d,i)),{onUpdate:function(h){var g;d.onUpdate(h),(g=o.onUpdate)===null||g===void 0||g.call(o,h)},onComplete:function(){var h;d.onComplete(),(h=o.onComplete)===null||h===void 0||h.call(o)}}))}function f(){var d;return e.set(t),r(),(d=o==null?void 0:o.onComplete)===null||d===void 0||d.call(o),{stop:function(){}}}return!c||!l||o.type===!1?f:u}function Iu(i){return i===0||typeof i=="string"&&parseFloat(i)===0&&i.indexOf(" ")===-1}function Nu(i){return typeof i=="number"?0:Dc("",i)}function Ic(i,e){return i[e]||i.default||i}function fa(i,e,t,n){return n===void 0&&(n={}),e.start(function(r){var s,o,a=W0(i,e,t,n,r),l=z0(n,i),c=function(){return o=a()};return l?s=setTimeout(c,ua(l)):c(),function(){clearTimeout(s),o==null||o.stop()}})}var X0=function(i){return/^\-?\d*\.?\d+$/.test(i)},j0=function(i){return!!(i&&typeof i=="object"&&i.mix&&i.toValue)},$0=function(i){return Xs(i)?i[i.length-1]||0:i},em=function(i){return function(e){return e.test(i)}},Y0={test:function(i){return i==="auto"},parse:function(i){return i}},tm=[lr,He,Hr,_i,Lv,Pv,Y0],Ya=function(i){return tm.find(em(i))},q0=hn(hn([],Ut(tm)),[Qt,ii]),K0=function(i){return q0.find(em(i))};function nm(i){return Array.isArray(i)}function Tn(i){return typeof i=="string"||nm(i)}function Z0(i){var e={};return i.forEachValue(function(t,n){return e[n]=t.get()}),e}function J0(i){var e={};return i.forEachValue(function(t,n){return e[n]=t.getVelocity()}),e}function im(i,e,t,n,r){var s;return n===void 0&&(n={}),r===void 0&&(r={}),typeof e=="string"&&(e=(s=i.variants)===null||s===void 0?void 0:s[e]),typeof e=="function"?e(t??i.custom,n,r):e}function wa(i,e,t){var n=i.getProps();return im(n,e,t??n.custom,Z0(i),J0(i))}function Ra(i){var e;return typeof((e=i.animate)===null||e===void 0?void 0:e.start)=="function"||Tn(i.initial)||Tn(i.animate)||Tn(i.whileHover)||Tn(i.whileDrag)||Tn(i.whileTap)||Tn(i.whileFocus)||Tn(i.exit)}function rm(i){return!!(Ra(i)||i.variants)}function Q0(i,e,t){i.hasValue(e)?i.getValue(e).set(t):i.addValue(e,Ji(t))}function ex(i,e){var t=wa(i,e),n=t?i.makeTargetAnimatable(t,!1):{},r=n.transitionEnd,s=r===void 0?{}:r;n.transition;var o=si(n,["transitionEnd","transition"]);o=Object.assign(Object.assign({},o),s);for(var a in o){var l=$0(o[a]);Q0(i,a,l)}}function tx(i,e,t){var n,r,s,o,a=Object.keys(e).filter(function(h){return!i.hasValue(h)}),l=a.length;if(l)for(var c=0;c<l;c++){var u=a[c],f=e[u],d=null;Array.isArray(f)&&(d=f[0]),d===null&&(d=(r=(n=t[u])!==null&&n!==void 0?n:i.readValue(u))!==null&&r!==void 0?r:e[u]),d!=null&&(typeof d=="string"&&X0(d)?d=parseFloat(d):!K0(d)&&ii.test(f)&&(d=Dc(u,f)),i.addValue(u,Ji(d)),(s=(o=t)[u])!==null&&s!==void 0||(o[u]=d),i.setBaseTarget(u,d))}}function nx(i,e){if(e){var t=e[i]||e.default||e;return t.from}}function ix(i,e,t){var n,r,s={};for(var o in i)s[o]=(n=nx(o,e))!==null&&n!==void 0?n:(r=t.getValue(o))===null||r===void 0?void 0:r.get();return s}function rx(i,e,t){t===void 0&&(t={}),i.notifyAnimationStart();var n;if(Array.isArray(e)){var r=e.map(function(o){return Kl(i,o,t)});n=Promise.all(r)}else if(typeof e=="string")n=Kl(i,e,t);else{var s=typeof e=="function"?wa(i,e,t.custom):e;n=sm(i,s,t)}return n.then(function(){return i.notifyAnimationComplete(e)})}function Kl(i,e,t){var n;t===void 0&&(t={});var r=wa(i,e,t.custom),s=(r||{}).transition,o=s===void 0?i.getDefaultTransition()||{}:s;t.transitionOverride&&(o=t.transitionOverride);var a=r?function(){return sm(i,r,t)}:function(){return Promise.resolve()},l=!((n=i.variantChildren)===null||n===void 0)&&n.size?function(h){h===void 0&&(h=0);var g=o.delayChildren,_=g===void 0?0:g,p=o.staggerChildren,m=o.staggerDirection;return sx(i,e,_+h,p,m,t)}:function(){return Promise.resolve()},c=o.when;if(c){var u=Ut(c==="beforeChildren"?[a,l]:[l,a],2),f=u[0],d=u[1];return f().then(d)}else return Promise.all([a(),l(t.delay)])}function sm(i,e,t){var n,r=t===void 0?{}:t,s=r.delay,o=s===void 0?0:s,a=r.transitionOverride,l=r.type,c=i.makeTargetAnimatable(e),u=c.transition,f=u===void 0?i.getDefaultTransition():u,d=c.transitionEnd,h=si(c,["transition","transitionEnd"]);a&&(f=a);var g=[],_=l&&((n=i.animationState)===null||n===void 0?void 0:n.getState()[l]);for(var p in h){var m=i.getValue(p),x=h[p];if(!(!m||x===void 0||_&&ax(_,p))){var v=fa(p,m,x,Object.assign({delay:o},f));g.push(v)}}return Promise.all(g).then(function(){d&&ex(i,d)})}function sx(i,e,t,n,r,s){t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=1);var o=[],a=(i.variantChildren.size-1)*n,l=r===1?function(c){return c===void 0&&(c=0),c*n}:function(c){return c===void 0&&(c=0),a-c*n};return Array.from(i.variantChildren).sort(ox).forEach(function(c,u){o.push(Kl(c,e,Object.assign(Object.assign({},s),{delay:t+l(u)})).then(function(){return c.notifyAnimationComplete(e)}))}),Promise.all(o)}function ox(i,e){return i.sortNodePosition(e)}function ax(i,e){var t=i.protectedKeys,n=i.needsAnimating,r=t.hasOwnProperty(e)&&n[e]!==!0;return n[e]=!1,r}var Is={};function lx(i){for(var e in i)Is[e]=i[e]}function rn(i){return[i("x"),i("y")]}function cx(i){return i}function om(i){var e=i.top,t=i.left,n=i.right,r=i.bottom;return{x:{min:t,max:n},y:{min:e,max:r}}}function ux(i){var e=i.x,t=i.y;return{top:t.min,bottom:t.max,left:e.min,right:e.max}}function fx(i,e){var t=i.top,n=i.left,r=i.bottom,s=i.right;e===void 0&&(e=cx);var o=e({x:n,y:t}),a=e({x:s,y:r});return{top:o.y,left:o.x,bottom:a.y,right:a.x}}function Pi(){return{x:{min:0,max:1},y:{min:0,max:1}}}function dx(i){return{x:Object.assign({},i.x),y:Object.assign({},i.y)}}var Uu={translate:0,scale:1,origin:0,originPoint:0};function Ou(){return{x:Object.assign({},Uu),y:Object.assign({},Uu)}}function am(i){var e=i.getProps(),t=e.drag,n=e._dragX;return t&&!n}function Fu(i,e){i.min=e.min,i.max=e.max}function hx(i,e){Fu(i.x,e.x),Fu(i.y,e.y)}function da(i,e,t){var n=i-t,r=e*n;return t+r}function Bu(i,e,t,n,r){return r!==void 0&&(i=da(i,r,n)),da(i,t,n)+e}function Zl(i,e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=1),i.min=Bu(i.min,e,t,n,r),i.max=Bu(i.max,e,t,n,r)}function px(i,e){var t=e.x,n=e.y;Zl(i.x,t.translate,t.scale,t.originPoint),Zl(i.y,n.translate,n.scale,n.originPoint)}function Vu(i,e,t,n){var r=Ut(n,3),s=r[0],o=r[1],a=r[2];i.min=e.min,i.max=e.max;var l=t[a]!==void 0?t[a]:.5,c=dn(e.min,e.max,l);Zl(i,t[s],t[o],c,t.scale)}var lm=["x","scaleX","originX"],cm=["y","scaleY","originY"];function Jl(i,e,t){Vu(i.x,e.x,t,lm),Vu(i.y,e.y,t,cm)}function ku(i,e,t,n,r){return i-=e,i=da(i,1/t,n),r!==void 0&&(i=da(i,1/r,n)),i}function mx(i,e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=1),n===void 0&&(n=.5);var s=dn(i.min,i.max,n)-e;i.min=ku(i.min,e,t,s,r),i.max=ku(i.max,e,t,s,r)}function zu(i,e,t){var n=Ut(t,3),r=n[0],s=n[1],o=n[2];mx(i,e[r],e[s],e[o],e.scale)}function um(i,e){zu(i.x,e,lm),zu(i.y,e,cm)}function gx(i,e,t){var n=t.length;if(n){e.x=e.y=1;for(var r,s,o=0;o<n;o++)r=t[o],s=r.getLayoutState().delta,e.x*=s.x.scale,e.y*=s.y.scale,px(i,s),am(r)&&Jl(i,i,r.getLatestValues())}}var _x=function(i){return aa(0,1,i)};function Hu(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=.01),Gp(i,e)<t}function js(i){return i.max-i.min}function vx(i,e){var t=.5,n=js(i),r=js(e);return r>n?t=Gs(e.min,e.max-n,i.min):n>r&&(t=Gs(i.min,i.max-r,e.min)),_x(t)}function Gu(i,e,t,n){n===void 0&&(n=.5),i.origin=n,i.originPoint=dn(e.min,e.max,i.origin),i.scale=js(t)/js(e),Hu(i.scale,1,1e-4)&&(i.scale=1),i.translate=dn(t.min,t.max,i.origin)-i.originPoint,Hu(i.translate)&&(i.translate=0)}function fm(i,e,t,n){Gu(i.x,e.x,t.x,Wu(n.originX)),Gu(i.y,e.y,t.y,Wu(n.originY))}function Wu(i){return typeof i=="number"?i:.5}function Xu(i,e,t){i.min=t.min+e.min,i.max=i.min+js(e)}function xx(i,e){Xu(i.target.x,i.relativeTarget.x,e.target.x),Xu(i.target.y,i.relativeTarget.y,e.target.y)}var Li=function(i){return i!==null&&typeof i=="object"&&i.getVelocity},yx=function(){return{isEnabled:!1,isTargetLocked:!1,target:Pi(),targetFinal:Pi()}};function dm(){return{isHydrated:!1,layout:Pi(),layoutCorrected:Pi(),treeScale:{x:1,y:1},delta:Ou(),deltaFinal:Ou(),deltaTransform:""}}var ju=dm();function Ca(i,e,t){var n=i.x,r=i.y,s=n.translate/e.x,o=r.translate/e.y,a="translate3d("+s+"px, "+o+"px, 0) ";if(t){var l=t.rotate,c=t.rotateX,u=t.rotateY;l&&(a+="rotate("+l+") "),c&&(a+="rotateX("+c+") "),u&&(a+="rotateY("+u+") ")}return a+="scale("+n.scale+", "+r.scale+")",!t&&a===bx?"":a}function hm(i){var e=i.deltaFinal;return e.x.origin*100+"% "+e.y.origin*100+"% 0"}var bx=Ca(ju.delta,ju.treeScale,{x:1,y:1}),Nc=function(i){return typeof i=="object"&&typeof i.start=="function"};function pm(i,e){if(!Array.isArray(e))return!1;var t=e.length;if(t!==i.length)return!1;for(var n=0;n<t;n++)if(e[n]!==i[n])return!1;return!0}var Lt;(function(i){i.Animate="animate",i.Hover="whileHover",i.Tap="whileTap",i.Drag="whileDrag",i.Focus="whileFocus",i.Exit="exit"})(Lt||(Lt={}));var Uc=[Lt.Animate,Lt.Hover,Lt.Tap,Lt.Drag,Lt.Focus,Lt.Exit],Mx=hn([],Ut(Uc)).reverse(),Sx=Uc.length;function Ex(i){return function(e){return Promise.all(e.map(function(t){var n=t.animation,r=t.options;return rx(i,n,r)}))}}function Tx(i){var e=Ex(i),t=wx(),n={},r=!0,s=function(u,f){var d=wa(i,f);if(d){d.transition;var h=d.transitionEnd,g=si(d,["transition","transitionEnd"]);u=Object.assign(Object.assign(Object.assign({},u),g),h)}return u};function o(u){return n[u]!==void 0}function a(u){e=u(i)}function l(u,f){for(var d,h=i.getProps(),g=i.getVariantContext(!0)||{},_=[],p=new Set,m={},x=1/0,v=function(S){var P=Mx[S],N=t[P],b=(d=h[P])!==null&&d!==void 0?d:g[P],R=Tn(b),K=P===f?N.isActive:null;K===!1&&(x=S);var Q=b===g[P]&&b!==h[P]&&R;if(Q&&r&&i.manuallyAnimateOnMount&&(Q=!1),N.protectedKeys=Object.assign({},m),!N.isActive&&K===null||!b&&!N.prevProp||Nc(b)||typeof b=="boolean")return"continue";var L=Ax(N.prevProp,b)||P===f&&N.isActive&&!Q&&R||S>x&&R,k=Array.isArray(b)?b:[b],V=k.reduce(s,{});K===!1&&(V={});var X=N.prevResolvedValues,$=X===void 0?{}:X,U=Object.assign(Object.assign({},$),V),q=function(H){L=!0,p.delete(H),N.needsAnimating[H]=!0};for(var te in U){var fe=V[te],_e=$[te];m.hasOwnProperty(te)||(fe!==_e?Xs(fe)&&Xs(_e)?pm(fe,_e)?N.protectedKeys[te]=!0:q(te):fe!==void 0?q(te):p.add(te):fe!==void 0&&p.has(te)?q(te):N.protectedKeys[te]=!0)}N.prevProp=b,N.prevResolvedValues=V,N.isActive&&(m=Object.assign(Object.assign({},m),V)),r&&i.blockInitialAnimation&&(L=!1),L&&!Q&&_.push.apply(_,hn([],Ut(k.map(function(H){return{animation:H,options:Object.assign({type:P},u)}}))))},y=0;y<Sx;y++)v(y);if(n=Object.assign({},m),p.size){var E={};p.forEach(function(S){var P=i.getBaseTarget(S);P!==void 0&&(E[S]=P)}),_.push({animation:E})}var A=!!_.length;return r&&h.initial===!1&&!i.manuallyAnimateOnMount&&(A=!1),r=!1,A?e(_):Promise.resolve()}function c(u,f,d){var h;return t[u].isActive===f?Promise.resolve():((h=i.variantChildren)===null||h===void 0||h.forEach(function(g){var _;return(_=g.animationState)===null||_===void 0?void 0:_.setActive(u,f)}),t[u].isActive=f,l(d,u))}return{isAnimated:o,animateChanges:l,setActive:c,setAnimateFunction:a,getState:function(){return t}}}function Ax(i,e){return typeof e=="string"?e!==i:nm(e)?!pm(e,i):!1}function hr(i){return i===void 0&&(i=!1),{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function wx(){var i;return i={},i[Lt.Animate]=hr(!0),i[Lt.Hover]=hr(),i[Lt.Tap]=hr(),i[Lt.Drag]=hr(),i[Lt.Focus]=hr(),i[Lt.Exit]=hr(),i}var _o=["LayoutMeasure","BeforeLayoutMeasure","LayoutUpdate","ViewportBoxUpdate","Update","Render","AnimationComplete","LayoutAnimationComplete","AnimationStart","SetAxisTarget","Unmount"];function Rx(){var i=_o.map(function(){return new Zo}),e={},t={clearAllListeners:function(){return i.forEach(function(n){return n.clear()})},updatePropListeners:function(n){return _o.forEach(function(r){var s;(s=e[r])===null||s===void 0||s.call(e);var o="on"+r,a=n[o];a&&(e[r]=t[o](a))})}};return i.forEach(function(n,r){t["on"+_o[r]]=function(s){return n.add(s)},t["notify"+_o[r]]=function(){for(var s=[],o=0;o<arguments.length;o++)s[o]=arguments[o];return n.notify.apply(n,hn([],Ut(s)))}}),t}function Cx(i,e,t){var n;for(var r in e){var s=e[r],o=t[r];if(Li(s))i.addValue(r,s);else if(Li(o))i.addValue(r,Ji(s));else if(o!==s)if(i.hasValue(r)){var a=i.getValue(r);!a.hasAnimated&&a.set(s)}else i.addValue(r,Ji((n=i.getStaticValue(r))!==null&&n!==void 0?n:s))}for(var r in t)e[r]===void 0&&i.removeValue(r);return e}function Px(i,e,t,n){var r=i.delta,s=i.layout,o=i.layoutCorrected,a=i.treeScale,l=e.target;hx(o,s),gx(o,a,t),fm(r,o,l,n)}var Oc=function(i,e){return i.depth-e.depth},Lx=function(){function i(){this.children=[],this.isDirty=!1}return i.prototype.add=function(e){Yp(this.children,e),this.isDirty=!0},i.prototype.remove=function(e){qp(this.children,e),this.isDirty=!0},i.prototype.forEach=function(e){this.isDirty&&this.children.sort(Oc);for(var t=this.children.length,n=0;n<t;n++)e(this.children[n])},i}();function Dx(i,e,t,n){i.min=dn(e.min,t.min,n),i.max=dn(e.max,t.max,n)}function $u(i,e){return{min:e.min-i.min,max:e.max-i.min}}function ha(i,e){return{x:$u(i.x,e.x),y:$u(i.y,e.y)}}function Ix(i){var e=i.getProjectionParent();if(!e){i.rebaseProjectionTarget();return}var t=ha(e.getLayoutState().layout,i.getLayoutState().layout);rn(function(n){i.setProjectionTargetAxis(n,t[n].min,t[n].max,!0)})}var mm=function(i){var e=i.treeType,t=e===void 0?"":e,n=i.build,r=i.getBaseTarget,s=i.makeTargetAnimatable,o=i.measureViewportBox,a=i.render,l=i.readValueFromInstance,c=i.resetTransform,u=i.restoreTransform,f=i.removeValueFromRenderState,d=i.sortNodePosition,h=i.scrapeMotionValuesFromProps;return function(g,_){var p=g.parent,m=g.props,x=g.presenceId,v=g.blockInitialAnimation,y=g.visualState;_===void 0&&(_={});var E=y.latestValues,A=y.renderState,S,P=Rx(),N=yx(),b,R=N,K=E,Q,L=dm(),k,V=!1,X=new Map,$=new Map,U={},q,te=Object.assign({},E),fe;function _e(){S&&(re.isProjectionReady()&&(Jl(R.targetFinal,R.target,K),fm(L.deltaFinal,L.layoutCorrected,R.targetFinal,E)),H(),a(S,A))}function H(){var G=E;if(k&&k.isActive()){var Z=k.getCrossfadeState(re);Z&&(G=Z)}n(re,A,G,R,L,_,m)}function oe(){P.notifyUpdate(E)}function ge(){if(re.isProjectionReady()){var G=L.delta,Z=L.treeScale,be=Z.x,we=Z.y,Ce=L.deltaTransform;Px(L,R,re.path,E),V&&re.notifyViewportBoxUpdate(R.target,G),V=!1;var st=Ca(G,Z);(st!==Ce||be!==Z.x||we!==Z.y)&&re.scheduleRender(),L.deltaTransform=st}}function ze(){re.layoutTree.forEach(Ux)}function Pe(G,Z){var be=Z.onChange(function(Ce){E[G]=Ce,m.onUpdate&&Rn.update(oe,!1,!0)}),we=Z.onRenderRequest(re.scheduleRender);$.set(G,function(){be(),we()})}var xe=h(m);for(var at in xe){var Be=xe[at];E[at]!==void 0&&Li(Be)&&Be.set(E[at],!1)}var F=Ra(m),Tt=rm(m),re=Object.assign(Object.assign({treeType:t,current:null,depth:p?p.depth+1:0,parent:p,children:new Set,path:p?hn(hn([],Ut(p.path)),[p]):[],layoutTree:p?p.layoutTree:new Lx,presenceId:x,projection:N,variantChildren:Tt?new Set:void 0,isVisible:void 0,manuallyAnimateOnMount:!!(p!=null&&p.isMounted()),blockInitialAnimation:v,isMounted:function(){return!!S},mount:function(G){S=re.current=G,re.pointTo(re),Tt&&p&&!F&&(fe=p==null?void 0:p.addVariantChild(re)),p==null||p.children.add(re)},unmount:function(){Ps.update(oe),Ps.render(_e),Ps.preRender(re.updateLayoutProjection),$.forEach(function(G){return G()}),re.stopLayoutAnimation(),re.layoutTree.remove(re),fe==null||fe(),p==null||p.children.delete(re),Q==null||Q(),P.clearAllListeners()},addVariantChild:function(G){var Z,be=re.getClosestVariantNode();if(be)return(Z=be.variantChildren)===null||Z===void 0||Z.add(G),function(){return be.variantChildren.delete(G)}},sortNodePosition:function(G){return!d||t!==G.treeType?0:d(re.getInstance(),G.getInstance())},getClosestVariantNode:function(){return Tt?re:p==null?void 0:p.getClosestVariantNode()},scheduleUpdateLayoutProjection:p?p.scheduleUpdateLayoutProjection:function(){return Rn.preRender(re.updateTreeLayoutProjection,!1,!0)},getLayoutId:function(){return m.layoutId},getInstance:function(){return S},getStaticValue:function(G){return E[G]},setStaticValue:function(G,Z){return E[G]=Z},getLatestValues:function(){return E},setVisibility:function(G){re.isVisible!==G&&(re.isVisible=G,re.scheduleRender())},makeTargetAnimatable:function(G,Z){return Z===void 0&&(Z=!0),s(re,G,m,Z)},addValue:function(G,Z){re.hasValue(G)&&re.removeValue(G),X.set(G,Z),E[G]=Z.get(),Pe(G,Z)},removeValue:function(G){var Z;X.delete(G),(Z=$.get(G))===null||Z===void 0||Z(),$.delete(G),delete E[G],f(G,A)},hasValue:function(G){return X.has(G)},getValue:function(G,Z){var be=X.get(G);return be===void 0&&Z!==void 0&&(be=Ji(Z),re.addValue(G,be)),be},forEachValue:function(G){return X.forEach(G)},readValue:function(G){var Z;return(Z=E[G])!==null&&Z!==void 0?Z:l(S,G,_)},setBaseTarget:function(G,Z){te[G]=Z},getBaseTarget:function(G){if(r){var Z=r(m,G);if(Z!==void 0&&!Li(Z))return Z}return te[G]}},P),{build:function(){return H(),A},scheduleRender:function(){Rn.render(_e,!1,!0)},syncRender:_e,setProps:function(G){m=G,P.updatePropListeners(G),U=Cx(re,h(m),U)},getProps:function(){return m},getVariant:function(G){var Z;return(Z=m.variants)===null||Z===void 0?void 0:Z[G]},getDefaultTransition:function(){return m.transition},getVariantContext:function(G){if(G===void 0&&(G=!1),G)return p==null?void 0:p.getVariantContext();if(!F){var Z=(p==null?void 0:p.getVariantContext())||{};return m.initial!==void 0&&(Z.initial=m.initial),Z}for(var be={},we=0;we<Ox;we++){var Ce=gm[we],st=m[Ce];(Tn(st)||st===!1)&&(be[Ce]=st)}return be},enableLayoutProjection:function(){N.isEnabled=!0,re.layoutTree.add(re)},lockProjectionTarget:function(){N.isTargetLocked=!0},unlockProjectionTarget:function(){re.stopLayoutAnimation(),N.isTargetLocked=!1},getLayoutState:function(){return L},setCrossfader:function(G){k=G},isProjectionReady:function(){return N.isEnabled&&N.isHydrated&&L.isHydrated},startLayoutAnimation:function(G,Z,be){be===void 0&&(be=!1);var we=re.getProjectionAnimationProgress()[G],Ce=be?N.relativeTarget[G]:N.target[G],st=Ce.min,w=Ce.max,M=w-st;return we.clearListeners(),we.set(st),we.set(st),we.onChange(function(Y){re.setProjectionTargetAxis(G,Y,Y+M,be)}),re.animateMotionValue(G,we,0,Z)},stopLayoutAnimation:function(){rn(function(G){return re.getProjectionAnimationProgress()[G].stop()})},measureViewportBox:function(G){G===void 0&&(G=!0);var Z=o(S,_);return G||um(Z,E),Z},getProjectionAnimationProgress:function(){return q||(q={x:Ji(0),y:Ji(0)}),q},setProjectionTargetAxis:function(G,Z,be,we){we===void 0&&(we=!1);var Ce;we?(N.relativeTarget||(N.relativeTarget=Pi()),Ce=N.relativeTarget[G]):(N.relativeTarget=void 0,Ce=N.target[G]),N.isHydrated=!0,Ce.min=Z,Ce.max=be,V=!0,P.notifySetAxisTarget()},rebaseProjectionTarget:function(G,Z){Z===void 0&&(Z=L.layout);var be=re.getProjectionAnimationProgress(),we=be.x,Ce=be.y,st=!N.relativeTarget&&!N.isTargetLocked&&!we.isAnimating()&&!Ce.isAnimating();(G||st)&&rn(function(w){var M=Z[w],Y=M.min,ee=M.max;re.setProjectionTargetAxis(w,Y,ee)})},notifyLayoutReady:function(G){Ix(re),re.notifyLayoutUpdate(L.layout,re.prevViewportBox||L.layout,G)},resetTransform:function(){return c(re,S,m)},restoreTransform:function(){return u(S,A)},updateLayoutProjection:ge,updateTreeLayoutProjection:function(){re.layoutTree.forEach(Nx),Rn.preRender(ze,!1,!0)},getProjectionParent:function(){if(b===void 0){for(var G=!1,Z=re.path.length-1;Z>=0;Z--){var be=re.path[Z];if(be.projection.isEnabled){G=be;break}}b=G}return b},resolveRelativeTargetBox:function(){var G=re.getProjectionParent();if(!(!N.relativeTarget||!G)&&(xx(N,G.projection),am(G))){var Z=N.target;Jl(Z,Z,G.getLatestValues())}},shouldResetTransform:function(){return!!m._layoutResetTransform},pointTo:function(G){R=G.projection,K=G.getLatestValues(),Q==null||Q(),Q=no(G.onSetAxisTarget(re.scheduleUpdateLayoutProjection),G.onLayoutAnimationComplete(function(){var Z;re.isPresent?re.presence=zs.Present:(Z=re.layoutSafeToRemove)===null||Z===void 0||Z.call(re)}))},isPresent:!0,presence:zs.Entering});return re}};function Nx(i){i.resolveRelativeTargetBox()}function Ux(i){i.updateLayoutProjection()}var gm=hn(["initial"],Ut(Uc)),Ox=gm.length,Fx=new Set(["initial","animate","exit","style","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","onLayoutAnimationComplete","onViewportBoxUpdate","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","whileDrag","onPan","onPanStart","onPanEnd","onPanSessionStart","onTap","onTapStart","onTapCancel","onHoverStart","onHoverEnd","whileFocus","whileTap","whileHover"]);function pa(i){return Fx.has(i)}const Di=i=>cr("Presence",i)||Pn(null);let Bx=0;const Vx=()=>Bx++;function kx(i){return i===null?!0:i.isPresent}const _m=(i=!1)=>{const e=zt(Di)||Di(i),t=xn(e)===null?void 0:Vx();return rs(()=>{xn(e)!==null&&xn(e).register(t)}),xn(e)===null?Kp([!0,null]):R0(e,n=>!n.isPresent&&n.onExitComplete?[!1,()=>{var r;return(r=n.onExitComplete)==null?void 0:r.call(n,t)}]:[!0])},Yu=i=>cr("LayoutGroup",i)||Pn(null);function vm(i){var e=i.projection.isEnabled;return e||i.shouldResetTransform()}function ma(i,e){e===void 0&&(e=[]);var t=i.parent;return t&&ma(t,e),vm(i)&&e.push(i),e}function zx(i){var e=[],t=function(n){vm(n)&&e.push(n),n.children.forEach(t)};return i.children.forEach(t),e.sort(Oc)}function Jo(i){if(!i.shouldResetTransform()){var e=i.getLayoutState();i.notifyBeforeLayoutMeasure(e.layout),e.isHydrated=!0,e.layout=i.measureViewportBox(),e.layoutCorrected=dx(e.layout),i.notifyLayoutMeasure(e.layout,i.prevViewportBox||e.layout),Rn.update(function(){return i.rebaseProjectionTarget()})}}function Hx(i,e){i.shouldResetTransform()||(e||(i.prevViewportBox=i.measureViewportBox(!1)),i.rebaseProjectionTarget(!1,i.prevViewportBox))}var Ns=new Set;function qu(i,e,t){i[t]||(i[t]=[]),i[t].push(e)}function Ql(i){return Ns.add(i),function(){return Ns.delete(i)}}function ec(){if(Ns.size){var i=0,e=[[]],t=[],n=function(a){return qu(e,a,i)},r=function(a){qu(t,a,i),i++};Ns.forEach(function(a){a(n,r),i=0}),Ns.clear(),Rn.postRender(function(){setTimeout(function(){return!1},10)});for(var s=t.length,o=0;o<=s;o++)e[o]&&e[o].forEach(Ku),t[o]&&t[o].forEach(Ku)}}var Ku=function(i){return i()},Gx={layoutReady:function(i){return i.notifyLayoutReady()}};function xm(){var i=new Set;return{add:function(e){return i.add(e)},flush:function(e){var t=e===void 0?Gx:e,n=t.layoutReady,r=t.parent;Ql(function(s,o){var a=Array.from(i).sort(Oc),l=r?ma(r):[];o(function(){var c=hn(hn([],Ut(l)),Ut(a));c.forEach(function(u){return u.resetTransform()})}),s(function(){a.forEach(Jo)}),o(function(){l.forEach(function(c){return c.restoreTransform()}),a.forEach(n)}),s(function(){a.forEach(function(c){c.isPresent&&(c.presence=zs.Present)})}),o(function(){Or.preRender(),Or.render()}),s(function(){Rn.postRender(function(){return a.forEach(Wx)}),i.clear()})}),ec()}}}function Wx(i){i.prevViewportBox=i.projection.target}var Zu=i=>cr("SharedLayout",i)||Pn(xm()),Ju=()=>Pn(xm());function pr(i){return!!i.forceUpdate}const Qu=i=>cr("Lazy",i)||Pn({strict:!1}),ir=i=>cr("Motion",i)||Pn({}),Xx=i=>({visualElement:i&1}),ef=i=>({visualElement:i[0]});function jx(i){let e;const t=i[19].default,n=_t(t,i,i[18],ef);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&262145)&&xt(n,t,r,r[18],e?vt(t,r[18],s,Xx):yt(r[18]),ef)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function $x(i,e,t){let n,r,s,o,a,{$$slots:l={},$$scope:c}=e,{createVisualElement:u=void 0,props:f,Component:d,visualState:h,isCustom:g}=e;const _=zt(Ci)||Ci(g);Kt(i,_,P=>t(15,r=P));const p=zt(Di)||Di(g);Kt(i,p,P=>t(14,n=P));const m=zt(Qu)||Qu(g);Kt(i,m,P=>t(20,s=P));const x=zt(ir)||ir(g);Kt(i,x,P=>t(17,a=P));let v=xn(x).visualElement;const y=zt(Yu)||Yu(g);Kt(i,y,P=>t(16,o=P));let E=o&&f.layoutId!==void 0?o+"-"+f.layoutId:f.layoutId,A;u||(u=s.renderer);let S=A;return Ea(()=>{Ec().then(()=>{var P;(P=S.animationState)==null||P.animateChanges()})}),ar(()=>{S==null||S.notifyUnmount()}),i.$$set=P=>{"createVisualElement"in P&&t(6,u=P.createVisualElement),"props"in P&&t(7,f=P.props),"Component"in P&&t(8,d=P.Component),"visualState"in P&&t(9,h=P.visualState),"isCustom"in P&&t(10,g=P.isCustom),"$$scope"in P&&t(18,c=P.$$scope)},i.$$.update=()=>{i.$$.dirty&131072&&t(11,v=a.visualElement),i.$$.dirty&65664&&t(12,E=o&&f.layoutId!==void 0?o+"-"+f.layoutId:f.layoutId),i.$$.dirty&31680&&!A&&u&&t(13,A=u(d,{visualState:h,parent:v,props:{...f,layoutId:E},presenceId:n==null?void 0:n.id,blockInitialAnimation:(n==null?void 0:n.initial)===!1})),i.$$.dirty&8192&&t(0,S=A),i.$$.dirty&55425&&S&&(S.setProps({...r,...f,layoutId:E}),t(0,S.isPresent=kx(n),S),t(0,S.isPresenceRoot=!v||v.presenceId!==(n==null?void 0:n.id),S),S.syncRender())},[S,_,p,m,x,y,u,f,d,h,g,v,E,A,n,r,o,a,c,l]}class Yx extends nt{constructor(e){super(),tt(this,e,$x,jx,Ke,{createVisualElement:6,props:7,Component:8,visualState:9,isCustom:10})}}const qx=Yx;var Xn=function(i){return{isEnabled:function(e){return i.some(function(t){return!!e[t]})}}},tc={measureLayout:Xn(["layout","layoutId","drag"]),animation:Xn(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag"]),exit:Xn(["exit"]),drag:Xn(["drag","dragControls"]),focus:Xn(["whileFocus"]),hover:Xn(["whileHover","onHoverStart","onHoverEnd"]),tap:Xn(["whileTap","onTap","onTapStart","onTapCancel"]),pan:Xn(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),layoutAnimation:Xn(["layout","layoutId"])};function Kx(i){for(var e in i){var t=i[e];t!==null&&(tc[e].Component=t)}}const Zx=i=>({features:i&2}),tf=i=>({features:i[1]});function nf(i){let e;const t=i[4].default,n=_t(t,i,i[3],tf);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&10)&&xt(n,t,r,r[3],e?vt(t,r[3],s,Zx):yt(r[3]),tf)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function Jx(i){let e,t,n=i[0]&&nf(i);return{c(){n&&n.c(),e=wi()},m(r,s){n&&n.m(r,s),Me(r,e,s),t=!0},p(r,[s]){r[0]?n?(n.p(r,s),s&1&&J(n,1)):(n=nf(r),n.c(),J(n,1),n.m(e.parentNode,e)):n&&(un(),ie(n,1,1,()=>{n=null}),fn())},i(r){t||(J(n),t=!0)},o(r){ie(n),t=!1},d(r){r&&ye(e),n&&n.d(r)}}}function Qx(i,e,t){let{$$slots:n={},$$scope:r}=e;const s=Object.keys(tc),o=s.length;let{visualElement:a,props:l}=e,c=[];return i.$$set=u=>{"visualElement"in u&&t(0,a=u.visualElement),"props"in u&&t(2,l=u.props),"$$scope"in u&&t(3,r=u.$$scope)},i.$$.update=()=>{if(i.$$.dirty&7){t(1,c=[]);for(let u=0;u<o;u++){const f=s[u],{isEnabled:d,Component:h}=tc[f];d(l)&&h&&c.push({Component:h,key:f,props:l,visualElement:a})}}},[a,c,l,r,n]}class ey extends nt{constructor(e){super(),tt(this,e,Qx,Jx,Ke,{visualElement:0,props:2})}}const ty=ey;function ny(i){let e;const t=i[3].default,n=_t(t,i,i[2],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&4)&&xt(n,t,r,r[2],e?vt(t,r[2],s,null):yt(r[2]),null)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function iy(i,e,t){let{$$slots:n={},$$scope:r}=e,{value:s,isCustom:o}=e,a=Pn(s);return Bl(ir,a),Zp("Motion",o,a),ar(()=>{var l;(l=s==null?void 0:s.visualElement)==null||l.unmount()}),i.$$set=l=>{"value"in l&&t(0,s=l.value),"isCustom"in l&&t(1,o=l.isCustom),"$$scope"in l&&t(2,r=l.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&a.set(s)},[s,o,r,n]}class ry extends nt{constructor(e){super(),tt(this,e,iy,ny,Ke,{value:0,isCustom:1})}}const sy=ry;var Fc=function(){return{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}},ym=function(){return Object.assign(Object.assign({},Fc()),{attrs:{}})},oy=["","X","Y","Z"],ay=["translate","scale","rotate","skew"],$s=["transformPerspective","x","y","z"];ay.forEach(function(i){return oy.forEach(function(e){return $s.push(i+e)})});function ly(i,e){return $s.indexOf(i)-$s.indexOf(e)}var cy=new Set($s);function Pa(i){return cy.has(i)}var uy=new Set(["originX","originY","originZ"]);function bm(i){return uy.has(i)}function Mm(i,e){var t=e.layout,n=e.layoutId;return Pa(i)||bm(i)||(t||n!==void 0)&&!!Is[i]}var fy={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"};function dy(i,e,t,n){var r=i.transform,s=i.transformKeys,o=e.enableHardwareAcceleration,a=o===void 0?!0:o,l=e.allowTransformNone,c=l===void 0?!0:l,u="";s.sort(ly);for(var f=!1,d=s.length,h=0;h<d;h++){var g=s[h];u+=(fy[g]||g)+"("+r[g]+") ",g==="z"&&(f=!0)}return!f&&a?u+="translateZ(0)":u=u.trim(),n?u=n(r,t?"":u):c&&t&&(u="none"),u}function hy(i){var e=i.originX,t=e===void 0?"50%":e,n=i.originY,r=n===void 0?"50%":n,s=i.originZ,o=s===void 0?0:s;return t+" "+r+" "+o}function Sm(i){return i.startsWith("--")}var py=function(i,e){return e&&typeof i=="number"?e.transform(i):i};function Bc(i,e,t,n,r,s,o,a){var l,c=i.style,u=i.vars,f=i.transform,d=i.transformKeys,h=i.transformOrigin;d.length=0;var g=!1,_=!1,p=!0;for(var m in e){var x=e[m];if(Sm(m)){u[m]=x;continue}var v=Qp[m],y=py(x,v);if(Pa(m)){if(g=!0,f[m]=y,d.push(m),!p)continue;x!==((l=v.default)!==null&&l!==void 0?l:0)&&(p=!1)}else if(bm(m))h[m]=y,_=!0;else if(n&&t&&n.isHydrated&&Is[m]){var E=Is[m].process(x,n,t),A=Is[m].applyTo;if(A)for(var S=A.length,P=0;P<S;P++)c[A[P]]=E;else c[m]=E}else c[m]=y}n&&t&&o&&a?(c.transform=o(n.deltaFinal,n.treeScale,g?f:void 0),s&&(c.transform=s(f,c.transform)),c.transformOrigin=a(n)):(g&&(c.transform=dy(i,r,p,s)),_&&(c.transformOrigin=hy(h)))}const my=i=>({styles:i&1}),rf=i=>({styles:i[0]});function gy(i){let e;const t=i[5].default,n=_t(t,i,i[4],rf);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&17)&&xt(n,t,r,r[4],e?vt(t,r[4],s,my):yt(r[4]),rf)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function _y(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{visualState:o,isStatic:a,props:l}=e;const c=()=>{let u=Fc();Bc(u,o,void 0,void 0,{enableHardwareAcceleration:!a},l.transformTemplate);const{vars:f,style:d}=u;return{...f,...d}};return i.$$set=u=>{"visualState"in u&&t(1,o=u.visualState),"isStatic"in u&&t(2,a=u.isStatic),"props"in u&&t(3,l=u.props),"$$scope"in u&&t(4,s=u.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&t(0,n=c())},[n,o,a,l,s,r]}class vy extends nt{constructor(e){super(),tt(this,e,_y,gy,Ke,{visualState:1,isStatic:2,props:3})}}const xy=vy,yy=i=>({styles:i&522}),sf=i=>({styles:i[4](i[9],i[1],i[3])});function by(i){let e;const t=i[6].default,n=_t(t,i,i[7],sf);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&650)&&xt(n,t,r,r[7],e?vt(t,r[7],s,yy):yt(r[7]),sf)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function My(i){let e,t;return e=new xy({props:{props:i[1],visualState:i[0],isStatic:i[2],$$slots:{default:[by,({styles:n})=>({9:n}),({styles:n})=>n?512:0]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&2&&(s.props=n[1]),r&1&&(s.visualState=n[0]),r&4&&(s.isStatic=n[2]),r&650&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function Em(i,e,t){for(const n in e)!Li(e[n])&&!Mm(n,t)&&(i[n]=e[n])}function Sy(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{visualState:o,props:a,isStatic:l}=e,c={};const u=Em,f=d=>(Object.assign(c,d),a.transformValues&&t(3,c=a.transformValues(c)),c);return i.$$set=d=>{"visualState"in d&&t(0,o=d.visualState),"props"in d&&t(1,a=d.props),"isStatic"in d&&t(2,l=d.isStatic),"$$scope"in d&&t(7,s=d.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&t(5,n=a.style||{}),i.$$.dirty&42&&u(c,n,a)},[o,a,l,c,f,n,r,s]}class Ey extends nt{constructor(e){super(),tt(this,e,Sy,My,Ke,{visualState:0,props:1,isStatic:2})}}const Ty=Ey,Ay=i=>({visualProps:i&65}),of=i=>({visualProps:i[3](i[6],i[0])});function wy(i){let e;const t=i[4].default,n=_t(t,i,i[5],of);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&97)&&xt(n,t,r,r[5],e?vt(t,r[5],s,Ay):yt(r[5]),of)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function Ry(i){let e,t;return e=new Ty({props:{visualState:i[1],props:i[0],isStatic:i[2],$$slots:{default:[wy,({styles:n})=>({6:n}),({styles:n})=>n?64:0]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&2&&(s.visualState=n[1]),r&1&&(s.props=n[0]),r&4&&(s.isStatic=n[2]),r&97&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function Cy(i,e,t){let{$$slots:n={},$$scope:r}=e,{props:s,visualState:o,isStatic:a}=e;const l=(c,u)=>{let f={};return u.drag&&(f.draggable=!1,c.userSelect=c.WebkitUserSelect=c.WebkitTouchCallout="none",c.touchAction=u.drag===!0?"none":`pan-${u.drag==="x"?"y":"x"}`),f.style=c,f};return i.$$set=c=>{"props"in c&&t(0,s=c.props),"visualState"in c&&t(1,o=c.visualState),"isStatic"in c&&t(2,a=c.isStatic),"$$scope"in c&&t(5,r=c.$$scope)},[s,o,a,l,n,r]}class Py extends nt{constructor(e){super(),tt(this,e,Cy,Ry,Ke,{props:0,visualState:1,isStatic:2})}}const af=Py;function lf(i,e,t){return typeof i=="string"?i:He.transform(e+t*i)}function Ly(i,e,t){var n=lf(e,i.x,i.width),r=lf(t,i.y,i.height);return n+" "+r}var qa=function(i,e){return He.transform(i*e)},Dy={offset:"stroke-dashoffset",array:"stroke-dasharray"},Iy={offset:"strokeDashoffset",array:"strokeDasharray"};function Ny(i,e,t,n,r,s){n===void 0&&(n=1),r===void 0&&(r=0),s===void 0&&(s=!0);var o=s?Dy:Iy;i[o.offset]=qa(-r,e);var a=qa(t,e),l=qa(n,e);i[o.array]=a+" "+l}function Vc(i,e,t,n,r,s,o,a){var l=e.attrX,c=e.attrY,u=e.originX,f=e.originY,d=e.pathLength,h=e.pathSpacing,g=h===void 0?1:h,_=e.pathOffset,p=_===void 0?0:_,m=si(e,["attrX","attrY","originX","originY","pathLength","pathSpacing","pathOffset"]);Bc(i,m,t,n,r,s,o,a),i.attrs=i.style,i.style={};var x=i.attrs,v=i.style,y=i.dimensions,E=i.totalPathLength;x.transform&&(y&&(v.transform=x.transform),delete x.transform),y&&(u!==void 0||f!==void 0||v.transform)&&(v.transformOrigin=Ly(y,u!==void 0?u:.5,f!==void 0?f:.5)),l!==void 0&&(x.x=l),c!==void 0&&(x.y=c),E!==void 0&&d!==void 0&&Ny(x,E,d,g,p,!1)}const Uy=i=>({visualProps:i&1}),cf=i=>({visualProps:i[0]});function Oy(i){let e;const t=i[4].default,n=_t(t,i,i[3],cf);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&9)&&xt(n,t,r,r[3],e?vt(t,r[3],s,Uy):yt(r[3]),cf)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function Fy(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{visualState:o,props:a}=e,l=()=>{const c=ym();return Vc(c,o,void 0,void 0,{enableHardwareAcceleration:!1},a.transformTemplate),{...c.attrs,style:{...c.style}}};return i.$$set=c=>{"visualState"in c&&t(1,o=c.visualState),"props"in c&&t(2,a=c.props),"$$scope"in c&&t(3,s=c.$$scope)},i.$$.update=()=>{if(i.$$.dirty&2&&t(0,n=l()),i.$$.dirty&5&&a.style){const c={};Em(c,a.style,a),t(0,n.style={...c,...n.style},n)}},[n,o,a,s,r]}class By extends nt{constructor(e){super(),tt(this,e,Fy,Oy,Ke,{visualState:1,props:2})}}const uf=By;var Tm=function(i){return!pa(i)};try{var Vy=require("@emotion/is-prop-valid").default;Tm=function(i){return i.startsWith("on")?!pa(i):Vy(i)}}catch{}function ky(i,e,t){var n={};for(var r in i)(Tm(r)||t===!0&&pa(r)||!e&&!pa(r))&&(n[r]=i[r]);return n}const zy=i=>({props:i&2064}),ff=i=>({motion:i[5],props:{...i[4],...i[11]}});function Hy(i){let e;const t=i[9].default,n=_t(t,i,i[10],ff);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&3088)&&xt(n,t,r,r[10],e?vt(t,r[10],s,zy):yt(r[10]),ff)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function Gy(i){let e,t,n;var r=i[2]==="SVG"?uf:af;function s(o,a){return{props:{visualState:o[1],isStatic:o[3],props:o[0],$$slots:{default:[Hy,({visualProps:l})=>({11:l}),({visualProps:l})=>l?2048:0]},$$scope:{ctx:o}}}}return r&&(e=ia(r,s(i))),{c(){e&&Ae(e.$$.fragment),t=wi()},m(o,a){e&&Ee(e,o,a),Me(o,t,a),n=!0},p(o,[a]){if(a&4&&r!==(r=o[2]==="SVG"?uf:af)){if(e){un();const l=e;ie(l.$$.fragment,1,0,()=>{Te(l,1)}),fn()}r?(e=ia(r,s(o)),Ae(e.$$.fragment),J(e.$$.fragment,1),Ee(e,t.parentNode,t)):e=null}else if(r){const l={};a&2&&(l.visualState=o[1]),a&8&&(l.isStatic=o[3]),a&1&&(l.props=o[0]),a&3088&&(l.$$scope={dirty:a,ctx:o}),e.$set(l)}},i(o){n||(e&&J(e.$$.fragment,o),n=!0)},o(o){e&&ie(e.$$.fragment,o),n=!1},d(o){o&&ye(t),e&&Te(e,o)}}}function Wy(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{props:o,visualState:a,Component:l,forwardMotionProps:c=!1,isStatic:u,ref:f,targetEl:d=void 0}=e;const h=g=>{f(g)};return i.$$set=g=>{"props"in g&&t(0,o=g.props),"visualState"in g&&t(1,a=g.visualState),"Component"in g&&t(2,l=g.Component),"forwardMotionProps"in g&&t(6,c=g.forwardMotionProps),"isStatic"in g&&t(3,u=g.isStatic),"ref"in g&&t(7,f=g.ref),"targetEl"in g&&t(8,d=g.targetEl),"$$scope"in g&&t(10,s=g.$$scope)},i.$$.update=()=>{i.$$.dirty&69&&t(4,n=ky(o,typeof l=="string",c)),i.$$.dirty&256&&d&&h(d)},[o,a,l,u,n,h,c,f,d,r,s]}class Xy extends nt{constructor(e){super(),tt(this,e,Wy,Gy,Ke,{props:0,visualState:1,Component:2,forwardMotionProps:6,isStatic:3,ref:7,targetEl:8})}}const jy=Xy;function Am(i,e){var t=i.getBoundingClientRect();return om(fx(t,e))}function nc(i){return typeof i=="string"&&i.startsWith("var(--")}var wm=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function $y(i){var e=wm.exec(i);if(!e)return[,];var t=Ut(e,3),n=t[1],r=t[2];return[n,r]}function ic(i,e,t){var n=Ut($y(i),2),r=n[0],s=n[1];if(r){var o=window.getComputedStyle(e).getPropertyValue(r);return o?o.trim():nc(s)?ic(s,e):s}}function Yy(i,e,t){var n,r=si(e,[]),s=i.getInstance();if(!(s instanceof HTMLElement))return{target:r,transitionEnd:t};t&&(t=Object.assign({},t)),i.forEachValue(function(c){var u=c.get();if(nc(u)){var f=ic(u,s);f&&c.set(f)}});for(var o in r){var a=r[o];if(nc(a)){var l=ic(a,s);l&&(r[o]=l,t&&((n=t[o])!==null&&n!==void 0||(t[o]=a)))}}return{target:r,transitionEnd:t}}var qy=new Set(["width","height","top","left","right","bottom","x","y"]),Rm=function(i){return qy.has(i)},Ky=function(i){return Object.keys(i).some(Rm)},Cm=function(i,e){i.set(e,!1),i.set(e)},df=function(i){return i===lr||i===He},hf;(function(i){i.width="width",i.height="height",i.left="left",i.right="right",i.top="top",i.bottom="bottom"})(hf||(hf={}));var pf=function(i,e){return parseFloat(i.split(", ")[e])},mf=function(i,e){return function(t,n){var r=n.transform;if(r==="none"||!r)return 0;var s=r.match(/^matrix3d\((.+)\)$/);if(s)return pf(s[1],e);var o=r.match(/^matrix\((.+)\)$/);return o?pf(o[1],i):0}},Zy=new Set(["x","y","z"]),Jy=$s.filter(function(i){return!Zy.has(i)});function Qy(i){var e=[];return Jy.forEach(function(t){var n=i.getValue(t);n!==void 0&&(e.push([t,n.get()]),n.set(t.startsWith("scale")?1:0))}),e.length&&i.syncRender(),e}var gf={width:function(i){var e=i.x;return e.max-e.min},height:function(i){var e=i.y;return e.max-e.min},top:function(i,e){var t=e.top;return parseFloat(t)},left:function(i,e){var t=e.left;return parseFloat(t)},bottom:function(i,e){var t=i.y,n=e.top;return parseFloat(n)+(t.max-t.min)},right:function(i,e){var t=i.x,n=e.left;return parseFloat(n)+(t.max-t.min)},x:mf(4,13),y:mf(5,14)},eb=function(i,e,t){var n=e.measureViewportBox(),r=e.getInstance(),s=getComputedStyle(r),o=s.display,a=s.top,l=s.left,c=s.bottom,u=s.right,f=s.transform,d={top:a,left:l,bottom:c,right:u,transform:f};o==="none"&&e.setStaticValue("display",i.display||"block"),e.syncRender();var h=e.measureViewportBox();return t.forEach(function(g){var _=e.getValue(g);Cm(_,gf[g](n,d)),i[g]=gf[g](h,s)}),i},tb=function(i,e,t,n){t===void 0&&(t={}),n===void 0&&(n={}),e=Object.assign({},e),n=Object.assign({},n);var r=Object.keys(e).filter(Rm),s=[],o=!1,a=[];if(r.forEach(function(c){var u=i.getValue(c);if(i.hasValue(c)){var f=t[c],d=e[c],h=Ya(f),g;if(Xs(d))for(var _=d.length,p=d[0]===null?1:0;p<_;p++)g||(g=Ya(d[p]));else g=Ya(d);if(h!==g)if(df(h)&&df(g)){var m=u.get();typeof m=="string"&&u.set(parseFloat(m)),typeof d=="string"?e[c]=parseFloat(d):Array.isArray(d)&&g===He&&(e[c]=d.map(parseFloat))}else h!=null&&h.transform&&(g!=null&&g.transform)&&(f===0||d===0)?f===0?u.set(g.transform(f)):e[c]=h.transform(d):(o||(s=Qy(i),o=!0),a.push(c),n[c]=n[c]!==void 0?n[c]:e[c],Cm(u,d))}}),a.length){var l=eb(e,i,a);return s.length&&s.forEach(function(c){var u=Ut(c,2),f=u[0],d=u[1];i.getValue(f).set(d)}),i.syncRender(),{target:l,transitionEnd:n}}else return{target:e,transitionEnd:n}};function nb(i,e,t,n){return Ky(e)?tb(i,e,t,n):{target:e,transitionEnd:n}}var ib=function(i,e,t,n){var r=Yy(i,e,n);return e=r.target,n=r.transitionEnd,nb(i,e,t,n)};function kc(i){var e=i.style,t={};for(var n in e)(Li(e[n])||Mm(n,i))&&(t[n]=e[n]);return t}function Pm(i,e){var t=e.style,n=e.vars;Object.assign(i.style,t);for(var r in n)i.style.setProperty(r,n[r])}function rb(i){return window.getComputedStyle(i)}var Lm={treeType:"dom",readValueFromInstance:function(i,e){if(Pa(e)){var t=Lc(e);return t&&t.default||0}else{var n=rb(i);return(Sm(e)?n.getPropertyValue(e):n[e])||0}},sortNodePosition:function(i,e){return i.compareDocumentPosition(e)&2?1:-1},getBaseTarget:function(i,e){var t;return(t=i.style)===null||t===void 0?void 0:t[e]},measureViewportBox:function(i,e){var t=e.transformPagePoint;return Am(i,t)},resetTransform:function(i,e,t){var n=t.transformTemplate;e.style.transform=n?n({},""):"none",i.scheduleRender()},restoreTransform:function(i,e){i.style.transform=e.style.transform},removeValueFromRenderState:function(i,e){var t=e.vars,n=e.style;delete t[i],delete n[i]},makeTargetAnimatable:function(i,e,t,n){var r=t.transformValues;n===void 0&&(n=!0);var s=e.transition,o=e.transitionEnd,a=si(e,["transition","transitionEnd"]),l=ix(a,s||{},i);if(r&&(o&&(o=r(o)),a&&(a=r(a)),l&&(l=r(l))),n){tx(i,a,l);var c=ib(i,a,l,o);o=c.transitionEnd,a=c.target}return Object.assign({transition:s,transitionEnd:o},a)},scrapeMotionValuesFromProps:kc,build:function(i,e,t,n,r,s,o){i.isVisible!==void 0&&(e.style.visibility=i.isVisible?"visible":"hidden");var a=n.isEnabled&&r.isHydrated;Bc(e,t,n,r,s,o.transformTemplate,a?Ca:void 0,a?hm:void 0)},render:Pm},sb=mm(Lm);function Dm(i){var e=kc(i);for(var t in i)if(Li(i[t])){var n=t==="x"||t==="y"?"attr"+t.toUpperCase():t;e[n]=i[t]}return e}var ob=/([a-z])([A-Z])/g,ab="$1-$2",Im=function(i){return i.replace(ob,ab).toLowerCase()},Nm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox"]);function Um(i,e){Pm(i,e);for(var t in e.attrs)i.setAttribute(Nm.has(t)?t:Im(t),e.attrs[t])}var lb=mm(Object.assign(Object.assign({},Lm),{getBaseTarget:function(i,e){return i[e]},readValueFromInstance:function(i,e){var t;return Pa(e)?((t=Lc(e))===null||t===void 0?void 0:t.default)||0:(e=Nm.has(e)?e:Im(e),i.getAttribute(e))},scrapeMotionValuesFromProps:Dm,build:function(i,e,t,n,r,s,o){var a=n.isEnabled&&r.isHydrated;Vc(e,t,n,r,s,o.transformTemplate,a?Ca:void 0,a?hm:void 0)},render:Um})),cb=function(i,e){return i==="SVG"?lb(e,{enableHardwareAcceleration:!1}):sb(e,{enableHardwareAcceleration:!0})},ub={scrapeMotionValuesFromProps:Dm,createRenderState:ym,onMount:function(i,e,t){var n=t.renderState,r=t.latestValues;try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}fb(e)&&(n.totalPathLength=e.getTotalLength()),Vc(n,r,void 0,void 0,{enableHardwareAcceleration:!1},i.transformTemplate),Um(e,n)}};function fb(i){return i.tagName==="path"}var db={scrapeMotionValuesFromProps:kc,createRenderState:Fc};function _f(i,e){if(Ra(i)){var t=i.initial,n=i.animate;return{initial:t===!1||Tn(t)?t:void 0,animate:Tn(n)?n:void 0}}return i.inherit!==!1?e||{}:{}}const hb=i=>({value:i&1}),vf=i=>({value:i[0]});function pb(i){let e;const t=i[9].default,n=_t(t,i,i[8],vf);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&257)&&xt(n,t,r,r[8],e?vt(t,r[8],s,hb):yt(r[8]),vf)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function mb(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{props:o,isStatic:a,isCustom:l}=e,c=zt(ir)||ir(l);Kt(i,c,_=>t(7,n=_));let{initial:u,animate:f}=_f(o,xn(c));const d=_=>Array.isArray(_)?_.join(" "):_,h=()=>({initial:u,animate:f});let g=h();return i.$$set=_=>{"props"in _&&t(2,o=_.props),"isStatic"in _&&t(3,a=_.isStatic),"isCustom"in _&&t(4,l=_.isCustom),"$$scope"in _&&t(8,s=_.$$scope)},i.$$.update=()=>{i.$$.dirty&132&&t(5,{initial:u,animate:f}=_f(o,n),u,(t(6,f),t(2,o),t(7,n))),i.$$.dirty&104&&a&&t(0,g=h(d(u),d(f)))},[g,c,o,a,l,u,f,n,s,r]}class gb extends nt{constructor(e){super(),tt(this,e,mb,pb,Ke,{props:2,isStatic:3,isCustom:4})}}const _b=gb;function vb(i){var e=Li(i)?i.get():i;return j0(e)?e.toValue():e}const xb=i=>({state:i&1}),xf=i=>({state:i[0]});function yb(i){let e;const t=i[10].default,n=_t(t,i,i[9],xf);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&513)&&xt(n,t,r,r[9],e?vt(t,r[9],s,xb):yt(r[9]),xf)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}const yf=({scrapeMotionValuesFromProps:i,createRenderState:e,onMount:t},n,r,s)=>{const o={latestValues:bb(n,r,s,i),renderState:e()};return t&&(o.mount=a=>t(n,a,o)),o};function bb(i,e,t,n){const r={},s=(t==null?void 0:t.initial)===!1,o=n(i);for(const d in o)r[d]=vb(o[d]);let{initial:a,animate:l}=i;const c=Ra(i),u=rm(i);e&&u&&!c&&i.inherit!==!1&&(a??(a=e.initial),l??(l=e.animate));const f=s||a===!1?l:a;return f&&typeof f!="boolean"&&!Nc(f)&&(Array.isArray(f)?f:[f]).forEach(h=>{const g=im(i,h);if(!g)return;const{transitionEnd:_,transition:p,...m}=g;for(const x in m)r[x]=m[x];for(const x in _)r[x]=_[x]}),r}function Mb(i,e,t){let n,r,{$$slots:s={},$$scope:o}=e,{config:a,props:l,isStatic:c,isCustom:u}=e;const f=zt(ir)||ir(u);Kt(i,f,_=>t(8,r=_));const d=zt(Di)||Di(u);Kt(i,d,_=>t(7,n=_));let h=yf(a,l,xn(f),xn(d));const g=yf;return i.$$set=_=>{"config"in _&&t(3,a=_.config),"props"in _&&t(4,l=_.props),"isStatic"in _&&t(5,c=_.isStatic),"isCustom"in _&&t(6,u=_.isCustom),"$$scope"in _&&t(9,o=_.$$scope)},i.$$.update=()=>{i.$$.dirty&440&&c&&t(0,h=g(a,l,r,n))},[h,f,d,a,l,c,u,n,r,o,s]}class Sb extends nt{constructor(e){super(),tt(this,e,Mb,yb,Ke,{config:3,props:4,isStatic:5,isCustom:6})}}const Eb=Sb;function rc(i){return typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function bf(i,e,t){return function(n){var r;n&&((r=i.mount)===null||r===void 0||r.call(i,n)),e&&(n?e.mount(n):e.unmount()),t&&(typeof t=="function"?t(n):rc(t)&&(t.current=n))}}function Mf(i,e,t){const n=i.slice();return n[21]=e[t],n}const Tb=i=>({motion:i&16777216,props:i&33554432}),Sf=i=>({motion:i[24],props:i[25]});function Ab(i){let e;const t=i[14].default,n=_t(t,i,i[15],Sf);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&50364416)&&xt(n,t,r,r[15],e?vt(t,r[15],s,Tb):yt(r[15]),Sf)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function wb(i){let e,t;return e=new jy({props:{Component:i[6],props:i[4],ref:bf(i[18],i[17].visualElement,i[1]),visualState:i[18],isStatic:i[3],forwardMotionProps:i[0],$$slots:{default:[Ab,({motion:n,props:r})=>({24:n,25:r}),({motion:n,props:r})=>(n?16777216:0)|(r?33554432:0)]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&16&&(s.props=n[4]),r&393218&&(s.ref=bf(n[18],n[17].visualElement,n[1])),r&262144&&(s.visualState=n[18]),r&8&&(s.isStatic=n[3]),r&1&&(s.forwardMotionProps=n[0]),r&50364416&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function Ef(i){let e=[],t=new Map,n,r,s=Ri(i[20]);const o=a=>a[21].key;for(let a=0;a<s.length;a+=1){let l=Mf(i,s,a),c=o(l);t.set(c,e[a]=Tf(c,l))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();n=wi()},m(a,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(a,l);Me(a,n,l),r=!0},p(a,l){l&1048608&&(s=Ri(a[20]),un(),e=up(e,l,o,1,a,s,t,n.parentNode,cp,Tf,n,Mf),fn())},i(a){if(!r){for(let l=0;l<s.length;l+=1)J(e[l]);r=!0}},o(a){for(let l=0;l<e.length;l+=1)ie(e[l]);r=!1},d(a){a&&ye(n);for(let l=0;l<e.length;l+=1)e[l].d(a)}}}function Tf(i,e){let t,n,r,s;var o=e[21].Component;function a(l,c){return{props:{props:l[21].props,visualElement:l[21].visualElement,isCustom:l[5]}}}return o&&(n=ia(o,a(e))),{key:i,first:null,c(){t=wi(),n&&Ae(n.$$.fragment),r=wi(),this.first=t},m(l,c){Me(l,t,c),n&&Ee(n,l,c),Me(l,r,c),s=!0},p(l,c){if(e=l,c&1048576&&o!==(o=e[21].Component)){if(n){un();const u=n;ie(u.$$.fragment,1,0,()=>{Te(u,1)}),fn()}o?(n=ia(o,a(e)),Ae(n.$$.fragment),J(n.$$.fragment,1),Ee(n,r.parentNode,r)):n=null}else if(o){const u={};c&1048576&&(u.props=e[21].props),c&1048576&&(u.visualElement=e[21].visualElement),n.$set(u)}},i(l){s||(n&&J(n.$$.fragment,l),s=!0)},o(l){n&&ie(n.$$.fragment,l),s=!1},d(l){l&&(ye(t),ye(r)),n&&Te(n,l)}}}function Rb(i){let e,t,n,r;e=new sy({props:{value:i[17],isCustom:i[5],$$slots:{default:[wb]},$$scope:{ctx:i}}});let s=i[2]&&Ef(i);return{c(){Ae(e.$$.fragment),t=lt(),s&&s.c(),n=wi()},m(o,a){Ee(e,o,a),Me(o,t,a),s&&s.m(o,a),Me(o,n,a),r=!0},p(o,a){const l={};a&131072&&(l.value=o[17]),a&426011&&(l.$$scope={dirty:a,ctx:o}),e.$set(l),o[2]?s?(s.p(o,a),a&4&&J(s,1)):(s=Ef(o),s.c(),J(s,1),s.m(n.parentNode,n)):s&&(un(),ie(s,1,1,()=>{s=null}),fn())},i(o){r||(J(e.$$.fragment,o),J(s),r=!0)},o(o){ie(e.$$.fragment,o),ie(s),r=!1},d(o){o&&(ye(t),ye(n)),Te(e,o),s&&s.d(o)}}}function Cb(i){let e,t;return e=new ty({props:{visualElement:i[10](i[17],i[19]),props:i[4],$$slots:{default:[Rb,({features:n})=>({20:n}),({features:n})=>n?1048576:0]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&655360&&(s.visualElement=n[10](n[17],n[19])),r&16&&(s.props=n[4]),r&1474591&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function Pb(i){let e,t;return e=new qx({props:{Component:i[6],visualState:i[18],createVisualElement:i[7],props:i[4],isCustom:i[5],$$slots:{default:[Cb,({visualElement:n})=>({19:n}),({visualElement:n})=>n?524288:0]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&262144&&(s.visualState=n[18]),r&16&&(s.props=n[4]),r&950303&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function Lb(i){let e,t;return e=new Eb({props:{config:i[8],props:i[4],isStatic:i[3],isCustom:i[5],$$slots:{default:[Pb,({state:n})=>({18:n}),({state:n})=>n?262144:0]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&16&&(s.props=n[4]),r&8&&(s.isStatic=n[3]),r&426015&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function Db(i){let e,t;return e=new _b({props:{props:i[4],isStatic:i[3],isCustom:i[5],$$slots:{default:[Lb,({value:n})=>({17:n}),({value:n})=>n?131072:0]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&16&&(s.props=n[4]),r&8&&(s.isStatic=n[3]),r&163871&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function Ib(i){let e,t;return e=new I0({props:{isCustom:i[5],$$slots:{default:[Db]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&32799&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function Nb(i,e,t){let n,r;const s=["isSVG","forwardMotionProps","externalRef","targetEl"];let o=du(e,s),a,{$$slots:l={},$$scope:c}=e,{isSVG:u=!1,forwardMotionProps:f=!1,externalRef:d=void 0,targetEl:h=void 0}=e;const g=h;let _=u?"SVG":"DOM",p=cb,m=u?ub:db;const x=zt(Ci)||Ci(g);Kt(i,x,E=>t(13,a=E));let v=!1;const y=(E,A)=>(E.visualElement=A,A);return rs(()=>t(2,v=!0)),i.$$set=E=>{e=ni(ni({},e),Bs(E)),t(16,o=du(e,s)),"isSVG"in E&&t(11,u=E.isSVG),"forwardMotionProps"in E&&t(0,f=E.forwardMotionProps),"externalRef"in E&&t(1,d=E.externalRef),"targetEl"in E&&t(12,h=E.targetEl),"$$scope"in E&&t(15,c=E.$$scope)},i.$$.update=()=>{t(4,n=o),i.$$.dirty&8192&&t(3,{isStatic:r}=a||{},r)},[f,d,v,r,n,g,_,p,m,x,y,u,h,a,l,c]}class Ub extends nt{constructor(e){super(),tt(this,e,Nb,Ib,Ke,{isSVG:11,forwardMotionProps:0,externalRef:1,targetEl:12})}}const Ob=Ub;function Fb(i){let e;const t=i[5].default,n=_t(t,i,i[4],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&16)&&xt(n,t,r,r[4],e?vt(t,r[4],s,null):yt(r[4]),null)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function zc(i,e,t,n){return i.addEventListener(e,t,n),function(){return i.removeEventListener(e,t,n)}}function Bb(i,e,t){let{$$slots:n={},$$scope:r}=e,{ref:s,eventName:o,handler:a=void 0,options:l=void 0}=e,c=()=>{};const u=()=>{if(c(),!s)return()=>{};const f=s.current;return a&&f?zc(f,o,a,l):()=>{}};return ar(c),i.$$set=f=>{"ref"in f&&t(0,s=f.ref),"eventName"in f&&t(1,o=f.eventName),"handler"in f&&t(2,a=f.handler),"options"in f&&t(3,l=f.options),"$$scope"in f&&t(4,r=f.$$scope)},i.$$.update=()=>{i.$$.dirty&15&&(c=u())},[s,o,a,l,r,n]}class Vb extends nt{constructor(e){super(),tt(this,e,Bb,Fb,Ke,{ref:0,eventName:1,handler:2,options:3})}}const Hc=Vb;function Om(i){return typeof PointerEvent<"u"&&i instanceof PointerEvent?i.pointerType==="mouse":i instanceof MouseEvent}function Fm(i){var e=!!i.touches;return e}function kb(i){return function(e){var t=e instanceof MouseEvent,n=!t||t&&e.button===0;n&&i(e)}}var zb={pageX:0,pageY:0};function Hb(i,e){e===void 0&&(e="page");var t=i.touches[0]||i.changedTouches[0],n=t||zb;return{x:n[e+"X"],y:n[e+"Y"]}}function Gb(i,e){return e===void 0&&(e="page"),{x:i[e+"X"],y:i[e+"Y"]}}function Gc(i,e){return e===void 0&&(e="page"),{point:Fm(i)?Hb(i,e):Gb(i,e)}}function Wb(i){return Gc(i,"client")}var sc=function(i,e){e===void 0&&(e=!1);var t=function(n){return i(n,Gc(n))};return e?kb(t):t},Wc=typeof window<"u",Xb=function(){return Wc&&window.onpointerdown===null},jb=function(){return Wc&&window.ontouchstart===null},$b=function(){return Wc&&window.onmousedown===null};function Yb(i){let e;const t=i[4].default,n=_t(t,i,i[5],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&32)&&xt(n,t,r,r[5],e?vt(t,r[5],s,null):yt(r[5]),null)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function qb(i){let e,t;return e=new Hc({props:{ref:i[0],eventName:oc(i[1]),handler:i[2]&&sc(i[2],i[1]==="pointerdown"),options:i[3],$$slots:{default:[Yb]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.ref=n[0]),r&2&&(s.eventName=oc(n[1])),r&6&&(s.handler=n[2]&&sc(n[2],n[1]==="pointerdown")),r&8&&(s.options=n[3]),r&32&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}const Kb={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},Zb={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function oc(i){return Xb()?i:jb()?Zb[i]:$b()?Kb[i]:i}function Gr(i,e,t,n){return zc(i,oc(e),sc(t,e==="pointerdown"),n)}function Jb(i,e,t){let{$$slots:n={},$$scope:r}=e,{ref:s,eventName:o,handler:a=void 0,options:l=void 0}=e;return i.$$set=c=>{"ref"in c&&t(0,s=c.ref),"eventName"in c&&t(1,o=c.eventName),"handler"in c&&t(2,a=c.handler),"options"in c&&t(3,l=c.options),"$$scope"in c&&t(5,r=c.$$scope)},[s,o,a,l,n,r]}class Qb extends nt{constructor(e){super(),tt(this,e,Jb,qb,Ke,{ref:0,eventName:1,handler:2,options:3})}}const ga=Qb;var Bm=function(){function i(e,t,n){var r=this,s=n===void 0?{}:n,o=s.transformPagePoint;if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=function(){if(r.lastMoveEvent&&r.lastMoveEventInfo){var d=Za(r.lastMoveEventInfo,r.history),h=r.startEvent!==null,g=Gp(d.offset,{x:0,y:0})>=3;if(!(!h&&!g)){var _=d.point,p=oa().timestamp;r.history.push(Object.assign(Object.assign({},_),{timestamp:p}));var m=r.handlers,x=m.onStart,v=m.onMove;h||(x&&x(r.lastMoveEvent,d),r.startEvent=r.lastMoveEvent),v&&v(r.lastMoveEvent,d)}}},this.handlePointerMove=function(d,h){if(r.lastMoveEvent=d,r.lastMoveEventInfo=Ka(h,r.transformPagePoint),Om(d)&&d.buttons===0){r.handlePointerUp(d,h);return}Rn.update(r.updatePoint,!0)},this.handlePointerUp=function(d,h){r.end();var g=r.handlers,_=g.onEnd,p=g.onSessionEnd,m=Za(Ka(h,r.transformPagePoint),r.history);r.startEvent&&_&&_(d,m),p&&p(d,m)},!(Fm(e)&&e.touches.length>1)){this.handlers=t,this.transformPagePoint=o;var a=Gc(e),l=Ka(a,this.transformPagePoint),c=l.point,u=oa().timestamp;this.history=[Object.assign(Object.assign({},c),{timestamp:u})];var f=t.onSessionStart;f&&f(e,Za(l,this.history)),this.removeListeners=no(Gr(window,"pointermove",this.handlePointerMove),Gr(window,"pointerup",this.handlePointerUp),Gr(window,"pointercancel",this.handlePointerUp))}}return i.prototype.updateHandlers=function(e){this.handlers=e},i.prototype.end=function(){this.removeListeners&&this.removeListeners(),Ps.update(this.updatePoint)},i}();function Ka(i,e){return e?{point:e(i.point)}:i}function Af(i,e){return{x:i.x-e.x,y:i.y-e.y}}function Za(i,e){var t=i.point;return{point:t,delta:Af(t,Vm(e)),offset:Af(t,eM(e)),velocity:tM(e,.1)}}function eM(i){return i[0]}function Vm(i){return i[i.length-1]}function tM(i,e){if(i.length<2)return{x:0,y:0};for(var t=i.length-1,n=null,r=Vm(i);t>=0&&(n=i[t],!(r.timestamp-n.timestamp>ua(e)));)t--;if(!n)return{x:0,y:0};var s=(r.timestamp-n.timestamp)/1e3;if(s===0)return{x:0,y:0};var o={x:(r.x-n.x)/s,y:(r.y-n.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function nM(i){let e;const t=i[11].default,n=_t(t,i,i[12],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&4096)&&xt(n,t,r,r[12],e?vt(t,r[12],s,null):yt(r[12]),null)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function iM(i){let e,t;return e=new ga({props:{ref:i[0],eventName:"pointerdown",handler:i[1]&&i[3],$$slots:{default:[nM]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.ref=n[0]),r&2&&(s.handler=n[1]&&n[3]),r&4096&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function rM(i,e,t){let n,r,{$$slots:s={},$$scope:o}=e,{props:a,visualElement:l,isCustom:c}=e,{onPan:u,onPanStart:f,onPanEnd:d,onPanSessionStart:h}=a,g=null;const _=zt(Ci)||Ci(c);Kt(i,_,v=>t(10,r=v));let{transformPagePoint:p}=xn(_),m={onSessionStart:h,onStart:f,onMove:u,onEnd:(v,y)=>{g=null,d&&d(v,y)}};function x(v){g=new Bm(v,m,{transformPagePoint:p})}return Ea(()=>{g!==null&&g.updateHandlers(m)}),ar(()=>g&&g.end()),i.$$set=v=>{"props"in v&&t(4,a=v.props),"visualElement"in v&&t(0,l=v.visualElement),"isCustom"in v&&t(5,c=v.isCustom),"$$scope"in v&&t(12,o=v.$$scope)},i.$$.update=()=>{i.$$.dirty&16&&t(6,{onPan:u,onPanStart:f,onPanEnd:d,onPanSessionStart:h}=a,u,(t(7,f),t(4,a)),(t(8,d),t(4,a)),(t(9,h),t(4,a))),i.$$.dirty&960&&t(1,n=u||f||d||h),i.$$.dirty&1024&&({transformPagePoint:p}=r),i.$$.dirty&960&&(m={onSessionStart:h,onStart:f,onMove:u,onEnd:(v,y)=>{g=null,d&&d(v,y)}})},[l,n,_,x,a,c,u,f,d,h,r,s,o]}class sM extends nt{constructor(e){super(),tt(this,e,rM,iM,Ke,{props:4,visualElement:0,isCustom:5})}}const oM=sM;var km=function(i,e){return e?i===e?!0:km(i,e.parentElement):!1};function zm(i){var e=null;return function(){var t=function(){e=null};return e===null?(e=i,t):!1}}var wf=zm("dragHorizontal"),Rf=zm("dragVertical");function Hm(i){var e=!1;if(i==="y")e=Rf();else if(i==="x")e=wf();else{var t=wf(),n=Rf();t&&n?e=function(){t(),n()}:(t&&t(),n&&n())}return e}function Gm(){var i=Hm(!0);return i?(i(),!1):!0}function aM(i){let e;const t=i[8].default,n=_t(t,i,i[9],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&512)&&xt(n,t,r,r[9],e?vt(t,r[9],s,null):yt(r[9]),null)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function lM(i){let e,t;return e=new ga({props:{ref:i[0],eventName:"pointerdown",handler:i[1]?i[2]:void 0,$$slots:{default:[aM]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.ref=n[0]),r&2&&(s.handler=n[1]?n[2]:void 0),r&512&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function cM(i,e,t){let n,r,s,o,a,{$$slots:l={},$$scope:c}=e,{props:u,visualElement:f}=e,d=!1,h=null;function g(){h==null||h(),h=null}function _(){var v;return g(),d=!1,(v=f.animationState)==null||v.setActive(Lt.Tap,!1),!Gm()}function p(v,y){_()&&(km(f.getInstance(),v.target)?n==null||n(v,y):s==null||s(v,y))}function m(v,y){_()&&(s==null||s(v,y))}function x(v,y){var E;d||(g(),d=!0,h=no(Gr(window,"pointerup",p),Gr(window,"pointercancel",m)),r==null||r(v,y),(E=f.animationState)==null||E.setActive(Lt.Tap,!0))}return ar(g),i.$$set=v=>{"props"in v&&t(3,u=v.props),"visualElement"in v&&t(0,f=v.visualElement),"$$scope"in v&&t(9,c=v.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&t(6,{onTap:n,onTapStart:r,onTapCancel:s,whileTap:o}=u,n,(t(4,r),t(3,u)),(t(5,s),t(3,u)),(t(7,o),t(3,u))),i.$$.dirty&240&&t(1,a=n||r||s||o)},[f,a,x,u,r,s,n,o,l,c]}class uM extends nt{constructor(e){super(),tt(this,e,cM,lM,Ke,{props:3,visualElement:0})}}const fM=uM;function dM(i){let e,t,n,r,s;e=new ga({props:{ref:i[0],eventName:"pointerenter",handler:i[1]||i[3]?vo(i[0],!0,i[1]):void 0}}),n=new ga({props:{ref:i[0],eventName:"pointerleave",handler:i[2]||i[3]?vo(i[0],!1,i[2]):void 0}});const o=i[6].default,a=_t(o,i,i[5],null);return{c(){Ae(e.$$.fragment),t=lt(),Ae(n.$$.fragment),r=lt(),a&&a.c()},m(l,c){Ee(e,l,c),Me(l,t,c),Ee(n,l,c),Me(l,r,c),a&&a.m(l,c),s=!0},p(l,[c]){const u={};c&1&&(u.ref=l[0]),c&11&&(u.handler=l[1]||l[3]?vo(l[0],!0,l[1]):void 0),e.$set(u);const f={};c&1&&(f.ref=l[0]),c&13&&(f.handler=l[2]||l[3]?vo(l[0],!1,l[2]):void 0),n.$set(f),a&&a.p&&(!s||c&32)&&xt(a,o,l,l[5],s?vt(o,l[5],c,null):yt(l[5]),null)},i(l){s||(J(e.$$.fragment,l),J(n.$$.fragment,l),J(a,l),s=!0)},o(l){ie(e.$$.fragment,l),ie(n.$$.fragment,l),ie(a,l),s=!1},d(l){l&&(ye(t),ye(r)),Te(e,l),Te(n,l),a&&a.d(l)}}}function vo(i,e,t){return(n,r)=>{var s;!Om(n)||Gm()||(t==null||t(n,r),(s=i.animationState)==null||s.setActive(Lt.Hover,e))}}function hM(i,e,t){let{$$slots:n={},$$scope:r}=e,{props:s,visualElement:o}=e,{onHoverStart:a,onHoverEnd:l,whileHover:c}=s;return i.$$set=u=>{"props"in u&&t(4,s=u.props),"visualElement"in u&&t(0,o=u.visualElement),"$$scope"in u&&t(5,r=u.$$scope)},i.$$.update=()=>{i.$$.dirty&16&&t(1,{onHoverStart:a,onHoverEnd:l,whileHover:c}=s,a,(t(2,l),t(4,s)),(t(3,c),t(4,s)))},[o,a,l,c,s,r,n]}class pM extends nt{constructor(e){super(),tt(this,e,hM,dM,Ke,{props:4,visualElement:0})}}const mM=pM;function gM(i){let e;const t=i[5].default,n=_t(t,i,i[6],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&64)&&xt(n,t,r,r[6],e?vt(t,r[6],s,null):yt(r[6]),null)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function _M(i){let e,t;return e=new Hc({props:{ref:i[0],eventName:"blur",handler:i[1]?i[3]:void 0,$$slots:{default:[gM]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.ref=n[0]),r&2&&(s.handler=n[1]?n[3]:void 0),r&64&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function vM(i){let e,t;return e=new Hc({props:{ref:i[0],eventName:"focus",handler:i[1]?i[2]:void 0,$$slots:{default:[_M]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.ref=n[0]),r&2&&(s.handler=n[1]?n[2]:void 0),r&67&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function xM(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{props:o,visualElement:a}=e;const l=()=>{var u;(u=a.animationState)==null||u.setActive(Lt.Focus,!0)},c=()=>{var u;(u=a.animationState)==null||u.setActive(Lt.Focus,!1)};return i.$$set=u=>{"props"in u&&t(4,o=u.props),"visualElement"in u&&t(0,a=u.visualElement),"$$scope"in u&&t(6,s=u.$$scope)},i.$$.update=()=>{i.$$.dirty&16&&t(1,{whileFocus:n}=o,n)},[a,n,l,c,o,r,s]}class yM extends nt{constructor(e){super(),tt(this,e,xM,vM,Ke,{props:4,visualElement:0})}}const bM=yM,MM=i=>(i&&Kx(i),Ob),SM={tap:fM,focus:bM,hover:mM};function Wm(i,e,t){var n=e.min,r=e.max;return n!==void 0&&i<n?i=t?dn(n,i,t.min):Math.max(i,n):r!==void 0&&i>r&&(i=t?dn(r,i,t.max):Math.min(i,r)),i}function EM(i,e,t,n,r){var s=i-e*t;return n?Wm(s,n,r):s}function Cf(i,e,t){return{min:e!==void 0?i.min+e:void 0,max:t!==void 0?i.max+t-(i.max-i.min):void 0}}function TM(i,e){var t=e.top,n=e.left,r=e.bottom,s=e.right;return{x:Cf(i.x,n,s),y:Cf(i.y,t,r)}}function Pf(i,e){var t,n=e.min-i.min,r=e.max-i.max;return e.max-e.min<i.max-i.min&&(t=Ut([r,n],2),n=t[0],r=t[1]),{min:i.min+n,max:i.min+r}}function AM(i,e){return{x:Pf(i.x,e.x),y:Pf(i.y,e.y)}}function wM(i,e,t){var n=i.max-i.min,r=dn(e.min,e.max-n,t);return{min:r,max:r+n}}function RM(i,e){var t={};return e.min!==void 0&&(t.min=e.min-i.min),e.max!==void 0&&(t.max=e.max-i.min),t}var Xm=.35;function CM(i){return i===!1?i=0:i===!0&&(i=Xm),{x:Lf(i,"left","right"),y:Lf(i,"top","bottom")}}function Lf(i,e,t){return{min:Df(i,e),max:Df(i,t)}}function Df(i,e){var t;return typeof i=="number"?i:(t=i[e])!==null&&t!==void 0?t:0}function PM(i,e){e===void 0&&(e=!0);var t=i.getProjectionParent();if(!t)return!1;var n;return e?(n=ha(t.projection.target,i.projection.target),um(n,t.getLatestValues())):n=ha(t.getLayoutState().layout,i.getLayoutState().layout),rn(function(r){return i.setProjectionTargetAxis(r,n[r].min,n[r].max,!0)}),!0}var LM=new WeakMap,If,DM=function(){function i(e){var t=e.visualElement;this.isDragging=!1,this.currentDirection=null,this.constraints=!1,this.elastic=Pi(),this.props={},this.hasMutatedConstraints=!1,this.cursorProgress={x:.5,y:.5},this.originPoint={},this.openGlobalLock=null,this.panSession=null,this.visualElement=t,this.visualElement.enableLayoutProjection(),LM.set(t,this)}return i.prototype.start=function(e,t){var n=this,r=t===void 0?{}:t,s=r.snapToCursor,o=s===void 0?!1:s,a=r.cursorProgress,l=function(h){var g;n.stopMotion();var _=Wb(h).point;(g=n.cancelLayout)===null||g===void 0||g.call(n),n.cancelLayout=Ql(function(p,m){var x=ma(n.visualElement),v=zx(n.visualElement),y=hn(hn([],Ut(x)),Ut(v)),E=!1;n.isLayoutDrag()&&n.visualElement.lockProjectionTarget(),m(function(){y.forEach(function(A){return A.resetTransform()})}),p(function(){Jo(n.visualElement),v.forEach(Jo)}),m(function(){y.forEach(function(A){return A.restoreTransform()}),o&&(E=n.snapToCursor(_))}),p(function(){var A=!!(n.getAxisMotionValue("x")&&!n.isExternalDrag());A||n.visualElement.rebaseProjectionTarget(!0,n.visualElement.measureViewportBox(!1)),n.visualElement.scheduleUpdateLayoutProjection();var S=n.visualElement.projection;rn(function(P){if(!E){var N=S.target[P],b=N.min,R=N.max;n.cursorProgress[P]=a?a[P]:Gs(b,R,_[P])}var K=n.getAxisMotionValue(P);K&&(n.originPoint[P]=K.get())})}),m(function(){Or.update(),Or.preRender(),Or.render(),Or.postRender()}),p(function(){return n.resolveDragConstraints()})})},c=function(h,g){var _,p,m,x=n.props,v=x.drag,y=x.dragPropagation;v&&!y&&(n.openGlobalLock&&n.openGlobalLock(),n.openGlobalLock=Hm(v),!n.openGlobalLock)||(ec(),n.isDragging=!0,n.currentDirection=null,(p=(_=n.props).onDragStart)===null||p===void 0||p.call(_,h,g),(m=n.visualElement.animationState)===null||m===void 0||m.setActive(Lt.Drag,!0))},u=function(h,g){var _,p,m,x,v=n.props,y=v.dragPropagation,E=v.dragDirectionLock;if(!(!y&&!n.openGlobalLock)){var A=g.offset;if(E&&n.currentDirection===null){n.currentDirection=IM(A),n.currentDirection!==null&&((p=(_=n.props).onDirectionLock)===null||p===void 0||p.call(_,n.currentDirection));return}n.updateAxis("x",g.point,A),n.updateAxis("y",g.point,A),(x=(m=n.props).onDrag)===null||x===void 0||x.call(m,h,g),If=h}},f=function(h,g){return n.stop(h,g)},d=this.props.transformPagePoint;this.panSession=new Bm(e,{onSessionStart:l,onStart:c,onMove:u,onSessionEnd:f},{transformPagePoint:d})},i.prototype.resolveDragConstraints=function(){var e=this,t=this.props,n=t.dragConstraints,r=t.dragElastic,s=this.visualElement.getLayoutState().layoutCorrected;n?this.constraints=rc(n)?this.resolveRefConstraints(s,n):TM(s,n):this.constraints=!1,this.elastic=CM(r),this.constraints&&!this.hasMutatedConstraints&&rn(function(o){e.getAxisMotionValue(o)&&(e.constraints[o]=RM(s[o],e.constraints[o]))})},i.prototype.resolveRefConstraints=function(e,t){var n=this.props,r=n.onMeasureDragConstraints,s=n.transformPagePoint,o=t.current;this.constraintsBox=Am(o,s);var a=AM(e,this.constraintsBox);if(r){var l=r(ux(a));this.hasMutatedConstraints=!!l,l&&(a=om(l))}return a},i.prototype.cancelDrag=function(){var e,t;this.visualElement.unlockProjectionTarget(),(e=this.cancelLayout)===null||e===void 0||e.call(this),this.isDragging=!1,this.panSession&&this.panSession.end(),this.panSession=null,!this.props.dragPropagation&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),(t=this.visualElement.animationState)===null||t===void 0||t.setActive(Lt.Drag,!1)},i.prototype.stop=function(e,t){var n,r,s;(n=this.panSession)===null||n===void 0||n.end(),this.panSession=null;var o=this.isDragging;if(this.cancelDrag(),!!o){var a=t.velocity;this.animateDragEnd(a),(s=(r=this.props).onDragEnd)===null||s===void 0||s.call(r,e,t)}},i.prototype.snapToCursor=function(e){var t=this;return rn(function(n){var r=t.props.drag;if(xo(n,r,t.currentDirection)){var s=t.getAxisMotionValue(n);if(s){var o=t.visualElement.getLayoutState().layout,a=o[n].max-o[n].min,l=o[n].min+a/2,c=e[n]-l;t.originPoint[n]=e[n],s.set(c)}else return t.cursorProgress[n]=.5,!0}}).includes(!0)},i.prototype.updateAxis=function(e,t,n){var r=this.props.drag;if(xo(e,r,this.currentDirection))return this.getAxisMotionValue(e)?this.updateAxisMotionValue(e,n):this.updateVisualElementAxis(e,t)},i.prototype.updateAxisMotionValue=function(e,t){var n=this.getAxisMotionValue(e);if(!(!t||!n)){var r=this.originPoint[e]+t[e],s=this.constraints?Wm(r,this.constraints[e],this.elastic[e]):r;n.set(s)}},i.prototype.updateVisualElementAxis=function(e,t){var n,r=this.visualElement.getLayoutState().layout[e],s=r.max-r.min,o=this.cursorProgress[e],a=EM(t[e],s,o,(n=this.constraints)===null||n===void 0?void 0:n[e],this.elastic[e]);this.visualElement.setProjectionTargetAxis(e,a,a+s)},i.prototype.setProps=function(e){var t=e.drag,n=t===void 0?!1:t,r=e.dragDirectionLock,s=r===void 0?!1:r,o=e.dragPropagation,a=o===void 0?!1:o,l=e.dragConstraints,c=l===void 0?!1:l,u=e.dragElastic,f=u===void 0?Xm:u,d=e.dragMomentum,h=d===void 0?!0:d,g=si(e,["drag","dragDirectionLock","dragPropagation","dragConstraints","dragElastic","dragMomentum"]);this.props=Object.assign({drag:n,dragDirectionLock:s,dragPropagation:a,dragConstraints:c,dragElastic:f,dragMomentum:h},g)},i.prototype.getAxisMotionValue=function(e){var t=this.props,n=t.layout,r=t.layoutId,s="_drag"+e.toUpperCase();if(this.props[s])return this.props[s];if(!n&&r===void 0)return this.visualElement.getValue(e,0)},i.prototype.isLayoutDrag=function(){return!this.getAxisMotionValue("x")},i.prototype.isExternalDrag=function(){var e=this.props,t=e._dragX,n=e._dragY;return t||n},i.prototype.animateDragEnd=function(e){var t=this,n=this.props,r=n.drag,s=n.dragMomentum,o=n.dragElastic,a=n.dragTransition,l=PM(this.visualElement,this.isLayoutDrag()&&!this.isExternalDrag()),c=this.constraints||{};if(l&&Object.keys(c).length&&this.isLayoutDrag()){var u=this.visualElement.getProjectionParent();if(u){var f=ha(u.projection.targetFinal,c);rn(function(h){var g=f[h],_=g.min,p=g.max;c[h]={min:isNaN(_)?void 0:_,max:isNaN(p)?void 0:p}})}}var d=rn(function(h){var g;if(xo(h,r,t.currentDirection)){var _=(g=c==null?void 0:c[h])!==null&&g!==void 0?g:{},p=o?200:1e6,m=o?40:1e7,x=Object.assign(Object.assign({type:"inertia",velocity:s?e[h]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10},a),_);return t.getAxisMotionValue(h)?t.startAxisValueAnimation(h,x):t.visualElement.startLayoutAnimation(h,x,l)}});return Promise.all(d).then(function(){var h,g;(g=(h=t.props).onDragTransitionEnd)===null||g===void 0||g.call(h)})},i.prototype.stopMotion=function(){var e=this;rn(function(t){var n=e.getAxisMotionValue(t);n?n.stop():e.visualElement.stopLayoutAnimation()})},i.prototype.startAxisValueAnimation=function(e,t){var n=this.getAxisMotionValue(e);if(n){var r=n.get();return n.set(r),n.set(r),fa(e,n,0,t)}},i.prototype.scalePoint=function(){var e=this,t=this.props,n=t.drag,r=t.dragConstraints;if(!(!rc(r)||!this.constraintsBox)){this.stopMotion();var s={x:0,y:0};rn(function(o){s[o]=vx(e.visualElement.projection.target[o],e.constraintsBox[o])}),this.updateConstraints(function(){rn(function(o){if(xo(o,n,null)){var a=wM(e.visualElement.projection.target[o],e.constraintsBox[o],s[o]),l=a.min,c=a.max;e.visualElement.setProjectionTargetAxis(o,l,c)}})}),setTimeout(ec,1)}},i.prototype.updateConstraints=function(e){var t=this;this.cancelLayout=Ql(function(n,r){var s=ma(t.visualElement);r(function(){return s.forEach(function(o){return o.resetTransform()})}),n(function(){return Jo(t.visualElement)}),r(function(){return s.forEach(function(o){return o.restoreTransform()})}),n(function(){t.resolveDragConstraints()}),e&&r(e)})},i.prototype.mount=function(e){var t=this,n=e.getInstance(),r=Gr(n,"pointerdown",function(l){var c=t.props,u=c.drag,f=c.dragListener,d=f===void 0?!0:f;u&&d&&t.start(l)}),s=zc(window,"resize",function(){t.scalePoint()}),o=e.onLayoutUpdate(function(){t.isDragging&&t.resolveDragConstraints()}),a=e.prevDragCursor;return a&&this.start(If,{cursorProgress:a}),function(){r==null||r(),s==null||s(),o==null||o(),t.cancelDrag()}},i}();function xo(i,e,t){return(e===!0||e===i)&&(t===null||t===i)}function IM(i,e){e===void 0&&(e=10);var t=null;return Math.abs(i.y)>e?t="y":Math.abs(i.x)>e&&(t="x"),t}function NM(i){let e;const t=i[7].default,n=_t(t,i,i[6],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&64)&&xt(n,t,r,r[6],e?vt(t,r[6],s,null):yt(r[6]),null)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function UM(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{visualElement:o,props:a,isCustom:l}=e;const c=zt(Ci)||Ci(l);Kt(i,c,_=>t(5,n=_));let u=new DM({visualElement:o}),f;const d=()=>{f&&f(),h&&(f=h.subscribe(u))};let{dragControls:h}=a,{transformPagePoint:g}=xn(c);return u.setProps({...a,transformPagePoint:g}),ar(()=>{f&&f()}),rs(()=>u.mount(o)),i.$$set=_=>{"visualElement"in _&&t(1,o=_.visualElement),"props"in _&&t(2,a=_.props),"isCustom"in _&&t(3,l=_.isCustom),"$$scope"in _&&t(6,s=_.$$scope)},i.$$.update=()=>{i.$$.dirty&4&&({dragControls:h}=a),i.$$.dirty&32&&t(4,{transformPagePoint:g}=n,g),i.$$.dirty&20&&u.setProps({...a,transformPagePoint:g})},d(),[c,o,a,l,g,n,s,r]}class OM extends nt{constructor(e){super(),tt(this,e,UM,NM,Ke,{visualElement:1,props:2,isCustom:3})}}const FM=OM,BM={pan:oM,drag:FM};function Nf(i,e){return i/(e.max-e.min)*100}function VM(i,e,t){var n=t.target;if(typeof i=="string")if(He.test(i))i=parseFloat(i);else return i;var r=Nf(i,n.x),s=Nf(i,n.y);return r+"% "+s+"%"}var Uf="_$css";function kM(i,e){var t=e.delta,n=e.treeScale,r=i,s=i.includes("var("),o=[];s&&(i=i.replace(wm,function(_){return o.push(_),Uf}));var a=ii.parse(i);if(a.length>5)return r;var l=ii.createTransformer(i),c=typeof a[0]!="number"?1:0,u=t.x.scale*n.x,f=t.y.scale*n.y;a[0+c]/=u,a[1+c]/=f;var d=dn(u,f,.5);typeof a[2+c]=="number"&&(a[2+c]/=d),typeof a[3+c]=="number"&&(a[3+c]/=d);var h=l(a);if(s){var g=0;h=h.replace(Uf,function(){var _=o[g];return g++,_})}return h}var gs={process:VM},zM={borderRadius:Object.assign(Object.assign({},gs),{applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]}),borderTopLeftRadius:gs,borderTopRightRadius:gs,borderBottomLeftRadius:gs,borderBottomRightRadius:gs,boxShadow:{process:kM}};const Of=1e3;function HM(i,e){return!Bf(i)&&!Bf(e)&&(!Ys(i.x,e.x)||!Ys(i.y,e.y))}const Ff={min:0,max:0};function Bf(i){return Ys(i.x,Ff)&&Ys(i.y,Ff)}function Ys(i,e){return i.min===e.min&&i.max===e.max}const GM={duration:.45,ease:[.4,0,.1,1]};function WM(i,e,t){let{visualElement:n,layout:r=void 0,safeToRemove:s}=e,o=Pi(),a=Pi(),l={x:!1,y:!1},c={x:void 0,y:void 0},u,f=!1;rs(()=>{t(0,n.animateMotionValue=fa,n),n.enableLayoutProjection(),u=n.onLayoutUpdate(d),t(0,n.layoutSafeToRemove=function(){s()},n),lx(zM)}),ar(()=>{u(),rn(g=>{var _;return(_=c[g])==null?void 0:_.call(c)})});const d=(g,_,{originBox:p,targetBox:m,visibilityAction:x,shouldStackAnimate:v,onComplete:y,...E}={})=>{if(v===!1)return f=!1,s();if(f&&v!==!0)return;v&&(f=!0),_=p||_,g=m||g;const A=HM(_,g),S=rn(P=>{if(r==="position"){const N=g[P].max-g[P].min;_[P].max=_[P].min+N}if(!n.projection.isTargetLocked)if(x!==void 0)n.setVisibility(x===VisibilityAction.Show);else return A?h(P,g[P],_[P],E):n.setProjectionTargetAxis(P,g[P].min,g[P].max)});return n.syncRender(),Promise.all(S).then(()=>{f=!1,y&&y(),n.notifyLayoutAnimationComplete()})},h=(g,_,p,{transition:m}={})=>{var P,N;if((P=c[g])==null||P.call(c),l[g]&&Ys(_,a[g]))return;(N=c[g])==null||N.call(c),l[g]=!0;const x=o[g],v=n.getProjectionAnimationProgress()[g];v.clearListeners(),v.set(0),v.set(0);const y=()=>{const b=v.get()/Of;Dx(x,p,_,b),n.setProjectionTargetAxis(g,x.min,x.max)};y();const E=v.onChange(y);c[g]=()=>{l[g]=!1,v.stop(),E()},a[g]=_;const A=m||n.getDefaultTransition()||GM;return fa(g==="x"?"layoutX":"layoutY",v,Of,A&&Ic(A,"layout")).then(c[g])};return i.$$set=g=>{"visualElement"in g&&t(0,n=g.visualElement),"layout"in g&&t(1,r=g.layout),"safeToRemove"in g&&t(2,s=g.safeToRemove)},[n,r,s]}class XM extends nt{constructor(e){super(),tt(this,e,WM,null,Ke,{visualElement:0,layout:1,safeToRemove:2})}}const jM=XM;function $M(i){let e,t;return e=new jM({props:{visualElement:i[0],layout:i[1],safeToRemove:i[2][1]}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.visualElement=n[0]),r&2&&(s.layout=n[1]),r&4&&(s.safeToRemove=n[2][1]),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function YM(i,e,t){let n,{visualElement:r,props:s,isCustom:o}=e,{layout:a}=s;const l=_m(o);return Kt(i,l,c=>t(2,n=c)),i.$$set=c=>{"visualElement"in c&&t(0,r=c.visualElement),"props"in c&&t(4,s=c.props),"isCustom"in c&&t(5,o=c.isCustom)},i.$$.update=()=>{i.$$.dirty&16&&t(1,{layout:a}=s,a)},[r,a,n,l,s,o]}class qM extends nt{constructor(e){super(),tt(this,e,YM,$M,Ke,{visualElement:0,props:4,isCustom:5})}}const KM=qM;function ZM(i,e,t){let{visualElement:n,syncLayout:r,framerSyncLayout:s,update:o}=e;const a=zt(ws),l=zt(Jp);rs(()=>{pr(r)&&r.register(n),pr(s)&&s.register(n),n.onUnmount(()=>{pr(r)&&r.remove(n),pr(s)&&s.remove(n)})});let c=!1;const u=(d=!1)=>(c||(c=!0,xn(a).forEach(h=>{var g;(g=h.updater)==null||g.call(h,!0)}),pr(r)?r.syncUpdate():(Hx(n,d),r.add(n))),null);o===void 0&&n_(u);const f=(d=!1)=>{c=!1,xn(a).forEach((g,_)=>{var p;(p=g.afterU)==null||p.call(g,!0)}),pr(r)||r.flush()};return l.update(d=>d.concat([{updater:u,afterU:f}])),Ea(f),i.$$set=d=>{"visualElement"in d&&t(0,n=d.visualElement),"syncLayout"in d&&t(1,r=d.syncLayout),"framerSyncLayout"in d&&t(2,s=d.framerSyncLayout),"update"in d&&t(3,o=d.update)},i.$$.update=()=>{i.$$.dirty&8&&o!==void 0&&u(o)},[n,r,s,o]}class JM extends nt{constructor(e){super(),tt(this,e,ZM,null,Ke,{visualElement:0,syncLayout:1,framerSyncLayout:2,update:3})}}const QM=JM;function eS(i){let e,t;return e=new QM({props:{syncLayout:i[2],framerSyncLayout:i[3],visualElement:i[0],update:i[1]}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&4&&(s.syncLayout=n[2]),r&8&&(s.framerSyncLayout=n[3]),r&1&&(s.visualElement=n[0]),r&2&&(s.update=n[1]),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function tS(i,e,t){let n,r,s,{visualElement:o,props:a,isCustom:l}=e;const c=zt(Zu)||Zu(l);Kt(i,c,f=>t(2,r=f));const u=zt(Ju)||Ju();return Kt(i,u,f=>t(3,s=f)),i.$$set=f=>{"visualElement"in f&&t(0,o=f.visualElement),"props"in f&&t(6,a=f.props),"isCustom"in f&&t(7,l=f.isCustom)},i.$$.update=()=>{i.$$.dirty&64&&t(1,{update:n}=a,n)},[o,n,r,s,c,u,a,l]}class nS extends nt{constructor(e){super(),tt(this,e,tS,eS,Ke,{visualElement:0,props:6,isCustom:7})}}const iS=nS;var rS={measureLayout:iS,layoutAnimation:KM};function sS(i,e,t){let{visualElement:n,props:r}=e,{animate:s}=r;return i.$$set=o=>{"visualElement"in o&&t(0,n=o.visualElement),"props"in o&&t(1,r=o.props)},i.$$.update=()=>{i.$$.dirty&2&&t(2,{animate:s}=r,s),i.$$.dirty&1&&t(0,n.animationState=n.animationState||Tx(n),n),i.$$.dirty&5&&Nc(s)&&Ec().then(()=>s.subscribe(n))},[n,r,s]}class oS extends nt{constructor(e){super(),tt(this,e,sS,null,Ke,{visualElement:0,props:1})}}const aS=oS;function lS(i){let e;const t=i[7].default,n=_t(t,i,i[6],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&64)&&xt(n,t,r,r[6],e?vt(t,r[6],s,null):yt(r[6]),null)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function cS(i,e,t){let n,r,s,{$$slots:o={},$$scope:a}=e,{props:l,visualElement:c,isCustom:u}=e;const f=zt(Di)||Di(u);Kt(i,f,g=>t(9,s=g));const d=_m(u);Kt(i,d,g=>t(5,r=g));const h=g=>{var x;const[_,p]=g,m=(x=c.animationState)==null?void 0:x.setActive(Lt.Exit,!_,{custom:(s==null?void 0:s.custom)??n});return!_&&(m==null||m.then(p)),""};return i.$$set=g=>{"props"in g&&t(2,l=g.props),"visualElement"in g&&t(3,c=g.visualElement),"isCustom"in g&&t(4,u=g.isCustom),"$$scope"in g&&t(6,a=g.$$scope)},i.$$.update=()=>{i.$$.dirty&4&&({custom:n}=l),i.$$.dirty&32&&h(r)},[f,d,l,c,u,r,a,o]}class uS extends nt{constructor(e){super(),tt(this,e,cS,lS,Ke,{props:2,visualElement:3,isCustom:4})}}const fS=uS,dS={animation:aS,exit:fS},hS={...dS,...SM,...BM,...rS};var os=MM(hS);function pS(i){let e,t,n,r;return{c(){e=Fe("p"),t=Rt(i[1]),Ne(e,"class","cursor-pointer text-white hover:opacity-[0.9] dark:text-white")},m(s,o){Me(s,e,o),Ue(e,t),n||(r=is(i[7].call(null,e)),n=!0)},p(s,o){o&2&&$r(t,s[1])},d(s){s&&ye(e),n=!1,r()}}}function Vf(i){let e,t;return e=new os({props:{initial:{opacity:0,scale:.85,y:0},animate:{opacity:1,scale:1,y:0},transition:i[2],$$slots:{default:[_S,({motion:n})=>({7:n}),({motion:n})=>n?128:0]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&67&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function kf(i){let e,t,n;return t=new os({props:{transition:i[2],layoutId:"active",$$slots:{default:[gS,({motion:r})=>({7:r}),({motion:r})=>r?128:0]},$$scope:{ctx:i}}}),{c(){e=Fe("div"),Ae(t.$$.fragment),Ne(e,"class","absolute left-1/2 -translate-x-1/2 transform pt-4")},m(r,s){Me(r,e,s),Ee(t,e,null),n=!0},p(r,s){const o={};s&64&&(o.$$scope={dirty:s,ctx:r}),t.$set(o)},i(r){n||(J(t.$$.fragment,r),n=!0)},o(r){ie(t.$$.fragment,r),n=!1},d(r){r&&ye(e),Te(t)}}}function mS(i){let e,t,n,r;const s=i[3].default,o=_t(s,i,i[6],null);return{c(){e=Fe("div"),o&&o.c(),Ne(e,"class","h-full w-max p-4")},m(a,l){Me(a,e,l),o&&o.m(e,null),t=!0,n||(r=is(i[7].call(null,e)),n=!0)},p(a,l){o&&o.p&&(!t||l&64)&&xt(o,s,a,a[6],t?vt(s,a[6],l,null):yt(a[6]),null)},i(a){t||(J(o,a),t=!0)},o(a){ie(o,a),t=!1},d(a){a&&ye(e),o&&o.d(a),n=!1,r()}}}function gS(i){let e,t,n,r,s;return t=new os({props:{layout:!0,$$slots:{default:[mS,({motion:o})=>({7:o}),({motion:o})=>o?128:0]},$$scope:{ctx:i}}}),{c(){e=Fe("div"),Ae(t.$$.fragment),Ne(e,"class","overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black")},m(o,a){Me(o,e,a),Ee(t,e,null),n=!0,r||(s=is(i[7].call(null,e)),r=!0)},p(o,a){const l={};a&64&&(l.$$scope={dirty:a,ctx:o}),t.$set(l)},i(o){n||(J(t.$$.fragment,o),n=!0)},o(o){ie(t.$$.fragment,o),n=!1},d(o){o&&ye(e),Te(t),r=!1,s()}}}function _S(i){let e,t,n,r,s=i[0]===i[1]&&kf(i);return{c(){e=Fe("div"),s&&s.c()},m(o,a){Me(o,e,a),s&&s.m(e,null),t=!0,n||(r=is(i[7].call(null,e)),n=!0)},p(o,a){o[0]===o[1]?s?(s.p(o,a),a&3&&J(s,1)):(s=kf(o),s.c(),J(s,1),s.m(e,null)):s&&(un(),ie(s,1,1,()=>{s=null}),fn())},i(o){t||(J(s),t=!0)},o(o){ie(s),t=!1},d(o){o&&ye(e),s&&s.d(),n=!1,r()}}}function vS(i){let e,t,n,r,s,o;t=new os({props:{transition:{duration:.3},$$slots:{default:[pS,({motion:l})=>({7:l}),({motion:l})=>l?128:0]},$$scope:{ctx:i}}});let a=i[0]!==null&&Vf(i);return{c(){e=Fe("div"),Ae(t.$$.fragment),n=lt(),a&&a.c(),Ne(e,"class","relative")},m(l,c){Me(l,e,c),Ee(t,e,null),Ue(e,n),a&&a.m(e,null),r=!0,s||(o=[Rs(e,"mouseenter",i[4]),Rs(e,"mouseleave",i[5])],s=!0)},p(l,[c]){const u={};c&66&&(u.$$scope={dirty:c,ctx:l}),t.$set(u),l[0]!==null?a?(a.p(l,c),c&1&&J(a,1)):(a=Vf(l),a.c(),J(a,1),a.m(e,null)):a&&(un(),ie(a,1,1,()=>{a=null}),fn())},i(l){r||(J(t.$$.fragment,l),J(a),r=!0)},o(l){ie(t.$$.fragment,l),ie(a),r=!1},d(l){l&&ye(e),Te(t),a&&a.d(),s=!1,kn(o)}}}function xS(i,e,t){let{$$slots:n={},$$scope:r}=e;const s={type:"spring",mass:.5,damping:11.5,stiffness:100,restDelta:.001,restSpeed:.001};let{active:o}=e,{item:a}=e;const l=()=>t(0,o=a),c=()=>t(0,o=null);return i.$$set=u=>{"active"in u&&t(0,o=u.active),"item"in u&&t(1,a=u.item),"$$scope"in u&&t(6,r=u.$$scope)},[o,a,s,n,l,c,r]}class _s extends nt{constructor(e){super(),tt(this,e,xS,vS,Ke,{active:0,item:1})}}function yS(i){let e,t,n,r,s,o,a,l,c,u;return{c(){e=Fe("a"),t=Fe("img"),r=lt(),s=Fe("div"),o=Fe("h4"),a=Rt(i[0]),l=lt(),c=Fe("p"),u=Rt(i[1]),ta(t.src,n=i[3])||Ne(t,"src",n),Ne(t,"width",140),Ne(t,"height",70),Ne(t,"alt",i[0]),Ne(t,"class","flex-shrink-0 rounded-md shadow-2xl"),Ne(o,"class","mb-1 text-xl font-bold text-black dark:text-white"),Ne(c,"class","max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300"),Ne(e,"href",i[2]),Ne(e,"class","flex space-x-2")},m(f,d){Me(f,e,d),Ue(e,t),Ue(e,r),Ue(e,s),Ue(s,o),Ue(o,a),Ue(s,l),Ue(s,c),Ue(c,u)},p(f,[d]){d&8&&!ta(t.src,n=f[3])&&Ne(t,"src",n),d&1&&Ne(t,"alt",f[0]),d&1&&$r(a,f[0]),d&2&&$r(u,f[1]),d&4&&Ne(e,"href",f[2])},i:Dt,o:Dt,d(f){f&&ye(e)}}}function bS(i,e,t){let{title:n}=e,{description:r}=e,{href:s}=e,{src:o}=e;return i.$$set=a=>{"title"in a&&t(0,n=a.title),"description"in a&&t(1,r=a.description),"href"in a&&t(2,s=a.href),"src"in a&&t(3,o=a.src)},[n,r,s,o]}class MS extends nt{constructor(e){super(),tt(this,e,bS,yS,Ke,{title:0,description:1,href:2,src:3})}}function zf(i,e,t){const n=i.slice();return n[1]=e[t].title,n[2]=e[t].description,n[3]=e[t].image,n}function SS(i){let e;return{c(){e=Rt("Hobby")},m(t,n){Me(t,e,n)},d(t){t&&ye(e)}}}function ES(i){let e;return{c(){e=Rt("Individual")},m(t,n){Me(t,e,n)},d(t){t&&ye(e)}}}function TS(i){let e;return{c(){e=Rt("Team")},m(t,n){Me(t,e,n)},d(t){t&&ye(e)}}}function AS(i){let e;return{c(){e=Rt("Enterprise")},m(t,n){Me(t,e,n)},d(t){t&&ye(e)}}}function wS(i){let e,t,n,r,s,o,a,l,c;return t=new yn({props:{href:"#",$$slots:{default:[SS]},$$scope:{ctx:i}}}),r=new yn({props:{href:"#",$$slots:{default:[ES]},$$scope:{ctx:i}}}),o=new yn({props:{href:"#",$$slots:{default:[TS]},$$scope:{ctx:i}}}),l=new yn({props:{href:"#",$$slots:{default:[AS]},$$scope:{ctx:i}}}),{c(){e=Fe("div"),Ae(t.$$.fragment),n=lt(),Ae(r.$$.fragment),s=lt(),Ae(o.$$.fragment),a=lt(),Ae(l.$$.fragment),Ne(e,"class","flex flex-col space-y-4 text-sm")},m(u,f){Me(u,e,f),Ee(t,e,null),Ue(e,n),Ee(r,e,null),Ue(e,s),Ee(o,e,null),Ue(e,a),Ee(l,e,null),c=!0},p(u,f){const d={};f&64&&(d.$$scope={dirty:f,ctx:u}),t.$set(d);const h={};f&64&&(h.$$scope={dirty:f,ctx:u}),r.$set(h);const g={};f&64&&(g.$$scope={dirty:f,ctx:u}),o.$set(g);const _={};f&64&&(_.$$scope={dirty:f,ctx:u}),l.$set(_)},i(u){c||(J(t.$$.fragment,u),J(r.$$.fragment,u),J(o.$$.fragment,u),J(l.$$.fragment,u),c=!0)},o(u){ie(t.$$.fragment,u),ie(r.$$.fragment,u),ie(o.$$.fragment,u),ie(l.$$.fragment,u),c=!1},d(u){u&&ye(e),Te(t),Te(r),Te(o),Te(l)}}}function RS(i){let e;return{c(){e=Rt("Web Development")},m(t,n){Me(t,e,n)},d(t){t&&ye(e)}}}function CS(i){let e;return{c(){e=Rt("Interface Design")},m(t,n){Me(t,e,n)},d(t){t&&ye(e)}}}function PS(i){let e,t,n,r,s;return t=new yn({props:{href:"#test",$$slots:{default:[RS]},$$scope:{ctx:i}}}),r=new yn({props:{href:"#",$$slots:{default:[CS]},$$scope:{ctx:i}}}),{c(){e=Fe("div"),Ae(t.$$.fragment),n=lt(),Ae(r.$$.fragment),Ne(e,"class","flex flex-col space-y-4 text-sm")},m(o,a){Me(o,e,a),Ee(t,e,null),Ue(e,n),Ee(r,e,null),s=!0},p(o,a){const l={};a&64&&(l.$$scope={dirty:a,ctx:o}),t.$set(l);const c={};a&64&&(c.$$scope={dirty:a,ctx:o}),r.$set(c)},i(o){s||(J(t.$$.fragment,o),J(r.$$.fragment,o),s=!0)},o(o){ie(t.$$.fragment,o),ie(r.$$.fragment,o),s=!1},d(o){o&&ye(e),Te(t),Te(r)}}}function LS(i){let e;return{c(){e=Rt("Anh Tuan Driving Center")},m(t,n){Me(t,e,n)},d(t){t&&ye(e)}}}function DS(i){let e;return{c(){e=Rt("GMO-Z.com Runsystem JSC")},m(t,n){Me(t,e,n)},d(t){t&&ye(e)}}}function IS(i){let e,t,n,r,s;return t=new yn({props:{href:"#anh-tuan",$$slots:{default:[LS]},$$scope:{ctx:i}}}),r=new yn({props:{href:"#gmo",$$slots:{default:[DS]},$$scope:{ctx:i}}}),{c(){e=Fe("div"),Ae(t.$$.fragment),n=lt(),Ae(r.$$.fragment),Ne(e,"class","flex flex-col space-y-4 text-sm")},m(o,a){Me(o,e,a),Ee(t,e,null),Ue(e,n),Ee(r,e,null),s=!0},p(o,a){const l={};a&64&&(l.$$scope={dirty:a,ctx:o}),t.$set(l);const c={};a&64&&(c.$$scope={dirty:a,ctx:o}),r.$set(c)},i(o){s||(J(t.$$.fragment,o),J(r.$$.fragment,o),s=!0)},o(o){ie(t.$$.fragment,o),ie(r.$$.fragment,o),s=!1},d(o){o&&ye(e),Te(t),Te(r)}}}function Hf(i){let e,t;return e=new MS({props:{title:i[1],href:"#",src:i[3],description:Gf(i[2],40)}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.title=n[1]),r&1&&(s.src=n[3]),r&1&&(s.description=Gf(n[2],40)),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function NS(i){let e,t,n=Ri(i[0]),r=[];for(let o=0;o<n.length;o+=1)r[o]=Hf(zf(i,n,o));const s=o=>ie(r[o],1,1,()=>{r[o]=null});return{c(){e=Fe("div");for(let o=0;o<r.length;o+=1)r[o].c();Ne(e,"class","grid grid-cols-2 gap-10 p-4 text-sm text-blue-600")},m(o,a){Me(o,e,a);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);t=!0},p(o,a){if(a&1){n=Ri(o[0]);let l;for(l=0;l<n.length;l+=1){const c=zf(o,n,l);r[l]?(r[l].p(c,a),J(r[l],1)):(r[l]=Hf(c),r[l].c(),J(r[l],1),r[l].m(e,null))}for(un(),l=n.length;l<r.length;l+=1)s(l);fn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)J(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)ie(r[a]);t=!1},d(o){o&&ye(e),rp(r,o)}}}function US(i){let e;return{c(){e=Rt("Hobby")},m(t,n){Me(t,e,n)},d(t){t&&ye(e)}}}function OS(i){let e;return{c(){e=Rt("Individual")},m(t,n){Me(t,e,n)},d(t){t&&ye(e)}}}function FS(i){let e;return{c(){e=Rt("Team")},m(t,n){Me(t,e,n)},d(t){t&&ye(e)}}}function BS(i){let e;return{c(){e=Rt("Enterprise")},m(t,n){Me(t,e,n)},d(t){t&&ye(e)}}}function VS(i){let e,t,n,r,s,o,a,l,c;return t=new yn({props:{href:"#",$$slots:{default:[US]},$$scope:{ctx:i}}}),r=new yn({props:{href:"#",$$slots:{default:[OS]},$$scope:{ctx:i}}}),o=new yn({props:{href:"#",$$slots:{default:[FS]},$$scope:{ctx:i}}}),l=new yn({props:{href:"#",$$slots:{default:[BS]},$$scope:{ctx:i}}}),{c(){e=Fe("div"),Ae(t.$$.fragment),n=lt(),Ae(r.$$.fragment),s=lt(),Ae(o.$$.fragment),a=lt(),Ae(l.$$.fragment),Ne(e,"class","flex flex-col space-y-4 text-sm")},m(u,f){Me(u,e,f),Ee(t,e,null),Ue(e,n),Ee(r,e,null),Ue(e,s),Ee(o,e,null),Ue(e,a),Ee(l,e,null),c=!0},p(u,f){const d={};f&64&&(d.$$scope={dirty:f,ctx:u}),t.$set(d);const h={};f&64&&(h.$$scope={dirty:f,ctx:u}),r.$set(h);const g={};f&64&&(g.$$scope={dirty:f,ctx:u}),o.$set(g);const _={};f&64&&(_.$$scope={dirty:f,ctx:u}),l.$set(_)},i(u){c||(J(t.$$.fragment,u),J(r.$$.fragment,u),J(o.$$.fragment,u),J(l.$$.fragment,u),c=!0)},o(u){ie(t.$$.fragment,u),ie(r.$$.fragment,u),ie(o.$$.fragment,u),ie(l.$$.fragment,u),c=!1},d(u){u&&ye(e),Te(t),Te(r),Te(o),Te(l)}}}function kS(i){let e,t,n,r,s,o,a,l,c,u;return e=new _s({props:{active:vs,item:"About me",$$slots:{default:[wS]},$$scope:{ctx:i}}}),n=new _s({props:{active:vs,item:"Technologies",$$slots:{default:[PS]},$$scope:{ctx:i}}}),s=new _s({props:{active:vs,item:"Experience",$$slots:{default:[IS]},$$scope:{ctx:i}}}),a=new _s({props:{active:vs,item:"Projects",$$slots:{default:[NS]},$$scope:{ctx:i}}}),c=new _s({props:{active:vs,item:"Certificate",$$slots:{default:[VS]},$$scope:{ctx:i}}}),{c(){Ae(e.$$.fragment),t=lt(),Ae(n.$$.fragment),r=lt(),Ae(s.$$.fragment),o=lt(),Ae(a.$$.fragment),l=lt(),Ae(c.$$.fragment)},m(f,d){Ee(e,f,d),Me(f,t,d),Ee(n,f,d),Me(f,r,d),Ee(s,f,d),Me(f,o,d),Ee(a,f,d),Me(f,l,d),Ee(c,f,d),u=!0},p(f,d){const h={};d&64&&(h.$$scope={dirty:d,ctx:f}),e.$set(h);const g={};d&64&&(g.$$scope={dirty:d,ctx:f}),n.$set(g);const _={};d&64&&(_.$$scope={dirty:d,ctx:f}),s.$set(_);const p={};d&65&&(p.$$scope={dirty:d,ctx:f}),a.$set(p);const m={};d&64&&(m.$$scope={dirty:d,ctx:f}),c.$set(m)},i(f){u||(J(e.$$.fragment,f),J(n.$$.fragment,f),J(s.$$.fragment,f),J(a.$$.fragment,f),J(c.$$.fragment,f),u=!0)},o(f){ie(e.$$.fragment,f),ie(n.$$.fragment,f),ie(s.$$.fragment,f),ie(a.$$.fragment,f),ie(c.$$.fragment,f),u=!1},d(f){f&&(ye(t),ye(r),ye(o),ye(l)),Te(e,f),Te(n,f),Te(s,f),Te(a,f),Te(c,f)}}}function zS(i){let e,t,n,r;return n=new fv({props:{$$slots:{default:[kS]},$$scope:{ctx:i}}}),{c(){e=Fe("div"),t=Fe("div"),Ae(n.$$.fragment),Ne(t,"class","fixed inset-x-0 top-2 z-50 mx-auto max-w-xl "),Ne(e,"class","relative flex w-full items-center justify-between")},m(s,o){Me(s,e,o),Ue(e,t),Ee(n,t,null),r=!0},p(s,[o]){const a={};o&65&&(a.$$scope={dirty:o,ctx:s}),n.$set(a)},i(s){r||(J(n.$$.fragment,s),r=!0)},o(s){ie(n.$$.fragment,s),r=!1},d(s){s&&ye(e),Te(n)}}}let vs=null;function Gf(i,e){return i.length>e?i.substring(0,e)+"...":i}function HS(i,e,t){let{projectArray:n}=e;return i.$$set=r=>{"projectArray"in r&&t(0,n=r.projectArray)},[n]}class GS extends nt{constructor(e){super(),tt(this,e,HS,zS,Ke,{projectArray:0})}}function WS(i){let e;return{c(){e=Fe("div"),e.innerHTML=`<p class="timeline-title text-white text-5xl svelte-12hzwnk">Experience</p> <ol class="relative border-s border-gray-200 dark:border-gray-700"><li class="mb-10 ms-4" id="anh-tuan"><div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-2xl font-normal leading-none text-gray-300 dark:text-gray-500">From May 2021 to January 2023</time> <h3 class="text-3xl font-semibold text-gray-300 dark:text-white">Wordpress Website builder for <span class="text-yellow-400">Anh Tuan Driving Center</span></h3> <p class="text-xl mb-4 font-normal text-gray-300 dark:text-gray-300">Rebuilt the interface, deployed, debugged and developed many
                functionalities for Anh Tuan Driving Center’s website using
                Wordpress, Cpanel, SSH, Cron Jobs...</p></li> <li class="mb-10 ms-4" id="gmo"><div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-2xl font-normal leading-none text-gray-300 dark:text-gray-500">From January 2023 to July 2023</time> <h3 class="text-3xl font-semibold text-gray-300 dark:text-white">Web Developer Internship &amp; Fresher at <span class="text-sky-600">GMO-Z.com</span> <span class="text-red-500">Runsystem</span> JSC</h3> <ul class="text-xl font-normal text-gray-300 dark:text-gray-300"><li>Developed Front End Interface for SPA landing pages</li> <li>Crawled data from blogs about technologies&#39; API using
                    Javascript and Python to build an SPA blog.</li> <li>Participated in an automated translation web app project
                    serving internal staffs, capable of translating XLSX,
                    Markdown,,.. files without losing formats and images.</li></ul></li> <li class="ms-4"><div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-2xl font-normal leading-none text-gray-300 dark:text-gray-500">From September 2023 to December 2023</time> <h3 class="text-3xl font-semibold text-gray-300 dark:text-white">Programming tutor at <span class="text-emerald-600">Marathon Education</span></h3> <p class="text-xl font-normal text-gray-300 dark:text-gray-300">Taught Javascript, HTML, CSS, Python, Wordpress, UI/UX design</p></li></ol>`,Ne(e,"class","timeline-container w-4/5 mx-auto px-auto flex flex-row gap-6")},m(t,n){Me(t,e,n)},p:Dt,i:Dt,o:Dt,d(t){t&&ye(e)}}}class XS extends nt{constructor(e){super(),tt(this,e,null,WS,Ke,{})}}function Wf(i,e,t){const n=i.slice();return n[4]=e[t],n[6]=t,n}function jS(i){let e,t=i[4]+"",n,r=" ",s,o,a,l;return{c(){e=Fe("span"),n=Rt(t),s=Rt(r),o=lt(),Ne(e,"class","text-gray-300")},m(c,u){Me(c,e,u),Ue(e,n),Ue(e,s),Me(c,o,u),a||(l=is(i[3].call(null,e)),a=!0)},p(c,u){u&1&&t!==(t=c[4]+"")&&$r(n,t)},d(c){c&&(ye(e),ye(o)),a=!1,l()}}}function Xf(i,e){let t,n,r;return n=new os({props:{variants:e[2],custom:e[6]+1,initial:"hidden",animate:"visible",$$slots:{default:[jS,({motion:s})=>({3:s}),({motion:s})=>s?8:0]},$$scope:{ctx:e}}}),{key:i,first:null,c(){t=wi(),Ae(n.$$.fragment),this.first=t},m(s,o){Me(s,t,o),Ee(n,s,o),r=!0},p(s,o){e=s;const a={};o&1&&(a.custom=e[6]+1),o&129&&(a.$$scope={dirty:o,ctx:e}),n.$set(a)},i(s){r||(J(n.$$.fragment,s),r=!0)},o(s){ie(n.$$.fragment,s),r=!1},d(s){s&&ye(t),Te(n,s)}}}function $S(i){let e,t=[],n=new Map,r,s,o,a=Ri(i[0].split(" "));const l=c=>`${c[4]}${c[6]}`;for(let c=0;c<a.length;c+=1){let u=Wf(i,a,c),f=l(u);n.set(f,t[c]=Xf(f,u))}return{c(){e=Fe("div");for(let c=0;c<t.length;c+=1)t[c].c()},m(c,u){Me(c,e,u);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(e,null);r=!0,s||(o=is(i[3].call(null,e)),s=!0)},p(c,u){u&5&&(a=Ri(c[0].split(" ")),un(),t=up(t,u,l,1,c,a,n,e,cp,Xf,null,Wf),fn())},i(c){if(!r){for(let u=0;u<a.length;u+=1)J(t[u]);r=!0}},o(c){for(let u=0;u<t.length;u+=1)ie(t[u]);r=!1},d(c){c&&ye(e);for(let u=0;u<t.length;u+=1)t[u].d();s=!1,o()}}}function YS(i){let e,t,n,r,s,o;return r=new os({props:{custom:0,variants:i[2],initial:"hidden",animate:"visible",$$slots:{default:[$S,({motion:a})=>({3:a}),({motion:a})=>a?8:0]},$$scope:{ctx:i}}}),{c(){e=Fe("div"),t=Fe("div"),n=Fe("div"),Ae(r.$$.fragment),Ne(n,"class","text-5xl leading-snug tracking-wide text-white"),Ne(t,"class","mt-1"),Ne(e,"class",s=Un("font-bold",i[1]))},m(a,l){Me(a,e,l),Ue(e,t),Ue(t,n),Ee(r,n,null),o=!0},p(a,[l]){const c={};l&129&&(c.$$scope={dirty:l,ctx:a}),r.$set(c),(!o||l&2&&s!==(s=Un("font-bold",a[1])))&&Ne(e,"class",s)},i(a){o||(J(r.$$.fragment,a),o=!0)},o(a){ie(r.$$.fragment,a),o=!1},d(a){a&&ye(e),Te(r)}}}function qS(i,e,t){let{words:n}=e,{className:r=void 0}=e;const s={visible:o=>({opacity:1,transition:{delay:o*.1,duration:3}}),hidden:{opacity:0}};return i.$$set=o=>{"words"in o&&t(0,n=o.words),"className"in o&&t(1,r=o.className)},[n,r,s]}class KS extends nt{constructor(e){super(),tt(this,e,qS,YS,Ke,{words:0,className:1})}}function ZS(i){let e,t;return e=new KS({props:{words:i[0]}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.words=n[0]),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function JS(i,e,t){let{words:n}=e;return i.$$set=r=>{"words"in r&&t(0,n=r.words)},[n]}class QS extends nt{constructor(e){super(),tt(this,e,JS,ZS,Ke,{words:0})}}function eE(i){let e;return{c(){e=Fe("div"),e.innerHTML='<div class="h-96"></div> <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12"><div class="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72"><p class="text-3xl font-bold leading-7 text-center text-white">Contact me</p> <form action="" method="post"><div class="md:flex items-center mt-12"><div class="w-full md:w-1/2 flex flex-col"><label class="font-semibold leading-none text-gray-300">Name</label> <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/></div> <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4"><label class="font-semibold leading-none text-gray-300">Phone/Email</label> <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/></div></div> <div class="md:flex items-center mt-8"><div class="w-full flex flex-col"><label class="font-semibold leading-none text-gray-300">Company</label> <input type="text" class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/></div></div> <div><div class="w-full flex flex-col mt-8"><label class="font-semibold leading-none text-gray-300">Message</label> <textarea type="text" class="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea></div></div> <div class="flex items-center justify-center w-full"><button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">Send message</button></div></form></div></div>',Ne(e,"class","w-full")},m(t,n){Me(t,e,n)},p:Dt,i:Dt,o:Dt,d(t){t&&ye(e)}}}class tE extends nt{constructor(e){super(),tt(this,e,null,eE,Ke,{})}}const nE=i=>({intersecting:i&1,entry:i&2,observer:i&4}),jf=i=>({intersecting:i[0],entry:i[1],observer:i[2]});function iE(i){let e;const t=i[9].default,n=_t(t,i,i[8],jf);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&263)&&xt(n,t,r,r[8],e?vt(t,r[8],s,nE):yt(r[8]),jf)},i(r){e||(J(n,r),e=!0)},o(r){ie(n,r),e=!1},d(r){n&&n.d(r)}}}function rE(i,e,t){let{$$slots:n={},$$scope:r}=e,{element:s=null}=e,{once:o=!1}=e,{intersecting:a=!1}=e,{root:l=null}=e,{rootMargin:c="0px"}=e,{threshold:u=0}=e,{entry:f=null}=e,{observer:d=null}=e;const h=i_();let g=null,_=null;const p=()=>{t(2,d=new IntersectionObserver(m=>{m.forEach(x=>{t(1,f=x),t(0,a=x.isIntersecting)})},{root:l,rootMargin:c,threshold:u}))};return rs(()=>(p(),()=>{d&&(d.disconnect(),t(2,d=null))})),Ea(async()=>{f!==null&&(h("observe",f),f.isIntersecting&&(h("intersect",f),s&&o&&(d==null||d.unobserve(s)))),await Ec(),s!==null&&s!==_&&(d==null||d.observe(s),_!==null&&(d==null||d.unobserve(_)),_=s),g&&c!==g&&(d==null||d.disconnect(),_=null,p()),g=c}),i.$$set=m=>{"element"in m&&t(3,s=m.element),"once"in m&&t(4,o=m.once),"intersecting"in m&&t(0,a=m.intersecting),"root"in m&&t(5,l=m.root),"rootMargin"in m&&t(6,c=m.rootMargin),"threshold"in m&&t(7,u=m.threshold),"entry"in m&&t(1,f=m.entry),"observer"in m&&t(2,d=m.observer),"$$scope"in m&&t(8,r=m.$$scope)},[a,f,d,s,o,l,c,u,r,n]}class $f extends nt{constructor(e){super(),tt(this,e,rE,iE,Ke,{element:3,once:4,intersecting:0,root:5,rootMargin:6,threshold:7,entry:1,observer:2})}}function sE(i){const e=i-1;return e*e*e+1}function Yf(i){return--i*i*i*i*i+1}function qf(i,{delay:e=0,duration:t=400,easing:n=sE,start:r=0,opacity:s=0}={}){const o=getComputedStyle(i),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-r,u=a*(1-s);return{delay:e,duration:t,easing:n,css:(f,d)=>`
			transform: ${l} scale(${1-c*d});
			opacity: ${a-u*d}
		`}}function Kf(i,e,t){const n=i.slice();return n[7]=e[t].id,n[8]=e[t].title,n[9]=e[t].description,n[10]=e[t].image,n[11]=e[t].github,n[12]=e[t].demo,n}function Zf(i){let e,t;return e=new GS({props:{projectArray:i[3]}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p:Dt,i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function Jf(i){let e,t;return e=new XS({}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function oE(i){let e,t,n,r=i[15]&&Jf();return{c(){e=Fe("div"),t=Fe("div"),r&&r.c(),Ne(e,"class","experience")},m(s,o){Me(s,e,o),Ue(e,t),r&&r.m(t,null),i[4](t),n=!0},p(s,o){s[15]?r?o&32768&&J(r,1):(r=Jf(),r.c(),J(r,1),r.m(t,null)):r&&(un(),ie(r,1,1,()=>{r=null}),fn())},i(s){n||(J(r),n=!0)},o(s){ie(r),n=!1},d(s){s&&ye(e),r&&r.d(),i[4](null)}}}function Qf(i){let e,t,n;return{c(){e=Fe("div"),e.innerHTML='<h2 class="flex flex-row flex-nowrap items-center my-8"><span class="flex-grow block border-t border-white" aria-hidden="true" role="presentation"></span> <span class="flex-none block mx-4 px-4 py-2.5 text-[2rem] leading-none font-medium uppercase bg-white text-black">Personal projects</span> <span class="flex-grow block border-t border-white" aria-hidden="true" role="presentation"></span></h2>',Ne(e,"class","text-5xl text-white")},m(r,s){Me(r,e,s),n=!0},i(r){n||(r&&ks(()=>{n&&(t||(t=mu(e,qf,{duration:800,delay:300,opacity:.5,start:0,easing:Yf},!0)),t.run(1))}),n=!0)},o(r){r&&(t||(t=mu(e,qf,{duration:800,delay:300,opacity:.5,start:0,easing:Yf},!1)),t.run(0)),n=!1},d(r){r&&ye(e),r&&t&&t.end()}}}function aE(i){let e,t=i[15]&&Qf();return{c(){e=Fe("div"),t&&t.c()},m(n,r){Me(n,e,r),t&&t.m(e,null),i[5](e)},p(n,r){n[15]?t?r&32768&&J(t,1):(t=Qf(),t.c(),J(t,1),t.m(e,null)):t&&(un(),ie(t,1,1,()=>{t=null}),fn())},d(n){n&&ye(e),t&&t.d(),i[5](null)}}}function ed(i){let e,t;return e=new lv({props:{id:i[7],title:i[8],description:i[9],image:i[10],github:i[11],demo:i[12]||""}}),{c(){Ae(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p:Dt,i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){ie(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function lE(i){let e,t,n,r,s,o,a,l,c,u,f,d,h,g,_,p,m,x,v,y,E,A,S,P,N,b,R,K,Q,L,k=!i[1]&&Zf(i);s=new QS({props:{words:i[2]}}),E=new $f({props:{once:!0,element:i[0],$$slots:{default:[oE,({intersecting:U})=>({15:U}),({intersecting:U})=>U?32768:0]},$$scope:{ctx:i}}}),S=new $f({props:{element:i[0],$$slots:{default:[aE,({intersecting:U})=>({15:U}),({intersecting:U})=>U?32768:0]},$$scope:{ctx:i}}});let V=Ri(i[3]),X=[];for(let U=0;U<V.length;U+=1)X[U]=ed(Kf(i,V,U));const $=U=>ie(X[U],1,1,()=>{X[U]=null});return R=new tE({}),{c(){e=Fe("div"),k&&k.c(),t=lt(),n=Fe("div"),r=Fe("div"),Ae(s.$$.fragment),o=lt(),a=Fe("div"),a.innerHTML='<div class="text-white">second section</div>',l=lt(),c=Fe("div"),c.textContent="a",u=lt(),f=Fe("div"),f.textContent="a",d=lt(),h=Fe("div"),h.textContent="a",g=lt(),_=Fe("div"),_.textContent="a",p=lt(),m=Fe("div"),m.textContent="a",x=lt(),v=Fe("div"),v.textContent="a",y=lt(),Ae(E.$$.fragment),A=lt(),Ae(S.$$.fragment),P=lt(),N=Fe("div");for(let U=0;U<X.length;U+=1)X[U].c();b=lt(),Ae(R.$$.fragment),K=lt(),Q=Fe("div"),Ne(r,"class","h-[50rem] w-1/2"),Ne(n,"class","text-generate h-auto flex flex-row justify-around items-center svelte-13hfba8"),Ne(N,"class","all-project flex flex-row justify-around flex-wrap svelte-13hfba8"),Ne(Q,"class","empty-space h-screen w-screen"),Ne(e,"class","mt-[10rem]")},m(U,q){Me(U,e,q),k&&k.m(e,null),Ue(e,t),Ue(e,n),Ue(n,r),Ee(s,r,null),Ue(n,o),Ue(n,a),Ue(e,l),Ue(e,c),Ue(e,u),Ue(e,f),Ue(e,d),Ue(e,h),Ue(e,g),Ue(e,_),Ue(e,p),Ue(e,m),Ue(e,x),Ue(e,v),Ue(e,y),Ee(E,e,null),Ue(e,A),Ee(S,e,null),Ue(e,P),Ue(e,N);for(let te=0;te<X.length;te+=1)X[te]&&X[te].m(N,null);Ue(e,b),Ee(R,e,null),Ue(e,K),Ue(e,Q),L=!0},p(U,[q]){U[1]?k&&(un(),ie(k,1,1,()=>{k=null}),fn()):k?(k.p(U,q),q&2&&J(k,1)):(k=Zf(U),k.c(),J(k,1),k.m(e,t));const te={};q&1&&(te.element=U[0]),q&98305&&(te.$$scope={dirty:q,ctx:U}),E.$set(te);const fe={};if(q&1&&(fe.element=U[0]),q&98305&&(fe.$$scope={dirty:q,ctx:U}),S.$set(fe),q&8){V=Ri(U[3]);let _e;for(_e=0;_e<V.length;_e+=1){const H=Kf(U,V,_e);X[_e]?(X[_e].p(H,q),J(X[_e],1)):(X[_e]=ed(H),X[_e].c(),J(X[_e],1),X[_e].m(N,null))}for(un(),_e=V.length;_e<X.length;_e+=1)$(_e);fn()}},i(U){if(!L){J(k),J(s.$$.fragment,U),J(E.$$.fragment,U),J(S.$$.fragment,U);for(let q=0;q<V.length;q+=1)J(X[q]);J(R.$$.fragment,U),L=!0}},o(U){ie(k),ie(s.$$.fragment,U),ie(E.$$.fragment,U),ie(S.$$.fragment,U),X=X.filter(Boolean);for(let q=0;q<X.length;q+=1)ie(X[q]);ie(R.$$.fragment,U),L=!1},d(U){U&&ye(e),k&&k.d(),Te(s),Te(E),Te(S),rp(X,U),Te(R)}}}function cE(i,e,t){let n;const r="Hello world! My name is Dang Thai An a.k.a アヤ (Aya), I am a passionate Junior Web Developer from Vietnam!",s=[{id:1,title:"Portfolio",description:"My portfolio written in Svelte, AceternityUI, TailwindCSS and ThreeJS",image:"https://i.imgur.com/DlcOBgu.png",github:"https://github.com/ayakase/Portfolio",demo:"https://ayakase-portfolio.netlify.app/",section:"#portfolio"},{id:2,title:"Hoang Ha Tourism",description:"An E-commerce blog that provide tours and toursim services, written in ExpressJS, Vue 3, Pinia, Bootstrap,  JWT, MySQL, Sequelize, Cloudinary, ",image:"https://i.imgur.com/wLCv97q.png",github:"https://github.com",section:"#hoangha"},{id:3,title:"Fuwa Chat App",description:"An Serverless real-time application written in VueJS, Vuetify, Firebase Firestore 10, Cloudinary ",image:"https://i.imgur.com/EDlQ2xu.png",github:"https://github.com/ayakase/Fuwa",demo:"https://touhou-vn.site/",section:"#fuwa"},{id:4,title:"Japanese translation tool",description:"A tool for translating files in Japanese to Vietnamese using OpenAI API, capable of converting XLSX, Markdown files ",image:"https://i.imgur.com/P81cq5Q.png",github:"https://github.com/ayakase/Fuwa",section:"#translate"},{id:5,title:"Landing page design template",description:"A landing page written in pure HTML, CSS",image:"https://i.imgur.com/w55NPbA.png",github:"https://github.com/ayakase/Fuwa",section:"#translate"},{id:6,title:"Landing page design template",description:"A landing page written in pure HTML, CSS",image:"https://i.imgur.com/w55NPbA.png",github:"https://github.com/ayakase/Fuwa",section:"#translate"}];let o;window.onscroll=function(){const c=document.documentElement.scrollHeight-window.innerHeight,u=document.documentElement.scrollTop;c-u<=2?(t(1,o=!0),console.log(o)):(t(1,o=!1),console.log(o))};function a(c){nr[c?"unshift":"push"](()=>{n=c,t(0,n)})}function l(c){nr[c?"unshift":"push"](()=>{n=c,t(0,n)})}return[n,o,r,s,a,l]}class uE extends nt{constructor(e){super(),tt(this,e,cE,lE,Ke,{})}}const fE="/assets/space_boi-DBmRv9wa.glb";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xc="162",mr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dE=0,td=1,hE=2,jm=1,pE=2,Jn=3,ri=0,sn=1,In=2,Ei=0,Wr=1,nd=2,id=3,rd=4,mE=5,ji=100,gE=101,_E=102,sd=103,od=104,vE=200,xE=201,yE=202,bE=203,ac=204,lc=205,ME=206,SE=207,EE=208,TE=209,AE=210,wE=211,RE=212,CE=213,PE=214,LE=0,DE=1,IE=2,_a=3,NE=4,UE=5,OE=6,FE=7,$m=0,BE=1,VE=2,Ti=0,kE=1,zE=2,HE=3,GE=4,WE=5,XE=6,jE=7,ad="attached",$E="detached",Ym=300,Yr=301,qr=302,cc=303,uc=304,La=306,Kr=1e3,_n=1001,va=1002,kt=1003,fc=1004,Ur=1005,qt=1006,Qo=1007,ei=1008,Ai=1009,YE=1010,qE=1011,jc=1012,qm=1013,Mi=1014,An=1015,qs=1016,Km=1017,Zm=1018,Qi=1020,KE=1021,vn=1023,ZE=1024,JE=1025,er=1026,Zr=1027,Jm=1028,Qm=1029,QE=1030,eg=1031,tg=1033,Ja=33776,Qa=33777,el=33778,tl=33779,ld=35840,cd=35841,ud=35842,fd=35843,ng=36196,dd=37492,hd=37496,pd=37808,md=37809,gd=37810,_d=37811,vd=37812,xd=37813,yd=37814,bd=37815,Md=37816,Sd=37817,Ed=37818,Td=37819,Ad=37820,wd=37821,nl=36492,Rd=36494,Cd=36495,eT=36283,Pd=36284,Ld=36285,Dd=36286,Ks=2300,Jr=2301,il=2302,Id=2400,Nd=2401,Ud=2402,tT=2500,nT=0,ig=1,dc=2,iT=3200,rT=3201,rg=0,sT=1,yi="",en="srgb",Wt="srgb-linear",$c="display-p3",Da="display-p3-linear",xa="linear",St="srgb",ya="rec709",ba="p3",_r=7680,Od=519,oT=512,aT=513,lT=514,sg=515,cT=516,uT=517,fT=518,dT=519,hc=35044,Fd="300 es",pc=1035,ti=2e3,Ma=2001;class ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bd=1234567;const Us=Math.PI/180,Qr=180/Math.PI;function Cn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function Yc(i,e){return(i%e+e)%e}function hT(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function pT(i,e,t){return i!==e?(t-i)/(e-i):0}function Os(i,e,t){return(1-t)*i+t*e}function mT(i,e,t,n){return Os(i,e,1-Math.exp(-t*n))}function gT(i,e=1){return e-Math.abs(Yc(i,e*2)-e)}function _T(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vT(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function xT(i,e){return i+Math.floor(Math.random()*(e-i+1))}function yT(i,e){return i+Math.random()*(e-i)}function bT(i){return i*(.5-Math.random())}function MT(i){i!==void 0&&(Bd=i);let e=Bd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ST(i){return i*Us}function ET(i){return i*Qr}function mc(i){return(i&i-1)===0&&i!==0}function TT(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function AT(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),h=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*h,a*c);break;case"YXY":i.set(l*h,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const og={DEG2RAD:Us,RAD2DEG:Qr,generateUUID:Cn,clamp:Gt,euclideanModulo:Yc,mapLinear:hT,inverseLerp:pT,lerp:Os,damp:mT,pingpong:gT,smoothstep:_T,smootherstep:vT,randInt:xT,randFloat:yT,randFloatSpread:bT,seededRandom:MT,degToRad:ST,radToDeg:ET,isPowerOfTwo:mc,ceilPowerOfTwo:TT,floorPowerOfTwo:Sa,setQuaternionFromProperEuler:AT,normalize:ht,denormalize:wn};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,r,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],_=r[0],p=r[3],m=r[6],x=r[1],v=r[4],y=r[7],E=r[2],A=r[5],S=r[8];return s[0]=o*_+a*x+l*E,s[3]=o*p+a*v+l*A,s[6]=o*m+a*y+l*S,s[1]=c*_+u*x+f*E,s[4]=c*p+u*v+f*A,s[7]=c*m+u*y+f*S,s[2]=d*_+h*x+g*E,s[5]=d*p+h*v+g*A,s[8]=d*m+h*y+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=t*f+n*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rl.makeScale(e,t)),this}rotate(e){return this.premultiply(rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rl=new Qe;function ag(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wT(){const i=Zs("canvas");return i.style.display="block",i}const Vd={};function lg(i){i in Vd||(Vd[i]=!0,console.warn(i))}const kd=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zd=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yo={[Wt]:{transfer:xa,primaries:ya,toReference:i=>i,fromReference:i=>i},[en]:{transfer:St,primaries:ya,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Da]:{transfer:xa,primaries:ba,toReference:i=>i.applyMatrix3(zd),fromReference:i=>i.applyMatrix3(kd)},[$c]:{transfer:St,primaries:ba,toReference:i=>i.convertSRGBToLinear().applyMatrix3(zd),fromReference:i=>i.applyMatrix3(kd).convertLinearToSRGB()}},RT=new Set([Wt,Da]),ft={enabled:!0,_workingColorSpace:Wt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!RT.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=yo[e].toReference,r=yo[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return yo[i].primaries},getTransfer:function(i){return i===yi?xa:yo[i].transfer}};function Xr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vr;class cg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vr===void 0&&(vr=Zs("canvas")),vr.width=e.width,vr.height=e.height;const n=vr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xr(t[n]/255)*255):t[n]=Xr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CT=0;class ug{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=Cn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ol(r[o].image)):s.push(ol(r[o]))}else s=ol(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ol(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PT=0;class Ht extends ur{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=_n,r=_n,s=qt,o=ei,a=vn,l=Ai,c=Ht.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PT++}),this.uuid=Cn(),this.name="",this.source=new ug(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ym)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kr:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kr:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Ym;Ht.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(h+1)/2,E=(m+1)/2,A=(u+d)/4,S=(f+_)/4,P=(g+p)/4;return v>y&&v>E?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=A/n,s=S/n):y>E?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=A/r,s=P/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=S/s,r=P/s),this.set(n,r,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(f-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+h+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LT extends ur{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Ht(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ug(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends LT{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fg extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class DT extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let p=1-a;const m=l*d+c*h+u*g+f*_,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const E=Math.sqrt(v),A=Math.atan2(E,m*x);p=Math.sin(p*A)/E,a=Math.sin(a*A)/E}const y=a*x;if(l=l*p+d*y,c=c*p+h*y,u=u*p+g*y,f=f*p+_*y,p===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-a*h,e[t+2]=c*g+u*h+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),d=l(n/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return al.copy(this).projectOnVector(e),this.sub(al)}reflect(e){return this.sub(al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const al=new I,Hd=new Bn;class oi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(s,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),Mo.subVectors(this.max,xs),xr.subVectors(e.a,xs),yr.subVectors(e.b,xs),br.subVectors(e.c,xs),ui.subVectors(yr,xr),fi.subVectors(br,yr),Bi.subVectors(xr,br);let t=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Bi.z,Bi.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Bi.z,0,-Bi.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Bi.y,Bi.x,0];return!ll(t,xr,yr,br,Mo)||(t=[1,0,0,0,1,0,0,0,1],!ll(t,xr,yr,br,Mo))?!1:(So.crossVectors(ui,fi),t=[So.x,So.y,So.z],ll(t,xr,yr,br,Mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new I,new I,new I,new I,new I,new I,new I,new I],Mn=new I,bo=new oi,xr=new I,yr=new I,br=new I,ui=new I,fi=new I,Bi=new I,xs=new I,Mo=new I,So=new I,Vi=new I;function ll(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Vi.fromArray(i,s);const a=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),u=n.dot(Vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const IT=new oi,ys=new I,cl=new I;class zn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):IT.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const t=ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ys,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(cl)),this.expandByPoint(ys.copy(e.center).sub(cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new I,ul=new I,Eo=new I,di=new I,fl=new I,To=new I,dl=new I;class io{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ul.copy(e).add(t).multiplyScalar(.5),Eo.copy(t).sub(e).normalize(),di.copy(this.origin).sub(ul);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Eo),a=di.dot(this.direction),l=-di.dot(Eo),c=di.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ul).addScaledVector(Eo,d),h}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),r=$n.dot($n)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,r,s){fl.subVectors(t,e),To.subVectors(n,e),dl.crossVectors(fl,To);let o=this.direction.dot(dl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(To.crossVectors(di,To));if(l<0)return null;const c=a*this.direction.dot(fl.cross(di));if(c<0||l+c>o)return null;const u=-a*di.dot(dl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,r,s,o,a,l,c,u,f,d,h,g,_,p){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,d,h,g,_,p)}set(e,t,n,r,s,o,a,l,c,u,f,d,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d+_*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NT,e,UT)}lookAt(e,t,n){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),hi.crossVectors(n,an),hi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),hi.crossVectors(n,an)),hi.normalize(),Ao.crossVectors(an,hi),r[0]=hi.x,r[4]=Ao.x,r[8]=an.x,r[1]=hi.y,r[5]=Ao.y,r[9]=an.y,r[2]=hi.z,r[6]=Ao.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],_=n[6],p=n[10],m=n[14],x=n[3],v=n[7],y=n[11],E=n[15],A=r[0],S=r[4],P=r[8],N=r[12],b=r[1],R=r[5],K=r[9],Q=r[13],L=r[2],k=r[6],V=r[10],X=r[14],$=r[3],U=r[7],q=r[11],te=r[15];return s[0]=o*A+a*b+l*L+c*$,s[4]=o*S+a*R+l*k+c*U,s[8]=o*P+a*K+l*V+c*q,s[12]=o*N+a*Q+l*X+c*te,s[1]=u*A+f*b+d*L+h*$,s[5]=u*S+f*R+d*k+h*U,s[9]=u*P+f*K+d*V+h*q,s[13]=u*N+f*Q+d*X+h*te,s[2]=g*A+_*b+p*L+m*$,s[6]=g*S+_*R+p*k+m*U,s[10]=g*P+_*K+p*V+m*q,s[14]=g*N+_*Q+p*X+m*te,s[3]=x*A+v*b+y*L+E*$,s[7]=x*S+v*R+y*k+E*U,s[11]=x*P+v*K+y*V+E*q,s[15]=x*N+v*Q+y*X+E*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*f-r*c*f-s*a*d+n*c*d+r*a*h-n*l*h)+_*(+t*l*h-t*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+p*(+t*c*f-t*a*h-s*o*f+n*o*h+s*a*u-n*c*u)+m*(-r*a*u-t*l*f+t*a*d+r*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],x=f*p*c-_*d*c+_*l*h-a*p*h-f*l*m+a*d*m,v=g*d*c-u*p*c-g*l*h+o*p*h+u*l*m-o*d*m,y=u*_*c-g*f*c+g*a*h-o*_*h-u*a*m+o*f*m,E=g*f*l-u*_*l-g*a*d+o*_*d+u*a*p-o*f*p,A=t*x+n*v+r*y+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/A;return e[0]=x*S,e[1]=(_*d*s-f*p*s-_*r*h+n*p*h+f*r*m-n*d*m)*S,e[2]=(a*p*s-_*l*s+_*r*c-n*p*c-a*r*m+n*l*m)*S,e[3]=(f*l*s-a*d*s-f*r*c+n*d*c+a*r*h-n*l*h)*S,e[4]=v*S,e[5]=(u*p*s-g*d*s+g*r*h-t*p*h-u*r*m+t*d*m)*S,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*m-t*l*m)*S,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*h+t*l*h)*S,e[8]=y*S,e[9]=(g*f*s-u*_*s-g*n*h+t*_*h+u*n*m-t*f*m)*S,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*S,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*h-t*a*h)*S,e[12]=E*S,e[13]=(u*_*r-g*f*r+g*n*d-t*_*d-u*n*p+t*f*p)*S,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*p-t*a*p)*S,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*d+t*a*d)*S,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,_=o*u,p=o*f,m=a*f,x=l*c,v=l*u,y=l*f,E=n.x,A=n.y,S=n.z;return r[0]=(1-(_+m))*E,r[1]=(h+y)*E,r[2]=(g-v)*E,r[3]=0,r[4]=(h-y)*A,r[5]=(1-(d+m))*A,r[6]=(p+x)*A,r[7]=0,r[8]=(g+v)*S,r[9]=(p-x)*S,r[10]=(1-(d+_))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Mr.set(r[0],r[1],r[2]).length();const o=Mr.set(r[4],r[5],r[6]).length(),a=Mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const c=1/s,u=1/o,f=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,t.setFromRotationMatrix(Sn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=ti){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let h,g;if(a===ti)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ma)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=ti){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),d=(t+e)*c,h=(n+r)*u;let g,_;if(a===ti)g=(o+s)*f,_=-2*f;else if(a===Ma)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Mr=new I,Sn=new et,NT=new I(0,0,0),UT=new I(1,1,1),hi=new I,Ao=new I,an=new I,Gd=new et,Wd=new Bn;class Vn{constructor(e=0,t=0,n=0,r=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class dg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OT=0;const Xd=new I,Sr=new Bn,Yn=new et,wo=new I,bs=new I,FT=new I,BT=new Bn,jd=new I(1,0,0),$d=new I(0,1,0),Yd=new I(0,0,1),VT={type:"added"},kT={type:"removed"},hl={type:"childadded",child:null},pl={type:"childremoved",child:null};class wt extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OT++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new I,t=new Vn,n=new Bn,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new et},normalMatrix:{value:new Qe}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(jd,e)}rotateY(e){return this.rotateOnAxis($d,e)}rotateZ(e){return this.rotateOnAxis(Yd,e)}translateOnAxis(e,t){return Xd.copy(e).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jd,e)}translateY(e){return this.translateOnAxis($d,e)}translateZ(e){return this.translateOnAxis(Yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wo.copy(e):wo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(bs,wo,this.up):Yn.lookAt(wo,bs,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),Sr.setFromRotationMatrix(Yn),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(VT),hl.child=e,this.dispatchEvent(hl),hl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kT),pl.child=e,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,FT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,BT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}wt.DEFAULT_UP=new I(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new I,qn=new I,ml=new I,Kn=new I,Er=new I,Tr=new I,qd=new I,gl=new I,_l=new I,vl=new I;class Nn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),En.subVectors(e,t),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){En.subVectors(r,t),qn.subVectors(n,t),ml.subVectors(e,t);const o=En.dot(En),a=En.dot(qn),l=En.dot(ml),c=qn.dot(qn),u=qn.dot(ml),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static isFrontFacing(e,t,n,r){return En.subVectors(n,t),qn.subVectors(e,t),En.cross(qn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),En.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Nn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Er.subVectors(r,n),Tr.subVectors(s,n),gl.subVectors(e,n);const l=Er.dot(gl),c=Tr.dot(gl);if(l<=0&&c<=0)return t.copy(n);_l.subVectors(e,r);const u=Er.dot(_l),f=Tr.dot(_l);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Er,o);vl.subVectors(e,s);const h=Er.dot(vl),g=Tr.dot(vl);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Tr,a);const p=u*g-h*f;if(p<=0&&f-u>=0&&h-g>=0)return qd.subVectors(s,r),a=(f-u)/(f-u+(h-g)),t.copy(r).addScaledVector(qd,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(Er,o).addScaledVector(Tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function xl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ft.workingColorSpace){if(e=Yc(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=xl(o,s,e+1/3),this.g=xl(o,s,e),this.b=xl(o,s,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,t=en){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const n=hg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=sl(e.r),this.g=sl(e.g),this.b=sl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return ft.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Gt(Yt.r*255,0,255))*65536+Math.round(Gt(Yt.g*255,0,255))*256+Math.round(Gt(Yt.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=en){ft.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,r=Yt.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Ro);const n=Os(pi.h,Ro.h,t),r=Os(pi.s,Ro.s,t),s=Os(pi.l,Ro.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new We;We.NAMES=hg;let zT=0;class On extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=Wr,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=lc,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ac&&(n.blendSrc=this.blendSrc),this.blendDst!==lc&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_a&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Od&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ki extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=$m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new I,Co=new Ve;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return lg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Co.fromBufferAttribute(this,t),Co.applyMatrix3(e),this.setXY(t,Co.x,Co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hc&&(e.usage=this.usage),e}}class pg extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mg extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bn extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let HT=0;const mn=new et,yl=new wt,Ar=new I,ln=new oi,Ms=new oi,Vt=new I;class Ln extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HT++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ag(e)?mg:pg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return yl.lookAt(e),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(ln.min,Ms.min),ln.expandByPoint(Vt),Vt.addVectors(ln.max,Ms.max),ln.expandByPoint(Vt)):(ln.expandByPoint(Ms.min),ln.expandByPoint(Ms.max))}ln.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Vt.fromBufferAttribute(a,c),l&&(Ar.fromBufferAttribute(e,c),Vt.add(Ar)),r=Math.max(r,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new I,l[P]=new I;const c=new I,u=new I,f=new I,d=new Ve,h=new Ve,g=new Ve,_=new I,p=new I;function m(P,N,b){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,N),f.fromBufferAttribute(n,b),d.fromBufferAttribute(s,P),h.fromBufferAttribute(s,N),g.fromBufferAttribute(s,b),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const R=1/(h.x*g.y-g.x*h.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(R),p.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(R),a[P].add(_),a[N].add(_),a[b].add(_),l[P].add(p),l[N].add(p),l[b].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,N=x.length;P<N;++P){const b=x[P],R=b.start,K=b.count;for(let Q=R,L=R+K;Q<L;Q+=3)m(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const v=new I,y=new I,E=new I,A=new I;function S(P){E.fromBufferAttribute(r,P),A.copy(E);const N=a[P];v.copy(N),v.sub(E.multiplyScalar(E.dot(N))).normalize(),y.crossVectors(A,N);const R=y.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,R)}for(let P=0,N=x.length;P<N;++P){const b=x[P],R=b.start,K=b.count;for(let Q=R,L=R+K;Q<L;Q+=3)S(e.getX(Q+0)),S(e.getX(Q+1)),S(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[h++]}return new nn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kd=new et,ki=new io,Po=new zn,Zd=new I,wr=new I,Rr=new I,Cr=new I,bl=new I,Lo=new I,Do=new Ve,Io=new Ve,No=new Ve,Jd=new I,Qd=new I,eh=new I,Uo=new I,Oo=new I;class cn extends wt{constructor(e=new Ln,t=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(bl.fromBufferAttribute(f,e),o?Lo.addScaledVector(bl,u):Lo.addScaledVector(bl.sub(t),u))}t.add(Lo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),ki.copy(e.ray).recast(e.near),!(Po.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Po,Zd)===null||ki.origin.distanceToSquared(Zd)>(e.far-e.near)**2))&&(Kd.copy(s).invert(),ki.copy(e.ray).applyMatrix4(Kd),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],x=Math.max(p.start,h.start),v=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let y=x,E=v;y<E;y+=3){const A=a.getX(y),S=a.getX(y+1),P=a.getX(y+2);r=Fo(this,m,e,n,c,u,f,A,S,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const x=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);r=Fo(this,o,e,n,c,u,f,x,v,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],x=Math.max(p.start,h.start),v=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let y=x,E=v;y<E;y+=3){const A=y,S=y+1,P=y+2;r=Fo(this,m,e,n,c,u,f,A,S,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const x=p,v=p+1,y=p+2;r=Fo(this,o,e,n,c,u,f,x,v,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function GT(i,e,t,n,r,s,o,a){let l;if(e.side===sn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ri,a),l===null)return null;Oo.copy(a),Oo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Oo);return c<t.near||c>t.far?null:{distance:c,point:Oo.clone(),object:i}}function Fo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,wr),i.getVertexPosition(l,Rr),i.getVertexPosition(c,Cr);const u=GT(i,e,t,n,wr,Rr,Cr,Uo);if(u){r&&(Do.fromBufferAttribute(r,a),Io.fromBufferAttribute(r,l),No.fromBufferAttribute(r,c),u.uv=Nn.getInterpolation(Uo,wr,Rr,Cr,Do,Io,No,new Ve)),s&&(Do.fromBufferAttribute(s,a),Io.fromBufferAttribute(s,l),No.fromBufferAttribute(s,c),u.uv1=Nn.getInterpolation(Uo,wr,Rr,Cr,Do,Io,No,new Ve)),o&&(Jd.fromBufferAttribute(o,a),Qd.fromBufferAttribute(o,l),eh.fromBufferAttribute(o,c),u.normal=Nn.getInterpolation(Uo,wr,Rr,Cr,Jd,Qd,eh,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};Nn.getNormal(wr,Rr,Cr,f.normal),u.face=f}return u}class ro extends Ln{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(u,3)),this.setAttribute("uv",new bn(f,2));function g(_,p,m,x,v,y,E,A,S,P,N){const b=y/S,R=E/P,K=y/2,Q=E/2,L=A/2,k=S+1,V=P+1;let X=0,$=0;const U=new I;for(let q=0;q<V;q++){const te=q*R-Q;for(let fe=0;fe<k;fe++){const _e=fe*b-K;U[_]=_e*x,U[p]=te*v,U[m]=L,c.push(U.x,U.y,U.z),U[_]=0,U[p]=0,U[m]=A>0?1:-1,u.push(U.x,U.y,U.z),f.push(fe/S),f.push(1-q/P),X+=1}}for(let q=0;q<P;q++)for(let te=0;te<S;te++){const fe=d+te+k*q,_e=d+te+k*(q+1),H=d+(te+1)+k*(q+1),oe=d+(te+1)+k*q;l.push(fe,_e,oe),l.push(_e,H,oe),$+=6}a.addGroup(h,$,N),h+=$,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function es(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=es(i[t]);for(const r in n)e[r]=n[r]}return e}function WT(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gg(i){return i.getRenderTarget()===null?i.outputColorSpace:ft.workingColorSpace}const XT={clone:es,merge:Jt};var jT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$T=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jT,this.fragmentShader=$T,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=WT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _g extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new I,th=new Ve,nh=new Ve;class tn extends _g{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,th,nh),t.subVectors(nh,th)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pr=-90,Lr=1;class YT extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Pr,Lr,e,t);r.layers=this.layers,this.add(r);const s=new tn(Pr,Lr,e,t);s.layers=this.layers,this.add(s);const o=new tn(Pr,Lr,e,t);o.layers=this.layers,this.add(o);const a=new tn(Pr,Lr,e,t);a.layers=this.layers,this.add(a);const l=new tn(Pr,Lr,e,t);l.layers=this.layers,this.add(l);const c=new tn(Pr,Lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vg extends Ht{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Yr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qT extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new vg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ro(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Ei});s.uniforms.tEquirect.value=t;const o=new cn(r,s),a=t.minFilter;return t.minFilter===ei&&(t.minFilter=qt),new YT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ml=new I,KT=new I,ZT=new Qe;class vi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ml.subVectors(n,t).cross(KT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ml),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ZT.getNormalMatrix(e),r=this.coplanarPoint(Ml).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new zn,Bo=new I;class qc{constructor(e=new vi,t=new vi,n=new vi,r=new vi,s=new vi,o=new vi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],_=r[10],p=r[11],m=r[12],x=r[13],v=r[14],y=r[15];if(n[0].setComponents(l-s,d-c,p-h,y-m).normalize(),n[1].setComponents(l+s,d+c,p+h,y+m).normalize(),n[2].setComponents(l+o,d+u,p+g,y+x).normalize(),n[3].setComponents(l-o,d-u,p-g,y-x).normalize(),n[4].setComponents(l-a,d-f,p-_,y-v).normalize(),t===ti)n[5].setComponents(l+a,d+f,p+_,y+v).normalize();else if(t===Ma)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Bo.x=r.normal.x>0?e.max.x:e.min.x,Bo.y=r.normal.y>0?e.max.y:e.min.y,Bo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xg(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function JT(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,d=c.usage,h=f.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:h}}function s(c,u,f){const d=u.array,h=u._updateRange,g=u.updateRanges;if(i.bindBuffer(f,c),h.count===-1&&g.length===0&&i.bufferSubData(f,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?i.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}h.count!==-1&&(t?i.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):i.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class Ia extends Ln{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const x=m*d-o;for(let v=0;v<c;v++){const y=v*f-s;g.push(y,-x,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const v=x+c*m,y=x+c*(m+1),E=x+1+c*(m+1),A=x+1+c*m;h.push(v,y,A),h.push(y,E,A)}this.setIndex(h),this.setAttribute("position",new bn(g,3)),this.setAttribute("normal",new bn(_,3)),this.setAttribute("uv",new bn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}var QT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aA=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_A=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,MA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,EA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CA="gl_FragColor = linearToOutputTexel( gl_FragColor );",PA=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,LA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,NA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,OA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,HA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$A=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,JA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ew=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ow=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_w=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ew=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Aw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ww=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ow=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ww=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$w=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,o1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,a1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,E1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,L1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:QT,alphahash_pars_fragment:eA,alphamap_fragment:tA,alphamap_pars_fragment:nA,alphatest_fragment:iA,alphatest_pars_fragment:rA,aomap_fragment:sA,aomap_pars_fragment:oA,batching_pars_vertex:aA,batching_vertex:lA,begin_vertex:cA,beginnormal_vertex:uA,bsdfs:fA,iridescence_fragment:dA,bumpmap_pars_fragment:hA,clipping_planes_fragment:pA,clipping_planes_pars_fragment:mA,clipping_planes_pars_vertex:gA,clipping_planes_vertex:_A,color_fragment:vA,color_pars_fragment:xA,color_pars_vertex:yA,color_vertex:bA,common:MA,cube_uv_reflection_fragment:SA,defaultnormal_vertex:EA,displacementmap_pars_vertex:TA,displacementmap_vertex:AA,emissivemap_fragment:wA,emissivemap_pars_fragment:RA,colorspace_fragment:CA,colorspace_pars_fragment:PA,envmap_fragment:LA,envmap_common_pars_fragment:DA,envmap_pars_fragment:IA,envmap_pars_vertex:NA,envmap_physical_pars_fragment:jA,envmap_vertex:UA,fog_vertex:OA,fog_pars_vertex:FA,fog_fragment:BA,fog_pars_fragment:VA,gradientmap_pars_fragment:kA,lightmap_fragment:zA,lightmap_pars_fragment:HA,lights_lambert_fragment:GA,lights_lambert_pars_fragment:WA,lights_pars_begin:XA,lights_toon_fragment:$A,lights_toon_pars_fragment:YA,lights_phong_fragment:qA,lights_phong_pars_fragment:KA,lights_physical_fragment:ZA,lights_physical_pars_fragment:JA,lights_fragment_begin:QA,lights_fragment_maps:ew,lights_fragment_end:tw,logdepthbuf_fragment:nw,logdepthbuf_pars_fragment:iw,logdepthbuf_pars_vertex:rw,logdepthbuf_vertex:sw,map_fragment:ow,map_pars_fragment:aw,map_particle_fragment:lw,map_particle_pars_fragment:cw,metalnessmap_fragment:uw,metalnessmap_pars_fragment:fw,morphinstance_vertex:dw,morphcolor_vertex:hw,morphnormal_vertex:pw,morphtarget_pars_vertex:mw,morphtarget_vertex:gw,normal_fragment_begin:_w,normal_fragment_maps:vw,normal_pars_fragment:xw,normal_pars_vertex:yw,normal_vertex:bw,normalmap_pars_fragment:Mw,clearcoat_normal_fragment_begin:Sw,clearcoat_normal_fragment_maps:Ew,clearcoat_pars_fragment:Tw,iridescence_pars_fragment:Aw,opaque_fragment:ww,packing:Rw,premultiplied_alpha_fragment:Cw,project_vertex:Pw,dithering_fragment:Lw,dithering_pars_fragment:Dw,roughnessmap_fragment:Iw,roughnessmap_pars_fragment:Nw,shadowmap_pars_fragment:Uw,shadowmap_pars_vertex:Ow,shadowmap_vertex:Fw,shadowmask_pars_fragment:Bw,skinbase_vertex:Vw,skinning_pars_vertex:kw,skinning_vertex:zw,skinnormal_vertex:Hw,specularmap_fragment:Gw,specularmap_pars_fragment:Ww,tonemapping_fragment:Xw,tonemapping_pars_fragment:jw,transmission_fragment:$w,transmission_pars_fragment:Yw,uv_pars_fragment:qw,uv_pars_vertex:Kw,uv_vertex:Zw,worldpos_vertex:Jw,background_vert:Qw,background_frag:e1,backgroundCube_vert:t1,backgroundCube_frag:n1,cube_vert:i1,cube_frag:r1,depth_vert:s1,depth_frag:o1,distanceRGBA_vert:a1,distanceRGBA_frag:l1,equirect_vert:c1,equirect_frag:u1,linedashed_vert:f1,linedashed_frag:d1,meshbasic_vert:h1,meshbasic_frag:p1,meshlambert_vert:m1,meshlambert_frag:g1,meshmatcap_vert:_1,meshmatcap_frag:v1,meshnormal_vert:x1,meshnormal_frag:y1,meshphong_vert:b1,meshphong_frag:M1,meshphysical_vert:S1,meshphysical_frag:E1,meshtoon_vert:T1,meshtoon_frag:A1,points_vert:w1,points_frag:R1,shadow_vert:C1,shadow_frag:P1,sprite_vert:L1,sprite_frag:D1},he={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Dn={basic:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new We(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Jt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Jt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new We(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Jt([he.points,he.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Jt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Jt([he.common,he.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Jt([he.sprite,he.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Jt([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Jt([he.lights,he.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Dn.physical={uniforms:Jt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Vo={r:0,b:0,g:0},Hi=new Vn,I1=new et;function N1(i,e,t,n,r,s,o){const a=new We(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(p,m){let x=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===La)?(u===void 0&&(u=new cn(new ro(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:es(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Hi.copy(m.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(I1.makeRotationFromEuler(Hi)),u.material.toneMapped=ft.getTransfer(v.colorSpace)!==St,(f!==v||d!==v.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,h=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new cn(new Ia(2,2),new Ii({name:"BackgroundMaterial",uniforms:es(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=ft.getTransfer(v.colorSpace)!==St,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,h=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Vo,gg(i)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function U1(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(L,k,V,X,$){let U=!1;if(o){const q=_(X,V,k);c!==q&&(c=q,h(c.object)),U=m(L,X,V,$),U&&x(L,X,V,$)}else{const q=k.wireframe===!0;(c.geometry!==X.id||c.program!==V.id||c.wireframe!==q)&&(c.geometry=X.id,c.program=V.id,c.wireframe=q,U=!0)}$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(U||u)&&(u=!1,P(L,k,V,X),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function h(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,k,V){const X=V.wireframe===!0;let $=a[L.id];$===void 0&&($={},a[L.id]=$);let U=$[k.id];U===void 0&&(U={},$[k.id]=U);let q=U[X];return q===void 0&&(q=p(d()),U[X]=q),q}function p(L){const k=[],V=[],X=[];for(let $=0;$<r;$++)k[$]=0,V[$]=0,X[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:X,object:L,attributes:{},index:null}}function m(L,k,V,X){const $=c.attributes,U=k.attributes;let q=0;const te=V.getAttributes();for(const fe in te)if(te[fe].location>=0){const H=$[fe];let oe=U[fe];if(oe===void 0&&(fe==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),fe==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),H===void 0||H.attribute!==oe||oe&&H.data!==oe.data)return!0;q++}return c.attributesNum!==q||c.index!==X}function x(L,k,V,X){const $={},U=k.attributes;let q=0;const te=V.getAttributes();for(const fe in te)if(te[fe].location>=0){let H=U[fe];H===void 0&&(fe==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),fe==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));const oe={};oe.attribute=H,H&&H.data&&(oe.data=H.data),$[fe]=oe,q++}c.attributes=$,c.attributesNum=q,c.index=X}function v(){const L=c.newAttributes;for(let k=0,V=L.length;k<V;k++)L[k]=0}function y(L){E(L,0)}function E(L,k){const V=c.newAttributes,X=c.enabledAttributes,$=c.attributeDivisors;V[L]=1,X[L]===0&&(i.enableVertexAttribArray(L),X[L]=1),$[L]!==k&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),$[L]=k)}function A(){const L=c.newAttributes,k=c.enabledAttributes;for(let V=0,X=k.length;V<X;V++)k[V]!==L[V]&&(i.disableVertexAttribArray(V),k[V]=0)}function S(L,k,V,X,$,U,q){q===!0?i.vertexAttribIPointer(L,k,V,$,U):i.vertexAttribPointer(L,k,V,X,$,U)}function P(L,k,V,X){if(n.isWebGL2===!1&&(L.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const $=X.attributes,U=V.getAttributes(),q=k.defaultAttributeValues;for(const te in U){const fe=U[te];if(fe.location>=0){let _e=$[te];if(_e===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(_e=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(_e=L.instanceColor)),_e!==void 0){const H=_e.normalized,oe=_e.itemSize,ge=t.get(_e);if(ge===void 0)continue;const ze=ge.buffer,Pe=ge.type,xe=ge.bytesPerElement,at=n.isWebGL2===!0&&(Pe===i.INT||Pe===i.UNSIGNED_INT||_e.gpuType===qm);if(_e.isInterleavedBufferAttribute){const Be=_e.data,F=Be.stride,Tt=_e.offset;if(Be.isInstancedInterleavedBuffer){for(let re=0;re<fe.locationSize;re++)E(fe.location+re,Be.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let re=0;re<fe.locationSize;re++)y(fe.location+re);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let re=0;re<fe.locationSize;re++)S(fe.location+re,oe/fe.locationSize,Pe,H,F*xe,(Tt+oe/fe.locationSize*re)*xe,at)}else{if(_e.isInstancedBufferAttribute){for(let Be=0;Be<fe.locationSize;Be++)E(fe.location+Be,_e.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Be=0;Be<fe.locationSize;Be++)y(fe.location+Be);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Be=0;Be<fe.locationSize;Be++)S(fe.location+Be,oe/fe.locationSize,Pe,H,oe*xe,oe/fe.locationSize*Be*xe,at)}}else if(q!==void 0){const H=q[te];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(fe.location,H);break;case 3:i.vertexAttrib3fv(fe.location,H);break;case 4:i.vertexAttrib4fv(fe.location,H);break;default:i.vertexAttrib1fv(fe.location,H)}}}}A()}function N(){K();for(const L in a){const k=a[L];for(const V in k){const X=k[V];for(const $ in X)g(X[$].object),delete X[$];delete k[V]}delete a[L]}}function b(L){if(a[L.id]===void 0)return;const k=a[L.id];for(const V in k){const X=k[V];for(const $ in X)g(X[$].object),delete X[$];delete k[V]}delete a[L.id]}function R(L){for(const k in a){const V=a[k];if(V[L.id]===void 0)continue;const X=V[L.id];for(const $ in X)g(X[$].object),delete X[$];delete V[L.id]}}function K(){Q(),u=!0,c!==l&&(c=l,h(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:K,resetDefaultState:Q,dispose:N,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function O1(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,f){i.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,d){if(d===0)return;let h,g;if(r)h=i,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](s,u,f,d),t.update(f,s,d)}function c(u,f,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<d;g++)this.render(u[g],f[g]);else{h.multiDrawArraysWEBGL(s,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function F1(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||e.has("OES_texture_float"),E=v&&y,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:A}}function B1(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new vi,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||r;return r=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,v=x*4;let y=m.clippingState||null;l.value=y,y=u(g,d,v,h);for(let E=0;E!==v;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=h+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=h;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function V1(i){let e=new WeakMap;function t(o,a){return a===cc?o.mapping=Yr:a===uc&&(o.mapping=qr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===cc||a===uc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qT(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Kc extends _g{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fr=4,ih=[.125,.215,.35,.446,.526,.582],$i=20,Sl=new Kc,rh=new We;let El=null,Tl=0,Al=0;const Xi=(1+Math.sqrt(5))/2,Dr=1/Xi,sh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Xi,Dr),new I(0,Xi,-Dr),new I(Dr,0,Xi),new I(-Dr,0,Xi),new I(Xi,Dr,0),new I(-Xi,Dr,0)];class oh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(El,Tl,Al),e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:qs,format:vn,colorSpace:Wt,depthBuffer:!1},r=ah(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k1(s)),this._blurMaterial=z1(s,e,t)}return r}_compileMaterial(e){const t=new cn(this._lodPlanes[0],e);this._renderer.compile(t,Sl)}_sceneToCubeUV(e,t,n,r){const a=new tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(rh),u.toneMapping=Ti,u.autoClear=!1;const h=new Ki({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new cn(new ro,h);let _=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,_=!0):(h.color.copy(rh),_=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;ko(r,x*v,m>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Yr||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ko(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Sl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=sh[(r-1)%sh.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new cn(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*$i-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):$i;p>$i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$i}`);const m=[];let x=0;for(let S=0;S<$i;++S){const P=S/_,N=Math.exp(-P*P/2);m.push(N),S===0?x+=N:S<p&&(x+=2*N)}for(let S=0;S<m.length;S++)m[S]=m[S]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[r],E=3*y*(r>v-Fr?r-v+Fr:0),A=4*(this._cubeSize-y);ko(t,E,A,3*y,2*y),l.setRenderTarget(t),l.render(f,Sl)}}function k1(i){const e=[],t=[],n=[];let r=i;const s=i-Fr+1+ih.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Fr?l=ih[o-i+Fr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*h),v=new Float32Array(p*g*h),y=new Float32Array(m*g*h);for(let A=0;A<h;A++){const S=A%3*2/3-1,P=A>2?0:-1,N=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];x.set(N,_*g*A),v.set(d,p*g*A);const b=[A,A,A,A,A,A];y.set(b,m*g*A)}const E=new Ln;E.setAttribute("position",new nn(x,_)),E.setAttribute("uv",new nn(v,p)),E.setAttribute("faceIndex",new nn(y,m)),e.push(E),r>Fr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ah(i,e,t){const n=new rr(i,e,t);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ko(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function z1(i,e,t){const n=new Float32Array($i),r=new I(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function lh(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ch(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H1(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===cc||l===uc,u=l===Yr||l===qr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new oh(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new oh(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function G1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function W1(i,e,t,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const _=h[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const x=h.array;_=h.version;for(let v=0,y=x.length;v<y;v+=3){const E=x[v+0],A=x[v+1],S=x[v+2];d.push(E,A,A,S,S,E)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const E=v+0,A=v+1,S=v+2;d.push(E,A,A,S,S,E)}}else return;const p=new(ag(d)?mg:pg)(d,1);p.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function X1(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,g){i.drawElements(s,g,a,h*l),t.update(g,s,1)}function f(h,g,_){if(_===0)return;let p,m;if(r)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,h*l,_),t.update(g,s,_)}function d(h,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(h[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,h,0,_);let m=0;for(let x=0;x<_;x++)m+=g[x];t.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function j1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function $1(i,e){return i[0]-e[0]}function Y1(i,e){return Math.abs(e[1])-Math.abs(i[1])}function q1(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let Q=function(){R.dispose(),s.delete(u),u.removeEventListener("dispose",Q)};var h=Q;p!==void 0&&p.texture.dispose();const m=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let S=0;m===!0&&(S=1),x===!0&&(S=2),v===!0&&(S=3);let P=u.attributes.position.count*S,N=1;P>e.maxTextureSize&&(N=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const b=new Float32Array(P*N*4*_),R=new fg(b,P,N,_);R.type=An,R.needsUpdate=!0;const K=S*4;for(let L=0;L<_;L++){const k=y[L],V=E[L],X=A[L],$=P*N*4*L;for(let U=0;U<k.count;U++){const q=U*K;m===!0&&(o.fromBufferAttribute(k,U),b[$+q+0]=o.x,b[$+q+1]=o.y,b[$+q+2]=o.z,b[$+q+3]=0),x===!0&&(o.fromBufferAttribute(V,U),b[$+q+4]=o.x,b[$+q+5]=o.y,b[$+q+6]=o.z,b[$+q+7]=0),v===!0&&(o.fromBufferAttribute(X,U),b[$+q+8]=o.x,b[$+q+9]=o.y,b[$+q+10]=o.z,b[$+q+11]=X.itemSize===4?o.w:1)}}p={count:_,texture:R,size:new Ve(P,N)},s.set(u,p),u.addEventListener("dispose",Q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let m=0;for(let v=0;v<d.length;v++)m+=d[v];const x=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",d)}f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[u.id]=_}for(let y=0;y<g;y++){const E=_[y];E[0]=y,E[1]=d[y]}_.sort(Y1);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort($1);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const E=a[y],A=E[0],S=E[1];A!==Number.MAX_SAFE_INTEGER&&S?(p&&u.getAttribute("morphTarget"+y)!==p[A]&&u.setAttribute("morphTarget"+y,p[A]),m&&u.getAttribute("morphNormal"+y)!==m[A]&&u.setAttribute("morphNormal"+y,m[A]),r[y]=S,x+=S):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),m&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const v=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function K1(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class yg extends Ht{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:er,u!==er&&u!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===er&&(n=Mi),n===void 0&&u===Zr&&(n=Qi),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const bg=new Ht,Mg=new yg(1,1);Mg.compareFunction=sg;const Sg=new fg,Eg=new DT,Tg=new vg,uh=[],fh=[],dh=new Float32Array(16),hh=new Float32Array(9),ph=new Float32Array(4);function as(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=uh[r];if(s===void 0&&(s=new Float32Array(r),uh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Na(i,e){let t=fh[e];t===void 0&&(t=new Int32Array(e),fh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Z1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function J1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function Q1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function eR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function tR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;ph.set(n),i.uniformMatrix2fv(this.addr,!1,ph),Ft(t,n)}}function nR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;hh.set(n),i.uniformMatrix3fv(this.addr,!1,hh),Ft(t,n)}}function iR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;dh.set(n),i.uniformMatrix4fv(this.addr,!1,dh),Ft(t,n)}}function rR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function oR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function aR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function lR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function uR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function fR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function dR(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Mg:bg;t.setTexture2D(e||s,r)}function hR(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Eg,r)}function pR(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Tg,r)}function mR(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Sg,r)}function gR(i){switch(i){case 5126:return Z1;case 35664:return J1;case 35665:return Q1;case 35666:return eR;case 35674:return tR;case 35675:return nR;case 35676:return iR;case 5124:case 35670:return rR;case 35667:case 35671:return sR;case 35668:case 35672:return oR;case 35669:case 35673:return aR;case 5125:return lR;case 36294:return cR;case 36295:return uR;case 36296:return fR;case 35678:case 36198:case 36298:case 36306:case 35682:return dR;case 35679:case 36299:case 36307:return hR;case 35680:case 36300:case 36308:case 36293:return pR;case 36289:case 36303:case 36311:case 36292:return mR}}function _R(i,e){i.uniform1fv(this.addr,e)}function vR(i,e){const t=as(e,this.size,2);i.uniform2fv(this.addr,t)}function xR(i,e){const t=as(e,this.size,3);i.uniform3fv(this.addr,t)}function yR(i,e){const t=as(e,this.size,4);i.uniform4fv(this.addr,t)}function bR(i,e){const t=as(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function MR(i,e){const t=as(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function SR(i,e){const t=as(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ER(i,e){i.uniform1iv(this.addr,e)}function TR(i,e){i.uniform2iv(this.addr,e)}function AR(i,e){i.uniform3iv(this.addr,e)}function wR(i,e){i.uniform4iv(this.addr,e)}function RR(i,e){i.uniform1uiv(this.addr,e)}function CR(i,e){i.uniform2uiv(this.addr,e)}function PR(i,e){i.uniform3uiv(this.addr,e)}function LR(i,e){i.uniform4uiv(this.addr,e)}function DR(i,e,t){const n=this.cache,r=e.length,s=Na(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||bg,s[o])}function IR(i,e,t){const n=this.cache,r=e.length,s=Na(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Eg,s[o])}function NR(i,e,t){const n=this.cache,r=e.length,s=Na(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Tg,s[o])}function UR(i,e,t){const n=this.cache,r=e.length,s=Na(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Sg,s[o])}function OR(i){switch(i){case 5126:return _R;case 35664:return vR;case 35665:return xR;case 35666:return yR;case 35674:return bR;case 35675:return MR;case 35676:return SR;case 5124:case 35670:return ER;case 35667:case 35671:return TR;case 35668:case 35672:return AR;case 35669:case 35673:return wR;case 5125:return RR;case 36294:return CR;case 36295:return PR;case 36296:return LR;case 35678:case 36198:case 36298:case 36306:case 35682:return DR;case 35679:case 36299:case 36307:return IR;case 35680:case 36300:case 36308:case 36293:return NR;case 36289:case 36303:case 36311:case 36292:return UR}}class FR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gR(t.type)}}class BR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OR(t.type)}}class VR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const wl=/(\w+)(\])?(\[|\.)?/g;function mh(i,e){i.seq.push(e),i.map[e.id]=e}function kR(i,e,t){const n=i.name,r=n.length;for(wl.lastIndex=0;;){const s=wl.exec(n),o=wl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){mh(t,c===void 0?new FR(a,i,e):new BR(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new VR(a),mh(t,f)),t=f}}}class ea{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);kR(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function gh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zR=37297;let HR=0;function GR(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function WR(i){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(i);let n;switch(e===t?n="":e===ba&&t===ya?n="LinearDisplayP3ToLinearSRGB":e===ya&&t===ba&&(n="LinearSRGBToLinearDisplayP3"),i){case Wt:case Da:return[n,"LinearTransferOETF"];case en:case $c:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function _h(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+GR(i.getShaderSource(e),o)}else return r}function XR(i,e){const t=WR(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jR(i,e){let t;switch(e){case kE:t="Linear";break;case zE:t="Reinhard";break;case HE:t="OptimizedCineon";break;case GE:t="ACESFilmic";break;case XE:t="AgX";break;case jE:t="Neutral";break;case WE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $R(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Br).join(`
`)}function YR(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function qR(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function KR(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Br(i){return i!==""}function vh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZR=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(i){return i.replace(ZR,QR)}const JR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function QR(i,e){let t=Je[e];if(t===void 0){const n=JR.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}const eC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(i){return i.replace(eC,tC)}function tC(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nC(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pE?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function iC(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yr:case qr:e="ENVMAP_TYPE_CUBE";break;case La:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rC(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function sC(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $m:e="ENVMAP_BLENDING_MULTIPLY";break;case BE:e="ENVMAP_BLENDING_MIX";break;case VE:e="ENVMAP_BLENDING_ADD";break}return e}function oC(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function aC(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=nC(t),c=iC(t),u=rC(t),f=sC(t),d=oC(t),h=t.isWebGL2?"":$R(t),g=YR(t),_=qR(s),p=r.createProgram();let m,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Br).join(`
`),m.length>0&&(m+=`
`),x=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Br).join(`
`),x.length>0&&(x+=`
`)):(m=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),x=[h,bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ti?jR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,XR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),o=gc(o),o=vh(o,t),o=xh(o,t),a=gc(a),a=vh(a,t),a=xh(a,t),o=yh(o),a=yh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=v+m+o,E=v+x+a,A=gh(r,r.VERTEX_SHADER,y),S=gh(r,r.FRAGMENT_SHADER,E);r.attachShader(p,A),r.attachShader(p,S),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function P(K){if(i.debug.checkShaderErrors){const Q=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(A).trim(),k=r.getShaderInfoLog(S).trim();let V=!0,X=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,A,S);else{const $=_h(r,A,"vertex"),U=_h(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+K.name+`
Material Type: `+K.type+`

Program Info Log: `+Q+`
`+$+`
`+U)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(L===""||k==="")&&(X=!1);X&&(K.diagnostics={runnable:V,programLog:Q,vertexShader:{log:L,prefix:m},fragmentShader:{log:k,prefix:x}})}r.deleteShader(A),r.deleteShader(S),N=new ea(r,p),b=KR(r,p)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(p,zR)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HR++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=S,this}let lC=0;class cC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new uC(e),t.set(e,n)),n}}class uC{constructor(e){this.id=lC++,this.code=e,this.usedTimes=0}}function fC(i,e,t,n,r,s,o){const a=new dg,l=new cC,c=new Set,u=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,R,K,Q,L){const k=Q.fog,V=L.geometry,X=b.isMeshStandardMaterial?Q.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||X),U=$&&$.mapping===La?$.image.height:null,q=_[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const te=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,fe=te!==void 0?te.length:0;let _e=0;V.morphAttributes.position!==void 0&&(_e=1),V.morphAttributes.normal!==void 0&&(_e=2),V.morphAttributes.color!==void 0&&(_e=3);let H,oe,ge,ze;if(q){const dt=Dn[q];H=dt.vertexShader,oe=dt.fragmentShader}else H=b.vertexShader,oe=b.fragmentShader,l.update(b),ge=l.getVertexShaderID(b),ze=l.getFragmentShaderID(b);const Pe=i.getRenderTarget(),xe=L.isInstancedMesh===!0,at=L.isBatchedMesh===!0,Be=!!b.map,F=!!b.matcap,Tt=!!$,re=!!b.aoMap,G=!!b.lightMap,Z=!!b.bumpMap,be=!!b.normalMap,we=!!b.displacementMap,Ce=!!b.emissiveMap,st=!!b.metalnessMap,w=!!b.roughnessMap,M=b.anisotropy>0,Y=b.clearcoat>0,ee=b.iridescence>0,le=b.sheen>0,se=b.transmission>0,Xe=M&&!!b.anisotropyMap,Oe=Y&&!!b.clearcoatMap,de=Y&&!!b.clearcoatNormalMap,pe=Y&&!!b.clearcoatRoughnessMap,je=ee&&!!b.iridescenceMap,ue=ee&&!!b.iridescenceThicknessMap,Ct=le&&!!b.sheenColorMap,it=le&&!!b.sheenRoughnessMap,Ie=!!b.specularMap,Se=!!b.specularColorMap,Le=!!b.specularIntensityMap,C=se&&!!b.transmissionMap,ne=se&&!!b.thicknessMap,Re=!!b.gradientMap,D=!!b.alphaMap,ce=b.alphaTest>0,B=!!b.alphaHash,ae=!!b.extensions;let me=Ti;b.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(me=i.toneMapping);const ot={isWebGL2:f,shaderID:q,shaderType:b.type,shaderName:b.name,vertexShader:H,fragmentShader:oe,defines:b.defines,customVertexShaderID:ge,customFragmentShaderID:ze,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:at,instancing:xe,instancingColor:xe&&L.instanceColor!==null,instancingMorph:xe&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Wt,alphaToCoverage:!!b.alphaToCoverage,map:Be,matcap:F,envMap:Tt,envMapMode:Tt&&$.mapping,envMapCubeUVHeight:U,aoMap:re,lightMap:G,bumpMap:Z,normalMap:be,displacementMap:h&&we,emissiveMap:Ce,normalMapObjectSpace:be&&b.normalMapType===sT,normalMapTangentSpace:be&&b.normalMapType===rg,metalnessMap:st,roughnessMap:w,anisotropy:M,anisotropyMap:Xe,clearcoat:Y,clearcoatMap:Oe,clearcoatNormalMap:de,clearcoatRoughnessMap:pe,iridescence:ee,iridescenceMap:je,iridescenceThicknessMap:ue,sheen:le,sheenColorMap:Ct,sheenRoughnessMap:it,specularMap:Ie,specularColorMap:Se,specularIntensityMap:Le,transmission:se,transmissionMap:C,thicknessMap:ne,gradientMap:Re,opaque:b.transparent===!1&&b.blending===Wr&&b.alphaToCoverage===!1,alphaMap:D,alphaTest:ce,alphaHash:B,combine:b.combine,mapUv:Be&&p(b.map.channel),aoMapUv:re&&p(b.aoMap.channel),lightMapUv:G&&p(b.lightMap.channel),bumpMapUv:Z&&p(b.bumpMap.channel),normalMapUv:be&&p(b.normalMap.channel),displacementMapUv:we&&p(b.displacementMap.channel),emissiveMapUv:Ce&&p(b.emissiveMap.channel),metalnessMapUv:st&&p(b.metalnessMap.channel),roughnessMapUv:w&&p(b.roughnessMap.channel),anisotropyMapUv:Xe&&p(b.anisotropyMap.channel),clearcoatMapUv:Oe&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:de&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:it&&p(b.sheenRoughnessMap.channel),specularMapUv:Ie&&p(b.specularMap.channel),specularColorMapUv:Se&&p(b.specularColorMap.channel),specularIntensityMapUv:Le&&p(b.specularIntensityMap.channel),transmissionMapUv:C&&p(b.transmissionMap.channel),thicknessMapUv:ne&&p(b.thicknessMap.channel),alphaMapUv:D&&p(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(be||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(Be||D),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:_e,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Be&&b.map.isVideoTexture===!0&&ft.getTransfer(b.map.colorSpace)===St,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===In,flipSided:b.side===sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ae&&b.extensions.derivatives===!0,extensionFragDepth:ae&&b.extensions.fragDepth===!0,extensionDrawBuffers:ae&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ae&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function x(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const K in b.defines)R.push(K),R.push(b.defines[K]);return b.isRawShaderMaterial===!1&&(v(R,b),y(R,b),R.push(i.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function v(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function y(b,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.instancingMorph&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.normalMapObjectSpace&&a.enable(7),R.normalMapTangentSpace&&a.enable(8),R.clearcoat&&a.enable(9),R.iridescence&&a.enable(10),R.alphaTest&&a.enable(11),R.vertexColors&&a.enable(12),R.vertexAlphas&&a.enable(13),R.vertexUv1s&&a.enable(14),R.vertexUv2s&&a.enable(15),R.vertexUv3s&&a.enable(16),R.vertexTangents&&a.enable(17),R.anisotropy&&a.enable(18),R.alphaHash&&a.enable(19),R.batching&&a.enable(20),b.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),b.push(a.mask)}function E(b){const R=_[b.type];let K;if(R){const Q=Dn[R];K=XT.clone(Q.uniforms)}else K=b.uniforms;return K}function A(b,R){let K;for(let Q=0,L=u.length;Q<L;Q++){const k=u[Q];if(k.cacheKey===R){K=k,++K.usedTimes;break}}return K===void 0&&(K=new aC(i,R,b,s),u.push(K)),K}function S(b){if(--b.usedTimes===0){const R=u.indexOf(b);u[R]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:E,acquireProgram:A,releaseProgram:S,releaseShaderCache:P,programs:u,dispose:N}}function dC(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function hC(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,d,h,g,_,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=h,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,d,h,g,_,p){const m=o(f,d,h,g,_,p);h.transmission>0?n.push(m):h.transparent===!0?r.push(m):t.push(m)}function l(f,d,h,g,_,p){const m=o(f,d,h,g,_,p);h.transmission>0?n.unshift(m):h.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||hC),n.length>1&&n.sort(d||Mh),r.length>1&&r.sort(d||Mh)}function u(){for(let f=e,d=i.length;f<d;f++){const h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function pC(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Sh,i.set(n,[o])):r>=s.length?(o=new Sh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function mC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new We};break;case"SpotLight":t={position:new I,direction:new I,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function gC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _C=0;function vC(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xC(i,e){const t=new mC,n=gC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new et,a=new et;function l(u,f){let d=0,h=0,g=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let _=0,p=0,m=0,x=0,v=0,y=0,E=0,A=0,S=0,P=0,N=0;u.sort(vC);const b=f===!0?Math.PI:1;for(let K=0,Q=u.length;K<Q;K++){const L=u[K],k=L.color,V=L.intensity,X=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=k.r*V*b,h+=k.g*V*b,g+=k.b*V*b;else if(L.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(L.sh.coefficients[U],V);N++}else if(L.isDirectionalLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const q=L.shadow,te=n.get(L);te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,r.directionalShadow[_]=te,r.directionalShadowMap[_]=$,r.directionalShadowMatrix[_]=L.shadow.matrix,y++}r.directional[_]=U,_++}else if(L.isSpotLight){const U=t.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(k).multiplyScalar(V*b),U.distance=X,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,r.spot[m]=U;const q=L.shadow;if(L.map&&(r.spotLightMap[S]=L.map,S++,q.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[m]=q.matrix,L.castShadow){const te=n.get(L);te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,r.spotShadow[m]=te,r.spotShadowMap[m]=$,A++}m++}else if(L.isRectAreaLight){const U=t.get(L);U.color.copy(k).multiplyScalar(V),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),r.rectArea[x]=U,x++}else if(L.isPointLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity*b),U.distance=L.distance,U.decay=L.decay,L.castShadow){const q=L.shadow,te=n.get(L);te.shadowBias=q.bias,te.shadowNormalBias=q.normalBias,te.shadowRadius=q.radius,te.shadowMapSize=q.mapSize,te.shadowCameraNear=q.camera.near,te.shadowCameraFar=q.camera.far,r.pointShadow[p]=te,r.pointShadowMap[p]=$,r.pointShadowMatrix[p]=L.shadow.matrix,E++}r.point[p]=U,p++}else if(L.isHemisphereLight){const U=t.get(L);U.skyColor.copy(L.color).multiplyScalar(V*b),U.groundColor.copy(L.groundColor).multiplyScalar(V*b),r.hemi[v]=U,v++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=h,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==_||R.pointLength!==p||R.spotLength!==m||R.rectAreaLength!==x||R.hemiLength!==v||R.numDirectionalShadows!==y||R.numPointShadows!==E||R.numSpotShadows!==A||R.numSpotMaps!==S||R.numLightProbes!==N)&&(r.directional.length=_,r.spot.length=m,r.rectArea.length=x,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=A+S-P,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=N,R.directionalLength=_,R.pointLength=p,R.spotLength=m,R.rectAreaLength=x,R.hemiLength=v,R.numDirectionalShadows=y,R.numPointShadows=E,R.numSpotShadows=A,R.numSpotMaps=S,R.numLightProbes=N,r.version=_C++)}function c(u,f){let d=0,h=0,g=0,_=0,p=0;const m=f.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const E=r.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(y.isSpotLight){const E=r.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const E=r.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=r.point[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const E=r.hemi[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:r}}function Eh(i,e){const t=new xC(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function yC(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Eh(i,e),t.set(s,[l])):o>=a.length?(l=new Eh(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class bC extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MC extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function TC(i,e,t){let n=new qc;const r=new Ve,s=new Ve,o=new gt,a=new bC({depthPacking:rT}),l=new MC,c={},u=t.maxTextureSize,f={[ri]:sn,[sn]:ri,[In]:In},d=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:SC,fragmentShader:EC}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Ln;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new cn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jm;let m=this.type;this.render=function(A,S,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const N=i.getRenderTarget(),b=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Ei),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Q=m!==Jn&&this.type===Jn,L=m===Jn&&this.type!==Jn;for(let k=0,V=A.length;k<V;k++){const X=A[k],$=X.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const U=$.getFrameExtents();if(r.multiply(U),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/U.x),r.x=s.x*U.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/U.y),r.y=s.y*U.y,$.mapSize.y=s.y)),$.map===null||Q===!0||L===!0){const te=this.type!==Jn?{minFilter:kt,magFilter:kt}:{};$.map!==null&&$.map.dispose(),$.map=new rr(r.x,r.y,te),$.map.texture.name=X.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const q=$.getViewportCount();for(let te=0;te<q;te++){const fe=$.getViewport(te);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),K.viewport(o),$.updateMatrices(X,te),n=$.getFrustum(),y(S,P,$.camera,X,this.type)}$.isPointLightShadow!==!0&&this.type===Jn&&x($,P),$.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(N,b,R)};function x(A,S){const P=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new rr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(S,null,P,d,_,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(S,null,P,h,_,null)}function v(A,S,P,N){let b=null;const R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)b=R;else if(b=P.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const K=b.uuid,Q=S.uuid;let L=c[K];L===void 0&&(L={},c[K]=L);let k=L[Q];k===void 0&&(k=b.clone(),L[Q]=k,S.addEventListener("dispose",E)),b=k}if(b.visible=S.visible,b.wireframe=S.wireframe,N===Jn?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:f[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const K=i.properties.get(b);K.light=P}return b}function y(A,S,P,N,b){if(A.visible===!1)return;if(A.layers.test(S.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Jn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const Q=e.update(A),L=A.material;if(Array.isArray(L)){const k=Q.groups;for(let V=0,X=k.length;V<X;V++){const $=k[V],U=L[$.materialIndex];if(U&&U.visible){const q=v(A,U,N,b);A.onBeforeShadow(i,A,S,P,Q,q,$),i.renderBufferDirect(P,null,Q,q,A,$),A.onAfterShadow(i,A,S,P,Q,q,$)}}}else if(L.visible){const k=v(A,L,N,b);A.onBeforeShadow(i,A,S,P,Q,k,null),i.renderBufferDirect(P,null,Q,k,A,null),A.onAfterShadow(i,A,S,P,Q,k,null)}}const K=A.children;for(let Q=0,L=K.length;Q<L;Q++)y(K[Q],S,P,N,b)}function E(A){A.target.removeEventListener("dispose",E);for(const P in c){const N=c[P],b=A.target.uuid;b in N&&(N[b].dispose(),delete N[b])}}}function AC(i,e,t){const n=t.isWebGL2;function r(){let D=!1;const ce=new gt;let B=null;const ae=new gt(0,0,0,0);return{setMask:function(me){B!==me&&!D&&(i.colorMask(me,me,me,me),B=me)},setLocked:function(me){D=me},setClear:function(me,ot,dt,mt,Pt){Pt===!0&&(me*=mt,ot*=mt,dt*=mt),ce.set(me,ot,dt,mt),ae.equals(ce)===!1&&(i.clearColor(me,ot,dt,mt),ae.copy(ce))},reset:function(){D=!1,B=null,ae.set(-1,0,0,0)}}}function s(){let D=!1,ce=null,B=null,ae=null;return{setTest:function(me){me?xe(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(me){ce!==me&&!D&&(i.depthMask(me),ce=me)},setFunc:function(me){if(B!==me){switch(me){case LE:i.depthFunc(i.NEVER);break;case DE:i.depthFunc(i.ALWAYS);break;case IE:i.depthFunc(i.LESS);break;case _a:i.depthFunc(i.LEQUAL);break;case NE:i.depthFunc(i.EQUAL);break;case UE:i.depthFunc(i.GEQUAL);break;case OE:i.depthFunc(i.GREATER);break;case FE:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}B=me}},setLocked:function(me){D=me},setClear:function(me){ae!==me&&(i.clearDepth(me),ae=me)},reset:function(){D=!1,ce=null,B=null,ae=null}}}function o(){let D=!1,ce=null,B=null,ae=null,me=null,ot=null,dt=null,mt=null,Pt=null;return{setTest:function(ut){D||(ut?xe(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(ut){ce!==ut&&!D&&(i.stencilMask(ut),ce=ut)},setFunc:function(ut,bt,Xt){(B!==ut||ae!==bt||me!==Xt)&&(i.stencilFunc(ut,bt,Xt),B=ut,ae=bt,me=Xt)},setOp:function(ut,bt,Xt){(ot!==ut||dt!==bt||mt!==Xt)&&(i.stencilOp(ut,bt,Xt),ot=ut,dt=bt,mt=Xt)},setLocked:function(ut){D=ut},setClear:function(ut){Pt!==ut&&(i.clearStencil(ut),Pt=ut)},reset:function(){D=!1,ce=null,B=null,ae=null,me=null,ot=null,dt=null,mt=null,Pt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},h={},g=new WeakMap,_=[],p=null,m=!1,x=null,v=null,y=null,E=null,A=null,S=null,P=null,N=new We(0,0,0),b=0,R=!1,K=null,Q=null,L=null,k=null,V=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,U=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=U>=1):q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=U>=2);let te=null,fe={};const _e=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),oe=new gt().fromArray(_e),ge=new gt().fromArray(H);function ze(D,ce,B,ae){const me=new Uint8Array(4),ot=i.createTexture();i.bindTexture(D,ot),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<B;dt++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ce+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return ot}const Pe={};Pe[i.TEXTURE_2D]=ze(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[i.TEXTURE_2D_ARRAY]=ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(i.DEPTH_TEST),l.setFunc(_a),we(!1),Ce(td),xe(i.CULL_FACE),Z(Ei);function xe(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function at(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Be(D,ce){return h[D]!==ce?(i.bindFramebuffer(D,ce),h[D]=ce,n&&(D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function F(D,ce){let B=_,ae=!1;if(D){B=g.get(ce),B===void 0&&(B=[],g.set(ce,B));const me=D.textures;if(B.length!==me.length||B[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,dt=me.length;ot<dt;ot++)B[ot]=i.COLOR_ATTACHMENT0+ot;B.length=me.length,ae=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,ae=!0);if(ae)if(t.isWebGL2)i.drawBuffers(B);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Tt(D){return p!==D?(i.useProgram(D),p=D,!0):!1}const re={[ji]:i.FUNC_ADD,[gE]:i.FUNC_SUBTRACT,[_E]:i.FUNC_REVERSE_SUBTRACT};if(n)re[sd]=i.MIN,re[od]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(re[sd]=D.MIN_EXT,re[od]=D.MAX_EXT)}const G={[vE]:i.ZERO,[xE]:i.ONE,[yE]:i.SRC_COLOR,[ac]:i.SRC_ALPHA,[AE]:i.SRC_ALPHA_SATURATE,[EE]:i.DST_COLOR,[ME]:i.DST_ALPHA,[bE]:i.ONE_MINUS_SRC_COLOR,[lc]:i.ONE_MINUS_SRC_ALPHA,[TE]:i.ONE_MINUS_DST_COLOR,[SE]:i.ONE_MINUS_DST_ALPHA,[wE]:i.CONSTANT_COLOR,[RE]:i.ONE_MINUS_CONSTANT_COLOR,[CE]:i.CONSTANT_ALPHA,[PE]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(D,ce,B,ae,me,ot,dt,mt,Pt,ut){if(D===Ei){m===!0&&(at(i.BLEND),m=!1);return}if(m===!1&&(xe(i.BLEND),m=!0),D!==mE){if(D!==x||ut!==R){if((v!==ji||A!==ji)&&(i.blendEquation(i.FUNC_ADD),v=ji,A=ji),ut)switch(D){case Wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nd:i.blendFunc(i.ONE,i.ONE);break;case id:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case id:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,E=null,S=null,P=null,N.set(0,0,0),b=0,x=D,R=ut}return}me=me||ce,ot=ot||B,dt=dt||ae,(ce!==v||me!==A)&&(i.blendEquationSeparate(re[ce],re[me]),v=ce,A=me),(B!==y||ae!==E||ot!==S||dt!==P)&&(i.blendFuncSeparate(G[B],G[ae],G[ot],G[dt]),y=B,E=ae,S=ot,P=dt),(mt.equals(N)===!1||Pt!==b)&&(i.blendColor(mt.r,mt.g,mt.b,Pt),N.copy(mt),b=Pt),x=D,R=!1}function be(D,ce){D.side===In?at(i.CULL_FACE):xe(i.CULL_FACE);let B=D.side===sn;ce&&(B=!B),we(B),D.blending===Wr&&D.transparent===!1?Z(Ei):Z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ae=D.stencilWrite;c.setTest(ae),ae&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),w(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(D){K!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),K=D)}function Ce(D){D!==dE?(xe(i.CULL_FACE),D!==Q&&(D===td?i.cullFace(i.BACK):D===hE?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),Q=D}function st(D){D!==L&&($&&i.lineWidth(D),L=D)}function w(D,ce,B){D?(xe(i.POLYGON_OFFSET_FILL),(k!==ce||V!==B)&&(i.polygonOffset(ce,B),k=ce,V=B)):at(i.POLYGON_OFFSET_FILL)}function M(D){D?xe(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function Y(D){D===void 0&&(D=i.TEXTURE0+X-1),te!==D&&(i.activeTexture(D),te=D)}function ee(D,ce,B){B===void 0&&(te===null?B=i.TEXTURE0+X-1:B=te);let ae=fe[B];ae===void 0&&(ae={type:void 0,texture:void 0},fe[B]=ae),(ae.type!==D||ae.texture!==ce)&&(te!==B&&(i.activeTexture(B),te=B),i.bindTexture(D,ce||Pe[D]),ae.type=D,ae.texture=ce)}function le(){const D=fe[te];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(D){oe.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),oe.copy(D))}function Le(D){ge.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ge.copy(D))}function C(D,ce){let B=f.get(ce);B===void 0&&(B=new WeakMap,f.set(ce,B));let ae=B.get(D);ae===void 0&&(ae=i.getUniformBlockIndex(ce,D.name),B.set(D,ae))}function ne(D,ce){const ae=f.get(ce).get(D);u.get(ce)!==ae&&(i.uniformBlockBinding(ce,ae,D.__bindingPointIndex),u.set(ce,ae))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},te=null,fe={},h={},g=new WeakMap,_=[],p=null,m=!1,x=null,v=null,y=null,E=null,A=null,S=null,P=null,N=new We(0,0,0),b=0,R=!1,K=null,Q=null,L=null,k=null,V=null,oe.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:xe,disable:at,bindFramebuffer:Be,drawBuffers:F,useProgram:Tt,setBlending:Z,setMaterial:be,setFlipSided:we,setCullFace:Ce,setLineWidth:st,setPolygonOffset:w,setScissorTest:M,activeTexture:Y,bindTexture:ee,unbindTexture:le,compressedTexImage2D:se,compressedTexImage3D:Xe,texImage2D:it,texImage3D:Ie,updateUBOMapping:C,uniformBlockBinding:ne,texStorage2D:ue,texStorage3D:Ct,texSubImage2D:Oe,texSubImage3D:de,compressedTexSubImage2D:pe,compressedTexSubImage3D:je,scissor:Se,viewport:Le,reset:Re}}function wC(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ve,f=new WeakMap;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,M){return g?new OffscreenCanvas(w,M):Zs("canvas")}function p(w,M,Y,ee){let le=1;const se=st(w);if((se.width>ee||se.height>ee)&&(le=ee/Math.max(se.width,se.height)),le<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Xe=M?Sa:Math.floor,Oe=Xe(le*se.width),de=Xe(le*se.height);d===void 0&&(d=_(Oe,de));const pe=Y?_(Oe,de):d;return pe.width=Oe,pe.height=de,pe.getContext("2d").drawImage(w,0,0,Oe,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Oe+"x"+de+")."),pe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),w;return w}function m(w){const M=st(w);return mc(M.width)&&mc(M.height)}function x(w){return a?!1:w.wrapS!==_n||w.wrapT!==_n||w.minFilter!==kt&&w.minFilter!==qt}function v(w,M){return w.generateMipmaps&&M&&w.minFilter!==kt&&w.minFilter!==qt}function y(w){i.generateMipmap(w)}function E(w,M,Y,ee,le=!1){if(a===!1)return M;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let se=M;if(M===i.RED&&(Y===i.FLOAT&&(se=i.R32F),Y===i.HALF_FLOAT&&(se=i.R16F),Y===i.UNSIGNED_BYTE&&(se=i.R8)),M===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(se=i.R8UI),Y===i.UNSIGNED_SHORT&&(se=i.R16UI),Y===i.UNSIGNED_INT&&(se=i.R32UI),Y===i.BYTE&&(se=i.R8I),Y===i.SHORT&&(se=i.R16I),Y===i.INT&&(se=i.R32I)),M===i.RG&&(Y===i.FLOAT&&(se=i.RG32F),Y===i.HALF_FLOAT&&(se=i.RG16F),Y===i.UNSIGNED_BYTE&&(se=i.RG8)),M===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(se=i.RG8UI),Y===i.UNSIGNED_SHORT&&(se=i.RG16UI),Y===i.UNSIGNED_INT&&(se=i.RG32UI),Y===i.BYTE&&(se=i.RG8I),Y===i.SHORT&&(se=i.RG16I),Y===i.INT&&(se=i.RG32I)),M===i.RGBA){const Xe=le?xa:ft.getTransfer(ee);Y===i.FLOAT&&(se=i.RGBA32F),Y===i.HALF_FLOAT&&(se=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(se=Xe===St?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function A(w,M,Y){return v(w,Y)===!0||w.isFramebufferTexture&&w.minFilter!==kt&&w.minFilter!==qt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function S(w){return w===kt||w===fc||w===Ur?i.NEAREST:i.LINEAR}function P(w){const M=w.target;M.removeEventListener("dispose",P),b(M),M.isVideoTexture&&f.delete(M)}function N(w){const M=w.target;M.removeEventListener("dispose",N),K(M)}function b(w){const M=n.get(w);if(M.__webglInit===void 0)return;const Y=w.source,ee=h.get(Y);if(ee){const le=ee[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&R(w),Object.keys(ee).length===0&&h.delete(Y)}n.remove(w)}function R(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const Y=w.source,ee=h.get(Y);delete ee[M.__cacheKey],o.memory.textures--}function K(w){const M=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let le=0;le<M.__webglFramebuffer[ee].length;le++)i.deleteFramebuffer(M.__webglFramebuffer[ee][le]);else i.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)i.deleteFramebuffer(M.__webglFramebuffer[ee]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=w.textures;for(let ee=0,le=Y.length;ee<le;ee++){const se=n.get(Y[ee]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(Y[ee])}n.remove(w)}let Q=0;function L(){Q=0}function k(){const w=Q;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),Q+=1,w}function V(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function X(w,M){const Y=n.get(w);if(w.isVideoTexture&&we(w),w.isRenderTargetTexture===!1&&w.version>0&&Y.__version!==w.version){const ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(Y,w,M);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+M)}function $(w,M){const Y=n.get(w);if(w.version>0&&Y.__version!==w.version){ge(Y,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+M)}function U(w,M){const Y=n.get(w);if(w.version>0&&Y.__version!==w.version){ge(Y,w,M);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+M)}function q(w,M){const Y=n.get(w);if(w.version>0&&Y.__version!==w.version){ze(Y,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+M)}const te={[Kr]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},fe={[kt]:i.NEAREST,[fc]:i.NEAREST_MIPMAP_NEAREST,[Ur]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[Qo]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},_e={[oT]:i.NEVER,[dT]:i.ALWAYS,[aT]:i.LESS,[sg]:i.LEQUAL,[lT]:i.EQUAL,[fT]:i.GEQUAL,[cT]:i.GREATER,[uT]:i.NOTEQUAL};function H(w,M,Y){if(M.type===An&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===qt||M.magFilter===Qo||M.magFilter===Ur||M.magFilter===ei||M.minFilter===qt||M.minFilter===Qo||M.minFilter===Ur||M.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(i.texParameteri(w,i.TEXTURE_WRAP_S,te[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,te[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,te[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,fe[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,fe[M.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==_n||M.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,S(M.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,S(M.minFilter)),M.minFilter!==kt&&M.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,_e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===kt||M.minFilter!==Ur&&M.minFilter!==ei||M.type===An&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===qs&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function oe(w,M){let Y=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",P));const ee=M.source;let le=h.get(ee);le===void 0&&(le={},h.set(ee,le));const se=V(M);if(se!==w.__cacheKey){le[se]===void 0&&(le[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),le[se].usedTimes++;const Xe=le[w.__cacheKey];Xe!==void 0&&(le[w.__cacheKey].usedTimes--,Xe.usedTimes===0&&R(M)),w.__cacheKey=se,w.__webglTexture=le[se].texture}return Y}function ge(w,M,Y){let ee=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=i.TEXTURE_3D);const le=oe(w,M),se=M.source;t.bindTexture(ee,w.__webglTexture,i.TEXTURE0+Y);const Xe=n.get(se);if(se.version!==Xe.__version||le===!0){t.activeTexture(i.TEXTURE0+Y);const Oe=ft.getPrimaries(ft.workingColorSpace),de=M.colorSpace===yi?null:ft.getPrimaries(M.colorSpace),pe=M.colorSpace===yi||Oe===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const je=x(M)&&m(M.image)===!1;let ue=p(M.image,je,!1,r.maxTextureSize);ue=Ce(M,ue);const Ct=m(ue)||a,it=s.convert(M.format,M.colorSpace);let Ie=s.convert(M.type),Se=E(M.internalFormat,it,Ie,M.colorSpace,M.isVideoTexture);H(ee,M,Ct);let Le;const C=M.mipmaps,ne=a&&M.isVideoTexture!==!0&&Se!==ng,Re=Xe.__version===void 0||le===!0,D=se.dataReady,ce=A(M,ue,Ct);if(M.isDepthTexture)Se=i.DEPTH_COMPONENT,a?M.type===An?Se=i.DEPTH_COMPONENT32F:M.type===Mi?Se=i.DEPTH_COMPONENT24:M.type===Qi?Se=i.DEPTH24_STENCIL8:Se=i.DEPTH_COMPONENT16:M.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===er&&Se===i.DEPTH_COMPONENT&&M.type!==jc&&M.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Mi,Ie=s.convert(M.type)),M.format===Zr&&Se===i.DEPTH_COMPONENT&&(Se=i.DEPTH_STENCIL,M.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Qi,Ie=s.convert(M.type))),Re&&(ne?t.texStorage2D(i.TEXTURE_2D,1,Se,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Se,ue.width,ue.height,0,it,Ie,null));else if(M.isDataTexture)if(C.length>0&&Ct){ne&&Re&&t.texStorage2D(i.TEXTURE_2D,ce,Se,C[0].width,C[0].height);for(let B=0,ae=C.length;B<ae;B++)Le=C[B],ne?D&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,Le.width,Le.height,it,Ie,Le.data):t.texImage2D(i.TEXTURE_2D,B,Se,Le.width,Le.height,0,it,Ie,Le.data);M.generateMipmaps=!1}else ne?(Re&&t.texStorage2D(i.TEXTURE_2D,ce,Se,ue.width,ue.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,it,Ie,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Se,ue.width,ue.height,0,it,Ie,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ne&&Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Se,C[0].width,C[0].height,ue.depth);for(let B=0,ae=C.length;B<ae;B++)Le=C[B],M.format!==vn?it!==null?ne?D&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,Le.width,Le.height,ue.depth,it,Le.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,Se,Le.width,Le.height,ue.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,Le.width,Le.height,ue.depth,it,Ie,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,B,Se,Le.width,Le.height,ue.depth,0,it,Ie,Le.data)}else{ne&&Re&&t.texStorage2D(i.TEXTURE_2D,ce,Se,C[0].width,C[0].height);for(let B=0,ae=C.length;B<ae;B++)Le=C[B],M.format!==vn?it!==null?ne?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,Le.width,Le.height,it,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,B,Se,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?D&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,Le.width,Le.height,it,Ie,Le.data):t.texImage2D(i.TEXTURE_2D,B,Se,Le.width,Le.height,0,it,Ie,Le.data)}else if(M.isDataArrayTexture)ne?(Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Se,ue.width,ue.height,ue.depth),D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,it,Ie,ue.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,ue.width,ue.height,ue.depth,0,it,Ie,ue.data);else if(M.isData3DTexture)ne?(Re&&t.texStorage3D(i.TEXTURE_3D,ce,Se,ue.width,ue.height,ue.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,it,Ie,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Se,ue.width,ue.height,ue.depth,0,it,Ie,ue.data);else if(M.isFramebufferTexture){if(Re)if(ne)t.texStorage2D(i.TEXTURE_2D,ce,Se,ue.width,ue.height);else{let B=ue.width,ae=ue.height;for(let me=0;me<ce;me++)t.texImage2D(i.TEXTURE_2D,me,Se,B,ae,0,it,Ie,null),B>>=1,ae>>=1}}else if(C.length>0&&Ct){if(ne&&Re){const B=st(C[0]);t.texStorage2D(i.TEXTURE_2D,ce,Se,B.width,B.height)}for(let B=0,ae=C.length;B<ae;B++)Le=C[B],ne?D&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,it,Ie,Le):t.texImage2D(i.TEXTURE_2D,B,Se,it,Ie,Le);M.generateMipmaps=!1}else if(ne){if(Re){const B=st(ue);t.texStorage2D(i.TEXTURE_2D,ce,Se,B.width,B.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,it,Ie,ue)}else t.texImage2D(i.TEXTURE_2D,0,Se,it,Ie,ue);v(M,Ct)&&y(ee),Xe.__version=se.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ze(w,M,Y){if(M.image.length!==6)return;const ee=oe(w,M),le=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+Y);const se=n.get(le);if(le.version!==se.__version||ee===!0){t.activeTexture(i.TEXTURE0+Y);const Xe=ft.getPrimaries(ft.workingColorSpace),Oe=M.colorSpace===yi?null:ft.getPrimaries(M.colorSpace),de=M.colorSpace===yi||Xe===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const pe=M.isCompressedTexture||M.image[0].isCompressedTexture,je=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let B=0;B<6;B++)!pe&&!je?ue[B]=p(M.image[B],!1,!0,r.maxCubemapSize):ue[B]=je?M.image[B].image:M.image[B],ue[B]=Ce(M,ue[B]);const Ct=ue[0],it=m(Ct)||a,Ie=s.convert(M.format,M.colorSpace),Se=s.convert(M.type),Le=E(M.internalFormat,Ie,Se,M.colorSpace),C=a&&M.isVideoTexture!==!0,ne=se.__version===void 0||ee===!0,Re=le.dataReady;let D=A(M,Ct,it);H(i.TEXTURE_CUBE_MAP,M,it);let ce;if(pe){C&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,D,Le,Ct.width,Ct.height);for(let B=0;B<6;B++){ce=ue[B].mipmaps;for(let ae=0;ae<ce.length;ae++){const me=ce[ae];M.format!==vn?Ie!==null?C?Re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae,0,0,me.width,me.height,Ie,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae,Le,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae,0,0,me.width,me.height,Ie,Se,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae,Le,me.width,me.height,0,Ie,Se,me.data)}}}else{if(ce=M.mipmaps,C&&ne){ce.length>0&&D++;const B=st(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,D,Le,B.width,B.height)}for(let B=0;B<6;B++)if(je){C?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,ue[B].width,ue[B].height,Ie,Se,ue[B].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Le,ue[B].width,ue[B].height,0,Ie,Se,ue[B].data);for(let ae=0;ae<ce.length;ae++){const ot=ce[ae].image[B].image;C?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae+1,0,0,ot.width,ot.height,Ie,Se,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae+1,Le,ot.width,ot.height,0,Ie,Se,ot.data)}}else{C?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Ie,Se,ue[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Le,Ie,Se,ue[B]);for(let ae=0;ae<ce.length;ae++){const me=ce[ae];C?Re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae+1,0,0,Ie,Se,me.image[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,ae+1,Le,Ie,Se,me.image[B])}}}v(M,it)&&y(i.TEXTURE_CUBE_MAP),se.__version=le.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Pe(w,M,Y,ee,le,se){const Xe=s.convert(Y.format,Y.colorSpace),Oe=s.convert(Y.type),de=E(Y.internalFormat,Xe,Oe,Y.colorSpace);if(!n.get(M).__hasExternalTextures){const je=Math.max(1,M.width>>se),ue=Math.max(1,M.height>>se);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,se,de,je,ue,M.depth,0,Xe,Oe,null):t.texImage2D(le,se,de,je,ue,0,Xe,Oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),be(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,le,n.get(Y).__webglTexture,0,Z(M)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,le,n.get(Y).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(w,M,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let ee=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||be(M)){const le=M.depthTexture;le&&le.isDepthTexture&&(le.type===An?ee=i.DEPTH_COMPONENT32F:le.type===Mi&&(ee=i.DEPTH_COMPONENT24));const se=Z(M);be(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,ee,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,se,ee,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ee,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){const ee=Z(M);Y&&be(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,M.width,M.height):be(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const ee=M.textures;for(let le=0;le<ee.length;le++){const se=ee[le],Xe=s.convert(se.format,se.colorSpace),Oe=s.convert(se.type),de=E(se.internalFormat,Xe,Oe,se.colorSpace),pe=Z(M);Y&&be(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,de,M.width,M.height):be(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,de,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,de,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const ee=n.get(M.depthTexture).__webglTexture,le=Z(M);if(M.depthTexture.format===er)be(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Zr)be(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Be(w){const M=n.get(w),Y=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");at(M.__webglFramebuffer,w)}else if(Y){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=i.createRenderbuffer(),xe(M.__webglDepthbuffer[ee],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),xe(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function F(w,M,Y){const ee=n.get(w);M!==void 0&&Pe(ee.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Be(w)}function Tt(w){const M=w.texture,Y=n.get(w),ee=n.get(M);w.addEventListener("dispose",N);const le=w.textures,se=w.isWebGLCubeRenderTarget===!0,Xe=le.length>1,Oe=m(w)||a;if(Xe||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=M.version,o.memory.textures++),se){Y.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[de]=[];for(let pe=0;pe<M.mipmaps.length;pe++)Y.__webglFramebuffer[de][pe]=i.createFramebuffer()}else Y.__webglFramebuffer[de]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)Y.__webglFramebuffer[de]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Xe)if(r.drawBuffers)for(let de=0,pe=le.length;de<pe;de++){const je=n.get(le[de]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&be(w)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){const pe=le[de];Y.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[de]);const je=s.convert(pe.format,pe.colorSpace),ue=s.convert(pe.type),Ct=E(pe.internalFormat,je,ue,pe.colorSpace,w.isXRRenderTarget===!0),it=Z(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Ct,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,Y.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(Y.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),H(i.TEXTURE_CUBE_MAP,M,Oe);for(let de=0;de<6;de++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)Pe(Y.__webglFramebuffer[de][pe],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else Pe(Y.__webglFramebuffer[de],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);v(M,Oe)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let de=0,pe=le.length;de<pe;de++){const je=le[de],ue=n.get(je);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),H(i.TEXTURE_2D,je,Oe),Pe(Y.__webglFramebuffer,w,je,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),v(je,Oe)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?de=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ee.__webglTexture),H(de,M,Oe),a&&M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)Pe(Y.__webglFramebuffer[pe],w,M,i.COLOR_ATTACHMENT0,de,pe);else Pe(Y.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,de,0);v(M,Oe)&&y(de),t.unbindTexture()}w.depthBuffer&&Be(w)}function re(w){const M=m(w)||a,Y=w.textures;for(let ee=0,le=Y.length;ee<le;ee++){const se=Y[ee];if(v(se,M)){const Xe=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Oe=n.get(se).__webglTexture;t.bindTexture(Xe,Oe),y(Xe),t.unbindTexture()}}}function G(w){if(a&&w.samples>0&&be(w)===!1){const M=w.textures,Y=w.width,ee=w.height;let le=i.COLOR_BUFFER_BIT;const se=[],Xe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(w),de=M.length>1;if(de)for(let pe=0;pe<M.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){se.push(i.COLOR_ATTACHMENT0+pe),w.depthBuffer&&se.push(Xe);const je=Oe.__ignoreDepthValues!==void 0?Oe.__ignoreDepthValues:!1;if(je===!1&&(w.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),de&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[pe]),je===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Xe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Xe])),de){const ue=n.get(M[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,Y,ee,0,0,Y,ee,le,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let pe=0;pe<M.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[pe]);const je=n.get(M[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}}function Z(w){return Math.min(r.maxSamples,w.samples)}function be(w){const M=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function we(w){const M=o.render.frame;f.get(w)!==M&&(f.set(w,M),w.update())}function Ce(w,M){const Y=w.colorSpace,ee=w.format,le=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===pc||Y!==Wt&&Y!==yi&&(ft.getTransfer(Y)===St?a===!1?e.has("EXT_sRGB")===!0&&ee===vn?(w.format=pc,w.minFilter=qt,w.generateMipmaps=!1):M=cg.sRGBToLinear(M):(ee!==vn||le!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function st(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=U,this.setTextureCube=q,this.rebindTextures=F,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=be}function RC(i,e,t){const n=t.isWebGL2;function r(s,o=yi){let a;const l=ft.getTransfer(o);if(s===Ai)return i.UNSIGNED_BYTE;if(s===Km)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Zm)return i.UNSIGNED_SHORT_5_5_5_1;if(s===YE)return i.BYTE;if(s===qE)return i.SHORT;if(s===jc)return i.UNSIGNED_SHORT;if(s===qm)return i.INT;if(s===Mi)return i.UNSIGNED_INT;if(s===An)return i.FLOAT;if(s===qs)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===KE)return i.ALPHA;if(s===vn)return i.RGBA;if(s===ZE)return i.LUMINANCE;if(s===JE)return i.LUMINANCE_ALPHA;if(s===er)return i.DEPTH_COMPONENT;if(s===Zr)return i.DEPTH_STENCIL;if(s===pc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Jm)return i.RED;if(s===Qm)return i.RED_INTEGER;if(s===QE)return i.RG;if(s===eg)return i.RG_INTEGER;if(s===tg)return i.RGBA_INTEGER;if(s===Ja||s===Qa||s===el||s===tl)if(l===St)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ja)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===el)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ja)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===el)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ld||s===cd||s===ud||s===fd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ld)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ud)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ng)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===dd||s===hd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===dd)return l===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===hd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===yd||s===bd||s===Md||s===Sd||s===Ed||s===Td||s===Ad||s===wd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===pd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===md)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_d)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Md)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ed)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Td)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ad)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nl||s===Rd||s===Cd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===nl)return l===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Rd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Cd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===eT||s===Pd||s===Ld||s===Dd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===nl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Pd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ld)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class CC extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zi extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PC={type:"move"};class Rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const LC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class IC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Ht,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Ii({extensions:{fragDepth:!0},vertexShader:LC,fragmentShader:DC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new cn(new Ia(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class NC extends ur{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=new IC,p=t.getContextAttributes();let m=null,x=null;const v=[],y=[],E=new Ve;let A=null;const S=new tn;S.layers.enable(1),S.viewport=new gt;const P=new tn;P.layers.enable(2),P.viewport=new gt;const N=[S,P],b=new CC;b.layers.enable(1),b.layers.enable(2);let R=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let oe=v[H];return oe===void 0&&(oe=new Rl,v[H]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(H){let oe=v[H];return oe===void 0&&(oe=new Rl,v[H]=oe),oe.getGripSpace()},this.getHand=function(H){let oe=v[H];return oe===void 0&&(oe=new Rl,v[H]=oe),oe.getHandSpace()};function Q(H){const oe=y.indexOf(H.inputSource);if(oe===-1)return;const ge=v[oe];ge!==void 0&&(ge.update(H.inputSource,H.frame,c||o),ge.dispatchEvent({type:H.type,data:H.inputSource}))}function L(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",k);for(let H=0;H<v.length;H++){const oe=y[H];oe!==null&&(y[H]=null,v[H].disconnect(oe))}R=null,K=null,_.reset(),e.setRenderTarget(m),h=null,d=null,f=null,r=null,x=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",L),r.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new rr(h.framebufferWidth,h.framebufferHeight,{format:vn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let oe=null,ge=null,ze=null;p.depth&&(ze=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?Zr:er,ge=p.stencil?Qi:Mi);const Pe={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new rr(d.textureWidth,d.textureHeight,{format:vn,type:Ai,depthTexture:new yg(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const xe=e.properties.get(x);xe.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),_e.setContext(r),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(H){for(let oe=0;oe<H.removed.length;oe++){const ge=H.removed[oe],ze=y.indexOf(ge);ze>=0&&(y[ze]=null,v[ze].disconnect(ge))}for(let oe=0;oe<H.added.length;oe++){const ge=H.added[oe];let ze=y.indexOf(ge);if(ze===-1){for(let xe=0;xe<v.length;xe++)if(xe>=y.length){y.push(ge),ze=xe;break}else if(y[xe]===null){y[xe]=ge,ze=xe;break}if(ze===-1)break}const Pe=v[ze];Pe&&Pe.connect(ge)}}const V=new I,X=new I;function $(H,oe,ge){V.setFromMatrixPosition(oe.matrixWorld),X.setFromMatrixPosition(ge.matrixWorld);const ze=V.distanceTo(X),Pe=oe.projectionMatrix.elements,xe=ge.projectionMatrix.elements,at=Pe[14]/(Pe[10]-1),Be=Pe[14]/(Pe[10]+1),F=(Pe[9]+1)/Pe[5],Tt=(Pe[9]-1)/Pe[5],re=(Pe[8]-1)/Pe[0],G=(xe[8]+1)/xe[0],Z=at*re,be=at*G,we=ze/(-re+G),Ce=we*-re;oe.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ce),H.translateZ(we),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const st=at+we,w=Be+we,M=Z-Ce,Y=be+(ze-Ce),ee=F*Be/w*st,le=Tt*Be/w*st;H.projectionMatrix.makePerspective(M,Y,ee,le,st,w),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function U(H,oe){oe===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(oe.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;_.texture!==null&&(H.near=_.depthNear,H.far=_.depthFar),b.near=P.near=S.near=H.near,b.far=P.far=S.far=H.far,(R!==b.near||K!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,K=b.far,S.near=R,S.far=K,P.near=R,P.far=K,S.updateProjectionMatrix(),P.updateProjectionMatrix(),H.updateProjectionMatrix());const oe=H.parent,ge=b.cameras;U(b,oe);for(let ze=0;ze<ge.length;ze++)U(ge[ze],oe);ge.length===2?$(b,S,P):b.projectionMatrix.copy(S.projectionMatrix),q(H,b,oe)};function q(H,oe,ge){ge===null?H.matrix.copy(oe.matrixWorld):(H.matrix.copy(ge.matrixWorld),H.matrix.invert(),H.matrix.multiply(oe.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(oe.projectionMatrix),H.projectionMatrixInverse.copy(oe.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Qr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null};let te=null;function fe(H,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let ze=!1;ge.length!==b.cameras.length&&(b.cameras.length=0,ze=!0);for(let xe=0;xe<ge.length;xe++){const at=ge[xe];let Be=null;if(h!==null)Be=h.getViewport(at);else{const Tt=f.getViewSubImage(d,at);Be=Tt.viewport,xe===0&&(e.setRenderTargetTextures(x,Tt.colorTexture,d.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(x))}let F=N[xe];F===void 0&&(F=new tn,F.layers.enable(xe),F.viewport=new gt,N[xe]=F),F.matrix.fromArray(at.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(at.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(Be.x,Be.y,Be.width,Be.height),xe===0&&(b.matrix.copy(F.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ze===!0&&b.cameras.push(F)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const xe=f.getDepthInformation(ge[0]);xe&&xe.isValid&&xe.texture&&_.init(e,xe,r.renderState)}}for(let ge=0;ge<v.length;ge++){const ze=y[ge],Pe=v[ge];ze!==null&&Pe!==void 0&&Pe.update(ze,oe,c||o)}_.render(e,b),te&&te(H,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}const _e=new xg;_e.setAnimationLoop(fe),this.setAnimationLoop=function(H){te=H},this.dispose=function(){}}}const Gi=new Vn,UC=new et;function OC(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,gg(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,x,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===sn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===sn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),v=x.envMap,y=x.envMapRotation;if(v&&(p.envMap.value=v,Gi.copy(y),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),p.envMapRotation.value.setFromMatrix4(UC.makeRotationFromEuler(Gi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const E=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*E,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function FC(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=r[x.id];y===void 0&&(g(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",p));const E=v.program;n.updateUBOMapping(x,E);const A=e.render.frame;s[x.id]!==A&&(d(x),s[x.id]=A)}function u(x){const v=f();x.__bindingPointIndex=v;const y=i.createBuffer(),E=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=r[x.id],y=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,S=y.length;A<S;A++){const P=Array.isArray(y[A])?y[A]:[y[A]];for(let N=0,b=P.length;N<b;N++){const R=P[N];if(h(R,A,N,E)===!0){const K=R.__offset,Q=Array.isArray(R.value)?R.value:[R.value];let L=0;for(let k=0;k<Q.length;k++){const V=Q[k],X=_(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,K+L,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,v,y,E){const A=x.value,S=v+"_"+y;if(E[S]===void 0)return typeof A=="number"||typeof A=="boolean"?E[S]=A:E[S]=A.clone(),!0;{const P=E[S];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return E[S]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(x){const v=x.uniforms;let y=0;const E=16;for(let S=0,P=v.length;S<P;S++){const N=Array.isArray(v[S])?v[S]:[v[S]];for(let b=0,R=N.length;b<R;b++){const K=N[b],Q=Array.isArray(K.value)?K.value:[K.value];for(let L=0,k=Q.length;L<k;L++){const V=Q[L],X=_(V),$=y%E;$!==0&&E-$<X.boundary&&(y+=E-$),K.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=y,y+=X.storage}}}const A=y%E;return A>0&&(y+=E-A),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class Ag{constructor(e={}){const{canvas:t=wT(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this._useLegacyLights=!1,this.toneMapping=Ti,this.toneMappingExposure=1;const v=this;let y=!1,E=0,A=0,S=null,P=-1,N=null;const b=new gt,R=new gt;let K=null;const Q=new We(0);let L=0,k=t.width,V=t.height,X=1,$=null,U=null;const q=new gt(0,0,k,V),te=new gt(0,0,k,V);let fe=!1;const _e=new qc;let H=!1,oe=!1,ge=null;const ze=new et,Pe=new Ve,xe=new I,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return S===null?X:1}let F=n;function Tt(T,O){for(let W=0;W<T.length;W++){const j=T[W],z=t.getContext(j,O);if(z!==null)return z}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xc}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ce,!1),F===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),F=Tt(O,T),F===null)throw Tt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let re,G,Z,be,we,Ce,st,w,M,Y,ee,le,se,Xe,Oe,de,pe,je,ue,Ct,it,Ie,Se,Le;function C(){re=new G1(F),G=new F1(F,re,e),re.init(G),Ie=new RC(F,re,G),Z=new AC(F,re,G),be=new j1(F),we=new dC,Ce=new wC(F,re,Z,we,G,Ie,be),st=new V1(v),w=new H1(v),M=new JT(F,G),Se=new U1(F,re,M,G),Y=new W1(F,M,be,Se),ee=new K1(F,Y,M,be),ue=new q1(F,G,Ce),de=new B1(we),le=new fC(v,st,w,re,G,Se,de),se=new OC(v,we),Xe=new pC,Oe=new yC(re,G),je=new N1(v,st,w,Z,ee,d,l),pe=new TC(v,ee,G),Le=new FC(F,be,G,Z),Ct=new O1(F,re,be,G),it=new X1(F,re,be,G),be.programs=le.programs,v.capabilities=G,v.extensions=re,v.properties=we,v.renderLists=Xe,v.shadowMap=pe,v.state=Z,v.info=be}C();const ne=new NC(v,F);this.xr=ne,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(k,V,!1))},this.getSize=function(T){return T.set(k,V)},this.setSize=function(T,O,W=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,V=O,t.width=Math.floor(T*X),t.height=Math.floor(O*X),W===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(k*X,V*X).floor()},this.setDrawingBufferSize=function(T,O,W){k=T,V=O,X=W,t.width=Math.floor(T*W),t.height=Math.floor(O*W),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(q)},this.setViewport=function(T,O,W,j){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,O,W,j),Z.viewport(b.copy(q).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(te)},this.setScissor=function(T,O,W,j){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,O,W,j),Z.scissor(R.copy(te).multiplyScalar(X).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(T){Z.setScissorTest(fe=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){U=T},this.getClearColor=function(T){return T.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(T=!0,O=!0,W=!0){let j=0;if(T){let z=!1;if(S!==null){const ve=S.texture.format;z=ve===tg||ve===eg||ve===Qm}if(z){const ve=S.texture.type,De=ve===Ai||ve===Mi||ve===jc||ve===Qi||ve===Km||ve===Zm,ke=je.getClearColor(),Ge=je.getClearAlpha(),rt=ke.r,$e=ke.g,Ye=ke.b;De?(h[0]=rt,h[1]=$e,h[2]=Ye,h[3]=Ge,F.clearBufferuiv(F.COLOR,0,h)):(g[0]=rt,g[1]=$e,g[2]=Ye,g[3]=Ge,F.clearBufferiv(F.COLOR,0,g))}else j|=F.COLOR_BUFFER_BIT}O&&(j|=F.DEPTH_BUFFER_BIT),W&&(j|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Xe.dispose(),Oe.dispose(),we.dispose(),st.dispose(),w.dispose(),ee.dispose(),Se.dispose(),Le.dispose(),le.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Pt),ne.removeEventListener("sessionend",ut),ge&&(ge.dispose(),ge=null),bt.stop()};function Re(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=be.autoReset,O=pe.enabled,W=pe.autoUpdate,j=pe.needsUpdate,z=pe.type;C(),be.autoReset=T,pe.enabled=O,pe.autoUpdate=W,pe.needsUpdate=j,pe.type=z}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function B(T){const O=T.target;O.removeEventListener("dispose",B),ae(O)}function ae(T){me(T),we.remove(T)}function me(T){const O=we.get(T).programs;O!==void 0&&(O.forEach(function(W){le.releaseProgram(W)}),T.isShaderMaterial&&le.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,W,j,z,ve){O===null&&(O=at);const De=z.isMesh&&z.matrixWorld.determinant()<0,ke=Bg(T,O,W,j,z);Z.setMaterial(j,De);let Ge=W.index,rt=1;if(j.wireframe===!0){if(Ge=Y.getWireframeAttribute(W),Ge===void 0)return;rt=2}const $e=W.drawRange,Ye=W.attributes.position;let It=$e.start*rt,on=($e.start+$e.count)*rt;ve!==null&&(It=Math.max(It,ve.start*rt),on=Math.min(on,(ve.start+ve.count)*rt)),Ge!==null?(It=Math.max(It,0),on=Math.min(on,Ge.count)):Ye!=null&&(It=Math.max(It,0),on=Math.min(on,Ye.count));const Bt=on-It;if(Bt<0||Bt===1/0)return;Se.setup(z,j,ke,W,Ge);let Gn,At=Ct;if(Ge!==null&&(Gn=M.get(Ge),At=it,At.setIndex(Gn)),z.isMesh)j.wireframe===!0?(Z.setLineWidth(j.wireframeLinewidth*Be()),At.setMode(F.LINES)):At.setMode(F.TRIANGLES);else if(z.isLine){let Ze=j.linewidth;Ze===void 0&&(Ze=1),Z.setLineWidth(Ze*Be()),z.isLineSegments?At.setMode(F.LINES):z.isLineLoop?At.setMode(F.LINE_LOOP):At.setMode(F.LINE_STRIP)}else z.isPoints?At.setMode(F.POINTS):z.isSprite&&At.setMode(F.TRIANGLES);if(z.isBatchedMesh)At.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)At.renderInstances(It,Bt,z.count);else if(W.isInstancedBufferGeometry){const Ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Fa=Math.min(W.instanceCount,Ze);At.renderInstances(It,Bt,Fa)}else At.render(It,Bt)};function ot(T,O,W){T.transparent===!0&&T.side===In&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,co(T,O,W),T.side=ri,T.needsUpdate=!0,co(T,O,W),T.side=In):co(T,O,W)}this.compile=function(T,O,W=null){W===null&&(W=T),p=Oe.get(W),p.init(),x.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==W&&T.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(v._useLegacyLights);const j=new Set;return T.traverse(function(z){const ve=z.material;if(ve)if(Array.isArray(ve))for(let De=0;De<ve.length;De++){const ke=ve[De];ot(ke,W,z),j.add(ke)}else ot(ve,W,z),j.add(ve)}),x.pop(),p=null,j},this.compileAsync=function(T,O,W=null){const j=this.compile(T,O,W);return new Promise(z=>{function ve(){if(j.forEach(function(De){we.get(De).currentProgram.isReady()&&j.delete(De)}),j.size===0){z(T);return}setTimeout(ve,10)}re.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let dt=null;function mt(T){dt&&dt(T)}function Pt(){bt.stop()}function ut(){bt.start()}const bt=new xg;bt.setAnimationLoop(mt),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(T){dt=T,ne.setAnimationLoop(T),T===null?bt.stop():bt.start()},ne.addEventListener("sessionstart",Pt),ne.addEventListener("sessionend",ut),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(O),O=ne.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,S),p=Oe.get(T,x.length),p.init(),x.push(p),ze.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),_e.setFromProjectionMatrix(ze),oe=this.localClippingEnabled,H=de.init(this.clippingPlanes,oe),_=Xe.get(T,m.length),_.init(),m.push(_),Xt(T,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort($,U),this.info.render.frame++,H===!0&&de.beginShadows();const W=p.state.shadowsArray;if(pe.render(W,T,O),H===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1)&&je.render(_,T),p.setupLights(v._useLegacyLights),O.isArrayCamera){const j=O.cameras;for(let z=0,ve=j.length;z<ve;z++){const De=j[z];Ni(_,T,De,De.viewport)}}else Ni(_,T,O);S!==null&&(Ce.updateMultisampleRenderTarget(S),Ce.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(v,T,O),Se.resetDefaultState(),P=-1,N=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Xt(T,O,W,j){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||_e.intersectsSprite(T)){j&&xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ze);const De=ee.update(T),ke=T.material;ke.visible&&_.push(T,De,ke,W,xe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||_e.intersectsObject(T))){const De=ee.update(T),ke=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),xe.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),xe.copy(De.boundingSphere.center)),xe.applyMatrix4(T.matrixWorld).applyMatrix4(ze)),Array.isArray(ke)){const Ge=De.groups;for(let rt=0,$e=Ge.length;rt<$e;rt++){const Ye=Ge[rt],It=ke[Ye.materialIndex];It&&It.visible&&_.push(T,De,It,W,xe.z,Ye)}}else ke.visible&&_.push(T,De,ke,W,xe.z,null)}}const ve=T.children;for(let De=0,ke=ve.length;De<ke;De++)Xt(ve[De],O,W,j)}function Ni(T,O,W,j){const z=T.opaque,ve=T.transmissive,De=T.transparent;p.setupLightsView(W),H===!0&&de.setGlobalState(v.clippingPlanes,W),ve.length>0&&ao(z,ve,O,W),j&&Z.viewport(b.copy(j)),z.length>0&&lo(z,O,W),ve.length>0&&lo(ve,O,W),De.length>0&&lo(De,O,W),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function ao(T,O,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const ve=G.isWebGL2;ge===null&&(ge=new rr(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?qs:Ai,minFilter:ei,samples:ve?4:0})),v.getDrawingBufferSize(Pe),ve?ge.setSize(Pe.x,Pe.y):ge.setSize(Sa(Pe.x),Sa(Pe.y));const De=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(Q),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const ke=v.toneMapping;v.toneMapping=Ti,lo(T,W,j),Ce.updateMultisampleRenderTarget(ge),Ce.updateRenderTargetMipmap(ge);let Ge=!1;for(let rt=0,$e=O.length;rt<$e;rt++){const Ye=O[rt],It=Ye.object,on=Ye.geometry,Bt=Ye.material,Gn=Ye.group;if(Bt.side===In&&It.layers.test(j.layers)){const At=Bt.side;Bt.side=sn,Bt.needsUpdate=!0,ou(It,W,j,on,Bt,Gn),Bt.side=At,Bt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Ce.updateMultisampleRenderTarget(ge),Ce.updateRenderTargetMipmap(ge)),v.setRenderTarget(De),v.setClearColor(Q,L),v.toneMapping=ke}function lo(T,O,W){const j=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ve=T.length;z<ve;z++){const De=T[z],ke=De.object,Ge=De.geometry,rt=j===null?De.material:j,$e=De.group;ke.layers.test(W.layers)&&ou(ke,O,W,Ge,rt,$e)}}function ou(T,O,W,j,z,ve){T.onBeforeRender(v,O,W,j,z,ve),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,O,W,j,T,ve),z.transparent===!0&&z.side===In&&z.forceSinglePass===!1?(z.side=sn,z.needsUpdate=!0,v.renderBufferDirect(W,O,j,z,T,ve),z.side=ri,z.needsUpdate=!0,v.renderBufferDirect(W,O,j,z,T,ve),z.side=In):v.renderBufferDirect(W,O,j,z,T,ve),T.onAfterRender(v,O,W,j,z,ve)}function co(T,O,W){O.isScene!==!0&&(O=at);const j=we.get(T),z=p.state.lights,ve=p.state.shadowsArray,De=z.state.version,ke=le.getParameters(T,z.state,ve,O,W),Ge=le.getProgramCacheKey(ke);let rt=j.programs;j.environment=T.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(T.isMeshStandardMaterial?w:st).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,rt===void 0&&(T.addEventListener("dispose",B),rt=new Map,j.programs=rt);let $e=rt.get(Ge);if($e!==void 0){if(j.currentProgram===$e&&j.lightsStateVersion===De)return lu(T,ke),$e}else ke.uniforms=le.getUniforms(T),T.onBuild(W,ke,v),T.onBeforeCompile(ke,v),$e=le.acquireProgram(ke,Ge),rt.set(Ge,$e),j.uniforms=ke.uniforms;const Ye=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=de.uniform),lu(T,ke),j.needsLights=kg(T),j.lightsStateVersion=De,j.needsLights&&(Ye.ambientLightColor.value=z.state.ambient,Ye.lightProbe.value=z.state.probe,Ye.directionalLights.value=z.state.directional,Ye.directionalLightShadows.value=z.state.directionalShadow,Ye.spotLights.value=z.state.spot,Ye.spotLightShadows.value=z.state.spotShadow,Ye.rectAreaLights.value=z.state.rectArea,Ye.ltc_1.value=z.state.rectAreaLTC1,Ye.ltc_2.value=z.state.rectAreaLTC2,Ye.pointLights.value=z.state.point,Ye.pointLightShadows.value=z.state.pointShadow,Ye.hemisphereLights.value=z.state.hemi,Ye.directionalShadowMap.value=z.state.directionalShadowMap,Ye.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ye.spotShadowMap.value=z.state.spotShadowMap,Ye.spotLightMatrix.value=z.state.spotLightMatrix,Ye.spotLightMap.value=z.state.spotLightMap,Ye.pointShadowMap.value=z.state.pointShadowMap,Ye.pointShadowMatrix.value=z.state.pointShadowMatrix),j.currentProgram=$e,j.uniformsList=null,$e}function au(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=ea.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function lu(T,O){const W=we.get(T);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Bg(T,O,W,j,z){O.isScene!==!0&&(O=at),Ce.resetTextureUnits();const ve=O.fog,De=j.isMeshStandardMaterial?O.environment:null,ke=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Wt,Ge=(j.isMeshStandardMaterial?w:st).get(j.envMap||De),rt=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,$e=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ye=!!W.morphAttributes.position,It=!!W.morphAttributes.normal,on=!!W.morphAttributes.color;let Bt=Ti;j.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Bt=v.toneMapping);const Gn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,At=Gn!==void 0?Gn.length:0,Ze=we.get(j),Fa=p.state.lights;if(H===!0&&(oe===!0||T!==N)){const pn=T===N&&j.id===P;de.setState(j,T,pn)}let Et=!1;j.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Fa.state.version||Ze.outputColorSpace!==ke||z.isBatchedMesh&&Ze.batching===!1||!z.isBatchedMesh&&Ze.batching===!0||z.isInstancedMesh&&Ze.instancing===!1||!z.isInstancedMesh&&Ze.instancing===!0||z.isSkinnedMesh&&Ze.skinning===!1||!z.isSkinnedMesh&&Ze.skinning===!0||z.isInstancedMesh&&Ze.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ze.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ze.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ze.instancingMorph===!1&&z.morphTexture!==null||Ze.envMap!==Ge||j.fog===!0&&Ze.fog!==ve||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==de.numPlanes||Ze.numIntersection!==de.numIntersection)||Ze.vertexAlphas!==rt||Ze.vertexTangents!==$e||Ze.morphTargets!==Ye||Ze.morphNormals!==It||Ze.morphColors!==on||Ze.toneMapping!==Bt||G.isWebGL2===!0&&Ze.morphTargetsCount!==At)&&(Et=!0):(Et=!0,Ze.__version=j.version);let Ui=Ze.currentProgram;Et===!0&&(Ui=co(j,O,z));let cu=!1,fs=!1,Ba=!1;const jt=Ui.getUniforms(),Oi=Ze.uniforms;if(Z.useProgram(Ui.program)&&(cu=!0,fs=!0,Ba=!0),j.id!==P&&(P=j.id,fs=!0),cu||N!==T){jt.setValue(F,"projectionMatrix",T.projectionMatrix),jt.setValue(F,"viewMatrix",T.matrixWorldInverse);const pn=jt.map.cameraPosition;pn!==void 0&&pn.setValue(F,xe.setFromMatrixPosition(T.matrixWorld)),G.logarithmicDepthBuffer&&jt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&jt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),N!==T&&(N=T,fs=!0,Ba=!0)}if(z.isSkinnedMesh){jt.setOptional(F,z,"bindMatrix"),jt.setOptional(F,z,"bindMatrixInverse");const pn=z.skeleton;pn&&(G.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),jt.setValue(F,"boneTexture",pn.boneTexture,Ce)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(jt.setOptional(F,z,"batchingTexture"),jt.setValue(F,"batchingTexture",z._matricesTexture,Ce));const Va=W.morphAttributes;if((Va.position!==void 0||Va.normal!==void 0||Va.color!==void 0&&G.isWebGL2===!0)&&ue.update(z,W,Ui),(fs||Ze.receiveShadow!==z.receiveShadow)&&(Ze.receiveShadow=z.receiveShadow,jt.setValue(F,"receiveShadow",z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Oi.envMap.value=Ge,Oi.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),fs&&(jt.setValue(F,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&Vg(Oi,Ba),ve&&j.fog===!0&&se.refreshFogUniforms(Oi,ve),se.refreshMaterialUniforms(Oi,j,X,V,ge),ea.upload(F,au(Ze),Oi,Ce)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ea.upload(F,au(Ze),Oi,Ce),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&jt.setValue(F,"center",z.center),jt.setValue(F,"modelViewMatrix",z.modelViewMatrix),jt.setValue(F,"normalMatrix",z.normalMatrix),jt.setValue(F,"modelMatrix",z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const pn=j.uniformsGroups;for(let ka=0,zg=pn.length;ka<zg;ka++)if(G.isWebGL2){const uu=pn[ka];Le.update(uu,Ui),Le.bind(uu,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function Vg(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function kg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,O,W){we.get(T.texture).__webglTexture=O,we.get(T.depthTexture).__webglTexture=W;const j=we.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const W=we.get(T);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,W=0){S=T,E=O,A=W;let j=!0,z=null,ve=!1,De=!1;if(T){const Ge=we.get(T);Ge.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(F.FRAMEBUFFER,null),j=!1):Ge.__webglFramebuffer===void 0?Ce.setupRenderTarget(T):Ge.__hasExternalTextures&&Ce.rebindTextures(T,we.get(T.texture).__webglTexture,we.get(T.depthTexture).__webglTexture);const rt=T.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(De=!0);const $e=we.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($e[O])?z=$e[O][W]:z=$e[O],ve=!0):G.isWebGL2&&T.samples>0&&Ce.useMultisampledRTT(T)===!1?z=we.get(T).__webglMultisampledFramebuffer:Array.isArray($e)?z=$e[W]:z=$e,b.copy(T.viewport),R.copy(T.scissor),K=T.scissorTest}else b.copy(q).multiplyScalar(X).floor(),R.copy(te).multiplyScalar(X).floor(),K=fe;if(Z.bindFramebuffer(F.FRAMEBUFFER,z)&&G.drawBuffers&&j&&Z.drawBuffers(T,z),Z.viewport(b),Z.scissor(R),Z.setScissorTest(K),ve){const Ge=we.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ge.__webglTexture,W)}else if(De){const Ge=we.get(T.texture),rt=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.__webglTexture,W||0,rt)}P=-1},this.readRenderTargetPixels=function(T,O,W,j,z,ve,De){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(ke=ke[De]),ke){Z.bindFramebuffer(F.FRAMEBUFFER,ke);try{const Ge=T.texture,rt=Ge.format,$e=Ge.type;if(rt!==vn&&Ie.convert(rt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=$e===qs&&(re.has("EXT_color_buffer_half_float")||G.isWebGL2&&re.has("EXT_color_buffer_float"));if($e!==Ai&&Ie.convert($e)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===An&&(G.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-j&&W>=0&&W<=T.height-z&&F.readPixels(O,W,j,z,Ie.convert(rt),Ie.convert($e),ve)}finally{const Ge=S!==null?we.get(S).__webglFramebuffer:null;Z.bindFramebuffer(F.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(T,O,W=0){const j=Math.pow(2,-W),z=Math.floor(O.image.width*j),ve=Math.floor(O.image.height*j);Ce.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,T.x,T.y,z,ve),Z.unbindTexture()},this.copyTextureToTexture=function(T,O,W,j=0){const z=O.image.width,ve=O.image.height,De=Ie.convert(W.format),ke=Ie.convert(W.type);Ce.setTexture2D(W,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,j,T.x,T.y,z,ve,De,ke,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,j,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,De,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,j,T.x,T.y,De,ke,O.image),j===0&&W.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(T,O,W,j,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=Math.round(T.max.x-T.min.x),De=Math.round(T.max.y-T.min.y),ke=T.max.z-T.min.z+1,Ge=Ie.convert(j.format),rt=Ie.convert(j.type);let $e;if(j.isData3DTexture)Ce.setTexture3D(j,0),$e=F.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)Ce.setTexture2DArray(j,0),$e=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const Ye=F.getParameter(F.UNPACK_ROW_LENGTH),It=F.getParameter(F.UNPACK_IMAGE_HEIGHT),on=F.getParameter(F.UNPACK_SKIP_PIXELS),Bt=F.getParameter(F.UNPACK_SKIP_ROWS),Gn=F.getParameter(F.UNPACK_SKIP_IMAGES),At=W.isCompressedTexture?W.mipmaps[z]:W.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,At.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,T.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,T.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,T.min.z),W.isDataTexture||W.isData3DTexture?F.texSubImage3D($e,z,O.x,O.y,O.z,ve,De,ke,Ge,rt,At.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D($e,z,O.x,O.y,O.z,ve,De,ke,Ge,At.data):F.texSubImage3D($e,z,O.x,O.y,O.z,ve,De,ke,Ge,rt,At),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ye),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,It),F.pixelStorei(F.UNPACK_SKIP_PIXELS,on),F.pixelStorei(F.UNPACK_SKIP_ROWS,Bt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Gn),z===0&&j.generateMipmaps&&F.generateMipmap($e),Z.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ce.setTextureCube(T,0):T.isData3DTexture?Ce.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ce.setTexture2DArray(T,0):Ce.setTexture2D(T,0),Z.unbindTexture()},this.resetState=function(){E=0,A=0,S=null,Z.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===$c?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===Da?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class BC extends Ag{}BC.prototype.isWebGL1Renderer=!0;class VC extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kC{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return lg("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new I;class Jc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Th=new I,Ah=new gt,wh=new gt,zC=new I,Rh=new et,zo=new I,Cl=new zn,Ch=new et,Pl=new io;class HC extends cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ad,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new oi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zo),this.boundingBox.expandByPoint(zo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zo),this.boundingSphere.expandByPoint(zo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cl.copy(this.boundingSphere),Cl.applyMatrix4(r),e.ray.intersectsSphere(Cl)!==!1&&(Ch.copy(r).invert(),Pl.copy(e.ray).applyMatrix4(Ch),!(this.boundingBox!==null&&Pl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ad?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$E?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Ah.fromBufferAttribute(r.attributes.skinIndex,e),wh.fromBufferAttribute(r.attributes.skinWeight,e),Th.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=wh.getComponent(s);if(o!==0){const a=Ah.getComponent(s);Rh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(zC.copy(Th).applyMatrix4(Rh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class wg extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rg extends Ht{constructor(e=null,t=1,n=1,r,s,o,a,l,c=kt,u=kt,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ph=new et,GC=new et;class Qc{constructor(e=[],t=[]){this.uuid=Cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:GC;Ph.multiplyMatrices(a,t[s]),Ph.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Qc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Rg(t,e,e,vn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new wg),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class _c extends nn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ir=new et,Lh=new et,Ho=[],Dh=new oi,WC=new et,Ss=new cn,Es=new zn;class XC extends cn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,WC)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),Dh.copy(e.boundingBox).applyMatrix4(Ir),this.boundingBox.union(Dh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),Es.copy(e.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(Es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),e.ray.intersectsSphere(Es)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ir),Lh.multiplyMatrices(n,Ir),Ss.matrixWorld=Lh,Ss.raycast(e,Ho);for(let o=0,a=Ho.length;o<a;o++){const l=Ho[o];l.instanceId=s,l.object=this,t.push(l)}Ho.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _c(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rg(new Float32Array(r*this.count),r,this.count,Jm,An));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Cg extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ih=new I,Nh=new I,Uh=new et,Ll=new io,Go=new zn;class eu extends wt{constructor(e=new Ln,t=new Cg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ih.fromBufferAttribute(t,r-1),Nh.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ih.distanceTo(Nh);e.setAttribute("lineDistance",new bn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(r),Go.radius+=s,e.ray.intersectsSphere(Go)===!1)return;Uh.copy(r).invert(),Ll.copy(e.ray).applyMatrix4(Uh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,f=new I,d=new I,h=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=m,y=x-1;v<y;v+=h){const E=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(p,E),u.fromBufferAttribute(p,A),Ll.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let v=m,y=x-1;v<y;v+=h){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Ll.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Oh=new I,Fh=new I;class jC extends eu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Oh.fromBufferAttribute(t,r),Fh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Oh.distanceTo(Fh);e.setAttribute("lineDistance",new bn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $C extends eu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pg extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bh=new et,vc=new io,Wo=new zn,Xo=new I;class YC extends wt{constructor(e=new Ln,t=new Pg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),Wo.radius+=s,e.ray.intersectsSphere(Wo)===!1)return;Bh.copy(r).invert(),vc.copy(e.ray).applyMatrix4(Bh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const p=c.getX(g);Xo.fromBufferAttribute(f,p),Vh(Xo,p,l,r,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)Xo.fromBufferAttribute(f,g),Vh(Xo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vh(i,e,t,n,r,s,o){const a=vc.distanceSqToPoint(i);if(a<t){const l=new I;vc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class tu extends Ln{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new I,d=new I,h=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const x=[],v=m/n;let y=0;m===0&&o===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const A=E/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(A+y,1-v),x.push(c++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const v=u[m][x+1],y=u[m][x],E=u[m+1][x],A=u[m+1][x+1];(m!==0||o>0)&&h.push(v,y,A),(m!==n-1||l<Math.PI)&&h.push(y,E,A)}this.setIndex(h),this.setAttribute("position",new bn(g,3)),this.setAttribute("normal",new bn(_,3)),this.setAttribute("uv",new bn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nu extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rg,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ai extends nu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function jo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qC(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function KC(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function kh(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Lg(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class so{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ZC extends so{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Id,endingEnd:Id}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nd:s=e,a=2*t-n;break;case Ud:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nd:o=e,l=2*n-t;break;case Ud:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(n-t)/(r-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,x=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-h)*p+(1.5+h)*_+.5*g,y=h*p-h*_;for(let E=0;E!==a;++E)s[E]=m*o[u+E]+x*o[c+E]+v*o[l+E]+y*o[f+E];return s}}class JC extends so{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),f=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*u;return s}}class QC extends so{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jo(t,this.TimeBufferType),this.values=jo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:jo(e.times,Array),values:jo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new QC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new JC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ZC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ks:t=this.InterpolantFactoryMethodDiscrete;break;case Jr:t=this.InterpolantFactoryMethodLinear;break;case il:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return Jr;case this.InterpolantFactoryMethodSmooth:return il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&qC(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===il,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*n,d=f-n,h=f+n;for(let g=0;g!==n;++g){const _=t[f+g];if(_!==t[d+g]||_!==t[h+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,d=o*n;for(let h=0;h!==n;++h)t[d+h]=t[f+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Jr;class ls extends Hn{}ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Ks;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Dg extends Hn{}Dg.prototype.ValueTypeName="color";class ts extends Hn{}ts.prototype.ValueTypeName="number";class eP extends so{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Bn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class sr extends Hn{InterpolantFactoryMethodLinear(e){return new eP(this.times,this.values,this.getValueSize(),e)}}sr.prototype.ValueTypeName="quaternion";sr.prototype.DefaultInterpolation=Jr;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class cs extends Hn{}cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Ks;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class ns extends Hn{}ns.prototype.ValueTypeName="vector";class tP{constructor(e,t=-1,n,r=tT){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(iP(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Hn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=KC(l);l=kh(l,1,u),c=kh(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ts(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let d=r[f];d||(r[f]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,d,h,g,_){if(h.length!==0){const p=[],m=[];Lg(h,p,m,g),p.length!==0&&_.push(new f(d,p,m))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const h={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)h[d[g].morphTargets[_]]=-1;for(const _ in h){const p=[],m=[];for(let x=0;x!==d[g].morphTargets.length;++x){const v=d[g];p.push(v.time),m.push(v.morphTarget===_?1:0)}r.push(new ts(".morphTargetInfluence["+_+"]",p,m))}l=h.length*o}else{const h=".bones["+t[f].name+"]";n(ns,h+".position",d,"pos",r),n(sr,h+".quaternion",d,"rot",r),n(ns,h+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function nP(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ts;case"vector":case"vector2":case"vector3":case"vector4":return ns;case"color":return Dg;case"quaternion":return sr;case"bool":case"boolean":return ls;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function iP(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=nP(i.type);if(i.times===void 0){const t=[],n=[];Lg(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Si={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class rP{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const sP=new rP;class us{constructor(e){this.manager=e!==void 0?e:sP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}us.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn={};class oP extends Error{constructor(e,t){super(e),this.response=t}}class Ig extends us{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Si.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:r});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Zn[e],f=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),h=d?parseInt(d):0,g=h!==0;let _=0;const p=new ReadableStream({start(m){x();function x(){f.read().then(({done:v,value:y})=>{if(v)m.close();else{_+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let A=0,S=u.length;A<S;A++){const P=u[A];P.onProgress&&P.onProgress(E)}m.enqueue(y),x()}})}}});return new Response(p)}else throw new oP(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{Si.add(e,c);const u=Zn[e];delete Zn[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=Zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Zn[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class aP extends us{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Si.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Zs("img");function l(){u(),Si.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ng extends us{constructor(e){super(e)}load(e,t,n,r){const s=new Ht,o=new aP(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ua extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Dl=new et,zh=new I,Hh=new I;class iu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qc,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(zh),Hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hh),t.updateMatrixWorld(),Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lP extends iu{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Qr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cP extends Ua{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new lP}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Gh=new et,Ts=new I,Il=new I;class uP extends iu{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ts),Il.copy(n.position),Il.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Il),n.updateMatrixWorld(),r.makeTranslation(-Ts.x,-Ts.y,-Ts.z),Gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh)}}class fP extends Ua{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new uP}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dP extends iu{constructor(){super(new Kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hP extends Ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new dP}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pP extends Ua{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fs{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class mP extends us{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Si.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Si.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Si.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Si.add(e,l),s.manager.itemStart(e)}}const ru="\\[\\]\\.:\\/",gP=new RegExp("["+ru+"]","g"),su="[^"+ru+"]",_P="[^"+ru.replace("\\.","")+"]",vP=/((?:WC+[\/:])*)/.source.replace("WC",su),xP=/(WCOD+)?/.source.replace("WCOD",_P),yP=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",su),bP=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",su),MP=new RegExp("^"+vP+xP+yP+bP+"$"),SP=["material","materials","bones","map"];class EP{constructor(e,t,n){const r=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gP,"")}static parseTrackName(e){const t=MP.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);SP.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=EP;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Wh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);const Xh={type:"change"},Nl={type:"start"},jh={type:"end"},$o=new io,$h=new vi,TP=Math.cos(70*og.DEG2RAD);class AP extends ur{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mr.ROTATE,MIDDLE:mr.DOLLY,RIGHT:mr.PAN},this.touches={ONE:gr.ROTATE,TWO:gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Oe),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Oe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Xh),n.update(),s=r.NONE},this.update=function(){const C=new I,ne=new Bn().setFromUnitVectors(e.up,new I(0,1,0)),Re=ne.clone().invert(),D=new I,ce=new Bn,B=new I,ae=2*Math.PI;return function(ot=null){const dt=n.object.position;C.copy(dt).sub(n.target),C.applyQuaternion(ne),a.setFromVector3(C),n.autoRotate&&s===r.NONE&&K(b(ot)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let mt=n.minAzimuthAngle,Pt=n.maxAzimuthAngle;isFinite(mt)&&isFinite(Pt)&&(mt<-Math.PI?mt+=ae:mt>Math.PI&&(mt-=ae),Pt<-Math.PI?Pt+=ae:Pt>Math.PI&&(Pt-=ae),mt<=Pt?a.theta=Math.max(mt,Math.min(Pt,a.theta)):a.theta=a.theta>(mt+Pt)/2?Math.max(mt,a.theta):Math.min(Pt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ut=!1;if(n.zoomToCursor&&A||n.object.isOrthographicCamera)a.radius=q(a.radius);else{const bt=a.radius;a.radius=q(a.radius*c),ut=bt!=a.radius}if(C.setFromSpherical(a),C.applyQuaternion(Re),dt.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&A){let bt=null;if(n.object.isPerspectiveCamera){const Xt=C.length();bt=q(Xt*c);const Ni=Xt-bt;n.object.position.addScaledVector(y,Ni),n.object.updateMatrixWorld(),ut=!!Ni}else if(n.object.isOrthographicCamera){const Xt=new I(E.x,E.y,0);Xt.unproject(n.object);const Ni=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ut=Ni!==n.object.zoom;const ao=new I(E.x,E.y,0);ao.unproject(n.object),n.object.position.sub(ao).add(Xt),n.object.updateMatrixWorld(),bt=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;bt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(bt).add(n.object.position):($o.origin.copy(n.object.position),$o.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot($o.direction))<TP?e.lookAt(n.target):($h.setFromNormalAndCoplanarPoint(n.object.up,n.target),$o.intersectPlane($h,n.target))))}else if(n.object.isOrthographicCamera){const bt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),bt!==n.object.zoom&&(n.object.updateProjectionMatrix(),ut=!0)}return c=1,A=!1,ut||D.distanceToSquared(n.object.position)>o||8*(1-ce.dot(n.object.quaternion))>o||B.distanceToSquared(n.target)>o?(n.dispatchEvent(Xh),D.copy(n.object.position),ce.copy(n.object.quaternion),B.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",je),n.domElement.removeEventListener("pointerdown",Ce),n.domElement.removeEventListener("pointercancel",w),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",st),n.domElement.removeEventListener("pointerup",w),n.domElement.getRootNode().removeEventListener("keydown",se,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Oe),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Wh,l=new Wh;let c=1;const u=new I,f=new Ve,d=new Ve,h=new Ve,g=new Ve,_=new Ve,p=new Ve,m=new Ve,x=new Ve,v=new Ve,y=new I,E=new Ve;let A=!1;const S=[],P={};let N=!1;function b(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function R(C){const ne=Math.abs(C*.01);return Math.pow(.95,n.zoomSpeed*ne)}function K(C){l.theta-=C}function Q(C){l.phi-=C}const L=function(){const C=new I;return function(Re,D){C.setFromMatrixColumn(D,0),C.multiplyScalar(-Re),u.add(C)}}(),k=function(){const C=new I;return function(Re,D){n.screenSpacePanning===!0?C.setFromMatrixColumn(D,1):(C.setFromMatrixColumn(D,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(Re),u.add(C)}}(),V=function(){const C=new I;return function(Re,D){const ce=n.domElement;if(n.object.isPerspectiveCamera){const B=n.object.position;C.copy(B).sub(n.target);let ae=C.length();ae*=Math.tan(n.object.fov/2*Math.PI/180),L(2*Re*ae/ce.clientHeight,n.object.matrix),k(2*D*ae/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(Re*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),k(D*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(C,ne){if(!n.zoomToCursor)return;A=!0;const Re=n.domElement.getBoundingClientRect(),D=C-Re.left,ce=ne-Re.top,B=Re.width,ae=Re.height;E.x=D/B*2-1,E.y=-(ce/ae)*2+1,y.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function te(C){f.set(C.clientX,C.clientY)}function fe(C){U(C.clientX,C.clientX),m.set(C.clientX,C.clientY)}function _e(C){g.set(C.clientX,C.clientY)}function H(C){d.set(C.clientX,C.clientY),h.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ne=n.domElement;K(2*Math.PI*h.x/ne.clientHeight),Q(2*Math.PI*h.y/ne.clientHeight),f.copy(d),n.update()}function oe(C){x.set(C.clientX,C.clientY),v.subVectors(x,m),v.y>0?X(R(v.y)):v.y<0&&$(R(v.y)),m.copy(x),n.update()}function ge(C){_.set(C.clientX,C.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),V(p.x,p.y),g.copy(_),n.update()}function ze(C){U(C.clientX,C.clientY),C.deltaY<0?$(R(C.deltaY)):C.deltaY>0&&X(R(C.deltaY)),n.update()}function Pe(C){let ne=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),ne=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),ne=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),ne=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),ne=!0;break}ne&&(C.preventDefault(),n.update())}function xe(C){if(S.length===1)f.set(C.pageX,C.pageY);else{const ne=Se(C),Re=.5*(C.pageX+ne.x),D=.5*(C.pageY+ne.y);f.set(Re,D)}}function at(C){if(S.length===1)g.set(C.pageX,C.pageY);else{const ne=Se(C),Re=.5*(C.pageX+ne.x),D=.5*(C.pageY+ne.y);g.set(Re,D)}}function Be(C){const ne=Se(C),Re=C.pageX-ne.x,D=C.pageY-ne.y,ce=Math.sqrt(Re*Re+D*D);m.set(0,ce)}function F(C){n.enableZoom&&Be(C),n.enablePan&&at(C)}function Tt(C){n.enableZoom&&Be(C),n.enableRotate&&xe(C)}function re(C){if(S.length==1)d.set(C.pageX,C.pageY);else{const Re=Se(C),D=.5*(C.pageX+Re.x),ce=.5*(C.pageY+Re.y);d.set(D,ce)}h.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ne=n.domElement;K(2*Math.PI*h.x/ne.clientHeight),Q(2*Math.PI*h.y/ne.clientHeight),f.copy(d)}function G(C){if(S.length===1)_.set(C.pageX,C.pageY);else{const ne=Se(C),Re=.5*(C.pageX+ne.x),D=.5*(C.pageY+ne.y);_.set(Re,D)}p.subVectors(_,g).multiplyScalar(n.panSpeed),V(p.x,p.y),g.copy(_)}function Z(C){const ne=Se(C),Re=C.pageX-ne.x,D=C.pageY-ne.y,ce=Math.sqrt(Re*Re+D*D);x.set(0,ce),v.set(0,Math.pow(x.y/m.y,n.zoomSpeed)),X(v.y),m.copy(x);const B=(C.pageX+ne.x)*.5,ae=(C.pageY+ne.y)*.5;U(B,ae)}function be(C){n.enableZoom&&Z(C),n.enablePan&&G(C)}function we(C){n.enableZoom&&Z(C),n.enableRotate&&re(C)}function Ce(C){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",st),n.domElement.addEventListener("pointerup",w)),!it(C)&&(ue(C),C.pointerType==="touch"?de(C):M(C)))}function st(C){n.enabled!==!1&&(C.pointerType==="touch"?pe(C):Y(C))}function w(C){switch(Ct(C),S.length){case 0:n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",st),n.domElement.removeEventListener("pointerup",w),n.dispatchEvent(jh),s=r.NONE;break;case 1:const ne=S[0],Re=P[ne];de({pointerId:ne,pageX:Re.x,pageY:Re.y});break}}function M(C){let ne;switch(C.button){case 0:ne=n.mouseButtons.LEFT;break;case 1:ne=n.mouseButtons.MIDDLE;break;case 2:ne=n.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case mr.DOLLY:if(n.enableZoom===!1)return;fe(C),s=r.DOLLY;break;case mr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;_e(C),s=r.PAN}else{if(n.enableRotate===!1)return;te(C),s=r.ROTATE}break;case mr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;te(C),s=r.ROTATE}else{if(n.enablePan===!1)return;_e(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Nl)}function Y(C){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;H(C);break;case r.DOLLY:if(n.enableZoom===!1)return;oe(C);break;case r.PAN:if(n.enablePan===!1)return;ge(C);break}}function ee(C){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(C.preventDefault(),n.dispatchEvent(Nl),ze(le(C)),n.dispatchEvent(jh))}function le(C){const ne=C.deltaMode,Re={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(ne){case 1:Re.deltaY*=16;break;case 2:Re.deltaY*=100;break}return C.ctrlKey&&!N&&(Re.deltaY*=10),Re}function se(C){C.key==="Control"&&(N=!0,n.domElement.getRootNode().addEventListener("keyup",Xe,{passive:!0,capture:!0}))}function Xe(C){C.key==="Control"&&(N=!1,n.domElement.getRootNode().removeEventListener("keyup",Xe,{passive:!0,capture:!0}))}function Oe(C){n.enabled===!1||n.enablePan===!1||Pe(C)}function de(C){switch(Ie(C),S.length){case 1:switch(n.touches.ONE){case gr.ROTATE:if(n.enableRotate===!1)return;xe(C),s=r.TOUCH_ROTATE;break;case gr.PAN:if(n.enablePan===!1)return;at(C),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case gr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(C),s=r.TOUCH_DOLLY_PAN;break;case gr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Tt(C),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Nl)}function pe(C){switch(Ie(C),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;re(C),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;G(C),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;be(C),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;we(C),n.update();break;default:s=r.NONE}}function je(C){n.enabled!==!1&&C.preventDefault()}function ue(C){S.push(C.pointerId)}function Ct(C){delete P[C.pointerId];for(let ne=0;ne<S.length;ne++)if(S[ne]==C.pointerId){S.splice(ne,1);return}}function it(C){for(let ne=0;ne<S.length;ne++)if(S[ne]==C.pointerId)return!0;return!1}function Ie(C){let ne=P[C.pointerId];ne===void 0&&(ne=new Ve,P[C.pointerId]=ne),ne.set(C.pageX,C.pageY)}function Se(C){const ne=C.pointerId===S[0]?S[1]:S[0];return P[ne]}n.domElement.addEventListener("contextmenu",je),n.domElement.addEventListener("pointerdown",Ce),n.domElement.addEventListener("pointercancel",w),n.domElement.addEventListener("wheel",ee,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",se,{passive:!0,capture:!0}),this.update()}}function Yh(i,e){if(e===nT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===dc||e===ig){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===dc)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class wP extends us{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new DP(t)}),this.register(function(t){return new zP(t)}),this.register(function(t){return new HP(t)}),this.register(function(t){return new GP(t)}),this.register(function(t){return new NP(t)}),this.register(function(t){return new UP(t)}),this.register(function(t){return new OP(t)}),this.register(function(t){return new FP(t)}),this.register(function(t){return new LP(t)}),this.register(function(t){return new BP(t)}),this.register(function(t){return new IP(t)}),this.register(function(t){return new kP(t)}),this.register(function(t){return new VP(t)}),this.register(function(t){return new CP(t)}),this.register(function(t){return new WP(t)}),this.register(function(t){return new XP(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Fs.extractUrlBase(e);o=Fs.resolveURL(c,this.path)}else o=Fs.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ig(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ug){try{o[ct.KHR_BINARY_GLTF]=new jP(e)}catch(f){r&&r(f);return}s=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new sL(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(f){case ct.KHR_MATERIALS_UNLIT:o[f]=new PP;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[f]=new $P(s,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[f]=new YP;break;case ct.KHR_MESH_QUANTIZATION:o[f]=new qP;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function RP(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class CP{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new We(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Wt);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new hP(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new fP(u),c.distance=f;break;case"spot":c=new cP(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,xi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class PP{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return Ki}extendParams(e,t,n){const r=[];e.color=new We(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,en))}return Promise.all(r)}}class LP{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class DP{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(a,a)}return Promise.all(s)}}class IP{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class NP{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,en)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class UP{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class OP{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(a[0],a[1],a[2],Wt),Promise.all(s)}}class FP{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class BP{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(a[0],a[1],a[2],Wt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,en)),Promise.all(s)}}class VP{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class kP{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ai}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class zP{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class HP{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class GP{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class WP{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,r.mode,r.filter).then(function(h){return h.buffer}):o.ready.then(function(){const h=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(h),u,f,d,r.mode,r.filter),h})})}else return null}}class XP{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==gn.TRIANGLES&&c.mode!==gn.TRIANGLE_STRIP&&c.mode!==gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],d=c[0].count,h=[];for(const g of f){const _=new et,p=new I,m=new Bn,x=new I(1,1,1),v=new XC(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,_.compose(p,m,x));for(const y in l)if(y==="_COLOR_0"){const E=l[y];v.instanceColor=new _c(E.array,E.itemSize,E.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);wt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),h.push(v)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const Ug="glTF",As=12,qh={JSON:1313821514,BIN:5130562};class jP{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,As),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ug)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-As,s=new DataView(e,As);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===qh.JSON){const c=new Uint8Array(e,As+o,a);this.content=n.decode(c)}else if(l===qh.BIN){const c=As+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $P{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=xc[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=xc[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],h=jr[d.componentType];c[f]=h.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,d){r.decodeDracoFile(u,function(h){for(const g in h.attributes){const _=h.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}f(h)},a,c,Wt,d)})})}}class YP{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class qP{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class Og extends so{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(n-t)/u,d=f*f,h=d*f,g=e*c,_=g-c,p=-2*h+3*d,m=h-d,x=1-p,v=m-d+f;for(let y=0;y!==a;y++){const E=o[_+y+a],A=o[_+y+l]*u,S=o[g+y+a],P=o[g+y]*u;s[y]=x*E+v*A+p*S+m*P}return s}}const KP=new Bn;class ZP extends Og{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return KP.fromArray(s).normalize().toArray(s),s}}const gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kh={9728:kt,9729:qt,9984:fc,9985:Qo,9986:Ur,9987:ei},Zh={33071:_n,33648:va,10497:Kr},Ul={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},JP={CUBICSPLINE:void 0,LINEAR:Jr,STEP:Ks},Ol={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function QP(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new nu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),i.DefaultMaterial}function Wi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function xi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function eL(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(d)}if(r){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(d)}if(s){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],d=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function tL(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function nL(i){let e;const t=i.extensions&&i.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fl(t.attributes):e=i.indices+":"+Fl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Fl(i.targets[n]);return e}function Fl(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function yc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function iL(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const rL=new et;class sL{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new RP,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new Ng(this.options.manager):this.textureLoader=new mP(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ig(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Wi(s,a,r),xi(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Fs.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Ul[r.type],a=jr[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new nn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Ul[r.type],c=jr[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,d=r.byteOffset||0,h=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,p;if(h&&h!==f){const m=Math.floor(d/h),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let v=t.cache.get(x);v||(_=new c(a,m*h,r.count*h/u),v=new kC(_,h/u),t.cache.add(x,v)),p=new Jc(v,l,d%h/u,g)}else a===null?_=new c(r.count*l):_=new c(a,d,r.count*l),p=new nn(_,l,g);if(r.sparse!==void 0){const m=Ul.SCALAR,x=jr[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,E=new x(o[1],v,r.sparse.count*m),A=new c(o[2],y,r.sparse.count*l);a!==null&&(p=new nn(p.array.slice(),p.itemSize,p.normalized));for(let S=0,P=E.length;S<P;S++){const N=E[S];if(p.setX(N,A[S*l]),l>=2&&p.setY(N,A[S*l+1]),l>=3&&p.setZ(N,A[S*l+2]),l>=4&&p.setW(N,A[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Kh[d.magFilter]||qt,u.minFilter=Kh[d.minFilter]||ei,u.wrapS=Zh[d.wrapS]||Kr,u.wrapT=Zh[d.wrapT]||Kr,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(d,h){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Ht(_);p.needsUpdate=!0,d(p)}),t.load(Fs.resolveURL(f,s.path),g,void 0,h)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||iL(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ct.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Pg,On.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Cg,On.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return nu}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){const f=r[ct.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new We(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Wt),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,en)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=In);const u=s.alphaMode||Ol.OPAQUE;if(u===Ol.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ol.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ki&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ve(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Ki&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ki){const f=s.emissiveFactor;a.emissive=new We().setRGB(f[0],f[1],f[2],Wt)}return s.emissiveTexture!==void 0&&o!==Ki&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,en)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),xi(f,s),t.associations.set(f,{materials:e}),s.extensions&&Wi(r,f,s),f})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Jh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=nL(c),f=r[u];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Jh(new Ln,c,t),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?QP(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let h=0,g=u.length;h<g;h++){const _=u[h],p=o[h];let m;const x=c[h];if(p.mode===gn.TRIANGLES||p.mode===gn.TRIANGLE_STRIP||p.mode===gn.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new HC(_,x):new cn(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===gn.TRIANGLE_STRIP?m.geometry=Yh(m.geometry,ig):p.mode===gn.TRIANGLE_FAN&&(m.geometry=Yh(m.geometry,dc));else if(p.mode===gn.LINES)m=new jC(_,x);else if(p.mode===gn.LINE_STRIP)m=new eu(_,x);else if(p.mode===gn.LINE_LOOP)m=new $C(_,x);else if(p.mode===gn.POINTS)m=new YC(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&tL(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),xi(m,s),p.extensions&&Wi(r,m,p),t.assignFinalMaterial(m),f.push(m)}for(let h=0,g=f.length;h<g;h++)t.associations.set(f[h],{meshes:e,primitives:h});if(f.length===1)return s.extensions&&Wi(r,f[0],s),f[0];const d=new Zi;s.extensions&&Wi(r,d,s),t.associations.set(d,{meshes:e});for(let h=0,g=f.length;h<g;h++)d.add(f[h]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(og.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Kc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const d=new et;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Qc(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,d=r.channels.length;f<d;f++){const h=r.channels[f],g=r.samplers[h.sampler],_=h.target,p=_.node,m=r.parameters!==void 0?r.parameters[g.input]:g.input,x=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const d=f[0],h=f[1],g=f[2],_=f[3],p=f[4],m=[];for(let x=0,v=d.length;x<v;x++){const y=d[x],E=h[x],A=g[x],S=_[x],P=p[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const N=n._createAnimationTracks(y,E,A,S,P);if(N)for(let b=0;b<N.length;b++)m.push(N[b])}return new tP(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],d=c[2];d!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(d,rL)});for(let h=0,g=f.length;h<g;h++)u.add(f[h]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new wg:c.length>1?u=new Zi:c.length===1?u=c[0]:u=new wt,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),xi(u,s),s.extensions&&Wi(n,u,s),s.matrix!==void 0){const f=new et;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Zi;n.name&&(s.name=r.createUniqueName(n.name)),xi(s,n),n.extensions&&Wi(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[d,h]of r.associations)(d instanceof On||d instanceof Ht)&&f.set(d,h);return u.traverse(d=>{const h=r.associations.get(d);h!=null&&f.set(d,h)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];gi[s.path]===gi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(gi[s.path]){case gi.weights:c=ts;break;case gi.rotation:c=sr;break;case gi.position:case gi.scale:c=ns;break;default:switch(n.itemSize){case 1:c=ts;break;case 2:case 3:default:c=ns;break}break}const u=r.interpolation!==void 0?JP[r.interpolation]:Jr,f=this._getArrayFromAccessor(n);for(let d=0,h=l.length;d<h;d++){const g=new c(l[d]+"."+gi[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=yc(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof sr?ZP:Og;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function oL(i,e,t){const n=e.attributes,r=new oi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=yc(jr[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],h=d.min,g=d.max;if(h!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),d.normalized){const _=yc(jr[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new zn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Jh(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=xc[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return ft.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),xi(i,e),oL(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?eL(i,e.targets,t):i})}new uE({target:document.getElementById("app")});const aL=new wP,lL=new Ng;lL.crossOrigin="Anonymous";const Oa=new VC;Oa.background=new We(132631);const Fn=new tn(75,window.innerWidth/window.innerHeight,.1,1e3);Fn.position.setX(20);Fn.position.setY(10);Fn.position.setZ(20);const oo=new Ag({canvas:document.querySelector("#bg")});oo.setPixelRatio(window.devicePixelRatio);oo.setSize(window.innerWidth,window.innerHeight);const cL=new pP(16777215);Oa.add(cL);const uL=new AP(Fn,oo.domElement);let tr;aL.load(fE,function(i){tr=i.scene,Oa.add(tr),tr.scale.set(3,3,3)},void 0,function(i){console.error(i)});const fL=1,dL=6,hL=6;new tu(fL,dL,hL);function pL(){const i=document.body.getBoundingClientRect().top;Fn.position.x=i*.005+20,Fn.position.y=i*5e-4+10,Fn.position.z=i*.005+20,tr.rotation.y=i*-5e-4,tr.position.y=i*.005}function Fg(){requestAnimationFrame(Fg),_L(),bc&&mL()}function mL(){tr&&(tr.rotation.y+=.001)}let bc=!1;window.onscroll=function(){pL();const i=document.documentElement.scrollHeight-window.innerHeight,e=document.documentElement.scrollTop;i-e<=2?bc=!0:bc=!1};window.addEventListener("resize",gL,!1);function gL(){Fn.aspect=window.innerWidth/window.innerHeight,Fn.updateProjectionMatrix(),oo.setSize(window.innerWidth,window.innerHeight)}function _L(){uL.update(),oo.render(Oa,Fn)}Fg();
