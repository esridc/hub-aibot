import { f4 as f, s as s$1, eV as e, go as L, j as s$2, gp as l, gq as c, gr as j, gs as O, dc as b, gt as f$1, f as s$3, aF as f$2, O as j$1, fE as v, a1 as e$1, a2 as y, eR as o, gu as v$1, gv as f$3, a3 as a$1 } from './hub-compass-map-f4225e12.js';
import { p } from './ArcGISCachedService-470a1017.js';
import './index-d436d5f8.js';
import './TileInfoTilemapCache-4ac61e63.js';
import './TilemapCache-e9464b36.js';
import './ByteSizeUnit-f75ee973.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class a{constructor(a,t,s,e){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in a?(this.values=a.pixelData,this.width=a.width,this.height=a.height,this.noDataValue=a.noDataValue):(this.values=a,this.width=t,this.height=s,this.noDataValue=e);}get hasNoDataValues(){if(null==this._hasNoDataValues){const a=this.noDataValue;this._hasNoDataValues=this.values.includes(a);}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}_ensureBounds(){if(null!=this._minValue)return;const{noDataValue:a,values:t}=this;let s=1/0,e=-1/0,i=!0;for(const u of t)u===a?this._hasNoDataValues=!0:(s=u<s?u:s,e=u>e?u:e,i=!1);i?(this._minValue=0,this._maxValue=0):(this._minValue=s,this._maxValue=e>-3e38?e:0);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class h{constructor(e,t,r,h,o={}){this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=f(e,{...o,schedule:h}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,o.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e);}else e.close();})),this._promise.catch((t=>s$1.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)));}on(s,r){const i={removed:!1,eventName:s,callback:r,threadHandle:null};return this._listeners.push(i),this._connectListener(i),e((()=>{i.removed=!0,L(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove();}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={};}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,s){if(this._thread){const r=this._transferLists[e],i=r?r(t):[];return this._thread.invoke(e,t,{transferList:i,signal:s})}return this._promise?this._promise.then((()=>(s$2(s),this.invokeMethod(e,t,s)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r extends h{constructor(e=null){super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0;}decode(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):Promise.resolve(null)}release(){--this.ref<=0&&(t.forEach(((e,r)=>{e===this&&t.delete(r);})),this.destroy());}}const t=new Map;function s(e=null){let s=t.get(e);return s||(null!=e?(s=new r((r=>e.immediate.schedule(r))),t.set(e,s)):(s=new r,t.set(null,s))),++s.ref,s}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let S=class extends(p(l(c(j(O(b)))))){constructor(...e){super(...e),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=s();}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}destroy(){this._lercDecoder=f$1(this._lercDecoder);}readCapabilities(e,r){const t=r.capabilities&&r.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!t)return {operations:{supportsTileMap:!1}};return {operations:{supportsTileMap:t.includes("tilemap")}}}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return !0;throw new s$3("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(f$2).then((()=>this._fetchImageService(r)))),Promise.resolve(this)}fetchTile(e,t,i,o){const s=null!=(o=o||{signal:null}).signal?o.signal:o.signal=(new AbortController).signal,a$1={responseType:"array-buffer",signal:s},p={noDataValue:o.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,i,o))).then((()=>j$1(this.getTileUrl(e,t,i),a$1))).then((e=>this._lercDecoder.decode(e.data,p,s))).then((e=>new a(e)))}getTileUrl(e,r,t){const i=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,o=v({...this.parsedUrl.query,blankTile:!i&&null});return `${this.parsedUrl.path}/tile/${e}/${r}/${t}${o?"?"+o:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await import('./ElevationQuery-2f72db24.js');s$2(r);return (new t).query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await import('./ElevationQuery-2f72db24.js');s$2(r);return (new t).createSampler(this,e,r)}_fetchTileAvailability(e,r,t,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,i):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},i=await j$1(this.parsedUrl.path,t);i.ssl&&(this.url=this.url?.replace(/^http:/i,"https:")),this.sourceJSON=i.data,this.read(i.data,{origin:"service",url:this.parsedUrl});}get hasOverriddenFetchTile(){return !this.fetchTile[w]}};e$1([y({readOnly:!0})],S.prototype,"capabilities",void 0),e$1([o("service","capabilities",["capabilities"])],S.prototype,"readCapabilities",null),e$1([y({json:{read:{source:"copyrightText"}}})],S.prototype,"copyright",void 0),e$1([y({readOnly:!0,type:v$1})],S.prototype,"heightModelInfo",void 0),e$1([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],S.prototype,"path",void 0),e$1([y({type:["show","hide"]})],S.prototype,"listMode",void 0),e$1([y({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],S.prototype,"minScale",void 0),e$1([y({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],S.prototype,"maxScale",void 0),e$1([y({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],S.prototype,"opacity",void 0),e$1([y({type:["ArcGISTiledElevationServiceLayer"]})],S.prototype,"operationalLayerType",void 0),e$1([y()],S.prototype,"sourceJSON",void 0),e$1([y({json:{read:!1},value:"elevation",readOnly:!0})],S.prototype,"type",void 0),e$1([y(f$3)],S.prototype,"url",void 0),e$1([y()],S.prototype,"version",void 0),e$1([o("version",["currentVersion"])],S.prototype,"readVersion",null),S=e$1([a$1("esri.layers.ElevationLayer")],S);const w=Symbol("default-fetch-tile");S.prototype.fetchTile[w]=!0;const T=S;

export default T;

//# sourceMappingURL=ElevationLayer-924e8705.js.map