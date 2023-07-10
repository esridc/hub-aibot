import { eF as i, eG as h, eH as y, eI as r, J as l, bz as S$1, W as d$1, bC as e, s, a1 as e$1, a2 as y$1, a3 as a$1 } from './hub-compass-map-f4225e12.js';
import './Rasterizer-606842c8.js';
import './Container-a2c22c83.js';
import './BufferPool-0a852487.js';
import './color-07edd940.js';
import './WGLContainer-fc72d08f.js';
import './enums-f1bebe6f.js';
import './Texture-52798ec4.js';
import './ProgramTemplate-49989acd.js';
import './definitions-2a5e2c90.js';
import './GeometryUtils-e7f92760.js';
import './VertexArrayObject-2a8cdbad.js';
import './number-4aaa92a3.js';
import './StyleDefinition-4cf61a7b.js';
import './enums-64077e1c.js';
import './MagnifierPrograms-355ec638.js';
import './OrderIndependentTransparency-2a855020.js';
import './floatRGBA-8b0c35f1.js';
import './testSVGPremultipliedAlpha-562666f0.js';
import { o as oe } from './GraphicsView2D-77f1b58e.js';
import './AttributeStoreView-00808734.js';
import './earcut-bde06d16.js';
import './featureConversionUtils-aa77f433.js';
import './vec3f32-77e8c64f.js';
import { t, o, n as n$1 } from './imageUtils-6c8798fb.js';
import { f, d } from './LayerView-d595c11d.js';
import { n } from './HighlightGraphicContainer-8ca10f1e.js';
import { a } from './RefreshableLayerView-5d983d04.js';
import { S, U, r as r$1 } from './drapedUtils-7e790f3b.js';
import './index-d436d5f8.js';
import './cimAnalyzer-51b7fc99.js';
import './fontUtils-109c9f90.js';
import './BidiEngine-20165a23.js';
import './OptimizedGeometry-d99be84d.js';
import './GeometryUtils-edfc28ec.js';
import './enums-63fd0640.js';
import './utils-0c7c3308.js';
import './alignmentUtils-63467b02.js';
import './Rect-b4ddc2bf.js';
import './quantizationUtils-af65af81.js';
import './rasterizingUtils-7c9a99ce.js';
import './VertexElementDescriptor-33a64685.js';
import './config-78edfbcd.js';
import './pbf-2ae522ce.js';
import './imageutils-5c1a10ac.js';
import './Matcher-23cbbc6b.js';
import './visualVariablesUtils-68194aa9.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-d2bd25ee.js';
import './cimSymbolUtils-5a00cf74.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './webStyleSymbolUtils-e2984068.js';
import './CircularArray-00e66d79.js';
import './throttle-4b0bde7a.js';
import './ComputedAttributeStorage-454517fa.js';
import './arcadeTimeUtils-351d37f2.js';
import './executionError-5ec41157.js';
import './projectionSupport-b10f8928.js';
import './json-4697dff9.js';
import './basicInterfaces-ce8a6401.js';
import './normalizeUtilsSync-ebd062ab.js';
import './createSymbolSchema-f3e33196.js';
import './TiledDisplayObject-60abc381.js';
import './util-3b7250fb.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './BitmapTileContainer-e496b5ba.js';
import './Bitmap-5b32a246.js';
import './TileContainer-6c259836.js';
import './BaseGraphicContainer-4508a9b0.js';
import './FeatureContainer-ce389e2c.js';
import './scaleUtils-a974cc9e.js';
import './floorFilterUtils-29b268fd.js';
import './sublayerUtils-93d8db31.js';
import './popupUtils-ab9ef3c1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const T=[0,0];let v=class extends(a(t(f(d)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new i,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null;}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return "tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e);}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new h(this.layer.tileInfo,this.layer.fullExtent,t?.effectiveMinLOD,t?.effectiveMaxLOD),this._fetchQueue=new y({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),S(this,this.layer)){const e=this._highlightView=new oe({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(e,t)=>r$1(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{e.graphicUpdateHandler({graphic:t,property:i});},layerView:this,updatingHandles:this.updatingHandles});}this.requestUpdate(),this.addAttachHandles(l((()=>this.resampling),(()=>{this.doRefresh();}))),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null;}async fetchPopupFeatures(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(e,t):[]}highlight(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):{remove(){}}}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}supportsSpatialReference(e){return S$1(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._enqueueTileFetch(e))));}isUpdating(){return this._fetchQueue?.updating??!1}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(T,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e$1,t={}){const r=this.tilemapCache,{signal:s,resamplingLevel:o$1=0}=t;if(!r)try{return await this._fetchImage(e$1,s)}catch(a){if(!d$1(a)&&!this.resampling)return o(this._tileInfoView.tileInfo.size);if(o$1<3){const i=this._tileInfoView.getTileParentId(e$1.id);if(i){const r=new e(i),s=await this.fetchTile(r,{...t,resamplingLevel:o$1+1});return n$1(this._tileInfoView,s,r,e$1)}}throw a}const l=new e(0,0,0,0);let h;try{if(await r.fetchAvailabilityUpsample(e$1.level,e$1.row,e$1.col,l,{signal:s}),l.level!==e$1.level&&!this.resampling)return o(this._tileInfoView.tileInfo.size);h=await this._fetchImage(l,s);}catch(a){if(d$1(a))throw a;h=await this._fetchImage(e$1,s);}return this.resampling?n$1(this._tileInfoView,h,l,e$1):h}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.requestRender(),e.once("attach",(()=>this.requestUpdate()));}catch(r){d$1(r)||s.getLogger(this).error(r);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};e$1([y$1()],v.prototype,"_fetchQueue",void 0),e$1([y$1()],v.prototype,"resampling",null),e$1([y$1()],v.prototype,"tilemapCache",null),v=e$1([a$1("esri.views.2d.layers.TileLayerView2D")],v);const I=v;

export default I;

//# sourceMappingURL=TileLayerView2D-eead9762.js.map