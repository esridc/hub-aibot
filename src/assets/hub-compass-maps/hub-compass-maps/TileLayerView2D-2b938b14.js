import { eF as i, eG as h, eH as y, eI as r, J as l, bz as S$1, W as d$1, bC as e, s, a1 as e$1, a2 as y$1, a3 as a$1 } from './hub-compass-map-68308039.js';
import './Rasterizer-5efeeda7.js';
import './Container-82f058f5.js';
import './BufferPool-285de1d6.js';
import './color-e6670fe4.js';
import './WGLContainer-25c01575.js';
import './enums-f1bebe6f.js';
import './Texture-2136281d.js';
import './ProgramTemplate-f235ba4b.js';
import './definitions-6e5909d3.js';
import './GeometryUtils-26db2899.js';
import './VertexArrayObject-3e0deefe.js';
import './number-4aaa92a3.js';
import './StyleDefinition-4cf61a7b.js';
import './enums-64077e1c.js';
import './MagnifierPrograms-ea879c53.js';
import './OrderIndependentTransparency-2a855020.js';
import './floatRGBA-da020d60.js';
import './testSVGPremultipliedAlpha-9b43dd1a.js';
import { o as oe } from './GraphicsView2D-dba791dc.js';
import './AttributeStoreView-356296ba.js';
import './earcut-5b80530c.js';
import './featureConversionUtils-e451106b.js';
import './vec3f32-77e8c64f.js';
import { t, o, n as n$1 } from './imageUtils-5ae8ce81.js';
import { f, d } from './LayerView-6ca034b7.js';
import { n } from './HighlightGraphicContainer-d7f6a30d.js';
import { a } from './RefreshableLayerView-10d77e06.js';
import { S, U, r as r$1 } from './drapedUtils-80dcd858.js';
import './index-d436d5f8.js';
import './cimAnalyzer-5794c7c7.js';
import './fontUtils-56997abd.js';
import './BidiEngine-20165a23.js';
import './OptimizedGeometry-d99be84d.js';
import './GeometryUtils-edfc28ec.js';
import './enums-63fd0640.js';
import './utils-ae252ef1.js';
import './alignmentUtils-63467b02.js';
import './Rect-b4ddc2bf.js';
import './quantizationUtils-0ef46038.js';
import './rasterizingUtils-215c5c77.js';
import './VertexElementDescriptor-33a64685.js';
import './config-78edfbcd.js';
import './pbf-bcfa39bd.js';
import './imageutils-1d63e6c2.js';
import './Matcher-966c9b57.js';
import './visualVariablesUtils-99504d10.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-82cf59fe.js';
import './cimSymbolUtils-d431c102.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './webStyleSymbolUtils-e9589717.js';
import './CircularArray-00e66d79.js';
import './throttle-4b0bde7a.js';
import './ComputedAttributeStorage-bafdb263.js';
import './arcadeTimeUtils-f8caff3d.js';
import './executionError-5ec41157.js';
import './projectionSupport-1d172051.js';
import './json-4697dff9.js';
import './basicInterfaces-ce8a6401.js';
import './normalizeUtilsSync-4f2d25b3.js';
import './createSymbolSchema-984d8bca.js';
import './TiledDisplayObject-99ff23bf.js';
import './util-40d07144.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './BitmapTileContainer-67e7a717.js';
import './Bitmap-79eabc67.js';
import './TileContainer-4d717575.js';
import './BaseGraphicContainer-85ac7fbe.js';
import './FeatureContainer-9339bd48.js';
import './scaleUtils-e5a7b7c7.js';
import './floorFilterUtils-29b268fd.js';
import './sublayerUtils-101a4ab2.js';
import './popupUtils-914b2733.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const T=[0,0];let v=class extends(a(t(f(d)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new i,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null;}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return "tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e);}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new h(this.layer.tileInfo,this.layer.fullExtent,t?.effectiveMinLOD,t?.effectiveMaxLOD),this._fetchQueue=new y({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),S(this,this.layer)){const e=this._highlightView=new oe({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(e,t)=>r$1(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{e.graphicUpdateHandler({graphic:t,property:i});},layerView:this,updatingHandles:this.updatingHandles});}this.requestUpdate(),this.addAttachHandles(l((()=>this.resampling),(()=>{this.doRefresh();}))),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null;}async fetchPopupFeatures(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(e,t):[]}highlight(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):{remove(){}}}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}supportsSpatialReference(e){return S$1(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._enqueueTileFetch(e))));}isUpdating(){return this._fetchQueue?.updating??!1}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(T,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e$1,t={}){const r=this.tilemapCache,{signal:s,resamplingLevel:o$1=0}=t;if(!r)try{return await this._fetchImage(e$1,s)}catch(a){if(!d$1(a)&&!this.resampling)return o(this._tileInfoView.tileInfo.size);if(o$1<3){const i=this._tileInfoView.getTileParentId(e$1.id);if(i){const r=new e(i),s=await this.fetchTile(r,{...t,resamplingLevel:o$1+1});return n$1(this._tileInfoView,s,r,e$1)}}throw a}const l=new e(0,0,0,0);let h;try{if(await r.fetchAvailabilityUpsample(e$1.level,e$1.row,e$1.col,l,{signal:s}),l.level!==e$1.level&&!this.resampling)return o(this._tileInfoView.tileInfo.size);h=await this._fetchImage(l,s);}catch(a){if(d$1(a))throw a;h=await this._fetchImage(e$1,s);}return this.resampling?n$1(this._tileInfoView,h,l,e$1):h}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.requestRender(),e.once("attach",(()=>this.requestUpdate()));}catch(r){d$1(r)||s.getLogger(this).error(r);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};e$1([y$1()],v.prototype,"_fetchQueue",void 0),e$1([y$1()],v.prototype,"resampling",null),e$1([y$1()],v.prototype,"tilemapCache",null),v=e$1([a$1("esri.views.2d.layers.TileLayerView2D")],v);const I=v;

export default I;

//# sourceMappingURL=TileLayerView2D-2b938b14.js.map