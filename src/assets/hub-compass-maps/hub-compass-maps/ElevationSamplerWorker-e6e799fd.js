import { e as has } from './hub-compass-map-4d751555.js';
import { h } from './PooledRBush-cc066bb1.js';
import { T } from './georeference-1f4571cf.js';
import './index-d436d5f8.js';
import './mat3f64-9c2c37f3.js';
import './mat4f64-f2ca62fb.js';
import './spatialReferenceEllipsoidUtils-8f8393a7.js';
import './MeshLocalVertexSpace-fa54b880.js';
import './MeshGeoreferencedRelativeVertexSpace-b4fde088.js';
import './quat-d7858404.js';
import './quatf64-581a0ed6.js';
import './vec32-7b7b48f8.js';
import './BufferView-ed2f03a2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r{async createIndex(t,r){const n=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new h;const o=this._createMeshData(t),s=null!=r?await r.invoke("createIndexThread",o,{transferList:n}):this.createIndexThread(o).result;return this._createPooledRBush().fromJSON(s)}createIndexThread(e){const t=new Float64Array(e.position),r=this._createPooledRBush();return e.components?this._createIndexComponentsThread(r,t,e.components.map((e=>new Uint32Array(e)))):this._createIndexAllThread(r,t)}_createIndexAllThread(e,t){const r=new Array(t.length/9);let o=0;for(let s=0;s<t.length;s+=9)r[o++]=n(t,s,s+3,s+6);return e.load(r),{result:e.toJSON()}}_createIndexComponentsThread(e,t,r){let o=0;for(const n of r)o+=n.length/3;const s=new Array(o);let a=0;for(const i of r)for(let e=0;e<i.length;e+=3)s[a++]=n(t,3*i[e],3*i[e+1],3*i[e+2]);return e.load(s),{result:e.toJSON()}}_createMeshData(e){const r=(e.vertexSpace.isRelative?T({position:e.vertexAttributes.position,normal:null,tangent:null},e.vertexSpace,e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return !e.components||e.components.some((e=>!e.faces))?{position:r}:{position:r,components:e.components.map((e=>e.faces))}}_createPooledRBush(){return new h(9,has("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function n(e,t,r,n){return {minX:Math.min(e[t],e[r],e[n]),maxX:Math.max(e[t],e[r],e[n]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t],e[t+1],e[t+2]],p1:[e[r],e[r+1],e[r+2]],p2:[e[n],e[n+1],e[n+2]]}}

export default r;

//# sourceMappingURL=ElevationSamplerWorker-e6e799fd.js.map