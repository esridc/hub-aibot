import { a1 as e, a2 as y, fg as b, a3 as a, eF as i, W as d$1, s, J as l } from './hub-compass-map-f4225e12.js';
import { a as a$2 } from './BitmapContainer-ca7a4109.js';
import { f as f$1, d } from './LayerView-d595c11d.js';
import { o as oe } from './GraphicsView2D-77f1b58e.js';
import { n } from './HighlightGraphicContainer-8ca10f1e.js';
import { v } from './ExportStrategy-2224a780.js';
import { m } from './ExportImageParameters-ca75a044.js';
import { a as a$1 } from './RefreshableLayerView-5d983d04.js';
import { U, r } from './drapedUtils-7e790f3b.js';
import './index-d436d5f8.js';
import './WGLContainer-fc72d08f.js';
import './definitions-2a5e2c90.js';
import './VertexArrayObject-2a8cdbad.js';
import './Texture-52798ec4.js';
import './enums-f1bebe6f.js';
import './VertexElementDescriptor-33a64685.js';
import './color-07edd940.js';
import './enums-63fd0640.js';
import './number-4aaa92a3.js';
import './ProgramTemplate-49989acd.js';
import './GeometryUtils-e7f92760.js';
import './alignmentUtils-63467b02.js';
import './StyleDefinition-4cf61a7b.js';
import './config-78edfbcd.js';
import './Container-a2c22c83.js';
import './earcut-bde06d16.js';
import './featureConversionUtils-aa77f433.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './cimAnalyzer-51b7fc99.js';
import './fontUtils-109c9f90.js';
import './BidiEngine-20165a23.js';
import './GeometryUtils-edfc28ec.js';
import './utils-0c7c3308.js';
import './Rect-b4ddc2bf.js';
import './quantizationUtils-af65af81.js';
import './floatRGBA-8b0c35f1.js';
import './normalizeUtilsSync-ebd062ab.js';
import './projectionSupport-b10f8928.js';
import './json-4697dff9.js';
import './AttributeStoreView-00808734.js';
import './TiledDisplayObject-60abc381.js';
import './visualVariablesUtils-68194aa9.js';
import './createSymbolSchema-f3e33196.js';
import './cimSymbolUtils-5a00cf74.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './webStyleSymbolUtils-e2984068.js';
import './util-3b7250fb.js';
import './Matcher-23cbbc6b.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-d2bd25ee.js';
import './ComputedAttributeStorage-454517fa.js';
import './arcadeTimeUtils-351d37f2.js';
import './executionError-5ec41157.js';
import './BaseGraphicContainer-4508a9b0.js';
import './FeatureContainer-ce389e2c.js';
import './TileContainer-6c259836.js';
import './vec3f32-77e8c64f.js';
import './Bitmap-5b32a246.js';
import './floorFilterUtils-29b268fd.js';
import './sublayerUtils-93d8db31.js';
import './scaleUtils-a974cc9e.js';
import './popupUtils-ab9ef3c1.js';

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

//# sourceMappingURL=MapImageLayerView2D-4064316e.js.map