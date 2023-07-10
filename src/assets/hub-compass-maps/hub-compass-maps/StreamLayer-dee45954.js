import { cV as l, a1 as e, a2 as y, a3 as a, i_ as s, f as s$1, jC as n, jD as p$1, iU as a$1, jE as a$2, iV as t$1, iW as p$2, gp as l$1, gq as c, gr as j, gs as O, jB as o, dc as b, aE as f, aF as f$1, jF as c$1, l1 as o$1, s as s$2, l7 as v, i7 as o$2, g6 as n$1, i$ as p$3, cD as b$1, O as j$1, gE as y$1, jG as p$4, d9 as t$2, i1 as h, cs as M, jH as m, jI as C, jJ as i$1, j9 as c$2, eE as T, l8 as D, l9 as I, j1 as p$5, fl as k, jL as p$6, j0 as n$2, eR as o$3, jM as l$2, gv as f$2 } from './hub-compass-map-4d751555.js';
import './index-d436d5f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var t;let i=t=class extends l{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1;}clone(){return new t({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([y({type:Number,json:{write:!0}})],i.prototype,"age",void 0),e([y({type:Number,json:{write:!0}})],i.prototype,"ageReceived",void 0),e([y({type:Number,json:{write:!0}})],i.prototype,"displayCount",void 0),e([y({type:Number,json:{write:!0}})],i.prototype,"maxObservations",void 0),i=t=e([a("esri.layers.support.PurgeOptions")],i);const p=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const Q=s();function H(e,t){return new s$1("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}let K=class extends(n(p$1(a$1(a$2(t$1(p$2(l$1(c(j(O(o(b)))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new p,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=f.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null;}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new s$1("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(f$1).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t);}set renderer(e){c$1(e,this.fieldsIndex),this._set("renderer",e);}readRenderer(e,t,i){t=t.layerDefinition||t;const o=t.drawingInfo?.renderer;if(o){const e=o$1(o,t,i)||void 0;return e||s$2.getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:i}),e}return v(t,i)}async connect(e){const[{createConnection:t}]=await Promise.all([import('./createConnection-e9e4f237.js'),this.load()]),r=this.geometryType?o$2.toJSON(this.geometryType):null,{customParameters:i=null,definitionExpression:o=null,geometryDefinition:s=null,maxReconnectionAttempts:n=0,maxReconnectionInterval:p=20,spatialReference:l=this.spatialReference}=e||this.createConnectionParameters(),m=t(this.parsedUrl,this.spatialReference,l,r,{geometry:s,where:o},n,p,i??void 0),d=n$1([this.on("send-message-to-socket",(e=>m.sendMessageToSocket(e))),this.on("send-message-to-client",(e=>m.sendMessageToClient(e)))]);return m.once("destroy",d.remove),m}createConnectionParameters(){return {spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return p$3(this,e)}createQuery(){const e=new b$1;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let r=null;return this.fields.some((t=>(t.name===e&&(r=t.domain),!!r))),r}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return !0}sendMessageToSocket(e){this.emit("send-message-to-socket",e);}sendMessageToClient(e){this.emit("send-message-to-client",e);}write(e,t){const r=t?.messages;return this.webSocketUrl?(r?.push(H(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,t):(r?.push(H(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!!!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:t}=await j$1(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t;}}else {if(!this.timeInfo?.trackIdField)throw new s$1("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const e=this.fields.find((e=>"oid"===e.type))?.name;if(!e)throw new s$1("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=e;}if(!this.fields)throw new s$1("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some((e=>e.name===this.objectIdField))||this.fields.push(new y$1({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new s$1("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl);}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),c$1(this.renderer,this.fieldsIndex),p$4(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),t$2(this,{origin:"service"})}};e([y({type:String})],K.prototype,"copyright",void 0),e([y({readOnly:!0})],K.prototype,"defaultPopupTemplate",null),e([y({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],K.prototype,"definitionExpression",void 0),e([y({type:String})],K.prototype,"displayField",void 0),e([y({type:h})],K.prototype,"elevationInfo",void 0),e([y({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],K.prototype,"featureReduction",null),e([y(Q.fields)],K.prototype,"fields",void 0),e([y(Q.fieldsIndex)],K.prototype,"fieldsIndex",void 0),e([y({type:M,json:{name:"layerDefinition.definitionGeometry",write:!0}})],K.prototype,"geometryDefinition",void 0),e([y({type:o$2.apiValues,json:{read:{reader:o$2.read}}})],K.prototype,"geometryType",void 0),e([y(m)],K.prototype,"labelsVisible",void 0),e([y({type:[C],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:i$1},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],K.prototype,"labelingInfo",void 0),e([y(c$2)],K.prototype,"legendEnabled",void 0),e([y({type:["show","hide"]})],K.prototype,"listMode",void 0),e([y({type:T})],K.prototype,"maxReconnectionAttempts",void 0),e([y({type:T})],K.prototype,"maxReconnectionInterval",void 0),e([y(D)],K.prototype,"maxScale",void 0),e([y(I)],K.prototype,"minScale",void 0),e([y({type:String})],K.prototype,"objectIdField",void 0),e([y({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],K.prototype,"operationalLayerType",void 0),e([y(p$5)],K.prototype,"popupEnabled",void 0),e([y({type:k,json:{name:"popupInfo",write:!0}})],K.prototype,"popupTemplate",void 0),e([y({type:p})],K.prototype,"purgeOptions",void 0),e([y({json:{read:!1,write:!1}})],K.prototype,"refreshInterval",void 0),e([y({types:p$6,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:n$2,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],K.prototype,"renderer",null),e([o$3("service","renderer",["drawingInfo.renderer","defaultSymbol"]),o$3("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],K.prototype,"readRenderer",null),e([y(l$2)],K.prototype,"screenSizePerspectiveEnabled",void 0),e([y()],K.prototype,"sourceJSON",void 0),e([y({type:f,json:{origins:{service:{read:{source:"spatialReference"}}}}})],K.prototype,"spatialReference",void 0),e([y({json:{read:!1}})],K.prototype,"type",void 0),e([y(f$2)],K.prototype,"url",void 0),e([y({type:Number})],K.prototype,"updateInterval",void 0),e([y({json:{read:!1,write:!1}})],K.prototype,"useViewTime",void 0),e([y({type:String})],K.prototype,"webSocketUrl",void 0),K=e([a("esri.layers.StreamLayer")],K);const X=K;

export default X;

//# sourceMappingURL=StreamLayer-dee45954.js.map