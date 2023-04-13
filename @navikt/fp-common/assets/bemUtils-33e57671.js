var l={},u={get exports(){return l},set exports(s){l=s}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(s){(function(){var e={}.hasOwnProperty;function n(){for(var o=[],i=0;i<arguments.length;i++){var t=arguments[i];if(t){var r=typeof t;if(r==="string"||r==="number")o.push(t);else if(Array.isArray(t)){if(t.length){var f=n.apply(null,t);f&&o.push(f)}}else if(r==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){o.push(t.toString());continue}for(var a in t)e.call(t,a)&&t[a]&&o.push(a)}}}return o.join(" ")}s.exports?(n.default=n,s.exports=n):window.classNames=n})()})(u);const p=l,c=s=>({block:s,element:(e,n)=>`${s}__${e}${n?` ${s}__${e}--${n}`:""}`,modifier:e=>`${s}--${e}`,modifierConditional:(e,n)=>n===!0&&e!==void 0?`${s}--${e}`:void 0,child:e=>c(c(s).element(e)),classNames:p});export{l as a,c as b,p as c};
//# sourceMappingURL=bemUtils-33e57671.js.map
