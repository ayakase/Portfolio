var Rg=Object.defineProperty;var Cg=(i,e,t)=>e in i?Rg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Va=(i,e,t)=>(Cg(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Nt(){}function Qn(i,e){for(const t in e)i[t]=e[t];return i}function kh(i){return i()}function au(){return Object.create(null)}function ii(i){i.forEach(kh)}function Ma(i){return typeof i=="function"}function et(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}let co;function ea(i,e){return i===e?!0:(co||(co=document.createElement("a")),co.href=e,i===co.href)}function Pg(i){return Object.keys(i).length===0}function Mc(i,...e){if(i==null){for(const n of e)n(void 0);return Nt}const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function _n(i){let e;return Mc(i,t=>e=t)(),e}function Kt(i,e,t){i.$$.on_destroy.push(Mc(e,t))}function _t(i,e,t,n){if(i){const r=zh(i,e,t,n);return i[0](r)}}function zh(i,e,t,n){return i[1]&&n?Qn(t.ctx.slice(),i[1](n(e))):t.ctx}function vt(i,e,t,n){if(i[2]&&n){const r=i[2](n(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function xt(i,e,t,n,r,s){if(r){const o=zh(e,t,n,s);i.p(o,r)}}function yt(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Fs(i){const e={};for(const t in i)t[0]!=="$"&&(e[t]=i[t]);return e}function lu(i,e){const t={};e=new Set(e);for(const n in i)!e.has(n)&&n[0]!=="$"&&(t[n]=i[n]);return t}function es(i){return i&&Ma(i.destroy)?i.destroy:Nt}function Xe(i,e){i.appendChild(e)}function be(i,e,t){i.insertBefore(e,t||null)}function Me(i){i.parentNode&&i.parentNode.removeChild(i)}function Hh(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function He(i){return document.createElement(i)}function Rt(i){return document.createTextNode(i)}function ut(){return Rt(" ")}function Ai(){return Rt("")}function As(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function Ce(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}const Lg=["width","height"];function ta(i,e){const t=Object.getOwnPropertyDescriptors(i.__proto__);for(const n in e)e[n]==null?i.removeAttribute(n):n==="style"?i.style.cssText=e[n]:n==="__value"?i.value=i[n]=e[n]:t[n]&&t[n].set&&Lg.indexOf(n)===-1?i[n]=e[n]:Ce(i,n,e[n])}function Dg(i){return Array.from(i.childNodes)}function Wr(i,e){e=""+e,i.data!==e&&(i.data=e)}function cu(i,e,t,n){t==null?i.style.removeProperty(e):i.style.setProperty(e,t,n?"important":"")}function na(i,e){return new i(e)}let Bs;function ws(i){Bs=i}function ts(){if(!Bs)throw new Error("Function called outside component initialization");return Bs}function Ig(i){ts().$$.before_update.push(i)}function Zs(i){ts().$$.on_mount.push(i)}function bc(i){ts().$$.after_update.push(i)}function rr(i){ts().$$.on_destroy.push(i)}function Fl(i,e){return ts().$$.context.set(i,e),e}function zt(i){return ts().$$.context.get(i)}const Lr=[],Vs=[];let Or=[];const Bl=[],Gh=Promise.resolve();let Vl=!1;function Wh(){Vl||(Vl=!0,Gh.then(jh))}function Xh(){return Wh(),Gh}function kl(i){Or.push(i)}function Ng(i){Bl.push(i)}const ka=new Set;let lr=0;function jh(){if(lr!==0)return;const i=Bs;do{try{for(;lr<Lr.length;){const e=Lr[lr];lr++,ws(e),Ug(e.$$)}}catch(e){throw Lr.length=0,lr=0,e}for(ws(null),Lr.length=0,lr=0;Vs.length;)Vs.pop()();for(let e=0;e<Or.length;e+=1){const t=Or[e];ka.has(t)||(ka.add(t),t())}Or.length=0}while(Lr.length);for(;Bl.length;)Bl.pop()();Vl=!1,ka.clear(),ws(i)}function Ug(i){if(i.fragment!==null){i.update(),ii(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(kl)}}function Og(i){const e=[],t=[];Or.forEach(n=>i.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Or=e}const $o=new Set;let $i;function Fn(){$i={r:0,c:[],p:$i}}function Bn(){$i.r||ii($i.c),$i=$i.p}function ne(i,e){i&&i.i&&($o.delete(i),i.i(e))}function re(i,e,t,n){if(i&&i.o){if($o.has(i))return;$o.add(i),$i.c.push(()=>{$o.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function ei(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function $h(i,e){re(i,1,1,()=>{e.delete(i.key)})}function Yh(i,e,t,n,r,s,o,a,l,c,u,f){let d=i.length,h=s.length,g=d;const _={};for(;g--;)_[i[g].key]=g;const p=[],m=new Map,x=new Map,v=[];for(g=h;g--;){const S=f(r,s,g),w=t(S);let N=o.get(w);N?n&&v.push(()=>N.p(S,e)):(N=c(w,S),N.c()),m.set(w,p[g]=N),w in _&&x.set(w,Math.abs(g-_[w]))}const M=new Set,A=new Set;function E(S){ne(S,1),S.m(a,u),o.set(S.key,S),u=S.first,h--}for(;d&&h;){const S=p[h-1],w=i[d-1],N=S.key,y=w.key;S===w?(u=S.first,d--,h--):m.has(y)?!o.has(N)||M.has(N)?E(S):A.has(y)?d--:x.get(N)>x.get(y)?(A.add(N),E(S)):(M.add(y),d--):(l(w,o),d--)}for(;d--;){const S=i[d];m.has(S.key)||l(S,o)}for(;h;)E(p[h-1]);return ii(v),p}function qh(i,e){const t={},n={},r={$$scope:1};let s=i.length;for(;s--;){const o=i[s],a=e[s];if(a){for(const l in o)l in a||(n[l]=1);for(const l in a)r[l]||(t[l]=a[l],r[l]=1);i[s]=a}else for(const l in o)r[l]=1}for(const o in n)o in t||(t[o]=void 0);return t}function Fg(i,e,t){const n=i.$$.props[e];n!==void 0&&(i.$$.bound[n]=t,t(i.$$.ctx[n]))}function we(i){i&&i.c()}function Te(i,e,t){const{fragment:n,after_update:r}=i.$$;n&&n.m(e,t),kl(()=>{const s=i.$$.on_mount.map(kh).filter(Ma);i.$$.on_destroy?i.$$.on_destroy.push(...s):ii(s),i.$$.on_mount=[]}),r.forEach(kl)}function Ae(i,e){const t=i.$$;t.fragment!==null&&(Og(t.after_update),ii(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Bg(i,e){i.$$.dirty[0]===-1&&(Lr.push(i),Wh(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function it(i,e,t,n,r,s,o=null,a=[-1]){const l=Bs;ws(i);const c=i.$$={fragment:null,ctx:[],props:s,update:Nt,not_equal:r,bound:au(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:au(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(i,e.props||{},(f,d,...h)=>{const g=h.length?h[0]:d;return c.ctx&&r(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&Bg(i,f)),d}):[],c.update(),u=!0,ii(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=Dg(e.target);c.fragment&&c.fragment.l(f),f.forEach(Me)}else c.fragment&&c.fragment.c();e.intro&&ne(i.$$.fragment),Te(i,e.target,e.anchor),jh()}ws(l)}class rt{constructor(){Va(this,"$$");Va(this,"$$set")}$destroy(){Ae(this,1),this.$destroy=Nt}$on(e,t){if(!Ma(t))return Nt;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!Pg(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Vg="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Vg);function Kh(i){var e,t,n="";if(typeof i=="string"||typeof i=="number")n+=i;else if(typeof i=="object")if(Array.isArray(i)){var r=i.length;for(e=0;e<r;e++)i[e]&&(t=Kh(i[e]))&&(n&&(n+=" "),n+=t)}else for(t in i)i[t]&&(n&&(n+=" "),n+=t);return n}function kg(){for(var i,e,t=0,n="",r=arguments.length;t<r;t++)(i=arguments[t])&&(e=Kh(i))&&(n&&(n+=" "),n+=e);return n}const Sc="-";function zg(i){const e=Gg(i),{conflictingClassGroups:t,conflictingClassGroupModifiers:n}=i;function r(o){const a=o.split(Sc);return a[0]===""&&a.length!==1&&a.shift(),Zh(a,e)||Hg(o)}function s(o,a){const l=t[o]||[];return a&&n[o]?[...l,...n[o]]:l}return{getClassGroupId:r,getConflictingClassGroupIds:s}}function Zh(i,e){var o;if(i.length===0)return e.classGroupId;const t=i[0],n=e.nextPart.get(t),r=n?Zh(i.slice(1),n):void 0;if(r)return r;if(e.validators.length===0)return;const s=i.join(Sc);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId}const uu=/^\[(.+)\]$/;function Hg(i){if(uu.test(i)){const e=uu.exec(i)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function Gg(i){const{theme:e,prefix:t}=i,n={nextPart:new Map,validators:[]};return Xg(Object.entries(i.classGroups),t).forEach(([s,o])=>{zl(o,n,s,e)}),n}function zl(i,e,t,n){i.forEach(r=>{if(typeof r=="string"){const s=r===""?e:fu(e,r);s.classGroupId=t;return}if(typeof r=="function"){if(Wg(r)){zl(r(n),e,t,n);return}e.validators.push({validator:r,classGroupId:t});return}Object.entries(r).forEach(([s,o])=>{zl(o,fu(e,s),t,n)})})}function fu(i,e){let t=i;return e.split(Sc).forEach(n=>{t.nextPart.has(n)||t.nextPart.set(n,{nextPart:new Map,validators:[]}),t=t.nextPart.get(n)}),t}function Wg(i){return i.isThemeGetter}function Xg(i,e){return e?i.map(([t,n])=>{const r=n.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[t,r]}):i}function jg(i){if(i<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,n=new Map;function r(s,o){t.set(s,o),e++,e>i&&(e=0,n=t,t=new Map)}return{get(s){let o=t.get(s);if(o!==void 0)return o;if((o=n.get(s))!==void 0)return r(s,o),o},set(s,o){t.has(s)?t.set(s,o):r(s,o)}}}const Jh="!";function $g(i){const e=i.separator,t=e.length===1,n=e[0],r=e.length;return function(o){const a=[];let l=0,c=0,u;for(let _=0;_<o.length;_++){let p=o[_];if(l===0){if(p===n&&(t||o.slice(_,_+r)===e)){a.push(o.slice(c,_)),c=_+r;continue}if(p==="/"){u=_;continue}}p==="["?l++:p==="]"&&l--}const f=a.length===0?o:o.substring(c),d=f.startsWith(Jh),h=d?f.substring(1):f,g=u&&u>c?u-c:void 0;return{modifiers:a,hasImportantModifier:d,baseClassName:h,maybePostfixModifierPosition:g}}}function Yg(i){if(i.length<=1)return i;const e=[];let t=[];return i.forEach(n=>{n[0]==="["?(e.push(...t.sort(),n),t=[]):t.push(n)}),e.push(...t.sort()),e}function qg(i){return{cache:jg(i.cacheSize),splitModifiers:$g(i),...zg(i)}}const Kg=/\s+/;function Zg(i,e){const{splitModifiers:t,getClassGroupId:n,getConflictingClassGroupIds:r}=e,s=new Set;return i.trim().split(Kg).map(o=>{const{modifiers:a,hasImportantModifier:l,baseClassName:c,maybePostfixModifierPosition:u}=t(o);let f=n(u?c.substring(0,u):c),d=!!u;if(!f){if(!u)return{isTailwindClass:!1,originalClassName:o};if(f=n(c),!f)return{isTailwindClass:!1,originalClassName:o};d=!1}const h=Yg(a).join(":");return{isTailwindClass:!0,modifierId:l?h+Jh:h,classGroupId:f,originalClassName:o,hasPostfixModifier:d}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:a,classGroupId:l,hasPostfixModifier:c}=o,u=a+l;return s.has(u)?!1:(s.add(u),r(l,c).forEach(f=>s.add(a+f)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function Jg(){let i=0,e,t,n="";for(;i<arguments.length;)(e=arguments[i++])&&(t=Qh(e))&&(n&&(n+=" "),n+=t);return n}function Qh(i){if(typeof i=="string")return i;let e,t="";for(let n=0;n<i.length;n++)i[n]&&(e=Qh(i[n]))&&(t&&(t+=" "),t+=e);return t}function Qg(i,...e){let t,n,r,s=o;function o(l){const c=e.reduce((u,f)=>f(u),i());return t=qg(c),n=t.cache.get,r=t.cache.set,s=a,a(l)}function a(l){const c=n(l);if(c)return c;const u=Zg(l,t);return r(l,u),u}return function(){return s(Jg.apply(null,arguments))}}function bt(i){const e=t=>t[i]||[];return e.isThemeGetter=!0,e}const ep=/^\[(?:([a-z-]+):)?(.+)\]$/i,e_=/^\d+\/\d+$/,t_=new Set(["px","full","screen"]),n_=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,i_=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,r_=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,s_=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,o_=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function Hn(i){return Yi(i)||t_.has(i)||e_.test(i)}function ai(i){return ns(i,"length",p_)}function Yi(i){return!!i&&!Number.isNaN(Number(i))}function uo(i){return ns(i,"number",Yi)}function fs(i){return!!i&&Number.isInteger(Number(i))}function a_(i){return i.endsWith("%")&&Yi(i.slice(0,-1))}function qe(i){return ep.test(i)}function li(i){return n_.test(i)}const l_=new Set(["length","size","percentage"]);function c_(i){return ns(i,l_,tp)}function u_(i){return ns(i,"position",tp)}const f_=new Set(["image","url"]);function d_(i){return ns(i,f_,g_)}function h_(i){return ns(i,"",m_)}function ds(){return!0}function ns(i,e,t){const n=ep.exec(i);return n?n[1]?typeof e=="string"?n[1]===e:e.has(n[1]):t(n[2]):!1}function p_(i){return i_.test(i)&&!r_.test(i)}function tp(){return!1}function m_(i){return s_.test(i)}function g_(i){return o_.test(i)}function __(){const i=bt("colors"),e=bt("spacing"),t=bt("blur"),n=bt("brightness"),r=bt("borderColor"),s=bt("borderRadius"),o=bt("borderSpacing"),a=bt("borderWidth"),l=bt("contrast"),c=bt("grayscale"),u=bt("hueRotate"),f=bt("invert"),d=bt("gap"),h=bt("gradientColorStops"),g=bt("gradientColorStopPositions"),_=bt("inset"),p=bt("margin"),m=bt("opacity"),x=bt("padding"),v=bt("saturate"),M=bt("scale"),A=bt("sepia"),E=bt("skew"),S=bt("space"),w=bt("translate"),N=()=>["auto","contain","none"],y=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto",qe,e],$=()=>[qe,e],J=()=>["",Hn,ai],D=()=>["auto",Yi,qe],j=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],Z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],W=()=>["start","end","center","between","around","evenly","stretch"],q=()=>["","0",qe],Q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ie=()=>[Yi,uo],de=()=>[Yi,qe];return{cacheSize:500,separator:":",theme:{colors:[ds],spacing:[Hn,ai],blur:["none","",li,qe],brightness:ie(),borderColor:[i],borderRadius:["none","","full",li,qe],borderSpacing:$(),borderWidth:J(),contrast:ie(),grayscale:q(),hueRotate:de(),invert:q(),gap:$(),gradientColorStops:[i],gradientColorStopPositions:[a_,ai],inset:C(),margin:C(),opacity:ie(),padding:$(),saturate:ie(),scale:ie(),sepia:q(),skew:de(),space:$(),translate:$()},classGroups:{aspect:[{aspect:["auto","square","video",qe]}],container:["container"],columns:[{columns:[li]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...j(),qe]}],overflow:[{overflow:y()}],"overflow-x":[{"overflow-x":y()}],"overflow-y":[{"overflow-y":y()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[_]}],"inset-x":[{"inset-x":[_]}],"inset-y":[{"inset-y":[_]}],start:[{start:[_]}],end:[{end:[_]}],top:[{top:[_]}],right:[{right:[_]}],bottom:[{bottom:[_]}],left:[{left:[_]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",fs,qe]}],basis:[{basis:C()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",qe]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",fs,qe]}],"grid-cols":[{"grid-cols":[ds]}],"col-start-end":[{col:["auto",{span:["full",fs,qe]},qe]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[ds]}],"row-start-end":[{row:["auto",{span:[fs,qe]},qe]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",qe]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",qe]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...W()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...W(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...W(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[S]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[S]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",qe,e]}],"min-w":[{"min-w":[qe,e,"min","max","fit"]}],"max-w":[{"max-w":[qe,e,"none","full","min","max","fit","prose",{screen:[li]},li]}],h:[{h:[qe,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[qe,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[qe,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[qe,e,"auto","min","max","fit"]}],"font-size":[{text:["base",li,ai]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",uo]}],"font-family":[{font:[ds]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",qe]}],"line-clamp":[{"line-clamp":["none",Yi,uo]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Hn,qe]}],"list-image":[{"list-image":["none",qe]}],"list-style-type":[{list:["none","disc","decimal",qe]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[i]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[i]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Hn,ai]}],"underline-offset":[{"underline-offset":["auto",Hn,qe]}],"text-decoration-color":[{decoration:[i]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:$()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",qe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",qe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...j(),u_]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",c_]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},d_]}],"bg-color":[{bg:[i]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:V()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[Hn,qe]}],"outline-w":[{outline:[Hn,ai]}],"outline-color":[{outline:[i]}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[i]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[Hn,ai]}],"ring-offset-color":[{"ring-offset":[i]}],shadow:[{shadow:["","inner","none",li,h_]}],"shadow-color":[{shadow:[ds]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":Z()}],"bg-blend":[{"bg-blend":Z()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",li,qe]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[f]}],saturate:[{saturate:[v]}],sepia:[{sepia:[A]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",qe]}],duration:[{duration:de()}],ease:[{ease:["linear","in","out","in-out",qe]}],delay:[{delay:de()}],animate:[{animate:["none","spin","ping","pulse","bounce",qe]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[M]}],"scale-x":[{"scale-x":[M]}],"scale-y":[{"scale-y":[M]}],rotate:[{rotate:[fs,qe]}],"translate-x":[{"translate-x":[w]}],"translate-y":[{"translate-y":[w]}],"skew-x":[{"skew-x":[E]}],"skew-y":[{"skew-y":[E]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",qe]}],accent:[{accent:["auto",i]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",qe]}],"caret-color":[{caret:[i]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":$()}],"scroll-mx":[{"scroll-mx":$()}],"scroll-my":[{"scroll-my":$()}],"scroll-ms":[{"scroll-ms":$()}],"scroll-me":[{"scroll-me":$()}],"scroll-mt":[{"scroll-mt":$()}],"scroll-mr":[{"scroll-mr":$()}],"scroll-mb":[{"scroll-mb":$()}],"scroll-ml":[{"scroll-ml":$()}],"scroll-p":[{"scroll-p":$()}],"scroll-px":[{"scroll-px":$()}],"scroll-py":[{"scroll-py":$()}],"scroll-ps":[{"scroll-ps":$()}],"scroll-pe":[{"scroll-pe":$()}],"scroll-pt":[{"scroll-pt":$()}],"scroll-pr":[{"scroll-pr":$()}],"scroll-pb":[{"scroll-pb":$()}],"scroll-pl":[{"scroll-pl":$()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",qe]}],fill:[{fill:[i,"none"]}],"stroke-w":[{stroke:[Hn,ai,uo]}],stroke:[{stroke:[i,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const v_=Qg(__);function In(...i){return v_(kg(i))}function x_(i){let e,t,n;const r=i[2].default,s=_t(r,i,i[1],null);return{c(){e=He("div"),s&&s.c(),Ce(e,"class",t=In("h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",i[0]))},m(o,a){be(o,e,a),s&&s.m(e,null),n=!0},p(o,[a]){s&&s.p&&(!n||a&2)&&xt(s,r,o,o[1],n?vt(r,o[1],a,null):yt(o[1]),null),(!n||a&1&&t!==(t=In("h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",o[0])))&&Ce(e,"class",t)},i(o){n||(ne(s,o),n=!0)},o(o){re(s,o),n=!1},d(o){o&&Me(e),s&&s.d(o)}}}function y_(i,e,t){let{$$slots:n={},$$scope:r}=e,{className:s}=e;return i.$$set=o=>{"className"in o&&t(0,s=o.className),"$$scope"in o&&t(1,r=o.$$scope)},[s,r,n]}class M_ extends rt{constructor(e){super(),it(this,e,y_,x_,et,{className:0})}}function b_(i){let e,t,n,r,s,o,a;const l=i[8].default,c=_t(l,i,i[7],null);return{c(){e=He("div"),t=He("div"),c&&c.c(),Ce(t,"class",n=In("relative flex items-center justify-center transition-all duration-200 ease-linear",i[0])),cu(t,"transform-style","preserve-3d"),Ce(e,"class",r=In("flex items-center justify-center py-20",i[1])),cu(e,"perspective","1000px")},m(u,f){be(u,e,f),Xe(e,t),c&&c.m(t,null),i[9](t),s=!0,o||(a=[As(t,"mouseenter",i[4]),As(t,"mousemove",i[3]),As(t,"mouseleave",i[5])],o=!0)},p(u,[f]){c&&c.p&&(!s||f&128)&&xt(c,l,u,u[7],s?vt(l,u[7],f,null):yt(u[7]),null),(!s||f&1&&n!==(n=In("relative flex items-center justify-center transition-all duration-200 ease-linear",u[0])))&&Ce(t,"class",n),(!s||f&2&&r!==(r=In("flex items-center justify-center py-20",u[1])))&&Ce(e,"class",r)},i(u){s||(ne(c,u),s=!0)},o(u){re(c,u),s=!1},d(u){u&&Me(e),c&&c.d(u),i[9](null),o=!1,ii(a)}}}function S_(i,e,t){let{$$slots:n={},$$scope:r}=e,{className:s}=e,{containerClassName:o=void 0}=e,{isMouseEntered:a=!1}=e,l;const c=h=>{if(!l)return;const{left:g,top:_,width:p,height:m}=l.getBoundingClientRect(),x=(h.clientX-g-p/2)/25,v=(h.clientY-_-m/2)/25;t(2,l.style.transform=`rotateY(${x}deg) rotateX(${v}deg)`,l)},u=h=>{t(6,a=!0)},f=h=>{l&&(t(6,a=!1),t(2,l.style.transform="rotateY(0deg) rotateX(0deg)",l))};function d(h){Vs[h?"unshift":"push"](()=>{l=h,t(2,l)})}return i.$$set=h=>{"className"in h&&t(0,s=h.className),"containerClassName"in h&&t(1,o=h.containerClassName),"isMouseEntered"in h&&t(6,a=h.isMouseEntered),"$$scope"in h&&t(7,r=h.$$scope)},[s,o,l,c,u,f,a,r,n,d]}class E_ extends rt{constructor(e){super(),it(this,e,S_,b_,et,{className:0,containerClassName:1,isMouseEntered:6})}}function T_(i){let e,t,n;const r=i[11].default,s=_t(r,i,i[10],null);let o=[{class:t=In("w-fit transition duration-200 ease-linear",i[0])},i[2]],a={};for(let l=0;l<o.length;l+=1)a=Qn(a,o[l]);return{c(){e=He("div"),s&&s.c(),ta(e,a)},m(l,c){be(l,e,c),s&&s.m(e,null),i[12](e),n=!0},p(l,[c]){s&&s.p&&(!n||c&1024)&&xt(s,r,l,l[10],n?vt(r,l[10],c,null):yt(l[10]),null),ta(e,a=qh(o,[(!n||c&1&&t!==(t=In("w-fit transition duration-200 ease-linear",l[0])))&&{class:t},c&4&&l[2]]))},i(l){n||(ne(s,l),n=!0)},o(l){re(s,l),n=!1},d(l){l&&Me(e),s&&s.d(l),i[12](null)}}}function A_(i,e,t){let{$$slots:n={},$$scope:r}=e,{className:s}=e,{translateX:o=0}=e,{translateY:a=0}=e,{translateZ:l=0}=e,{rotateX:c=0}=e,{rotateY:u=0}=e,{rotateZ:f=0}=e,{isMouseEntered:d=!1}=e,h;const g=()=>{h&&(d?t(1,h.style.transform=`translateX(${o}px) translateY(${a}px) translateZ(${l}px) rotateX(${c}deg) rotateY(${u}deg) rotateZ(${f}deg)`,h):t(1,h.style.transform="translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",h))};function _(p){Vs[p?"unshift":"push"](()=>{h=p,t(1,h)})}return i.$$set=p=>{t(2,e=Qn(Qn({},e),Fs(p))),"className"in p&&t(0,s=p.className),"translateX"in p&&t(3,o=p.translateX),"translateY"in p&&t(4,a=p.translateY),"translateZ"in p&&t(5,l=p.translateZ),"rotateX"in p&&t(6,c=p.rotateX),"rotateY"in p&&t(7,u=p.rotateY),"rotateZ"in p&&t(8,f=p.rotateZ),"isMouseEntered"in p&&t(9,d=p.isMouseEntered),"$$scope"in p&&t(10,r=p.$$scope)},i.$$.update=()=>{i.$$.dirty&512&&g()},e=Fs(e),[s,h,e,o,a,l,c,u,f,d,r,n,_]}class hs extends rt{constructor(e){super(),it(this,e,A_,T_,et,{className:0,translateX:3,translateY:4,translateZ:5,rotateX:6,rotateY:7,rotateZ:8,isMouseEntered:9})}}function w_(i){let e;return{c(){e=Rt(i[0])},m(t,n){be(t,e,n)},p(t,n){n&1&&Wr(e,t[0])},d(t){t&&Me(e)}}}function R_(i){let e;return{c(){e=Rt(i[1])},m(t,n){be(t,e,n)},p(t,n){n&2&&Wr(e,t[1])},d(t){t&&Me(e)}}}function C_(i){let e,t;return{c(){e=He("img"),ea(e.src,t=i[2])||Ce(e,"src",t),Ce(e,"height","1000"),Ce(e,"width","1000"),Ce(e,"class","h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"),Ce(e,"alt","thumbnail")},m(n,r){be(n,e,r)},p(n,r){r&4&&!ea(e.src,t=n[2])&&Ce(e,"src",t)},d(n){n&&Me(e)}}}function du(i){let e;return{c(){e=Rt("View Demo →")},m(t,n){be(t,e,n)},d(t){t&&Me(e)}}}function P_(i){let e,t=i[3]&&du();return{c(){t&&t.c(),e=Ai()},m(n,r){t&&t.m(n,r),be(n,e,r)},p(n,r){n[3]?t||(t=du(),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(n){n&&Me(e),t&&t.d(n)}}}function L_(i){let e;return{c(){e=Rt("Source code")},m(t,n){be(t,e,n)},d(t){t&&Me(e)}}}function D_(i){let e,t,n,r,s,o,a,l,c,u,f;return e=new hs({props:{isMouseEntered:i[4],translateZ:50,className:"text-xl font-bold text-neutral-600 dark:text-white",$$slots:{default:[w_]},$$scope:{ctx:i}}}),n=new hs({props:{isMouseEntered:i[4],translateZ:60,className:"text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300",$$slots:{default:[R_]},$$scope:{ctx:i}}}),s=new hs({props:{isMouseEntered:i[4],translateZ:100,className:"w-full mt-4",$$slots:{default:[C_]},$$scope:{ctx:i}}}),l=new hs({props:{isMouseEntered:i[4],translateZ:20,className:"px-4 py-2 rounded-xl text-xs font-normal dark:text-white",$$slots:{default:[P_]},$$scope:{ctx:i}}}),u=new hs({props:{isMouseEntered:i[4],translateZ:20,className:"px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold",$$slots:{default:[L_]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment),t=ut(),we(n.$$.fragment),r=ut(),we(s.$$.fragment),o=ut(),a=He("div"),we(l.$$.fragment),c=ut(),we(u.$$.fragment),Ce(a,"class","mt-20 flex items-center justify-between")},m(d,h){Te(e,d,h),be(d,t,h),Te(n,d,h),be(d,r,h),Te(s,d,h),be(d,o,h),be(d,a,h),Te(l,a,null),Xe(a,c),Te(u,a,null),f=!0},p(d,h){const g={};h&16&&(g.isMouseEntered=d[4]),h&257&&(g.$$scope={dirty:h,ctx:d}),e.$set(g);const _={};h&16&&(_.isMouseEntered=d[4]),h&258&&(_.$$scope={dirty:h,ctx:d}),n.$set(_);const p={};h&16&&(p.isMouseEntered=d[4]),h&260&&(p.$$scope={dirty:h,ctx:d}),s.$set(p);const m={};h&16&&(m.isMouseEntered=d[4]),h&264&&(m.$$scope={dirty:h,ctx:d}),l.$set(m);const x={};h&16&&(x.isMouseEntered=d[4]),h&256&&(x.$$scope={dirty:h,ctx:d}),u.$set(x)},i(d){f||(ne(e.$$.fragment,d),ne(n.$$.fragment,d),ne(s.$$.fragment,d),ne(l.$$.fragment,d),ne(u.$$.fragment,d),f=!0)},o(d){re(e.$$.fragment,d),re(n.$$.fragment,d),re(s.$$.fragment,d),re(l.$$.fragment,d),re(u.$$.fragment,d),f=!1},d(d){d&&(Me(t),Me(r),Me(o),Me(a)),Ae(e,d),Ae(n,d),Ae(s,d),Ae(l),Ae(u)}}}function I_(i){let e,t;return e=new M_({props:{className:"bg-gray-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ",$$slots:{default:[D_]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,r){const s={};r&287&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function N_(i){let e,t,n;function r(o){i[7](o)}let s={className:"inter-var",$$slots:{default:[I_]},$$scope:{ctx:i}};return i[4]!==void 0&&(s.isMouseEntered=i[4]),e=new E_({props:s}),Vs.push(()=>Fg(e,"isMouseEntered",r)),{c(){we(e.$$.fragment)},m(o,a){Te(e,o,a),n=!0},p(o,[a]){const l={};a&287&&(l.$$scope={dirty:a,ctx:o}),!t&&a&16&&(t=!0,l.isMouseEntered=o[4],Ng(()=>t=!1)),e.$set(l)},i(o){n||(ne(e.$$.fragment,o),n=!0)},o(o){re(e.$$.fragment,o),n=!1},d(o){Ae(e,o)}}}function U_(i,e,t){let n=!1,{id:r}=e,{title:s}=e,{description:o}=e,{image:a}=e,{github:l}=e,{demo:c}=e;function u(f){n=f,t(4,n)}return i.$$set=f=>{"id"in f&&t(5,r=f.id),"title"in f&&t(0,s=f.title),"description"in f&&t(1,o=f.description),"image"in f&&t(2,a=f.image),"github"in f&&t(6,l=f.github),"demo"in f&&t(3,c=f.demo)},[s,o,a,c,n,r,l,u]}class O_ extends rt{constructor(e){super(),it(this,e,U_,N_,et,{id:5,title:0,description:1,image:2,github:6,demo:3})}}function F_(i){let e,t;const n=i[1].default,r=_t(n,i,i[0],null);return{c(){e=He("nav"),r&&r.c(),Ce(e,"class","ring-2 ring-blue-500 hover:bg-sky-700 boder relative flex justify-center space-x-4 rounded-full bg-black px-8 py-6 shadow-input dark:border-white/[0.2]")},m(s,o){be(s,e,o),r&&r.m(e,null),t=!0},p(s,[o]){r&&r.p&&(!t||o&1)&&xt(r,n,s,s[0],t?vt(n,s[0],o,null):yt(s[0]),null)},i(s){t||(ne(r,s),t=!0)},o(s){re(r,s),t=!1},d(s){s&&Me(e),r&&r.d(s)}}}function B_(i,e,t){let{$$slots:n={},$$scope:r}=e;return i.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,n]}class V_ extends rt{constructor(e){super(),it(this,e,B_,F_,et,{})}}function k_(i){let e,t;const n=i[2].default,r=_t(n,i,i[1],null);let s=[{class:"text-neutral-700 hover:text-white dark:text-neutral-200"},i[0]],o={};for(let a=0;a<s.length;a+=1)o=Qn(o,s[a]);return{c(){e=He("a"),r&&r.c(),ta(e,o)},m(a,l){be(a,e,l),r&&r.m(e,null),t=!0},p(a,[l]){r&&r.p&&(!t||l&2)&&xt(r,n,a,a[1],t?vt(n,a[1],l,null):yt(a[1]),null),ta(e,o=qh(s,[{class:"text-neutral-700 hover:text-white dark:text-neutral-200"},l&1&&a[0]]))},i(a){t||(ne(r,a),t=!0)},o(a){re(r,a),t=!1},d(a){a&&Me(e),r&&r.d(a)}}}function z_(i,e,t){let{$$slots:n={},$$scope:r}=e;return i.$$set=s=>{t(0,e=Qn(Qn({},e),Fs(s))),"$$scope"in s&&t(1,r=s.$$scope)},e=Fs(e),[e,r,n]}class vn extends rt{constructor(e){super(),it(this,e,z_,k_,et,{})}}var ks;(function(i){i[i.Entering=0]="Entering",i[i.Present=1]="Present",i[i.Exiting=2]="Exiting"})(ks||(ks={}));var hu;(function(i){i[i.Hide=0]="Hide",i[i.Show=1]="Show"})(hu||(hu={}));const np=1/60*1e3,H_=typeof performance<"u"?()=>performance.now():()=>Date.now(),ip=typeof window<"u"?i=>window.requestAnimationFrame(i):i=>setTimeout(()=>i(H_()),np);function G_(i){let e=[],t=[],n=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const f=u&&r,d=f?e:t;return c&&o.add(l),d.indexOf(l)===-1&&(d.push(l),f&&r&&(n=e.length)),l},cancel:l=>{const c=t.indexOf(l);c!==-1&&t.splice(c,1),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,t]=[t,e],t.length=0,n=e.length,n)for(let c=0;c<n;c++){const u=e[c];u(l),o.has(u)&&(a.schedule(u),i())}r=!1,s&&(s=!1,a.process(l))}};return a}const W_=40;let Hl=!0,zs=!1,Gl=!1;const Fr={delta:0,timestamp:0},Js=["read","update","preRender","render","postRender"],ba=Js.reduce((i,e)=>(i[e]=G_(()=>zs=!0),i),{}),An=Js.reduce((i,e)=>{const t=ba[e];return i[e]=(n,r=!1,s=!1)=>(zs||j_(),t.schedule(n,r,s)),i},{}),Rs=Js.reduce((i,e)=>(i[e]=ba[e].cancel,i),{}),Ir=Js.reduce((i,e)=>(i[e]=()=>ba[e].process(Fr),i),{}),X_=i=>ba[i].process(Fr),rp=i=>{zs=!1,Fr.delta=Hl?np:Math.max(Math.min(i-Fr.timestamp,W_),1),Fr.timestamp=i,Gl=!0,Js.forEach(X_),Gl=!1,zs&&(Hl=!1,ip(rp))},j_=()=>{zs=!0,Hl=!0,Gl||ip(rp)},ia=()=>Fr;function sp(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(i);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(i,n[r])&&(t[n[r]]=i[n[r]]);return t}var pu=function(){};const ra=(i,e,t)=>Math.min(Math.max(t,i),e),za=.001,$_=.01,Y_=10,q_=.05,K_=1;function Z_({duration:i=800,bounce:e=.25,velocity:t=0,mass:n=1}){let r,s,o=1-e;o=ra(q_,K_,o),i=ra($_,Y_,i/1e3),o<1?(r=c=>{const u=c*o,f=u*i,d=u-t,h=Wl(c,o),g=Math.exp(-f);return za-d/h*g},s=c=>{const f=c*o*i,d=f*t+t,h=Math.pow(o,2)*Math.pow(c,2)*i,g=Math.exp(-f),_=Wl(Math.pow(c,2),o);return(-r(c)+za>0?-1:1)*((d-h)*g)/_}):(r=c=>{const u=Math.exp(-c*i),f=(c-t)*i+1;return-za+u*f},s=c=>{const u=Math.exp(-c*i),f=(t-c)*(i*i);return u*f});const a=5/i,l=Q_(r,s,a);if(i=i*1e3,isNaN(l))return{stiffness:100,damping:10,duration:i};{const c=Math.pow(l,2)*n;return{stiffness:c,damping:o*2*Math.sqrt(n*c),duration:i}}}const J_=12;function Q_(i,e,t){let n=t;for(let r=1;r<J_;r++)n=n-i(n)/e(n);return n}function Wl(i,e){return i*Math.sqrt(1-e*e)}const ev=["duration","bounce"],tv=["stiffness","damping","mass"];function mu(i,e){return e.some(t=>i[t]!==void 0)}function nv(i){let e=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},i);if(!mu(i,tv)&&mu(i,ev)){const t=Z_(i);e=Object.assign(Object.assign(Object.assign({},e),t),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}function Ec(i){var{from:e=0,to:t=1,restSpeed:n=2,restDelta:r}=i,s=sp(i,["from","to","restSpeed","restDelta"]);const o={done:!1,value:e};let{stiffness:a,damping:l,mass:c,velocity:u,duration:f,isResolvedFromDuration:d}=nv(s),h=gu,g=gu;function _(){const p=u?-(u/1e3):0,m=t-e,x=l/(2*Math.sqrt(a*c)),v=Math.sqrt(a/c)/1e3;if(r===void 0&&(r=Math.min(Math.abs(t-e)/100,.4)),x<1){const M=Wl(v,x);h=A=>{const E=Math.exp(-x*v*A);return t-E*((p+x*v*m)/M*Math.sin(M*A)+m*Math.cos(M*A))},g=A=>{const E=Math.exp(-x*v*A);return x*v*E*(Math.sin(M*A)*(p+x*v*m)/M+m*Math.cos(M*A))-E*(Math.cos(M*A)*(p+x*v*m)-M*m*Math.sin(M*A))}}else if(x===1)h=M=>t-Math.exp(-v*M)*(m+(p+v*m)*M);else{const M=v*Math.sqrt(x*x-1);h=A=>{const E=Math.exp(-x*v*A),S=Math.min(M*A,300);return t-E*((p+x*v*m)*Math.sinh(S)+M*m*Math.cosh(S))/M}}}return _(),{next:p=>{const m=h(p);if(d)o.done=p>=f;else{const x=g(p)*1e3,v=Math.abs(x)<=n,M=Math.abs(t-m)<=r;o.done=v&&M}return o.value=o.done?t:m,o},flipTarget:()=>{u=-u,[e,t]=[t,e],_()}}}Ec.needsInterpolation=(i,e)=>typeof i=="string"||typeof e=="string";const gu=i=>0,Hs=(i,e,t)=>{const n=e-i;return n===0?1:(t-i)/n},un=(i,e,t)=>-t*i+t*e+i,op=(i,e)=>t=>Math.max(Math.min(t,e),i),Cs=i=>i%1?Number(i.toFixed(5)):i,Gs=/(-)?([\d]*\.?[\d])+/g,Xl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,iv=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Qs(i){return typeof i=="string"}const sr={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},Ps=Object.assign(Object.assign({},sr),{transform:op(0,1)}),fo=Object.assign(Object.assign({},sr),{default:1}),eo=i=>({test:e=>Qs(e)&&e.endsWith(i)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${i}`}),gi=eo("deg"),Br=eo("%"),ke=eo("px"),rv=eo("vh"),sv=eo("vw"),_u=Object.assign(Object.assign({},Br),{parse:i=>Br.parse(i)/100,transform:i=>Br.transform(i*100)}),Tc=(i,e)=>t=>!!(Qs(t)&&iv.test(t)&&t.startsWith(i)||e&&Object.prototype.hasOwnProperty.call(t,e)),ap=(i,e,t)=>n=>{if(!Qs(n))return n;const[r,s,o,a]=n.match(Gs);return{[i]:parseFloat(r),[e]:parseFloat(s),[t]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},qi={test:Tc("hsl","hue"),parse:ap("hue","saturation","lightness"),transform:({hue:i,saturation:e,lightness:t,alpha:n=1})=>"hsla("+Math.round(i)+", "+Br.transform(Cs(e))+", "+Br.transform(Cs(t))+", "+Cs(Ps.transform(n))+")"},ov=op(0,255),Ha=Object.assign(Object.assign({},sr),{transform:i=>Math.round(ov(i))}),yi={test:Tc("rgb","red"),parse:ap("red","green","blue"),transform:({red:i,green:e,blue:t,alpha:n=1})=>"rgba("+Ha.transform(i)+", "+Ha.transform(e)+", "+Ha.transform(t)+", "+Cs(Ps.transform(n))+")"};function av(i){let e="",t="",n="",r="";return i.length>5?(e=i.substr(1,2),t=i.substr(3,2),n=i.substr(5,2),r=i.substr(7,2)):(e=i.substr(1,1),t=i.substr(2,1),n=i.substr(3,1),r=i.substr(4,1),e+=e,t+=t,n+=n,r+=r),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(n,16),alpha:r?parseInt(r,16)/255:1}}const jl={test:Tc("#"),parse:av,transform:yi.transform},en={test:i=>yi.test(i)||jl.test(i)||qi.test(i),parse:i=>yi.test(i)?yi.parse(i):qi.test(i)?qi.parse(i):jl.parse(i),transform:i=>Qs(i)?i:i.hasOwnProperty("red")?yi.transform(i):qi.transform(i)},lp="${c}",cp="${n}";function lv(i){var e,t,n,r;return isNaN(i)&&Qs(i)&&((t=(e=i.match(Gs))===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0)+((r=(n=i.match(Xl))===null||n===void 0?void 0:n.length)!==null&&r!==void 0?r:0)>0}function up(i){typeof i=="number"&&(i=`${i}`);const e=[];let t=0;const n=i.match(Xl);n&&(t=n.length,i=i.replace(Xl,lp),e.push(...n.map(en.parse)));const r=i.match(Gs);return r&&(i=i.replace(Gs,cp),e.push(...r.map(sr.parse))),{values:e,numColors:t,tokenised:i}}function fp(i){return up(i).values}function dp(i){const{values:e,numColors:t,tokenised:n}=up(i),r=e.length;return s=>{let o=n;for(let a=0;a<r;a++)o=o.replace(a<t?lp:cp,a<t?en.transform(s[a]):Cs(s[a]));return o}}const cv=i=>typeof i=="number"?0:i;function uv(i){const e=fp(i);return dp(i)(e.map(cv))}const ti={test:lv,parse:fp,createTransformer:dp,getAnimatableNone:uv},fv=new Set(["brightness","contrast","saturate","opacity"]);function dv(i){let[e,t]=i.slice(0,-1).split("(");if(e==="drop-shadow")return i;const[n]=t.match(Gs)||[];if(!n)return i;const r=t.replace(n,"");let s=fv.has(e)?1:0;return n!==t&&(s*=100),e+"("+s+r+")"}const hv=/([a-z-]*)\(.*?\)/g,$l=Object.assign(Object.assign({},ti),{getAnimatableNone:i=>{const e=i.match(hv);return e?e.map(dv).join(" "):i}});function Ga(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*(2/3-t)*6:i}function vu({hue:i,saturation:e,lightness:t,alpha:n}){i/=360,e/=100,t/=100;let r=0,s=0,o=0;if(!e)r=s=o=t;else{const a=t<.5?t*(1+e):t+e-t*e,l=2*t-a;r=Ga(l,a,i+1/3),s=Ga(l,a,i),o=Ga(l,a,i-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:n}}const pv=(i,e,t)=>{const n=i*i,r=e*e;return Math.sqrt(Math.max(0,t*(r-n)+n))},mv=[jl,yi,qi],xu=i=>mv.find(e=>e.test(i)),hp=(i,e)=>{let t=xu(i),n=xu(e),r=t.parse(i),s=n.parse(e);t===qi&&(r=vu(r),t=yi),n===qi&&(s=vu(s),n=yi);const o=Object.assign({},r);return a=>{for(const l in o)l!=="alpha"&&(o[l]=pv(r[l],s[l],a));return o.alpha=un(r.alpha,s.alpha,a),t.transform(o)}},Yl=i=>typeof i=="number",gv=(i,e)=>t=>e(i(t)),to=(...i)=>i.reduce(gv);function pp(i,e){return Yl(i)?t=>un(i,e,t):en.test(i)?hp(i,e):gp(i,e)}const mp=(i,e)=>{const t=[...i],n=t.length,r=i.map((s,o)=>pp(s,e[o]));return s=>{for(let o=0;o<n;o++)t[o]=r[o](s);return t}},_v=(i,e)=>{const t=Object.assign(Object.assign({},i),e),n={};for(const r in t)i[r]!==void 0&&e[r]!==void 0&&(n[r]=pp(i[r],e[r]));return r=>{for(const s in n)t[s]=n[s](r);return t}};function yu(i){const e=ti.parse(i),t=e.length;let n=0,r=0,s=0;for(let o=0;o<t;o++)n||typeof e[o]=="number"?n++:e[o].hue!==void 0?s++:r++;return{parsed:e,numNumbers:n,numRGB:r,numHSL:s}}const gp=(i,e)=>{const t=ti.createTransformer(e),n=yu(i),r=yu(e);return n.numHSL===r.numHSL&&n.numRGB===r.numRGB&&n.numNumbers>=r.numNumbers?to(mp(n.parsed,r.parsed),t):o=>`${o>0?e:i}`},vv=(i,e)=>t=>un(i,e,t);function xv(i){if(typeof i=="number")return vv;if(typeof i=="string")return en.test(i)?hp:gp;if(Array.isArray(i))return mp;if(typeof i=="object")return _v}function yv(i,e,t){const n=[],r=t||xv(i[0]),s=i.length-1;for(let o=0;o<s;o++){let a=r(i[o],i[o+1]);if(e){const l=Array.isArray(e)?e[o]:e;a=to(l,a)}n.push(a)}return n}function Mv([i,e],[t]){return n=>t(Hs(i,e,n))}function bv(i,e){const t=i.length,n=t-1;return r=>{let s=0,o=!1;if(r<=i[0]?o=!0:r>=i[n]&&(s=n-1,o=!0),!o){let l=1;for(;l<t&&!(i[l]>r||l===n);l++);s=l-1}const a=Hs(i[s],i[s+1],r);return e[s](a)}}function _p(i,e,{clamp:t=!0,ease:n,mixer:r}={}){const s=i.length;pu(s===e.length),pu(!n||!Array.isArray(n)||n.length===s-1),i[0]>i[s-1]&&(i=[].concat(i),e=[].concat(e),i.reverse(),e.reverse());const o=yv(e,n,r),a=s===2?Mv(i,o):bv(i,o);return t?l=>a(ra(i[0],i[s-1],l)):a}const Sa=i=>e=>1-i(1-e),Ac=i=>e=>e<=.5?i(2*e)/2:(2-i(2*(1-e)))/2,Sv=i=>e=>Math.pow(e,i),vp=i=>e=>e*e*((i+1)*e-i),Ev=i=>{const e=vp(i);return t=>(t*=2)<1?.5*e(t):.5*(2-Math.pow(2,-10*(t-1)))},xp=1.525,Tv=4/11,Av=8/11,wv=9/10,yp=i=>i,wc=Sv(2),Rv=Sa(wc),Mp=Ac(wc),bp=i=>1-Math.sin(Math.acos(i)),Sp=Sa(bp),Cv=Ac(Sp),Rc=vp(xp),Pv=Sa(Rc),Lv=Ac(Rc),Dv=Ev(xp),Iv=4356/361,Nv=35442/1805,Uv=16061/1805,sa=i=>{if(i===1||i===0)return i;const e=i*i;return i<Tv?7.5625*e:i<Av?9.075*e-9.9*i+3.4:i<wv?Iv*e-Nv*i+Uv:10.8*i*i-20.52*i+10.72},Ov=Sa(sa),Fv=i=>i<.5?.5*(1-sa(1-i*2)):.5*sa(i*2-1)+.5;function Bv(i,e){return i.map(()=>e||Mp).splice(0,i.length-1)}function Vv(i){const e=i.length;return i.map((t,n)=>n!==0?n/(e-1):0)}function kv(i,e){return i.map(t=>t*e)}function Yo({from:i=0,to:e=1,ease:t,offset:n,duration:r=300}){const s={done:!1,value:i},o=Array.isArray(e)?e:[i,e],a=kv(n&&n.length===o.length?n:Vv(o),r);function l(){return _p(a,o,{ease:Array.isArray(t)?t:Bv(o,t)})}let c=l();return{next:u=>(s.value=c(u),s.done=u>=r,s),flipTarget:()=>{o.reverse(),c=l()}}}function zv({velocity:i=0,from:e=0,power:t=.8,timeConstant:n=350,restDelta:r=.5,modifyTarget:s}){const o={done:!1,value:e};let a=t*i;const l=e+a,c=s===void 0?l:s(l);return c!==l&&(a=c-e),{next:u=>{const f=-a*Math.exp(-u/n);return o.done=!(f>r||f<-r),o.value=o.done?c:c+f,o},flipTarget:()=>{}}}const Mu={keyframes:Yo,spring:Ec,decay:zv};function Hv(i){if(Array.isArray(i.to))return Yo;if(Mu[i.type])return Mu[i.type];const e=new Set(Object.keys(i));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?Yo:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?Ec:Yo}function Ep(i,e,t=0){return i-e-t}function Gv(i,e,t=0,n=!0){return n?Ep(e+-i,e,t):e-(i-e)+t}function Wv(i,e,t,n){return n?i>=e+t:i<=-t}const Xv=i=>{const e=({delta:t})=>i(t);return{start:()=>An.update(e,!0),stop:()=>Rs.update(e)}};function Tp(i){var e,t,{from:n,autoplay:r=!0,driver:s=Xv,elapsed:o=0,repeat:a=0,repeatType:l="loop",repeatDelay:c=0,onPlay:u,onStop:f,onComplete:d,onRepeat:h,onUpdate:g}=i,_=sp(i,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:p}=_,m,x=0,v=_.duration,M,A=!1,E=!0,S;const w=Hv(_);!((t=(e=w).needsInterpolation)===null||t===void 0)&&t.call(e,n,p)&&(S=_p([0,100],[n,p],{clamp:!1}),n=0,p=100);const N=w(Object.assign(Object.assign({},_),{from:n,to:p}));function y(){x++,l==="reverse"?(E=x%2===0,o=Gv(o,v,c,E)):(o=Ep(o,v,c),l==="mirror"&&N.flipTarget()),A=!1,h&&h()}function C(){m.stop(),d&&d()}function $(D){if(E||(D=-D),o+=D,!A){const j=N.next(Math.max(0,o));M=j.value,S&&(M=S(M)),A=E?j.done:o<=0}g==null||g(M),A&&(x===0&&(v??(v=o)),x<a?Wv(o,v,c,E)&&y():C())}function J(){u==null||u(),m=s($),m.start()}return r&&J(),{stop:()=>{f==null||f(),m.stop()}}}function Ap(i,e){return e?i*(1e3/e):0}function jv({from:i=0,velocity:e=0,min:t,max:n,power:r=.8,timeConstant:s=750,bounceStiffness:o=500,bounceDamping:a=10,restDelta:l=1,modifyTarget:c,driver:u,onUpdate:f,onComplete:d,onStop:h}){let g;function _(v){return t!==void 0&&v<t||n!==void 0&&v>n}function p(v){return t===void 0?n:n===void 0||Math.abs(t-v)<Math.abs(n-v)?t:n}function m(v){g==null||g.stop(),g=Tp(Object.assign(Object.assign({},v),{driver:u,onUpdate:M=>{var A;f==null||f(M),(A=v.onUpdate)===null||A===void 0||A.call(v,M)},onComplete:d,onStop:h}))}function x(v){m(Object.assign({type:"spring",stiffness:o,damping:a,restDelta:l},v))}if(_(i))x({from:i,velocity:e,to:p(i)});else{let v=r*e+i;typeof c<"u"&&(v=c(v));const M=p(v),A=M===t?-1:1;let E,S;const w=N=>{E=S,S=N,e=Ap(N-E,ia().delta),(A===1&&N>M||A===-1&&N<M)&&x({from:N,to:M,velocity:e})};m({type:"decay",from:i,velocity:e,timeConstant:s,power:r,restDelta:l,modifyTarget:c,onUpdate:_(v)?w:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const ql=i=>i.hasOwnProperty("x")&&i.hasOwnProperty("y"),bu=i=>ql(i)&&i.hasOwnProperty("z"),ho=(i,e)=>Math.abs(i-e);function wp(i,e){if(Yl(i)&&Yl(e))return ho(i,e);if(ql(i)&&ql(e)){const t=ho(i.x,e.x),n=ho(i.y,e.y),r=bu(i)&&bu(e)?ho(i.z,e.z):0;return Math.sqrt(Math.pow(t,2)+Math.pow(n,2)+Math.pow(r,2))}}const Rp=(i,e)=>1-3*e+3*i,Cp=(i,e)=>3*e-6*i,Pp=i=>3*i,oa=(i,e,t)=>((Rp(e,t)*i+Cp(e,t))*i+Pp(e))*i,Lp=(i,e,t)=>3*Rp(e,t)*i*i+2*Cp(e,t)*i+Pp(e),$v=1e-7,Yv=10;function qv(i,e,t,n,r){let s,o,a=0;do o=e+(t-e)/2,s=oa(o,n,r)-i,s>0?t=o:e=o;while(Math.abs(s)>$v&&++a<Yv);return o}const Kv=8,Zv=.001;function Jv(i,e,t,n){for(let r=0;r<Kv;++r){const s=Lp(e,t,n);if(s===0)return e;const o=oa(e,t,n)-i;e-=o/s}return e}const qo=11,po=1/(qo-1);function Qv(i,e,t,n){if(i===e&&t===n)return yp;const r=new Float32Array(qo);for(let o=0;o<qo;++o)r[o]=oa(o*po,i,t);function s(o){let a=0,l=1;const c=qo-1;for(;l!==c&&r[l]<=o;++l)a+=po;--l;const u=(o-r[l])/(r[l+1]-r[l]),f=a+u*po,d=Lp(f,i,t);return d>=Zv?Jv(o,f,i,t):d===0?f:qv(o,a,a+po,i,t)}return o=>o===0||o===1?o:oa(s(o),e,n)}function Dp(i,e){i.indexOf(e)===-1&&i.push(e)}function Ip(i,e){var t=i.indexOf(e);t>-1&&i.splice(t,1)}var Ko=function(){function i(){this.subscriptions=[]}return i.prototype.add=function(e){var t=this;return Dp(this.subscriptions,e),function(){return Ip(t.subscriptions,e)}},i.prototype.notify=function(e,t,n){var r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(var s=0;s<r;s++){var o=this.subscriptions[s];o&&o(e,t,n)}},i.prototype.getSize=function(){return this.subscriptions.length},i.prototype.clear=function(){this.subscriptions.length=0},i}(),e0=function(i){return!isNaN(parseFloat(i))},t0=function(){function i(e,t){var n=this;this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Ko,this.velocityUpdateSubscribers=new Ko,this.renderSubscribers=new Ko,this.canTrackVelocity=!1,this.updateAndNotify=function(r,s){s===void 0&&(s=!0),n.prev=n.current,n.current=r;var o=ia(),a=o.delta,l=o.timestamp;n.lastUpdated!==l&&(n.timeDelta=a,n.lastUpdated=l,An.postRender(n.scheduleVelocityCheck)),n.prev!==n.current&&n.updateSubscribers.notify(n.current),n.velocityUpdateSubscribers.getSize()&&n.velocityUpdateSubscribers.notify(n.getVelocity()),s&&n.renderSubscribers.notify(n.current)},this.scheduleVelocityCheck=function(){return An.postRender(n.velocityCheck)},this.velocityCheck=function(r){var s=r.timestamp;s!==n.lastUpdated&&(n.prev=n.current,n.velocityUpdateSubscribers.notify(n.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=e0(this.current),this.onSubscription=()=>{},this.onUnsubscription=()=>{},t&&(this.onSubscription=()=>{if(this.updateSubscribers.getSize()+this.velocityUpdateSubscribers.getSize()+this.renderSubscribers.getSize()===0){const r=t();this.onUnsubscription=()=>{},r&&(this.onUnsubscription=()=>{this.updateSubscribers.getSize()+this.velocityUpdateSubscribers.getSize()+this.renderSubscribers.getSize()===0&&r()})}})}return i.prototype.onChange=function(e){this.onSubscription();const t=this.updateSubscribers.add(e);return()=>{t(),this.onUnsubscription()}},i.prototype.subscribe=function(e){return this.onChange(e)},i.prototype.clearListeners=function(){this.updateSubscribers.clear(),this.onUnsubscription()},i.prototype.onRenderRequest=function(e){this.onSubscription(),e(this.get());const t=this.renderSubscribers.add(e);return()=>{t(),this.onUnsubscription()}},i.prototype.attach=function(e){this.passiveEffect=e},i.prototype.set=function(e,t){t===void 0&&(t=!0),!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)},i.prototype.update=function(e){this.set(e(this.get()))},i.prototype.get=function(){this.onSubscription();const e=this.current;return this.onUnsubscription(),e},i.prototype.getPrevious=function(){return this.prev},i.prototype.getVelocity=function(){this.onSubscription();const e=this.canTrackVelocity?Ap(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0;return this.onUnsubscription(),e},i.prototype.start=function(e){var t=this;return this.stop(),new Promise(function(n){t.hasAnimated=!0,t.stopAnimation=e(n)}).then(function(){return t.clearAnimation()})},i.prototype.stop=function(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()},i.prototype.isAnimating=function(){return!!this.stopAnimation},i.prototype.clearAnimation=function(){this.stopAnimation=null},i.prototype.destroy=function(){this.updateSubscribers.clear(),this.renderSubscribers.clear(),this.stop(),this.onUnsubscription()},i}();function Ji(i,e){return new t0(i,e)}const cr=[];function Np(i,e){return{subscribe:Rn(i,e).subscribe}}function Rn(i,e=Nt){let t;const n=new Set;function r(a){if(et(i,a)&&(i=a,t)){const l=!cr.length;for(const c of n)c[1](),cr.push(c,i);if(l){for(let c=0;c<cr.length;c+=2)cr[c][0](cr[c+1]);cr.length=0}}}function s(a){r(a(i))}function o(a,l=Nt){const c=[a,l];return n.add(c),n.size===1&&(t=e(r,s)||Nt),a(i),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:o}}function n0(i,e,t){const n=!Array.isArray(i),r=n?[i]:i;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return Np(t,(o,a)=>{let l=!1;const c=[];let u=0,f=Nt;const d=()=>{if(u)return;f();const g=e(n?c[0]:c,o,a);s?o(g):f=Ma(g)?g:Nt},h=r.map((g,_)=>Mc(g,p=>{c[_]=p,u&=~(1<<_),l&&d()},()=>{u|=1<<_}));return l=!0,d(),function(){ii(h),f(),l=!1}})}const or=(i,e)=>{if(!e||!window)return;let t=e;for(;t=t.parentNode;)if(t.motionDomContext&&t.motionDomContext.has(i))return t.motionDomContext.get(i)},Up=(i,e,t)=>{e&&window&&(e.motionDomContext||(e.motionDomContext=new Map),e.motionDomContext.set(i,t))};var wi=i=>or("MotionConfig",i)||Rn({transformPagePoint:function(e){return e},isStatic:!1});function i0(i){let e;const t=i[2].default,n=_t(t,i,i[1],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&2)&&xt(n,t,r,r[1],e?vt(t,r[1],s,null):yt(r[1]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}const Ts=i=>or("ScaleCorrection",i)||Rn([]),Op=()=>Rn([]),r0=i=>{const e=zt(Ts)||Ts(i),t=Ts();Fl(Ts,t),Up("ScaleCorrection",i,t),Fl(Op,e)};function s0(i,e,t){let{$$slots:n={},$$scope:r}=e,{isCustom:s}=e;return r0(s),i.$$set=o=>{"isCustom"in o&&t(0,s=o.isCustom),"$$scope"in o&&t(1,r=o.$$scope)},[s,r,n]}class o0 extends rt{constructor(e){super(),it(this,e,s0,i0,et,{isCustom:0})}}const a0=o0;function ri(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(i);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(i,n[r])&&(t[n[r]]=i[n[r]]);return t}function Ut(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return s}function fn(i,e,t){if(t||arguments.length===2)for(var n=0,r=e.length,s;n<r;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return i.concat(s||Array.prototype.slice.call(e))}var aa=function(i){return i*1e3},l0={linear:yp,easeIn:wc,easeInOut:Mp,easeOut:Rv,circIn:bp,circInOut:Cv,circOut:Sp,backIn:Rc,backInOut:Lv,backOut:Pv,anticipate:Dv,bounceIn:Ov,bounceInOut:Fv,bounceOut:sa},Su=function(i){if(Array.isArray(i)){var e=Ut(i,4),t=e[0],n=e[1],r=e[2],s=e[3];return Qv(t,n,r,s)}else if(typeof i=="string")return l0[i];return i},c0=function(i){return Array.isArray(i)&&typeof i[0]!="number"},Eu=function(i,e){return i==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&ti.test(e)&&!e.startsWith("url("))},Ws=function(i){return Array.isArray(i)},Oi=function(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}},mo=function(i){return{type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}},Wa=function(){return{type:"keyframes",ease:"linear",duration:.3}},u0=function(i){return{type:"keyframes",duration:.8,values:i}},Tu={x:Oi,y:Oi,z:Oi,rotate:Oi,rotateX:Oi,rotateY:Oi,rotateZ:Oi,scaleX:mo,scaleY:mo,scale:mo,opacity:Wa,backgroundColor:Wa,color:Wa,default:mo},f0=function(i,e){var t;return Ws(e)?t=u0:t=Tu[i]||Tu.default,Object.assign({to:e},t(e))},Au=Object.assign(Object.assign({},sr),{transform:Math.round}),Fp={borderWidth:ke,borderTopWidth:ke,borderRightWidth:ke,borderBottomWidth:ke,borderLeftWidth:ke,borderRadius:ke,radius:ke,borderTopLeftRadius:ke,borderTopRightRadius:ke,borderBottomRightRadius:ke,borderBottomLeftRadius:ke,width:ke,maxWidth:ke,height:ke,maxHeight:ke,size:ke,top:ke,right:ke,bottom:ke,left:ke,padding:ke,paddingTop:ke,paddingRight:ke,paddingBottom:ke,paddingLeft:ke,margin:ke,marginTop:ke,marginRight:ke,marginBottom:ke,marginLeft:ke,rotate:gi,rotateX:gi,rotateY:gi,rotateZ:gi,scale:fo,scaleX:fo,scaleY:fo,scaleZ:fo,skew:gi,skewX:gi,skewY:gi,distance:ke,translateX:ke,translateY:ke,translateZ:ke,x:ke,y:ke,z:ke,perspective:ke,transformPerspective:ke,opacity:Ps,originX:_u,originY:_u,originZ:ke,zIndex:Au,fillOpacity:Ps,strokeOpacity:Ps,numOctaves:Au},d0=Object.assign(Object.assign({},Fp),{color:en,backgroundColor:en,outlineColor:en,fill:en,stroke:en,borderColor:en,borderTopColor:en,borderRightColor:en,borderBottomColor:en,borderLeftColor:en,filter:$l,WebkitFilter:$l}),Cc=function(i){return d0[i]};function Pc(i,e){var t,n=Cc(i);return n!==$l&&(n=ti),(t=n.getAnimatableNone)===null||t===void 0?void 0:t.call(n,e)}function h0(i){i.when,i.delay,i.delayChildren,i.staggerChildren,i.staggerDirection,i.repeat,i.repeatType,i.repeatDelay,i.from;var e=ri(i,["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(e).length}function p0(i){var e=i.ease,t=i.times,n=i.yoyo,r=i.flip,s=i.loop,o=ri(i,["ease","times","yoyo","flip","loop"]),a=Object.assign({},o);return t&&(a.offset=t),o.duration&&(a.duration=aa(o.duration)),o.repeatDelay&&(a.repeatDelay=aa(o.repeatDelay)),e&&(a.ease=c0(e)?e.map(Su):Su(e)),o.type==="tween"&&(a.type="keyframes"),(n||s||r)&&(n?a.repeatType="reverse":s?a.repeatType="loop":r&&(a.repeatType="mirror"),a.repeat=s||n||r||o.repeat),o.type!=="spring"&&(a.type="keyframes"),a}function m0(i,e){var t,n=Lc(i,e)||{};return(t=n.delay)!==null&&t!==void 0?t:0}function g0(i){return Array.isArray(i.to)&&i.to[0]===null&&(i.to=fn([],Ut(i.to)),i.to[0]=i.from),i}function _0(i,e,t){var n;return Array.isArray(e.to)&&((n=i.duration)!==null&&n!==void 0||(i.duration=.8)),g0(e),h0(i)||(i=Object.assign(Object.assign({},i),f0(t,e.to))),Object.assign(Object.assign({},e),p0(i))}function v0(i,e,t,n,r){var s,o=Lc(n,i),a=(s=o.from)!==null&&s!==void 0?s:e.get(),l=Eu(i,t);a==="none"&&l&&typeof t=="string"?a=Pc(i,t):wu(a)&&typeof t=="string"?a=Ru(t):!Array.isArray(t)&&wu(t)&&typeof a=="string"&&(t=Ru(a));var c=Eu(i,a);function u(){var d={from:a,to:t,velocity:e.getVelocity(),onComplete:r,onUpdate:function(h){return e.set(h)}};return o.type==="inertia"||o.type==="decay"?jv(Object.assign(Object.assign({},d),o)):Tp(Object.assign(Object.assign({},_0(o,d,i)),{onUpdate:function(h){var g;d.onUpdate(h),(g=o.onUpdate)===null||g===void 0||g.call(o,h)},onComplete:function(){var h;d.onComplete(),(h=o.onComplete)===null||h===void 0||h.call(o)}}))}function f(){var d;return e.set(t),r(),(d=o==null?void 0:o.onComplete)===null||d===void 0||d.call(o),{stop:function(){}}}return!c||!l||o.type===!1?f:u}function wu(i){return i===0||typeof i=="string"&&parseFloat(i)===0&&i.indexOf(" ")===-1}function Ru(i){return typeof i=="number"?0:Pc("",i)}function Lc(i,e){return i[e]||i.default||i}function la(i,e,t,n){return n===void 0&&(n={}),e.start(function(r){var s,o,a=v0(i,e,t,n,r),l=m0(n,i),c=function(){return o=a()};return l?s=setTimeout(c,aa(l)):c(),function(){clearTimeout(s),o==null||o.stop()}})}var x0=function(i){return/^\-?\d*\.?\d+$/.test(i)},y0=function(i){return!!(i&&typeof i=="object"&&i.mix&&i.toValue)},M0=function(i){return Ws(i)?i[i.length-1]||0:i},Bp=function(i){return function(e){return e.test(i)}},b0={test:function(i){return i==="auto"},parse:function(i){return i}},Vp=[sr,ke,Br,gi,sv,rv,b0],Xa=function(i){return Vp.find(Bp(i))},S0=fn(fn([],Ut(Vp)),[en,ti]),E0=function(i){return S0.find(Bp(i))};function kp(i){return Array.isArray(i)}function Sn(i){return typeof i=="string"||kp(i)}function T0(i){var e={};return i.forEachValue(function(t,n){return e[n]=t.get()}),e}function A0(i){var e={};return i.forEachValue(function(t,n){return e[n]=t.getVelocity()}),e}function zp(i,e,t,n,r){var s;return n===void 0&&(n={}),r===void 0&&(r={}),typeof e=="string"&&(e=(s=i.variants)===null||s===void 0?void 0:s[e]),typeof e=="function"?e(t??i.custom,n,r):e}function Ea(i,e,t){var n=i.getProps();return zp(n,e,t??n.custom,T0(i),A0(i))}function Ta(i){var e;return typeof((e=i.animate)===null||e===void 0?void 0:e.start)=="function"||Sn(i.initial)||Sn(i.animate)||Sn(i.whileHover)||Sn(i.whileDrag)||Sn(i.whileTap)||Sn(i.whileFocus)||Sn(i.exit)}function Hp(i){return!!(Ta(i)||i.variants)}function w0(i,e,t){i.hasValue(e)?i.getValue(e).set(t):i.addValue(e,Ji(t))}function R0(i,e){var t=Ea(i,e),n=t?i.makeTargetAnimatable(t,!1):{},r=n.transitionEnd,s=r===void 0?{}:r;n.transition;var o=ri(n,["transitionEnd","transition"]);o=Object.assign(Object.assign({},o),s);for(var a in o){var l=M0(o[a]);w0(i,a,l)}}function C0(i,e,t){var n,r,s,o,a=Object.keys(e).filter(function(h){return!i.hasValue(h)}),l=a.length;if(l)for(var c=0;c<l;c++){var u=a[c],f=e[u],d=null;Array.isArray(f)&&(d=f[0]),d===null&&(d=(r=(n=t[u])!==null&&n!==void 0?n:i.readValue(u))!==null&&r!==void 0?r:e[u]),d!=null&&(typeof d=="string"&&x0(d)?d=parseFloat(d):!E0(d)&&ti.test(f)&&(d=Pc(u,f)),i.addValue(u,Ji(d)),(s=(o=t)[u])!==null&&s!==void 0||(o[u]=d),i.setBaseTarget(u,d))}}function P0(i,e){if(e){var t=e[i]||e.default||e;return t.from}}function L0(i,e,t){var n,r,s={};for(var o in i)s[o]=(n=P0(o,e))!==null&&n!==void 0?n:(r=t.getValue(o))===null||r===void 0?void 0:r.get();return s}function D0(i,e,t){t===void 0&&(t={}),i.notifyAnimationStart();var n;if(Array.isArray(e)){var r=e.map(function(o){return Kl(i,o,t)});n=Promise.all(r)}else if(typeof e=="string")n=Kl(i,e,t);else{var s=typeof e=="function"?Ea(i,e,t.custom):e;n=Gp(i,s,t)}return n.then(function(){return i.notifyAnimationComplete(e)})}function Kl(i,e,t){var n;t===void 0&&(t={});var r=Ea(i,e,t.custom),s=(r||{}).transition,o=s===void 0?i.getDefaultTransition()||{}:s;t.transitionOverride&&(o=t.transitionOverride);var a=r?function(){return Gp(i,r,t)}:function(){return Promise.resolve()},l=!((n=i.variantChildren)===null||n===void 0)&&n.size?function(h){h===void 0&&(h=0);var g=o.delayChildren,_=g===void 0?0:g,p=o.staggerChildren,m=o.staggerDirection;return I0(i,e,_+h,p,m,t)}:function(){return Promise.resolve()},c=o.when;if(c){var u=Ut(c==="beforeChildren"?[a,l]:[l,a],2),f=u[0],d=u[1];return f().then(d)}else return Promise.all([a(),l(t.delay)])}function Gp(i,e,t){var n,r=t===void 0?{}:t,s=r.delay,o=s===void 0?0:s,a=r.transitionOverride,l=r.type,c=i.makeTargetAnimatable(e),u=c.transition,f=u===void 0?i.getDefaultTransition():u,d=c.transitionEnd,h=ri(c,["transition","transitionEnd"]);a&&(f=a);var g=[],_=l&&((n=i.animationState)===null||n===void 0?void 0:n.getState()[l]);for(var p in h){var m=i.getValue(p),x=h[p];if(!(!m||x===void 0||_&&U0(_,p))){var v=la(p,m,x,Object.assign({delay:o},f));g.push(v)}}return Promise.all(g).then(function(){d&&R0(i,d)})}function I0(i,e,t,n,r,s){t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=1);var o=[],a=(i.variantChildren.size-1)*n,l=r===1?function(c){return c===void 0&&(c=0),c*n}:function(c){return c===void 0&&(c=0),a-c*n};return Array.from(i.variantChildren).sort(N0).forEach(function(c,u){o.push(Kl(c,e,Object.assign(Object.assign({},s),{delay:t+l(u)})).then(function(){return c.notifyAnimationComplete(e)}))}),Promise.all(o)}function N0(i,e){return i.sortNodePosition(e)}function U0(i,e){var t=i.protectedKeys,n=i.needsAnimating,r=t.hasOwnProperty(e)&&n[e]!==!0;return n[e]=!1,r}var Ls={};function O0(i){for(var e in i)Ls[e]=i[e]}function sn(i){return[i("x"),i("y")]}function F0(i){return i}function Wp(i){var e=i.top,t=i.left,n=i.right,r=i.bottom;return{x:{min:t,max:n},y:{min:e,max:r}}}function B0(i){var e=i.x,t=i.y;return{top:t.min,bottom:t.max,left:e.min,right:e.max}}function V0(i,e){var t=i.top,n=i.left,r=i.bottom,s=i.right;e===void 0&&(e=F0);var o=e({x:n,y:t}),a=e({x:s,y:r});return{top:o.y,left:o.x,bottom:a.y,right:a.x}}function Ri(){return{x:{min:0,max:1},y:{min:0,max:1}}}function k0(i){return{x:Object.assign({},i.x),y:Object.assign({},i.y)}}var Cu={translate:0,scale:1,origin:0,originPoint:0};function Pu(){return{x:Object.assign({},Cu),y:Object.assign({},Cu)}}function Xp(i){var e=i.getProps(),t=e.drag,n=e._dragX;return t&&!n}function Lu(i,e){i.min=e.min,i.max=e.max}function z0(i,e){Lu(i.x,e.x),Lu(i.y,e.y)}function ca(i,e,t){var n=i-t,r=e*n;return t+r}function Du(i,e,t,n,r){return r!==void 0&&(i=ca(i,r,n)),ca(i,t,n)+e}function Zl(i,e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=1),i.min=Du(i.min,e,t,n,r),i.max=Du(i.max,e,t,n,r)}function H0(i,e){var t=e.x,n=e.y;Zl(i.x,t.translate,t.scale,t.originPoint),Zl(i.y,n.translate,n.scale,n.originPoint)}function Iu(i,e,t,n){var r=Ut(n,3),s=r[0],o=r[1],a=r[2];i.min=e.min,i.max=e.max;var l=t[a]!==void 0?t[a]:.5,c=un(e.min,e.max,l);Zl(i,t[s],t[o],c,t.scale)}var jp=["x","scaleX","originX"],$p=["y","scaleY","originY"];function Jl(i,e,t){Iu(i.x,e.x,t,jp),Iu(i.y,e.y,t,$p)}function Nu(i,e,t,n,r){return i-=e,i=ca(i,1/t,n),r!==void 0&&(i=ca(i,1/r,n)),i}function G0(i,e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=1),n===void 0&&(n=.5);var s=un(i.min,i.max,n)-e;i.min=Nu(i.min,e,t,s,r),i.max=Nu(i.max,e,t,s,r)}function Uu(i,e,t){var n=Ut(t,3),r=n[0],s=n[1],o=n[2];G0(i,e[r],e[s],e[o],e.scale)}function Yp(i,e){Uu(i.x,e,jp),Uu(i.y,e,$p)}function W0(i,e,t){var n=t.length;if(n){e.x=e.y=1;for(var r,s,o=0;o<n;o++)r=t[o],s=r.getLayoutState().delta,e.x*=s.x.scale,e.y*=s.y.scale,H0(i,s),Xp(r)&&Jl(i,i,r.getLatestValues())}}var X0=function(i){return ra(0,1,i)};function Ou(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=.01),wp(i,e)<t}function Xs(i){return i.max-i.min}function j0(i,e){var t=.5,n=Xs(i),r=Xs(e);return r>n?t=Hs(e.min,e.max-n,i.min):n>r&&(t=Hs(i.min,i.max-r,e.min)),X0(t)}function Fu(i,e,t,n){n===void 0&&(n=.5),i.origin=n,i.originPoint=un(e.min,e.max,i.origin),i.scale=Xs(t)/Xs(e),Ou(i.scale,1,1e-4)&&(i.scale=1),i.translate=un(t.min,t.max,i.origin)-i.originPoint,Ou(i.translate)&&(i.translate=0)}function qp(i,e,t,n){Fu(i.x,e.x,t.x,Bu(n.originX)),Fu(i.y,e.y,t.y,Bu(n.originY))}function Bu(i){return typeof i=="number"?i:.5}function Vu(i,e,t){i.min=t.min+e.min,i.max=i.min+Xs(e)}function $0(i,e){Vu(i.target.x,i.relativeTarget.x,e.target.x),Vu(i.target.y,i.relativeTarget.y,e.target.y)}var Ci=function(i){return i!==null&&typeof i=="object"&&i.getVelocity},Y0=function(){return{isEnabled:!1,isTargetLocked:!1,target:Ri(),targetFinal:Ri()}};function Kp(){return{isHydrated:!1,layout:Ri(),layoutCorrected:Ri(),treeScale:{x:1,y:1},delta:Pu(),deltaFinal:Pu(),deltaTransform:""}}var ku=Kp();function Aa(i,e,t){var n=i.x,r=i.y,s=n.translate/e.x,o=r.translate/e.y,a="translate3d("+s+"px, "+o+"px, 0) ";if(t){var l=t.rotate,c=t.rotateX,u=t.rotateY;l&&(a+="rotate("+l+") "),c&&(a+="rotateX("+c+") "),u&&(a+="rotateY("+u+") ")}return a+="scale("+n.scale+", "+r.scale+")",!t&&a===q0?"":a}function Zp(i){var e=i.deltaFinal;return e.x.origin*100+"% "+e.y.origin*100+"% 0"}var q0=Aa(ku.delta,ku.treeScale,{x:1,y:1}),Dc=function(i){return typeof i=="object"&&typeof i.start=="function"};function Jp(i,e){if(!Array.isArray(e))return!1;var t=e.length;if(t!==i.length)return!1;for(var n=0;n<t;n++)if(e[n]!==i[n])return!1;return!0}var Lt;(function(i){i.Animate="animate",i.Hover="whileHover",i.Tap="whileTap",i.Drag="whileDrag",i.Focus="whileFocus",i.Exit="exit"})(Lt||(Lt={}));var Ic=[Lt.Animate,Lt.Hover,Lt.Tap,Lt.Drag,Lt.Focus,Lt.Exit],K0=fn([],Ut(Ic)).reverse(),Z0=Ic.length;function J0(i){return function(e){return Promise.all(e.map(function(t){var n=t.animation,r=t.options;return D0(i,n,r)}))}}function Q0(i){var e=J0(i),t=tx(),n={},r=!0,s=function(u,f){var d=Ea(i,f);if(d){d.transition;var h=d.transitionEnd,g=ri(d,["transition","transitionEnd"]);u=Object.assign(Object.assign(Object.assign({},u),g),h)}return u};function o(u){return n[u]!==void 0}function a(u){e=u(i)}function l(u,f){for(var d,h=i.getProps(),g=i.getVariantContext(!0)||{},_=[],p=new Set,m={},x=1/0,v=function(S){var w=K0[S],N=t[w],y=(d=h[w])!==null&&d!==void 0?d:g[w],C=Sn(y),$=w===f?N.isActive:null;$===!1&&(x=S);var J=y===g[w]&&y!==h[w]&&C;if(J&&r&&i.manuallyAnimateOnMount&&(J=!1),N.protectedKeys=Object.assign({},m),!N.isActive&&$===null||!y&&!N.prevProp||Dc(y)||typeof y=="boolean")return"continue";var D=ex(N.prevProp,y)||w===f&&N.isActive&&!J&&C||S>x&&C,j=Array.isArray(y)?y:[y],V=j.reduce(s,{});$===!1&&(V={});var Z=N.prevResolvedValues,W=Z===void 0?{}:Z,q=Object.assign(Object.assign({},W),V),Q=function(k){D=!0,p.delete(k),N.needsAnimating[k]=!0};for(var ie in q){var de=V[ie],Ne=W[ie];m.hasOwnProperty(ie)||(de!==Ne?Ws(de)&&Ws(Ne)?Jp(de,Ne)?N.protectedKeys[ie]=!0:Q(ie):de!==void 0?Q(ie):p.add(ie):de!==void 0&&p.has(ie)?Q(ie):N.protectedKeys[ie]=!0)}N.prevProp=y,N.prevResolvedValues=V,N.isActive&&(m=Object.assign(Object.assign({},m),V)),r&&i.blockInitialAnimation&&(D=!1),D&&!J&&_.push.apply(_,fn([],Ut(j.map(function(k){return{animation:k,options:Object.assign({type:w},u)}}))))},M=0;M<Z0;M++)v(M);if(n=Object.assign({},m),p.size){var A={};p.forEach(function(S){var w=i.getBaseTarget(S);w!==void 0&&(A[S]=w)}),_.push({animation:A})}var E=!!_.length;return r&&h.initial===!1&&!i.manuallyAnimateOnMount&&(E=!1),r=!1,E?e(_):Promise.resolve()}function c(u,f,d){var h;return t[u].isActive===f?Promise.resolve():((h=i.variantChildren)===null||h===void 0||h.forEach(function(g){var _;return(_=g.animationState)===null||_===void 0?void 0:_.setActive(u,f)}),t[u].isActive=f,l(d,u))}return{isAnimated:o,animateChanges:l,setActive:c,setAnimateFunction:a,getState:function(){return t}}}function ex(i,e){return typeof e=="string"?e!==i:kp(e)?!Jp(e,i):!1}function ur(i){return i===void 0&&(i=!1),{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function tx(){var i;return i={},i[Lt.Animate]=ur(!0),i[Lt.Hover]=ur(),i[Lt.Tap]=ur(),i[Lt.Drag]=ur(),i[Lt.Focus]=ur(),i[Lt.Exit]=ur(),i}var go=["LayoutMeasure","BeforeLayoutMeasure","LayoutUpdate","ViewportBoxUpdate","Update","Render","AnimationComplete","LayoutAnimationComplete","AnimationStart","SetAxisTarget","Unmount"];function nx(){var i=go.map(function(){return new Ko}),e={},t={clearAllListeners:function(){return i.forEach(function(n){return n.clear()})},updatePropListeners:function(n){return go.forEach(function(r){var s;(s=e[r])===null||s===void 0||s.call(e);var o="on"+r,a=n[o];a&&(e[r]=t[o](a))})}};return i.forEach(function(n,r){t["on"+go[r]]=function(s){return n.add(s)},t["notify"+go[r]]=function(){for(var s=[],o=0;o<arguments.length;o++)s[o]=arguments[o];return n.notify.apply(n,fn([],Ut(s)))}}),t}function ix(i,e,t){var n;for(var r in e){var s=e[r],o=t[r];if(Ci(s))i.addValue(r,s);else if(Ci(o))i.addValue(r,Ji(s));else if(o!==s)if(i.hasValue(r)){var a=i.getValue(r);!a.hasAnimated&&a.set(s)}else i.addValue(r,Ji((n=i.getStaticValue(r))!==null&&n!==void 0?n:s))}for(var r in t)e[r]===void 0&&i.removeValue(r);return e}function rx(i,e,t,n){var r=i.delta,s=i.layout,o=i.layoutCorrected,a=i.treeScale,l=e.target;z0(o,s),W0(o,a,t),qp(r,o,l,n)}var Nc=function(i,e){return i.depth-e.depth},sx=function(){function i(){this.children=[],this.isDirty=!1}return i.prototype.add=function(e){Dp(this.children,e),this.isDirty=!0},i.prototype.remove=function(e){Ip(this.children,e),this.isDirty=!0},i.prototype.forEach=function(e){this.isDirty&&this.children.sort(Nc);for(var t=this.children.length,n=0;n<t;n++)e(this.children[n])},i}();function ox(i,e,t,n){i.min=un(e.min,t.min,n),i.max=un(e.max,t.max,n)}function zu(i,e){return{min:e.min-i.min,max:e.max-i.min}}function ua(i,e){return{x:zu(i.x,e.x),y:zu(i.y,e.y)}}function ax(i){var e=i.getProjectionParent();if(!e){i.rebaseProjectionTarget();return}var t=ua(e.getLayoutState().layout,i.getLayoutState().layout);sn(function(n){i.setProjectionTargetAxis(n,t[n].min,t[n].max,!0)})}var Qp=function(i){var e=i.treeType,t=e===void 0?"":e,n=i.build,r=i.getBaseTarget,s=i.makeTargetAnimatable,o=i.measureViewportBox,a=i.render,l=i.readValueFromInstance,c=i.resetTransform,u=i.restoreTransform,f=i.removeValueFromRenderState,d=i.sortNodePosition,h=i.scrapeMotionValuesFromProps;return function(g,_){var p=g.parent,m=g.props,x=g.presenceId,v=g.blockInitialAnimation,M=g.visualState;_===void 0&&(_={});var A=M.latestValues,E=M.renderState,S,w=nx(),N=Y0(),y,C=N,$=A,J,D=Kp(),j,V=!1,Z=new Map,W=new Map,q={},Q,ie=Object.assign({},A),de;function Ne(){S&&(te.isProjectionReady()&&(Jl(C.targetFinal,C.target,$),qp(D.deltaFinal,D.layoutCorrected,C.targetFinal,A)),k(),a(S,E))}function k(){var z=A;if(j&&j.isActive()){var Y=j.getCrossfadeState(te);Y&&(z=Y)}n(te,E,z,C,D,_,m)}function oe(){w.notifyUpdate(A)}function ge(){if(te.isProjectionReady()){var z=D.delta,Y=D.treeScale,xe=Y.x,Se=Y.y,Re=D.deltaTransform;rx(D,C,te.path,A),V&&te.notifyViewportBoxUpdate(C.target,z),V=!1;var st=Aa(z,Y);(st!==Re||xe!==Y.x||Se!==Y.y)&&te.scheduleRender(),D.deltaTransform=st}}function Ve(){te.layoutTree.forEach(cx)}function Pe(z,Y){var xe=Y.onChange(function(Re){A[z]=Re,m.onUpdate&&An.update(oe,!1,!0)}),Se=Y.onRenderRequest(te.scheduleRender);W.set(z,function(){xe(),Se()})}var ve=h(m);for(var at in ve){var Oe=ve[at];A[at]!==void 0&&Ci(Oe)&&Oe.set(A[at],!1)}var O=Ta(m),Tt=Hp(m),te=Object.assign(Object.assign({treeType:t,current:null,depth:p?p.depth+1:0,parent:p,children:new Set,path:p?fn(fn([],Ut(p.path)),[p]):[],layoutTree:p?p.layoutTree:new sx,presenceId:x,projection:N,variantChildren:Tt?new Set:void 0,isVisible:void 0,manuallyAnimateOnMount:!!(p!=null&&p.isMounted()),blockInitialAnimation:v,isMounted:function(){return!!S},mount:function(z){S=te.current=z,te.pointTo(te),Tt&&p&&!O&&(de=p==null?void 0:p.addVariantChild(te)),p==null||p.children.add(te)},unmount:function(){Rs.update(oe),Rs.render(Ne),Rs.preRender(te.updateLayoutProjection),W.forEach(function(z){return z()}),te.stopLayoutAnimation(),te.layoutTree.remove(te),de==null||de(),p==null||p.children.delete(te),J==null||J(),w.clearAllListeners()},addVariantChild:function(z){var Y,xe=te.getClosestVariantNode();if(xe)return(Y=xe.variantChildren)===null||Y===void 0||Y.add(z),function(){return xe.variantChildren.delete(z)}},sortNodePosition:function(z){return!d||t!==z.treeType?0:d(te.getInstance(),z.getInstance())},getClosestVariantNode:function(){return Tt?te:p==null?void 0:p.getClosestVariantNode()},scheduleUpdateLayoutProjection:p?p.scheduleUpdateLayoutProjection:function(){return An.preRender(te.updateTreeLayoutProjection,!1,!0)},getLayoutId:function(){return m.layoutId},getInstance:function(){return S},getStaticValue:function(z){return A[z]},setStaticValue:function(z,Y){return A[z]=Y},getLatestValues:function(){return A},setVisibility:function(z){te.isVisible!==z&&(te.isVisible=z,te.scheduleRender())},makeTargetAnimatable:function(z,Y){return Y===void 0&&(Y=!0),s(te,z,m,Y)},addValue:function(z,Y){te.hasValue(z)&&te.removeValue(z),Z.set(z,Y),A[z]=Y.get(),Pe(z,Y)},removeValue:function(z){var Y;Z.delete(z),(Y=W.get(z))===null||Y===void 0||Y(),W.delete(z),delete A[z],f(z,E)},hasValue:function(z){return Z.has(z)},getValue:function(z,Y){var xe=Z.get(z);return xe===void 0&&Y!==void 0&&(xe=Ji(Y),te.addValue(z,xe)),xe},forEachValue:function(z){return Z.forEach(z)},readValue:function(z){var Y;return(Y=A[z])!==null&&Y!==void 0?Y:l(S,z,_)},setBaseTarget:function(z,Y){ie[z]=Y},getBaseTarget:function(z){if(r){var Y=r(m,z);if(Y!==void 0&&!Ci(Y))return Y}return ie[z]}},w),{build:function(){return k(),E},scheduleRender:function(){An.render(Ne,!1,!0)},syncRender:Ne,setProps:function(z){m=z,w.updatePropListeners(z),q=ix(te,h(m),q)},getProps:function(){return m},getVariant:function(z){var Y;return(Y=m.variants)===null||Y===void 0?void 0:Y[z]},getDefaultTransition:function(){return m.transition},getVariantContext:function(z){if(z===void 0&&(z=!1),z)return p==null?void 0:p.getVariantContext();if(!O){var Y=(p==null?void 0:p.getVariantContext())||{};return m.initial!==void 0&&(Y.initial=m.initial),Y}for(var xe={},Se=0;Se<ux;Se++){var Re=em[Se],st=m[Re];(Sn(st)||st===!1)&&(xe[Re]=st)}return xe},enableLayoutProjection:function(){N.isEnabled=!0,te.layoutTree.add(te)},lockProjectionTarget:function(){N.isTargetLocked=!0},unlockProjectionTarget:function(){te.stopLayoutAnimation(),N.isTargetLocked=!1},getLayoutState:function(){return D},setCrossfader:function(z){j=z},isProjectionReady:function(){return N.isEnabled&&N.isHydrated&&D.isHydrated},startLayoutAnimation:function(z,Y,xe){xe===void 0&&(xe=!1);var Se=te.getProjectionAnimationProgress()[z],Re=xe?N.relativeTarget[z]:N.target[z],st=Re.min,R=Re.max,b=R-st;return Se.clearListeners(),Se.set(st),Se.set(st),Se.onChange(function(X){te.setProjectionTargetAxis(z,X,X+b,xe)}),te.animateMotionValue(z,Se,0,Y)},stopLayoutAnimation:function(){sn(function(z){return te.getProjectionAnimationProgress()[z].stop()})},measureViewportBox:function(z){z===void 0&&(z=!0);var Y=o(S,_);return z||Yp(Y,A),Y},getProjectionAnimationProgress:function(){return Q||(Q={x:Ji(0),y:Ji(0)}),Q},setProjectionTargetAxis:function(z,Y,xe,Se){Se===void 0&&(Se=!1);var Re;Se?(N.relativeTarget||(N.relativeTarget=Ri()),Re=N.relativeTarget[z]):(N.relativeTarget=void 0,Re=N.target[z]),N.isHydrated=!0,Re.min=Y,Re.max=xe,V=!0,w.notifySetAxisTarget()},rebaseProjectionTarget:function(z,Y){Y===void 0&&(Y=D.layout);var xe=te.getProjectionAnimationProgress(),Se=xe.x,Re=xe.y,st=!N.relativeTarget&&!N.isTargetLocked&&!Se.isAnimating()&&!Re.isAnimating();(z||st)&&sn(function(R){var b=Y[R],X=b.min,K=b.max;te.setProjectionTargetAxis(R,X,K)})},notifyLayoutReady:function(z){ax(te),te.notifyLayoutUpdate(D.layout,te.prevViewportBox||D.layout,z)},resetTransform:function(){return c(te,S,m)},restoreTransform:function(){return u(S,E)},updateLayoutProjection:ge,updateTreeLayoutProjection:function(){te.layoutTree.forEach(lx),An.preRender(Ve,!1,!0)},getProjectionParent:function(){if(y===void 0){for(var z=!1,Y=te.path.length-1;Y>=0;Y--){var xe=te.path[Y];if(xe.projection.isEnabled){z=xe;break}}y=z}return y},resolveRelativeTargetBox:function(){var z=te.getProjectionParent();if(!(!N.relativeTarget||!z)&&($0(N,z.projection),Xp(z))){var Y=N.target;Jl(Y,Y,z.getLatestValues())}},shouldResetTransform:function(){return!!m._layoutResetTransform},pointTo:function(z){C=z.projection,$=z.getLatestValues(),J==null||J(),J=to(z.onSetAxisTarget(te.scheduleUpdateLayoutProjection),z.onLayoutAnimationComplete(function(){var Y;te.isPresent?te.presence=ks.Present:(Y=te.layoutSafeToRemove)===null||Y===void 0||Y.call(te)}))},isPresent:!0,presence:ks.Entering});return te}};function lx(i){i.resolveRelativeTargetBox()}function cx(i){i.updateLayoutProjection()}var em=fn(["initial"],Ut(Ic)),ux=em.length,fx=new Set(["initial","animate","exit","style","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","onLayoutAnimationComplete","onViewportBoxUpdate","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","whileDrag","onPan","onPanStart","onPanEnd","onPanSessionStart","onTap","onTapStart","onTapCancel","onHoverStart","onHoverEnd","whileFocus","whileTap","whileHover"]);function fa(i){return fx.has(i)}const Pi=i=>or("Presence",i)||Rn(null);let dx=0;const hx=()=>dx++;function px(i){return i===null?!0:i.isPresent}const tm=(i=!1)=>{const e=zt(Pi)||Pi(i),t=_n(e)===null?void 0:hx();return Zs(()=>{_n(e)!==null&&_n(e).register(t)}),_n(e)===null?Np([!0,null]):n0(e,n=>!n.isPresent&&n.onExitComplete?[!1,()=>{var r;return(r=n.onExitComplete)==null?void 0:r.call(n,t)}]:[!0])},Hu=i=>or("LayoutGroup",i)||Rn(null);function nm(i){var e=i.projection.isEnabled;return e||i.shouldResetTransform()}function da(i,e){e===void 0&&(e=[]);var t=i.parent;return t&&da(t,e),nm(i)&&e.push(i),e}function mx(i){var e=[],t=function(n){nm(n)&&e.push(n),n.children.forEach(t)};return i.children.forEach(t),e.sort(Nc)}function Zo(i){if(!i.shouldResetTransform()){var e=i.getLayoutState();i.notifyBeforeLayoutMeasure(e.layout),e.isHydrated=!0,e.layout=i.measureViewportBox(),e.layoutCorrected=k0(e.layout),i.notifyLayoutMeasure(e.layout,i.prevViewportBox||e.layout),An.update(function(){return i.rebaseProjectionTarget()})}}function gx(i,e){i.shouldResetTransform()||(e||(i.prevViewportBox=i.measureViewportBox(!1)),i.rebaseProjectionTarget(!1,i.prevViewportBox))}var Ds=new Set;function Gu(i,e,t){i[t]||(i[t]=[]),i[t].push(e)}function Ql(i){return Ds.add(i),function(){return Ds.delete(i)}}function ec(){if(Ds.size){var i=0,e=[[]],t=[],n=function(a){return Gu(e,a,i)},r=function(a){Gu(t,a,i),i++};Ds.forEach(function(a){a(n,r),i=0}),Ds.clear(),An.postRender(function(){setTimeout(function(){return!1},10)});for(var s=t.length,o=0;o<=s;o++)e[o]&&e[o].forEach(Wu),t[o]&&t[o].forEach(Wu)}}var Wu=function(i){return i()},_x={layoutReady:function(i){return i.notifyLayoutReady()}};function im(){var i=new Set;return{add:function(e){return i.add(e)},flush:function(e){var t=e===void 0?_x:e,n=t.layoutReady,r=t.parent;Ql(function(s,o){var a=Array.from(i).sort(Nc),l=r?da(r):[];o(function(){var c=fn(fn([],Ut(l)),Ut(a));c.forEach(function(u){return u.resetTransform()})}),s(function(){a.forEach(Zo)}),o(function(){l.forEach(function(c){return c.restoreTransform()}),a.forEach(n)}),s(function(){a.forEach(function(c){c.isPresent&&(c.presence=ks.Present)})}),o(function(){Ir.preRender(),Ir.render()}),s(function(){An.postRender(function(){return a.forEach(vx)}),i.clear()})}),ec()}}}function vx(i){i.prevViewportBox=i.projection.target}var Xu=i=>or("SharedLayout",i)||Rn(im()),ju=()=>Rn(im());function fr(i){return!!i.forceUpdate}const $u=i=>or("Lazy",i)||Rn({strict:!1}),tr=i=>or("Motion",i)||Rn({}),xx=i=>({visualElement:i&1}),Yu=i=>({visualElement:i[0]});function yx(i){let e;const t=i[19].default,n=_t(t,i,i[18],Yu);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&262145)&&xt(n,t,r,r[18],e?vt(t,r[18],s,xx):yt(r[18]),Yu)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function Mx(i,e,t){let n,r,s,o,a,{$$slots:l={},$$scope:c}=e,{createVisualElement:u=void 0,props:f,Component:d,visualState:h,isCustom:g}=e;const _=zt(wi)||wi(g);Kt(i,_,w=>t(15,r=w));const p=zt(Pi)||Pi(g);Kt(i,p,w=>t(14,n=w));const m=zt($u)||$u(g);Kt(i,m,w=>t(20,s=w));const x=zt(tr)||tr(g);Kt(i,x,w=>t(17,a=w));let v=_n(x).visualElement;const M=zt(Hu)||Hu(g);Kt(i,M,w=>t(16,o=w));let A=o&&f.layoutId!==void 0?o+"-"+f.layoutId:f.layoutId,E;u||(u=s.renderer);let S=E;return bc(()=>{Xh().then(()=>{var w;(w=S.animationState)==null||w.animateChanges()})}),rr(()=>{S==null||S.notifyUnmount()}),i.$$set=w=>{"createVisualElement"in w&&t(6,u=w.createVisualElement),"props"in w&&t(7,f=w.props),"Component"in w&&t(8,d=w.Component),"visualState"in w&&t(9,h=w.visualState),"isCustom"in w&&t(10,g=w.isCustom),"$$scope"in w&&t(18,c=w.$$scope)},i.$$.update=()=>{i.$$.dirty&131072&&t(11,v=a.visualElement),i.$$.dirty&65664&&t(12,A=o&&f.layoutId!==void 0?o+"-"+f.layoutId:f.layoutId),i.$$.dirty&31680&&!E&&u&&t(13,E=u(d,{visualState:h,parent:v,props:{...f,layoutId:A},presenceId:n==null?void 0:n.id,blockInitialAnimation:(n==null?void 0:n.initial)===!1})),i.$$.dirty&8192&&t(0,S=E),i.$$.dirty&55425&&S&&(S.setProps({...r,...f,layoutId:A}),t(0,S.isPresent=px(n),S),t(0,S.isPresenceRoot=!v||v.presenceId!==(n==null?void 0:n.id),S),S.syncRender())},[S,_,p,m,x,M,u,f,d,h,g,v,A,E,n,r,o,a,c,l]}class bx extends rt{constructor(e){super(),it(this,e,Mx,yx,et,{createVisualElement:6,props:7,Component:8,visualState:9,isCustom:10})}}const Sx=bx;var Gn=function(i){return{isEnabled:function(e){return i.some(function(t){return!!e[t]})}}},tc={measureLayout:Gn(["layout","layoutId","drag"]),animation:Gn(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag"]),exit:Gn(["exit"]),drag:Gn(["drag","dragControls"]),focus:Gn(["whileFocus"]),hover:Gn(["whileHover","onHoverStart","onHoverEnd"]),tap:Gn(["whileTap","onTap","onTapStart","onTapCancel"]),pan:Gn(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),layoutAnimation:Gn(["layout","layoutId"])};function Ex(i){for(var e in i){var t=i[e];t!==null&&(tc[e].Component=t)}}const Tx=i=>({features:i&2}),qu=i=>({features:i[1]});function Ku(i){let e;const t=i[4].default,n=_t(t,i,i[3],qu);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&10)&&xt(n,t,r,r[3],e?vt(t,r[3],s,Tx):yt(r[3]),qu)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function Ax(i){let e,t,n=i[0]&&Ku(i);return{c(){n&&n.c(),e=Ai()},m(r,s){n&&n.m(r,s),be(r,e,s),t=!0},p(r,[s]){r[0]?n?(n.p(r,s),s&1&&ne(n,1)):(n=Ku(r),n.c(),ne(n,1),n.m(e.parentNode,e)):n&&(Fn(),re(n,1,1,()=>{n=null}),Bn())},i(r){t||(ne(n),t=!0)},o(r){re(n),t=!1},d(r){r&&Me(e),n&&n.d(r)}}}function wx(i,e,t){let{$$slots:n={},$$scope:r}=e;const s=Object.keys(tc),o=s.length;let{visualElement:a,props:l}=e,c=[];return i.$$set=u=>{"visualElement"in u&&t(0,a=u.visualElement),"props"in u&&t(2,l=u.props),"$$scope"in u&&t(3,r=u.$$scope)},i.$$.update=()=>{if(i.$$.dirty&7){t(1,c=[]);for(let u=0;u<o;u++){const f=s[u],{isEnabled:d,Component:h}=tc[f];d(l)&&h&&c.push({Component:h,key:f,props:l,visualElement:a})}}},[a,c,l,r,n]}class Rx extends rt{constructor(e){super(),it(this,e,wx,Ax,et,{visualElement:0,props:2})}}const Cx=Rx;function Px(i){let e;const t=i[3].default,n=_t(t,i,i[2],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&4)&&xt(n,t,r,r[2],e?vt(t,r[2],s,null):yt(r[2]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function Lx(i,e,t){let{$$slots:n={},$$scope:r}=e,{value:s,isCustom:o}=e,a=Rn(s);return Fl(tr,a),Up("Motion",o,a),rr(()=>{var l;(l=s==null?void 0:s.visualElement)==null||l.unmount()}),i.$$set=l=>{"value"in l&&t(0,s=l.value),"isCustom"in l&&t(1,o=l.isCustom),"$$scope"in l&&t(2,r=l.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&a.set(s)},[s,o,r,n]}class Dx extends rt{constructor(e){super(),it(this,e,Lx,Px,et,{value:0,isCustom:1})}}const Ix=Dx;var Uc=function(){return{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}},rm=function(){return Object.assign(Object.assign({},Uc()),{attrs:{}})},Nx=["","X","Y","Z"],Ux=["translate","scale","rotate","skew"],js=["transformPerspective","x","y","z"];Ux.forEach(function(i){return Nx.forEach(function(e){return js.push(i+e)})});function Ox(i,e){return js.indexOf(i)-js.indexOf(e)}var Fx=new Set(js);function wa(i){return Fx.has(i)}var Bx=new Set(["originX","originY","originZ"]);function sm(i){return Bx.has(i)}function om(i,e){var t=e.layout,n=e.layoutId;return wa(i)||sm(i)||(t||n!==void 0)&&!!Ls[i]}var Vx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"};function kx(i,e,t,n){var r=i.transform,s=i.transformKeys,o=e.enableHardwareAcceleration,a=o===void 0?!0:o,l=e.allowTransformNone,c=l===void 0?!0:l,u="";s.sort(Ox);for(var f=!1,d=s.length,h=0;h<d;h++){var g=s[h];u+=(Vx[g]||g)+"("+r[g]+") ",g==="z"&&(f=!0)}return!f&&a?u+="translateZ(0)":u=u.trim(),n?u=n(r,t?"":u):c&&t&&(u="none"),u}function zx(i){var e=i.originX,t=e===void 0?"50%":e,n=i.originY,r=n===void 0?"50%":n,s=i.originZ,o=s===void 0?0:s;return t+" "+r+" "+o}function am(i){return i.startsWith("--")}var Hx=function(i,e){return e&&typeof i=="number"?e.transform(i):i};function Oc(i,e,t,n,r,s,o,a){var l,c=i.style,u=i.vars,f=i.transform,d=i.transformKeys,h=i.transformOrigin;d.length=0;var g=!1,_=!1,p=!0;for(var m in e){var x=e[m];if(am(m)){u[m]=x;continue}var v=Fp[m],M=Hx(x,v);if(wa(m)){if(g=!0,f[m]=M,d.push(m),!p)continue;x!==((l=v.default)!==null&&l!==void 0?l:0)&&(p=!1)}else if(sm(m))h[m]=M,_=!0;else if(n&&t&&n.isHydrated&&Ls[m]){var A=Ls[m].process(x,n,t),E=Ls[m].applyTo;if(E)for(var S=E.length,w=0;w<S;w++)c[E[w]]=A;else c[m]=A}else c[m]=M}n&&t&&o&&a?(c.transform=o(n.deltaFinal,n.treeScale,g?f:void 0),s&&(c.transform=s(f,c.transform)),c.transformOrigin=a(n)):(g&&(c.transform=kx(i,r,p,s)),_&&(c.transformOrigin=zx(h)))}const Gx=i=>({styles:i&1}),Zu=i=>({styles:i[0]});function Wx(i){let e;const t=i[5].default,n=_t(t,i,i[4],Zu);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&17)&&xt(n,t,r,r[4],e?vt(t,r[4],s,Gx):yt(r[4]),Zu)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function Xx(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{visualState:o,isStatic:a,props:l}=e;const c=()=>{let u=Uc();Oc(u,o,void 0,void 0,{enableHardwareAcceleration:!a},l.transformTemplate);const{vars:f,style:d}=u;return{...f,...d}};return i.$$set=u=>{"visualState"in u&&t(1,o=u.visualState),"isStatic"in u&&t(2,a=u.isStatic),"props"in u&&t(3,l=u.props),"$$scope"in u&&t(4,s=u.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&t(0,n=c())},[n,o,a,l,s,r]}class jx extends rt{constructor(e){super(),it(this,e,Xx,Wx,et,{visualState:1,isStatic:2,props:3})}}const $x=jx,Yx=i=>({styles:i&522}),Ju=i=>({styles:i[4](i[9],i[1],i[3])});function qx(i){let e;const t=i[6].default,n=_t(t,i,i[7],Ju);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&650)&&xt(n,t,r,r[7],e?vt(t,r[7],s,Yx):yt(r[7]),Ju)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function Kx(i){let e,t;return e=new $x({props:{props:i[1],visualState:i[0],isStatic:i[2],$$slots:{default:[qx,({styles:n})=>({9:n}),({styles:n})=>n?512:0]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,[r]){const s={};r&2&&(s.props=n[1]),r&1&&(s.visualState=n[0]),r&4&&(s.isStatic=n[2]),r&650&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function lm(i,e,t){for(const n in e)!Ci(e[n])&&!om(n,t)&&(i[n]=e[n])}function Zx(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{visualState:o,props:a,isStatic:l}=e,c={};const u=lm,f=d=>(Object.assign(c,d),a.transformValues&&t(3,c=a.transformValues(c)),c);return i.$$set=d=>{"visualState"in d&&t(0,o=d.visualState),"props"in d&&t(1,a=d.props),"isStatic"in d&&t(2,l=d.isStatic),"$$scope"in d&&t(7,s=d.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&t(5,n=a.style||{}),i.$$.dirty&42&&u(c,n,a)},[o,a,l,c,f,n,r,s]}class Jx extends rt{constructor(e){super(),it(this,e,Zx,Kx,et,{visualState:0,props:1,isStatic:2})}}const Qx=Jx,ey=i=>({visualProps:i&65}),Qu=i=>({visualProps:i[3](i[6],i[0])});function ty(i){let e;const t=i[4].default,n=_t(t,i,i[5],Qu);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&97)&&xt(n,t,r,r[5],e?vt(t,r[5],s,ey):yt(r[5]),Qu)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function ny(i){let e,t;return e=new Qx({props:{visualState:i[1],props:i[0],isStatic:i[2],$$slots:{default:[ty,({styles:n})=>({6:n}),({styles:n})=>n?64:0]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,[r]){const s={};r&2&&(s.visualState=n[1]),r&1&&(s.props=n[0]),r&4&&(s.isStatic=n[2]),r&97&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function iy(i,e,t){let{$$slots:n={},$$scope:r}=e,{props:s,visualState:o,isStatic:a}=e;const l=(c,u)=>{let f={};return u.drag&&(f.draggable=!1,c.userSelect=c.WebkitUserSelect=c.WebkitTouchCallout="none",c.touchAction=u.drag===!0?"none":`pan-${u.drag==="x"?"y":"x"}`),f.style=c,f};return i.$$set=c=>{"props"in c&&t(0,s=c.props),"visualState"in c&&t(1,o=c.visualState),"isStatic"in c&&t(2,a=c.isStatic),"$$scope"in c&&t(5,r=c.$$scope)},[s,o,a,l,n,r]}class ry extends rt{constructor(e){super(),it(this,e,iy,ny,et,{props:0,visualState:1,isStatic:2})}}const ef=ry;function tf(i,e,t){return typeof i=="string"?i:ke.transform(e+t*i)}function sy(i,e,t){var n=tf(e,i.x,i.width),r=tf(t,i.y,i.height);return n+" "+r}var ja=function(i,e){return ke.transform(i*e)},oy={offset:"stroke-dashoffset",array:"stroke-dasharray"},ay={offset:"strokeDashoffset",array:"strokeDasharray"};function ly(i,e,t,n,r,s){n===void 0&&(n=1),r===void 0&&(r=0),s===void 0&&(s=!0);var o=s?oy:ay;i[o.offset]=ja(-r,e);var a=ja(t,e),l=ja(n,e);i[o.array]=a+" "+l}function Fc(i,e,t,n,r,s,o,a){var l=e.attrX,c=e.attrY,u=e.originX,f=e.originY,d=e.pathLength,h=e.pathSpacing,g=h===void 0?1:h,_=e.pathOffset,p=_===void 0?0:_,m=ri(e,["attrX","attrY","originX","originY","pathLength","pathSpacing","pathOffset"]);Oc(i,m,t,n,r,s,o,a),i.attrs=i.style,i.style={};var x=i.attrs,v=i.style,M=i.dimensions,A=i.totalPathLength;x.transform&&(M&&(v.transform=x.transform),delete x.transform),M&&(u!==void 0||f!==void 0||v.transform)&&(v.transformOrigin=sy(M,u!==void 0?u:.5,f!==void 0?f:.5)),l!==void 0&&(x.x=l),c!==void 0&&(x.y=c),A!==void 0&&d!==void 0&&ly(x,A,d,g,p,!1)}const cy=i=>({visualProps:i&1}),nf=i=>({visualProps:i[0]});function uy(i){let e;const t=i[4].default,n=_t(t,i,i[3],nf);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&9)&&xt(n,t,r,r[3],e?vt(t,r[3],s,cy):yt(r[3]),nf)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function fy(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{visualState:o,props:a}=e,l=()=>{const c=rm();return Fc(c,o,void 0,void 0,{enableHardwareAcceleration:!1},a.transformTemplate),{...c.attrs,style:{...c.style}}};return i.$$set=c=>{"visualState"in c&&t(1,o=c.visualState),"props"in c&&t(2,a=c.props),"$$scope"in c&&t(3,s=c.$$scope)},i.$$.update=()=>{if(i.$$.dirty&2&&t(0,n=l()),i.$$.dirty&5&&a.style){const c={};lm(c,a.style,a),t(0,n.style={...c,...n.style},n)}},[n,o,a,s,r]}class dy extends rt{constructor(e){super(),it(this,e,fy,uy,et,{visualState:1,props:2})}}const rf=dy;var cm=function(i){return!fa(i)};try{var hy=require("@emotion/is-prop-valid").default;cm=function(i){return i.startsWith("on")?!fa(i):hy(i)}}catch{}function py(i,e,t){var n={};for(var r in i)(cm(r)||t===!0&&fa(r)||!e&&!fa(r))&&(n[r]=i[r]);return n}const my=i=>({props:i&2064}),sf=i=>({motion:i[5],props:{...i[4],...i[11]}});function gy(i){let e;const t=i[9].default,n=_t(t,i,i[10],sf);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&3088)&&xt(n,t,r,r[10],e?vt(t,r[10],s,my):yt(r[10]),sf)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function _y(i){let e,t,n;var r=i[2]==="SVG"?rf:ef;function s(o,a){return{props:{visualState:o[1],isStatic:o[3],props:o[0],$$slots:{default:[gy,({visualProps:l})=>({11:l}),({visualProps:l})=>l?2048:0]},$$scope:{ctx:o}}}}return r&&(e=na(r,s(i))),{c(){e&&we(e.$$.fragment),t=Ai()},m(o,a){e&&Te(e,o,a),be(o,t,a),n=!0},p(o,[a]){if(a&4&&r!==(r=o[2]==="SVG"?rf:ef)){if(e){Fn();const l=e;re(l.$$.fragment,1,0,()=>{Ae(l,1)}),Bn()}r?(e=na(r,s(o)),we(e.$$.fragment),ne(e.$$.fragment,1),Te(e,t.parentNode,t)):e=null}else if(r){const l={};a&2&&(l.visualState=o[1]),a&8&&(l.isStatic=o[3]),a&1&&(l.props=o[0]),a&3088&&(l.$$scope={dirty:a,ctx:o}),e.$set(l)}},i(o){n||(e&&ne(e.$$.fragment,o),n=!0)},o(o){e&&re(e.$$.fragment,o),n=!1},d(o){o&&Me(t),e&&Ae(e,o)}}}function vy(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{props:o,visualState:a,Component:l,forwardMotionProps:c=!1,isStatic:u,ref:f,targetEl:d=void 0}=e;const h=g=>{f(g)};return i.$$set=g=>{"props"in g&&t(0,o=g.props),"visualState"in g&&t(1,a=g.visualState),"Component"in g&&t(2,l=g.Component),"forwardMotionProps"in g&&t(6,c=g.forwardMotionProps),"isStatic"in g&&t(3,u=g.isStatic),"ref"in g&&t(7,f=g.ref),"targetEl"in g&&t(8,d=g.targetEl),"$$scope"in g&&t(10,s=g.$$scope)},i.$$.update=()=>{i.$$.dirty&69&&t(4,n=py(o,typeof l=="string",c)),i.$$.dirty&256&&d&&h(d)},[o,a,l,u,n,h,c,f,d,r,s]}class xy extends rt{constructor(e){super(),it(this,e,vy,_y,et,{props:0,visualState:1,Component:2,forwardMotionProps:6,isStatic:3,ref:7,targetEl:8})}}const yy=xy;function um(i,e){var t=i.getBoundingClientRect();return Wp(V0(t,e))}function nc(i){return typeof i=="string"&&i.startsWith("var(--")}var fm=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function My(i){var e=fm.exec(i);if(!e)return[,];var t=Ut(e,3),n=t[1],r=t[2];return[n,r]}function ic(i,e,t){var n=Ut(My(i),2),r=n[0],s=n[1];if(r){var o=window.getComputedStyle(e).getPropertyValue(r);return o?o.trim():nc(s)?ic(s,e):s}}function by(i,e,t){var n,r=ri(e,[]),s=i.getInstance();if(!(s instanceof HTMLElement))return{target:r,transitionEnd:t};t&&(t=Object.assign({},t)),i.forEachValue(function(c){var u=c.get();if(nc(u)){var f=ic(u,s);f&&c.set(f)}});for(var o in r){var a=r[o];if(nc(a)){var l=ic(a,s);l&&(r[o]=l,t&&((n=t[o])!==null&&n!==void 0||(t[o]=a)))}}return{target:r,transitionEnd:t}}var Sy=new Set(["width","height","top","left","right","bottom","x","y"]),dm=function(i){return Sy.has(i)},Ey=function(i){return Object.keys(i).some(dm)},hm=function(i,e){i.set(e,!1),i.set(e)},of=function(i){return i===sr||i===ke},af;(function(i){i.width="width",i.height="height",i.left="left",i.right="right",i.top="top",i.bottom="bottom"})(af||(af={}));var lf=function(i,e){return parseFloat(i.split(", ")[e])},cf=function(i,e){return function(t,n){var r=n.transform;if(r==="none"||!r)return 0;var s=r.match(/^matrix3d\((.+)\)$/);if(s)return lf(s[1],e);var o=r.match(/^matrix\((.+)\)$/);return o?lf(o[1],i):0}},Ty=new Set(["x","y","z"]),Ay=js.filter(function(i){return!Ty.has(i)});function wy(i){var e=[];return Ay.forEach(function(t){var n=i.getValue(t);n!==void 0&&(e.push([t,n.get()]),n.set(t.startsWith("scale")?1:0))}),e.length&&i.syncRender(),e}var uf={width:function(i){var e=i.x;return e.max-e.min},height:function(i){var e=i.y;return e.max-e.min},top:function(i,e){var t=e.top;return parseFloat(t)},left:function(i,e){var t=e.left;return parseFloat(t)},bottom:function(i,e){var t=i.y,n=e.top;return parseFloat(n)+(t.max-t.min)},right:function(i,e){var t=i.x,n=e.left;return parseFloat(n)+(t.max-t.min)},x:cf(4,13),y:cf(5,14)},Ry=function(i,e,t){var n=e.measureViewportBox(),r=e.getInstance(),s=getComputedStyle(r),o=s.display,a=s.top,l=s.left,c=s.bottom,u=s.right,f=s.transform,d={top:a,left:l,bottom:c,right:u,transform:f};o==="none"&&e.setStaticValue("display",i.display||"block"),e.syncRender();var h=e.measureViewportBox();return t.forEach(function(g){var _=e.getValue(g);hm(_,uf[g](n,d)),i[g]=uf[g](h,s)}),i},Cy=function(i,e,t,n){t===void 0&&(t={}),n===void 0&&(n={}),e=Object.assign({},e),n=Object.assign({},n);var r=Object.keys(e).filter(dm),s=[],o=!1,a=[];if(r.forEach(function(c){var u=i.getValue(c);if(i.hasValue(c)){var f=t[c],d=e[c],h=Xa(f),g;if(Ws(d))for(var _=d.length,p=d[0]===null?1:0;p<_;p++)g||(g=Xa(d[p]));else g=Xa(d);if(h!==g)if(of(h)&&of(g)){var m=u.get();typeof m=="string"&&u.set(parseFloat(m)),typeof d=="string"?e[c]=parseFloat(d):Array.isArray(d)&&g===ke&&(e[c]=d.map(parseFloat))}else h!=null&&h.transform&&(g!=null&&g.transform)&&(f===0||d===0)?f===0?u.set(g.transform(f)):e[c]=h.transform(d):(o||(s=wy(i),o=!0),a.push(c),n[c]=n[c]!==void 0?n[c]:e[c],hm(u,d))}}),a.length){var l=Ry(e,i,a);return s.length&&s.forEach(function(c){var u=Ut(c,2),f=u[0],d=u[1];i.getValue(f).set(d)}),i.syncRender(),{target:l,transitionEnd:n}}else return{target:e,transitionEnd:n}};function Py(i,e,t,n){return Ey(e)?Cy(i,e,t,n):{target:e,transitionEnd:n}}var Ly=function(i,e,t,n){var r=by(i,e,n);return e=r.target,n=r.transitionEnd,Py(i,e,t,n)};function Bc(i){var e=i.style,t={};for(var n in e)(Ci(e[n])||om(n,i))&&(t[n]=e[n]);return t}function pm(i,e){var t=e.style,n=e.vars;Object.assign(i.style,t);for(var r in n)i.style.setProperty(r,n[r])}function Dy(i){return window.getComputedStyle(i)}var mm={treeType:"dom",readValueFromInstance:function(i,e){if(wa(e)){var t=Cc(e);return t&&t.default||0}else{var n=Dy(i);return(am(e)?n.getPropertyValue(e):n[e])||0}},sortNodePosition:function(i,e){return i.compareDocumentPosition(e)&2?1:-1},getBaseTarget:function(i,e){var t;return(t=i.style)===null||t===void 0?void 0:t[e]},measureViewportBox:function(i,e){var t=e.transformPagePoint;return um(i,t)},resetTransform:function(i,e,t){var n=t.transformTemplate;e.style.transform=n?n({},""):"none",i.scheduleRender()},restoreTransform:function(i,e){i.style.transform=e.style.transform},removeValueFromRenderState:function(i,e){var t=e.vars,n=e.style;delete t[i],delete n[i]},makeTargetAnimatable:function(i,e,t,n){var r=t.transformValues;n===void 0&&(n=!0);var s=e.transition,o=e.transitionEnd,a=ri(e,["transition","transitionEnd"]),l=L0(a,s||{},i);if(r&&(o&&(o=r(o)),a&&(a=r(a)),l&&(l=r(l))),n){C0(i,a,l);var c=Ly(i,a,l,o);o=c.transitionEnd,a=c.target}return Object.assign({transition:s,transitionEnd:o},a)},scrapeMotionValuesFromProps:Bc,build:function(i,e,t,n,r,s,o){i.isVisible!==void 0&&(e.style.visibility=i.isVisible?"visible":"hidden");var a=n.isEnabled&&r.isHydrated;Oc(e,t,n,r,s,o.transformTemplate,a?Aa:void 0,a?Zp:void 0)},render:pm},Iy=Qp(mm);function gm(i){var e=Bc(i);for(var t in i)if(Ci(i[t])){var n=t==="x"||t==="y"?"attr"+t.toUpperCase():t;e[n]=i[t]}return e}var Ny=/([a-z])([A-Z])/g,Uy="$1-$2",_m=function(i){return i.replace(Ny,Uy).toLowerCase()},vm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox"]);function xm(i,e){pm(i,e);for(var t in e.attrs)i.setAttribute(vm.has(t)?t:_m(t),e.attrs[t])}var Oy=Qp(Object.assign(Object.assign({},mm),{getBaseTarget:function(i,e){return i[e]},readValueFromInstance:function(i,e){var t;return wa(e)?((t=Cc(e))===null||t===void 0?void 0:t.default)||0:(e=vm.has(e)?e:_m(e),i.getAttribute(e))},scrapeMotionValuesFromProps:gm,build:function(i,e,t,n,r,s,o){var a=n.isEnabled&&r.isHydrated;Fc(e,t,n,r,s,o.transformTemplate,a?Aa:void 0,a?Zp:void 0)},render:xm})),Fy=function(i,e){return i==="SVG"?Oy(e,{enableHardwareAcceleration:!1}):Iy(e,{enableHardwareAcceleration:!0})},By={scrapeMotionValuesFromProps:gm,createRenderState:rm,onMount:function(i,e,t){var n=t.renderState,r=t.latestValues;try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}Vy(e)&&(n.totalPathLength=e.getTotalLength()),Fc(n,r,void 0,void 0,{enableHardwareAcceleration:!1},i.transformTemplate),xm(e,n)}};function Vy(i){return i.tagName==="path"}var ky={scrapeMotionValuesFromProps:Bc,createRenderState:Uc};function ff(i,e){if(Ta(i)){var t=i.initial,n=i.animate;return{initial:t===!1||Sn(t)?t:void 0,animate:Sn(n)?n:void 0}}return i.inherit!==!1?e||{}:{}}const zy=i=>({value:i&1}),df=i=>({value:i[0]});function Hy(i){let e;const t=i[9].default,n=_t(t,i,i[8],df);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&257)&&xt(n,t,r,r[8],e?vt(t,r[8],s,zy):yt(r[8]),df)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function Gy(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{props:o,isStatic:a,isCustom:l}=e,c=zt(tr)||tr(l);Kt(i,c,_=>t(7,n=_));let{initial:u,animate:f}=ff(o,_n(c));const d=_=>Array.isArray(_)?_.join(" "):_,h=()=>({initial:u,animate:f});let g=h();return i.$$set=_=>{"props"in _&&t(2,o=_.props),"isStatic"in _&&t(3,a=_.isStatic),"isCustom"in _&&t(4,l=_.isCustom),"$$scope"in _&&t(8,s=_.$$scope)},i.$$.update=()=>{i.$$.dirty&132&&t(5,{initial:u,animate:f}=ff(o,n),u,(t(6,f),t(2,o),t(7,n))),i.$$.dirty&104&&a&&t(0,g=h(d(u),d(f)))},[g,c,o,a,l,u,f,n,s,r]}class Wy extends rt{constructor(e){super(),it(this,e,Gy,Hy,et,{props:2,isStatic:3,isCustom:4})}}const Xy=Wy;function jy(i){var e=Ci(i)?i.get():i;return y0(e)?e.toValue():e}const $y=i=>({state:i&1}),hf=i=>({state:i[0]});function Yy(i){let e;const t=i[10].default,n=_t(t,i,i[9],hf);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&513)&&xt(n,t,r,r[9],e?vt(t,r[9],s,$y):yt(r[9]),hf)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}const pf=({scrapeMotionValuesFromProps:i,createRenderState:e,onMount:t},n,r,s)=>{const o={latestValues:qy(n,r,s,i),renderState:e()};return t&&(o.mount=a=>t(n,a,o)),o};function qy(i,e,t,n){const r={},s=(t==null?void 0:t.initial)===!1,o=n(i);for(const d in o)r[d]=jy(o[d]);let{initial:a,animate:l}=i;const c=Ta(i),u=Hp(i);e&&u&&!c&&i.inherit!==!1&&(a??(a=e.initial),l??(l=e.animate));const f=s||a===!1?l:a;return f&&typeof f!="boolean"&&!Dc(f)&&(Array.isArray(f)?f:[f]).forEach(h=>{const g=zp(i,h);if(!g)return;const{transitionEnd:_,transition:p,...m}=g;for(const x in m)r[x]=m[x];for(const x in _)r[x]=_[x]}),r}function Ky(i,e,t){let n,r,{$$slots:s={},$$scope:o}=e,{config:a,props:l,isStatic:c,isCustom:u}=e;const f=zt(tr)||tr(u);Kt(i,f,_=>t(8,r=_));const d=zt(Pi)||Pi(u);Kt(i,d,_=>t(7,n=_));let h=pf(a,l,_n(f),_n(d));const g=pf;return i.$$set=_=>{"config"in _&&t(3,a=_.config),"props"in _&&t(4,l=_.props),"isStatic"in _&&t(5,c=_.isStatic),"isCustom"in _&&t(6,u=_.isCustom),"$$scope"in _&&t(9,o=_.$$scope)},i.$$.update=()=>{i.$$.dirty&440&&c&&t(0,h=g(a,l,r,n))},[h,f,d,a,l,c,u,n,r,o,s]}class Zy extends rt{constructor(e){super(),it(this,e,Ky,Yy,et,{config:3,props:4,isStatic:5,isCustom:6})}}const Jy=Zy;function rc(i){return typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function mf(i,e,t){return function(n){var r;n&&((r=i.mount)===null||r===void 0||r.call(i,n)),e&&(n?e.mount(n):e.unmount()),t&&(typeof t=="function"?t(n):rc(t)&&(t.current=n))}}function gf(i,e,t){const n=i.slice();return n[21]=e[t],n}const Qy=i=>({motion:i&16777216,props:i&33554432}),_f=i=>({motion:i[24],props:i[25]});function eM(i){let e;const t=i[14].default,n=_t(t,i,i[15],_f);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&50364416)&&xt(n,t,r,r[15],e?vt(t,r[15],s,Qy):yt(r[15]),_f)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function tM(i){let e,t;return e=new yy({props:{Component:i[6],props:i[4],ref:mf(i[18],i[17].visualElement,i[1]),visualState:i[18],isStatic:i[3],forwardMotionProps:i[0],$$slots:{default:[eM,({motion:n,props:r})=>({24:n,25:r}),({motion:n,props:r})=>(n?16777216:0)|(r?33554432:0)]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,r){const s={};r&16&&(s.props=n[4]),r&393218&&(s.ref=mf(n[18],n[17].visualElement,n[1])),r&262144&&(s.visualState=n[18]),r&8&&(s.isStatic=n[3]),r&1&&(s.forwardMotionProps=n[0]),r&50364416&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function vf(i){let e=[],t=new Map,n,r,s=ei(i[20]);const o=a=>a[21].key;for(let a=0;a<s.length;a+=1){let l=gf(i,s,a),c=o(l);t.set(c,e[a]=xf(c,l))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();n=Ai()},m(a,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(a,l);be(a,n,l),r=!0},p(a,l){l&1048608&&(s=ei(a[20]),Fn(),e=Yh(e,l,o,1,a,s,t,n.parentNode,$h,xf,n,gf),Bn())},i(a){if(!r){for(let l=0;l<s.length;l+=1)ne(e[l]);r=!0}},o(a){for(let l=0;l<e.length;l+=1)re(e[l]);r=!1},d(a){a&&Me(n);for(let l=0;l<e.length;l+=1)e[l].d(a)}}}function xf(i,e){let t,n,r,s;var o=e[21].Component;function a(l,c){return{props:{props:l[21].props,visualElement:l[21].visualElement,isCustom:l[5]}}}return o&&(n=na(o,a(e))),{key:i,first:null,c(){t=Ai(),n&&we(n.$$.fragment),r=Ai(),this.first=t},m(l,c){be(l,t,c),n&&Te(n,l,c),be(l,r,c),s=!0},p(l,c){if(e=l,c&1048576&&o!==(o=e[21].Component)){if(n){Fn();const u=n;re(u.$$.fragment,1,0,()=>{Ae(u,1)}),Bn()}o?(n=na(o,a(e)),we(n.$$.fragment),ne(n.$$.fragment,1),Te(n,r.parentNode,r)):n=null}else if(o){const u={};c&1048576&&(u.props=e[21].props),c&1048576&&(u.visualElement=e[21].visualElement),n.$set(u)}},i(l){s||(n&&ne(n.$$.fragment,l),s=!0)},o(l){n&&re(n.$$.fragment,l),s=!1},d(l){l&&(Me(t),Me(r)),n&&Ae(n,l)}}}function nM(i){let e,t,n,r;e=new Ix({props:{value:i[17],isCustom:i[5],$$slots:{default:[tM]},$$scope:{ctx:i}}});let s=i[2]&&vf(i);return{c(){we(e.$$.fragment),t=ut(),s&&s.c(),n=Ai()},m(o,a){Te(e,o,a),be(o,t,a),s&&s.m(o,a),be(o,n,a),r=!0},p(o,a){const l={};a&131072&&(l.value=o[17]),a&426011&&(l.$$scope={dirty:a,ctx:o}),e.$set(l),o[2]?s?(s.p(o,a),a&4&&ne(s,1)):(s=vf(o),s.c(),ne(s,1),s.m(n.parentNode,n)):s&&(Fn(),re(s,1,1,()=>{s=null}),Bn())},i(o){r||(ne(e.$$.fragment,o),ne(s),r=!0)},o(o){re(e.$$.fragment,o),re(s),r=!1},d(o){o&&(Me(t),Me(n)),Ae(e,o),s&&s.d(o)}}}function iM(i){let e,t;return e=new Cx({props:{visualElement:i[10](i[17],i[19]),props:i[4],$$slots:{default:[nM,({features:n})=>({20:n}),({features:n})=>n?1048576:0]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,r){const s={};r&655360&&(s.visualElement=n[10](n[17],n[19])),r&16&&(s.props=n[4]),r&1474591&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function rM(i){let e,t;return e=new Sx({props:{Component:i[6],visualState:i[18],createVisualElement:i[7],props:i[4],isCustom:i[5],$$slots:{default:[iM,({visualElement:n})=>({19:n}),({visualElement:n})=>n?524288:0]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,r){const s={};r&262144&&(s.visualState=n[18]),r&16&&(s.props=n[4]),r&950303&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function sM(i){let e,t;return e=new Jy({props:{config:i[8],props:i[4],isStatic:i[3],isCustom:i[5],$$slots:{default:[rM,({state:n})=>({18:n}),({state:n})=>n?262144:0]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,r){const s={};r&16&&(s.props=n[4]),r&8&&(s.isStatic=n[3]),r&426015&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function oM(i){let e,t;return e=new Xy({props:{props:i[4],isStatic:i[3],isCustom:i[5],$$slots:{default:[sM,({value:n})=>({17:n}),({value:n})=>n?131072:0]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,r){const s={};r&16&&(s.props=n[4]),r&8&&(s.isStatic=n[3]),r&163871&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function aM(i){let e,t;return e=new a0({props:{isCustom:i[5],$$slots:{default:[oM]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,[r]){const s={};r&32799&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function lM(i,e,t){let n,r;const s=["isSVG","forwardMotionProps","externalRef","targetEl"];let o=lu(e,s),a,{$$slots:l={},$$scope:c}=e,{isSVG:u=!1,forwardMotionProps:f=!1,externalRef:d=void 0,targetEl:h=void 0}=e;const g=h;let _=u?"SVG":"DOM",p=Fy,m=u?By:ky;const x=zt(wi)||wi(g);Kt(i,x,A=>t(13,a=A));let v=!1;const M=(A,E)=>(A.visualElement=E,E);return Zs(()=>t(2,v=!0)),i.$$set=A=>{e=Qn(Qn({},e),Fs(A)),t(16,o=lu(e,s)),"isSVG"in A&&t(11,u=A.isSVG),"forwardMotionProps"in A&&t(0,f=A.forwardMotionProps),"externalRef"in A&&t(1,d=A.externalRef),"targetEl"in A&&t(12,h=A.targetEl),"$$scope"in A&&t(15,c=A.$$scope)},i.$$.update=()=>{t(4,n=o),i.$$.dirty&8192&&t(3,{isStatic:r}=a||{},r)},[f,d,v,r,n,g,_,p,m,x,M,u,h,a,l,c]}class cM extends rt{constructor(e){super(),it(this,e,lM,aM,et,{isSVG:11,forwardMotionProps:0,externalRef:1,targetEl:12})}}function uM(i){let e;const t=i[5].default,n=_t(t,i,i[4],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&16)&&xt(n,t,r,r[4],e?vt(t,r[4],s,null):yt(r[4]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function Vc(i,e,t,n){return i.addEventListener(e,t,n),function(){return i.removeEventListener(e,t,n)}}function fM(i,e,t){let{$$slots:n={},$$scope:r}=e,{ref:s,eventName:o,handler:a=void 0,options:l=void 0}=e,c=()=>{};const u=()=>{if(c(),!s)return()=>{};const f=s.current;return a&&f?Vc(f,o,a,l):()=>{}};return rr(c),i.$$set=f=>{"ref"in f&&t(0,s=f.ref),"eventName"in f&&t(1,o=f.eventName),"handler"in f&&t(2,a=f.handler),"options"in f&&t(3,l=f.options),"$$scope"in f&&t(4,r=f.$$scope)},i.$$.update=()=>{i.$$.dirty&15&&(c=u())},[s,o,a,l,r,n]}class dM extends rt{constructor(e){super(),it(this,e,fM,uM,et,{ref:0,eventName:1,handler:2,options:3})}}const kc=dM;function ym(i){return typeof PointerEvent<"u"&&i instanceof PointerEvent?i.pointerType==="mouse":i instanceof MouseEvent}function Mm(i){var e=!!i.touches;return e}function hM(i){return function(e){var t=e instanceof MouseEvent,n=!t||t&&e.button===0;n&&i(e)}}var pM={pageX:0,pageY:0};function mM(i,e){e===void 0&&(e="page");var t=i.touches[0]||i.changedTouches[0],n=t||pM;return{x:n[e+"X"],y:n[e+"Y"]}}function gM(i,e){return e===void 0&&(e="page"),{x:i[e+"X"],y:i[e+"Y"]}}function zc(i,e){return e===void 0&&(e="page"),{point:Mm(i)?mM(i,e):gM(i,e)}}function _M(i){return zc(i,"client")}var sc=function(i,e){e===void 0&&(e=!1);var t=function(n){return i(n,zc(n))};return e?hM(t):t},Hc=typeof window<"u",vM=function(){return Hc&&window.onpointerdown===null},xM=function(){return Hc&&window.ontouchstart===null},yM=function(){return Hc&&window.onmousedown===null};function MM(i){let e;const t=i[4].default,n=_t(t,i,i[5],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&32)&&xt(n,t,r,r[5],e?vt(t,r[5],s,null):yt(r[5]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function bM(i){let e,t;return e=new kc({props:{ref:i[0],eventName:oc(i[1]),handler:i[2]&&sc(i[2],i[1]==="pointerdown"),options:i[3],$$slots:{default:[MM]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.ref=n[0]),r&2&&(s.eventName=oc(n[1])),r&6&&(s.handler=n[2]&&sc(n[2],n[1]==="pointerdown")),r&8&&(s.options=n[3]),r&32&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}const SM={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},EM={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function oc(i){return vM()?i:xM()?EM[i]:yM()?SM[i]:i}function Vr(i,e,t,n){return Vc(i,oc(e),sc(t,e==="pointerdown"),n)}function TM(i,e,t){let{$$slots:n={},$$scope:r}=e,{ref:s,eventName:o,handler:a=void 0,options:l=void 0}=e;return i.$$set=c=>{"ref"in c&&t(0,s=c.ref),"eventName"in c&&t(1,o=c.eventName),"handler"in c&&t(2,a=c.handler),"options"in c&&t(3,l=c.options),"$$scope"in c&&t(5,r=c.$$scope)},[s,o,a,l,n,r]}class AM extends rt{constructor(e){super(),it(this,e,TM,bM,et,{ref:0,eventName:1,handler:2,options:3})}}const ha=AM;var bm=function(){function i(e,t,n){var r=this,s=n===void 0?{}:n,o=s.transformPagePoint;if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=function(){if(r.lastMoveEvent&&r.lastMoveEventInfo){var d=Ya(r.lastMoveEventInfo,r.history),h=r.startEvent!==null,g=wp(d.offset,{x:0,y:0})>=3;if(!(!h&&!g)){var _=d.point,p=ia().timestamp;r.history.push(Object.assign(Object.assign({},_),{timestamp:p}));var m=r.handlers,x=m.onStart,v=m.onMove;h||(x&&x(r.lastMoveEvent,d),r.startEvent=r.lastMoveEvent),v&&v(r.lastMoveEvent,d)}}},this.handlePointerMove=function(d,h){if(r.lastMoveEvent=d,r.lastMoveEventInfo=$a(h,r.transformPagePoint),ym(d)&&d.buttons===0){r.handlePointerUp(d,h);return}An.update(r.updatePoint,!0)},this.handlePointerUp=function(d,h){r.end();var g=r.handlers,_=g.onEnd,p=g.onSessionEnd,m=Ya($a(h,r.transformPagePoint),r.history);r.startEvent&&_&&_(d,m),p&&p(d,m)},!(Mm(e)&&e.touches.length>1)){this.handlers=t,this.transformPagePoint=o;var a=zc(e),l=$a(a,this.transformPagePoint),c=l.point,u=ia().timestamp;this.history=[Object.assign(Object.assign({},c),{timestamp:u})];var f=t.onSessionStart;f&&f(e,Ya(l,this.history)),this.removeListeners=to(Vr(window,"pointermove",this.handlePointerMove),Vr(window,"pointerup",this.handlePointerUp),Vr(window,"pointercancel",this.handlePointerUp))}}return i.prototype.updateHandlers=function(e){this.handlers=e},i.prototype.end=function(){this.removeListeners&&this.removeListeners(),Rs.update(this.updatePoint)},i}();function $a(i,e){return e?{point:e(i.point)}:i}function yf(i,e){return{x:i.x-e.x,y:i.y-e.y}}function Ya(i,e){var t=i.point;return{point:t,delta:yf(t,Sm(e)),offset:yf(t,wM(e)),velocity:RM(e,.1)}}function wM(i){return i[0]}function Sm(i){return i[i.length-1]}function RM(i,e){if(i.length<2)return{x:0,y:0};for(var t=i.length-1,n=null,r=Sm(i);t>=0&&(n=i[t],!(r.timestamp-n.timestamp>aa(e)));)t--;if(!n)return{x:0,y:0};var s=(r.timestamp-n.timestamp)/1e3;if(s===0)return{x:0,y:0};var o={x:(r.x-n.x)/s,y:(r.y-n.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function CM(i){let e;const t=i[11].default,n=_t(t,i,i[12],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&4096)&&xt(n,t,r,r[12],e?vt(t,r[12],s,null):yt(r[12]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function PM(i){let e,t;return e=new ha({props:{ref:i[0],eventName:"pointerdown",handler:i[1]&&i[3],$$slots:{default:[CM]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.ref=n[0]),r&2&&(s.handler=n[1]&&n[3]),r&4096&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function LM(i,e,t){let n,r,{$$slots:s={},$$scope:o}=e,{props:a,visualElement:l,isCustom:c}=e,{onPan:u,onPanStart:f,onPanEnd:d,onPanSessionStart:h}=a,g=null;const _=zt(wi)||wi(c);Kt(i,_,v=>t(10,r=v));let{transformPagePoint:p}=_n(_),m={onSessionStart:h,onStart:f,onMove:u,onEnd:(v,M)=>{g=null,d&&d(v,M)}};function x(v){g=new bm(v,m,{transformPagePoint:p})}return bc(()=>{g!==null&&g.updateHandlers(m)}),rr(()=>g&&g.end()),i.$$set=v=>{"props"in v&&t(4,a=v.props),"visualElement"in v&&t(0,l=v.visualElement),"isCustom"in v&&t(5,c=v.isCustom),"$$scope"in v&&t(12,o=v.$$scope)},i.$$.update=()=>{i.$$.dirty&16&&t(6,{onPan:u,onPanStart:f,onPanEnd:d,onPanSessionStart:h}=a,u,(t(7,f),t(4,a)),(t(8,d),t(4,a)),(t(9,h),t(4,a))),i.$$.dirty&960&&t(1,n=u||f||d||h),i.$$.dirty&1024&&({transformPagePoint:p}=r),i.$$.dirty&960&&(m={onSessionStart:h,onStart:f,onMove:u,onEnd:(v,M)=>{g=null,d&&d(v,M)}})},[l,n,_,x,a,c,u,f,d,h,r,s,o]}class DM extends rt{constructor(e){super(),it(this,e,LM,PM,et,{props:4,visualElement:0,isCustom:5})}}const IM=DM;var Em=function(i,e){return e?i===e?!0:Em(i,e.parentElement):!1};function Tm(i){var e=null;return function(){var t=function(){e=null};return e===null?(e=i,t):!1}}var Mf=Tm("dragHorizontal"),bf=Tm("dragVertical");function Am(i){var e=!1;if(i==="y")e=bf();else if(i==="x")e=Mf();else{var t=Mf(),n=bf();t&&n?e=function(){t(),n()}:(t&&t(),n&&n())}return e}function wm(){var i=Am(!0);return i?(i(),!1):!0}function NM(i){let e;const t=i[8].default,n=_t(t,i,i[9],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&512)&&xt(n,t,r,r[9],e?vt(t,r[9],s,null):yt(r[9]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function UM(i){let e,t;return e=new ha({props:{ref:i[0],eventName:"pointerdown",handler:i[1]?i[2]:void 0,$$slots:{default:[NM]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.ref=n[0]),r&2&&(s.handler=n[1]?n[2]:void 0),r&512&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function OM(i,e,t){let n,r,s,o,a,{$$slots:l={},$$scope:c}=e,{props:u,visualElement:f}=e,d=!1,h=null;function g(){h==null||h(),h=null}function _(){var v;return g(),d=!1,(v=f.animationState)==null||v.setActive(Lt.Tap,!1),!wm()}function p(v,M){_()&&(Em(f.getInstance(),v.target)?n==null||n(v,M):s==null||s(v,M))}function m(v,M){_()&&(s==null||s(v,M))}function x(v,M){var A;d||(g(),d=!0,h=to(Vr(window,"pointerup",p),Vr(window,"pointercancel",m)),r==null||r(v,M),(A=f.animationState)==null||A.setActive(Lt.Tap,!0))}return rr(g),i.$$set=v=>{"props"in v&&t(3,u=v.props),"visualElement"in v&&t(0,f=v.visualElement),"$$scope"in v&&t(9,c=v.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&t(6,{onTap:n,onTapStart:r,onTapCancel:s,whileTap:o}=u,n,(t(4,r),t(3,u)),(t(5,s),t(3,u)),(t(7,o),t(3,u))),i.$$.dirty&240&&t(1,a=n||r||s||o)},[f,a,x,u,r,s,n,o,l,c]}class FM extends rt{constructor(e){super(),it(this,e,OM,UM,et,{props:3,visualElement:0})}}const BM=FM;function VM(i){let e,t,n,r,s;e=new ha({props:{ref:i[0],eventName:"pointerenter",handler:i[1]||i[3]?_o(i[0],!0,i[1]):void 0}}),n=new ha({props:{ref:i[0],eventName:"pointerleave",handler:i[2]||i[3]?_o(i[0],!1,i[2]):void 0}});const o=i[6].default,a=_t(o,i,i[5],null);return{c(){we(e.$$.fragment),t=ut(),we(n.$$.fragment),r=ut(),a&&a.c()},m(l,c){Te(e,l,c),be(l,t,c),Te(n,l,c),be(l,r,c),a&&a.m(l,c),s=!0},p(l,[c]){const u={};c&1&&(u.ref=l[0]),c&11&&(u.handler=l[1]||l[3]?_o(l[0],!0,l[1]):void 0),e.$set(u);const f={};c&1&&(f.ref=l[0]),c&13&&(f.handler=l[2]||l[3]?_o(l[0],!1,l[2]):void 0),n.$set(f),a&&a.p&&(!s||c&32)&&xt(a,o,l,l[5],s?vt(o,l[5],c,null):yt(l[5]),null)},i(l){s||(ne(e.$$.fragment,l),ne(n.$$.fragment,l),ne(a,l),s=!0)},o(l){re(e.$$.fragment,l),re(n.$$.fragment,l),re(a,l),s=!1},d(l){l&&(Me(t),Me(r)),Ae(e,l),Ae(n,l),a&&a.d(l)}}}function _o(i,e,t){return(n,r)=>{var s;!ym(n)||wm()||(t==null||t(n,r),(s=i.animationState)==null||s.setActive(Lt.Hover,e))}}function kM(i,e,t){let{$$slots:n={},$$scope:r}=e,{props:s,visualElement:o}=e,{onHoverStart:a,onHoverEnd:l,whileHover:c}=s;return i.$$set=u=>{"props"in u&&t(4,s=u.props),"visualElement"in u&&t(0,o=u.visualElement),"$$scope"in u&&t(5,r=u.$$scope)},i.$$.update=()=>{i.$$.dirty&16&&t(1,{onHoverStart:a,onHoverEnd:l,whileHover:c}=s,a,(t(2,l),t(4,s)),(t(3,c),t(4,s)))},[o,a,l,c,s,r,n]}class zM extends rt{constructor(e){super(),it(this,e,kM,VM,et,{props:4,visualElement:0})}}const HM=zM;function GM(i){let e;const t=i[5].default,n=_t(t,i,i[6],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&64)&&xt(n,t,r,r[6],e?vt(t,r[6],s,null):yt(r[6]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function WM(i){let e,t;return e=new kc({props:{ref:i[0],eventName:"blur",handler:i[1]?i[3]:void 0,$$slots:{default:[GM]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.ref=n[0]),r&2&&(s.handler=n[1]?n[3]:void 0),r&64&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function XM(i){let e,t;return e=new kc({props:{ref:i[0],eventName:"focus",handler:i[1]?i[2]:void 0,$$slots:{default:[WM]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.ref=n[0]),r&2&&(s.handler=n[1]?n[2]:void 0),r&67&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function jM(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{props:o,visualElement:a}=e;const l=()=>{var u;(u=a.animationState)==null||u.setActive(Lt.Focus,!0)},c=()=>{var u;(u=a.animationState)==null||u.setActive(Lt.Focus,!1)};return i.$$set=u=>{"props"in u&&t(4,o=u.props),"visualElement"in u&&t(0,a=u.visualElement),"$$scope"in u&&t(6,s=u.$$scope)},i.$$.update=()=>{i.$$.dirty&16&&t(1,{whileFocus:n}=o,n)},[a,n,l,c,o,r,s]}class $M extends rt{constructor(e){super(),it(this,e,jM,XM,et,{props:4,visualElement:0})}}const YM=$M,qM=i=>(i&&Ex(i),cM),KM={tap:BM,focus:YM,hover:HM};function Rm(i,e,t){var n=e.min,r=e.max;return n!==void 0&&i<n?i=t?un(n,i,t.min):Math.max(i,n):r!==void 0&&i>r&&(i=t?un(r,i,t.max):Math.min(i,r)),i}function ZM(i,e,t,n,r){var s=i-e*t;return n?Rm(s,n,r):s}function Sf(i,e,t){return{min:e!==void 0?i.min+e:void 0,max:t!==void 0?i.max+t-(i.max-i.min):void 0}}function JM(i,e){var t=e.top,n=e.left,r=e.bottom,s=e.right;return{x:Sf(i.x,n,s),y:Sf(i.y,t,r)}}function Ef(i,e){var t,n=e.min-i.min,r=e.max-i.max;return e.max-e.min<i.max-i.min&&(t=Ut([r,n],2),n=t[0],r=t[1]),{min:i.min+n,max:i.min+r}}function QM(i,e){return{x:Ef(i.x,e.x),y:Ef(i.y,e.y)}}function eb(i,e,t){var n=i.max-i.min,r=un(e.min,e.max-n,t);return{min:r,max:r+n}}function tb(i,e){var t={};return e.min!==void 0&&(t.min=e.min-i.min),e.max!==void 0&&(t.max=e.max-i.min),t}var Cm=.35;function nb(i){return i===!1?i=0:i===!0&&(i=Cm),{x:Tf(i,"left","right"),y:Tf(i,"top","bottom")}}function Tf(i,e,t){return{min:Af(i,e),max:Af(i,t)}}function Af(i,e){var t;return typeof i=="number"?i:(t=i[e])!==null&&t!==void 0?t:0}function ib(i,e){e===void 0&&(e=!0);var t=i.getProjectionParent();if(!t)return!1;var n;return e?(n=ua(t.projection.target,i.projection.target),Yp(n,t.getLatestValues())):n=ua(t.getLayoutState().layout,i.getLayoutState().layout),sn(function(r){return i.setProjectionTargetAxis(r,n[r].min,n[r].max,!0)}),!0}var rb=new WeakMap,wf,sb=function(){function i(e){var t=e.visualElement;this.isDragging=!1,this.currentDirection=null,this.constraints=!1,this.elastic=Ri(),this.props={},this.hasMutatedConstraints=!1,this.cursorProgress={x:.5,y:.5},this.originPoint={},this.openGlobalLock=null,this.panSession=null,this.visualElement=t,this.visualElement.enableLayoutProjection(),rb.set(t,this)}return i.prototype.start=function(e,t){var n=this,r=t===void 0?{}:t,s=r.snapToCursor,o=s===void 0?!1:s,a=r.cursorProgress,l=function(h){var g;n.stopMotion();var _=_M(h).point;(g=n.cancelLayout)===null||g===void 0||g.call(n),n.cancelLayout=Ql(function(p,m){var x=da(n.visualElement),v=mx(n.visualElement),M=fn(fn([],Ut(x)),Ut(v)),A=!1;n.isLayoutDrag()&&n.visualElement.lockProjectionTarget(),m(function(){M.forEach(function(E){return E.resetTransform()})}),p(function(){Zo(n.visualElement),v.forEach(Zo)}),m(function(){M.forEach(function(E){return E.restoreTransform()}),o&&(A=n.snapToCursor(_))}),p(function(){var E=!!(n.getAxisMotionValue("x")&&!n.isExternalDrag());E||n.visualElement.rebaseProjectionTarget(!0,n.visualElement.measureViewportBox(!1)),n.visualElement.scheduleUpdateLayoutProjection();var S=n.visualElement.projection;sn(function(w){if(!A){var N=S.target[w],y=N.min,C=N.max;n.cursorProgress[w]=a?a[w]:Hs(y,C,_[w])}var $=n.getAxisMotionValue(w);$&&(n.originPoint[w]=$.get())})}),m(function(){Ir.update(),Ir.preRender(),Ir.render(),Ir.postRender()}),p(function(){return n.resolveDragConstraints()})})},c=function(h,g){var _,p,m,x=n.props,v=x.drag,M=x.dragPropagation;v&&!M&&(n.openGlobalLock&&n.openGlobalLock(),n.openGlobalLock=Am(v),!n.openGlobalLock)||(ec(),n.isDragging=!0,n.currentDirection=null,(p=(_=n.props).onDragStart)===null||p===void 0||p.call(_,h,g),(m=n.visualElement.animationState)===null||m===void 0||m.setActive(Lt.Drag,!0))},u=function(h,g){var _,p,m,x,v=n.props,M=v.dragPropagation,A=v.dragDirectionLock;if(!(!M&&!n.openGlobalLock)){var E=g.offset;if(A&&n.currentDirection===null){n.currentDirection=ob(E),n.currentDirection!==null&&((p=(_=n.props).onDirectionLock)===null||p===void 0||p.call(_,n.currentDirection));return}n.updateAxis("x",g.point,E),n.updateAxis("y",g.point,E),(x=(m=n.props).onDrag)===null||x===void 0||x.call(m,h,g),wf=h}},f=function(h,g){return n.stop(h,g)},d=this.props.transformPagePoint;this.panSession=new bm(e,{onSessionStart:l,onStart:c,onMove:u,onSessionEnd:f},{transformPagePoint:d})},i.prototype.resolveDragConstraints=function(){var e=this,t=this.props,n=t.dragConstraints,r=t.dragElastic,s=this.visualElement.getLayoutState().layoutCorrected;n?this.constraints=rc(n)?this.resolveRefConstraints(s,n):JM(s,n):this.constraints=!1,this.elastic=nb(r),this.constraints&&!this.hasMutatedConstraints&&sn(function(o){e.getAxisMotionValue(o)&&(e.constraints[o]=tb(s[o],e.constraints[o]))})},i.prototype.resolveRefConstraints=function(e,t){var n=this.props,r=n.onMeasureDragConstraints,s=n.transformPagePoint,o=t.current;this.constraintsBox=um(o,s);var a=QM(e,this.constraintsBox);if(r){var l=r(B0(a));this.hasMutatedConstraints=!!l,l&&(a=Wp(l))}return a},i.prototype.cancelDrag=function(){var e,t;this.visualElement.unlockProjectionTarget(),(e=this.cancelLayout)===null||e===void 0||e.call(this),this.isDragging=!1,this.panSession&&this.panSession.end(),this.panSession=null,!this.props.dragPropagation&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),(t=this.visualElement.animationState)===null||t===void 0||t.setActive(Lt.Drag,!1)},i.prototype.stop=function(e,t){var n,r,s;(n=this.panSession)===null||n===void 0||n.end(),this.panSession=null;var o=this.isDragging;if(this.cancelDrag(),!!o){var a=t.velocity;this.animateDragEnd(a),(s=(r=this.props).onDragEnd)===null||s===void 0||s.call(r,e,t)}},i.prototype.snapToCursor=function(e){var t=this;return sn(function(n){var r=t.props.drag;if(vo(n,r,t.currentDirection)){var s=t.getAxisMotionValue(n);if(s){var o=t.visualElement.getLayoutState().layout,a=o[n].max-o[n].min,l=o[n].min+a/2,c=e[n]-l;t.originPoint[n]=e[n],s.set(c)}else return t.cursorProgress[n]=.5,!0}}).includes(!0)},i.prototype.updateAxis=function(e,t,n){var r=this.props.drag;if(vo(e,r,this.currentDirection))return this.getAxisMotionValue(e)?this.updateAxisMotionValue(e,n):this.updateVisualElementAxis(e,t)},i.prototype.updateAxisMotionValue=function(e,t){var n=this.getAxisMotionValue(e);if(!(!t||!n)){var r=this.originPoint[e]+t[e],s=this.constraints?Rm(r,this.constraints[e],this.elastic[e]):r;n.set(s)}},i.prototype.updateVisualElementAxis=function(e,t){var n,r=this.visualElement.getLayoutState().layout[e],s=r.max-r.min,o=this.cursorProgress[e],a=ZM(t[e],s,o,(n=this.constraints)===null||n===void 0?void 0:n[e],this.elastic[e]);this.visualElement.setProjectionTargetAxis(e,a,a+s)},i.prototype.setProps=function(e){var t=e.drag,n=t===void 0?!1:t,r=e.dragDirectionLock,s=r===void 0?!1:r,o=e.dragPropagation,a=o===void 0?!1:o,l=e.dragConstraints,c=l===void 0?!1:l,u=e.dragElastic,f=u===void 0?Cm:u,d=e.dragMomentum,h=d===void 0?!0:d,g=ri(e,["drag","dragDirectionLock","dragPropagation","dragConstraints","dragElastic","dragMomentum"]);this.props=Object.assign({drag:n,dragDirectionLock:s,dragPropagation:a,dragConstraints:c,dragElastic:f,dragMomentum:h},g)},i.prototype.getAxisMotionValue=function(e){var t=this.props,n=t.layout,r=t.layoutId,s="_drag"+e.toUpperCase();if(this.props[s])return this.props[s];if(!n&&r===void 0)return this.visualElement.getValue(e,0)},i.prototype.isLayoutDrag=function(){return!this.getAxisMotionValue("x")},i.prototype.isExternalDrag=function(){var e=this.props,t=e._dragX,n=e._dragY;return t||n},i.prototype.animateDragEnd=function(e){var t=this,n=this.props,r=n.drag,s=n.dragMomentum,o=n.dragElastic,a=n.dragTransition,l=ib(this.visualElement,this.isLayoutDrag()&&!this.isExternalDrag()),c=this.constraints||{};if(l&&Object.keys(c).length&&this.isLayoutDrag()){var u=this.visualElement.getProjectionParent();if(u){var f=ua(u.projection.targetFinal,c);sn(function(h){var g=f[h],_=g.min,p=g.max;c[h]={min:isNaN(_)?void 0:_,max:isNaN(p)?void 0:p}})}}var d=sn(function(h){var g;if(vo(h,r,t.currentDirection)){var _=(g=c==null?void 0:c[h])!==null&&g!==void 0?g:{},p=o?200:1e6,m=o?40:1e7,x=Object.assign(Object.assign({type:"inertia",velocity:s?e[h]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10},a),_);return t.getAxisMotionValue(h)?t.startAxisValueAnimation(h,x):t.visualElement.startLayoutAnimation(h,x,l)}});return Promise.all(d).then(function(){var h,g;(g=(h=t.props).onDragTransitionEnd)===null||g===void 0||g.call(h)})},i.prototype.stopMotion=function(){var e=this;sn(function(t){var n=e.getAxisMotionValue(t);n?n.stop():e.visualElement.stopLayoutAnimation()})},i.prototype.startAxisValueAnimation=function(e,t){var n=this.getAxisMotionValue(e);if(n){var r=n.get();return n.set(r),n.set(r),la(e,n,0,t)}},i.prototype.scalePoint=function(){var e=this,t=this.props,n=t.drag,r=t.dragConstraints;if(!(!rc(r)||!this.constraintsBox)){this.stopMotion();var s={x:0,y:0};sn(function(o){s[o]=j0(e.visualElement.projection.target[o],e.constraintsBox[o])}),this.updateConstraints(function(){sn(function(o){if(vo(o,n,null)){var a=eb(e.visualElement.projection.target[o],e.constraintsBox[o],s[o]),l=a.min,c=a.max;e.visualElement.setProjectionTargetAxis(o,l,c)}})}),setTimeout(ec,1)}},i.prototype.updateConstraints=function(e){var t=this;this.cancelLayout=Ql(function(n,r){var s=da(t.visualElement);r(function(){return s.forEach(function(o){return o.resetTransform()})}),n(function(){return Zo(t.visualElement)}),r(function(){return s.forEach(function(o){return o.restoreTransform()})}),n(function(){t.resolveDragConstraints()}),e&&r(e)})},i.prototype.mount=function(e){var t=this,n=e.getInstance(),r=Vr(n,"pointerdown",function(l){var c=t.props,u=c.drag,f=c.dragListener,d=f===void 0?!0:f;u&&d&&t.start(l)}),s=Vc(window,"resize",function(){t.scalePoint()}),o=e.onLayoutUpdate(function(){t.isDragging&&t.resolveDragConstraints()}),a=e.prevDragCursor;return a&&this.start(wf,{cursorProgress:a}),function(){r==null||r(),s==null||s(),o==null||o(),t.cancelDrag()}},i}();function vo(i,e,t){return(e===!0||e===i)&&(t===null||t===i)}function ob(i,e){e===void 0&&(e=10);var t=null;return Math.abs(i.y)>e?t="y":Math.abs(i.x)>e&&(t="x"),t}function ab(i){let e;const t=i[7].default,n=_t(t,i,i[6],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&64)&&xt(n,t,r,r[6],e?vt(t,r[6],s,null):yt(r[6]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function lb(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{visualElement:o,props:a,isCustom:l}=e;const c=zt(wi)||wi(l);Kt(i,c,_=>t(5,n=_));let u=new sb({visualElement:o}),f;const d=()=>{f&&f(),h&&(f=h.subscribe(u))};let{dragControls:h}=a,{transformPagePoint:g}=_n(c);return u.setProps({...a,transformPagePoint:g}),rr(()=>{f&&f()}),Zs(()=>u.mount(o)),i.$$set=_=>{"visualElement"in _&&t(1,o=_.visualElement),"props"in _&&t(2,a=_.props),"isCustom"in _&&t(3,l=_.isCustom),"$$scope"in _&&t(6,s=_.$$scope)},i.$$.update=()=>{i.$$.dirty&4&&({dragControls:h}=a),i.$$.dirty&32&&t(4,{transformPagePoint:g}=n,g),i.$$.dirty&20&&u.setProps({...a,transformPagePoint:g})},d(),[c,o,a,l,g,n,s,r]}class cb extends rt{constructor(e){super(),it(this,e,lb,ab,et,{visualElement:1,props:2,isCustom:3})}}const ub=cb,fb={pan:IM,drag:ub};function Rf(i,e){return i/(e.max-e.min)*100}function db(i,e,t){var n=t.target;if(typeof i=="string")if(ke.test(i))i=parseFloat(i);else return i;var r=Rf(i,n.x),s=Rf(i,n.y);return r+"% "+s+"%"}var Cf="_$css";function hb(i,e){var t=e.delta,n=e.treeScale,r=i,s=i.includes("var("),o=[];s&&(i=i.replace(fm,function(_){return o.push(_),Cf}));var a=ti.parse(i);if(a.length>5)return r;var l=ti.createTransformer(i),c=typeof a[0]!="number"?1:0,u=t.x.scale*n.x,f=t.y.scale*n.y;a[0+c]/=u,a[1+c]/=f;var d=un(u,f,.5);typeof a[2+c]=="number"&&(a[2+c]/=d),typeof a[3+c]=="number"&&(a[3+c]/=d);var h=l(a);if(s){var g=0;h=h.replace(Cf,function(){var _=o[g];return g++,_})}return h}var ps={process:db},pb={borderRadius:Object.assign(Object.assign({},ps),{applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]}),borderTopLeftRadius:ps,borderTopRightRadius:ps,borderBottomLeftRadius:ps,borderBottomRightRadius:ps,boxShadow:{process:hb}};const Pf=1e3;function mb(i,e){return!Df(i)&&!Df(e)&&(!$s(i.x,e.x)||!$s(i.y,e.y))}const Lf={min:0,max:0};function Df(i){return $s(i.x,Lf)&&$s(i.y,Lf)}function $s(i,e){return i.min===e.min&&i.max===e.max}const gb={duration:.45,ease:[.4,0,.1,1]};function _b(i,e,t){let{visualElement:n,layout:r=void 0,safeToRemove:s}=e,o=Ri(),a=Ri(),l={x:!1,y:!1},c={x:void 0,y:void 0},u,f=!1;Zs(()=>{t(0,n.animateMotionValue=la,n),n.enableLayoutProjection(),u=n.onLayoutUpdate(d),t(0,n.layoutSafeToRemove=function(){s()},n),O0(pb)}),rr(()=>{u(),sn(g=>{var _;return(_=c[g])==null?void 0:_.call(c)})});const d=(g,_,{originBox:p,targetBox:m,visibilityAction:x,shouldStackAnimate:v,onComplete:M,...A}={})=>{if(v===!1)return f=!1,s();if(f&&v!==!0)return;v&&(f=!0),_=p||_,g=m||g;const E=mb(_,g),S=sn(w=>{if(r==="position"){const N=g[w].max-g[w].min;_[w].max=_[w].min+N}if(!n.projection.isTargetLocked)if(x!==void 0)n.setVisibility(x===VisibilityAction.Show);else return E?h(w,g[w],_[w],A):n.setProjectionTargetAxis(w,g[w].min,g[w].max)});return n.syncRender(),Promise.all(S).then(()=>{f=!1,M&&M(),n.notifyLayoutAnimationComplete()})},h=(g,_,p,{transition:m}={})=>{var w,N;if((w=c[g])==null||w.call(c),l[g]&&$s(_,a[g]))return;(N=c[g])==null||N.call(c),l[g]=!0;const x=o[g],v=n.getProjectionAnimationProgress()[g];v.clearListeners(),v.set(0),v.set(0);const M=()=>{const y=v.get()/Pf;ox(x,p,_,y),n.setProjectionTargetAxis(g,x.min,x.max)};M();const A=v.onChange(M);c[g]=()=>{l[g]=!1,v.stop(),A()},a[g]=_;const E=m||n.getDefaultTransition()||gb;return la(g==="x"?"layoutX":"layoutY",v,Pf,E&&Lc(E,"layout")).then(c[g])};return i.$$set=g=>{"visualElement"in g&&t(0,n=g.visualElement),"layout"in g&&t(1,r=g.layout),"safeToRemove"in g&&t(2,s=g.safeToRemove)},[n,r,s]}class vb extends rt{constructor(e){super(),it(this,e,_b,null,et,{visualElement:0,layout:1,safeToRemove:2})}}const xb=vb;function yb(i){let e,t;return e=new xb({props:{visualElement:i[0],layout:i[1],safeToRemove:i[2][1]}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.visualElement=n[0]),r&2&&(s.layout=n[1]),r&4&&(s.safeToRemove=n[2][1]),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function Mb(i,e,t){let n,{visualElement:r,props:s,isCustom:o}=e,{layout:a}=s;const l=tm(o);return Kt(i,l,c=>t(2,n=c)),i.$$set=c=>{"visualElement"in c&&t(0,r=c.visualElement),"props"in c&&t(4,s=c.props),"isCustom"in c&&t(5,o=c.isCustom)},i.$$.update=()=>{i.$$.dirty&16&&t(1,{layout:a}=s,a)},[r,a,n,l,s,o]}class bb extends rt{constructor(e){super(),it(this,e,Mb,yb,et,{visualElement:0,props:4,isCustom:5})}}const Sb=bb;function Eb(i,e,t){let{visualElement:n,syncLayout:r,framerSyncLayout:s,update:o}=e;const a=zt(Ts),l=zt(Op);Zs(()=>{fr(r)&&r.register(n),fr(s)&&s.register(n),n.onUnmount(()=>{fr(r)&&r.remove(n),fr(s)&&s.remove(n)})});let c=!1;const u=(d=!1)=>(c||(c=!0,_n(a).forEach(h=>{var g;(g=h.updater)==null||g.call(h,!0)}),fr(r)?r.syncUpdate():(gx(n,d),r.add(n))),null);o===void 0&&Ig(u);const f=(d=!1)=>{c=!1,_n(a).forEach((g,_)=>{var p;(p=g.afterU)==null||p.call(g,!0)}),fr(r)||r.flush()};return l.update(d=>d.concat([{updater:u,afterU:f}])),bc(f),i.$$set=d=>{"visualElement"in d&&t(0,n=d.visualElement),"syncLayout"in d&&t(1,r=d.syncLayout),"framerSyncLayout"in d&&t(2,s=d.framerSyncLayout),"update"in d&&t(3,o=d.update)},i.$$.update=()=>{i.$$.dirty&8&&o!==void 0&&u(o)},[n,r,s,o]}class Tb extends rt{constructor(e){super(),it(this,e,Eb,null,et,{visualElement:0,syncLayout:1,framerSyncLayout:2,update:3})}}const Ab=Tb;function wb(i){let e,t;return e=new Ab({props:{syncLayout:i[2],framerSyncLayout:i[3],visualElement:i[0],update:i[1]}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,[r]){const s={};r&4&&(s.syncLayout=n[2]),r&8&&(s.framerSyncLayout=n[3]),r&1&&(s.visualElement=n[0]),r&2&&(s.update=n[1]),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function Rb(i,e,t){let n,r,s,{visualElement:o,props:a,isCustom:l}=e;const c=zt(Xu)||Xu(l);Kt(i,c,f=>t(2,r=f));const u=zt(ju)||ju();return Kt(i,u,f=>t(3,s=f)),i.$$set=f=>{"visualElement"in f&&t(0,o=f.visualElement),"props"in f&&t(6,a=f.props),"isCustom"in f&&t(7,l=f.isCustom)},i.$$.update=()=>{i.$$.dirty&64&&t(1,{update:n}=a,n)},[o,n,r,s,c,u,a,l]}class Cb extends rt{constructor(e){super(),it(this,e,Rb,wb,et,{visualElement:0,props:6,isCustom:7})}}const Pb=Cb;var Lb={measureLayout:Pb,layoutAnimation:Sb};function Db(i,e,t){let{visualElement:n,props:r}=e,{animate:s}=r;return i.$$set=o=>{"visualElement"in o&&t(0,n=o.visualElement),"props"in o&&t(1,r=o.props)},i.$$.update=()=>{i.$$.dirty&2&&t(2,{animate:s}=r,s),i.$$.dirty&1&&t(0,n.animationState=n.animationState||Q0(n),n),i.$$.dirty&5&&Dc(s)&&Xh().then(()=>s.subscribe(n))},[n,r,s]}class Ib extends rt{constructor(e){super(),it(this,e,Db,null,et,{visualElement:0,props:1})}}const Nb=Ib;function Ub(i){let e;const t=i[7].default,n=_t(t,i,i[6],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&64)&&xt(n,t,r,r[6],e?vt(t,r[6],s,null):yt(r[6]),null)},i(r){e||(ne(n,r),e=!0)},o(r){re(n,r),e=!1},d(r){n&&n.d(r)}}}function Ob(i,e,t){let n,r,s,{$$slots:o={},$$scope:a}=e,{props:l,visualElement:c,isCustom:u}=e;const f=zt(Pi)||Pi(u);Kt(i,f,g=>t(9,s=g));const d=tm(u);Kt(i,d,g=>t(5,r=g));const h=g=>{var x;const[_,p]=g,m=(x=c.animationState)==null?void 0:x.setActive(Lt.Exit,!_,{custom:(s==null?void 0:s.custom)??n});return!_&&(m==null||m.then(p)),""};return i.$$set=g=>{"props"in g&&t(2,l=g.props),"visualElement"in g&&t(3,c=g.visualElement),"isCustom"in g&&t(4,u=g.isCustom),"$$scope"in g&&t(6,a=g.$$scope)},i.$$.update=()=>{i.$$.dirty&4&&({custom:n}=l),i.$$.dirty&32&&h(r)},[f,d,l,c,u,r,a,o]}class Fb extends rt{constructor(e){super(),it(this,e,Ob,Ub,et,{props:2,visualElement:3,isCustom:4})}}const Bb=Fb,Vb={animation:Nb,exit:Bb},kb={...Vb,...KM,...fb,...Lb};var is=qM(kb);function zb(i){let e,t,n,r;return{c(){e=He("p"),t=Rt(i[1]),Ce(e,"class","cursor-pointer text-white hover:opacity-[0.9] dark:text-white")},m(s,o){be(s,e,o),Xe(e,t),n||(r=es(i[7].call(null,e)),n=!0)},p(s,o){o&2&&Wr(t,s[1])},d(s){s&&Me(e),n=!1,r()}}}function If(i){let e,t;return e=new is({props:{initial:{opacity:0,scale:.85,y:0},animate:{opacity:1,scale:1,y:0},transition:i[2],$$slots:{default:[Wb,({motion:n})=>({7:n}),({motion:n})=>n?128:0]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,r){const s={};r&67&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function Nf(i){let e,t,n;return t=new is({props:{transition:i[2],layoutId:"active",$$slots:{default:[Gb,({motion:r})=>({7:r}),({motion:r})=>r?128:0]},$$scope:{ctx:i}}}),{c(){e=He("div"),we(t.$$.fragment),Ce(e,"class","absolute left-1/2 -translate-x-1/2 transform pt-4")},m(r,s){be(r,e,s),Te(t,e,null),n=!0},p(r,s){const o={};s&64&&(o.$$scope={dirty:s,ctx:r}),t.$set(o)},i(r){n||(ne(t.$$.fragment,r),n=!0)},o(r){re(t.$$.fragment,r),n=!1},d(r){r&&Me(e),Ae(t)}}}function Hb(i){let e,t,n,r;const s=i[3].default,o=_t(s,i,i[6],null);return{c(){e=He("div"),o&&o.c(),Ce(e,"class","h-full w-max p-4")},m(a,l){be(a,e,l),o&&o.m(e,null),t=!0,n||(r=es(i[7].call(null,e)),n=!0)},p(a,l){o&&o.p&&(!t||l&64)&&xt(o,s,a,a[6],t?vt(s,a[6],l,null):yt(a[6]),null)},i(a){t||(ne(o,a),t=!0)},o(a){re(o,a),t=!1},d(a){a&&Me(e),o&&o.d(a),n=!1,r()}}}function Gb(i){let e,t,n,r,s;return t=new is({props:{layout:!0,$$slots:{default:[Hb,({motion:o})=>({7:o}),({motion:o})=>o?128:0]},$$scope:{ctx:i}}}),{c(){e=He("div"),we(t.$$.fragment),Ce(e,"class","overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black")},m(o,a){be(o,e,a),Te(t,e,null),n=!0,r||(s=es(i[7].call(null,e)),r=!0)},p(o,a){const l={};a&64&&(l.$$scope={dirty:a,ctx:o}),t.$set(l)},i(o){n||(ne(t.$$.fragment,o),n=!0)},o(o){re(t.$$.fragment,o),n=!1},d(o){o&&Me(e),Ae(t),r=!1,s()}}}function Wb(i){let e,t,n,r,s=i[0]===i[1]&&Nf(i);return{c(){e=He("div"),s&&s.c()},m(o,a){be(o,e,a),s&&s.m(e,null),t=!0,n||(r=es(i[7].call(null,e)),n=!0)},p(o,a){o[0]===o[1]?s?(s.p(o,a),a&3&&ne(s,1)):(s=Nf(o),s.c(),ne(s,1),s.m(e,null)):s&&(Fn(),re(s,1,1,()=>{s=null}),Bn())},i(o){t||(ne(s),t=!0)},o(o){re(s),t=!1},d(o){o&&Me(e),s&&s.d(),n=!1,r()}}}function Xb(i){let e,t,n,r,s,o;t=new is({props:{transition:{duration:.3},$$slots:{default:[zb,({motion:l})=>({7:l}),({motion:l})=>l?128:0]},$$scope:{ctx:i}}});let a=i[0]!==null&&If(i);return{c(){e=He("div"),we(t.$$.fragment),n=ut(),a&&a.c(),Ce(e,"class","relative")},m(l,c){be(l,e,c),Te(t,e,null),Xe(e,n),a&&a.m(e,null),r=!0,s||(o=[As(e,"mouseenter",i[4]),As(e,"mouseleave",i[5])],s=!0)},p(l,[c]){const u={};c&66&&(u.$$scope={dirty:c,ctx:l}),t.$set(u),l[0]!==null?a?(a.p(l,c),c&1&&ne(a,1)):(a=If(l),a.c(),ne(a,1),a.m(e,null)):a&&(Fn(),re(a,1,1,()=>{a=null}),Bn())},i(l){r||(ne(t.$$.fragment,l),ne(a),r=!0)},o(l){re(t.$$.fragment,l),re(a),r=!1},d(l){l&&Me(e),Ae(t),a&&a.d(),s=!1,ii(o)}}}function jb(i,e,t){let{$$slots:n={},$$scope:r}=e;const s={type:"spring",mass:.5,damping:11.5,stiffness:100,restDelta:.001,restSpeed:.001};let{active:o}=e,{item:a}=e;const l=()=>t(0,o=a),c=()=>t(0,o=null);return i.$$set=u=>{"active"in u&&t(0,o=u.active),"item"in u&&t(1,a=u.item),"$$scope"in u&&t(6,r=u.$$scope)},[o,a,s,n,l,c,r]}class ms extends rt{constructor(e){super(),it(this,e,jb,Xb,et,{active:0,item:1})}}function $b(i){let e,t,n,r,s,o,a,l,c,u;return{c(){e=He("a"),t=He("img"),r=ut(),s=He("div"),o=He("h4"),a=Rt(i[0]),l=ut(),c=He("p"),u=Rt(i[1]),ea(t.src,n=i[3])||Ce(t,"src",n),Ce(t,"width",140),Ce(t,"height",70),Ce(t,"alt",i[0]),Ce(t,"class","flex-shrink-0 rounded-md shadow-2xl"),Ce(o,"class","mb-1 text-xl font-bold text-black dark:text-white"),Ce(c,"class","max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300"),Ce(e,"href",i[2]),Ce(e,"class","flex space-x-2")},m(f,d){be(f,e,d),Xe(e,t),Xe(e,r),Xe(e,s),Xe(s,o),Xe(o,a),Xe(s,l),Xe(s,c),Xe(c,u)},p(f,[d]){d&8&&!ea(t.src,n=f[3])&&Ce(t,"src",n),d&1&&Ce(t,"alt",f[0]),d&1&&Wr(a,f[0]),d&2&&Wr(u,f[1]),d&4&&Ce(e,"href",f[2])},i:Nt,o:Nt,d(f){f&&Me(e)}}}function Yb(i,e,t){let{title:n}=e,{description:r}=e,{href:s}=e,{src:o}=e;return i.$$set=a=>{"title"in a&&t(0,n=a.title),"description"in a&&t(1,r=a.description),"href"in a&&t(2,s=a.href),"src"in a&&t(3,o=a.src)},[n,r,s,o]}class qb extends rt{constructor(e){super(),it(this,e,Yb,$b,et,{title:0,description:1,href:2,src:3})}}function Uf(i,e,t){const n=i.slice();return n[1]=e[t].title,n[2]=e[t].description,n[3]=e[t].image,n}function Kb(i){let e;return{c(){e=Rt("Hobby")},m(t,n){be(t,e,n)},d(t){t&&Me(e)}}}function Zb(i){let e;return{c(){e=Rt("Individual")},m(t,n){be(t,e,n)},d(t){t&&Me(e)}}}function Jb(i){let e;return{c(){e=Rt("Team")},m(t,n){be(t,e,n)},d(t){t&&Me(e)}}}function Qb(i){let e;return{c(){e=Rt("Enterprise")},m(t,n){be(t,e,n)},d(t){t&&Me(e)}}}function eS(i){let e,t,n,r,s,o,a,l,c;return t=new vn({props:{href:"#",$$slots:{default:[Kb]},$$scope:{ctx:i}}}),r=new vn({props:{href:"#",$$slots:{default:[Zb]},$$scope:{ctx:i}}}),o=new vn({props:{href:"#",$$slots:{default:[Jb]},$$scope:{ctx:i}}}),l=new vn({props:{href:"#",$$slots:{default:[Qb]},$$scope:{ctx:i}}}),{c(){e=He("div"),we(t.$$.fragment),n=ut(),we(r.$$.fragment),s=ut(),we(o.$$.fragment),a=ut(),we(l.$$.fragment),Ce(e,"class","flex flex-col space-y-4 text-sm")},m(u,f){be(u,e,f),Te(t,e,null),Xe(e,n),Te(r,e,null),Xe(e,s),Te(o,e,null),Xe(e,a),Te(l,e,null),c=!0},p(u,f){const d={};f&64&&(d.$$scope={dirty:f,ctx:u}),t.$set(d);const h={};f&64&&(h.$$scope={dirty:f,ctx:u}),r.$set(h);const g={};f&64&&(g.$$scope={dirty:f,ctx:u}),o.$set(g);const _={};f&64&&(_.$$scope={dirty:f,ctx:u}),l.$set(_)},i(u){c||(ne(t.$$.fragment,u),ne(r.$$.fragment,u),ne(o.$$.fragment,u),ne(l.$$.fragment,u),c=!0)},o(u){re(t.$$.fragment,u),re(r.$$.fragment,u),re(o.$$.fragment,u),re(l.$$.fragment,u),c=!1},d(u){u&&Me(e),Ae(t),Ae(r),Ae(o),Ae(l)}}}function tS(i){let e;return{c(){e=Rt("Web Development")},m(t,n){be(t,e,n)},d(t){t&&Me(e)}}}function nS(i){let e;return{c(){e=Rt("Interface Design")},m(t,n){be(t,e,n)},d(t){t&&Me(e)}}}function iS(i){let e,t,n,r,s;return t=new vn({props:{href:"#test",$$slots:{default:[tS]},$$scope:{ctx:i}}}),r=new vn({props:{href:"#",$$slots:{default:[nS]},$$scope:{ctx:i}}}),{c(){e=He("div"),we(t.$$.fragment),n=ut(),we(r.$$.fragment),Ce(e,"class","flex flex-col space-y-4 text-sm")},m(o,a){be(o,e,a),Te(t,e,null),Xe(e,n),Te(r,e,null),s=!0},p(o,a){const l={};a&64&&(l.$$scope={dirty:a,ctx:o}),t.$set(l);const c={};a&64&&(c.$$scope={dirty:a,ctx:o}),r.$set(c)},i(o){s||(ne(t.$$.fragment,o),ne(r.$$.fragment,o),s=!0)},o(o){re(t.$$.fragment,o),re(r.$$.fragment,o),s=!1},d(o){o&&Me(e),Ae(t),Ae(r)}}}function rS(i){let e;return{c(){e=Rt("Anh Tuan Driving Center")},m(t,n){be(t,e,n)},d(t){t&&Me(e)}}}function sS(i){let e;return{c(){e=Rt("GMO-Z.com Runsystem JSC")},m(t,n){be(t,e,n)},d(t){t&&Me(e)}}}function oS(i){let e,t,n,r,s;return t=new vn({props:{href:"#anh-tuan",$$slots:{default:[rS]},$$scope:{ctx:i}}}),r=new vn({props:{href:"#gmo",$$slots:{default:[sS]},$$scope:{ctx:i}}}),{c(){e=He("div"),we(t.$$.fragment),n=ut(),we(r.$$.fragment),Ce(e,"class","flex flex-col space-y-4 text-sm")},m(o,a){be(o,e,a),Te(t,e,null),Xe(e,n),Te(r,e,null),s=!0},p(o,a){const l={};a&64&&(l.$$scope={dirty:a,ctx:o}),t.$set(l);const c={};a&64&&(c.$$scope={dirty:a,ctx:o}),r.$set(c)},i(o){s||(ne(t.$$.fragment,o),ne(r.$$.fragment,o),s=!0)},o(o){re(t.$$.fragment,o),re(r.$$.fragment,o),s=!1},d(o){o&&Me(e),Ae(t),Ae(r)}}}function Of(i){let e,t;return e=new qb({props:{title:i[1],href:"#",src:i[3],description:Ff(i[2],40)}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.title=n[1]),r&1&&(s.src=n[3]),r&1&&(s.description=Ff(n[2],40)),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function aS(i){let e,t,n=ei(i[0]),r=[];for(let o=0;o<n.length;o+=1)r[o]=Of(Uf(i,n,o));const s=o=>re(r[o],1,1,()=>{r[o]=null});return{c(){e=He("div");for(let o=0;o<r.length;o+=1)r[o].c();Ce(e,"class","grid grid-cols-2 gap-10 p-4 text-sm text-blue-600")},m(o,a){be(o,e,a);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);t=!0},p(o,a){if(a&1){n=ei(o[0]);let l;for(l=0;l<n.length;l+=1){const c=Uf(o,n,l);r[l]?(r[l].p(c,a),ne(r[l],1)):(r[l]=Of(c),r[l].c(),ne(r[l],1),r[l].m(e,null))}for(Fn(),l=n.length;l<r.length;l+=1)s(l);Bn()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)ne(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)re(r[a]);t=!1},d(o){o&&Me(e),Hh(r,o)}}}function lS(i){let e;return{c(){e=Rt("Hobby")},m(t,n){be(t,e,n)},d(t){t&&Me(e)}}}function cS(i){let e;return{c(){e=Rt("Individual")},m(t,n){be(t,e,n)},d(t){t&&Me(e)}}}function uS(i){let e;return{c(){e=Rt("Team")},m(t,n){be(t,e,n)},d(t){t&&Me(e)}}}function fS(i){let e;return{c(){e=Rt("Enterprise")},m(t,n){be(t,e,n)},d(t){t&&Me(e)}}}function dS(i){let e,t,n,r,s,o,a,l,c;return t=new vn({props:{href:"#",$$slots:{default:[lS]},$$scope:{ctx:i}}}),r=new vn({props:{href:"#",$$slots:{default:[cS]},$$scope:{ctx:i}}}),o=new vn({props:{href:"#",$$slots:{default:[uS]},$$scope:{ctx:i}}}),l=new vn({props:{href:"#",$$slots:{default:[fS]},$$scope:{ctx:i}}}),{c(){e=He("div"),we(t.$$.fragment),n=ut(),we(r.$$.fragment),s=ut(),we(o.$$.fragment),a=ut(),we(l.$$.fragment),Ce(e,"class","flex flex-col space-y-4 text-sm")},m(u,f){be(u,e,f),Te(t,e,null),Xe(e,n),Te(r,e,null),Xe(e,s),Te(o,e,null),Xe(e,a),Te(l,e,null),c=!0},p(u,f){const d={};f&64&&(d.$$scope={dirty:f,ctx:u}),t.$set(d);const h={};f&64&&(h.$$scope={dirty:f,ctx:u}),r.$set(h);const g={};f&64&&(g.$$scope={dirty:f,ctx:u}),o.$set(g);const _={};f&64&&(_.$$scope={dirty:f,ctx:u}),l.$set(_)},i(u){c||(ne(t.$$.fragment,u),ne(r.$$.fragment,u),ne(o.$$.fragment,u),ne(l.$$.fragment,u),c=!0)},o(u){re(t.$$.fragment,u),re(r.$$.fragment,u),re(o.$$.fragment,u),re(l.$$.fragment,u),c=!1},d(u){u&&Me(e),Ae(t),Ae(r),Ae(o),Ae(l)}}}function hS(i){let e,t,n,r,s,o,a,l,c,u;return e=new ms({props:{active:gs,item:"About me",$$slots:{default:[eS]},$$scope:{ctx:i}}}),n=new ms({props:{active:gs,item:"Technologies",$$slots:{default:[iS]},$$scope:{ctx:i}}}),s=new ms({props:{active:gs,item:"Experience",$$slots:{default:[oS]},$$scope:{ctx:i}}}),a=new ms({props:{active:gs,item:"Projects",$$slots:{default:[aS]},$$scope:{ctx:i}}}),c=new ms({props:{active:gs,item:"Certificate",$$slots:{default:[dS]},$$scope:{ctx:i}}}),{c(){we(e.$$.fragment),t=ut(),we(n.$$.fragment),r=ut(),we(s.$$.fragment),o=ut(),we(a.$$.fragment),l=ut(),we(c.$$.fragment)},m(f,d){Te(e,f,d),be(f,t,d),Te(n,f,d),be(f,r,d),Te(s,f,d),be(f,o,d),Te(a,f,d),be(f,l,d),Te(c,f,d),u=!0},p(f,d){const h={};d&64&&(h.$$scope={dirty:d,ctx:f}),e.$set(h);const g={};d&64&&(g.$$scope={dirty:d,ctx:f}),n.$set(g);const _={};d&64&&(_.$$scope={dirty:d,ctx:f}),s.$set(_);const p={};d&65&&(p.$$scope={dirty:d,ctx:f}),a.$set(p);const m={};d&64&&(m.$$scope={dirty:d,ctx:f}),c.$set(m)},i(f){u||(ne(e.$$.fragment,f),ne(n.$$.fragment,f),ne(s.$$.fragment,f),ne(a.$$.fragment,f),ne(c.$$.fragment,f),u=!0)},o(f){re(e.$$.fragment,f),re(n.$$.fragment,f),re(s.$$.fragment,f),re(a.$$.fragment,f),re(c.$$.fragment,f),u=!1},d(f){f&&(Me(t),Me(r),Me(o),Me(l)),Ae(e,f),Ae(n,f),Ae(s,f),Ae(a,f),Ae(c,f)}}}function pS(i){let e,t,n,r;return n=new V_({props:{$$slots:{default:[hS]},$$scope:{ctx:i}}}),{c(){e=He("div"),t=He("div"),we(n.$$.fragment),Ce(t,"class","fixed inset-x-0 top-5 z-50 mx-auto max-w-xl "),Ce(e,"class","relative flex w-full items-center justify-between")},m(s,o){be(s,e,o),Xe(e,t),Te(n,t,null),r=!0},p(s,[o]){const a={};o&65&&(a.$$scope={dirty:o,ctx:s}),n.$set(a)},i(s){r||(ne(n.$$.fragment,s),r=!0)},o(s){re(n.$$.fragment,s),r=!1},d(s){s&&Me(e),Ae(n)}}}let gs=null;function Ff(i,e){return i.length>e?i.substring(0,e)+"...":i}function mS(i,e,t){let{projectArray:n}=e;return i.$$set=r=>{"projectArray"in r&&t(0,n=r.projectArray)},[n]}class gS extends rt{constructor(e){super(),it(this,e,mS,pS,et,{projectArray:0})}}function _S(i){let e;return{c(){e=He("div"),e.innerHTML=`<p class="timeline-title text-white text-5xl svelte-12hzwnk">Experience</p> <ol class="relative border-s border-gray-200 dark:border-gray-700"><li class="mb-10 ms-4" id="anh-tuan"><div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-2xl font-normal leading-none text-gray-400 dark:text-gray-500">From May 2021 to January 2023</time> <h3 class="text-3xl font-semibold text-gray-400 dark:text-white">Wordpress Website builder for <span class="text-yellow-400">Anh Tuan Driving Center</span></h3> <p class="text-xl mb-4 font-normal text-gray-400 dark:text-gray-400">Rebuilt the interface, deployed, debugged and developed many
                functionalities for Anh Tuan Driving Center’s website using
                Wordpress, Cpanel, SSH, Cron Jobs...</p></li> <li class="mb-10 ms-4" id="gmo"><div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-2xl font-normal leading-none text-gray-400 dark:text-gray-500">From January 2023 to July 2023</time> <h3 class="text-3xl font-semibold text-gray-400 dark:text-white">Web Developer Internship &amp; Fresher at <span class="text-sky-600">GMO-Z.com</span> <span class="text-red-500">Runsystem</span> JSC</h3> <ul class="text-xl font-normal text-gray-400 dark:text-gray-400"><li>Developed Front End Interface for SPA landing pages</li> <li>Crawled data from blogs about technologies&#39; API using
                    Javascript and Python to build an SPA blog.</li> <li>Participated in an automated translation web app project
                    serving internal staffs, capable of translating XLSX,
                    Markdown,,.. files without losing formats and images.</li></ul></li> <li class="ms-4"><div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-2xl font-normal leading-none text-gray-400 dark:text-gray-500">From September 2023 to December 2023</time> <h3 class="text-3xl font-semibold text-gray-400 dark:text-white">Programming tutor at <span class="text-emerald-600">Marathon Education</span></h3> <p class="text-xl font-normal text-gray-400 dark:text-gray-400">Taught Javascript, HTML, CSS, Python, Wordpress, UI/UX design</p></li></ol>`,Ce(e,"class","timeline-container w-4/5 mx-auto px-auto flex flex-row gap-6")},m(t,n){be(t,e,n)},p:Nt,i:Nt,o:Nt,d(t){t&&Me(e)}}}class vS extends rt{constructor(e){super(),it(this,e,null,_S,et,{})}}function Bf(i,e,t){const n=i.slice();return n[4]=e[t],n[6]=t,n}function xS(i){let e,t=i[4]+"",n,r=" ",s,o,a,l;return{c(){e=He("span"),n=Rt(t),s=Rt(r),o=ut(),Ce(e,"class","text-gray-300")},m(c,u){be(c,e,u),Xe(e,n),Xe(e,s),be(c,o,u),a||(l=es(i[3].call(null,e)),a=!0)},p(c,u){u&1&&t!==(t=c[4]+"")&&Wr(n,t)},d(c){c&&(Me(e),Me(o)),a=!1,l()}}}function Vf(i,e){let t,n,r;return n=new is({props:{variants:e[2],custom:e[6]+1,initial:"hidden",animate:"visible",$$slots:{default:[xS,({motion:s})=>({3:s}),({motion:s})=>s?8:0]},$$scope:{ctx:e}}}),{key:i,first:null,c(){t=Ai(),we(n.$$.fragment),this.first=t},m(s,o){be(s,t,o),Te(n,s,o),r=!0},p(s,o){e=s;const a={};o&1&&(a.custom=e[6]+1),o&129&&(a.$$scope={dirty:o,ctx:e}),n.$set(a)},i(s){r||(ne(n.$$.fragment,s),r=!0)},o(s){re(n.$$.fragment,s),r=!1},d(s){s&&Me(t),Ae(n,s)}}}function yS(i){let e,t=[],n=new Map,r,s,o,a=ei(i[0].split(" "));const l=c=>`${c[4]}${c[6]}`;for(let c=0;c<a.length;c+=1){let u=Bf(i,a,c),f=l(u);n.set(f,t[c]=Vf(f,u))}return{c(){e=He("div");for(let c=0;c<t.length;c+=1)t[c].c()},m(c,u){be(c,e,u);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(e,null);r=!0,s||(o=es(i[3].call(null,e)),s=!0)},p(c,u){u&5&&(a=ei(c[0].split(" ")),Fn(),t=Yh(t,u,l,1,c,a,n,e,$h,Vf,null,Bf),Bn())},i(c){if(!r){for(let u=0;u<a.length;u+=1)ne(t[u]);r=!0}},o(c){for(let u=0;u<t.length;u+=1)re(t[u]);r=!1},d(c){c&&Me(e);for(let u=0;u<t.length;u+=1)t[u].d();s=!1,o()}}}function MS(i){let e,t,n,r,s,o;return r=new is({props:{custom:0,variants:i[2],initial:"hidden",animate:"visible",$$slots:{default:[yS,({motion:a})=>({3:a}),({motion:a})=>a?8:0]},$$scope:{ctx:i}}}),{c(){e=He("div"),t=He("div"),n=He("div"),we(r.$$.fragment),Ce(n,"class","text-7xl leading-snug tracking-wide text-white"),Ce(t,"class","mt-4"),Ce(e,"class",s=In("font-bold",i[1]))},m(a,l){be(a,e,l),Xe(e,t),Xe(t,n),Te(r,n,null),o=!0},p(a,[l]){const c={};l&129&&(c.$$scope={dirty:l,ctx:a}),r.$set(c),(!o||l&2&&s!==(s=In("font-bold",a[1])))&&Ce(e,"class",s)},i(a){o||(ne(r.$$.fragment,a),o=!0)},o(a){re(r.$$.fragment,a),o=!1},d(a){a&&Me(e),Ae(r)}}}function bS(i,e,t){let{words:n}=e,{className:r=void 0}=e;const s={visible:o=>({opacity:1,transition:{delay:o*.1,duration:3}}),hidden:{opacity:0}};return i.$$set=o=>{"words"in o&&t(0,n=o.words),"className"in o&&t(1,r=o.className)},[n,r,s]}class SS extends rt{constructor(e){super(),it(this,e,bS,MS,et,{words:0,className:1})}}function ES(i){let e,t;return e=new SS({props:{words:i[0]}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.words=n[0]),e.$set(s)},i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function TS(i,e,t){let{words:n}=e;return i.$$set=r=>{"words"in r&&t(0,n=r.words)},[n]}class AS extends rt{constructor(e){super(),it(this,e,TS,ES,et,{words:0})}}function wS(i,e,t){const n=i.slice();return n[0]=e[t],n[2]=t,n}function RS(i,e){let t;return{key:i,first:null,c(){t=He("div"),t.innerHTML='<a href="#" class="block"><div class="h-28"><div class="absolute -top-20 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-40%] group-hover:opacity-[0.9] duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle"><img src="https://epicpadprinting.com/public/img/indus/Automotive.png" class="w-36 h-36 mt-6 m-auto" alt="Automotive" title="Automotive" loading="lazy" width="200" height="200"/></div></div> <div class="p-6 z-10 w-full"><p class="mb-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased">Automotive</p></div></a> ',Ce(t,"class","relative group h-48 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"),this.first=t},m(n,r){be(n,t,r)},p:Nt,d(n){n&&Me(t)}}}function CS(i){let e,t,n,r,s,o=[],a=new Map,l=ei(Array(5));const c=u=>u[2];for(let u=0;u<l.length;u+=1){let f=wS(i,l,u),d=c(f);a.set(d,o[u]=RS(d))}return{c(){e=He("section"),t=He("div"),n=He("h1"),n.textContent="Industries we serve",r=ut(),s=He("div");for(let u=0;u<o.length;u+=1)o[u].c();Ce(n,"class","text-center text-5xl pb-12"),Ce(s,"class","grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16"),Ce(t,"class","container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2"),Ce(e,"class","py-24 px-4 lg:px-16")},m(u,f){be(u,e,f),Xe(e,t),Xe(t,n),Xe(t,r),Xe(t,s);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(s,null)},p:Nt,i:Nt,o:Nt,d(u){u&&Me(e);for(let f=0;f<o.length;f+=1)o[f].d()}}}class PS extends rt{constructor(e){super(),it(this,e,null,CS,et,{})}}function kf(i,e,t){const n=i.slice();return n[3]=e[t].id,n[4]=e[t].title,n[5]=e[t].description,n[6]=e[t].image,n[7]=e[t].github,n[8]=e[t].demo,n}function zf(i){let e,t;return e=new O_({props:{id:i[3],title:i[4],description:i[5],image:i[6],github:i[7],demo:i[8]}}),{c(){we(e.$$.fragment)},m(n,r){Te(e,n,r),t=!0},p:Nt,i(n){t||(ne(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){Ae(e,n)}}}function LS(i){let e,t,n,r,s,o,a,l,c,u,f,d,h,g,_,p,m,x,v,M;t=new gS({props:{projectArray:i[1]}}),l=new AS({props:{words:i[0]}}),d=new PS({}),_=new vS({});let A=ei(i[1]),E=[];for(let w=0;w<A.length;w+=1)E[w]=zf(kf(i,A,w));const S=w=>re(E[w],1,1,()=>{E[w]=null});return{c(){e=He("div"),we(t.$$.fragment),n=ut(),r=He("div"),s=ut(),o=He("div"),a=He("div"),we(l.$$.fragment),c=ut(),u=He("div"),u.innerHTML='<div class="text-white">second section</div>',f=ut(),we(d.$$.fragment),h=ut(),g=He("div"),we(_.$$.fragment),p=ut(),m=He("div");for(let w=0;w<E.length;w+=1)E[w].c();x=ut(),v=He("div"),Ce(r,"class","scroll-watcher"),Ce(a,"class","h-[50rem] w-1/2"),Ce(o,"class","text-generate h-auto flex flex-row justify-around items-center svelte-730ww7"),Ce(g,"class","experience svelte-730ww7"),Ce(m,"class","all-project flex flex-row justify-around flex-wrap"),Ce(v,"id","test"),Ce(e,"class","mt-[10rem]")},m(w,N){be(w,e,N),Te(t,e,null),Xe(e,n),Xe(e,r),Xe(e,s),Xe(e,o),Xe(o,a),Te(l,a,null),Xe(o,c),Xe(o,u),Xe(e,f),Te(d,e,null),Xe(e,h),Xe(e,g),Te(_,g,null),Xe(e,p),Xe(e,m);for(let y=0;y<E.length;y+=1)E[y]&&E[y].m(m,null);Xe(e,x),Xe(e,v),M=!0},p(w,[N]){if(N&2){A=ei(w[1]);let y;for(y=0;y<A.length;y+=1){const C=kf(w,A,y);E[y]?(E[y].p(C,N),ne(E[y],1)):(E[y]=zf(C),E[y].c(),ne(E[y],1),E[y].m(m,null))}for(Fn(),y=A.length;y<E.length;y+=1)S(y);Bn()}},i(w){if(!M){ne(t.$$.fragment,w),ne(l.$$.fragment,w),ne(d.$$.fragment,w),ne(_.$$.fragment,w);for(let N=0;N<A.length;N+=1)ne(E[N]);M=!0}},o(w){re(t.$$.fragment,w),re(l.$$.fragment,w),re(d.$$.fragment,w),re(_.$$.fragment,w),E=E.filter(Boolean);for(let N=0;N<E.length;N+=1)re(E[N]);M=!1},d(w){w&&Me(e),Ae(t),Ae(l),Ae(d),Ae(_),Hh(E,w)}}}function DS(i){return["Hello world! My name is Dang Thai An a.k.a アヤ (Aya), I am a passionate Junior Web Developer from Vietnam!",[{id:1,title:"Portfolio",description:"My portfolio written in Svelte, AceternityUI, TailwindCSS and ThreeJS",image:"https://i.imgur.com/DlcOBgu.png",github:"https://github.com/ayakase/Portfolio",demo:"https://ayakase-portfolio.netlify.app/",section:"#portfolio"},{id:2,title:"Hoang Ha Tourism",description:"An E-commerce blog that provide tours and toursim services, written in ExpressJS, Vue 3, Pinia, Bootstrap,  JWT, MySQL, Sequelize, Cloudinary, ",image:"https://i.imgur.com/wLCv97q.png",github:"https://github.com",section:"#hoangha"},{id:3,title:"Fuwa Chat App",description:"An Serverless real-time application written in VueJS, Vuetify, Firebase Firestore 10, Cloudinary ",image:"https://i.imgur.com/EDlQ2xu.png",github:"https://github.com/ayakase/Fuwa",demo:"https://touhou-vn.site/",section:"#fuwa"},{id:4,title:"Japanese translation tool",description:"A tool for translating files in Japanese to Vietnamese using OpenAI API, capable of converting XLSX, Markdown files ",image:"https://i.imgur.com/EDlQ2xu.png",github:"https://github.com/ayakase/Fuwa",section:"#translate"}]]}class IS extends rt{constructor(e){super(),it(this,e,DS,LS,et,{})}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gc="162",dr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},NS=0,Hf=1,US=2,Pm=1,OS=2,Kn=3,ni=0,on=1,Ln=2,Si=0,kr=1,Gf=2,Wf=3,Xf=4,FS=5,Xi=100,BS=101,VS=102,jf=103,$f=104,kS=200,zS=201,HS=202,GS=203,ac=204,lc=205,WS=206,XS=207,jS=208,$S=209,YS=210,qS=211,KS=212,ZS=213,JS=214,QS=0,eE=1,tE=2,pa=3,nE=4,iE=5,rE=6,sE=7,Lm=0,oE=1,aE=2,Ei=0,lE=1,cE=2,uE=3,fE=4,dE=5,hE=6,pE=7,Yf="attached",mE="detached",Dm=300,Xr=301,jr=302,cc=303,uc=304,Ra=306,$r=1e3,mn=1001,ma=1002,kt=1003,fc=1004,Dr=1005,qt=1006,Jo=1007,Zn=1008,Ti=1009,gE=1010,_E=1011,Wc=1012,Im=1013,Mi=1014,En=1015,Ys=1016,Nm=1017,Um=1018,Qi=1020,vE=1021,gn=1023,xE=1024,yE=1025,er=1026,Yr=1027,Om=1028,Fm=1029,ME=1030,Bm=1031,Vm=1033,qa=33776,Ka=33777,Za=33778,Ja=33779,qf=35840,Kf=35841,Zf=35842,Jf=35843,km=36196,Qf=37492,ed=37496,td=37808,nd=37809,id=37810,rd=37811,sd=37812,od=37813,ad=37814,ld=37815,cd=37816,ud=37817,fd=37818,dd=37819,hd=37820,pd=37821,Qa=36492,md=36494,gd=36495,bE=36283,_d=36284,vd=36285,xd=36286,qs=2300,qr=2301,el=2302,yd=2400,Md=2401,bd=2402,SE=2500,EE=0,zm=1,dc=2,TE=3200,AE=3201,Hm=0,wE=1,xi="",tn="srgb",Wt="srgb-linear",Xc="display-p3",Ca="display-p3-linear",ga="linear",St="srgb",_a="rec709",va="p3",pr=7680,Sd=519,RE=512,CE=513,PE=514,Gm=515,LE=516,DE=517,IE=518,NE=519,hc=35044,Ed="300 es",pc=1035,Jn=2e3,xa=2001;class ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Td=1234567;const Is=Math.PI/180,Kr=180/Math.PI;function wn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function jc(i,e){return(i%e+e)%e}function UE(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function OE(i,e,t){return i!==e?(t-i)/(e-i):0}function Ns(i,e,t){return(1-t)*i+t*e}function FE(i,e,t,n){return Ns(i,e,1-Math.exp(-t*n))}function BE(i,e=1){return e-Math.abs(jc(i,e*2)-e)}function VE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function kE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zE(i,e){return i+Math.floor(Math.random()*(e-i+1))}function HE(i,e){return i+Math.random()*(e-i)}function GE(i){return i*(.5-Math.random())}function WE(i){i!==void 0&&(Td=i);let e=Td+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function XE(i){return i*Is}function jE(i){return i*Kr}function mc(i){return(i&i-1)===0&&i!==0}function $E(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ya(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function YE(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),h=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*h,a*c);break;case"YXY":i.set(l*h,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Us={DEG2RAD:Is,RAD2DEG:Kr,generateUUID:wn,clamp:Gt,euclideanModulo:jc,mapLinear:UE,inverseLerp:OE,lerp:Ns,damp:FE,pingpong:BE,smoothstep:VE,smootherstep:kE,randInt:zE,randFloat:HE,randFloatSpread:GE,seededRandom:WE,degToRad:XE,radToDeg:jE,isPowerOfTwo:mc,ceilPowerOfTwo:$E,floorPowerOfTwo:ya,setQuaternionFromProperEuler:YE,normalize:ht,denormalize:Tn};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,r,s,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],_=r[0],p=r[3],m=r[6],x=r[1],v=r[4],M=r[7],A=r[2],E=r[5],S=r[8];return s[0]=o*_+a*x+l*A,s[3]=o*p+a*v+l*E,s[6]=o*m+a*M+l*S,s[1]=c*_+u*x+f*A,s[4]=c*p+u*v+f*E,s[7]=c*m+u*M+f*S,s[2]=d*_+h*x+g*A,s[5]=d*p+h*v+g*E,s[8]=d*m+h*M+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=t*f+n*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tl=new Je;function Wm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qE(){const i=Ks("canvas");return i.style.display="block",i}const Ad={};function Xm(i){i in Ad||(Ad[i]=!0,console.warn(i))}const wd=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rd=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xo={[Wt]:{transfer:ga,primaries:_a,toReference:i=>i,fromReference:i=>i},[tn]:{transfer:St,primaries:_a,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ca]:{transfer:ga,primaries:va,toReference:i=>i.applyMatrix3(Rd),fromReference:i=>i.applyMatrix3(wd)},[Xc]:{transfer:St,primaries:va,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Rd),fromReference:i=>i.applyMatrix3(wd).convertLinearToSRGB()}},KE=new Set([Wt,Ca]),ft={enabled:!0,_workingColorSpace:Wt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!KE.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=xo[e].toReference,r=xo[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return xo[i].primaries},getTransfer:function(i){return i===xi?ga:xo[i].transfer}};function zr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let mr;class jm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mr===void 0&&(mr=Ks("canvas")),mr.width=e.width,mr.height=e.height;const n=mr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zr(t[n]/255)*255):t[n]=zr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZE=0;class $m{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(il(r[o].image)):s.push(il(r[o]))}else s=il(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JE=0;class Ht extends ar{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=mn,r=mn,s=qt,o=Zn,a=gn,l=Ti,c=Ht.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=wn(),this.name="",this.source=new $m(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $r:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $r:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Dm;Ht.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(h+1)/2,A=(m+1)/2,E=(u+d)/4,S=(f+_)/4,w=(g+p)/4;return v>M&&v>A?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=E/n,s=S/n):M>A?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=E/r,s=w/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=S/s,r=w/s),this.set(n,r,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(f-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+h+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QE extends ar{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Ht(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $m(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends QE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ym extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eT extends Ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let p=1-a;const m=l*d+c*h+u*g+f*_,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const A=Math.sqrt(v),E=Math.atan2(A,m*x);p=Math.sin(p*E)/A,a=Math.sin(a*E)/A}const M=a*x;if(l=l*p+d*M,c=c*p+h*M,u=u*p+g*M,f=f*p+_*M,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-a*h,e[t+2]=c*g+u*h+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),d=l(n/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rl=new I,Cd=new Un;class si{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yo.copy(n.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),Mo.subVectors(this.max,_s),gr.subVectors(e.a,_s),_r.subVectors(e.b,_s),vr.subVectors(e.c,_s),ci.subVectors(_r,gr),ui.subVectors(vr,_r),Fi.subVectors(gr,vr);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Fi.z,Fi.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Fi.z,0,-Fi.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Fi.y,Fi.x,0];return!sl(t,gr,_r,vr,Mo)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,gr,_r,vr,Mo))?!1:(bo.crossVectors(ci,ui),t=[bo.x,bo.y,bo.z],sl(t,gr,_r,vr,Mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new I,new I,new I,new I,new I,new I,new I,new I],yn=new I,yo=new si,gr=new I,_r=new I,vr=new I,ci=new I,ui=new I,Fi=new I,_s=new I,Mo=new I,bo=new I,Bi=new I;function sl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Bi.fromArray(i,s);const a=r.x*Math.abs(Bi.x)+r.y*Math.abs(Bi.y)+r.z*Math.abs(Bi.z),l=e.dot(Bi),c=t.dot(Bi),u=n.dot(Bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tT=new si,vs=new I,ol=new I;class Vn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tT.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(ol)),this.expandByPoint(vs.copy(e.center).sub(ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new I,al=new I,So=new I,fi=new I,ll=new I,Eo=new I,cl=new I;class no{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){al.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(al);const s=e.distanceTo(t)*.5,o=-this.direction.dot(So),a=fi.dot(this.direction),l=-fi.dot(So),c=fi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(al).addScaledVector(So,d),h}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),r=Xn.dot(Xn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,r,s){ll.subVectors(t,e),Eo.subVectors(n,e),cl.crossVectors(ll,Eo);let o=this.direction.dot(cl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,e);const l=a*this.direction.dot(Eo.crossVectors(fi,Eo));if(l<0)return null;const c=a*this.direction.dot(ll.cross(fi));if(c<0||l+c>o)return null;const u=-a*fi.dot(cl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,r,s,o,a,l,c,u,f,d,h,g,_,p){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,d,h,g,_,p)}set(e,t,n,r,s,o,a,l,c,u,f,d,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/xr.setFromMatrixColumn(e,0).length(),s=1/xr.setFromMatrixColumn(e,1).length(),o=1/xr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d+_*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nT,e,iT)}lookAt(e,t,n){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),di.crossVectors(n,ln),di.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),di.crossVectors(n,ln)),di.normalize(),To.crossVectors(ln,di),r[0]=di.x,r[4]=To.x,r[8]=ln.x,r[1]=di.y,r[5]=To.y,r[9]=ln.y,r[2]=di.z,r[6]=To.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],_=n[6],p=n[10],m=n[14],x=n[3],v=n[7],M=n[11],A=n[15],E=r[0],S=r[4],w=r[8],N=r[12],y=r[1],C=r[5],$=r[9],J=r[13],D=r[2],j=r[6],V=r[10],Z=r[14],W=r[3],q=r[7],Q=r[11],ie=r[15];return s[0]=o*E+a*y+l*D+c*W,s[4]=o*S+a*C+l*j+c*q,s[8]=o*w+a*$+l*V+c*Q,s[12]=o*N+a*J+l*Z+c*ie,s[1]=u*E+f*y+d*D+h*W,s[5]=u*S+f*C+d*j+h*q,s[9]=u*w+f*$+d*V+h*Q,s[13]=u*N+f*J+d*Z+h*ie,s[2]=g*E+_*y+p*D+m*W,s[6]=g*S+_*C+p*j+m*q,s[10]=g*w+_*$+p*V+m*Q,s[14]=g*N+_*J+p*Z+m*ie,s[3]=x*E+v*y+M*D+A*W,s[7]=x*S+v*C+M*j+A*q,s[11]=x*w+v*$+M*V+A*Q,s[15]=x*N+v*J+M*Z+A*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*f-r*c*f-s*a*d+n*c*d+r*a*h-n*l*h)+_*(+t*l*h-t*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+p*(+t*c*f-t*a*h-s*o*f+n*o*h+s*a*u-n*c*u)+m*(-r*a*u-t*l*f+t*a*d+r*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],x=f*p*c-_*d*c+_*l*h-a*p*h-f*l*m+a*d*m,v=g*d*c-u*p*c-g*l*h+o*p*h+u*l*m-o*d*m,M=u*_*c-g*f*c+g*a*h-o*_*h-u*a*m+o*f*m,A=g*f*l-u*_*l-g*a*d+o*_*d+u*a*p-o*f*p,E=t*x+n*v+r*M+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/E;return e[0]=x*S,e[1]=(_*d*s-f*p*s-_*r*h+n*p*h+f*r*m-n*d*m)*S,e[2]=(a*p*s-_*l*s+_*r*c-n*p*c-a*r*m+n*l*m)*S,e[3]=(f*l*s-a*d*s-f*r*c+n*d*c+a*r*h-n*l*h)*S,e[4]=v*S,e[5]=(u*p*s-g*d*s+g*r*h-t*p*h-u*r*m+t*d*m)*S,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*m-t*l*m)*S,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*h+t*l*h)*S,e[8]=M*S,e[9]=(g*f*s-u*_*s-g*n*h+t*_*h+u*n*m-t*f*m)*S,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*S,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*h-t*a*h)*S,e[12]=A*S,e[13]=(u*_*r-g*f*r+g*n*d-t*_*d-u*n*p+t*f*p)*S,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*p-t*a*p)*S,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*d+t*a*d)*S,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,_=o*u,p=o*f,m=a*f,x=l*c,v=l*u,M=l*f,A=n.x,E=n.y,S=n.z;return r[0]=(1-(_+m))*A,r[1]=(h+M)*A,r[2]=(g-v)*A,r[3]=0,r[4]=(h-M)*E,r[5]=(1-(d+m))*E,r[6]=(p+x)*E,r[7]=0,r[8]=(g+v)*S,r[9]=(p-x)*S,r[10]=(1-(d+_))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=xr.set(r[0],r[1],r[2]).length();const o=xr.set(r[4],r[5],r[6]).length(),a=xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/s,u=1/o,f=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,t.setFromRotationMatrix(Mn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Jn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let h,g;if(a===Jn)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===xa)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Jn){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),d=(t+e)*c,h=(n+r)*u;let g,_;if(a===Jn)g=(o+s)*f,_=-2*f;else if(a===xa)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xr=new I,Mn=new Qe,nT=new I(0,0,0),iT=new I(1,1,1),di=new I,To=new I,ln=new I,Pd=new Qe,Ld=new Un;class On{constructor(e=0,t=0,n=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ld.setFromEuler(this),this.setFromQuaternion(Ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class qm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rT=0;const Dd=new I,yr=new Un,jn=new Qe,Ao=new I,xs=new I,sT=new I,oT=new Un,Id=new I(1,0,0),Nd=new I(0,1,0),Ud=new I(0,0,1),aT={type:"added"},lT={type:"removed"},ul={type:"childadded",child:null},fl={type:"childremoved",child:null};class wt extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new I,t=new On,n=new Un,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Je}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(Id,e)}rotateY(e){return this.rotateOnAxis(Nd,e)}rotateZ(e){return this.rotateOnAxis(Ud,e)}translateOnAxis(e,t){return Dd.copy(e).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Id,e)}translateY(e){return this.translateOnAxis(Nd,e)}translateZ(e){return this.translateOnAxis(Ud,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ao.copy(e):Ao.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(xs,Ao,this.up):jn.lookAt(Ao,xs,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(jn),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(aT),ul.child=e,this.dispatchEvent(ul),ul.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lT),fl.child=e,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,sT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,oT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}wt.DEFAULT_UP=new I(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new I,$n=new I,dl=new I,Yn=new I,Mr=new I,br=new I,Od=new I,hl=new I,pl=new I,ml=new I;class Dn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){bn.subVectors(r,t),$n.subVectors(n,t),dl.subVectors(e,t);const o=bn.dot(bn),a=bn.dot($n),l=bn.dot(dl),c=$n.dot($n),u=$n.dot(dl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),$n.subVectors(e,t),bn.cross($n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),bn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Mr.subVectors(r,n),br.subVectors(s,n),hl.subVectors(e,n);const l=Mr.dot(hl),c=br.dot(hl);if(l<=0&&c<=0)return t.copy(n);pl.subVectors(e,r);const u=Mr.dot(pl),f=br.dot(pl);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Mr,o);ml.subVectors(e,s);const h=Mr.dot(ml),g=br.dot(ml);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(br,a);const p=u*g-h*f;if(p<=0&&f-u>=0&&h-g>=0)return Od.subVectors(s,r),a=(f-u)/(f-u+(h-g)),t.copy(r).addScaledVector(Od,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(Mr,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},wo={h:0,s:0,l:0};function gl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ft.workingColorSpace){if(e=jc(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=gl(o,s,e+1/3),this.g=gl(o,s,e),this.b=gl(o,s,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,t=tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){const n=Km[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=nl(e.r),this.g=nl(e.g),this.b=nl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return ft.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Gt(Yt.r*255,0,255))*65536+Math.round(Gt(Yt.g*255,0,255))*256+Math.round(Gt(Yt.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=tn){ft.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,r=Yt.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(wo);const n=Ns(hi.h,wo.h,t),r=Ns(hi.s,wo.s,t),s=Ns(hi.l,wo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new je;je.NAMES=Km;let cT=0;class Nn extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=kr,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=lc,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ac&&(n.blendSrc=this.blendSrc),this.blendDst!==lc&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ki extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Lm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new I,Ro=new Fe;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hc&&(e.usage=this.usage),e}}class Zm extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jm extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xn extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uT=0;const hn=new Qe,_l=new wt,Sr=new I,cn=new si,ys=new si,Vt=new I;class Cn extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wm(e)?Jm:Zm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return _l.lookAt(e),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(cn.min,ys.min),cn.expandByPoint(Vt),Vt.addVectors(cn.max,ys.max),cn.expandByPoint(Vt)):(cn.expandByPoint(ys.min),cn.expandByPoint(ys.max))}cn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Vt.fromBufferAttribute(a,c),l&&(Sr.fromBufferAttribute(e,c),Vt.add(Sr)),r=Math.max(r,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new I,l[w]=new I;const c=new I,u=new I,f=new I,d=new Fe,h=new Fe,g=new Fe,_=new I,p=new I;function m(w,N,y){c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,N),f.fromBufferAttribute(n,y),d.fromBufferAttribute(s,w),h.fromBufferAttribute(s,N),g.fromBufferAttribute(s,y),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const C=1/(h.x*g.y-g.x*h.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(C),p.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(C),a[w].add(_),a[N].add(_),a[y].add(_),l[w].add(p),l[N].add(p),l[y].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let w=0,N=x.length;w<N;++w){const y=x[w],C=y.start,$=y.count;for(let J=C,D=C+$;J<D;J+=3)m(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const v=new I,M=new I,A=new I,E=new I;function S(w){A.fromBufferAttribute(r,w),E.copy(A);const N=a[w];v.copy(N),v.sub(A.multiplyScalar(A.dot(N))).normalize(),M.crossVectors(E,N);const C=M.dot(l[w])<0?-1:1;o.setXYZW(w,v.x,v.y,v.z,C)}for(let w=0,N=x.length;w<N;++w){const y=x[w],C=y.start,$=y.count;for(let J=C,D=C+$;J<D;J+=3)S(e.getX(J+0)),S(e.getX(J+1)),S(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[h++]}return new rn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fd=new Qe,Vi=new no,Co=new Vn,Bd=new I,Er=new I,Tr=new I,Ar=new I,vl=new I,Po=new I,Lo=new Fe,Do=new Fe,Io=new Fe,Vd=new I,kd=new I,zd=new I,No=new I,Uo=new I;class Zt extends wt{constructor(e=new Cn,t=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(vl.fromBufferAttribute(f,e),o?Po.addScaledVector(vl,u):Po.addScaledVector(vl.sub(t),u))}t.add(Po)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(s),Vi.copy(e.ray).recast(e.near),!(Co.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Co,Bd)===null||Vi.origin.distanceToSquared(Bd)>(e.far-e.near)**2))&&(Fd.copy(s).invert(),Vi.copy(e.ray).applyMatrix4(Fd),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],x=Math.max(p.start,h.start),v=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let M=x,A=v;M<A;M+=3){const E=a.getX(M),S=a.getX(M+1),w=a.getX(M+2);r=Oo(this,m,e,n,c,u,f,E,S,w),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const x=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);r=Oo(this,o,e,n,c,u,f,x,v,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],x=Math.max(p.start,h.start),v=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let M=x,A=v;M<A;M+=3){const E=M,S=M+1,w=M+2;r=Oo(this,m,e,n,c,u,f,E,S,w),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const x=p,v=p+1,M=p+2;r=Oo(this,o,e,n,c,u,f,x,v,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function fT(i,e,t,n,r,s,o,a){let l;if(e.side===on?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ni,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Uo);return c<t.near||c>t.far?null:{distance:c,point:Uo.clone(),object:i}}function Oo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Er),i.getVertexPosition(l,Tr),i.getVertexPosition(c,Ar);const u=fT(i,e,t,n,Er,Tr,Ar,No);if(u){r&&(Lo.fromBufferAttribute(r,a),Do.fromBufferAttribute(r,l),Io.fromBufferAttribute(r,c),u.uv=Dn.getInterpolation(No,Er,Tr,Ar,Lo,Do,Io,new Fe)),s&&(Lo.fromBufferAttribute(s,a),Do.fromBufferAttribute(s,l),Io.fromBufferAttribute(s,c),u.uv1=Dn.getInterpolation(No,Er,Tr,Ar,Lo,Do,Io,new Fe)),o&&(Vd.fromBufferAttribute(o,a),kd.fromBufferAttribute(o,l),zd.fromBufferAttribute(o,c),u.normal=Dn.getInterpolation(No,Er,Tr,Ar,Vd,kd,zd,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};Dn.getNormal(Er,Tr,Ar,f.normal),u.face=f}return u}class io extends Cn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(f,2));function g(_,p,m,x,v,M,A,E,S,w,N){const y=M/S,C=A/w,$=M/2,J=A/2,D=E/2,j=S+1,V=w+1;let Z=0,W=0;const q=new I;for(let Q=0;Q<V;Q++){const ie=Q*C-J;for(let de=0;de<j;de++){const Ne=de*y-$;q[_]=Ne*x,q[p]=ie*v,q[m]=D,c.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[m]=E>0?1:-1,u.push(q.x,q.y,q.z),f.push(de/S),f.push(1-Q/w),Z+=1}}for(let Q=0;Q<w;Q++)for(let ie=0;ie<S;ie++){const de=d+ie+j*Q,Ne=d+ie+j*(Q+1),k=d+(ie+1)+j*(Q+1),oe=d+(ie+1)+j*Q;l.push(de,Ne,oe),l.push(Ne,k,oe),W+=6}a.addGroup(h,W,N),h+=W,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=Zr(i[t]);for(const r in n)e[r]=n[r]}return e}function dT(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qm(i){return i.getRenderTarget()===null?i.outputColorSpace:ft.workingColorSpace}const hT={clone:Zr,merge:Qt};var pT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pT,this.fragmentShader=mT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=dT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class eg extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new I,Hd=new Fe,Gd=new Fe;class nn extends eg{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,Hd,Gd),t.subVectors(Gd,Hd)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Is*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wr=-90,Rr=1;class gT extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(wr,Rr,e,t);r.layers=this.layers,this.add(r);const s=new nn(wr,Rr,e,t);s.layers=this.layers,this.add(s);const o=new nn(wr,Rr,e,t);o.layers=this.layers,this.add(o);const a=new nn(wr,Rr,e,t);a.layers=this.layers,this.add(a);const l=new nn(wr,Rr,e,t);l.layers=this.layers,this.add(l);const c=new nn(wr,Rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class tg extends Ht{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _T extends nr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new tg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new io(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:Zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Si});s.uniforms.tEquirect.value=t;const o=new Zt(r,s),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=qt),new gT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const xl=new I,vT=new I,xT=new Je;class _i{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=xl.subVectors(n,t).cross(vT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xT.getNormalMatrix(e),r=this.coplanarPoint(xl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Vn,Fo=new I;class $c{constructor(e=new _i,t=new _i,n=new _i,r=new _i,s=new _i,o=new _i){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],_=r[10],p=r[11],m=r[12],x=r[13],v=r[14],M=r[15];if(n[0].setComponents(l-s,d-c,p-h,M-m).normalize(),n[1].setComponents(l+s,d+c,p+h,M+m).normalize(),n[2].setComponents(l+o,d+u,p+g,M+x).normalize(),n[3].setComponents(l-o,d-u,p-g,M-x).normalize(),n[4].setComponents(l-a,d-f,p-_,M-v).normalize(),t===Jn)n[5].setComponents(l+a,d+f,p+_,M+v).normalize();else if(t===xa)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fo.x=r.normal.x>0?e.max.x:e.min.x,Fo.y=r.normal.y>0?e.max.y:e.min.y,Fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ng(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function yT(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,d=c.usage,h=f.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:h}}function s(c,u,f){const d=u.array,h=u._updateRange,g=u.updateRanges;if(i.bindBuffer(f,c),h.count===-1&&g.length===0&&i.bufferSubData(f,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?i.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}h.count!==-1&&(t?i.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):i.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class Pa extends Cn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const x=m*d-o;for(let v=0;v<c;v++){const M=v*f-s;g.push(M,-x,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const v=x+c*m,M=x+c*(m+1),A=x+1+c*(m+1),E=x+1+c*m;h.push(v,M,E),h.push(M,A,E)}this.setIndex(h),this.setAttribute("position",new xn(g,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var MT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bT=`#ifdef USE_ALPHAHASH
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
#endif`,ST=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ET=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wT=`#ifdef USE_AOMAP
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
#endif`,RT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CT=`#ifdef USE_BATCHING
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
#endif`,PT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,LT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NT=`#ifdef USE_IRIDESCENCE
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
#endif`,UT=`#ifdef USE_BUMPMAP
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
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,GT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,WT=`#define PI 3.141592653589793
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
} // validated`,XT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jT=`vec3 transformedNormal = objectNormal;
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
#endif`,$T=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZT="gl_FragColor = linearToOutputTexel( gl_FragColor );",JT=`
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
}`,QT=`#ifdef USE_ENVMAP
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
#endif`,eA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tA=`#ifdef USE_ENVMAP
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
#endif`,nA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iA=`#ifdef USE_ENVMAP
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
#endif`,rA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lA=`#ifdef USE_GRADIENTMAP
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
}`,cA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hA=`uniform bool receiveShadow;
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
#endif`,pA=`#ifdef USE_ENVMAP
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
#endif`,mA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_A=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xA=`PhysicalMaterial material;
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
#endif`,yA=`struct PhysicalMaterial {
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
}`,MA=`
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
#endif`,bA=`#if defined( RE_IndirectDiffuse )
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
#endif`,SA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,RA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LA=`#if defined( USE_POINTS_UV )
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
#endif`,DA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OA=`#ifdef USE_MORPHNORMALS
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
#endif`,FA=`#ifdef USE_MORPHTARGETS
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
#endif`,BA=`#ifdef USE_MORPHTARGETS
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
#endif`,VA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WA=`#ifdef USE_NORMALMAP
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
#endif`,XA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$A=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ew=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ow=`float getShadowMask() {
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
}`,aw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lw=`#ifdef USE_SKINNING
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
#endif`,cw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uw=`#ifdef USE_SKINNING
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
#endif`,fw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mw=`#ifdef USE_TRANSMISSION
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
#endif`,gw=`#ifdef USE_TRANSMISSION
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
#endif`,_w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bw=`uniform sampler2D t2D;
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
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ew=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Aw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`#include <common>
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
}`,Rw=`#if DEPTH_PACKING == 3200
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
}`,Cw=`#define DISTANCE
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
}`,Pw=`#define DISTANCE
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
}`,Lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`uniform float scale;
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
}`,Nw=`uniform vec3 diffuse;
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
}`,Uw=`#include <common>
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
}`,Ow=`uniform vec3 diffuse;
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
}`,Fw=`#define LAMBERT
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
}`,Bw=`#define LAMBERT
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
}`,Vw=`#define MATCAP
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
}`,kw=`#define MATCAP
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
}`,zw=`#define NORMAL
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
}`,Hw=`#define NORMAL
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
}`,Gw=`#define PHONG
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
}`,Ww=`#define PHONG
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
}`,Xw=`#define STANDARD
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
}`,jw=`#define STANDARD
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
}`,$w=`#define TOON
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
}`,Yw=`#define TOON
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
}`,qw=`uniform float size;
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
}`,Kw=`uniform vec3 diffuse;
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
}`,Zw=`#include <common>
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
}`,Jw=`uniform vec3 color;
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
}`,Qw=`uniform float rotation;
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
}`,e1=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:MT,alphahash_pars_fragment:bT,alphamap_fragment:ST,alphamap_pars_fragment:ET,alphatest_fragment:TT,alphatest_pars_fragment:AT,aomap_fragment:wT,aomap_pars_fragment:RT,batching_pars_vertex:CT,batching_vertex:PT,begin_vertex:LT,beginnormal_vertex:DT,bsdfs:IT,iridescence_fragment:NT,bumpmap_pars_fragment:UT,clipping_planes_fragment:OT,clipping_planes_pars_fragment:FT,clipping_planes_pars_vertex:BT,clipping_planes_vertex:VT,color_fragment:kT,color_pars_fragment:zT,color_pars_vertex:HT,color_vertex:GT,common:WT,cube_uv_reflection_fragment:XT,defaultnormal_vertex:jT,displacementmap_pars_vertex:$T,displacementmap_vertex:YT,emissivemap_fragment:qT,emissivemap_pars_fragment:KT,colorspace_fragment:ZT,colorspace_pars_fragment:JT,envmap_fragment:QT,envmap_common_pars_fragment:eA,envmap_pars_fragment:tA,envmap_pars_vertex:nA,envmap_physical_pars_fragment:pA,envmap_vertex:iA,fog_vertex:rA,fog_pars_vertex:sA,fog_fragment:oA,fog_pars_fragment:aA,gradientmap_pars_fragment:lA,lightmap_fragment:cA,lightmap_pars_fragment:uA,lights_lambert_fragment:fA,lights_lambert_pars_fragment:dA,lights_pars_begin:hA,lights_toon_fragment:mA,lights_toon_pars_fragment:gA,lights_phong_fragment:_A,lights_phong_pars_fragment:vA,lights_physical_fragment:xA,lights_physical_pars_fragment:yA,lights_fragment_begin:MA,lights_fragment_maps:bA,lights_fragment_end:SA,logdepthbuf_fragment:EA,logdepthbuf_pars_fragment:TA,logdepthbuf_pars_vertex:AA,logdepthbuf_vertex:wA,map_fragment:RA,map_pars_fragment:CA,map_particle_fragment:PA,map_particle_pars_fragment:LA,metalnessmap_fragment:DA,metalnessmap_pars_fragment:IA,morphinstance_vertex:NA,morphcolor_vertex:UA,morphnormal_vertex:OA,morphtarget_pars_vertex:FA,morphtarget_vertex:BA,normal_fragment_begin:VA,normal_fragment_maps:kA,normal_pars_fragment:zA,normal_pars_vertex:HA,normal_vertex:GA,normalmap_pars_fragment:WA,clearcoat_normal_fragment_begin:XA,clearcoat_normal_fragment_maps:jA,clearcoat_pars_fragment:$A,iridescence_pars_fragment:YA,opaque_fragment:qA,packing:KA,premultiplied_alpha_fragment:ZA,project_vertex:JA,dithering_fragment:QA,dithering_pars_fragment:ew,roughnessmap_fragment:tw,roughnessmap_pars_fragment:nw,shadowmap_pars_fragment:iw,shadowmap_pars_vertex:rw,shadowmap_vertex:sw,shadowmask_pars_fragment:ow,skinbase_vertex:aw,skinning_pars_vertex:lw,skinning_vertex:cw,skinnormal_vertex:uw,specularmap_fragment:fw,specularmap_pars_fragment:dw,tonemapping_fragment:hw,tonemapping_pars_fragment:pw,transmission_fragment:mw,transmission_pars_fragment:gw,uv_pars_fragment:_w,uv_pars_vertex:vw,uv_vertex:xw,worldpos_vertex:yw,background_vert:Mw,background_frag:bw,backgroundCube_vert:Sw,backgroundCube_frag:Ew,cube_vert:Tw,cube_frag:Aw,depth_vert:ww,depth_frag:Rw,distanceRGBA_vert:Cw,distanceRGBA_frag:Pw,equirect_vert:Lw,equirect_frag:Dw,linedashed_vert:Iw,linedashed_frag:Nw,meshbasic_vert:Uw,meshbasic_frag:Ow,meshlambert_vert:Fw,meshlambert_frag:Bw,meshmatcap_vert:Vw,meshmatcap_frag:kw,meshnormal_vert:zw,meshnormal_frag:Hw,meshphong_vert:Gw,meshphong_frag:Ww,meshphysical_vert:Xw,meshphysical_frag:jw,meshtoon_vert:$w,meshtoon_frag:Yw,points_vert:qw,points_frag:Kw,shadow_vert:Zw,shadow_frag:Jw,sprite_vert:Qw,sprite_frag:e1},he={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Pn={basic:{uniforms:Qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new je(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Qt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Qt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new je(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Qt([he.points,he.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Qt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Qt([he.common,he.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Qt([he.sprite,he.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Qt([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Qt([he.lights,he.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Pn.physical={uniforms:Qt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Bo={r:0,b:0,g:0},zi=new On,t1=new Qe;function n1(i,e,t,n,r,s,o){const a=new je(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(p,m){let x=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ra)?(u===void 0&&(u=new Zt(new io(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Zr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),zi.copy(m.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(t1.makeRotationFromEuler(zi)),u.material.toneMapped=ft.getTransfer(v.colorSpace)!==St,(f!==v||d!==v.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,h=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Zt(new Pa(2,2),new Li({name:"BackgroundMaterial",uniforms:Zr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=ft.getTransfer(v.colorSpace)!==St,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,h=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Bo,Qm(i)),n.buffers.color.setClear(Bo.r,Bo.g,Bo.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function i1(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(D,j,V,Z,W){let q=!1;if(o){const Q=_(Z,V,j);c!==Q&&(c=Q,h(c.object)),q=m(D,Z,V,W),q&&x(D,Z,V,W)}else{const Q=j.wireframe===!0;(c.geometry!==Z.id||c.program!==V.id||c.wireframe!==Q)&&(c.geometry=Z.id,c.program=V.id,c.wireframe=Q,q=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,w(D,j,V,Z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function h(D){return n.isWebGL2?i.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,j,V){const Z=V.wireframe===!0;let W=a[D.id];W===void 0&&(W={},a[D.id]=W);let q=W[j.id];q===void 0&&(q={},W[j.id]=q);let Q=q[Z];return Q===void 0&&(Q=p(d()),q[Z]=Q),Q}function p(D){const j=[],V=[],Z=[];for(let W=0;W<r;W++)j[W]=0,V[W]=0,Z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:V,attributeDivisors:Z,object:D,attributes:{},index:null}}function m(D,j,V,Z){const W=c.attributes,q=j.attributes;let Q=0;const ie=V.getAttributes();for(const de in ie)if(ie[de].location>=0){const k=W[de];let oe=q[de];if(oe===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),k===void 0||k.attribute!==oe||oe&&k.data!==oe.data)return!0;Q++}return c.attributesNum!==Q||c.index!==Z}function x(D,j,V,Z){const W={},q=j.attributes;let Q=0;const ie=V.getAttributes();for(const de in ie)if(ie[de].location>=0){let k=q[de];k===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(k=D.instanceColor));const oe={};oe.attribute=k,k&&k.data&&(oe.data=k.data),W[de]=oe,Q++}c.attributes=W,c.attributesNum=Q,c.index=Z}function v(){const D=c.newAttributes;for(let j=0,V=D.length;j<V;j++)D[j]=0}function M(D){A(D,0)}function A(D,j){const V=c.newAttributes,Z=c.enabledAttributes,W=c.attributeDivisors;V[D]=1,Z[D]===0&&(i.enableVertexAttribArray(D),Z[D]=1),W[D]!==j&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,j),W[D]=j)}function E(){const D=c.newAttributes,j=c.enabledAttributes;for(let V=0,Z=j.length;V<Z;V++)j[V]!==D[V]&&(i.disableVertexAttribArray(V),j[V]=0)}function S(D,j,V,Z,W,q,Q){Q===!0?i.vertexAttribIPointer(D,j,V,W,q):i.vertexAttribPointer(D,j,V,Z,W,q)}function w(D,j,V,Z){if(n.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=Z.attributes,q=V.getAttributes(),Q=j.defaultAttributeValues;for(const ie in q){const de=q[ie];if(de.location>=0){let Ne=W[ie];if(Ne===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(Ne=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(Ne=D.instanceColor)),Ne!==void 0){const k=Ne.normalized,oe=Ne.itemSize,ge=t.get(Ne);if(ge===void 0)continue;const Ve=ge.buffer,Pe=ge.type,ve=ge.bytesPerElement,at=n.isWebGL2===!0&&(Pe===i.INT||Pe===i.UNSIGNED_INT||Ne.gpuType===Im);if(Ne.isInterleavedBufferAttribute){const Oe=Ne.data,O=Oe.stride,Tt=Ne.offset;if(Oe.isInstancedInterleavedBuffer){for(let te=0;te<de.locationSize;te++)A(de.location+te,Oe.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let te=0;te<de.locationSize;te++)M(de.location+te);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let te=0;te<de.locationSize;te++)S(de.location+te,oe/de.locationSize,Pe,k,O*ve,(Tt+oe/de.locationSize*te)*ve,at)}else{if(Ne.isInstancedBufferAttribute){for(let Oe=0;Oe<de.locationSize;Oe++)A(de.location+Oe,Ne.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Oe=0;Oe<de.locationSize;Oe++)M(de.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Oe=0;Oe<de.locationSize;Oe++)S(de.location+Oe,oe/de.locationSize,Pe,k,oe*ve,oe/de.locationSize*Oe*ve,at)}}else if(Q!==void 0){const k=Q[ie];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(de.location,k);break;case 3:i.vertexAttrib3fv(de.location,k);break;case 4:i.vertexAttrib4fv(de.location,k);break;default:i.vertexAttrib1fv(de.location,k)}}}}E()}function N(){$();for(const D in a){const j=a[D];for(const V in j){const Z=j[V];for(const W in Z)g(Z[W].object),delete Z[W];delete j[V]}delete a[D]}}function y(D){if(a[D.id]===void 0)return;const j=a[D.id];for(const V in j){const Z=j[V];for(const W in Z)g(Z[W].object),delete Z[W];delete j[V]}delete a[D.id]}function C(D){for(const j in a){const V=a[j];if(V[D.id]===void 0)continue;const Z=V[D.id];for(const W in Z)g(Z[W].object),delete Z[W];delete V[D.id]}}function $(){J(),u=!0,c!==l&&(c=l,h(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:$,resetDefaultState:J,dispose:N,releaseStatesOfGeometry:y,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:M,disableUnusedAttributes:E}}function r1(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,f){i.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,d){if(d===0)return;let h,g;if(r)h=i,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](s,u,f,d),t.update(f,s,d)}function c(u,f,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<d;g++)this.render(u[g],f[g]);else{h.multiDrawArraysWEBGL(s,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function s1(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=o||e.has("OES_texture_float"),A=v&&M,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:E}}function o1(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new _i,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||r;return r=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,v=x*4;let M=m.clippingState||null;l.value=M,M=u(g,d,v,h);for(let A=0;A!==v;++A)M[A]=t[A];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=h+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,M=h;v!==_;++v,M+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function a1(i){let e=new WeakMap;function t(o,a){return a===cc?o.mapping=Xr:a===uc&&(o.mapping=jr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===cc||a===uc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _T(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Yc extends eg{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Nr=4,Wd=[.125,.215,.35,.446,.526,.582],ji=20,yl=new Yc,Xd=new je;let Ml=null,bl=0,Sl=0;const Wi=(1+Math.sqrt(5))/2,Cr=1/Wi,jd=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Wi,Cr),new I(0,Wi,-Cr),new I(Cr,0,Wi),new I(-Cr,0,Wi),new I(Wi,Cr,0),new I(-Wi,Cr,0)];class $d{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ml=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ml,bl,Sl),e.scissorTest=!1,Vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ml=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Ys,format:gn,colorSpace:Wt,depthBuffer:!1},r=Yd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l1(s)),this._blurMaterial=c1(s,e,t)}return r}_compileMaterial(e){const t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,yl)}_sceneToCubeUV(e,t,n,r){const a=new nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Xd),u.toneMapping=Ei,u.autoClear=!1;const h=new Ki({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Zt(new io,h);let _=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,_=!0):(h.color.copy(Xd),_=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Vo(r,x*v,m>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Xr||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Vo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jd[(r-1)%jd.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Zt(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ji-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):ji;p>ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ji}`);const m=[];let x=0;for(let S=0;S<ji;++S){const w=S/_,N=Math.exp(-w*w/2);m.push(N),S===0?x+=N:S<p&&(x+=2*N)}for(let S=0;S<m.length;S++)m[S]=m[S]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const M=this._sizeLods[r],A=3*M*(r>v-Nr?r-v+Nr:0),E=4*(this._cubeSize-M);Vo(t,A,E,3*M,2*M),l.setRenderTarget(t),l.render(f,yl)}}function l1(i){const e=[],t=[],n=[];let r=i;const s=i-Nr+1+Wd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Nr?l=Wd[o-i+Nr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*h),v=new Float32Array(p*g*h),M=new Float32Array(m*g*h);for(let E=0;E<h;E++){const S=E%3*2/3-1,w=E>2?0:-1,N=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];x.set(N,_*g*E),v.set(d,p*g*E);const y=[E,E,E,E,E,E];M.set(y,m*g*E)}const A=new Cn;A.setAttribute("position",new rn(x,_)),A.setAttribute("uv",new rn(v,p)),A.setAttribute("faceIndex",new rn(M,m)),e.push(A),r>Nr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yd(i,e,t){const n=new nr(i,e,t);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function c1(i,e,t){const n=new Float32Array(ji),r=new I(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function qd(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Kd(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function qc(){return`

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
	`}function u1(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===cc||l===uc,u=l===Xr||l===jr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new $d(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new $d(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function f1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function d1(i,e,t,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const _=h[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const x=h.array;_=h.version;for(let v=0,M=x.length;v<M;v+=3){const A=x[v+0],E=x[v+1],S=x[v+2];d.push(A,E,E,S,S,A)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const A=v+0,E=v+1,S=v+2;d.push(A,E,E,S,S,A)}}else return;const p=new(Wm(d)?Jm:Zm)(d,1);p.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function h1(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,g){i.drawElements(s,g,a,h*l),t.update(g,s,1)}function f(h,g,_){if(_===0)return;let p,m;if(r)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,h*l,_),t.update(g,s,_)}function d(h,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(h[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,h,0,_);let m=0;for(let x=0;x<_;x++)m+=g[x];t.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function p1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function m1(i,e){return i[0]-e[0]}function g1(i,e){return Math.abs(e[1])-Math.abs(i[1])}function _1(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let J=function(){C.dispose(),s.delete(u),u.removeEventListener("dispose",J)};var h=J;p!==void 0&&p.texture.dispose();const m=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let S=0;m===!0&&(S=1),x===!0&&(S=2),v===!0&&(S=3);let w=u.attributes.position.count*S,N=1;w>e.maxTextureSize&&(N=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const y=new Float32Array(w*N*4*_),C=new Ym(y,w,N,_);C.type=En,C.needsUpdate=!0;const $=S*4;for(let D=0;D<_;D++){const j=M[D],V=A[D],Z=E[D],W=w*N*4*D;for(let q=0;q<j.count;q++){const Q=q*$;m===!0&&(o.fromBufferAttribute(j,q),y[W+Q+0]=o.x,y[W+Q+1]=o.y,y[W+Q+2]=o.z,y[W+Q+3]=0),x===!0&&(o.fromBufferAttribute(V,q),y[W+Q+4]=o.x,y[W+Q+5]=o.y,y[W+Q+6]=o.z,y[W+Q+7]=0),v===!0&&(o.fromBufferAttribute(Z,q),y[W+Q+8]=o.x,y[W+Q+9]=o.y,y[W+Q+10]=o.z,y[W+Q+11]=Z.itemSize===4?o.w:1)}}p={count:_,texture:C,size:new Fe(w,N)},s.set(u,p),u.addEventListener("dispose",J)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let m=0;for(let v=0;v<d.length;v++)m+=d[v];const x=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",d)}f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[u.id]=_}for(let M=0;M<g;M++){const A=_[M];A[0]=M,A[1]=d[M]}_.sort(g1);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(m1);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const A=a[M],E=A[0],S=A[1];E!==Number.MAX_SAFE_INTEGER&&S?(p&&u.getAttribute("morphTarget"+M)!==p[E]&&u.setAttribute("morphTarget"+M,p[E]),m&&u.getAttribute("morphNormal"+M)!==m[E]&&u.setAttribute("morphNormal"+M,m[E]),r[M]=S,x+=S):(p&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),m&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const v=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function v1(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class ig extends Ht{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:er,u!==er&&u!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===er&&(n=Mi),n===void 0&&u===Yr&&(n=Qi),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const rg=new Ht,sg=new ig(1,1);sg.compareFunction=Gm;const og=new Ym,ag=new eT,lg=new tg,Zd=[],Jd=[],Qd=new Float32Array(16),eh=new Float32Array(9),th=new Float32Array(4);function rs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Zd[r];if(s===void 0&&(s=new Float32Array(r),Zd[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function La(i,e){let t=Jd[e];t===void 0&&(t=new Int32Array(e),Jd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function x1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function y1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function M1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function b1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function S1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;th.set(n),i.uniformMatrix2fv(this.addr,!1,th),Ft(t,n)}}function E1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;eh.set(n),i.uniformMatrix3fv(this.addr,!1,eh),Ft(t,n)}}function T1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,n))return;Qd.set(n),i.uniformMatrix4fv(this.addr,!1,Qd),Ft(t,n)}}function A1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function w1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function R1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function C1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function P1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function L1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function D1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function I1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function N1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?sg:rg;t.setTexture2D(e||s,r)}function U1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ag,r)}function O1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||lg,r)}function F1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||og,r)}function B1(i){switch(i){case 5126:return x1;case 35664:return y1;case 35665:return M1;case 35666:return b1;case 35674:return S1;case 35675:return E1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return w1;case 35668:case 35672:return R1;case 35669:case 35673:return C1;case 5125:return P1;case 36294:return L1;case 36295:return D1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return F1}}function V1(i,e){i.uniform1fv(this.addr,e)}function k1(i,e){const t=rs(e,this.size,2);i.uniform2fv(this.addr,t)}function z1(i,e){const t=rs(e,this.size,3);i.uniform3fv(this.addr,t)}function H1(i,e){const t=rs(e,this.size,4);i.uniform4fv(this.addr,t)}function G1(i,e){const t=rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function W1(i,e){const t=rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function X1(i,e){const t=rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function j1(i,e){i.uniform1iv(this.addr,e)}function $1(i,e){i.uniform2iv(this.addr,e)}function Y1(i,e){i.uniform3iv(this.addr,e)}function q1(i,e){i.uniform4iv(this.addr,e)}function K1(i,e){i.uniform1uiv(this.addr,e)}function Z1(i,e){i.uniform2uiv(this.addr,e)}function J1(i,e){i.uniform3uiv(this.addr,e)}function Q1(i,e){i.uniform4uiv(this.addr,e)}function eR(i,e,t){const n=this.cache,r=e.length,s=La(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||rg,s[o])}function tR(i,e,t){const n=this.cache,r=e.length,s=La(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ag,s[o])}function nR(i,e,t){const n=this.cache,r=e.length,s=La(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||lg,s[o])}function iR(i,e,t){const n=this.cache,r=e.length,s=La(t,r);Ot(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||og,s[o])}function rR(i){switch(i){case 5126:return V1;case 35664:return k1;case 35665:return z1;case 35666:return H1;case 35674:return G1;case 35675:return W1;case 35676:return X1;case 5124:case 35670:return j1;case 35667:case 35671:return $1;case 35668:case 35672:return Y1;case 35669:case 35673:return q1;case 5125:return K1;case 36294:return Z1;case 36295:return J1;case 36296:return Q1;case 35678:case 36198:case 36298:case 36306:case 35682:return eR;case 35679:case 36299:case 36307:return tR;case 35680:case 36300:case 36308:case 36293:return nR;case 36289:case 36303:case 36311:case 36292:return iR}}class sR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B1(t.type)}}class oR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rR(t.type)}}class aR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const El=/(\w+)(\])?(\[|\.)?/g;function nh(i,e){i.seq.push(e),i.map[e.id]=e}function lR(i,e,t){const n=i.name,r=n.length;for(El.lastIndex=0;;){const s=El.exec(n),o=El.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){nh(t,c===void 0?new sR(a,i,e):new oR(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new aR(a),nh(t,f)),t=f}}}class Qo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);lR(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function ih(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const cR=37297;let uR=0;function fR(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function dR(i){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(i);let n;switch(e===t?n="":e===va&&t===_a?n="LinearDisplayP3ToLinearSRGB":e===_a&&t===va&&(n="LinearSRGBToLinearDisplayP3"),i){case Wt:case Ca:return[n,"LinearTransferOETF"];case tn:case Xc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function rh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+fR(i.getShaderSource(e),o)}else return r}function hR(i,e){const t=dR(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pR(i,e){let t;switch(e){case lE:t="Linear";break;case cE:t="Reinhard";break;case uE:t="OptimizedCineon";break;case fE:t="ACESFilmic";break;case hE:t="AgX";break;case pE:t="Neutral";break;case dE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mR(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ur).join(`
`)}function gR(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function _R(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vR(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ur(i){return i!==""}function sh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xR=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(i){return i.replace(xR,MR)}const yR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function MR(i,e){let t=Ze[e];if(t===void 0){const n=yR.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}const bR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(i){return i.replace(bR,SR)}function SR(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ER(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===OS?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function TR(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xr:case jr:e="ENVMAP_TYPE_CUBE";break;case Ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AR(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function wR(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lm:e="ENVMAP_BLENDING_MULTIPLY";break;case oE:e="ENVMAP_BLENDING_MIX";break;case aE:e="ENVMAP_BLENDING_ADD";break}return e}function RR(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function CR(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ER(t),c=TR(t),u=AR(t),f=wR(t),d=RR(t),h=t.isWebGL2?"":mR(t),g=gR(t),_=_R(s),p=r.createProgram();let m,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ur).join(`
`),m.length>0&&(m+=`
`),x=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ur).join(`
`),x.length>0&&(x+=`
`)):(m=[lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),x=[h,lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ei?pR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,hR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),o=gc(o),o=sh(o,t),o=oh(o,t),a=gc(a),a=sh(a,t),a=oh(a,t),o=ah(o),a=ah(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=v+m+o,A=v+x+a,E=ih(r,r.VERTEX_SHADER,M),S=ih(r,r.FRAGMENT_SHADER,A);r.attachShader(p,E),r.attachShader(p,S),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function w($){if(i.debug.checkShaderErrors){const J=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(E).trim(),j=r.getShaderInfoLog(S).trim();let V=!0,Z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,E,S);else{const W=rh(r,E,"vertex"),q=rh(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+J+`
`+W+`
`+q)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(D===""||j==="")&&(Z=!1);Z&&($.diagnostics={runnable:V,programLog:J,vertexShader:{log:D,prefix:m},fragmentShader:{log:j,prefix:x}})}r.deleteShader(E),r.deleteShader(S),N=new Qo(r,p),y=vR(r,p)}let N;this.getUniforms=function(){return N===void 0&&w(this),N};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(p,cR)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uR++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=S,this}let PR=0;class LR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new DR(e),t.set(e,n)),n}}class DR{constructor(e){this.id=PR++,this.code=e,this.usedTimes=0}}function IR(i,e,t,n,r,s,o){const a=new qm,l=new LR,c=new Set,u=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,C,$,J,D){const j=J.fog,V=D.geometry,Z=y.isMeshStandardMaterial?J.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||Z),q=W&&W.mapping===Ra?W.image.height:null,Q=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ie=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,de=ie!==void 0?ie.length:0;let Ne=0;V.morphAttributes.position!==void 0&&(Ne=1),V.morphAttributes.normal!==void 0&&(Ne=2),V.morphAttributes.color!==void 0&&(Ne=3);let k,oe,ge,Ve;if(Q){const dt=Pn[Q];k=dt.vertexShader,oe=dt.fragmentShader}else k=y.vertexShader,oe=y.fragmentShader,l.update(y),ge=l.getVertexShaderID(y),Ve=l.getFragmentShaderID(y);const Pe=i.getRenderTarget(),ve=D.isInstancedMesh===!0,at=D.isBatchedMesh===!0,Oe=!!y.map,O=!!y.matcap,Tt=!!W,te=!!y.aoMap,z=!!y.lightMap,Y=!!y.bumpMap,xe=!!y.normalMap,Se=!!y.displacementMap,Re=!!y.emissiveMap,st=!!y.metalnessMap,R=!!y.roughnessMap,b=y.anisotropy>0,X=y.clearcoat>0,K=y.iridescence>0,le=y.sheen>0,se=y.transmission>0,Ge=b&&!!y.anisotropyMap,Ue=X&&!!y.clearcoatMap,fe=X&&!!y.clearcoatNormalMap,pe=X&&!!y.clearcoatRoughnessMap,We=K&&!!y.iridescenceMap,ue=K&&!!y.iridescenceThicknessMap,Ct=le&&!!y.sheenColorMap,tt=le&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,ye=!!y.specularColorMap,Le=!!y.specularIntensityMap,P=se&&!!y.transmissionMap,ee=se&&!!y.thicknessMap,Ee=!!y.gradientMap,L=!!y.alphaMap,ce=y.alphaTest>0,F=!!y.alphaHash,ae=!!y.extensions;let me=Ei;y.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(me=i.toneMapping);const ot={isWebGL2:f,shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:k,fragmentShader:oe,defines:y.defines,customVertexShaderID:ge,customFragmentShaderID:Ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:at,instancing:ve,instancingColor:ve&&D.instanceColor!==null,instancingMorph:ve&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Wt,alphaToCoverage:!!y.alphaToCoverage,map:Oe,matcap:O,envMap:Tt,envMapMode:Tt&&W.mapping,envMapCubeUVHeight:q,aoMap:te,lightMap:z,bumpMap:Y,normalMap:xe,displacementMap:h&&Se,emissiveMap:Re,normalMapObjectSpace:xe&&y.normalMapType===wE,normalMapTangentSpace:xe&&y.normalMapType===Hm,metalnessMap:st,roughnessMap:R,anisotropy:b,anisotropyMap:Ge,clearcoat:X,clearcoatMap:Ue,clearcoatNormalMap:fe,clearcoatRoughnessMap:pe,iridescence:K,iridescenceMap:We,iridescenceThicknessMap:ue,sheen:le,sheenColorMap:Ct,sheenRoughnessMap:tt,specularMap:Ie,specularColorMap:ye,specularIntensityMap:Le,transmission:se,transmissionMap:P,thicknessMap:ee,gradientMap:Ee,opaque:y.transparent===!1&&y.blending===kr&&y.alphaToCoverage===!1,alphaMap:L,alphaTest:ce,alphaHash:F,combine:y.combine,mapUv:Oe&&p(y.map.channel),aoMapUv:te&&p(y.aoMap.channel),lightMapUv:z&&p(y.lightMap.channel),bumpMapUv:Y&&p(y.bumpMap.channel),normalMapUv:xe&&p(y.normalMap.channel),displacementMapUv:Se&&p(y.displacementMap.channel),emissiveMapUv:Re&&p(y.emissiveMap.channel),metalnessMapUv:st&&p(y.metalnessMap.channel),roughnessMapUv:R&&p(y.roughnessMap.channel),anisotropyMapUv:Ge&&p(y.anisotropyMap.channel),clearcoatMapUv:Ue&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:tt&&p(y.sheenRoughnessMap.channel),specularMapUv:Ie&&p(y.specularMap.channel),specularColorMapUv:ye&&p(y.specularColorMap.channel),specularIntensityMapUv:Le&&p(y.specularIntensityMap.channel),transmissionMapUv:P&&p(y.transmissionMap.channel),thicknessMapUv:ee&&p(y.thicknessMap.channel),alphaMapUv:L&&p(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(xe||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(Oe||L),fog:!!j,useFog:y.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Oe&&y.map.isVideoTexture===!0&&ft.getTransfer(y.map.colorSpace)===St,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ln,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ae&&y.extensions.derivatives===!0,extensionFragDepth:ae&&y.extensions.fragDepth===!0,extensionDrawBuffers:ae&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ae&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function x(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const $ in y.defines)C.push($),C.push(y.defines[$]);return y.isRawShaderMaterial===!1&&(v(C,y),M(C,y),C.push(i.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function v(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function M(y,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.instancingMorph&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.normalMapObjectSpace&&a.enable(7),C.normalMapTangentSpace&&a.enable(8),C.clearcoat&&a.enable(9),C.iridescence&&a.enable(10),C.alphaTest&&a.enable(11),C.vertexColors&&a.enable(12),C.vertexAlphas&&a.enable(13),C.vertexUv1s&&a.enable(14),C.vertexUv2s&&a.enable(15),C.vertexUv3s&&a.enable(16),C.vertexTangents&&a.enable(17),C.anisotropy&&a.enable(18),C.alphaHash&&a.enable(19),C.batching&&a.enable(20),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.alphaToCoverage&&a.enable(20),y.push(a.mask)}function A(y){const C=_[y.type];let $;if(C){const J=Pn[C];$=hT.clone(J.uniforms)}else $=y.uniforms;return $}function E(y,C){let $;for(let J=0,D=u.length;J<D;J++){const j=u[J];if(j.cacheKey===C){$=j,++$.usedTimes;break}}return $===void 0&&($=new CR(i,C,y,s),u.push($)),$}function S(y){if(--y.usedTimes===0){const C=u.indexOf(y);u[C]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:A,acquireProgram:E,releaseProgram:S,releaseShaderCache:w,programs:u,dispose:N}}function NR(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function UR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ch(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function uh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,d,h,g,_,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=h,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,d,h,g,_,p){const m=o(f,d,h,g,_,p);h.transmission>0?n.push(m):h.transparent===!0?r.push(m):t.push(m)}function l(f,d,h,g,_,p){const m=o(f,d,h,g,_,p);h.transmission>0?n.unshift(m):h.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||UR),n.length>1&&n.sort(d||ch),r.length>1&&r.sort(d||ch)}function u(){for(let f=e,d=i.length;f<d;f++){const h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function OR(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new uh,i.set(n,[o])):r>=s.length?(o=new uh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function FR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new je};break;case"SpotLight":t={position:new I,direction:new I,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function BR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let VR=0;function kR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zR(i,e){const t=new FR,n=BR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new Qe,a=new Qe;function l(u,f){let d=0,h=0,g=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let _=0,p=0,m=0,x=0,v=0,M=0,A=0,E=0,S=0,w=0,N=0;u.sort(kR);const y=f===!0?Math.PI:1;for(let $=0,J=u.length;$<J;$++){const D=u[$],j=D.color,V=D.intensity,Z=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=j.r*V*y,h+=j.g*V*y,g+=j.b*V*y;else if(D.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(D.sh.coefficients[q],V);N++}else if(D.isDirectionalLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*y),D.castShadow){const Q=D.shadow,ie=n.get(D);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,r.directionalShadow[_]=ie,r.directionalShadowMap[_]=W,r.directionalShadowMatrix[_]=D.shadow.matrix,M++}r.directional[_]=q,_++}else if(D.isSpotLight){const q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(j).multiplyScalar(V*y),q.distance=Z,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,r.spot[m]=q;const Q=D.shadow;if(D.map&&(r.spotLightMap[S]=D.map,S++,Q.updateMatrices(D),D.castShadow&&w++),r.spotLightMatrix[m]=Q.matrix,D.castShadow){const ie=n.get(D);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,r.spotShadow[m]=ie,r.spotShadowMap[m]=W,E++}m++}else if(D.isRectAreaLight){const q=t.get(D);q.color.copy(j).multiplyScalar(V),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),r.rectArea[x]=q,x++}else if(D.isPointLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*y),q.distance=D.distance,q.decay=D.decay,D.castShadow){const Q=D.shadow,ie=n.get(D);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,ie.shadowCameraNear=Q.camera.near,ie.shadowCameraFar=Q.camera.far,r.pointShadow[p]=ie,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=D.shadow.matrix,A++}r.point[p]=q,p++}else if(D.isHemisphereLight){const q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(V*y),q.groundColor.copy(D.groundColor).multiplyScalar(V*y),r.hemi[v]=q,v++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=h,r.ambient[2]=g;const C=r.hash;(C.directionalLength!==_||C.pointLength!==p||C.spotLength!==m||C.rectAreaLength!==x||C.hemiLength!==v||C.numDirectionalShadows!==M||C.numPointShadows!==A||C.numSpotShadows!==E||C.numSpotMaps!==S||C.numLightProbes!==N)&&(r.directional.length=_,r.spot.length=m,r.rectArea.length=x,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=E+S-w,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=N,C.directionalLength=_,C.pointLength=p,C.spotLength=m,C.rectAreaLength=x,C.hemiLength=v,C.numDirectionalShadows=M,C.numPointShadows=A,C.numSpotShadows=E,C.numSpotMaps=S,C.numLightProbes=N,r.version=VR++)}function c(u,f){let d=0,h=0,g=0,_=0,p=0;const m=f.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const M=u[x];if(M.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(M.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const A=r.rectArea[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const A=r.point[h];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:r}}function fh(i,e){const t=new zR(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function HR(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new fh(i,e),t.set(s,[l])):o>=a.length?(l=new fh(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class GR extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WR extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jR=`uniform sampler2D shadow_pass;
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
}`;function $R(i,e,t){let n=new $c;const r=new Fe,s=new Fe,o=new gt,a=new GR({depthPacking:AE}),l=new WR,c={},u=t.maxTextureSize,f={[ni]:on,[on]:ni,[Ln]:Ln},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:XR,fragmentShader:jR}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Cn;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Zt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pm;let m=this.type;this.render=function(E,S,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const N=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Si),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const J=m!==Kn&&this.type===Kn,D=m===Kn&&this.type!==Kn;for(let j=0,V=E.length;j<V;j++){const Z=E[j],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const q=W.getFrameExtents();if(r.multiply(q),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,W.mapSize.y=s.y)),W.map===null||J===!0||D===!0){const ie=this.type!==Kn?{minFilter:kt,magFilter:kt}:{};W.map!==null&&W.map.dispose(),W.map=new nr(r.x,r.y,ie),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const Q=W.getViewportCount();for(let ie=0;ie<Q;ie++){const de=W.getViewport(ie);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),$.viewport(o),W.updateMatrices(Z,ie),n=W.getFrustum(),M(S,w,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===Kn&&x(W,w),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(N,y,C)};function x(E,S){const w=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new nr(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(S,null,w,d,_,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(S,null,w,h,_,null)}function v(E,S,w,N){let y=null;const C=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)y=C;else if(y=w.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const $=y.uuid,J=S.uuid;let D=c[$];D===void 0&&(D={},c[$]=D);let j=D[J];j===void 0&&(j=y.clone(),D[J]=j,S.addEventListener("dispose",A)),y=j}if(y.visible=S.visible,y.wireframe=S.wireframe,N===Kn?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:f[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const $=i.properties.get(y);$.light=w}return y}function M(E,S,w,N,y){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Kn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const J=e.update(E),D=E.material;if(Array.isArray(D)){const j=J.groups;for(let V=0,Z=j.length;V<Z;V++){const W=j[V],q=D[W.materialIndex];if(q&&q.visible){const Q=v(E,q,N,y);E.onBeforeShadow(i,E,S,w,J,Q,W),i.renderBufferDirect(w,null,J,Q,E,W),E.onAfterShadow(i,E,S,w,J,Q,W)}}}else if(D.visible){const j=v(E,D,N,y);E.onBeforeShadow(i,E,S,w,J,j,null),i.renderBufferDirect(w,null,J,j,E,null),E.onAfterShadow(i,E,S,w,J,j,null)}}const $=E.children;for(let J=0,D=$.length;J<D;J++)M($[J],S,w,N,y)}function A(E){E.target.removeEventListener("dispose",A);for(const w in c){const N=c[w],y=E.target.uuid;y in N&&(N[y].dispose(),delete N[y])}}}function YR(i,e,t){const n=t.isWebGL2;function r(){let L=!1;const ce=new gt;let F=null;const ae=new gt(0,0,0,0);return{setMask:function(me){F!==me&&!L&&(i.colorMask(me,me,me,me),F=me)},setLocked:function(me){L=me},setClear:function(me,ot,dt,mt,Pt){Pt===!0&&(me*=mt,ot*=mt,dt*=mt),ce.set(me,ot,dt,mt),ae.equals(ce)===!1&&(i.clearColor(me,ot,dt,mt),ae.copy(ce))},reset:function(){L=!1,F=null,ae.set(-1,0,0,0)}}}function s(){let L=!1,ce=null,F=null,ae=null;return{setTest:function(me){me?ve(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(me){ce!==me&&!L&&(i.depthMask(me),ce=me)},setFunc:function(me){if(F!==me){switch(me){case QS:i.depthFunc(i.NEVER);break;case eE:i.depthFunc(i.ALWAYS);break;case tE:i.depthFunc(i.LESS);break;case pa:i.depthFunc(i.LEQUAL);break;case nE:i.depthFunc(i.EQUAL);break;case iE:i.depthFunc(i.GEQUAL);break;case rE:i.depthFunc(i.GREATER);break;case sE:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}F=me}},setLocked:function(me){L=me},setClear:function(me){ae!==me&&(i.clearDepth(me),ae=me)},reset:function(){L=!1,ce=null,F=null,ae=null}}}function o(){let L=!1,ce=null,F=null,ae=null,me=null,ot=null,dt=null,mt=null,Pt=null;return{setTest:function(ct){L||(ct?ve(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(ct){ce!==ct&&!L&&(i.stencilMask(ct),ce=ct)},setFunc:function(ct,Mt,Xt){(F!==ct||ae!==Mt||me!==Xt)&&(i.stencilFunc(ct,Mt,Xt),F=ct,ae=Mt,me=Xt)},setOp:function(ct,Mt,Xt){(ot!==ct||dt!==Mt||mt!==Xt)&&(i.stencilOp(ct,Mt,Xt),ot=ct,dt=Mt,mt=Xt)},setLocked:function(ct){L=ct},setClear:function(ct){Pt!==ct&&(i.clearStencil(ct),Pt=ct)},reset:function(){L=!1,ce=null,F=null,ae=null,me=null,ot=null,dt=null,mt=null,Pt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},h={},g=new WeakMap,_=[],p=null,m=!1,x=null,v=null,M=null,A=null,E=null,S=null,w=null,N=new je(0,0,0),y=0,C=!1,$=null,J=null,D=null,j=null,V=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,q=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Q)[1]),W=q>=1):Q.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),W=q>=2);let ie=null,de={};const Ne=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),oe=new gt().fromArray(Ne),ge=new gt().fromArray(k);function Ve(L,ce,F,ae){const me=new Uint8Array(4),ot=i.createTexture();i.bindTexture(L,ot),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<F;dt++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ce+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return ot}const Pe={};Pe[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(i.DEPTH_TEST),l.setFunc(pa),Se(!1),Re(Hf),ve(i.CULL_FACE),Y(Si);function ve(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function at(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Oe(L,ce){return h[L]!==ce?(i.bindFramebuffer(L,ce),h[L]=ce,n&&(L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ce),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function O(L,ce){let F=_,ae=!1;if(L){F=g.get(ce),F===void 0&&(F=[],g.set(ce,F));const me=L.textures;if(F.length!==me.length||F[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,dt=me.length;ot<dt;ot++)F[ot]=i.COLOR_ATTACHMENT0+ot;F.length=me.length,ae=!0}}else F[0]!==i.BACK&&(F[0]=i.BACK,ae=!0);if(ae)if(t.isWebGL2)i.drawBuffers(F);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(F);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Tt(L){return p!==L?(i.useProgram(L),p=L,!0):!1}const te={[Xi]:i.FUNC_ADD,[BS]:i.FUNC_SUBTRACT,[VS]:i.FUNC_REVERSE_SUBTRACT};if(n)te[jf]=i.MIN,te[$f]=i.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(te[jf]=L.MIN_EXT,te[$f]=L.MAX_EXT)}const z={[kS]:i.ZERO,[zS]:i.ONE,[HS]:i.SRC_COLOR,[ac]:i.SRC_ALPHA,[YS]:i.SRC_ALPHA_SATURATE,[jS]:i.DST_COLOR,[WS]:i.DST_ALPHA,[GS]:i.ONE_MINUS_SRC_COLOR,[lc]:i.ONE_MINUS_SRC_ALPHA,[$S]:i.ONE_MINUS_DST_COLOR,[XS]:i.ONE_MINUS_DST_ALPHA,[qS]:i.CONSTANT_COLOR,[KS]:i.ONE_MINUS_CONSTANT_COLOR,[ZS]:i.CONSTANT_ALPHA,[JS]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(L,ce,F,ae,me,ot,dt,mt,Pt,ct){if(L===Si){m===!0&&(at(i.BLEND),m=!1);return}if(m===!1&&(ve(i.BLEND),m=!0),L!==FS){if(L!==x||ct!==C){if((v!==Xi||E!==Xi)&&(i.blendEquation(i.FUNC_ADD),v=Xi,E=Xi),ct)switch(L){case kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gf:i.blendFunc(i.ONE,i.ONE);break;case Wf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gf:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,A=null,S=null,w=null,N.set(0,0,0),y=0,x=L,C=ct}return}me=me||ce,ot=ot||F,dt=dt||ae,(ce!==v||me!==E)&&(i.blendEquationSeparate(te[ce],te[me]),v=ce,E=me),(F!==M||ae!==A||ot!==S||dt!==w)&&(i.blendFuncSeparate(z[F],z[ae],z[ot],z[dt]),M=F,A=ae,S=ot,w=dt),(mt.equals(N)===!1||Pt!==y)&&(i.blendColor(mt.r,mt.g,mt.b,Pt),N.copy(mt),y=Pt),x=L,C=!1}function xe(L,ce){L.side===Ln?at(i.CULL_FACE):ve(i.CULL_FACE);let F=L.side===on;ce&&(F=!F),Se(F),L.blending===kr&&L.transparent===!1?Y(Si):Y(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ae=L.stencilWrite;c.setTest(ae),ae&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),R(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(L){$!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),$=L)}function Re(L){L!==NS?(ve(i.CULL_FACE),L!==J&&(L===Hf?i.cullFace(i.BACK):L===US?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),J=L}function st(L){L!==D&&(W&&i.lineWidth(L),D=L)}function R(L,ce,F){L?(ve(i.POLYGON_OFFSET_FILL),(j!==ce||V!==F)&&(i.polygonOffset(ce,F),j=ce,V=F)):at(i.POLYGON_OFFSET_FILL)}function b(L){L?ve(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function X(L){L===void 0&&(L=i.TEXTURE0+Z-1),ie!==L&&(i.activeTexture(L),ie=L)}function K(L,ce,F){F===void 0&&(ie===null?F=i.TEXTURE0+Z-1:F=ie);let ae=de[F];ae===void 0&&(ae={type:void 0,texture:void 0},de[F]=ae),(ae.type!==L||ae.texture!==ce)&&(ie!==F&&(i.activeTexture(F),ie=F),i.bindTexture(L,ce||Pe[L]),ae.type=L,ae.texture=ce)}function le(){const L=de[ie];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(L){oe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function Le(L){ge.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ge.copy(L))}function P(L,ce){let F=f.get(ce);F===void 0&&(F=new WeakMap,f.set(ce,F));let ae=F.get(L);ae===void 0&&(ae=i.getUniformBlockIndex(ce,L.name),F.set(L,ae))}function ee(L,ce){const ae=f.get(ce).get(L);u.get(ce)!==ae&&(i.uniformBlockBinding(ce,ae,L.__bindingPointIndex),u.set(ce,ae))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ie=null,de={},h={},g=new WeakMap,_=[],p=null,m=!1,x=null,v=null,M=null,A=null,E=null,S=null,w=null,N=new je(0,0,0),y=0,C=!1,$=null,J=null,D=null,j=null,V=null,oe.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ve,disable:at,bindFramebuffer:Oe,drawBuffers:O,useProgram:Tt,setBlending:Y,setMaterial:xe,setFlipSided:Se,setCullFace:Re,setLineWidth:st,setPolygonOffset:R,setScissorTest:b,activeTexture:X,bindTexture:K,unbindTexture:le,compressedTexImage2D:se,compressedTexImage3D:Ge,texImage2D:tt,texImage3D:Ie,updateUBOMapping:P,uniformBlockBinding:ee,texStorage2D:ue,texStorage3D:Ct,texSubImage2D:Ue,texSubImage3D:fe,compressedTexSubImage2D:pe,compressedTexSubImage3D:We,scissor:ye,viewport:Le,reset:Ee}}function qR(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Fe,f=new WeakMap;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,b){return g?new OffscreenCanvas(R,b):Ks("canvas")}function p(R,b,X,K){let le=1;const se=st(R);if((se.width>K||se.height>K)&&(le=K/Math.max(se.width,se.height)),le<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Ge=b?ya:Math.floor,Ue=Ge(le*se.width),fe=Ge(le*se.height);d===void 0&&(d=_(Ue,fe));const pe=X?_(Ue,fe):d;return pe.width=Ue,pe.height=fe,pe.getContext("2d").drawImage(R,0,0,Ue,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Ue+"x"+fe+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function m(R){const b=st(R);return mc(b.width)&&mc(b.height)}function x(R){return a?!1:R.wrapS!==mn||R.wrapT!==mn||R.minFilter!==kt&&R.minFilter!==qt}function v(R,b){return R.generateMipmaps&&b&&R.minFilter!==kt&&R.minFilter!==qt}function M(R){i.generateMipmap(R)}function A(R,b,X,K,le=!1){if(a===!1)return b;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se=b;if(b===i.RED&&(X===i.FLOAT&&(se=i.R32F),X===i.HALF_FLOAT&&(se=i.R16F),X===i.UNSIGNED_BYTE&&(se=i.R8)),b===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.R8UI),X===i.UNSIGNED_SHORT&&(se=i.R16UI),X===i.UNSIGNED_INT&&(se=i.R32UI),X===i.BYTE&&(se=i.R8I),X===i.SHORT&&(se=i.R16I),X===i.INT&&(se=i.R32I)),b===i.RG&&(X===i.FLOAT&&(se=i.RG32F),X===i.HALF_FLOAT&&(se=i.RG16F),X===i.UNSIGNED_BYTE&&(se=i.RG8)),b===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.RG8UI),X===i.UNSIGNED_SHORT&&(se=i.RG16UI),X===i.UNSIGNED_INT&&(se=i.RG32UI),X===i.BYTE&&(se=i.RG8I),X===i.SHORT&&(se=i.RG16I),X===i.INT&&(se=i.RG32I)),b===i.RGBA){const Ge=le?ga:ft.getTransfer(K);X===i.FLOAT&&(se=i.RGBA32F),X===i.HALF_FLOAT&&(se=i.RGBA16F),X===i.UNSIGNED_BYTE&&(se=Ge===St?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function E(R,b,X){return v(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==kt&&R.minFilter!==qt?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function S(R){return R===kt||R===fc||R===Dr?i.NEAREST:i.LINEAR}function w(R){const b=R.target;b.removeEventListener("dispose",w),y(b),b.isVideoTexture&&f.delete(b)}function N(R){const b=R.target;b.removeEventListener("dispose",N),$(b)}function y(R){const b=n.get(R);if(b.__webglInit===void 0)return;const X=R.source,K=h.get(X);if(K){const le=K[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&C(R),Object.keys(K).length===0&&h.delete(X)}n.remove(R)}function C(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const X=R.source,K=h.get(X);delete K[b.__cacheKey],o.memory.textures--}function $(R){const b=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let le=0;le<b.__webglFramebuffer[K].length;le++)i.deleteFramebuffer(b.__webglFramebuffer[K][le]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=R.textures;for(let K=0,le=X.length;K<le;K++){const se=n.get(X[K]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(X[K])}n.remove(R)}let J=0;function D(){J=0}function j(){const R=J;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),J+=1,R}function V(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function Z(R,b){const X=n.get(R);if(R.isVideoTexture&&Se(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(X,R,b);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+b)}function W(R,b){const X=n.get(R);if(R.version>0&&X.__version!==R.version){ge(X,R,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+b)}function q(R,b){const X=n.get(R);if(R.version>0&&X.__version!==R.version){ge(X,R,b);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+b)}function Q(R,b){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Ve(X,R,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+b)}const ie={[$r]:i.REPEAT,[mn]:i.CLAMP_TO_EDGE,[ma]:i.MIRRORED_REPEAT},de={[kt]:i.NEAREST,[fc]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[Jo]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},Ne={[RE]:i.NEVER,[NE]:i.ALWAYS,[CE]:i.LESS,[Gm]:i.LEQUAL,[PE]:i.EQUAL,[IE]:i.GEQUAL,[LE]:i.GREATER,[DE]:i.NOTEQUAL};function k(R,b,X){if(b.type===En&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===qt||b.magFilter===Jo||b.magFilter===Dr||b.magFilter===Zn||b.minFilter===qt||b.minFilter===Jo||b.minFilter===Dr||b.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(i.texParameteri(R,i.TEXTURE_WRAP_S,ie[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ie[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ie[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,de[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,de[b.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==mn||b.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,S(b.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,S(b.minFilter)),b.minFilter!==kt&&b.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ne[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===kt||b.minFilter!==Dr&&b.minFilter!==Zn||b.type===En&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Ys&&e.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function oe(R,b){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",w));const K=b.source;let le=h.get(K);le===void 0&&(le={},h.set(K,le));const se=V(b);if(se!==R.__cacheKey){le[se]===void 0&&(le[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),le[se].usedTimes++;const Ge=le[R.__cacheKey];Ge!==void 0&&(le[R.__cacheKey].usedTimes--,Ge.usedTimes===0&&C(b)),R.__cacheKey=se,R.__webglTexture=le[se].texture}return X}function ge(R,b,X){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const le=oe(R,b),se=b.source;t.bindTexture(K,R.__webglTexture,i.TEXTURE0+X);const Ge=n.get(se);if(se.version!==Ge.__version||le===!0){t.activeTexture(i.TEXTURE0+X);const Ue=ft.getPrimaries(ft.workingColorSpace),fe=b.colorSpace===xi?null:ft.getPrimaries(b.colorSpace),pe=b.colorSpace===xi||Ue===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const We=x(b)&&m(b.image)===!1;let ue=p(b.image,We,!1,r.maxTextureSize);ue=Re(b,ue);const Ct=m(ue)||a,tt=s.convert(b.format,b.colorSpace);let Ie=s.convert(b.type),ye=A(b.internalFormat,tt,Ie,b.colorSpace,b.isVideoTexture);k(K,b,Ct);let Le;const P=b.mipmaps,ee=a&&b.isVideoTexture!==!0&&ye!==km,Ee=Ge.__version===void 0||le===!0,L=se.dataReady,ce=E(b,ue,Ct);if(b.isDepthTexture)ye=i.DEPTH_COMPONENT,a?b.type===En?ye=i.DEPTH_COMPONENT32F:b.type===Mi?ye=i.DEPTH_COMPONENT24:b.type===Qi?ye=i.DEPTH24_STENCIL8:ye=i.DEPTH_COMPONENT16:b.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===er&&ye===i.DEPTH_COMPONENT&&b.type!==Wc&&b.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Mi,Ie=s.convert(b.type)),b.format===Yr&&ye===i.DEPTH_COMPONENT&&(ye=i.DEPTH_STENCIL,b.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Qi,Ie=s.convert(b.type))),Ee&&(ee?t.texStorage2D(i.TEXTURE_2D,1,ye,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,ye,ue.width,ue.height,0,tt,Ie,null));else if(b.isDataTexture)if(P.length>0&&Ct){ee&&Ee&&t.texStorage2D(i.TEXTURE_2D,ce,ye,P[0].width,P[0].height);for(let F=0,ae=P.length;F<ae;F++)Le=P[F],ee?L&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Le.width,Le.height,tt,Ie,Le.data):t.texImage2D(i.TEXTURE_2D,F,ye,Le.width,Le.height,0,tt,Ie,Le.data);b.generateMipmaps=!1}else ee?(Ee&&t.texStorage2D(i.TEXTURE_2D,ce,ye,ue.width,ue.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,tt,Ie,ue.data)):t.texImage2D(i.TEXTURE_2D,0,ye,ue.width,ue.height,0,tt,Ie,ue.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ee&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ye,P[0].width,P[0].height,ue.depth);for(let F=0,ae=P.length;F<ae;F++)Le=P[F],b.format!==gn?tt!==null?ee?L&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,Le.width,Le.height,ue.depth,tt,Le.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,ye,Le.width,Le.height,ue.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,Le.width,Le.height,ue.depth,tt,Ie,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,F,ye,Le.width,Le.height,ue.depth,0,tt,Ie,Le.data)}else{ee&&Ee&&t.texStorage2D(i.TEXTURE_2D,ce,ye,P[0].width,P[0].height);for(let F=0,ae=P.length;F<ae;F++)Le=P[F],b.format!==gn?tt!==null?ee?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,Le.width,Le.height,tt,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,F,ye,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?L&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Le.width,Le.height,tt,Ie,Le.data):t.texImage2D(i.TEXTURE_2D,F,ye,Le.width,Le.height,0,tt,Ie,Le.data)}else if(b.isDataArrayTexture)ee?(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ye,ue.width,ue.height,ue.depth),L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,tt,Ie,ue.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,ue.width,ue.height,ue.depth,0,tt,Ie,ue.data);else if(b.isData3DTexture)ee?(Ee&&t.texStorage3D(i.TEXTURE_3D,ce,ye,ue.width,ue.height,ue.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,tt,Ie,ue.data)):t.texImage3D(i.TEXTURE_3D,0,ye,ue.width,ue.height,ue.depth,0,tt,Ie,ue.data);else if(b.isFramebufferTexture){if(Ee)if(ee)t.texStorage2D(i.TEXTURE_2D,ce,ye,ue.width,ue.height);else{let F=ue.width,ae=ue.height;for(let me=0;me<ce;me++)t.texImage2D(i.TEXTURE_2D,me,ye,F,ae,0,tt,Ie,null),F>>=1,ae>>=1}}else if(P.length>0&&Ct){if(ee&&Ee){const F=st(P[0]);t.texStorage2D(i.TEXTURE_2D,ce,ye,F.width,F.height)}for(let F=0,ae=P.length;F<ae;F++)Le=P[F],ee?L&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,tt,Ie,Le):t.texImage2D(i.TEXTURE_2D,F,ye,tt,Ie,Le);b.generateMipmaps=!1}else if(ee){if(Ee){const F=st(ue);t.texStorage2D(i.TEXTURE_2D,ce,ye,F.width,F.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,tt,Ie,ue)}else t.texImage2D(i.TEXTURE_2D,0,ye,tt,Ie,ue);v(b,Ct)&&M(K),Ge.__version=se.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ve(R,b,X){if(b.image.length!==6)return;const K=oe(R,b),le=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+X);const se=n.get(le);if(le.version!==se.__version||K===!0){t.activeTexture(i.TEXTURE0+X);const Ge=ft.getPrimaries(ft.workingColorSpace),Ue=b.colorSpace===xi?null:ft.getPrimaries(b.colorSpace),fe=b.colorSpace===xi||Ge===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const pe=b.isCompressedTexture||b.image[0].isCompressedTexture,We=b.image[0]&&b.image[0].isDataTexture,ue=[];for(let F=0;F<6;F++)!pe&&!We?ue[F]=p(b.image[F],!1,!0,r.maxCubemapSize):ue[F]=We?b.image[F].image:b.image[F],ue[F]=Re(b,ue[F]);const Ct=ue[0],tt=m(Ct)||a,Ie=s.convert(b.format,b.colorSpace),ye=s.convert(b.type),Le=A(b.internalFormat,Ie,ye,b.colorSpace),P=a&&b.isVideoTexture!==!0,ee=se.__version===void 0||K===!0,Ee=le.dataReady;let L=E(b,Ct,tt);k(i.TEXTURE_CUBE_MAP,b,tt);let ce;if(pe){P&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,L,Le,Ct.width,Ct.height);for(let F=0;F<6;F++){ce=ue[F].mipmaps;for(let ae=0;ae<ce.length;ae++){const me=ce[ae];b.format!==gn?Ie!==null?P?Ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae,0,0,me.width,me.height,Ie,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae,Le,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae,0,0,me.width,me.height,Ie,ye,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae,Le,me.width,me.height,0,Ie,ye,me.data)}}}else{if(ce=b.mipmaps,P&&ee){ce.length>0&&L++;const F=st(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,L,Le,F.width,F.height)}for(let F=0;F<6;F++)if(We){P?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,ue[F].width,ue[F].height,Ie,ye,ue[F].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Le,ue[F].width,ue[F].height,0,Ie,ye,ue[F].data);for(let ae=0;ae<ce.length;ae++){const ot=ce[ae].image[F].image;P?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae+1,0,0,ot.width,ot.height,Ie,ye,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae+1,Le,ot.width,ot.height,0,Ie,ye,ot.data)}}else{P?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Ie,ye,ue[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Le,Ie,ye,ue[F]);for(let ae=0;ae<ce.length;ae++){const me=ce[ae];P?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae+1,0,0,Ie,ye,me.image[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ae+1,Le,Ie,ye,me.image[F])}}}v(b,tt)&&M(i.TEXTURE_CUBE_MAP),se.__version=le.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Pe(R,b,X,K,le,se){const Ge=s.convert(X.format,X.colorSpace),Ue=s.convert(X.type),fe=A(X.internalFormat,Ge,Ue,X.colorSpace);if(!n.get(b).__hasExternalTextures){const We=Math.max(1,b.width>>se),ue=Math.max(1,b.height>>se);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,se,fe,We,ue,b.depth,0,Ge,Ue,null):t.texImage2D(le,se,fe,We,ue,0,Ge,Ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),xe(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,le,n.get(X).__webglTexture,0,Y(b)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,le,n.get(X).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(R,b,X){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let K=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(X||xe(b)){const le=b.depthTexture;le&&le.isDepthTexture&&(le.type===En?K=i.DEPTH_COMPONENT32F:le.type===Mi&&(K=i.DEPTH_COMPONENT24));const se=Y(b);xe(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,K,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,se,K,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){const K=Y(b);X&&xe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,b.width,b.height):xe(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const K=b.textures;for(let le=0;le<K.length;le++){const se=K[le],Ge=s.convert(se.format,se.colorSpace),Ue=s.convert(se.type),fe=A(se.internalFormat,Ge,Ue,se.colorSpace),pe=Y(b);X&&xe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,fe,b.width,b.height):xe(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,fe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,fe,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z(b.depthTexture,0);const K=n.get(b.depthTexture).__webglTexture,le=Y(b);if(b.depthTexture.format===er)xe(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(b.depthTexture.format===Yr)xe(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Oe(R){const b=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");at(b.__webglFramebuffer,R)}else if(X){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]=i.createRenderbuffer(),ve(b.__webglDepthbuffer[K],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),ve(b.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function O(R,b,X){const K=n.get(R);b!==void 0&&Pe(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Oe(R)}function Tt(R){const b=R.texture,X=n.get(R),K=n.get(b);R.addEventListener("dispose",N);const le=R.textures,se=R.isWebGLCubeRenderTarget===!0,Ge=le.length>1,Ue=m(R)||a;if(Ge||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),se){X.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[fe]=[];for(let pe=0;pe<b.mipmaps.length;pe++)X.__webglFramebuffer[fe][pe]=i.createFramebuffer()}else X.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)X.__webglFramebuffer[fe]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ge)if(r.drawBuffers)for(let fe=0,pe=le.length;fe<pe;fe++){const We=n.get(le[fe]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&xe(R)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let fe=0;fe<le.length;fe++){const pe=le[fe];X.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[fe]);const We=s.convert(pe.format,pe.colorSpace),ue=s.convert(pe.type),Ct=A(pe.internalFormat,We,ue,pe.colorSpace,R.isXRRenderTarget===!0),tt=Y(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Ct,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,X.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),k(i.TEXTURE_CUBE_MAP,b,Ue);for(let fe=0;fe<6;fe++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)Pe(X.__webglFramebuffer[fe][pe],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else Pe(X.__webglFramebuffer[fe],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(b,Ue)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let fe=0,pe=le.length;fe<pe;fe++){const We=le[fe],ue=n.get(We);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),k(i.TEXTURE_2D,We,Ue),Pe(X.__webglFramebuffer,R,We,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),v(We,Ue)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?fe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,K.__webglTexture),k(fe,b,Ue),a&&b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)Pe(X.__webglFramebuffer[pe],R,b,i.COLOR_ATTACHMENT0,fe,pe);else Pe(X.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,fe,0);v(b,Ue)&&M(fe),t.unbindTexture()}R.depthBuffer&&Oe(R)}function te(R){const b=m(R)||a,X=R.textures;for(let K=0,le=X.length;K<le;K++){const se=X[K];if(v(se,b)){const Ge=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ue=n.get(se).__webglTexture;t.bindTexture(Ge,Ue),M(Ge),t.unbindTexture()}}}function z(R){if(a&&R.samples>0&&xe(R)===!1){const b=R.textures,X=R.width,K=R.height;let le=i.COLOR_BUFFER_BIT;const se=[],Ge=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(R),fe=b.length>1;if(fe)for(let pe=0;pe<b.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let pe=0;pe<b.length;pe++){se.push(i.COLOR_ATTACHMENT0+pe),R.depthBuffer&&se.push(Ge);const We=Ue.__ignoreDepthValues!==void 0?Ue.__ignoreDepthValues:!1;if(We===!1&&(R.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),fe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[pe]),We===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ge]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ge])),fe){const ue=n.get(b[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,X,K,0,0,X,K,le,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let pe=0;pe<b.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[pe]);const We=n.get(b[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}}function Y(R){return Math.min(r.maxSamples,R.samples)}function xe(R){const b=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Se(R){const b=o.render.frame;f.get(R)!==b&&(f.set(R,b),R.update())}function Re(R,b){const X=R.colorSpace,K=R.format,le=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===pc||X!==Wt&&X!==xi&&(ft.getTransfer(X)===St?a===!1?e.has("EXT_sRGB")===!0&&K===gn?(R.format=pc,R.minFilter=qt,R.generateMipmaps=!1):b=jm.sRGBToLinear(b):(K!==gn||le!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function st(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=j,this.resetTextureUnits=D,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=Q,this.rebindTextures=O,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=xe}function KR(i,e,t){const n=t.isWebGL2;function r(s,o=xi){let a;const l=ft.getTransfer(o);if(s===Ti)return i.UNSIGNED_BYTE;if(s===Nm)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Um)return i.UNSIGNED_SHORT_5_5_5_1;if(s===gE)return i.BYTE;if(s===_E)return i.SHORT;if(s===Wc)return i.UNSIGNED_SHORT;if(s===Im)return i.INT;if(s===Mi)return i.UNSIGNED_INT;if(s===En)return i.FLOAT;if(s===Ys)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===vE)return i.ALPHA;if(s===gn)return i.RGBA;if(s===xE)return i.LUMINANCE;if(s===yE)return i.LUMINANCE_ALPHA;if(s===er)return i.DEPTH_COMPONENT;if(s===Yr)return i.DEPTH_STENCIL;if(s===pc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Om)return i.RED;if(s===Fm)return i.RED_INTEGER;if(s===ME)return i.RG;if(s===Bm)return i.RG_INTEGER;if(s===Vm)return i.RGBA_INTEGER;if(s===qa||s===Ka||s===Za||s===Ja)if(l===St)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===qa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===qa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Za)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ja)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qf||s===Kf||s===Zf||s===Jf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===qf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===km)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qf||s===ed)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Qf)return l===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ed)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===td||s===nd||s===id||s===rd||s===sd||s===od||s===ad||s===ld||s===cd||s===ud||s===fd||s===dd||s===hd||s===pd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===td)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===id)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===od)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ad)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ld)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===cd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ud)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pd)return l===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qa||s===md||s===gd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Qa)return l===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===md)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bE||s===_d||s===vd||s===xd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Qa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===_d)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class ZR extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zi extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JR={type:"move"};class Tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(JR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const QR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eC=`
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

}`;class tC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Ht,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Li({extensions:{fragDepth:!0},vertexShader:QR,fragmentShader:eC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zt(new Pa(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class nC extends ar{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=new tC,p=t.getContextAttributes();let m=null,x=null;const v=[],M=[],A=new Fe;let E=null;const S=new nn;S.layers.enable(1),S.viewport=new gt;const w=new nn;w.layers.enable(2),w.viewport=new gt;const N=[S,w],y=new ZR;y.layers.enable(1),y.layers.enable(2);let C=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let oe=v[k];return oe===void 0&&(oe=new Tl,v[k]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(k){let oe=v[k];return oe===void 0&&(oe=new Tl,v[k]=oe),oe.getGripSpace()},this.getHand=function(k){let oe=v[k];return oe===void 0&&(oe=new Tl,v[k]=oe),oe.getHandSpace()};function J(k){const oe=M.indexOf(k.inputSource);if(oe===-1)return;const ge=v[oe];ge!==void 0&&(ge.update(k.inputSource,k.frame,c||o),ge.dispatchEvent({type:k.type,data:k.inputSource}))}function D(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",j);for(let k=0;k<v.length;k++){const oe=M[k];oe!==null&&(M[k]=null,v[k].disconnect(oe))}C=null,$=null,_.reset(),e.setRenderTarget(m),h=null,d=null,f=null,r=null,x=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",D),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new nr(h.framebufferWidth,h.framebufferHeight,{format:gn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let oe=null,ge=null,Ve=null;p.depth&&(Ve=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?Yr:er,ge=p.stencil?Qi:Mi);const Pe={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new nr(d.textureWidth,d.textureHeight,{format:gn,type:Ti,depthTexture:new ig(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const ve=e.properties.get(x);ve.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(k){for(let oe=0;oe<k.removed.length;oe++){const ge=k.removed[oe],Ve=M.indexOf(ge);Ve>=0&&(M[Ve]=null,v[Ve].disconnect(ge))}for(let oe=0;oe<k.added.length;oe++){const ge=k.added[oe];let Ve=M.indexOf(ge);if(Ve===-1){for(let ve=0;ve<v.length;ve++)if(ve>=M.length){M.push(ge),Ve=ve;break}else if(M[ve]===null){M[ve]=ge,Ve=ve;break}if(Ve===-1)break}const Pe=v[Ve];Pe&&Pe.connect(ge)}}const V=new I,Z=new I;function W(k,oe,ge){V.setFromMatrixPosition(oe.matrixWorld),Z.setFromMatrixPosition(ge.matrixWorld);const Ve=V.distanceTo(Z),Pe=oe.projectionMatrix.elements,ve=ge.projectionMatrix.elements,at=Pe[14]/(Pe[10]-1),Oe=Pe[14]/(Pe[10]+1),O=(Pe[9]+1)/Pe[5],Tt=(Pe[9]-1)/Pe[5],te=(Pe[8]-1)/Pe[0],z=(ve[8]+1)/ve[0],Y=at*te,xe=at*z,Se=Ve/(-te+z),Re=Se*-te;oe.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Re),k.translateZ(Se),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const st=at+Se,R=Oe+Se,b=Y-Re,X=xe+(Ve-Re),K=O*Oe/R*st,le=Tt*Oe/R*st;k.projectionMatrix.makePerspective(b,X,K,le,st,R),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function q(k,oe){oe===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(oe.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;_.texture!==null&&(k.near=_.depthNear,k.far=_.depthFar),y.near=w.near=S.near=k.near,y.far=w.far=S.far=k.far,(C!==y.near||$!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,$=y.far,S.near=C,S.far=$,w.near=C,w.far=$,S.updateProjectionMatrix(),w.updateProjectionMatrix(),k.updateProjectionMatrix());const oe=k.parent,ge=y.cameras;q(y,oe);for(let Ve=0;Ve<ge.length;Ve++)q(ge[Ve],oe);ge.length===2?W(y,S,w):y.projectionMatrix.copy(S.projectionMatrix),Q(k,y,oe)};function Q(k,oe,ge){ge===null?k.matrix.copy(oe.matrixWorld):(k.matrix.copy(ge.matrixWorld),k.matrix.invert(),k.matrix.multiply(oe.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(oe.projectionMatrix),k.projectionMatrixInverse.copy(oe.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Kr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=k)},this.hasDepthSensing=function(){return _.texture!==null};let ie=null;function de(k,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let Ve=!1;ge.length!==y.cameras.length&&(y.cameras.length=0,Ve=!0);for(let ve=0;ve<ge.length;ve++){const at=ge[ve];let Oe=null;if(h!==null)Oe=h.getViewport(at);else{const Tt=f.getViewSubImage(d,at);Oe=Tt.viewport,ve===0&&(e.setRenderTargetTextures(x,Tt.colorTexture,d.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(x))}let O=N[ve];O===void 0&&(O=new nn,O.layers.enable(ve),O.viewport=new gt,N[ve]=O),O.matrix.fromArray(at.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(at.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ve===0&&(y.matrix.copy(O.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ve===!0&&y.cameras.push(O)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const ve=f.getDepthInformation(ge[0]);ve&&ve.isValid&&ve.texture&&_.init(e,ve,r.renderState)}}for(let ge=0;ge<v.length;ge++){const Ve=M[ge],Pe=v[ge];Ve!==null&&Pe!==void 0&&Pe.update(Ve,oe,c||o)}_.render(e,y),ie&&ie(k,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Ne=new ng;Ne.setAnimationLoop(de),this.setAnimationLoop=function(k){ie=k},this.dispose=function(){}}}const Hi=new On,iC=new Qe;function rC(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Qm(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,x,v,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===on&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===on&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),v=x.envMap,M=x.envMapRotation;if(v&&(p.envMap.value=v,Hi.copy(M),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),p.envMapRotation.value.setFromMatrix4(iC.makeRotationFromEuler(Hi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const A=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*A,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function sC(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function c(x,v){let M=r[x.id];M===void 0&&(g(x),M=u(x),r[x.id]=M,x.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(x,A);const E=e.render.frame;s[x.id]!==E&&(d(x),s[x.id]=E)}function u(x){const v=f();x.__bindingPointIndex=v;const M=i.createBuffer(),A=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=r[x.id],M=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,S=M.length;E<S;E++){const w=Array.isArray(M[E])?M[E]:[M[E]];for(let N=0,y=w.length;N<y;N++){const C=w[N];if(h(C,E,N,A)===!0){const $=C.__offset,J=Array.isArray(C.value)?C.value:[C.value];let D=0;for(let j=0;j<J.length;j++){const V=J[j],Z=_(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,$+D,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,v,M,A){const E=x.value,S=v+"_"+M;if(A[S]===void 0)return typeof E=="number"||typeof E=="boolean"?A[S]=E:A[S]=E.clone(),!0;{const w=A[S];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return A[S]=E,!0}else if(w.equals(E)===!1)return w.copy(E),!0}return!1}function g(x){const v=x.uniforms;let M=0;const A=16;for(let S=0,w=v.length;S<w;S++){const N=Array.isArray(v[S])?v[S]:[v[S]];for(let y=0,C=N.length;y<C;y++){const $=N[y],J=Array.isArray($.value)?$.value:[$.value];for(let D=0,j=J.length;D<j;D++){const V=J[D],Z=_(V),W=M%A;W!==0&&A-W<Z.boundary&&(M+=A-W),$.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=M,M+=Z.storage}}}const E=M%A;return E>0&&(M+=A-E),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class cg{constructor(e={}){const{canvas:t=qE(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this._useLegacyLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;const v=this;let M=!1,A=0,E=0,S=null,w=-1,N=null;const y=new gt,C=new gt;let $=null;const J=new je(0);let D=0,j=t.width,V=t.height,Z=1,W=null,q=null;const Q=new gt(0,0,j,V),ie=new gt(0,0,j,V);let de=!1;const Ne=new $c;let k=!1,oe=!1,ge=null;const Ve=new Qe,Pe=new Fe,ve=new I,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return S===null?Z:1}let O=n;function Tt(T,U){for(let H=0;H<T.length;H++){const G=T[H],B=t.getContext(G,U);if(B!==null)return B}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gc}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ce,!1),O===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),O=Tt(U,T),O===null)throw Tt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let te,z,Y,xe,Se,Re,st,R,b,X,K,le,se,Ge,Ue,fe,pe,We,ue,Ct,tt,Ie,ye,Le;function P(){te=new f1(O),z=new s1(O,te,e),te.init(z),Ie=new KR(O,te,z),Y=new YR(O,te,z),xe=new p1(O),Se=new NR,Re=new qR(O,te,Y,Se,z,Ie,xe),st=new a1(v),R=new u1(v),b=new yT(O,z),ye=new i1(O,te,b,z),X=new d1(O,b,xe,ye),K=new v1(O,X,b,xe),ue=new _1(O,z,Re),fe=new o1(Se),le=new IR(v,st,R,te,z,ye,fe),se=new rC(v,Se),Ge=new OR,Ue=new HR(te,z),We=new n1(v,st,R,Y,K,d,l),pe=new $R(v,K,z),Le=new sC(O,xe,z,Y),Ct=new r1(O,te,xe,z),tt=new h1(O,te,xe,z),xe.programs=le.programs,v.capabilities=z,v.extensions=te,v.properties=Se,v.renderLists=Ge,v.shadowMap=pe,v.state=Y,v.info=xe}P();const ee=new nC(v,O);this.xr=ee,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(j,V,!1))},this.getSize=function(T){return T.set(j,V)},this.setSize=function(T,U,H=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,V=U,t.width=Math.floor(T*Z),t.height=Math.floor(U*Z),H===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(j*Z,V*Z).floor()},this.setDrawingBufferSize=function(T,U,H){j=T,V=U,Z=H,t.width=Math.floor(T*H),t.height=Math.floor(U*H),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,U,H,G){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,U,H,G),Y.viewport(y.copy(Q).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,U,H,G){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,U,H,G),Y.scissor(C.copy(ie).multiplyScalar(Z).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(T){Y.setScissorTest(de=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(T=!0,U=!0,H=!0){let G=0;if(T){let B=!1;if(S!==null){const _e=S.texture.format;B=_e===Vm||_e===Bm||_e===Fm}if(B){const _e=S.texture.type,De=_e===Ti||_e===Mi||_e===Wc||_e===Qi||_e===Nm||_e===Um,Be=We.getClearColor(),ze=We.getClearAlpha(),nt=Be.r,$e=Be.g,Ye=Be.b;De?(h[0]=nt,h[1]=$e,h[2]=Ye,h[3]=ze,O.clearBufferuiv(O.COLOR,0,h)):(g[0]=nt,g[1]=$e,g[2]=Ye,g[3]=ze,O.clearBufferiv(O.COLOR,0,g))}else G|=O.COLOR_BUFFER_BIT}U&&(G|=O.DEPTH_BUFFER_BIT),H&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ge.dispose(),Ue.dispose(),Se.dispose(),st.dispose(),R.dispose(),K.dispose(),ye.dispose(),Le.dispose(),le.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Pt),ee.removeEventListener("sessionend",ct),ge&&(ge.dispose(),ge=null),Mt.stop()};function Ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=xe.autoReset,U=pe.enabled,H=pe.autoUpdate,G=pe.needsUpdate,B=pe.type;P(),xe.autoReset=T,pe.enabled=U,pe.autoUpdate=H,pe.needsUpdate=G,pe.type=B}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function F(T){const U=T.target;U.removeEventListener("dispose",F),ae(U)}function ae(T){me(T),Se.remove(T)}function me(T){const U=Se.get(T).programs;U!==void 0&&(U.forEach(function(H){le.releaseProgram(H)}),T.isShaderMaterial&&le.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,H,G,B,_e){U===null&&(U=at);const De=B.isMesh&&B.matrixWorld.determinant()<0,Be=Eg(T,U,H,G,B);Y.setMaterial(G,De);let ze=H.index,nt=1;if(G.wireframe===!0){if(ze=X.getWireframeAttribute(H),ze===void 0)return;nt=2}const $e=H.drawRange,Ye=H.attributes.position;let Dt=$e.start*nt,an=($e.start+$e.count)*nt;_e!==null&&(Dt=Math.max(Dt,_e.start*nt),an=Math.min(an,(_e.start+_e.count)*nt)),ze!==null?(Dt=Math.max(Dt,0),an=Math.min(an,ze.count)):Ye!=null&&(Dt=Math.max(Dt,0),an=Math.min(an,Ye.count));const Bt=an-Dt;if(Bt<0||Bt===1/0)return;ye.setup(B,G,Be,H,ze);let zn,At=Ct;if(ze!==null&&(zn=b.get(ze),At=tt,At.setIndex(zn)),B.isMesh)G.wireframe===!0?(Y.setLineWidth(G.wireframeLinewidth*Oe()),At.setMode(O.LINES)):At.setMode(O.TRIANGLES);else if(B.isLine){let Ke=G.linewidth;Ke===void 0&&(Ke=1),Y.setLineWidth(Ke*Oe()),B.isLineSegments?At.setMode(O.LINES):B.isLineLoop?At.setMode(O.LINE_LOOP):At.setMode(O.LINE_STRIP)}else B.isPoints?At.setMode(O.POINTS):B.isSprite&&At.setMode(O.TRIANGLES);if(B.isBatchedMesh)At.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)At.renderInstances(Dt,Bt,B.count);else if(H.isInstancedBufferGeometry){const Ke=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ua=Math.min(H.instanceCount,Ke);At.renderInstances(Dt,Bt,Ua)}else At.render(Dt,Bt)};function ot(T,U,H){T.transparent===!0&&T.side===Ln&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,lo(T,U,H),T.side=ni,T.needsUpdate=!0,lo(T,U,H),T.side=Ln):lo(T,U,H)}this.compile=function(T,U,H=null){H===null&&(H=T),p=Ue.get(H),p.init(),x.push(p),H.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==H&&T.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(v._useLegacyLights);const G=new Set;return T.traverse(function(B){const _e=B.material;if(_e)if(Array.isArray(_e))for(let De=0;De<_e.length;De++){const Be=_e[De];ot(Be,H,B),G.add(Be)}else ot(_e,H,B),G.add(_e)}),x.pop(),p=null,G},this.compileAsync=function(T,U,H=null){const G=this.compile(T,U,H);return new Promise(B=>{function _e(){if(G.forEach(function(De){Se.get(De).currentProgram.isReady()&&G.delete(De)}),G.size===0){B(T);return}setTimeout(_e,10)}te.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let dt=null;function mt(T){dt&&dt(T)}function Pt(){Mt.stop()}function ct(){Mt.start()}const Mt=new ng;Mt.setAnimationLoop(mt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(T){dt=T,ee.setAnimationLoop(T),T===null?Mt.stop():Mt.start()},ee.addEventListener("sessionstart",Pt),ee.addEventListener("sessionend",ct),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(U),U=ee.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,U,S),p=Ue.get(T,x.length),p.init(),x.push(p),Ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ne.setFromProjectionMatrix(Ve),oe=this.localClippingEnabled,k=fe.init(this.clippingPlanes,oe),_=Ge.get(T,m.length),_.init(),m.push(_),Xt(T,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,q),this.info.render.frame++,k===!0&&fe.beginShadows();const H=p.state.shadowsArray;if(pe.render(H,T,U),k===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1)&&We.render(_,T),p.setupLights(v._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let B=0,_e=G.length;B<_e;B++){const De=G[B];Ii(_,T,De,De.viewport)}}else Ii(_,T,U);S!==null&&(Re.updateMultisampleRenderTarget(S),Re.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(v,T,U),ye.resetDefaultState(),w=-1,N=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Xt(T,U,H,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ne.intersectsSprite(T)){G&&ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ve);const De=K.update(T),Be=T.material;Be.visible&&_.push(T,De,Be,H,ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ne.intersectsObject(T))){const De=K.update(T),Be=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ve.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ve.copy(De.boundingSphere.center)),ve.applyMatrix4(T.matrixWorld).applyMatrix4(Ve)),Array.isArray(Be)){const ze=De.groups;for(let nt=0,$e=ze.length;nt<$e;nt++){const Ye=ze[nt],Dt=Be[Ye.materialIndex];Dt&&Dt.visible&&_.push(T,De,Dt,H,ve.z,Ye)}}else Be.visible&&_.push(T,De,Be,H,ve.z,null)}}const _e=T.children;for(let De=0,Be=_e.length;De<Be;De++)Xt(_e[De],U,H,G)}function Ii(T,U,H,G){const B=T.opaque,_e=T.transmissive,De=T.transparent;p.setupLightsView(H),k===!0&&fe.setGlobalState(v.clippingPlanes,H),_e.length>0&&oo(B,_e,U,H),G&&Y.viewport(y.copy(G)),B.length>0&&ao(B,U,H),_e.length>0&&ao(_e,U,H),De.length>0&&ao(De,U,H),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function oo(T,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const _e=z.isWebGL2;ge===null&&(ge=new nr(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?Ys:Ti,minFilter:Zn,samples:_e?4:0})),v.getDrawingBufferSize(Pe),_e?ge.setSize(Pe.x,Pe.y):ge.setSize(ya(Pe.x),ya(Pe.y));const De=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(J),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Be=v.toneMapping;v.toneMapping=Ei,ao(T,H,G),Re.updateMultisampleRenderTarget(ge),Re.updateRenderTargetMipmap(ge);let ze=!1;for(let nt=0,$e=U.length;nt<$e;nt++){const Ye=U[nt],Dt=Ye.object,an=Ye.geometry,Bt=Ye.material,zn=Ye.group;if(Bt.side===Ln&&Dt.layers.test(G.layers)){const At=Bt.side;Bt.side=on,Bt.needsUpdate=!0,nu(Dt,H,G,an,Bt,zn),Bt.side=At,Bt.needsUpdate=!0,ze=!0}}ze===!0&&(Re.updateMultisampleRenderTarget(ge),Re.updateRenderTargetMipmap(ge)),v.setRenderTarget(De),v.setClearColor(J,D),v.toneMapping=Be}function ao(T,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let B=0,_e=T.length;B<_e;B++){const De=T[B],Be=De.object,ze=De.geometry,nt=G===null?De.material:G,$e=De.group;Be.layers.test(H.layers)&&nu(Be,U,H,ze,nt,$e)}}function nu(T,U,H,G,B,_e){T.onBeforeRender(v,U,H,G,B,_e),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(v,U,H,G,T,_e),B.transparent===!0&&B.side===Ln&&B.forceSinglePass===!1?(B.side=on,B.needsUpdate=!0,v.renderBufferDirect(H,U,G,B,T,_e),B.side=ni,B.needsUpdate=!0,v.renderBufferDirect(H,U,G,B,T,_e),B.side=Ln):v.renderBufferDirect(H,U,G,B,T,_e),T.onAfterRender(v,U,H,G,B,_e)}function lo(T,U,H){U.isScene!==!0&&(U=at);const G=Se.get(T),B=p.state.lights,_e=p.state.shadowsArray,De=B.state.version,Be=le.getParameters(T,B.state,_e,U,H),ze=le.getProgramCacheKey(Be);let nt=G.programs;G.environment=T.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(T.isMeshStandardMaterial?R:st).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,nt===void 0&&(T.addEventListener("dispose",F),nt=new Map,G.programs=nt);let $e=nt.get(ze);if($e!==void 0){if(G.currentProgram===$e&&G.lightsStateVersion===De)return ru(T,Be),$e}else Be.uniforms=le.getUniforms(T),T.onBuild(H,Be,v),T.onBeforeCompile(Be,v),$e=le.acquireProgram(Be,ze),nt.set(ze,$e),G.uniforms=Be.uniforms;const Ye=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=fe.uniform),ru(T,Be),G.needsLights=Ag(T),G.lightsStateVersion=De,G.needsLights&&(Ye.ambientLightColor.value=B.state.ambient,Ye.lightProbe.value=B.state.probe,Ye.directionalLights.value=B.state.directional,Ye.directionalLightShadows.value=B.state.directionalShadow,Ye.spotLights.value=B.state.spot,Ye.spotLightShadows.value=B.state.spotShadow,Ye.rectAreaLights.value=B.state.rectArea,Ye.ltc_1.value=B.state.rectAreaLTC1,Ye.ltc_2.value=B.state.rectAreaLTC2,Ye.pointLights.value=B.state.point,Ye.pointLightShadows.value=B.state.pointShadow,Ye.hemisphereLights.value=B.state.hemi,Ye.directionalShadowMap.value=B.state.directionalShadowMap,Ye.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ye.spotShadowMap.value=B.state.spotShadowMap,Ye.spotLightMatrix.value=B.state.spotLightMatrix,Ye.spotLightMap.value=B.state.spotLightMap,Ye.pointShadowMap.value=B.state.pointShadowMap,Ye.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=$e,G.uniformsList=null,$e}function iu(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Qo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function ru(T,U){const H=Se.get(T);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Eg(T,U,H,G,B){U.isScene!==!0&&(U=at),Re.resetTextureUnits();const _e=U.fog,De=G.isMeshStandardMaterial?U.environment:null,Be=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Wt,ze=(G.isMeshStandardMaterial?R:st).get(G.envMap||De),nt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,$e=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ye=!!H.morphAttributes.position,Dt=!!H.morphAttributes.normal,an=!!H.morphAttributes.color;let Bt=Ei;G.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Bt=v.toneMapping);const zn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,At=zn!==void 0?zn.length:0,Ke=Se.get(G),Ua=p.state.lights;if(k===!0&&(oe===!0||T!==N)){const dn=T===N&&G.id===w;fe.setState(G,T,dn)}let Et=!1;G.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Ua.state.version||Ke.outputColorSpace!==Be||B.isBatchedMesh&&Ke.batching===!1||!B.isBatchedMesh&&Ke.batching===!0||B.isInstancedMesh&&Ke.instancing===!1||!B.isInstancedMesh&&Ke.instancing===!0||B.isSkinnedMesh&&Ke.skinning===!1||!B.isSkinnedMesh&&Ke.skinning===!0||B.isInstancedMesh&&Ke.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ke.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ke.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ke.instancingMorph===!1&&B.morphTexture!==null||Ke.envMap!==ze||G.fog===!0&&Ke.fog!==_e||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==fe.numPlanes||Ke.numIntersection!==fe.numIntersection)||Ke.vertexAlphas!==nt||Ke.vertexTangents!==$e||Ke.morphTargets!==Ye||Ke.morphNormals!==Dt||Ke.morphColors!==an||Ke.toneMapping!==Bt||z.isWebGL2===!0&&Ke.morphTargetsCount!==At)&&(Et=!0):(Et=!0,Ke.__version=G.version);let Ni=Ke.currentProgram;Et===!0&&(Ni=lo(G,U,B));let su=!1,us=!1,Oa=!1;const jt=Ni.getUniforms(),Ui=Ke.uniforms;if(Y.useProgram(Ni.program)&&(su=!0,us=!0,Oa=!0),G.id!==w&&(w=G.id,us=!0),su||N!==T){jt.setValue(O,"projectionMatrix",T.projectionMatrix),jt.setValue(O,"viewMatrix",T.matrixWorldInverse);const dn=jt.map.cameraPosition;dn!==void 0&&dn.setValue(O,ve.setFromMatrixPosition(T.matrixWorld)),z.logarithmicDepthBuffer&&jt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&jt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),N!==T&&(N=T,us=!0,Oa=!0)}if(B.isSkinnedMesh){jt.setOptional(O,B,"bindMatrix"),jt.setOptional(O,B,"bindMatrixInverse");const dn=B.skeleton;dn&&(z.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),jt.setValue(O,"boneTexture",dn.boneTexture,Re)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(jt.setOptional(O,B,"batchingTexture"),jt.setValue(O,"batchingTexture",B._matricesTexture,Re));const Fa=H.morphAttributes;if((Fa.position!==void 0||Fa.normal!==void 0||Fa.color!==void 0&&z.isWebGL2===!0)&&ue.update(B,H,Ni),(us||Ke.receiveShadow!==B.receiveShadow)&&(Ke.receiveShadow=B.receiveShadow,jt.setValue(O,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ui.envMap.value=ze,Ui.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),us&&(jt.setValue(O,"toneMappingExposure",v.toneMappingExposure),Ke.needsLights&&Tg(Ui,Oa),_e&&G.fog===!0&&se.refreshFogUniforms(Ui,_e),se.refreshMaterialUniforms(Ui,G,Z,V,ge),Qo.upload(O,iu(Ke),Ui,Re)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qo.upload(O,iu(Ke),Ui,Re),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&jt.setValue(O,"center",B.center),jt.setValue(O,"modelViewMatrix",B.modelViewMatrix),jt.setValue(O,"normalMatrix",B.normalMatrix),jt.setValue(O,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const dn=G.uniformsGroups;for(let Ba=0,wg=dn.length;Ba<wg;Ba++)if(z.isWebGL2){const ou=dn[Ba];Le.update(ou,Ni),Le.bind(ou,Ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ni}function Tg(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Ag(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,U,H){Se.get(T.texture).__webglTexture=U,Se.get(T.depthTexture).__webglTexture=H;const G=Se.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const H=Se.get(T);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,H=0){S=T,A=U,E=H;let G=!0,B=null,_e=!1,De=!1;if(T){const ze=Se.get(T);ze.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(O.FRAMEBUFFER,null),G=!1):ze.__webglFramebuffer===void 0?Re.setupRenderTarget(T):ze.__hasExternalTextures&&Re.rebindTextures(T,Se.get(T.texture).__webglTexture,Se.get(T.depthTexture).__webglTexture);const nt=T.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(De=!0);const $e=Se.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($e[U])?B=$e[U][H]:B=$e[U],_e=!0):z.isWebGL2&&T.samples>0&&Re.useMultisampledRTT(T)===!1?B=Se.get(T).__webglMultisampledFramebuffer:Array.isArray($e)?B=$e[H]:B=$e,y.copy(T.viewport),C.copy(T.scissor),$=T.scissorTest}else y.copy(Q).multiplyScalar(Z).floor(),C.copy(ie).multiplyScalar(Z).floor(),$=de;if(Y.bindFramebuffer(O.FRAMEBUFFER,B)&&z.drawBuffers&&G&&Y.drawBuffers(T,B),Y.viewport(y),Y.scissor(C),Y.setScissorTest($),_e){const ze=Se.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ze.__webglTexture,H)}else if(De){const ze=Se.get(T.texture),nt=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.__webglTexture,H||0,nt)}w=-1},this.readRenderTargetPixels=function(T,U,H,G,B,_e,De){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){Y.bindFramebuffer(O.FRAMEBUFFER,Be);try{const ze=T.texture,nt=ze.format,$e=ze.type;if(nt!==gn&&Ie.convert(nt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=$e===Ys&&(te.has("EXT_color_buffer_half_float")||z.isWebGL2&&te.has("EXT_color_buffer_float"));if($e!==Ti&&Ie.convert($e)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===En&&(z.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&H>=0&&H<=T.height-B&&O.readPixels(U,H,G,B,Ie.convert(nt),Ie.convert($e),_e)}finally{const ze=S!==null?Se.get(S).__webglFramebuffer:null;Y.bindFramebuffer(O.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(T,U,H=0){const G=Math.pow(2,-H),B=Math.floor(U.image.width*G),_e=Math.floor(U.image.height*G);Re.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,T.x,T.y,B,_e),Y.unbindTexture()},this.copyTextureToTexture=function(T,U,H,G=0){const B=U.image.width,_e=U.image.height,De=Ie.convert(H.format),Be=Ie.convert(H.type);Re.setTexture2D(H,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,T.x,T.y,B,_e,De,Be,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,De,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,G,T.x,T.y,De,Be,U.image),G===0&&H.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(T,U,H,G,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=Math.round(T.max.x-T.min.x),De=Math.round(T.max.y-T.min.y),Be=T.max.z-T.min.z+1,ze=Ie.convert(G.format),nt=Ie.convert(G.type);let $e;if(G.isData3DTexture)Re.setTexture3D(G,0),$e=O.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)Re.setTexture2DArray(G,0),$e=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const Ye=O.getParameter(O.UNPACK_ROW_LENGTH),Dt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),an=O.getParameter(O.UNPACK_SKIP_PIXELS),Bt=O.getParameter(O.UNPACK_SKIP_ROWS),zn=O.getParameter(O.UNPACK_SKIP_IMAGES),At=H.isCompressedTexture?H.mipmaps[B]:H.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,At.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,T.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,T.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,T.min.z),H.isDataTexture||H.isData3DTexture?O.texSubImage3D($e,B,U.x,U.y,U.z,_e,De,Be,ze,nt,At.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D($e,B,U.x,U.y,U.z,_e,De,Be,ze,At.data):O.texSubImage3D($e,B,U.x,U.y,U.z,_e,De,Be,ze,nt,At),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ye),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Dt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,an),O.pixelStorei(O.UNPACK_SKIP_ROWS,Bt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,zn),B===0&&G.generateMipmaps&&O.generateMipmap($e),Y.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Re.setTextureCube(T,0):T.isData3DTexture?Re.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Re.setTexture2DArray(T,0):Re.setTexture2D(T,0),Y.unbindTexture()},this.resetState=function(){A=0,E=0,S=null,Y.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xc?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===Ca?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class oC extends cg{}oC.prototype.isWebGL1Renderer=!0;class aC extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lC{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xm("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new I;class Kc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const dh=new I,hh=new gt,ph=new gt,cC=new I,mh=new Qe,ko=new I,Al=new Vn,gh=new Qe,wl=new no;class uC extends Zt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yf,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new si),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ko),this.boundingBox.expandByPoint(ko)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ko),this.boundingSphere.expandByPoint(ko)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Al.copy(this.boundingSphere),Al.applyMatrix4(r),e.ray.intersectsSphere(Al)!==!1&&(gh.copy(r).invert(),wl.copy(e.ray).applyMatrix4(gh),!(this.boundingBox!==null&&wl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mE?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;hh.fromBufferAttribute(r.attributes.skinIndex,e),ph.fromBufferAttribute(r.attributes.skinWeight,e),dh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=ph.getComponent(s);if(o!==0){const a=hh.getComponent(s);mh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(cC.copy(dh).applyMatrix4(mh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ug extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fg extends Ht{constructor(e=null,t=1,n=1,r,s,o,a,l,c=kt,u=kt,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _h=new Qe,fC=new Qe;class Zc{constructor(e=[],t=[]){this.uuid=wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:fC;_h.multiplyMatrices(a,t[s]),_h.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Zc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new fg(t,e,e,gn,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new ug),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class _c extends rn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pr=new Qe,vh=new Qe,zo=[],xh=new si,dC=new Qe,Ms=new Zt,bs=new Vn;class hC extends Zt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,dC)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pr),xh.copy(e.boundingBox).applyMatrix4(Pr),this.boundingBox.union(xh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pr),bs.copy(e.boundingSphere).applyMatrix4(Pr),this.boundingSphere.union(bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),e.ray.intersectsSphere(bs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Pr),vh.multiplyMatrices(n,Pr),Ms.matrixWorld=vh,Ms.raycast(e,zo);for(let o=0,a=zo.length;o<a;o++){const l=zo[o];l.instanceId=s,l.object=this,t.push(l)}zo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _c(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new fg(new Float32Array(r*this.count),r,this.count,Om,En));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class dg extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yh=new I,Mh=new I,bh=new Qe,Rl=new no,Ho=new Vn;class Jc extends wt{constructor(e=new Cn,t=new dg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)yh.fromBufferAttribute(t,r-1),Mh.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=yh.distanceTo(Mh);e.setAttribute("lineDistance",new xn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),Ho.radius+=s,e.ray.intersectsSphere(Ho)===!1)return;bh.copy(r).invert(),Rl.copy(e.ray).applyMatrix4(bh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,f=new I,d=new I,h=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=m,M=x-1;v<M;v+=h){const A=g.getX(v),E=g.getX(v+1);if(c.fromBufferAttribute(p,A),u.fromBufferAttribute(p,E),Rl.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let v=m,M=x-1;v<M;v+=h){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Rl.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Sh=new I,Eh=new I;class pC extends Jc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Sh.fromBufferAttribute(t,r),Eh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Sh.distanceTo(Eh);e.setAttribute("lineDistance",new xn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mC extends Jc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class hg extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Th=new Qe,vc=new no,Go=new Vn,Wo=new I;class gC extends wt{constructor(e=new Cn,t=new hg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(r),Go.radius+=s,e.ray.intersectsSphere(Go)===!1)return;Th.copy(r).invert(),vc.copy(e.ray).applyMatrix4(Th);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const p=c.getX(g);Wo.fromBufferAttribute(f,p),Ah(Wo,p,l,r,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)Wo.fromBufferAttribute(f,g),Ah(Wo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ah(i,e,t,n,r,s,o){const a=vc.distanceSqToPoint(i);if(a<t){const l=new I;vc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ro extends Cn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new I,d=new I,h=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const x=[],v=m/n;let M=0;m===0&&o===0?M=.5/t:m===n&&l===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){const E=A/t;f.x=-e*Math.cos(r+E*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+E*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(E+M,1-v),x.push(c++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const v=u[m][x+1],M=u[m][x],A=u[m+1][x],E=u[m+1][x+1];(m!==0||o>0)&&h.push(v,M,E),(m!==n-1||l<Math.PI)&&h.push(M,A,E)}this.setIndex(h),this.setAttribute("position",new xn(g,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ss extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hm,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oi extends ss{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Xo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function _C(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vC(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function wh(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function pg(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class so{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class xC extends so{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yd,endingEnd:yd}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Md:s=e,a=2*t-n;break;case bd:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Md:o=e,l=2*n-t;break;case bd:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(n-t)/(r-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,x=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-h)*p+(1.5+h)*_+.5*g,M=h*p-h*_;for(let A=0;A!==a;++A)s[A]=m*o[u+A]+x*o[c+A]+v*o[l+A]+M*o[f+A];return s}}class yC extends so{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),f=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*u;return s}}class MC extends so{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class kn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xo(t,this.TimeBufferType),this.values=Xo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xo(e.times,Array),values:Xo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new MC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case qr:t=this.InterpolantFactoryMethodLinear;break;case el:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return qr;case this.InterpolantFactoryMethodSmooth:return el}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&_C(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===el,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*n,d=f-n,h=f+n;for(let g=0;g!==n;++g){const _=t[f+g];if(_!==t[d+g]||_!==t[h+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,d=o*n;for(let h=0;h!==n;++h)t[d+h]=t[f+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=qr;class os extends kn{}os.prototype.ValueTypeName="bool";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=qs;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;class mg extends kn{}mg.prototype.ValueTypeName="color";class Jr extends kn{}Jr.prototype.ValueTypeName="number";class bC extends so{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Un.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ir extends kn{InterpolantFactoryMethodLinear(e){return new bC(this.times,this.values,this.getValueSize(),e)}}ir.prototype.ValueTypeName="quaternion";ir.prototype.DefaultInterpolation=qr;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class as extends kn{}as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=qs;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;class Qr extends kn{}Qr.prototype.ValueTypeName="vector";class SC{constructor(e,t=-1,n,r=SE){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=wn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(TC(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(kn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=vC(l);l=wh(l,1,u),c=wh(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Jr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let d=r[f];d||(r[f]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,d,h,g,_){if(h.length!==0){const p=[],m=[];pg(h,p,m,g),p.length!==0&&_.push(new f(d,p,m))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const h={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)h[d[g].morphTargets[_]]=-1;for(const _ in h){const p=[],m=[];for(let x=0;x!==d[g].morphTargets.length;++x){const v=d[g];p.push(v.time),m.push(v.morphTarget===_?1:0)}r.push(new Jr(".morphTargetInfluence["+_+"]",p,m))}l=h.length*o}else{const h=".bones["+t[f].name+"]";n(Qr,h+".position",d,"pos",r),n(ir,h+".quaternion",d,"rot",r),n(Qr,h+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function EC(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Jr;case"vector":case"vector2":case"vector3":case"vector4":return Qr;case"color":return mg;case"quaternion":return ir;case"bool":case"boolean":return os;case"string":return as}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function TC(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=EC(i.type);if(i.times===void 0){const t=[],n=[];pg(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class AC{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const wC=new AC;class ls{constructor(e){this.manager=e!==void 0?e:wC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ls.DEFAULT_MATERIAL_NAME="__DEFAULT";const qn={};class RC extends Error{constructor(e,t){super(e),this.response=t}}class gg extends ls{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=bi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(qn[e]!==void 0){qn[e].push({onLoad:t,onProgress:n,onError:r});return}qn[e]=[],qn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=qn[e],f=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),h=d?parseInt(d):0,g=h!==0;let _=0;const p=new ReadableStream({start(m){x();function x(){f.read().then(({done:v,value:M})=>{if(v)m.close();else{_+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let E=0,S=u.length;E<S;E++){const w=u[E];w.onProgress&&w.onProgress(A)}m.enqueue(M),x()}})}}});return new Response(p)}else throw new RC(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{bi.add(e,c);const u=qn[e];delete qn[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=qn[e];if(u===void 0)throw this.manager.itemError(e),c;delete qn[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class CC extends ls{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=bi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ks("img");function l(){u(),bi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class _g extends ls{constructor(e){super(e)}load(e,t,n,r){const s=new Ht,o=new CC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Da extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Cl=new Qe,Rh=new I,Ch=new I;class Qc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $c,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Rh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rh),Ch.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ch),t.updateMatrixWorld(),Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class PC extends Qc{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Kr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class LC extends Da{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new PC}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ph=new Qe,Ss=new I,Pl=new I;class DC extends Qc{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ss.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ss),Pl.copy(n.position),Pl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pl),n.updateMatrixWorld(),r.makeTranslation(-Ss.x,-Ss.y,-Ss.z),Ph.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ph)}}class vg extends Da{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new DC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class IC extends Qc{constructor(){super(new Yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class NC extends Da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new IC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class UC extends Da{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Os{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class OC extends ls{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=bi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return bi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),bi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});bi.add(e,l),s.manager.itemStart(e)}}const eu="\\[\\]\\.:\\/",FC=new RegExp("["+eu+"]","g"),tu="[^"+eu+"]",BC="[^"+eu.replace("\\.","")+"]",VC=/((?:WC+[\/:])*)/.source.replace("WC",tu),kC=/(WCOD+)?/.source.replace("WCOD",BC),zC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tu),HC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tu),GC=new RegExp("^"+VC+kC+zC+HC+"$"),WC=["material","materials","bones","map"];class XC{constructor(e,t,n){const r=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class pt{constructor(e,t,n){this.path=t,this.parsedPath=n||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,n):new pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(FC,"")}static parseTrackName(e){const t=GC.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);WC.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=XC;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Lh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);const Dh={type:"change"},Ll={type:"start"},Ih={type:"end"},jo=new no,Nh=new _i,jC=Math.cos(70*Us.DEG2RAD);class $C extends ar{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:dr.ROTATE,MIDDLE:dr.DOLLY,RIGHT:dr.PAN},this.touches={ONE:hr.ROTATE,TWO:hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Ue),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ue),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Dh),n.update(),s=r.NONE},this.update=function(){const P=new I,ee=new Un().setFromUnitVectors(e.up,new I(0,1,0)),Ee=ee.clone().invert(),L=new I,ce=new Un,F=new I,ae=2*Math.PI;return function(ot=null){const dt=n.object.position;P.copy(dt).sub(n.target),P.applyQuaternion(ee),a.setFromVector3(P),n.autoRotate&&s===r.NONE&&$(y(ot)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let mt=n.minAzimuthAngle,Pt=n.maxAzimuthAngle;isFinite(mt)&&isFinite(Pt)&&(mt<-Math.PI?mt+=ae:mt>Math.PI&&(mt-=ae),Pt<-Math.PI?Pt+=ae:Pt>Math.PI&&(Pt-=ae),mt<=Pt?a.theta=Math.max(mt,Math.min(Pt,a.theta)):a.theta=a.theta>(mt+Pt)/2?Math.max(mt,a.theta):Math.min(Pt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ct=!1;if(n.zoomToCursor&&E||n.object.isOrthographicCamera)a.radius=Q(a.radius);else{const Mt=a.radius;a.radius=Q(a.radius*c),ct=Mt!=a.radius}if(P.setFromSpherical(a),P.applyQuaternion(Ee),dt.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&E){let Mt=null;if(n.object.isPerspectiveCamera){const Xt=P.length();Mt=Q(Xt*c);const Ii=Xt-Mt;n.object.position.addScaledVector(M,Ii),n.object.updateMatrixWorld(),ct=!!Ii}else if(n.object.isOrthographicCamera){const Xt=new I(A.x,A.y,0);Xt.unproject(n.object);const Ii=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ct=Ii!==n.object.zoom;const oo=new I(A.x,A.y,0);oo.unproject(n.object),n.object.position.sub(oo).add(Xt),n.object.updateMatrixWorld(),Mt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Mt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Mt).add(n.object.position):(jo.origin.copy(n.object.position),jo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(jo.direction))<jC?e.lookAt(n.target):(Nh.setFromNormalAndCoplanarPoint(n.object.up,n.target),jo.intersectPlane(Nh,n.target))))}else if(n.object.isOrthographicCamera){const Mt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Mt!==n.object.zoom&&(n.object.updateProjectionMatrix(),ct=!0)}return c=1,E=!1,ct||L.distanceToSquared(n.object.position)>o||8*(1-ce.dot(n.object.quaternion))>o||F.distanceToSquared(n.target)>o?(n.dispatchEvent(Dh),L.copy(n.object.position),ce.copy(n.object.quaternion),F.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",We),n.domElement.removeEventListener("pointerdown",Re),n.domElement.removeEventListener("pointercancel",R),n.domElement.removeEventListener("wheel",K),n.domElement.removeEventListener("pointermove",st),n.domElement.removeEventListener("pointerup",R),n.domElement.getRootNode().removeEventListener("keydown",se,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ue),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Lh,l=new Lh;let c=1;const u=new I,f=new Fe,d=new Fe,h=new Fe,g=new Fe,_=new Fe,p=new Fe,m=new Fe,x=new Fe,v=new Fe,M=new I,A=new Fe;let E=!1;const S=[],w={};let N=!1;function y(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function C(P){const ee=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*ee)}function $(P){l.theta-=P}function J(P){l.phi-=P}const D=function(){const P=new I;return function(Ee,L){P.setFromMatrixColumn(L,0),P.multiplyScalar(-Ee),u.add(P)}}(),j=function(){const P=new I;return function(Ee,L){n.screenSpacePanning===!0?P.setFromMatrixColumn(L,1):(P.setFromMatrixColumn(L,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(Ee),u.add(P)}}(),V=function(){const P=new I;return function(Ee,L){const ce=n.domElement;if(n.object.isPerspectiveCamera){const F=n.object.position;P.copy(F).sub(n.target);let ae=P.length();ae*=Math.tan(n.object.fov/2*Math.PI/180),D(2*Ee*ae/ce.clientHeight,n.object.matrix),j(2*L*ae/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(Ee*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),j(L*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(P,ee){if(!n.zoomToCursor)return;E=!0;const Ee=n.domElement.getBoundingClientRect(),L=P-Ee.left,ce=ee-Ee.top,F=Ee.width,ae=Ee.height;A.x=L/F*2-1,A.y=-(ce/ae)*2+1,M.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function Q(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function ie(P){f.set(P.clientX,P.clientY)}function de(P){q(P.clientX,P.clientX),m.set(P.clientX,P.clientY)}function Ne(P){g.set(P.clientX,P.clientY)}function k(P){d.set(P.clientX,P.clientY),h.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ee=n.domElement;$(2*Math.PI*h.x/ee.clientHeight),J(2*Math.PI*h.y/ee.clientHeight),f.copy(d),n.update()}function oe(P){x.set(P.clientX,P.clientY),v.subVectors(x,m),v.y>0?Z(C(v.y)):v.y<0&&W(C(v.y)),m.copy(x),n.update()}function ge(P){_.set(P.clientX,P.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),V(p.x,p.y),g.copy(_),n.update()}function Ve(P){q(P.clientX,P.clientY),P.deltaY<0?W(C(P.deltaY)):P.deltaY>0&&Z(C(P.deltaY)),n.update()}function Pe(P){let ee=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),ee=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),ee=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?$(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),ee=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?$(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),ee=!0;break}ee&&(P.preventDefault(),n.update())}function ve(P){if(S.length===1)f.set(P.pageX,P.pageY);else{const ee=ye(P),Ee=.5*(P.pageX+ee.x),L=.5*(P.pageY+ee.y);f.set(Ee,L)}}function at(P){if(S.length===1)g.set(P.pageX,P.pageY);else{const ee=ye(P),Ee=.5*(P.pageX+ee.x),L=.5*(P.pageY+ee.y);g.set(Ee,L)}}function Oe(P){const ee=ye(P),Ee=P.pageX-ee.x,L=P.pageY-ee.y,ce=Math.sqrt(Ee*Ee+L*L);m.set(0,ce)}function O(P){n.enableZoom&&Oe(P),n.enablePan&&at(P)}function Tt(P){n.enableZoom&&Oe(P),n.enableRotate&&ve(P)}function te(P){if(S.length==1)d.set(P.pageX,P.pageY);else{const Ee=ye(P),L=.5*(P.pageX+Ee.x),ce=.5*(P.pageY+Ee.y);d.set(L,ce)}h.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ee=n.domElement;$(2*Math.PI*h.x/ee.clientHeight),J(2*Math.PI*h.y/ee.clientHeight),f.copy(d)}function z(P){if(S.length===1)_.set(P.pageX,P.pageY);else{const ee=ye(P),Ee=.5*(P.pageX+ee.x),L=.5*(P.pageY+ee.y);_.set(Ee,L)}p.subVectors(_,g).multiplyScalar(n.panSpeed),V(p.x,p.y),g.copy(_)}function Y(P){const ee=ye(P),Ee=P.pageX-ee.x,L=P.pageY-ee.y,ce=Math.sqrt(Ee*Ee+L*L);x.set(0,ce),v.set(0,Math.pow(x.y/m.y,n.zoomSpeed)),Z(v.y),m.copy(x);const F=(P.pageX+ee.x)*.5,ae=(P.pageY+ee.y)*.5;q(F,ae)}function xe(P){n.enableZoom&&Y(P),n.enablePan&&z(P)}function Se(P){n.enableZoom&&Y(P),n.enableRotate&&te(P)}function Re(P){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",st),n.domElement.addEventListener("pointerup",R)),!tt(P)&&(ue(P),P.pointerType==="touch"?fe(P):b(P)))}function st(P){n.enabled!==!1&&(P.pointerType==="touch"?pe(P):X(P))}function R(P){switch(Ct(P),S.length){case 0:n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",st),n.domElement.removeEventListener("pointerup",R),n.dispatchEvent(Ih),s=r.NONE;break;case 1:const ee=S[0],Ee=w[ee];fe({pointerId:ee,pageX:Ee.x,pageY:Ee.y});break}}function b(P){let ee;switch(P.button){case 0:ee=n.mouseButtons.LEFT;break;case 1:ee=n.mouseButtons.MIDDLE;break;case 2:ee=n.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case dr.DOLLY:if(n.enableZoom===!1)return;de(P),s=r.DOLLY;break;case dr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;Ne(P),s=r.PAN}else{if(n.enableRotate===!1)return;ie(P),s=r.ROTATE}break;case dr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;ie(P),s=r.ROTATE}else{if(n.enablePan===!1)return;Ne(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ll)}function X(P){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;k(P);break;case r.DOLLY:if(n.enableZoom===!1)return;oe(P);break;case r.PAN:if(n.enablePan===!1)return;ge(P);break}}function K(P){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(P.preventDefault(),n.dispatchEvent(Ll),Ve(le(P)),n.dispatchEvent(Ih))}function le(P){const ee=P.deltaMode,Ee={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(ee){case 1:Ee.deltaY*=16;break;case 2:Ee.deltaY*=100;break}return P.ctrlKey&&!N&&(Ee.deltaY*=10),Ee}function se(P){P.key==="Control"&&(N=!0,n.domElement.getRootNode().addEventListener("keyup",Ge,{passive:!0,capture:!0}))}function Ge(P){P.key==="Control"&&(N=!1,n.domElement.getRootNode().removeEventListener("keyup",Ge,{passive:!0,capture:!0}))}function Ue(P){n.enabled===!1||n.enablePan===!1||Pe(P)}function fe(P){switch(Ie(P),S.length){case 1:switch(n.touches.ONE){case hr.ROTATE:if(n.enableRotate===!1)return;ve(P),s=r.TOUCH_ROTATE;break;case hr.PAN:if(n.enablePan===!1)return;at(P),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case hr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(P),s=r.TOUCH_DOLLY_PAN;break;case hr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Tt(P),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ll)}function pe(P){switch(Ie(P),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;te(P),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;z(P),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xe(P),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Se(P),n.update();break;default:s=r.NONE}}function We(P){n.enabled!==!1&&P.preventDefault()}function ue(P){S.push(P.pointerId)}function Ct(P){delete w[P.pointerId];for(let ee=0;ee<S.length;ee++)if(S[ee]==P.pointerId){S.splice(ee,1);return}}function tt(P){for(let ee=0;ee<S.length;ee++)if(S[ee]==P.pointerId)return!0;return!1}function Ie(P){let ee=w[P.pointerId];ee===void 0&&(ee=new Fe,w[P.pointerId]=ee),ee.set(P.pageX,P.pageY)}function ye(P){const ee=P.pointerId===S[0]?S[1]:S[0];return w[ee]}n.domElement.addEventListener("contextmenu",We),n.domElement.addEventListener("pointerdown",Re),n.domElement.addEventListener("pointercancel",R),n.domElement.addEventListener("wheel",K,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",se,{passive:!0,capture:!0}),this.update()}}function Uh(i,e){if(e===EE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===dc||e===zm){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===dc)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class YC extends ls{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new QC(t)}),this.register(function(t){return new lP(t)}),this.register(function(t){return new cP(t)}),this.register(function(t){return new uP(t)}),this.register(function(t){return new tP(t)}),this.register(function(t){return new nP(t)}),this.register(function(t){return new iP(t)}),this.register(function(t){return new rP(t)}),this.register(function(t){return new JC(t)}),this.register(function(t){return new sP(t)}),this.register(function(t){return new eP(t)}),this.register(function(t){return new aP(t)}),this.register(function(t){return new oP(t)}),this.register(function(t){return new KC(t)}),this.register(function(t){return new fP(t)}),this.register(function(t){return new dP(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Os.extractUrlBase(e);o=Os.resolveURL(c,this.path)}else o=Os.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new gg(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===xg){try{o[lt.KHR_BINARY_GLTF]=new hP(e)}catch(f){r&&r(f);return}s=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new AP(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(f){case lt.KHR_MATERIALS_UNLIT:o[f]=new ZC;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[f]=new pP(s,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[f]=new mP;break;case lt.KHR_MESH_QUANTIZATION:o[f]=new gP;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function qC(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class KC{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new je(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Wt);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new NC(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new vg(u),c.distance=f;break;case"spot":c=new LC(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,vi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class ZC{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ki}extendParams(e,t,n){const r=[];e.color=new je(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,tn))}return Promise.all(r)}}class JC{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class QC{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(a,a)}return Promise.all(s)}}class eP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class tP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new je(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,tn)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class nP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class iP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new je().setRGB(a[0],a[1],a[2],Wt),Promise.all(s)}}class rP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class sP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new je().setRGB(a[0],a[1],a[2],Wt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,tn)),Promise.all(s)}}class oP{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class aP{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class lP{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class cP{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class uP{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fP{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,r.mode,r.filter).then(function(h){return h.buffer}):o.ready.then(function(){const h=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(h),u,f,d,r.mode,r.filter),h})})}else return null}}class dP{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==pn.TRIANGLES&&c.mode!==pn.TRIANGLE_STRIP&&c.mode!==pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],d=c[0].count,h=[];for(const g of f){const _=new Qe,p=new I,m=new Un,x=new I(1,1,1),v=new hC(g.geometry,g.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&x.fromBufferAttribute(l.SCALE,M),v.setMatrixAt(M,_.compose(p,m,x));for(const M in l)if(M==="_COLOR_0"){const A=l[M];v.instanceColor=new _c(A.array,A.itemSize,A.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);wt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),h.push(v)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const xg="glTF",Es=12,Oh={JSON:1313821514,BIN:5130562};class hP{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Es),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Es,s=new DataView(e,Es);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Oh.JSON){const c=new Uint8Array(e,Es+o,a);this.content=n.decode(c)}else if(l===Oh.BIN){const c=Es+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class pP{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=xc[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=xc[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],h=Hr[d.componentType];c[f]=h.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,d){r.decodeDracoFile(u,function(h){for(const g in h.attributes){const _=h.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}f(h)},a,c,Wt,d)})})}}class mP{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class gP{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class yg extends so{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(n-t)/u,d=f*f,h=d*f,g=e*c,_=g-c,p=-2*h+3*d,m=h-d,x=1-p,v=m-d+f;for(let M=0;M!==a;M++){const A=o[_+M+a],E=o[_+M+l]*u,S=o[g+M+a],w=o[g+M]*u;s[M]=x*A+v*E+p*S+m*w}return s}}const _P=new Un;class vP extends yg{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return _P.fromArray(s).normalize().toArray(s),s}}const pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Hr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fh={9728:kt,9729:qt,9984:fc,9985:Jo,9986:Dr,9987:Zn},Bh={33071:mn,33648:ma,10497:$r},Dl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xP={CUBICSPLINE:void 0,LINEAR:qr,STEP:qs},Il={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yP(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ss({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),i.DefaultMaterial}function Gi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function MP(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(d)}if(r){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(d)}if(s){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],d=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function bP(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function SP(i){let e;const t=i.extensions&&i.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nl(t.attributes):e=i.indices+":"+Nl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Nl(i.targets[n]);return e}function Nl(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function yc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function EP(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const TP=new Qe;class AP{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new _g(this.options.manager):this.textureLoader=new OC(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Gi(s,a,r),vi(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Os.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Dl[r.type],a=Hr[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new rn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Dl[r.type],c=Hr[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,d=r.byteOffset||0,h=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,p;if(h&&h!==f){const m=Math.floor(d/h),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let v=t.cache.get(x);v||(_=new c(a,m*h,r.count*h/u),v=new lC(_,h/u),t.cache.add(x,v)),p=new Kc(v,l,d%h/u,g)}else a===null?_=new c(r.count*l):_=new c(a,d,r.count*l),p=new rn(_,l,g);if(r.sparse!==void 0){const m=Dl.SCALAR,x=Hr[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,A=new x(o[1],v,r.sparse.count*m),E=new c(o[2],M,r.sparse.count*l);a!==null&&(p=new rn(p.array.slice(),p.itemSize,p.normalized));for(let S=0,w=A.length;S<w;S++){const N=A[S];if(p.setX(N,E[S*l]),l>=2&&p.setY(N,E[S*l+1]),l>=3&&p.setZ(N,E[S*l+2]),l>=4&&p.setW(N,E[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Fh[d.magFilter]||qt,u.minFilter=Fh[d.minFilter]||Zn,u.wrapS=Bh[d.wrapS]||$r,u.wrapT=Bh[d.wrapT]||$r,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(d,h){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Ht(_);p.needsUpdate=!0,d(p)}),t.load(Os.resolveURL(f,s.path),g,void 0,h)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||EP(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[lt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new hg,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new dg,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ss}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[lt.KHR_MATERIALS_UNLIT]){const f=r[lt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new je(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Wt),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,tn)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ln);const u=s.alphaMode||Il.OPAQUE;if(u===Il.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Il.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ki&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Fe(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Ki&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ki){const f=s.emissiveFactor;a.emissive=new je().setRGB(f[0],f[1],f[2],Wt)}return s.emissiveTexture!==void 0&&o!==Ki&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,tn)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),vi(f,s),t.associations.set(f,{materials:e}),s.extensions&&Gi(r,f,s),f})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Vh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=SP(c),f=r[u];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Vh(new Cn,c,t),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?yP(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let h=0,g=u.length;h<g;h++){const _=u[h],p=o[h];let m;const x=c[h];if(p.mode===pn.TRIANGLES||p.mode===pn.TRIANGLE_STRIP||p.mode===pn.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new uC(_,x):new Zt(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===pn.TRIANGLE_STRIP?m.geometry=Uh(m.geometry,zm):p.mode===pn.TRIANGLE_FAN&&(m.geometry=Uh(m.geometry,dc));else if(p.mode===pn.LINES)m=new pC(_,x);else if(p.mode===pn.LINE_STRIP)m=new Jc(_,x);else if(p.mode===pn.LINE_LOOP)m=new mC(_,x);else if(p.mode===pn.POINTS)m=new gC(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&bP(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),vi(m,s),p.extensions&&Gi(r,m,p),t.assignFinalMaterial(m),f.push(m)}for(let h=0,g=f.length;h<g;h++)t.associations.set(f[h],{meshes:e,primitives:h});if(f.length===1)return s.extensions&&Gi(r,f[0],s),f[0];const d=new Zi;s.extensions&&Gi(r,d,s),t.associations.set(d,{meshes:e});for(let h=0,g=f.length;h<g;h++)d.add(f[h]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(Us.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Yc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const d=new Qe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Zc(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,d=r.channels.length;f<d;f++){const h=r.channels[f],g=r.samplers[h.sampler],_=h.target,p=_.node,m=r.parameters!==void 0?r.parameters[g.input]:g.input,x=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const d=f[0],h=f[1],g=f[2],_=f[3],p=f[4],m=[];for(let x=0,v=d.length;x<v;x++){const M=d[x],A=h[x],E=g[x],S=_[x],w=p[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const N=n._createAnimationTracks(M,A,E,S,w);if(N)for(let y=0;y<N.length;y++)m.push(N[y])}return new SC(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],d=c[2];d!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(d,TP)});for(let h=0,g=f.length;h<g;h++)u.add(f[h]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new ug:c.length>1?u=new Zi:c.length===1?u=c[0]:u=new wt,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),vi(u,s),s.extensions&&Gi(n,u,s),s.matrix!==void 0){const f=new Qe;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Zi;n.name&&(s.name=r.createUniqueName(n.name)),vi(s,n),n.extensions&&Gi(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[d,h]of r.associations)(d instanceof Nn||d instanceof Ht)&&f.set(d,h);return u.traverse(d=>{const h=r.associations.get(d);h!=null&&f.set(d,h)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];mi[s.path]===mi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(mi[s.path]){case mi.weights:c=Jr;break;case mi.rotation:c=ir;break;case mi.position:case mi.scale:c=Qr;break;default:switch(n.itemSize){case 1:c=Jr;break;case 2:case 3:default:c=Qr;break}break}const u=r.interpolation!==void 0?xP[r.interpolation]:qr,f=this._getArrayFromAccessor(n);for(let d=0,h=l.length;d<h;d++){const g=new c(l[d]+"."+mi[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=yc(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof ir?vP:yg;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function wP(i,e,t){const n=e.attributes,r=new si;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=yc(Hr[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],h=d.min,g=d.max;if(h!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),d.normalized){const _=yc(Hr[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Vn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Vh(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=xc[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return ft.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),vi(i,e),wP(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?MP(i,e.targets,t):i})}new IS({target:document.getElementById("app")});const RP=new YC,Ia=new _g;Ia.crossOrigin="Anonymous";const Di=new aC;Di.background=Ia.load("../assets/bg.png");const cs=new nn(75,window.innerWidth/window.innerHeight,.1,1e3);cs.position.setZ(30);cs.position.setX(0);cs.position.setY(10);const Na=new cg({canvas:document.querySelector("#bg")});Na.setPixelRatio(window.devicePixelRatio);Na.setSize(window.innerWidth,window.innerHeight);const CP=new UC(16777215);Di.add(CP);const Mg=new vg(16777215,3e3,2e3);Mg.position.set(20,20,20);Di.add(Mg);const PP=new $C(cs,Na.domElement);let Ul;RP.load("../src/assets/miku_amongus.glb",function(i){Ul=i.scene,Di.add(Ul),Ul.scale.set(1,1,1)},void 0,function(i){console.error(i)});const LP=Ia.load("../src/assets/moon.jpg"),Gr=new Zt(new ro(3,32,32),new ss({map:LP}));Gr.position.set(20,0,0);Di.add(Gr);const DP=Ia.load("../src/assets/sun.jpg"),bg=new Zt(new ro(30,32,32),new ss({map:DP}));Di.add(bg);bg.position.set(-40,40,-40);function IP(){const i=new ro(.3,24,24),e=new ss({color:16777215}),t=new Zt(i,e),n=Us.randFloatSpread(300),r=Us.randFloatSpread(300),s=Us.randFloatSpread(300);t.position.set(n,r,s),Di.add(t)}Array(200).fill().forEach(IP);function NP(){const i=document.body.getBoundingClientRect().top;Gr.rotation.x+=.1,cs.position.z=i*-.01}document.body.onscroll=NP;let Ol=0;function Sg(){requestAnimationFrame(Sg),UP()}function UP(){Gr.rotation.y+=.005,Ol+=-.005,Gr.position.x=20*Math.cos(Ol)+0,Gr.position.z=20*Math.sin(Ol)+0,PP.update(),Na.render(Di,cs)}Sg();
