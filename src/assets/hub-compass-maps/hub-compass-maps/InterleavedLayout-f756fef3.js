import { u as u$1, m, i as i$1, T, c as c$1, h as h$1, l as l$1, a as a$1, p, b, x, y, o as o$1, d, g, j, V, q, A, L, B, O as O$1, w as w$1, E, F, I as I$1, U, M, S, k, v, z, C, D as D$1, G as G$1, H as H$1 } from './BufferView-ed2f03a2.js';
import { e as e$1 } from './types-6916d16e.js';
import { hg as n, ae as n$1, hh as w } from './hub-compass-map-4d751555.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const o=n();class e{constructor(t){this.message=t;}toString(){return `AssertException: ${this.message}`}}function s(t,n){if(!t){n=n||"Assertion";const t=new Error(n).stack;throw new e(`${n} at ${t}`)}}function c(t,n){t||(n=n||"",console.warn("Verify failed: "+n+"\n"+new Error("verify").stack));}function i(t,n,r,o){let e,s=(r[0]-t[0])/n[0],c=(o[0]-t[0])/n[0];s>c&&(e=s,s=c,c=e);let i=(r[1]-t[1])/n[1],f=(o[1]-t[1])/n[1];if(i>f&&(e=i,i=f,f=e),s>f||i>c)return !1;i>s&&(s=i),f<c&&(c=f);let u=(r[2]-t[2])/n[2],a=(o[2]-t[2])/n[2];return u>a&&(e=u,u=a,a=e),!(s>a||u>c)&&(a<c&&(c=a),!(c<0))}function f(n,r,o,e,s,c=n$1()){const i=(e[s]-o[s])*(r[0]-n[0])-(e[0]-o[0])*(r[s]-n[s]),f=(e[0]-o[0])*(n[s]-o[s])-(e[s]-o[s])*(n[0]-o[0]);if(0===i)return !1;const u=f/i;return c[0]=n[0]+u*(r[0]-n[0]),c[1]=n[s]+u*(r[s]-n[s]),!0}function u(t,r,e,c,i){o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=1,w(o,o,r),i.length>2&&(i[2]=-o[2]),w(o,o,e),s(0!==o[3]),i[0]=o[0]/o[3],i[1]=o[1]/o[3],i[2]=o[2]/o[3],i[0]=(.5*i[0]+.5)*c[2]+c[0],i[1]=(.5*i[1]+.5)*c[3]+c[1];}function a(t,n){return Math.log(t)/Math.log(n)}function h(t,n,r,o){t[12]=n,t[13]=r,t[14]=o;}function l(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class D{constructor(t,e){this.layout=t,this.buffer="number"==typeof e?new ArrayBuffer(e*t.stride):e;for(const i of t.fields.keys()){const e=t.fields.get(i);this[i]=new e.constructor(this.buffer,e.offset,this.stride);}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(t,e){const i=this[t];return i&&i.elementCount===e.ElementCount&&i.elementType===e.ElementType?i:null}slice(t,e){return new D(this.layout,this.buffer.slice(t*this.stride,e*this.stride))}copyFrom(t,e=0,i=0,s=t.count){const r=this.stride;if(r%4==0){const n=new Uint32Array(t.buffer,e*r,s*r/4);new Uint32Array(this.buffer,i*r,s*r/4).set(n);}else {const n=new Uint8Array(t.buffer,e*r,s*r);new Uint8Array(this.buffer,i*r,s*r).set(n);}return this}}class G{constructor(t=null){this._stride=0,this._lastAligned=0,this._fields=new Map,t&&(this._stride=t.stride,t.fields.forEach((t=>this._fields.set(t[0],{...t[1],constructor:N(t[1].constructor)}))));}vec2f(e,i){return this._appendField(e,u$1,i),this}vec2f64(t,i){return this._appendField(t,m,i),this}vec3f(t,e){return this._appendField(t,i$1,e),this}vec3f64(t,e){return this._appendField(t,T,e),this}vec4f(t,e){return this._appendField(t,c$1,e),this}vec4f64(t,e){return this._appendField(t,h$1,e),this}mat3f(t,e){return this._appendField(t,l$1,e),this}mat3f64(t,e){return this._appendField(t,a$1,e),this}mat4f(t,e){return this._appendField(t,p,e),this}mat4f64(t,e){return this._appendField(t,b,e),this}vec4u8(t,e){return this._appendField(t,x,e),this}f32(t,e){return this._appendField(t,y,e),this}f64(t,e){return this._appendField(t,o$1,e),this}u8(t,e){return this._appendField(t,d,e),this}u16(t,e){return this._appendField(t,g,e),this}i8(t,e){return this._appendField(t,j,e),this}vec2i8(t,e){return this._appendField(t,V,e),this}vec2i16(t,e){return this._appendField(t,q,e),this}vec2u8(t,e){return this._appendField(t,A,e),this}vec4u16(t,e){return this._appendField(t,L,e),this}u32(t,e){return this._appendField(t,B,e),this}_appendField(t,e,i){if(this._fields.has(t))return void s(!1,`${t} already added to vertex buffer layout`);const s$1=e.ElementCount*e$1(e.ElementType),r=this._stride;this._stride+=s$1,this._fields.set(t,{size:s$1,constructor:e,offset:r,optional:i});}createBuffer(t){return new D(this,t)}createView(t){return new D(this,t)}clone(){const t=new G;return t._stride=this._stride,t._fields=new Map,this._fields.forEach(((e,i)=>t._fields.set(i,e))),t.BufferType=this.BufferType,t}get stride(){if(this._lastAligned!==this._fields.size){let t=1;this._fields.forEach((e=>t=Math.max(t,e$1(e.constructor.ElementType)))),this._stride=Math.floor((this._stride+t-1)/t)*t,this._lastAligned=this._fields.size;}return this._stride}get fields(){return this._fields}}function H(){return new G}class I{constructor(t){this.fields=new Array,t.fields.forEach(((t,e)=>{const i={...t,constructor:K(t.constructor)};this.fields.push([e,i]);})),this.stride=t.stride;}}const J=[y,u$1,i$1,c$1,l$1,p,o$1,m,T,h$1,a$1,b,d,A,O$1,x,g,w$1,E,L,B,F,I$1,U,j,V,M,S,k,q,v,z,C,D$1,G$1,H$1];function K(t){return `${t.ElementType}_${t.ElementCount}`}function N(t){return O.get(t)}const O=new Map;J.forEach((t=>O.set(K(t),t)));

export { G, H, I, i, s };

//# sourceMappingURL=InterleavedLayout-f756fef3.js.map