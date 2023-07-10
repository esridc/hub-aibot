import { cV as l$1, aQ as a$2, a1 as e, a2 as y, fB as N, a3 as a$3, aB as R } from './hub-compass-map-4d751555.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var a$1;let n=a$1=class extends l$1{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1;}clone(){return new a$1({variableName:this.variableName,dimensionName:this.dimensionName,values:a$2(this.values),isSlice:this.isSlice})}};e([y({type:String,json:{write:!0}})],n.prototype,"variableName",void 0),e([y({type:String,json:{write:!0}})],n.prototype,"dimensionName",void 0),e([y({type:N.array(N.oneOf([N.native(Number),N.array(N.native(Number))])),json:{write:!0}})],n.prototype,"values",void 0),e([y({type:Boolean,json:{write:!0}})],n.prototype,"isSlice",void 0),n=a$1=e([a$3("esri.layers.support.DimensionalDefinition")],n);const p=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(e,n,i){const a=n.shift();if(0===i.length){const e=[];i.push({sliceId:-1,multidimensionalDefinition:e});}const s=i.length;for(let t=0;t<s;t++){const n=i.shift().multidimensionalDefinition;a.values?.forEach((t=>{i.push({sliceId:-1,multidimensionalDefinition:[...n,{variableName:e,dimensionName:a.name,values:[t]}]});}));}n.length&&t(e,n,i);}function i(e,n){const i=[];let a=0;return (n?e.variables.filter((e=>e.name.toLowerCase()===n.toLowerCase())):[...e.variables].sort(((e,n)=>e.name>n.name?1:-1))).forEach((e=>{const n=[],s=[...e.dimensions].sort(((e,n)=>e.name>n.name?-1:1));t(e.name,s,n),n.forEach((e=>{i.push({...e,sliceId:a++});}));})),i}function a(e,n,t){let i=e;if(n&&(n=[...n].sort(((e,n)=>e.dimensionName<n.dimensionName?-1:1))).forEach((({dimensionName:e,values:n,isSlice:t})=>{n.length&&(i=i.filter((i=>{const a=i.multidimensionalDefinition.find((n=>n.dimensionName===e));if(null==a)return !1;const s=a.values[0];return "number"==typeof s?"number"==typeof n[0]?n.includes(s):n.some((e=>e[0]<=s&&e[1]>=s)):"number"==typeof n[0]?n.some((e=>s[0]<=e&&s[1]>=e)):t?n.some((e=>e[0]===s[0]&&e[0]===s[1])):n.some((e=>e[0]>=s[0]&&e[0]<=s[1]||e[1]>=s[0]&&e[1]<=s[1]||e[0]<s[0]&&e[1]>s[1]))})));})),i.length&&t&&null!=t.start&&null!=t.end){const e=t.start.getTime(),n=t.end.getTime(),a=i[0].multidimensionalDefinition.findIndex((e=>"StdTime"===e.dimensionName));a>-1&&(i=i.filter((t=>{const i=t.multidimensionalDefinition[a].values[0];return e<=i&&n>=i})));}return i.map((e=>e.sliceId))}function s(e,n){return Array.isArray(e)?n[0]===n[1]?e[0]===n[0]||e[1]===n[0]:e[0]>=n[0]&&e[0]<=n[1]&&e[1]>=n[0]&&e[1]<=n[1]:e>=n[0]&&e<=n[1]}function r(e,n){return e[0]<=n[0]&&e[1]>=n[0]||e[0]<=n[1]&&e[1]>=n[1]||e[0]>=n[0]&&e[1]<=n[1]}function l(e){return 1===e.length?[e[0],e[0]]:[e[0],e[e.length-1]]}function u(e,n,t){if(!n?.subsetDefinitions?.length)return e;let i;if(t){const{variables:a}=n;if(a.length&&!a.includes(t))return null;const s=n.subsetDefinitions.find((n=>n.dimensionName===e.name&&n.variableName===t));if(!s?.values?.length)return e;i=l(s.values);}else {const t=n.dimensions.find((({name:n})=>n===e.name));i=t?.extent;}const a=i;if(!a||!a?.length)return e;const r=e.values.filter((e=>s(e,a)));return {...e,extent:[...a],values:r}}function o(e,n,t){if(!n?.subsetDefinitions?.length)return !1;const{variables:i}=n;if(i.length&&e.some((({variableName:e})=>e&&!i.includes(e))))return !0;for(let a=0;a<e.length;a++){const i=e[a],u=n.subsetDefinitions.find((e=>(""===i.variableName||e.variableName===i.variableName)&&e.dimensionName===i.dimensionName));if(u?.values.length){const e=l(u.values);if(!i.isSlice&&2===i.values.length&&!Array.isArray(i.values[0])&&i.values[0]!==i.values[1]&&t){if(!r(i.values,e))return !0}else if(i.values.some((n=>!s(n,e))))return !0}}return !1}function m(e,n){if(null==e)return {isOutside:!1};const{geometry:t,timeExtent:i,multidimensionalDefinition:a}=n;let s=null;if(null!=i&&(s=c(e,i),null==s))return {isOutside:!0};const{areaOfInterest:r}=e;if(r&&t){const e="point"===t.type?t:"extent"===t.type?t.center:"polygon"===t.type?t.centroid:null;if(e&&!r.contains(e))return {isOutside:!0}}return null!=a&&a.length&&o(a,e,!0)?{isOutside:!0}:{isOutside:!1,intersection:{geometry:t,timeExtent:s,multidimensionalDefinition:a}}}function c(e,t){const i=e.dimensions.find((({name:e})=>"StdTime"===e));if(null==i||null==t.start&&null==t.end)return t;t=t.clone();const{start:a,end:s}=t.toJSON(),r=a===s?[a]:null!=a&&null!=s?[a,s]:[a??s];if(2===r.length&&i?.extent.length&&(r[0]=Math.max(r[0],i.extent[0]),r[1]=Math.min(r[1],i.extent[1]??i.extent[0]),r[1]<r[0]))return null;return o([new p({variableName:"",dimensionName:"StdTime",isSlice:1===r.length,values:r})],e,!0)?null:(t.start=new Date(r[0]),t.end=new Date(r[1]??r[0]),t)}function f(e,n={}){const{multidimensionalInfo:t,keyProperties:i}=e;if(null==t)return null;const{variableName:a,multidimensionalSubset:s,multidimensionalDefinition:r}=n,l=null!=r?r[0]?.variableName:null,u=a||l||i?.DefaultVariable;let{variables:o}=t;s?.variables?.length&&(o=o.filter((({name:e})=>s.variables.includes(e))));return u?o.find((({name:e})=>e===u))??o[0]:o[0]}function d(e,t={}){const i=f(e,t);if(!i)return null;const a=[],{dimensions:s,name:r}=i;if(0===s.length)return [new p({variableName:r,dimensionName:"",values:[],isSlice:!0})];for(let l=0;l<s.length;l++){const e=u(s[l],t.multidimensionalSubset,r);if(!e)return null;const{values:i,extent:o}=e;let m=i?.[0]??o[0];"stdz"===e.name.toLowerCase()&&!e.hasRanges&&Math.abs(o[1])<=Math.abs(o[0])&&(m=i?.length?i[i.length-1]:o[1]),a.push(new p({variableName:r,dimensionName:e.name,values:[m],isSlice:!t.useRangeForRangedDimensionInfo||!!e.hasRanges}));}return a}function h(e){return !(null==e||!e.length)&&e.some((e=>{if(null==e.values)return !0;const n=e.values.length;return 0===n||n>1||!e.isSlice&&Array.isArray(e.values[0])}))}function g(n,t){if(null==t||null==n)return null;let i=t.variables.map((e=>({...e})));return n?.variables?.length&&(i=i.filter((({name:e})=>n.variables.includes(e))),i.forEach((t=>{t.dimensions=t.dimensions.map((e=>u(e,n,t.name))).filter(R);}))),i}function v(e,n){const{values:t}=n;if(t?.length){const n=Array.isArray(t[0]),i=Array.isArray(e);return n!==i?-1:n&&i?t.findIndex((n=>n[0]===e[0]&&n[1]===e[1])):t.indexOf(e)}const{extent:i}=n;if(Array.isArray(e)||e<i[0]||e>i[1])return -1;const a=n.interval||1;if("ISO8601"!==n.unit)return Math.round((e-i[0])/a);const s=i[0];let r=-1;switch(n.intervalUnit?.toLowerCase()||"seconds"){case"seconds":r=Math.round((e-s)/1e3/a);break;case"minutes":r=Math.round((e-s)/6e4/a);break;case"hours":r=Math.round((e-s)/36e5/a);break;case"days":r=Math.round((e-s)/864e5/a);break;case"months":{const n=new Date(e).getUTCFullYear()-new Date(s).getUTCFullYear(),t=new Date(s).getUTCMonth(),i=new Date(e).getUTCMonth();r=0===n?i-t:i+11-t+12*(n-1);}break;case"years":r=Math.round((new Date(e).getUTCFullYear()-new Date(s).getUTCFullYear())/a);break;case"decades":r=Math.round((new Date(e).getUTCFullYear()-new Date(s).getUTCFullYear())/10/a);}return r}function b(e){let n=e.values?.length;if(n)return n;const{extent:t,unit:i}=e,a=e.interval||1,s=t?t[1]-t[0]:0;if("ISO8601"!==i)return Math.round(s/a);switch(e.intervalUnit?.toLowerCase()??"seconds"){case"seconds":n=Math.round(s/1e3/a);break;case"minutes":n=Math.round(s/6e4/a);break;case"hours":n=Math.round(s/36e5/a);break;case"days":n=Math.round(s/864e5/a);break;case"months":{const e=new Date(t[1]).getUTCFullYear()-new Date(t[0]).getUTCFullYear(),i=new Date(t[0]).getUTCMonth(),a=new Date(t[1]).getUTCMonth();n=0===e?a-i+1:a+11-i+12*(e-1)+1;}break;case"years":n=Math.round((new Date(t[1]).getUTCFullYear()-new Date(t[0]).getUTCFullYear())/a);break;case"decades":n=Math.round((new Date(t[1]).getUTCFullYear()-new Date(t[0]).getUTCFullYear())/10/a);break;default:n=0;}return n}function D(e,n){let t=0;const i=e[0].variableName,a=[...n.variables].sort(((e,n)=>e.name>n.name?1:-1));for(let s=0;s<a.length;s++){const n=a[s],r=[...n.dimensions].sort(((e,n)=>e.name>n.name?-1:1));if(n.name!==i){t+=r.map((e=>b(e))).reduce(((e,n)=>e*n));continue}const l=r.map((e=>b(e))),u=r.length;for(let i=0;i<u;i++){const n=e.find((e=>e.dimensionName===r[i].name));if(null==n)return null;const a=v(n.values[0],r[i]);if(-1===a)return null;l.shift(),t+=i===u-1?a:a*l.reduce(((e,n)=>e*n));}break}return t}

export { D, a, d, f, g, h, i, m, o, p };

//# sourceMappingURL=multidimensionalUtils-caa13c0a.js.map