import { e as e$2 } from './deduplicate-9ccb6566.js';
import { H } from './InterleavedLayout-8e8dd790.js';
import { O } from './VertexAttribute-0bdc9233.js';
import { C } from './enums-f1bebe6f.js';
import { t as t$1 } from './VertexElementDescriptor-33a64685.js';
import { fp as M, h6 as w$2, h7 as x, q as o$2, h8 as r$2, h9 as P, ha as _$1, hb as l$1, hc as H$1, hd as e$1, he as z, l as n$1, hf as u$3, aY as t$2 } from './hub-compass-map-68308039.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function r$1(t,r=0){const n=t.stride;return Array.from(t.fields.keys()).filter((e=>{const r=t.fields.get(e)?.optional;return !(r&&r.glPadding)})).map((i=>{const s=t.fields.get(i),f=s.constructor.ElementCount,l=o$1(s.constructor.ElementType),u=s.offset,c=!(!s.optional||!s.optional.glNormalized);return new t$1(i,f,l,u,n,c,r)}))}function o$1(t){const e=n[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const n={u8:C.UNSIGNED_BYTE,u16:C.UNSIGNED_SHORT,u32:C.UNSIGNED_INT,i8:C.BYTE,i16:C.SHORT,i32:C.INT,f32:C.FLOAT};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const A$1=H().vec3f(O.POSITION).u16(O.COMPONENTINDEX).u16(O.U16PADDING),e=H().vec2u8(O.SIDENESS),T=r$1(e),E=H().vec3f(O.POSITION0).vec3f(O.POSITION1).u16(O.COMPONENTINDEX).u8(O.VARIANTOFFSET,{glNormalized:!0}).u8(O.VARIANTSTROKE).u8(O.VARIANTEXTENSION,{glNormalized:!0}).u8(O.U8PADDING,{glPadding:!0}).u16(O.U16PADDING,{glPadding:!0}),S=E.clone().vec3f(O.NORMAL),r=E.clone().vec3f(O.NORMALA).vec3f(O.NORMALB),o=new Map([[O.POSITION0,0],[O.POSITION1,1],[O.COMPONENTINDEX,2],[O.VARIANTOFFSET,3],[O.VARIANTSTROKE,4],[O.VARIANTEXTENSION,5],[O.NORMAL,6],[O.NORMALA,6],[O.NORMALB,7],[O.SIDENESS,8]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const m$2=-1;var u$2;function p$2(n,a,i,l=V){const f=n.vertices.position,g=n.vertices.componentIndex,u=M(l.anglePlanar),p=M(l.angleSignificantEdge),y=Math.cos(p),E=Math.cos(u),N=I.edge,S=N.position0,x$1=N.position1,j=N.faceNormal0,D=N.faceNormal1,F=w$1(n),L=d$2(n),b=L.length/4,k=a.allocate(b);let C=0;const H=b,K=i.allocate(H);let M$1=0,O=0,P$1=0;const T=w$2(0,b),U=new Float32Array(b);U.forEach(((e,t,n)=>{f.getVec(L[4*t],S),f.getVec(L[4*t+1],x$1),n[t]=x(S,x$1);})),T.sort(((e,t)=>U[t]-U[e]));const q=new Array,z=new Array;for(let e=0;e<b;e++){const t=T[e],n=U[t],o=L[4*t],l=L[4*t+1],p=L[4*t+2],d=L[4*t+3],w=d===m$2;if(f.getVec(o,S),f.getVec(l,x$1),w)o$2(j,F[3*p],F[3*p+1],F[3*p+2]),r$2(D,j),N.componentIndex=g.get(o),N.cosAngle=P(j,D);else {if(o$2(j,F[3*p],F[3*p+1],F[3*p+2]),o$2(D,F[3*d],F[3*d+1],F[3*d+2]),N.componentIndex=g.get(o),N.cosAngle=P(j,D),v(N,E))continue;N.cosAngle<-.9999&&r$2(D,j);}O+=n,P$1++,w||h$1(N,y)?(a.write(k,C++,N),q.push(n)):A(N,u)&&(i.write(K,M$1++,N),z.push(n));}const B=new Float32Array(q.reverse()),G=new Float32Array(z.reverse());return {regular:{instancesData:a.trim(k,C),lodInfo:{lengths:B}},silhouette:{instancesData:i.trim(K,M$1),lodInfo:{lengths:G}},averageEdgeLength:O/P$1}}function h$1(e,t){return e.cosAngle<t}function v(e,t){return e.cosAngle>t}function A(e,t){const o=l$1(e.cosAngle),r=I.fwd,c=I.ortho;H$1(r,e.position1,e.position0);return o*(P(_$1(c,e.faceNormal0,e.faceNormal1),r)>0?-1:1)>t}function d$2(e){const t=e.faces.length/3,n=e.faces,o=e.neighbors;let r=0;for(let a=0;a<t;a++){const e=o[3*a],t=o[3*a+1],c=o[3*a+2],s=n[3*a],i=n[3*a+1],l=n[3*a+2];r+=e===m$2||s<i?1:0,r+=t===m$2||i<l?1:0,r+=c===m$2||l<s?1:0;}const c=new Int32Array(4*r);let s=0;for(let a=0;a<t;a++){const e=o[3*a],t=o[3*a+1],r=o[3*a+2],i=n[3*a],l=n[3*a+1],f=n[3*a+2];(e===m$2||i<l)&&(c[s++]=i,c[s++]=l,c[s++]=a,c[s++]=e),(t===m$2||l<f)&&(c[s++]=l,c[s++]=f,c[s++]=a,c[s++]=t),(r===m$2||f<i)&&(c[s++]=f,c[s++]=i,c[s++]=a,c[s++]=r);}return c}function w$1(e){const t=e.faces.length/3,n=e.vertices.position,o=e.faces,r=y$1.v0,c=y$1.v1,s=y$1.v2,a=new Float32Array(3*t);for(let g=0;g<t;g++){const e=o[3*g],t=o[3*g+1],m=o[3*g+2];n.getVec(e,r),n.getVec(t,c),n.getVec(m,s),e$1(c,c,r),e$1(s,s,r),_$1(r,c,s),z(r,r),a[3*g]=r[0],a[3*g+1]=r[1],a[3*g+2]=r[2];}return a}!function(e){e[e.SOLID=0]="SOLID",e[e.SKETCH=1]="SKETCH";}(u$2||(u$2={}));const I={edge:{position0:n$1(),position1:n$1(),faceNormal0:n$1(),faceNormal1:n$1(),componentIndex:0,cosAngle:0},ortho:n$1(),fwd:n$1()},y$1={v0:n$1(),v1:n$1(),v2:n$1()},V={anglePlanar:4,angleSignificantEdge:35};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(t,o,n){const r=o/3,c=new Uint32Array(n+1),e=new Uint32Array(n+1),s=(t,o)=>{t<o?c[t+1]++:e[o+1]++;};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];s(o,n),s(n,r),s(r,o);}let f=0,l=0;for(let x=0;x<n;x++){const t=c[x+1],o=e[x+1];c[x+1]=f,e[x+1]=l,f+=t,l+=o;}const i=new Uint32Array(6*r),a=c[n],w=(t,o,n)=>{if(t<o){const r=c[t+1]++;i[2*r]=o,i[2*r+1]=n;}else {const r=e[o+1]++;i[2*a+2*r]=t,i[2*a+2*r+1]=n;}};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];w(o,n,x),w(n,r,x),w(r,o,x);}const y=(t,o)=>{const n=2*t,r=o-t;for(let c=1;c<r;c++){const t=i[n+2*c],o=i[n+2*c+1];let r=c-1;for(;r>=0&&i[n+2*r]>t;r--)i[n+2*r+2]=i[n+2*r],i[n+2*r+3]=i[n+2*r+1];i[n+2*r+2]=t,i[n+2*r+3]=o;}};for(let x=0;x<n;x++)y(c[x],c[x+1]),y(a+e[x],a+e[x+1]);const A=new Int32Array(3*r),U=(o,n)=>o===t[3*n]?0:o===t[3*n+1]?1:o===t[3*n+2]?2:-1,u=(t,o)=>{const n=U(t,o);A[3*o+n]=-1;},p=(t,o,n,r)=>{const c=U(t,o);A[3*o+c]=r;const e=U(n,r);A[3*r+e]=o;};for(let x=0;x<n;x++){let t=c[x];const o=c[x+1];let n=e[x];const r=e[x+1];for(;t<o&&n<r;){const o=i[2*t],r=i[2*a+2*n];o===r?(p(x,i[2*t+1],r,i[2*a+2*n+1]),t++,n++):o<r?(u(x,i[2*t+1]),t++):(u(r,i[2*a+2*n+1]),n++);}for(;t<o;)u(x,i[2*t+1]),t++;for(;n<r;){u(i[2*a+2*n],i[2*a+2*n+1]),n++;}}return A}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class a$1{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?f$1:p$1;}write(t,o,e){const n=this._edgeHashFunction(e);y.seed=n;const i=y.getIntRange(0,255),r=y.getIntRange(0,this.settings.variants-1),s=.7,a=y.getFloat(),c=255*(.5*g$1(-(1-Math.min(a/s,1))+Math.max(0,a-s)/(1-s),1.2)+.5);t.position0.setVec(o,e.position0),t.position1.setVec(o,e.position1),t.componentIndex.set(o,e.componentIndex),t.variantOffset.set(o,i),t.variantStroke.set(o,r),t.variantExtension.set(o,c);}trim(t,o){return t.slice(0,o)}}const c=new Float32Array(6),m$1=new Uint32Array(c.buffer),u$1=new Uint32Array(1);function p$1(t){const o=c;o[0]=t.position0[0],o[1]=t.position0[1],o[2]=t.position0[2],o[3]=t.position1[0],o[4]=t.position1[1],o[5]=t.position1[2],u$1[0]=5381;for(let e=0;e<m$1.length;e++)u$1[0]=31*u$1[0]+m$1[e];return u$1[0]}function f$1(t){const o=c;o[0]=h(t.position0[0]),o[1]=h(t.position0[1]),o[2]=h(t.position0[2]),o[3]=h(t.position1[0]),o[4]=h(t.position1[1]),o[5]=h(t.position1[2]),u$1[0]=5381;for(let e=0;e<m$1.length;e++)u$1[0]=31*u$1[0]+m$1[e];return u$1[0]}const l=1e4;function h(t){return Math.round(t*l)/l}function g$1(t,o){const e=t<0?-1:1;return Math.abs(t)**o*e}class d$1{constructor(){this._commonWriter=new a$1;}updateSettings(t){this._commonWriter.updateSettings(t);}allocate(t){return S.createBuffer(t)}write(t,n,i){this._commonWriter.write(t,n,i),u$3(_,i.faceNormal0,i.faceNormal1),z(_,_),t.normal.setVec(n,_);}trim(t,o){return this._commonWriter.trim(t,o)}}d$1.Layout=S,d$1.glLayout=r$1(S,1);class w{constructor(){this._commonWriter=new a$1;}updateSettings(t){this._commonWriter.updateSettings(t);}allocate(t){return r.createBuffer(t)}write(t,o,e){this._commonWriter.write(t,o,e),t.normalA.setVec(o,e.faceNormal0),t.normalB.setVec(o,e.faceNormal1);}trim(t,o){return this._commonWriter.trim(t,o)}}w.Layout=r,w.glLayout=r$1(r,1);const _=n$1(),y=new t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function f(e){const t=u(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return p.updateSettings(e.writerSettings),d.updateSettings(e.writerSettings),p$2(t,p,d)}function u(i,r,n,o){if(r){const e=t(n,o,i.count);return new g(n,o,e,i)}const c=e$2(i.buffer,i.stride/4,{originalIndices:n,originalIndicesLength:o}),f=t(c.indices,o,c.uniqueCount);return {faces:c.indices,facesLength:c.indices.length,neighbors:f,vertices:A$1.createView(c.buffer)}}class g{constructor(e,t,i,r){this.faces=e,this.facesLength=t,this.neighbors=i,this.vertices=r;}}const p=new d$1,d=new w,a=H().vec3f(O.POSITION0).vec3f(O.POSITION1),m=H().vec3f(O.POSITION0).vec3f(O.POSITION1).u16(O.COMPONENTINDEX).u16(O.U16PADDING,{glPadding:!0});

export { A$1 as A, a, f, m, p$2 as p, u };

//# sourceMappingURL=edgeProcessing-23e464b6.js.map