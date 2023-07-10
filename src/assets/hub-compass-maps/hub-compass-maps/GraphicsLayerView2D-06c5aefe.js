import { H as l$1, cB as h, cL as V, aB as R, a1 as e, a2 as y, a3 as a } from './hub-compass-map-f4225e12.js';
import { f, d as d$1 } from './LayerView-d595c11d.js';
import { i } from './GraphicContainer-014b46ba.js';
import { o as oe } from './GraphicsView2D-77f1b58e.js';
import './index-d436d5f8.js';
import './Container-a2c22c83.js';
import './definitions-2a5e2c90.js';
import './enums-f1bebe6f.js';
import './Texture-52798ec4.js';
import './color-07edd940.js';
import './enums-63fd0640.js';
import './VertexElementDescriptor-33a64685.js';
import './number-4aaa92a3.js';
import './BaseGraphicContainer-4508a9b0.js';
import './FeatureContainer-ce389e2c.js';
import './AttributeStoreView-00808734.js';
import './TiledDisplayObject-60abc381.js';
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
import './util-3b7250fb.js';
import './TileContainer-6c259836.js';
import './vec3f32-77e8c64f.js';
import './normalizeUtilsSync-ebd062ab.js';
import './projectionSupport-b10f8928.js';
import './json-4697dff9.js';
import './Matcher-23cbbc6b.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-d2bd25ee.js';
import './ComputedAttributeStorage-454517fa.js';
import './arcadeTimeUtils-351d37f2.js';
import './executionError-5ec41157.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const l={remove(){},pause(){},resume(){}};let n=class extends(f(d$1)){constructor(){super(...arguments),this._highlightIds=new Map;}attach(){this.graphicsView=new oe({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler));}detach(){this.container.removeAllChildren(),this.graphicsView=l$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate)):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i){let h$1;"number"==typeof i?h$1=[i]:i instanceof h?h$1=[i.uid]:Array.isArray(i)&&i.length>0?h$1="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(h$1=i.map((i=>i&&i.uid)).toArray());const r=h$1?.filter(R);return r?.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):l}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t);this._highlightIds.set(t,i+1);}else this._highlightIds.set(t,1);this._updateHighlight();}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t)-1;0===i?this._highlightIds.delete(t):this._highlightIds.set(t,i);}this._updateHighlight();}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));}};e([y()],n.prototype,"graphicsView",void 0),n=e([a("esri.views.2d.layers.GraphicsLayerView2D")],n);const d=n;

export default d;

//# sourceMappingURL=GraphicsLayerView2D-06c5aefe.js.map