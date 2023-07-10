import { J as l$1, K as h, e as has, ff as d, a1 as e, a3 as a } from './hub-compass-map-68308039.js';
import W from './FeatureLayerView2D-a4d7234b.js';
import './index-d436d5f8.js';
import './Container-82f058f5.js';
import './definitions-6e5909d3.js';
import './enums-f1bebe6f.js';
import './Texture-2136281d.js';
import './LayerView-6ca034b7.js';
import './AttributeStoreView-356296ba.js';
import './TiledDisplayObject-99ff23bf.js';
import './color-e6670fe4.js';
import './enums-63fd0640.js';
import './VertexElementDescriptor-33a64685.js';
import './number-4aaa92a3.js';
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
import './BitmapTileContainer-67e7a717.js';
import './Bitmap-79eabc67.js';
import './TileContainer-4d717575.js';
import './CircularArray-00e66d79.js';
import './BufferPool-285de1d6.js';
import './FeatureContainer-9339bd48.js';
import './floorFilterUtils-29b268fd.js';
import './popupUtils-914b2733.js';
import './RefreshableLayerView-10d77e06.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(e,r){return !e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let l=class extends W{initialize(){this.addHandles([l$1((()=>this.view.scale),(()=>this._update()),h)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._proxy||!this._proxy.isReady,t=this._pipelineIsUpdating,a=null==this.tileRenderer||this.tileRenderer?.updating,n=e&&(r||s||i||t||a);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${n}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n  -> updatingTileRenderer ${a}\n`),n}_injectOverrides(e){let r=super._injectOverrides(e);const s=this.view.scale,i=this.layer.sublayers.filter((e=>n(e,s))).map((e=>e.subtypeCode));if(!i.length)return r;r=null!=r?r:(new d).toJSON();const a=`NOT ${this.layer.subtypeField} IN (${i.join(",")})`;return r.where=r.where?`(${r.where}) AND (${a})`:a,r}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],i=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=e.sourceLayer=i;}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let i=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return i+=s,{...super._createSchemaConfig(),...e,definitionExpression:i}}};l=e([a("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);const o=l;

export default o;

//# sourceMappingURL=SubtypeGroupLayerView2D-48f04d24.js.map