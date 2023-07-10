import { ix as t$1, iy as o$1, iz as u, iA as u$1, hq as t$2, l as n$4, cE as s$1, h8 as r$1, hd as e$1, ha as _$1, he as z$1, h9 as P, hf as u$2, a7 as g, a6 as s$2, hb as l$1, hg as n$5, hP as a$3, is as r$2, s as s$3, h7 as x, iB as g$1, ht as O$1, iw as v$1, iC as v$2, q as o$2, it as p$1, iu as A } from './hub-compass-map-4d751555.js';
import { E as E$1 } from './ByteSizeUnit-f75ee973.js';
import { n as n$1 } from './mat3f64-9c2c37f3.js';
import { n as n$2 } from './mat4f64-f2ca62fb.js';
import { n as n$3 } from './quatf64-581a0ed6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class s{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow();}get(){return 0===this._itemsPtr&&t$1((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i$1);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0;}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i$1));t++)this._items.push(this._allocator());}}const i$1=1024;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class a$2{constructor(t,e,s){this._itemByteSize=t,this._itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this._itemByteSize);}get(){0===this._itemsPtr&&t$1((()=>this._reset()));const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this._itemCreate(t,e*this._itemByteSize));this._buffers.push(t);}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0;}static createVec2f64(t=c$1){return new a$2(16,o$1,t)}static createVec3f64(t=c$1){return new a$2(24,u,t)}static createVec4f64(t=c$1){return new a$2(32,u$1,t)}static createMat3f64(t=c$1){return new a$2(72,n$1,t)}static createMat4f64(t=c$1){return new a$2(128,n$2,t)}static createQuatf64(t=c$1){return new a$2(32,n$3,t)}get test(){return {size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const c$1=4*E$1.KILOBYTES;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const t=a$2.createVec2f64(),c=a$2.createVec3f64(),r=a$2.createVec4f64(),a$1=a$2.createMat3f64(),f$1=a$2.createMat4f64(),o=a$2.createQuatf64();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var n;!function(n){n[n.X=0]="X",n[n.Y=1]="Y",n[n.Z=2]="Z";}(n||(n={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function d(i){return i?m$1(t$2(i.origin),t$2(i.direction)):m$1(n$4(),n$4())}function m$1(i,n){return {origin:i,direction:n}}function j(n,r){return s$1(n.origin,r.origin)&&s$1(n.direction,r.direction)}function p(i,n){const r=S.get();return r.origin=i,r.direction=n,r}function k$1(i,n=d()){return v(i.origin,i.direction,n)}function h$1(i,n,o=d()){return r$1(o.origin,i),e$1(o.direction,n,i),o}function v(i,n,t=d()){return r$1(t.origin,i),r$1(t.direction,n),t}function b(i,n){const r=_$1(c.get(),z$1(c.get(),i.direction),e$1(c.get(),n,i.origin));return P(r,r)}function l(i,n){return Math.sqrt(b(i,n))}function q$1(i,n,r){const o=P(i.direction,e$1(r,n,i.origin));return u$2(r,i.origin,g(r,i.direction,o)),r}const S=new s((()=>d()));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(n,r,s){const c=P(n,r)/P(n,n);return g(s,n,c)}function f(n,o){return P(n,o)/s$2(n)}function a(o,s){const c=P(o,s)/(s$2(o)*s$2(s));return -l$1(c)}function i(o,r,u){z$1(m,o),z$1(h,r);const e=P(m,h),f=l$1(e),a=_$1(m,m,h);return P(a,u)<0?2*Math.PI-f:f}const m=n$4(),h=n$4();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const R=_();function _(){return n$5()}function q(t,n=_()){return a$3(n,t)}function w(t,n){return r$2(t[0],t[1],t[2],n)}function C(t){return t}function O(t){t[0]=t[1]=t[2]=t[3]=0;}function T(t,n){return t[0]=t[1]=t[2]=0,t[3]=n,t}function k(t){return t[3]}function z(t){return t}function E(t,n,r,e){return r$2(t,n,r,e)}function L(t,n,r){return t!==r&&r$1(r,t),r[3]=t[3]+n,r}function N(n,r,e){return s$3.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),n===e?e:q(n,e)}function Z(t,n,r){if(null==n)return !1;const{origin:e,direction:o}=n,s=U;s[0]=e[0]-t[0],s[1]=e[1]-t[1],s[2]=e[2]-t[2];const i=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===i)return !1;const a=2*(o[0]*s[0]+o[1]*s[1]+o[2]*s[2]),c=a*a-4*i*(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]-t[3]*t[3]);if(c<0)return !1;const u=Math.sqrt(c);let f=(-a-u)/(2*i);const m=(-a+u)/(2*i);return (f<0||m<f&&m>0)&&(f=m),!(f<0)&&(r&&(r[0]=e[0]+o[0]*f,r[1]=e[1]+o[1]*f,r[2]=e[2]+o[2]*f),!0)}const U=n$4();function V(t,n){return Z(t,n,null)}function X(t,n,r){if(Z(t,n,r))return r;const e=Y(t,n,c.get());return u$2(r,n.origin,g(c.get(),n.direction,x(n.origin,e)/s$2(n.direction))),r}function Y(t,n,r){const o=c.get(),s=f$1.get();_$1(o,n.origin,n.direction);const a$1=k(t);_$1(r,o,n.origin),g(r,r,1/s$2(r)*a$1);const m=G(t,n.origin),p=a(n.origin,r);return g$1(s,p+m,o),O$1(r,r,s),r}function B(t,n,r){return Z(t,n,r)?r:(q$1(n,z(t),r),D(t,r,r))}function D(t,n,r){const e=e$1(c.get(),n,z(t)),o=g(c.get(),e,t[3]/s$2(e));return u$2(r,o,z(t))}function F(t,n){const r=e$1(c.get(),n,z(t)),e=v$1(r),o=t[3]*t[3];return Math.sqrt(Math.abs(e-o))}function G(t,r){const e=e$1(c.get(),r,z(t)),o=s$2(e),s=k(t),i=s+Math.abs(s-o);return l$1(s/i)}const H=n$4();function I(t,n$1,e,o){const s=e$1(H,n$1,z(t));switch(e){case n.X:{const t=v$2(s,H)[2];return o$2(o,-Math.sin(t),Math.cos(t),0)}case n.Y:{const t=v$2(s,H),n=t[1],e=t[2],i=Math.sin(n);return o$2(o,-i*Math.cos(e),-i*Math.sin(e),Math.cos(n))}case n.Z:return z$1(o,s);default:return}}function J(t,n){const r=e$1($,n,z(t));return s$2(r)-t[3]}function K(t,n$1,r,e){const o=J(t,n$1),a=I(t,n$1,n.Z,$),c=g($,a,r-o);return u$2(e,n$1,c)}function Q(t,n){const r=p$1(z(t),n),e=k(t);return r<=e*e}function W(t,n,r=_()){const e=x(t,n),o=t[3],s=n[3];return e+s<o?(a$3(r,t),r):e+o<s?(a$3(r,n),r):(A(r,t,n,(e+s-o)/(2*e)),r[3]=(e+o+s)/2,r)}const $=n$4(),tt=_(),nt=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:R,altitudeAt:J,angleToSilhouette:G,axisAt:I,clear:O,closestPoint:B,closestPointOnSilhouette:Y,containsPoint:Q,copy:q,create:_,distanceToSilhouette:F,elevate:L,fromCenterAndRadius:w,fromRadius:T,fromValues:E,getCenter:z,getRadius:k,intersectRay:Z,intersectRayClosestSilhouette:X,intersectsRay:V,projectPoint:D,setAltitudeAt:K,setExtent:N,tmpSphere:tt,union:W,wrap:C},Symbol.toStringTag,{value:"Module"}));

export { E, Q, V, _, k as a, f as b, c, d, f$1 as f, k$1 as k, p, q, r, s, v, z };

//# sourceMappingURL=sphere-53897e84.js.map