var z=Object.defineProperty;var i=(e,t)=>z(e,"name",{value:t,configurable:!0});import{a as k,r as h}from"./index-09ad7028.js";import{j as A,a as N}from"./jsx-runtime-31fae5e2.js";import"./index-567572e5.js";import{L as D}from"./Link-53e70364.js";import{u as G}from"./useId-69f1adcf.js";import{F as K}from"./message-c21f8617.js";/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},E.apply(this,arguments)}i(E,"_extends");var x;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(x||(x={}));const _="popstate";function Z(e){e===void 0&&(e={});function t(n,l){let{pathname:o="/",search:s="",hash:c=""}=w(n.location.hash.substr(1));return I("",{pathname:o,search:s,hash:c},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}i(t,"createHashLocation");function a(n,l){let o=n.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let c=n.location.href,u=c.indexOf("#");s=u===-1?c:c.slice(0,u)}return s+"#"+(typeof l=="string"?l:q(l))}i(a,"createHashHref");function r(n,l){Q(n.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return i(r,"validateHashLocation"),Y(t,a,r,e)}i(Z,"createHashHistory");function b(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}i(b,"invariant");function Q(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}i(Q,"warning");function X(){return Math.random().toString(36).substr(2,8)}i(X,"createKey");function W(e,t){return{usr:e.state,key:e.key,idx:t}}i(W,"getHistoryState");function I(e,t,a,r){return a===void 0&&(a=null),E({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?w(t):t,{state:a,key:t&&t.key||r||X()})}i(I,"createLocation");function q(e){let{pathname:t="/",search:a="",hash:r=""}=e;return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}i(q,"createPath");function w(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substr(a),e=e.substr(0,a));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}i(w,"parsePath");function Y(e,t,a,r){r===void 0&&(r={});let{window:n=document.defaultView,v5Compat:l=!1}=r,o=n.history,s=x.Pop,c=null,u=g();u==null&&(u=0,o.replaceState(E({},o.state,{idx:u}),""));function g(){return(o.state||{idx:null}).idx}i(g,"getIndex");function v(){s=x.Pop;let f=g(),d=f==null?null:f-u;u=f,c&&c({action:s,location:p.location,delta:d})}i(v,"handlePop");function y(f,d){s=x.Push;let m=I(p.location,f,d);a&&a(m,f),u=g()+1;let L=W(m,u),C=p.createHref(m);try{o.pushState(L,"",C)}catch{n.location.assign(C)}l&&c&&c({action:s,location:p.location,delta:1})}i(y,"push");function P(f,d){s=x.Replace;let m=I(p.location,f,d);a&&a(m,f),u=g();let L=W(m,u),C=p.createHref(m);o.replaceState(L,"",C),l&&c&&c({action:s,location:p.location,delta:0})}i(P,"replace");function S(f){let d=n.location.origin!=="null"?n.location.origin:n.location.href,m=typeof f=="string"?f:q(f);return b(d,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,d)}i(S,"createURL");let p={get action(){return s},get location(){return e(n,o)},listen(f){if(c)throw new Error("A history only accepts one active listener");return n.addEventListener(_,v),c=f,()=>{n.removeEventListener(_,v),c=null}},createHref(f){return t(n,f)},createURL:S,encodeLocation(f){let d=S(f);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:y,replace:P,go(f){return o.go(f)}};return p}i(Y,"getUrlBasedHistory");var M;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(M||(M={}));function ee(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,r=e.charAt(a);return r&&r!=="/"?null:e.slice(a)||"/"}i(ee,"stripBasename");function te(e,t){t===void 0&&(t="/");let{pathname:a,search:r="",hash:n=""}=typeof e=="string"?w(e):e;return{pathname:a?a.startsWith("/")?a:ne(a,t):t,search:le(r),hash:oe(n)}}i(te,"resolvePath");function ne(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?a.length>1&&a.pop():n!=="."&&a.push(n)}),a.length>1?a.join("/"):"/"}i(ne,"resolvePathname");function O(e,t,a,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}i(O,"getInvalidPathError");function re(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}i(re,"getPathContributingMatches");function ae(e,t,a,r){r===void 0&&(r=!1);let n;typeof e=="string"?n=w(e):(n=E({},e),b(!n.pathname||!n.pathname.includes("?"),O("?","pathname","search",n)),b(!n.pathname||!n.pathname.includes("#"),O("#","pathname","hash",n)),b(!n.search||!n.search.includes("#"),O("#","search","hash",n)));let l=e===""||n.pathname==="",o=l?"/":n.pathname,s;if(r||o==null)s=a;else{let v=t.length-1;if(o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),v-=1;n.pathname=y.join("/")}s=v>=0?t[v]:"/"}let c=te(n,s),u=o&&o!=="/"&&o.endsWith("/"),g=(l||o===".")&&a.endsWith("/");return!c.pathname.endsWith("/")&&(u||g)&&(c.pathname+="/"),c}i(ae,"resolveTo");const ie=i(e=>e.join("/").replace(/\/\/+/g,"/"),"joinPaths"),le=i(e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,"normalizeSearch"),oe=i(e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,"normalizeHash");/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function se(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}i(se,"isPolyfill");const ce=typeof Object.is=="function"?Object.is:se,{useState:ue,useEffect:fe,useLayoutEffect:he,useDebugValue:de}=k;function pe(e,t,a){const r=t(),[{inst:n},l]=ue({inst:{value:r,getSnapshot:t}});return he(()=>{n.value=r,n.getSnapshot=t,U(n)&&l({inst:n})},[e,r,t]),fe(()=>(U(n)&&l({inst:n}),e(i(()=>{U(n)&&l({inst:n})},"handleStoreChange"))),[e]),de(r),r}i(pe,"useSyncExternalStore$2");function U(e){const t=e.getSnapshot,a=e.value;try{const r=t();return!ce(a,r)}catch{return!0}}i(U,"checkIfSnapshotChanged");function me(e,t,a){return t()}i(me,"useSyncExternalStore$1");const ge=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ve=!ge,ye=ve?me:pe;"useSyncExternalStore"in k&&(e=>e.useSyncExternalStore)(k);const J=h.createContext(null),B=h.createContext(null),xe=h.createContext({outlet:null,matches:[]});function R(){return h.useContext(B)!=null}i(R,"useInRouterContext");function be(){return R()||b(!1),h.useContext(B).location}i(be,"useLocation");function Se(){R()||b(!1);let{basename:e,navigator:t}=h.useContext(J),{matches:a}=h.useContext(xe),{pathname:r}=be(),n=JSON.stringify(re(a).map(s=>s.pathnameBase)),l=h.useRef(!1);return h.useEffect(()=>{l.current=!0}),h.useCallback(function(s,c){if(c===void 0&&(c={}),!l.current)return;if(typeof s=="number"){t.go(s);return}let u=ae(s,JSON.parse(n),r,c.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:ie([e,u.pathname])),(c.replace?t.replace:t.push)(u,c.state,c)},[e,t,n,r])}i(Se,"useNavigate");var V;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(V||(V={}));var F;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(F||(F={}));function Ee(e){let{basename:t="/",children:a=null,location:r,navigationType:n=x.Pop,navigator:l,static:o=!1}=e;R()&&b(!1);let s=t.replace(/^\/*/,"/"),c=h.useMemo(()=>({basename:s,navigator:l,static:o}),[s,l,o]);typeof r=="string"&&(r=w(r));let{pathname:u="/",search:g="",hash:v="",state:y=null,key:P="default"}=r,S=h.useMemo(()=>{let p=ee(u,s);return p==null?null:{location:{pathname:p,search:g,hash:v,state:y,key:P},navigationType:n}},[s,u,g,v,y,P,n]);return S==null?null:h.createElement(J.Provider,{value:c},h.createElement(B.Provider,{children:a,value:S}))}i(Ee,"Router");var H;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(H||(H={}));new Promise(()=>{});/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ne(e){let{basename:t,children:a,window:r}=e,n=h.useRef();n.current==null&&(n.current=Z({window:r,v5Compat:!0}));let l=n.current,[o,s]=h.useState({action:l.action,location:l.location});return h.useLayoutEffect(()=>l.listen(s),[l]),h.createElement(Ee,{basename:t,children:a,location:o.location,navigationType:o.action,navigator:l})}i(Ne,"HashRouter");var T;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(T||(T={}));var $;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($||($={}));var we=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};const Pe=h.forwardRef((e,t)=>{var{title:a,titleId:r}=e,n=we(e,["title","titleId"]);let l=G();return l=a?r||"title-"+l:void 0,h.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":l},n),a?h.createElement("title",{id:l},a):null,h.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m6.586 12 7.707-7.707 1.414 1.414L9.414 12l6.293 6.293-1.414 1.414L6.586 12Z",fill:"currentColor"}))}),Ce=Pe,j=i(({className:e,href:t,onClick:a,ariaLabel:r})=>{const n=Se();return A(D,{href:t,"aria-label":r,onClick:i(o=>{a?a(t,o):(o.preventDefault(),n(t))},"handleOnClick"),children:[N(Ce,{}),N(K,{id:"backlink.label"})]})},"BackLink"),_e=j;try{j.displayName="BackLink",j.__docgenInfo={description:"",displayName:"BackLink",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((href: string, event: SyntheticEvent<Element, Event>) => void)"}}}}}catch{}export{_e as B,Ne as H};
//# sourceMappingURL=BackLink-3c22bfcd.js.map
