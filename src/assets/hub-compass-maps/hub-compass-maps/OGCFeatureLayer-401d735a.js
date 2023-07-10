import { co as _, cR as d, aE as f, eQ as i, f as s, a1 as e, a2 as y, a3 as a, i_ as s$1, j6 as i$1, jB as o, jC as n, jD as p, iU as a$1, jA as c, jE as a$2, iV as t, gq as c$1, gr as j$1, iW as p$1, gs as O, dc as b$1, jF as c$2, i$ as p$2, cD as b$2, jG as p$3, ja as d$1, gE as y$1, cs as M$1, i7 as o$1, jI as C, jJ as i$2, jH as m, j9 as c$3, j1 as p$4, fl as k$1, jL as p$5, j0 as n$1, jM as l, jO as n$2, gv as f$1 } from './hub-compass-map-4d751555.js';
import { x, b, k, I, F, j, T, h as h$1, w } from './ogcFeatureUtils-497f427e.js';
import './index-d436d5f8.js';
import './featureConversionUtils-80dbaef5.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './geojson-699b445a.js';
import './clientSideDefaults-6b4f0c14.js';
import './QueryEngineCapabilities-3153ed38.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let h=class extends _{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature";}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:r},layer:{apiKey:o,customParameters:p,effectiveMaxRecordCount:i}}=this;return {type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:i,queryParameters:{apiKey:o,customParameters:p},spatialReference:s,supportedCrs:r}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then((e=>d.fromJSON(e)))}queryFeaturesJSON(e,t={}){const s=this.getSource();return this.load(t).then((()=>x(s,e,t)))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return !(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const s=new RegExp(`^${t}$`,"i");return e.conformsTo.some((e=>s.test(e)))??!1}_getCapabilities(e,t){return {analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1}}}_getMaxRecordCount(e){const t=e?.components?.parameters;return t?.limit?.schema?.maximum??t?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(e){const t=e.storageCrs??b,s=k(t);return null==s?f.WGS84:new f({wkid:s})}_getSupportedSpatialReferences(e,t){const s="#/crs",r=e.crs??[b],o=r.includes(s)?r.filter((e=>e!==s)).concat(t.crs??[]):r,p=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return o.filter((e=>!p.test(e)))}async _loadOGCServices(e,s$1){const r=null!=s$1?s$1.signal:null,{apiKey:o,collectionId:p,customParameters:i$1,fields:y,geometryType:f,hasZ:h,objectIdField:S,timeInfo:C,url:R}=e,w$1={fields:y?.map((e=>e.toJSON())),geometryType:i.toJSON(f),hasZ:h??!1,objectIdField:S,timeInfo:C?.toJSON()},x={apiKey:o,customParameters:i$1,signal:r},j$1=await I(R,x),[F$1,v]=await Promise.all([F(j$1,x),j(j$1,x)]);if(!this._conformsToType(F$1,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new s("ogc-feature-layer:no-geojson-support","Server does not support geojson");const O=v.collections.find((e=>e.id===p));if(!O)throw new s("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const T$1=this._conformsToType(F$1,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await T(j$1,x):null,D=await h$1(O,w$1,x),_=this._getMaxRecordCount(T$1),A=this._getCapabilities(D.hasZ,_),P=this._getStorageSpatialReference(O).toJSON(),b=this._getSupportedSpatialReferences(O,v),q=new RegExp(`^${w}`,"i"),E={};for(const t of b){const e=k(t);null!=e&&(E[e]||(E[e]=t.replace(q,"")));}this.featureDefinition={capabilities:A,collection:O,layerDefinition:D,spatialReference:P,supportedCrs:E};}};e([y()],h.prototype,"featureDefinition",void 0),e([y({constructOnly:!0})],h.prototype,"layer",void 0),e([y()],h.prototype,"type",void 0),h=e([a("esri.layers.graphics.sources.OGCFeatureSource")],h);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const M=s$1();let B=class extends(i$1(o(n(p(a$1(c(a$2(t(c$1(j$1(p$1(O(b$1))))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new h({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null;}destroy(){this.source?.destroy();}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){c$2(e,this.fieldsIndex),this._set("renderer",e);}on(e,r){return super.on(e,r)}createPopupTemplate(e){return p$2(this,e)}createQuery(){return new b$2}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){let t,i=!1;const o=r?.feature?.attributes,s=this.typeIdField&&o?.[this.typeIdField];return null!=s&&this.types&&(i=this.types.some((r=>r.id==s&&(t=r.domains?.[e],"inherited"===t?.type&&(t=this._getLayerDomain(e)),!0)))),i||t||(t=this._getLayerDomain(e)),t}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(b$2.from(e)||this.createQuery(),r))).then((e=>(e?.features?.forEach((e=>{e.layer=e.sourceLayer=this;})),e)))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),c$2(this.renderer,this.fieldsIndex),p$3(this.timeInfo,this.fieldsIndex);}_getLayerDomain(e){if(!this.fields)return null;for(const r of this.fields)if(r.name===e&&r.domain)return r.domain;return null}};e([y({readOnly:!0,json:{origins:{service:{read:!0}}}})],B.prototype,"capabilities",void 0),e([y({type:String,json:{write:!0}})],B.prototype,"collectionId",void 0),e([y({type:String})],B.prototype,"copyright",void 0),e([y({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),e([y({type:String})],B.prototype,"definitionExpression",void 0),e([y({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],B.prototype,"description",void 0),e([y({type:String})],B.prototype,"displayField",void 0),e([y({type:Number})],B.prototype,"effectiveMaxRecordCount",null),e([y(d$1)],B.prototype,"elevationInfo",void 0),e([y({type:[y$1],json:{origins:{service:{name:"layerDefinition.fields"}}}})],B.prototype,"fields",void 0),e([y(M.fieldsIndex)],B.prototype,"fieldsIndex",void 0),e([y({readOnly:!0,type:M$1,json:{origins:{service:{name:"layerDefinition.extent"}}}})],B.prototype,"fullExtent",void 0),e([y({type:o$1.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:o$1.read}}}}})],B.prototype,"geometryType",void 0),e([y({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],B.prototype,"hasZ",void 0),e([y({type:Boolean,readOnly:!0})],B.prototype,"isTable",null),e([y({type:[C],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:i$2},write:!0}}}})],B.prototype,"labelingInfo",void 0),e([y(m)],B.prototype,"labelsVisible",void 0),e([y(c$3)],B.prototype,"legendEnabled",void 0),e([y({type:Number})],B.prototype,"maxRecordCount",void 0),e([y({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],B.prototype,"objectIdField",void 0),e([y({type:["OGCFeatureLayer"]})],B.prototype,"operationalLayerType",void 0),e([y(p$4)],B.prototype,"popupEnabled",void 0),e([y({type:k$1,json:{name:"popupInfo",write:!0}})],B.prototype,"popupTemplate",void 0),e([y({types:p$5,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:n$1,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],B.prototype,"renderer",null),e([y(l)],B.prototype,"screenSizePerspectiveEnabled",void 0),e([y({readOnly:!0})],B.prototype,"source",void 0),e([y({readOnly:!0,type:f,json:{origins:{service:{read:!0}}}})],B.prototype,"spatialReference",void 0),e([y({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],B.prototype,"title",void 0),e([y({readOnly:!0,json:{read:!1}})],B.prototype,"type",void 0),e([y({type:String,readOnly:!0})],B.prototype,"typeIdField",void 0),e([y({type:[n$2]})],B.prototype,"types",void 0),e([y(f$1)],B.prototype,"url",void 0),B=e([a("esri.layers.OGCFeatureLayer")],B);const V=B;

export default V;

//# sourceMappingURL=OGCFeatureLayer-401d735a.js.map