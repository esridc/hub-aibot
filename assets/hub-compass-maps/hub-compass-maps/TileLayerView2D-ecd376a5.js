import { eF as i, eG as h, eH as y, eI as r, J as l, bz as S$1, W as d$1, bC as e, s, a1 as e$1, a2 as y$1, a3 as a$1 } from './hub-compass-map-4d751555.js';
import './Rasterizer-069015d0.js';
import './Container-d1c5f8b6.js';
import './BufferPool-76e4a53a.js';
import './color-c09f883e.js';
import './WGLContainer-0eba88c0.js';
import './enums-f1bebe6f.js';
import './Texture-f70323fa.js';
import './ProgramTemplate-f0091ff6.js';
import './definitions-780d8bac.js';
import './GeometryUtils-ae7c7d19.js';
import './VertexArrayObject-e8140cf7.js';
import './number-4aaa92a3.js';
import './StyleDefinition-4cf61a7b.js';
import './enums-64077e1c.js';
import './MagnifierPrograms-59a31b2b.js';
import './OrderIndependentTransparency-2a855020.js';
import './floatRGBA-d6f7ec9e.js';
import './testSVGPremultipliedAlpha-26dceadc.js';
import { o as oe } from './GraphicsView2D-10f20421.js';
import './AttributeStoreView-8a55c708.js';
import './earcut-275e4de1.js';
import './featureConversionUtils-80dbaef5.js';
import './vec3f32-77e8c64f.js';
import { t, o, n as n$1 } from './imageUtils-9dda0935.js';
import { f, d } from './LayerView-686abf7a.js';
import { n } from './HighlightGraphicContainer-7db2c211.js';
import { a } from './RefreshableLayerView-a7422109.js';
import { S, U, r as r$1 } from './drapedUtils-f5f0b7b9.js';
import './index-d436d5f8.js';
import './cimAnalyzer-6b3d716f.js';
import './fontUtils-0fd04675.js';
import './BidiEngine-20165a23.js';
import './OptimizedGeometry-d99be84d.js';
import './GeometryUtils-edfc28ec.js';
import './enums-63fd0640.js';
import './utils-daa8d2fa.js';
import './alignmentUtils-63467b02.js';
import './Rect-b4ddc2bf.js';
import './quantizationUtils-9ada3d42.js';
import './rasterizingUtils-1001bafb.js';
import './VertexElementDescriptor-33a64685.js';
import './config-78edfbcd.js';
import './pbf-62769da7.js';
import './imageutils-f86cf60d.js';
import './Matcher-44fb61c3.js';
import './visualVariablesUtils-20c7d45d.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-ab805735.js';
import './cimSymbolUtils-f842f57c.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './webStyleSymbolUtils-32c225fc.js';
import './CircularArray-00e66d79.js';
import './throttle-4b0bde7a.js';
import './ComputedAttributeStorage-01366597.js';
import './arcadeTimeUtils-530d2f45.js';
import './executionError-5ec41157.js';
import './projectionSupport-89b75a6e.js';
import './json-4697dff9.js';
import './basicInterfaces-ce8a6401.js';
import './normalizeUtilsSync-4a9da8f8.js';
import './createSymbolSchema-63ed74a0.js';
import './TiledDisplayObject-8c01461f.js';
import './util-1e83203f.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './BitmapTileContainer-593e9c44.js';
import './Bitmap-f0265bb5.js';
import './TileContainer-7647bd7a.js';
import './BaseGraphicContainer-4cd884da.js';
import './FeatureContainer-400af24d.js';
import './scaleUtils-ae262f8f.js';
import './floorFilterUtils-29b268fd.js';
import './sublayerUtils-f7c5f43a.js';
import './popupUtils-2fcc03b7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const T=[0,0];let v=class extends(a(t(f(d)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new i,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null;}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return "tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e);}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new h(this.layer.tileInfo,this.layer.fullExtent,t?.effectiveMinLOD,t?.effectiveMaxLOD),this._fetchQueue=new y({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),S(this,this.layer)){const e=this._highlightView=new oe({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(e,t)=>r$1(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{e.graphicUpdateHandler({graphic:t,property:i});},layerView:this,updatingHandles:this.updatingHandles});}this.requestUpdate(),this.addAttachHandles(l((()=>this.resampling),(()=>{this.doRefresh();}))),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null;}async fetchPopupFeatures(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(e,t):[]}highlight(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):{remove(){}}}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}supportsSpatialReference(e){return S$1(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._enqueueTileFetch(e))));}isUpdating(){return this._fetchQueue?.updating??!1}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(T,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e$1,t={}){const r=this.tilemapCache,{signal:s,resamplingLevel:o$1=0}=t;if(!r)try{return await this._fetchImage(e$1,s)}catch(a){if(!d$1(a)&&!this.resampling)return o(this._tileInfoView.tileInfo.size);if(o$1<3){const i=this._tileInfoView.getTileParentId(e$1.id);if(i){const r=new e(i),s=await this.fetchTile(r,{...t,resamplingLevel:o$1+1});return n$1(this._tileInfoView,s,r,e$1)}}throw a}const l=new e(0,0,0,0);let h;try{if(await r.fetchAvailabilityUpsample(e$1.level,e$1.row,e$1.col,l,{signal:s}),l.level!==e$1.level&&!this.resampling)return o(this._tileInfoView.tileInfo.size);h=await this._fetchImage(l,s);}catch(a){if(d$1(a))throw a;h=await this._fetchImage(e$1,s);}return this.resampling?n$1(this._tileInfoView,h,l,e$1):h}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.requestRender(),e.once("attach",(()=>this.requestUpdate()));}catch(r){d$1(r)||s.getLogger(this).error(r);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};e$1([y$1()],v.prototype,"_fetchQueue",void 0),e$1([y$1()],v.prototype,"resampling",null),e$1([y$1()],v.prototype,"tilemapCache",null),v=e$1([a$1("esri.views.2d.layers.TileLayerView2D")],v);const I=v;

export default I;

//# sourceMappingURL=TileLayerView2D-ecd376a5.js.map