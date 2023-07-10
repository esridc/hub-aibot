import { d as d$1, a as a$1 } from './generateRendererUtils-a45c06a2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const t="<Null>",l="equal-interval",i=1,a=5,r=10,o=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,u=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),s=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function c(n){return null==n||"string"==typeof n&&!n?t:n}function m(n){const e=null!=n.normalizationField||null!=n.normalizationType,t=null!=n.minValue||null!=n.maxValue,l=!!n.sqlExpression&&n.supportsSQLExpression;return !e&&!t&&!l}function f(n){const e=n.returnDistinct?[...new Set(n.values)]:n.values,t=e.filter((n=>null!=n)).sort(),l=t.length,i={count:l,min:t[0],max:t[l-1]};return n.supportsNullCount&&(i.nullcount=e.length-l),n.percentileParams&&(i.median=p(e,n.percentileParams)),i}function d(n){const{values:e,useSampleStdDev:t,supportsNullCount:l}=n;let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,r=null,o=null,u=null,s=null,c=0;const m=null==n.minValue?-1/0:n.minValue,f=null==n.maxValue?1/0:n.maxValue;for(const p of e)Number.isFinite(p)?p>=m&&p<=f&&(r=null===r?p:r+p,i=Math.min(i,p),a=Math.max(a,p),c++):"string"==typeof p&&c++;if(c&&null!=r){o=r/c;let n=0;for(const t of e)Number.isFinite(t)&&t>=m&&t<=f&&(n+=(t-o)**2);s=t?c>1?n/(c-1):0:c>0?n/c:0,u=Math.sqrt(s);}else i=null,a=null;const d={avg:o,count:c,max:a,min:i,stddev:u,sum:r,variance:s};return l&&(d.nullcount=e.length-c),n.percentileParams&&(d.median=p(e,n.percentileParams)),d}function p(n,e){const{fieldType:t,value:l,orderBy:i,isDiscrete:a}=e,r=v(t,"desc"===i);if(0===(n=[...n].filter((n=>null!=n)).sort(((n,e)=>r(n,e)))).length)return null;if(l<=0)return n[0];if(l>=1)return n[n.length-1];const o=(n.length-1)*l,u=Math.floor(o),s=u+1,c=o%1,m=n[u],f=n[s];return s>=n.length||a||"string"==typeof m||"string"==typeof f?m:m*(1-c)+f*c}function v(n,e){const t=e?1:-1,l=h(e),i=V(e);if(!(!!n&&["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...u].includes(n)))return (n,e)=>"number"==typeof n&&"number"==typeof e?l(n,e):"string"==typeof n&&"string"==typeof e?i(n,e):t;if("esriFieldTypeDate"===n)return (n,e)=>{const i=new Date(n).getTime(),a=new Date(e).getTime();return isNaN(i)||isNaN(a)?t:l(i,a)};if(u.has(n))return (n,e)=>l(n,e);if("esriFieldTypeString"===n)return (n,e)=>i(n,e);if("esriFieldTypeGUID"===n||"esriFieldTypeGlobalID"===n){const n=V(e);return (e,t)=>n(T(e),T(t))}return e?(n,e)=>1:(n,e)=>-1}function b(n,e,t){if(t){if(null==n)return null==e?0:1;if(null==e)return -1}else {if(null==n)return null==e?0:-1;if(null==e)return 1}return null}function V(n){return n?(n,e)=>{const t=b(n,e,!0);return null!=t?t:(n=n.toUpperCase())>(e=e.toUpperCase())?-1:n<e?1:0}:(n,e)=>{const t=b(n,e,!1);return null!=t?t:(n=n.toUpperCase())<(e=e.toUpperCase())?-1:n>e?1:0}}function h(n){return n?(n,e)=>{const t=b(n,e,!0);return null!=t?t:e-n}:(n,e)=>{const t=b(n,e,!1);return null!=t?t:n-e}}function T(n){return n.substr(24,12)+n.substr(19,4)+n.substr(16,2)+n.substr(14,2)+n.substr(11,2)+n.substr(9,2)+n.substr(6,2)+n.substr(4,2)+n.substr(2,2)+n.substr(0,2)}function g(n,e){let t;for(t in n)s.includes(t)&&(Number.isFinite(n[t])||(n[t]=null));return e?(["avg","stddev","variance"].forEach((e=>{null!=n[e]&&(n[e]=Math.ceil(n[e]??0));})),n):n}function x(n){const e={};for(let t of n)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==e[t]?e[t]={count:1,data:t}:e[t].count++;return {count:e}}function y(n){return "coded-value"!==n?.type?[]:n.codedValues.map((n=>n.code))}function F(n,e,t,l){const i=n.count,a=[];if(t&&e){const n=[],t=y(e[0]);for(const i of t)if(e[1]){const t=y(e[1]);for(const a of t)if(e[2]){const t=y(e[2]);for(const e of t)n.push(`${c(i)}${l}${c(a)}${l}${c(e)}`);}else n.push(`${c(i)}${l}${c(a)}`);}else n.push(i);for(const e of n)i.hasOwnProperty(e)||(i[e]={data:e,count:0});}for(const r in i){const n=i[r];a.push({value:n.data,count:n.count,label:n.label});}return {uniqueValueInfos:a}}function z(n,e,t,l){let i=null;switch(e){case"log":0!==n&&(i=Math.log(n)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(i=n/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(i=n/t);break;case"natural-log":n>0&&(i=Math.log(n));break;case"square-root":n>0&&(i=n**.5);}return i}function D(n,t){const l=N({field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,classificationMethod:t.classificationMethod,standardDeviationInterval:t.standardDeviationInterval,breakCount:t.numClasses||a});return n=I(n,t.minValue,t.maxValue),a$1({definition:l,values:n,normalizationTotal:t.normalizationTotal})}function I(n,e,t){const l=e??-1/0,i=t??1/0;return n.filter((n=>Number.isFinite(n)&&n>=l&&n<=i))}function N(e){const{breakCount:t,field:a,normalizationField:r,normalizationType:o}=e,u=e.classificationMethod||l,s="standard-deviation"===u?e.standardDeviationInterval||i:void 0;return new d$1({breakCount:t,classificationField:a,classificationMethod:u,normalizationField:"field"===o?r:void 0,normalizationType:o,standardDeviationInterval:s})}function S(n,e){let t=n.classBreaks;const l=t.length,i=t[0]?.minValue,a=t[l-1]?.maxValue,r="standard-deviation"===e,u=o;return t=t.map((n=>{const e=n.label,t={minValue:n.minValue,maxValue:n.maxValue,label:e};if(r&&e){const n=e.match(u),l=n?.map((n=>+n.trim()))??[];2===l.length?(t.minStdDev=l[0],t.maxStdDev=l[1],l[0]<0&&l[1]>0&&(t.hasAvg=!0)):1===l.length&&(e.includes("<")?(t.minStdDev=null,t.maxStdDev=l[0]):e.includes(">")&&(t.minStdDev=l[0],t.maxStdDev=null));}return t})),{minValue:i,maxValue:a,classBreakInfos:t,normalizationTotal:n.normalizationTotal}}function M(n,e){const t=C(n,e);if(null==t.min&&null==t.max)return {bins:[],minValue:t.min,maxValue:t.max,normalizationTotal:e.normalizationTotal};const l=t.intervals,i=t.min??0,a=t.max??0,r=l.map(((n,e)=>({minValue:l[e][0],maxValue:l[e][1],count:0})));for(const o of n)if(null!=o&&o>=i&&o<=a){const n=k(l,o);n>-1&&r[n].count++;}return {bins:r,minValue:i,maxValue:a,normalizationTotal:e.normalizationTotal}}function C(n,e){const{field:t,classificationMethod:l,standardDeviationInterval:i,normalizationType:a,normalizationField:o,normalizationTotal:u,minValue:s,maxValue:c}=e,f=e.numBins||r;let p=null,v=null,b=null;if((!l||"equal-interval"===l)&&!a){if(null!=s&&null!=c)p=s,v=c;else {const e=d({values:n,minValue:s,maxValue:c,useSampleStdDev:!a,supportsNullCount:m({normalizationType:a,normalizationField:o,minValue:s,maxValue:c})});p=e.min??null,v=e.max??null;}b=$(p??0,v??0,f);}else {const{classBreaks:e}=D(n,{field:t,normalizationType:a,normalizationField:o,normalizationTotal:u,classificationMethod:l,standardDeviationInterval:i,minValue:s,maxValue:c,numClasses:f});p=e[0].minValue,v=e[e.length-1].maxValue,b=e.map((n=>[n.minValue,n.maxValue]));}return {min:p,max:v,intervals:b}}function k(n,e){let t=-1;for(let l=n.length-1;l>=0;l--){if(e>=n[l][0]){t=l;break}}return t}function $(n,e,t){const l=(e-n)/t,i=[];let a,r=n;for(let o=1;o<=t;o++)a=r+l,a=Number(a.toFixed(16)),i.push([r,o===t?e:a]),r=a;return i}

export { D, F, M, S, c, d, f, g, m, p, v, x, z };

//# sourceMappingURL=utils-df6099d4.js.map