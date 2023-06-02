import{a as r,S as t,i as e,b as n,c as o,r as u,f as a}from"./p-58421494.js";function c(r,t){var e=-1,n=r==null?0:r.length,o=Array(n);while(++e<n){o[e]=t(r[e],e,r)}return o}var f=Array.isArray;var i=1/0;var b=t?t.prototype:undefined,v=b?b.toString:undefined;function l(t){if(typeof t=="string"){return t}if(f(t)){return c(t,l)+""}if(r(t)){return v?v.call(t):""}var e=t+"";return e=="0"&&1/t==-i?"-0":e}function j(r){return r}var s="[object AsyncFunction]",y="[object Function]",p="[object GeneratorFunction]",d="[object Proxy]";function m(r){if(!e(r)){return false}var t=n(r);return t==y||t==p||t==s||t==d}var A=9007199254740991;var x=/^(?:0|[1-9]\d*)$/;function g(r,t){var e=typeof r;t=t==null?A:t;return!!t&&(e=="number"||e!="symbol"&&x.test(r))&&(r>-1&&r%1==0&&r<t)}var h=9007199254740991;function O(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=h}function w(r){return r!=null&&O(r.length)&&!m(r)}var F=Object.prototype;function E(r){var t=r&&r.constructor,e=typeof t=="function"&&t.prototype||F;return r===e}function S(r,t){var e=-1,n=Array(r);while(++e<r){n[e]=t(e)}return n}var U="[object Arguments]";function I(r){return o(r)&&n(r)==U}var R=Object.prototype;var $=R.hasOwnProperty;var k=R.propertyIsEnumerable;var B=I(function(){return arguments}())?I:function(r){return o(r)&&$.call(r,"callee")&&!k.call(r,"callee")};function D(){return false}var M=typeof exports=="object"&&exports&&!exports.nodeType&&exports;var N=M&&typeof module=="object"&&module&&!module.nodeType&&module;var C=N&&N.exports===M;var G=C?u.Buffer:undefined;var L=G?G.isBuffer:undefined;var P=L||D;var T="[object Arguments]",V="[object Array]",W="[object Boolean]",q="[object Date]",z="[object Error]",H="[object Function]",J="[object Map]",K="[object Number]",Q="[object Object]",X="[object RegExp]",Y="[object Set]",Z="[object String]",_="[object WeakMap]";var rr="[object ArrayBuffer]",tr="[object DataView]",er="[object Float32Array]",nr="[object Float64Array]",or="[object Int8Array]",ur="[object Int16Array]",ar="[object Int32Array]",cr="[object Uint8Array]",fr="[object Uint8ClampedArray]",ir="[object Uint16Array]",br="[object Uint32Array]";var vr={};vr[er]=vr[nr]=vr[or]=vr[ur]=vr[ar]=vr[cr]=vr[fr]=vr[ir]=vr[br]=true;vr[T]=vr[V]=vr[rr]=vr[W]=vr[tr]=vr[q]=vr[z]=vr[H]=vr[J]=vr[K]=vr[Q]=vr[X]=vr[Y]=vr[Z]=vr[_]=false;function lr(r){return o(r)&&O(r.length)&&!!vr[n(r)]}function jr(r){return function(t){return r(t)}}var sr=typeof exports=="object"&&exports&&!exports.nodeType&&exports;var yr=sr&&typeof module=="object"&&module&&!module.nodeType&&module;var pr=yr&&yr.exports===sr;var dr=pr&&a.process;var mr=function(){try{var r=yr&&yr.require&&yr.require("util").types;if(r){return r}return dr&&dr.binding&&dr.binding("util")}catch(r){}}();var Ar=mr&&mr.isTypedArray;var xr=Ar?jr(Ar):lr;var gr=Object.prototype;var hr=gr.hasOwnProperty;function Or(r,t){var e=f(r),n=!e&&B(r),o=!e&&!n&&P(r),u=!e&&!n&&!o&&xr(r),a=e||n||o||u,c=a?S(r.length,String):[],i=c.length;for(var b in r){if((t||hr.call(r,b))&&!(a&&(b=="length"||o&&(b=="offset"||b=="parent")||u&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||g(b,i)))){c.push(b)}}return c}function wr(r){var t=[];if(r!=null){for(var e in Object(r)){t.push(e)}}return t}var Fr=Object.prototype;var Er=Fr.hasOwnProperty;function Sr(r){if(!e(r)){return wr(r)}var t=E(r),n=[];for(var o in r){if(!(o=="constructor"&&(t||!Er.call(r,o)))){n.push(o)}}return n}function Ur(r){return w(r)?Or(r,true):Sr(r)}function Ir(r){return r==null?"":l(r)}function Rr(r){return function(t,e,n){var o=-1,u=Object(t),a=n(t),c=a.length;while(c--){var f=a[r?c:++o];if(e(u[f],f,u)===false){break}}return t}}var $r=Rr();function kr(r){return typeof r=="function"?r:j}var Br=/[\\^$.*+?()[\]{}|]/g,Dr=RegExp(Br.source);function Mr(r){r=Ir(r);return r&&Dr.test(r)?r.replace(Br,"\\$&"):r}function Nr(r,t){return r==null?r:$r(r,kr(t),Ur)}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const Cr=(r,t)=>{const e=Mr(t);const n=new RegExp(e,"i");if(r.length===0){console.warn(`No data was passed to the filter function.\n    The data argument should be an array of objects`)}const o=(r,t)=>{if(r?.constant||r?.filterDisabled){return true}let e=false;Nr(r,(r=>{if(typeof r==="function"||r==null){return}if(Array.isArray(r)||typeof r==="object"&&r!==null){if(o(r,t)){e=true}}else if(t.test(r)){e=true}}));return e};const u=r.filter((r=>o(r,n)));return u};export{Cr as f};
//# sourceMappingURL=p-3f91e40b.js.map