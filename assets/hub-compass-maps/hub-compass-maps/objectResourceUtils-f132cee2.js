import { a as a$m } from './devEnvironmentUtils-fbf66ba6.js';
import { gx as A$6, gy as s$f, my as c$h, mz as i$g, mA as t$o, m as e$n, bL as i$h, c as c$i, ad as r$h, hq as t$p, iu as A$7, l as n$e, it as p$e, gB as l$k, i8 as e$o, h8 as r$i, hd as e$p, ha as _$7, h9 as P$8, a7 as g$d, hf as u$g, a6 as s$h, q as o$s, mB as U$2, ht as O$9, c6 as a$f, s as s$j, _ as n$f, ki as Z$3, cd as tt, ij as n$g, mw as t$t, j as s$k, mC as i$i, D as o$u, f as s$l, R as w$8, S as c$k, t as t$v, ic as n$h, gt as f$e, gD as T$8, T as n$j, lF as s$m, jn as l$l, L as i$j, fp as M$7, fI as i$k, mD as A$8, mE as G$3, he as z$3, h as h$e, hs as h$f, mF as o$w, mG as y$6, mH as n$k, hH as c$l, ik as E$a, mI as H$4, mJ as G$4, hg as n$m, hG as F$2, hE as f$f, mt as i$m, ap as i$n, mK as v$f, mL as e$u, a1 as e$v, hj as r$l, is as r$m, a0 as m$d, a2 as y$8, a3 as a$i, mM as x$7, mN as l$m, mO as m$e, cb as m$f, mP as r$n, hC as a$j, mQ as s$n, hI as f$g, hz as g$e, h7 as x$8, Y as r$o, ae as n$o, mR as j$7, hp as e$w, e as has, fO as S$a, dj as _$b, O as j$8, aF as f$h, kt as r$p, kp as h$h, i9 as P$9, lG as i$p } from './hub-compass-map-f4225e12.js';
import { e as e$s } from './mat3f64-9c2c37f3.js';
import { o as o$t, r as r$j, e as e$r } from './mat4f64-f2ca62fb.js';
import { x as x$6, c as c$m, y as y$7, u as u$i, q as q$3, i as i$l, L as L$6, O as O$b, E as E$c } from './BufferView-c6404bd8.js';
import { r as r$q, n as n$s, u as u$l } from './vec32-71093771.js';
import { l as l$o, n as n$r, o as o$z, a as o$A, j as f$i, k as n$t, u as u$k, t as t$z, m as t$A } from './DefaultMaterial_COLOR_GAMMA-ef833d99.js';
import { t as t$y } from './resourceUtils-2b12439d.js';
import { e as e$y } from './byteSizeEstimations-0e5d227e.js';
import { t as t$x } from './NestedMap-98a772ce.js';
import { t as t$u } from './requestImageUtils-80313990.js';
import { n as n$n, s as s$o } from './Attribute-e96a1dd7.js';
import { t as t$s, u as u$h, N as N$6, a as a$h, D as D$4, i as i$o, n as n$q, e as e$x } from './basicInterfaces-ce8a6401.js';
import { y as y$5, t as t$r } from './Indices-051f6bec.js';
import { s as s$g, H as H$5 } from './InterleavedLayout-da56ceb1.js';
import { c as c$j, s as s$i, _ as _$8 } from './sphere-9c938e4a.js';
import { M as M$6, m as m$c, v as v$e } from './lineSegment-b6a63a68.js';
import { O as O$8 } from './VertexAttribute-0bdc9233.js';
import { t as t$q, o as o$x, r as r$k } from './doublePrecisionUtils-8d2311b1.js';
import { f as f$d, G as G$2, L as L$5, D as D$3, E as E$b, I as I$8, O as O$a, C as C$3, F as F$3, _ as _$a } from './enums-f1bebe6f.js';
import { E as E$9, T as T$7, b as e$q, a as a$g, n as n$p } from './Texture-52798ec4.js';
import { o as o$v, n as n$i, W as W$2, _ as _$9, a as o$y, c as c$o, A as A$9, h as h$g, l as l$n, b as a$k, d as a$l, S as S$9 } from './OrderIndependentTransparency-2a855020.js';
import { S as S$8 } from './quat-d9293bf7.js';
import { e as e$t } from './quatf64-581a0ed6.js';
import { n as n$l } from './vec3f32-77e8c64f.js';
import { t as t$w } from './VertexElementDescriptor-33a64685.js';
import { u as u$j, c as c$n, x as x$9 } from './VertexArrayObject-2a8cdbad.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t$n(n,t=!1){return n<=A$6?t?new Array(n).fill(0):new Array(n):new Float32Array(n)}function e$m(t){return s$f(t)?t.length<A$6?t:new Float32Array(t):t.length<A$6?Array.from(t):t}function a$e(t){return (s$f(t)?t.length:t.byteLength/8)<=A$6?Array.from(t):new Float32Array(t)}function o$r(r,n,t){return Array.isArray(r)?r.slice(n,n+t):r.subarray(n,n+t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function r$g(r){if(null==r)return null;const f=null!=r.offset?r.offset:c$h,l=null!=r.rotation?r.rotation:0,c=null!=r.scale?r.scale:i$g,u=t$o(1,0,0,0,1,0,f[0],f[1],1),i=t$o(Math.cos(l),-Math.sin(l),0,Math.sin(l),Math.cos(l),0,0,0,1),m=t$o(c[0],0,0,0,c[1],0,0,0,1),e=e$n();return i$h(e,i,m),i$h(e,u,e),e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class s$e{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array;}}class t$m{constructor(t,e,r){this.name=t,this.lodThreshold=e,this.pivotOffset=r,this.stageResources=new s$e,this.numberOfVertices=0;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o$q(o){if(o.length<A$6)return Array.from(o);if(s$f(o))return Float64Array.from(o);if(!("BYTES_PER_ELEMENT"in o))return Array.from(o);switch(o.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(o);case 2:return c$i(o)?Uint16Array.from(o):Int16Array.from(o);case 4:return Float32Array.from(o);default:return Float64Array.from(o)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o$p{constructor(i,s,o,c){this.primitiveIndices=i,this._numIndexPerPrimitive=s,this.indices=o,this.position=c,this._children=void 0,s$g(i.length>=1),s$g(o.length%this._numIndexPerPrimitive==0),s$g(o.length>=i.length*this._numIndexPerPrimitive),s$g(3===c.size||4===c.size);const{data:d,size:l}=c,m=i.length;let u=l*o[this._numIndexPerPrimitive*i[0]];a$d.clear(),a$d.push(u);const f=r$h(d[u],d[u+1],d[u+2]),x=t$p(f);for(let t=0;t<m;++t){const s=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){u=l*o[s+i],a$d.push(u);let t=d[u];f[0]=Math.min(t,f[0]),x[0]=Math.max(t,x[0]),t=d[u+1],f[1]=Math.min(t,f[1]),x[1]=Math.max(t,x[1]),t=d[u+2],f[2]=Math.min(t,f[2]),x[2]=Math.max(t,x[2]);}}this.bbMin=f,this.bbMax=x;const P=A$7(n$e(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(x[0]-f[0],x[1]-f[1]),x[2]-f[2]);let v=this.radius*this.radius;for(let t=0;t<a$d.length;++t){u=a$d.at(t);const i=d[u]-P[0],s=d[u+1]-P[1],e=d[u+2]-P[2],n=i*i+s*s+e*e;if(n<=v)continue;const r=Math.sqrt(n),h=.5*(r-this.radius);this.radius=this.radius+h,v=this.radius*this.radius;const o=h/r;P[0]+=i*o,P[1]+=s*o,P[2]+=e*o;}this.center=P,a$d.clear();}getChildren(){if(this._children||p$e(this.bbMin,this.bbMax)<=1)return this._children;const i=A$7(n$e(),this.bbMin,this.bbMax,.5),e=this.primitiveIndices.length,n=new Uint8Array(e),h=new Array(8);for(let t=0;t<8;++t)h[t]=0;const{data:a,size:c}=this.position;for(let t=0;t<e;++t){let s=0;const e=this._numIndexPerPrimitive*this.primitiveIndices[t];let r=c*this.indices[e],o=a[r],d=a[r+1],l=a[r+2];for(let i=1;i<this._numIndexPerPrimitive;++i){r=c*this.indices[e+i];const t=a[r],s=a[r+1],n=a[r+2];t<o&&(o=t),s<d&&(d=s),n<l&&(l=n);}o<i[0]&&(s|=1),d<i[1]&&(s|=2),l<i[2]&&(s|=4),n[t]=s,++h[s];}let d=0;for(let t=0;t<8;++t)h[t]>0&&++d;if(d<2)return;const l=new Array(8);for(let t=0;t<8;++t)l[t]=h[t]>0?new Uint32Array(h[t]):void 0;for(let t=0;t<8;++t)h[t]=0;for(let t=0;t<e;++t){const i=n[t];l[i][h[i]++]=this.primitiveIndices[t];}this._children=new Array;for(let t=0;t<8;++t)void 0!==l[t]&&this._children.push(new o$p(l[t],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){a$d.prune();}}const a$d=new l$k({deallocator:null});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r$f{constructor(){this.id=e$o();}unload(){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var e$l;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT";}(e$l||(e$l={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function j$6(t){return t?{p0:t$p(t.p0),p1:t$p(t.p1),p2:t$p(t.p2)}:{p0:n$e(),p1:n$e(),p2:n$e()}}function h$d(t,n,e){const r=x$5.get();return r.p0=t,r.p1=n,r.p2=e,r}function k$4(t,n=j$6()){return b$8(t.p0,t.p1,t.p2,n)}function b$8(t,e,r,o=j$6()){return r$i(o.p0,t),r$i(o.p1,e),r$i(o.p2,r),o}function l$j(t,n){const p=t.p0,c=t.p1,s=t.p2,i=e$p(c$j.get(),c,p),u=e$p(c$j.get(),s,c),a=e$p(c$j.get(),p,s),j=e$p(c$j.get(),n,p),h=e$p(c$j.get(),n,c),k=e$p(c$j.get(),n,s),b=_$7(i,i,a),l=P$8(_$7(c$j.get(),i,b),j),v=P$8(_$7(c$j.get(),u,b),h),S=P$8(_$7(c$j.get(),a,b),k);if(l>0&&v>0&&S>0){const t=P$8(b,j);return t*t/P$8(b,b)}const d=M$6(m$c(p,i,M$5.get()),n),w=M$6(m$c(c,u,M$5.get()),n),x=M$6(m$c(s,a,M$5.get()),n);return Math.min(d,w,x)}function v$d(t,n,e){const r=1e-5,{direction:o,origin:s}=n,{p0:i,p1:u,p2:a}=t,f=u[0]-i[0],g=u[1]-i[1],m=u[2]-i[2],j=a[0]-i[0],h=a[1]-i[1],k=a[2]-i[2],b=o[1]*k-h*o[2],l=o[2]*j-k*o[0],v=o[0]*h-j*o[1],S=f*b+g*l+m*v;if(S>-r&&S<r)return !1;const d=1/S,w=s[0]-i[0],M=s[1]-i[1],x=s[2]-i[2],O=d*(w*b+M*l+x*v);if(O<0||O>1)return !1;const V=M*m-g*x,q=x*f-m*w,y=w*g-f*M,z=d*(o[0]*V+o[1]*q+o[2]*y);if(z<0||O+z>1)return !1;if(e){g$d(e,o,d*(j*V+h*q+k*y)),u$g(e,s,e);}return !0}function S$7(t,n,e){const r=n[0]-t[0],o=n[1]-t[1],p=e[0]-t[0],c=e[1]-t[1];return .5*Math.abs(r*c-o*p)}function d$f(t){return S$7(t.p0,t.p1,t.p2)}function w$7(t,n,o){return e$p(O$7,n,t),e$p(V$4,o,t),s$h(_$7(O$7,O$7,V$4))/2}const M$5=new s$i(v$e),x$5=new s$i((()=>j$6())),O$7=n$e(),V$4=n$e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function c$g(r,o,c){if(!r||!o)return !1;const{size:a,data:f}=r;o$s(c,0,0,0),o$s(g$c,0,0,0);let m=0,h=0;for(let p=0;p<o.length-2;p+=3){const r=o[p]*a,j=o[p+1]*a,d=o[p+2]*a;o$s(i$f,f[r],f[r+1],f[r+2]),o$s(u$f,f[j],f[j+1],f[j+2]),o$s(l$i,f[d],f[d+1],f[d+2]);const z=w$7(i$f,u$f,l$i);z?(u$g(i$f,i$f,u$f),u$g(i$f,i$f,l$i),g$d(i$f,i$f,1/3*z),u$g(c,c,i$f),m+=z):(u$g(g$c,g$c,i$f),u$g(g$c,g$c,u$f),u$g(g$c,g$c,l$i),h+=3);}return (0!==h||0!==m)&&(0!==m?(g$d(c,c,1/m),!0):0!==h&&(g$d(c,g$c,1/h),!0))}function a$c(n,r,o){if(!n||!r)return !1;const{size:s,data:c}=n;o$s(o,0,0,0);let a=-1,f=0;for(let t=0;t<r.length;t++){const n=r[t]*s;a!==n&&(o[0]+=c[n],o[1]+=c[n+1],o[2]+=c[n+2],f++),a=n;}return f>1&&g$d(o,o,1/f),f>0}function f$c(o,s,c,a){if(!o)return !1;o$s(a,0,0,0),o$s(g$c,0,0,0);let f=0,l=0;const{size:m,data:h}=o,p=s?s.length-1:h.length/m-1,j=p+(c?2:0);for(let t=0;t<j;t+=2){const o=t<p?t:p,c=t<p?t+1:0,j=(s?s[o]:o)*m,d=(s?s[c]:c)*m;i$f[0]=h[j],i$f[1]=h[j+1],i$f[2]=h[j+2],u$f[0]=h[d],u$f[1]=h[d+1],u$f[2]=h[d+2],g$d(i$f,u$g(i$f,i$f,u$f),.5);const z=U$2(i$f,u$f);z>0?(u$g(a,a,g$d(i$f,i$f,z)),f+=z):0===f&&(u$g(g$c,g$c,i$f),l++);}return 0!==f?(g$d(a,a,1/f),!0):0!==l&&(g$d(a,g$c,1/l),!0)}const i$f=n$e(),u$f=n$e(),l$i=n$e(),g$c=n$e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r$e{constructor(r){this.channel=r,this.id=e$o();}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n$d(t,e){return null==t&&(t=[]),t.push(e),t}function r$d(t,e){if(null==t)return null;const n=t.filter((t=>t!==e));return 0===n.length?null:n}function s$d(t,n,r,s,u){l$h[0]=t.get(n,0),l$h[1]=t.get(n,1),l$h[2]=t.get(n,2),t$q(l$h,o$o,3),r.set(u,0,o$o[0]),s.set(u,0,o$o[1]),r.set(u,1,o$o[2]),s.set(u,1,o$o[3]),r.set(u,2,o$o[4]),s.set(u,2,o$o[5]);}const l$h=n$e(),o$o=new Float32Array(6);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class b$7 extends r$f{constructor(t,e,i=[],r=null,o=e$l.Mesh,h=null,a=-1){super(),this.material=t,this.mapPositions=r,this.type=o,this.objectAndLayerIdColor=h,this.edgeIndicesLength=a,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[s,n]of e)n&&this._vertexAttributes.set(s,{...n});if(null==i||0===i.length){const t=p$d(this._vertexAttributes),e=y$5(t);this.edgeIndicesLength=this.edgeIndicesLength<0?t:this.edgeIndicesLength;for(const i of this._vertexAttributes.keys())this._indices.set(i,e);}else for(const[s,u]of i)u&&(this._indices.set(s,t$r(u)),s===O$8.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(s).length:this.edgeIndicesLength));}instantiate(t={}){const e=new b$7(t.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach(((t,i)=>{t.exclusive=!1,e._vertexAttributes.set(i,t);})),this._indices.forEach(((t,i)=>e._indices.set(i,t))),e._boundingInfo=this._boundingInfo,e.transformation=t.transformation||this.transformation,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){let e=this._vertexAttributes.get(t);return e&&!e.exclusive&&(e={...e,exclusive:!0,data:o$q(e.data)},this._vertexAttributes.set(t,e)),e}setAttributeData(t,e){const i=this._vertexAttributes.get(t);i&&this._vertexAttributes.set(t,{...i,exclusive:!0,data:e});}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return !!(this.type===e$l.Mesh?this._computeAttachmentOriginTriangles(t):this.type===e$l.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(null!=this._transformation&&O$9(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){const e=this.indices.get(O$8.POSITION),i=this.vertexAttributes.get(O$8.POSITION);return c$g(i,e,t)}_computeAttachmentOriginLines(t){const e=this.vertexAttributes.get(O$8.POSITION),i=this.indices.get(O$8.POSITION);return f$c(e,i,i&&v$c(this.material.parameters,e,i),t)}_computeAttachmentOriginPoints(t){const e=this.indices.get(O$8.POSITION),i=this.vertexAttributes.get(O$8.POSITION);return a$c(i,e,t)}invalidateBoundingInfo(){this._boundingInfo=null;}_calculateBoundingInfo(){const t=this.indices.get(O$8.POSITION),e=this.vertexAttributes.get(O$8.POSITION);if(!t||0===t.length||!e)return null;const i=this.type===e$l.Mesh?3:1;s$g(t.length%i==0,"Indexing error: "+t.length+" not divisible by "+i);const n=y$5(t.length/i);return new o$p(n,i,t,e)}get transformation(){return this._transformation??o$t}set transformation(i){this._transformation=i&&i!==o$t?r$j(i):null;}get shaderTransformation(){return null!=this._shaderTransformer?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(t){this._shaderTransformer=t;}get hasVolatileTransformation(){return null!=this._shaderTransformer}addHighlight(){const t=new r$e(t$s.Highlight);return this.highlights=n$d(this.highlights,t),t}removeHighlight(t){this.highlights=r$d(this.highlights,t);}}function p$d(t){const e=t.values().next().value;return null==e?0:e.data.length/e.size}function v$c(t,e,i){return !(!("isClosed"in t)||!t.isClosed)&&(i?i.length>2:e.data.length>6)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t$l(){if(null==s$c){const t=t=>a$f(`esri/libs/basisu/${t}`);s$c=import('./basis_transcoder-ce500323.js').then((e=>e.b)).then((({default:e})=>e({locateFile:t}).then((e=>(e.initializeBasis(),delete e.then,e)))));}return s$c}let s$c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var _$6;!function(_){_[_.ETC1_RGB=0]="ETC1_RGB",_[_.ETC2_RGBA=1]="ETC2_RGBA",_[_.BC1_RGB=2]="BC1_RGB",_[_.BC3_RGBA=3]="BC3_RGBA",_[_.BC4_R=4]="BC4_R",_[_.BC5_RG=5]="BC5_RG",_[_.BC7_M6_RGB=6]="BC7_M6_RGB",_[_.BC7_M5_RGBA=7]="BC7_M5_RGBA",_[_.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",_[_.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",_[_.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",_[_.ATC_RGB=11]="ATC_RGB",_[_.ATC_RGBA=12]="ATC_RGBA",_[_.FXT1_RGB=17]="FXT1_RGB",_[_.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",_[_.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",_[_.ETC2_EAC_R11=20]="ETC2_EAC_R11",_[_.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",_[_.RGBA32=13]="RGBA32",_[_.RGB565=14]="RGB565",_[_.BGR565=15]="BGR565",_[_.RGBA4444=16]="RGBA4444";}(_$6||(_$6={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let l$g=null,o$n=null;async function g$b(){return null==o$n&&(o$n=t$l(),l$g=await o$n),o$n}function u$e(e,t){if(null==l$g)return e.byteLength;const n=new l$g.BasisFile(new Uint8Array(e)),s=E$8(n)?m$b(n.getNumLevels(0),n.getHasAlpha(),n.getImageWidth(0,0),n.getImageHeight(0,0),t):0;return n.close(),n.delete(),s}function c$f(e,t){if(null==l$g)return e.byteLength;const n=new l$g.KTX2File(new Uint8Array(e)),s=T$6(n)?m$b(n.getLevels(),n.getHasAlpha(),n.getWidth(),n.getHeight(),t):0;return n.close(),n.delete(),s}function m$b(e,t,s,r,i){const l=E$9(t?f$d.COMPRESSED_RGBA8_ETC2_EAC:f$d.COMPRESSED_RGB8_ETC2),o=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(s*r*l*o)}function E$8(e){return e.getNumImages()>=1&&!e.isUASTC()}function T$6(e){return e.getFaces()>=1&&e.isETC1S()}async function h$c(e,t,n){null==l$g&&(l$g=await g$b());const s=new l$g.BasisFile(new Uint8Array(n));if(!E$8(s))return null;s.startTranscoding();const r=p$c(e,t,s.getNumLevels(0),s.getHasAlpha(),s.getImageWidth(0,0),s.getImageHeight(0,0),((e,t)=>s.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>s.transcodeImage(n,0,e,t,0,0)));return s.close(),s.delete(),r}async function _$5(e,t,n){null==l$g&&(l$g=await g$b());const s=new l$g.KTX2File(new Uint8Array(n));if(!T$6(s))return null;s.startTranscoding();const r=p$c(e,t,s.getLevels(),s.getHasAlpha(),s.getWidth(),s.getHeight(),((e,t)=>s.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>s.transcodeImage(n,e,0,0,t,0,-1,-1)));return s.close(),s.delete(),r}function p$c(e,a,l,o,g,u,c,m){const{compressedTextureETC:E,compressedTextureS3TC:T}=e.capabilities,[h,_]=E?o?[_$6.ETC2_RGBA,f$d.COMPRESSED_RGBA8_ETC2_EAC]:[_$6.ETC1_RGB,f$d.COMPRESSED_RGB8_ETC2]:T?o?[_$6.BC3_RGBA,f$d.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[_$6.BC1_RGB,f$d.COMPRESSED_RGB_S3TC_DXT1_EXT]:[_$6.RGBA32,G$2.RGBA],p=a.hasMipmap?l:Math.min(1,l),A=[];for(let t=0;t<p;t++)A.push(new Uint8Array(c(t,h))),m(t,h,A[t]);return a.internalFormat=_,a.hasMipmap=A.length>1,a.samplingMode=a.hasMipmap?L$5.LINEAR_MIPMAP_LINEAR:L$5.LINEAR,a.width=g,a.height=u,new T$7(e,a,{type:"compressed",levels:A})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const o$m=s$j.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),a$b=542327876,i$e=131072,l$f=4;function s$b(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function u$d(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const c$e=s$b("DXT1"),h$b=s$b("DXT3"),m$a=s$b("DXT5"),d$e=31,p$b=0,g$a=1,D$2=2,C$2=3,f$b=4,w$6=7,T$5=20,_$4=21;function E$7(e,r,o){const a=S$6(o,r.hasMipmap??!1);if(null==a)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:l,width:s,height:u}=a;return r.samplingMode=i.levels.length>1?L$5.LINEAR_MIPMAP_LINEAR:L$5.LINEAR,r.hasMipmap=i.levels.length>1,r.internalFormat=l,r.width=s,r.height=u,new T$7(e,r,i)}function S$6(e,t){const n=new Int32Array(e,0,d$e);if(n[p$b]!==a$b)return o$m.error("Invalid magic number in DDS header"),null;if(!(n[T$5]&l$f))return o$m.error("Unsupported format, must contain a FourCC code"),null;const s=n[_$4];let E,S;switch(s){case c$e:E=8,S=f$d.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case h$b:E=16,S=f$d.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case m$a:E=16,S=f$d.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return o$m.error("Unsupported FourCC code:",u$d(s)),null}let A=1,M=n[f$b],x=n[C$2];0==(3&M)&&0==(3&x)||(o$m.warn("Rounding up compressed texture size to nearest multiple of 4."),M=M+3&-4,x=x+3&-4);const R=M,X=x;let b,I;n[D$2]&i$e&&!1!==t&&(A=Math.max(1,n[w$6]));let v=n[g$a]+4;const F=[];for(let r=0;r<A;++r)I=(M+3>>2)*(x+3>>2)*E,b=new Uint8Array(e,v,I),F.push(b),v+=I,M=Math.max(1,M>>1),x=Math.max(1,x>>1);return {textureData:{type:"compressed",levels:F},internalFormat:S,width:R,height:X}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class w$5 extends r$f{constructor(t,r){super(),this._data=t,this.type=e$l.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new n$f,this.parameters=r||{},this.parameters.mipmap=!1!==this.parameters.mipmap,this.parameters.noUnpackFlip=this.parameters.noUnpackFlip||!1,this.parameters.preMultiplyAlpha=this.parameters.preMultiplyAlpha||!1,this.parameters.wrap=this.parameters.wrap||{s:D$3.REPEAT,t:D$3.REPEAT},this._startPreload(t);}_startPreload(t){null!=t&&(t instanceof HTMLVideoElement?this._startPreloadVideoElement(t):t instanceof HTMLImageElement&&this._startPreloadImageElement(t));}_startPreloadVideoElement(t){if(!(Z$3(t.src)||"auto"===t.preload&&t.crossOrigin)){t.preload="auto",t.crossOrigin="anonymous";const e=!t.paused;if(t.src=t.src,e&&t.autoplay){const e=()=>{t.removeEventListener("canplay",e),t.play();};t.addEventListener("canplay",e);}}}_startPreloadImageElement(t){tt(t.src)||Z$3(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src);}dispose(){this._data=void 0;}_createDescriptor(t){const e=new e$q;return e.wrapMode=this.parameters.wrap??D$3.REPEAT,e.flipped=!this.parameters.noUnpackFlip,e.samplingMode=this.parameters.mipmap?L$5.LINEAR_MIPMAP_LINEAR:L$5.LINEAR,e.hasMipmap=!!this.parameters.mipmap,e.preMultiplyAlpha=!!this.parameters.preMultiplyAlpha,e.maxAnisotropy=this.parameters.maxAnisotropy??(this.parameters.mipmap?t.parameters.maxMaxAnisotropy:1),e}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.gpuMemoryUsage||H$3(this._data,this.parameters)}load(t){if(null!=this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const e=this._data;return null==e?(this._glTexture=new T$7(t,this._createDescriptor(t),null),this._glTexture):"string"==typeof e?this._loadFromURL(t,e):e instanceof Image?this._loadFromImageElement(t,e):e instanceof HTMLVideoElement?this._loadFromVideoElement(t,e):e instanceof ImageData||e instanceof HTMLCanvasElement?this._loadFromImage(t,e):(n$g(e)||t$t(e))&&this.parameters.encoding===u$h.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(t,e)):(n$g(e)||t$t(e))&&this.parameters.encoding===u$h.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(t,e)):(n$g(e)||t$t(e))&&this.parameters.encoding===u$h.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(t,e)):t$t(e)?this._loadFromPixelData(t,e):n$g(e)?this._loadFromPixelData(t,new Uint8Array(e)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(t){return this._data instanceof HTMLVideoElement&&null!=this._glTexture?this._data.readyState<C$1.HAVE_CURRENT_DATA||t===this._data.currentTime?t:(this._glTexture.setData(this._data),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.parameters.updateCallback&&this.parameters.updateCallback(),this._data.currentTime):t}_loadFromDDSData(t,e){return this._glTexture=E$7(t,this._createDescriptor(t),e),this._glTexture}_loadFromKTX2(t,e){return this._loadAsync((()=>_$5(t,this._createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}_loadFromBasis(t,e){return this._loadAsync((()=>h$c(t,this._createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}_loadFromPixelData(t,e){s$g(this.parameters.width>0&&this.parameters.height>0);const r=this._createDescriptor(t);return r.pixelFormat=1===this.parameters.components?G$2.LUMINANCE:3===this.parameters.components?G$2.RGB:G$2.RGBA,r.width=this.parameters.width??0,r.height=this.parameters.height??0,this._glTexture=new T$7(t,r,e),this._glTexture}_loadFromURL(t,e){return this._loadAsync((async r=>{const a=await t$u(e,{signal:r});return s$k(r),this._loadFromImage(t,a)}))}_loadFromImageElement(t,e){return e.complete?this._loadFromImage(t,e):this._loadAsync((async r=>{const a=await i$i(e,e.src,!1,r);return s$k(r),this._loadFromImage(t,a)}))}_loadFromVideoElement(t,e){return e.readyState>=C$1.HAVE_CURRENT_DATA?this._loadFromImage(t,e):this._loadFromVideoElementAsync(t,e)}_loadFromVideoElementAsync(e,r){return this._loadAsync((s=>new Promise(((n,l)=>{const m=()=>{r.removeEventListener("loadeddata",h),r.removeEventListener("error",p),o$u(d);},h=()=>{r.readyState>=C$1.HAVE_CURRENT_DATA&&(m(),n(this._loadFromImage(e,r)));},p=e=>{m(),l(e||new s$l("Failed to load video"));};r.addEventListener("loadeddata",h),r.addEventListener("error",p);const d=w$8(s,(()=>p(c$k())));}))))}_loadFromImage(t,e){const r=N$5(e);this.parameters.width=r.width,this.parameters.height=r.height;const a=this._createDescriptor(t);return a.pixelFormat=3===this.parameters.components?G$2.RGB:G$2.RGBA,a.width=r.width,a.height=r.height,this._glTexture=new T$7(t,a,e),this._glTexture}_loadAsync(t){const e=new AbortController;this._loadingController=e;const r=t(e.signal);this._loadingPromise=r;const a=()=>{this._loadingController===e&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null);};return r.then(a,a),r}unload(){if(this._glTexture=t$v(this._glTexture),null!=this._loadingController){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort();}this.events.emit("unloaded");}}function H$3(t,e){if(null==t)return 0;if(n$g(t)||t$t(t))return e.encoding===u$h.KTX2_ENCODING?c$f(t,!!e.mipmap):e.encoding===u$h.BASIS_ENCODING?u$e(t,!!e.mipmap):t.byteLength;const{width:r,height:a}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?N$5(t):e;return (e.mipmap?4/3:1)*r*a*(e.components||4)||0}function N$5(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}var C$1;!function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";}(C$1||(C$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var h$a;!function(h){h[h.Color=0]="Color",h[h.Depth=1]="Depth",h[h.Normal=2]="Normal",h[h.Shadow=3]="Shadow",h[h.ShadowHighlight=4]="ShadowHighlight",h[h.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",h[h.Highlight=6]="Highlight",h[h.Alpha=7]="Alpha",h[h.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",h[h.COUNT=9]="COUNT";}(h$a||(h$a={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t$k(t,s){switch(s.normalType){case a$a.Compressed:t.attributes.add(O$8.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(o$v`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case a$a.Attribute:t.attributes.add(O$8.NORMAL,"vec3"),t.vertex.code.add(o$v`vec3 normalModel() {
return normal;
}`);break;case a$a.ScreenDerivative:t.fragment.code.add(o$v`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:n$h(s.normalType);case a$a.COUNT:case a$a.Ground:}}var a$a;!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT";}(a$a||(a$a={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e$k(e,o){const n=e.fragment;switch(n.code.add(o$v`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case i$d.None:n.code.add(o$v`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i$d.View:n.code.add(o$v`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i$d.WindingOrder:n.code.add(o$v`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:n$h(o.doubleSidedMode);case i$d.COUNT:}}var i$d;!function(a){a[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT";}(i$d||(i$d={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var d$d;function o$l(o,v){switch(v.textureCoordinateType){case d$d.Default:return o.attributes.add(O$8.UV0,"vec2"),o.varyings.add("vuv0","vec2"),void o.vertex.code.add(o$v`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case d$d.Compressed:return o.attributes.add(O$8.UV0,"vec2"),o.varyings.add("vuv0","vec2"),void o.vertex.code.add(o$v`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case d$d.Atlas:return o.attributes.add(O$8.UV0,"vec2"),o.varyings.add("vuv0","vec2"),o.attributes.add(O$8.UVREGION,"vec4"),o.varyings.add("vuvRegion","vec4"),void o.vertex.code.add(o$v`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:n$h(v.textureCoordinateType);case d$d.None:return void o.vertex.code.add(o$v`void forwardTextureCoordinates() {}`);case d$d.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT";}(d$d||(d$d={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e$j(e){e.fragment.code.add(o$v`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function s$a(s,a){switch(s.include(o$l,a),a.textureCoordinateType){case d$d.Default:case d$d.Compressed:return void s.fragment.code.add(o$v`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case d$d.Atlas:return s.include(e$j),void s.fragment.code.add(o$v`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:n$h(a.textureCoordinateType);case d$d.None:case d$d.COUNT:return}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var a$9;!function(a){a[a.Pass=0]="Pass",a[a.Draw=1]="Draw";}(a$9||(a$9={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class i$c{constructor(i,s,t,r,a=null){this.name=i,this.type=s,this.arraySize=a,this.bind={[a$9.Pass]:null,[a$9.Draw]:null},null!=t&&null!=r&&(this.bind[t]=r);}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o$k extends i$c{constructor(r,o){super(r,"vec3",a$9.Draw,((e,s,t,i)=>e.setUniform3fv(r,o(s,t,i))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e$i extends i$c{constructor(r,e){super(r,"vec3",a$9.Pass,((s,o,t)=>s.setUniform3fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class s$9 extends i$c{constructor(r,s){super(r,"sampler2D",a$9.Draw,((e,o,t)=>e.bindTexture(r,s(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class s$8 extends i$c{constructor(r,s){super(r,"sampler2D",a$9.Pass,((e,o,t)=>e.bindTexture(r,s(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t$j{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output;}dispose(){this._techniqueRepository.release(this._technique);}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(t){return N$6.LOADED}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r$c extends t$j{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textureRepository=t.textureRep,this._textureId=t.textureId,this._acquire(t.textureId,(t=>this._texture=t)),this._acquire(t.normalTextureId,(t=>this._textureNormal=t)),this._acquire(t.emissiveTextureId,(t=>this._textureEmissive=t)),this._acquire(t.occlusionTextureId,(t=>this._textureOcclusion=t)),this._acquire(t.metallicRoughnessTextureId,(t=>this._textureMetallicRoughness=t));}dispose(){this._texture=f$e(this._texture),this._textureNormal=f$e(this._textureNormal),this._textureEmissive=f$e(this._textureEmissive),this._textureOcclusion=f$e(this._textureOcclusion),this._textureMetallicRoughness=f$e(this._textureMetallicRoughness),this._disposed=!0;}ensureResources(t){return 0===this._numLoading?N$6.LOADED:N$6.LOADING}get textureBindParameters(){return new l$e(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=f$e(this._texture),this._textureId=e,this._acquire(this._textureId,(t=>this._texture=t)));}_acquire(s,i){if(null==s)return void i(null);const u=this._textureRepository.acquire(s);if(T$8(u))return ++this._numLoading,void u.then((e=>{if(this._disposed)return f$e(e),void i(null);i(e);})).finally((()=>--this._numLoading));i(u);}}class l$e extends n$i{constructor(t=null,e=null,s=null,i=null,u=null){super(),this.texture=t,this.textureNormal=e,this.textureEmissive=s,this.textureOcclusion=i,this.textureMetallicRoughness=u;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var c$d;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Terrain=5]="Terrain",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT";}(c$d||(c$d={}));class u$c extends l$e{}function l$d(n,u){const l=n.fragment,m=u.hasMetallicRoughnessTexture||u.hasEmissionTexture||u.hasOcclusionTexture;if(u.pbrMode===c$d.Normal&&m&&n.include(s$a,u),u.pbrMode!==c$d.Schematic)if(u.pbrMode!==c$d.Disabled){if(u.pbrMode===c$d.Normal){l.code.add(o$v`vec3 mrr;
vec3 emission;
float occlusion;`);const e=u.pbrTextureBindType;u.hasMetallicRoughnessTexture&&(l.uniforms.add(e===a$9.Pass?new s$8("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new s$9("texMetallicRoughness",(e=>e.textureMetallicRoughness))),l.code.add(o$v`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),u.hasEmissionTexture&&(l.uniforms.add(e===a$9.Pass?new s$8("texEmission",(e=>e.textureEmissive)):new s$9("texEmission",(e=>e.textureEmissive))),l.code.add(o$v`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),u.hasOcclusionTexture?(l.uniforms.add(e===a$9.Pass?new s$8("texOcclusion",(e=>e.textureOcclusion)):new s$9("texOcclusion",(e=>e.textureOcclusion))),l.code.add(o$v`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):l.code.add(o$v`float getBakedOcclusion() { return 1.0; }`),e===a$9.Pass?l.uniforms.add(new e$i("emissionFactor",(e=>e.emissiveFactor)),new e$i("mrrFactors",(e=>e.mrrFactors))):l.uniforms.add(new o$k("emissionFactor",(e=>e.emissiveFactor)),new o$k("mrrFactors",(e=>e.mrrFactors))),l.code.add(o$v`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${u.hasMetallicRoughnessTexture?o$v`applyMetallnessAndRoughness(${u.hasMetallicRoughnessTextureTransform?o$v`metallicRoughnessUV`:"vuv0"});`:""}

      ${u.hasEmissionTexture?o$v`applyEmission(${u.hasEmissiveTextureTransform?o$v`emissiveUV`:"vuv0"});`:""}

      ${u.hasOcclusionTexture?o$v`applyOcclusion(${u.hasOcclusionTextureTransform?o$v`occlusionUV`:"vuv0"});`:""}
    }
  `);}}else l.code.add(o$v`float getBakedOcclusion() { return 1.0; }`);else l.code.add(o$v`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e$h{constructor(){this.enabled=!0,this._time=n$j(0);}get time(){return this._time}advance({deltaTime:e,fixedTime:i}){return null!=i?this._time!==i&&(this._time=i,!0):(this._time=n$j(this._time+e),0!==e)}}class i$b{constructor(t,e){this.deltaTime=t,this.fixedTime=e;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const E$6=new Map([[O$8.POSITION,0],[O$8.NORMAL,1],[O$8.NORMALCOMPRESSED,1],[O$8.UV0,2],[O$8.COLOR,3],[O$8.COLORFEATUREATTRIBUTE,3],[O$8.SIZE,4],[O$8.TANGENT,4],[O$8.AUXPOS1,5],[O$8.SYMBOLCOLOR,5],[O$8.AUXPOS2,6],[O$8.FEATUREATTRIBUTE,6],[O$8.INSTANCEFEATUREATTRIBUTE,6],[O$8.INSTANCECOLOR,7],[O$8.OBJECTANDLAYERIDCOLOR,7],[O$8.INSTANCEOBJECTANDLAYERIDCOLOR,7],[O$8.MODEL,8],[O$8.MODELNORMAL,12],[O$8.MODELORIGINHI,11],[O$8.MODELORIGINLO,15]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function r$b(e,t){return new p$a(e,h$9,t)}function n$c(e,t){const{curvatureDependent:a,scaleStart:i,scaleFallOffRange:r}=h$9;return new p$a(e,{curvatureDependent:{min:{curvature:a.min.curvature,tiltAngle:a.min.tiltAngle,scaleFallOffFactor:v$b.curvatureDependent.min.scaleFallOffFactor},max:{curvature:a.max.curvature,tiltAngle:a.max.tiltAngle,scaleFallOffFactor:v$b.curvatureDependent.max.scaleFallOffFactor}},scaleStart:i,scaleFallOffRange:r,minPixelSize:v$b.minPixelSize},t)}function l$c(e){return Math.abs(e*e*e)}function s$7(e,t,a){const i=a.parameters,r=a.paddingPixelsOverride;return x$4.scale=Math.min(i.divisor/(t-i.offset),1),x$4.factor=l$c(e),x$4.minPixelSize=i.minPixelSize,x$4.paddingPixels=r,x$4}function c$c(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function o$j(t,a){return Math.max(s$m(t*a.scale,t,a.factor),c$c(t,a))}function u$b(e,t,a){const i=s$7(e,t,a);return i.minPixelSize=0,i.paddingPixels=0,o$j(1,i)}function d$c(e,t,a,i){i.scale=u$b(e,t,a),i.factor=0,i.minPixelSize=a.parameters.minPixelSize,i.paddingPixels=a.paddingPixelsOverride;}function f$a(e,t,a=[0,0]){const i=Math.min(Math.max(t.scale,c$c(e[1],t)/Math.max(1e-5,e[1])),1);return a[0]=e[0]*i,a[1]=e[1]*i,a}function m$9(e,t,a,i){return o$j(e,s$7(t,a,i))}class p$a{get paddingPixelsOverride(){return this._paddingPixelsOverride||this.parameters.paddingPixels}constructor(e,t,a,r=g$9(),n){this._viewingMode=e,this._description=t,this._ellipsoidRadius=a,this.parameters=r,this._paddingPixelsOverride=n,this._viewingMode===l$l.Local?(this._coverageCompensation=this._surfaceCoverageCompensationLocal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersLocal):(this._coverageCompensation=this._surfaceCoverageCompensationGlobal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersGlobal);}update(e){return (!this.parameters||this.parameters.camera.fovY!==e.fovY||this.parameters.camera.distance!==e.distance)&&(this._calculateParameters(e,this._ellipsoidRadius,this.parameters),!0)}overridePadding(e){return e!==this.paddingPixelsOverride?new p$a(this._viewingMode,this._description,this._ellipsoidRadius,this.parameters,e):this}_calculateParameters(e,t,a){const{scaleStart:i,scaleFallOffRange:r,minPixelSize:n}=this._description,{fovY:l,distance:s}=e,c=this._calculateCurvatureDependentParameters(e,t),o=this._coverageCompensation(e,t,c),{tiltAngle:u,scaleFallOffFactor:d}=c,f=Math.sin(u)*s,m=.5*Math.PI-u-l*(.5-i*o),p=f/Math.cos(m),h=m+l*r*o,v=(p-d*(f/Math.cos(h)))/(1-d);return a.camera.fovY=e.fovY,a.camera.distance=e.distance,a.offset=v,a.divisor=p-v,a.minPixelSize=n,a}_calculateCurvatureDependentParametersLocal(e,t,a=P$7){return a.tiltAngle=this._description.curvatureDependent.min.tiltAngle,a.scaleFallOffFactor=this._description.curvatureDependent.min.scaleFallOffFactor,a}_calculateCurvatureDependentParametersGlobal(t,i,r=P$7){const n=this._description.curvatureDependent,l=1+t.distance/i,s=Math.sqrt(l*l-1),[c,o]=[n.min.curvature,n.max.curvature],u=i$j((s-c)/(o-c),0,1),[d,f]=[n.min,n.max];return r.tiltAngle=s$m(d.tiltAngle,f.tiltAngle,u),r.scaleFallOffFactor=s$m(d.scaleFallOffFactor,f.scaleFallOffFactor,u),r}_surfaceCoverageCompensationLocal(e,t,a){return (e.fovY-a.tiltAngle)/e.fovY}_surfaceCoverageCompensationGlobal(e,t,a){const i=t*t,r=a.tiltAngle+.5*Math.PI,{fovY:n,distance:l}=e,s=l*l+i-2*Math.cos(r)*l*t,c=Math.sqrt(s),o=Math.sqrt(s-i);return (Math.acos(o/c)-Math.asin(t/(c/Math.sin(r)))+.5*n)/n}}const h$9={curvatureDependent:{min:{curvature:M$7(10),tiltAngle:M$7(12),scaleFallOffFactor:.5},max:{curvature:M$7(70),tiltAngle:M$7(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},v$b={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};function g$9(){return {camera:{distance:0,fovY:0},divisor:0,offset:0,minPixelSize:0,paddingPixels:0}}const x$4={scale:0,factor:0,minPixelSize:0,paddingPixels:0},P$7={tiltAngle:0,scaleFallOffFactor:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const p$9=i$k();function h$8(t,n,e,o,i,r){if(t.visible)if(t.boundingInfo){s$g(t.type===e$l.Mesh);const s=n.tolerance;x$3(t.boundingInfo,e,o,s,i,r);}else {const n=t.indices.get(O$8.POSITION),s=t.vertexAttributes.get(O$8.POSITION);g$8(e,o,0,n.length/3,n,s,void 0,i,r);}}const b$6=n$e();function x$3(t,n,e,o,i,r){if(null==t)return;const s=T$4(n,e,b$6);if(A$8(p$9,t.bbMin),G$3(p$9,t.bbMax),null!=i&&i.applyToAabb(p$9),I$7(p$9,n,s,o)){const{primitiveIndices:s,indices:c,position:l}=t,f=s?s.length:c.length/3;if(f>S$5){const s=t.getChildren();if(void 0!==s){for(const t of s)x$3(t,n,e,o,i,r);return}}g$8(n,e,0,f,c,l,s,i,r);}}const d$b=n$e();function g$8(t,n,e,o,i,r,s,c,l){if(s)return M$4(t,n,e,o,i,r,s,c,l);const{data:f,stride:u}=r,a=t[0],m=t[1],p=t[2],h=n[0]-a,b=n[1]-m,x=n[2]-p;for(let g=e,M=3*e;g<o;++g){let t=u*i[M++],n=f[t++],e=f[t++],o=f[t];t=u*i[M++];let r=f[t++],s=f[t++],y=f[t];t=u*i[M++];let j=f[t++],T=f[t++],I=f[t];null!=c&&([n,e,o]=c.applyToVertex(n,e,o,g),[r,s,y]=c.applyToVertex(r,s,y,g),[j,T,I]=c.applyToVertex(j,T,I,g));const O=r-n,V=s-e,L=y-o,N=j-n,A=T-e,P=I-o,S=b*P-A*x,E=x*N-P*h,U=h*A-N*b,W=O*S+V*E+L*U;if(Math.abs(W)<=Number.EPSILON)continue;const k=a-n,B=m-e,C=p-o,z=k*S+B*E+C*U;if(W>0){if(z<0||z>W)continue}else if(z>0||z<W)continue;const H=B*L-V*C,R=C*O-L*k,Y=k*V-O*B,q=h*H+b*R+x*Y;if(W>0){if(q<0||z+q>W)continue}else if(q>0||z+q<W)continue;const w=(N*H+A*R+P*Y)/W;if(w>=0){l(w,v$a(O,V,L,N,A,P,d$b),g,!1);}}}function M$4(t,n,e,o,i,r,s,c,l){const{data:f,stride:u}=r,a=t[0],m=t[1],p=t[2],h=n[0]-a,b=n[1]-m,x=n[2]-p;for(let g=e;g<o;++g){const t=s[g];let n=3*t,e=u*i[n++],o=f[e++],r=f[e++],M=f[e];e=u*i[n++];let y=f[e++],j=f[e++],T=f[e];e=u*i[n];let I=f[e++],O=f[e++],V=f[e];null!=c&&([o,r,M]=c.applyToVertex(o,r,M,g),[y,j,T]=c.applyToVertex(y,j,T,g),[I,O,V]=c.applyToVertex(I,O,V,g));const L=y-o,N=j-r,A=T-M,P=I-o,S=O-r,E=V-M,U=b*E-S*x,W=x*P-E*h,k=h*S-P*b,B=L*U+N*W+A*k;if(Math.abs(B)<=Number.EPSILON)continue;const C=a-o,z=m-r,H=p-M,R=C*U+z*W+H*k;if(B>0){if(R<0||R>B)continue}else if(R>0||R<B)continue;const Y=z*A-N*H,q=H*L-A*C,w=C*N-L*z,D=h*Y+b*q+x*w;if(B>0){if(D<0||R+D>B)continue}else if(D>0||R+D<B)continue;const F=(P*Y+S*q+E*w)/B;if(F>=0){l(F,v$a(L,N,A,P,S,E,d$b),t,!1);}}}const y$4=n$e(),j$5=n$e();function v$a(t,n,r,s,c,l,f){return o$s(y$4,t,n,r),o$s(j$5,s,c,l),_$7(f,y$4,j$5),z$3(f,f),f}function T$4(t,n,o){return o$s(o,1/(n[0]-t[0]),1/(n[1]-t[1]),1/(n[2]-t[2]))}function I$7(t,n,e,o){return O$6(t,n,e,o,1/0)}function O$6(t,n,e,o,i){const r=(t[0]-o-n[0])*e[0],s=(t[3]+o-n[0])*e[0];let c=Math.min(r,s),l=Math.max(r,s);const f=(t[1]-o-n[1])*e[1],u=(t[4]+o-n[1])*e[1];if(l=Math.min(l,Math.max(f,u)),l<0)return !1;if(c=Math.max(c,Math.min(f,u)),c>l)return !1;const a=(t[2]-o-n[2])*e[2],m=(t[5]+o-n[2])*e[2];return l=Math.min(l,Math.max(a,m)),!(l<0)&&(c=Math.max(c,Math.min(a,m)),!(c>l)&&c<i)}function V$3(t,e,o,i,r){let s=(o.screenLength||0)*t.pixelRatio;null!=r&&(s=m$9(s,i,e,r));const c=s*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return i$j(c*e,o.minWorldLength||0,null!=o.maxWorldLength?o.maxWorldLength:1/0)}function L$4(t,n){const e=n?L$4(n):{};for(const o in t){let n=t[o];n&&n.forEach&&(n=A$5(n)),null==n&&o in e||(e[o]=n);}return e}function N$4(n,e){let o=!1;for(const i in e){const r=e[i];void 0!==r&&(Array.isArray(r)?null===n[i]?(n[i]=r.slice(),o=!0):h$e(n[i],r)&&(o=!0):n[i]!==r&&(o=!0,n[i]=r));}return o}function A$5(t){const n=[];return t.forEach((t=>n.push(t))),n}const P$6={multiply:1,ignore:2,replace:3,tint:4},S$5=1e3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class d$a extends r$f{constructor(t,r){super(),this.type=e$l.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=E$6,this._pp0=r$h(0,0,1),this._pp1=r$h(0,0,0),this._parameters=L$4(t,r),this.validateParameters(this._parameters);}dispose(){}get parameters(){return this._parameters}update(e){return !1}setParameters(e,t=!0){N$4(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged());}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged());}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return !0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged());}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged());}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){null!=this.repository&&this.repository.materialChanged(this);}intersectDraped(e,t,r,s,i,a){return this._pp0[0]=this._pp1[0]=s[0],this._pp0[1]=this._pp1[1]=s[1],this.intersect(e,t,r,this._pp0,this._pp1,i)}}class h$7 extends i$b{constructor(e,t,r){super(t,r),this.camera=e;}}var o$i;!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque";}(o$i||(o$i={}));class c$b extends n$i{constructor(){super(...arguments),this.renderOccluded=o$i.Occlude;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var E$5;!function(E){E[E.INTEGRATED_MESH=0]="INTEGRATED_MESH",E[E.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",E[E.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",E[E.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",E[E.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",E[E.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",E[E.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",E[E.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",E[E.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",E[E.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",E[E.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",E[E.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",E[E.LASERLINES=12]="LASERLINES",E[E.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",E[E.HUD_MATERIAL=14]="HUD_MATERIAL",E[E.LABEL_MATERIAL=15]="LABEL_MATERIAL",E[E.LINE_CALLOUTS=16]="LINE_CALLOUTS",E[E.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",E[E.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",E[E.DRAPED_WATER=19]="DRAPED_WATER",E[E.VOXEL=20]="VOXEL",E[E.MAX_SLOTS=21]="MAX_SLOTS";}(E$5||(E$5={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class p$8{constructor(){this._transform=e$r(),this._transformInverse=new u$a({value:this._transform},h$f,e$r),this._transformInverseTranspose=new u$a(this._transformInverse,o$w,e$r),this._transformTranspose=new u$a({value:this._transform},o$w,e$r),this._transformInverseRotation=new u$a({value:this._transform},y$6,e$s);}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate();}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){n$k(this._transform,t);}multiplyTransform(t){c$l(this._transform,this._transform,t);}set(t){n$k(this._transform,t),this._invalidateLazyTransforms();}setAndInvalidateLazyTransforms(t,s){this.setTransformMatrix(t),this.multiplyTransform(s),this._invalidateLazyTransforms();}}class u$a{constructor(t,s,e){this._original=t,this._update=s,this._dirty=!0,this._transform=e();}invalidate(){this._dirty=!0;}get value(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}}class M$3{constructor(t=0){this.offset=t,this.tmpVertex=n$e();}applyToVertex(t,s,e){const i=t+this.localOrigin[0],r=s+this.localOrigin[1],a=e+this.localOrigin[2],o=this.offset/Math.sqrt(i*i+r*r+a*a);return this.tmpVertex[0]=t+i*o,this.tmpVertex[1]=s+r*o,this.tmpVertex[2]=e+a*o,this.tmpVertex}applyToAabb(t){for(let r=0;r<3;++r)v$9[r]=t[0+r]+this.localOrigin[r],O$5[r]=t[3+r]+this.localOrigin[r],z$2[r]=v$9[r];const s=this.applyToVertex(v$9[0],v$9[1],v$9[2]);for(let r=0;r<3;++r)t[r]=s[r],t[r+3]=s[r];const e=s=>{const e=this.applyToVertex(s[0],s[1],s[2]);for(let i=0;i<3;++i)t[i]=Math.min(t[i],e[i]),t[i+3]=Math.max(t[i+3],e[i]);};for(let r=1;r<8;++r){for(let t=0;t<3;++t)z$2[t]=0==(r&1<<t)?v$9[t]:O$5[t];e(z$2);}let i=0;for(let r=0;r<3;++r){v$9[r]*O$5[r]<0&&(i|=1<<r);}if(0!==i&&7!==i)for(let r=0;r<8;++r)if(0==(i&r)){for(let t=0;t<3;++t)z$2[t]=0!=(i&1<<t)?0:0!=(r&1<<t)?v$9[t]:O$5[t];e(z$2);}for(let r=0;r<3;++r)t[r]-=this.localOrigin[r],t[r+3]-=this.localOrigin[r];return t}}const v$9=n$e(),O$5=n$e(),z$2=n$e();class T$3{constructor(t=0){this.componentLocalOriginLength=0,this._tmpVertex=n$e(),this._mbs=_$8(),this._obb={center:n$e(),halfSize:n$l(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(t);}_resetOffset(t){this._offset=t,this._totalOffset=t;}set offset(t){this._resetOffset(t);}get offset(){return this._offset}set componentOffset(t){this._totalOffset=this._offset+t;}set localOrigin(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);}applyToVertex(t,s,e){const i=t,r=s,a=e+this.componentLocalOriginLength,o=this._totalOffset/Math.sqrt(i*i+r*r+a*a);return this._tmpVertex[0]=t+i*o,this._tmpVertex[1]=s+r*o,this._tmpVertex[2]=e+a*o,this._tmpVertex}applyToAabb(t){const s=t[0],e=t[1],i=t[2]+this.componentLocalOriginLength,r=t[3],a=t[4],o=t[5]+this.componentLocalOriginLength,h=s*r<0?0:Math.min(Math.abs(s),Math.abs(r)),n=e*a<0?0:Math.min(Math.abs(e),Math.abs(a)),f=i*o<0?0:Math.min(Math.abs(i),Math.abs(o)),l=Math.sqrt(h*h+n*n+f*f);if(l<this._totalOffset)return t[0]-=s<0?this._totalOffset:0,t[1]-=e<0?this._totalOffset:0,t[2]-=i<0?this._totalOffset:0,t[3]+=r>0?this._totalOffset:0,t[4]+=a>0?this._totalOffset:0,t[5]+=o>0?this._totalOffset:0,t;const _=Math.max(Math.abs(s),Math.abs(r)),m=Math.max(Math.abs(e),Math.abs(a)),b=Math.max(Math.abs(i),Math.abs(o)),c=Math.sqrt(_*_+m*m+b*b),p=this._totalOffset/c,u=this._totalOffset/l;return t[0]+=s*(s>0?p:u),t[1]+=e*(e>0?p:u),t[2]+=i*(i>0?p:u),t[3]+=r*(r<0?p:u),t[4]+=a*(a<0?p:u),t[5]+=o*(o<0?p:u),t}applyToMbs(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),e=this._totalOffset/s;return this._mbs[0]=t[0]+t[0]*e,this._mbs[1]=t[1]+t[1]*e,this._mbs[2]=t[2]+t[2]*e,this._mbs[3]=t[3]+t[3]*this._totalOffset/s,this._mbs}applyToObb(t){const s=t.center,e=this._totalOffset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this._obb.center[0]=s[0]+s[0]*e,this._obb.center[1]=s[1]+s[1]*e,this._obb.center[2]=s[2]+s[2]*e,E$a(this._obb.halfSize,t.halfSize,t.quaternion),u$g(this._obb.halfSize,this._obb.halfSize,t.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,e$p(this._obb.halfSize,this._obb.halfSize,t.center),S$8(j$4,t.quaternion),E$a(this._obb.halfSize,this._obb.halfSize,j$4),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=t.quaternion,this._obb}}class g$7{constructor(t=0){this.offset=t,this.sphere=_$8(),this.tmpVertex=n$e();}applyToVertex(t,s,e){const i=this.objectTransform.transform;let r=i[0]*t+i[4]*s+i[8]*e+i[12],a=i[1]*t+i[5]*s+i[9]*e+i[13],o=i[2]*t+i[6]*s+i[10]*e+i[14];const h=this.offset/Math.sqrt(r*r+a*a+o*o);r+=r*h,a+=a*h,o+=o*h;const n=this.objectTransform.inverse;return this.tmpVertex[0]=n[0]*r+n[4]*a+n[8]*o+n[12],this.tmpVertex[1]=n[1]*r+n[5]*a+n[9]*o+n[13],this.tmpVertex[2]=n[2]*r+n[6]*a+n[10]*o+n[14],this.tmpVertex}applyToMinMax(t,s){const e=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*e,t[1]+=t[1]*e,t[2]+=t[2]*e;const i=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]+=s[0]*i,s[1]+=s[1]*i,s[2]+=s[2]*i;}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const e=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*e,t[4]+=t[4]*e,t[5]+=t[5]*e,t}applyToBoundingSphere(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),e=this.offset/s;return this.sphere[0]=t[0]+t[0]*e,this.sphere[1]=t[1]+t[1]*e,this.sphere[2]=t[2]+t[2]*e,this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}}const x$2=new g$7;function S$4(t){return null!=t?(x$2.offset=t,x$2):null}const q$2=new T$3;function y$3(t){return null!=t?(q$2.offset=t,q$2):null}const V$2=new M$3;function d$9(t){return null!=t?(V$2.offset=t,V$2):null}const L$3="terrain",j$4=e$t();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function d$8(e,t,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=e.length;if(o*=n,1===r)for(let c=0;c<i;++c)s[o]=t[e[c]],o+=n;else for(let c=0;c<i;++c){const f=t[e[c]];for(let e=0;e<r;e++)s[o]=f,o+=n;}}function u$9(e,t,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=e.length;o*=s;for(let i=0;i<n;++i){const f=2*e[i];r[o]=t[f],r[o+1]=t[f+1],o+=s;}}function a$8(e,t,f,o,r){const s=f.typedBuffer,n=f.typedBufferStride,i=e.length;if(o*=n,null==r||1===r)for(let c=0;c<i;++c){const f=3*e[c];s[o]=t[f],s[o+1]=t[f+1],s[o+2]=t[f+2],o+=n;}else for(let c=0;c<i;++c){const f=3*e[c];for(let e=0;e<r;++e)s[o]=t[f],s[o+1]=t[f+1],s[o+2]=t[f+2],o+=n;}}function p$7(e,t,f,o,r=1){const s=f.typedBuffer,n=f.typedBufferStride,i=e.length;if(o*=n,1===r)for(let c=0;c<i;++c){const f=4*e[c];s[o]=t[f],s[o+1]=t[f+1],s[o+2]=t[f+2],s[o+3]=t[f+3],o+=n;}else for(let c=0;c<i;++c){const f=4*e[c];for(let e=0;e<r;++e)s[o]=t[f],s[o+1]=t[f+1],s[o+2]=t[f+2],s[o+3]=t[f+3],o+=n;}}function y$2(e,t,f){const o=e.typedBuffer,r=e.typedBufferStride;t*=r;for(let s=0;s<f;++s)o[t]=0,o[t+1]=0,o[t+2]=0,o[t+3]=0,t+=r;}function B$3(e,t,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=e.length;o*=s;for(let i=0;i<n;++i){const f=9*e[i];for(let e=0;e<9;++e)r[o+e]=t[f+e];o+=s;}}function g$6(e,t,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=e.length;o*=s;for(let i=0;i<n;++i){const f=16*e[i];for(let e=0;e<16;++e)r[o+e]=t[f+e];o+=s;}}function b$5(t,f,o,r,s,n=1){if(!o)return void a$8(t,f,r,s,n);const i=r.typedBuffer,c=r.typedBufferStride,l=t.length,d=o[0],u=o[1],p=o[2],y=o[4],B=o[5],g=o[6],b=o[8],O=o[9],h=o[10],N=o[12],S=o[13],R=o[14];s*=c;let A=0,E=0,L=0;const z=H$4(o)?e=>{A=f[e]+N,E=f[e+1]+S,L=f[e+2]+R;}:e=>{const t=f[e],o=f[e+1],r=f[e+2];A=d*t+y*o+b*r+N,E=u*t+B*o+O*r+S,L=p*t+g*o+h*r+R;};if(1===n)for(let e=0;e<l;++e)z(3*t[e]),i[s]=A,i[s+1]=E,i[s+2]=L,s+=c;else for(let e=0;e<l;++e){z(3*t[e]);for(let e=0;e<n;++e)i[s]=A,i[s+1]=E,i[s+2]=L,s+=c;}}function O$4(f,o,r,s,n,i=1){if(!r)return void a$8(f,o,s,n,i);const c=r,l=s.typedBuffer,d=s.typedBufferStride,u=f.length,p=c[0],y=c[1],B=c[2],g=c[4],b=c[5],O=c[6],h=c[8],N=c[9],S=c[10],R=!G$4(c),A=1e-6,E=1-A;n*=d;let L=0,z=0,F=0;const v=H$4(c)?e=>{L=o[e],z=o[e+1],F=o[e+2];}:e=>{const t=o[e],f=o[e+1],r=o[e+2];L=p*t+g*f+h*r,z=y*t+b*f+N*r,F=B*t+O*f+S*r;};if(1===i)if(R)for(let e=0;e<u;++e){v(3*f[e]);const t=L*L+z*z+F*F;if(t<E&&t>A){const e=1/Math.sqrt(t);l[n]=L*e,l[n+1]=z*e,l[n+2]=F*e;}else l[n]=L,l[n+1]=z,l[n+2]=F;n+=d;}else for(let e=0;e<u;++e)v(3*f[e]),l[n]=L,l[n+1]=z,l[n+2]=F,n+=d;else for(let e=0;e<u;++e){if(v(3*f[e]),R){const e=L*L+z*z+F*F;if(e<E&&e>A){const t=1/Math.sqrt(e);L*=t,z*=t,F*=t;}}for(let e=0;e<i;++e)l[n]=L,l[n+1]=z,l[n+2]=F,n+=d;}}function h$6(e,f,o,r,s,n=1){if(!o)return void p$7(e,f,r,s,n);const i=o,c=r.typedBuffer,l=r.typedBufferStride,d=e.length,u=i[0],a=i[1],y=i[2],B=i[4],g=i[5],b=i[6],O=i[8],h=i[9],N=i[10],S=!G$4(i),R=1e-6,A=1-R;if(s*=l,1===n)for(let t=0;t<d;++t){const o=4*e[t],r=f[o],n=f[o+1],i=f[o+2],d=f[o+3];let p=u*r+B*n+O*i,E=a*r+g*n+h*i,L=y*r+b*n+N*i;if(S){const e=p*p+E*E+L*L;if(e<A&&e>R){const t=1/Math.sqrt(e);p*=t,E*=t,L*=t;}}c[s]=p,c[s+1]=E,c[s+2]=L,c[s+3]=d,s+=l;}else for(let t=0;t<d;++t){const o=4*e[t],r=f[o],i=f[o+1],d=f[o+2],p=f[o+3];let E=u*r+B*i+O*d,L=a*r+g*i+h*d,z=y*r+b*i+N*d;if(S){const e=E*E+L*L+z*z;if(e<A&&e>R){const t=1/Math.sqrt(e);E*=t,L*=t,z*=t;}}for(let e=0;e<n;++e)c[s]=E,c[s+1]=L,c[s+2]=z,c[s+3]=p,s+=l;}}function N$3(e,t,f,o,r,s=1){const n=o.typedBuffer,i=o.typedBufferStride,c=e.length;if(r*=i,f!==t.length||4!==f)if(1!==s)if(4!==f)for(let l=0;l<c;++l){const f=3*e[l];for(let e=0;e<s;++e)n[r]=t[f],n[r+1]=t[f+1],n[r+2]=t[f+2],n[r+3]=255,r+=i;}else for(let l=0;l<c;++l){const f=4*e[l];for(let e=0;e<s;++e)n[r]=t[f],n[r+1]=t[f+1],n[r+2]=t[f+2],n[r+3]=t[f+3],r+=i;}else {if(4===f){for(let f=0;f<c;++f){const o=4*e[f];n[r]=t[o],n[r+1]=t[o+1],n[r+2]=t[o+2],n[r+3]=t[o+3],r+=i;}return}for(let f=0;f<c;++f){const o=3*e[f];n[r]=t[o],n[r+1]=t[o+1],n[r+2]=t[o+2],n[r+3]=255,r+=i;}}else {n[r]=t[0],n[r+1]=t[1],n[r+2]=t[2],n[r+3]=t[3];const e=new Uint32Array(o.typedBuffer.buffer,o.start),f=i/4,l=e[r/=4];r+=f;const d=c*s;for(let t=1;t<d;++t)e[r]=l,r+=f;}}function S$3(e,t,f,o){const r=f.typedBuffer,s=f.typedBufferStride,n=e.length,i=t[0];o*=s;for(let c=0;c<n;++c)r[o]=i,o+=s;}function R$2(e,t,f,o,r=1){const s=t.typedBuffer,n=t.typedBufferStride;if(o*=n,1===r)for(let i=0;i<f;++i)s[o]=e[0],s[o+1]=e[1],s[o+2]=e[2],s[o+3]=e[3],o+=n;else for(let i=0;i<f;++i)for(let t=0;t<r;++t)s[o]=e[0],s[o+1]=e[1],s[o+2]=e[2],s[o+3]=e[3],o+=n;}function A$4(e,t,o,r,s,n){for(const i of t.fields.keys()){const t=e.vertexAttributes.get(i),d=e.indices.get(i);if(t&&d)E$4(i,t,d,o,r,s,n);else if(i===O$8.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.indices.get(O$8.POSITION);if(s$g(!!t,`No buffer view for ${i}`),t){const o=t.length,r=s.getField(i,x$6);R$2(e.objectAndLayerIdColor,r,o,n);}}}}function E$4(e,t,d,a,y,B,g){switch(e){case O$8.POSITION:{s$g(3===t.size);const f=B.getField(e,i$l);s$g(!!f,`No buffer view for ${e}`),f&&b$5(d,t.data,a,f,g);break}case O$8.NORMAL:{s$g(3===t.size);const f=B.getField(e,i$l);s$g(!!f,`No buffer view for ${e}`),f&&O$4(d,t.data,y,f,g);break}case O$8.NORMALCOMPRESSED:{s$g(2===t.size);const f=B.getField(e,q$3);s$g(!!f,`No buffer view for ${e}`),f&&u$9(d,t.data,f,g);break}case O$8.UV0:{s$g(2===t.size);const f=B.getField(e,u$i);s$g(!!f,`No buffer view for ${e}`),f&&u$9(d,t.data,f,g);break}case O$8.COLOR:case O$8.SYMBOLCOLOR:{const o=B.getField(e,x$6);s$g(!!o,`No buffer view for ${e}`),s$g(3===t.size||4===t.size),!o||3!==t.size&&4!==t.size||N$3(d,t.data,t.size,o,g);break}case O$8.COLORFEATUREATTRIBUTE:{const f=B.getField(e,y$7);s$g(!!f,`No buffer view for ${e}`),s$g(1===t.size),f&&1===t.size&&S$3(d,t.data,f,g);break}case O$8.TANGENT:{s$g(4===t.size);const f=B.getField(e,c$m);s$g(!!f,`No buffer view for ${e}`),f&&h$6(d,t.data,y,f,g);break}case O$8.PROFILERIGHT:case O$8.PROFILEUP:case O$8.PROFILEVERTEXANDNORMAL:case O$8.FEATUREVALUE:{s$g(4===t.size);const f=B.getField(e,c$m);s$g(!!f,`No buffer view for ${e}`),f&&p$7(d,t.data,f,g);}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r$a{constructor(t){this.vertexBufferLayout=t;}elementCount(e){return e.indices.get(O$8.POSITION).length}write(t,r,i,o,s){A$4(i,this.vertexBufferLayout,t,r,o,s);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o$h(o){o.attributes.add(O$8.POSITION,"vec3"),o.vertex.code.add(o$v`vec3 positionModel() { return position; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function c$a({code:c},i){i.doublePrecisionRequiresObfuscation?c.add(o$v`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):c.add(o$v`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o$g extends i$c{constructor(r,o){super(r,"mat3",a$9.Draw,((e,s,t)=>e.setUniformMatrix3fv(r,o(s,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e$g extends i$c{constructor(r,e){super(r,"mat3",a$9.Pass,((s,o,t)=>s.setUniformMatrix3fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e$f extends i$c{constructor(r,e){super(r,"mat4",a$9.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function v$8(r,o){r.include(o$h);const e=r.vertex;e.include(c$a,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),e.uniforms.add(new e$i("transformWorldFromViewTH",(r=>r.transformWorldFromViewTH)),new e$i("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL)),new e$g("transformViewFromCameraRelativeRS",(r=>r.transformViewFromCameraRelativeRS)),new e$f("transformProjFromView",(r=>r.transformProjFromView)),new o$g("transformWorldFromModelRS",(r=>r.transformWorldFromModelRS)),new o$k("transformWorldFromModelTH",(r=>r.transformWorldFromModelTH)),new o$k("transformWorldFromModelTL",(r=>r.transformWorldFromModelTL))),e.code.add(o$v`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),e.code.add(o$v`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o.spherical?o$v`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:o$v`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new e$i("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL))),e.code.add(o$v`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add(o$v`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);}class F$1 extends n$i{constructor(){super(...arguments),this.transformWorldFromViewTH=n$e(),this.transformWorldFromViewTL=n$e(),this.transformViewFromCameraRelativeRS=e$s(),this.transformProjFromView=e$r();}}class W$1 extends n$i{constructor(){super(...arguments),this.transformWorldFromModelRS=e$s(),this.transformWorldFromModelTH=n$e(),this.transformWorldFromModelTL=n$e();}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function c$9(o,a){switch(a.normalType){case a$a.Attribute:case a$a.Compressed:o.include(t$k,a),o.varyings.add("vNormalWorld","vec3"),o.varyings.add("vNormalView","vec3"),o.vertex.uniforms.add(new o$g("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new e$g("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))),o.vertex.code.add(o$v`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a$a.Ground:o.include(v$8,a),o.varyings.add("vNormalWorld","vec3"),o.vertex.code.add(o$v`
        void forwardNormal() {
          vNormalWorld = ${a.spherical?o$v`normalize(vPositionWorldCameraRelative);`:o$v`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case a$a.ScreenDerivative:o.vertex.code.add(o$v`void forwardNormal() {}`);break;default:n$h(a.normalType);case a$a.COUNT:}}class f$9 extends F$1{constructor(){super(...arguments),this.transformNormalViewFromGlobal=e$s();}}class v$7 extends W$1{constructor(){super(...arguments),this.transformNormalGlobalFromModel=e$s(),this.toMapSpace=n$m();}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const o$f=.1,t$i=.001;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t$h{constructor(t,o){this._module=t,this._loadModule=o;}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e$e{constructor(i,t,e){this.release=e,this.initializeConfiguration(i,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(i),this._pipeline=this.initializePipeline(i.rctx.capabilities);}destroy(){this._program=t$v(this._program),this._pipeline=this._configuration=null;}reload(t){t$v(this._program),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t.rctx.capabilities);}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(i,t=null,e){i.setPipelineState(this.getPipelineState(t,e));}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i);}get primitiveType(){return E$b.TRIANGLES}getPipelineState(i,t){return this._pipeline}initializeConfiguration(i,t){}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class i$a{constructor(i,s,o){this._context=i,this._locations=o,this._textures=new Map,this._freeTextureUnits=new l$k({deallocator:null}),this._glProgram=i.programCache.acquire(s.generate("vertex"),s.generate("fragment"),o),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=s.generateBind(a$9.Pass,this),this.bindDraw=s.generateBind(a$9.Draw,this),this._fragmentUniforms=a$g()?s.fragmentUniforms:null;}dispose(){this._glProgram.dispose();}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(t,e){this._glProgram.setUniform1i(t,e?1:0);}setUniform1i(t,e){this._glProgram.setUniform1i(t,e);}setUniform1f(t,e){this._glProgram.setUniform1f(t,e);}setUniform2fv(t,e){this._glProgram.setUniform2fv(t,e);}setUniform3fv(t,e){this._glProgram.setUniform3fv(t,e);}setUniform4fv(t,e){this._glProgram.setUniform4fv(t,e);}setUniformMatrix3fv(t,e){this._glProgram.setUniformMatrix3fv(t,e);}setUniformMatrix4fv(t,e){this._glProgram.setUniformMatrix4fv(t,e);}setUniform1fv(t,e){this._glProgram.setUniform1fv(t,e);}setUniform1iv(t,e){this._glProgram.setUniform1iv(t,e);}setUniform2iv(t,e){this._glProgram.setUniform3iv(t,e);}setUniform3iv(t,e){this._glProgram.setUniform3iv(t,e);}setUniform4iv(t,e){this._glProgram.setUniform4iv(t,e);}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible");}stop(){this._textures.clear(),this._freeTextureUnits.clear();}bindTexture(t,e){if(null==e||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((t,e)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(e,t.unit);})),null!=this._fragmentUniforms&&this._fragmentUniforms.forEach((t=>{"sampler2D"!==t.type&&"samplerCube"!==t.type||this._textures.has(t.name)||console.error(`Texture sampler ${t.name} has no bound texture`);}));}_allocTextureUnit(t){return {texture:t,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const i$9={func:I$8.LESS},s$6={func:I$8.ALWAYS},e$d={mask:255},l$b={mask:0},t$g=a=>({function:{func:I$8.NOTEQUAL,ref:a,mask:a},operation:{fail:O$a.KEEP,zFail:O$a.KEEP,zPass:O$a.KEEP}}),u$8=a=>({function:{func:I$8.ALWAYS,ref:a,mask:a},operation:{fail:O$a.KEEP,zFail:O$a.KEEP,zPass:O$a.REPLACE}}),f$8={function:{func:I$8.ALWAYS,ref:a$h.OutlineVisualElementMask,mask:a$h.OutlineVisualElementMask},operation:{fail:O$a.KEEP,zFail:O$a.KEEP,zPass:O$a.ZERO}},o$e={function:{func:I$8.ALWAYS,ref:a$h.OutlineVisualElementMask,mask:a$h.OutlineVisualElementMask},operation:{fail:O$a.KEEP,zFail:O$a.KEEP,zPass:O$a.REPLACE}},P$5={function:{func:I$8.EQUAL,ref:a$h.OutlineVisualElementMask,mask:a$h.OutlineVisualElementMask},operation:{fail:O$a.KEEP,zFail:O$a.KEEP,zPass:O$a.KEEP}},m$8={function:{func:I$8.NOTEQUAL,ref:a$h.OutlineVisualElementMask,mask:a$h.OutlineVisualElementMask},operation:{fail:O$a.KEEP,zFail:O$a.KEEP,zPass:O$a.KEEP}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function u$7({normalTexture:u,metallicRoughnessTexture:n,metallicFactor:r,roughnessFactor:s,emissiveTexture:o,emissiveFactor:t,occlusionTexture:c}){return null==u&&null==n&&null==o&&(null==t||F$2(t,f$f))&&null==c&&(null==s||1===s)&&(null==r||1===r||0===r)}const n$b=[1,1,.5],r$9=[0,.6,.2],s$5=[0,1,.2];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e$c extends i$c{constructor(r,e){super(r,"vec2",a$9.Pass,((s,o,t)=>s.setUniform2fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t$f(e){e.varyings.add("linearDepth","float");}function i$8(e){e.vertex.uniforms.add(new e$c("nearFar",((e,r)=>r.camera.nearFar)));}function n$a(e){e.vertex.code.add(o$v`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`);}function d$7(a,d){const{vertex:s}=a;switch(d.output){case h$a.Color:if(d.receiveShadows)return t$f(a),void s.code.add(o$v`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case h$a.Depth:case h$a.Shadow:case h$a.ShadowHighlight:case h$a.ShadowExcludeHighlight:return a.include(v$8,d),t$f(a),i$8(a),n$a(a),void s.code.add(o$v`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}s.code.add(o$v`void forwardLinearDepth() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e$b(e){e.vertex.code.add(o$v`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class u$6 extends n$i{constructor(e){super(),this.slicePlaneLocalOrigin=e;}}function _$3(e,s){h$5(e,s,new e$i("slicePlaneOrigin",((e,i)=>g$5(s,e,i))),new e$i("slicePlaneBasis1",((e,i)=>I$6(s,e,i,i.slicePlane?.basis1))),new e$i("slicePlaneBasis2",((e,i)=>I$6(s,e,i,i.slicePlane?.basis2))));}function P$4(e,s){h$5(e,s,new o$k("slicePlaneOrigin",((e,i)=>g$5(s,e,i))),new o$k("slicePlaneBasis1",((e,i)=>I$6(s,e,i,i.slicePlane?.basis1))),new o$k("slicePlaneBasis2",((e,i)=>I$6(s,e,i,i.slicePlane?.basis2))));}function h$5(e,s,...i){if(!s.hasSlicePlane){const i=o$v`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return s.hasSliceInVertexProgram&&e.vertex.code.add(i),void e.fragment.code.add(i)}s.hasSliceInVertexProgram&&e.vertex.uniforms.add(...i),e.fragment.uniforms.add(...i);const a=o$v`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,l=o$v`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,c=s.hasSliceHighlight?o$v`
        ${l}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:o$v`#define highlightSlice(_color_, _pos_) (_color_)`;s.hasSliceInVertexProgram&&e.vertex.code.add(a),e.fragment.code.add(a),e.fragment.code.add(c);}function p$6(e,s,i){return e.instancedDoublePrecision?o$s(b$4,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):s.slicePlaneLocalOrigin}function m$7(e,s){return null!=e?e$p(v$6,s.origin,e):s.origin}function H$2(s,i,a){return s.hasSliceTranslatedView?null!=i?i$m(S$2,a.camera.viewMatrix,i):a.camera.viewMatrix:null}function g$5(e,s,a){if(null==a.slicePlane)return f$f;const l=p$6(e,s,a),c=m$7(l,a.slicePlane),r=H$2(e,l,a);return null!=r?O$9(v$6,c,r):c}function I$6(e,s,c,r){if(null==r||null==c.slicePlane)return f$f;const t=p$6(e,s,c),n=m$7(t,c.slicePlane),f=H$2(e,t,c);return null!=f?(u$g(B$2,r,n),O$9(v$6,n,f),O$9(B$2,B$2,f),e$p(B$2,B$2,v$6)):r}const b$4=n$e(),v$6=n$e(),B$2=n$e(),S$2=e$r();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o$d(o){n$a(o),o.vertex.code.add(o$v`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),o.vertex.code.add(o$v`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var O$3,o$c,E$3,A$3,r$8;!function(O){O[O.INNER=0]="INNER",O[O.OUTER=1]="OUTER";}(O$3||(O$3={})),function(O){O[O.REGULAR=0]="REGULAR",O[O.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",O[O.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",O[O.HAS_BOTH_POLES=3]="HAS_BOTH_POLES";}(o$c||(o$c={})),function(O){O[O.OFF=0]="OFF",O[O.ON=1]="ON";}(E$3||(E$3={})),function(O){O[O.Color=0]="Color",O[O.ColorNoRasterImage=1]="ColorNoRasterImage",O[O.Highlight=2]="Highlight",O[O.Water=3]="Water",O[O.Occluded=4]="Occluded",O[O.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor";}(A$3||(A$3={})),function(O){O[O.FADING=0]="FADING",O[O.IMMEDIATE=1]="IMMEDIATE",O[O.UNFADED=2]="UNFADED";}(r$8||(r$8={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t$e{constructor(s,t){this.vec3=s,this.id=t;}}function c$8(c,r,n,o){return new t$e(r$h(c,r,n),o)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var n$9;!function(e){e[e.None=0]="None",e[e.ColorAndWater=1]="ColorAndWater",e[e.Highlight=2]="Highlight",e[e.Occluded=3]="Occluded",e[e.ObjectAndLayerIdColor=4]="ObjectAndLayerIdColor";}(n$9||(n$9={}));const h$4=1.3;class g$4{get extent(){return this._extent}constructor(t,r){this.index=t,this.renderTargets=r,this._extent=i$n(),this.resolution=0,this.renderLocalOrigin=c$8(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new l$a,this.hasDrapedFeatureSource=!1,this.hasDrapedRasterSource=!1,this.hasTargetWithoutRasterImage=!1,this.index=t,this.validTargets=new Array(r.renderTargets.length).fill(!1);}getValidTexture(e){return this.validTargets[e]?this.renderTargets.getTarget(e).getTexture():null}get _needsColorWithoutRasterImage(){return this.hasDrapedRasterSource&&this.hasDrapedFeatureSource&&this.hasTargetWithoutRasterImage}getColorTexture(e){const t=e===n$9.ColorAndWater?this.renderTargets.getTarget(A$3.Color):e===n$9.Highlight?this.renderTargets.getTarget(A$3.Highlight):e===n$9.ObjectAndLayerIdColor?this.renderTargets.getTarget(A$3.ObjectAndLayerIdColor):this.renderTargets.getTarget(A$3.Occluded);return t?t.getTexture():null}getColorTextureNoRasterImage(){return this._needsColorWithoutRasterImage?this.getValidTexture(A$3.ColorNoRasterImage):this.hasDrapedFeatureSource?this.getValidTexture(A$3.Color):null}getNormalTexture(e){const t=e===n$9.ColorAndWater?this.renderTargets.getTarget(A$3.Water):null;return t?t.getTexture():null}draw(e,t){const r=this.computeRenderTargetValidityBitfield();for(const i of this.renderTargets.renderTargets)i.type!==A$3.ColorNoRasterImage||this._needsColorWithoutRasterImage?this.validTargets[i.type]=e.drawTarget(this,i,t):this.validTargets[i.type]=!1;return r^this.computeRenderTargetValidityBitfield()?D$4.CHANGED:D$4.UNCHANGED}computeRenderTargetValidityBitfield(){const e=this.validTargets;return +e[A$3.Color]|+e[A$3.ColorNoRasterImage]<<1|+e[A$3.Highlight]<<2|+e[A$3.Water]<<3|+e[A$3.Occluded]<<4}setupGeometryViewsCyclical(e){this.setupGeometryViewsDirect();const r=.001*e.range;if(this._extent[0]-r<=e.min){const r=this.canvasGeometries.extents[this.canvasGeometries.numViews++];v$f(this._extent,e.range,0,r);}if(this._extent[2]+r>=e.max){const r=this.canvasGeometries.extents[this.canvasGeometries.numViews++];v$f(this._extent,-e.range,0,r);}}setupGeometryViewsDirect(){this.canvasGeometries.numViews=1,e$u(this.canvasGeometries.extents[0],this._extent);}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const t=this.canvasGeometries.extents[e];if(t[0]!==t[2]&&t[1]!==t[3])return !0}return !1}applyViewport(e){e.setViewport(this.index===O$3.INNER?0:this.resolution,0,this.resolution,this.resolution);}}class l$a{constructor(){this.extents=[i$n(),i$n(),i$n()],this.numViews=0;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o$b extends i$c{constructor(r,o){super(r,"float",a$9.Pass,((s,e,t)=>s.setUniform1f(r,o(e,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o$a extends i$c{constructor(r,o){super(r,"mat4",a$9.Draw,((e,s,t)=>e.setUniformMatrix4fv(r,o(s,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function f$7(r,a){a.instancedDoublePrecision?r.constants.add("cameraPosition","vec3",f$f):r.uniforms.add(new o$k("cameraPosition",((r,a)=>o$s(w$4,a.camera.viewInverseTransposeMatrix[3]-r.origin[0],a.camera.viewInverseTransposeMatrix[7]-r.origin[1],a.camera.viewInverseTransposeMatrix[11]-r.origin[2]))));}function p$5(a,i){if(!i.instancedDoublePrecision)return void a.uniforms.add(new e$f("proj",((r,a)=>a.camera.projectionMatrix)),new o$a("view",((a,e)=>i$m(v$5,e.camera.viewMatrix,a.origin))),new o$k("localOrigin",(r=>r.origin)));const o=r=>o$s(w$4,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]);a.uniforms.add(new e$f("proj",((r,a)=>a.camera.projectionMatrix)),new e$f("view",((a,e)=>i$m(v$5,e.camera.viewMatrix,o(e)))),new e$i("localOrigin",((r,a)=>o(a))));}const v$5=e$r(),w$4=n$e();function u$5(r){r.uniforms.add(new e$f("viewNormal",((r,a)=>a.camera.viewInverseTransposeMatrix)));}function l$9(r,a){r.uniforms.add(new o$b("pixelRatio",((r,e)=>e.camera.pixelRatio/(a.draped?h$4:1))));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t$d extends n$i{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[]);}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function r$7(e={}){return (t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else {const s=t._parameterNames.length-1,a=e.count||2,i=Math.ceil(Math.log2(a)),o=t._parameterBits??[0];let h=0;for(;o[h]+i>16;)h++,h>=o.length&&o.push(0);t._parameterBits=o;const n=o[h],m=(1<<i)-1<<n;o[h]+=i,Object.defineProperty(t,r,{get(){return this[s]},set(e){if(this[s]!==e&&(this[s]=e,this._keyDirty=!0,this._parameterBits[h]=this._parameterBits[h]&~m|+e<<n&m,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}});}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class v$4 extends t$d{constructor(){super(...arguments),this.instancedDoublePrecision=!1;}}function p$4(e,i){i.instanced&&i.instancedDoublePrecision&&(e.attributes.add(O$8.MODELORIGINHI,"vec3"),e.attributes.add(O$8.MODELORIGINLO,"vec3"),e.attributes.add(O$8.MODEL,"mat3"),e.attributes.add(O$8.MODELNORMAL,"mat3"));const c=e.vertex;i.instancedDoublePrecision&&(c.include(c$a,i),c.uniforms.add(new o$k("viewOriginHi",((e,i)=>o$x(o$s(b$3,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),b$3))),new o$k("viewOriginLo",((e,i)=>r$k(o$s(b$3,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),b$3))))),c.code.add(o$v`
    vec3 calculateVPos() {
      ${i.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),c.code.add(o$v`
    vec3 subtractOrigin(vec3 _pos) {
      ${i.instancedDoublePrecision?o$v`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),c.code.add(o$v`
    vec3 dpNormal(vec4 _normal) {
      ${i.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),i.output===h$a.Normal&&(u$5(c),c.code.add(o$v`
    vec3 dpNormalView(vec4 _normal) {
      ${i.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),i.hasVertexTangents&&c.code.add(o$v`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${i.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `);}e$v([r$7()],v$4.prototype,"instancedDoublePrecision",void 0);const b$3=n$e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e$a(e){e.vertex.code.add(o$v`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o$v.int(n$n.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o$v.int(n$n.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o$v.int(n$n.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o$v.int(n$n.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e$9 extends i$c{constructor(r,e){super(r,"int",a$9.Pass,((s,o,i)=>s.setUniform1i(r,e(o,i))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function i$7(i,t){t.hasSymbolColors?(i.include(e$a),i.attributes.add(O$8.SYMBOLCOLOR,"vec4"),i.varyings.add("colorMixMode","mediump float"),i.vertex.code.add(o$v`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(i.fragment.uniforms.add(new e$9("colorMixMode",(o=>P$6[o.colorMixMode]))),i.vertex.code.add(o$v`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e$8(e,d){d.hasVertexColors?(e.attributes.add(O$8.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(o$v`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(o$v`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(o$v`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e$7 extends i$c{constructor(r,e){super(r,"vec4",a$9.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function c$7(e){e.vertex.code.add(o$v`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(o$v`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(o$v`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(o$v`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(o$v`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(o$v`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(o$v`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);}function t$c(e){e.uniforms.add(new e$7("screenSizePerspective",(e=>o$9(e.screenSizePerspective))));}function i$6(e){e.uniforms.add(new e$7("screenSizePerspectiveAlignment",(e=>o$9(e.screenSizePerspectiveAlignment||e.screenSizePerspective))));}function o$9(a){return r$l(n$8,a.parameters.divisor,a.parameters.offset,a.parameters.minPixelSize,a.paddingPixelsOverride)}const n$8=n$m();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function a$7(e,r){const c=e.vertex;r.hasVerticalOffset?(f$6(c),r.hasScreenSizePerspective&&(e.include(c$7),i$6(c),f$7(e.vertex,r)),c.code.add(o$v`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r.spherical?o$v`vec3 worldNormal = normalize(worldPos + localOrigin);`:o$v`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r.hasScreenSizePerspective?o$v`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:o$v`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):c.code.add(o$v`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);}const i$5=n$m();function f$6(r){r.uniforms.add(new e$7("verticalOffset",((r,t)=>{const{minWorldLength:l,maxWorldLength:o,screenLength:c}=r.verticalOffset,s=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),a=t.camera.pixelRatio||1;return r$l(i$5,c*a,s,l,o)})));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function d$6(d,t){const a=t.output===h$a.ObjectAndLayerIdColor,n=t.objectAndLayerIdColorInstanced;a&&(d.varyings.add("objectAndLayerIdColorVarying","vec4"),n?d.attributes.add(O$8.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):d.attributes.add(O$8.OBJECTANDLAYERIDCOLOR,"vec4")),d.vertex.code.add(o$v`
     void forwardObjectAndLayerIdColor() {
      ${a?n?o$v`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:o$v`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:o$v``} }`),d.fragment.code.add(o$v`
      void outputObjectAndLayerIdColor() {
        ${a?o$v`fragColor = objectAndLayerIdColorVarying;`:o$v``} }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function a$6(a){a.code.add(o$v`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o$8(o,l){switch(o.fragment.include(a$6),l.output){case h$a.Shadow:case h$a.ShadowHighlight:case h$a.ShadowExcludeHighlight:o.fragment.code.add(o$v`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
fragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case h$a.Depth:o.fragment.code.add(o$v`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const r$6=r$m(1,1,0,1),d$5=r$m(1,0,1,1);function g$3(e){e.fragment.uniforms.add(new s$8("depthTexture",((e,t)=>t.highlightDepthTexture))),e.fragment.constants.add("occludedHighlightFlag","vec4",r$6).add("unoccludedHighlightFlag","vec4",d$5),e.fragment.code.add(o$v`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e$6 extends i$c{constructor(r,e,o){super(r,"vec4",a$9.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))),o);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o$7 extends i$c{constructor(r,o,e){super(r,"float",a$9.Pass,((s,e,t)=>s.setUniform1fv(r,o(e,t))),e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let T$2=class extends m$d{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1;}};e$v([y$8()],T$2.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),e$v([y$8()],T$2.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),e$v([y$8()],T$2.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),e$v([y$8()],T$2.prototype,"DECONFLICTOR_SHOW_GRID",void 0),e$v([y$8()],T$2.prototype,"LABELS_SHOW_BORDER",void 0),e$v([y$8()],T$2.prototype,"TEXT_SHOW_BASELINE",void 0),e$v([y$8()],T$2.prototype,"TEXT_SHOW_BORDER",void 0),e$v([y$8()],T$2.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),e$v([y$8()],T$2.prototype,"OVERLAY_SHOW_CENTER",void 0),e$v([y$8()],T$2.prototype,"SHOW_POI",void 0),e$v([y$8()],T$2.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),e$v([y$8()],T$2.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),e$v([y$8()],T$2.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),e$v([y$8()],T$2.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),e$v([y$8()],T$2.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),e$v([y$8()],T$2.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),e$v([y$8()],T$2.prototype,"I3S_TREE_SHOW_TILES",void 0),e$v([y$8()],T$2.prototype,"I3S_SHOW_MODIFICATIONS",void 0),e$v([y$8()],T$2.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),e$v([y$8()],T$2.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),e$v([y$8()],T$2.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),e$v([y$8()],T$2.prototype,"LINE_WIREFRAMES",void 0),T$2=e$v([a$i("esri.views.3d.support.DebugFlags")],T$2);const t$b=new T$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var S$1,y$1;!function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale";}(S$1||(S$1={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle";}(y$1||(y$1={}));class x$1{constructor(e){this.field=e;}}class g$2 extends x$1{constructor(e){super(e),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.type=[S$1.Undefined,S$1.Undefined,S$1.Undefined];}}class b$2 extends x$1{constructor(e){super(e),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0];}}class C extends x$1{constructor(e){super(e),this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0];}}class D$1 extends x$1{constructor(e){super(e),this.offset=[0,0,0],this.factor=[1,1,1],this.type=[0,0,0];}}class w$3{}function U$1(e){return null!=e}function V$1(e){return "number"==typeof e}function M$2(e){return "string"==typeof e}function j$3(e){return null==e||M$2(e)}function k$3(e,t){e&&e.push(t);}function A$2(e,t,o,i=e$r()){const n=e||0,s=t||0,r=o||0;return 0!==n&&x$7(i,i,-n/180*Math.PI),0!==s&&l$m(i,i,s/180*Math.PI),0!==r&&m$e(i,i,r/180*Math.PI),i}function I$5(e,t,o,i,n){const s=e.minSize,r=e.maxSize;if(e.expression)return k$3(n,"Could not convert size info: expression not supported"),!1;if(e.useSymbolValue){const e=i.symbolSize[o];return t.minSize[o]=e,t.maxSize[o]=e,t.offset[o]=t.minSize[o],t.factor[o]=0,t.type[o]=S$1.DefinedSize,!0}if(U$1(e.field))return U$1(e.stops)?2===e.stops.length&&V$1(e.stops[0].size)&&V$1(e.stops[1].size)?(T$1(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,o),t.type[o]=S$1.DefinedSize,!0):(k$3(n,"Could not convert size info: stops only supported with 2 elements"),!1):V$1(s)&&V$1(r)&&U$1(e.minDataValue)&&U$1(e.maxDataValue)?(T$1(s,r,e.minDataValue,e.maxDataValue,t,o),t.type[o]=S$1.DefinedSize,!0):"unknown"===e.valueUnit?(k$3(n,"Could not convert size info: proportional size not supported"),!1):null!=m$f[e.valueUnit]?(t.minSize[o]=-1/0,t.maxSize[o]=1/0,t.offset[o]=0,t.factor[o]=1/m$f[e.valueUnit],t.type[o]=S$1.DefinedSize,!0):(k$3(n,"Could not convert size info: scale-dependent size not supported"),!1);if(!U$1(e.field)){if(e.stops&&e.stops[0]&&V$1(e.stops[0].size))return t.minSize[o]=e.stops[0].size,t.maxSize[o]=e.stops[0].size,t.offset[o]=t.minSize[o],t.factor[o]=0,t.type[o]=S$1.DefinedSize,!0;if(V$1(s))return t.minSize[o]=s,t.maxSize[o]=s,t.offset[o]=s,t.factor[o]=0,t.type[o]=S$1.DefinedSize,!0}return k$3(n,"Could not convert size info: unsupported variant of sizeInfo"),!1}function T$1(e,t,o,i,n,s){const r=Math.abs(i-o)>0?(t-e)/(i-o):0;n.minSize[s]=r>0?e:t,n.maxSize[s]=r>0?t:e,n.offset[s]=e-o*r,n.factor[s]=r;}function F(e,t,o,i){if(e.normalizationField||e.valueRepresentation)return k$3(i,"Could not convert size info: unsupported property"),null;if(!j$3(e.field))return k$3(i,"Could not convert size info: field is not a string"),null;if(t.size){if(e.field)if(t.size.field){if(e.field!==t.size.field)return k$3(i,"Could not convert size info: multiple fields in use"),null}else t.size.field=e.field;}else t.size=new g$2(e.field);let n;switch(e.axis){case"width":return n=I$5(e,t.size,0,o,i),n?t:null;case"height":return n=I$5(e,t.size,2,o,i),n?t:null;case"depth":return n=I$5(e,t.size,1,o,i),n?t:null;case"width-and-depth":return n=I$5(e,t.size,0,o,i),n&&I$5(e,t.size,1,o,i),n?t:null;case null:case void 0:case"all":return n=I$5(e,t.size,0,o,i),n=n&&I$5(e,t.size,1,o,i),n=n&&I$5(e,t.size,2,o,i),n?t:null;default:return k$3(i,`Could not convert size info: unknown axis "${e.axis}""`),null}}function P$3(e,t,o){for(let n=0;n<3;++n){let o=t.unitInMeters;e.type[n]===S$1.DefinedSize&&(o*=t.modelSize[n],e.type[n]=S$1.DefinedScale),e.minSize[n]=e.minSize[n]/o,e.maxSize[n]=e.maxSize[n]/o,e.offset[n]=e.offset[n]/o,e.factor[n]=e.factor[n]/o;}let i;if(e.type[0]!==S$1.Undefined)i=0;else if(e.type[1]!==S$1.Undefined)i=1;else {if(e.type[2]===S$1.Undefined)return k$3(o,"No size axis contains a valid size or scale"),!1;i=2;}for(let n=0;n<3;++n)e.type[n]===S$1.Undefined&&(e.minSize[n]=e.minSize[i],e.maxSize[n]=e.maxSize[i],e.offset[n]=e.offset[i],e.factor[n]=e.factor[i],e.type[n]=e.type[i]);return !0}function R$1(e,t,o){e[4*t]=o.r/255,e[4*t+1]=o.g/255,e[4*t+2]=o.b/255,e[4*t+3]=o.a;}function E$2(e,t,o){if(e.normalizationField)return k$3(o,"Could not convert color info: unsupported property"),null;if(M$2(e.field)){if(!e.stops)return k$3(o,"Could not convert color info: missing stops or colors"),null;{if(e.stops.length>8)return k$3(o,"Could not convert color info: too many color stops"),null;t.color=new b$2(e.field);const i=e.stops;for(let e=0;e<8;++e){const o=i[Math.min(e,i.length-1)];t.color.values[e]=o.value,R$1(t.color.colors,e,o.color);}}}else {if(!(e.stops&&e.stops.length>=0))return k$3(o,"Could not convert color info: no field and no colors/stops"),null;{const o=e.stops&&e.stops.length>=0&&e.stops[0].color;t.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(let e=0;e<8;e++)t.color.values[e]=1/0,R$1(t.color.colors,e,o);}}return t}function _$2(e,t,o){if(e.normalizationField)return k$3(o,"Could not convert opacity info: unsupported property"),null;if(M$2(e.field)){if(!e.stops)return k$3(o,"Could not convert opacity info: missing stops or opacities"),null;{if(e.stops.length>8)return k$3(o,"Could not convert opacity info: too many opacity stops"),null;t.opacity=new C(e.field);const i=e.stops;for(let e=0;e<8;++e){const o=i[Math.min(e,i.length-1)];t.opacity.values[e]=o.value,t.opacity.opacityValues[e]=o.opacity;}}}else {if(!(e.stops&&e.stops.length>=0))return k$3(o,"Could not convert opacity info: no field and no opacities/stops"),null;{const o=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;t.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(let e=0;e<8;e++)t.opacity.values[e]=1/0,t.opacity.opacityValues[e]=o;}}return t}function q$1(e,t,o){const i=2===o&&"arithmetic"===e.rotationType;t.offset[o]=i?90:0,t.factor[o]=i?-1:1,t.type[o]=1;}function $(e,t,o){if(!M$2(e.field))return k$3(o,"Could not convert rotation info: field is not a string"),null;if(t.rotation){if(e.field)if(t.rotation.field){if(e.field!==t.rotation.field)return k$3(o,"Could not convert rotation info: multiple fields in use"),null}else t.rotation.field=e.field;}else t.rotation={field:e.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(e.axis){case"tilt":return q$1(e,t.rotation,0),t;case"roll":return q$1(e,t.rotation,1),t;case null:case void 0:case"heading":return q$1(e,t.rotation,2),t;default:return k$3(o,`Could not convert rotation info: unknown axis "${e.axis}""`),null}}class B$1{constructor(e,t=[1,1,1],o=[1,1,1],i=1,n=[0,0,0],s=[1,1,1],r=[0,0,0]){this.supports=e,this.modelSize=t,this.symbolSize=o,this.unitInMeters=i,this.anchor=n,this.scale=s,this.rotation=r;}}function L$2(e,t,o){if(!e)return null;const i=e.reduce(((e,i)=>{if(!e)return e;if(i.valueExpression)return k$3(o,"Could not convert visual variables: arcade expressions not supported"),null;switch(i.type){case"size":return t.supports.size?F(i,e,t,o):e;case"color":return t.supports.color?E$2(i,e,o):e;case"opacity":return t.supports.opacity?_$2(i,e,o):null;case"rotation":return t.supports.rotation?$(i,e,o):e;default:return null}}),new w$3);return !(e.length>0&&i)||i.size||i.color||i.opacity||i.rotation?i&&i.size&&!P$3(i.size,t,o)?null:i:null}class N$2{constructor(e,t,o){this.visualVariables=e,this.materialParameters=t,this.requiresShaderTransformation=o;}}function O$2(e,t){if(!e)return null;if(t$b.TESTS_DISABLE_FAST_UPDATES)return null;const o=L$2(e.visualVariables,t);return o?new N$2(o,K(o,t),!!o.size):null}function G$1(e,t,o){if(!t||!e)return !1;const i=e.visualVariables,n=L$2(t.visualVariables,o);return !!n&&(!!(H$1(i.size,n.size,"size")&&H$1(i.color,n.color,"color")&&H$1(i.rotation,n.rotation,"rotation")&&H$1(i.opacity,n.opacity,"opacity"))&&(e.visualVariables=n,e.materialParameters=K(n,o),e.requiresShaderTransformation=!!n.size,!0))}function H$1(e,t,o){if(!!e!=!!t)return !1;if(e&&e.field!==t?.field)return !1;if(e&&"rotation"===o){const o=e,i=t;for(let e=0;e<3;e++)if(o.type[e]!==i.type[e]||o.offset[e]!==i.offset[e]||o.factor[e]!==i.factor[e])return !1}return !0}class J extends n$i{constructor(e){super(),this.vvSize=e?.size??null,this.vvColor=e?.color??null,this.vvOpacity=e?.opacity??null;}}function K(e,n){const s=new J(e);return s.vvSize&&(s.vvSymbolAnchor=n.anchor,r$n(ee$1),A$2(n.rotation[2],n.rotation[0],n.rotation[1],ee$1),s.vvSymbolRotationMatrix=s.vvSymbolRotationMatrix||e$s(),a$j(s.vvSymbolRotationMatrix,ee$1)),s}function Q(t,o,i){if(!t.vvSize)return i;n$k(Y$2,i);const u=t.vvSymbolRotationMatrix;s$n(ee$1,u[0],u[1],u[2],0,u[3],u[4],u[5],0,u[6],u[7],u[8],0,0,0,0,1),c$l(Y$2,Y$2,ee$1);for(let n=0;n<3;++n){const i=t.vvSize.offset[n]+o[0]*t.vvSize.factor[n];Z$2[n]=i$j(i,t.vvSize.minSize[n],t.vvSize.maxSize[n]);}return f$g(Y$2,Y$2,Z$2),i$m(Y$2,Y$2,t.vvSymbolAnchor),Y$2}function W(t,o,i){if(o.vvSize)for(let n=0;n<3;++n){const s=o.vvSize.offset[n]+i[0]*o.vvSize.factor[n];t[n]=i$j(s,o.vvSize.minSize[n],o.vvSize.maxSize[n]);}else o$s(t,1,1,1);}function X$1(e,t){const o=null==e?0:t.attributes[e];return "number"==typeof o&&isFinite(o)?o:0}const Y$2=e$r(),Z$2=n$e(),ee$1=e$r();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t$a extends J{constructor(){super(...arguments),this.renderOccluded=o$i.Occlude;}}const e$5=8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function l$8(l,n){const{vertex:s,attributes:u}=l;n.hasVvInstancing&&(n.vvSize||n.vvColor)&&u.add(O$8.INSTANCEFEATUREATTRIBUTE,"vec4"),n.vvSize?(s.uniforms.add(new e$i("vvSizeMinSize",(e=>e.vvSize.minSize))),s.uniforms.add(new e$i("vvSizeMaxSize",(e=>e.vvSize.maxSize))),s.uniforms.add(new e$i("vvSizeOffset",(e=>e.vvSize.offset))),s.uniforms.add(new e$i("vvSizeFactor",(e=>e.vvSize.factor))),s.uniforms.add(new e$g("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),s.uniforms.add(new e$i("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),s.code.add(o$v`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),s.code.add(o$v`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${n.hasVvInstancing?o$v`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):s.code.add(o$v`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),n.vvColor?(s.constants.add("vvColorNumber","int",e$5),s.uniforms.add(new o$7("vvColorValues",(e=>e.vvColor.values),e$5),new e$6("vvColorColors",(e=>e.vvColor.colors),e$5)),s.code.add(o$v`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${n.hasVvInstancing?o$v`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):s.code.add(o$v`vec4 vvColor() { return vec4(1.0); }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function d$4(d){d.fragment.code.add(o$v`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o$v.float(t$i)}) { discard; } }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e$4 extends i$c{constructor(r,e){super(r,"float",a$9.Draw,((o,s,t)=>o.setUniform1f(r,e(s,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function s$4(a,e){l$7(a,e,new o$b("textureAlphaCutoff",(a=>a.textureAlphaCutoff)));}function t$9(a,r){l$7(a,r,new e$4("textureAlphaCutoff",(a=>a.textureAlphaCutoff)));}function l$7(e,r,s){const t=e.fragment;switch(r.alphaDiscardMode!==i$o.Mask&&r.alphaDiscardMode!==i$o.MaskBlend||t.uniforms.add(s),r.alphaDiscardMode){case i$o.Blend:return e.include(d$4);case i$o.Opaque:t.code.add(o$v`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case i$o.Mask:t.code.add(o$v`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case i$o.MaskBlend:e.fragment.code.add(o$v`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function b$1(b,C){const{vertex:O,fragment:y}=b,V=C.hasModelTransformation;if(V){const t=e$s();O.uniforms.add(new e$f("model",(o=>o.modelTransformation??o$t))),O.uniforms.add(new e$g("normalTransform",(r=>(g$e(t,r.modelTransformation??o$t),t))));}const A=C.hasColorTexture&&C.alphaDiscardMode!==i$o.Opaque;switch(C.output){case h$a.Depth:case h$a.Shadow:case h$a.ShadowHighlight:case h$a.ShadowExcludeHighlight:case h$a.ObjectAndLayerIdColor:p$5(O,C),b.include(o$d,C),b.include(o$l,C),b.include(l$8,C),b.include(o$8,C),b.include(P$4,C),b.include(d$6,C),i$8(b),b.varyings.add("depth","float"),A&&y.uniforms.add(new s$8("tex",(o=>o.texture))),O.code.add(o$v`
          void main(void) {
            vpos = calculateVPos();
            ${V?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),b.include(s$4,C),y.code.add(o$v`
          void main(void) {
            discardBySlice(vpos);
            ${A?o$v`
                    vec4 texColor = texture(tex, ${C.hasColorTextureTransform?o$v`colorUV`:o$v`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${C.output===h$a.ObjectAndLayerIdColor?o$v`outputObjectAndLayerIdColor();`:o$v`outputDepth(depth);`}
          }
        `);break;case h$a.Normal:{p$5(O,C),b.include(o$d,C),b.include(t$k,C),b.include(c$9,C),b.include(o$l,C),b.include(l$8,C),A&&y.uniforms.add(new s$8("tex",(o=>o.texture))),C.normalType===a$a.ScreenDerivative&&b.varyings.add("vPositionView","vec3");const o=C.normalType===a$a.Attribute||C.normalType===a$a.Compressed;O.code.add(o$v`
          void main(void) {
            vpos = calculateVPos();
            ${V?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}

            ${o?o$v`vNormalWorld = ${V?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormalView(vvLocalNormal(normalModel()))"};`:o$v`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),b.include(P$4,C),b.include(s$4,C),y.code.add(o$v`
          void main() {
            discardBySlice(vpos);
            ${A?o$v`
                    vec4 texColor = texture(tex, ${C.hasColorTextureTransform?o$v`colorUV`:o$v`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${C.normalType===a$a.ScreenDerivative?o$v`vec3 normal = screenDerivativeNormal(vPositionView);`:o$v`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case h$a.Highlight:p$5(O,C),b.include(o$d,C),b.include(o$l,C),b.include(l$8,C),A&&y.uniforms.add(new s$8("tex",(o=>o.texture))),O.code.add(o$v`
          void main(void) {
            vpos = calculateVPos();
            ${V?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),b.include(P$4,C),b.include(s$4,C),b.include(g$3,C),y.code.add(o$v`
          void main() {
            discardBySlice(vpos);
            ${A?o$v`
                    vec4 texColor = texture(tex, ${C.hasColorTextureTransform?o$v`colorUV`:o$v`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function m$6(m,c){const i=m.fragment;c.hasVertexTangents?(m.attributes.add(O$8.TANGENT,"vec4"),m.varyings.add("vTangent","vec4"),c.doubleSidedMode===i$d.WindingOrder?i.code.add(o$v`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):i.code.add(o$v`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):i.code.add(o$v`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),c.textureCoordinateType!==d$d.None&&(m.include(s$a,c),i.uniforms.add(c.pbrTextureBindType===a$9.Pass?new s$8("normalTexture",(e=>e.textureNormal)):new s$9("normalTexture",(e=>e.textureNormal))),i.code.add(o$v`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const n$7=[new t$w(O$8.POSITION,3,C$3.FLOAT,0,12)],w$2=[new t$w(O$8.POSITION,3,C$3.FLOAT,0,20),new t$w(O$8.UV0,2,C$3.FLOAT,12,20)],I$4=[new t$w(O$8.POSITION,3,C$3.FLOAT,0,32),new t$w(O$8.NORMAL,3,C$3.FLOAT,12,32),new t$w(O$8.UV0,2,C$3.FLOAT,24,32)],r$5=[new t$w(O$8.POSITION,3,C$3.FLOAT,0,16),new t$w(O$8.COLOR,4,C$3.UNSIGNED_BYTE,12,16)],t$8=[new t$w(O$8.POSITION,2,C$3.FLOAT,0,8)],A$1=[new t$w(O$8.POSITION,2,C$3.FLOAT,0,16),new t$w(O$8.UV0,2,C$3.FLOAT,8,16)];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r$4 extends u$j{}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function f$5(m,s=t$8,u=E$6,f=-1,w=1){let a=null;if(s===A$1)a=new Float32Array([f,f,0,0,w,f,1,0,f,w,0,1,w,w,1,1]);else a=new Float32Array([f,f,w,f,f,w,w,w]);return new r$4(m,u,{geometry:s},{geometry:c$n.createVertex(m,F$3.STATIC_DRAW,a)})}function w$1(r,m=t$8,s=E$6){const u=new Float32Array([-1,-1,3,-1,-1,3]);return new r$4(r,s,{geometry:m},{geometry:c$n.createVertex(r,F$3.STATIC_DRAW,u)})}const a$5=4;function l$6(e,t=a$5){const r=new e$q;return r.samplingMode=L$5.NEAREST,r.width=r.height=t,new T$7(e,r)}function c$6(e,t,r=a$5){const n=new Uint8Array(r*r*4);for(let i=0;i<n.length;i+=4)n[i]=255*t[0],n[i+1]=255*t[1],n[i+2]=255*t[2],n[i+3]=255*t[3];const o=new e$q;return o.samplingMode=L$5.NEAREST,o.width=o.height=r,new T$7(e,o,n)}function g$1(e){const t=new e$q;return t.samplingMode=L$5.NEAREST,t.width=t.height=1,new T$7(e,t,new Uint8Array([255,255,255,255]))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o$6(o,t=!0){o.attributes.add(O$8.POSITION,"vec2"),t&&o.varyings.add("uv","vec2"),o.vertex.code.add(o$v`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?o$v`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function a$4(a){a.include(a$6),a.code.add(o$v`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture(depthTex, uv)), nearFar);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o$5 extends i$c{constructor(r,o){super(r,"vec2",a$9.Draw,((e,s,t,i)=>e.setUniform2fv(r,o(s,t,i))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const n$6=s$j.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class s$3{constructor(){this._includedModules=new Map;}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){n$6.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const n of Object.keys(r))r[n]!==e[n]&&t.add(n);for(const n of Object.keys(e))r[n]!==e[n]&&t.add(n);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)));}}else this._includedModules.set(e,t),e(this.builder,t);}}class i$4 extends s$3{constructor(){super(...arguments),this.vertex=new c$5,this.fragment=new c$5,this.attributes=new u$4,this.varyings=new l$5,this.extensions=new m$5,this.constants=new h$3;}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),n=this.varyings.generateSource(e),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a="vertex"===e?_$1:d$3,c=this.constants.generateSource().concat(s.constants.generateSource());return `#version 300 es\n${t.join("\n")}\n\n${a}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}\n\n${o.join("\n")}`}generateBind(e,t){const r=new Map;this.vertex.uniforms.entries.forEach((t=>{const n=t.bind[e];null!=n&&r.set(t.name,n);})),this.fragment.uniforms.entries.forEach((t=>{const n=t.bind[e];null!=n&&r.set(t.name,n);}));const n=Array.from(r.values()),s=n.length;return (e,r,i)=>{for(let o=0;o<s;++o)n[o](t,e,r,i);}}}class o$4{constructor(){this._entries=new Map;}add(...e){for(const t of e)this._add(t);}get(e){return this._entries.get(e)}_add(t){if(null!=t){if(this._entries.has(t.name)&&!this._entries.get(t.name).equals(t))throw new s$l(`Duplicate uniform name ${t.name} for different uniform type`);this._entries.set(t.name,t);}else n$6.error(`Trying to add null Uniform from ${(new Error).stack}.`);}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class a$3{constructor(){this._entries=new Array;}add(e){this._entries.push(e);}generateSource(){return this._entries}}class c$5 extends s$3{constructor(){super(...arguments),this.uniforms=new o$4,this.code=new a$3,this.constants=new h$3;}get builder(){return this}}class u$4{constructor(){this._entries=new Array;}add(e,t){this._entries.push([e,t]);}generateSource(e){return "fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class l$5{constructor(){this._entries=new Map;}add(e,t){this._entries.has(e)&&s$g(this._entries.get(e)===t),this._entries.set(e,t);}generateSource(e){const t=new Array;return this._entries.forEach(((r,n)=>t.push("vertex"===e?`out ${r} ${n};`:`in ${r} ${n};`))),t}}class m$5{constructor(){this._entries=new Set;}add(e){this._entries.add(e);}generateSource(e){const t="vertex"===e?m$5.ALLOWLIST_VERTEX:m$5.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}m$5.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],m$5.ALLOWLIST_VERTEX=[];class h$3{constructor(){this._entries=new Set;}add(e,t,r){let n="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":n=h$3._numberToFloatStr(r);break;case"int":n=h$3._numberToIntStr(r);break;case"bool":n=r.toString();break;case"vec2":n=`vec2(${h$3._numberToFloatStr(r[0])},                            ${h$3._numberToFloatStr(r[1])})`;break;case"vec3":n=`vec3(${h$3._numberToFloatStr(r[0])},                            ${h$3._numberToFloatStr(r[1])},                            ${h$3._numberToFloatStr(r[2])})`;break;case"vec4":n=`vec4(${h$3._numberToFloatStr(r[0])},                            ${h$3._numberToFloatStr(r[1])},                            ${h$3._numberToFloatStr(r[2])},                            ${h$3._numberToFloatStr(r[3])})`;break;case"ivec2":n=`ivec2(${h$3._numberToIntStr(r[0])},                             ${h$3._numberToIntStr(r[1])})`;break;case"ivec3":n=`ivec3(${h$3._numberToIntStr(r[0])},                             ${h$3._numberToIntStr(r[1])},                             ${h$3._numberToIntStr(r[2])})`;break;case"ivec4":n=`ivec4(${h$3._numberToIntStr(r[0])},                             ${h$3._numberToIntStr(r[1])},                             ${h$3._numberToIntStr(r[2])},                             ${h$3._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${t}(${Array.prototype.map.call(r,(e=>h$3._numberToFloatStr(e))).join(", ")})`;}return this._entries.add(`const ${t} ${e} = ${n};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const d$3="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif\n\nout vec4 fragColor;",_$1="precision highp float;\nprecision highp sampler2D;";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const f$4=4;function c$4(){const c=new i$4,u=c.fragment;c.include(o$6);const m=(f$4+1)/2,p=1/(2*m*m);return u.include(a$4),u.uniforms.add(new s$8("depthMap",(e=>e.depthTexture)),new s$9("tex",(e=>e.colorTexture)),new o$5("blurSize",(e=>e.blurSize)),new o$b("projScale",((r,o)=>{const t=x$8(o.camera.eye,o.camera.center);return t>5e4?Math.max(0,r.projScale-(t-5e4)):r.projScale})),new e$c("nearFar",((e,r)=>r.camera.nearFar))),u.code.add(o$v`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${o$v.float(p)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),u.code.add(o$v`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${o$v.int(f$4)}; r <= ${o$v.int(f$4)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragColor = vec4(b / w_total);
    }
  `),c}const u$3=Object.freeze(Object.defineProperty({__proto__:null,build:c$4},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class l$4 extends e$e{initializeProgram(r){return new i$a(r.rctx,l$4.shader.get().build(),E$6)}initializePipeline(){return W$2({colorWrite:_$9})}}l$4.shader=new t$h(u$3,(()=>import('./SSAOBlur.glsl-ff0a4540.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const e$3="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n$5(r){r.fragment.uniforms.add(new e$7("projInfo",((r,o)=>f$3(o)))),r.fragment.uniforms.add(new e$c("zScale",((r,o)=>i$3(o)))),r.fragment.code.add(o$v`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`);}function f$3(r){const o=r.camera.projectionMatrix;return 0===o[11]?r$l(m$4,2/(r.camera.fullWidth*o[0]),2/(r.camera.fullHeight*o[5]),(1+o[12])/o[0],(1+o[13])/o[5]):r$l(m$4,-2/(r.camera.fullWidth*o[0]),-2/(r.camera.fullHeight*o[5]),(1-o[8])/o[0],(1-o[9])/o[5])}const m$4=n$m();function i$3(o){return 0===o.camera.projectionMatrix[11]?r$o(d$2,0,1):r$o(d$2,1,0)}const d$2=n$o();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const f$2=16;function d$1(){const r=new i$4,d=r.fragment;return r.include(o$6),d.include(a$4),r.include(n$5),d.uniforms.add(new o$b("radius",((e,r)=>m$3(r.camera)))),d.code.add(o$v`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),d.code.add(o$v`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),d.uniforms.add(new e$c("nearFar",((e,r)=>r.camera.nearFar)),new s$8("normalMap",(e=>e.normalTexture)),new s$8("depthMap",(e=>e.depthTexture)),new e$c("zScale",((e,r)=>i$3(r))),new o$b("projScale",(e=>e.projScale)),new s$8("rnm",(e=>e.noiseTexture)),new e$c("rnmScale",((r,t)=>r$o(p$3,t.camera.fullWidth/r.noiseTexture.descriptor.width,t.camera.fullHeight/r.noiseTexture.descriptor.height))),new o$b("intensity",(e=>e.intensity)),new e$c("screenSize",((r,t)=>r$o(p$3,t.camera.fullWidth,t.camera.fullHeight)))),d.code.add(o$v`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        fragColor = vec4(0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${o$v.int(f$2)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${o$v.int(f$2)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      fragColor = vec4(A);
    }
  `),r}function m$3(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const p$3=n$o(),v$3=Object.freeze(Object.defineProperty({__proto__:null,build:d$1,getRadius:m$3},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class l$3 extends e$e{initializeProgram(e){return new i$a(e.rctx,l$3.shader.get().build(),E$6)}initializePipeline(){return W$2({colorWrite:_$9})}}l$3.shader=new t$h(v$3,(()=>import('./SSAO.glsl-c41af4d7.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r$3 extends n$i{constructor(){super(...arguments),this.projScale=1;}}class t$7 extends r$3{constructor(){super(...arguments),this.intensity=1;}}class c$3 extends n$i{}class o$3 extends c$3{constructor(){super(...arguments),this.blurSize=n$o();}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const O$1=2;class w{constructor(e,s,t,r){this._view=e,this._techniqueRepository=s,this._rctx=t,this._requestRender=r,this._quadVAO=null,this._passParameters=new t$7,this._drawParameters=new o$3;}dispose(){this.enabled=!1,this._quadVAO=t$v(this._quadVAO);}destroy(){this.dispose();}disposeOffscreenBuffers(){this._ssaoFBO?.resize(0,0),this._blurFBO?.resize(0,0);}set enabled(e){e?this._enable():this._disable();}get enabled(){return null!=this._enableTime}get active(){return this.enabled&&this._ssaoTechnique.compiled&&this._blurTechnique.compiled}get colorTexture(){return this._ssaoFBO?.colorTexture}render(e,s,i,a){if(null==this._enableTime||null==i||null==a||null==this._ssaoFBO||null==this._blurFBO)return;if(!this.active)return this._enableTime=s,void this._requestRender();0===this._enableTime&&(this._enableTime=s);const h=this._rctx,n=e.camera,u=this._view.qualitySettings.fadeDuration,m=u>0?Math.min(u,s-this._enableTime)/u:1;this._passParameters.normalTexture=a,this._passParameters.depthTexture=i,this._passParameters.projScale=1/n.computeRenderPixelSizeAtDist(1),this._passParameters.intensity=4*f$1/m$3(n)**6*m;const c=n.fullViewport,p=c[2],b=c[3],d=p/O$1,w=b/O$1;this._ssaoFBO.resize(p,b),this._blurFBO.resize(d,w),null==this._quadVAO&&(this._quadVAO=f$5(this._rctx)),h.bindFramebuffer(this._ssaoFBO),h.setViewport(0,0,p,b);h.bindTechnique(this._ssaoTechnique,this._passParameters,e).bindDraw(this._drawParameters,e,this._passParameters),h.bindVAO(this._quadVAO);const q=n$p(this._quadVAO,"geometry");h.drawArrays(E$b.TRIANGLE_STRIP,0,q);const P=h.bindTechnique(this._blurTechnique,this._passParameters,e);h.setViewport(0,0,d,w),h.bindFramebuffer(this._blurFBO),this._drawParameters.colorTexture=this._ssaoFBO.colorTexture,r$o(this._drawParameters.blurSize,0,O$1/b),P.bindDraw(this._drawParameters,e,this._passParameters),h.setViewport(0,0,d,w),h.drawArrays(E$b.TRIANGLE_STRIP,0,q),h.bindFramebuffer(this._ssaoFBO),h.setViewport(0,0,p,b),h.setClearColor(1,1,1,0),h.clear(_$a.COLOR_BUFFER_BIT),h.setViewport(0,0,d,w),this._drawParameters.colorTexture=this._blurFBO.colorTexture,r$o(this._drawParameters.blurSize,O$1/p,0),P.bindDraw(this._drawParameters,e,this._passParameters),h.drawArrays(E$b.TRIANGLE_STRIP,0,q),h.setViewport(c[0],c[1],c[2],c[3]),m<1&&this._requestRender();}_enable(){if(null!=this._enableTime)return;const e=new e$q;e.wrapMode=D$3.CLAMP_TO_EDGE,this._ssaoFBO=new x$9(this._rctx,e),this._blurFBO=new x$9(this._rctx,e);const t=Uint8Array.from(atob(e$3),(e=>e.charCodeAt(0)));e.pixelFormat=G$2.RGB,e.wrapMode=D$3.REPEAT,e.hasMipmap=!0,e.width=32,e.height=32,this._passParameters.noiseTexture=new T$7(this._rctx,e,t),null==this._ssaoTechnique&&(this._ssaoTechnique=this._techniqueRepository.acquire(l$3)),null==this._blurTechnique&&(this._blurTechnique=this._techniqueRepository.acquire(l$4)),this._enableTime=n$j(0),this._requestRender();}_disable(){this._enableTime=null,this._passParameters.noiseTexture=t$v(this._passParameters.noiseTexture),this._blurFBO=t$v(this._blurFBO),this._ssaoFBO=t$v(this._ssaoFBO);}get gpuMemoryUsage(){return (this._blurFBO?.gpuMemoryUsage??0)+(this._ssaoFBO?.gpuMemoryUsage??0)}}const f$1=.5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t$6(t,o){const a=t.fragment;o.receiveAmbientOcclusion?(a.uniforms.add(new s$8("ssaoTex",((e,r)=>r.ssaoHelper.colorTexture))),a.constants.add("blurSizePixelsInverse","float",1/O$1),a.code.add(o$v`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):a.code.add(o$v`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function m$2(n,g){const m=n.fragment,o=void 0!==g.lightingSphericalHarmonicsOrder?g.lightingSphericalHarmonicsOrder:2;0===o?(m.uniforms.add(new e$i("lightingAmbientSH0",((n,t)=>o$s(a$2,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),m.code.add(o$v`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(m.uniforms.add(new e$7("lightingAmbientSH_R",((i,n)=>r$l(r$2,n.lighting.sh.r[0],n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3]))),new e$7("lightingAmbientSH_G",((i,n)=>r$l(r$2,n.lighting.sh.g[0],n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3]))),new e$7("lightingAmbientSH_B",((i,n)=>r$l(r$2,n.lighting.sh.b[0],n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3])))),m.code.add(o$v`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===o&&(m.uniforms.add(new e$i("lightingAmbientSH0",((n,t)=>o$s(a$2,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new e$7("lightingAmbientSH_R1",((i,n)=>r$l(r$2,n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3],n.lighting.sh.r[4]))),new e$7("lightingAmbientSH_G1",((i,n)=>r$l(r$2,n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3],n.lighting.sh.g[4]))),new e$7("lightingAmbientSH_B1",((i,n)=>r$l(r$2,n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3],n.lighting.sh.b[4]))),new e$7("lightingAmbientSH_R2",((i,n)=>r$l(r$2,n.lighting.sh.r[5],n.lighting.sh.r[6],n.lighting.sh.r[7],n.lighting.sh.r[8]))),new e$7("lightingAmbientSH_G2",((i,n)=>r$l(r$2,n.lighting.sh.g[5],n.lighting.sh.g[6],n.lighting.sh.g[7],n.lighting.sh.g[8]))),new e$7("lightingAmbientSH_B2",((i,n)=>r$l(r$2,n.lighting.sh.b[5],n.lighting.sh.b[6],n.lighting.sh.b[7],n.lighting.sh.b[8])))),m.code.add(o$v`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),g.pbrMode!==c$d.Normal&&g.pbrMode!==c$d.Schematic||m.code.add(o$v`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));}const a$2=n$e(),r$2=n$m();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t$5(n){n.uniforms.add(new e$i("mainLightDirection",((i,n)=>n.lighting.mainLight.direction)));}function a$1(n){n.uniforms.add(new e$i("mainLightIntensity",((i,n)=>n.lighting.mainLight.intensity)));}function o$2(i){t$5(i.fragment),a$1(i.fragment),i.fragment.code.add(o$v`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t$4(t){const a=t.fragment.code;a.add(o$v`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add(o$v`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add(o$v`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t$3(t){t.vertex.code.add(o$v`const float PI = 3.141592653589793;`),t.fragment.code.add(o$v`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n$4(n,r){const l=n.fragment.code;n.include(t$3),r.pbrMode!==c$d.Normal&&r.pbrMode!==c$d.Schematic&&r.pbrMode!==c$d.Terrain&&r.pbrMode!==c$d.TerrainWithWater||(l.add(o$v`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),l.add(o$v`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),r.pbrMode!==c$d.Normal&&r.pbrMode!==c$d.Schematic||(n.include(t$4),l.add(o$v`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),l.add(o$v`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),l.add(o$v`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),l.add(o$v`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`));}function r$1(e,o){const n=e.fragment.code;e.include(t$3),n.add(o$v`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${o.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),n.add(o$v`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),n.add(o$v`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),n.add(o$v`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),n.add(o$v`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class s$2 extends i$c{constructor(o,s){super(o,"bool",a$9.Pass,((r,e,t)=>r.setUniform1b(o,s(e,t))));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class i$2{constructor(s=n$e()){this.intensity=s;}}class c$2{constructor(i=n$e(),c=r$h(.57735,.57735,.57735)){this.intensity=i,this.direction=c;}}class n$3{constructor(i=n$e(),c=r$h(.57735,.57735,.57735),n=!0,r=1,h=1){this.intensity=i,this.direction=c,this.castShadows=n,this.specularStrength=r,this.environmentStrength=h;}}class r{constructor(){this.r=[0],this.g=[0],this.b=[0];}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t$2(t,n){let e=0;for(let l=0;l<t.length;l++)e+=t[l]*n[l];return e}function n$2(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]*n[l];return e}function e$2(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]*n;return e}function l$2(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]+n[l];return e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function u$2(t){return (t+1)*(t+1)}function l$1(n){return i$j(Math.floor(Math.sqrt(n)-1),0,2)}function m$1(t,n,o){const r=t[0],e=t[1],s=t[2],i=o||[];return i.length=u$2(n),n>=0&&(i[0]=.28209479177),n>=1&&(i[1]=.4886025119*r,i[2]=.4886025119*s,i[3]=.4886025119*e),n>=2&&(i[4]=1.09254843059*r*e,i[5]=1.09254843059*e*s,i[6]=.31539156525*(3*s*s-1),i[7]=1.09254843059*r*s,i[8]=.54627421529*(r*r-e*e)),i}function p$2(t,n){const o=u$2(t),r=n||{r:[],g:[],b:[]};r.r.length=r.g.length=r.b.length=o;for(let e=0;e<o;e++)r.r[e]=r.g[e]=r.b[e]=0;return r}function y(t,o){const r=l$1(o.r.length);for(const e of t)j$7(P$2,e.direction),m$1(P$2,r,v$2),n$2(v$2,k$2),e$2(v$2,e.intensity[0],I$3),l$2(o.r,I$3),e$2(v$2,e.intensity[1],I$3),l$2(o.g,I$3),e$2(v$2,e.intensity[2],I$3),l$2(o.b,I$3);return o}function b(t,n){m$1(P$2,0,v$2);for(const o of t)n.r[0]+=v$2[0]*k$2[0]*o.intensity[0]*4*Math.PI,n.g[0]+=v$2[0]*k$2[0]*o.intensity[1]*4*Math.PI,n.b[0]+=v$2[0]*k$2[0]*o.intensity[2]*4*Math.PI;return n}function M$1(t,n,e,s){p$2(n,s),o$s(e.intensity,0,0,0);let i=!1;const u=S,l=d,m=j$2;u.length=0,l.length=0,m.length=0;for(const o of t)o instanceof n$3&&!i?(r$i(e.direction,o.direction),r$i(e.intensity,o.intensity),e.specularStrength=o.specularStrength,e.environmentStrength=o.environmentStrength,e.castShadows=o.castShadows,i=!0):o instanceof n$3||o instanceof c$2?u.push(o):o instanceof i$2?l.push(o):o instanceof r&&m.push(o);y(u,s),b(l,s);for(const o of m)l$2(s.r,o.r),l$2(s.g,o.g),l$2(s.b,o.b);}const S=[],d=[],j$2=[],v$2=[0],I$3=[0],P$2=n$e(),k$2=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class g{constructor(){this.color=n$e(),this.intensity=1;}}class m{constructor(){this.direction=n$e(),this.ambient=new g,this.diffuse=new g;}}const l=.4;class _{constructor(){this._shOrder=2,this._legacy=new m,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new r,this._mainLight=new n$3(n$e(),r$h(1,0,0),!1);}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(i){M$1(i,this._shOrder,this._mainLight,this._sphericalHarmonics),r$i(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,g$d(this._legacy.diffuse.color,this._mainLight.intensity,r),r$i(L$1,this._legacy.diffuse.color),g$d(L$1,L$1,l*this.globalFactor),u$g(this._legacy.ambient.color,this._legacy.ambient.color,L$1);}copyFrom(i){this._sphericalHarmonics.r=Array.from(i.sh.r),this._sphericalHarmonics.g=Array.from(i.sh.g),this._sphericalHarmonics.b=Array.from(i.sh.b),r$i(this._mainLight.direction,i.mainLight.direction),r$i(this._mainLight.intensity,i.mainLight.intensity),this._mainLight.castShadows=i.mainLight.castShadows,this._mainLight.specularStrength=i.mainLight.specularStrength,this._mainLight.environmentStrength=i.mainLight.environmentStrength,this.globalFactor=i.globalFactor,this.noonFactor=i.noonFactor;}lerpLighting(s,h,n){if(A$7(this._mainLight.intensity,s.mainLight.intensity,h.mainLight.intensity,n),this._mainLight.environmentStrength=s$m(s.mainLight.environmentStrength,h.mainLight.environmentStrength,n),this._mainLight.specularStrength=s$m(s.mainLight.specularStrength,h.mainLight.specularStrength,n),r$i(this._mainLight.direction,h.mainLight.direction),this._mainLight.castShadows=h.mainLight.castShadows,this.globalFactor=s$m(s.globalFactor,h.globalFactor,n),this.noonFactor=s$m(s.noonFactor,h.noonFactor,n),s.sh.r.length===h.sh.r.length)for(let t=0;t<h.sh.r.length;t++)this._sphericalHarmonics.r[t]=s$m(s.sh.r[t],h.sh.r[t],n),this._sphericalHarmonics.g[t]=s$m(s.sh.g[t],h.sh.g[t],n),this._sphericalHarmonics.b[t]=s$m(s.sh.b[t],h.sh.b[t],n);else for(let i=0;i<h.sh.r.length;i++)this._sphericalHarmonics.r[i]=h.sh.r[i],this._sphericalHarmonics.g[i]=h.sh.g[i],this._sphericalHarmonics.b[i]=h.sh.b[i];}}const L$1=n$e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function h$2(n){n.constants.add("ambientBoostFactor","float",l);}function u$1(n){n.uniforms.add(new o$b("lightingGlobalFactor",((n,i)=>i.lighting.globalFactor)));}function p$1(g,p){const v=g.fragment;switch(g.include(t$6,p),p.pbrMode!==c$d.Disabled&&g.include(n$4,p),g.include(m$2,p),g.include(t$3),v.code.add(o$v`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${p.pbrMode===c$d.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),h$2(v),u$1(v),t$5(v),v.code.add(o$v`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${p.spherical?o$v`normalize(vPosWorld)`:o$v`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),a$1(v),v.code.add(o$v`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),p.pbrMode){case c$d.Disabled:case c$d.WaterOnIntegratedMesh:case c$d.Water:g.include(o$2),v.code.add(o$v`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case c$d.Normal:case c$d.Schematic:v.code.add(o$v`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),v.code.add(o$v`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),p.useFillLights?v.uniforms.add(new s$2("hasFillLights",((n,i)=>i.enableFillLights))):v.constants.add("hasFillLights","bool",!1),v.code.add(o$v`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),v.uniforms.add(new o$b("lightingSpecularStrength",((n,i)=>i.lighting.mainLight.specularStrength)),new o$b("lightingEnvironmentStrength",((n,i)=>i.lighting.mainLight.environmentStrength))),v.code.add(o$v`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),v.code.add(o$v`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${p.pbrMode===c$d.Schematic?o$v`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:o$v`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case c$d.Terrain:case c$d.TerrainWithWater:g.include(o$2),v.code.add(o$v`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:n$h(p.pbrMode);case c$d.COUNT:}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n$1(n,o){o.hasMultipassTerrain&&(n.fragment.include(a$4),n.fragment.uniforms.add(new s$8("terrainDepthTexture",((e,r)=>r.multipassTerrain.linearDepthTexture))),n.fragment.uniforms.add(new e$c("nearFar",((e,r)=>r.camera.nearFar))),n.fragment.uniforms.add(new e$c("inverseViewport",((e,r)=>r.inverseViewport))),n.fragment.code.add(o$v`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${o.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `));}class o$1{constructor(){this.enabled=!1,this.cullAboveGround=!1;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o extends i$c{constructor(r,o,s){super(r,"mat4",a$9.Draw,((e,s,t,i)=>e.setUniformMatrix4fv(r,o(s,t,i))),s);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e$1 extends i$c{constructor(r,e,o){super(r,"mat4",a$9.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))),o);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class p extends n$i{constructor(){super(...arguments),this.origin=n$e();}}class c$1 extends p{}class h$1 extends n$i{constructor(){super(...arguments),this.modelTransformation=o$t;}}class v$1 extends h$1{constructor(){super(...arguments),this.origin=n$e();}}function f(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new e$1("shadowMapMatrix",((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),x(e));}function u(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new o("shadowMapMatrix",((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),x(e));}function x(e){const a=e.fragment;a.include(a$6),a.uniforms.add(new s$8("shadowMapTex",((e,a)=>a.shadowMap.depthTexture)),new e$9("numCascades",((e,a)=>a.shadowMap.numCascades)),new e$7("cascadeDistances",((e,a)=>a.shadowMap.cascadeDistances))),a.code.add(o$v`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + (numCascades == 1 ? 1.0 : 0.5) * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float texSize, sampler2D _depthTex) {
float halfPixelSize = 0.5 / texSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, float(textureSize(shadowMapTex, 0).x), shadowMapTex);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function a(a){a.vertex.uniforms.add(new e$g("colorTextureTransformMatrix",(e=>null!=e.colorTextureTransformMatrix?e.colorTextureTransformMatrix:e$n()))),a.varyings.add("colorUV","vec2"),a.vertex.code.add(o$v`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);}function s$1(a){a.vertex.uniforms.add(new e$g("normalTextureTransformMatrix",(e=>null!=e.normalTextureTransformMatrix?e.normalTextureTransformMatrix:e$n()))),a.varyings.add("normalUV","vec2"),a.vertex.code.add(o$v`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);}function i$1(a){a.vertex.uniforms.add(new e$g("emissiveTextureTransformMatrix",(e=>null!=e.emissiveTextureTransformMatrix?e.emissiveTextureTransformMatrix:e$n()))),a.varyings.add("emissiveUV","vec2"),a.vertex.code.add(o$v`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);}function n(a){a.vertex.uniforms.add(new e$g("occlusionTextureTransformMatrix",(e=>null!=e.occlusionTextureTransformMatrix?e.occlusionTextureTransformMatrix:e$n()))),a.varyings.add("occlusionUV","vec2"),a.vertex.code.add(o$v`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);}function t$1(a){a.vertex.uniforms.add(new e$g("metallicRoughnessTextureTransformMatrix",(e=>null!=e.metallicRoughnessTextureTransformMatrix?e.metallicRoughnessTextureTransformMatrix:e$n()))),a.varyings.add("metallicRoughnessUV","vec2"),a.vertex.code.add(o$v`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e){e.code.add(o$v`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function i(i){i.include(e),i.code.add(o$v`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o$v.int(n$n.Multiply)}) {
        return allMixed;
      }
      if (mode == ${o$v.int(n$n.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o$v.int(n$n.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o$v.int(n$n.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o$v.int(n$n.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function Y$1(Y){const Z=new i$4,{vertex:ee,fragment:re,varyings:oe}=Z;if(p$5(ee,Y),Z.include(o$h),oe.add("vpos","vec3"),Z.include(l$8,Y),Z.include(p$4,Y),Z.include(a$7,Y),Y.hasColorTextureTransform&&Z.include(a),Y.output===h$a.Color||Y.output===h$a.Alpha){Y.hasNormalTextureTransform&&Z.include(s$1),Y.hasEmissionTextureTransform&&Z.include(i$1),Y.hasOcclusionTextureTransform&&Z.include(n),Y.hasMetallicRoughnessTextureTransform&&Z.include(t$1),f$7(ee,Y),Z.include(t$k,Y),Z.include(o$d,Y);const s=Y.normalType===a$a.Attribute||Y.normalType===a$a.Compressed;s&&Y.offsetBackfaces&&Z.include(e$b),Z.include(m$6,Y),Z.include(c$9,Y),Y.instancedColor&&Z.attributes.add(O$8.INSTANCECOLOR,"vec4"),oe.add("vPositionLocal","vec3"),Z.include(o$l,Y),Z.include(d$7,Y),Z.include(i$7,Y),Z.include(e$8,Y),ee.uniforms.add(new e$7("externalColor",(e=>e.externalColor))),oe.add("vcolorExt","vec4"),Y.hasMultipassTerrain&&oe.add("depth","float");const l=Y.hasModelTransformation;if(l){const a=e$s();ee.uniforms.add(new e$f("model",(e=>e.modelTransformation??o$t))),ee.uniforms.add(new e$g("normalTransform",(r=>(g$e(a,r.modelTransformation??o$t),a))));}ee.code.add(o$v`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${Y.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${o$v.float(t$i)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          ${l?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${s?o$v`vNormalWorld = ${l?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormal(vvLocalNormal(normalModel()))"};`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${Y.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${s&&Y.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${Y.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${Y.hasColorTextureTransform?o$v`forwardColorUV();`:""}
        ${Y.hasNormalTextureTransform?o$v`forwardNormalUV();`:""}
        ${Y.hasEmissionTextureTransform?o$v`forwardEmissiveUV();`:""}
        ${Y.hasOcclusionTextureTransform?o$v`forwardOcclusionUV();`:""}
        ${Y.hasMetallicRoughnessTextureTransform?o$v`forwardMetallicRoughnessUV();`:""}
      }
    `);}switch(Y.output){case h$a.Alpha:Z.include(P$4,Y),Z.include(s$4,Y),Z.include(n$1,Y),re.uniforms.add(new o$b("opacity",(e=>e.opacity)),new o$b("layerOpacity",(e=>e.layerOpacity))),Y.hasColorTexture&&re.uniforms.add(new s$8("tex",(e=>e.texture))),re.include(i),re.code.add(o$v`
      void main() {
        discardBySlice(vpos);
        ${Y.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${Y.hasColorTexture?o$v`
                vec4 texColor = texture(tex, ${Y.hasColorTextureTransform?o$v`colorUV`:o$v`vuv0`});
                ${Y.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:o$v`vec4 texColor = vec4(1.0);`}
        ${Y.hasVertexColors?o$v`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o$v`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case h$a.Color:Z.include(P$4,Y),Z.include(p$1,Y),Z.include(t$6,Y),Z.include(s$4,Y),Z.include(Y.instancedDoublePrecision?f:u,Y),Z.include(n$1,Y),f$7(re,Y),re.uniforms.add(ee.uniforms.get("localOrigin"),new e$i("ambient",(e=>e.ambient)),new e$i("diffuse",(e=>e.diffuse)),new o$b("opacity",(e=>e.opacity)),new o$b("layerOpacity",(e=>e.layerOpacity))),Y.hasColorTexture&&re.uniforms.add(new s$8("tex",(e=>e.texture))),Z.include(l$d,Y),Z.include(n$4,Y),re.include(i),Z.include(e$k,Y),h$2(re),u$1(re),a$1(re),re.code.add(o$v`
      void main() {
        discardBySlice(vpos);
        ${Y.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${Y.hasColorTexture?o$v`
                vec4 texColor = texture(tex, ${Y.hasColorTextureTransform?o$v`colorUV`:o$v`vuv0`});
                ${Y.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:o$v`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${Y.normalType===a$a.ScreenDerivative?o$v`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:o$v`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${Y.pbrMode===c$d.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${Y.receiveShadows?"readShadowMap(vpos, linearDepth)":Y.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${Y.hasVertexColors?o$v`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o$v`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${Y.hasNormalTexture?o$v`
                mat3 tangentSpace = ${Y.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${Y.hasNormalTextureTransform?o$v`normalUV`:"vuv0"});`:o$v`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${Y.spherical?o$v`normalize(posWorld);`:o$v`vec3(0.0, 0.0, 1.0);`}

        ${Y.snowCover?o$v`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${Y.pbrMode===c$d.Normal||Y.pbrMode===c$d.Schematic?o$v`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${Y.snowCover?o$v`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:o$v`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${Y.transparencyPassType===o$y.Color?o$v`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `);}return Z.include(b$1,Y),Z}const Z$1=Object.freeze(Object.defineProperty({__proto__:null,build:Y$1},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class k$1 extends f$9{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=e$w(n$b),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=n$q.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=r$h(0,0,0),this.instancedDoublePrecision=!1,this.normalType=a$a.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=r$h(.2,.2,.2),this.diffuse=r$h(.8,.8,.8),this.externalColor=r$m(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=n$e(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=e$x.Less,this.textureAlphaMode=i$o.Blend,this.textureAlphaCutoff=o$f,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=o$i.Occlude;}}class N$1 extends v$7{constructor(){super(...arguments),this.origin=n$e(),this.slicePlaneLocalOrigin=this.origin;}}class q extends e$e{initializeConfiguration(e,t){t.spherical=e.viewingMode===l$l.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?d$d.Default:d$d.None,t.objectAndLayerIdColorInstanced=t.instanced;}initializeProgram(e){return this._initializeProgram(e,q.shader)}_initializeProgram(e,t){return new i$a(e.rctx,t.get().build(this.configuration),E$6)}_convertDepthTestFunction(e){return e===e$x.Lequal?I$8.LEQUAL:I$8.LESS}_makePipeline(e,t){const i=this.configuration,r=e===o$y.NONE,s=e===o$y.FrontFace;return W$2({blending:i.output!==h$a.Color&&i.output!==h$a.Alpha||!i.transparent?null:r?c$o:A$9(e),culling:z$1(i)?h$g(i.cullFace):null,depthTest:{func:l$n(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:(r||s)&&i.writeDepth?a$k:null,colorWrite:_$9,stencilWrite:i.hasOccludees?e$d:null,stencilTest:i.hasOccludees?t?o$e:f$8:null,polygonOffset:r||s?null:a$l(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function z$1(e){return e.cullFace!==n$q.None||!e.hasSlicePlane&&(!e.transparent&&!e.doubleSidedMode)}q.shader=new t$h(Z$1,(()=>import('./DefaultMaterial.glsl-a26b2d0d.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class s extends t$d{}e$v([r$7({constValue:!0})],s.prototype,"hasSliceHighlight",void 0),e$v([r$7({constValue:!1})],s.prototype,"hasSliceInVertexProgram",void 0),e$v([r$7({constValue:!1})],s.prototype,"instancedDoublePrecision",void 0),e$v([r$7({constValue:!1})],s.prototype,"hasModelTransformation",void 0),e$v([r$7({constValue:a$9.Pass})],s.prototype,"pbrTextureBindType",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class c extends s{constructor(){super(...arguments),this.output=h$a.Color,this.alphaDiscardMode=i$o.Opaque,this.doubleSidedMode=i$d.None,this.pbrMode=c$d.Disabled,this.cullFace=n$q.None,this.transparencyPassType=o$y.NONE,this.normalType=a$a.Attribute,this.textureCoordinateType=d$d.None,this.customDepthTest=e$x.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1;}}e$v([r$7({count:h$a.COUNT})],c.prototype,"output",void 0),e$v([r$7({count:i$o.COUNT})],c.prototype,"alphaDiscardMode",void 0),e$v([r$7({count:i$d.COUNT})],c.prototype,"doubleSidedMode",void 0),e$v([r$7({count:c$d.COUNT})],c.prototype,"pbrMode",void 0),e$v([r$7({count:n$q.COUNT})],c.prototype,"cullFace",void 0),e$v([r$7({count:o$y.COUNT})],c.prototype,"transparencyPassType",void 0),e$v([r$7({count:a$a.COUNT})],c.prototype,"normalType",void 0),e$v([r$7({count:d$d.COUNT})],c.prototype,"textureCoordinateType",void 0),e$v([r$7({count:e$x.COUNT})],c.prototype,"customDepthTest",void 0),e$v([r$7()],c.prototype,"spherical",void 0),e$v([r$7()],c.prototype,"hasVertexColors",void 0),e$v([r$7()],c.prototype,"hasSymbolColors",void 0),e$v([r$7()],c.prototype,"hasVerticalOffset",void 0),e$v([r$7()],c.prototype,"hasSlicePlane",void 0),e$v([r$7()],c.prototype,"hasSliceHighlight",void 0),e$v([r$7()],c.prototype,"hasColorTexture",void 0),e$v([r$7()],c.prototype,"hasMetallicRoughnessTexture",void 0),e$v([r$7()],c.prototype,"hasEmissionTexture",void 0),e$v([r$7()],c.prototype,"hasOcclusionTexture",void 0),e$v([r$7()],c.prototype,"hasNormalTexture",void 0),e$v([r$7()],c.prototype,"hasScreenSizePerspective",void 0),e$v([r$7()],c.prototype,"hasVertexTangents",void 0),e$v([r$7()],c.prototype,"hasOccludees",void 0),e$v([r$7()],c.prototype,"hasMultipassTerrain",void 0),e$v([r$7()],c.prototype,"hasModelTransformation",void 0),e$v([r$7()],c.prototype,"offsetBackfaces",void 0),e$v([r$7()],c.prototype,"vvSize",void 0),e$v([r$7()],c.prototype,"vvColor",void 0),e$v([r$7()],c.prototype,"receiveShadows",void 0),e$v([r$7()],c.prototype,"receiveAmbientOcclusion",void 0),e$v([r$7()],c.prototype,"textureAlphaPremultiplied",void 0),e$v([r$7()],c.prototype,"instanced",void 0),e$v([r$7()],c.prototype,"instancedColor",void 0),e$v([r$7()],c.prototype,"objectAndLayerIdColorInstanced",void 0),e$v([r$7()],c.prototype,"instancedDoublePrecision",void 0),e$v([r$7()],c.prototype,"doublePrecisionRequiresObfuscation",void 0),e$v([r$7()],c.prototype,"writeDepth",void 0),e$v([r$7()],c.prototype,"transparent",void 0),e$v([r$7()],c.prototype,"enableOffset",void 0),e$v([r$7()],c.prototype,"cullAboveGround",void 0),e$v([r$7()],c.prototype,"snowCover",void 0),e$v([r$7()],c.prototype,"hasColorTextureTransform",void 0),e$v([r$7()],c.prototype,"hasEmissionTextureTransform",void 0),e$v([r$7()],c.prototype,"hasNormalTextureTransform",void 0),e$v([r$7()],c.prototype,"hasOcclusionTextureTransform",void 0),e$v([r$7()],c.prototype,"hasMetallicRoughnessTextureTransform",void 0),e$v([r$7({constValue:!0})],c.prototype,"hasVvInstancing",void 0),e$v([r$7({constValue:!1})],c.prototype,"useCustomDTRExponentForWater",void 0),e$v([r$7({constValue:!1})],c.prototype,"supportsTextureAtlas",void 0),e$v([r$7({constValue:!0})],c.prototype,"useFillLights",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function I$2(I){const R=new i$4,{vertex:z,fragment:k,varyings:U}=R;return p$5(z,I),R.include(o$h),U.add("vpos","vec3"),R.include(l$8,I),R.include(p$4,I),R.include(a$7,I),I.output!==h$a.Color&&I.output!==h$a.Alpha||(f$7(R.vertex,I),R.include(t$k,I),R.include(o$d,I),I.offsetBackfaces&&R.include(e$b),I.instancedColor&&R.attributes.add(O$8.INSTANCECOLOR,"vec4"),U.add("vNormalWorld","vec3"),U.add("localvpos","vec3"),I.hasMultipassTerrain&&U.add("depth","float"),R.include(o$l,I),R.include(d$7,I),R.include(i$7,I),R.include(e$8,I),z.uniforms.add(new e$7("externalColor",(e=>e.externalColor))),U.add("vcolorExt","vec4"),z.code.add(o$v`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${I.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${o$v.float(t$i)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${I.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${I.hasMultipassTerrain?o$v`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),I.output===h$a.Alpha&&(R.include(P$4,I),R.include(s$4,I),R.include(n$1,I),k.uniforms.add(new o$b("opacity",(e=>e.opacity)),new o$b("layerOpacity",(e=>e.layerOpacity))),I.hasColorTexture&&k.uniforms.add(new s$8("tex",(e=>e.texture))),k.include(i),k.code.add(o$v`
      void main() {
        discardBySlice(vpos);
        ${I.hasMultipassTerrain?o$v`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${I.hasColorTexture?o$v`
                vec4 texColor = texture(tex, ${I.hasColorTextureTransform?o$v`colorUV`:o$v`vuv0`});
                ${I.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:o$v`vec4 texColor = vec4(1.0);`}
        ${I.hasVertexColors?o$v`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o$v`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),I.output===h$a.Color&&(R.include(P$4,I),R.include(p$1,I),R.include(t$6,I),R.include(s$4,I),R.include(I.instancedDoublePrecision?f:u,I),R.include(n$1,I),f$7(R.fragment,I),t$5(k),h$2(k),u$1(k),k.uniforms.add(z.uniforms.get("localOrigin"),z.uniforms.get("view"),new e$i("ambient",(e=>e.ambient)),new e$i("diffuse",(e=>e.diffuse)),new o$b("opacity",(e=>e.opacity)),new o$b("layerOpacity",(e=>e.layerOpacity))),I.hasColorTexture&&k.uniforms.add(new s$8("tex",(e=>e.texture))),R.include(l$d,I),R.include(n$4,I),k.include(i),a$1(k),k.code.add(o$v`
      void main() {
        discardBySlice(vpos);
        ${I.hasMultipassTerrain?o$v`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${I.hasColorTexture?o$v`
                vec4 texColor = texture(tex, ${I.hasColorTextureTransform?o$v`colorUV`:o$v`vuv0`});
                ${I.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:o$v`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${I.pbrMode===c$d.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${I.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":I.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${I.hasVertexColors?o$v`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o$v`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${I.snowCover?o$v`albedo = mix(albedo, vec3(1), 0.9);`:o$v``}
        ${o$v`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${I.pbrMode===c$d.Normal||I.pbrMode===c$d.Schematic?I.spherical?o$v`vec3 normalGround = normalize(vpos + localOrigin);`:o$v`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:o$v``}
        ${I.pbrMode===c$d.Normal||I.pbrMode===c$d.Schematic?o$v`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${I.snowCover?o$v`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:o$v`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${I.transparencyPassType===o$y.Color?o$v`fragColor = premultiplyAlpha(fragColor);`:o$v``}
      }
    `)),R.include(b$1,I),R}const R=Object.freeze(Object.defineProperty({__proto__:null,build:I$2},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t extends q{initializeConfiguration(i,a){super.initializeConfiguration(i,a),a.hasMetallicRoughnessTexture=!1,a.hasEmissionTexture=!1,a.hasOcclusionTexture=!1,a.hasNormalTexture=!1,a.hasModelTransformation=!1,a.normalType=a$a.Attribute,a.doubleSidedMode=i$d.WindingOrder,a.hasVertexTangents=!1;}initializeProgram(e){return this._initializeProgram(e,t.shader)}}t.shader=new t$h(R,(()=>import('./RealisticTree.glsl-8abcfa29.js')));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class I$1 extends d$a{constructor(e){super(e,L),this.supportsEdges=!0,this._configuration=new c,this._vertexBufferLayout=j$1(this.parameters);}isVisibleForOutput(e){return e!==h$a.Shadow&&e!==h$a.ShadowExcludeHighlight&&e!==h$a.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return !1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:s,vvColor:a}=e,i="replace"===e.colorMixMode,o=e.opacity>0,n=e.externalColor&&e.externalColor[3]>0,h=t||a||s;return r&&h?i||o:r?i?n:o:h?i||o:i?n:o}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?n$q.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==h$a.Color&&e!==h$a.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=i$d.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?i$d.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?i$d.WindingOrder:i$d.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!t.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?c$d.Schematic:c$d.Normal:c$d.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<S$9,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(h,l,u,m,p,d){if(null!=this.parameters.verticalOffset){const h=u.camera;o$s(z,l[12],l[13],l[14]);let d=null;switch(u.viewingMode){case l$l.Global:d=z$3(B,z);break;case l$l.Local:d=r$i(B,V);}let f=0;const g=e$p(G,z,h.eye),T=s$h(g),_=g$d(g,g,1/T);let x=null;this.parameters.screenSizePerspective&&(x=P$8(d,_)),f+=V$3(h,T,this.parameters.verticalOffset,x??0,this.parameters.screenSizePerspective),g$d(d,d,f),S$a(H,d,u.transform.inverseRotation),m=e$p(D,m,H),p=e$p(N,p,H);}h$8(h,u,m,p,S$4(u.verticalOffset),d);}requiresSlot(e,t){if(t===h$a.Color||t===h$a.Alpha||t===h$a.Depth||t===h$a.Normal||t===h$a.Shadow||t===h$a.ShadowHighlight||t===h$a.ShadowExcludeHighlight||t===h$a.Highlight||t===h$a.ObjectAndLayerIdColor){return e===(this.parameters.transparent?this.parameters.writeDepth?E$5.TRANSPARENT_MATERIAL:E$5.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:E$5.OPAQUE_MATERIAL)||e===E$5.DRAPED_MATERIAL}return !1}createGLMaterial(e){return new P$1(e)}createBufferWriter(){return new r$a(this._vertexBufferLayout)}}class P$1 extends r$c{constructor(e){super({...e,...e.material.parameters});}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled});}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees});}beginSlot(t$1){this._output!==h$a.Color&&this._output!==h$a.Alpha||(this._updateShadowState(t$1),this._updateOccludeeState(t$1));const r=this._material.parameters;this.updateTexture(r.textureId);const s=t$1.camera.viewInverseTransposeMatrix;return o$s(r.origin,s[3],s[7],s[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?t:q,t$1)}}class E$1 extends k$1{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1;}}const L=new E$1;function j$1(e){const t=H$5().vec3f(O$8.POSITION);e.normalType===a$a.Compressed?t.vec2i16(O$8.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(O$8.NORMAL),e.hasVertexTangents&&t.vec4f(O$8.TANGENT);return (e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(O$8.UV0),e.hasVertexColors&&t.vec4u8(O$8.COLOR),e.hasSymbolColors&&t.vec4u8(O$8.SYMBOLCOLOR),has("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(O$8.OBJECTANDLAYERIDCOLOR),t}const D=n$e(),N=n$e(),V=r$h(0,0,1),B=n$e(),H=n$e(),z=n$e(),G=n$e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const h=s$j.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function v(e,t){const n=await A(e,t),s=await T(n.textureDefinitions??{},t);let a=0;for(const r in s)if(s.hasOwnProperty(r)){const e=s[r];a+=e?.image?e.image.width*e.image.height*4:0;}return {resource:n,textures:s,size:a+e$y(n)}}async function A(r,n){const s=null!=n&&n.streamDataRequester;if(s)return j(r,s,n);const a=await _$b(j$8(r,n));if(!0===a.ok)return a.value.data;f$h(a.error),M(a.error);}async function j(e,r,n){const s=await _$b(r.request(e,"json",n));if(!0===s.ok)return s.value;f$h(s.error),M(s.error.details.url);}function M(e){throw new s$l("",`Request for object resource failed: ${e}`)}function P(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(h.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(h.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(h.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(h.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1);}}else h.warn("Indexed geometries must specify faces"),n=!1;break}default:h.warn(`Unsupported topology '${r}'`),n=!1;}e.params.material||(h.warn("Geometry requires material"),n=!1);const s=e.params.vertexAttributes;for(const a in s){s[a].values||(h.warn("Geometries with externally defined attributes are not yet supported"),n=!1);}return n}function I(e,t){const r=new Array,n=new Array,s=new Array,o=new t$x,u=e.resource,c=r$p.parse(u.version||"1.0","wosr");O.validate(c);const p=u.model.name,d=u.model.geometries,x=u.materialDefinitions??{},h=e.textures;let v=0;const A=new Map;for(let a=0;a<d.length;a++){const e=d[a];if(!P(e))continue;const i=k(e),u=e.params.vertexAttributes,c=[];for(const t in u){const e=u[t],r=e.values;c.push([t,new s$o(r,e.valuesPerElement,!0)]);}const p=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)p.push([e,t[e].values]);}const j=i.texture,M=h&&h[j];if(M&&!A.has(j)){const{image:e,parameters:t}=M,r=new w$5(e,t);n.push(r),A.set(j,r);}const I=A.get(j),U=I?I.id:void 0,T=i.material;let O=o.get(T,j);if(null==O){const e=x[T.substring(T.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=M&&M.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,s=M?E(M.alphaChannelUsage):void 0,a={ambient:e$w(e.diffuse),diffuse:e$w(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:s,textureAlphaCutoff:.33,textureId:U,initTextureTransparent:!0,doubleSided:!0,cullFace:n$q.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:M?.parameters.preMultiplyAlpha??!1};null!=t&&t.materialParamsMixin&&Object.assign(a,t.materialParamsMixin),O=new I$1(a),o.set(T,j,O);}s.push(O);const q=new b$7(O,c,p);v+=p.find((e=>e[0]===O$8.POSITION))?.[1].length??0,r.push(q);}return {engineResources:[{name:p,stageResources:{textures:n,materials:s,geometries:r},pivotOffset:u.model.pivotOffset,numberOfVertices:v,lodThreshold:null}],referenceBoundingBox:U(r)}}function U(e){const t=P$9();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&(h$h(t,r.bbMin),h$h(t,r.bbMax));})),t}async function T(e,t){const r=new Array;for(const a in e){const n=e[a],s=n.images[0].data;if(!s){h.warn("Externally referenced texture data is not yet supported");continue}const o=n.encoding+";base64,"+s,i="/textureDefinitions/"+a,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:D$3.REPEAT,t:D$3.REPEAT},preMultiplyAlpha:E(l)!==i$o.Opaque},c=null!=t&&t.disableTextures?Promise.resolve(null):t$u(o,t);r.push(c.then((e=>({refId:i,image:e,parameters:u,alphaChannelUsage:l}))));}const n=await Promise.all(r),s={};for(const a of n)s[a.refId]=a;return s}function E(e){switch(e){case"mask":return i$o.Mask;case"maskAndTransparency":return i$o.MaskBlend;case"none":return i$o.Opaque;default:return i$o.Blend}}function k(e){const t=e.params;return {id:1,material:t.material,texture:t.texture,region:t.texture}}const O=new r$p(1,2,"wosr");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function X(t,r){const o=Y(a$m(t));if("wosr"===o.fileType){const e=await(r.cache?r.cache.loadWOSR(o.url,r):v(o.url,r)),{engineResources:t,referenceBoundingBox:s}=I(e,r);return {lods:t,referenceBoundingBox:s,isEsriSymbolResource:!1,isWosr:!0}}const s=await(r.cache?r.cache.loadGLTF(o.url,r,!!r.usePBR):l$o(new n$r(r.streamDataRequester),o.url,r,r.usePBR)),i=s.model.meta?.ESRI_proxyEllipsoid,n=s.meta.isEsriSymbolResource&&null!=i&&s.meta.uri.includes("/RealisticTrees/");n&&!s.customMeta.esriTreeRendering&&(s.customMeta.esriTreeRendering=!0,se(s,i));const l=!!r.usePBR,u=s.meta.isEsriSymbolResource?{usePBR:l,isSchematic:!1,treeRendering:n,mrrFactors:[...s$5]}:{usePBR:l,isSchematic:!1,treeRendering:!1,mrrFactors:[...n$b]},a={...r.materialParamsMixin,treeRendering:n},{engineResources:c,referenceBoundingBox:m}=Z(s,u,a,r.skipHighLods&&null==o.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return {lods:c,referenceBoundingBox:m,isEsriSymbolResource:s.meta.isEsriSymbolResource,isWosr:!1}}function Y(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return {fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Z(e,t,r,o){const s=e.model,i=new Array,n=new Map,l=new Map,u=s.lods.length,a=P$9();return s.lods.forEach(((e,c)=>{const m=!0===o.skipHighLods&&(u>1&&0===c||u>3&&1===c)||!1===o.skipHighLods&&null!=o.singleLodIndex&&c!==o.singleLodIndex;if(m&&0!==c)return;const f=new t$m(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const o=m?new I$1({}):ee(s,e,f,t,r,n,l),{geometry:i,vertexCount:u}=te(e,null!=o?o:new I$1({})),p=i.boundingInfo;null!=p&&0===c&&(h$h(a,p.bbMin),h$h(a,p.bbMax)),null!=o&&(f.stageResources.geometries.push(i),f.numberOfVertices+=u);})),m||i.push(f);})),{engineResources:i,referenceBoundingBox:a}}function ee(e,t,r,o,s,i,n){const l=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),u=e.materials.get(t.material),a=null!=t.attributes.texCoord0,c=null!=t.attributes.normal;if(null==u)return null;const m=oe(u.alphaMode);if(!i.has(l)){if(a){const t=(t,r=!1)=>{if(null!=t&&!n.has(t)){const o=e.textures.get(t);if(null!=o){const e=o.data;n.set(t,new w$5(t$y(e)?e.data:e,{...o.parameters,preMultiplyAlpha:!t$y(e)&&r,encoding:t$y(e)&&null!=e.encoding?e.encoding:void 0}));}}};t(u.textureColor,m!==i$o.Opaque),t(u.textureNormal),t(u.textureOcclusion),t(u.textureEmissive),t(u.textureMetallicRoughness);}const r=u.color[0]**(1/o$z),f=u.color[1]**(1/o$z),d=u.color[2]**(1/o$z),p=u.emissiveFactor[0]**(1/o$z),g=u.emissiveFactor[1]**(1/o$z),x=u.emissiveFactor[2]**(1/o$z),b=null!=u.textureColor&&a?n.get(u.textureColor):null,h=u$7({normalTexture:u.textureNormal,metallicRoughnessTexture:u.textureMetallicRoughness,metallicFactor:u.metallicFactor,roughnessFactor:u.roughnessFactor,emissiveTexture:u.textureEmissive,emissiveFactor:u.emissiveFactor,occlusionTexture:u.textureOcclusion});i.set(l,new I$1({...o,transparent:m===i$o.Blend,customDepthTest:e$x.Lequal,textureAlphaMode:m,textureAlphaCutoff:u.alphaCutoff,diffuse:[r,f,d],ambient:[r,f,d],opacity:u.opacity,doubleSided:u.doubleSided,doubleSidedType:"winding-order",cullFace:u.doubleSided?n$q.None:n$q.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:c?a$a.Attribute:a$a.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:null!=b?b.id:void 0,colorMixMode:u.colorMixMode,normalTextureId:null!=u.textureNormal&&a?n.get(u.textureNormal).id:void 0,textureAlphaPremultiplied:null!=b&&!!b.parameters.preMultiplyAlpha,occlusionTextureId:null!=u.textureOcclusion&&a?n.get(u.textureOcclusion).id:void 0,emissiveTextureId:null!=u.textureEmissive&&a?n.get(u.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=u.textureMetallicRoughness&&a?n.get(u.textureMetallicRoughness).id:void 0,emissiveFactor:[p,g,x],mrrFactors:h?[...r$9]:[u.metallicFactor,u.roughnessFactor,o.mrrFactors[2]],isSchematic:h,colorTextureTransformMatrix:r$g(u.colorTextureTransform),normalTextureTransformMatrix:r$g(u.normalTextureTransform),occlusionTextureTransformMatrix:r$g(u.occlusionTextureTransform),emissiveTextureTransformMatrix:r$g(u.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:r$g(u.metallicRoughnessTextureTransform),...s}));}const f=i.get(l);if(r.stageResources.materials.push(f),a){const e=e=>{null!=e&&r.stageResources.textures.push(n.get(e));};e(u.textureColor),e(u.textureNormal),e(u.textureOcclusion),e(u.textureEmissive),e(u.textureMetallicRoughness);}return f}function te(e,r){const o=e.attributes.position.count,s=o$A(e.indices||o,e.primitiveType),i=t$n(3*o),{typedBuffer:n,typedBufferStride:l}=e.attributes.position;r$q(i,n,e.transform,3,l);const u=[[O$8.POSITION,new s$o(i,3,!0)]],a=[[O$8.POSITION,s]];if(null!=e.attributes.normal){const r=t$n(3*o),{typedBuffer:i,typedBufferStride:n}=e.attributes.normal;g$e(re,e.transform),n$s(r,i,re,3,n),u.push([O$8.NORMAL,new s$o(r,3,!0)]),a.push([O$8.NORMAL,s]);}if(null!=e.attributes.tangent){const r=t$n(4*o),{typedBuffer:i,typedBufferStride:n}=e.attributes.tangent;g$e(re,e.transform),f$i(r,i,re,4,n),u.push([O$8.TANGENT,new s$o(r,4,!0)]),a.push([O$8.TANGENT,s]);}if(null!=e.attributes.texCoord0){const t=t$n(2*o),{typedBuffer:r,typedBufferStride:i}=e.attributes.texCoord0;n$t(t,r,2,i),u.push([O$8.UV0,new s$o(t,2,!0)]),a.push([O$8.UV0,s]);}if(null!=e.attributes.color){const t=new Uint8Array(4*o);4===e.attributes.color.elementCount?e.attributes.color instanceof c$m?u$k(t,e.attributes.color,255):e.attributes.color instanceof x$6?t$z(t,e.attributes.color):e.attributes.color instanceof L$6&&u$k(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof i$l?u$l(t,e.attributes.color,255,4):e.attributes.color instanceof O$b?t$A(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof E$c&&u$l(t,e.attributes.color,1/256,4)),u.push([O$8.COLOR,new s$o(t,4,!0)]),a.push([O$8.COLOR,s]);}return {geometry:new b$7(r,u,a),vertexCount:o}}const re=e$s();function oe(e){switch(e){case"BLEND":return i$o.Blend;case"MASK":return i$o.Mask;case"OPAQUE":case null:case void 0:return i$o.Opaque}}function se(e,t){for(let r=0;r<e.model.lods.length;++r){const f=e.model.lods[r];for(const d of f.parts){const f=d.attributes.normal;if(null==f)return;const p=d.attributes.position,g=p.count,b=n$e(),T=n$e(),y=n$e(),R=new Uint8Array(4*g),w=new Float64Array(3*g),v=h$f(e$r(),d.transform);let M=0,j=0;for(let o=0;o<g;o++){p.getVec(o,T),f.getVec(o,b),O$9(T,T,d.transform),e$p(y,T,t.center),i$p(y,y,t.radius);const s=y[2],m=s$h(y),g=Math.min(.45+.55*m*m,1);i$p(y,y,t.radius),null!==v&&O$9(y,y,v),z$3(y,y),r+1!==e.model.lods.length&&e.model.lods.length>1&&A$7(y,y,b,s>-1?.2:Math.min(-4*s-3.8,1)),w[M]=y[0],w[M+1]=y[1],w[M+2]=y[2],M+=3,R[j]=255*g,R[j+1]=255*g,R[j+2]=255*g,R[j+3]=255,j+=4;}d.attributes.normal=new i$l(w),d.attributes.color=new x$6(R);}}}

const objectResourceUtils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  fetch: X,
  gltfToEngineResources: Z,
  parseUrl: Y
});

export { I$2 as I, Y$1 as Y, c$4 as c, d$1 as d, m$3 as m, objectResourceUtils as o };

//# sourceMappingURL=objectResourceUtils-f132cee2.js.map