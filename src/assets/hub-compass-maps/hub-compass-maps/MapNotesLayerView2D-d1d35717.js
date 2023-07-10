import { cB as h, cL as V, aB as R, J as l, K as h$1, dM as a, a1 as e, a3 as a$1 } from './hub-compass-map-4d751555.js';
import { h as h$2 } from './Container-d1c5f8b6.js';
import { r } from './GroupContainer-5217fc57.js';
import { f as f$1, d } from './LayerView-686abf7a.js';
import { i } from './GraphicContainer-4cf11b5b.js';
import { o as oe } from './GraphicsView2D-10f20421.js';
import './index-d436d5f8.js';
import './definitions-780d8bac.js';
import './enums-f1bebe6f.js';
import './Texture-f70323fa.js';
import './WGLContainer-0eba88c0.js';
import './VertexArrayObject-e8140cf7.js';
import './VertexElementDescriptor-33a64685.js';
import './color-c09f883e.js';
import './enums-63fd0640.js';
import './number-4aaa92a3.js';
import './ProgramTemplate-f0091ff6.js';
import './GeometryUtils-ae7c7d19.js';
import './alignmentUtils-63467b02.js';
import './StyleDefinition-4cf61a7b.js';
import './config-78edfbcd.js';
import './earcut-275e4de1.js';
import './featureConversionUtils-80dbaef5.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './BaseGraphicContainer-4cd884da.js';
import './FeatureContainer-400af24d.js';
import './AttributeStoreView-8a55c708.js';
import './TiledDisplayObject-8c01461f.js';
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
const u="sublayers",f="layerView",m=Object.freeze({remove(){},pause(){},resume(){}});let w=class extends(f$1(d)){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new r;}async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(i=>i.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){null==this._graphicsViewsFeatureCollectionMap?null==this._graphicsViews?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys();}async hitTest(e,i){return Array.from(this.graphicsViews(),(i=>{const s=i.hitTest(e);if(null!=this._graphicsViewsFeatureCollectionMap){const e=this._graphicsViewsFeatureCollectionMap.get(i);for(const i of s)!i.popupTemplate&&e.popupTemplate&&(i.popupTemplate=e.popupTemplate),i.sourceLayer=i.layer=this.layer;}return s})).flat().map((i=>({type:"graphic",graphic:i,layer:this.layer,mapPoint:e})))}highlight(e){let r;"number"==typeof e?r=[e]:e instanceof h?r=[e.uid]:Array.isArray(e)&&e.length>0?r="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):V.isCollection(e)&&(r=e.map((e=>e&&e.uid)).toArray());const a=r?.filter(R);return a?.length?(this._addHighlight(a),{remove:()=>{this._removeHighlight(a);}}):m}update(e){for(const i of this.graphicsViews())i.processUpdate(e);}attach(){const e=this.view,i$1=()=>this.requestUpdate(),s=this.layer.featureCollections;if(null!=s&&s.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of s){const s=new i(this.view.featuresTilingScheme),a=new oe({view:e,graphics:t.source,renderer:t.renderer,requestUpdateCallback:i$1,container:s});this._graphicsViewsFeatureCollectionMap.set(a,t),this.container.addChild(a.container),this.addHandles([l((()=>t.visible),(e=>a.container.visible=e),h$1),l((()=>a.updating),(()=>this.notifyChange("updating")),h$1)],f);}this._updateHighlight();}else null!=this.layer.sublayers&&this.addHandles(a((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),u);}detach(){this._destroyGraphicsViews(),this.removeHandles(u);}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(f);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),null==this.layer.sublayers)return;const e=[],i$1=this.view,s=()=>this.requestUpdate();for(const t of this.layer.sublayers){const a=new h$2,o=new i(this.view.featuresTilingScheme);o.fadeTransitionEnabled=!0;const l$1=new oe({view:i$1,graphics:t.graphics,requestUpdateCallback:s,container:o});this.addHandles([t.on("graphic-update",l$1.graphicUpdateHandler),l((()=>t.visible),(e=>l$1.container.visible=e),h$1),l((()=>l$1.updating),(()=>this.notifyChange("updating")),h$1)],f),a.addChild(l$1.container),this.container.addChild(a),e.push(l$1);}this._graphicsViews=e,this._updateHighlight();}_addHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i);this._highlightIds.set(i,e+1);}else this._highlightIds.set(i,1);this._updateHighlight();}_removeHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i)-1;0===e?this._highlightIds.delete(i):this._highlightIds.set(i,e);}this._updateHighlight();}_updateHighlight(){const e=Array.from(this._highlightIds.keys());for(const i of this.graphicsViews())i.setHighlight(e);}};w=e([a$1("esri.views.2d.layers.MapNotesLayerView2D")],w);const y=w;

export default y;

//# sourceMappingURL=MapNotesLayerView2D-d1d35717.js.map