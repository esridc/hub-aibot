import { a1 as e, a2 as y, fg as b, a3 as a, eF as i, W as d$1, s, J as l } from './hub-compass-map-68308039.js';
import { a as a$2 } from './BitmapContainer-ebaf75e1.js';
import { f as f$1, d } from './LayerView-6ca034b7.js';
import { o as oe } from './GraphicsView2D-dba791dc.js';
import { n } from './HighlightGraphicContainer-d7f6a30d.js';
import { v } from './ExportStrategy-ce93a97d.js';
import { m } from './ExportImageParameters-a2efdccf.js';
import { a as a$1 } from './RefreshableLayerView-10d77e06.js';
import { U, r } from './drapedUtils-80dcd858.js';
import './index-d436d5f8.js';
import './WGLContainer-25c01575.js';
import './definitions-6e5909d3.js';
import './VertexArrayObject-3e0deefe.js';
import './Texture-2136281d.js';
import './enums-f1bebe6f.js';
import './VertexElementDescriptor-33a64685.js';
import './color-e6670fe4.js';
import './enums-63fd0640.js';
import './number-4aaa92a3.js';
import './ProgramTemplate-f235ba4b.js';
import './GeometryUtils-26db2899.js';
import './alignmentUtils-63467b02.js';
import './StyleDefinition-4cf61a7b.js';
import './config-78edfbcd.js';
import './Container-82f058f5.js';
import './earcut-5b80530c.js';
import './featureConversionUtils-e451106b.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './cimAnalyzer-5794c7c7.js';
import './fontUtils-56997abd.js';
import './BidiEngine-20165a23.js';
import './GeometryUtils-edfc28ec.js';
import './utils-ae252ef1.js';
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
import './cimSymbolUtils-d431c102.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './webStyleSymbolUtils-e9589717.js';
import './util-40d07144.js';
import './Matcher-966c9b57.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-82cf59fe.js';
import './ComputedAttributeStorage-bafdb263.js';
import './arcadeTimeUtils-f8caff3d.js';
import './executionError-5ec41157.js';
import './BaseGraphicContainer-85ac7fbe.js';
import './FeatureContainer-9339bd48.js';
import './TileContainer-4d717575.js';
import './vec3f32-77e8c64f.js';
import './Bitmap-79eabc67.js';
import './floorFilterUtils-29b268fd.js';
import './sublayerUtils-101a4ab2.js';
import './scaleUtils-e5a7b7c7.js';
import './popupUtils-914b2733.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const p=p=>{let a$1=class extends p{initialize(){this.exportImageParameters=new m({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y()],a$1.prototype,"exportImageParameters",void 0),e([y({readOnly:!0})],a$1.prototype,"floors",null),e([y({readOnly:!0})],a$1.prototype,"exportImageVersion",null),e([y()],a$1.prototype,"layer",void 0),e([y()],a$1.prototype,"suspended",void 0),e([y(b)],a$1.prototype,"timeExtent",void 0),a$1=e([a("esri.views.layers.MapImageLayerView")],a$1),a$1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let f=class extends(p(a$1(f$1(d)))){constructor(){super(...arguments),this._highlightGraphics=new i,this._updateHash="";}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const r=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==r&&(this._updateHash=r,this.strategy.update(t).catch((t=>{d$1(t)||s.getLogger(this).error(t);})),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t);}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,s=i>=10.3,a=i>=10;this._bitmapContainer=new a$2,this.container.addChild(this._bitmapContainer),this._highlightView=new oe({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(t,e)=>r(t,e,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,e)=>{this._highlightView.graphicUpdateHandler({graphic:t,property:e});},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:s,imageNormalizationSupported:a,hidpi:!0}),this.addAttachHandles(l((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate();}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,r){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,e,i,r){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};e([y()],f.prototype,"strategy",void 0),e([y()],f.prototype,"updating",void 0),f=e([a("esri.views.2d.layers.MapImageLayerView2D")],f);const w=f;

export default w;

//# sourceMappingURL=MapImageLayerView2D-62439906.js.map