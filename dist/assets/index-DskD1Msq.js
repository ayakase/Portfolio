var Eg=Object.defineProperty;var Tg=(i,e,t)=>e in i?Eg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Fa=(i,e,t)=>(Tg(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Kt(){}function Qn(i,e){for(const t in e)i[t]=e[t];return i}function Fh(i){return i()}function ru(){return Object.create(null)}function ni(i){i.forEach(Fh)}function xa(i){return typeof i=="function"}function tt(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}let ao;function Ns(i,e){return i===e?!0:(ao||(ao=document.createElement("a")),ao.href=e,i===ao.href)}function Ag(i){return Object.keys(i).length===0}function _c(i,...e){if(i==null){for(const n of e)n(void 0);return Kt}const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function _n(i){let e;return _c(i,t=>e=t)(),e}function qt(i,e,t){i.$$.on_destroy.push(_c(e,t))}function _t(i,e,t,n){if(i){const r=Bh(i,e,t,n);return i[0](r)}}function Bh(i,e,t,n){return i[1]&&n?Qn(t.ctx.slice(),i[1](n(e))):t.ctx}function vt(i,e,t,n){if(i[2]&&n){const r=i[2](n(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function xt(i,e,t,n,r,s){if(r){const o=Bh(e,t,n,s);i.p(o,r)}}function yt(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Us(i){const e={};for(const t in i)t[0]!=="$"&&(e[t]=i[t]);return e}function su(i,e){const t={};e=new Set(e);for(const n in i)!e.has(n)&&n[0]!=="$"&&(t[n]=i[n]);return t}function Jr(i){return i&&xa(i.destroy)?i.destroy:Kt}function rt(i,e){i.appendChild(e)}function Ae(i,e,t){i.insertBefore(e,t||null)}function Se(i){i.parentNode&&i.parentNode.removeChild(i)}function Vh(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function Ze(i){return document.createElement(i)}function Rt(i){return document.createTextNode(i)}function pt(){return Rt(" ")}function Ti(){return Rt("")}function Ss(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function Ie(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}const wg=["width","height"];function Qo(i,e){const t=Object.getOwnPropertyDescriptors(i.__proto__);for(const n in e)e[n]==null?i.removeAttribute(n):n==="style"?i.style.cssText=e[n]:n==="__value"?i.value=i[n]=e[n]:t[n]&&t[n].set&&wg.indexOf(n)===-1?i[n]=e[n]:Ie(i,n,e[n])}function Rg(i){return Array.from(i.childNodes)}function Hr(i,e){e=""+e,i.data!==e&&(i.data=e)}function ou(i,e,t,n){t==null?i.style.removeProperty(e):i.style.setProperty(e,t,n?"important":"")}function ea(i,e){return new i(e)}let Os;function Es(i){Os=i}function Qr(){if(!Os)throw new Error("Function called outside component initialization");return Os}function Cg(i){Qr().$$.before_update.push(i)}function qs(i){Qr().$$.on_mount.push(i)}function vc(i){Qr().$$.after_update.push(i)}function ir(i){Qr().$$.on_destroy.push(i)}function Il(i,e){return Qr().$$.context.set(i,e),e}function kt(i){return Qr().$$.context.get(i)}const Pr=[],Fs=[];let Ur=[];const Nl=[],kh=Promise.resolve();let Ul=!1;function zh(){Ul||(Ul=!0,kh.then(Gh))}function Hh(){return zh(),kh}function Ol(i){Ur.push(i)}function Pg(i){Nl.push(i)}const Ba=new Set;let ar=0;function Gh(){if(ar!==0)return;const i=Os;do{try{for(;ar<Pr.length;){const e=Pr[ar];ar++,Es(e),Lg(e.$$)}}catch(e){throw Pr.length=0,ar=0,e}for(Es(null),Pr.length=0,ar=0;Fs.length;)Fs.pop()();for(let e=0;e<Ur.length;e+=1){const t=Ur[e];Ba.has(t)||(Ba.add(t),t())}Ur.length=0}while(Pr.length);for(;Nl.length;)Nl.pop()();Ul=!1,Ba.clear(),Es(i)}function Lg(i){if(i.fragment!==null){i.update(),ni(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(Ol)}}function Dg(i){const e=[],t=[];Ur.forEach(n=>i.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Ur=e}const Xo=new Set;let ji;function Fn(){ji={r:0,c:[],p:ji}}function Bn(){ji.r||ni(ji.c),ji=ji.p}function ne(i,e){i&&i.i&&(Xo.delete(i),i.i(e))}function re(i,e,t,n){if(i&&i.o){if(Xo.has(i))return;Xo.add(i),ji.c.push(()=>{Xo.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function Ai(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Wh(i,e){re(i,1,1,()=>{e.delete(i.key)})}function Xh(i,e,t,n,r,s,o,a,l,c,u,f){let d=i.length,h=s.length,g=d;const _={};for(;g--;)_[i[g].key]=g;const p=[],m=new Map,x=new Map,v=[];for(g=h;g--;){const S=f(r,s,g),C=t(S);let N=o.get(C);N?n&&v.push(()=>N.p(S,e)):(N=c(C,S),N.c()),m.set(C,p[g]=N),C in _&&x.set(C,Math.abs(g-_[C]))}const y=new Set,E=new Set;function A(S){ne(S,1),S.m(a,u),o.set(S.key,S),u=S.first,h--}for(;d&&h;){const S=p[h-1],C=i[d-1],N=S.key,M=C.key;S===C?(u=S.first,d--,h--):m.has(M)?!o.has(N)||y.has(N)?A(S):E.has(M)?d--:x.get(N)>x.get(M)?(E.add(N),A(S)):(y.add(M),d--):(l(C,o),d--)}for(;d--;){const S=i[d];m.has(S.key)||l(S,o)}for(;h;)A(p[h-1]);return ni(v),p}function jh(i,e){const t={},n={},r={$$scope:1};let s=i.length;for(;s--;){const o=i[s],a=e[s];if(a){for(const l in o)l in a||(n[l]=1);for(const l in a)r[l]||(t[l]=a[l],r[l]=1);i[s]=a}else for(const l in o)r[l]=1}for(const o in n)o in t||(t[o]=void 0);return t}function Ig(i,e,t){const n=i.$$.props[e];n!==void 0&&(i.$$.bound[n]=t,t(i.$$.ctx[n]))}function we(i){i&&i.c()}function Ee(i,e,t){const{fragment:n,after_update:r}=i.$$;n&&n.m(e,t),Ol(()=>{const s=i.$$.on_mount.map(Fh).filter(xa);i.$$.on_destroy?i.$$.on_destroy.push(...s):ni(s),i.$$.on_mount=[]}),r.forEach(Ol)}function Te(i,e){const t=i.$$;t.fragment!==null&&(Dg(t.after_update),ni(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ng(i,e){i.$$.dirty[0]===-1&&(Pr.push(i),zh(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function st(i,e,t,n,r,s,o=null,a=[-1]){const l=Os;Es(i);const c=i.$$={fragment:null,ctx:[],props:s,update:Kt,not_equal:r,bound:ru(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ru(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(i,e.props||{},(f,d,...h)=>{const g=h.length?h[0]:d;return c.ctx&&r(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&Ng(i,f)),d}):[],c.update(),u=!0,ni(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=Rg(e.target);c.fragment&&c.fragment.l(f),f.forEach(Se)}else c.fragment&&c.fragment.c();e.intro&&ne(i.$$.fragment),Ee(i,e.target,e.anchor),Gh()}Es(l)}class ot{constructor(){Fa(this,"$$");Fa(this,"$$set")}$destroy(){Te(this,1),this.$destroy=Kt}$on(e,t){if(!xa(t))return Kt;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!Ag(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ug="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ug);const Og="/assets/bg-CCvSUzxT.png";function $h(i){var e,t,n="";if(typeof i=="string"||typeof i=="number")n+=i;else if(typeof i=="object")if(Array.isArray(i)){var r=i.length;for(e=0;e<r;e++)i[e]&&(t=$h(i[e]))&&(n&&(n+=" "),n+=t)}else for(t in i)i[t]&&(n&&(n+=" "),n+=t);return n}function Fg(){for(var i,e,t=0,n="",r=arguments.length;t<r;t++)(i=arguments[t])&&(e=$h(i))&&(n&&(n+=" "),n+=e);return n}const xc="-";function Bg(i){const e=kg(i),{conflictingClassGroups:t,conflictingClassGroupModifiers:n}=i;function r(o){const a=o.split(xc);return a[0]===""&&a.length!==1&&a.shift(),Yh(a,e)||Vg(o)}function s(o,a){const l=t[o]||[];return a&&n[o]?[...l,...n[o]]:l}return{getClassGroupId:r,getConflictingClassGroupIds:s}}function Yh(i,e){var o;if(i.length===0)return e.classGroupId;const t=i[0],n=e.nextPart.get(t),r=n?Yh(i.slice(1),n):void 0;if(r)return r;if(e.validators.length===0)return;const s=i.join(xc);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId}const au=/^\[(.+)\]$/;function Vg(i){if(au.test(i)){const e=au.exec(i)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function kg(i){const{theme:e,prefix:t}=i,n={nextPart:new Map,validators:[]};return Hg(Object.entries(i.classGroups),t).forEach(([s,o])=>{Fl(o,n,s,e)}),n}function Fl(i,e,t,n){i.forEach(r=>{if(typeof r=="string"){const s=r===""?e:lu(e,r);s.classGroupId=t;return}if(typeof r=="function"){if(zg(r)){Fl(r(n),e,t,n);return}e.validators.push({validator:r,classGroupId:t});return}Object.entries(r).forEach(([s,o])=>{Fl(o,lu(e,s),t,n)})})}function lu(i,e){let t=i;return e.split(xc).forEach(n=>{t.nextPart.has(n)||t.nextPart.set(n,{nextPart:new Map,validators:[]}),t=t.nextPart.get(n)}),t}function zg(i){return i.isThemeGetter}function Hg(i,e){return e?i.map(([t,n])=>{const r=n.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[t,r]}):i}function Gg(i){if(i<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,n=new Map;function r(s,o){t.set(s,o),e++,e>i&&(e=0,n=t,t=new Map)}return{get(s){let o=t.get(s);if(o!==void 0)return o;if((o=n.get(s))!==void 0)return r(s,o),o},set(s,o){t.has(s)?t.set(s,o):r(s,o)}}}const qh="!";function Wg(i){const e=i.separator,t=e.length===1,n=e[0],r=e.length;return function(o){const a=[];let l=0,c=0,u;for(let _=0;_<o.length;_++){let p=o[_];if(l===0){if(p===n&&(t||o.slice(_,_+r)===e)){a.push(o.slice(c,_)),c=_+r;continue}if(p==="/"){u=_;continue}}p==="["?l++:p==="]"&&l--}const f=a.length===0?o:o.substring(c),d=f.startsWith(qh),h=d?f.substring(1):f,g=u&&u>c?u-c:void 0;return{modifiers:a,hasImportantModifier:d,baseClassName:h,maybePostfixModifierPosition:g}}}function Xg(i){if(i.length<=1)return i;const e=[];let t=[];return i.forEach(n=>{n[0]==="["?(e.push(...t.sort(),n),t=[]):t.push(n)}),e.push(...t.sort()),e}function jg(i){return{cache:Gg(i.cacheSize),splitModifiers:Wg(i),...Bg(i)}}const $g=/\s+/;function Yg(i,e){const{splitModifiers:t,getClassGroupId:n,getConflictingClassGroupIds:r}=e,s=new Set;return i.trim().split($g).map(o=>{const{modifiers:a,hasImportantModifier:l,baseClassName:c,maybePostfixModifierPosition:u}=t(o);let f=n(u?c.substring(0,u):c),d=!!u;if(!f){if(!u)return{isTailwindClass:!1,originalClassName:o};if(f=n(c),!f)return{isTailwindClass:!1,originalClassName:o};d=!1}const h=Xg(a).join(":");return{isTailwindClass:!0,modifierId:l?h+qh:h,classGroupId:f,originalClassName:o,hasPostfixModifier:d}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:a,classGroupId:l,hasPostfixModifier:c}=o,u=a+l;return s.has(u)?!1:(s.add(u),r(l,c).forEach(f=>s.add(a+f)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function qg(){let i=0,e,t,n="";for(;i<arguments.length;)(e=arguments[i++])&&(t=Kh(e))&&(n&&(n+=" "),n+=t);return n}function Kh(i){if(typeof i=="string")return i;let e,t="";for(let n=0;n<i.length;n++)i[n]&&(e=Kh(i[n]))&&(t&&(t+=" "),t+=e);return t}function Kg(i,...e){let t,n,r,s=o;function o(l){const c=e.reduce((u,f)=>f(u),i());return t=jg(c),n=t.cache.get,r=t.cache.set,s=a,a(l)}function a(l){const c=n(l);if(c)return c;const u=Yg(l,t);return r(l,u),u}return function(){return s(qg.apply(null,arguments))}}function bt(i){const e=t=>t[i]||[];return e.isThemeGetter=!0,e}const Zh=/^\[(?:([a-z-]+):)?(.+)\]$/i,Zg=/^\d+\/\d+$/,Jg=new Set(["px","full","screen"]),Qg=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,e_=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,t_=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,n_=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,i_=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function Hn(i){return $i(i)||Jg.has(i)||Zg.test(i)}function oi(i){return es(i,"length",f_)}function $i(i){return!!i&&!Number.isNaN(Number(i))}function lo(i){return es(i,"number",$i)}function ls(i){return!!i&&Number.isInteger(Number(i))}function r_(i){return i.endsWith("%")&&$i(i.slice(0,-1))}function $e(i){return Zh.test(i)}function ai(i){return Qg.test(i)}const s_=new Set(["length","size","percentage"]);function o_(i){return es(i,s_,Jh)}function a_(i){return es(i,"position",Jh)}const l_=new Set(["image","url"]);function c_(i){return es(i,l_,h_)}function u_(i){return es(i,"",d_)}function cs(){return!0}function es(i,e,t){const n=Zh.exec(i);return n?n[1]?typeof e=="string"?n[1]===e:e.has(n[1]):t(n[2]):!1}function f_(i){return e_.test(i)&&!t_.test(i)}function Jh(){return!1}function d_(i){return n_.test(i)}function h_(i){return i_.test(i)}function p_(){const i=bt("colors"),e=bt("spacing"),t=bt("blur"),n=bt("brightness"),r=bt("borderColor"),s=bt("borderRadius"),o=bt("borderSpacing"),a=bt("borderWidth"),l=bt("contrast"),c=bt("grayscale"),u=bt("hueRotate"),f=bt("invert"),d=bt("gap"),h=bt("gradientColorStops"),g=bt("gradientColorStopPositions"),_=bt("inset"),p=bt("margin"),m=bt("opacity"),x=bt("padding"),v=bt("saturate"),y=bt("scale"),E=bt("sepia"),A=bt("skew"),S=bt("space"),C=bt("translate"),N=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto",$e,e],$=()=>[$e,e],J=()=>["",Hn,oi],D=()=>["auto",$i,$e],j=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],Z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],W=()=>["start","end","center","between","around","evenly","stretch"],q=()=>["","0",$e],Q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ie=()=>[$i,lo],de=()=>[$i,$e];return{cacheSize:500,separator:":",theme:{colors:[cs],spacing:[Hn,oi],blur:["none","",ai,$e],brightness:ie(),borderColor:[i],borderRadius:["none","","full",ai,$e],borderSpacing:$(),borderWidth:J(),contrast:ie(),grayscale:q(),hueRotate:de(),invert:q(),gap:$(),gradientColorStops:[i],gradientColorStopPositions:[r_,oi],inset:R(),margin:R(),opacity:ie(),padding:$(),saturate:ie(),scale:ie(),sepia:q(),skew:de(),space:$(),translate:$()},classGroups:{aspect:[{aspect:["auto","square","video",$e]}],container:["container"],columns:[{columns:[ai]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...j(),$e]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[_]}],"inset-x":[{"inset-x":[_]}],"inset-y":[{"inset-y":[_]}],start:[{start:[_]}],end:[{end:[_]}],top:[{top:[_]}],right:[{right:[_]}],bottom:[{bottom:[_]}],left:[{left:[_]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ls,$e]}],basis:[{basis:R()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",$e]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",ls,$e]}],"grid-cols":[{"grid-cols":[cs]}],"col-start-end":[{col:["auto",{span:["full",ls,$e]},$e]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[cs]}],"row-start-end":[{row:["auto",{span:[ls,$e]},$e]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",$e]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",$e]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...W()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...W(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...W(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[S]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[S]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",$e,e]}],"min-w":[{"min-w":[$e,e,"min","max","fit"]}],"max-w":[{"max-w":[$e,e,"none","full","min","max","fit","prose",{screen:[ai]},ai]}],h:[{h:[$e,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[$e,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[$e,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[$e,e,"auto","min","max","fit"]}],"font-size":[{text:["base",ai,oi]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",lo]}],"font-family":[{font:[cs]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",$e]}],"line-clamp":[{"line-clamp":["none",$i,lo]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Hn,$e]}],"list-image":[{"list-image":["none",$e]}],"list-style-type":[{list:["none","disc","decimal",$e]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[i]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[i]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Hn,oi]}],"underline-offset":[{"underline-offset":["auto",Hn,$e]}],"text-decoration-color":[{decoration:[i]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:$()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",$e]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",$e]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...j(),a_]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",o_]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},c_]}],"bg-color":[{bg:[i]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:V()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[Hn,$e]}],"outline-w":[{outline:[Hn,oi]}],"outline-color":[{outline:[i]}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[i]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[Hn,oi]}],"ring-offset-color":[{"ring-offset":[i]}],shadow:[{shadow:["","inner","none",ai,u_]}],"shadow-color":[{shadow:[cs]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":Z()}],"bg-blend":[{"bg-blend":Z()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",ai,$e]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[f]}],saturate:[{saturate:[v]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",$e]}],duration:[{duration:de()}],ease:[{ease:["linear","in","out","in-out",$e]}],delay:[{delay:de()}],animate:[{animate:["none","spin","ping","pulse","bounce",$e]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[ls,$e]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[A]}],"skew-y":[{"skew-y":[A]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",$e]}],accent:[{accent:["auto",i]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",$e]}],"caret-color":[{caret:[i]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":$()}],"scroll-mx":[{"scroll-mx":$()}],"scroll-my":[{"scroll-my":$()}],"scroll-ms":[{"scroll-ms":$()}],"scroll-me":[{"scroll-me":$()}],"scroll-mt":[{"scroll-mt":$()}],"scroll-mr":[{"scroll-mr":$()}],"scroll-mb":[{"scroll-mb":$()}],"scroll-ml":[{"scroll-ml":$()}],"scroll-p":[{"scroll-p":$()}],"scroll-px":[{"scroll-px":$()}],"scroll-py":[{"scroll-py":$()}],"scroll-ps":[{"scroll-ps":$()}],"scroll-pe":[{"scroll-pe":$()}],"scroll-pt":[{"scroll-pt":$()}],"scroll-pr":[{"scroll-pr":$()}],"scroll-pb":[{"scroll-pb":$()}],"scroll-pl":[{"scroll-pl":$()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",$e]}],fill:[{fill:[i,"none"]}],"stroke-w":[{stroke:[Hn,oi,lo]}],stroke:[{stroke:[i,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const m_=Kg(p_);function In(...i){return m_(Fg(i))}function g_(i){let e,t,n;const r=i[2].default,s=_t(r,i,i[1],null);return{c(){e=Ze("div"),s&&s.c(),Ie(e,"class",t=In("h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",i[0]))},m(o,a){Ae(o,e,a),s&&s.m(e,null),n=!0},p(o,[a]){s&&s.p&&(!n||a&2)&&xt(s,r,o,o[1],n?vt(r,o[1],a,null):yt(o[1]),null),(!n||a&1&&t!==(t=In("h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",o[0])))&&Ie(e,"class",t)},i(o){n||(ne(s,o),n=!0)},o(o){re(s,o),n=!1},d(o){o&&Se(e),s&&s.d(o)}}}function __(i,e,t){let{$$slots:n={},$$scope:r}=e,{className:s}=e;return i.$$set=o=>{"className"in o&&t(0,s=o.className),"$$scope"in o&&t(1,r=o.$$scope)},[s,r,n]}class v_ extends ot{constructor(e){super(),st(this,e,__,g_,tt,{className:0})}}function x_(i){let e,t,n,r,s,o,a;const l=i[8].default,c=_t(l,i,i[7],null);return{c(){e=Ze("div"),t=Ze("div"),c&&c.c(),Ie(t,"class",n=In("relative flex items-center justify-center transition-all duration-200 ease-linear",i[0])),ou(t,"transform-style","preserve-3d"),Ie(e,"class",r=In("flex items-center justify-center py-20",i[1])),ou(e,"perspective","1000px")},m(u,f){Ae(u,e,f),rt(e,t),c&&c.m(t,null),i[9](t),s=!0,o||(a=[Ss(t,"mouseenter",i[4]),Ss(t,"mousemove",i[3]),Ss(t,"mouseleave",i[5])],o=!0)},p(u,[f]){c&&c.p&&(!s||f&128)&&xt(c,l,u,u[7],s?vt(l,u[7],f,null):yt(u[7]),null),(!s||f&1&&n!==(n=In("relative flex items-center justify-center transition-all duration-200 ease-linear",u[0])))&&Ie(t,"class",n),(!s||f&2&&r!==(r=In("flex items-center justify-center py-20",u[1])))&&Ie(e,"class",r)},i(u){s||(ne(c,u),s=!0)},o(u){re(c,u),s=!1},d(u){u&&Se(e),c&&c.d(u),i[9](null),o=!1,ni(a)}}}function y_(i,e,t){let{$$slots:n={},$$scope:r}=e,{className:s}=e,{containerClassName:o=void 0}=e,{isMouseEntered:a=!1}=e,l;const c=h=>{if(!l)return;const{left:g,top:_,width:p,height:m}=l.getBoundingClientRect(),x=(h.clientX-g-p/2)/25,v=(h.clientY-_-m/2)/25;t(2,l.style.transform=`rotateY(${x}deg) rotateX(${v}deg)`,l)},u=h=>{t(6,a=!0)},f=h=>{l&&(t(6,a=!1),t(2,l.style.transform="rotateY(0deg) rotateX(0deg)",l))};function d(h){Fs[h?"unshift":"push"](()=>{l=h,t(2,l)})}return i.$$set=h=>{"className"in h&&t(0,s=h.className),"containerClassName"in h&&t(1,o=h.containerClassName),"isMouseEntered"in h&&t(6,a=h.isMouseEntered),"$$scope"in h&&t(7,r=h.$$scope)},[s,o,l,c,u,f,a,r,n,d]}class M_ extends ot{constructor(e){super(),st(this,e,y_,x_,tt,{className:0,containerClassName:1,isMouseEntered:6})}}function b_(i){let e,t,n;const r=i[11].default,s=_t(r,i,i[10],null);let o=[{class:t=In("w-fit transition duration-200 ease-linear",i[0])},i[2]],a={};for(let l=0;l<o.length;l+=1)a=Qn(a,o[l]);return{c(){e=Ze("div"),s&&s.c(),Qo(e,a)},m(l,c){Ae(l,e,c),s&&s.m(e,null),i[12](e),n=!0},p(l,[c]){s&&s.p&&(!n||c&1024)&&xt(s,r,l,l[10],n?vt(r,l[10],c,null):yt(l[10]),null),Qo(e,a=jh(o,[(!n||c&1&&t!==(t=In("w-fit transition duration-200 ease-linear",l[0])))&&{class:t},c&4&&l[2]]))},i(l){n||(ne(s,l),n=!0)},o(l){re(s,l),n=!1},d(l){l&&Se(e),s&&s.d(l),i[12](null)}}}function S_(i,e,t){let{$$slots:n={},$$scope:r}=e,{className:s}=e,{translateX:o=0}=e,{translateY:a=0}=e,{translateZ:l=0}=e,{rotateX:c=0}=e,{rotateY:u=0}=e,{rotateZ:f=0}=e,{isMouseEntered:d=!1}=e,h;const g=()=>{h&&(d?t(1,h.style.transform=`translateX(${o}px) translateY(${a}px) translateZ(${l}px) rotateX(${c}deg) rotateY(${u}deg) rotateZ(${f}deg)`,h):t(1,h.style.transform="translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",h))};function _(p){Fs[p?"unshift":"push"](()=>{h=p,t(1,h)})}return i.$$set=p=>{t(2,e=Qn(Qn({},e),Us(p))),"className"in p&&t(0,s=p.className),"translateX"in p&&t(3,o=p.translateX),"translateY"in p&&t(4,a=p.translateY),"translateZ"in p&&t(5,l=p.translateZ),"rotateX"in p&&t(6,c=p.rotateX),"rotateY"in p&&t(7,u=p.rotateY),"rotateZ"in p&&t(8,f=p.rotateZ),"isMouseEntered"in p&&t(9,d=p.isMouseEntered),"$$scope"in p&&t(10,r=p.$$scope)},i.$$.update=()=>{i.$$.dirty&512&&g()},e=Us(e),[s,h,e,o,a,l,c,u,f,d,r,n,_]}class us extends ot{constructor(e){super(),st(this,e,S_,b_,tt,{className:0,translateX:3,translateY:4,translateZ:5,rotateX:6,rotateY:7,rotateZ:8,isMouseEntered:9})}}function E_(i){let e;return{c(){e=Rt(i[0])},m(t,n){Ae(t,e,n)},p(t,n){n&1&&Hr(e,t[0])},d(t){t&&Se(e)}}}function T_(i){let e;return{c(){e=Rt(i[1])},m(t,n){Ae(t,e,n)},p(t,n){n&2&&Hr(e,t[1])},d(t){t&&Se(e)}}}function A_(i){let e,t;return{c(){e=Ze("img"),Ns(e.src,t=i[2])||Ie(e,"src",t),Ie(e,"height","1000"),Ie(e,"width","1000"),Ie(e,"class","h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"),Ie(e,"alt","thumbnail")},m(n,r){Ae(n,e,r)},p(n,r){r&4&&!Ns(e.src,t=n[2])&&Ie(e,"src",t)},d(n){n&&Se(e)}}}function cu(i){let e;return{c(){e=Rt("View Demo →")},m(t,n){Ae(t,e,n)},d(t){t&&Se(e)}}}function w_(i){let e,t=i[3]&&cu();return{c(){t&&t.c(),e=Ti()},m(n,r){t&&t.m(n,r),Ae(n,e,r)},p(n,r){n[3]?t||(t=cu(),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(n){n&&Se(e),t&&t.d(n)}}}function R_(i){let e;return{c(){e=Rt("Source code")},m(t,n){Ae(t,e,n)},d(t){t&&Se(e)}}}function C_(i){let e,t,n,r,s,o,a,l,c,u,f;return e=new us({props:{isMouseEntered:i[4],translateZ:50,className:"text-xl font-bold text-white dark:text-white",$$slots:{default:[E_]},$$scope:{ctx:i}}}),n=new us({props:{isMouseEntered:i[4],translateZ:60,className:"text-white text-sm max-w-sm mt-2 dark:text-white",$$slots:{default:[T_]},$$scope:{ctx:i}}}),s=new us({props:{isMouseEntered:i[4],translateZ:100,className:"w-full mt-4",$$slots:{default:[A_]},$$scope:{ctx:i}}}),l=new us({props:{isMouseEntered:i[4],translateZ:20,className:"px-4 py-2 rounded-xl text-xs font-normal dark:text-white",$$slots:{default:[w_]},$$scope:{ctx:i}}}),u=new us({props:{isMouseEntered:i[4],translateZ:20,className:"px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold",$$slots:{default:[R_]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment),t=pt(),we(n.$$.fragment),r=pt(),we(s.$$.fragment),o=pt(),a=Ze("div"),we(l.$$.fragment),c=pt(),we(u.$$.fragment),Ie(a,"class","mt-20 flex items-center justify-between")},m(d,h){Ee(e,d,h),Ae(d,t,h),Ee(n,d,h),Ae(d,r,h),Ee(s,d,h),Ae(d,o,h),Ae(d,a,h),Ee(l,a,null),rt(a,c),Ee(u,a,null),f=!0},p(d,h){const g={};h&16&&(g.isMouseEntered=d[4]),h&257&&(g.$$scope={dirty:h,ctx:d}),e.$set(g);const _={};h&16&&(_.isMouseEntered=d[4]),h&258&&(_.$$scope={dirty:h,ctx:d}),n.$set(_);const p={};h&16&&(p.isMouseEntered=d[4]),h&260&&(p.$$scope={dirty:h,ctx:d}),s.$set(p);const m={};h&16&&(m.isMouseEntered=d[4]),h&264&&(m.$$scope={dirty:h,ctx:d}),l.$set(m);const x={};h&16&&(x.isMouseEntered=d[4]),h&256&&(x.$$scope={dirty:h,ctx:d}),u.$set(x)},i(d){f||(ne(e.$$.fragment,d),ne(n.$$.fragment,d),ne(s.$$.fragment,d),ne(l.$$.fragment,d),ne(u.$$.fragment,d),f=!0)},o(d){re(e.$$.fragment,d),re(n.$$.fragment,d),re(s.$$.fragment,d),re(l.$$.fragment,d),re(u.$$.fragment,d),f=!1},d(d){d&&(Se(t),Se(r),Se(o),Se(a)),Te(e,d),Te(n,d),Te(s,d),Te(l),Te(u)}}}function P_(i){let e,t;return e=new v_({props:{className:"backdrop-blur-sm bg-white/25 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ",$$slots:{default:[C_]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&287&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function L_(i){let e,t,n;function r(o){i[7](o)}let s={className:"inter-var",$$slots:{default:[P_]},$$scope:{ctx:i}};return i[4]!==void 0&&(s.isMouseEntered=i[4]),e=new M_({props:s}),Fs.push(()=>Ig(e,"isMouseEntered",r)),{c(){we(e.$$.fragment)},m(o,a){Ee(e,o,a),n=!0},p(o,[a]){const l={};a&287&&(l.$$scope={dirty:a,ctx:o}),!t&&a&16&&(t=!0,l.isMouseEntered=o[4],Pg(()=>t=!1)),e.$set(l)},i(o){n||(ne(e.$$.fragment,o),n=!0)},o(o){re(e.$$.fragment,o),n=!1},d(o){Te(e,o)}}}function D_(i,e,t){let n=!1,{id:r}=e,{title:s}=e,{description:o}=e,{image:a}=e,{github:l}=e,{demo:c}=e;function u(f){n=f,t(4,n)}return i.$$set=f=>{"id"in f&&t(5,r=f.id),"title"in f&&t(0,s=f.title),"description"in f&&t(1,o=f.description),"image"in f&&t(2,a=f.image),"github"in f&&t(6,l=f.github),"demo"in f&&t(3,c=f.demo)},[s,o,a,c,n,r,l,u]}class I_ extends ot{constructor(e){super(),st(this,e,D_,L_,tt,{id:5,title:0,description:1,image:2,github:6,demo:3})}}function N_(i){let e,t;const n=i[1].default,r=_t(n,i,i[0],null);return{c(){e=Ze("nav"),r&&r.c(),Ie(e,"class","ring-2 ring-blue-500 hover:bg-sky-700 boder relative flex justify-center space-x-4 rounded-full bg-black px-8 py-6 shadow-input dark:border-white/[0.2]")},m(s,o){Ae(s,e,o),r&&r.m(e,null),t=!0},p(s,[o]){r&&r.p&&(!t||o&1)&&xt(r,n,s,s[0],t?vt(n,s[0],o,null):yt(s[0]),null)},i(s){t||(ne(r,s),t=!0)},o(s){re(r,s),t=!1},d(s){s&&Se(e),r&&r.d(s)}}}function U_(i,e,t){let{$$slots:n={},$$scope:r}=e;return i.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,n]}class O_ extends ot{constructor(e){super(),st(this,e,U_,N_,tt,{})}}function F_(i){let e,t;const n=i[2].default,r=_t(n,i,i[1],null);let s=[{class:"text-neutral-700 hover:text-white dark:text-neutral-200"},i[0]],o={};for(let a=0;a<s.length;a+=1)o=Qn(o,s[a]);return{c(){e=Ze("a"),r&&r.c(),Qo(e,o)},m(a,l){Ae(a,e,l),r&&r.m(e,null),t=!0},p(a,[l]){r&&r.p&&(!t||l&2)&&xt(r,n,a,a[1],t?vt(n,a[1],l,null):yt(a[1]),null),Qo(e,o=jh(s,[{class:"text-neutral-700 hover:text-white dark:text-neutral-200"},l&1&&a[0]]))},i(a){t||(ne(r,a),t=!0)},o(a){re(r,a),t=!1},d(a){a&&Se(e),r&&r.d(a)}}}function B_(i,e,t){let{$$slots:n={},$$scope:r}=e;return i.$$set=s=>{t(0,e=Qn(Qn({},e),Us(s))),"$$scope"in s&&t(1,r=s.$$scope)},e=Us(e),[e,r,n]}class vn extends ot{constructor(e){super(),st(this,e,B_,F_,tt,{})}}var Bs;(function(i){i[i.Entering=0]="Entering",i[i.Present=1]="Present",i[i.Exiting=2]="Exiting"})(Bs||(Bs={}));var uu;(function(i){i[i.Hide=0]="Hide",i[i.Show=1]="Show"})(uu||(uu={}));const Qh=1/60*1e3,V_=typeof performance<"u"?()=>performance.now():()=>Date.now(),ep=typeof window<"u"?i=>window.requestAnimationFrame(i):i=>setTimeout(()=>i(V_()),Qh);function k_(i){let e=[],t=[],n=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const f=u&&r,d=f?e:t;return c&&o.add(l),d.indexOf(l)===-1&&(d.push(l),f&&r&&(n=e.length)),l},cancel:l=>{const c=t.indexOf(l);c!==-1&&t.splice(c,1),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,t]=[t,e],t.length=0,n=e.length,n)for(let c=0;c<n;c++){const u=e[c];u(l),o.has(u)&&(a.schedule(u),i())}r=!1,s&&(s=!1,a.process(l))}};return a}const z_=40;let Bl=!0,Vs=!1,Vl=!1;const Or={delta:0,timestamp:0},Ks=["read","update","preRender","render","postRender"],ya=Ks.reduce((i,e)=>(i[e]=k_(()=>Vs=!0),i),{}),An=Ks.reduce((i,e)=>{const t=ya[e];return i[e]=(n,r=!1,s=!1)=>(Vs||G_(),t.schedule(n,r,s)),i},{}),Ts=Ks.reduce((i,e)=>(i[e]=ya[e].cancel,i),{}),Dr=Ks.reduce((i,e)=>(i[e]=()=>ya[e].process(Or),i),{}),H_=i=>ya[i].process(Or),tp=i=>{Vs=!1,Or.delta=Bl?Qh:Math.max(Math.min(i-Or.timestamp,z_),1),Or.timestamp=i,Vl=!0,Ks.forEach(H_),Vl=!1,Vs&&(Bl=!1,ep(tp))},G_=()=>{Vs=!0,Bl=!0,Vl||ep(tp)},ta=()=>Or;function np(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(i);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(i,n[r])&&(t[n[r]]=i[n[r]]);return t}var fu=function(){};const na=(i,e,t)=>Math.min(Math.max(t,i),e),Va=.001,W_=.01,X_=10,j_=.05,$_=1;function Y_({duration:i=800,bounce:e=.25,velocity:t=0,mass:n=1}){let r,s,o=1-e;o=na(j_,$_,o),i=na(W_,X_,i/1e3),o<1?(r=c=>{const u=c*o,f=u*i,d=u-t,h=kl(c,o),g=Math.exp(-f);return Va-d/h*g},s=c=>{const f=c*o*i,d=f*t+t,h=Math.pow(o,2)*Math.pow(c,2)*i,g=Math.exp(-f),_=kl(Math.pow(c,2),o);return(-r(c)+Va>0?-1:1)*((d-h)*g)/_}):(r=c=>{const u=Math.exp(-c*i),f=(c-t)*i+1;return-Va+u*f},s=c=>{const u=Math.exp(-c*i),f=(t-c)*(i*i);return u*f});const a=5/i,l=K_(r,s,a);if(i=i*1e3,isNaN(l))return{stiffness:100,damping:10,duration:i};{const c=Math.pow(l,2)*n;return{stiffness:c,damping:o*2*Math.sqrt(n*c),duration:i}}}const q_=12;function K_(i,e,t){let n=t;for(let r=1;r<q_;r++)n=n-i(n)/e(n);return n}function kl(i,e){return i*Math.sqrt(1-e*e)}const Z_=["duration","bounce"],J_=["stiffness","damping","mass"];function du(i,e){return e.some(t=>i[t]!==void 0)}function Q_(i){let e=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},i);if(!du(i,J_)&&du(i,Z_)){const t=Y_(i);e=Object.assign(Object.assign(Object.assign({},e),t),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}function yc(i){var{from:e=0,to:t=1,restSpeed:n=2,restDelta:r}=i,s=np(i,["from","to","restSpeed","restDelta"]);const o={done:!1,value:e};let{stiffness:a,damping:l,mass:c,velocity:u,duration:f,isResolvedFromDuration:d}=Q_(s),h=hu,g=hu;function _(){const p=u?-(u/1e3):0,m=t-e,x=l/(2*Math.sqrt(a*c)),v=Math.sqrt(a/c)/1e3;if(r===void 0&&(r=Math.min(Math.abs(t-e)/100,.4)),x<1){const y=kl(v,x);h=E=>{const A=Math.exp(-x*v*E);return t-A*((p+x*v*m)/y*Math.sin(y*E)+m*Math.cos(y*E))},g=E=>{const A=Math.exp(-x*v*E);return x*v*A*(Math.sin(y*E)*(p+x*v*m)/y+m*Math.cos(y*E))-A*(Math.cos(y*E)*(p+x*v*m)-y*m*Math.sin(y*E))}}else if(x===1)h=y=>t-Math.exp(-v*y)*(m+(p+v*m)*y);else{const y=v*Math.sqrt(x*x-1);h=E=>{const A=Math.exp(-x*v*E),S=Math.min(y*E,300);return t-A*((p+x*v*m)*Math.sinh(S)+y*m*Math.cosh(S))/y}}}return _(),{next:p=>{const m=h(p);if(d)o.done=p>=f;else{const x=g(p)*1e3,v=Math.abs(x)<=n,y=Math.abs(t-m)<=r;o.done=v&&y}return o.value=o.done?t:m,o},flipTarget:()=>{u=-u,[e,t]=[t,e],_()}}}yc.needsInterpolation=(i,e)=>typeof i=="string"||typeof e=="string";const hu=i=>0,ks=(i,e,t)=>{const n=e-i;return n===0?1:(t-i)/n},un=(i,e,t)=>-t*i+t*e+i,ip=(i,e)=>t=>Math.max(Math.min(t,e),i),As=i=>i%1?Number(i.toFixed(5)):i,zs=/(-)?([\d]*\.?[\d])+/g,zl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,ev=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Zs(i){return typeof i=="string"}const rr={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},ws=Object.assign(Object.assign({},rr),{transform:ip(0,1)}),co=Object.assign(Object.assign({},rr),{default:1}),Js=i=>({test:e=>Zs(e)&&e.endsWith(i)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${i}`}),mi=Js("deg"),Fr=Js("%"),ke=Js("px"),tv=Js("vh"),nv=Js("vw"),pu=Object.assign(Object.assign({},Fr),{parse:i=>Fr.parse(i)/100,transform:i=>Fr.transform(i*100)}),Mc=(i,e)=>t=>!!(Zs(t)&&ev.test(t)&&t.startsWith(i)||e&&Object.prototype.hasOwnProperty.call(t,e)),rp=(i,e,t)=>n=>{if(!Zs(n))return n;const[r,s,o,a]=n.match(zs);return{[i]:parseFloat(r),[e]:parseFloat(s),[t]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Yi={test:Mc("hsl","hue"),parse:rp("hue","saturation","lightness"),transform:({hue:i,saturation:e,lightness:t,alpha:n=1})=>"hsla("+Math.round(i)+", "+Fr.transform(As(e))+", "+Fr.transform(As(t))+", "+As(ws.transform(n))+")"},iv=ip(0,255),ka=Object.assign(Object.assign({},rr),{transform:i=>Math.round(iv(i))}),xi={test:Mc("rgb","red"),parse:rp("red","green","blue"),transform:({red:i,green:e,blue:t,alpha:n=1})=>"rgba("+ka.transform(i)+", "+ka.transform(e)+", "+ka.transform(t)+", "+As(ws.transform(n))+")"};function rv(i){let e="",t="",n="",r="";return i.length>5?(e=i.substr(1,2),t=i.substr(3,2),n=i.substr(5,2),r=i.substr(7,2)):(e=i.substr(1,1),t=i.substr(2,1),n=i.substr(3,1),r=i.substr(4,1),e+=e,t+=t,n+=n,r+=r),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(n,16),alpha:r?parseInt(r,16)/255:1}}const Hl={test:Mc("#"),parse:rv,transform:xi.transform},Qt={test:i=>xi.test(i)||Hl.test(i)||Yi.test(i),parse:i=>xi.test(i)?xi.parse(i):Yi.test(i)?Yi.parse(i):Hl.parse(i),transform:i=>Zs(i)?i:i.hasOwnProperty("red")?xi.transform(i):Yi.transform(i)},sp="${c}",op="${n}";function sv(i){var e,t,n,r;return isNaN(i)&&Zs(i)&&((t=(e=i.match(zs))===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0)+((r=(n=i.match(zl))===null||n===void 0?void 0:n.length)!==null&&r!==void 0?r:0)>0}function ap(i){typeof i=="number"&&(i=`${i}`);const e=[];let t=0;const n=i.match(zl);n&&(t=n.length,i=i.replace(zl,sp),e.push(...n.map(Qt.parse)));const r=i.match(zs);return r&&(i=i.replace(zs,op),e.push(...r.map(rr.parse))),{values:e,numColors:t,tokenised:i}}function lp(i){return ap(i).values}function cp(i){const{values:e,numColors:t,tokenised:n}=ap(i),r=e.length;return s=>{let o=n;for(let a=0;a<r;a++)o=o.replace(a<t?sp:op,a<t?Qt.transform(s[a]):As(s[a]));return o}}const ov=i=>typeof i=="number"?0:i;function av(i){const e=lp(i);return cp(i)(e.map(ov))}const ei={test:sv,parse:lp,createTransformer:cp,getAnimatableNone:av},lv=new Set(["brightness","contrast","saturate","opacity"]);function cv(i){let[e,t]=i.slice(0,-1).split("(");if(e==="drop-shadow")return i;const[n]=t.match(zs)||[];if(!n)return i;const r=t.replace(n,"");let s=lv.has(e)?1:0;return n!==t&&(s*=100),e+"("+s+r+")"}const uv=/([a-z-]*)\(.*?\)/g,Gl=Object.assign(Object.assign({},ei),{getAnimatableNone:i=>{const e=i.match(uv);return e?e.map(cv).join(" "):i}});function za(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*(2/3-t)*6:i}function mu({hue:i,saturation:e,lightness:t,alpha:n}){i/=360,e/=100,t/=100;let r=0,s=0,o=0;if(!e)r=s=o=t;else{const a=t<.5?t*(1+e):t+e-t*e,l=2*t-a;r=za(l,a,i+1/3),s=za(l,a,i),o=za(l,a,i-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:n}}const fv=(i,e,t)=>{const n=i*i,r=e*e;return Math.sqrt(Math.max(0,t*(r-n)+n))},dv=[Hl,xi,Yi],gu=i=>dv.find(e=>e.test(i)),up=(i,e)=>{let t=gu(i),n=gu(e),r=t.parse(i),s=n.parse(e);t===Yi&&(r=mu(r),t=xi),n===Yi&&(s=mu(s),n=xi);const o=Object.assign({},r);return a=>{for(const l in o)l!=="alpha"&&(o[l]=fv(r[l],s[l],a));return o.alpha=un(r.alpha,s.alpha,a),t.transform(o)}},Wl=i=>typeof i=="number",hv=(i,e)=>t=>e(i(t)),Qs=(...i)=>i.reduce(hv);function fp(i,e){return Wl(i)?t=>un(i,e,t):Qt.test(i)?up(i,e):hp(i,e)}const dp=(i,e)=>{const t=[...i],n=t.length,r=i.map((s,o)=>fp(s,e[o]));return s=>{for(let o=0;o<n;o++)t[o]=r[o](s);return t}},pv=(i,e)=>{const t=Object.assign(Object.assign({},i),e),n={};for(const r in t)i[r]!==void 0&&e[r]!==void 0&&(n[r]=fp(i[r],e[r]));return r=>{for(const s in n)t[s]=n[s](r);return t}};function _u(i){const e=ei.parse(i),t=e.length;let n=0,r=0,s=0;for(let o=0;o<t;o++)n||typeof e[o]=="number"?n++:e[o].hue!==void 0?s++:r++;return{parsed:e,numNumbers:n,numRGB:r,numHSL:s}}const hp=(i,e)=>{const t=ei.createTransformer(e),n=_u(i),r=_u(e);return n.numHSL===r.numHSL&&n.numRGB===r.numRGB&&n.numNumbers>=r.numNumbers?Qs(dp(n.parsed,r.parsed),t):o=>`${o>0?e:i}`},mv=(i,e)=>t=>un(i,e,t);function gv(i){if(typeof i=="number")return mv;if(typeof i=="string")return Qt.test(i)?up:hp;if(Array.isArray(i))return dp;if(typeof i=="object")return pv}function _v(i,e,t){const n=[],r=t||gv(i[0]),s=i.length-1;for(let o=0;o<s;o++){let a=r(i[o],i[o+1]);if(e){const l=Array.isArray(e)?e[o]:e;a=Qs(l,a)}n.push(a)}return n}function vv([i,e],[t]){return n=>t(ks(i,e,n))}function xv(i,e){const t=i.length,n=t-1;return r=>{let s=0,o=!1;if(r<=i[0]?o=!0:r>=i[n]&&(s=n-1,o=!0),!o){let l=1;for(;l<t&&!(i[l]>r||l===n);l++);s=l-1}const a=ks(i[s],i[s+1],r);return e[s](a)}}function pp(i,e,{clamp:t=!0,ease:n,mixer:r}={}){const s=i.length;fu(s===e.length),fu(!n||!Array.isArray(n)||n.length===s-1),i[0]>i[s-1]&&(i=[].concat(i),e=[].concat(e),i.reverse(),e.reverse());const o=_v(e,n,r),a=s===2?vv(i,o):xv(i,o);return t?l=>a(na(i[0],i[s-1],l)):a}const Ma=i=>e=>1-i(1-e),bc=i=>e=>e<=.5?i(2*e)/2:(2-i(2*(1-e)))/2,yv=i=>e=>Math.pow(e,i),mp=i=>e=>e*e*((i+1)*e-i),Mv=i=>{const e=mp(i);return t=>(t*=2)<1?.5*e(t):.5*(2-Math.pow(2,-10*(t-1)))},gp=1.525,bv=4/11,Sv=8/11,Ev=9/10,_p=i=>i,Sc=yv(2),Tv=Ma(Sc),vp=bc(Sc),xp=i=>1-Math.sin(Math.acos(i)),yp=Ma(xp),Av=bc(yp),Ec=mp(gp),wv=Ma(Ec),Rv=bc(Ec),Cv=Mv(gp),Pv=4356/361,Lv=35442/1805,Dv=16061/1805,ia=i=>{if(i===1||i===0)return i;const e=i*i;return i<bv?7.5625*e:i<Sv?9.075*e-9.9*i+3.4:i<Ev?Pv*e-Lv*i+Dv:10.8*i*i-20.52*i+10.72},Iv=Ma(ia),Nv=i=>i<.5?.5*(1-ia(1-i*2)):.5*ia(i*2-1)+.5;function Uv(i,e){return i.map(()=>e||vp).splice(0,i.length-1)}function Ov(i){const e=i.length;return i.map((t,n)=>n!==0?n/(e-1):0)}function Fv(i,e){return i.map(t=>t*e)}function jo({from:i=0,to:e=1,ease:t,offset:n,duration:r=300}){const s={done:!1,value:i},o=Array.isArray(e)?e:[i,e],a=Fv(n&&n.length===o.length?n:Ov(o),r);function l(){return pp(a,o,{ease:Array.isArray(t)?t:Uv(o,t)})}let c=l();return{next:u=>(s.value=c(u),s.done=u>=r,s),flipTarget:()=>{o.reverse(),c=l()}}}function Bv({velocity:i=0,from:e=0,power:t=.8,timeConstant:n=350,restDelta:r=.5,modifyTarget:s}){const o={done:!1,value:e};let a=t*i;const l=e+a,c=s===void 0?l:s(l);return c!==l&&(a=c-e),{next:u=>{const f=-a*Math.exp(-u/n);return o.done=!(f>r||f<-r),o.value=o.done?c:c+f,o},flipTarget:()=>{}}}const vu={keyframes:jo,spring:yc,decay:Bv};function Vv(i){if(Array.isArray(i.to))return jo;if(vu[i.type])return vu[i.type];const e=new Set(Object.keys(i));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?jo:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?yc:jo}function Mp(i,e,t=0){return i-e-t}function kv(i,e,t=0,n=!0){return n?Mp(e+-i,e,t):e-(i-e)+t}function zv(i,e,t,n){return n?i>=e+t:i<=-t}const Hv=i=>{const e=({delta:t})=>i(t);return{start:()=>An.update(e,!0),stop:()=>Ts.update(e)}};function bp(i){var e,t,{from:n,autoplay:r=!0,driver:s=Hv,elapsed:o=0,repeat:a=0,repeatType:l="loop",repeatDelay:c=0,onPlay:u,onStop:f,onComplete:d,onRepeat:h,onUpdate:g}=i,_=np(i,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:p}=_,m,x=0,v=_.duration,y,E=!1,A=!0,S;const C=Vv(_);!((t=(e=C).needsInterpolation)===null||t===void 0)&&t.call(e,n,p)&&(S=pp([0,100],[n,p],{clamp:!1}),n=0,p=100);const N=C(Object.assign(Object.assign({},_),{from:n,to:p}));function M(){x++,l==="reverse"?(A=x%2===0,o=kv(o,v,c,A)):(o=Mp(o,v,c),l==="mirror"&&N.flipTarget()),E=!1,h&&h()}function R(){m.stop(),d&&d()}function $(D){if(A||(D=-D),o+=D,!E){const j=N.next(Math.max(0,o));y=j.value,S&&(y=S(y)),E=A?j.done:o<=0}g==null||g(y),E&&(x===0&&(v??(v=o)),x<a?zv(o,v,c,A)&&M():R())}function J(){u==null||u(),m=s($),m.start()}return r&&J(),{stop:()=>{f==null||f(),m.stop()}}}function Sp(i,e){return e?i*(1e3/e):0}function Gv({from:i=0,velocity:e=0,min:t,max:n,power:r=.8,timeConstant:s=750,bounceStiffness:o=500,bounceDamping:a=10,restDelta:l=1,modifyTarget:c,driver:u,onUpdate:f,onComplete:d,onStop:h}){let g;function _(v){return t!==void 0&&v<t||n!==void 0&&v>n}function p(v){return t===void 0?n:n===void 0||Math.abs(t-v)<Math.abs(n-v)?t:n}function m(v){g==null||g.stop(),g=bp(Object.assign(Object.assign({},v),{driver:u,onUpdate:y=>{var E;f==null||f(y),(E=v.onUpdate)===null||E===void 0||E.call(v,y)},onComplete:d,onStop:h}))}function x(v){m(Object.assign({type:"spring",stiffness:o,damping:a,restDelta:l},v))}if(_(i))x({from:i,velocity:e,to:p(i)});else{let v=r*e+i;typeof c<"u"&&(v=c(v));const y=p(v),E=y===t?-1:1;let A,S;const C=N=>{A=S,S=N,e=Sp(N-A,ta().delta),(E===1&&N>y||E===-1&&N<y)&&x({from:N,to:y,velocity:e})};m({type:"decay",from:i,velocity:e,timeConstant:s,power:r,restDelta:l,modifyTarget:c,onUpdate:_(v)?C:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const Xl=i=>i.hasOwnProperty("x")&&i.hasOwnProperty("y"),xu=i=>Xl(i)&&i.hasOwnProperty("z"),uo=(i,e)=>Math.abs(i-e);function Ep(i,e){if(Wl(i)&&Wl(e))return uo(i,e);if(Xl(i)&&Xl(e)){const t=uo(i.x,e.x),n=uo(i.y,e.y),r=xu(i)&&xu(e)?uo(i.z,e.z):0;return Math.sqrt(Math.pow(t,2)+Math.pow(n,2)+Math.pow(r,2))}}const Tp=(i,e)=>1-3*e+3*i,Ap=(i,e)=>3*e-6*i,wp=i=>3*i,ra=(i,e,t)=>((Tp(e,t)*i+Ap(e,t))*i+wp(e))*i,Rp=(i,e,t)=>3*Tp(e,t)*i*i+2*Ap(e,t)*i+wp(e),Wv=1e-7,Xv=10;function jv(i,e,t,n,r){let s,o,a=0;do o=e+(t-e)/2,s=ra(o,n,r)-i,s>0?t=o:e=o;while(Math.abs(s)>Wv&&++a<Xv);return o}const $v=8,Yv=.001;function qv(i,e,t,n){for(let r=0;r<$v;++r){const s=Rp(e,t,n);if(s===0)return e;const o=ra(e,t,n)-i;e-=o/s}return e}const $o=11,fo=1/($o-1);function Kv(i,e,t,n){if(i===e&&t===n)return _p;const r=new Float32Array($o);for(let o=0;o<$o;++o)r[o]=ra(o*fo,i,t);function s(o){let a=0,l=1;const c=$o-1;for(;l!==c&&r[l]<=o;++l)a+=fo;--l;const u=(o-r[l])/(r[l+1]-r[l]),f=a+u*fo,d=Rp(f,i,t);return d>=Yv?qv(o,f,i,t):d===0?f:jv(o,a,a+fo,i,t)}return o=>o===0||o===1?o:ra(s(o),e,n)}function Cp(i,e){i.indexOf(e)===-1&&i.push(e)}function Pp(i,e){var t=i.indexOf(e);t>-1&&i.splice(t,1)}var Yo=function(){function i(){this.subscriptions=[]}return i.prototype.add=function(e){var t=this;return Cp(this.subscriptions,e),function(){return Pp(t.subscriptions,e)}},i.prototype.notify=function(e,t,n){var r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(var s=0;s<r;s++){var o=this.subscriptions[s];o&&o(e,t,n)}},i.prototype.getSize=function(){return this.subscriptions.length},i.prototype.clear=function(){this.subscriptions.length=0},i}(),Zv=function(i){return!isNaN(parseFloat(i))},Jv=function(){function i(e,t){var n=this;this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Yo,this.velocityUpdateSubscribers=new Yo,this.renderSubscribers=new Yo,this.canTrackVelocity=!1,this.updateAndNotify=function(r,s){s===void 0&&(s=!0),n.prev=n.current,n.current=r;var o=ta(),a=o.delta,l=o.timestamp;n.lastUpdated!==l&&(n.timeDelta=a,n.lastUpdated=l,An.postRender(n.scheduleVelocityCheck)),n.prev!==n.current&&n.updateSubscribers.notify(n.current),n.velocityUpdateSubscribers.getSize()&&n.velocityUpdateSubscribers.notify(n.getVelocity()),s&&n.renderSubscribers.notify(n.current)},this.scheduleVelocityCheck=function(){return An.postRender(n.velocityCheck)},this.velocityCheck=function(r){var s=r.timestamp;s!==n.lastUpdated&&(n.prev=n.current,n.velocityUpdateSubscribers.notify(n.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=Zv(this.current),this.onSubscription=()=>{},this.onUnsubscription=()=>{},t&&(this.onSubscription=()=>{if(this.updateSubscribers.getSize()+this.velocityUpdateSubscribers.getSize()+this.renderSubscribers.getSize()===0){const r=t();this.onUnsubscription=()=>{},r&&(this.onUnsubscription=()=>{this.updateSubscribers.getSize()+this.velocityUpdateSubscribers.getSize()+this.renderSubscribers.getSize()===0&&r()})}})}return i.prototype.onChange=function(e){this.onSubscription();const t=this.updateSubscribers.add(e);return()=>{t(),this.onUnsubscription()}},i.prototype.subscribe=function(e){return this.onChange(e)},i.prototype.clearListeners=function(){this.updateSubscribers.clear(),this.onUnsubscription()},i.prototype.onRenderRequest=function(e){this.onSubscription(),e(this.get());const t=this.renderSubscribers.add(e);return()=>{t(),this.onUnsubscription()}},i.prototype.attach=function(e){this.passiveEffect=e},i.prototype.set=function(e,t){t===void 0&&(t=!0),!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)},i.prototype.update=function(e){this.set(e(this.get()))},i.prototype.get=function(){this.onSubscription();const e=this.current;return this.onUnsubscription(),e},i.prototype.getPrevious=function(){return this.prev},i.prototype.getVelocity=function(){this.onSubscription();const e=this.canTrackVelocity?Sp(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0;return this.onUnsubscription(),e},i.prototype.start=function(e){var t=this;return this.stop(),new Promise(function(n){t.hasAnimated=!0,t.stopAnimation=e(n)}).then(function(){return t.clearAnimation()})},i.prototype.stop=function(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()},i.prototype.isAnimating=function(){return!!this.stopAnimation},i.prototype.clearAnimation=function(){this.stopAnimation=null},i.prototype.destroy=function(){this.updateSubscribers.clear(),this.renderSubscribers.clear(),this.stop(),this.onUnsubscription()},i}();function Zi(i,e){return new Jv(i,e)}const lr=[];function Lp(i,e){return{subscribe:Rn(i,e).subscribe}}function Rn(i,e=Kt){let t;const n=new Set;function r(a){if(tt(i,a)&&(i=a,t)){const l=!lr.length;for(const c of n)c[1](),lr.push(c,i);if(l){for(let c=0;c<lr.length;c+=2)lr[c][0](lr[c+1]);lr.length=0}}}function s(a){r(a(i))}function o(a,l=Kt){const c=[a,l];return n.add(c),n.size===1&&(t=e(r,s)||Kt),a(i),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:o}}function Qv(i,e,t){const n=!Array.isArray(i),r=n?[i]:i;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return Lp(t,(o,a)=>{let l=!1;const c=[];let u=0,f=Kt;const d=()=>{if(u)return;f();const g=e(n?c[0]:c,o,a);s?o(g):f=xa(g)?g:Kt},h=r.map((g,_)=>_c(g,p=>{c[_]=p,u&=~(1<<_),l&&d()},()=>{u|=1<<_}));return l=!0,d(),function(){ni(h),f(),l=!1}})}const sr=(i,e)=>{if(!e||!window)return;let t=e;for(;t=t.parentNode;)if(t.motionDomContext&&t.motionDomContext.has(i))return t.motionDomContext.get(i)},Dp=(i,e,t)=>{e&&window&&(e.motionDomContext||(e.motionDomContext=new Map),e.motionDomContext.set(i,t))};var wi=i=>sr("MotionConfig",i)||Rn({transformPagePoint:function(e){return e},isStatic:!1});function e0(i){let e;const t=i[2].default,n=_t(t,i,i[1],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&2)&&xt(n,t,r,r[1],e?vt(t,r[1],s,null):yt(r[1]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}const bs=i=>sr("ScaleCorrection",i)||Rn([]),Ip=()=>Rn([]),t0=i=>{const e=kt(bs)||bs(i),t=bs();Il(bs,t),Dp("ScaleCorrection",i,t),Il(Ip,e)};function n0(i,e,t){let{$$slots:n={},$$scope:r}=e,{isCustom:s}=e;return t0(s),i.$$set=o=>{"isCustom"in o&&t(0,s=o.isCustom),"$$scope"in o&&t(1,r=o.$$scope)},[s,r,n]}class i0 extends ot{constructor(e){super(),st(this,e,n0,e0,tt,{isCustom:0})}}const r0=i0;function ii(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(i);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(i,n[r])&&(t[n[r]]=i[n[r]]);return t}function Nt(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return s}function fn(i,e,t){if(t||arguments.length===2)for(var n=0,r=e.length,s;n<r;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return i.concat(s||Array.prototype.slice.call(e))}var sa=function(i){return i*1e3},s0={linear:_p,easeIn:Sc,easeInOut:vp,easeOut:Tv,circIn:xp,circInOut:Av,circOut:yp,backIn:Ec,backInOut:Rv,backOut:wv,anticipate:Cv,bounceIn:Iv,bounceInOut:Nv,bounceOut:ia},yu=function(i){if(Array.isArray(i)){var e=Nt(i,4),t=e[0],n=e[1],r=e[2],s=e[3];return Kv(t,n,r,s)}else if(typeof i=="string")return s0[i];return i},o0=function(i){return Array.isArray(i)&&typeof i[0]!="number"},Mu=function(i,e){return i==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&ei.test(e)&&!e.startsWith("url("))},Hs=function(i){return Array.isArray(i)},Ui=function(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}},ho=function(i){return{type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}},Ha=function(){return{type:"keyframes",ease:"linear",duration:.3}},a0=function(i){return{type:"keyframes",duration:.8,values:i}},bu={x:Ui,y:Ui,z:Ui,rotate:Ui,rotateX:Ui,rotateY:Ui,rotateZ:Ui,scaleX:ho,scaleY:ho,scale:ho,opacity:Ha,backgroundColor:Ha,color:Ha,default:ho},l0=function(i,e){var t;return Hs(e)?t=a0:t=bu[i]||bu.default,Object.assign({to:e},t(e))},Su=Object.assign(Object.assign({},rr),{transform:Math.round}),Np={borderWidth:ke,borderTopWidth:ke,borderRightWidth:ke,borderBottomWidth:ke,borderLeftWidth:ke,borderRadius:ke,radius:ke,borderTopLeftRadius:ke,borderTopRightRadius:ke,borderBottomRightRadius:ke,borderBottomLeftRadius:ke,width:ke,maxWidth:ke,height:ke,maxHeight:ke,size:ke,top:ke,right:ke,bottom:ke,left:ke,padding:ke,paddingTop:ke,paddingRight:ke,paddingBottom:ke,paddingLeft:ke,margin:ke,marginTop:ke,marginRight:ke,marginBottom:ke,marginLeft:ke,rotate:mi,rotateX:mi,rotateY:mi,rotateZ:mi,scale:co,scaleX:co,scaleY:co,scaleZ:co,skew:mi,skewX:mi,skewY:mi,distance:ke,translateX:ke,translateY:ke,translateZ:ke,x:ke,y:ke,z:ke,perspective:ke,transformPerspective:ke,opacity:ws,originX:pu,originY:pu,originZ:ke,zIndex:Su,fillOpacity:ws,strokeOpacity:ws,numOctaves:Su},c0=Object.assign(Object.assign({},Np),{color:Qt,backgroundColor:Qt,outlineColor:Qt,fill:Qt,stroke:Qt,borderColor:Qt,borderTopColor:Qt,borderRightColor:Qt,borderBottomColor:Qt,borderLeftColor:Qt,filter:Gl,WebkitFilter:Gl}),Tc=function(i){return c0[i]};function Ac(i,e){var t,n=Tc(i);return n!==Gl&&(n=ei),(t=n.getAnimatableNone)===null||t===void 0?void 0:t.call(n,e)}function u0(i){i.when,i.delay,i.delayChildren,i.staggerChildren,i.staggerDirection,i.repeat,i.repeatType,i.repeatDelay,i.from;var e=ii(i,["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(e).length}function f0(i){var e=i.ease,t=i.times,n=i.yoyo,r=i.flip,s=i.loop,o=ii(i,["ease","times","yoyo","flip","loop"]),a=Object.assign({},o);return t&&(a.offset=t),o.duration&&(a.duration=sa(o.duration)),o.repeatDelay&&(a.repeatDelay=sa(o.repeatDelay)),e&&(a.ease=o0(e)?e.map(yu):yu(e)),o.type==="tween"&&(a.type="keyframes"),(n||s||r)&&(n?a.repeatType="reverse":s?a.repeatType="loop":r&&(a.repeatType="mirror"),a.repeat=s||n||r||o.repeat),o.type!=="spring"&&(a.type="keyframes"),a}function d0(i,e){var t,n=wc(i,e)||{};return(t=n.delay)!==null&&t!==void 0?t:0}function h0(i){return Array.isArray(i.to)&&i.to[0]===null&&(i.to=fn([],Nt(i.to)),i.to[0]=i.from),i}function p0(i,e,t){var n;return Array.isArray(e.to)&&((n=i.duration)!==null&&n!==void 0||(i.duration=.8)),h0(e),u0(i)||(i=Object.assign(Object.assign({},i),l0(t,e.to))),Object.assign(Object.assign({},e),f0(i))}function m0(i,e,t,n,r){var s,o=wc(n,i),a=(s=o.from)!==null&&s!==void 0?s:e.get(),l=Mu(i,t);a==="none"&&l&&typeof t=="string"?a=Ac(i,t):Eu(a)&&typeof t=="string"?a=Tu(t):!Array.isArray(t)&&Eu(t)&&typeof a=="string"&&(t=Tu(a));var c=Mu(i,a);function u(){var d={from:a,to:t,velocity:e.getVelocity(),onComplete:r,onUpdate:function(h){return e.set(h)}};return o.type==="inertia"||o.type==="decay"?Gv(Object.assign(Object.assign({},d),o)):bp(Object.assign(Object.assign({},p0(o,d,i)),{onUpdate:function(h){var g;d.onUpdate(h),(g=o.onUpdate)===null||g===void 0||g.call(o,h)},onComplete:function(){var h;d.onComplete(),(h=o.onComplete)===null||h===void 0||h.call(o)}}))}function f(){var d;return e.set(t),r(),(d=o==null?void 0:o.onComplete)===null||d===void 0||d.call(o),{stop:function(){}}}return!c||!l||o.type===!1?f:u}function Eu(i){return i===0||typeof i=="string"&&parseFloat(i)===0&&i.indexOf(" ")===-1}function Tu(i){return typeof i=="number"?0:Ac("",i)}function wc(i,e){return i[e]||i.default||i}function oa(i,e,t,n){return n===void 0&&(n={}),e.start(function(r){var s,o,a=m0(i,e,t,n,r),l=d0(n,i),c=function(){return o=a()};return l?s=setTimeout(c,sa(l)):c(),function(){clearTimeout(s),o==null||o.stop()}})}var g0=function(i){return/^\-?\d*\.?\d+$/.test(i)},_0=function(i){return!!(i&&typeof i=="object"&&i.mix&&i.toValue)},v0=function(i){return Hs(i)?i[i.length-1]||0:i},Up=function(i){return function(e){return e.test(i)}},x0={test:function(i){return i==="auto"},parse:function(i){return i}},Op=[rr,ke,Fr,mi,nv,tv,x0],Ga=function(i){return Op.find(Up(i))},y0=fn(fn([],Nt(Op)),[Qt,ei]),M0=function(i){return y0.find(Up(i))};function Fp(i){return Array.isArray(i)}function Sn(i){return typeof i=="string"||Fp(i)}function b0(i){var e={};return i.forEachValue(function(t,n){return e[n]=t.get()}),e}function S0(i){var e={};return i.forEachValue(function(t,n){return e[n]=t.getVelocity()}),e}function Bp(i,e,t,n,r){var s;return n===void 0&&(n={}),r===void 0&&(r={}),typeof e=="string"&&(e=(s=i.variants)===null||s===void 0?void 0:s[e]),typeof e=="function"?e(t??i.custom,n,r):e}function ba(i,e,t){var n=i.getProps();return Bp(n,e,t??n.custom,b0(i),S0(i))}function Sa(i){var e;return typeof((e=i.animate)===null||e===void 0?void 0:e.start)=="function"||Sn(i.initial)||Sn(i.animate)||Sn(i.whileHover)||Sn(i.whileDrag)||Sn(i.whileTap)||Sn(i.whileFocus)||Sn(i.exit)}function Vp(i){return!!(Sa(i)||i.variants)}function E0(i,e,t){i.hasValue(e)?i.getValue(e).set(t):i.addValue(e,Zi(t))}function T0(i,e){var t=ba(i,e),n=t?i.makeTargetAnimatable(t,!1):{},r=n.transitionEnd,s=r===void 0?{}:r;n.transition;var o=ii(n,["transitionEnd","transition"]);o=Object.assign(Object.assign({},o),s);for(var a in o){var l=v0(o[a]);E0(i,a,l)}}function A0(i,e,t){var n,r,s,o,a=Object.keys(e).filter(function(h){return!i.hasValue(h)}),l=a.length;if(l)for(var c=0;c<l;c++){var u=a[c],f=e[u],d=null;Array.isArray(f)&&(d=f[0]),d===null&&(d=(r=(n=t[u])!==null&&n!==void 0?n:i.readValue(u))!==null&&r!==void 0?r:e[u]),d!=null&&(typeof d=="string"&&g0(d)?d=parseFloat(d):!M0(d)&&ei.test(f)&&(d=Ac(u,f)),i.addValue(u,Zi(d)),(s=(o=t)[u])!==null&&s!==void 0||(o[u]=d),i.setBaseTarget(u,d))}}function w0(i,e){if(e){var t=e[i]||e.default||e;return t.from}}function R0(i,e,t){var n,r,s={};for(var o in i)s[o]=(n=w0(o,e))!==null&&n!==void 0?n:(r=t.getValue(o))===null||r===void 0?void 0:r.get();return s}function C0(i,e,t){t===void 0&&(t={}),i.notifyAnimationStart();var n;if(Array.isArray(e)){var r=e.map(function(o){return jl(i,o,t)});n=Promise.all(r)}else if(typeof e=="string")n=jl(i,e,t);else{var s=typeof e=="function"?ba(i,e,t.custom):e;n=kp(i,s,t)}return n.then(function(){return i.notifyAnimationComplete(e)})}function jl(i,e,t){var n;t===void 0&&(t={});var r=ba(i,e,t.custom),s=(r||{}).transition,o=s===void 0?i.getDefaultTransition()||{}:s;t.transitionOverride&&(o=t.transitionOverride);var a=r?function(){return kp(i,r,t)}:function(){return Promise.resolve()},l=!((n=i.variantChildren)===null||n===void 0)&&n.size?function(h){h===void 0&&(h=0);var g=o.delayChildren,_=g===void 0?0:g,p=o.staggerChildren,m=o.staggerDirection;return P0(i,e,_+h,p,m,t)}:function(){return Promise.resolve()},c=o.when;if(c){var u=Nt(c==="beforeChildren"?[a,l]:[l,a],2),f=u[0],d=u[1];return f().then(d)}else return Promise.all([a(),l(t.delay)])}function kp(i,e,t){var n,r=t===void 0?{}:t,s=r.delay,o=s===void 0?0:s,a=r.transitionOverride,l=r.type,c=i.makeTargetAnimatable(e),u=c.transition,f=u===void 0?i.getDefaultTransition():u,d=c.transitionEnd,h=ii(c,["transition","transitionEnd"]);a&&(f=a);var g=[],_=l&&((n=i.animationState)===null||n===void 0?void 0:n.getState()[l]);for(var p in h){var m=i.getValue(p),x=h[p];if(!(!m||x===void 0||_&&D0(_,p))){var v=oa(p,m,x,Object.assign({delay:o},f));g.push(v)}}return Promise.all(g).then(function(){d&&T0(i,d)})}function P0(i,e,t,n,r,s){t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=1);var o=[],a=(i.variantChildren.size-1)*n,l=r===1?function(c){return c===void 0&&(c=0),c*n}:function(c){return c===void 0&&(c=0),a-c*n};return Array.from(i.variantChildren).sort(L0).forEach(function(c,u){o.push(jl(c,e,Object.assign(Object.assign({},s),{delay:t+l(u)})).then(function(){return c.notifyAnimationComplete(e)}))}),Promise.all(o)}function L0(i,e){return i.sortNodePosition(e)}function D0(i,e){var t=i.protectedKeys,n=i.needsAnimating,r=t.hasOwnProperty(e)&&n[e]!==!0;return n[e]=!1,r}var Rs={};function I0(i){for(var e in i)Rs[e]=i[e]}function rn(i){return[i("x"),i("y")]}function N0(i){return i}function zp(i){var e=i.top,t=i.left,n=i.right,r=i.bottom;return{x:{min:t,max:n},y:{min:e,max:r}}}function U0(i){var e=i.x,t=i.y;return{top:t.min,bottom:t.max,left:e.min,right:e.max}}function O0(i,e){var t=i.top,n=i.left,r=i.bottom,s=i.right;e===void 0&&(e=N0);var o=e({x:n,y:t}),a=e({x:s,y:r});return{top:o.y,left:o.x,bottom:a.y,right:a.x}}function Ri(){return{x:{min:0,max:1},y:{min:0,max:1}}}function F0(i){return{x:Object.assign({},i.x),y:Object.assign({},i.y)}}var Au={translate:0,scale:1,origin:0,originPoint:0};function wu(){return{x:Object.assign({},Au),y:Object.assign({},Au)}}function Hp(i){var e=i.getProps(),t=e.drag,n=e._dragX;return t&&!n}function Ru(i,e){i.min=e.min,i.max=e.max}function B0(i,e){Ru(i.x,e.x),Ru(i.y,e.y)}function aa(i,e,t){var n=i-t,r=e*n;return t+r}function Cu(i,e,t,n,r){return r!==void 0&&(i=aa(i,r,n)),aa(i,t,n)+e}function $l(i,e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=1),i.min=Cu(i.min,e,t,n,r),i.max=Cu(i.max,e,t,n,r)}function V0(i,e){var t=e.x,n=e.y;$l(i.x,t.translate,t.scale,t.originPoint),$l(i.y,n.translate,n.scale,n.originPoint)}function Pu(i,e,t,n){var r=Nt(n,3),s=r[0],o=r[1],a=r[2];i.min=e.min,i.max=e.max;var l=t[a]!==void 0?t[a]:.5,c=un(e.min,e.max,l);$l(i,t[s],t[o],c,t.scale)}var Gp=["x","scaleX","originX"],Wp=["y","scaleY","originY"];function Yl(i,e,t){Pu(i.x,e.x,t,Gp),Pu(i.y,e.y,t,Wp)}function Lu(i,e,t,n,r){return i-=e,i=aa(i,1/t,n),r!==void 0&&(i=aa(i,1/r,n)),i}function k0(i,e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=1),n===void 0&&(n=.5);var s=un(i.min,i.max,n)-e;i.min=Lu(i.min,e,t,s,r),i.max=Lu(i.max,e,t,s,r)}function Du(i,e,t){var n=Nt(t,3),r=n[0],s=n[1],o=n[2];k0(i,e[r],e[s],e[o],e.scale)}function Xp(i,e){Du(i.x,e,Gp),Du(i.y,e,Wp)}function z0(i,e,t){var n=t.length;if(n){e.x=e.y=1;for(var r,s,o=0;o<n;o++)r=t[o],s=r.getLayoutState().delta,e.x*=s.x.scale,e.y*=s.y.scale,V0(i,s),Hp(r)&&Yl(i,i,r.getLatestValues())}}var H0=function(i){return na(0,1,i)};function Iu(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=.01),Ep(i,e)<t}function Gs(i){return i.max-i.min}function G0(i,e){var t=.5,n=Gs(i),r=Gs(e);return r>n?t=ks(e.min,e.max-n,i.min):n>r&&(t=ks(i.min,i.max-r,e.min)),H0(t)}function Nu(i,e,t,n){n===void 0&&(n=.5),i.origin=n,i.originPoint=un(e.min,e.max,i.origin),i.scale=Gs(t)/Gs(e),Iu(i.scale,1,1e-4)&&(i.scale=1),i.translate=un(t.min,t.max,i.origin)-i.originPoint,Iu(i.translate)&&(i.translate=0)}function jp(i,e,t,n){Nu(i.x,e.x,t.x,Uu(n.originX)),Nu(i.y,e.y,t.y,Uu(n.originY))}function Uu(i){return typeof i=="number"?i:.5}function Ou(i,e,t){i.min=t.min+e.min,i.max=i.min+Gs(e)}function W0(i,e){Ou(i.target.x,i.relativeTarget.x,e.target.x),Ou(i.target.y,i.relativeTarget.y,e.target.y)}var Ci=function(i){return i!==null&&typeof i=="object"&&i.getVelocity},X0=function(){return{isEnabled:!1,isTargetLocked:!1,target:Ri(),targetFinal:Ri()}};function $p(){return{isHydrated:!1,layout:Ri(),layoutCorrected:Ri(),treeScale:{x:1,y:1},delta:wu(),deltaFinal:wu(),deltaTransform:""}}var Fu=$p();function Ea(i,e,t){var n=i.x,r=i.y,s=n.translate/e.x,o=r.translate/e.y,a="translate3d("+s+"px, "+o+"px, 0) ";if(t){var l=t.rotate,c=t.rotateX,u=t.rotateY;l&&(a+="rotate("+l+") "),c&&(a+="rotateX("+c+") "),u&&(a+="rotateY("+u+") ")}return a+="scale("+n.scale+", "+r.scale+")",!t&&a===j0?"":a}function Yp(i){var e=i.deltaFinal;return e.x.origin*100+"% "+e.y.origin*100+"% 0"}var j0=Ea(Fu.delta,Fu.treeScale,{x:1,y:1}),Rc=function(i){return typeof i=="object"&&typeof i.start=="function"};function qp(i,e){if(!Array.isArray(e))return!1;var t=e.length;if(t!==i.length)return!1;for(var n=0;n<t;n++)if(e[n]!==i[n])return!1;return!0}var Lt;(function(i){i.Animate="animate",i.Hover="whileHover",i.Tap="whileTap",i.Drag="whileDrag",i.Focus="whileFocus",i.Exit="exit"})(Lt||(Lt={}));var Cc=[Lt.Animate,Lt.Hover,Lt.Tap,Lt.Drag,Lt.Focus,Lt.Exit],$0=fn([],Nt(Cc)).reverse(),Y0=Cc.length;function q0(i){return function(e){return Promise.all(e.map(function(t){var n=t.animation,r=t.options;return C0(i,n,r)}))}}function K0(i){var e=q0(i),t=J0(),n={},r=!0,s=function(u,f){var d=ba(i,f);if(d){d.transition;var h=d.transitionEnd,g=ii(d,["transition","transitionEnd"]);u=Object.assign(Object.assign(Object.assign({},u),g),h)}return u};function o(u){return n[u]!==void 0}function a(u){e=u(i)}function l(u,f){for(var d,h=i.getProps(),g=i.getVariantContext(!0)||{},_=[],p=new Set,m={},x=1/0,v=function(S){var C=$0[S],N=t[C],M=(d=h[C])!==null&&d!==void 0?d:g[C],R=Sn(M),$=C===f?N.isActive:null;$===!1&&(x=S);var J=M===g[C]&&M!==h[C]&&R;if(J&&r&&i.manuallyAnimateOnMount&&(J=!1),N.protectedKeys=Object.assign({},m),!N.isActive&&$===null||!M&&!N.prevProp||Rc(M)||typeof M=="boolean")return"continue";var D=Z0(N.prevProp,M)||C===f&&N.isActive&&!J&&R||S>x&&R,j=Array.isArray(M)?M:[M],V=j.reduce(s,{});$===!1&&(V={});var Z=N.prevResolvedValues,W=Z===void 0?{}:Z,q=Object.assign(Object.assign({},W),V),Q=function(k){D=!0,p.delete(k),N.needsAnimating[k]=!0};for(var ie in q){var de=V[ie],Ne=W[ie];m.hasOwnProperty(ie)||(de!==Ne?Hs(de)&&Hs(Ne)?qp(de,Ne)?N.protectedKeys[ie]=!0:Q(ie):de!==void 0?Q(ie):p.add(ie):de!==void 0&&p.has(ie)?Q(ie):N.protectedKeys[ie]=!0)}N.prevProp=M,N.prevResolvedValues=V,N.isActive&&(m=Object.assign(Object.assign({},m),V)),r&&i.blockInitialAnimation&&(D=!1),D&&!J&&_.push.apply(_,fn([],Nt(j.map(function(k){return{animation:k,options:Object.assign({type:C},u)}}))))},y=0;y<Y0;y++)v(y);if(n=Object.assign({},m),p.size){var E={};p.forEach(function(S){var C=i.getBaseTarget(S);C!==void 0&&(E[S]=C)}),_.push({animation:E})}var A=!!_.length;return r&&h.initial===!1&&!i.manuallyAnimateOnMount&&(A=!1),r=!1,A?e(_):Promise.resolve()}function c(u,f,d){var h;return t[u].isActive===f?Promise.resolve():((h=i.variantChildren)===null||h===void 0||h.forEach(function(g){var _;return(_=g.animationState)===null||_===void 0?void 0:_.setActive(u,f)}),t[u].isActive=f,l(d,u))}return{isAnimated:o,animateChanges:l,setActive:c,setAnimateFunction:a,getState:function(){return t}}}function Z0(i,e){return typeof e=="string"?e!==i:Fp(e)?!qp(e,i):!1}function cr(i){return i===void 0&&(i=!1),{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function J0(){var i;return i={},i[Lt.Animate]=cr(!0),i[Lt.Hover]=cr(),i[Lt.Tap]=cr(),i[Lt.Drag]=cr(),i[Lt.Focus]=cr(),i[Lt.Exit]=cr(),i}var po=["LayoutMeasure","BeforeLayoutMeasure","LayoutUpdate","ViewportBoxUpdate","Update","Render","AnimationComplete","LayoutAnimationComplete","AnimationStart","SetAxisTarget","Unmount"];function Q0(){var i=po.map(function(){return new Yo}),e={},t={clearAllListeners:function(){return i.forEach(function(n){return n.clear()})},updatePropListeners:function(n){return po.forEach(function(r){var s;(s=e[r])===null||s===void 0||s.call(e);var o="on"+r,a=n[o];a&&(e[r]=t[o](a))})}};return i.forEach(function(n,r){t["on"+po[r]]=function(s){return n.add(s)},t["notify"+po[r]]=function(){for(var s=[],o=0;o<arguments.length;o++)s[o]=arguments[o];return n.notify.apply(n,fn([],Nt(s)))}}),t}function ex(i,e,t){var n;for(var r in e){var s=e[r],o=t[r];if(Ci(s))i.addValue(r,s);else if(Ci(o))i.addValue(r,Zi(s));else if(o!==s)if(i.hasValue(r)){var a=i.getValue(r);!a.hasAnimated&&a.set(s)}else i.addValue(r,Zi((n=i.getStaticValue(r))!==null&&n!==void 0?n:s))}for(var r in t)e[r]===void 0&&i.removeValue(r);return e}function tx(i,e,t,n){var r=i.delta,s=i.layout,o=i.layoutCorrected,a=i.treeScale,l=e.target;B0(o,s),z0(o,a,t),jp(r,o,l,n)}var Pc=function(i,e){return i.depth-e.depth},nx=function(){function i(){this.children=[],this.isDirty=!1}return i.prototype.add=function(e){Cp(this.children,e),this.isDirty=!0},i.prototype.remove=function(e){Pp(this.children,e),this.isDirty=!0},i.prototype.forEach=function(e){this.isDirty&&this.children.sort(Pc);for(var t=this.children.length,n=0;n<t;n++)e(this.children[n])},i}();function ix(i,e,t,n){i.min=un(e.min,t.min,n),i.max=un(e.max,t.max,n)}function Bu(i,e){return{min:e.min-i.min,max:e.max-i.min}}function la(i,e){return{x:Bu(i.x,e.x),y:Bu(i.y,e.y)}}function rx(i){var e=i.getProjectionParent();if(!e){i.rebaseProjectionTarget();return}var t=la(e.getLayoutState().layout,i.getLayoutState().layout);rn(function(n){i.setProjectionTargetAxis(n,t[n].min,t[n].max,!0)})}var Kp=function(i){var e=i.treeType,t=e===void 0?"":e,n=i.build,r=i.getBaseTarget,s=i.makeTargetAnimatable,o=i.measureViewportBox,a=i.render,l=i.readValueFromInstance,c=i.resetTransform,u=i.restoreTransform,f=i.removeValueFromRenderState,d=i.sortNodePosition,h=i.scrapeMotionValuesFromProps;return function(g,_){var p=g.parent,m=g.props,x=g.presenceId,v=g.blockInitialAnimation,y=g.visualState;_===void 0&&(_={});var E=y.latestValues,A=y.renderState,S,C=Q0(),N=X0(),M,R=N,$=E,J,D=$p(),j,V=!1,Z=new Map,W=new Map,q={},Q,ie=Object.assign({},E),de;function Ne(){S&&(te.isProjectionReady()&&(Yl(R.targetFinal,R.target,$),jp(D.deltaFinal,D.layoutCorrected,R.targetFinal,E)),k(),a(S,A))}function k(){var z=E;if(j&&j.isActive()){var Y=j.getCrossfadeState(te);Y&&(z=Y)}n(te,A,z,R,D,_,m)}function oe(){C.notifyUpdate(E)}function ge(){if(te.isProjectionReady()){var z=D.delta,Y=D.treeScale,xe=Y.x,Me=Y.y,Re=D.deltaTransform;tx(D,R,te.path,E),V&&te.notifyViewportBoxUpdate(R.target,z),V=!1;var nt=Ea(z,Y);(nt!==Re||xe!==Y.x||Me!==Y.y)&&te.scheduleRender(),D.deltaTransform=nt}}function Ve(){te.layoutTree.forEach(ox)}function Ce(z,Y){var xe=Y.onChange(function(Re){E[z]=Re,m.onUpdate&&An.update(oe,!1,!0)}),Me=Y.onRenderRequest(te.scheduleRender);W.set(z,function(){xe(),Me()})}var ve=h(m);for(var at in ve){var Oe=ve[at];E[at]!==void 0&&Ci(Oe)&&Oe.set(E[at],!1)}var O=Sa(m),Tt=Vp(m),te=Object.assign(Object.assign({treeType:t,current:null,depth:p?p.depth+1:0,parent:p,children:new Set,path:p?fn(fn([],Nt(p.path)),[p]):[],layoutTree:p?p.layoutTree:new nx,presenceId:x,projection:N,variantChildren:Tt?new Set:void 0,isVisible:void 0,manuallyAnimateOnMount:!!(p!=null&&p.isMounted()),blockInitialAnimation:v,isMounted:function(){return!!S},mount:function(z){S=te.current=z,te.pointTo(te),Tt&&p&&!O&&(de=p==null?void 0:p.addVariantChild(te)),p==null||p.children.add(te)},unmount:function(){Ts.update(oe),Ts.render(Ne),Ts.preRender(te.updateLayoutProjection),W.forEach(function(z){return z()}),te.stopLayoutAnimation(),te.layoutTree.remove(te),de==null||de(),p==null||p.children.delete(te),J==null||J(),C.clearAllListeners()},addVariantChild:function(z){var Y,xe=te.getClosestVariantNode();if(xe)return(Y=xe.variantChildren)===null||Y===void 0||Y.add(z),function(){return xe.variantChildren.delete(z)}},sortNodePosition:function(z){return!d||t!==z.treeType?0:d(te.getInstance(),z.getInstance())},getClosestVariantNode:function(){return Tt?te:p==null?void 0:p.getClosestVariantNode()},scheduleUpdateLayoutProjection:p?p.scheduleUpdateLayoutProjection:function(){return An.preRender(te.updateTreeLayoutProjection,!1,!0)},getLayoutId:function(){return m.layoutId},getInstance:function(){return S},getStaticValue:function(z){return E[z]},setStaticValue:function(z,Y){return E[z]=Y},getLatestValues:function(){return E},setVisibility:function(z){te.isVisible!==z&&(te.isVisible=z,te.scheduleRender())},makeTargetAnimatable:function(z,Y){return Y===void 0&&(Y=!0),s(te,z,m,Y)},addValue:function(z,Y){te.hasValue(z)&&te.removeValue(z),Z.set(z,Y),E[z]=Y.get(),Ce(z,Y)},removeValue:function(z){var Y;Z.delete(z),(Y=W.get(z))===null||Y===void 0||Y(),W.delete(z),delete E[z],f(z,A)},hasValue:function(z){return Z.has(z)},getValue:function(z,Y){var xe=Z.get(z);return xe===void 0&&Y!==void 0&&(xe=Zi(Y),te.addValue(z,xe)),xe},forEachValue:function(z){return Z.forEach(z)},readValue:function(z){var Y;return(Y=E[z])!==null&&Y!==void 0?Y:l(S,z,_)},setBaseTarget:function(z,Y){ie[z]=Y},getBaseTarget:function(z){if(r){var Y=r(m,z);if(Y!==void 0&&!Ci(Y))return Y}return ie[z]}},C),{build:function(){return k(),A},scheduleRender:function(){An.render(Ne,!1,!0)},syncRender:Ne,setProps:function(z){m=z,C.updatePropListeners(z),q=ex(te,h(m),q)},getProps:function(){return m},getVariant:function(z){var Y;return(Y=m.variants)===null||Y===void 0?void 0:Y[z]},getDefaultTransition:function(){return m.transition},getVariantContext:function(z){if(z===void 0&&(z=!1),z)return p==null?void 0:p.getVariantContext();if(!O){var Y=(p==null?void 0:p.getVariantContext())||{};return m.initial!==void 0&&(Y.initial=m.initial),Y}for(var xe={},Me=0;Me<ax;Me++){var Re=Zp[Me],nt=m[Re];(Sn(nt)||nt===!1)&&(xe[Re]=nt)}return xe},enableLayoutProjection:function(){N.isEnabled=!0,te.layoutTree.add(te)},lockProjectionTarget:function(){N.isTargetLocked=!0},unlockProjectionTarget:function(){te.stopLayoutAnimation(),N.isTargetLocked=!1},getLayoutState:function(){return D},setCrossfader:function(z){j=z},isProjectionReady:function(){return N.isEnabled&&N.isHydrated&&D.isHydrated},startLayoutAnimation:function(z,Y,xe){xe===void 0&&(xe=!1);var Me=te.getProjectionAnimationProgress()[z],Re=xe?N.relativeTarget[z]:N.target[z],nt=Re.min,w=Re.max,b=w-nt;return Me.clearListeners(),Me.set(nt),Me.set(nt),Me.onChange(function(X){te.setProjectionTargetAxis(z,X,X+b,xe)}),te.animateMotionValue(z,Me,0,Y)},stopLayoutAnimation:function(){rn(function(z){return te.getProjectionAnimationProgress()[z].stop()})},measureViewportBox:function(z){z===void 0&&(z=!0);var Y=o(S,_);return z||Xp(Y,E),Y},getProjectionAnimationProgress:function(){return Q||(Q={x:Zi(0),y:Zi(0)}),Q},setProjectionTargetAxis:function(z,Y,xe,Me){Me===void 0&&(Me=!1);var Re;Me?(N.relativeTarget||(N.relativeTarget=Ri()),Re=N.relativeTarget[z]):(N.relativeTarget=void 0,Re=N.target[z]),N.isHydrated=!0,Re.min=Y,Re.max=xe,V=!0,C.notifySetAxisTarget()},rebaseProjectionTarget:function(z,Y){Y===void 0&&(Y=D.layout);var xe=te.getProjectionAnimationProgress(),Me=xe.x,Re=xe.y,nt=!N.relativeTarget&&!N.isTargetLocked&&!Me.isAnimating()&&!Re.isAnimating();(z||nt)&&rn(function(w){var b=Y[w],X=b.min,K=b.max;te.setProjectionTargetAxis(w,X,K)})},notifyLayoutReady:function(z){rx(te),te.notifyLayoutUpdate(D.layout,te.prevViewportBox||D.layout,z)},resetTransform:function(){return c(te,S,m)},restoreTransform:function(){return u(S,A)},updateLayoutProjection:ge,updateTreeLayoutProjection:function(){te.layoutTree.forEach(sx),An.preRender(Ve,!1,!0)},getProjectionParent:function(){if(M===void 0){for(var z=!1,Y=te.path.length-1;Y>=0;Y--){var xe=te.path[Y];if(xe.projection.isEnabled){z=xe;break}}M=z}return M},resolveRelativeTargetBox:function(){var z=te.getProjectionParent();if(!(!N.relativeTarget||!z)&&(W0(N,z.projection),Hp(z))){var Y=N.target;Yl(Y,Y,z.getLatestValues())}},shouldResetTransform:function(){return!!m._layoutResetTransform},pointTo:function(z){R=z.projection,$=z.getLatestValues(),J==null||J(),J=Qs(z.onSetAxisTarget(te.scheduleUpdateLayoutProjection),z.onLayoutAnimationComplete(function(){var Y;te.isPresent?te.presence=Bs.Present:(Y=te.layoutSafeToRemove)===null||Y===void 0||Y.call(te)}))},isPresent:!0,presence:Bs.Entering});return te}};function sx(i){i.resolveRelativeTargetBox()}function ox(i){i.updateLayoutProjection()}var Zp=fn(["initial"],Nt(Cc)),ax=Zp.length,lx=new Set(["initial","animate","exit","style","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","onLayoutAnimationComplete","onViewportBoxUpdate","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","whileDrag","onPan","onPanStart","onPanEnd","onPanSessionStart","onTap","onTapStart","onTapCancel","onHoverStart","onHoverEnd","whileFocus","whileTap","whileHover"]);function ca(i){return lx.has(i)}const Pi=i=>sr("Presence",i)||Rn(null);let cx=0;const ux=()=>cx++;function fx(i){return i===null?!0:i.isPresent}const Jp=(i=!1)=>{const e=kt(Pi)||Pi(i),t=_n(e)===null?void 0:ux();return qs(()=>{_n(e)!==null&&_n(e).register(t)}),_n(e)===null?Lp([!0,null]):Qv(e,n=>!n.isPresent&&n.onExitComplete?[!1,()=>{var r;return(r=n.onExitComplete)==null?void 0:r.call(n,t)}]:[!0])},Vu=i=>sr("LayoutGroup",i)||Rn(null);function Qp(i){var e=i.projection.isEnabled;return e||i.shouldResetTransform()}function ua(i,e){e===void 0&&(e=[]);var t=i.parent;return t&&ua(t,e),Qp(i)&&e.push(i),e}function dx(i){var e=[],t=function(n){Qp(n)&&e.push(n),n.children.forEach(t)};return i.children.forEach(t),e.sort(Pc)}function qo(i){if(!i.shouldResetTransform()){var e=i.getLayoutState();i.notifyBeforeLayoutMeasure(e.layout),e.isHydrated=!0,e.layout=i.measureViewportBox(),e.layoutCorrected=F0(e.layout),i.notifyLayoutMeasure(e.layout,i.prevViewportBox||e.layout),An.update(function(){return i.rebaseProjectionTarget()})}}function hx(i,e){i.shouldResetTransform()||(e||(i.prevViewportBox=i.measureViewportBox(!1)),i.rebaseProjectionTarget(!1,i.prevViewportBox))}var Cs=new Set;function ku(i,e,t){i[t]||(i[t]=[]),i[t].push(e)}function ql(i){return Cs.add(i),function(){return Cs.delete(i)}}function Kl(){if(Cs.size){var i=0,e=[[]],t=[],n=function(a){return ku(e,a,i)},r=function(a){ku(t,a,i),i++};Cs.forEach(function(a){a(n,r),i=0}),Cs.clear(),An.postRender(function(){setTimeout(function(){return!1},10)});for(var s=t.length,o=0;o<=s;o++)e[o]&&e[o].forEach(zu),t[o]&&t[o].forEach(zu)}}var zu=function(i){return i()},px={layoutReady:function(i){return i.notifyLayoutReady()}};function em(){var i=new Set;return{add:function(e){return i.add(e)},flush:function(e){var t=e===void 0?px:e,n=t.layoutReady,r=t.parent;ql(function(s,o){var a=Array.from(i).sort(Pc),l=r?ua(r):[];o(function(){var c=fn(fn([],Nt(l)),Nt(a));c.forEach(function(u){return u.resetTransform()})}),s(function(){a.forEach(qo)}),o(function(){l.forEach(function(c){return c.restoreTransform()}),a.forEach(n)}),s(function(){a.forEach(function(c){c.isPresent&&(c.presence=Bs.Present)})}),o(function(){Dr.preRender(),Dr.render()}),s(function(){An.postRender(function(){return a.forEach(mx)}),i.clear()})}),Kl()}}}function mx(i){i.prevViewportBox=i.projection.target}var Hu=i=>sr("SharedLayout",i)||Rn(em()),Gu=()=>Rn(em());function ur(i){return!!i.forceUpdate}const Wu=i=>sr("Lazy",i)||Rn({strict:!1}),er=i=>sr("Motion",i)||Rn({}),gx=i=>({visualElement:i&1}),Xu=i=>({visualElement:i[0]});function _x(i){let e;const t=i[19].default,n=_t(t,i,i[18],Xu);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&262145)&&xt(n,t,r,r[18],e?vt(t,r[18],s,gx):yt(r[18]),Xu)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function vx(i,e,t){let n,r,s,o,a,{$$slots:l={},$$scope:c}=e,{createVisualElement:u=void 0,props:f,Component:d,visualState:h,isCustom:g}=e;const _=kt(wi)||wi(g);qt(i,_,C=>t(15,r=C));const p=kt(Pi)||Pi(g);qt(i,p,C=>t(14,n=C));const m=kt(Wu)||Wu(g);qt(i,m,C=>t(20,s=C));const x=kt(er)||er(g);qt(i,x,C=>t(17,a=C));let v=_n(x).visualElement;const y=kt(Vu)||Vu(g);qt(i,y,C=>t(16,o=C));let E=o&&f.layoutId!==void 0?o+"-"+f.layoutId:f.layoutId,A;u||(u=s.renderer);let S=A;return vc(()=>{Hh().then(()=>{var C;(C=S.animationState)==null||C.animateChanges()})}),ir(()=>{S==null||S.notifyUnmount()}),i.$$set=C=>{"createVisualElement"in C&&t(6,u=C.createVisualElement),"props"in C&&t(7,f=C.props),"Component"in C&&t(8,d=C.Component),"visualState"in C&&t(9,h=C.visualState),"isCustom"in C&&t(10,g=C.isCustom),"$$scope"in C&&t(18,c=C.$$scope)},i.$$.update=()=>{i.$$.dirty&131072&&t(11,v=a.visualElement),i.$$.dirty&65664&&t(12,E=o&&f.layoutId!==void 0?o+"-"+f.layoutId:f.layoutId),i.$$.dirty&31680&&!A&&u&&t(13,A=u(d,{visualState:h,parent:v,props:{...f,layoutId:E},presenceId:n==null?void 0:n.id,blockInitialAnimation:(n==null?void 0:n.initial)===!1})),i.$$.dirty&8192&&t(0,S=A),i.$$.dirty&55425&&S&&(S.setProps({...r,...f,layoutId:E}),t(0,S.isPresent=fx(n),S),t(0,S.isPresenceRoot=!v||v.presenceId!==(n==null?void 0:n.id),S),S.syncRender())},[S,_,p,m,x,y,u,f,d,h,g,v,E,A,n,r,o,a,c,l]}class xx extends ot{constructor(e){super(),st(this,e,vx,_x,tt,{createVisualElement:6,props:7,Component:8,visualState:9,isCustom:10})}}const yx=xx;var Gn=function(i){return{isEnabled:function(e){return i.some(function(t){return!!e[t]})}}},Zl={measureLayout:Gn(["layout","layoutId","drag"]),animation:Gn(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag"]),exit:Gn(["exit"]),drag:Gn(["drag","dragControls"]),focus:Gn(["whileFocus"]),hover:Gn(["whileHover","onHoverStart","onHoverEnd"]),tap:Gn(["whileTap","onTap","onTapStart","onTapCancel"]),pan:Gn(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),layoutAnimation:Gn(["layout","layoutId"])};function Mx(i){for(var e in i){var t=i[e];t!==null&&(Zl[e].Component=t)}}const bx=i=>({features:i&2}),ju=i=>({features:i[1]});function $u(i){let e;const t=i[4].default,n=_t(t,i,i[3],ju);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&10)&&xt(n,t,r,r[3],e?vt(t,r[3],s,bx):yt(r[3]),ju)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function Sx(i){let e,t,n=i[0]&&$u(i);return{c(){n&&n.c(),e=Ti()},m(r,s){n&&n.m(r,s),Ae(r,e,s),t=!0},p(r,[s]){r[0]?n?(n.p(r,s),s&1&&ne(n,1)):(n=$u(r),n.c(),ne(n,1),n.m(e.parentNode,e)):n&&(Fn(),re(n,1,1,()=>{n=null}),Bn())},i(r){t||(ne(n),t=!0)},o(r){re(n),t=!1},d(r){r&&Se(e),n&&n.d(r)}}}function Ex(i,e,t){let{$$slots:n={},$$scope:r}=e;const s=Object.keys(Zl),o=s.length;let{visualElement:a,props:l}=e,c=[];return i.$$set=u=>{"visualElement"in u&&t(0,a=u.visualElement),"props"in u&&t(2,l=u.props),"$$scope"in u&&t(3,r=u.$$scope)},i.$$.update=()=>{if(i.$$.dirty&7){t(1,c=[]);for(let u=0;u<o;u++){const f=s[u],{isEnabled:d,Component:h}=Zl[f];d(l)&&h&&c.push({Component:h,key:f,props:l,visualElement:a})}}},[a,c,l,r,n]}class Tx extends ot{constructor(e){super(),st(this,e,Ex,Sx,tt,{visualElement:0,props:2})}}const Ax=Tx;function wx(i){let e;const t=i[3].default,n=_t(t,i,i[2],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&4)&&xt(n,t,r,r[2],e?vt(t,r[2],s,null):yt(r[2]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function Rx(i,e,t){let{$$slots:n={},$$scope:r}=e,{value:s,isCustom:o}=e,a=Rn(s);return Il(er,a),Dp("Motion",o,a),ir(()=>{var l;(l=s==null?void 0:s.visualElement)==null||l.unmount()}),i.$$set=l=>{"value"in l&&t(0,s=l.value),"isCustom"in l&&t(1,o=l.isCustom),"$$scope"in l&&t(2,r=l.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&a.set(s)},[s,o,r,n]}class Cx extends ot{constructor(e){super(),st(this,e,Rx,wx,tt,{value:0,isCustom:1})}}const Px=Cx;var Lc=function(){return{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}},tm=function(){return Object.assign(Object.assign({},Lc()),{attrs:{}})},Lx=["","X","Y","Z"],Dx=["translate","scale","rotate","skew"],Ws=["transformPerspective","x","y","z"];Dx.forEach(function(i){return Lx.forEach(function(e){return Ws.push(i+e)})});function Ix(i,e){return Ws.indexOf(i)-Ws.indexOf(e)}var Nx=new Set(Ws);function Ta(i){return Nx.has(i)}var Ux=new Set(["originX","originY","originZ"]);function nm(i){return Ux.has(i)}function im(i,e){var t=e.layout,n=e.layoutId;return Ta(i)||nm(i)||(t||n!==void 0)&&!!Rs[i]}var Ox={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"};function Fx(i,e,t,n){var r=i.transform,s=i.transformKeys,o=e.enableHardwareAcceleration,a=o===void 0?!0:o,l=e.allowTransformNone,c=l===void 0?!0:l,u="";s.sort(Ix);for(var f=!1,d=s.length,h=0;h<d;h++){var g=s[h];u+=(Ox[g]||g)+"("+r[g]+") ",g==="z"&&(f=!0)}return!f&&a?u+="translateZ(0)":u=u.trim(),n?u=n(r,t?"":u):c&&t&&(u="none"),u}function Bx(i){var e=i.originX,t=e===void 0?"50%":e,n=i.originY,r=n===void 0?"50%":n,s=i.originZ,o=s===void 0?0:s;return t+" "+r+" "+o}function rm(i){return i.startsWith("--")}var Vx=function(i,e){return e&&typeof i=="number"?e.transform(i):i};function Dc(i,e,t,n,r,s,o,a){var l,c=i.style,u=i.vars,f=i.transform,d=i.transformKeys,h=i.transformOrigin;d.length=0;var g=!1,_=!1,p=!0;for(var m in e){var x=e[m];if(rm(m)){u[m]=x;continue}var v=Np[m],y=Vx(x,v);if(Ta(m)){if(g=!0,f[m]=y,d.push(m),!p)continue;x!==((l=v.default)!==null&&l!==void 0?l:0)&&(p=!1)}else if(nm(m))h[m]=y,_=!0;else if(n&&t&&n.isHydrated&&Rs[m]){var E=Rs[m].process(x,n,t),A=Rs[m].applyTo;if(A)for(var S=A.length,C=0;C<S;C++)c[A[C]]=E;else c[m]=E}else c[m]=y}n&&t&&o&&a?(c.transform=o(n.deltaFinal,n.treeScale,g?f:void 0),s&&(c.transform=s(f,c.transform)),c.transformOrigin=a(n)):(g&&(c.transform=Fx(i,r,p,s)),_&&(c.transformOrigin=Bx(h)))}const kx=i=>({styles:i&1}),Yu=i=>({styles:i[0]});function zx(i){let e;const t=i[5].default,n=_t(t,i,i[4],Yu);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&17)&&xt(n,t,r,r[4],e?vt(t,r[4],s,kx):yt(r[4]),Yu)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function Hx(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{visualState:o,isStatic:a,props:l}=e;const c=()=>{let u=Lc();Dc(u,o,void 0,void 0,{enableHardwareAcceleration:!a},l.transformTemplate);const{vars:f,style:d}=u;return{...f,...d}};return i.$$set=u=>{"visualState"in u&&t(1,o=u.visualState),"isStatic"in u&&t(2,a=u.isStatic),"props"in u&&t(3,l=u.props),"$$scope"in u&&t(4,s=u.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&t(0,n=c())},[n,o,a,l,s,r]}class Gx extends ot{constructor(e){super(),st(this,e,Hx,zx,tt,{visualState:1,isStatic:2,props:3})}}const Wx=Gx,Xx=i=>({styles:i&522}),qu=i=>({styles:i[4](i[9],i[1],i[3])});function jx(i){let e;const t=i[6].default,n=_t(t,i,i[7],qu);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&650)&&xt(n,t,r,r[7],e?vt(t,r[7],s,Xx):yt(r[7]),qu)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function $x(i){let e,t;return e=new Wx({props:{props:i[1],visualState:i[0],isStatic:i[2],$$slots:{default:[jx,({styles:n})=>({9:n}),({styles:n})=>n?512:0]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&2&&(s.props=n[1]),r&1&&(s.visualState=n[0]),r&4&&(s.isStatic=n[2]),r&650&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function sm(i,e,t){for(const n in e)!Ci(e[n])&&!im(n,t)&&(i[n]=e[n])}function Yx(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{visualState:o,props:a,isStatic:l}=e,c={};const u=sm,f=d=>(Object.assign(c,d),a.transformValues&&t(3,c=a.transformValues(c)),c);return i.$$set=d=>{"visualState"in d&&t(0,o=d.visualState),"props"in d&&t(1,a=d.props),"isStatic"in d&&t(2,l=d.isStatic),"$$scope"in d&&t(7,s=d.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&t(5,n=a.style||{}),i.$$.dirty&42&&u(c,n,a)},[o,a,l,c,f,n,r,s]}class qx extends ot{constructor(e){super(),st(this,e,Yx,$x,tt,{visualState:0,props:1,isStatic:2})}}const Kx=qx,Zx=i=>({visualProps:i&65}),Ku=i=>({visualProps:i[3](i[6],i[0])});function Jx(i){let e;const t=i[4].default,n=_t(t,i,i[5],Ku);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&97)&&xt(n,t,r,r[5],e?vt(t,r[5],s,Zx):yt(r[5]),Ku)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function Qx(i){let e,t;return e=new Kx({props:{visualState:i[1],props:i[0],isStatic:i[2],$$slots:{default:[Jx,({styles:n})=>({6:n}),({styles:n})=>n?64:0]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&2&&(s.visualState=n[1]),r&1&&(s.props=n[0]),r&4&&(s.isStatic=n[2]),r&97&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function ey(i,e,t){let{$$slots:n={},$$scope:r}=e,{props:s,visualState:o,isStatic:a}=e;const l=(c,u)=>{let f={};return u.drag&&(f.draggable=!1,c.userSelect=c.WebkitUserSelect=c.WebkitTouchCallout="none",c.touchAction=u.drag===!0?"none":`pan-${u.drag==="x"?"y":"x"}`),f.style=c,f};return i.$$set=c=>{"props"in c&&t(0,s=c.props),"visualState"in c&&t(1,o=c.visualState),"isStatic"in c&&t(2,a=c.isStatic),"$$scope"in c&&t(5,r=c.$$scope)},[s,o,a,l,n,r]}class ty extends ot{constructor(e){super(),st(this,e,ey,Qx,tt,{props:0,visualState:1,isStatic:2})}}const Zu=ty;function Ju(i,e,t){return typeof i=="string"?i:ke.transform(e+t*i)}function ny(i,e,t){var n=Ju(e,i.x,i.width),r=Ju(t,i.y,i.height);return n+" "+r}var Wa=function(i,e){return ke.transform(i*e)},iy={offset:"stroke-dashoffset",array:"stroke-dasharray"},ry={offset:"strokeDashoffset",array:"strokeDasharray"};function sy(i,e,t,n,r,s){n===void 0&&(n=1),r===void 0&&(r=0),s===void 0&&(s=!0);var o=s?iy:ry;i[o.offset]=Wa(-r,e);var a=Wa(t,e),l=Wa(n,e);i[o.array]=a+" "+l}function Ic(i,e,t,n,r,s,o,a){var l=e.attrX,c=e.attrY,u=e.originX,f=e.originY,d=e.pathLength,h=e.pathSpacing,g=h===void 0?1:h,_=e.pathOffset,p=_===void 0?0:_,m=ii(e,["attrX","attrY","originX","originY","pathLength","pathSpacing","pathOffset"]);Dc(i,m,t,n,r,s,o,a),i.attrs=i.style,i.style={};var x=i.attrs,v=i.style,y=i.dimensions,E=i.totalPathLength;x.transform&&(y&&(v.transform=x.transform),delete x.transform),y&&(u!==void 0||f!==void 0||v.transform)&&(v.transformOrigin=ny(y,u!==void 0?u:.5,f!==void 0?f:.5)),l!==void 0&&(x.x=l),c!==void 0&&(x.y=c),E!==void 0&&d!==void 0&&sy(x,E,d,g,p,!1)}const oy=i=>({visualProps:i&1}),Qu=i=>({visualProps:i[0]});function ay(i){let e;const t=i[4].default,n=_t(t,i,i[3],Qu);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&9)&&xt(n,t,r,r[3],e?vt(t,r[3],s,oy):yt(r[3]),Qu)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function ly(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{visualState:o,props:a}=e,l=()=>{const c=tm();return Ic(c,o,void 0,void 0,{enableHardwareAcceleration:!1},a.transformTemplate),{...c.attrs,style:{...c.style}}};return i.$$set=c=>{"visualState"in c&&t(1,o=c.visualState),"props"in c&&t(2,a=c.props),"$$scope"in c&&t(3,s=c.$$scope)},i.$$.update=()=>{if(i.$$.dirty&2&&t(0,n=l()),i.$$.dirty&5&&a.style){const c={};sm(c,a.style,a),t(0,n.style={...c,...n.style},n)}},[n,o,a,s,r]}class cy extends ot{constructor(e){super(),st(this,e,ly,ay,tt,{visualState:1,props:2})}}const ef=cy;var om=function(i){return!ca(i)};try{var uy=require("@emotion/is-prop-valid").default;om=function(i){return i.startsWith("on")?!ca(i):uy(i)}}catch{}function fy(i,e,t){var n={};for(var r in i)(om(r)||t===!0&&ca(r)||!e&&!ca(r))&&(n[r]=i[r]);return n}const dy=i=>({props:i&2064}),tf=i=>({motion:i[5],props:{...i[4],...i[11]}});function hy(i){let e;const t=i[9].default,n=_t(t,i,i[10],tf);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&3088)&&xt(n,t,r,r[10],e?vt(t,r[10],s,dy):yt(r[10]),tf)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function py(i){let e,t,n;var r=i[2]==="SVG"?ef:Zu;function s(o,a){return{props:{visualState:o[1],isStatic:o[3],props:o[0],$$slots:{default:[hy,({visualProps:l})=>({11:l}),({visualProps:l})=>l?2048:0]},$$scope:{ctx:o}}}}return r&&(e=ea(r,s(i))),{c(){e&&we(e.$$.fragment),t=Ti()},m(o,a){e&&Ee(e,o,a),Ae(o,t,a),n=!0},p(o,[a]){if(a&4&&r!==(r=o[2]==="SVG"?ef:Zu)){if(e){Fn();const l=e;re(l.$$.fragment,1,0,()=>{Te(l,1)}),Bn()}r?(e=ea(r,s(o)),we(e.$$.fragment),ne(e.$$.fragment,1),Ee(e,t.parentNode,t)):e=null}else if(r){const l={};a&2&&(l.visualState=o[1]),a&8&&(l.isStatic=o[3]),a&1&&(l.props=o[0]),a&3088&&(l.$$scope={dirty:a,ctx:o}),e.$set(l)}},i(o){n||(e&&ne(e.$$.fragment,o),n=!0)},o(o){e&&re(e.$$.fragment,o),n=!1},d(o){o&&Se(t),e&&Te(e,o)}}}function my(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{props:o,visualState:a,Component:l,forwardMotionProps:c=!1,isStatic:u,ref:f,targetEl:d=void 0}=e;const h=g=>{f(g)};return i.$$set=g=>{"props"in g&&t(0,o=g.props),"visualState"in g&&t(1,a=g.visualState),"Component"in g&&t(2,l=g.Component),"forwardMotionProps"in g&&t(6,c=g.forwardMotionProps),"isStatic"in g&&t(3,u=g.isStatic),"ref"in g&&t(7,f=g.ref),"targetEl"in g&&t(8,d=g.targetEl),"$$scope"in g&&t(10,s=g.$$scope)},i.$$.update=()=>{i.$$.dirty&69&&t(4,n=fy(o,typeof l=="string",c)),i.$$.dirty&256&&d&&h(d)},[o,a,l,u,n,h,c,f,d,r,s]}class gy extends ot{constructor(e){super(),st(this,e,my,py,tt,{props:0,visualState:1,Component:2,forwardMotionProps:6,isStatic:3,ref:7,targetEl:8})}}const _y=gy;function am(i,e){var t=i.getBoundingClientRect();return zp(O0(t,e))}function Jl(i){return typeof i=="string"&&i.startsWith("var(--")}var lm=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function vy(i){var e=lm.exec(i);if(!e)return[,];var t=Nt(e,3),n=t[1],r=t[2];return[n,r]}function Ql(i,e,t){var n=Nt(vy(i),2),r=n[0],s=n[1];if(r){var o=window.getComputedStyle(e).getPropertyValue(r);return o?o.trim():Jl(s)?Ql(s,e):s}}function xy(i,e,t){var n,r=ii(e,[]),s=i.getInstance();if(!(s instanceof HTMLElement))return{target:r,transitionEnd:t};t&&(t=Object.assign({},t)),i.forEachValue(function(c){var u=c.get();if(Jl(u)){var f=Ql(u,s);f&&c.set(f)}});for(var o in r){var a=r[o];if(Jl(a)){var l=Ql(a,s);l&&(r[o]=l,t&&((n=t[o])!==null&&n!==void 0||(t[o]=a)))}}return{target:r,transitionEnd:t}}var yy=new Set(["width","height","top","left","right","bottom","x","y"]),cm=function(i){return yy.has(i)},My=function(i){return Object.keys(i).some(cm)},um=function(i,e){i.set(e,!1),i.set(e)},nf=function(i){return i===rr||i===ke},rf;(function(i){i.width="width",i.height="height",i.left="left",i.right="right",i.top="top",i.bottom="bottom"})(rf||(rf={}));var sf=function(i,e){return parseFloat(i.split(", ")[e])},of=function(i,e){return function(t,n){var r=n.transform;if(r==="none"||!r)return 0;var s=r.match(/^matrix3d\((.+)\)$/);if(s)return sf(s[1],e);var o=r.match(/^matrix\((.+)\)$/);return o?sf(o[1],i):0}},by=new Set(["x","y","z"]),Sy=Ws.filter(function(i){return!by.has(i)});function Ey(i){var e=[];return Sy.forEach(function(t){var n=i.getValue(t);n!==void 0&&(e.push([t,n.get()]),n.set(t.startsWith("scale")?1:0))}),e.length&&i.syncRender(),e}var af={width:function(i){var e=i.x;return e.max-e.min},height:function(i){var e=i.y;return e.max-e.min},top:function(i,e){var t=e.top;return parseFloat(t)},left:function(i,e){var t=e.left;return parseFloat(t)},bottom:function(i,e){var t=i.y,n=e.top;return parseFloat(n)+(t.max-t.min)},right:function(i,e){var t=i.x,n=e.left;return parseFloat(n)+(t.max-t.min)},x:of(4,13),y:of(5,14)},Ty=function(i,e,t){var n=e.measureViewportBox(),r=e.getInstance(),s=getComputedStyle(r),o=s.display,a=s.top,l=s.left,c=s.bottom,u=s.right,f=s.transform,d={top:a,left:l,bottom:c,right:u,transform:f};o==="none"&&e.setStaticValue("display",i.display||"block"),e.syncRender();var h=e.measureViewportBox();return t.forEach(function(g){var _=e.getValue(g);um(_,af[g](n,d)),i[g]=af[g](h,s)}),i},Ay=function(i,e,t,n){t===void 0&&(t={}),n===void 0&&(n={}),e=Object.assign({},e),n=Object.assign({},n);var r=Object.keys(e).filter(cm),s=[],o=!1,a=[];if(r.forEach(function(c){var u=i.getValue(c);if(i.hasValue(c)){var f=t[c],d=e[c],h=Ga(f),g;if(Hs(d))for(var _=d.length,p=d[0]===null?1:0;p<_;p++)g||(g=Ga(d[p]));else g=Ga(d);if(h!==g)if(nf(h)&&nf(g)){var m=u.get();typeof m=="string"&&u.set(parseFloat(m)),typeof d=="string"?e[c]=parseFloat(d):Array.isArray(d)&&g===ke&&(e[c]=d.map(parseFloat))}else h!=null&&h.transform&&(g!=null&&g.transform)&&(f===0||d===0)?f===0?u.set(g.transform(f)):e[c]=h.transform(d):(o||(s=Ey(i),o=!0),a.push(c),n[c]=n[c]!==void 0?n[c]:e[c],um(u,d))}}),a.length){var l=Ty(e,i,a);return s.length&&s.forEach(function(c){var u=Nt(c,2),f=u[0],d=u[1];i.getValue(f).set(d)}),i.syncRender(),{target:l,transitionEnd:n}}else return{target:e,transitionEnd:n}};function wy(i,e,t,n){return My(e)?Ay(i,e,t,n):{target:e,transitionEnd:n}}var Ry=function(i,e,t,n){var r=xy(i,e,n);return e=r.target,n=r.transitionEnd,wy(i,e,t,n)};function Nc(i){var e=i.style,t={};for(var n in e)(Ci(e[n])||im(n,i))&&(t[n]=e[n]);return t}function fm(i,e){var t=e.style,n=e.vars;Object.assign(i.style,t);for(var r in n)i.style.setProperty(r,n[r])}function Cy(i){return window.getComputedStyle(i)}var dm={treeType:"dom",readValueFromInstance:function(i,e){if(Ta(e)){var t=Tc(e);return t&&t.default||0}else{var n=Cy(i);return(rm(e)?n.getPropertyValue(e):n[e])||0}},sortNodePosition:function(i,e){return i.compareDocumentPosition(e)&2?1:-1},getBaseTarget:function(i,e){var t;return(t=i.style)===null||t===void 0?void 0:t[e]},measureViewportBox:function(i,e){var t=e.transformPagePoint;return am(i,t)},resetTransform:function(i,e,t){var n=t.transformTemplate;e.style.transform=n?n({},""):"none",i.scheduleRender()},restoreTransform:function(i,e){i.style.transform=e.style.transform},removeValueFromRenderState:function(i,e){var t=e.vars,n=e.style;delete t[i],delete n[i]},makeTargetAnimatable:function(i,e,t,n){var r=t.transformValues;n===void 0&&(n=!0);var s=e.transition,o=e.transitionEnd,a=ii(e,["transition","transitionEnd"]),l=R0(a,s||{},i);if(r&&(o&&(o=r(o)),a&&(a=r(a)),l&&(l=r(l))),n){A0(i,a,l);var c=Ry(i,a,l,o);o=c.transitionEnd,a=c.target}return Object.assign({transition:s,transitionEnd:o},a)},scrapeMotionValuesFromProps:Nc,build:function(i,e,t,n,r,s,o){i.isVisible!==void 0&&(e.style.visibility=i.isVisible?"visible":"hidden");var a=n.isEnabled&&r.isHydrated;Dc(e,t,n,r,s,o.transformTemplate,a?Ea:void 0,a?Yp:void 0)},render:fm},Py=Kp(dm);function hm(i){var e=Nc(i);for(var t in i)if(Ci(i[t])){var n=t==="x"||t==="y"?"attr"+t.toUpperCase():t;e[n]=i[t]}return e}var Ly=/([a-z])([A-Z])/g,Dy="$1-$2",pm=function(i){return i.replace(Ly,Dy).toLowerCase()},mm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox"]);function gm(i,e){fm(i,e);for(var t in e.attrs)i.setAttribute(mm.has(t)?t:pm(t),e.attrs[t])}var Iy=Kp(Object.assign(Object.assign({},dm),{getBaseTarget:function(i,e){return i[e]},readValueFromInstance:function(i,e){var t;return Ta(e)?((t=Tc(e))===null||t===void 0?void 0:t.default)||0:(e=mm.has(e)?e:pm(e),i.getAttribute(e))},scrapeMotionValuesFromProps:hm,build:function(i,e,t,n,r,s,o){var a=n.isEnabled&&r.isHydrated;Ic(e,t,n,r,s,o.transformTemplate,a?Ea:void 0,a?Yp:void 0)},render:gm})),Ny=function(i,e){return i==="SVG"?Iy(e,{enableHardwareAcceleration:!1}):Py(e,{enableHardwareAcceleration:!0})},Uy={scrapeMotionValuesFromProps:hm,createRenderState:tm,onMount:function(i,e,t){var n=t.renderState,r=t.latestValues;try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}Oy(e)&&(n.totalPathLength=e.getTotalLength()),Ic(n,r,void 0,void 0,{enableHardwareAcceleration:!1},i.transformTemplate),gm(e,n)}};function Oy(i){return i.tagName==="path"}var Fy={scrapeMotionValuesFromProps:Nc,createRenderState:Lc};function lf(i,e){if(Sa(i)){var t=i.initial,n=i.animate;return{initial:t===!1||Sn(t)?t:void 0,animate:Sn(n)?n:void 0}}return i.inherit!==!1?e||{}:{}}const By=i=>({value:i&1}),cf=i=>({value:i[0]});function Vy(i){let e;const t=i[9].default,n=_t(t,i,i[8],cf);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&257)&&xt(n,t,r,r[8],e?vt(t,r[8],s,By):yt(r[8]),cf)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function ky(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{props:o,isStatic:a,isCustom:l}=e,c=kt(er)||er(l);qt(i,c,_=>t(7,n=_));let{initial:u,animate:f}=lf(o,_n(c));const d=_=>Array.isArray(_)?_.join(" "):_,h=()=>({initial:u,animate:f});let g=h();return i.$$set=_=>{"props"in _&&t(2,o=_.props),"isStatic"in _&&t(3,a=_.isStatic),"isCustom"in _&&t(4,l=_.isCustom),"$$scope"in _&&t(8,s=_.$$scope)},i.$$.update=()=>{i.$$.dirty&132&&t(5,{initial:u,animate:f}=lf(o,n),u,(t(6,f),t(2,o),t(7,n))),i.$$.dirty&104&&a&&t(0,g=h(d(u),d(f)))},[g,c,o,a,l,u,f,n,s,r]}class zy extends ot{constructor(e){super(),st(this,e,ky,Vy,tt,{props:2,isStatic:3,isCustom:4})}}const Hy=zy;function Gy(i){var e=Ci(i)?i.get():i;return _0(e)?e.toValue():e}const Wy=i=>({state:i&1}),uf=i=>({state:i[0]});function Xy(i){let e;const t=i[10].default,n=_t(t,i,i[9],uf);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&513)&&xt(n,t,r,r[9],e?vt(t,r[9],s,Wy):yt(r[9]),uf)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}const ff=({scrapeMotionValuesFromProps:i,createRenderState:e,onMount:t},n,r,s)=>{const o={latestValues:jy(n,r,s,i),renderState:e()};return t&&(o.mount=a=>t(n,a,o)),o};function jy(i,e,t,n){const r={},s=(t==null?void 0:t.initial)===!1,o=n(i);for(const d in o)r[d]=Gy(o[d]);let{initial:a,animate:l}=i;const c=Sa(i),u=Vp(i);e&&u&&!c&&i.inherit!==!1&&(a??(a=e.initial),l??(l=e.animate));const f=s||a===!1?l:a;return f&&typeof f!="boolean"&&!Rc(f)&&(Array.isArray(f)?f:[f]).forEach(h=>{const g=Bp(i,h);if(!g)return;const{transitionEnd:_,transition:p,...m}=g;for(const x in m)r[x]=m[x];for(const x in _)r[x]=_[x]}),r}function $y(i,e,t){let n,r,{$$slots:s={},$$scope:o}=e,{config:a,props:l,isStatic:c,isCustom:u}=e;const f=kt(er)||er(u);qt(i,f,_=>t(8,r=_));const d=kt(Pi)||Pi(u);qt(i,d,_=>t(7,n=_));let h=ff(a,l,_n(f),_n(d));const g=ff;return i.$$set=_=>{"config"in _&&t(3,a=_.config),"props"in _&&t(4,l=_.props),"isStatic"in _&&t(5,c=_.isStatic),"isCustom"in _&&t(6,u=_.isCustom),"$$scope"in _&&t(9,o=_.$$scope)},i.$$.update=()=>{i.$$.dirty&440&&c&&t(0,h=g(a,l,r,n))},[h,f,d,a,l,c,u,n,r,o,s]}class Yy extends ot{constructor(e){super(),st(this,e,$y,Xy,tt,{config:3,props:4,isStatic:5,isCustom:6})}}const qy=Yy;function ec(i){return typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function df(i,e,t){return function(n){var r;n&&((r=i.mount)===null||r===void 0||r.call(i,n)),e&&(n?e.mount(n):e.unmount()),t&&(typeof t=="function"?t(n):ec(t)&&(t.current=n))}}function hf(i,e,t){const n=i.slice();return n[21]=e[t],n}const Ky=i=>({motion:i&16777216,props:i&33554432}),pf=i=>({motion:i[24],props:i[25]});function Zy(i){let e;const t=i[14].default,n=_t(t,i,i[15],pf);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&50364416)&&xt(n,t,r,r[15],e?vt(t,r[15],s,Ky):yt(r[15]),pf)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function Jy(i){let e,t;return e=new _y({props:{Component:i[6],props:i[4],ref:df(i[18],i[17].visualElement,i[1]),visualState:i[18],isStatic:i[3],forwardMotionProps:i[0],$$slots:{default:[Zy,({motion:n,props:r})=>({24:n,25:r}),({motion:n,props:r})=>(n?16777216:0)|(r?33554432:0)]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&16&&(s.props=n[4]),r&393218&&(s.ref=df(n[18],n[17].visualElement,n[1])),r&262144&&(s.visualState=n[18]),r&8&&(s.isStatic=n[3]),r&1&&(s.forwardMotionProps=n[0]),r&50364416&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function mf(i){let e=[],t=new Map,n,r,s=Ai(i[20]);const o=a=>a[21].key;for(let a=0;a<s.length;a+=1){let l=hf(i,s,a),c=o(l);t.set(c,e[a]=gf(c,l))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();n=Ti()},m(a,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(a,l);Ae(a,n,l),r=!0},p(a,l){l&1048608&&(s=Ai(a[20]),Fn(),e=Xh(e,l,o,1,a,s,t,n.parentNode,Wh,gf,n,hf),Bn())},i(a){if(!r){for(let l=0;l<s.length;l+=1)ne(e[l]);r=!0}},o(a){for(let l=0;l<e.length;l+=1)re(e[l]);r=!1},d(a){a&&Se(n);for(let l=0;l<e.length;l+=1)e[l].d(a)}}}function gf(i,e){let t,n,r,s;var o=e[21].Component;function a(l,c){return{props:{props:l[21].props,visualElement:l[21].visualElement,isCustom:l[5]}}}return o&&(n=ea(o,a(e))),{key:i,first:null,c(){t=Ti(),n&&we(n.$$.fragment),r=Ti(),this.first=t},m(l,c){Ae(l,t,c),n&&Ee(n,l,c),Ae(l,r,c),s=!0},p(l,c){if(e=l,c&1048576&&o!==(o=e[21].Component)){if(n){Fn();const u=n;re(u.$$.fragment,1,0,()=>{Te(u,1)}),Bn()}o?(n=ea(o,a(e)),we(n.$$.fragment),ne(n.$$.fragment,1),Ee(n,r.parentNode,r)):n=null}else if(o){const u={};c&1048576&&(u.props=e[21].props),c&1048576&&(u.visualElement=e[21].visualElement),n.$set(u)}},i(l){s||(n&&ne(n.$$.fragment,l),s=!0)},o(l){n&&re(n.$$.fragment,l),s=!1},d(l){l&&(Se(t),Se(r)),n&&Te(n,l)}}}function Qy(i){let e,t,n,r;e=new Px({props:{value:i[17],isCustom:i[5],$$slots:{default:[Jy]},$$scope:{ctx:i}}});let s=i[2]&&mf(i);return{c(){we(e.$$.fragment),t=pt(),s&&s.c(),n=Ti()},m(o,a){Ee(e,o,a),Ae(o,t,a),s&&s.m(o,a),Ae(o,n,a),r=!0},p(o,a){const l={};a&131072&&(l.value=o[17]),a&426011&&(l.$$scope={dirty:a,ctx:o}),e.$set(l),o[2]?s?(s.p(o,a),a&4&&ne(s,1)):(s=mf(o),s.c(),ne(s,1),s.m(n.parentNode,n)):s&&(Fn(),re(s,1,1,()=>{s=null}),Bn())},i(o){r||(ne(e.$$.fragment,o),ne(s),r=!0)},o(o){re(e.$$.fragment,o),re(s),r=!1},d(o){o&&(Se(t),Se(n)),Te(e,o),s&&s.d(o)}}}function eM(i){let e,t;return e=new Ax({props:{visualElement:i[10](i[17],i[19]),props:i[4],$$slots:{default:[Qy,({features:n})=>({20:n}),({features:n})=>n?1048576:0]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&655360&&(s.visualElement=n[10](n[17],n[19])),r&16&&(s.props=n[4]),r&1474591&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function tM(i){let e,t;return e=new yx({props:{Component:i[6],visualState:i[18],createVisualElement:i[7],props:i[4],isCustom:i[5],$$slots:{default:[eM,({visualElement:n})=>({19:n}),({visualElement:n})=>n?524288:0]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&262144&&(s.visualState=n[18]),r&16&&(s.props=n[4]),r&950303&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function nM(i){let e,t;return e=new qy({props:{config:i[8],props:i[4],isStatic:i[3],isCustom:i[5],$$slots:{default:[tM,({state:n})=>({18:n}),({state:n})=>n?262144:0]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&16&&(s.props=n[4]),r&8&&(s.isStatic=n[3]),r&426015&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function iM(i){let e,t;return e=new Hy({props:{props:i[4],isStatic:i[3],isCustom:i[5],$$slots:{default:[nM,({value:n})=>({17:n}),({value:n})=>n?131072:0]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&16&&(s.props=n[4]),r&8&&(s.isStatic=n[3]),r&163871&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function rM(i){let e,t;return e=new r0({props:{isCustom:i[5],$$slots:{default:[iM]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&32799&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function sM(i,e,t){let n,r;const s=["isSVG","forwardMotionProps","externalRef","targetEl"];let o=su(e,s),a,{$$slots:l={},$$scope:c}=e,{isSVG:u=!1,forwardMotionProps:f=!1,externalRef:d=void 0,targetEl:h=void 0}=e;const g=h;let _=u?"SVG":"DOM",p=Ny,m=u?Uy:Fy;const x=kt(wi)||wi(g);qt(i,x,E=>t(13,a=E));let v=!1;const y=(E,A)=>(E.visualElement=A,A);return qs(()=>t(2,v=!0)),i.$$set=E=>{e=Qn(Qn({},e),Us(E)),t(16,o=su(e,s)),"isSVG"in E&&t(11,u=E.isSVG),"forwardMotionProps"in E&&t(0,f=E.forwardMotionProps),"externalRef"in E&&t(1,d=E.externalRef),"targetEl"in E&&t(12,h=E.targetEl),"$$scope"in E&&t(15,c=E.$$scope)},i.$$.update=()=>{t(4,n=o),i.$$.dirty&8192&&t(3,{isStatic:r}=a||{},r)},[f,d,v,r,n,g,_,p,m,x,y,u,h,a,l,c]}class oM extends ot{constructor(e){super(),st(this,e,sM,rM,tt,{isSVG:11,forwardMotionProps:0,externalRef:1,targetEl:12})}}function aM(i){let e;const t=i[5].default,n=_t(t,i,i[4],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&16)&&xt(n,t,r,r[4],e?vt(t,r[4],s,null):yt(r[4]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function Uc(i,e,t,n){return i.addEventListener(e,t,n),function(){return i.removeEventListener(e,t,n)}}function lM(i,e,t){let{$$slots:n={},$$scope:r}=e,{ref:s,eventName:o,handler:a=void 0,options:l=void 0}=e,c=()=>{};const u=()=>{if(c(),!s)return()=>{};const f=s.current;return a&&f?Uc(f,o,a,l):()=>{}};return ir(c),i.$$set=f=>{"ref"in f&&t(0,s=f.ref),"eventName"in f&&t(1,o=f.eventName),"handler"in f&&t(2,a=f.handler),"options"in f&&t(3,l=f.options),"$$scope"in f&&t(4,r=f.$$scope)},i.$$.update=()=>{i.$$.dirty&15&&(c=u())},[s,o,a,l,r,n]}class cM extends ot{constructor(e){super(),st(this,e,lM,aM,tt,{ref:0,eventName:1,handler:2,options:3})}}const Oc=cM;function _m(i){return typeof PointerEvent<"u"&&i instanceof PointerEvent?i.pointerType==="mouse":i instanceof MouseEvent}function vm(i){var e=!!i.touches;return e}function uM(i){return function(e){var t=e instanceof MouseEvent,n=!t||t&&e.button===0;n&&i(e)}}var fM={pageX:0,pageY:0};function dM(i,e){e===void 0&&(e="page");var t=i.touches[0]||i.changedTouches[0],n=t||fM;return{x:n[e+"X"],y:n[e+"Y"]}}function hM(i,e){return e===void 0&&(e="page"),{x:i[e+"X"],y:i[e+"Y"]}}function Fc(i,e){return e===void 0&&(e="page"),{point:vm(i)?dM(i,e):hM(i,e)}}function pM(i){return Fc(i,"client")}var tc=function(i,e){e===void 0&&(e=!1);var t=function(n){return i(n,Fc(n))};return e?uM(t):t},Bc=typeof window<"u",mM=function(){return Bc&&window.onpointerdown===null},gM=function(){return Bc&&window.ontouchstart===null},_M=function(){return Bc&&window.onmousedown===null};function vM(i){let e;const t=i[4].default,n=_t(t,i,i[5],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&32)&&xt(n,t,r,r[5],e?vt(t,r[5],s,null):yt(r[5]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function xM(i){let e,t;return e=new Oc({props:{ref:i[0],eventName:nc(i[1]),handler:i[2]&&tc(i[2],i[1]==="pointerdown"),options:i[3],$$slots:{default:[vM]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.ref=n[0]),r&2&&(s.eventName=nc(n[1])),r&6&&(s.handler=n[2]&&tc(n[2],n[1]==="pointerdown")),r&8&&(s.options=n[3]),r&32&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}const yM={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},MM={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function nc(i){return mM()?i:gM()?MM[i]:_M()?yM[i]:i}function Br(i,e,t,n){return Uc(i,nc(e),tc(t,e==="pointerdown"),n)}function bM(i,e,t){let{$$slots:n={},$$scope:r}=e,{ref:s,eventName:o,handler:a=void 0,options:l=void 0}=e;return i.$$set=c=>{"ref"in c&&t(0,s=c.ref),"eventName"in c&&t(1,o=c.eventName),"handler"in c&&t(2,a=c.handler),"options"in c&&t(3,l=c.options),"$$scope"in c&&t(5,r=c.$$scope)},[s,o,a,l,n,r]}class SM extends ot{constructor(e){super(),st(this,e,bM,xM,tt,{ref:0,eventName:1,handler:2,options:3})}}const fa=SM;var xm=function(){function i(e,t,n){var r=this,s=n===void 0?{}:n,o=s.transformPagePoint;if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=function(){if(r.lastMoveEvent&&r.lastMoveEventInfo){var d=ja(r.lastMoveEventInfo,r.history),h=r.startEvent!==null,g=Ep(d.offset,{x:0,y:0})>=3;if(!(!h&&!g)){var _=d.point,p=ta().timestamp;r.history.push(Object.assign(Object.assign({},_),{timestamp:p}));var m=r.handlers,x=m.onStart,v=m.onMove;h||(x&&x(r.lastMoveEvent,d),r.startEvent=r.lastMoveEvent),v&&v(r.lastMoveEvent,d)}}},this.handlePointerMove=function(d,h){if(r.lastMoveEvent=d,r.lastMoveEventInfo=Xa(h,r.transformPagePoint),_m(d)&&d.buttons===0){r.handlePointerUp(d,h);return}An.update(r.updatePoint,!0)},this.handlePointerUp=function(d,h){r.end();var g=r.handlers,_=g.onEnd,p=g.onSessionEnd,m=ja(Xa(h,r.transformPagePoint),r.history);r.startEvent&&_&&_(d,m),p&&p(d,m)},!(vm(e)&&e.touches.length>1)){this.handlers=t,this.transformPagePoint=o;var a=Fc(e),l=Xa(a,this.transformPagePoint),c=l.point,u=ta().timestamp;this.history=[Object.assign(Object.assign({},c),{timestamp:u})];var f=t.onSessionStart;f&&f(e,ja(l,this.history)),this.removeListeners=Qs(Br(window,"pointermove",this.handlePointerMove),Br(window,"pointerup",this.handlePointerUp),Br(window,"pointercancel",this.handlePointerUp))}}return i.prototype.updateHandlers=function(e){this.handlers=e},i.prototype.end=function(){this.removeListeners&&this.removeListeners(),Ts.update(this.updatePoint)},i}();function Xa(i,e){return e?{point:e(i.point)}:i}function _f(i,e){return{x:i.x-e.x,y:i.y-e.y}}function ja(i,e){var t=i.point;return{point:t,delta:_f(t,ym(e)),offset:_f(t,EM(e)),velocity:TM(e,.1)}}function EM(i){return i[0]}function ym(i){return i[i.length-1]}function TM(i,e){if(i.length<2)return{x:0,y:0};for(var t=i.length-1,n=null,r=ym(i);t>=0&&(n=i[t],!(r.timestamp-n.timestamp>sa(e)));)t--;if(!n)return{x:0,y:0};var s=(r.timestamp-n.timestamp)/1e3;if(s===0)return{x:0,y:0};var o={x:(r.x-n.x)/s,y:(r.y-n.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function AM(i){let e;const t=i[11].default,n=_t(t,i,i[12],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&4096)&&xt(n,t,r,r[12],e?vt(t,r[12],s,null):yt(r[12]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function wM(i){let e,t;return e=new fa({props:{ref:i[0],eventName:"pointerdown",handler:i[1]&&i[3],$$slots:{default:[AM]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.ref=n[0]),r&2&&(s.handler=n[1]&&n[3]),r&4096&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function RM(i,e,t){let n,r,{$$slots:s={},$$scope:o}=e,{props:a,visualElement:l,isCustom:c}=e,{onPan:u,onPanStart:f,onPanEnd:d,onPanSessionStart:h}=a,g=null;const _=kt(wi)||wi(c);qt(i,_,v=>t(10,r=v));let{transformPagePoint:p}=_n(_),m={onSessionStart:h,onStart:f,onMove:u,onEnd:(v,y)=>{g=null,d&&d(v,y)}};function x(v){g=new xm(v,m,{transformPagePoint:p})}return vc(()=>{g!==null&&g.updateHandlers(m)}),ir(()=>g&&g.end()),i.$$set=v=>{"props"in v&&t(4,a=v.props),"visualElement"in v&&t(0,l=v.visualElement),"isCustom"in v&&t(5,c=v.isCustom),"$$scope"in v&&t(12,o=v.$$scope)},i.$$.update=()=>{i.$$.dirty&16&&t(6,{onPan:u,onPanStart:f,onPanEnd:d,onPanSessionStart:h}=a,u,(t(7,f),t(4,a)),(t(8,d),t(4,a)),(t(9,h),t(4,a))),i.$$.dirty&960&&t(1,n=u||f||d||h),i.$$.dirty&1024&&({transformPagePoint:p}=r),i.$$.dirty&960&&(m={onSessionStart:h,onStart:f,onMove:u,onEnd:(v,y)=>{g=null,d&&d(v,y)}})},[l,n,_,x,a,c,u,f,d,h,r,s,o]}class CM extends ot{constructor(e){super(),st(this,e,RM,wM,tt,{props:4,visualElement:0,isCustom:5})}}const PM=CM;var Mm=function(i,e){return e?i===e?!0:Mm(i,e.parentElement):!1};function bm(i){var e=null;return function(){var t=function(){e=null};return e===null?(e=i,t):!1}}var vf=bm("dragHorizontal"),xf=bm("dragVertical");function Sm(i){var e=!1;if(i==="y")e=xf();else if(i==="x")e=vf();else{var t=vf(),n=xf();t&&n?e=function(){t(),n()}:(t&&t(),n&&n())}return e}function Em(){var i=Sm(!0);return i?(i(),!1):!0}function LM(i){let e;const t=i[8].default,n=_t(t,i,i[9],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&512)&&xt(n,t,r,r[9],e?vt(t,r[9],s,null):yt(r[9]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function DM(i){let e,t;return e=new fa({props:{ref:i[0],eventName:"pointerdown",handler:i[1]?i[2]:void 0,$$slots:{default:[LM]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.ref=n[0]),r&2&&(s.handler=n[1]?n[2]:void 0),r&512&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function IM(i,e,t){let n,r,s,o,a,{$$slots:l={},$$scope:c}=e,{props:u,visualElement:f}=e,d=!1,h=null;function g(){h==null||h(),h=null}function _(){var v;return g(),d=!1,(v=f.animationState)==null||v.setActive(Lt.Tap,!1),!Em()}function p(v,y){_()&&(Mm(f.getInstance(),v.target)?n==null||n(v,y):s==null||s(v,y))}function m(v,y){_()&&(s==null||s(v,y))}function x(v,y){var E;d||(g(),d=!0,h=Qs(Br(window,"pointerup",p),Br(window,"pointercancel",m)),r==null||r(v,y),(E=f.animationState)==null||E.setActive(Lt.Tap,!0))}return ir(g),i.$$set=v=>{"props"in v&&t(3,u=v.props),"visualElement"in v&&t(0,f=v.visualElement),"$$scope"in v&&t(9,c=v.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&t(6,{onTap:n,onTapStart:r,onTapCancel:s,whileTap:o}=u,n,(t(4,r),t(3,u)),(t(5,s),t(3,u)),(t(7,o),t(3,u))),i.$$.dirty&240&&t(1,a=n||r||s||o)},[f,a,x,u,r,s,n,o,l,c]}class NM extends ot{constructor(e){super(),st(this,e,IM,DM,tt,{props:3,visualElement:0})}}const UM=NM;function OM(i){let e,t,n,r,s;e=new fa({props:{ref:i[0],eventName:"pointerenter",handler:i[1]||i[3]?mo(i[0],!0,i[1]):void 0}}),n=new fa({props:{ref:i[0],eventName:"pointerleave",handler:i[2]||i[3]?mo(i[0],!1,i[2]):void 0}});const o=i[6].default,a=_t(o,i,i[5],null);return{c(){we(e.$$.fragment),t=pt(),we(n.$$.fragment),r=pt(),a&&a.c()},m(l,c){Ee(e,l,c),Ae(l,t,c),Ee(n,l,c),Ae(l,r,c),a&&a.m(l,c),s=!0},p(l,[c]){const u={};c&1&&(u.ref=l[0]),c&11&&(u.handler=l[1]||l[3]?mo(l[0],!0,l[1]):void 0),e.$set(u);const f={};c&1&&(f.ref=l[0]),c&13&&(f.handler=l[2]||l[3]?mo(l[0],!1,l[2]):void 0),n.$set(f),a&&a.p&&(!s||c&32)&&xt(a,o,l,l[5],s?vt(o,l[5],c,null):yt(l[5]),null)},i(l){s||(ne(e.$$.fragment,l),ne(n.$$.fragment,l),ne(a,l),s=!0)},o(l){re(e.$$.fragment,l),re(n.$$.fragment,l),re(a,l),s=!1},d(l){l&&(Se(t),Se(r)),Te(e,l),Te(n,l),a&&a.d(l)}}}function mo(i,e,t){return(n,r)=>{var s;!_m(n)||Em()||(t==null||t(n,r),(s=i.animationState)==null||s.setActive(Lt.Hover,e))}}function FM(i,e,t){let{$$slots:n={},$$scope:r}=e,{props:s,visualElement:o}=e,{onHoverStart:a,onHoverEnd:l,whileHover:c}=s;return i.$$set=u=>{"props"in u&&t(4,s=u.props),"visualElement"in u&&t(0,o=u.visualElement),"$$scope"in u&&t(5,r=u.$$scope)},i.$$.update=()=>{i.$$.dirty&16&&t(1,{onHoverStart:a,onHoverEnd:l,whileHover:c}=s,a,(t(2,l),t(4,s)),(t(3,c),t(4,s)))},[o,a,l,c,s,r,n]}class BM extends ot{constructor(e){super(),st(this,e,FM,OM,tt,{props:4,visualElement:0})}}const VM=BM;function kM(i){let e;const t=i[5].default,n=_t(t,i,i[6],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&64)&&xt(n,t,r,r[6],e?vt(t,r[6],s,null):yt(r[6]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function zM(i){let e,t;return e=new Oc({props:{ref:i[0],eventName:"blur",handler:i[1]?i[3]:void 0,$$slots:{default:[kM]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.ref=n[0]),r&2&&(s.handler=n[1]?n[3]:void 0),r&64&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function HM(i){let e,t;return e=new Oc({props:{ref:i[0],eventName:"focus",handler:i[1]?i[2]:void 0,$$slots:{default:[zM]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.ref=n[0]),r&2&&(s.handler=n[1]?n[2]:void 0),r&67&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function GM(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{props:o,visualElement:a}=e;const l=()=>{var u;(u=a.animationState)==null||u.setActive(Lt.Focus,!0)},c=()=>{var u;(u=a.animationState)==null||u.setActive(Lt.Focus,!1)};return i.$$set=u=>{"props"in u&&t(4,o=u.props),"visualElement"in u&&t(0,a=u.visualElement),"$$scope"in u&&t(6,s=u.$$scope)},i.$$.update=()=>{i.$$.dirty&16&&t(1,{whileFocus:n}=o,n)},[a,n,l,c,o,r,s]}class WM extends ot{constructor(e){super(),st(this,e,GM,HM,tt,{props:4,visualElement:0})}}const XM=WM,jM=i=>(i&&Mx(i),oM),$M={tap:UM,focus:XM,hover:VM};function Tm(i,e,t){var n=e.min,r=e.max;return n!==void 0&&i<n?i=t?un(n,i,t.min):Math.max(i,n):r!==void 0&&i>r&&(i=t?un(r,i,t.max):Math.min(i,r)),i}function YM(i,e,t,n,r){var s=i-e*t;return n?Tm(s,n,r):s}function yf(i,e,t){return{min:e!==void 0?i.min+e:void 0,max:t!==void 0?i.max+t-(i.max-i.min):void 0}}function qM(i,e){var t=e.top,n=e.left,r=e.bottom,s=e.right;return{x:yf(i.x,n,s),y:yf(i.y,t,r)}}function Mf(i,e){var t,n=e.min-i.min,r=e.max-i.max;return e.max-e.min<i.max-i.min&&(t=Nt([r,n],2),n=t[0],r=t[1]),{min:i.min+n,max:i.min+r}}function KM(i,e){return{x:Mf(i.x,e.x),y:Mf(i.y,e.y)}}function ZM(i,e,t){var n=i.max-i.min,r=un(e.min,e.max-n,t);return{min:r,max:r+n}}function JM(i,e){var t={};return e.min!==void 0&&(t.min=e.min-i.min),e.max!==void 0&&(t.max=e.max-i.min),t}var Am=.35;function QM(i){return i===!1?i=0:i===!0&&(i=Am),{x:bf(i,"left","right"),y:bf(i,"top","bottom")}}function bf(i,e,t){return{min:Sf(i,e),max:Sf(i,t)}}function Sf(i,e){var t;return typeof i=="number"?i:(t=i[e])!==null&&t!==void 0?t:0}function eb(i,e){e===void 0&&(e=!0);var t=i.getProjectionParent();if(!t)return!1;var n;return e?(n=la(t.projection.target,i.projection.target),Xp(n,t.getLatestValues())):n=la(t.getLayoutState().layout,i.getLayoutState().layout),rn(function(r){return i.setProjectionTargetAxis(r,n[r].min,n[r].max,!0)}),!0}var tb=new WeakMap,Ef,nb=function(){function i(e){var t=e.visualElement;this.isDragging=!1,this.currentDirection=null,this.constraints=!1,this.elastic=Ri(),this.props={},this.hasMutatedConstraints=!1,this.cursorProgress={x:.5,y:.5},this.originPoint={},this.openGlobalLock=null,this.panSession=null,this.visualElement=t,this.visualElement.enableLayoutProjection(),tb.set(t,this)}return i.prototype.start=function(e,t){var n=this,r=t===void 0?{}:t,s=r.snapToCursor,o=s===void 0?!1:s,a=r.cursorProgress,l=function(h){var g;n.stopMotion();var _=pM(h).point;(g=n.cancelLayout)===null||g===void 0||g.call(n),n.cancelLayout=ql(function(p,m){var x=ua(n.visualElement),v=dx(n.visualElement),y=fn(fn([],Nt(x)),Nt(v)),E=!1;n.isLayoutDrag()&&n.visualElement.lockProjectionTarget(),m(function(){y.forEach(function(A){return A.resetTransform()})}),p(function(){qo(n.visualElement),v.forEach(qo)}),m(function(){y.forEach(function(A){return A.restoreTransform()}),o&&(E=n.snapToCursor(_))}),p(function(){var A=!!(n.getAxisMotionValue("x")&&!n.isExternalDrag());A||n.visualElement.rebaseProjectionTarget(!0,n.visualElement.measureViewportBox(!1)),n.visualElement.scheduleUpdateLayoutProjection();var S=n.visualElement.projection;rn(function(C){if(!E){var N=S.target[C],M=N.min,R=N.max;n.cursorProgress[C]=a?a[C]:ks(M,R,_[C])}var $=n.getAxisMotionValue(C);$&&(n.originPoint[C]=$.get())})}),m(function(){Dr.update(),Dr.preRender(),Dr.render(),Dr.postRender()}),p(function(){return n.resolveDragConstraints()})})},c=function(h,g){var _,p,m,x=n.props,v=x.drag,y=x.dragPropagation;v&&!y&&(n.openGlobalLock&&n.openGlobalLock(),n.openGlobalLock=Sm(v),!n.openGlobalLock)||(Kl(),n.isDragging=!0,n.currentDirection=null,(p=(_=n.props).onDragStart)===null||p===void 0||p.call(_,h,g),(m=n.visualElement.animationState)===null||m===void 0||m.setActive(Lt.Drag,!0))},u=function(h,g){var _,p,m,x,v=n.props,y=v.dragPropagation,E=v.dragDirectionLock;if(!(!y&&!n.openGlobalLock)){var A=g.offset;if(E&&n.currentDirection===null){n.currentDirection=ib(A),n.currentDirection!==null&&((p=(_=n.props).onDirectionLock)===null||p===void 0||p.call(_,n.currentDirection));return}n.updateAxis("x",g.point,A),n.updateAxis("y",g.point,A),(x=(m=n.props).onDrag)===null||x===void 0||x.call(m,h,g),Ef=h}},f=function(h,g){return n.stop(h,g)},d=this.props.transformPagePoint;this.panSession=new xm(e,{onSessionStart:l,onStart:c,onMove:u,onSessionEnd:f},{transformPagePoint:d})},i.prototype.resolveDragConstraints=function(){var e=this,t=this.props,n=t.dragConstraints,r=t.dragElastic,s=this.visualElement.getLayoutState().layoutCorrected;n?this.constraints=ec(n)?this.resolveRefConstraints(s,n):qM(s,n):this.constraints=!1,this.elastic=QM(r),this.constraints&&!this.hasMutatedConstraints&&rn(function(o){e.getAxisMotionValue(o)&&(e.constraints[o]=JM(s[o],e.constraints[o]))})},i.prototype.resolveRefConstraints=function(e,t){var n=this.props,r=n.onMeasureDragConstraints,s=n.transformPagePoint,o=t.current;this.constraintsBox=am(o,s);var a=KM(e,this.constraintsBox);if(r){var l=r(U0(a));this.hasMutatedConstraints=!!l,l&&(a=zp(l))}return a},i.prototype.cancelDrag=function(){var e,t;this.visualElement.unlockProjectionTarget(),(e=this.cancelLayout)===null||e===void 0||e.call(this),this.isDragging=!1,this.panSession&&this.panSession.end(),this.panSession=null,!this.props.dragPropagation&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),(t=this.visualElement.animationState)===null||t===void 0||t.setActive(Lt.Drag,!1)},i.prototype.stop=function(e,t){var n,r,s;(n=this.panSession)===null||n===void 0||n.end(),this.panSession=null;var o=this.isDragging;if(this.cancelDrag(),!!o){var a=t.velocity;this.animateDragEnd(a),(s=(r=this.props).onDragEnd)===null||s===void 0||s.call(r,e,t)}},i.prototype.snapToCursor=function(e){var t=this;return rn(function(n){var r=t.props.drag;if(go(n,r,t.currentDirection)){var s=t.getAxisMotionValue(n);if(s){var o=t.visualElement.getLayoutState().layout,a=o[n].max-o[n].min,l=o[n].min+a/2,c=e[n]-l;t.originPoint[n]=e[n],s.set(c)}else return t.cursorProgress[n]=.5,!0}}).includes(!0)},i.prototype.updateAxis=function(e,t,n){var r=this.props.drag;if(go(e,r,this.currentDirection))return this.getAxisMotionValue(e)?this.updateAxisMotionValue(e,n):this.updateVisualElementAxis(e,t)},i.prototype.updateAxisMotionValue=function(e,t){var n=this.getAxisMotionValue(e);if(!(!t||!n)){var r=this.originPoint[e]+t[e],s=this.constraints?Tm(r,this.constraints[e],this.elastic[e]):r;n.set(s)}},i.prototype.updateVisualElementAxis=function(e,t){var n,r=this.visualElement.getLayoutState().layout[e],s=r.max-r.min,o=this.cursorProgress[e],a=YM(t[e],s,o,(n=this.constraints)===null||n===void 0?void 0:n[e],this.elastic[e]);this.visualElement.setProjectionTargetAxis(e,a,a+s)},i.prototype.setProps=function(e){var t=e.drag,n=t===void 0?!1:t,r=e.dragDirectionLock,s=r===void 0?!1:r,o=e.dragPropagation,a=o===void 0?!1:o,l=e.dragConstraints,c=l===void 0?!1:l,u=e.dragElastic,f=u===void 0?Am:u,d=e.dragMomentum,h=d===void 0?!0:d,g=ii(e,["drag","dragDirectionLock","dragPropagation","dragConstraints","dragElastic","dragMomentum"]);this.props=Object.assign({drag:n,dragDirectionLock:s,dragPropagation:a,dragConstraints:c,dragElastic:f,dragMomentum:h},g)},i.prototype.getAxisMotionValue=function(e){var t=this.props,n=t.layout,r=t.layoutId,s="_drag"+e.toUpperCase();if(this.props[s])return this.props[s];if(!n&&r===void 0)return this.visualElement.getValue(e,0)},i.prototype.isLayoutDrag=function(){return!this.getAxisMotionValue("x")},i.prototype.isExternalDrag=function(){var e=this.props,t=e._dragX,n=e._dragY;return t||n},i.prototype.animateDragEnd=function(e){var t=this,n=this.props,r=n.drag,s=n.dragMomentum,o=n.dragElastic,a=n.dragTransition,l=eb(this.visualElement,this.isLayoutDrag()&&!this.isExternalDrag()),c=this.constraints||{};if(l&&Object.keys(c).length&&this.isLayoutDrag()){var u=this.visualElement.getProjectionParent();if(u){var f=la(u.projection.targetFinal,c);rn(function(h){var g=f[h],_=g.min,p=g.max;c[h]={min:isNaN(_)?void 0:_,max:isNaN(p)?void 0:p}})}}var d=rn(function(h){var g;if(go(h,r,t.currentDirection)){var _=(g=c==null?void 0:c[h])!==null&&g!==void 0?g:{},p=o?200:1e6,m=o?40:1e7,x=Object.assign(Object.assign({type:"inertia",velocity:s?e[h]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10},a),_);return t.getAxisMotionValue(h)?t.startAxisValueAnimation(h,x):t.visualElement.startLayoutAnimation(h,x,l)}});return Promise.all(d).then(function(){var h,g;(g=(h=t.props).onDragTransitionEnd)===null||g===void 0||g.call(h)})},i.prototype.stopMotion=function(){var e=this;rn(function(t){var n=e.getAxisMotionValue(t);n?n.stop():e.visualElement.stopLayoutAnimation()})},i.prototype.startAxisValueAnimation=function(e,t){var n=this.getAxisMotionValue(e);if(n){var r=n.get();return n.set(r),n.set(r),oa(e,n,0,t)}},i.prototype.scalePoint=function(){var e=this,t=this.props,n=t.drag,r=t.dragConstraints;if(!(!ec(r)||!this.constraintsBox)){this.stopMotion();var s={x:0,y:0};rn(function(o){s[o]=G0(e.visualElement.projection.target[o],e.constraintsBox[o])}),this.updateConstraints(function(){rn(function(o){if(go(o,n,null)){var a=ZM(e.visualElement.projection.target[o],e.constraintsBox[o],s[o]),l=a.min,c=a.max;e.visualElement.setProjectionTargetAxis(o,l,c)}})}),setTimeout(Kl,1)}},i.prototype.updateConstraints=function(e){var t=this;this.cancelLayout=ql(function(n,r){var s=ua(t.visualElement);r(function(){return s.forEach(function(o){return o.resetTransform()})}),n(function(){return qo(t.visualElement)}),r(function(){return s.forEach(function(o){return o.restoreTransform()})}),n(function(){t.resolveDragConstraints()}),e&&r(e)})},i.prototype.mount=function(e){var t=this,n=e.getInstance(),r=Br(n,"pointerdown",function(l){var c=t.props,u=c.drag,f=c.dragListener,d=f===void 0?!0:f;u&&d&&t.start(l)}),s=Uc(window,"resize",function(){t.scalePoint()}),o=e.onLayoutUpdate(function(){t.isDragging&&t.resolveDragConstraints()}),a=e.prevDragCursor;return a&&this.start(Ef,{cursorProgress:a}),function(){r==null||r(),s==null||s(),o==null||o(),t.cancelDrag()}},i}();function go(i,e,t){return(e===!0||e===i)&&(t===null||t===i)}function ib(i,e){e===void 0&&(e=10);var t=null;return Math.abs(i.y)>e?t="y":Math.abs(i.x)>e&&(t="x"),t}function rb(i){let e;const t=i[7].default,n=_t(t,i,i[6],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&64)&&xt(n,t,r,r[6],e?vt(t,r[6],s,null):yt(r[6]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function sb(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{visualElement:o,props:a,isCustom:l}=e;const c=kt(wi)||wi(l);qt(i,c,_=>t(5,n=_));let u=new nb({visualElement:o}),f;const d=()=>{f&&f(),h&&(f=h.subscribe(u))};let{dragControls:h}=a,{transformPagePoint:g}=_n(c);return u.setProps({...a,transformPagePoint:g}),ir(()=>{f&&f()}),qs(()=>u.mount(o)),i.$$set=_=>{"visualElement"in _&&t(1,o=_.visualElement),"props"in _&&t(2,a=_.props),"isCustom"in _&&t(3,l=_.isCustom),"$$scope"in _&&t(6,s=_.$$scope)},i.$$.update=()=>{i.$$.dirty&4&&({dragControls:h}=a),i.$$.dirty&32&&t(4,{transformPagePoint:g}=n,g),i.$$.dirty&20&&u.setProps({...a,transformPagePoint:g})},d(),[c,o,a,l,g,n,s,r]}class ob extends ot{constructor(e){super(),st(this,e,sb,rb,tt,{visualElement:1,props:2,isCustom:3})}}const ab=ob,lb={pan:PM,drag:ab};function Tf(i,e){return i/(e.max-e.min)*100}function cb(i,e,t){var n=t.target;if(typeof i=="string")if(ke.test(i))i=parseFloat(i);else return i;var r=Tf(i,n.x),s=Tf(i,n.y);return r+"% "+s+"%"}var Af="_$css";function ub(i,e){var t=e.delta,n=e.treeScale,r=i,s=i.includes("var("),o=[];s&&(i=i.replace(lm,function(_){return o.push(_),Af}));var a=ei.parse(i);if(a.length>5)return r;var l=ei.createTransformer(i),c=typeof a[0]!="number"?1:0,u=t.x.scale*n.x,f=t.y.scale*n.y;a[0+c]/=u,a[1+c]/=f;var d=un(u,f,.5);typeof a[2+c]=="number"&&(a[2+c]/=d),typeof a[3+c]=="number"&&(a[3+c]/=d);var h=l(a);if(s){var g=0;h=h.replace(Af,function(){var _=o[g];return g++,_})}return h}var fs={process:cb},fb={borderRadius:Object.assign(Object.assign({},fs),{applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]}),borderTopLeftRadius:fs,borderTopRightRadius:fs,borderBottomLeftRadius:fs,borderBottomRightRadius:fs,boxShadow:{process:ub}};const wf=1e3;function db(i,e){return!Cf(i)&&!Cf(e)&&(!Xs(i.x,e.x)||!Xs(i.y,e.y))}const Rf={min:0,max:0};function Cf(i){return Xs(i.x,Rf)&&Xs(i.y,Rf)}function Xs(i,e){return i.min===e.min&&i.max===e.max}const hb={duration:.45,ease:[.4,0,.1,1]};function pb(i,e,t){let{visualElement:n,layout:r=void 0,safeToRemove:s}=e,o=Ri(),a=Ri(),l={x:!1,y:!1},c={x:void 0,y:void 0},u,f=!1;qs(()=>{t(0,n.animateMotionValue=oa,n),n.enableLayoutProjection(),u=n.onLayoutUpdate(d),t(0,n.layoutSafeToRemove=function(){s()},n),I0(fb)}),ir(()=>{u(),rn(g=>{var _;return(_=c[g])==null?void 0:_.call(c)})});const d=(g,_,{originBox:p,targetBox:m,visibilityAction:x,shouldStackAnimate:v,onComplete:y,...E}={})=>{if(v===!1)return f=!1,s();if(f&&v!==!0)return;v&&(f=!0),_=p||_,g=m||g;const A=db(_,g),S=rn(C=>{if(r==="position"){const N=g[C].max-g[C].min;_[C].max=_[C].min+N}if(!n.projection.isTargetLocked)if(x!==void 0)n.setVisibility(x===VisibilityAction.Show);else return A?h(C,g[C],_[C],E):n.setProjectionTargetAxis(C,g[C].min,g[C].max)});return n.syncRender(),Promise.all(S).then(()=>{f=!1,y&&y(),n.notifyLayoutAnimationComplete()})},h=(g,_,p,{transition:m}={})=>{var C,N;if((C=c[g])==null||C.call(c),l[g]&&Xs(_,a[g]))return;(N=c[g])==null||N.call(c),l[g]=!0;const x=o[g],v=n.getProjectionAnimationProgress()[g];v.clearListeners(),v.set(0),v.set(0);const y=()=>{const M=v.get()/wf;ix(x,p,_,M),n.setProjectionTargetAxis(g,x.min,x.max)};y();const E=v.onChange(y);c[g]=()=>{l[g]=!1,v.stop(),E()},a[g]=_;const A=m||n.getDefaultTransition()||hb;return oa(g==="x"?"layoutX":"layoutY",v,wf,A&&wc(A,"layout")).then(c[g])};return i.$$set=g=>{"visualElement"in g&&t(0,n=g.visualElement),"layout"in g&&t(1,r=g.layout),"safeToRemove"in g&&t(2,s=g.safeToRemove)},[n,r,s]}class mb extends ot{constructor(e){super(),st(this,e,pb,null,tt,{visualElement:0,layout:1,safeToRemove:2})}}const gb=mb;function _b(i){let e,t;return e=new gb({props:{visualElement:i[0],layout:i[1],safeToRemove:i[2][1]}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.visualElement=n[0]),r&2&&(s.layout=n[1]),r&4&&(s.safeToRemove=n[2][1]),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function vb(i,e,t){let n,{visualElement:r,props:s,isCustom:o}=e,{layout:a}=s;const l=Jp(o);return qt(i,l,c=>t(2,n=c)),i.$$set=c=>{"visualElement"in c&&t(0,r=c.visualElement),"props"in c&&t(4,s=c.props),"isCustom"in c&&t(5,o=c.isCustom)},i.$$.update=()=>{i.$$.dirty&16&&t(1,{layout:a}=s,a)},[r,a,n,l,s,o]}class xb extends ot{constructor(e){super(),st(this,e,vb,_b,tt,{visualElement:0,props:4,isCustom:5})}}const yb=xb;function Mb(i,e,t){let{visualElement:n,syncLayout:r,framerSyncLayout:s,update:o}=e;const a=kt(bs),l=kt(Ip);qs(()=>{ur(r)&&r.register(n),ur(s)&&s.register(n),n.onUnmount(()=>{ur(r)&&r.remove(n),ur(s)&&s.remove(n)})});let c=!1;const u=(d=!1)=>(c||(c=!0,_n(a).forEach(h=>{var g;(g=h.updater)==null||g.call(h,!0)}),ur(r)?r.syncUpdate():(hx(n,d),r.add(n))),null);o===void 0&&Cg(u);const f=(d=!1)=>{c=!1,_n(a).forEach((g,_)=>{var p;(p=g.afterU)==null||p.call(g,!0)}),ur(r)||r.flush()};return l.update(d=>d.concat([{updater:u,afterU:f}])),vc(f),i.$$set=d=>{"visualElement"in d&&t(0,n=d.visualElement),"syncLayout"in d&&t(1,r=d.syncLayout),"framerSyncLayout"in d&&t(2,s=d.framerSyncLayout),"update"in d&&t(3,o=d.update)},i.$$.update=()=>{i.$$.dirty&8&&o!==void 0&&u(o)},[n,r,s,o]}class bb extends ot{constructor(e){super(),st(this,e,Mb,null,tt,{visualElement:0,syncLayout:1,framerSyncLayout:2,update:3})}}const Sb=bb;function Eb(i){let e,t;return e=new Sb({props:{syncLayout:i[2],framerSyncLayout:i[3],visualElement:i[0],update:i[1]}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&4&&(s.syncLayout=n[2]),r&8&&(s.framerSyncLayout=n[3]),r&1&&(s.visualElement=n[0]),r&2&&(s.update=n[1]),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function Tb(i,e,t){let n,r,s,{visualElement:o,props:a,isCustom:l}=e;const c=kt(Hu)||Hu(l);qt(i,c,f=>t(2,r=f));const u=kt(Gu)||Gu();return qt(i,u,f=>t(3,s=f)),i.$$set=f=>{"visualElement"in f&&t(0,o=f.visualElement),"props"in f&&t(6,a=f.props),"isCustom"in f&&t(7,l=f.isCustom)},i.$$.update=()=>{i.$$.dirty&64&&t(1,{update:n}=a,n)},[o,n,r,s,c,u,a,l]}class Ab extends ot{constructor(e){super(),st(this,e,Tb,Eb,tt,{visualElement:0,props:6,isCustom:7})}}const wb=Ab;var Rb={measureLayout:wb,layoutAnimation:yb};function Cb(i,e,t){let{visualElement:n,props:r}=e,{animate:s}=r;return i.$$set=o=>{"visualElement"in o&&t(0,n=o.visualElement),"props"in o&&t(1,r=o.props)},i.$$.update=()=>{i.$$.dirty&2&&t(2,{animate:s}=r,s),i.$$.dirty&1&&t(0,n.animationState=n.animationState||K0(n),n),i.$$.dirty&5&&Rc(s)&&Hh().then(()=>s.subscribe(n))},[n,r,s]}class Pb extends ot{constructor(e){super(),st(this,e,Cb,null,tt,{visualElement:0,props:1})}}const Lb=Pb;function Db(i){let e;const t=i[7].default,n=_t(t,i,i[6],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&64)&&xt(n,t,r,r[6],e?vt(t,r[6],s,null):yt(r[6]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function Ib(i,e,t){let n,r,s,{$$slots:o={},$$scope:a}=e,{props:l,visualElement:c,isCustom:u}=e;const f=kt(Pi)||Pi(u);qt(i,f,g=>t(9,s=g));const d=Jp(u);qt(i,d,g=>t(5,r=g));const h=g=>{var x;const[_,p]=g,m=(x=c.animationState)==null?void 0:x.setActive(Lt.Exit,!_,{custom:(s==null?void 0:s.custom)??n});return!_&&(m==null||m.then(p)),""};return i.$$set=g=>{"props"in g&&t(2,l=g.props),"visualElement"in g&&t(3,c=g.visualElement),"isCustom"in g&&t(4,u=g.isCustom),"$$scope"in g&&t(6,a=g.$$scope)},i.$$.update=()=>{i.$$.dirty&4&&({custom:n}=l),i.$$.dirty&32&&h(r)},[f,d,l,c,u,r,a,o]}class Nb extends ot{constructor(e){super(),st(this,e,Ib,Db,tt,{props:2,visualElement:3,isCustom:4})}}const Ub=Nb,Ob={animation:Lb,exit:Ub},Fb={...Ob,...$M,...lb,...Rb};var ts=jM(Fb);function Bb(i){let e,t,n,r;return{c(){e=Ze("p"),t=Rt(i[1]),Ie(e,"class","cursor-pointer text-white hover:opacity-[0.9] dark:text-white")},m(s,o){Ae(s,e,o),rt(e,t),n||(r=Jr(i[7].call(null,e)),n=!0)},p(s,o){o&2&&Hr(t,s[1])},d(s){s&&Se(e),n=!1,r()}}}function Pf(i){let e,t;return e=new ts({props:{initial:{opacity:0,scale:.85,y:0},animate:{opacity:1,scale:1,y:0},transition:i[2],$$slots:{default:[zb,({motion:n})=>({7:n}),({motion:n})=>n?128:0]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&67&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function Lf(i){let e,t,n;return t=new ts({props:{transition:i[2],layoutId:"active",$$slots:{default:[kb,({motion:r})=>({7:r}),({motion:r})=>r?128:0]},$$scope:{ctx:i}}}),{c(){e=Ze("div"),we(t.$$.fragment),Ie(e,"class","absolute left-1/2 -translate-x-1/2 transform pt-4")},m(r,s){Ae(r,e,s),Ee(t,e,null),n=!0},p(r,s){const o={};s&64&&(o.$$scope={dirty:s,ctx:r}),t.$set(o)},i(r){n||(ne(t.$$.fragment,r),n=!0)},o(r){re(t.$$.fragment,r),n=!1},d(r){r&&Se(e),Te(t)}}}function Vb(i){let e,t,n,r;const s=i[3].default,o=_t(s,i,i[6],null);return{c(){e=Ze("div"),o&&o.c(),Ie(e,"class","h-full w-max p-4")},m(a,l){Ae(a,e,l),o&&o.m(e,null),t=!0,n||(r=Jr(i[7].call(null,e)),n=!0)},p(a,l){o&&o.p&&(!t||l&64)&&xt(o,s,a,a[6],t?vt(s,a[6],l,null):yt(a[6]),null)},i(a){t||(ne(o,a),t=!0)},o(a){re(o,a),t=!1},d(a){a&&Se(e),o&&o.d(a),n=!1,r()}}}function kb(i){let e,t,n,r,s;return t=new ts({props:{layout:!0,$$slots:{default:[Vb,({motion:o})=>({7:o}),({motion:o})=>o?128:0]},$$scope:{ctx:i}}}),{c(){e=Ze("div"),we(t.$$.fragment),Ie(e,"class","overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black")},m(o,a){Ae(o,e,a),Ee(t,e,null),n=!0,r||(s=Jr(i[7].call(null,e)),r=!0)},p(o,a){const l={};a&64&&(l.$$scope={dirty:a,ctx:o}),t.$set(l)},i(o){n||(ne(t.$$.fragment,o),n=!0)},o(o){re(t.$$.fragment,o),n=!1},d(o){o&&Se(e),Te(t),r=!1,s()}}}function zb(i){let e,t,n,r,s=i[0]===i[1]&&Lf(i);return{c(){e=Ze("div"),s&&s.c()},m(o,a){Ae(o,e,a),s&&s.m(e,null),t=!0,n||(r=Jr(i[7].call(null,e)),n=!0)},p(o,a){o[0]===o[1]?s?(s.p(o,a),a&3&&ne(s,1)):(s=Lf(o),s.c(),ne(s,1),s.m(e,null)):s&&(Fn(),re(s,1,1,()=>{s=null}),Bn())},i(o){t||(ne(s),t=!0)},o(o){re(s),t=!1},d(o){o&&Se(e),s&&s.d(),n=!1,r()}}}function Hb(i){let e,t,n,r,s,o;t=new ts({props:{transition:{duration:.3},$$slots:{default:[Bb,({motion:l})=>({7:l}),({motion:l})=>l?128:0]},$$scope:{ctx:i}}});let a=i[0]!==null&&Pf(i);return{c(){e=Ze("div"),we(t.$$.fragment),n=pt(),a&&a.c(),Ie(e,"class","relative")},m(l,c){Ae(l,e,c),Ee(t,e,null),rt(e,n),a&&a.m(e,null),r=!0,s||(o=[Ss(e,"mouseenter",i[4]),Ss(e,"mouseleave",i[5])],s=!0)},p(l,[c]){const u={};c&66&&(u.$$scope={dirty:c,ctx:l}),t.$set(u),l[0]!==null?a?(a.p(l,c),c&1&&ne(a,1)):(a=Pf(l),a.c(),ne(a,1),a.m(e,null)):a&&(Fn(),re(a,1,1,()=>{a=null}),Bn())},i(l){r||(ne(t.$$.fragment,l),ne(a),r=!0)},o(l){re(t.$$.fragment,l),re(a),r=!1},d(l){l&&Se(e),Te(t),a&&a.d(),s=!1,ni(o)}}}function Gb(i,e,t){let{$$slots:n={},$$scope:r}=e;const s={type:"spring",mass:.5,damping:11.5,stiffness:100,restDelta:.001,restSpeed:.001};let{active:o}=e,{item:a}=e;const l=()=>t(0,o=a),c=()=>t(0,o=null);return i.$$set=u=>{"active"in u&&t(0,o=u.active),"item"in u&&t(1,a=u.item),"$$scope"in u&&t(6,r=u.$$scope)},[o,a,s,n,l,c,r]}class ds extends ot{constructor(e){super(),st(this,e,Gb,Hb,tt,{active:0,item:1})}}function Wb(i){let e,t,n,r,s,o,a,l,c,u;return{c(){e=Ze("a"),t=Ze("img"),r=pt(),s=Ze("div"),o=Ze("h4"),a=Rt(i[0]),l=pt(),c=Ze("p"),u=Rt(i[1]),Ns(t.src,n=i[3])||Ie(t,"src",n),Ie(t,"width",140),Ie(t,"height",70),Ie(t,"alt",i[0]),Ie(t,"class","flex-shrink-0 rounded-md shadow-2xl"),Ie(o,"class","mb-1 text-xl font-bold text-black dark:text-white"),Ie(c,"class","max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300"),Ie(e,"href",i[2]),Ie(e,"class","flex space-x-2")},m(f,d){Ae(f,e,d),rt(e,t),rt(e,r),rt(e,s),rt(s,o),rt(o,a),rt(s,l),rt(s,c),rt(c,u)},p(f,[d]){d&8&&!Ns(t.src,n=f[3])&&Ie(t,"src",n),d&1&&Ie(t,"alt",f[0]),d&1&&Hr(a,f[0]),d&2&&Hr(u,f[1]),d&4&&Ie(e,"href",f[2])},i:Kt,o:Kt,d(f){f&&Se(e)}}}function Xb(i,e,t){let{title:n}=e,{description:r}=e,{href:s}=e,{src:o}=e;return i.$$set=a=>{"title"in a&&t(0,n=a.title),"description"in a&&t(1,r=a.description),"href"in a&&t(2,s=a.href),"src"in a&&t(3,o=a.src)},[n,r,s,o]}class jb extends ot{constructor(e){super(),st(this,e,Xb,Wb,tt,{title:0,description:1,href:2,src:3})}}function Df(i,e,t){const n=i.slice();return n[1]=e[t].title,n[2]=e[t].description,n[3]=e[t].image,n}function $b(i){let e;return{c(){e=Rt("Hobby")},m(t,n){Ae(t,e,n)},d(t){t&&Se(e)}}}function Yb(i){let e;return{c(){e=Rt("Individual")},m(t,n){Ae(t,e,n)},d(t){t&&Se(e)}}}function qb(i){let e;return{c(){e=Rt("Team")},m(t,n){Ae(t,e,n)},d(t){t&&Se(e)}}}function Kb(i){let e;return{c(){e=Rt("Enterprise")},m(t,n){Ae(t,e,n)},d(t){t&&Se(e)}}}function Zb(i){let e,t,n,r,s,o,a,l,c;return t=new vn({props:{href:"#",$$slots:{default:[$b]},$$scope:{ctx:i}}}),r=new vn({props:{href:"#",$$slots:{default:[Yb]},$$scope:{ctx:i}}}),o=new vn({props:{href:"#",$$slots:{default:[qb]},$$scope:{ctx:i}}}),l=new vn({props:{href:"#",$$slots:{default:[Kb]},$$scope:{ctx:i}}}),{c(){e=Ze("div"),we(t.$$.fragment),n=pt(),we(r.$$.fragment),s=pt(),we(o.$$.fragment),a=pt(),we(l.$$.fragment),Ie(e,"class","flex flex-col space-y-4 text-sm")},m(u,f){Ae(u,e,f),Ee(t,e,null),rt(e,n),Ee(r,e,null),rt(e,s),Ee(o,e,null),rt(e,a),Ee(l,e,null),c=!0},p(u,f){const d={};f&64&&(d.$$scope={dirty:f,ctx:u}),t.$set(d);const h={};f&64&&(h.$$scope={dirty:f,ctx:u}),r.$set(h);const g={};f&64&&(g.$$scope={dirty:f,ctx:u}),o.$set(g);const _={};f&64&&(_.$$scope={dirty:f,ctx:u}),l.$set(_)},i(u){c||(ne(t.$$.fragment,u),ne(r.$$.fragment,u),ne(o.$$.fragment,u),ne(l.$$.fragment,u),c=!0)},o(u){re(t.$$.fragment,u),re(r.$$.fragment,u),re(o.$$.fragment,u),re(l.$$.fragment,u),c=!1},d(u){u&&Se(e),Te(t),Te(r),Te(o),Te(l)}}}function Jb(i){let e;return{c(){e=Rt("Web Development")},m(t,n){Ae(t,e,n)},d(t){t&&Se(e)}}}function Qb(i){let e;return{c(){e=Rt("Interface Design")},m(t,n){Ae(t,e,n)},d(t){t&&Se(e)}}}function eS(i){let e,t,n,r,s;return t=new vn({props:{href:"#test",$$slots:{default:[Jb]},$$scope:{ctx:i}}}),r=new vn({props:{href:"#",$$slots:{default:[Qb]},$$scope:{ctx:i}}}),{c(){e=Ze("div"),we(t.$$.fragment),n=pt(),we(r.$$.fragment),Ie(e,"class","flex flex-col space-y-4 text-sm")},m(o,a){Ae(o,e,a),Ee(t,e,null),rt(e,n),Ee(r,e,null),s=!0},p(o,a){const l={};a&64&&(l.$$scope={dirty:a,ctx:o}),t.$set(l);const c={};a&64&&(c.$$scope={dirty:a,ctx:o}),r.$set(c)},i(o){s||(ne(t.$$.fragment,o),ne(r.$$.fragment,o),s=!0)},o(o){re(t.$$.fragment,o),re(r.$$.fragment,o),s=!1},d(o){o&&Se(e),Te(t),Te(r)}}}function tS(i){let e;return{c(){e=Rt("Anh Tuan Driving Center")},m(t,n){Ae(t,e,n)},d(t){t&&Se(e)}}}function nS(i){let e;return{c(){e=Rt("GMO-Z.com Runsystem JSC")},m(t,n){Ae(t,e,n)},d(t){t&&Se(e)}}}function iS(i){let e,t,n,r,s;return t=new vn({props:{href:"#anh-tuan",$$slots:{default:[tS]},$$scope:{ctx:i}}}),r=new vn({props:{href:"#gmo",$$slots:{default:[nS]},$$scope:{ctx:i}}}),{c(){e=Ze("div"),we(t.$$.fragment),n=pt(),we(r.$$.fragment),Ie(e,"class","flex flex-col space-y-4 text-sm")},m(o,a){Ae(o,e,a),Ee(t,e,null),rt(e,n),Ee(r,e,null),s=!0},p(o,a){const l={};a&64&&(l.$$scope={dirty:a,ctx:o}),t.$set(l);const c={};a&64&&(c.$$scope={dirty:a,ctx:o}),r.$set(c)},i(o){s||(ne(t.$$.fragment,o),ne(r.$$.fragment,o),s=!0)},o(o){re(t.$$.fragment,o),re(r.$$.fragment,o),s=!1},d(o){o&&Se(e),Te(t),Te(r)}}}function If(i){let e,t;return e=new jb({props:{title:i[1],href:"#",src:i[3],description:Nf(i[2],40)}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.title=n[1]),r&1&&(s.src=n[3]),r&1&&(s.description=Nf(n[2],40)),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function rS(i){let e,t,n=Ai(i[0]),r=[];for(let o=0;o<n.length;o+=1)r[o]=If(Df(i,n,o));const s=o=>re(r[o],1,1,()=>{r[o]=null});return{c(){e=Ze("div");for(let o=0;o<r.length;o+=1)r[o].c();Ie(e,"class","grid grid-cols-2 gap-10 p-4 text-sm text-blue-600")},m(o,a){Ae(o,e,a);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);t=!0},p(o,a){if(a&1){n=Ai(o[0]);let l;for(l=0;l<n.length;l+=1){const c=Df(o,n,l);r[l]?(r[l].p(c,a),ne(r[l],1)):(r[l]=If(c),r[l].c(),ne(r[l],1),r[l].m(e,null))}for(Fn(),l=n.length;l<r.length;l+=1)s(l);Bn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)ne(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)re(r[a]);t=!1},d(o){o&&Se(e),Vh(r,o)}}}function sS(i){let e;return{c(){e=Rt("Hobby")},m(t,n){Ae(t,e,n)},d(t){t&&Se(e)}}}function oS(i){let e;return{c(){e=Rt("Individual")},m(t,n){Ae(t,e,n)},d(t){t&&Se(e)}}}function aS(i){let e;return{c(){e=Rt("Team")},m(t,n){Ae(t,e,n)},d(t){t&&Se(e)}}}function lS(i){let e;return{c(){e=Rt("Enterprise")},m(t,n){Ae(t,e,n)},d(t){t&&Se(e)}}}function cS(i){let e,t,n,r,s,o,a,l,c;return t=new vn({props:{href:"#",$$slots:{default:[sS]},$$scope:{ctx:i}}}),r=new vn({props:{href:"#",$$slots:{default:[oS]},$$scope:{ctx:i}}}),o=new vn({props:{href:"#",$$slots:{default:[aS]},$$scope:{ctx:i}}}),l=new vn({props:{href:"#",$$slots:{default:[lS]},$$scope:{ctx:i}}}),{c(){e=Ze("div"),we(t.$$.fragment),n=pt(),we(r.$$.fragment),s=pt(),we(o.$$.fragment),a=pt(),we(l.$$.fragment),Ie(e,"class","flex flex-col space-y-4 text-sm")},m(u,f){Ae(u,e,f),Ee(t,e,null),rt(e,n),Ee(r,e,null),rt(e,s),Ee(o,e,null),rt(e,a),Ee(l,e,null),c=!0},p(u,f){const d={};f&64&&(d.$$scope={dirty:f,ctx:u}),t.$set(d);const h={};f&64&&(h.$$scope={dirty:f,ctx:u}),r.$set(h);const g={};f&64&&(g.$$scope={dirty:f,ctx:u}),o.$set(g);const _={};f&64&&(_.$$scope={dirty:f,ctx:u}),l.$set(_)},i(u){c||(ne(t.$$.fragment,u),ne(r.$$.fragment,u),ne(o.$$.fragment,u),ne(l.$$.fragment,u),c=!0)},o(u){re(t.$$.fragment,u),re(r.$$.fragment,u),re(o.$$.fragment,u),re(l.$$.fragment,u),c=!1},d(u){u&&Se(e),Te(t),Te(r),Te(o),Te(l)}}}function uS(i){let e,t,n,r,s,o,a,l,c,u;return e=new ds({props:{active:hs,item:"About me",$$slots:{default:[Zb]},$$scope:{ctx:i}}}),n=new ds({props:{active:hs,item:"Technologies",$$slots:{default:[eS]},$$scope:{ctx:i}}}),s=new ds({props:{active:hs,item:"Experience",$$slots:{default:[iS]},$$scope:{ctx:i}}}),a=new ds({props:{active:hs,item:"Projects",$$slots:{default:[rS]},$$scope:{ctx:i}}}),c=new ds({props:{active:hs,item:"Certificate",$$slots:{default:[cS]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment),t=pt(),we(n.$$.fragment),r=pt(),we(s.$$.fragment),o=pt(),we(a.$$.fragment),l=pt(),we(c.$$.fragment)},m(f,d){Ee(e,f,d),Ae(f,t,d),Ee(n,f,d),Ae(f,r,d),Ee(s,f,d),Ae(f,o,d),Ee(a,f,d),Ae(f,l,d),Ee(c,f,d),u=!0},p(f,d){const h={};d&64&&(h.$$scope={dirty:d,ctx:f}),e.$set(h);const g={};d&64&&(g.$$scope={dirty:d,ctx:f}),n.$set(g);const _={};d&64&&(_.$$scope={dirty:d,ctx:f}),s.$set(_);const p={};d&65&&(p.$$scope={dirty:d,ctx:f}),a.$set(p);const m={};d&64&&(m.$$scope={dirty:d,ctx:f}),c.$set(m)},i(f){u||(ne(e.$$.fragment,f),ne(n.$$.fragment,f),ne(s.$$.fragment,f),ne(a.$$.fragment,f),ne(c.$$.fragment,f),u=!0)},o(f){re(e.$$.fragment,f),re(n.$$.fragment,f),re(s.$$.fragment,f),re(a.$$.fragment,f),re(c.$$.fragment,f),u=!1},d(f){f&&(Se(t),Se(r),Se(o),Se(l)),Te(e,f),Te(n,f),Te(s,f),Te(a,f),Te(c,f)}}}function fS(i){let e,t,n,r;return n=new O_({props:{$$slots:{default:[uS]},$$scope:{ctx:i}}}),{c(){e=Ze("div"),t=Ze("div"),we(n.$$.fragment),Ie(t,"class","fixed inset-x-0 top-5 z-50 mx-auto max-w-xl "),Ie(e,"class","relative flex w-full items-center justify-between")},m(s,o){Ae(s,e,o),rt(e,t),Ee(n,t,null),r=!0},p(s,[o]){const a={};o&65&&(a.$$scope={dirty:o,ctx:s}),n.$set(a)},i(s){r||(ne(n.$$.fragment,s),r=!0)},o(s){re(n.$$.fragment,s),r=!1},d(s){s&&Se(e),Te(n)}}}let hs=null;function Nf(i,e){return i.length>e?i.substring(0,e)+"...":i}function dS(i,e,t){let{projectArray:n}=e;return i.$$set=r=>{"projectArray"in r&&t(0,n=r.projectArray)},[n]}class hS extends ot{constructor(e){super(),st(this,e,dS,fS,tt,{projectArray:0})}}function pS(i){let e;return{c(){e=Ze("div"),e.innerHTML=`<p class="timeline-title text-white text-5xl svelte-12hzwnk">Experience</p> <ol class="relative border-s border-gray-200 dark:border-gray-700"><li class="mb-10 ms-4" id="anh-tuan"><div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-2xl font-normal leading-none text-gray-400 dark:text-gray-500">From May 2021 to January 2023</time> <h3 class="text-3xl font-semibold text-gray-400 dark:text-white">Wordpress Website builder for <span class="text-yellow-400">Anh Tuan Driving Center</span></h3> <p class="text-xl mb-4 font-normal text-gray-400 dark:text-gray-400">Rebuilt the interface, deployed, debugged and developed many
                functionalities for Anh Tuan Driving Center’s website using
                Wordpress, Cpanel, SSH, Cron Jobs...</p></li> <li class="mb-10 ms-4" id="gmo"><div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-2xl font-normal leading-none text-gray-400 dark:text-gray-500">From January 2023 to July 2023</time> <h3 class="text-3xl font-semibold text-gray-400 dark:text-white">Web Developer Internship &amp; Fresher at <span class="text-sky-600">GMO-Z.com</span> <span class="text-red-500">Runsystem</span> JSC</h3> <ul class="text-xl font-normal text-gray-400 dark:text-gray-400"><li>Developed Front End Interface for SPA landing pages</li> <li>Crawled data from blogs about technologies&#39; API using
                    Javascript and Python to build an SPA blog.</li> <li>Participated in an automated translation web app project
                    serving internal staffs, capable of translating XLSX,
                    Markdown,,.. files without losing formats and images.</li></ul></li> <li class="ms-4"><div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-2xl font-normal leading-none text-gray-400 dark:text-gray-500">From September 2023 to December 2023</time> <h3 class="text-3xl font-semibold text-gray-400 dark:text-white">Programming tutor at <span class="text-emerald-600">Marathon Education</span></h3> <p class="text-xl font-normal text-gray-400 dark:text-gray-400">Taught Javascript, HTML, CSS, Python, Wordpress, UI/UX design</p></li></ol>`,Ie(e,"class","timeline-container w-4/5 mx-auto px-auto flex flex-row gap-6")},m(t,n){Ae(t,e,n)},p:Kt,i:Kt,o:Kt,d(t){t&&Se(e)}}}class mS extends ot{constructor(e){super(),st(this,e,null,pS,tt,{})}}function Uf(i,e,t){const n=i.slice();return n[4]=e[t],n[6]=t,n}function gS(i){let e,t=i[4]+"",n,r=" ",s,o,a,l;return{c(){e=Ze("span"),n=Rt(t),s=Rt(r),o=pt(),Ie(e,"class","text-gray-300")},m(c,u){Ae(c,e,u),rt(e,n),rt(e,s),Ae(c,o,u),a||(l=Jr(i[3].call(null,e)),a=!0)},p(c,u){u&1&&t!==(t=c[4]+"")&&Hr(n,t)},d(c){c&&(Se(e),Se(o)),a=!1,l()}}}function Of(i,e){let t,n,r;return n=new ts({props:{variants:e[2],custom:e[6]+1,initial:"hidden",animate:"visible",$$slots:{default:[gS,({motion:s})=>({3:s}),({motion:s})=>s?8:0]},$$scope:{ctx:e}}}),{key:i,first:null,c(){t=Ti(),we(n.$$.fragment),this.first=t},m(s,o){Ae(s,t,o),Ee(n,s,o),r=!0},p(s,o){e=s;const a={};o&1&&(a.custom=e[6]+1),o&129&&(a.$$scope={dirty:o,ctx:e}),n.$set(a)},i(s){r||(ne(n.$$.fragment,s),r=!0)},o(s){re(n.$$.fragment,s),r=!1},d(s){s&&Se(t),Te(n,s)}}}function _S(i){let e,t=[],n=new Map,r,s,o,a=Ai(i[0].split(" "));const l=c=>`${c[4]}${c[6]}`;for(let c=0;c<a.length;c+=1){let u=Uf(i,a,c),f=l(u);n.set(f,t[c]=Of(f,u))}return{c(){e=Ze("div");for(let c=0;c<t.length;c+=1)t[c].c()},m(c,u){Ae(c,e,u);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(e,null);r=!0,s||(o=Jr(i[3].call(null,e)),s=!0)},p(c,u){u&5&&(a=Ai(c[0].split(" ")),Fn(),t=Xh(t,u,l,1,c,a,n,e,Wh,Of,null,Uf),Bn())},i(c){if(!r){for(let u=0;u<a.length;u+=1)ne(t[u]);r=!0}},o(c){for(let u=0;u<t.length;u+=1)re(t[u]);r=!1},d(c){c&&Se(e);for(let u=0;u<t.length;u+=1)t[u].d();s=!1,o()}}}function vS(i){let e,t,n,r,s,o;return r=new ts({props:{custom:0,variants:i[2],initial:"hidden",animate:"visible",$$slots:{default:[_S,({motion:a})=>({3:a}),({motion:a})=>a?8:0]},$$scope:{ctx:i}}}),{c(){e=Ze("div"),t=Ze("div"),n=Ze("div"),we(r.$$.fragment),Ie(n,"class","text-7xl leading-snug tracking-wide text-white"),Ie(t,"class","mt-4"),Ie(e,"class",s=In("font-bold",i[1]))},m(a,l){Ae(a,e,l),rt(e,t),rt(t,n),Ee(r,n,null),o=!0},p(a,[l]){const c={};l&129&&(c.$$scope={dirty:l,ctx:a}),r.$set(c),(!o||l&2&&s!==(s=In("font-bold",a[1])))&&Ie(e,"class",s)},i(a){o||(ne(r.$$.fragment,a),o=!0)},o(a){re(r.$$.fragment,a),o=!1},d(a){a&&Se(e),Te(r)}}}function xS(i,e,t){let{words:n}=e,{className:r=void 0}=e;const s={visible:o=>({opacity:1,transition:{delay:o*.1,duration:3}}),hidden:{opacity:0}};return i.$$set=o=>{"words"in o&&t(0,n=o.words),"className"in o&&t(1,r=o.className)},[n,r,s]}class yS extends ot{constructor(e){super(),st(this,e,xS,vS,tt,{words:0,className:1})}}function MS(i){let e,t;return e=new yS({props:{words:i[0]}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.words=n[0]),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function bS(i,e,t){let{words:n}=e;return i.$$set=r=>{"words"in r&&t(0,n=r.words)},[n]}class SS extends ot{constructor(e){super(),st(this,e,bS,MS,tt,{words:0})}}function Ff(i,e,t){const n=i.slice();return n[3]=e[t].id,n[4]=e[t].title,n[5]=e[t].description,n[6]=e[t].image,n[7]=e[t].github,n[8]=e[t].demo,n}function Bf(i){let e,t;return e=new I_({props:{id:i[3],title:i[4],description:i[5],image:i[6],github:i[7],demo:i[8]}}),{c(){we(e.$$.fragment)},m(n,r){Ee(e,n,r),t=!0},p:Kt,i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Te(e,n)}}}function ES(i){let e,t,n,r,s,o,a,l,c,u,f,d,h,g,_,p,m,x,v;t=new hS({props:{projectArray:i[1]}}),l=new SS({props:{words:i[0]}}),h=new mS({});let y=Ai(i[1]),E=[];for(let S=0;S<y.length;S+=1)E[S]=Bf(Ff(i,y,S));const A=S=>re(E[S],1,1,()=>{E[S]=null});return{c(){e=Ze("div"),we(t.$$.fragment),n=pt(),r=Ze("div"),s=pt(),o=Ze("div"),a=Ze("div"),we(l.$$.fragment),c=pt(),u=Ze("div"),u.innerHTML='<div class="text-white">second section</div>',f=pt(),d=Ze("div"),we(h.$$.fragment),g=pt(),_=Ze("div");for(let S=0;S<E.length;S+=1)E[S].c();p=pt(),m=Ze("img"),Ie(r,"class","scroll-watcher"),Ie(a,"class","h-[50rem] w-1/2"),Ie(o,"class","text-generate h-auto flex flex-row justify-around items-center svelte-vdcuwp"),Ie(d,"class","experience svelte-vdcuwp"),Ie(_,"class","all-project flex flex-row justify-around flex-wrap"),Ns(m.src,x=Og)||Ie(m,"src",x),Ie(m,"alt",""),Ie(e,"class","mt-[10rem]")},m(S,C){Ae(S,e,C),Ee(t,e,null),rt(e,n),rt(e,r),rt(e,s),rt(e,o),rt(o,a),Ee(l,a,null),rt(o,c),rt(o,u),rt(e,f),rt(e,d),Ee(h,d,null),rt(e,g),rt(e,_);for(let N=0;N<E.length;N+=1)E[N]&&E[N].m(_,null);rt(e,p),rt(e,m),v=!0},p(S,[C]){if(C&2){y=Ai(S[1]);let N;for(N=0;N<y.length;N+=1){const M=Ff(S,y,N);E[N]?(E[N].p(M,C),ne(E[N],1)):(E[N]=Bf(M),E[N].c(),ne(E[N],1),E[N].m(_,null))}for(Fn(),N=y.length;N<E.length;N+=1)A(N);Bn()}},i(S){if(!v){ne(t.$$.fragment,S),ne(l.$$.fragment,S),ne(h.$$.fragment,S);for(let C=0;C<y.length;C+=1)ne(E[C]);v=!0}},o(S){re(t.$$.fragment,S),re(l.$$.fragment,S),re(h.$$.fragment,S),E=E.filter(Boolean);for(let C=0;C<E.length;C+=1)re(E[C]);v=!1},d(S){S&&Se(e),Te(t),Te(l),Te(h),Vh(E,S)}}}function TS(i){return["Hello world! My name is Dang Thai An a.k.a アヤ (Aya), I am a passionate Junior Web Developer from Vietnam!",[{id:1,title:"Portfolio",description:"My portfolio written in Svelte, AceternityUI, TailwindCSS and ThreeJS",image:"https://i.imgur.com/DlcOBgu.png",github:"https://github.com/ayakase/Portfolio",demo:"https://ayakase-portfolio.netlify.app/",section:"#portfolio"},{id:2,title:"Hoang Ha Tourism",description:"An E-commerce blog that provide tours and toursim services, written in ExpressJS, Vue 3, Pinia, Bootstrap,  JWT, MySQL, Sequelize, Cloudinary, ",image:"https://i.imgur.com/wLCv97q.png",github:"https://github.com",section:"#hoangha"},{id:3,title:"Fuwa Chat App",description:"An Serverless real-time application written in VueJS, Vuetify, Firebase Firestore 10, Cloudinary ",image:"https://i.imgur.com/EDlQ2xu.png",github:"https://github.com/ayakase/Fuwa",demo:"https://touhou-vn.site/",section:"#fuwa"},{id:4,title:"Japanese translation tool",description:"A tool for translating files in Japanese to Vietnamese using OpenAI API, capable of converting XLSX, Markdown files ",image:"https://i.imgur.com/EDlQ2xu.png",github:"https://github.com/ayakase/Fuwa",section:"#translate"}]]}class AS extends ot{constructor(e){super(),st(this,e,TS,ES,tt,{})}}const wS="/assets/space_boi-DBmRv9wa.glb";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vc="162",fr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},dr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},RS=0,Vf=1,CS=2,wm=1,PS=2,Kn=3,ti=0,on=1,Ln=2,bi=0,Vr=1,kf=2,zf=3,Hf=4,LS=5,Wi=100,DS=101,IS=102,Gf=103,Wf=104,NS=200,US=201,OS=202,FS=203,ic=204,rc=205,BS=206,VS=207,kS=208,zS=209,HS=210,GS=211,WS=212,XS=213,jS=214,$S=0,YS=1,qS=2,da=3,KS=4,ZS=5,JS=6,QS=7,Rm=0,eE=1,tE=2,Si=0,nE=1,iE=2,rE=3,sE=4,oE=5,aE=6,lE=7,Xf="attached",cE="detached",Cm=300,Gr=301,Wr=302,sc=303,oc=304,Aa=306,Xr=1e3,mn=1001,ha=1002,Vt=1003,ac=1004,Lr=1005,Yt=1006,Ko=1007,Zn=1008,Ei=1009,uE=1010,fE=1011,kc=1012,Pm=1013,yi=1014,En=1015,js=1016,Lm=1017,Dm=1018,Ji=1020,dE=1021,gn=1023,hE=1024,pE=1025,Qi=1026,jr=1027,Im=1028,Nm=1029,mE=1030,Um=1031,Om=1033,$a=33776,Ya=33777,qa=33778,Ka=33779,jf=35840,$f=35841,Yf=35842,qf=35843,Fm=36196,Kf=37492,Zf=37496,Jf=37808,Qf=37809,ed=37810,td=37811,nd=37812,id=37813,rd=37814,sd=37815,od=37816,ad=37817,ld=37818,cd=37819,ud=37820,fd=37821,Za=36492,dd=36494,hd=36495,gE=36283,pd=36284,md=36285,gd=36286,$s=2300,$r=2301,Ja=2302,_d=2400,vd=2401,xd=2402,_E=2500,vE=0,Bm=1,lc=2,xE=3200,yE=3201,Vm=0,ME=1,vi="",en="srgb",Gt="srgb-linear",zc="display-p3",wa="display-p3-linear",pa="linear",St="srgb",ma="rec709",ga="p3",hr=7680,yd=519,bE=512,SE=513,EE=514,km=515,TE=516,AE=517,wE=518,RE=519,cc=35044,Md="300 es",uc=1035,Jn=2e3,_a=2001;class or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bd=1234567;const Ps=Math.PI/180,Yr=180/Math.PI;function wn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function Ht(i,e,t){return Math.max(e,Math.min(t,i))}function Hc(i,e){return(i%e+e)%e}function CE(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function PE(i,e,t){return i!==e?(t-i)/(e-i):0}function Ls(i,e,t){return(1-t)*i+t*e}function LE(i,e,t,n){return Ls(i,e,1-Math.exp(-t*n))}function DE(i,e=1){return e-Math.abs(Hc(i,e*2)-e)}function IE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function NE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function UE(i,e){return i+Math.floor(Math.random()*(e-i+1))}function OE(i,e){return i+Math.random()*(e-i)}function FE(i){return i*(.5-Math.random())}function BE(i){i!==void 0&&(bd=i);let e=bd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function VE(i){return i*Ps}function kE(i){return i*Yr}function fc(i){return(i&i-1)===0&&i!==0}function zE(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function va(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function HE(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),h=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*h,a*c);break;case"YXY":i.set(l*h,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ds={DEG2RAD:Ps,RAD2DEG:Yr,generateUUID:wn,clamp:Ht,euclideanModulo:Hc,mapLinear:CE,inverseLerp:PE,lerp:Ls,damp:LE,pingpong:DE,smoothstep:IE,smootherstep:NE,randInt:UE,randFloat:OE,randFloatSpread:FE,seededRandom:BE,degToRad:VE,radToDeg:kE,isPowerOfTwo:fc,ceilPowerOfTwo:zE,floorPowerOfTwo:va,setQuaternionFromProperEuler:HE,normalize:dt,denormalize:Tn};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],_=r[0],p=r[3],m=r[6],x=r[1],v=r[4],y=r[7],E=r[2],A=r[5],S=r[8];return s[0]=o*_+a*x+l*E,s[3]=o*p+a*v+l*A,s[6]=o*m+a*y+l*S,s[1]=c*_+u*x+f*E,s[4]=c*p+u*v+f*A,s[7]=c*m+u*y+f*S,s[2]=d*_+h*x+g*E,s[5]=d*p+h*v+g*A,s[8]=d*m+h*y+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=t*f+n*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qa.makeScale(e,t)),this}rotate(e){return this.premultiply(Qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qa=new Ke;function zm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function GE(){const i=Ys("canvas");return i.style.display="block",i}const Sd={};function Hm(i){i in Sd||(Sd[i]=!0,console.warn(i))}const Ed=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Td=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_o={[Gt]:{transfer:pa,primaries:ma,toReference:i=>i,fromReference:i=>i},[en]:{transfer:St,primaries:ma,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[wa]:{transfer:pa,primaries:ga,toReference:i=>i.applyMatrix3(Td),fromReference:i=>i.applyMatrix3(Ed)},[zc]:{transfer:St,primaries:ga,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Td),fromReference:i=>i.applyMatrix3(Ed).convertLinearToSRGB()}},WE=new Set([Gt,wa]),ut={enabled:!0,_workingColorSpace:Gt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!WE.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=_o[e].toReference,r=_o[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return _o[i].primaries},getTransfer:function(i){return i===vi?pa:_o[i].transfer}};function kr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function el(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pr;class Gm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pr===void 0&&(pr=Ys("canvas")),pr.width=e.width,pr.height=e.height;const n=pr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=kr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kr(t[n]/255)*255):t[n]=kr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XE=0;class Wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(tl(r[o].image)):s.push(tl(r[o]))}else s=tl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function tl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jE=0;class zt extends or{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=mn,r=mn,s=Yt,o=Zn,a=gn,l=Ei,c=zt.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=wn(),this.name="",this.source=new Wm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Cm;zt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(h+1)/2,E=(m+1)/2,A=(u+d)/4,S=(f+_)/4,C=(g+p)/4;return v>y&&v>E?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=A/n,s=S/n):y>E?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=A/r,s=C/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=S/s,r=C/s),this.set(n,r,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(f-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+h+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $E extends or{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new zt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends $E{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xm extends zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class YE extends zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let p=1-a;const m=l*d+c*h+u*g+f*_,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const E=Math.sqrt(v),A=Math.atan2(E,m*x);p=Math.sin(p*A)/E,a=Math.sin(a*A)/E}const y=a*x;if(l=l*p+d*y,c=c*p+h*y,u=u*p+g*y,f=f*p+_*y,p===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-a*h,e[t+2]=c*g+u*h+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),d=l(n/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ad.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nl=new I,Ad=new Un;class ri{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),xo.subVectors(this.max,ps),mr.subVectors(e.a,ps),gr.subVectors(e.b,ps),_r.subVectors(e.c,ps),li.subVectors(gr,mr),ci.subVectors(_r,gr),Oi.subVectors(mr,_r);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Oi.z,Oi.y,li.z,0,-li.x,ci.z,0,-ci.x,Oi.z,0,-Oi.x,-li.y,li.x,0,-ci.y,ci.x,0,-Oi.y,Oi.x,0];return!il(t,mr,gr,_r,xo)||(t=[1,0,0,0,1,0,0,0,1],!il(t,mr,gr,_r,xo))?!1:(yo.crossVectors(li,ci),t=[yo.x,yo.y,yo.z],il(t,mr,gr,_r,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new I,new I,new I,new I,new I,new I,new I,new I],yn=new I,vo=new ri,mr=new I,gr=new I,_r=new I,li=new I,ci=new I,Oi=new I,ps=new I,xo=new I,yo=new I,Fi=new I;function il(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Fi.fromArray(i,s);const a=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),u=n.dot(Fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const qE=new ri,ms=new I,rl=new I;class Vn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qE.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ms,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(rl)),this.expandByPoint(ms.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new I,sl=new I,Mo=new I,ui=new I,ol=new I,bo=new I,al=new I;class eo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){sl.copy(e).add(t).multiplyScalar(.5),Mo.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(sl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Mo),a=ui.dot(this.direction),l=-ui.dot(Mo),c=ui.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sl).addScaledVector(Mo,d),h}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),r=Xn.dot(Xn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,r,s){ol.subVectors(t,e),bo.subVectors(n,e),al.crossVectors(ol,bo);let o=this.direction.dot(al),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,e);const l=a*this.direction.dot(bo.crossVectors(ui,bo));if(l<0)return null;const c=a*this.direction.dot(ol.cross(ui));if(c<0||l+c>o)return null;const u=-a*ui.dot(al);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,r,s,o,a,l,c,u,f,d,h,g,_,p){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,d,h,g,_,p)}set(e,t,n,r,s,o,a,l,c,u,f,d,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/vr.setFromMatrixColumn(e,0).length(),s=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d+_*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KE,e,ZE)}lookAt(e,t,n){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),fi.crossVectors(n,ln),fi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),fi.crossVectors(n,ln)),fi.normalize(),So.crossVectors(ln,fi),r[0]=fi.x,r[4]=So.x,r[8]=ln.x,r[1]=fi.y,r[5]=So.y,r[9]=ln.y,r[2]=fi.z,r[6]=So.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],_=n[6],p=n[10],m=n[14],x=n[3],v=n[7],y=n[11],E=n[15],A=r[0],S=r[4],C=r[8],N=r[12],M=r[1],R=r[5],$=r[9],J=r[13],D=r[2],j=r[6],V=r[10],Z=r[14],W=r[3],q=r[7],Q=r[11],ie=r[15];return s[0]=o*A+a*M+l*D+c*W,s[4]=o*S+a*R+l*j+c*q,s[8]=o*C+a*$+l*V+c*Q,s[12]=o*N+a*J+l*Z+c*ie,s[1]=u*A+f*M+d*D+h*W,s[5]=u*S+f*R+d*j+h*q,s[9]=u*C+f*$+d*V+h*Q,s[13]=u*N+f*J+d*Z+h*ie,s[2]=g*A+_*M+p*D+m*W,s[6]=g*S+_*R+p*j+m*q,s[10]=g*C+_*$+p*V+m*Q,s[14]=g*N+_*J+p*Z+m*ie,s[3]=x*A+v*M+y*D+E*W,s[7]=x*S+v*R+y*j+E*q,s[11]=x*C+v*$+y*V+E*Q,s[15]=x*N+v*J+y*Z+E*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*f-r*c*f-s*a*d+n*c*d+r*a*h-n*l*h)+_*(+t*l*h-t*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+p*(+t*c*f-t*a*h-s*o*f+n*o*h+s*a*u-n*c*u)+m*(-r*a*u-t*l*f+t*a*d+r*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],x=f*p*c-_*d*c+_*l*h-a*p*h-f*l*m+a*d*m,v=g*d*c-u*p*c-g*l*h+o*p*h+u*l*m-o*d*m,y=u*_*c-g*f*c+g*a*h-o*_*h-u*a*m+o*f*m,E=g*f*l-u*_*l-g*a*d+o*_*d+u*a*p-o*f*p,A=t*x+n*v+r*y+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/A;return e[0]=x*S,e[1]=(_*d*s-f*p*s-_*r*h+n*p*h+f*r*m-n*d*m)*S,e[2]=(a*p*s-_*l*s+_*r*c-n*p*c-a*r*m+n*l*m)*S,e[3]=(f*l*s-a*d*s-f*r*c+n*d*c+a*r*h-n*l*h)*S,e[4]=v*S,e[5]=(u*p*s-g*d*s+g*r*h-t*p*h-u*r*m+t*d*m)*S,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*m-t*l*m)*S,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*h+t*l*h)*S,e[8]=y*S,e[9]=(g*f*s-u*_*s-g*n*h+t*_*h+u*n*m-t*f*m)*S,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*S,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*h-t*a*h)*S,e[12]=E*S,e[13]=(u*_*r-g*f*r+g*n*d-t*_*d-u*n*p+t*f*p)*S,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*p-t*a*p)*S,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*d+t*a*d)*S,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,_=o*u,p=o*f,m=a*f,x=l*c,v=l*u,y=l*f,E=n.x,A=n.y,S=n.z;return r[0]=(1-(_+m))*E,r[1]=(h+y)*E,r[2]=(g-v)*E,r[3]=0,r[4]=(h-y)*A,r[5]=(1-(d+m))*A,r[6]=(p+x)*A,r[7]=0,r[8]=(g+v)*S,r[9]=(p-x)*S,r[10]=(1-(d+_))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=vr.set(r[0],r[1],r[2]).length();const o=vr.set(r[4],r[5],r[6]).length(),a=vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/s,u=1/o,f=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,t.setFromRotationMatrix(Mn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Jn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let h,g;if(a===Jn)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===_a)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Jn){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),d=(t+e)*c,h=(n+r)*u;let g,_;if(a===Jn)g=(o+s)*f,_=-2*f;else if(a===_a)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vr=new I,Mn=new Je,KE=new I(0,0,0),ZE=new I(1,1,1),fi=new I,So=new I,ln=new I,wd=new Je,Rd=new Un;class On{constructor(e=0,t=0,n=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rd.setFromEuler(this),this.setFromQuaternion(Rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class jm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JE=0;const Cd=new I,xr=new Un,jn=new Je,Eo=new I,gs=new I,QE=new I,eT=new Un,Pd=new I(1,0,0),Ld=new I(0,1,0),Dd=new I(0,0,1),tT={type:"added"},nT={type:"removed"},ll={type:"childadded",child:null},cl={type:"childremoved",child:null};class wt extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new I,t=new On,n=new Un,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ke}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(Pd,e)}rotateY(e){return this.rotateOnAxis(Ld,e)}rotateZ(e){return this.rotateOnAxis(Dd,e)}translateOnAxis(e,t){return Cd.copy(e).applyQuaternion(this.quaternion),this.position.add(Cd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pd,e)}translateY(e){return this.translateOnAxis(Ld,e)}translateZ(e){return this.translateOnAxis(Dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Eo.copy(e):Eo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(gs,Eo,this.up):jn.lookAt(Eo,gs,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),xr.setFromRotationMatrix(jn),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tT),ll.child=e,this.dispatchEvent(ll),ll.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nT),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,QE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,eT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}wt.DEFAULT_UP=new I(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new I,$n=new I,ul=new I,Yn=new I,yr=new I,Mr=new I,Id=new I,fl=new I,dl=new I,hl=new I;class Dn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){bn.subVectors(r,t),$n.subVectors(n,t),ul.subVectors(e,t);const o=bn.dot(bn),a=bn.dot($n),l=bn.dot(ul),c=$n.dot($n),u=$n.dot(ul),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),$n.subVectors(e,t),bn.cross($n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),bn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;yr.subVectors(r,n),Mr.subVectors(s,n),fl.subVectors(e,n);const l=yr.dot(fl),c=Mr.dot(fl);if(l<=0&&c<=0)return t.copy(n);dl.subVectors(e,r);const u=yr.dot(dl),f=Mr.dot(dl);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(yr,o);hl.subVectors(e,s);const h=yr.dot(hl),g=Mr.dot(hl);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Mr,a);const p=u*g-h*f;if(p<=0&&f-u>=0&&h-g>=0)return Id.subVectors(s,r),a=(f-u)/(f-u+(h-g)),t.copy(r).addScaledVector(Id,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(yr,o).addScaledVector(Mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},To={h:0,s:0,l:0};function pl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ut.workingColorSpace){if(e=Hc(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=pl(o,s,e+1/3),this.g=pl(o,s,e),this.b=pl(o,s,e-1/3)}return ut.toWorkingColorSpace(this,r),this}setStyle(e,t=en){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const n=$m[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}copyLinearToSRGB(e){return this.r=el(e.r),this.g=el(e.g),this.b=el(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return ut.fromWorkingColorSpace($t.copy(this),e),Math.round(Ht($t.r*255,0,255))*65536+Math.round(Ht($t.g*255,0,255))*256+Math.round(Ht($t.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace($t.copy(this),t);const n=$t.r,r=$t.g,s=$t.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=en){ut.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,r=$t.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(To);const n=Ls(di.h,To.h,t),r=Ls(di.s,To.s,t),s=Ls(di.l,To.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new He;He.NAMES=$m;let iT=0;class Nn extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=Vr,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=rc,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ic&&(n.blendSrc=this.blendSrc),this.blendDst!==rc&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==da&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qi extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new I,Ao=new Fe;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ao.fromBufferAttribute(this,t),Ao.applyMatrix3(e),this.setXY(t,Ao.x,Ao.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cc&&(e.usage=this.usage),e}}class Ym extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qm extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xn extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rT=0;const hn=new Je,ml=new wt,br=new I,cn=new ri,_s=new ri,Bt=new I;class Cn extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zm(e)?qm:Ym)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return ml.lookAt(e),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(cn.min,_s.min),cn.expandByPoint(Bt),Bt.addVectors(cn.max,_s.max),cn.expandByPoint(Bt)):(cn.expandByPoint(_s.min),cn.expandByPoint(_s.max))}cn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(br.fromBufferAttribute(e,c),Bt.add(br)),r=Math.max(r,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new I,l[C]=new I;const c=new I,u=new I,f=new I,d=new Fe,h=new Fe,g=new Fe,_=new I,p=new I;function m(C,N,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,N),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,C),h.fromBufferAttribute(s,N),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const R=1/(h.x*g.y-g.x*h.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(R),p.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(R),a[C].add(_),a[N].add(_),a[M].add(_),l[C].add(p),l[N].add(p),l[M].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,N=x.length;C<N;++C){const M=x[C],R=M.start,$=M.count;for(let J=R,D=R+$;J<D;J+=3)m(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const v=new I,y=new I,E=new I,A=new I;function S(C){E.fromBufferAttribute(r,C),A.copy(E);const N=a[C];v.copy(N),v.sub(E.multiplyScalar(E.dot(N))).normalize(),y.crossVectors(A,N);const R=y.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,R)}for(let C=0,N=x.length;C<N;++C){const M=x[C],R=M.start,$=M.count;for(let J=R,D=R+$;J<D;J+=3)S(e.getX(J+0)),S(e.getX(J+1)),S(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[h++]}return new nn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nd=new Je,Bi=new eo,wo=new Vn,Ud=new I,Sr=new I,Er=new I,Tr=new I,gl=new I,Ro=new I,Co=new Fe,Po=new Fe,Lo=new Fe,Od=new I,Fd=new I,Bd=new I,Do=new I,Io=new I;class sn extends wt{constructor(e=new Cn,t=new qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ro.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(gl.fromBufferAttribute(f,e),o?Ro.addScaledVector(gl,u):Ro.addScaledVector(gl.sub(t),u))}t.add(Ro)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(s),Bi.copy(e.ray).recast(e.near),!(wo.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(wo,Ud)===null||Bi.origin.distanceToSquared(Ud)>(e.far-e.near)**2))&&(Nd.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(Nd),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],x=Math.max(p.start,h.start),v=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let y=x,E=v;y<E;y+=3){const A=a.getX(y),S=a.getX(y+1),C=a.getX(y+2);r=No(this,m,e,n,c,u,f,A,S,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const x=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);r=No(this,o,e,n,c,u,f,x,v,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],x=Math.max(p.start,h.start),v=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let y=x,E=v;y<E;y+=3){const A=y,S=y+1,C=y+2;r=No(this,m,e,n,c,u,f,A,S,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const x=p,v=p+1,y=p+2;r=No(this,o,e,n,c,u,f,x,v,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function sT(i,e,t,n,r,s,o,a){let l;if(e.side===on?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ti,a),l===null)return null;Io.copy(a),Io.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Io);return c<t.near||c>t.far?null:{distance:c,point:Io.clone(),object:i}}function No(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Sr),i.getVertexPosition(l,Er),i.getVertexPosition(c,Tr);const u=sT(i,e,t,n,Sr,Er,Tr,Do);if(u){r&&(Co.fromBufferAttribute(r,a),Po.fromBufferAttribute(r,l),Lo.fromBufferAttribute(r,c),u.uv=Dn.getInterpolation(Do,Sr,Er,Tr,Co,Po,Lo,new Fe)),s&&(Co.fromBufferAttribute(s,a),Po.fromBufferAttribute(s,l),Lo.fromBufferAttribute(s,c),u.uv1=Dn.getInterpolation(Do,Sr,Er,Tr,Co,Po,Lo,new Fe)),o&&(Od.fromBufferAttribute(o,a),Fd.fromBufferAttribute(o,l),Bd.fromBufferAttribute(o,c),u.normal=Dn.getInterpolation(Do,Sr,Er,Tr,Od,Fd,Bd,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};Dn.getNormal(Sr,Er,Tr,f.normal),u.face=f}return u}class to extends Cn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(f,2));function g(_,p,m,x,v,y,E,A,S,C,N){const M=y/S,R=E/C,$=y/2,J=E/2,D=A/2,j=S+1,V=C+1;let Z=0,W=0;const q=new I;for(let Q=0;Q<V;Q++){const ie=Q*R-J;for(let de=0;de<j;de++){const Ne=de*M-$;q[_]=Ne*x,q[p]=ie*v,q[m]=D,c.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[m]=A>0?1:-1,u.push(q.x,q.y,q.z),f.push(de/S),f.push(1-Q/C),Z+=1}}for(let Q=0;Q<C;Q++)for(let ie=0;ie<S;ie++){const de=d+ie+j*Q,Ne=d+ie+j*(Q+1),k=d+(ie+1)+j*(Q+1),oe=d+(ie+1)+j*Q;l.push(de,Ne,oe),l.push(Ne,k,oe),W+=6}a.addGroup(h,W,N),h+=W,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=qr(i[t]);for(const r in n)e[r]=n[r]}return e}function oT(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Km(i){return i.getRenderTarget()===null?i.outputColorSpace:ut.workingColorSpace}const aT={clone:qr,merge:Jt};var lT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lT,this.fragmentShader=cT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=oT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zm extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new I,Vd=new Fe,kd=new Fe;class tn extends Zm{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Vd,kd),t.subVectors(kd,Vd)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ar=-90,wr=1;class uT extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Ar,wr,e,t);r.layers=this.layers,this.add(r);const s=new tn(Ar,wr,e,t);s.layers=this.layers,this.add(s);const o=new tn(Ar,wr,e,t);o.layers=this.layers,this.add(o);const a=new tn(Ar,wr,e,t);a.layers=this.layers,this.add(a);const l=new tn(Ar,wr,e,t);l.layers=this.layers,this.add(l);const c=new tn(Ar,wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_a)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jm extends zt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fT extends tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Jm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new to(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:bi});s.uniforms.tEquirect.value=t;const o=new sn(r,s),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Yt),new uT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const _l=new I,dT=new I,hT=new Ke;class gi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=_l.subVectors(n,t).cross(dT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_l),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hT.getNormalMatrix(e),r=this.coplanarPoint(_l).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new Vn,Uo=new I;class Gc{constructor(e=new gi,t=new gi,n=new gi,r=new gi,s=new gi,o=new gi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],_=r[10],p=r[11],m=r[12],x=r[13],v=r[14],y=r[15];if(n[0].setComponents(l-s,d-c,p-h,y-m).normalize(),n[1].setComponents(l+s,d+c,p+h,y+m).normalize(),n[2].setComponents(l+o,d+u,p+g,y+x).normalize(),n[3].setComponents(l-o,d-u,p-g,y-x).normalize(),n[4].setComponents(l-a,d-f,p-_,y-v).normalize(),t===Jn)n[5].setComponents(l+a,d+f,p+_,y+v).normalize();else if(t===_a)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Uo.x=r.normal.x>0?e.max.x:e.min.x,Uo.y=r.normal.y>0?e.max.y:e.min.y,Uo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qm(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function pT(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,d=c.usage,h=f.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:h}}function s(c,u,f){const d=u.array,h=u._updateRange,g=u.updateRanges;if(i.bindBuffer(f,c),h.count===-1&&g.length===0&&i.bufferSubData(f,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?i.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}h.count!==-1&&(t?i.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):i.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class Ra extends Cn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const x=m*d-o;for(let v=0;v<c;v++){const y=v*f-s;g.push(y,-x,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const v=x+c*m,y=x+c*(m+1),E=x+1+c*(m+1),A=x+1+c*m;h.push(v,y,A),h.push(y,E,A)}this.setIndex(h),this.setAttribute("position",new xn(g,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var mT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gT=`#ifdef USE_ALPHAHASH
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
#endif`,_T=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MT=`#ifdef USE_AOMAP
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
#endif`,bT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ST=`#ifdef USE_BATCHING
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
#endif`,ET=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,TT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RT=`#ifdef USE_IRIDESCENCE
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
#endif`,CT=`#ifdef USE_BUMPMAP
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
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,FT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,BT=`#define PI 3.141592653589793
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
} // validated`,VT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kT=`vec3 transformedNormal = objectNormal;
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
#endif`,zT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XT="gl_FragColor = linearToOutputTexel( gl_FragColor );",jT=`
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
}`,$T=`#ifdef USE_ENVMAP
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
#endif`,YT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qT=`#ifdef USE_ENVMAP
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
#endif`,KT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZT=`#ifdef USE_ENVMAP
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
#endif`,JT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nA=`#ifdef USE_GRADIENTMAP
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
}`,iA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aA=`uniform bool receiveShadow;
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
#endif`,lA=`#ifdef USE_ENVMAP
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
#endif`,cA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hA=`PhysicalMaterial material;
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
#endif`,pA=`struct PhysicalMaterial {
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
}`,mA=`
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
#endif`,gA=`#if defined( RE_IndirectDiffuse )
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
#endif`,_A=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,MA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TA=`#if defined( USE_POINTS_UV )
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
#endif`,AA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PA=`#ifdef USE_MORPHNORMALS
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
#endif`,LA=`#ifdef USE_MORPHTARGETS
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
#endif`,DA=`#ifdef USE_MORPHTARGETS
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
#endif`,IA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BA=`#ifdef USE_NORMALMAP
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
#endif`,VA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$A=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ew=`float getShadowMask() {
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
}`,tw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nw=`#ifdef USE_SKINNING
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
#endif`,iw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rw=`#ifdef USE_SKINNING
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
#endif`,sw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ow=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cw=`#ifdef USE_TRANSMISSION
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
#endif`,uw=`#ifdef USE_TRANSMISSION
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
#endif`,fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gw=`uniform sampler2D t2D;
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
}`,_w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`#include <common>
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
}`,bw=`#if DEPTH_PACKING == 3200
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
}`,Sw=`#define DISTANCE
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
}`,Ew=`#define DISTANCE
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
}`,Tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Aw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`uniform float scale;
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
}`,Rw=`uniform vec3 diffuse;
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
}`,Cw=`#include <common>
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
}`,Pw=`uniform vec3 diffuse;
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
}`,Lw=`#define LAMBERT
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
}`,Dw=`#define LAMBERT
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
}`,Iw=`#define MATCAP
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
}`,Nw=`#define MATCAP
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
}`,Uw=`#define NORMAL
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
}`,Ow=`#define NORMAL
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
}`,Fw=`#define PHONG
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
}`,Bw=`#define PHONG
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
}`,Vw=`#define STANDARD
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
}`,kw=`#define STANDARD
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
}`,zw=`#define TOON
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
}`,Hw=`#define TOON
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
}`,Gw=`uniform float size;
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
}`,Ww=`uniform vec3 diffuse;
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
}`,Xw=`#include <common>
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
}`,jw=`uniform vec3 color;
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
}`,$w=`uniform float rotation;
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
}`,Yw=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:mT,alphahash_pars_fragment:gT,alphamap_fragment:_T,alphamap_pars_fragment:vT,alphatest_fragment:xT,alphatest_pars_fragment:yT,aomap_fragment:MT,aomap_pars_fragment:bT,batching_pars_vertex:ST,batching_vertex:ET,begin_vertex:TT,beginnormal_vertex:AT,bsdfs:wT,iridescence_fragment:RT,bumpmap_pars_fragment:CT,clipping_planes_fragment:PT,clipping_planes_pars_fragment:LT,clipping_planes_pars_vertex:DT,clipping_planes_vertex:IT,color_fragment:NT,color_pars_fragment:UT,color_pars_vertex:OT,color_vertex:FT,common:BT,cube_uv_reflection_fragment:VT,defaultnormal_vertex:kT,displacementmap_pars_vertex:zT,displacementmap_vertex:HT,emissivemap_fragment:GT,emissivemap_pars_fragment:WT,colorspace_fragment:XT,colorspace_pars_fragment:jT,envmap_fragment:$T,envmap_common_pars_fragment:YT,envmap_pars_fragment:qT,envmap_pars_vertex:KT,envmap_physical_pars_fragment:lA,envmap_vertex:ZT,fog_vertex:JT,fog_pars_vertex:QT,fog_fragment:eA,fog_pars_fragment:tA,gradientmap_pars_fragment:nA,lightmap_fragment:iA,lightmap_pars_fragment:rA,lights_lambert_fragment:sA,lights_lambert_pars_fragment:oA,lights_pars_begin:aA,lights_toon_fragment:cA,lights_toon_pars_fragment:uA,lights_phong_fragment:fA,lights_phong_pars_fragment:dA,lights_physical_fragment:hA,lights_physical_pars_fragment:pA,lights_fragment_begin:mA,lights_fragment_maps:gA,lights_fragment_end:_A,logdepthbuf_fragment:vA,logdepthbuf_pars_fragment:xA,logdepthbuf_pars_vertex:yA,logdepthbuf_vertex:MA,map_fragment:bA,map_pars_fragment:SA,map_particle_fragment:EA,map_particle_pars_fragment:TA,metalnessmap_fragment:AA,metalnessmap_pars_fragment:wA,morphinstance_vertex:RA,morphcolor_vertex:CA,morphnormal_vertex:PA,morphtarget_pars_vertex:LA,morphtarget_vertex:DA,normal_fragment_begin:IA,normal_fragment_maps:NA,normal_pars_fragment:UA,normal_pars_vertex:OA,normal_vertex:FA,normalmap_pars_fragment:BA,clearcoat_normal_fragment_begin:VA,clearcoat_normal_fragment_maps:kA,clearcoat_pars_fragment:zA,iridescence_pars_fragment:HA,opaque_fragment:GA,packing:WA,premultiplied_alpha_fragment:XA,project_vertex:jA,dithering_fragment:$A,dithering_pars_fragment:YA,roughnessmap_fragment:qA,roughnessmap_pars_fragment:KA,shadowmap_pars_fragment:ZA,shadowmap_pars_vertex:JA,shadowmap_vertex:QA,shadowmask_pars_fragment:ew,skinbase_vertex:tw,skinning_pars_vertex:nw,skinning_vertex:iw,skinnormal_vertex:rw,specularmap_fragment:sw,specularmap_pars_fragment:ow,tonemapping_fragment:aw,tonemapping_pars_fragment:lw,transmission_fragment:cw,transmission_pars_fragment:uw,uv_pars_fragment:fw,uv_pars_vertex:dw,uv_vertex:hw,worldpos_vertex:pw,background_vert:mw,background_frag:gw,backgroundCube_vert:_w,backgroundCube_frag:vw,cube_vert:xw,cube_frag:yw,depth_vert:Mw,depth_frag:bw,distanceRGBA_vert:Sw,distanceRGBA_frag:Ew,equirect_vert:Tw,equirect_frag:Aw,linedashed_vert:ww,linedashed_frag:Rw,meshbasic_vert:Cw,meshbasic_frag:Pw,meshlambert_vert:Lw,meshlambert_frag:Dw,meshmatcap_vert:Iw,meshmatcap_frag:Nw,meshnormal_vert:Uw,meshnormal_frag:Ow,meshphong_vert:Fw,meshphong_frag:Bw,meshphysical_vert:Vw,meshphysical_frag:kw,meshtoon_vert:zw,meshtoon_frag:Hw,points_vert:Gw,points_frag:Ww,shadow_vert:Xw,shadow_frag:jw,sprite_vert:$w,sprite_frag:Yw},he={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Pn={basic:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new He(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Jt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Jt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new He(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Jt([he.points,he.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Jt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Jt([he.common,he.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Jt([he.sprite,he.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Jt([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Jt([he.lights,he.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Pn.physical={uniforms:Jt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Oo={r:0,b:0,g:0},ki=new On,qw=new Je;function Kw(i,e,t,n,r,s,o){const a=new He(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(p,m){let x=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Aa)?(u===void 0&&(u=new sn(new to(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:qr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ki.copy(m.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qw.makeRotationFromEuler(ki)),u.material.toneMapped=ut.getTransfer(v.colorSpace)!==St,(f!==v||d!==v.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,h=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new sn(new Ra(2,2),new Li({name:"BackgroundMaterial",uniforms:qr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=ut.getTransfer(v.colorSpace)!==St,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,h=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Oo,Km(i)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Zw(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(D,j,V,Z,W){let q=!1;if(o){const Q=_(Z,V,j);c!==Q&&(c=Q,h(c.object)),q=m(D,Z,V,W),q&&x(D,Z,V,W)}else{const Q=j.wireframe===!0;(c.geometry!==Z.id||c.program!==V.id||c.wireframe!==Q)&&(c.geometry=Z.id,c.program=V.id,c.wireframe=Q,q=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,C(D,j,V,Z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function h(D){return n.isWebGL2?i.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,j,V){const Z=V.wireframe===!0;let W=a[D.id];W===void 0&&(W={},a[D.id]=W);let q=W[j.id];q===void 0&&(q={},W[j.id]=q);let Q=q[Z];return Q===void 0&&(Q=p(d()),q[Z]=Q),Q}function p(D){const j=[],V=[],Z=[];for(let W=0;W<r;W++)j[W]=0,V[W]=0,Z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:V,attributeDivisors:Z,object:D,attributes:{},index:null}}function m(D,j,V,Z){const W=c.attributes,q=j.attributes;let Q=0;const ie=V.getAttributes();for(const de in ie)if(ie[de].location>=0){const k=W[de];let oe=q[de];if(oe===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),k===void 0||k.attribute!==oe||oe&&k.data!==oe.data)return!0;Q++}return c.attributesNum!==Q||c.index!==Z}function x(D,j,V,Z){const W={},q=j.attributes;let Q=0;const ie=V.getAttributes();for(const de in ie)if(ie[de].location>=0){let k=q[de];k===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(k=D.instanceColor));const oe={};oe.attribute=k,k&&k.data&&(oe.data=k.data),W[de]=oe,Q++}c.attributes=W,c.attributesNum=Q,c.index=Z}function v(){const D=c.newAttributes;for(let j=0,V=D.length;j<V;j++)D[j]=0}function y(D){E(D,0)}function E(D,j){const V=c.newAttributes,Z=c.enabledAttributes,W=c.attributeDivisors;V[D]=1,Z[D]===0&&(i.enableVertexAttribArray(D),Z[D]=1),W[D]!==j&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,j),W[D]=j)}function A(){const D=c.newAttributes,j=c.enabledAttributes;for(let V=0,Z=j.length;V<Z;V++)j[V]!==D[V]&&(i.disableVertexAttribArray(V),j[V]=0)}function S(D,j,V,Z,W,q,Q){Q===!0?i.vertexAttribIPointer(D,j,V,W,q):i.vertexAttribPointer(D,j,V,Z,W,q)}function C(D,j,V,Z){if(n.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=Z.attributes,q=V.getAttributes(),Q=j.defaultAttributeValues;for(const ie in q){const de=q[ie];if(de.location>=0){let Ne=W[ie];if(Ne===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(Ne=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(Ne=D.instanceColor)),Ne!==void 0){const k=Ne.normalized,oe=Ne.itemSize,ge=t.get(Ne);if(ge===void 0)continue;const Ve=ge.buffer,Ce=ge.type,ve=ge.bytesPerElement,at=n.isWebGL2===!0&&(Ce===i.INT||Ce===i.UNSIGNED_INT||Ne.gpuType===Pm);if(Ne.isInterleavedBufferAttribute){const Oe=Ne.data,O=Oe.stride,Tt=Ne.offset;if(Oe.isInstancedInterleavedBuffer){for(let te=0;te<de.locationSize;te++)E(de.location+te,Oe.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let te=0;te<de.locationSize;te++)y(de.location+te);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let te=0;te<de.locationSize;te++)S(de.location+te,oe/de.locationSize,Ce,k,O*ve,(Tt+oe/de.locationSize*te)*ve,at)}else{if(Ne.isInstancedBufferAttribute){for(let Oe=0;Oe<de.locationSize;Oe++)E(de.location+Oe,Ne.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Oe=0;Oe<de.locationSize;Oe++)y(de.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Oe=0;Oe<de.locationSize;Oe++)S(de.location+Oe,oe/de.locationSize,Ce,k,oe*ve,oe/de.locationSize*Oe*ve,at)}}else if(Q!==void 0){const k=Q[ie];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(de.location,k);break;case 3:i.vertexAttrib3fv(de.location,k);break;case 4:i.vertexAttrib4fv(de.location,k);break;default:i.vertexAttrib1fv(de.location,k)}}}}A()}function N(){$();for(const D in a){const j=a[D];for(const V in j){const Z=j[V];for(const W in Z)g(Z[W].object),delete Z[W];delete j[V]}delete a[D]}}function M(D){if(a[D.id]===void 0)return;const j=a[D.id];for(const V in j){const Z=j[V];for(const W in Z)g(Z[W].object),delete Z[W];delete j[V]}delete a[D.id]}function R(D){for(const j in a){const V=a[j];if(V[D.id]===void 0)continue;const Z=V[D.id];for(const W in Z)g(Z[W].object),delete Z[W];delete V[D.id]}}function $(){J(),u=!0,c!==l&&(c=l,h(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:$,resetDefaultState:J,dispose:N,releaseStatesOfGeometry:M,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function Jw(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,f){i.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,d){if(d===0)return;let h,g;if(r)h=i,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](s,u,f,d),t.update(f,s,d)}function c(u,f,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<d;g++)this.render(u[g],f[g]);else{h.multiDrawArraysWEBGL(s,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Qw(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||e.has("OES_texture_float"),E=v&&y,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:A}}function e1(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new gi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||r;return r=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,v=x*4;let y=m.clippingState||null;l.value=y,y=u(g,d,v,h);for(let E=0;E!==v;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=h+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=h;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function t1(i){let e=new WeakMap;function t(o,a){return a===sc?o.mapping=Gr:a===oc&&(o.mapping=Wr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===sc||a===oc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fT(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Wc extends Zm{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ir=4,zd=[.125,.215,.35,.446,.526,.582],Xi=20,vl=new Wc,Hd=new He;let xl=null,yl=0,Ml=0;const Gi=(1+Math.sqrt(5))/2,Rr=1/Gi,Gd=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Gi,Rr),new I(0,Gi,-Rr),new I(Rr,0,Gi),new I(-Rr,0,Gi),new I(Gi,Rr,0),new I(-Gi,Rr,0)];class Wd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xl,yl,Ml),e.scissorTest=!1,Fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gr||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:js,format:gn,colorSpace:Gt,depthBuffer:!1},r=Xd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n1(s)),this._blurMaterial=i1(s,e,t)}return r}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,n,r){const a=new tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Hd),u.toneMapping=Si,u.autoClear=!1;const h=new qi({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new sn(new to,h);let _=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,_=!0):(h.color.copy(Hd),_=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Fo(r,x*v,m>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Gr||e.mapping===Wr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,vl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gd[(r-1)%Gd.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new sn(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Xi-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Xi;p>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xi}`);const m=[];let x=0;for(let S=0;S<Xi;++S){const C=S/_,N=Math.exp(-C*C/2);m.push(N),S===0?x+=N:S<p&&(x+=2*N)}for(let S=0;S<m.length;S++)m[S]=m[S]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[r],E=3*y*(r>v-Ir?r-v+Ir:0),A=4*(this._cubeSize-y);Fo(t,E,A,3*y,2*y),l.setRenderTarget(t),l.render(f,vl)}}function n1(i){const e=[],t=[],n=[];let r=i;const s=i-Ir+1+zd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ir?l=zd[o-i+Ir-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*h),v=new Float32Array(p*g*h),y=new Float32Array(m*g*h);for(let A=0;A<h;A++){const S=A%3*2/3-1,C=A>2?0:-1,N=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];x.set(N,_*g*A),v.set(d,p*g*A);const M=[A,A,A,A,A,A];y.set(M,m*g*A)}const E=new Cn;E.setAttribute("position",new nn(x,_)),E.setAttribute("uv",new nn(v,p)),E.setAttribute("faceIndex",new nn(y,m)),e.push(E),r>Ir&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xd(i,e,t){const n=new tr(i,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function i1(i,e,t){const n=new Float32Array(Xi),r=new I(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function jd(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function $d(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function r1(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===sc||l===oc,u=l===Gr||l===Wr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Wd(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Wd(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function s1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function o1(i,e,t,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const _=h[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const x=h.array;_=h.version;for(let v=0,y=x.length;v<y;v+=3){const E=x[v+0],A=x[v+1],S=x[v+2];d.push(E,A,A,S,S,E)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const E=v+0,A=v+1,S=v+2;d.push(E,A,A,S,S,E)}}else return;const p=new(zm(d)?qm:Ym)(d,1);p.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function a1(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,g){i.drawElements(s,g,a,h*l),t.update(g,s,1)}function f(h,g,_){if(_===0)return;let p,m;if(r)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,h*l,_),t.update(g,s,_)}function d(h,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(h[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,h,0,_);let m=0;for(let x=0;x<_;x++)m+=g[x];t.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function l1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function c1(i,e){return i[0]-e[0]}function u1(i,e){return Math.abs(e[1])-Math.abs(i[1])}function f1(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let J=function(){R.dispose(),s.delete(u),u.removeEventListener("dispose",J)};var h=J;p!==void 0&&p.texture.dispose();const m=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let S=0;m===!0&&(S=1),x===!0&&(S=2),v===!0&&(S=3);let C=u.attributes.position.count*S,N=1;C>e.maxTextureSize&&(N=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const M=new Float32Array(C*N*4*_),R=new Xm(M,C,N,_);R.type=En,R.needsUpdate=!0;const $=S*4;for(let D=0;D<_;D++){const j=y[D],V=E[D],Z=A[D],W=C*N*4*D;for(let q=0;q<j.count;q++){const Q=q*$;m===!0&&(o.fromBufferAttribute(j,q),M[W+Q+0]=o.x,M[W+Q+1]=o.y,M[W+Q+2]=o.z,M[W+Q+3]=0),x===!0&&(o.fromBufferAttribute(V,q),M[W+Q+4]=o.x,M[W+Q+5]=o.y,M[W+Q+6]=o.z,M[W+Q+7]=0),v===!0&&(o.fromBufferAttribute(Z,q),M[W+Q+8]=o.x,M[W+Q+9]=o.y,M[W+Q+10]=o.z,M[W+Q+11]=Z.itemSize===4?o.w:1)}}p={count:_,texture:R,size:new Fe(C,N)},s.set(u,p),u.addEventListener("dispose",J)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let m=0;for(let v=0;v<d.length;v++)m+=d[v];const x=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",d)}f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[u.id]=_}for(let y=0;y<g;y++){const E=_[y];E[0]=y,E[1]=d[y]}_.sort(u1);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(c1);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const E=a[y],A=E[0],S=E[1];A!==Number.MAX_SAFE_INTEGER&&S?(p&&u.getAttribute("morphTarget"+y)!==p[A]&&u.setAttribute("morphTarget"+y,p[A]),m&&u.getAttribute("morphNormal"+y)!==m[A]&&u.setAttribute("morphNormal"+y,m[A]),r[y]=S,x+=S):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),m&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const v=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function d1(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class eg extends zt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Qi,u!==Qi&&u!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Qi&&(n=yi),n===void 0&&u===jr&&(n=Ji),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const tg=new zt,ng=new eg(1,1);ng.compareFunction=km;const ig=new Xm,rg=new YE,sg=new Jm,Yd=[],qd=[],Kd=new Float32Array(16),Zd=new Float32Array(9),Jd=new Float32Array(4);function ns(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Yd[r];if(s===void 0&&(s=new Float32Array(r),Yd[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ca(i,e){let t=qd[e];t===void 0&&(t=new Int32Array(e),qd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function h1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function p1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function m1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function g1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function _1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Jd.set(n),i.uniformMatrix2fv(this.addr,!1,Jd),Ot(t,n)}}function v1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Zd.set(n),i.uniformMatrix3fv(this.addr,!1,Zd),Ot(t,n)}}function x1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Kd.set(n),i.uniformMatrix4fv(this.addr,!1,Kd),Ot(t,n)}}function y1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function M1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function b1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function S1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function E1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function T1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function A1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function w1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function R1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?ng:tg;t.setTexture2D(e||s,r)}function C1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||rg,r)}function P1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||sg,r)}function L1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ig,r)}function D1(i){switch(i){case 5126:return h1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return _1;case 35675:return v1;case 35676:return x1;case 5124:case 35670:return y1;case 35667:case 35671:return M1;case 35668:case 35672:return b1;case 35669:case 35673:return S1;case 5125:return E1;case 36294:return T1;case 36295:return A1;case 36296:return w1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return L1}}function I1(i,e){i.uniform1fv(this.addr,e)}function N1(i,e){const t=ns(e,this.size,2);i.uniform2fv(this.addr,t)}function U1(i,e){const t=ns(e,this.size,3);i.uniform3fv(this.addr,t)}function O1(i,e){const t=ns(e,this.size,4);i.uniform4fv(this.addr,t)}function F1(i,e){const t=ns(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function B1(i,e){const t=ns(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function V1(i,e){const t=ns(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function k1(i,e){i.uniform1iv(this.addr,e)}function z1(i,e){i.uniform2iv(this.addr,e)}function H1(i,e){i.uniform3iv(this.addr,e)}function G1(i,e){i.uniform4iv(this.addr,e)}function W1(i,e){i.uniform1uiv(this.addr,e)}function X1(i,e){i.uniform2uiv(this.addr,e)}function j1(i,e){i.uniform3uiv(this.addr,e)}function $1(i,e){i.uniform4uiv(this.addr,e)}function Y1(i,e,t){const n=this.cache,r=e.length,s=Ca(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||tg,s[o])}function q1(i,e,t){const n=this.cache,r=e.length,s=Ca(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||rg,s[o])}function K1(i,e,t){const n=this.cache,r=e.length,s=Ca(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||sg,s[o])}function Z1(i,e,t){const n=this.cache,r=e.length,s=Ca(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ig,s[o])}function J1(i){switch(i){case 5126:return I1;case 35664:return N1;case 35665:return U1;case 35666:return O1;case 35674:return F1;case 35675:return B1;case 35676:return V1;case 5124:case 35670:return k1;case 35667:case 35671:return z1;case 35668:case 35672:return H1;case 35669:case 35673:return G1;case 5125:return W1;case 36294:return X1;case 36295:return j1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return q1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Z1}}class Q1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=D1(t.type)}}class eR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J1(t.type)}}class tR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function Qd(i,e){i.seq.push(e),i.map[e.id]=e}function nR(i,e,t){const n=i.name,r=n.length;for(bl.lastIndex=0;;){const s=bl.exec(n),o=bl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Qd(t,c===void 0?new Q1(a,i,e):new eR(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new tR(a),Qd(t,f)),t=f}}}class Zo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);nR(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function eh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const iR=37297;let rR=0;function sR(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function oR(i){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(i);let n;switch(e===t?n="":e===ga&&t===ma?n="LinearDisplayP3ToLinearSRGB":e===ma&&t===ga&&(n="LinearSRGBToLinearDisplayP3"),i){case Gt:case wa:return[n,"LinearTransferOETF"];case en:case zc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function th(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+sR(i.getShaderSource(e),o)}else return r}function aR(i,e){const t=oR(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function lR(i,e){let t;switch(e){case nE:t="Linear";break;case iE:t="Reinhard";break;case rE:t="OptimizedCineon";break;case sE:t="ACESFilmic";break;case aE:t="AgX";break;case lE:t="Neutral";break;case oE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cR(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Nr).join(`
`)}function uR(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function fR(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dR(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Nr(i){return i!==""}function nh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ih(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hR=/^[ \t]*#include +<([\w\d./]+)>/gm;function dc(i){return i.replace(hR,mR)}const pR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mR(i,e){let t=qe[e];if(t===void 0){const n=pR.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return dc(t)}const gR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(i){return i.replace(gR,_R)}function _R(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function vR(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===PS?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function xR(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gr:case Wr:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yR(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wr:e="ENVMAP_MODE_REFRACTION";break}return e}function MR(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rm:e="ENVMAP_BLENDING_MULTIPLY";break;case eE:e="ENVMAP_BLENDING_MIX";break;case tE:e="ENVMAP_BLENDING_ADD";break}return e}function bR(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function SR(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vR(t),c=xR(t),u=yR(t),f=MR(t),d=bR(t),h=t.isWebGL2?"":cR(t),g=uR(t),_=fR(s),p=r.createProgram();let m,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Nr).join(`
`),m.length>0&&(m+=`
`),x=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Nr).join(`
`),x.length>0&&(x+=`
`)):(m=[sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),x=[h,sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?qe.tonemapping_pars_fragment:"",t.toneMapping!==Si?lR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,aR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),o=dc(o),o=nh(o,t),o=ih(o,t),a=dc(a),a=nh(a,t),a=ih(a,t),o=rh(o),a=rh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Md?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=v+m+o,E=v+x+a,A=eh(r,r.VERTEX_SHADER,y),S=eh(r,r.FRAGMENT_SHADER,E);r.attachShader(p,A),r.attachShader(p,S),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function C($){if(i.debug.checkShaderErrors){const J=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(A).trim(),j=r.getShaderInfoLog(S).trim();let V=!0,Z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,A,S);else{const W=th(r,A,"vertex"),q=th(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+J+`
`+W+`
`+q)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(D===""||j==="")&&(Z=!1);Z&&($.diagnostics={runnable:V,programLog:J,vertexShader:{log:D,prefix:m},fragmentShader:{log:j,prefix:x}})}r.deleteShader(A),r.deleteShader(S),N=new Zo(r,p),M=dR(r,p)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(p,iR)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rR++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=S,this}let ER=0;class TR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new AR(e),t.set(e,n)),n}}class AR{constructor(e){this.id=ER++,this.code=e,this.usedTimes=0}}function wR(i,e,t,n,r,s,o){const a=new jm,l=new TR,c=new Set,u=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,R,$,J,D){const j=J.fog,V=D.geometry,Z=M.isMeshStandardMaterial?J.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),q=W&&W.mapping===Aa?W.image.height:null,Q=_[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const ie=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=ie!==void 0?ie.length:0;let Ne=0;V.morphAttributes.position!==void 0&&(Ne=1),V.morphAttributes.normal!==void 0&&(Ne=2),V.morphAttributes.color!==void 0&&(Ne=3);let k,oe,ge,Ve;if(Q){const ft=Pn[Q];k=ft.vertexShader,oe=ft.fragmentShader}else k=M.vertexShader,oe=M.fragmentShader,l.update(M),ge=l.getVertexShaderID(M),Ve=l.getFragmentShaderID(M);const Ce=i.getRenderTarget(),ve=D.isInstancedMesh===!0,at=D.isBatchedMesh===!0,Oe=!!M.map,O=!!M.matcap,Tt=!!W,te=!!M.aoMap,z=!!M.lightMap,Y=!!M.bumpMap,xe=!!M.normalMap,Me=!!M.displacementMap,Re=!!M.emissiveMap,nt=!!M.metalnessMap,w=!!M.roughnessMap,b=M.anisotropy>0,X=M.clearcoat>0,K=M.iridescence>0,le=M.sheen>0,se=M.transmission>0,Ge=b&&!!M.anisotropyMap,Ue=X&&!!M.clearcoatMap,fe=X&&!!M.clearcoatNormalMap,pe=X&&!!M.clearcoatRoughnessMap,We=K&&!!M.iridescenceMap,ue=K&&!!M.iridescenceThicknessMap,Ct=le&&!!M.sheenColorMap,Qe=le&&!!M.sheenRoughnessMap,De=!!M.specularMap,ye=!!M.specularColorMap,Pe=!!M.specularIntensityMap,P=se&&!!M.transmissionMap,ee=se&&!!M.thicknessMap,be=!!M.gradientMap,L=!!M.alphaMap,ce=M.alphaTest>0,F=!!M.alphaHash,ae=!!M.extensions;let me=Si;M.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(me=i.toneMapping);const it={isWebGL2:f,shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:k,fragmentShader:oe,defines:M.defines,customVertexShaderID:ge,customFragmentShaderID:Ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:at,instancing:ve,instancingColor:ve&&D.instanceColor!==null,instancingMorph:ve&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Ce===null?i.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Gt,alphaToCoverage:!!M.alphaToCoverage,map:Oe,matcap:O,envMap:Tt,envMapMode:Tt&&W.mapping,envMapCubeUVHeight:q,aoMap:te,lightMap:z,bumpMap:Y,normalMap:xe,displacementMap:h&&Me,emissiveMap:Re,normalMapObjectSpace:xe&&M.normalMapType===ME,normalMapTangentSpace:xe&&M.normalMapType===Vm,metalnessMap:nt,roughnessMap:w,anisotropy:b,anisotropyMap:Ge,clearcoat:X,clearcoatMap:Ue,clearcoatNormalMap:fe,clearcoatRoughnessMap:pe,iridescence:K,iridescenceMap:We,iridescenceThicknessMap:ue,sheen:le,sheenColorMap:Ct,sheenRoughnessMap:Qe,specularMap:De,specularColorMap:ye,specularIntensityMap:Pe,transmission:se,transmissionMap:P,thicknessMap:ee,gradientMap:be,opaque:M.transparent===!1&&M.blending===Vr&&M.alphaToCoverage===!1,alphaMap:L,alphaTest:ce,alphaHash:F,combine:M.combine,mapUv:Oe&&p(M.map.channel),aoMapUv:te&&p(M.aoMap.channel),lightMapUv:z&&p(M.lightMap.channel),bumpMapUv:Y&&p(M.bumpMap.channel),normalMapUv:xe&&p(M.normalMap.channel),displacementMapUv:Me&&p(M.displacementMap.channel),emissiveMapUv:Re&&p(M.emissiveMap.channel),metalnessMapUv:nt&&p(M.metalnessMap.channel),roughnessMapUv:w&&p(M.roughnessMap.channel),anisotropyMapUv:Ge&&p(M.anisotropyMap.channel),clearcoatMapUv:Ue&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&p(M.sheenRoughnessMap.channel),specularMapUv:De&&p(M.specularMap.channel),specularColorMapUv:ye&&p(M.specularColorMap.channel),specularIntensityMapUv:Pe&&p(M.specularIntensityMap.channel),transmissionMapUv:P&&p(M.transmissionMap.channel),thicknessMapUv:ee&&p(M.thicknessMap.channel),alphaMapUv:L&&p(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(xe||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(Oe||L),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Oe&&M.map.isVideoTexture===!0&&ut.getTransfer(M.map.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ln,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ae&&M.extensions.derivatives===!0,extensionFragDepth:ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ae&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function x(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const $ in M.defines)R.push($),R.push(M.defines[$]);return M.isRawShaderMaterial===!1&&(v(R,M),y(R,M),R.push(i.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function v(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.numLightProbes),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function y(M,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.instancingMorph&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.normalMapObjectSpace&&a.enable(7),R.normalMapTangentSpace&&a.enable(8),R.clearcoat&&a.enable(9),R.iridescence&&a.enable(10),R.alphaTest&&a.enable(11),R.vertexColors&&a.enable(12),R.vertexAlphas&&a.enable(13),R.vertexUv1s&&a.enable(14),R.vertexUv2s&&a.enable(15),R.vertexUv3s&&a.enable(16),R.vertexTangents&&a.enable(17),R.anisotropy&&a.enable(18),R.alphaHash&&a.enable(19),R.batching&&a.enable(20),M.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),M.push(a.mask)}function E(M){const R=_[M.type];let $;if(R){const J=Pn[R];$=aT.clone(J.uniforms)}else $=M.uniforms;return $}function A(M,R){let $;for(let J=0,D=u.length;J<D;J++){const j=u[J];if(j.cacheKey===R){$=j,++$.usedTimes;break}}return $===void 0&&($=new SR(i,R,M,s),u.push($)),$}function S(M){if(--M.usedTimes===0){const R=u.indexOf(M);u[R]=u[u.length-1],u.pop(),M.destroy()}}function C(M){l.remove(M)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:E,acquireProgram:A,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:N}}function RR(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function CR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function oh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ah(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,d,h,g,_,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=h,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,d,h,g,_,p){const m=o(f,d,h,g,_,p);h.transmission>0?n.push(m):h.transparent===!0?r.push(m):t.push(m)}function l(f,d,h,g,_,p){const m=o(f,d,h,g,_,p);h.transmission>0?n.unshift(m):h.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||CR),n.length>1&&n.sort(d||oh),r.length>1&&r.sort(d||oh)}function u(){for(let f=e,d=i.length;f<d;f++){const h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function PR(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new ah,i.set(n,[o])):r>=s.length?(o=new ah,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function LR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new He};break;case"SpotLight":t={position:new I,direction:new I,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function DR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let IR=0;function NR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function UR(i,e){const t=new LR,n=DR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new Je,a=new Je;function l(u,f){let d=0,h=0,g=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let _=0,p=0,m=0,x=0,v=0,y=0,E=0,A=0,S=0,C=0,N=0;u.sort(NR);const M=f===!0?Math.PI:1;for(let $=0,J=u.length;$<J;$++){const D=u[$],j=D.color,V=D.intensity,Z=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=j.r*V*M,h+=j.g*V*M,g+=j.b*V*M;else if(D.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(D.sh.coefficients[q],V);N++}else if(D.isDirectionalLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const Q=D.shadow,ie=n.get(D);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,r.directionalShadow[_]=ie,r.directionalShadowMap[_]=W,r.directionalShadowMatrix[_]=D.shadow.matrix,y++}r.directional[_]=q,_++}else if(D.isSpotLight){const q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(j).multiplyScalar(V*M),q.distance=Z,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,r.spot[m]=q;const Q=D.shadow;if(D.map&&(r.spotLightMap[S]=D.map,S++,Q.updateMatrices(D),D.castShadow&&C++),r.spotLightMatrix[m]=Q.matrix,D.castShadow){const ie=n.get(D);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,r.spotShadow[m]=ie,r.spotShadowMap[m]=W,A++}m++}else if(D.isRectAreaLight){const q=t.get(D);q.color.copy(j).multiplyScalar(V),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),r.rectArea[x]=q,x++}else if(D.isPointLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*M),q.distance=D.distance,q.decay=D.decay,D.castShadow){const Q=D.shadow,ie=n.get(D);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,ie.shadowCameraNear=Q.camera.near,ie.shadowCameraFar=Q.camera.far,r.pointShadow[p]=ie,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=D.shadow.matrix,E++}r.point[p]=q,p++}else if(D.isHemisphereLight){const q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(V*M),q.groundColor.copy(D.groundColor).multiplyScalar(V*M),r.hemi[v]=q,v++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=h,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==_||R.pointLength!==p||R.spotLength!==m||R.rectAreaLength!==x||R.hemiLength!==v||R.numDirectionalShadows!==y||R.numPointShadows!==E||R.numSpotShadows!==A||R.numSpotMaps!==S||R.numLightProbes!==N)&&(r.directional.length=_,r.spot.length=m,r.rectArea.length=x,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=A+S-C,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=N,R.directionalLength=_,R.pointLength=p,R.spotLength=m,R.rectAreaLength=x,R.hemiLength=v,R.numDirectionalShadows=y,R.numPointShadows=E,R.numSpotShadows=A,R.numSpotMaps=S,R.numLightProbes=N,r.version=IR++)}function c(u,f){let d=0,h=0,g=0,_=0,p=0;const m=f.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const E=r.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(y.isSpotLight){const E=r.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const E=r.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=r.point[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const E=r.hemi[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:r}}function lh(i,e){const t=new UR(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function OR(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new lh(i,e),t.set(s,[l])):o>=a.length?(l=new lh(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class FR extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BR extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kR=`uniform sampler2D shadow_pass;
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
}`;function zR(i,e,t){let n=new Gc;const r=new Fe,s=new Fe,o=new gt,a=new FR({depthPacking:yE}),l=new BR,c={},u=t.maxTextureSize,f={[ti]:on,[on]:ti,[Ln]:Ln},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:VR,fragmentShader:kR}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Cn;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new sn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wm;let m=this.type;this.render=function(A,S,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const N=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),$=i.state;$.setBlending(bi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const J=m!==Kn&&this.type===Kn,D=m===Kn&&this.type!==Kn;for(let j=0,V=A.length;j<V;j++){const Z=A[j],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const q=W.getFrameExtents();if(r.multiply(q),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,W.mapSize.y=s.y)),W.map===null||J===!0||D===!0){const ie=this.type!==Kn?{minFilter:Vt,magFilter:Vt}:{};W.map!==null&&W.map.dispose(),W.map=new tr(r.x,r.y,ie),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const Q=W.getViewportCount();for(let ie=0;ie<Q;ie++){const de=W.getViewport(ie);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),$.viewport(o),W.updateMatrices(Z,ie),n=W.getFrustum(),y(S,C,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===Kn&&x(W,C),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(N,M,R)};function x(A,S){const C=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new tr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(S,null,C,d,_,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(S,null,C,h,_,null)}function v(A,S,C,N){let M=null;const R=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)M=R;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const $=M.uuid,J=S.uuid;let D=c[$];D===void 0&&(D={},c[$]=D);let j=D[J];j===void 0&&(j=M.clone(),D[J]=j,S.addEventListener("dispose",E)),M=j}if(M.visible=S.visible,M.wireframe=S.wireframe,N===Kn?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:f[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const $=i.properties.get(M);$.light=C}return M}function y(A,S,C,N,M){if(A.visible===!1)return;if(A.layers.test(S.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Kn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const J=e.update(A),D=A.material;if(Array.isArray(D)){const j=J.groups;for(let V=0,Z=j.length;V<Z;V++){const W=j[V],q=D[W.materialIndex];if(q&&q.visible){const Q=v(A,q,N,M);A.onBeforeShadow(i,A,S,C,J,Q,W),i.renderBufferDirect(C,null,J,Q,A,W),A.onAfterShadow(i,A,S,C,J,Q,W)}}}else if(D.visible){const j=v(A,D,N,M);A.onBeforeShadow(i,A,S,C,J,j,null),i.renderBufferDirect(C,null,J,j,A,null),A.onAfterShadow(i,A,S,C,J,j,null)}}const $=A.children;for(let J=0,D=$.length;J<D;J++)y($[J],S,C,N,M)}function E(A){A.target.removeEventListener("dispose",E);for(const C in c){const N=c[C],M=A.target.uuid;M in N&&(N[M].dispose(),delete N[M])}}}function HR(i,e,t){const n=t.isWebGL2;function r(){let L=!1;const ce=new gt;let F=null;const ae=new gt(0,0,0,0);return{setMask:function(me){F!==me&&!L&&(i.colorMask(me,me,me,me),F=me)},setLocked:function(me){L=me},setClear:function(me,it,ft,mt,Pt){Pt===!0&&(me*=mt,it*=mt,ft*=mt),ce.set(me,it,ft,mt),ae.equals(ce)===!1&&(i.clearColor(me,it,ft,mt),ae.copy(ce))},reset:function(){L=!1,F=null,ae.set(-1,0,0,0)}}}function s(){let L=!1,ce=null,F=null,ae=null;return{setTest:function(me){me?ve(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(me){ce!==me&&!L&&(i.depthMask(me),ce=me)},setFunc:function(me){if(F!==me){switch(me){case $S:i.depthFunc(i.NEVER);break;case YS:i.depthFunc(i.ALWAYS);break;case qS:i.depthFunc(i.LESS);break;case da:i.depthFunc(i.LEQUAL);break;case KS:i.depthFunc(i.EQUAL);break;case ZS:i.depthFunc(i.GEQUAL);break;case JS:i.depthFunc(i.GREATER);break;case QS:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}F=me}},setLocked:function(me){L=me},setClear:function(me){ae!==me&&(i.clearDepth(me),ae=me)},reset:function(){L=!1,ce=null,F=null,ae=null}}}function o(){let L=!1,ce=null,F=null,ae=null,me=null,it=null,ft=null,mt=null,Pt=null;return{setTest:function(ct){L||(ct?ve(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(ct){ce!==ct&&!L&&(i.stencilMask(ct),ce=ct)},setFunc:function(ct,Mt,Wt){(F!==ct||ae!==Mt||me!==Wt)&&(i.stencilFunc(ct,Mt,Wt),F=ct,ae=Mt,me=Wt)},setOp:function(ct,Mt,Wt){(it!==ct||ft!==Mt||mt!==Wt)&&(i.stencilOp(ct,Mt,Wt),it=ct,ft=Mt,mt=Wt)},setLocked:function(ct){L=ct},setClear:function(ct){Pt!==ct&&(i.clearStencil(ct),Pt=ct)},reset:function(){L=!1,ce=null,F=null,ae=null,me=null,it=null,ft=null,mt=null,Pt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},h={},g=new WeakMap,_=[],p=null,m=!1,x=null,v=null,y=null,E=null,A=null,S=null,C=null,N=new He(0,0,0),M=0,R=!1,$=null,J=null,D=null,j=null,V=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,q=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Q)[1]),W=q>=1):Q.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),W=q>=2);let ie=null,de={};const Ne=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),oe=new gt().fromArray(Ne),ge=new gt().fromArray(k);function Ve(L,ce,F,ae){const me=new Uint8Array(4),it=i.createTexture();i.bindTexture(L,it),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<F;ft++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ce+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return it}const Ce={};Ce[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(i.DEPTH_TEST),l.setFunc(da),Me(!1),Re(Vf),ve(i.CULL_FACE),Y(bi);function ve(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function at(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Oe(L,ce){return h[L]!==ce?(i.bindFramebuffer(L,ce),h[L]=ce,n&&(L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ce),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function O(L,ce){let F=_,ae=!1;if(L){F=g.get(ce),F===void 0&&(F=[],g.set(ce,F));const me=L.textures;if(F.length!==me.length||F[0]!==i.COLOR_ATTACHMENT0){for(let it=0,ft=me.length;it<ft;it++)F[it]=i.COLOR_ATTACHMENT0+it;F.length=me.length,ae=!0}}else F[0]!==i.BACK&&(F[0]=i.BACK,ae=!0);if(ae)if(t.isWebGL2)i.drawBuffers(F);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(F);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Tt(L){return p!==L?(i.useProgram(L),p=L,!0):!1}const te={[Wi]:i.FUNC_ADD,[DS]:i.FUNC_SUBTRACT,[IS]:i.FUNC_REVERSE_SUBTRACT};if(n)te[Gf]=i.MIN,te[Wf]=i.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(te[Gf]=L.MIN_EXT,te[Wf]=L.MAX_EXT)}const z={[NS]:i.ZERO,[US]:i.ONE,[OS]:i.SRC_COLOR,[ic]:i.SRC_ALPHA,[HS]:i.SRC_ALPHA_SATURATE,[kS]:i.DST_COLOR,[BS]:i.DST_ALPHA,[FS]:i.ONE_MINUS_SRC_COLOR,[rc]:i.ONE_MINUS_SRC_ALPHA,[zS]:i.ONE_MINUS_DST_COLOR,[VS]:i.ONE_MINUS_DST_ALPHA,[GS]:i.CONSTANT_COLOR,[WS]:i.ONE_MINUS_CONSTANT_COLOR,[XS]:i.CONSTANT_ALPHA,[jS]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(L,ce,F,ae,me,it,ft,mt,Pt,ct){if(L===bi){m===!0&&(at(i.BLEND),m=!1);return}if(m===!1&&(ve(i.BLEND),m=!0),L!==LS){if(L!==x||ct!==R){if((v!==Wi||A!==Wi)&&(i.blendEquation(i.FUNC_ADD),v=Wi,A=Wi),ct)switch(L){case Vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kf:i.blendFunc(i.ONE,i.ONE);break;case zf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kf:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,E=null,S=null,C=null,N.set(0,0,0),M=0,x=L,R=ct}return}me=me||ce,it=it||F,ft=ft||ae,(ce!==v||me!==A)&&(i.blendEquationSeparate(te[ce],te[me]),v=ce,A=me),(F!==y||ae!==E||it!==S||ft!==C)&&(i.blendFuncSeparate(z[F],z[ae],z[it],z[ft]),y=F,E=ae,S=it,C=ft),(mt.equals(N)===!1||Pt!==M)&&(i.blendColor(mt.r,mt.g,mt.b,Pt),N.copy(mt),M=Pt),x=L,R=!1}function xe(L,ce){L.side===Ln?at(i.CULL_FACE):ve(i.CULL_FACE);let F=L.side===on;ce&&(F=!F),Me(F),L.blending===Vr&&L.transparent===!1?Y(bi):Y(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ae=L.stencilWrite;c.setTest(ae),ae&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),w(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(L){$!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),$=L)}function Re(L){L!==RS?(ve(i.CULL_FACE),L!==J&&(L===Vf?i.cullFace(i.BACK):L===CS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),J=L}function nt(L){L!==D&&(W&&i.lineWidth(L),D=L)}function w(L,ce,F){L?(ve(i.POLYGON_OFFSET_FILL),(j!==ce||V!==F)&&(i.polygonOffset(ce,F),j=ce,V=F)):at(i.POLYGON_OFFSET_FILL)}function b(L){L?ve(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function X(L){L===void 0&&(L=i.TEXTURE0+Z-1),ie!==L&&(i.activeTexture(L),ie=L)}function K(L,ce,F){F===void 0&&(ie===null?F=i.TEXTURE0+Z-1:F=ie);let ae=de[F];ae===void 0&&(ae={type:void 0,texture:void 0},de[F]=ae),(ae.type!==L||ae.texture!==ce)&&(ie!==F&&(i.activeTexture(F),ie=F),i.bindTexture(L,ce||Ce[L]),ae.type=L,ae.texture=ce)}function le(){const L=de[ie];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qe(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(L){oe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function Pe(L){ge.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ge.copy(L))}function P(L,ce){let F=f.get(ce);F===void 0&&(F=new WeakMap,f.set(ce,F));let ae=F.get(L);ae===void 0&&(ae=i.getUniformBlockIndex(ce,L.name),F.set(L,ae))}function ee(L,ce){const ae=f.get(ce).get(L);u.get(ce)!==ae&&(i.uniformBlockBinding(ce,ae,L.__bindingPointIndex),u.set(ce,ae))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ie=null,de={},h={},g=new WeakMap,_=[],p=null,m=!1,x=null,v=null,y=null,E=null,A=null,S=null,C=null,N=new He(0,0,0),M=0,R=!1,$=null,J=null,D=null,j=null,V=null,oe.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ve,disable:at,bindFramebuffer:Oe,drawBuffers:O,useProgram:Tt,setBlending:Y,setMaterial:xe,setFlipSided:Me,setCullFace:Re,setLineWidth:nt,setPolygonOffset:w,setScissorTest:b,activeTexture:X,bindTexture:K,unbindTexture:le,compressedTexImage2D:se,compressedTexImage3D:Ge,texImage2D:Qe,texImage3D:De,updateUBOMapping:P,uniformBlockBinding:ee,texStorage2D:ue,texStorage3D:Ct,texSubImage2D:Ue,texSubImage3D:fe,compressedTexSubImage2D:pe,compressedTexSubImage3D:We,scissor:ye,viewport:Pe,reset:be}}function GR(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Fe,f=new WeakMap;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,b){return g?new OffscreenCanvas(w,b):Ys("canvas")}function p(w,b,X,K){let le=1;const se=nt(w);if((se.width>K||se.height>K)&&(le=K/Math.max(se.width,se.height)),le<1||b===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Ge=b?va:Math.floor,Ue=Ge(le*se.width),fe=Ge(le*se.height);d===void 0&&(d=_(Ue,fe));const pe=X?_(Ue,fe):d;return pe.width=Ue,pe.height=fe,pe.getContext("2d").drawImage(w,0,0,Ue,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Ue+"x"+fe+")."),pe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),w;return w}function m(w){const b=nt(w);return fc(b.width)&&fc(b.height)}function x(w){return a?!1:w.wrapS!==mn||w.wrapT!==mn||w.minFilter!==Vt&&w.minFilter!==Yt}function v(w,b){return w.generateMipmaps&&b&&w.minFilter!==Vt&&w.minFilter!==Yt}function y(w){i.generateMipmap(w)}function E(w,b,X,K,le=!1){if(a===!1)return b;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let se=b;if(b===i.RED&&(X===i.FLOAT&&(se=i.R32F),X===i.HALF_FLOAT&&(se=i.R16F),X===i.UNSIGNED_BYTE&&(se=i.R8)),b===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.R8UI),X===i.UNSIGNED_SHORT&&(se=i.R16UI),X===i.UNSIGNED_INT&&(se=i.R32UI),X===i.BYTE&&(se=i.R8I),X===i.SHORT&&(se=i.R16I),X===i.INT&&(se=i.R32I)),b===i.RG&&(X===i.FLOAT&&(se=i.RG32F),X===i.HALF_FLOAT&&(se=i.RG16F),X===i.UNSIGNED_BYTE&&(se=i.RG8)),b===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.RG8UI),X===i.UNSIGNED_SHORT&&(se=i.RG16UI),X===i.UNSIGNED_INT&&(se=i.RG32UI),X===i.BYTE&&(se=i.RG8I),X===i.SHORT&&(se=i.RG16I),X===i.INT&&(se=i.RG32I)),b===i.RGBA){const Ge=le?pa:ut.getTransfer(K);X===i.FLOAT&&(se=i.RGBA32F),X===i.HALF_FLOAT&&(se=i.RGBA16F),X===i.UNSIGNED_BYTE&&(se=Ge===St?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function A(w,b,X){return v(w,X)===!0||w.isFramebufferTexture&&w.minFilter!==Vt&&w.minFilter!==Yt?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function S(w){return w===Vt||w===ac||w===Lr?i.NEAREST:i.LINEAR}function C(w){const b=w.target;b.removeEventListener("dispose",C),M(b),b.isVideoTexture&&f.delete(b)}function N(w){const b=w.target;b.removeEventListener("dispose",N),$(b)}function M(w){const b=n.get(w);if(b.__webglInit===void 0)return;const X=w.source,K=h.get(X);if(K){const le=K[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&R(w),Object.keys(K).length===0&&h.delete(X)}n.remove(w)}function R(w){const b=n.get(w);i.deleteTexture(b.__webglTexture);const X=w.source,K=h.get(X);delete K[b.__cacheKey],o.memory.textures--}function $(w){const b=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let le=0;le<b.__webglFramebuffer[K].length;le++)i.deleteFramebuffer(b.__webglFramebuffer[K][le]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=w.textures;for(let K=0,le=X.length;K<le;K++){const se=n.get(X[K]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(X[K])}n.remove(w)}let J=0;function D(){J=0}function j(){const w=J;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),J+=1,w}function V(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function Z(w,b){const X=n.get(w);if(w.isVideoTexture&&Me(w),w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(X,w,b);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+b)}function W(w,b){const X=n.get(w);if(w.version>0&&X.__version!==w.version){ge(X,w,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+b)}function q(w,b){const X=n.get(w);if(w.version>0&&X.__version!==w.version){ge(X,w,b);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+b)}function Q(w,b){const X=n.get(w);if(w.version>0&&X.__version!==w.version){Ve(X,w,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+b)}const ie={[Xr]:i.REPEAT,[mn]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},de={[Vt]:i.NEAREST,[ac]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[Ko]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},Ne={[bE]:i.NEVER,[RE]:i.ALWAYS,[SE]:i.LESS,[km]:i.LEQUAL,[EE]:i.EQUAL,[wE]:i.GEQUAL,[TE]:i.GREATER,[AE]:i.NOTEQUAL};function k(w,b,X){if(b.type===En&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Yt||b.magFilter===Ko||b.magFilter===Lr||b.magFilter===Zn||b.minFilter===Yt||b.minFilter===Ko||b.minFilter===Lr||b.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(i.texParameteri(w,i.TEXTURE_WRAP_S,ie[b.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ie[b.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ie[b.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,de[b.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,de[b.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==mn||b.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,S(b.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,S(b.minFilter)),b.minFilter!==Vt&&b.minFilter!==Yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ne[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Vt||b.minFilter!==Lr&&b.minFilter!==Zn||b.type===En&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===js&&e.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function oe(w,b){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",C));const K=b.source;let le=h.get(K);le===void 0&&(le={},h.set(K,le));const se=V(b);if(se!==w.__cacheKey){le[se]===void 0&&(le[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),le[se].usedTimes++;const Ge=le[w.__cacheKey];Ge!==void 0&&(le[w.__cacheKey].usedTimes--,Ge.usedTimes===0&&R(b)),w.__cacheKey=se,w.__webglTexture=le[se].texture}return X}function ge(w,b,X){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const le=oe(w,b),se=b.source;t.bindTexture(K,w.__webglTexture,i.TEXTURE0+X);const Ge=n.get(se);if(se.version!==Ge.__version||le===!0){t.activeTexture(i.TEXTURE0+X);const Ue=ut.getPrimaries(ut.workingColorSpace),fe=b.colorSpace===vi?null:ut.getPrimaries(b.colorSpace),pe=b.colorSpace===vi||Ue===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const We=x(b)&&m(b.image)===!1;let ue=p(b.image,We,!1,r.maxTextureSize);ue=Re(b,ue);const Ct=m(ue)||a,Qe=s.convert(b.format,b.colorSpace);let De=s.convert(b.type),ye=E(b.internalFormat,Qe,De,b.colorSpace,b.isVideoTexture);k(K,b,Ct);let Pe;const P=b.mipmaps,ee=a&&b.isVideoTexture!==!0&&ye!==Fm,be=Ge.__version===void 0||le===!0,L=se.dataReady,ce=A(b,ue,Ct);if(b.isDepthTexture)ye=i.DEPTH_COMPONENT,a?b.type===En?ye=i.DEPTH_COMPONENT32F:b.type===yi?ye=i.DEPTH_COMPONENT24:b.type===Ji?ye=i.DEPTH24_STENCIL8:ye=i.DEPTH_COMPONENT16:b.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Qi&&ye===i.DEPTH_COMPONENT&&b.type!==kc&&b.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=yi,De=s.convert(b.type)),b.format===jr&&ye===i.DEPTH_COMPONENT&&(ye=i.DEPTH_STENCIL,b.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ji,De=s.convert(b.type))),be&&(ee?t.texStorage2D(i.TEXTURE_2D,1,ye,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,ye,ue.width,ue.height,0,Qe,De,null));else if(b.isDataTexture)if(P.length>0&&Ct){ee&&be&&t.texStorage2D(i.TEXTURE_2D,ce,ye,P[0].width,P[0].height);for(let F=0,ae=P.length;F<ae;F++)Pe=P[F],ee?L&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Pe.width,Pe.height,Qe,De,Pe.data):t.texImage2D(i.TEXTURE_2D,F,ye,Pe.width,Pe.height,0,Qe,De,Pe.data);b.generateMipmaps=!1}else ee?(be&&t.texStorage2D(i.TEXTURE_2D,ce,ye,ue.width,ue.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,Qe,De,ue.data)):t.texImage2D(i.TEXTURE_2D,0,ye,ue.width,ue.height,0,Qe,De,ue.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ee&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ye,P[0].width,P[0].height,ue.depth);for(let F=0,ae=P.length;F<ae;F++)Pe=P[F],b.format!==gn?Qe!==null?ee?L&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,Pe.width,Pe.height,ue.depth,Qe,Pe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,ye,Pe.width,Pe.height,ue.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,Pe.width,Pe.height,ue.depth,Qe,De,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,F,ye,Pe.width,Pe.height,ue.depth,0,Qe,De,Pe.data)}else{ee&&be&&t.texStorage2D(i.TEXTURE_2D,ce,ye,P[0].width,P[0].height);for(let F=0,ae=P.length;F<ae;F++)Pe=P[F],b.format!==gn?Qe!==null?ee?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,Pe.width,Pe.height,Qe,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,F,ye,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?L&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Pe.width,Pe.height,Qe,De,Pe.data):t.texImage2D(i.TEXTURE_2D,F,ye,Pe.width,Pe.height,0,Qe,De,Pe.data)}else if(b.isDataArrayTexture)ee?(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ye,ue.width,ue.height,ue.depth),L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Qe,De,ue.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,ue.width,ue.height,ue.depth,0,Qe,De,ue.data);else if(b.isData3DTexture)ee?(be&&t.texStorage3D(i.TEXTURE_3D,ce,ye,ue.width,ue.height,ue.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Qe,De,ue.data)):t.texImage3D(i.TEXTURE_3D,0,ye,ue.width,ue.height,ue.depth,0,Qe,De,ue.data);else if(b.isFramebufferTexture){if(be)if(ee)t.texStorage2D(i.TEXTURE_2D,ce,ye,ue.width,ue.height);else{let F=ue.width,ae=ue.height;for(let me=0;me<ce;me++)t.texImage2D(i.TEXTURE_2D,me,ye,F,ae,0,Qe,De,null),F>>=1,ae>>=1}}else if(P.length>0&&Ct){if(ee&&be){const F=nt(P[0]);t.texStorage2D(i.TEXTURE_2D,ce,ye,F.width,F.height)}for(let F=0,ae=P.length;F<ae;F++)Pe=P[F],ee?L&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Qe,De,Pe):t.texImage2D(i.TEXTURE_2D,F,ye,Qe,De,Pe);b.generateMipmaps=!1}else if(ee){if(be){const F=nt(ue);t.texStorage2D(i.TEXTURE_2D,ce,ye,F.width,F.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Qe,De,ue)}else t.texImage2D(i.TEXTURE_2D,0,ye,Qe,De,ue);v(b,Ct)&&y(K),Ge.__version=se.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Ve(w,b,X){if(b.image.length!==6)return;const K=oe(w,b),le=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+X);const se=n.get(le);if(le.version!==se.__version||K===!0){t.activeTexture(i.TEXTURE0+X);const Ge=ut.getPrimaries(ut.workingColorSpace),Ue=b.colorSpace===vi?null:ut.getPrimaries(b.colorSpace),fe=b.colorSpace===vi||Ge===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const pe=b.isCompressedTexture||b.image[0].isCompressedTexture,We=b.image[0]&&b.image[0].isDataTexture,ue=[];for(let F=0;F<6;F++)!pe&&!We?ue[F]=p(b.image[F],!1,!0,r.maxCubemapSize):ue[F]=We?b.image[F].image:b.image[F],ue[F]=Re(b,ue[F]);const Ct=ue[0],Qe=m(Ct)||a,De=s.convert(b.format,b.colorSpace),ye=s.convert(b.type),Pe=E(b.internalFormat,De,ye,b.colorSpace),P=a&&b.isVideoTexture!==!0,ee=se.__version===void 0||K===!0,be=le.dataReady;let L=A(b,Ct,Qe);k(i.TEXTURE_CUBE_MAP,b,Qe);let ce;if(pe){P&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,L,Pe,Ct.width,Ct.height);for(let F=0;F<6;F++){ce=ue[F].mipmaps;for(let ae=0;ae<ce.length;ae++){const me=ce[ae];b.format!==gn?De!==null?P?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae,0,0,me.width,me.height,De,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae,Pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae,0,0,me.width,me.height,De,ye,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae,Pe,me.width,me.height,0,De,ye,me.data)}}}else{if(ce=b.mipmaps,P&&ee){ce.length>0&&L++;const F=nt(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,L,Pe,F.width,F.height)}for(let F=0;F<6;F++)if(We){P?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,ue[F].width,ue[F].height,De,ye,ue[F].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Pe,ue[F].width,ue[F].height,0,De,ye,ue[F].data);for(let ae=0;ae<ce.length;ae++){const it=ce[ae].image[F].image;P?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae+1,0,0,it.width,it.height,De,ye,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae+1,Pe,it.width,it.height,0,De,ye,it.data)}}else{P?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,De,ye,ue[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Pe,De,ye,ue[F]);for(let ae=0;ae<ce.length;ae++){const me=ce[ae];P?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae+1,0,0,De,ye,me.image[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae+1,Pe,De,ye,me.image[F])}}}v(b,Qe)&&y(i.TEXTURE_CUBE_MAP),se.__version=le.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Ce(w,b,X,K,le,se){const Ge=s.convert(X.format,X.colorSpace),Ue=s.convert(X.type),fe=E(X.internalFormat,Ge,Ue,X.colorSpace);if(!n.get(b).__hasExternalTextures){const We=Math.max(1,b.width>>se),ue=Math.max(1,b.height>>se);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,se,fe,We,ue,b.depth,0,Ge,Ue,null):t.texImage2D(le,se,fe,We,ue,0,Ge,Ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),xe(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,le,n.get(X).__webglTexture,0,Y(b)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,le,n.get(X).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(w,b,X){if(i.bindRenderbuffer(i.RENDERBUFFER,w),b.depthBuffer&&!b.stencilBuffer){let K=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(X||xe(b)){const le=b.depthTexture;le&&le.isDepthTexture&&(le.type===En?K=i.DEPTH_COMPONENT32F:le.type===yi&&(K=i.DEPTH_COMPONENT24));const se=Y(b);xe(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,K,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,se,K,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(b.depthBuffer&&b.stencilBuffer){const K=Y(b);X&&xe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,b.width,b.height):xe(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const K=b.textures;for(let le=0;le<K.length;le++){const se=K[le],Ge=s.convert(se.format,se.colorSpace),Ue=s.convert(se.type),fe=E(se.internalFormat,Ge,Ue,se.colorSpace),pe=Y(b);X&&xe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,fe,b.width,b.height):xe(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,fe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,fe,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z(b.depthTexture,0);const K=n.get(b.depthTexture).__webglTexture,le=Y(b);if(b.depthTexture.format===Qi)xe(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(b.depthTexture.format===jr)xe(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Oe(w){const b=n.get(w),X=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");at(b.__webglFramebuffer,w)}else if(X){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]=i.createRenderbuffer(),ve(b.__webglDepthbuffer[K],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),ve(b.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function O(w,b,X){const K=n.get(w);b!==void 0&&Ce(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Oe(w)}function Tt(w){const b=w.texture,X=n.get(w),K=n.get(b);w.addEventListener("dispose",N);const le=w.textures,se=w.isWebGLCubeRenderTarget===!0,Ge=le.length>1,Ue=m(w)||a;if(Ge||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),se){X.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[fe]=[];for(let pe=0;pe<b.mipmaps.length;pe++)X.__webglFramebuffer[fe][pe]=i.createFramebuffer()}else X.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)X.__webglFramebuffer[fe]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ge)if(r.drawBuffers)for(let fe=0,pe=le.length;fe<pe;fe++){const We=n.get(le[fe]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&xe(w)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let fe=0;fe<le.length;fe++){const pe=le[fe];X.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[fe]);const We=s.convert(pe.format,pe.colorSpace),ue=s.convert(pe.type),Ct=E(pe.internalFormat,We,ue,pe.colorSpace,w.isXRRenderTarget===!0),Qe=Y(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Ct,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,X.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(X.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),k(i.TEXTURE_CUBE_MAP,b,Ue);for(let fe=0;fe<6;fe++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)Ce(X.__webglFramebuffer[fe][pe],w,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else Ce(X.__webglFramebuffer[fe],w,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(b,Ue)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let fe=0,pe=le.length;fe<pe;fe++){const We=le[fe],ue=n.get(We);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),k(i.TEXTURE_2D,We,Ue),Ce(X.__webglFramebuffer,w,We,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),v(We,Ue)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?fe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,K.__webglTexture),k(fe,b,Ue),a&&b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)Ce(X.__webglFramebuffer[pe],w,b,i.COLOR_ATTACHMENT0,fe,pe);else Ce(X.__webglFramebuffer,w,b,i.COLOR_ATTACHMENT0,fe,0);v(b,Ue)&&y(fe),t.unbindTexture()}w.depthBuffer&&Oe(w)}function te(w){const b=m(w)||a,X=w.textures;for(let K=0,le=X.length;K<le;K++){const se=X[K];if(v(se,b)){const Ge=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ue=n.get(se).__webglTexture;t.bindTexture(Ge,Ue),y(Ge),t.unbindTexture()}}}function z(w){if(a&&w.samples>0&&xe(w)===!1){const b=w.textures,X=w.width,K=w.height;let le=i.COLOR_BUFFER_BIT;const se=[],Ge=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(w),fe=b.length>1;if(fe)for(let pe=0;pe<b.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let pe=0;pe<b.length;pe++){se.push(i.COLOR_ATTACHMENT0+pe),w.depthBuffer&&se.push(Ge);const We=Ue.__ignoreDepthValues!==void 0?Ue.__ignoreDepthValues:!1;if(We===!1&&(w.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),fe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[pe]),We===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ge]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ge])),fe){const ue=n.get(b[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,X,K,0,0,X,K,le,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let pe=0;pe<b.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[pe]);const We=n.get(b[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}}function Y(w){return Math.min(r.maxSamples,w.samples)}function xe(w){const b=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Me(w){const b=o.render.frame;f.get(w)!==b&&(f.set(w,b),w.update())}function Re(w,b){const X=w.colorSpace,K=w.format,le=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===uc||X!==Gt&&X!==vi&&(ut.getTransfer(X)===St?a===!1?e.has("EXT_sRGB")===!0&&K===gn?(w.format=uc,w.minFilter=Yt,w.generateMipmaps=!1):b=Gm.sRGBToLinear(b):(K!==gn||le!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function nt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=j,this.resetTextureUnits=D,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=Q,this.rebindTextures=O,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=xe}function WR(i,e,t){const n=t.isWebGL2;function r(s,o=vi){let a;const l=ut.getTransfer(o);if(s===Ei)return i.UNSIGNED_BYTE;if(s===Lm)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Dm)return i.UNSIGNED_SHORT_5_5_5_1;if(s===uE)return i.BYTE;if(s===fE)return i.SHORT;if(s===kc)return i.UNSIGNED_SHORT;if(s===Pm)return i.INT;if(s===yi)return i.UNSIGNED_INT;if(s===En)return i.FLOAT;if(s===js)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===dE)return i.ALPHA;if(s===gn)return i.RGBA;if(s===hE)return i.LUMINANCE;if(s===pE)return i.LUMINANCE_ALPHA;if(s===Qi)return i.DEPTH_COMPONENT;if(s===jr)return i.DEPTH_STENCIL;if(s===uc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Im)return i.RED;if(s===Nm)return i.RED_INTEGER;if(s===mE)return i.RG;if(s===Um)return i.RG_INTEGER;if(s===Om)return i.RGBA_INTEGER;if(s===$a||s===Ya||s===qa||s===Ka)if(l===St)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===$a)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===$a)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ya)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ka)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jf||s===$f||s===Yf||s===qf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===jf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$f)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Kf||s===Zf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Kf)return l===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Zf)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Jf||s===Qf||s===ed||s===td||s===nd||s===id||s===rd||s===sd||s===od||s===ad||s===ld||s===cd||s===ud||s===fd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Jf)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qf)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ed)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===td)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===nd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===id)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===rd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===od)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ad)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ld)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===cd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ud)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Za||s===dd||s===hd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Za)return l===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===dd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===hd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gE||s===pd||s===md||s===gd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Za)return a.COMPRESSED_RED_RGTC1_EXT;if(s===pd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===md)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ji?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class XR extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ki extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jR={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ki;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const $R=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YR=`
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

}`;class qR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Li({extensions:{fragDepth:!0},vertexShader:$R,fragmentShader:YR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new sn(new Ra(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class KR extends or{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=new qR,p=t.getContextAttributes();let m=null,x=null;const v=[],y=[],E=new Fe;let A=null;const S=new tn;S.layers.enable(1),S.viewport=new gt;const C=new tn;C.layers.enable(2),C.viewport=new gt;const N=[S,C],M=new XR;M.layers.enable(1),M.layers.enable(2);let R=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let oe=v[k];return oe===void 0&&(oe=new Sl,v[k]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(k){let oe=v[k];return oe===void 0&&(oe=new Sl,v[k]=oe),oe.getGripSpace()},this.getHand=function(k){let oe=v[k];return oe===void 0&&(oe=new Sl,v[k]=oe),oe.getHandSpace()};function J(k){const oe=y.indexOf(k.inputSource);if(oe===-1)return;const ge=v[oe];ge!==void 0&&(ge.update(k.inputSource,k.frame,c||o),ge.dispatchEvent({type:k.type,data:k.inputSource}))}function D(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",j);for(let k=0;k<v.length;k++){const oe=y[k];oe!==null&&(y[k]=null,v[k].disconnect(oe))}R=null,$=null,_.reset(),e.setRenderTarget(m),h=null,d=null,f=null,r=null,x=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",D),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new tr(h.framebufferWidth,h.framebufferHeight,{format:gn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let oe=null,ge=null,Ve=null;p.depth&&(Ve=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?jr:Qi,ge=p.stencil?Ji:yi);const Ce={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new tr(d.textureWidth,d.textureHeight,{format:gn,type:Ei,depthTexture:new eg(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const ve=e.properties.get(x);ve.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(k){for(let oe=0;oe<k.removed.length;oe++){const ge=k.removed[oe],Ve=y.indexOf(ge);Ve>=0&&(y[Ve]=null,v[Ve].disconnect(ge))}for(let oe=0;oe<k.added.length;oe++){const ge=k.added[oe];let Ve=y.indexOf(ge);if(Ve===-1){for(let ve=0;ve<v.length;ve++)if(ve>=y.length){y.push(ge),Ve=ve;break}else if(y[ve]===null){y[ve]=ge,Ve=ve;break}if(Ve===-1)break}const Ce=v[Ve];Ce&&Ce.connect(ge)}}const V=new I,Z=new I;function W(k,oe,ge){V.setFromMatrixPosition(oe.matrixWorld),Z.setFromMatrixPosition(ge.matrixWorld);const Ve=V.distanceTo(Z),Ce=oe.projectionMatrix.elements,ve=ge.projectionMatrix.elements,at=Ce[14]/(Ce[10]-1),Oe=Ce[14]/(Ce[10]+1),O=(Ce[9]+1)/Ce[5],Tt=(Ce[9]-1)/Ce[5],te=(Ce[8]-1)/Ce[0],z=(ve[8]+1)/ve[0],Y=at*te,xe=at*z,Me=Ve/(-te+z),Re=Me*-te;oe.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Re),k.translateZ(Me),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const nt=at+Me,w=Oe+Me,b=Y-Re,X=xe+(Ve-Re),K=O*Oe/w*nt,le=Tt*Oe/w*nt;k.projectionMatrix.makePerspective(b,X,K,le,nt,w),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function q(k,oe){oe===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(oe.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;_.texture!==null&&(k.near=_.depthNear,k.far=_.depthFar),M.near=C.near=S.near=k.near,M.far=C.far=S.far=k.far,(R!==M.near||$!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,$=M.far,S.near=R,S.far=$,C.near=R,C.far=$,S.updateProjectionMatrix(),C.updateProjectionMatrix(),k.updateProjectionMatrix());const oe=k.parent,ge=M.cameras;q(M,oe);for(let Ve=0;Ve<ge.length;Ve++)q(ge[Ve],oe);ge.length===2?W(M,S,C):M.projectionMatrix.copy(S.projectionMatrix),Q(k,M,oe)};function Q(k,oe,ge){ge===null?k.matrix.copy(oe.matrixWorld):(k.matrix.copy(ge.matrixWorld),k.matrix.invert(),k.matrix.multiply(oe.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(oe.projectionMatrix),k.projectionMatrixInverse.copy(oe.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Yr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=k)},this.hasDepthSensing=function(){return _.texture!==null};let ie=null;function de(k,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let Ve=!1;ge.length!==M.cameras.length&&(M.cameras.length=0,Ve=!0);for(let ve=0;ve<ge.length;ve++){const at=ge[ve];let Oe=null;if(h!==null)Oe=h.getViewport(at);else{const Tt=f.getViewSubImage(d,at);Oe=Tt.viewport,ve===0&&(e.setRenderTargetTextures(x,Tt.colorTexture,d.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(x))}let O=N[ve];O===void 0&&(O=new tn,O.layers.enable(ve),O.viewport=new gt,N[ve]=O),O.matrix.fromArray(at.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(at.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ve===0&&(M.matrix.copy(O.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ve===!0&&M.cameras.push(O)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const ve=f.getDepthInformation(ge[0]);ve&&ve.isValid&&ve.texture&&_.init(e,ve,r.renderState)}}for(let ge=0;ge<v.length;ge++){const Ve=y[ge],Ce=v[ge];Ve!==null&&Ce!==void 0&&Ce.update(Ve,oe,c||o)}_.render(e,M),ie&&ie(k,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Ne=new Qm;Ne.setAnimationLoop(de),this.setAnimationLoop=function(k){ie=k},this.dispose=function(){}}}const zi=new On,ZR=new Je;function JR(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Km(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,x,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===on&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===on&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),v=x.envMap,y=x.envMapRotation;if(v&&(p.envMap.value=v,zi.copy(y),zi.x*=-1,zi.y*=-1,zi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),p.envMapRotation.value.setFromMatrix4(ZR.makeRotationFromEuler(zi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const E=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*E,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function QR(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=r[x.id];y===void 0&&(g(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",p));const E=v.program;n.updateUBOMapping(x,E);const A=e.render.frame;s[x.id]!==A&&(d(x),s[x.id]=A)}function u(x){const v=f();x.__bindingPointIndex=v;const y=i.createBuffer(),E=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=r[x.id],y=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,S=y.length;A<S;A++){const C=Array.isArray(y[A])?y[A]:[y[A]];for(let N=0,M=C.length;N<M;N++){const R=C[N];if(h(R,A,N,E)===!0){const $=R.__offset,J=Array.isArray(R.value)?R.value:[R.value];let D=0;for(let j=0;j<J.length;j++){const V=J[j],Z=_(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,$+D,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,v,y,E){const A=x.value,S=v+"_"+y;if(E[S]===void 0)return typeof A=="number"||typeof A=="boolean"?E[S]=A:E[S]=A.clone(),!0;{const C=E[S];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return E[S]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(x){const v=x.uniforms;let y=0;const E=16;for(let S=0,C=v.length;S<C;S++){const N=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,R=N.length;M<R;M++){const $=N[M],J=Array.isArray($.value)?$.value:[$.value];for(let D=0,j=J.length;D<j;D++){const V=J[D],Z=_(V),W=y%E;W!==0&&E-W<Z.boundary&&(y+=E-W),$.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=y,y+=Z.storage}}}const A=y%E;return A>0&&(y+=E-A),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class og{constructor(e={}){const{canvas:t=GE(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this._useLegacyLights=!1,this.toneMapping=Si,this.toneMappingExposure=1;const v=this;let y=!1,E=0,A=0,S=null,C=-1,N=null;const M=new gt,R=new gt;let $=null;const J=new He(0);let D=0,j=t.width,V=t.height,Z=1,W=null,q=null;const Q=new gt(0,0,j,V),ie=new gt(0,0,j,V);let de=!1;const Ne=new Gc;let k=!1,oe=!1,ge=null;const Ve=new Je,Ce=new Fe,ve=new I,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return S===null?Z:1}let O=n;function Tt(T,U){for(let H=0;H<T.length;H++){const G=T[H],B=t.getContext(G,U);if(B!==null)return B}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vc}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ce,!1),O===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),O=Tt(U,T),O===null)throw Tt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let te,z,Y,xe,Me,Re,nt,w,b,X,K,le,se,Ge,Ue,fe,pe,We,ue,Ct,Qe,De,ye,Pe;function P(){te=new s1(O),z=new Qw(O,te,e),te.init(z),De=new WR(O,te,z),Y=new HR(O,te,z),xe=new l1(O),Me=new RR,Re=new GR(O,te,Y,Me,z,De,xe),nt=new t1(v),w=new r1(v),b=new pT(O,z),ye=new Zw(O,te,b,z),X=new o1(O,b,xe,ye),K=new d1(O,X,b,xe),ue=new f1(O,z,Re),fe=new e1(Me),le=new wR(v,nt,w,te,z,ye,fe),se=new JR(v,Me),Ge=new PR,Ue=new OR(te,z),We=new Kw(v,nt,w,Y,K,d,l),pe=new zR(v,K,z),Pe=new QR(O,xe,z,Y),Ct=new Jw(O,te,xe,z),Qe=new a1(O,te,xe,z),xe.programs=le.programs,v.capabilities=z,v.extensions=te,v.properties=Me,v.renderLists=Ge,v.shadowMap=pe,v.state=Y,v.info=xe}P();const ee=new KR(v,O);this.xr=ee,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(j,V,!1))},this.getSize=function(T){return T.set(j,V)},this.setSize=function(T,U,H=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,V=U,t.width=Math.floor(T*Z),t.height=Math.floor(U*Z),H===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(j*Z,V*Z).floor()},this.setDrawingBufferSize=function(T,U,H){j=T,V=U,Z=H,t.width=Math.floor(T*H),t.height=Math.floor(U*H),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,U,H,G){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,U,H,G),Y.viewport(M.copy(Q).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,U,H,G){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,U,H,G),Y.scissor(R.copy(ie).multiplyScalar(Z).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(T){Y.setScissorTest(de=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(T=!0,U=!0,H=!0){let G=0;if(T){let B=!1;if(S!==null){const _e=S.texture.format;B=_e===Om||_e===Um||_e===Nm}if(B){const _e=S.texture.type,Le=_e===Ei||_e===yi||_e===kc||_e===Ji||_e===Lm||_e===Dm,Be=We.getClearColor(),ze=We.getClearAlpha(),et=Be.r,Xe=Be.g,je=Be.b;Le?(h[0]=et,h[1]=Xe,h[2]=je,h[3]=ze,O.clearBufferuiv(O.COLOR,0,h)):(g[0]=et,g[1]=Xe,g[2]=je,g[3]=ze,O.clearBufferiv(O.COLOR,0,g))}else G|=O.COLOR_BUFFER_BIT}U&&(G|=O.DEPTH_BUFFER_BIT),H&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ge.dispose(),Ue.dispose(),Me.dispose(),nt.dispose(),w.dispose(),K.dispose(),ye.dispose(),Pe.dispose(),le.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Pt),ee.removeEventListener("sessionend",ct),ge&&(ge.dispose(),ge=null),Mt.stop()};function be(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=xe.autoReset,U=pe.enabled,H=pe.autoUpdate,G=pe.needsUpdate,B=pe.type;P(),xe.autoReset=T,pe.enabled=U,pe.autoUpdate=H,pe.needsUpdate=G,pe.type=B}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function F(T){const U=T.target;U.removeEventListener("dispose",F),ae(U)}function ae(T){me(T),Me.remove(T)}function me(T){const U=Me.get(T).programs;U!==void 0&&(U.forEach(function(H){le.releaseProgram(H)}),T.isShaderMaterial&&le.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,H,G,B,_e){U===null&&(U=at);const Le=B.isMesh&&B.matrixWorld.determinant()<0,Be=yg(T,U,H,G,B);Y.setMaterial(G,Le);let ze=H.index,et=1;if(G.wireframe===!0){if(ze=X.getWireframeAttribute(H),ze===void 0)return;et=2}const Xe=H.drawRange,je=H.attributes.position;let Dt=Xe.start*et,an=(Xe.start+Xe.count)*et;_e!==null&&(Dt=Math.max(Dt,_e.start*et),an=Math.min(an,(_e.start+_e.count)*et)),ze!==null?(Dt=Math.max(Dt,0),an=Math.min(an,ze.count)):je!=null&&(Dt=Math.max(Dt,0),an=Math.min(an,je.count));const Ft=an-Dt;if(Ft<0||Ft===1/0)return;ye.setup(B,G,Be,H,ze);let zn,At=Ct;if(ze!==null&&(zn=b.get(ze),At=Qe,At.setIndex(zn)),B.isMesh)G.wireframe===!0?(Y.setLineWidth(G.wireframeLinewidth*Oe()),At.setMode(O.LINES)):At.setMode(O.TRIANGLES);else if(B.isLine){let Ye=G.linewidth;Ye===void 0&&(Ye=1),Y.setLineWidth(Ye*Oe()),B.isLineSegments?At.setMode(O.LINES):B.isLineLoop?At.setMode(O.LINE_LOOP):At.setMode(O.LINE_STRIP)}else B.isPoints?At.setMode(O.POINTS):B.isSprite&&At.setMode(O.TRIANGLES);if(B.isBatchedMesh)At.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)At.renderInstances(Dt,Ft,B.count);else if(H.isInstancedBufferGeometry){const Ye=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ia=Math.min(H.instanceCount,Ye);At.renderInstances(Dt,Ft,Ia)}else At.render(Dt,Ft)};function it(T,U,H){T.transparent===!0&&T.side===Ln&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,oo(T,U,H),T.side=ti,T.needsUpdate=!0,oo(T,U,H),T.side=Ln):oo(T,U,H)}this.compile=function(T,U,H=null){H===null&&(H=T),p=Ue.get(H),p.init(),x.push(p),H.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==H&&T.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(v._useLegacyLights);const G=new Set;return T.traverse(function(B){const _e=B.material;if(_e)if(Array.isArray(_e))for(let Le=0;Le<_e.length;Le++){const Be=_e[Le];it(Be,H,B),G.add(Be)}else it(_e,H,B),G.add(_e)}),x.pop(),p=null,G},this.compileAsync=function(T,U,H=null){const G=this.compile(T,U,H);return new Promise(B=>{function _e(){if(G.forEach(function(Le){Me.get(Le).currentProgram.isReady()&&G.delete(Le)}),G.size===0){B(T);return}setTimeout(_e,10)}te.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let ft=null;function mt(T){ft&&ft(T)}function Pt(){Mt.stop()}function ct(){Mt.start()}const Mt=new Qm;Mt.setAnimationLoop(mt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(T){ft=T,ee.setAnimationLoop(T),T===null?Mt.stop():Mt.start()},ee.addEventListener("sessionstart",Pt),ee.addEventListener("sessionend",ct),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(U),U=ee.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,U,S),p=Ue.get(T,x.length),p.init(),x.push(p),Ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ne.setFromProjectionMatrix(Ve),oe=this.localClippingEnabled,k=fe.init(this.clippingPlanes,oe),_=Ge.get(T,m.length),_.init(),m.push(_),Wt(T,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,q),this.info.render.frame++,k===!0&&fe.beginShadows();const H=p.state.shadowsArray;if(pe.render(H,T,U),k===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1)&&We.render(_,T),p.setupLights(v._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let B=0,_e=G.length;B<_e;B++){const Le=G[B];Di(_,T,Le,Le.viewport)}}else Di(_,T,U);S!==null&&(Re.updateMultisampleRenderTarget(S),Re.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(v,T,U),ye.resetDefaultState(),C=-1,N=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Wt(T,U,H,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ne.intersectsSprite(T)){G&&ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ve);const Le=K.update(T),Be=T.material;Be.visible&&_.push(T,Le,Be,H,ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ne.intersectsObject(T))){const Le=K.update(T),Be=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ve.copy(T.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ve.copy(Le.boundingSphere.center)),ve.applyMatrix4(T.matrixWorld).applyMatrix4(Ve)),Array.isArray(Be)){const ze=Le.groups;for(let et=0,Xe=ze.length;et<Xe;et++){const je=ze[et],Dt=Be[je.materialIndex];Dt&&Dt.visible&&_.push(T,Le,Dt,H,ve.z,je)}}else Be.visible&&_.push(T,Le,Be,H,ve.z,null)}}const _e=T.children;for(let Le=0,Be=_e.length;Le<Be;Le++)Wt(_e[Le],U,H,G)}function Di(T,U,H,G){const B=T.opaque,_e=T.transmissive,Le=T.transparent;p.setupLightsView(H),k===!0&&fe.setGlobalState(v.clippingPlanes,H),_e.length>0&&ro(B,_e,U,H),G&&Y.viewport(M.copy(G)),B.length>0&&so(B,U,H),_e.length>0&&so(_e,U,H),Le.length>0&&so(Le,U,H),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function ro(T,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const _e=z.isWebGL2;ge===null&&(ge=new tr(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?js:Ei,minFilter:Zn,samples:_e?4:0})),v.getDrawingBufferSize(Ce),_e?ge.setSize(Ce.x,Ce.y):ge.setSize(va(Ce.x),va(Ce.y));const Le=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(J),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Be=v.toneMapping;v.toneMapping=Si,so(T,H,G),Re.updateMultisampleRenderTarget(ge),Re.updateRenderTargetMipmap(ge);let ze=!1;for(let et=0,Xe=U.length;et<Xe;et++){const je=U[et],Dt=je.object,an=je.geometry,Ft=je.material,zn=je.group;if(Ft.side===Ln&&Dt.layers.test(G.layers)){const At=Ft.side;Ft.side=on,Ft.needsUpdate=!0,Qc(Dt,H,G,an,Ft,zn),Ft.side=At,Ft.needsUpdate=!0,ze=!0}}ze===!0&&(Re.updateMultisampleRenderTarget(ge),Re.updateRenderTargetMipmap(ge)),v.setRenderTarget(Le),v.setClearColor(J,D),v.toneMapping=Be}function so(T,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let B=0,_e=T.length;B<_e;B++){const Le=T[B],Be=Le.object,ze=Le.geometry,et=G===null?Le.material:G,Xe=Le.group;Be.layers.test(H.layers)&&Qc(Be,U,H,ze,et,Xe)}}function Qc(T,U,H,G,B,_e){T.onBeforeRender(v,U,H,G,B,_e),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(v,U,H,G,T,_e),B.transparent===!0&&B.side===Ln&&B.forceSinglePass===!1?(B.side=on,B.needsUpdate=!0,v.renderBufferDirect(H,U,G,B,T,_e),B.side=ti,B.needsUpdate=!0,v.renderBufferDirect(H,U,G,B,T,_e),B.side=Ln):v.renderBufferDirect(H,U,G,B,T,_e),T.onAfterRender(v,U,H,G,B,_e)}function oo(T,U,H){U.isScene!==!0&&(U=at);const G=Me.get(T),B=p.state.lights,_e=p.state.shadowsArray,Le=B.state.version,Be=le.getParameters(T,B.state,_e,U,H),ze=le.getProgramCacheKey(Be);let et=G.programs;G.environment=T.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(T.isMeshStandardMaterial?w:nt).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,et===void 0&&(T.addEventListener("dispose",F),et=new Map,G.programs=et);let Xe=et.get(ze);if(Xe!==void 0){if(G.currentProgram===Xe&&G.lightsStateVersion===Le)return tu(T,Be),Xe}else Be.uniforms=le.getUniforms(T),T.onBuild(H,Be,v),T.onBeforeCompile(Be,v),Xe=le.acquireProgram(Be,ze),et.set(ze,Xe),G.uniforms=Be.uniforms;const je=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(je.clippingPlanes=fe.uniform),tu(T,Be),G.needsLights=bg(T),G.lightsStateVersion=Le,G.needsLights&&(je.ambientLightColor.value=B.state.ambient,je.lightProbe.value=B.state.probe,je.directionalLights.value=B.state.directional,je.directionalLightShadows.value=B.state.directionalShadow,je.spotLights.value=B.state.spot,je.spotLightShadows.value=B.state.spotShadow,je.rectAreaLights.value=B.state.rectArea,je.ltc_1.value=B.state.rectAreaLTC1,je.ltc_2.value=B.state.rectAreaLTC2,je.pointLights.value=B.state.point,je.pointLightShadows.value=B.state.pointShadow,je.hemisphereLights.value=B.state.hemi,je.directionalShadowMap.value=B.state.directionalShadowMap,je.directionalShadowMatrix.value=B.state.directionalShadowMatrix,je.spotShadowMap.value=B.state.spotShadowMap,je.spotLightMatrix.value=B.state.spotLightMatrix,je.spotLightMap.value=B.state.spotLightMap,je.pointShadowMap.value=B.state.pointShadowMap,je.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Xe,G.uniformsList=null,Xe}function eu(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Zo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function tu(T,U){const H=Me.get(T);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function yg(T,U,H,G,B){U.isScene!==!0&&(U=at),Re.resetTextureUnits();const _e=U.fog,Le=G.isMeshStandardMaterial?U.environment:null,Be=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Gt,ze=(G.isMeshStandardMaterial?w:nt).get(G.envMap||Le),et=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Xe=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),je=!!H.morphAttributes.position,Dt=!!H.morphAttributes.normal,an=!!H.morphAttributes.color;let Ft=Si;G.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Ft=v.toneMapping);const zn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,At=zn!==void 0?zn.length:0,Ye=Me.get(G),Ia=p.state.lights;if(k===!0&&(oe===!0||T!==N)){const dn=T===N&&G.id===C;fe.setState(G,T,dn)}let Et=!1;G.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Ia.state.version||Ye.outputColorSpace!==Be||B.isBatchedMesh&&Ye.batching===!1||!B.isBatchedMesh&&Ye.batching===!0||B.isInstancedMesh&&Ye.instancing===!1||!B.isInstancedMesh&&Ye.instancing===!0||B.isSkinnedMesh&&Ye.skinning===!1||!B.isSkinnedMesh&&Ye.skinning===!0||B.isInstancedMesh&&Ye.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ye.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ye.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ye.instancingMorph===!1&&B.morphTexture!==null||Ye.envMap!==ze||G.fog===!0&&Ye.fog!==_e||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==fe.numPlanes||Ye.numIntersection!==fe.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==Xe||Ye.morphTargets!==je||Ye.morphNormals!==Dt||Ye.morphColors!==an||Ye.toneMapping!==Ft||z.isWebGL2===!0&&Ye.morphTargetsCount!==At)&&(Et=!0):(Et=!0,Ye.__version=G.version);let Ii=Ye.currentProgram;Et===!0&&(Ii=oo(G,U,B));let nu=!1,as=!1,Na=!1;const Xt=Ii.getUniforms(),Ni=Ye.uniforms;if(Y.useProgram(Ii.program)&&(nu=!0,as=!0,Na=!0),G.id!==C&&(C=G.id,as=!0),nu||N!==T){Xt.setValue(O,"projectionMatrix",T.projectionMatrix),Xt.setValue(O,"viewMatrix",T.matrixWorldInverse);const dn=Xt.map.cameraPosition;dn!==void 0&&dn.setValue(O,ve.setFromMatrixPosition(T.matrixWorld)),z.logarithmicDepthBuffer&&Xt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Xt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),N!==T&&(N=T,as=!0,Na=!0)}if(B.isSkinnedMesh){Xt.setOptional(O,B,"bindMatrix"),Xt.setOptional(O,B,"bindMatrixInverse");const dn=B.skeleton;dn&&(z.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),Xt.setValue(O,"boneTexture",dn.boneTexture,Re)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Xt.setOptional(O,B,"batchingTexture"),Xt.setValue(O,"batchingTexture",B._matricesTexture,Re));const Ua=H.morphAttributes;if((Ua.position!==void 0||Ua.normal!==void 0||Ua.color!==void 0&&z.isWebGL2===!0)&&ue.update(B,H,Ii),(as||Ye.receiveShadow!==B.receiveShadow)&&(Ye.receiveShadow=B.receiveShadow,Xt.setValue(O,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ni.envMap.value=ze,Ni.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),as&&(Xt.setValue(O,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&Mg(Ni,Na),_e&&G.fog===!0&&se.refreshFogUniforms(Ni,_e),se.refreshMaterialUniforms(Ni,G,Z,V,ge),Zo.upload(O,eu(Ye),Ni,Re)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Zo.upload(O,eu(Ye),Ni,Re),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Xt.setValue(O,"center",B.center),Xt.setValue(O,"modelViewMatrix",B.modelViewMatrix),Xt.setValue(O,"normalMatrix",B.normalMatrix),Xt.setValue(O,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const dn=G.uniformsGroups;for(let Oa=0,Sg=dn.length;Oa<Sg;Oa++)if(z.isWebGL2){const iu=dn[Oa];Pe.update(iu,Ii),Pe.bind(iu,Ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ii}function Mg(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function bg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,U,H){Me.get(T.texture).__webglTexture=U,Me.get(T.depthTexture).__webglTexture=H;const G=Me.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const H=Me.get(T);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,H=0){S=T,E=U,A=H;let G=!0,B=null,_e=!1,Le=!1;if(T){const ze=Me.get(T);ze.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(O.FRAMEBUFFER,null),G=!1):ze.__webglFramebuffer===void 0?Re.setupRenderTarget(T):ze.__hasExternalTextures&&Re.rebindTextures(T,Me.get(T.texture).__webglTexture,Me.get(T.depthTexture).__webglTexture);const et=T.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Le=!0);const Xe=Me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[U])?B=Xe[U][H]:B=Xe[U],_e=!0):z.isWebGL2&&T.samples>0&&Re.useMultisampledRTT(T)===!1?B=Me.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?B=Xe[H]:B=Xe,M.copy(T.viewport),R.copy(T.scissor),$=T.scissorTest}else M.copy(Q).multiplyScalar(Z).floor(),R.copy(ie).multiplyScalar(Z).floor(),$=de;if(Y.bindFramebuffer(O.FRAMEBUFFER,B)&&z.drawBuffers&&G&&Y.drawBuffers(T,B),Y.viewport(M),Y.scissor(R),Y.setScissorTest($),_e){const ze=Me.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ze.__webglTexture,H)}else if(Le){const ze=Me.get(T.texture),et=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.__webglTexture,H||0,et)}C=-1},this.readRenderTargetPixels=function(T,U,H,G,B,_e,Le){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Be=Be[Le]),Be){Y.bindFramebuffer(O.FRAMEBUFFER,Be);try{const ze=T.texture,et=ze.format,Xe=ze.type;if(et!==gn&&De.convert(et)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Xe===js&&(te.has("EXT_color_buffer_half_float")||z.isWebGL2&&te.has("EXT_color_buffer_float"));if(Xe!==Ei&&De.convert(Xe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===En&&(z.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&H>=0&&H<=T.height-B&&O.readPixels(U,H,G,B,De.convert(et),De.convert(Xe),_e)}finally{const ze=S!==null?Me.get(S).__webglFramebuffer:null;Y.bindFramebuffer(O.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(T,U,H=0){const G=Math.pow(2,-H),B=Math.floor(U.image.width*G),_e=Math.floor(U.image.height*G);Re.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,T.x,T.y,B,_e),Y.unbindTexture()},this.copyTextureToTexture=function(T,U,H,G=0){const B=U.image.width,_e=U.image.height,Le=De.convert(H.format),Be=De.convert(H.type);Re.setTexture2D(H,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,T.x,T.y,B,_e,Le,Be,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Le,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,G,T.x,T.y,Le,Be,U.image),G===0&&H.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(T,U,H,G,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=Math.round(T.max.x-T.min.x),Le=Math.round(T.max.y-T.min.y),Be=T.max.z-T.min.z+1,ze=De.convert(G.format),et=De.convert(G.type);let Xe;if(G.isData3DTexture)Re.setTexture3D(G,0),Xe=O.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)Re.setTexture2DArray(G,0),Xe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const je=O.getParameter(O.UNPACK_ROW_LENGTH),Dt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),an=O.getParameter(O.UNPACK_SKIP_PIXELS),Ft=O.getParameter(O.UNPACK_SKIP_ROWS),zn=O.getParameter(O.UNPACK_SKIP_IMAGES),At=H.isCompressedTexture?H.mipmaps[B]:H.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,At.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,T.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,T.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,T.min.z),H.isDataTexture||H.isData3DTexture?O.texSubImage3D(Xe,B,U.x,U.y,U.z,_e,Le,Be,ze,et,At.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(Xe,B,U.x,U.y,U.z,_e,Le,Be,ze,At.data):O.texSubImage3D(Xe,B,U.x,U.y,U.z,_e,Le,Be,ze,et,At),O.pixelStorei(O.UNPACK_ROW_LENGTH,je),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Dt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,an),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ft),O.pixelStorei(O.UNPACK_SKIP_IMAGES,zn),B===0&&G.generateMipmaps&&O.generateMipmap(Xe),Y.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Re.setTextureCube(T,0):T.isData3DTexture?Re.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Re.setTexture2DArray(T,0):Re.setTexture2D(T,0),Y.unbindTexture()},this.resetState=function(){E=0,A=0,S=null,Y.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===zc?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===wa?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class eC extends og{}eC.prototype.isWebGL1Renderer=!0;class tC extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nC{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hm("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new I;class jc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ch=new I,uh=new gt,fh=new gt,iC=new I,dh=new Je,Bo=new I,El=new Vn,hh=new Je,Tl=new eo;class rC extends sn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xf,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ri),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bo),this.boundingBox.expandByPoint(Bo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bo),this.boundingSphere.expandByPoint(Bo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),El.copy(this.boundingSphere),El.applyMatrix4(r),e.ray.intersectsSphere(El)!==!1&&(hh.copy(r).invert(),Tl.copy(e.ray).applyMatrix4(hh),!(this.boundingBox!==null&&Tl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Tl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Xf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cE?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;uh.fromBufferAttribute(r.attributes.skinIndex,e),fh.fromBufferAttribute(r.attributes.skinWeight,e),ch.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=fh.getComponent(s);if(o!==0){const a=uh.getComponent(s);dh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(iC.copy(ch).applyMatrix4(dh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ag extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class lg extends zt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Vt,u=Vt,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ph=new Je,sC=new Je;class $c{constructor(e=[],t=[]){this.uuid=wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:sC;ph.multiplyMatrices(a,t[s]),ph.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new $c(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new lg(t,e,e,gn,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new ag),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class hc extends nn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cr=new Je,mh=new Je,Vo=[],gh=new ri,oC=new Je,vs=new sn,xs=new Vn;class aC extends sn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,oC)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cr),gh.copy(e.boundingBox).applyMatrix4(Cr),this.boundingBox.union(gh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cr),xs.copy(e.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(n),e.ray.intersectsSphere(xs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Cr),mh.multiplyMatrices(n,Cr),vs.matrixWorld=mh,vs.raycast(e,Vo);for(let o=0,a=Vo.length;o<a;o++){const l=Vo[o];l.instanceId=s,l.object=this,t.push(l)}Vo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new lg(new Float32Array(r*this.count),r,this.count,Im,En));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class cg extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _h=new I,vh=new I,xh=new Je,Al=new eo,ko=new Vn;class Yc extends wt{constructor(e=new Cn,t=new cg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)_h.fromBufferAttribute(t,r-1),vh.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=_h.distanceTo(vh);e.setAttribute("lineDistance",new xn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(r),ko.radius+=s,e.ray.intersectsSphere(ko)===!1)return;xh.copy(r).invert(),Al.copy(e.ray).applyMatrix4(xh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,f=new I,d=new I,h=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=m,y=x-1;v<y;v+=h){const E=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(p,E),u.fromBufferAttribute(p,A),Al.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let v=m,y=x-1;v<y;v+=h){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Al.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const yh=new I,Mh=new I;class lC extends Yc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)yh.fromBufferAttribute(t,r),Mh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+yh.distanceTo(Mh);e.setAttribute("lineDistance",new xn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cC extends Yc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ug extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bh=new Je,pc=new eo,zo=new Vn,Ho=new I;class uC extends wt{constructor(e=new Cn,t=new ug){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(r),zo.radius+=s,e.ray.intersectsSphere(zo)===!1)return;bh.copy(r).invert(),pc.copy(e.ray).applyMatrix4(bh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const p=c.getX(g);Ho.fromBufferAttribute(f,p),Sh(Ho,p,l,r,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)Ho.fromBufferAttribute(f,g),Sh(Ho,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Sh(i,e,t,n,r,s,o){const a=pc.distanceSqToPoint(i);if(a<t){const l=new I;pc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class qc extends Cn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new I,d=new I,h=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const x=[],v=m/n;let y=0;m===0&&o===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const A=E/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(A+y,1-v),x.push(c++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const v=u[m][x+1],y=u[m][x],E=u[m+1][x],A=u[m+1][x+1];(m!==0||o>0)&&h.push(v,y,A),(m!==n-1||l<Math.PI)&&h.push(y,E,A)}this.setIndex(h),this.setAttribute("position",new xn(g,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pa extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vm,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class si extends Pa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Go(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fC(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function dC(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Eh(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function fg(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class no{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hC extends no{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_d,endingEnd:_d}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case vd:s=e,a=2*t-n;break;case xd:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vd:o=e,l=2*n-t;break;case xd:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(n-t)/(r-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,x=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-h)*p+(1.5+h)*_+.5*g,y=h*p-h*_;for(let E=0;E!==a;++E)s[E]=m*o[u+E]+x*o[c+E]+v*o[l+E]+y*o[f+E];return s}}class pC extends no{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),f=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*u;return s}}class mC extends no{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class kn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Go(t,this.TimeBufferType),this.values=Go(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Go(e.times,Array),values:Go(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case $r:t=this.InterpolantFactoryMethodLinear;break;case Ja:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return $r;case this.InterpolantFactoryMethodSmooth:return Ja}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&fC(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ja,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*n,d=f-n,h=f+n;for(let g=0;g!==n;++g){const _=t[f+g];if(_!==t[d+g]||_!==t[h+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,d=o*n;for(let h=0;h!==n;++h)t[d+h]=t[f+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=$r;class is extends kn{}is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=$s;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;class dg extends kn{}dg.prototype.ValueTypeName="color";class Kr extends kn{}Kr.prototype.ValueTypeName="number";class gC extends no{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Un.slerpFlat(s,0,o,c-a,o,c,l);return s}}class nr extends kn{InterpolantFactoryMethodLinear(e){return new gC(this.times,this.values,this.getValueSize(),e)}}nr.prototype.ValueTypeName="quaternion";nr.prototype.DefaultInterpolation=$r;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class rs extends kn{}rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=$s;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Zr extends kn{}Zr.prototype.ValueTypeName="vector";class _C{constructor(e,t=-1,n,r=_E){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=wn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(xC(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(kn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=dC(l);l=Eh(l,1,u),c=Eh(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Kr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let d=r[f];d||(r[f]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,d,h,g,_){if(h.length!==0){const p=[],m=[];fg(h,p,m,g),p.length!==0&&_.push(new f(d,p,m))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const h={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)h[d[g].morphTargets[_]]=-1;for(const _ in h){const p=[],m=[];for(let x=0;x!==d[g].morphTargets.length;++x){const v=d[g];p.push(v.time),m.push(v.morphTarget===_?1:0)}r.push(new Kr(".morphTargetInfluence["+_+"]",p,m))}l=h.length*o}else{const h=".bones["+t[f].name+"]";n(Zr,h+".position",d,"pos",r),n(nr,h+".quaternion",d,"rot",r),n(Zr,h+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vC(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Kr;case"vector":case"vector2":case"vector3":case"vector4":return Zr;case"color":return dg;case"quaternion":return nr;case"bool":case"boolean":return is;case"string":return rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function xC(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vC(i.type);if(i.times===void 0){const t=[],n=[];fg(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Mi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class yC{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const MC=new yC;class ss{constructor(e){this.manager=e!==void 0?e:MC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ss.DEFAULT_MATERIAL_NAME="__DEFAULT";const qn={};class bC extends Error{constructor(e,t){super(e),this.response=t}}class hg extends ss{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Mi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(qn[e]!==void 0){qn[e].push({onLoad:t,onProgress:n,onError:r});return}qn[e]=[],qn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=qn[e],f=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),h=d?parseInt(d):0,g=h!==0;let _=0;const p=new ReadableStream({start(m){x();function x(){f.read().then(({done:v,value:y})=>{if(v)m.close();else{_+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let A=0,S=u.length;A<S;A++){const C=u[A];C.onProgress&&C.onProgress(E)}m.enqueue(y),x()}})}}});return new Response(p)}else throw new bC(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{Mi.add(e,c);const u=qn[e];delete qn[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=qn[e];if(u===void 0)throw this.manager.itemError(e),c;delete qn[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class SC extends ss{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Mi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ys("img");function l(){u(),Mi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class pg extends ss{constructor(e){super(e)}load(e,t,n,r){const s=new zt,o=new SC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class La extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const wl=new Je,Th=new I,Ah=new I;class Kc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Th.setFromMatrixPosition(e.matrixWorld),t.position.copy(Th),Ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ah),t.updateMatrixWorld(),wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class EC extends Kc{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Yr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class TC extends La{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new EC}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wh=new Je,ys=new I,Rl=new I;class AC extends Kc{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(ys),Rl.copy(n.position),Rl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Rl),n.updateMatrixWorld(),r.makeTranslation(-ys.x,-ys.y,-ys.z),wh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh)}}class mg extends La{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new AC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wC extends Kc{constructor(){super(new Wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class RC extends La{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new wC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CC extends La{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Is{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class PC extends ss{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Mi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Mi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Mi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Mi.add(e,l),s.manager.itemStart(e)}}const Zc="\\[\\]\\.:\\/",LC=new RegExp("["+Zc+"]","g"),Jc="[^"+Zc+"]",DC="[^"+Zc.replace("\\.","")+"]",IC=/((?:WC+[\/:])*)/.source.replace("WC",Jc),NC=/(WCOD+)?/.source.replace("WCOD",DC),UC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jc),OC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jc),FC=new RegExp("^"+IC+NC+UC+OC+"$"),BC=["material","materials","bones","map"];class VC{constructor(e,t,n){const r=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(LC,"")}static parseTrackName(e){const t=FC.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);BC.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=VC;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Rh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);const Ch={type:"change"},Cl={type:"start"},Ph={type:"end"},Wo=new eo,Lh=new gi,kC=Math.cos(70*Ds.DEG2RAD);class zC extends or{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fr.ROTATE,MIDDLE:fr.DOLLY,RIGHT:fr.PAN},this.touches={ONE:dr.ROTATE,TWO:dr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Ue),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ue),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ch),n.update(),s=r.NONE},this.update=function(){const P=new I,ee=new Un().setFromUnitVectors(e.up,new I(0,1,0)),be=ee.clone().invert(),L=new I,ce=new Un,F=new I,ae=2*Math.PI;return function(it=null){const ft=n.object.position;P.copy(ft).sub(n.target),P.applyQuaternion(ee),a.setFromVector3(P),n.autoRotate&&s===r.NONE&&$(M(it)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let mt=n.minAzimuthAngle,Pt=n.maxAzimuthAngle;isFinite(mt)&&isFinite(Pt)&&(mt<-Math.PI?mt+=ae:mt>Math.PI&&(mt-=ae),Pt<-Math.PI?Pt+=ae:Pt>Math.PI&&(Pt-=ae),mt<=Pt?a.theta=Math.max(mt,Math.min(Pt,a.theta)):a.theta=a.theta>(mt+Pt)/2?Math.max(mt,a.theta):Math.min(Pt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ct=!1;if(n.zoomToCursor&&A||n.object.isOrthographicCamera)a.radius=Q(a.radius);else{const Mt=a.radius;a.radius=Q(a.radius*c),ct=Mt!=a.radius}if(P.setFromSpherical(a),P.applyQuaternion(be),ft.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&A){let Mt=null;if(n.object.isPerspectiveCamera){const Wt=P.length();Mt=Q(Wt*c);const Di=Wt-Mt;n.object.position.addScaledVector(y,Di),n.object.updateMatrixWorld(),ct=!!Di}else if(n.object.isOrthographicCamera){const Wt=new I(E.x,E.y,0);Wt.unproject(n.object);const Di=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ct=Di!==n.object.zoom;const ro=new I(E.x,E.y,0);ro.unproject(n.object),n.object.position.sub(ro).add(Wt),n.object.updateMatrixWorld(),Mt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Mt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Mt).add(n.object.position):(Wo.origin.copy(n.object.position),Wo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Wo.direction))<kC?e.lookAt(n.target):(Lh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Wo.intersectPlane(Lh,n.target))))}else if(n.object.isOrthographicCamera){const Mt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Mt!==n.object.zoom&&(n.object.updateProjectionMatrix(),ct=!0)}return c=1,A=!1,ct||L.distanceToSquared(n.object.position)>o||8*(1-ce.dot(n.object.quaternion))>o||F.distanceToSquared(n.target)>o?(n.dispatchEvent(Ch),L.copy(n.object.position),ce.copy(n.object.quaternion),F.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",We),n.domElement.removeEventListener("pointerdown",Re),n.domElement.removeEventListener("pointercancel",w),n.domElement.removeEventListener("wheel",K),n.domElement.removeEventListener("pointermove",nt),n.domElement.removeEventListener("pointerup",w),n.domElement.getRootNode().removeEventListener("keydown",se,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ue),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Rh,l=new Rh;let c=1;const u=new I,f=new Fe,d=new Fe,h=new Fe,g=new Fe,_=new Fe,p=new Fe,m=new Fe,x=new Fe,v=new Fe,y=new I,E=new Fe;let A=!1;const S=[],C={};let N=!1;function M(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function R(P){const ee=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*ee)}function $(P){l.theta-=P}function J(P){l.phi-=P}const D=function(){const P=new I;return function(be,L){P.setFromMatrixColumn(L,0),P.multiplyScalar(-be),u.add(P)}}(),j=function(){const P=new I;return function(be,L){n.screenSpacePanning===!0?P.setFromMatrixColumn(L,1):(P.setFromMatrixColumn(L,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(be),u.add(P)}}(),V=function(){const P=new I;return function(be,L){const ce=n.domElement;if(n.object.isPerspectiveCamera){const F=n.object.position;P.copy(F).sub(n.target);let ae=P.length();ae*=Math.tan(n.object.fov/2*Math.PI/180),D(2*be*ae/ce.clientHeight,n.object.matrix),j(2*L*ae/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(be*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),j(L*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(P,ee){if(!n.zoomToCursor)return;A=!0;const be=n.domElement.getBoundingClientRect(),L=P-be.left,ce=ee-be.top,F=be.width,ae=be.height;E.x=L/F*2-1,E.y=-(ce/ae)*2+1,y.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function Q(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function ie(P){f.set(P.clientX,P.clientY)}function de(P){q(P.clientX,P.clientX),m.set(P.clientX,P.clientY)}function Ne(P){g.set(P.clientX,P.clientY)}function k(P){d.set(P.clientX,P.clientY),h.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ee=n.domElement;$(2*Math.PI*h.x/ee.clientHeight),J(2*Math.PI*h.y/ee.clientHeight),f.copy(d),n.update()}function oe(P){x.set(P.clientX,P.clientY),v.subVectors(x,m),v.y>0?Z(R(v.y)):v.y<0&&W(R(v.y)),m.copy(x),n.update()}function ge(P){_.set(P.clientX,P.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),V(p.x,p.y),g.copy(_),n.update()}function Ve(P){q(P.clientX,P.clientY),P.deltaY<0?W(R(P.deltaY)):P.deltaY>0&&Z(R(P.deltaY)),n.update()}function Ce(P){let ee=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),ee=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),ee=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),ee=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),ee=!0;break}ee&&(P.preventDefault(),n.update())}function ve(P){if(S.length===1)f.set(P.pageX,P.pageY);else{const ee=ye(P),be=.5*(P.pageX+ee.x),L=.5*(P.pageY+ee.y);f.set(be,L)}}function at(P){if(S.length===1)g.set(P.pageX,P.pageY);else{const ee=ye(P),be=.5*(P.pageX+ee.x),L=.5*(P.pageY+ee.y);g.set(be,L)}}function Oe(P){const ee=ye(P),be=P.pageX-ee.x,L=P.pageY-ee.y,ce=Math.sqrt(be*be+L*L);m.set(0,ce)}function O(P){n.enableZoom&&Oe(P),n.enablePan&&at(P)}function Tt(P){n.enableZoom&&Oe(P),n.enableRotate&&ve(P)}function te(P){if(S.length==1)d.set(P.pageX,P.pageY);else{const be=ye(P),L=.5*(P.pageX+be.x),ce=.5*(P.pageY+be.y);d.set(L,ce)}h.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ee=n.domElement;$(2*Math.PI*h.x/ee.clientHeight),J(2*Math.PI*h.y/ee.clientHeight),f.copy(d)}function z(P){if(S.length===1)_.set(P.pageX,P.pageY);else{const ee=ye(P),be=.5*(P.pageX+ee.x),L=.5*(P.pageY+ee.y);_.set(be,L)}p.subVectors(_,g).multiplyScalar(n.panSpeed),V(p.x,p.y),g.copy(_)}function Y(P){const ee=ye(P),be=P.pageX-ee.x,L=P.pageY-ee.y,ce=Math.sqrt(be*be+L*L);x.set(0,ce),v.set(0,Math.pow(x.y/m.y,n.zoomSpeed)),Z(v.y),m.copy(x);const F=(P.pageX+ee.x)*.5,ae=(P.pageY+ee.y)*.5;q(F,ae)}function xe(P){n.enableZoom&&Y(P),n.enablePan&&z(P)}function Me(P){n.enableZoom&&Y(P),n.enableRotate&&te(P)}function Re(P){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",nt),n.domElement.addEventListener("pointerup",w)),!Qe(P)&&(ue(P),P.pointerType==="touch"?fe(P):b(P)))}function nt(P){n.enabled!==!1&&(P.pointerType==="touch"?pe(P):X(P))}function w(P){switch(Ct(P),S.length){case 0:n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",nt),n.domElement.removeEventListener("pointerup",w),n.dispatchEvent(Ph),s=r.NONE;break;case 1:const ee=S[0],be=C[ee];fe({pointerId:ee,pageX:be.x,pageY:be.y});break}}function b(P){let ee;switch(P.button){case 0:ee=n.mouseButtons.LEFT;break;case 1:ee=n.mouseButtons.MIDDLE;break;case 2:ee=n.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case fr.DOLLY:if(n.enableZoom===!1)return;de(P),s=r.DOLLY;break;case fr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;Ne(P),s=r.PAN}else{if(n.enableRotate===!1)return;ie(P),s=r.ROTATE}break;case fr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;ie(P),s=r.ROTATE}else{if(n.enablePan===!1)return;Ne(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Cl)}function X(P){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;k(P);break;case r.DOLLY:if(n.enableZoom===!1)return;oe(P);break;case r.PAN:if(n.enablePan===!1)return;ge(P);break}}function K(P){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(P.preventDefault(),n.dispatchEvent(Cl),Ve(le(P)),n.dispatchEvent(Ph))}function le(P){const ee=P.deltaMode,be={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(ee){case 1:be.deltaY*=16;break;case 2:be.deltaY*=100;break}return P.ctrlKey&&!N&&(be.deltaY*=10),be}function se(P){P.key==="Control"&&(N=!0,n.domElement.getRootNode().addEventListener("keyup",Ge,{passive:!0,capture:!0}))}function Ge(P){P.key==="Control"&&(N=!1,n.domElement.getRootNode().removeEventListener("keyup",Ge,{passive:!0,capture:!0}))}function Ue(P){n.enabled===!1||n.enablePan===!1||Ce(P)}function fe(P){switch(De(P),S.length){case 1:switch(n.touches.ONE){case dr.ROTATE:if(n.enableRotate===!1)return;ve(P),s=r.TOUCH_ROTATE;break;case dr.PAN:if(n.enablePan===!1)return;at(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case dr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(P),s=r.TOUCH_DOLLY_PAN;break;case dr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Tt(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Cl)}function pe(P){switch(De(P),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;te(P),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;z(P),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xe(P),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Me(P),n.update();break;default:s=r.NONE}}function We(P){n.enabled!==!1&&P.preventDefault()}function ue(P){S.push(P.pointerId)}function Ct(P){delete C[P.pointerId];for(let ee=0;ee<S.length;ee++)if(S[ee]==P.pointerId){S.splice(ee,1);return}}function Qe(P){for(let ee=0;ee<S.length;ee++)if(S[ee]==P.pointerId)return!0;return!1}function De(P){let ee=C[P.pointerId];ee===void 0&&(ee=new Fe,C[P.pointerId]=ee),ee.set(P.pageX,P.pageY)}function ye(P){const ee=P.pointerId===S[0]?S[1]:S[0];return C[ee]}n.domElement.addEventListener("contextmenu",We),n.domElement.addEventListener("pointerdown",Re),n.domElement.addEventListener("pointercancel",w),n.domElement.addEventListener("wheel",K,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",se,{passive:!0,capture:!0}),this.update()}}function Dh(i,e){if(e===vE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===lc||e===Bm){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===lc)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class HC extends ss{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $C(t)}),this.register(function(t){return new nP(t)}),this.register(function(t){return new iP(t)}),this.register(function(t){return new rP(t)}),this.register(function(t){return new qC(t)}),this.register(function(t){return new KC(t)}),this.register(function(t){return new ZC(t)}),this.register(function(t){return new JC(t)}),this.register(function(t){return new jC(t)}),this.register(function(t){return new QC(t)}),this.register(function(t){return new YC(t)}),this.register(function(t){return new tP(t)}),this.register(function(t){return new eP(t)}),this.register(function(t){return new WC(t)}),this.register(function(t){return new sP(t)}),this.register(function(t){return new oP(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Is.extractUrlBase(e);o=Is.resolveURL(c,this.path)}else o=Is.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new hg(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===gg){try{o[lt.KHR_BINARY_GLTF]=new aP(e)}catch(f){r&&r(f);return}s=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new yP(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(f){case lt.KHR_MATERIALS_UNLIT:o[f]=new XC;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[f]=new lP(s,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[f]=new cP;break;case lt.KHR_MESH_QUANTIZATION:o[f]=new uP;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function GC(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class WC{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new He(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Gt);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new RC(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new mg(u),c.distance=f;break;case"spot":c=new TC(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,_i(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class XC{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return qi}extendParams(e,t,n){const r=[];e.color=new He(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Gt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,en))}return Promise.all(r)}}class jC{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class $C{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(a,a)}return Promise.all(s)}}class YC{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class qC{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Gt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,en)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class KC{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class ZC{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(a[0],a[1],a[2],Gt),Promise.all(s)}}class JC{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class QC{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(a[0],a[1],a[2],Gt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,en)),Promise.all(s)}}class eP{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class tP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class nP{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class iP{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rP{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class sP{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,r.mode,r.filter).then(function(h){return h.buffer}):o.ready.then(function(){const h=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(h),u,f,d,r.mode,r.filter),h})})}else return null}}class oP{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==pn.TRIANGLES&&c.mode!==pn.TRIANGLE_STRIP&&c.mode!==pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],d=c[0].count,h=[];for(const g of f){const _=new Je,p=new I,m=new Un,x=new I(1,1,1),v=new aC(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,_.compose(p,m,x));for(const y in l)if(y==="_COLOR_0"){const E=l[y];v.instanceColor=new hc(E.array,E.itemSize,E.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);wt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),h.push(v)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const gg="glTF",Ms=12,Ih={JSON:1313821514,BIN:5130562};class aP{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ms),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ms,s=new DataView(e,Ms);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Ih.JSON){const c=new Uint8Array(e,Ms+o,a);this.content=n.decode(c)}else if(l===Ih.BIN){const c=Ms+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lP{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=mc[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=mc[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],h=zr[d.componentType];c[f]=h.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,d){r.decodeDracoFile(u,function(h){for(const g in h.attributes){const _=h.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}f(h)},a,c,Gt,d)})})}}class cP{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class uP{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class _g extends no{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(n-t)/u,d=f*f,h=d*f,g=e*c,_=g-c,p=-2*h+3*d,m=h-d,x=1-p,v=m-d+f;for(let y=0;y!==a;y++){const E=o[_+y+a],A=o[_+y+l]*u,S=o[g+y+a],C=o[g+y]*u;s[y]=x*E+v*A+p*S+m*C}return s}}const fP=new Un;class dP extends _g{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return fP.fromArray(s).normalize().toArray(s),s}}const pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nh={9728:Vt,9729:Yt,9984:ac,9985:Ko,9986:Lr,9987:Zn},Uh={33071:mn,33648:ha,10497:Xr},Pl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hP={CUBICSPLINE:void 0,LINEAR:$r,STEP:$s},Ll={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pP(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Pa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),i.DefaultMaterial}function Hi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _i(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mP(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(d)}if(r){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(d)}if(s){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],d=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function gP(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _P(i){let e;const t=i.extensions&&i.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Dl(t.attributes):e=i.indices+":"+Dl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Dl(i.targets[n]);return e}function Dl(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function gc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vP(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const xP=new Je;class yP{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new GC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new pg(this.options.manager):this.textureLoader=new PC(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Hi(s,a,r),_i(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Is.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Pl[r.type],a=zr[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new nn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Pl[r.type],c=zr[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,d=r.byteOffset||0,h=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,p;if(h&&h!==f){const m=Math.floor(d/h),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let v=t.cache.get(x);v||(_=new c(a,m*h,r.count*h/u),v=new nC(_,h/u),t.cache.add(x,v)),p=new jc(v,l,d%h/u,g)}else a===null?_=new c(r.count*l):_=new c(a,d,r.count*l),p=new nn(_,l,g);if(r.sparse!==void 0){const m=Pl.SCALAR,x=zr[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,E=new x(o[1],v,r.sparse.count*m),A=new c(o[2],y,r.sparse.count*l);a!==null&&(p=new nn(p.array.slice(),p.itemSize,p.normalized));for(let S=0,C=E.length;S<C;S++){const N=E[S];if(p.setX(N,A[S*l]),l>=2&&p.setY(N,A[S*l+1]),l>=3&&p.setZ(N,A[S*l+2]),l>=4&&p.setW(N,A[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Nh[d.magFilter]||Yt,u.minFilter=Nh[d.minFilter]||Zn,u.wrapS=Uh[d.wrapS]||Xr,u.wrapT=Uh[d.wrapT]||Xr,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(d,h){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new zt(_);p.needsUpdate=!0,d(p)}),t.load(Is.resolveURL(f,s.path),g,void 0,h)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||vP(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[lt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ug,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new cg,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Pa}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[lt.KHR_MATERIALS_UNLIT]){const f=r[lt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new He(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Gt),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,en)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ln);const u=s.alphaMode||Ll.OPAQUE;if(u===Ll.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ll.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==qi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Fe(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==qi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==qi){const f=s.emissiveFactor;a.emissive=new He().setRGB(f[0],f[1],f[2],Gt)}return s.emissiveTexture!==void 0&&o!==qi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,en)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),_i(f,s),t.associations.set(f,{materials:e}),s.extensions&&Hi(r,f,s),f})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Oh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=_P(c),f=r[u];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Oh(new Cn,c,t),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?pP(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let h=0,g=u.length;h<g;h++){const _=u[h],p=o[h];let m;const x=c[h];if(p.mode===pn.TRIANGLES||p.mode===pn.TRIANGLE_STRIP||p.mode===pn.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new rC(_,x):new sn(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===pn.TRIANGLE_STRIP?m.geometry=Dh(m.geometry,Bm):p.mode===pn.TRIANGLE_FAN&&(m.geometry=Dh(m.geometry,lc));else if(p.mode===pn.LINES)m=new lC(_,x);else if(p.mode===pn.LINE_STRIP)m=new Yc(_,x);else if(p.mode===pn.LINE_LOOP)m=new cC(_,x);else if(p.mode===pn.POINTS)m=new uC(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&gP(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),_i(m,s),p.extensions&&Hi(r,m,p),t.assignFinalMaterial(m),f.push(m)}for(let h=0,g=f.length;h<g;h++)t.associations.set(f[h],{meshes:e,primitives:h});if(f.length===1)return s.extensions&&Hi(r,f[0],s),f[0];const d=new Ki;s.extensions&&Hi(r,d,s),t.associations.set(d,{meshes:e});for(let h=0,g=f.length;h<g;h++)d.add(f[h]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(Ds.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Wc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_i(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const d=new Je;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new $c(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,d=r.channels.length;f<d;f++){const h=r.channels[f],g=r.samplers[h.sampler],_=h.target,p=_.node,m=r.parameters!==void 0?r.parameters[g.input]:g.input,x=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const d=f[0],h=f[1],g=f[2],_=f[3],p=f[4],m=[];for(let x=0,v=d.length;x<v;x++){const y=d[x],E=h[x],A=g[x],S=_[x],C=p[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const N=n._createAnimationTracks(y,E,A,S,C);if(N)for(let M=0;M<N.length;M++)m.push(N[M])}return new _C(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],d=c[2];d!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(d,xP)});for(let h=0,g=f.length;h<g;h++)u.add(f[h]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new ag:c.length>1?u=new Ki:c.length===1?u=c[0]:u=new wt,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),_i(u,s),s.extensions&&Hi(n,u,s),s.matrix!==void 0){const f=new Je;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Ki;n.name&&(s.name=r.createUniqueName(n.name)),_i(s,n),n.extensions&&Hi(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[d,h]of r.associations)(d instanceof Nn||d instanceof zt)&&f.set(d,h);return u.traverse(d=>{const h=r.associations.get(d);h!=null&&f.set(d,h)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];pi[s.path]===pi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(pi[s.path]){case pi.weights:c=Kr;break;case pi.rotation:c=nr;break;case pi.position:case pi.scale:c=Zr;break;default:switch(n.itemSize){case 1:c=Kr;break;case 2:case 3:default:c=Zr;break}break}const u=r.interpolation!==void 0?hP[r.interpolation]:$r,f=this._getArrayFromAccessor(n);for(let d=0,h=l.length;d<h;d++){const g=new c(l[d]+"."+pi[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=gc(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof nr?dP:_g;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function MP(i,e,t){const n=e.attributes,r=new ri;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=gc(zr[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],h=d.min,g=d.max;if(h!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),d.normalized){const _=gc(zr[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Vn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Oh(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=mc[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return ut.workingColorSpace!==Gt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),_i(i,e),MP(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?mP(i,e.targets,t):i})}new AS({target:document.getElementById("app")});const bP=new HC,SP=new pg;SP.crossOrigin="Anonymous";const os=new tC;os.background=new He(132631);const io=new tn(75,window.innerWidth/window.innerHeight,.1,1e3);io.position.setZ(20);io.position.setX(20);io.position.setY(10);const Da=new og({canvas:document.querySelector("#bg")});Da.setPixelRatio(window.devicePixelRatio);Da.setSize(window.innerWidth,window.innerHeight);const EP=new CC(16777215);os.add(EP);const vg=new mg(16777215,3e3,2e3);vg.position.set(20,20,20);os.add(vg);const TP=new zC(io,Da.domElement);let Jo;bP.load(wS,function(i){Jo=i.scene,os.add(Jo),Jo.scale.set(3,3,3)},void 0,function(i){console.error(i)});function AP(){const i=new qc(.2,24,24),e=new Pa({color:16777215}),t=new sn(i,e),n=Ds.randFloatSpread(200),r=Ds.randFloatSpread(200),s=Ds.randFloatSpread(200);t.position.set(n,r,s),os.add(t)}Array(200).fill().forEach(AP);function wP(){const i=document.body.getBoundingClientRect().top;Jo.rotation.y=i*-5e-4}document.body.onscroll=wP;function xg(){requestAnimationFrame(xg),RP()}function RP(){TP.update(),Da.render(os,io)}xg();
