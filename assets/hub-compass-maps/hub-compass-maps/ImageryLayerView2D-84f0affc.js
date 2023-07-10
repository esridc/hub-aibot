import { a0 as m$1, W as d$1, s, cB as h$1, a1 as e, a2 as y, a3 as a$1, cp as k, cs as M$1, f1 as d$3, J as l$1, eK as w, O as j, f as s$1, cD as b$1, a9 as x, fg as b$2, eF as i$1, et as U, cL as V } from './hub-compass-map-68308039.js';
import { d as d$2, f, h as h$2 } from './RasterVFDisplayObject-2edf2f31.js';
import { f as f$2, d as d$4 } from './LayerView-6ca034b7.js';
import { o as oe } from './GraphicsView2D-dba791dc.js';
import { n as n$1 } from './HighlightGraphicContainer-d7f6a30d.js';
import { M, m as m$2, f as f$1 } from './dataUtils-b417a756.js';
import { a } from './BitmapContainer-ebaf75e1.js';
import { h } from './Container-82f058f5.js';
import { l } from './Bitmap-79eabc67.js';
import { v } from './ExportStrategy-ce93a97d.js';
import { q } from './rasterProjectionHelper-c2d0e01d.js';
import { T } from './color-e6670fe4.js';
import { i } from './WGLContainer-25c01575.js';
import { p as p$1 } from './popupUtils-914b2733.js';
import { a as a$2 } from './RefreshableLayerView-10d77e06.js';
import './index-d436d5f8.js';
import './VertexArrayObject-3e0deefe.js';
import './Texture-2136281d.js';
import './enums-f1bebe6f.js';
import './VertexElementDescriptor-33a64685.js';
import './cimAnalyzer-5794c7c7.js';
import './fontUtils-56997abd.js';
import './BidiEngine-20165a23.js';
import './OptimizedGeometry-d99be84d.js';
import './GeometryUtils-edfc28ec.js';
import './enums-63fd0640.js';
import './utils-ae252ef1.js';
import './alignmentUtils-63467b02.js';
import './definitions-6e5909d3.js';
import './number-4aaa92a3.js';
import './Rect-b4ddc2bf.js';
import './quantizationUtils-0ef46038.js';
import './floatRGBA-da020d60.js';
import './normalizeUtilsSync-4f2d25b3.js';
import './projectionSupport-1d172051.js';
import './json-4697dff9.js';
import './AttributeStoreView-356296ba.js';
import './TiledDisplayObject-99ff23bf.js';
import './visualVariablesUtils-99504d10.js';
import './createSymbolSchema-984d8bca.js';
import './GeometryUtils-26db2899.js';
import './cimSymbolUtils-d431c102.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './webStyleSymbolUtils-e9589717.js';
import './util-40d07144.js';
import './Matcher-966c9b57.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-82cf59fe.js';
import './earcut-5b80530c.js';
import './ComputedAttributeStorage-bafdb263.js';
import './featureConversionUtils-e451106b.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './arcadeTimeUtils-f8caff3d.js';
import './executionError-5ec41157.js';
import './BaseGraphicContainer-85ac7fbe.js';
import './FeatureContainer-9339bd48.js';
import './TileContainer-4d717575.js';
import './vec3f32-77e8c64f.js';
import './ProgramTemplate-f235ba4b.js';
import './StyleDefinition-4cf61a7b.js';
import './config-78edfbcd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let m=class extends m$1{constructor(){super(...arguments),this.attached=!1,this.container=new h,this.updateRequested=!1,this.type="imagery",this._bitmapView=new a;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch((t=>{d$1(t)||s.getLogger(this).error(t);}));}hitTest(t){return new h$1({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,e=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new v({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:e,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()});}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1;}redraw(){this.strategy.updateExports((async t=>{const{source:e}=t;if(!e||e instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:e.extent,pixelBlock:e.originalPixelBlock??e.pixelBlock});e.filter=t=>this.layer.pixelFilter?this.layer.applyFilter(t):{...i,extent:e.extent};})).catch((t=>{d$1(t)||s.getLogger(this).error(t);}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(1===t.length&&t[0].source)return {extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const e=this.view.extent,i=t.map((t=>t.source)).filter((t=>t.extent&&t.extent.intersects(e))).map((t=>({extent:t.extent,pixelBlock:t.originalPixelBlock}))),r=M(i,e);return null!=r?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(t,e,i,r){(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const s=await this.layer.fetchImage(t,e,i,r);if(s.imageBitmap)return s.imageBitmap;const a=await this.layer.applyRenderer(s.pixelData,{signal:r.signal}),o=new l(a.pixelBlock,a.extent?.clone(),s.pixelData.pixelBlock);return o.filter=t=>this.layer.applyFilter(t),o}};e([y()],m.prototype,"attached",void 0),e([y()],m.prototype,"container",void 0),e([y()],m.prototype,"layer",void 0),e([y()],m.prototype,"strategy",void 0),e([y()],m.prototype,"timeExtent",void 0),e([y()],m.prototype,"view",void 0),e([y()],m.prototype,"updateRequested",void 0),e([y()],m.prototype,"updating",null),e([y()],m.prototype,"type",void 0),m=e([a$1("esri.views.2d.layers.imagery.ImageryView2D")],m);const u$1=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class t extends i{constructor(){super(...arguments),this.symbolTypes=["triangle"];}get requiresDedicatedFBO(){return !1}prepareRenderPasses(s){const t=s.registerRenderPass({name:"imagery (vf)",brushes:[d$2],target:()=>this.children,drawPhase:T.MAP});return [...super.prepareRenderPasses(s),t]}doRender(e){this.visible&&e.drawPhase===T.MAP&&this.symbolTypes.forEach((r=>{e.renderPass=r,super.doRender(e);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let c=class extends m$1{constructor(e){super(e),this._loading=null,this.update=k(((e,t)=>this._update(e,t).catch((e=>{d$1(e)||s.getLogger(this).error(e);}))));}get updating(){return !!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender();}async _update(e,t,r){if(!e.stationary)return;const{extent:i,spatialReference:s}=e.state,o=new M$1({xmin:i.xmin,ymin:i.ymin,xmax:i.xmax,ymax:i.ymax,spatialReference:s}),[a,l]=e.state.size;this._loading=this.fetchPixels(o,a,l,r);const c=await this._loading;this._addToDisplay(c,t,e.state),this._loading=null;}_addToDisplay(e,t,r){if(null==e.pixelBlock)return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:i,pixelBlock:s}=e,o=new f(s);o.offset=[0,0],o.symbolizerParameters=t,o.rawPixelData=e,o.invalidateVAO(),o.x=i.xmin,o.y=i.ymax,o.pixelRatio=r.pixelRatio,o.rotation=r.rotation,o.resolution=r.resolution,o.width=s.width*t.symbolTileSize,o.height=s.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(o);}};e([y()],c.prototype,"fetchPixels",void 0),e([y()],c.prototype,"container",void 0),e([y()],c.prototype,"_loading",void 0),e([y()],c.prototype,"updating",null),c=e([a$1("esri.views.2d.layers.imagery.ImageryVFStrategy")],c);const p=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let u=class extends d$3{constructor(){super(...arguments),this.attached=!1,this.container=new t,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,r,i)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:a}=this.layer.renderer,{extent:o,width:n,height:l}=m$2(t,e,r,a,s);if(null!=s&&!s.intersects(t))return {extent:o,pixelBlock:null};const c={bbox:`${o.xmin}, ${o.ymin}, ${o.xmax}, ${o.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:a,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(c)){const t=this.getPixelData();if(null!=t){if(`${t.extent.xmin}, ${t.extent.ymin}, ${t.extent.xmax}, ${t.extent.ymax}`===c.bbox)return t}}const{pixelData:h}=await this.layer.fetchImage(o,n,l,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:i});this._dataParameters=c;const y=h?.pixelBlock;if(null==y)return {extent:o,pixelBlock:null};return {extent:o,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?f$1(y,"vector-uv"):y}};}get updating(){return !this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new p({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(l$1((()=>this.layer.renderer),(t=>this._updateSymbolizerParams(t)),w),"attach");}detach(){this._strategy.destroy(),this.container.children.forEach((t=>t.destroy())),this.container.removeAllChildren(),this.handles.remove("attach"),this._strategy=this.container=this._projectFullExtentPromise=null;}getPixelData(){const t=this.container.children[0]?.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:r}=t;return {extent:e,pixelBlock:r}}hitTest(t){return new h$1({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams);}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams));}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,r=this._dataParameters.time===t.time,i=this._dataParameters.symbolTileSize===t.symbolTileSize,s=this._dataParameters.bbox===t.bbox;return e&&r&&i&&s}async _getProjectedFullExtent(t){try{return await q(this.layer.fullExtent,t)}catch(e){try{const e=(await j(this.layer.url,{query:{option:"footprints",outSR:t.wkid||JSON.stringify(t.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return e?M$1.fromJSON(e):null}catch{return null}}}_updateSymbolizerParams(t){"vector-field"===t.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}));}};e([y()],u.prototype,"attached",void 0),e([y()],u.prototype,"container",void 0),e([y()],u.prototype,"layer",void 0),e([y()],u.prototype,"timeExtent",void 0),e([y()],u.prototype,"type",void 0),e([y()],u.prototype,"view",void 0),e([y()],u.prototype,"updating",null),u=e([a$1("esri.views.2d.layers.imagery.VectorFieldView2D")],u);const d=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const n=n=>{let u=class extends n{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,t){const{layer:o}=this;if(!e)throw new s$1("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o});const{popupEnabled:p}=o,n=p$1(o,t);if(!p||null==n)throw new s$1("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:p,popupTemplate:n});const u=await n.getRequiredFields(),l=new b$1;l.timeExtent=this.timeExtent,l.geometry=e,l.outFields=u,l.outSpatialReference=e.spatialReference;const{resolution:m,spatialReference:c}=this.view,y="2d"===this.view.type?new x(m,m,c):new x(.5*m,.5*m,c),{returnTopmostRaster:d,showNoDataRecords:h}=n.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},w={returnDomainValues:!0,returnTopmostRaster:d,pixelSize:y,showNoDataRecords:h,signal:null!=t?t.signal:null};return o.queryVisibleRasters(l,w).then((e=>e))}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y()],u.prototype,"layer",void 0),e([y()],u.prototype,"suspended",void 0),e([y(b$2)],u.prototype,"timeExtent",void 0),e([y()],u.prototype,"view",void 0),u=e([a$1("esri.views.layers.ImageryLayerView")],u),u};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let g=class extends(n(a$2(f$2(d$4)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new i$1,this._highlightView=void 0,this.layer=null,this.subview=null;}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}async hitTest(e,t){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){this.subview?.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new oe({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n$1(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([l$1((()=>this.layer.blendMode??"normal"),(e=>this.subview&&(this.subview.container.blendMode=e)),w),l$1((()=>this.layer.effect??null),(e=>this.subview&&(this.subview.container.effect=e)),w),l$1((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());}),U),l$1((()=>this.timeExtent),(e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch());}),U),this.layer.on("redraw",(()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch());})),l$1((()=>this.layer.renderer),(()=>this._setSubView()))]);}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,r){if(!((Array.isArray(e)?e[0]:V.isCollection(e)?e.at(0):e)instanceof h$1))return {remove:()=>{}};let s=[];return Array.isArray(e)||V.isCollection(e)?s=e.map((e=>e.clone())):e instanceof h$1&&(s=[e.clone()]),this._highlightGraphics.addMany(s),{remove:()=>{this._highlightGraphics.removeMany(s);}}}async doRefresh(){this.requestUpdate();}isUpdating(){return !this.subview||this.subview.updating}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let t="imagery";if("vector-field"===e?t="imageryVF":"flow"===e&&(t="flow"),this.subview){const{type:e}=this.subview;if(e===t)return this._attachSubview(this.subview),void("flow"===e?this.subview.redrawOrRefetch():"imagery"===e&&"lerc"===this.layer.format?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy();}this.subview="imagery"===t?new u$1({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===t?new d({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new h$2({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate();}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect);}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1);}};e([y()],g.prototype,"pixelData",null),e([y()],g.prototype,"subview",void 0),g=e([a$1("esri.views.2d.layers.ImageryLayerView2D")],g);const b=g;

export default b;

//# sourceMappingURL=ImageryLayerView2D-84f0affc.js.map