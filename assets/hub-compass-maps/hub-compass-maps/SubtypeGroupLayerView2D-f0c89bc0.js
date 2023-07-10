import { J as l$1, K as h, e as has, ff as d, a1 as e, a3 as a } from './hub-compass-map-4d751555.js';
import W from './FeatureLayerView2D-b0891b14.js';
import './index-d436d5f8.js';
import './Container-d1c5f8b6.js';
import './definitions-780d8bac.js';
import './enums-f1bebe6f.js';
import './Texture-f70323fa.js';
import './LayerView-686abf7a.js';
import './AttributeStoreView-8a55c708.js';
import './TiledDisplayObject-8c01461f.js';
import './color-c09f883e.js';
import './enums-63fd0640.js';
import './VertexElementDescriptor-33a64685.js';
import './number-4aaa92a3.js';
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
import './BitmapTileContainer-593e9c44.js';
import './Bitmap-f0265bb5.js';
import './TileContainer-7647bd7a.js';
import './CircularArray-00e66d79.js';
import './BufferPool-76e4a53a.js';
import './FeatureContainer-400af24d.js';
import './floorFilterUtils-29b268fd.js';
import './popupUtils-2fcc03b7.js';
import './RefreshableLayerView-a7422109.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(e,r){return !e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let l=class extends W{initialize(){this.addHandles([l$1((()=>this.view.scale),(()=>this._update()),h)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._proxy||!this._proxy.isReady,t=this._pipelineIsUpdating,a=null==this.tileRenderer||this.tileRenderer?.updating,n=e&&(r||s||i||t||a);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${n}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n  -> updatingTileRenderer ${a}\n`),n}_injectOverrides(e){let r=super._injectOverrides(e);const s=this.view.scale,i=this.layer.sublayers.filter((e=>n(e,s))).map((e=>e.subtypeCode));if(!i.length)return r;r=null!=r?r:(new d).toJSON();const a=`NOT ${this.layer.subtypeField} IN (${i.join(",")})`;return r.where=r.where?`(${r.where}) AND (${a})`:a,r}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],i=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=e.sourceLayer=i;}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let i=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return i+=s,{...super._createSchemaConfig(),...e,definitionExpression:i}}};l=e([a("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);const o=l;

export default o;

//# sourceMappingURL=SubtypeGroupLayerView2D-f0c89bc0.js.map