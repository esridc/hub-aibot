import { W as d, bT as n, bO as a, g9 as s, j as s$1, aE as f, aU as u, a1 as e, a3 as a$2 } from './hub-compass-map-f4225e12.js';
import { i } from './cimAnalyzer-51b7fc99.js';
import { p as p$1 } from './visualVariablesUtils-68194aa9.js';
import { S as S$1 } from './color-07edd940.js';
import { x, o, b as a$1, E, n as n$1 } from './Matcher-23cbbc6b.js';
import { p } from './BaseProcessor-45d4be4a.js';
import './index-d436d5f8.js';
import './fontUtils-109c9f90.js';
import './BidiEngine-20165a23.js';
import './OptimizedGeometry-d99be84d.js';
import './GeometryUtils-edfc28ec.js';
import './enums-63fd0640.js';
import './utils-0c7c3308.js';
import './alignmentUtils-63467b02.js';
import './definitions-2a5e2c90.js';
import './number-4aaa92a3.js';
import './Rect-b4ddc2bf.js';
import './quantizationUtils-af65af81.js';
import './floatRGBA-8b0c35f1.js';
import './enums-f1bebe6f.js';
import './VertexElementDescriptor-33a64685.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-d2bd25ee.js';
import './GeometryUtils-e7f92760.js';
import './earcut-bde06d16.js';
import './cimSymbolUtils-5a00cf74.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './webStyleSymbolUtils-e2984068.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null;}destroy(){}async fetchResource(t,r){const s=this._resourceMap,i=s.get(t);if(i)return i;let n=this._inFlightResourceMap.get(t);if(n)return n;try{n=this._remoteClient.invoke("tileRenderer.fetchResource",{url:t},{...r}),this._inFlightResourceMap.set(t,n),n.then((e=>(this._inFlightResourceMap.delete(t),s.set(t,e),e)));}catch(o){return d(o)?null:{width:0,height:0}}return n}getResource(e){return this._resourceMap.get(e)??null}loadFont(e){return Promise.resolve(null)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function b(e,t){return (!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}function S(e){const t=e.message,r={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin,version:t.version},transferList:new Array};for(const i in t.data){const e=i,a=t.data[e];if(r.message.data[e]=null,null!=a){const t=a.stride,i=a.indices.slice(0),o=a.vertices.slice(0),n$1=a.records.slice(0),l={stride:t,indices:i,vertices:o,records:n$1,metrics:n(a.metrics,(e=>e.slice(0)))};r.transferList.push(i,o,n$1),r.message.data[e]=l;}}return r}let w=class extends p{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map;}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new t(this.remoteClient);}destroy(){this._resourceManagerProxy.destroy();}get supportsTileUpdates(){return !0}forEachBufferId(e){this._bufferIds.forEach((t=>{t.forEach(e);}));}async update(e,t){const s$1=t.schema.processors[0];if("symbol"!==s$1.type)return;const r=a(this._schema,s$1);(s(r,"mesh")||s(r,"target"))&&(e.mesh=!0,e.why?.mesh.push("Symbology changed"),this._schema=s$1,this._factory=this._createFactory(s$1),this._factory.update(s$1,this.tileStore.tileScheme.tileInfo));}onTileMessage(e,t,s,r){return s$1(r),this._onTileData(e,t,s,r)}onTileClear(e,t){const s={clear:!0,end:t};return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:s})}onTileError(e,t,s){const r=s.signal,i={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:r})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const s of e)s.message.tileKey===t.id&&this._updateTileMesh("append",t,S(s),[],!1,!1,null);}));}_addBufferData(e,t){this._bufferData.has(e)||this._bufferData.set(e,[]),this._bufferData.get(e)?.push(S(t));}_createFactory(e){const{geometryType:t,objectIdField:r,fields:i}=this.service,a=(e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t),o$1={geometryType:t,fields:i,spatialReference:f.fromJSON(this.spatialReference)},n$1=new x(a,this.tileStore.tileScheme.tileInfo),{matcher:l,aggregateMatcher:d}=e.mesh;return this._store=n$1,this._matchers.feature=o(l,n$1,o$1,this._resourceManagerProxy),this._matchers.aggregate=n(d,(e=>o(e,n$1,o$1,this._resourceManagerProxy))),new a$1(t,r,n$1)}async _onTileData(e,t,s,r){s$1(r);const{type:a,addOrUpdate:o,remove:n,clear:l,end:c}=t,d=!!this._schema.mesh.sortKey;if(!o){const t={type:a,addOrUpdate:null,remove:n,clear:l,end:c,sort:d};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r)}const h=this._processFeatures(e,o,s,r,t.status?.version);try{const s=await h;if(null==s){const t={type:a,addOrUpdate:null,remove:n,clear:l,end:c,sort:d};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r)}const i=[];for(const t of s){let s=!1;const r=t.message.bufferIds,a=e.key.id,o=t.message.tileKey;if(a!==o&&null!=r){if(!this.tileStore.get(o)){this._addBufferData(a,t),i.push(t);continue}let e=this._bufferIds.get(o);e||(e=new Set,this._bufferIds.set(o,e));const n=Array.from(r);for(const t of n){if(e.has(t)){s=!0;break}e.add(t);}}s||(this._addBufferData(a,t),i.push(t));}await Promise.all(i.map((s=>{const i=e.key.id===s.message.tileKey,o=i?t.remove:[],n=i&&t.end;return this._updateTileMesh(a,e,s,o,n,!!t.clear,r.signal)})));}catch(f){this._handleError(e,f,r);}}async _updateTileMesh(e,t,r,a,o,n$1,l){const c=e,d=r.message.tileKey,h=!!this._schema.mesh.sortKey;d!==t.key.id&&(o=!1);const f={type:c,addOrUpdate:n(r,(e=>e.message)),remove:a,clear:n$1,end:o,sort:h},u={transferList:n(r,(e=>e.transferList))||[]||[],signal:l};return s$1(u),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:d,data:f},u)}async _processFeatures(e,t,s,r,a){if(null==t||!t.hasFeatures)return null;const o={transform:e.transform,hasZ:!1,hasM:!1},n=this._factory,l={viewingMode:"",scale:e.scale},c=await this._matchers.feature,d=await this._matchers.aggregate;s$1(r);const h=this._getLabelInfos(e,t);return await n.analyze(t.getCursor(),this._resourceManagerProxy,c,d,o,l),s$1(r),this._writeFeatureSet(e,t,o,h,n,s,a)}_writeFeatureSet(e,t,s,r,i,a,o){const n=t.getSize(),l=this._schema.mesh.matcher.symbologyType,c=new E(e.key.id,{features:n,records:n,metrics:0},l,a,l!==S$1.HEATMAP,o),d={viewingMode:"",scale:e.scale},u=t.getCursor();for(;u.next();)try{const t=u.getDisplayId(),a=null!=r?r.get(t):null;i.writeCursor(c,u,s,d,e.level,a,this._resourceManagerProxy);}catch(g){}const m=e.tileInfoView.tileInfo.isWrappable;return c.serialize(m)}_handleError(e,t,s){if(!d(t)){const r={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",r,{signal:s.signal})}return Promise.resolve()}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if(null==t)return null;if("subtype"===t.type){const s={type:"subtype",classes:{}};let r=!1;for(const i in t.classes){const a=t.classes[i].filter((t=>b(t,e.scale)));r=r||!!a.length,s.classes[i]=a;}return r?s:null}const s=t.classes.filter((t=>b(t,e.scale)));return s.length?{type:"simple",classes:s}:null}_getLabels(e,t){if("subtype"===t.type){const s=this.service.subtypeField,i=u(s,"Expected to find subtype Field"),a=e.readAttribute(i);return null==a?[]:t.classes[a]??[]}return t.classes}_getLabelInfos(e,s){const r=this._getLabelingSchemaForScale(e);if(null==r)return null;const i$1=new Map,a=s.getCursor();for(;a.next();){const e=a.getDisplayId(),s=[],o=p$1(e),n=o&&1!==a.readAttribute("cluster_count")?"aggregate":"feature",l=this._getLabels(a,r);for(const r of l){if(r.target!==n)continue;const i$1=a.getStorage(),l=o&&"feature"===n?i$1.getComputedStringAtIndex(a.readAttribute("referenceId"),r.fieldIndex):i$1.getComputedStringAtIndex(e,r.fieldIndex);if(!l)continue;const c=i(l.toString()),d=c[0],h=c[1];this._store.getMosaicItem(r.symbol,n$1(d)).then((e=>{s[r.index]={glyphs:e.glyphMosaicItems??[],rtl:h,index:r.index};}));}i$1.set(e,s);}return i$1}};w=e([a$2("esri.views.2d.layers.features.processors.SymbolProcessor")],w);const I=w;

export default I;

//# sourceMappingURL=SymbolProcessor-05466825.js.map