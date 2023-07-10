import { J as l, cR as d$1, cL as V, fl as k, fm as t, K as h, fn as p, a1 as e, a3 as a } from './hub-compass-map-68308039.js';
import { f, d } from './LayerView-6ca034b7.js';
import { i } from './GraphicContainer-34688d98.js';
import { o as oe } from './GraphicsView2D-dba791dc.js';
import './index-d436d5f8.js';
import './Container-82f058f5.js';
import './definitions-6e5909d3.js';
import './enums-f1bebe6f.js';
import './Texture-2136281d.js';
import './color-e6670fe4.js';
import './enums-63fd0640.js';
import './VertexElementDescriptor-33a64685.js';
import './number-4aaa92a3.js';
import './BaseGraphicContainer-85ac7fbe.js';
import './FeatureContainer-9339bd48.js';
import './AttributeStoreView-356296ba.js';
import './TiledDisplayObject-99ff23bf.js';
import './WGLContainer-25c01575.js';
import './VertexArrayObject-3e0deefe.js';
import './ProgramTemplate-f235ba4b.js';
import './GeometryUtils-26db2899.js';
import './alignmentUtils-63467b02.js';
import './StyleDefinition-4cf61a7b.js';
import './config-78edfbcd.js';
import './earcut-5b80530c.js';
import './featureConversionUtils-e451106b.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './visualVariablesUtils-99504d10.js';
import './createSymbolSchema-984d8bca.js';
import './cimAnalyzer-5794c7c7.js';
import './fontUtils-56997abd.js';
import './BidiEngine-20165a23.js';
import './GeometryUtils-edfc28ec.js';
import './utils-ae252ef1.js';
import './Rect-b4ddc2bf.js';
import './quantizationUtils-0ef46038.js';
import './floatRGBA-da020d60.js';
import './cimSymbolUtils-d431c102.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './webStyleSymbolUtils-e9589717.js';
import './util-40d07144.js';
import './TileContainer-4d717575.js';
import './vec3f32-77e8c64f.js';
import './normalizeUtilsSync-4f2d25b3.js';
import './projectionSupport-1d172051.js';
import './json-4697dff9.js';
import './Matcher-966c9b57.js';
import './tileUtils-c39d05c6.js';
import './TurboLine-82cf59fe.js';
import './ComputedAttributeStorage-bafdb263.js';
import './arcadeTimeUtils-f8caff3d.js';
import './executionError-5ec41157.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let y=class extends(f(d)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().map((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).flat().map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([l((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i$1,featureSet:t$1,layerDefinition:o}of e){const e=d$1.fromJSON(t$1),p=new V(e.features),n=o.drawingInfo,m=i$1?k.fromJSON(i$1):null,y=t(n.renderer),g=new oe({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new i(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),h),l((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});}),h),l((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});}),h),l((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}),h)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([a("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export default g;

//# sourceMappingURL=GeoRSSLayerView2D-b334fc98.js.map