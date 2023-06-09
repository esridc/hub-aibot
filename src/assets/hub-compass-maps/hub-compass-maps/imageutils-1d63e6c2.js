import { f as s, cd as tt, ce as ot } from './hub-compass-map-68308039.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function a(e){const t=o(e);return null!=t?t.toDataURL():""}async function r(t){const n=o(t);if(null==n)throw new s("imageToArrayBuffer","Unsupported image type");const a=await i(t),r=await new Promise((e=>n.toBlob(e,a)));if(!r)throw new s("imageToArrayBuffer","Failed to encode image");return {data:await r.arrayBuffer(),type:a}}async function i(e){if(!(e instanceof HTMLImageElement))return "image/png";const a=e.src;if(tt(a)){const e=ot(a);return "image/jpeg"===e?.mediaType?e.mediaType:"image/png"}return /\.png$/i.test(a)?"image/png":/\.(jpg|jpeg)$/i.test(a)?"image/jpeg":"image/png"}function o(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");return e instanceof HTMLImageElement?n.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&n.putImageData(e,0,0),t}function c(e){const t=[],n=new Uint8Array(e);for(let a=0;a<n.length;a++)t.push(String.fromCharCode(n[a]));return "data:application/octet-stream;base64,"+btoa(t.join(""))}function g(e){if(e.byteLength<8)return !1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}

export { a, c, g, o, r };

//# sourceMappingURL=imageutils-1d63e6c2.js.map