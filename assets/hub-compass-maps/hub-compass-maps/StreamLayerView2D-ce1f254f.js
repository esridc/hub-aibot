import { a1 as e, a2 as y$1, ff as d, a3 as a, J as l, f as s, g6 as n, cR as d$1 } from './hub-compass-map-4d751555.js';
import W from './FeatureLayerView2D-b0891b14.js';
import { e as e$1 } from './util-1e83203f.js';
import './index-d436d5f8.js';
import './Container-d1c5f8b6.js';
import './definitions-780d8bac.js';
import './enums-f1bebe6f.js';
import './Texture-f70323fa.js';
import './LayerView-686abf7a.js';
import './AttributeStoreView-8a55c708.js';
import './TiledDisplayObject-8c01461f.js';
import './color-c09f883e.js';
import './enums-63fd0640.js';
import './VertexElementDescriptor-33a64685.js';
import './number-4aaa92a3.js';
import './WGLContainer-0eba88c0.js';
import './VertexArrayObject-e8140cf7.js';
import './ProgramTemplate-f0091ff6.js';
import './GeometryUtils-ae7c7d19.js';
import './alignmentUtils-63467b02.js';
import './StyleDefinition-4cf61a7b.js';
import './config-78edfbcd.js';
import './earcut-275e4de1.js';
import './featureConversionUtils-80dbaef5.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './visualVariablesUtils-20c7d45d.js';
import './createSymbolSchema-63ed74a0.js';
import './cimAnalyzer-6b3d716f.js';
import './fontUtils-0fd04675.js';
import './BidiEngine-20165a23.js';
import './GeometryUtils-edfc28ec.js';
import './utils-daa8d2fa.js';
import './Rect-b4ddc2bf.js';
import './quantizationUtils-9ada3d42.js';
import './floatRGBA-d6f7ec9e.js';
import './cimSymbolUtils-f842f57c.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './webStyleSymbolUtils-32c225fc.js';
import './BitmapTileContainer-593e9c44.js';
import './Bitmap-f0265bb5.js';
import './TileContainer-7647bd7a.js';
import './CircularArray-00e66d79.js';
import './BufferPool-76e4a53a.js';
import './FeatureContainer-400af24d.js';
import './floorFilterUtils-29b268fd.js';
import './popupUtils-2fcc03b7.js';
import './RefreshableLayerView-a7422109.js';

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

//# sourceMappingURL=StreamLayerView2D-ce1f254f.js.map