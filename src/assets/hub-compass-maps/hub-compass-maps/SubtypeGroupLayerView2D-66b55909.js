import { J as l$1, K as h, e as has, ff as d, a1 as e, a3 as a } from './hub-compass-map-f4225e12.js';
import W from './FeatureLayerView2D-2cbe57e9.js';
import './index-d436d5f8.js';
import './Container-a2c22c83.js';
import './definitions-2a5e2c90.js';
import './enums-f1bebe6f.js';
import './Texture-52798ec4.js';
import './LayerView-d595c11d.js';
import './AttributeStoreView-00808734.js';
import './TiledDisplayObject-60abc381.js';
import './color-07edd940.js';
import './enums-63fd0640.js';
import './VertexElementDescriptor-33a64685.js';
import './number-4aaa92a3.js';
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
import './BitmapTileContainer-e496b5ba.js';
import './Bitmap-5b32a246.js';
import './TileContainer-6c259836.js';
import './CircularArray-00e66d79.js';
import './BufferPool-0a852487.js';
import './FeatureContainer-ce389e2c.js';
import './floorFilterUtils-29b268fd.js';
import './popupUtils-ab9ef3c1.js';
import './RefreshableLayerView-5d983d04.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(e,r){return !e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let l=class extends W{initialize(){this.addHandles([l$1((()=>this.view.scale),(()=>this._update()),h)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._proxy||!this._proxy.isReady,t=this._pipelineIsUpdating,a=null==this.tileRenderer||this.tileRenderer?.updating,n=e&&(r||s||i||t||a);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${n}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n  -> updatingTileRenderer ${a}\n`),n}_injectOverrides(e){let r=super._injectOverrides(e);const s=this.view.scale,i=this.layer.sublayers.filter((e=>n(e,s))).map((e=>e.subtypeCode));if(!i.length)return r;r=null!=r?r:(new d).toJSON();const a=`NOT ${this.layer.subtypeField} IN (${i.join(",")})`;return r.where=r.where?`(${r.where}) AND (${a})`:a,r}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],i=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=e.sourceLayer=i;}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let i=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return i+=s,{...super._createSchemaConfig(),...e,definitionExpression:i}}};l=e([a("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);const o=l;

export default o;

//# sourceMappingURL=SubtypeGroupLayerView2D-66b55909.js.map