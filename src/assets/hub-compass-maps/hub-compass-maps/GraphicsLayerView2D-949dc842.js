import { H as l$1, cB as h, cL as V, aB as R, a1 as e, a2 as y, a3 as a } from './hub-compass-map-4d751555.js';
import { f, d as d$1 } from './LayerView-686abf7a.js';
import { i } from './GraphicContainer-4cf11b5b.js';
import { o as oe } from './GraphicsView2D-10f20421.js';
import './index-d436d5f8.js';
import './Container-d1c5f8b6.js';
import './definitions-780d8bac.js';
import './enums-f1bebe6f.js';
import './Texture-f70323fa.js';
import './color-c09f883e.js';
import './enums-63fd0640.js';
import './VertexElementDescriptor-33a64685.js';
import './number-4aaa92a3.js';
import './BaseGraphicContainer-4cd884da.js';
import './FeatureContainer-400af24d.js';
import './AttributeStoreView-8a55c708.js';
import './TiledDisplayObject-8c01461f.js';
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
import './util-1e83203f.js';
import './TileContainer-7647bd7a.js';
import './vec3f32-77e8c64f.js';
import './normalizeUtilsSync-4a9da8f8.js';
import './projectionSupport-89b75a6e.js';
import './json-4697dff9.js';
import './Matcher-44fb61c3.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-ab805735.js';
import './ComputedAttributeStorage-01366597.js';
import './arcadeTimeUtils-530d2f45.js';
import './executionError-5ec41157.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const l={remove(){},pause(){},resume(){}};let n=class extends(f(d$1)){constructor(){super(...arguments),this._highlightIds=new Map;}attach(){this.graphicsView=new oe({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler));}detach(){this.container.removeAllChildren(),this.graphicsView=l$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate)):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i){let h$1;"number"==typeof i?h$1=[i]:i instanceof h?h$1=[i.uid]:Array.isArray(i)&&i.length>0?h$1="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(h$1=i.map((i=>i&&i.uid)).toArray());const r=h$1?.filter(R);return r?.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):l}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t);this._highlightIds.set(t,i+1);}else this._highlightIds.set(t,1);this._updateHighlight();}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t)-1;0===i?this._highlightIds.delete(t):this._highlightIds.set(t,i);}this._updateHighlight();}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));}};e([y()],n.prototype,"graphicsView",void 0),n=e([a("esri.views.2d.layers.GraphicsLayerView2D")],n);const d=n;

export default d;

//# sourceMappingURL=GraphicsLayerView2D-949dc842.js.map