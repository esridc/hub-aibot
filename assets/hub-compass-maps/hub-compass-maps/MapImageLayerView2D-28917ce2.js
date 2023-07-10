import { a1 as e, a2 as y, fg as b, a3 as a, eF as i, W as d$1, s, J as l } from './hub-compass-map-4d751555.js';
import { a as a$2 } from './BitmapContainer-acc35c22.js';
import { f as f$1, d } from './LayerView-686abf7a.js';
import { o as oe } from './GraphicsView2D-10f20421.js';
import { n } from './HighlightGraphicContainer-7db2c211.js';
import { v } from './ExportStrategy-51cdcc87.js';
import { m } from './ExportImageParameters-d76165ae.js';
import { a as a$1 } from './RefreshableLayerView-a7422109.js';
import { U, r } from './drapedUtils-f5f0b7b9.js';
import './index-d436d5f8.js';
import './WGLContainer-0eba88c0.js';
import './definitions-780d8bac.js';
import './VertexArrayObject-e8140cf7.js';
import './Texture-f70323fa.js';
import './enums-f1bebe6f.js';
import './VertexElementDescriptor-33a64685.js';
import './color-c09f883e.js';
import './enums-63fd0640.js';
import './number-4aaa92a3.js';
import './ProgramTemplate-f0091ff6.js';
import './GeometryUtils-ae7c7d19.js';
import './alignmentUtils-63467b02.js';
import './StyleDefinition-4cf61a7b.js';
import './config-78edfbcd.js';
import './Container-d1c5f8b6.js';
import './earcut-275e4de1.js';
import './featureConversionUtils-80dbaef5.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './cimAnalyzer-6b3d716f.js';
import './fontUtils-0fd04675.js';
import './BidiEngine-20165a23.js';
import './GeometryUtils-edfc28ec.js';
import './utils-daa8d2fa.js';
import './Rect-b4ddc2bf.js';
import './quantizationUtils-9ada3d42.js';
import './floatRGBA-d6f7ec9e.js';
import './normalizeUtilsSync-4a9da8f8.js';
import './projectionSupport-89b75a6e.js';
import './json-4697dff9.js';
import './AttributeStoreView-8a55c708.js';
import './TiledDisplayObject-8c01461f.js';
import './visualVariablesUtils-20c7d45d.js';
import './createSymbolSchema-63ed74a0.js';
import './cimSymbolUtils-f842f57c.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './webStyleSymbolUtils-32c225fc.js';
import './util-1e83203f.js';
import './Matcher-44fb61c3.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-ab805735.js';
import './ComputedAttributeStorage-01366597.js';
import './arcadeTimeUtils-530d2f45.js';
import './executionError-5ec41157.js';
import './BaseGraphicContainer-4cd884da.js';
import './FeatureContainer-400af24d.js';
import './TileContainer-7647bd7a.js';
import './vec3f32-77e8c64f.js';
import './Bitmap-f0265bb5.js';
import './floorFilterUtils-29b268fd.js';
import './sublayerUtils-f7c5f43a.js';
import './scaleUtils-ae262f8f.js';
import './popupUtils-2fcc03b7.js';

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

//# sourceMappingURL=MapImageLayerView2D-28917ce2.js.map