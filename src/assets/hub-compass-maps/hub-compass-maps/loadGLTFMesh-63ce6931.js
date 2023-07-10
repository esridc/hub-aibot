import { O as j, hl as m$1, dY as r$1, aX as h, is as r$2, ad as r$3, hz as g$1, mo as _ } from './hub-compass-map-4d751555.js';
import { e as e$3 } from './mat3f64-9c2c37f3.js';
import { m, c, a as c$1, p, g } from './meshFeatureSet-8a2b2082.js';
import { T, i, c as c$2, x, u, L, O, E } from './BufferView-ed2f03a2.js';
import { t as t$3, f, i as i$1, o as o$4 } from './vec32-7b7b48f8.js';
import { n, l, o, a as o$1, f as f$1, r as r$4, b as n$1, c as f$2, d as o$2, e as l$1, g as o$3, h as e$4, i as e$5 } from './DefaultMaterial_COLOR_GAMMA-76bdaff5.js';
import { e as e$2 } from './types-6916d16e.js';
import { q } from './georeference-1f4571cf.js';
import { t as t$2 } from './resourceUtils-2b12439d.js';
import { D } from './enums-f1bebe6f.js';
import './index-d436d5f8.js';
import './MeshGeoreferencedRelativeVertexSpace-b4fde088.js';
import './MeshLocalVertexSpace-fa54b880.js';
import './earcut-275e4de1.js';
import './Indices-66fb5054.js';
import './deduplicate-11d461b5.js';
import './External-b25096fb.js';
import './mat4f64-f2ca62fb.js';
import './spatialReferenceEllipsoidUtils-8f8393a7.js';
import './quat-d7858404.js';
import './quatf64-581a0ed6.js';
import './basicInterfaces-ce8a6401.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e$1(e,t,r){const o=e.typedBuffer,d=e.typedBufferStride,f=t.typedBuffer,n=t.typedBufferStride,c=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*d,l=(r&&r.srcIndex?r.srcIndex:0)*n;for(let p=0;p<c;++p){for(let e=0;e<9;++e)o[u+e]=f[l+e];u+=d,l+=n;}}const t$1=Object.freeze(Object.defineProperty({__proto__:null,copy:e$1},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e,t,r){const o=e.typedBuffer,d=e.typedBufferStride,f=t.typedBuffer,n=t.typedBufferStride,c=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*d,l=(r&&r.srcIndex?r.srcIndex:0)*n;for(let p=0;p<c;++p){for(let e=0;e<16;++e)o[u+e]=f[l+e];u+=d,l+=n;}}const t=Object.freeze(Object.defineProperty({__proto__:null,copy:e},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function r(s,r){return new s(new ArrayBuffer(r*s.ElementCount*e$2(s.ElementType)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function N(e,t,r){const o={...r,useTransform:r?.useTransform??!0},n$1=new n(z(o)),s=(await l(n$1,t,o,!0)).model,a=s.lods.shift(),l$1=new Map,i=new Map;s.textures.forEach(((e,t)=>l$1.set(t,H(e)))),s.materials.forEach(((e,t)=>i.set(t,J(e,l$1))));const u=Q(a);for(const p of u.parts)W(u,p,i);const{position:c,normal:f,tangent:m,color:d,texCoord0:g}=u.vertexAttributes,x={position:c.typedBuffer,normal:null!=f?f.typedBuffer:null,tangent:null!=m?m.typedBuffer:null,uv:null!=g?g.typedBuffer:null,color:null!=d?d.typedBuffer:null},T=q(x,e,o);return {transform:T.transform,vertexSpace:T.vertexSpace,components:u.components,spatialReference:e.spatialReference,vertexAttributes:new p({position:T.vertexAttributes.position,normal:T.vertexAttributes.normal,tangent:T.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function z(e){const r=e?.resolveFile;return r?{busy:!1,request:async(e,o,n)=>{const s=r(e),a="image"===o?"image":"binary"===o?"array-buffer":"json";return (await j(s,{responseType:a,signal:null!=n?n.signal:null})).data}}:null}function G(e,t){if(null==e)return "-";const o=e.typedBuffer;return `${r$1(t,o.buffer,(()=>t.size))}/${o.byteOffset}/${o.byteLength}`}function K(e){return null!=e?e.toString():"-"}function Q(e){let t=0;const has={color:!1,tangent:!1,normal:!1,texCoord0:!1},o=new Map,n=new Map,s=[];for(const a of e.parts){const{attributes:{position:e,normal:l,color:i,tangent:u,texCoord0:c}}=a,f=`\n      ${G(e,o)}/\n      ${G(l,o)}/\n      ${G(i,o)}/\n      ${G(u,o)}/\n      ${G(c,o)}/\n      ${K(a.transform)}\n    `;let m=!1;const p=r$1(n,f,(()=>(m=!0,{start:t,length:e.count})));m&&(t+=e.count),l&&(has.normal=!0),i&&(has.color=!0),u&&(has.tangent=!0),c&&(has.texCoord0=!0),s.push({gltf:a,writeVertices:m,region:p});}return {vertexAttributes:{position:r(T,t),normal:has.normal?r(i,t):null,tangent:has.tangent?r(c$2,t):null,color:has.color?r(x,t):null,texCoord0:has.texCoord0?r(u,t):null},parts:s,components:[]}}function H(e){return new m({data:(t$2(e.data),e.data),wrap:Z(e.parameters.wrap)})}function J(t,r){const o=new h(re(t.color,t.opacity)),s=t.emissiveFactor?new h(oe(t.emissiveFactor)):null,a=e=>e?new c$1({scale:e.scale?[e.scale[0],e.scale[1]]:[1,1],rotation:m$1(e.rotation??0),offset:e.offset?[e.offset[0],e.offset[1]]:[0,0]}):null;return new c({color:o,colorTexture:r.get(t.textureColor),normalTexture:r.get(t.textureNormal),emissiveColor:s,emissiveTexture:r.get(t.textureEmissive),occlusionTexture:r.get(t.textureOcclusion),alphaMode:Y(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:r.get(t.textureMetallicRoughness),colorTextureTransform:a(t.colorTextureTransform),normalTextureTransform:a(t.normalTextureTransform),occlusionTextureTransform:a(t.occlusionTextureTransform),emissiveTextureTransform:a(t.emissiveTextureTransform),metallicRoughnessTextureTransform:a(t.metallicRoughnessTextureTransform)})}function W(e,t,r){t.writeVertices&&X(e,t);const{indices:o,attributes:n,primitiveType:s,material:a}=t.gltf;let l=o$1(o||n.position.count,s);const i=t.region.start;if(i){const e=new Uint32Array(l);for(let t=0;t<l.length;t++)e[t]+=i;l=e;}e.components.push(new g({faces:l,material:r.get(a),shading:n.normal?"source":"flat",trustSourceNormals:!0}));}function X(e,t){const{position:r,normal:n,tangent:l,color:i$2,texCoord0:u}=e.vertexAttributes,c=t.region.start,{attributes:f$3,transform:m}=t.gltf,p=f$3.position.count;if(t$3(r.slice(c,p),f$3.position,m),null!=f$3.normal&&null!=n){const e=g$1(e$3(),m),t=n.slice(c,p);f(t,f$3.normal,e),_(e)&&i$1(t,t);}else null!=n&&f$1(n,0,0,1,{dstIndex:c,count:p});if(null!=f$3.tangent&&null!=l){const e=g$1(e$3(),m),t=l.slice(c,p);r$4(t,f$3.tangent,e),_(e)&&n$1(t,t);}else null!=l&&f$2(l,0,0,1,1,{dstIndex:c,count:p});if(null!=f$3.texCoord0&&null!=u?o$2(u.slice(c,p),f$3.texCoord0):null!=u&&l$1(u,0,0,{dstIndex:c,count:p}),null!=f$3.color&&null!=i$2){const e=f$3.color,t=i$2.slice(c,p);if(4===e.elementCount)e instanceof c$2?o$3(t,e,255):e instanceof x?e$4(t,e):e instanceof L&&o$3(t,e,1/256);else {f$2(t,255,255,255,255);const r=O.fromTypedArray(t.typedBuffer,t.typedBufferStride);e instanceof i?o$4(r,e,255):e instanceof O?e$5(r,e):e instanceof E&&o$4(r,e,1/256);}}else null!=i$2&&f$2(i$2.slice(c,p),255,255,255,255);}function Y(e){switch(e){case"OPAQUE":return "opaque";case"MASK":return "mask";case"BLEND":return "blend"}}function Z(e){return {horizontal:ee(e.s),vertical:ee(e.t)}}function ee(e){switch(e){case D.CLAMP_TO_EDGE:return "clamp";case D.MIRRORED_REPEAT:return "mirror";case D.REPEAT:return "repeat"}}function te(e){return e**(1/o)*255}function re(e,t){return r$2(te(e[0]),te(e[1]),te(e[2]),t)}function oe(e){return r$3(te(e[0]),te(e[1]),te(e[2]))}

export { N as loadGLTFMesh };

//# sourceMappingURL=loadGLTFMesh-63ce6931.js.map