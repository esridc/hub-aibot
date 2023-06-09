import { cV as l$2, a1 as e$1, a2 as y, a3 as a, aQ as a$1, eE as T, cW as o, i_ as s, gp as l$3, gq as c$1, gr as j, iV as t$1, gs as O, j6 as i$2, dc as b, gE as y$1, cw as o$1, aF as f, i$ as p$3, dU as i$3, f as s$1, cv as V, O as j$1, s as s$2, j1 as p$4, fl as k, eR as o$2, ja as d$2, j9 as c$2, eS as r } from './hub-compass-map-f4225e12.js';
import { N as N$1, K } from './SceneService-74e10bff.js';
import { c as a$2, d as d$1, b as a$3, a as a$4 } from './PointCloudUniqueValueRenderer-27d43b16.js';
import './index-d436d5f8.js';
import './originUtils-ad3e2fe4.js';
import './multiOriginJSONSupportUtils-c04f5031.js';
import './resourceUtils-7ed53194.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let t=class extends l$2{constructor(r){super(r),this.field=null,this.type=null;}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};e$1([y({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),e$1([y({readOnly:!0,nonNullable:!0,json:{read:!1}})],t.prototype,"type",void 0),t=e$1([a("esri.layers.pointCloudFilters.PointCloudFilter")],t);const l$1=t;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var d;let p$2=d=class extends l$1{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield";}clone(){return new d({field:this.field,requiredClearBits:a$1(this.requiredClearBits),requiredSetBits:a$1(this.requiredSetBits)})}};e$1([y({type:[T],json:{write:{enabled:!0,overridePolicy(){return {enabled:!0,isRequired:!this.requiredSetBits}}}}})],p$2.prototype,"requiredClearBits",void 0),e$1([y({type:[T],json:{write:{enabled:!0,overridePolicy(){return {enabled:!0,isRequired:!this.requiredClearBits}}}}})],p$2.prototype,"requiredSetBits",void 0),e$1([o({pointCloudBitfieldFilter:"bitfield"})],p$2.prototype,"type",void 0),p$2=d=e$1([a("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],p$2);const u$2=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var n$1;let p$1=n$1=class extends l$1{constructor(r){super(r),this.includedReturns=[],this.type="return";}clone(){return new n$1({field:this.field,includedReturns:a$1(this.includedReturns)})}};e$1([y({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],p$1.prototype,"includedReturns",void 0),e$1([o({pointCloudReturnFilter:"return"})],p$1.prototype,"type",void 0),p$1=n$1=e$1([a("esri.layers.pointCloudFilters.PointCloudReturnFilter")],p$1);const u$1=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var p;let l=p=class extends l$1{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[];}clone(){return new p({field:this.field,mode:this.mode,values:a$1(this.values)})}};e$1([y({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"mode",void 0),e$1([o({pointCloudValueFilter:"value"})],l.prototype,"type",void 0),e$1([y({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"values",void 0),l=p=e$1([a("esri.layers.pointCloudFilters.PointCloudValueFilter")],l);const u=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const e={key:"type",base:l$1,typeMap:{value:u,bitfield:u$2,return:u$1}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var i$1;let c=i$1=class extends a$2{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null;}clone(){return new i$1({...this.cloneProperties(),field:a$1(this.field)})}};e$1([o({pointCloudRGBRenderer:"point-cloud-rgb"})],c.prototype,"type",void 0),e$1([y({type:String,json:{write:!0}})],c.prototype,"field",void 0),c=i$1=e$1([a("esri.renderers.PointCloudRGBRenderer")],c);const n=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const i={key:"type",base:a$2,typeMap:{"point-cloud-class-breaks":d$1,"point-cloud-rgb":n,"point-cloud-stretch":a$3,"point-cloud-unique-value":a$4},errorContext:"renderer"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const C=s();let A=class extends(N$1(l$3(c$1(j(t$1(O(i$2(b)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const r=this.fieldsIndex.get(e);return r&&r.domain?r.domain:null}readServiceFields(e,r,t){return Array.isArray(e)?e.map((e=>{const r=new y$1;return "FieldTypeInteger"===e.type&&((e=a$1(e)).type="esriFieldTypeInteger"),r.read(e,t),r})):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map((e=>new y$1({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo();}writeRenderer(e,r,t,o){o$1("layerDefinition.drawingInfo.renderer",e.write({},o),r);}load(e){const r=null!=e?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(f).then((()=>this._fetchService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){const r=p$3(this,e);return r&&(this._formatPopupTemplateReturnsField(r),this._formatPopupTemplateRGBField(r)),r}_formatPopupTemplateReturnsField(e){const r=this.fieldsIndex.get("RETURNS");if(!r)return;const t=e.fieldInfos?.find((e=>e.fieldName===r.name));if(!t)return;const o=new i$3({name:"pcl-returns-decoded",title:r.alias||r.name,expression:`\n        var returnValue = $feature.${r.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-returns-decoded";}_formatPopupTemplateRGBField(e){const r=this.fieldsIndex.get("RGB");if(!r)return;const t=e.fieldInfos?.find((e=>e.fieldName===r.name));if(!t)return;const o=new i$3({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:`\n        var rgb = $feature.${r.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-rgb-decoded";}async queryCachedStatistics(e,r){if(await this.load(r),!this.attributeStorageInfo)throw new s$1("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const i=this.fieldsIndex.get(e);if(!i)throw new s$1("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.attributeStorageInfo)if(o.name===i.name){const e=V(this.parsedUrl.path,`./statistics/${o.key}`);return j$1(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((e=>e.data))}throw new s$1("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,r){return this._debouncedSaveOperations(K.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(K.SAVE,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new s$1("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s$1("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new s$1("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((r=>r.name===e))}_getTypeKeywords(){return ["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&s$2.getLogger(this).warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&s$2.getLogger(this).warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"));}};e$1([y({type:["PointCloudLayer"]})],A.prototype,"operationalLayerType",void 0),e$1([y(p$4)],A.prototype,"popupEnabled",void 0),e$1([y({type:k,json:{name:"popupInfo",write:!0}})],A.prototype,"popupTemplate",void 0),e$1([y({readOnly:!0,json:{read:!1}})],A.prototype,"defaultPopupTemplate",null),e$1([y({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],A.prototype,"opacity",void 0),e$1([y({type:["show","hide"]})],A.prototype,"listMode",void 0),e$1([y({types:[e],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],A.prototype,"filters",void 0),e$1([y({type:[y$1]})],A.prototype,"fields",void 0),e$1([y(C.fieldsIndex)],A.prototype,"fieldsIndex",void 0),e$1([o$2("service","fields",["fields","attributeStorageInfo"])],A.prototype,"readServiceFields",null),e$1([y(C.outFields)],A.prototype,"outFields",void 0),e$1([y({readOnly:!0})],A.prototype,"attributeStorageInfo",void 0),e$1([y(d$2)],A.prototype,"elevationInfo",null),e$1([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],A.prototype,"path",void 0),e$1([y(c$2)],A.prototype,"legendEnabled",void 0),e$1([y({types:i,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:i},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],A.prototype,"renderer",void 0),e$1([r("renderer")],A.prototype,"writeRenderer",null),e$1([y({json:{read:!1},readOnly:!0})],A.prototype,"type",void 0),A=e$1([a("esri.layers.PointCloudLayer")],A);const N=A;

export default N;

//# sourceMappingURL=PointCloudLayer-b72f04bb.js.map