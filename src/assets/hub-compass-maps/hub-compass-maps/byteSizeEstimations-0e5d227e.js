/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function r(r){return 32+r.length}function n(r){return 16}function t(t){if(!t)return 0;let e=f;for(const o in t)if(t.hasOwnProperty(o)){const u=t[o];switch(typeof u){case"string":e+=r(u);break;case"number":e+=n();break;case"boolean":e+=4;}}return e}function e(r){if(!r)return 0;if(Array.isArray(r))return o(r);let n=f;for(const t in r)r.hasOwnProperty(t)&&(n+=u(r[t]));return n}function o(r){const n=r.length;if(0===n||"number"==typeof r[0])return 32+8*n;let t=i;for(let e=0;e<n;e++)t+=u(r[e]);return t}function u(t){switch(typeof t){case"object":return e(t);case"string":return r(t);case"number":return n();case"boolean":return 4;default:return 8}}function c(r,n){return i+r.length*n}const f=32,i=32;

export { c, e, t };

//# sourceMappingURL=byteSizeEstimations-0e5d227e.js.map