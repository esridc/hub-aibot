import { cL as V$1, fR as n, K as h, aB as R, J as l, a1 as e, a2 as y$1, a3 as a } from './hub-compass-map-68308039.js';
import { m, c, C, T, j as j$1, S, O } from './Stop-0400250c.js';
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
const y=Object.freeze({remove(){},pause(){},resume(){}}),k=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],v={graphic:null,property:null,oldValue:null,newValue:null};function M(t){return t instanceof m||t instanceof c||t instanceof C||t instanceof T||t instanceof j$1||t instanceof S||t instanceof O}function V(t){return V$1.isCollection(t)&&t.length&&M(t.at(0))}function j(t){return Array.isArray(t)&&t.length>0&&M(t[0])}let G=class extends(f(d)){constructor(){super(...arguments),this._graphics=new V$1,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map;}get _routeItems(){return new n({getCollections:()=>null==this.layer||this.destroyed?[]:[null!=this.layer.routeInfo?new V$1([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this.updatingHandles.addOnCollectionChange((()=>this._routeItems),(t=>this._routeItemsChanged(t)),h);}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy();}attach(){this._createGraphicsView();}detach(){this._destroyGraphicsView();}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter((t=>!!t.popupTemplate))}highlight(t){let r;r=M(t)?[this._getNetworkFeatureUid(t)]:j(t)?t.map((t=>this._getNetworkFeatureUid(t))):V(t)?t.map((t=>this._getNetworkFeatureUid(t))).toArray():[t.uid];const i=r.filter(R);return i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):y}async hitTest(t,r){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(R).map((t=>this._networkGraphicMap.get(t)));if(!i.length)return null;const{layer:s}=this;return i.reverse().map((e=>({type:"route",layer:s,mapPoint:t,networkFeature:e})))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t);}viewChange(){this._graphicsView.viewChange();}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e);this._highlightIds.set(e,t+1);}else this._highlightIds.set(e,1);this._updateHighlight();}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),r=new i(t.featuresTilingScheme);this._graphicsView=new oe({container:r,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(r),this._updateHighlight();}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy();}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return k.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const t=this._highlightIds.get(e)-1;0===t?this._highlightIds.delete(e):this._highlightIds.set(e,t);}this._updateHighlight();}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map((t=>{const e=this._networkFeatureMap.get(t);return this._networkFeatureMap.delete(t),this._networkGraphicMap.delete(e),e})));for(const e of t.removed)this.removeHandles(e);}if(t.added.length){this._graphics.addMany(t.added.map((t=>{const e=this._createGraphic(t);return null==e.symbol?null:(this._networkFeatureMap.set(t,e),this._networkGraphicMap.set(e,t),e)})).filter(R));for(const e of t.added)this.addHandles([l((()=>e.geometry),((t,r)=>{this._updateGraphic(e,"geometry",t,r);})),l((()=>e.symbol),((t,r)=>{this._updateGraphic(e,"symbol",t,r);}))],e);this._graphics.sort(((t,e)=>this._getDrawOrder(t)-this._getDrawOrder(e)));}}_updateGraphic(t,e,r,i){if(!this._networkFeatureMap.has(t)){const e=this._createGraphic(t);return this._networkFeatureMap.set(t,e),this._networkGraphicMap.set(e,t),void this._graphics.add(e)}const s=this._networkFeatureMap.get(t);s[e]=r,v.graphic=s,v.property=e,v.oldValue=i,v.newValue=r,this._graphicsView.graphicUpdateHandler(v);}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t);}};e([y$1()],G.prototype,"_graphics",void 0),e([y$1()],G.prototype,"_routeItems",null),G=e([a("esri.views.2d.layers.RouteLayerView2D")],G);const I=G;

export default I;

//# sourceMappingURL=RouteLayerView2D-c1ca8ff6.js.map