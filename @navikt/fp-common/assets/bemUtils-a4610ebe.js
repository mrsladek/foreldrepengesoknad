var p=Object.defineProperty;var l=(t,s)=>p(t,"name",{value:s,configurable:!0});var f={},v={get exports(){return f},set exports(t){f=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var s={}.hasOwnProperty;function n(){for(var o=[],i=0;i<arguments.length;i++){var e=arguments[i];if(e){var r=typeof e;if(r==="string"||r==="number")o.push(e);else if(Array.isArray(e)){if(e.length){var c=n.apply(null,e);c&&o.push(c)}}else if(r==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){o.push(e.toString());continue}for(var a in e)s.call(e,a)&&e[a]&&o.push(a)}}}return o.join(" ")}l(n,"classNames"),t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(v);const m=f,u=l(t=>({block:t,element:(s,n)=>`${t}__${s}${n?` ${t}__${s}--${n}`:""}`,modifier:s=>`${t}--${s}`,modifierConditional:(s,n)=>n===!0&&s!==void 0?`${t}--${s}`:void 0,child:s=>u(u(t).element(s)),classNames:m}),"bemUtils");export{f as a,u as b,m as c};
//# sourceMappingURL=bemUtils-a4610ebe.js.map
