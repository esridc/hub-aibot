import { cB as h, cL as V, aB as R, J as l, K as h$1, dM as a, a1 as e, a3 as a$1 } from './hub-compass-map-f4225e12.js';
import { h as h$2 } from './Container-a2c22c83.js';
import { r } from './GroupContainer-13ea400c.js';
import { f as f$1, d } from './LayerView-d595c11d.js';
import { i } from './GraphicContainer-014b46ba.js';
import { o as oe } from './GraphicsView2D-77f1b58e.js';
import './index-d436d5f8.js';
import './definitions-2a5e2c90.js';
import './enums-f1bebe6f.js';
import './Texture-52798ec4.js';
import './WGLContainer-fc72d08f.js';
import './VertexArrayObject-2a8cdbad.js';
import './VertexElementDescriptor-33a64685.js';
import './color-07edd940.js';
import './enums-63fd0640.js';
import './number-4aaa92a3.js';
import './ProgramTemplate-49989acd.js';
import './GeometryUtils-e7f92760.js';
import './alignmentUtils-63467b02.js';
import './StyleDefinition-4cf61a7b.js';
import './config-78edfbcd.js';
import './earcut-bde06d16.js';
import './featureConversionUtils-aa77f433.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './BaseGraphicContainer-4508a9b0.js';
import './FeatureContainer-ce389e2c.js';
import './AttributeStoreView-00808734.js';
import './TiledDisplayObject-60abc381.js';
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
const u="sublayers",f="layerView",m=Object.freeze({remove(){},pause(){},resume(){}});let w=class extends(f$1(d)){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new r;}async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(i=>i.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){null==this._graphicsViewsFeatureCollectionMap?null==this._graphicsViews?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys();}async hitTest(e,i){return Array.from(this.graphicsViews(),(i=>{const s=i.hitTest(e);if(null!=this._graphicsViewsFeatureCollectionMap){const e=this._graphicsViewsFeatureCollectionMap.get(i);for(const i of s)!i.popupTemplate&&e.popupTemplate&&(i.popupTemplate=e.popupTemplate),i.sourceLayer=i.layer=this.layer;}return s})).flat().map((i=>({type:"graphic",graphic:i,layer:this.layer,mapPoint:e})))}highlight(e){let r;"number"==typeof e?r=[e]:e instanceof h?r=[e.uid]:Array.isArray(e)&&e.length>0?r="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):V.isCollection(e)&&(r=e.map((e=>e&&e.uid)).toArray());const a=r?.filter(R);return a?.length?(this._addHighlight(a),{remove:()=>{this._removeHighlight(a);}}):m}update(e){for(const i of this.graphicsViews())i.processUpdate(e);}attach(){const e=this.view,i$1=()=>this.requestUpdate(),s=this.layer.featureCollections;if(null!=s&&s.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of s){const s=new i(this.view.featuresTilingScheme),a=new oe({view:e,graphics:t.source,renderer:t.renderer,requestUpdateCallback:i$1,container:s});this._graphicsViewsFeatureCollectionMap.set(a,t),this.container.addChild(a.container),this.addHandles([l((()=>t.visible),(e=>a.container.visible=e),h$1),l((()=>a.updating),(()=>this.notifyChange("updating")),h$1)],f);}this._updateHighlight();}else null!=this.layer.sublayers&&this.addHandles(a((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),u);}detach(){this._destroyGraphicsViews(),this.removeHandles(u);}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(f);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),null==this.layer.sublayers)return;const e=[],i$1=this.view,s=()=>this.requestUpdate();for(const t of this.layer.sublayers){const a=new h$2,o=new i(this.view.featuresTilingScheme);o.fadeTransitionEnabled=!0;const l$1=new oe({view:i$1,graphics:t.graphics,requestUpdateCallback:s,container:o});this.addHandles([t.on("graphic-update",l$1.graphicUpdateHandler),l((()=>t.visible),(e=>l$1.container.visible=e),h$1),l((()=>l$1.updating),(()=>this.notifyChange("updating")),h$1)],f),a.addChild(l$1.container),this.container.addChild(a),e.push(l$1);}this._graphicsViews=e,this._updateHighlight();}_addHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i);this._highlightIds.set(i,e+1);}else this._highlightIds.set(i,1);this._updateHighlight();}_removeHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i)-1;0===e?this._highlightIds.delete(i):this._highlightIds.set(i,e);}this._updateHighlight();}_updateHighlight(){const e=Array.from(this._highlightIds.keys());for(const i of this.graphicsViews())i.setHighlight(e);}};w=e([a$1("esri.views.2d.layers.MapNotesLayerView2D")],w);const y=w;

export default y;

//# sourceMappingURL=MapNotesLayerView2D-78cc4e3d.js.map