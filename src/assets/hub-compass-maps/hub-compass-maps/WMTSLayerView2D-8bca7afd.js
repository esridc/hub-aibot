import { eG as h, eH as y, eI as r, J as l, bC as e, W as d$2, bz as S, s, a1 as e$1, a2 as y$1, a3 as a$1 } from './hub-compass-map-f4225e12.js';
import { t, n } from './imageUtils-6c8798fb.js';
import { f, d as d$1 } from './LayerView-d595c11d.js';
import { a } from './RefreshableLayerView-5d983d04.js';
import './index-d436d5f8.js';
import './BitmapTileContainer-e496b5ba.js';
import './Bitmap-5b32a246.js';
import './Container-a2c22c83.js';
import './definitions-2a5e2c90.js';
import './enums-f1bebe6f.js';
import './Texture-52798ec4.js';
import './TiledDisplayObject-60abc381.js';
import './WGLContainer-fc72d08f.js';
import './VertexArrayObject-2a8cdbad.js';
import './VertexElementDescriptor-33a64685.js';
import './color-07edd940.js';
import './enums-63fd0640.js';
import './number-4aaa92a3.js';
import './ProgramTemplate-49989acd.js';
import './GeometryUtils-e7f92760.js';
import './alignmentUtils-63467b02.js';
import './StyleDefinition-4cf61a7b.js';
import './config-78edfbcd.js';
import './earcut-bde06d16.js';
import './featureConversionUtils-aa77f433.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './TileContainer-6c259836.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const d=[102113,102100,3857,3785,900913],_=[0,0];let w=class extends(a(t(f(d$1)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null;}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();}attach(){const e=this.tileMatrixSet?.tileInfo;e&&(this._tileInfoView=new h(e),this._fetchQueue=new y({tileInfoView:this._tileInfoView,concurrency:16,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.addAttachHandles(l((()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet]),(()=>this._refresh()))),super.attach());}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(_,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){!this.attached||this.updateRequested||this.suspended||this._refresh();}isUpdating(){return this._fetchQueue?.updating??!1}async fetchTile(e$1,t={}){const s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:a=0}=t;if(!s)return this._fetchImage(e$1,r);const l=new e(0,0,0,0);let o;try{await s.fetchAvailabilityUpsample(e$1.level,e$1.row,e$1.col,l,{signal:r}),o=await this._fetchImage(l,r);}catch(h){if(d$2(h))throw h;if(a<3){const i=this._tileInfoView.getTileParentId(e$1.id);if(i){const s=new e(i),r=await this.fetchTile(s,{...t,resamplingLevel:a+1});return n(this._tileInfoView,r,s,e$1)}}throw h}return n(this._tileInfoView,o,l,e$1)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets?.some((t=>S(t.tileInfo?.spatialReference,e)))??!1}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(s$1){d$2(s$1)||s.getLogger(this).error(s$1);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.refresh((e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t;})).catch((t=>{d$2(t)||(e.bitmap.source=null);})).finally((()=>{e.requestRender(),t.fulfilled=!0;}))};this._tileRequests.set(e,t);}));}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>S(e.tileInfo?.spatialReference,t)));return !i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>d.includes(e.tileInfo?.spatialReference.wkid??-1)))),i}};e$1([y$1()],w.prototype,"_fetchQueue",void 0),e$1([y$1({readOnly:!0})],w.prototype,"tileMatrixSet",null),w=e$1([a$1("esri.views.2d.layers.WMTSLayerView2D")],w);const g=w;

export default g;

//# sourceMappingURL=WMTSLayerView2D-8bca7afd.js.map