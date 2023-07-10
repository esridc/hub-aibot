import { cV as l, fq as Cn, j2 as s, bN as j, kc as Gn, aQ as a$1, a1 as e, a2 as y$1, eS as r, a3 as a$2, jx as u, cL as V, c2 as L, O as j$1, gp as l$1, gq as c, gr as j$2, iV as t, gs as O$1, j6 as i, dc as b, G as t$1, dM as a$3, et as U, c3 as i$1, aF as f$1, f as s$1, eR as o, ja as d } from './hub-compass-map-4d751555.js';
import { g } from './persistable-c575d254.js';
import { N, K } from './SceneService-9e601582.js';
import { s as s$2, l as l$2, u as u$1, m as m$2 } from './I3SLayerDefinitions-0abfeb01.js';
import './index-d436d5f8.js';
import './multiOriginJSONSupportUtils-c04f5031.js';
import './resourceExtension-077825f2.js';
import './originUtils-ad3e2fe4.js';
import './resourceUtils-f3e31af7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var m$1;let y=m$1=class extends l{constructor(e){super(e),this.geometry=null,this.type="clip";}writeGeometry(e,r,o,s$1){if(s$1.layer&&s$1.layer.spatialReference&&!s$1.layer.spatialReference.equals(this.geometry.spatialReference)){if(!Cn(e.spatialReference,s$1.layer.spatialReference))return void(s$1&&s$1.messages&&s$1.messages.push(new s("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s$1.layer.spatialReference,context:s$1})));const p=new j;Gn(e,p,s$1.layer.spatialReference),r[o]=p.toJSON(s$1);}else r[o]=e.toJSON(s$1);delete r[o].spatialReference;}clone(){return new m$1({geometry:a$1(this.geometry),type:this.type})}};e([y$1({type:j}),g()],y.prototype,"geometry",void 0),e([r(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),e([y$1({type:["clip","mask","replace"],nonNullable:!0}),g()],y.prototype,"type",void 0),y=m$1=e([a$2("esri.layers.support.SceneModification")],y);const f=y;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var a;let n=a=class extends(u(V.ofType(f))){constructor(r){super(r),this.url=null;}clone(){return new a({url:this.url,items:this.items.map((r=>r.clone()))})}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}static fromJSON(r,o){const t=new a;for(const e of r)t.add(f.fromJSON(e,o));return t}static async fromUrl(r,t,e){const i={url:L(r),origin:"service"},c=await j$1(r,{responseType:"json",signal:e?.signal}),n=t.toJSON(),m=[];for(const o of c.data)m.push(f.fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},i));return new a({url:r,items:m})}};e([y$1({type:String})],n.prototype,"url",void 0),n=a=e([a$2("esri.layers.support.SceneModifications")],n);const m=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let I=class extends(N(l$1(c(j$2(t(O$1(i(b)))))))){constructor(...e){super(...e),this._handles=new t$1,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null;}destroy(){this._handles.destroy();}initialize(){this._handles.add(a$3((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),U));}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:i$1(e,r),context:r};}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e);}catch(r){f$1(r);}if(await this._fetchService(t),null!=this._modificationsSource){const t=await m.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null;}await this._fetchIndexAndUpdateExtent(this.nodePages,t);}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(K.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(K.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s$1("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s$1("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s$1("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return ["IntegratedMeshLayer"]}};e([y$1({type:String,readOnly:!0})],I.prototype,"geometryType",void 0),e([y$1({type:["show","hide"]})],I.prototype,"listMode",void 0),e([y$1({type:["IntegratedMeshLayer"]})],I.prototype,"operationalLayerType",void 0),e([y$1({json:{read:!1},readOnly:!0})],I.prototype,"type",void 0),e([y$1({type:s$2,readOnly:!0})],I.prototype,"nodePages",void 0),e([y$1({type:[l$2],readOnly:!0})],I.prototype,"materialDefinitions",void 0),e([y$1({type:[u$1],readOnly:!0})],I.prototype,"textureSetDefinitions",void 0),e([y$1({type:[m$2],readOnly:!0})],I.prototype,"geometryDefinitions",void 0),e([y$1({readOnly:!0})],I.prototype,"serviceUpdateTimeStamp",void 0),e([y$1({type:m}),g({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],I.prototype,"modifications",void 0),e([o(["web-scene","portal-item"],"modifications")],I.prototype,"readModifications",null),e([y$1(d)],I.prototype,"elevationInfo",void 0),e([y$1({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],I.prototype,"path",void 0),I=e([a$2("esri.layers.IntegratedMeshLayer")],I);const O=I;

export default O;

//# sourceMappingURL=IntegratedMeshLayer-18b238b6.js.map