import { gy as s, gx as A$1 } from './hub-compass-map-4d751555.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(t){return s(t)?t.length<A$1?t:e(t):t.length<A$1?Array.from(t):t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT?t:e(t)}function e(n){let t=!0;for(const e of n){if(e>=65536)return s(n)?new Uint32Array(n):n;e>=256&&(t=!1);}return t?new Uint8Array(n):new Uint16Array(n)}function i(r){return r<=A$1?new Array(r):r<=65536?new Uint16Array(r):new Uint32Array(r)}function f(r){return r<=A$1?new Array(r):new Uint32Array(r)}let a=(()=>{const r=new Uint32Array(131072);for(let n=0;n<r.length;++n)r[n]=n;return r})();const u=[0],o=(()=>{const r=new Uint16Array(65536);for(let n=0;n<r.length;++n)r[n]=n;return r})();function y(r){if(1===r)return u;if(r<A$1)return Array.from(new Uint16Array(o.buffer,0,r));if(r<o.length)return new Uint16Array(o.buffer,0,r);if(r>a.length){const n=Math.max(2*a.length,r);a=new Uint32Array(n);for(let r=0;r<a.length;r++)a[r]=r;}return new Uint32Array(a.buffer,0,r)}let A=new Uint8Array(65536);function l(r){if(1===r)return u;if(r<A$1)return new Array(r).fill(0);if(r>A.length){const n=Math.max(2*A.length,r);A=new Uint8Array(n);}return new Uint8Array(A.buffer,0,r)}

export { i, t, y };

//# sourceMappingURL=Indices-66fb5054.js.map