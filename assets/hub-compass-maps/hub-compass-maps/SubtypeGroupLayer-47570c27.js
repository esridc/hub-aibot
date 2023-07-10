import { cV as l, la as i, a1 as e, a2 as y, eR as o, eS as r, a3 as a$1, lb as p, fn as p$1, k8 as A, k6 as w, i_ as s, lc as u, ld as c$1, le as u$1, lf as S, jN as p$2, $ as a$2, gs as O, az as s$1, co as _$1, aQ as a$3, cw as o$1, s as s$2, f as s$3, jF as c$2, i$ as p$3, lg as E, bP as n, f0 as r$1, cD as b, lh as y$1, jH as m, jI as C, jJ as i$1, j9 as c$3, l9 as I, l8 as D, j1 as p$4, fl as k$1, li as w$1, l2 as c$4, iU as a$4, jE as a$5, iV as t, iW as p$5, gp as l$1, gq as c$5, gr as j, jB as o$2, j6 as i$2, dc as b$1, cL as V, J as l$2, et as U, aF as f, lj as M$1, lk as Q$1, c2 as L, cv as V$1, jb as h, ll as y$2, lm as m$1, ln as h$1, cS as p$6, lo as b$2, lp as g, j7 as t$1, lq as j$1, lr as q, ls as F, lt as I$1, lu as P, lv as A$1, k0 as e$1, jG as p$7, lw as O$1, jf as v, kf as n$1, lx as d } from './hub-compass-map-f4225e12.js';
import './index-d436d5f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let a=class extends l{constructor(){super(...arguments),this.code=null,this.defaultValues={},this.domains=null,this.name=null;}readDomains(o){if(!o)return null;const r={};for(const t of Object.keys(o))r[t]=i(o[t]);return r}writeDomains(o,r){if(!o)return;const t={};for(const s of Object.keys(o))o[s]&&(t[s]=o[s]?.toJSON());r.domains=t;}};e([y({type:Number,json:{write:!0}})],a.prototype,"code",void 0),e([y({type:Object,json:{write:!0}})],a.prototype,"defaultValues",void 0),e([y({json:{write:!0}})],a.prototype,"domains",void 0),e([o("domains")],a.prototype,"readDomains",null),e([r("domains")],a.prototype,"writeDomains",null),e([y({type:String,json:{write:!0}})],a.prototype,"name",void 0),a=e([a$1("esri.layers.support.Subtype")],a);const c=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const G=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],N={key:"type",base:p,errorContext:"renderer",typeMap:{simple:p$1,"unique-value":A,"class-breaks":w}},$=s(),k=u({types:N});let M=0;function _(e){const t=e.json.write;return "object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function H(e){return new p$1({symbol:B(e)})}function B(e){switch(e){case"point":case"multipoint":return S.clone();case"polyline":return u$1.clone();case"polygon":case"multipatch":return c$1.clone();default:return null}}function Q(e,t){return !!t&&("unique-value"===e?.type&&"string"==typeof e.field&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression)}function z(e,t){return null==e?null:t.subtypes?.find((t=>t.code===e))}function J(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null;}const i={},o=z(e,t);if(null!=o){const{defaultValues:e}=o;for(const t in e)i[t]=e[t];}return i[t.subtypeField]=e,new p$2({name:"New Feature",drawingTool:r,prototype:{attributes:i}})}const K="esri.layers.support.SubtypeSublayer";let W=class extends(a$2(O(s$1(_$1)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${M++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0;}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){const{fields:i,parent:o}=this;let n;if(i){n=[];let e=0;i.forEach((({name:t,alias:r,editable:i,visible:s})=>{if(!s)return;const l=o?.fields?.find((e=>e.name===t));if(!l)return;const a={name:t};let p=!1;r!==l.alias&&(a.alias=r,p=!0),i!==l.editable&&(a.editable=i,p=!0),n.push(a),p&&e++;})),0===e&&n.length===i.length&&(n=null);}else n=a$3(e);n?.length&&o$1(r,n,t);}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,i=e?.fields;if(!e||!i?.length)return null;const{subtypes:o,subtypeField:n}=e,s=o?.find((e=>e.code===r)),l=s?.defaultValues,a=s?.domains,p=[];for(const d of i){const e=d.clone(),{name:i}=e,o=t?.find((e=>e.name===i));if(e.visible=!t||!!o,o){const{alias:t,editable:r}=o;t&&(e.alias=t),!1===r&&(e.editable=!1);}const s=l?.[i]??null;e.defaultValue=i===n?r:s;const u=a?.[i]??null;e.domain=i===n?null:u?"inherited"===u.type?e.domain:u.clone():null,p.push(e);}return p}get floorInfo(){return this.parent?.floorInfo}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return {minScale:e,maxScale:t}}get objectIdField(){return this.parent||s$2.getLogger(K).error(Y("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){c$2(e,this.fieldsIndex),this._override("renderer",e);}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?H(e.geometryType):null}readRendererFromService(e,t,r){if("Table"===t.type)return null;const i=t.drawingInfo?.renderer,n=k(i,t,r);let s;const{subtypeCode:l}=this;if(null!=l&&Q(n,t.subtypeField)){const e=n.uniqueValueInfos?.find((({value:e})=>(e="number"==typeof e?String(e):e)===String(l)));e&&(s=new p$1({symbol:e.symbol}));}else "simple"!==n?.type||n.visualVariables?.length||(s=n);return s}readRenderer(e,t,r){const i=t?.layerDefinition?.drawingInfo?.renderer;if(!i)return;const o=i.visualVariables?.some((e=>"rotationInfo"!==e.type));return o?void 0:k(i,t,r)||void 0}get spatialReference(){return this.parent?.spatialReference}readTemplatesFromService(e,t){return [J(this.subtypeCode,t)]}readTitleFromService(e,t){const r=z(this.subtypeCode,t);return null!=r?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return !!this.parent?.userHasUpdateItemPrivileges}async addAttachment(e,t){const{parent:r}=this;if(!r)throw Y("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new s$3("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:i}=this;if(!i)throw Y("updateAttachment");if(e.getAttribute(i.subtypeField)!==this.subtypeCode)throw new s$3("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return i.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw Y("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new s$3("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw Y("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:i,title:o}=this;if(r){const{displayField:e,editFieldsInfo:n,objectIdField:s}=r;t={displayField:e,editFieldsInfo:n,fields:i,objectIdField:s,title:o};}return p$3(t,e)}createQuery(){if(!this.parent)throw Y("createQuery");const e=E(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=n(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return G.some((e=>this.originIdOf(e)===r$1.USER))}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw Y("queryAttachments");const i=e.clone();return i.where=X(i.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw Y("queryFeatures");const i=b.from(e)??r.createQuery();return null!=e&&(i.where=X(i.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(i,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};e([y({readOnly:!0,json:{read:!1}})],W.prototype,"capabilities",null),e([y({readOnly:!0,json:{read:!1}})],W.prototype,"effectiveCapabilities",null),e([y({json:{write:{ignoreOrigin:!0}}})],W.prototype,"charts",void 0),e([y({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],W.prototype,"editingEnabled",void 0),e([y({type:Boolean,readOnly:!0})],W.prototype,"effectiveEditingEnabled",null),e([y({readOnly:!0,json:{read:!1}})],W.prototype,"elevationInfo",null),e([y({readOnly:!0,json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],W.prototype,"fieldOverrides",void 0),e([r("fieldOverrides")],W.prototype,"writeFieldOverrides",null),e([y({...$.fields,readOnly:!0,json:{read:!1}})],W.prototype,"fields",null),e([y($.fieldsIndex)],W.prototype,"fieldsIndex",void 0),e([y({readOnly:!0,json:{read:!1}})],W.prototype,"floorInfo",null),e([y({type:y$1,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],W.prototype,"formTemplate",void 0),e([y({type:String,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],W.prototype,"id",void 0),e([y({readOnly:!0,json:{read:!1}})],W.prototype,"geometryType",null),e([y({readOnly:!0,json:{read:!1}})],W.prototype,"type",void 0),e([y(_(a$3(m)))],W.prototype,"labelsVisible",void 0),e([y({type:[C],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:i$1},write:{ignoreOrigin:!0}}})],W.prototype,"labelingInfo",void 0),e([y({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],W.prototype,"layerType",void 0),e([y(_(a$3(c$3)))],W.prototype,"legendEnabled",void 0),e([y({type:["show","hide"]})],W.prototype,"listMode",void 0),e([y((()=>{const e=a$3(I);return e.json.origins.service.read=!1,_(e)})())],W.prototype,"minScale",void 0),e([y((()=>{const e=a$3(D);return e.json.origins.service.read=!1,_(e)})())],W.prototype,"maxScale",void 0),e([y({readOnly:!0})],W.prototype,"effectiveScaleRange",null),e([y({readOnly:!0,json:{read:!1}})],W.prototype,"objectIdField",null),e([y({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],W.prototype,"opacity",void 0),e([y()],W.prototype,"parent",void 0),e([y(_(a$3(p$4)))],W.prototype,"popupEnabled",void 0),e([y({type:k$1,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],W.prototype,"popupTemplate",void 0),e([y({readOnly:!0})],W.prototype,"defaultPopupTemplate",null),e([y({types:N,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],W.prototype,"renderer",null),e([o("service","renderer",["drawingInfo.renderer","subtypeField","type"])],W.prototype,"readRendererFromService",null),e([o("renderer",["layerDefinition.drawingInfo.renderer"])],W.prototype,"readRenderer",null),e([y({readOnly:!0,json:{read:!1}})],W.prototype,"spatialReference",null),e([y({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],W.prototype,"subtypeCode",void 0),e([y({type:[p$2],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],W.prototype,"templates",void 0),e([o("service","templates",["geometryType","subtypeField","subtypes","type"])],W.prototype,"readTemplatesFromService",null),e([y({type:String,json:{write:{ignoreOrigin:!0}}})],W.prototype,"title",void 0),e([o("service","title",["subtypes"])],W.prototype,"readTitleFromService",null),e([y({readOnly:!0,json:{read:!1}})],W.prototype,"url",null),e([y({readOnly:!0})],W.prototype,"userHasUpdateItemPrivileges",null),e([y({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],W.prototype,"visible",void 0),W=e([a$1(K)],W);const X=(e,t,r)=>{const i=new RegExp(`${t}\\s*=\\s*\\d+`),o=`${t}=${r}`,n$1=e??"";return i.test(n$1)?n$1.replace(i,o):n(o,n$1)},Y=e=>new s$3(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),Z=W;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const ee="SubtypeGroupLayer",re="esri.layers.SubtypeGroupLayer";function te(e,r){return new s$3("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`,{layer:e})}const se=s();let ie=class extends(w$1(c$4(a$4(a$5(t(p$5(l$1(c$5(j(O(o$2(i$2(a$2(b$1)))))))))))))){constructor(...e){super(...e),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.subtypes=null,this.sublayers=new(V.ofType(Z)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this.addHandles(l$2((()=>this.sublayers),((e,r)=>this._handleSublayersChange(e,r)),U));}destroy(){this.source?.destroy();}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const r=null!=e?e.signal:null,s=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(f).then((async()=>{if(!this.url)throw new s$3("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new s$3("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(r))})).then((()=>this._setUserPrivileges(this.serviceItemId,e))).then((()=>M$1(this,e)));return this.addResolvingPromise(s),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return Q$1(this)}get parsedUrl(){const e=L(this.url);return null!=e&&null!=this.layerId&&(e.path=V$1(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e);}readTitleFromService(e,{name:r}){return this.url?h(this.url,r):r}async addAttachment(e,r){return y$2(this,e,r,ee)}async updateAttachment(e,r,t){return m$1(this,e,r,t,ee)}async applyEdits(e,r){return h$1(this,e,r)}on(e,r){return super.on(e,r)}async createGraphicsSource(e){const{default:r}=await p$6(import('./FeatureLayerSource-508819e9.js'),e);return new r({layer:this}).load({signal:e})}createQuery(){const e=E(this),r=this.sublayers.map((e=>e.subtypeCode));return e.where=n(`${this.subtypeField} IN (${r.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,r){return b$2(this,e,r,ee)}async fetchRecomputedExtents(e){return g(this,e,ee)}findSublayerForFeature(e){const r=this.fieldsIndex.get(this.subtypeField),t=e.attributes[r.name];return this.findSublayerForSubtypeCode(t)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,r){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return t$1(this,(e=>{e(this.sublayers);}))}async queryAttachments(e,r){return j$1(this,e,r,ee)}async queryFeatures(e,r){const t=await this.load(),s=b.from(e)??t.createQuery(),i=s.outFields??[];i.includes(this.subtypeField)||(i.push(this.subtypeField),s.outFields=i);const o=await t.source.queryFeatures(s,r);if(o?.features)for(const a of o.features)a.layer=a.sourceLayer=this.findSublayerForFeature(a);return o}async queryObjectIds(e,r){return q(this,e,r,ee)}async queryFeatureCount(e,r){return F(this,e,r,ee)}async queryExtent(e,r){return I$1(this,e,r,ee)}async queryRelatedFeatures(e,r){return P(this,e,r,ee)}async queryRelatedFeaturesCount(e,r){return A$1(this,e,r,ee)}write(e,r){const{origin:s,layerContainerType:i,messages:o}=r;if(this.isTable){if("web-scene"===s||"web-map"===s&&"tables"!==i)return o?.push(te(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===s&&"tables"===i)return o?.push(te(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,r):(o?.push(new s$3("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return !!this.loaded&&e$1(this,e)}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:r}=e;if(r&&(this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})),this.isTable)throw new s$3("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!this.subtypes?.length)throw new s$3("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),p$7(this.timeInfo,this.fieldsIndex);}async hasDataChanged(){return O$1(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some((e=>"geometry"===e.type))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")");}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null;})),this.handles.remove("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((e=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e);})),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e);})),e.on("after-remove",(({item:e})=>{e.parent=null,this._sublayerLookup.delete(e.subtypeCode);})),e.on("after-changes",(()=>{this._sublayersCollectionChanged=!0;}))],"sublayers-owner"));}};e([y({readOnly:!0})],ie.prototype,"createQueryVersion",null),e([y({readOnly:!0})],ie.prototype,"editingEnabled",null),e([y({readOnly:!0})],ie.prototype,"effectiveEditingEnabled",null),e([y({...se.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],ie.prototype,"fields",void 0),e([y(se.fieldsIndex)],ie.prototype,"fieldsIndex",void 0),e([y(v)],ie.prototype,"id",void 0),e([y({type:["show","hide","hide-children"]})],ie.prototype,"listMode",void 0),e([y({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],ie.prototype,"operationalLayerType",void 0),e([y(se.outFields)],ie.prototype,"outFields",void 0),e([y({readOnly:!0})],ie.prototype,"parsedUrl",null),e([y()],ie.prototype,"source",null),e([y({type:[c],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ie.prototype,"subtypes",void 0),e([y({type:V.ofType(Z),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,s)=>{const i=e.map((({code:e})=>{const r=new Z({subtypeCode:e});return r.read(t,s),r}));return new(V.ofType(Z))(i)}}}},name:"layers",write:{overridePolicy(e,r,t){const s=this.originOf("sublayers"),i=r$1.PORTAL_ITEM;let o=!0;if(n$1(s)===i&&n$1(t.origin)>i){const r=e.some((e=>e.hasUserOverrides()));o=this._sublayersCollectionChanged||r;}return {enabled:o,ignoreOrigin:!0}}}}})],ie.prototype,"sublayers",void 0),e([y({type:d})],ie.prototype,"timeInfo",void 0),e([y({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],ie.prototype,"title",void 0),e([o("service","title",["name"])],ie.prototype,"readTitleFromService",null),e([y({json:{read:!1}})],ie.prototype,"type",void 0),ie=e([a$1(re)],ie);const oe=ie;

export default oe;

//# sourceMappingURL=SubtypeGroupLayer-47570c27.js.map