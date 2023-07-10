import { c7 as s$1, cV as l$2, a1 as e, cW as o$1, a2 as y, a3 as a$2, s as s$2 } from './hub-compass-map-f4225e12.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const a$1=new s$1({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),n$1=new s$1({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let l$1=class extends l$2{constructor(e){super(e),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null;}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e);}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e);}};e([o$1({classBreaksDef:"class-breaks-definition"})],l$1.prototype,"type",void 0),e([y({json:{write:!0}})],l$1.prototype,"breakCount",void 0),e([y({json:{write:!0}})],l$1.prototype,"classificationField",void 0),e([y({type:String,json:{read:a$1.read,write:a$1.write}})],l$1.prototype,"classificationMethod",void 0),e([y({json:{write:!0}})],l$1.prototype,"normalizationField",void 0),e([y({json:{read:n$1.read,write:n$1.write}})],l$1.prototype,"normalizationType",void 0),e([y({value:null,json:{write:!0}})],l$1.prototype,"standardDeviationInterval",null),e([y({value:null,json:{write:!0}})],l$1.prototype,"definedInterval",null),l$1=e([a$2("esri.rest.support.ClassBreaksDefinition")],l$1);const d=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const t=s$2.getLogger("esri.rest.support.generateRendererUtils");function l(e,t){return Number(e.toFixed(t))}function n(e){const t=o(e),l=[],n=t.uniqueValues.length;for(let a=0;a<n;a++){const e=t.uniqueValues[a],n=t.valueFrequency[a],u=e.toString();l.push({value:e,count:n,label:u});}return {uniqueValues:l}}function a(e){const{normalizationTotal:t}=e;return {classBreaks:u(e),normalizationTotal:t}}function u(e){const t=e.definition,{classificationMethod:n,normalizationType:a,definedInterval:u}=t,i=t.breakCount??1,c=[];let b=e.values;if(0===b.length)return [];b=b.sort(((e,t)=>e-t));const V=b[0],p=b[b.length-1];if("equal-interval"===n)if(b.length>=i){const e=(p-V)/i;let t=V;for(let n=1;n<i;n++){const u=l(V+n*e,6);c.push({minValue:t,maxValue:u,label:s(t,u,a)}),t=u;}c.push({minValue:t,maxValue:p,label:s(t,p,a)});}else b.forEach((e=>{c.push({minValue:e,maxValue:e,label:s(e,e,a)});}));else if("natural-breaks"===n){const t=o(b),n=e.valueFrequency||t.valueFrequency,u=r(t.uniqueValues,n,i);let f=V;for(let e=1;e<i;e++)if(t.uniqueValues.length>e){const n=l(t.uniqueValues[u[e]],6);c.push({minValue:f,maxValue:n,label:s(f,n,a)}),f=n;}c.push({minValue:f,maxValue:p,label:s(f,p,a)});}else if("quantile"===n)if(b.length>=i&&V!==p){let e=V,t=Math.ceil(b.length/i),l=0;for(let n=1;n<i;n++){let u=t+l-1;u>b.length&&(u=b.length-1),u<0&&(u=0),c.push({minValue:e,maxValue:b[u],label:s(e,b[u],a)}),e=b[u],l+=t,t=Math.ceil((b.length-l)/(i-n));}c.push({minValue:e,maxValue:p,label:s(e,p,a)});}else {let e=-1;for(let t=0;t<b.length;t++){const l=b[t];l!==e&&(e=l,c.push({minValue:e,maxValue:l,label:s(e,l,a)}),e=l);}}else if("standard-deviation"===n){const e=h(b),t=m(b,e);if(0===t)c.push({minValue:b[0],maxValue:b[0],label:s(b[0],b[0],a)});else {const n=f(V,p,i,e,t)*t;let u=0,o=V;for(let t=i;t>=1;t--){const r=l(e-(t-.5)*n,6);c.push({minValue:o,maxValue:r,label:s(o,r,a)}),o=r,u++;}let r=l(e+.5*n,6);c.push({minValue:o,maxValue:r,label:s(o,r,a)}),o=r,u++;for(let t=1;t<=i;t++)r=u===2*i?p:l(e+(t+.5)*n,6),c.push({minValue:o,maxValue:r,label:s(o,r,a)}),o=r,u++;}}else if("defined-interval"===n){if(!u)return c;const e=b[0],t=b[b.length-1],n=Math.ceil((t-e)/u);let o=e;for(let r=1;r<n;r++){const t=l(e+r*u,6);c.push({minValue:o,maxValue:t,label:s(o,t,a)}),o=t;}c.push({minValue:o,maxValue:t,label:s(o,t,a)});}return c}function s(e,t,l){let n=null;return n=e===t?l&&"percent-of-total"===l?e+"%":e.toString():l&&"percent-of-total"===l?e+"% - "+t+"%":e+" - "+t,n}function o(e){const t=[],l=[];let n=Number.MIN_VALUE,a=1,u=-1;for(let s=0;s<e.length;s++){const o=e[s];o===n?(a++,l[u]=a):null!==o&&(t.push(o),n=o,a=1,l.push(a),u++);}return {uniqueValues:t,valueFrequency:l}}function r(e,t,l){const n=e.length,a=[];l>n&&(l=n);for(let s=0;s<l;s++)a.push(Math.round(s*n/l-1));a.push(n-1);let u=i(a,e,t,l);return c(u.mean,u.sdcm,a,e,t,l)&&(u=i(a,e,t,l)),a}function i(e,t,l,n){let a=[],u=[],s=[],o=0;const r=[],i=[];for(let m=0;m<n;m++){const n=b(m,e,t,l);r.push(n.sbMean),i.push(n.sbSdcm),o+=i[m];}let c,f=o,h=!0;for(;h||o<f;){h=!1,a=[];for(let t=0;t<n;t++)a.push(e[t]);for(let l=0;l<n;l++)for(let a=e[l]+1;a<=e[l+1];a++)if(c=t[a],l>0&&a!==e[l+1]&&Math.abs(c-r[l])>Math.abs(c-r[l-1]))e[l]=a;else if(l<n-1&&e[l]!==a-1&&Math.abs(c-r[l])>Math.abs(c-r[l+1])){e[l+1]=a-1;break}f=o,o=0,u=[],s=[];for(let a=0;a<n;a++){u.push(r[a]),s.push(i[a]);const n=b(a,e,t,l);r[a]=n.sbMean,i[a]=n.sbSdcm,o+=i[a];}}if(o>f){for(let t=0;t<n;t++)e[t]=a[t],r[t]=u[t],i[t]=s[t];o=f;}return {mean:r,sdcm:i}}function c(e,t,l,n,a,u){let s=0,o=0,r=0,i=0,c=!0;for(let f=0;f<2&&c;f++){0===f&&(c=!1);for(let f=0;f<u-1;f++)for(;l[f+1]+1!==l[f+2];){l[f+1]=l[f+1]+1;const u=b(f,l,n,a);r=u.sbMean,s=u.sbSdcm;const h=b(f+1,l,n,a);if(i=h.sbMean,o=h.sbSdcm,!(s+o<t[f]+t[f+1])){l[f+1]=l[f+1]-1;break}t[f]=s,t[f+1]=o,e[f]=r,e[f+1]=i,c=!0;}for(let f=u-1;f>0;f--)for(;l[f]!==l[f-1]+1;){l[f]=l[f]-1;const u=b(f-1,l,n,a);r=u.sbMean,s=u.sbSdcm;const h=b(f,l,n,a);if(i=h.sbMean,o=h.sbSdcm,!(s+o<t[f-1]+t[f])){l[f]=l[f]+1;break}t[f-1]=s,t[f]=o,e[f-1]=r,e[f]=i,c=!0;}}return c}function f(e,t,l,n,a){let u=Math.max(n-e,t-n)/a/l;return u=u>=1?1:u>=.5?.5:.25,u}function h(e){let t=0;for(let l=0;l<e.length;l++)t+=e[l];return t/=e.length,t}function m(e,t){let l=0;for(let n=0;n<e.length;n++){const a=e[n];l+=(a-t)*(a-t);}l/=e.length;return Math.sqrt(l)}function b(e,l,n,a){let u=0,s=0;for(let t=l[e]+1;t<=l[e+1];t++){const e=a[t];u+=n[t]*e,s+=e;}s<=0&&t.warn("Exception in Natural Breaks calculation");const o=u/s;let r=0;for(let t=l[e]+1;t<=l[e+1];t++)r+=a[t]*(n[t]-o)**2;return {sbMean:o,sbSdcm:r}}

export { a, d };

//# sourceMappingURL=generateRendererUtils-50df5513.js.map