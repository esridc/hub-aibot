import { J as l, cR as d$1, cL as V, fl as k, fm as t, K as h, fn as p, a1 as e, a3 as a } from './hub-compass-map-4d751555.js';
import { f, d } from './LayerView-686abf7a.js';
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
let y=class extends(f(d)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().map((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).flat().map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([l((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i$1,featureSet:t$1,layerDefinition:o}of e){const e=d$1.fromJSON(t$1),p=new V(e.features),n=o.drawingInfo,m=i$1?k.fromJSON(i$1):null,y=t(n.renderer),g=new oe({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new i(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),h),l((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});}),h),l((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});}),h),l((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}),h)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([a("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export default g;

//# sourceMappingURL=GeoRSSLayerView2D-01b687fd.js.map