import { cL as V$1, fR as n, K as h, aB as R, J as l, a1 as e, a2 as y$1, a3 as a } from './hub-compass-map-4d751555.js';
import { m, c, C, T, j as j$1, S, O } from './Stop-428108d6.js';
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
const y=Object.freeze({remove(){},pause(){},resume(){}}),k=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],v={graphic:null,property:null,oldValue:null,newValue:null};function M(t){return t instanceof m||t instanceof c||t instanceof C||t instanceof T||t instanceof j$1||t instanceof S||t instanceof O}function V(t){return V$1.isCollection(t)&&t.length&&M(t.at(0))}function j(t){return Array.isArray(t)&&t.length>0&&M(t[0])}let G=class extends(f(d)){constructor(){super(...arguments),this._graphics=new V$1,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map;}get _routeItems(){return new n({getCollections:()=>null==this.layer||this.destroyed?[]:[null!=this.layer.routeInfo?new V$1([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this.updatingHandles.addOnCollectionChange((()=>this._routeItems),(t=>this._routeItemsChanged(t)),h);}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy();}attach(){this._createGraphicsView();}detach(){this._destroyGraphicsView();}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter((t=>!!t.popupTemplate))}highlight(t){let r;r=M(t)?[this._getNetworkFeatureUid(t)]:j(t)?t.map((t=>this._getNetworkFeatureUid(t))):V(t)?t.map((t=>this._getNetworkFeatureUid(t))).toArray():[t.uid];const i=r.filter(R);return i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):y}async hitTest(t,r){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(R).map((t=>this._networkGraphicMap.get(t)));if(!i.length)return null;const{layer:s}=this;return i.reverse().map((e=>({type:"route",layer:s,mapPoint:t,networkFeature:e})))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t);}viewChange(){this._graphicsView.viewChange();}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e);this._highlightIds.set(e,t+1);}else this._highlightIds.set(e,1);this._updateHighlight();}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),r=new i(t.featuresTilingScheme);this._graphicsView=new oe({container:r,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(r),this._updateHighlight();}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy();}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return k.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e)-1;0===t?this._highlightIds.delete(e):this._highlightIds.set(e,t);}this._updateHighlight();}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map((t=>{const e=this._networkFeatureMap.get(t);return this._networkFeatureMap.delete(t),this._networkGraphicMap.delete(e),e})));for(const e of t.removed)this.removeHandles(e);}if(t.added.length){this._graphics.addMany(t.added.map((t=>{const e=this._createGraphic(t);return null==e.symbol?null:(this._networkFeatureMap.set(t,e),this._networkGraphicMap.set(e,t),e)})).filter(R));for(const e of t.added)this.addHandles([l((()=>e.geometry),((t,r)=>{this._updateGraphic(e,"geometry",t,r);})),l((()=>e.symbol),((t,r)=>{this._updateGraphic(e,"symbol",t,r);}))],e);this._graphics.sort(((t,e)=>this._getDrawOrder(t)-this._getDrawOrder(e)));}}_updateGraphic(t,e,r,i){if(!this._networkFeatureMap.has(t)){const e=this._createGraphic(t);return this._networkFeatureMap.set(t,e),this._networkGraphicMap.set(e,t),void this._graphics.add(e)}const s=this._networkFeatureMap.get(t);s[e]=r,v.graphic=s,v.property=e,v.oldValue=i,v.newValue=r,this._graphicsView.graphicUpdateHandler(v);}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t);}};e([y$1()],G.prototype,"_graphics",void 0),e([y$1()],G.prototype,"_routeItems",null),G=e([a("esri.views.2d.layers.RouteLayerView2D")],G);const I=G;

export default I;

//# sourceMappingURL=RouteLayerView2D-c0f036cb.js.map