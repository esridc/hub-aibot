import { j as s$1, T as n$2, O as j, W as d, f as s$2, aP as t } from './hub-compass-map-4d751555.js';
import { c } from './fontUtils-0fd04675.js';
import { s, C, b } from './Rasterizer-069015d0.js';
import { o as o$1 } from './imageutils-f86cf60d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function r$1(r,n){const i=s(r);if(i instanceof Error)throw i;await i.createImages(),s$1(n);const{frames:a,width:s$2,height:p}=i,c=document.createElement("canvas");c.width=s$2,c.height=p;const l=c.getContext("2d",{willReadFrequently:!0}),m=[],h=[];for(const t of a){h.push(n$2(t.delay||100));const e=t.imageElement;0===t.blendOp?l.globalCompositeOperation="copy":l.globalCompositeOperation="source-over";const r=2===t.disposeOp?l.getImageData(t.left,t.top,t.width,t.height):void 0;l.drawImage(e,t.left,t.top);const n=l.getImageData(0,0,s$2,p);m.push(n),0===t.disposeOp||(1===t.disposeOp?l.clearRect(t.left,t.top,t.width,t.height):2===t.disposeOp&&l.putImageData(r,t.left,t.top));}return {frameDurations:h,getFrame:t=>m[t],width:s$2,height:p}}const n$1=[137,80,78,71,13,10,26,10];function i(t){const e=new Uint8Array(t);return !n$1.some(((t,o)=>t!==e[o]))}function a$1(t){if(!i(t))return !1;const e=new DataView(t),o=new Uint8Array(t);let r,n=8;do{const t=e.getUint32(n);if(r=String.fromCharCode.apply(String,Array.prototype.slice.call(o.subarray(n+4,n+8))),"acTL"===r)return !0;n+=12+t;}while("IEND"!==r&&n<o.length);return !1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function n(n,a){const r=C(n),o=b(r,!0),{width:c,height:d}=r.lsd,m=document.createElement("canvas");m.width=c,m.height=d;const u=m.getContext("2d",{willReadFrequently:!0}),f=[],h=[];for(const i of o){h.push(n$2(i.delay||100));const s=new ImageData(i.patch,i.dims.width,i.dims.height),n=o$1(s),a=3===i.disposalType?u.getImageData(i.dims.left,i.dims.top,i.dims.width,i.dims.height):void 0;u.drawImage(n,i.dims.left,i.dims.top);const r=u.getImageData(0,0,c,d);f.push(r),1===i.disposalType||(2===i.disposalType?u.clearRect(i.dims.left,i.dims.top,i.dims.width,i.dims.height):3===i.disposalType&&u.putImageData(a,i.dims.left,i.dims.top));}return {frameDurations:h,getFrame:t=>f[t],width:c,height:d}}const a=[71,73,70];function r(t){const e=new Uint8Array(t);return !a.some(((t,i)=>t!==e[i]))}function o(t){if(!r(t))return !1;const e=new DataView(t),i=e.getUint8(10);let s=13+(128&i?3*2**(1+(7&i)):0),n=0,a=!1;for(;!a;){switch(e.getUint8(s++)){case 33:if(!o())return !1;break;case 44:c();break;case 59:a=!0;break;default:return !1}if(n>1)return !0}function o(){switch(e.getUint8(s++)){case 249:d();break;case 1:m();break;case 254:u();break;case 255:f();break;default:return !1}return !0}function c(){n++,s+=8;const t=e.getUint8(s++);s+=128&t?3*2**(1+(7&t)):0,s++,h();}function d(){s++,s+=4,h();}function m(){n++,s++,s+=12,h();}function u(){h();}function f(){s++,s+=8,s+=3,h();}function h(){let t;for(;t=e.getUint8(s++);)s+=t;}return !1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class h{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null;}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear();}getResource(e){return this._resourceMap.get(e)??null}async fetchResource(e,t){const r=this._resourceMap.get(e);if(r)return {width:r.width,height:r.height};let i=this._inFlightResourceMap.get(e);return i?i.then((e=>({width:e.width,height:e.height}))):(i=l(e,t),this._inFlightResourceMap.set(e,i),i.then((t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height})),(()=>({width:0,height:0}))))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e);}loadFont(e){return c(e)}}async function u(r,s){const o=window.URL.createObjectURL(r);try{const{data:t}=await j(o,{...s,responseType:"image"});return t}catch(n){if(!d(n))throw new s$2("mapview-invalid-resource",`Could not fetch requested resource at ${o}`);throw n}finally{window.URL.revokeObjectURL(o);}}async function l(e,t){const{arrayBuffer:r,mediaType:i}=await p(e,t),s="image/png"===i;if("image/gif"===i&&o(r))return n(r);if(s&&a$1(r))return r$1(r,t);return u(new Blob([r],{type:i}),t)}async function p(r,o){let n;const a=";base64,";if(r.includes(a)){const e=r.indexOf(a),t$1=r.indexOf(a)+a.length,i=r.substring(t$1);n={arrayBuffer:t(i),mediaType:r.substring(0,e).replace("data:","")};}else try{const t=await j(r,{responseType:"array-buffer",...o}),i=t.data;n={arrayBuffer:i,mediaType:t.getHeader("Content-Type")};}catch(c){if(!d(c))throw new s$2("mapview-invalid-resource",`Could not fetch requested resource at ${r}`)}return n}

export { h };

//# sourceMappingURL=CIMResourceManager-c4a333ce.js.map