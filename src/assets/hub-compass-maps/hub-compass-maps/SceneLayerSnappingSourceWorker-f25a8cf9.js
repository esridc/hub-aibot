import { a6 as s$2, hf as u$1, a7 as g$3, l as n, hH as c, hs as h$2, hh as w$1, q as o, is as r$1, it as p$4, gB as l$1, h8 as r$2, iu as A$2, bi as e, ad as r$3, iv as q$2, h7 as x$1, j as s$4, hq as t$1, a1 as e$1, a3 as a$3 } from './hub-compass-map-68308039.js';
import { v as v$3, b as b$3, j as j$4 } from './lineSegment-816f6df2.js';
import { d, k as k$2, v as v$2, s as s$3, f as f$2, r, q as q$1, p as p$3, z as z$1, a as k$3, V, _ as _$2, Q } from './sphere-770223d9.js';
import { h as h$1, p as p$2, _ as _$1, G, R as R$1, D as D$1 } from './plane-3388b045.js';
import { i as i$2 } from './InterleavedLayout-8e8dd790.js';
import { m as m$2 } from './edgeProcessing-23e464b6.js';
import './index-d436d5f8.js';
import './ByteSizeUnit-f75ee973.js';
import './mat3f64-9c2c37f3.js';
import './mat4f64-f2ca62fb.js';
import './quatf64-581a0ed6.js';
import './BufferView-6af44820.js';
import './types-6916d16e.js';
import './deduplicate-9ccb6566.js';
import './Indices-97d6ca60.js';
import './VertexAttribute-0bdc9233.js';
import './enums-f1bebe6f.js';
import './VertexElementDescriptor-33a64685.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function a$2(r){return r?{ray:d(r.ray),c0:r.c0,c1:r.c1}:{ray:d(),c0:0,c1:Number.MAX_VALUE}}function i$1(r,c,n){const t=A$1.get();return t.ray=r,t.c0=c,t.c1=n,t}function s$1(r,c=a$2()){return f$1(r.ray,r.c0,r.c1,c)}function f$1(r,c,n,t=a$2()){return k$2(r,t.ray),t.c0=c,t.c1=n,t}function y$2(r,c=a$2()){return k$2(r,c.ray),c.c0=0,c.c1=Number.MAX_VALUE,c}function m$1(r,n,t=a$2()){const o=s$2(r.vector);return v$2(r.origin,n,t.ray),t.c0=0,t.c1=o,t}function p$1(r,c){return j$3(r,r.c0,c)}function g$2(r,c){return j$3(r,r.c1,c)}function j$3(r,c,o){return u$1(o,r.ray.origin,g$3(o,r.ray.direction,c))}const A$1=new s$3((()=>a$2()));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function I$1(T){return T?[h$1(T[0]),h$1(T[1]),h$1(T[2]),h$1(T[3]),h$1(T[4]),h$1(T[5])]:[h$1(),h$1(),h$1(),h$1(),h$1(),h$1()]}function N$1(){return [n(),n(),n(),n(),n(),n(),n(),n()]}function L$1(T,_){for(let O=0;O<v$1;O++)p$2(T[O],_[O]);}function s(T,A,E,F=S$1){const r$1=c(f$2.get(),A,T);h$2(r$1,r$1);for(let _=0;_<g$1;++_){const T=w$1(r.get(),b$2[_],r$1);o(F[_],T[0]/T[3],T[1]/T[3],T[2]/T[3]);}u(E,F);}function u(T,_){_$1(_[k$1.FAR_BOTTOM_LEFT],_[k$1.NEAR_BOTTOM_LEFT],_[k$1.NEAR_TOP_LEFT],T[l.LEFT]),_$1(_[k$1.NEAR_BOTTOM_RIGHT],_[k$1.FAR_BOTTOM_RIGHT],_[k$1.FAR_TOP_RIGHT],T[l.RIGHT]),_$1(_[k$1.FAR_BOTTOM_LEFT],_[k$1.FAR_BOTTOM_RIGHT],_[k$1.NEAR_BOTTOM_RIGHT],T[l.BOTTOM]),_$1(_[k$1.NEAR_TOP_LEFT],_[k$1.NEAR_TOP_RIGHT],_[k$1.FAR_TOP_RIGHT],T[l.TOP]),_$1(_[k$1.NEAR_BOTTOM_LEFT],_[k$1.NEAR_BOTTOM_RIGHT],_[k$1.NEAR_TOP_RIGHT],T[l.NEAR]),_$1(_[k$1.FAR_BOTTOM_RIGHT],_[k$1.FAR_BOTTOM_LEFT],_[k$1.FAR_TOP_LEFT],T[l.FAR]);}function P$1(T,_){for(let O=0;O<v$1;O++){const R=T[O];if(R[0]*_[0]+R[1]*_[1]+R[2]*_[2]+R[3]>=_[3])return !1}return !0}function i(T,_){return j$2(T,y$2(_,y$1.get()))}function m(T,_){for(let O=0;O<v$1;O++){const R=T[O];if(!G(R,_))return !1}return !0}function a$1(T,_,O){return j$2(T,m$1(_,O,y$1.get()))}function p(T,_){for(let O=0;O<v$1;O++){if(R$1(T[O],_)>0)return !1}return !0}function j$2(T,_){for(let O=0;O<v$1;O++)if(!D$1(T[O],_))return !1;return !0}var l,k$1;!function(T){T[T.LEFT=0]="LEFT",T[T.RIGHT=1]="RIGHT",T[T.BOTTOM=2]="BOTTOM",T[T.TOP=3]="TOP",T[T.NEAR=4]="NEAR",T[T.FAR=5]="FAR";}(l||(l={})),function(T){T[T.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",T[T.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",T[T.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",T[T.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",T[T.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",T[T.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",T[T.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",T[T.FAR_TOP_LEFT=7]="FAR_TOP_LEFT";}(k$1||(k$1={}));const h={bottom:[k$1.FAR_BOTTOM_RIGHT,k$1.NEAR_BOTTOM_RIGHT,k$1.NEAR_BOTTOM_LEFT,k$1.FAR_BOTTOM_LEFT],near:[k$1.NEAR_BOTTOM_LEFT,k$1.NEAR_BOTTOM_RIGHT,k$1.NEAR_TOP_RIGHT,k$1.NEAR_TOP_LEFT],far:[k$1.FAR_BOTTOM_RIGHT,k$1.FAR_BOTTOM_LEFT,k$1.FAR_TOP_LEFT,k$1.FAR_TOP_RIGHT],right:[k$1.NEAR_BOTTOM_RIGHT,k$1.FAR_BOTTOM_RIGHT,k$1.FAR_TOP_RIGHT,k$1.NEAR_TOP_RIGHT],left:[k$1.FAR_BOTTOM_LEFT,k$1.NEAR_BOTTOM_LEFT,k$1.NEAR_TOP_LEFT,k$1.FAR_TOP_LEFT],top:[k$1.FAR_TOP_LEFT,k$1.NEAR_TOP_LEFT,k$1.NEAR_TOP_RIGHT,k$1.FAR_TOP_RIGHT]},v$1=6,g$1=8,b$2=[r$1(-1,-1,-1,1),r$1(1,-1,-1,1),r$1(1,1,-1,1),r$1(-1,1,-1,1),r$1(-1,-1,1,1),r$1(1,-1,1,1),r$1(1,1,1,1),r$1(-1,1,1,1)],y$1=new s$3(a$2),S$1=N$1();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class b$1{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(e,t){this.objectToBoundingSphere=e,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new g,this._objectCount=0,t&&(void 0!==t.maximumObjectsPerNode&&(this._maximumObjectsPerNode=t.maximumObjectsPerNode),void 0!==t.maximumDepth&&(this._maximumDepth=t.maximumDepth));}destroy(){this._degenerateObjects.clear(),g.clearPool(),B[0]=null,P.prune(),H.prune();}add(e,t=e.length){this._objectCount+=t,this._grow(e,t);const o=g.acquire();for(let n=0;n<t;n++){const t=e[n];this._isDegenerate(t)?this._degenerateObjects.add(t):(o.init(this._root),this._add(t,o));}g.release(o);}remove(e,t=null){this._objectCount-=e.length;const o=g.acquire();for(const n of e){const e=null!=t?t:q$1(this.objectToBoundingSphere(n),w);E(e[3])?(o.init(this._root),this._remove(n,e,o)):this._degenerateObjects.delete(n);}g.release(o),this._shrink();}update(e,t){if(!E(t[3])&&this._isDegenerate(e))return;const o=R(e);this.remove(o,t),this.add(o);}forEachAlongRay(e,t,o){const n=p$3(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNode(n,e))return !1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObject(n,e)&&o(e);})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObject(n,e)&&o(e);})),!0}));}forEachAlongRayWithVerticalOffset(e,t,o,n){const i=p$3(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNodeWithOffset(i,e,n))return !1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObjectWithOffset(i,e,n)&&o(e);})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObjectWithOffset(i,e,n)&&o(e);})),!0}));}forEach(e){this._forEachNode(this._root,(t=>{const o=t.node;return o.terminals.forAll(e),null!==o.residents&&o.residents.forAll(e),!0})),this._degenerateObjects.forEach(e);}forEachDegenerateObject(e){this._degenerateObjects.forEach(e);}findClosest(e,t,i,s=(()=>!0),r=1/0){let h=1/0,a=1/0,l=null;const u=T(e,t),c=o=>{if(--r,!s(o))return;const n=this.objectToBoundingSphere(o);if(!P$1(i,n))return;const u=z(e,t,z$1(n)),c=u-n[3],m=u+n[3];c<h&&(h=c,a=m,l=o);};return this._forEachNodeDepthOrdered(this._root,(s=>{if(r<=0||!P$1(i,s.bounds))return !1;g$3(v,u,s.halfSize),u$1(v,v,s.bounds);if(z(e,t,v)>a)return !1;const h=s.node;return h.terminals.forAll((e=>c(e))),null!==h.residents&&h.residents.forAll((e=>c(e))),!0}),e,t),l}forEachInDepthRange(e,t,i,s,r,h,a){let l=-1/0,u=1/0;const c={setRange:e=>{i===b$1.DepthOrder.FRONT_TO_BACK?(l=Math.max(l,e.near),u=Math.min(u,e.far)):(l=Math.max(l,-e.far),u=Math.min(u,-e.near));}};c.setRange(s);const m=z(t,i,e),_=T(t,i),p=T(t,-i),g=e=>{if(!a(e))return;const o=this.objectToBoundingSphere(e),n=z$1(o),s=z(t,i,n)-m,_=s-o[3],p=s+o[3];_>u||p<l||!P$1(h,o)||r(e,c);};this._forEachNodeDepthOrdered(this._root,(e=>{if(!P$1(h,e.bounds))return !1;g$3(v,_,e.halfSize),u$1(v,v,e.bounds);if(z(t,i,v)-m>u)return !1;g$3(v,p,e.halfSize),u$1(v,v,e.bounds);if(z(t,i,v)-m<l)return !1;const s=e.node;return s.terminals.forAll((e=>g(e))),null!==s.residents&&s.residents.forAll((e=>g(e))),!0}),t,i);}forEachNode(e){this._forEachNode(this._root,(t=>e(t.node,t.bounds,t.halfSize,t.depth)));}forEachNeighbor(e,t){const o=k$3(t),n=z$1(t),s=t=>{const s=this.objectToBoundingSphere(t),r=k$3(s),h=o+r;return !(p$4(z$1(s),n)-h*h<=0)||e(t)};let r=!0;const h=e=>{r&&(r=s(e));};this._forEachNode(this._root,(e=>{const t=k$3(e.bounds),s=o+t;if(p$4(z$1(e.bounds),n)-s*s>0)return !1;const a=e.node;return a.terminals.forAll(h),r&&null!==a.residents&&a.residents.forAll(h),r})),r&&this.forEachDegenerateObject(h);}_intersectsNode(e,t){return j$1(t.bounds,2*-t.halfSize,C),j$1(t.bounds,2*t.halfSize,y),i$2(e.origin,e.direction,C,y)}_intersectsNodeWithOffset(e,t,o){return j$1(t.bounds,2*-t.halfSize,C),j$1(t.bounds,2*t.halfSize,y),o.applyToMinMax(C,y),i$2(e.origin,e.direction,C,y)}_intersectsObject(e,t){const o=this.objectToBoundingSphere(t);return !(o[3]>0)||V(o,e)}_intersectsObjectWithOffset(e,t,o){const n=this.objectToBoundingSphere(t);return !(n[3]>0)||V(o.applyToBoundingSphere(n),e)}_forEachNode(e,t){let o=g.acquire().init(e);const n=[o];for(;0!==n.length;){if(o=n.pop(),t(o)&&!o.isLeaf())for(let e=0;e<o.node.children.length;e++){o.node.children[e]&&n.push(g.acquire().init(o).advance(e));}g.release(o);}}_forEachNodeDepthOrdered(e,t,o,n=b$1.DepthOrder.FRONT_TO_BACK){let i=g.acquire().init(e);const s=[i];for(N(o,n,K);0!==s.length;){if(i=s.pop(),t(i)&&!i.isLeaf())for(let e=7;e>=0;--e){const t=K[e];i.node.children[t]&&s.push(g.acquire().init(i).advance(t));}g.release(i);}}_remove(e,t,o){P.clear();const n=o.advanceTo(t,((e,t)=>{P.push(e.node),P.push(t);}))?o.node.terminals:o.node.residents;if(n.removeUnordered(e),0===n.length)for(let i=P.length-2;i>=0;i-=2){const e=P.data[i],t=P.data[i+1];if(!this._purge(e,t))break}}_nodeIsEmpty(e){if(0!==e.terminals.length)return !1;if(null!==e.residents)return 0===e.residents.length;for(let t=0;t<e.children.length;t++)if(e.children[t])return !1;return !0}_purge(e,o){return o>=0&&(e.children[o]=null),!!this._nodeIsEmpty(e)&&(null===e.residents&&(e.residents=new l$1({shrink:!0})),!0)}_add(e,t){t.advanceTo(this.objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t));}_split(e){const t=e.node.residents;e.node.residents=null;for(let o=0;o<t.length;o++){const n=g.acquire().init(e);this._add(t.at(o),n),g.release(n);}}_grow(e,t){if(0!==t&&(x(e,t,(e=>this.objectToBoundingSphere(e)),k),E(k[3])&&!this._fitsInsideTree(k)))if(this._nodeIsEmpty(this._root.node))q$1(k,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else {const e=this._rootBoundsForRootAsSubNode(k);this._placingRootViolatesMaxDepth(e)?this._rebuildTree(k,e):this._growRootAsSubNode(e),g.release(e);}}_rebuildTree(e,t){r$2(q,t.bounds),q[3]=t.halfSize,x([e,q],2,(e=>e),I);const o=g.acquire().init(this._root);this._root.initFrom(null,I,I[3]),this._root.increaseHalfSize(1.25),this._forEachNode(o,(e=>(this.add(e.node.terminals.data,e.node.terminals.length),null!==e.node.residents&&this.add(e.node.residents.data,e.node.residents.length),!0))),g.release(o);}_placingRootViolatesMaxDepth(e){const t=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E;let o=0;return this._forEachNode(this._root,(e=>(o=Math.max(o,e.depth),o+t<=this._maximumDepth))),o+t>this._maximumDepth}_rootBoundsForRootAsSubNode(e){const t=e[3],o=e;let n=-1/0;const i=this._root.bounds,s=this._root.halfSize;for(let h=0;h<3;h++){const e=i[h]-s-(o[h]-t),r=o[h]+t-(i[h]+s),a=Math.max(0,Math.ceil(e/(2*s))),d=Math.max(0,Math.ceil(r/(2*s)))+1,l=2**Math.ceil(Math.log(a+d)*Math.LOG2E);n=Math.max(n,l),L[h].min=a,L[h].max=d;}for(let h=0;h<3;h++){let e=L[h].min,t=L[h].max;const o=(n-(e+t))/2;e+=Math.ceil(o),t+=Math.floor(o);const r=i[h]-s-e*s*2;F[h]=r+(t+e)*s;}const r=n*s;return F[3]=r*A,g.acquire().initFrom(null,F,r,0)}_growRootAsSubNode(e){const t=this._root.node;r$2(k,this._root.bounds),k[3]=this._root.halfSize,this._root.init(e),e.advanceTo(k,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals;}_shrink(){for(;;){const e=this._findShrinkIndex();if(-1===e)break;this._root.advance(e),this._root.depth=0;}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return -1;let e=null;const t=this._root.node.children;let o=0,n=0;for(;n<t.length&&null==e;)o=n++,e=t[o];for(;n<t.length;)if(t[n++])return -1;return o}_isDegenerate(e){return !E(this.objectToBoundingSphere(e)[3])}_fitsInsideTree(e){const t=this._root.bounds,o=this._root.halfSize;return e[3]<=o&&e[0]>=t[0]-o&&e[0]<=t[0]+o&&e[1]>=t[1]-o&&e[1]<=t[1]+o&&e[2]>=t[2]-o&&e[2]<=t[2]+o}toJSON(){const{maximumDepth:e,maximumObjectsPerNode:t,_objectCount:o}=this,n=this._nodeToJSON(this._root.node);return {maximumDepth:e,maximumObjectsPerNode:t,objectCount:o,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:n}}}_nodeToJSON(e){const t=e.children.map((e=>e?this._nodeToJSON(e):null)),o=e.residents?.map((e=>this.objectToBoundingSphere(e))),n=e.terminals?.map((e=>this.objectToBoundingSphere(e)));return {children:t,residents:o,terminals:n}}static fromJSON(e){const t=new b$1((e=>e),{maximumDepth:e.maximumDepth,maximumObjectsPerNode:e.maximumObjectsPerNode});return t._objectCount=e.objectCount,t._root.initFrom(e.root.node,e.root.bounds,e.root.halfSize,e.root.depth),t}}class g{constructor(){this.bounds=_$2(),this.halfSize=0,this.initFrom(null,null,0,0);}init(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)}initFrom(e,t,o,n=this.depth){return this.node=null!=e?e:g.createEmptyNode(),null!=t&&q$1(t,this.bounds),this.halfSize=o,this.depth=n,this}increaseHalfSize(e){this.halfSize*=e,this.updateBoundsRadiusFromHalfSize();}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*A;}advance(e){let t=this.node.children[e];t||(t=g.createEmptyNode(),this.node.children[e]=t),this.node=t,this.halfSize/=2,this.depth++;const o=M[e];return this.bounds[0]+=o[0]*this.halfSize,this.bounds[1]+=o[1]*this.halfSize,this.bounds[2]+=o[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(e,t,o=!1){for(;;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!o)return t&&t(this,-1),!1;this.node.residents=null;}const n=this._childIndex(e);t&&t(this,n),this.advance(n);}}isLeaf(){return null!=this.node.residents}isTerminalFor(e){return e[3]>this.halfSize/2}_childIndex(e){const t=this.bounds;return (t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)}static createEmptyNode(){return {children:[null,null,null,null,null,null,null,null],terminals:new l$1({shrink:!0}),residents:new l$1({shrink:!0})}}static acquire(){return g._pool.acquire()}static release(e){g._pool.release(e);}static clearPool(){g._pool.prune();}}function S(e,t){e[0]=Math.min(e[0],t[0]-t[3]),e[1]=Math.min(e[1],t[1]-t[3]),e[2]=Math.min(e[2],t[2]-t[3]);}function O(e,t){e[0]=Math.max(e[0],t[0]+t[3]),e[1]=Math.max(e[1],t[1]+t[3]),e[2]=Math.max(e[2],t[2]+t[3]);}function j$1(e,t,o){o[0]=e[0]+t,o[1]=e[1]+t,o[2]=e[2]+t;}function x(e,t,o,n){if(1===t){const t=o(e[0]);q$1(t,n);}else {C[0]=1/0,C[1]=1/0,C[2]=1/0,y[0]=-1/0,y[1]=-1/0,y[2]=-1/0;for(let n=0;n<t;n++){const t=o(e[n]);E(t[3])&&(S(C,t),O(y,t));}A$2(n,C,y,.5),n[3]=Math.max(y[0]-C[0],y[1]-C[1],y[2]-C[2])/2;}}function N(e,t,o){if(!H.length)for(let n=0;n<8;++n)H.push({index:0,distance:0});for(let n=0;n<8;++n){const o=M[n];H.data[n].index=n,H.data[n].distance=z(e,t,o);}H.sort(((e,t)=>e.distance-t.distance));for(let n=0;n<8;++n)o[n]=H.data[n].index;}function T(e,t){let o,n=1/0;for(let i=0;i<8;++i){const s=z(e,t,D[i]);s<n&&(n=s,o=D[i]);}return o}function z(e,t,o){return t*(e[0]*o[0]+e[1]*o[1]+e[2]*o[2])}function E(e){return !isNaN(e)&&e!==-1/0&&e!==1/0&&e>0}g._pool=new e(g),function(e){var t;(t=e.DepthOrder||(e.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT";}(b$1||(b$1={}));const M=[r$3(-1,-1,-1),r$3(1,-1,-1),r$3(-1,1,-1),r$3(1,1,-1),r$3(-1,-1,1),r$3(1,-1,1),r$3(-1,1,1),r$3(1,1,1)],D=[r$3(-1,-1,-1),r$3(-1,-1,1),r$3(-1,1,-1),r$3(-1,1,1),r$3(1,-1,-1),r$3(1,-1,1),r$3(1,1,-1),r$3(1,1,1)],A=Math.sqrt(3),B=[null];function R(e){return B[0]=e,B}const F=_$2(),v=n(),C=n(),y=n(),P=new l$1,w=_$2(),k=_$2(),q=_$2(),I=_$2(),L=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],H=new l$1,K=[0,0,0,0,0,0,0,0],W=b$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const t=1e3;function a(t,a,e){const i=_$2(),m=z$1(i);return q$2(m,m,t,.5),q$2(m,m,a,.5),i[3]=x$1(m,t),u$1(m,m,e),i}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let _=class{constructor(){this._idToComponent=new Map,this._components=new W((e=>e.bounds)),this._edges=new W((e=>e.bounds)),this._tmpLineSegment=v$3(),this._tmpP1=n(),this._tmpP2=n(),this._tmpP3=n(),this.remoteClient=null;}async fetchCandidates(e,s){await Promise.resolve(),s$4(s),await this._ensureEdgeLocations(e,s);const o=[];return this._edges.forEachNeighbor((t$1=>(this._addCandidates(e,t$1,o),o.length<t)),e.bounds),{result:{candidates:o}}}async _ensureEdgeLocations(e,t){const s=[];if(this._components.forEachNeighbor((e=>{if(null==e.info){const{id:t,uid:o}=e;s.push({id:t,uid:o});}return !0}),e.bounds),!s.length)return;const o={components:s},n=await this.remoteClient.invoke("fetchAllEdgeLocations",o,t??{});for(const i of n.components)this._setFetchEdgeLocations(i);}async add(e){const t=new b(e.id,e.bounds);return this._idToComponent.set(t.id,t),this._components.add([t]),{result:{}}}async remove(e){const t=this._idToComponent.get(e.id);if(t){const e=[];this._edges.forEachNeighbor((s=>(s.component===t&&e.push(s),!0)),t.bounds),this._edges.remove(e),this._components.remove([t]),this._idToComponent.delete(t.id);}return {result:{}}}_setFetchEdgeLocations(e){const t=this._idToComponent.get(e.id);if(null==t||e.uid!==t.uid)return;const s=m$2.createView(e.locations),o=new Array(s.count),n$1=n(),r=n();for(let i=0;i<s.count;i++){s.position0.getVec(i,n$1),s.position1.getVec(i,r);const d=a(n$1,r,e.origin),c=new j(t,i,d);o[i]=c;}this._edges.add(o);const{objectIds:d,origin:c}=e;t.info={locations:s,objectIds:d,origin:c};}_addCandidates(e,t,s){const{info:n}=t.component,{origin:i,objectIds:r}=n,d=n.locations,c=d.position0.getVec(t.index,this._tmpP1),a=d.position1.getVec(t.index,this._tmpP2);u$1(c,c,i),u$1(a,a,i);const p=r[d.componentIndex.get(t.index)];this._addEdgeCandidate(e,p,c,a,s),this._addVertexCandidate(e,p,c,s),this._addVertexCandidate(e,p,a,s);}_addEdgeCandidate(e,t,s,o,i){if(!e.returnEdge)return;const d=z$1(e.bounds),h=b$3(s,o,this._tmpLineSegment),m=j$4(h,d,this._tmpP3);Q(e.bounds,m)&&i.push({type:"edge",objectId:t,target:t$1(m),distance:x$1(d,m),start:t$1(s),end:t$1(o)});}_addVertexCandidate(e,t,s,o){if(!e.returnVertex)return;const i=z$1(e.bounds);Q(e.bounds,s)&&o.push({type:"vertex",objectId:t,target:t$1(s),distance:x$1(i,s)});}};_=e$1([a$3("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],_);const f=_;class b{constructor(e,t){this.id=e,this.bounds=t,this.info=null,this.uid=++b.uid;}}b.uid=0;class j{constructor(e,t,s){this.component=e,this.index=t,this.bounds=s;}}

export default f;

//# sourceMappingURL=SceneLayerSnappingSourceWorker-f25a8cf9.js.map