import { h8 as r$1, ha as _$2, he as z$1, hk as k$2, fp as M$2, hl as m, hm as _$3, hn as O$2, ho as b$3, cV as l$1, l as n, hp as e$1, ad as r$2, hq as t, hr as P, hs as h$2, ht as O$3, hu as B$3, a1 as e$3, a2 as y$2, a3 as a, s, hv as o$1, hw as T$1, hx as P$1, hy as yn, hz as g$2, hA as B$4, hB as zn, hC as a$1, fP as o$2, fO as S$1, hD as f, hE as f$1, hF as C$2, hG as F$1, fq as Cn, hH as c$1, hI as f$2, cy as W$1, dq as j$2 } from './hub-compass-map-f4225e12.js';
import { e as e$4 } from './mat3f64-9c2c37f3.js';
import { e as e$2, o as o$3 } from './mat4f64-f2ca62fb.js';
import { c } from './spatialReferenceEllipsoidUtils-f57e674a.js';
import { m as m$1, p, t as t$1, o as o$4 } from './MeshLocalVertexSpace-8e20645b.js';
import { m as m$2 } from './MeshGeoreferencedRelativeVertexSpace-8823d711.js';
import { v as v$3, y as y$1, x as x$1 } from './quat-d9293bf7.js';
import { e } from './quatf64-581a0ed6.js';
import { n as n$1, s as s$1, r as r$3 } from './vec32-71093771.js';
import { i, T as T$2 } from './BufferView-c6404bd8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function h$1(n=z){return [n[0],n[1],n[2],n[3]]}function j$1(n,r,t,u){return q$1(n,r,t,u,C$1)}function k$1(n,r){return q$1(n[0],n[1],n[2],r,C$1)}function v$2(n,r=h$1()){return q$1(n[0],n[1],n[2],n[3],r)}function q$1(n,r,t,u,o=h$1()){return o[0]=n,o[1]=r,o[2]=t,o[3]=u,o}function U$1(n,r,t=h$1()){return r$1(x(t),n),t[3]=r,t}function d(n,r,t=h$1()){return _$2(t,n,r),z$1(t,t),t[3]=-k$2(n,r),t}function g$1(r,s,c=h$1()){return v$3(A,x(r),w$1(r)),v$3(B$2,x(s),w$1(s)),y$1(A,B$2,A),y(c,m(x$1(x(c),A)))}function l(n,r,t,u=h$1()){return U$1(_$3,n,D$1),U$1(O$2,r,E$2),U$1(b$3,t,F),g$1(D$1,E$2,D$1),g$1(D$1,F,u),u}function x(n){return n}function b$2(n){return n[3]}function w$1(n){return M$2(n[3])}function y(n,r){return n[3]=r,n}const z=[0,0,1,0],A=e(),B$2=e(),C$1=h$1(),D$1=h$1(),E$2=h$1(),F=h$1();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var v$1;let b$1=v$1=class extends l$1{constructor(t){super(t),this.translation=n(),this.rotationAxis=e$1(z),this.rotationAngle=0,this.scale=r$2(1,1,1);}get rotation(){return U$1(this.rotationAxis,this.rotationAngle)}set rotation(t$1){this.rotationAxis=t(x(t$1)),this.rotationAngle=b$2(t$1);}get localMatrix(){const t=e$2();return v$3(M$1,x(this.rotation),w$1(this.rotation)),P(t,M$1,this.translation,this.scale),t}get localMatrixInverse(){return h$2(e$2(),this.localMatrix)}applyLocal(t,o){return O$3(o,t,this.localMatrix)}applyLocalInverse(t,o){return O$3(o,t,this.localMatrixInverse)}equals(t){return this===t||null!=t&&B$3(this.localMatrix,t.localMatrix)}clone(){const t$1={translation:t(this.translation),rotationAxis:t(this.rotationAxis),rotationAngle:this.rotationAngle,scale:t(this.scale)};return new v$1(t$1)}};e$3([y$2({type:[Number],nonNullable:!0,json:{write:!0}})],b$1.prototype,"translation",void 0),e$3([y$2({type:[Number],nonNullable:!0,json:{write:!0}})],b$1.prototype,"rotationAxis",void 0),e$3([y$2({type:Number,nonNullable:!0,json:{write:!0}})],b$1.prototype,"rotationAngle",void 0),e$3([y$2({type:[Number],nonNullable:!0,json:{write:!0}})],b$1.prototype,"scale",void 0),e$3([y$2()],b$1.prototype,"rotation",null),e$3([y$2()],b$1.prototype,"localMatrix",null),e$3([y$2()],b$1.prototype,"localMatrixInverse",null),b$1=v$1=e$3([a("esri.geometry.support.MeshTransform")],b$1);const M$1=e(),N$2=b$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function r(e,r){return e.isGeographic||e.isWebMercator&&(r?.geographic??!0)}function o(r,o,g){const i=!r.isGeoreferenced;null!=g?.geographic&&g.geographic!==i&&s.getLogger(o).warnOnce(`Specifying the 'geographic' parameter (${g.geographic}) for a Mesh vertex space of type "${r.type}" is not supported. This parameter will be ignored.`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const g=s.getLogger("esri.geometry.support.meshUtils.normalProjection");function _$1(r,e,t,o,n){return k(o)?(V(U.TO_PCPF,i.fromTypedArray(r),T$2.fromTypedArray(e),T$2.fromTypedArray(t),o,i.fromTypedArray(n)),n):(g.error("Cannot convert spatial reference to PCPF"),n)}function j(r,e,t,o,n){return k(o)?(V(U.FROM_PCPF,i.fromTypedArray(r),T$2.fromTypedArray(e),T$2.fromTypedArray(t),o,i.fromTypedArray(n)),n):(g.error("Cannot convert to spatial reference from PCPF"),n)}function h(r,e,t){return yn(r,e,0,t,c(e),0,r.length/3),t}function E$1(r,e,t){return yn(r,c(t),0,e,t,0,r.length/3),e}function M(r,o,n){return g$2(N$1,n),n$1(o,r,N$1),B$4(N$1)||s$1(o,o),o}function O$1(r,o,n){if(g$2(N$1,n),n$1(o,r,N$1,4),B$4(N$1)||s$1(o,o,4),r!==o)for(let e=3;e<r.length;e+=4)o[e]=r[e];return o}function R(r,e,t,o,n){if(!k(o))return g.error("Cannot convert spatial reference to PCPF"),n;V(U.TO_PCPF,i.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),T$2.fromTypedArray(e),T$2.fromTypedArray(t),o,i.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function v(r,e,t,o,n){if(!k(o))return g.error("Cannot convert to spatial reference from PCPF"),n;V(U.FROM_PCPF,i.fromTypedArray(r,16),T$2.fromTypedArray(e),T$2.fromTypedArray(t),o,i.fromTypedArray(n,16));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function V(r,e,t,f$1,a,i){if(!e)return;const m=t.count,y=c(a);if(b(a))for(let c=0;c<m;c++)f$1.getVec(c,B$1),e.getVec(c,S),zn(y,B$1,w,y),a$1(N$1,w),r===U.FROM_PCPF&&o$2(N$1,N$1),S$1(S,S,N$1),i.setVec(c,S);else for(let u=0;u<m;u++){f$1.getVec(u,B$1),e.getVec(u,S),zn(y,B$1,w,y),a$1(N$1,w);const a=f(t.get(u,1));let m=Math.cos(a);r===U.TO_PCPF&&(m=1/m),N$1[0]*=m,N$1[1]*=m,N$1[2]*=m,N$1[3]*=m,N$1[4]*=m,N$1[5]*=m,r===U.FROM_PCPF&&o$2(N$1,N$1),S$1(S,S,N$1),z$1(S,S),i.setVec(u,S);}return i}function k(r){return b(r)||L$1(r)}function b(r){return r.isWGS84||o$1(r)||T$1(r)||P$1(r)}function L$1(r){return r.isWebMercator}var U;!function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF";}(U||(U={}));const B$1=n(),S=n(),w=e$2(),N$1=e$4();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function O(n,t,e){return r(t.spatialReference,e)?Z(n,t,e):L(n,t,e)}function T(n,t,e,r){const{position:o,normal:i,tangent:a}=n;if(!t.isRelative)return {position:o,normal:i,tangent:a};const l=e?.localMatrix??o$3;return O({position:r$3(new Float64Array(o.length),o,l),normal:null!=i?M(i,new Float32Array(i.length),l):null,tangent:null!=a?O$1(a,new Float32Array(a.length),l):null},t.getOriginPoint(r),{geographic:!t.isGeoreferenced})}function q(n,t,e){if(e?.useTransform){const{position:r,normal:o,tangent:i}=n,{x:a,y:s,z:l}=t,c=r$2(a,s,l??0);return {vertexAttributes:{position:r,normal:o,tangent:i},vertexSpace:e.geographic??1?new m$1({origin:c}):new m$2({origin:c}),transform:new N$2}}return {vertexAttributes:O(n,t,e),vertexSpace:new p,transform:null}}function D(n,t,e){return r(t.spatialReference,e)?K(n,t,e):J(n,t,e)}function E(n,t,e,r,o){if(!t.isRelative)return D(n,r,o);const{spatialReference:i}=r,a=T(n,t,e,i);return r.equals(t.getOriginPoint(i))?J(a,r,o):D(a,r,o)}function I({positions:n,transform:t,vertexSpace:e,inSpatialReference:i,outSpatialReference:a,outPositions:l,local:f}){const p=e.isRelative?e.origin:f$1,w=e.isRelative?t?.localMatrix??o$3:o$3;if(e.isGeoreferenced){const t=l??t$1(n.length);if(C$2(w,o$3)?o$4(t,n):r$3(t,n,w),!F$1(p,f$1)){const[n,e,r]=p;for(let o=0;o<t.length;o+=3)t[o]+=n,t[o+1]+=e,t[o+2]+=r;}return yn(t,i,0,t,a,0,t.length/3),t}const A=c(i),x=!f&&Cn(i,A)?A:i;zn(i,p,$,x),c$1($,$,w);const v=l??t$1(n.length);return r$3(v,n,$),yn(v,x,0,v,a,0,v.length/3),v}function L(n,t,e){const r=new Float64Array(n.position.length),o=n.position,i=t.x,a=t.y,s=t.z??0,l=Y(e?e.unit:null,t.spatialReference);for(let c=0;c<o.length;c+=3)r[c]=o[c]*l+i,r[c+1]=o[c+1]*l+a,r[c+2]=o[c+2]*l+s;return {position:r,normal:n.normal,tangent:n.tangent}}function Z(n,t,e){const r=t.spatialReference,o=N(t,e,$),i=new Float64Array(n.position.length),a=B(n.position,o,r,i),s=g$2(nn,o);return {position:a,normal:C(a,i,n.normal,s,r),tangent:H(a,i,n.tangent,s,r)}}function B(n,t,e,r){r$3(r,n,t);const o=new Float64Array(n.length);return E$1(r,o,e)}function C(n,t,e,r,o){if(null==e)return null;const i=new Float32Array(e.length);return n$1(i,e,r),j(i,n,t,o,i),i}function H(n,t,e,r,o){if(null==e)return null;const i=new Float32Array(e.length);n$1(i,e,r,4);for(let a=3;a<i.length;a+=4)i[a]=e[a];return v(i,n,t,o,i),i}function J(n,t,e){const r=new Float64Array(n.position.length),o=n.position,i=t.x,a=t.y,s=t.z??0,l=Y(e?e.unit:null,t.spatialReference);for(let c=0;c<o.length;c+=3)r[c]=(o[c]-i)/l,r[c+1]=(o[c+1]-a)/l,r[c+2]=(o[c+2]-s)/l;return {position:r,normal:n.normal,tangent:n.tangent}}function K(n,t,e){const r=t.spatialReference;N(t,e,$);const o=h$2(_,$),a=new Float64Array(n.position.length),s=Q(n.position,r,o,a),l=g$2(nn,o);return {position:s,normal:W(n.normal,n.position,a,r,l),tangent:X(n.tangent,n.position,a,r,l)}}function N(n,t,e){zn(n.spatialReference,[n.x,n.y,n.z??0],e,c(n.spatialReference));const r=Y(t?t.unit:null,n.spatialReference);return f$2(e,e,[r,r,r]),e}function Q(n,t,e,r){const o=h(n,t,r),i=new Float64Array(o.length);return r$3(i,o,e),i}function W(n,t,e,r,o){if(null==n)return null;const i=_$1(n,t,e,r,new Float32Array(n.length));return n$1(i,i,o),i}function X(n,t,e,r,o){if(null==n)return null;const i=R(n,t,e,r,new Float32Array(n.length));return n$1(i,i,o,4),i}function Y(e,r){if(null==e)return 1;const o=W$1(r);return 1/j$2(o,"meters",e)}const $=e$2(),_=e$2(),nn=e$4();

const georeference = /*#__PURE__*/Object.freeze({
	__proto__: null,
	georeference: O,
	georeferenceApplyTransform: T,
	georeferenceByTransform: q,
	project: I,
	ungeoreference: D,
	ungeoreferenceByTransform: E
});

export { D, E$1 as E, I, N$2 as N, O, R, T, _$1 as _, h$1 as a, E as b, georeference as c, g$1 as g, h, j, l, o, q, r, v, w$1 as w, x };

//# sourceMappingURL=georeference-cff4e5a4.js.map