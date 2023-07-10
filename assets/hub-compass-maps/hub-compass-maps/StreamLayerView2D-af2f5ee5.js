import { a1 as e, a2 as y$1, ff as d, a3 as a, J as l, f as s, g6 as n, cR as d$1 } from './hub-compass-map-f4225e12.js';
import W from './FeatureLayerView2D-2cbe57e9.js';
import { e as e$1 } from './util-3b7250fb.js';
import './index-d436d5f8.js';
import './Container-a2c22c83.js';
import './definitions-2a5e2c90.js';
import './enums-f1bebe6f.js';
import './Texture-52798ec4.js';
import './LayerView-d595c11d.js';
import './AttributeStoreView-00808734.js';
import './TiledDisplayObject-60abc381.js';
import './color-07edd940.js';
import './enums-63fd0640.js';
import './VertexElementDescriptor-33a64685.js';
import './number-4aaa92a3.js';
import './WGLContainer-fc72d08f.js';
import './VertexArrayObject-2a8cdbad.js';
import './ProgramTemplate-49989acd.js';
import './GeometryUtils-e7f92760.js';
import './alignmentUtils-63467b02.js';
import './StyleDefinition-4cf61a7b.js';
import './config-78edfbcd.js';
import './earcut-bde06d16.js';
import './featureConversionUtils-aa77f433.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './visualVariablesUtils-68194aa9.js';
import './createSymbolSchema-f3e33196.js';
import './cimAnalyzer-51b7fc99.js';
import './fontUtils-109c9f90.js';
import './BidiEngine-20165a23.js';
import './GeometryUtils-edfc28ec.js';
import './utils-0c7c3308.js';
import './Rect-b4ddc2bf.js';
import './quantizationUtils-af65af81.js';
import './floatRGBA-8b0c35f1.js';
import './cimSymbolUtils-5a00cf74.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './webStyleSymbolUtils-e2984068.js';
import './BitmapTileContainer-e496b5ba.js';
import './Bitmap-5b32a246.js';
import './TileContainer-6c259836.js';
import './CircularArray-00e66d79.js';
import './BufferPool-0a852487.js';
import './FeatureContainer-ce389e2c.js';
import './floorFilterUtils-29b268fd.js';
import './popupUtils-ab9ef3c1.js';
import './RefreshableLayerView-5d983d04.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const o=o=>{let i=class extends o{resume(){this._isUserPaused=!1,this.suspended||this._doResume();}pause(){this._isUserPaused=!0,this.suspended||this._doPause();}constructor(...s){super(...s),this._isUserPaused=!1,this.filter=null;}get connectionStatus(){return this._isUserPaused?"paused":this._streamConnectionStatus}_onSuspendedChange(s){s?this._doPause():this._isUserPaused||this._doResume();}};return e([y$1()],i.prototype,"_isUserPaused",void 0),e([y$1({readOnly:!0})],i.prototype,"connectionStatus",null),e([y$1({type:d})],i.prototype,"filter",void 0),i=e([a("esri.layers.mixins.StreamLayerView")],i),i};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function c(e,t){if(null==e&&null==t)return null;const r={};return null!=t&&(r.geometry=t.toJSON()),null!=e&&(r.where=e),r}let u=class extends(o(W)){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null,this._enabledEventTypes=new Set;}initialize(){this.addHandles([l((()=>this.layer.customParameters),(e=>this._proxy.updateCustomParameters(e))),this.layer.on("send-message-to-socket",(e=>this._proxy.sendMessageToSocket(e))),this.layer.on("send-message-to-client",(e=>this._proxy.sendMessageToClient(e))),l((()=>this.layer.purgeOptions),(()=>this._update())),l((()=>this.suspended),this._onSuspendedChange.bind(this))],"constructor");}get connectionError(){return this.pipelineErrorString?new s("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return n(e.map((e=>this.on(e,t))));const s=["data-received","message-received"].includes(e);s&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const i=super.on(e,t),o=this;return {remove(){i.remove(),s&&(o._proxy.closed||o.hasEventListener(e)||o._proxy.enableEvent(e,!1));}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=d$1.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected";}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._proxy?.pauseStream();}_doResume(){this._proxy?.resumeStream();}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(c(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),s=e$1(e.geometryType),i=e.timeInfo&&e.timeInfo.toJSON()||null,o=e.spatialReference?e.spatialReference.toJSON():null;return {type:"stream",isPaused:this._isUserPaused,fields:r,geometryType:s,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:c(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:o,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};e([y$1()],u.prototype,"pipelineConnectionStatus",void 0),e([y$1()],u.prototype,"pipelineErrorString",void 0),e([y$1({readOnly:!0})],u.prototype,"connectionError",null),e([y$1({readOnly:!0})],u.prototype,"_streamConnectionStatus",null),u=e([a("esri.views.2d.layers.StreamLayerView2D")],u);const y=u;

export default y;

//# sourceMappingURL=StreamLayerView2D-af2f5ee5.js.map