import { O as j, f as s, j5 as n$2, d3 as j$1, j as s$1, dj as _, s as s$2, cp as k, aE as f, cs as M, jb as h, d6 as p$1, jc as m$1, jd as g, je as S, c2 as L, d5 as x, c1 as j$2, a1 as e, a2 as y, jf as v, eR as o, gu as v$1, gv as f$1, eS as r$1, a3 as a$1 } from './hub-compass-map-f4225e12.js';
import { i } from './originUtils-ad3e2fe4.js';
import { getSiblingOfSameTypeI as m } from './resourceUtils-7ed53194.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function r(r,n,t,s$1,a,i){let l=null;if(null!=t){const o=`${r}/nodepages/`,n=o+Math.floor(t.rootIndex/t.nodesPerPage);try{return {type:"page",rootPage:(await j(n,{query:{f:"json",token:s$1},responseType:"json",signal:i})).data,rootIndex:t.rootIndex,pageSize:t.nodesPerPage,lodMetric:t.lodSelectionMetricType,urlPrefix:o}}catch(c){null!=a&&a.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",n,c),l=c;}}if(!n)return null;const d=`${r}/nodes/`,p=d+(n&&n.split("/").pop());try{return {type:"node",rootNode:(await j(p,{query:{f:"json",token:s$1},responseType:"json",signal:i})).data,urlPrefix:d}}catch(c){throw new s("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:c,url:p})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let n$1=null;function t(t){n$1=t;}function u(){return n$1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function p(r,p,u){if(!p||!p.resources)return;const h=p.portalItem===r.portalItem?new Set(r.paths):new Set;r.paths.length=0,r.portalItem=p.portalItem;const i=new Set(p.resources.toKeep.map((r=>r.resource.path))),m$1=new Set,f=[];i.forEach((e=>{h.delete(e),r.paths.push(e);}));for(const e of p.resources.toUpdate)if(h.delete(e.resource.path),i.has(e.resource.path)||m$1.has(e.resource.path)){const{resource:o,content:t,finish:p,error:n}=e,h=m(o,n$2());r.paths.push(h.path),f.push(a({resource:h,content:t,compress:e.compress,finish:p,error:n},u));}else r.paths.push(e.resource.path),f.push(n(e,u)),m$1.add(e.resource.path);for(const e of p.resources.toAdd)f.push(a(e,u)),r.paths.push(e.resource.path);if(h.forEach((r=>{if(p.portalItem){const e=p.portalItem.resourceFromPath(r);f.push(e.portalItem.removeResource(e).catch((()=>{})));}})),0===f.length)return;const l=await j$1(f);s$1(u);const d=l.filter((r=>"error"in r)).map((r=>r.error));if(d.length>0)throw new s("save:resources","Failed to save one or more resources",{errors:d})}async function a(e,o){const t={...null!=o?o:{},compress:e.compress},s=await _(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==s.ok)throw e.error?.(s.error),s.error;e.finish?.(e.resource);}async function n(e,o){const t=await _(e.resource.update(e.content,o));if(!0!==t.ok)throw e.error?.(t.error),t.error;e.finish?.(e.resource);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const R="esri.layers.mixins.SceneService",A=s$2.getLogger(R),N=o$1=>{let N=class extends o$1{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=k((async(e,t,r)=>{switch(e){case K.SAVE:return this._save(t);case K.SAVE_AS:return this._saveAs(r,t)}}));}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return f.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new f(o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return M.fromJSON(o,r)}const o=t.store,i=this._readSpatialReference(t);return null==i||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<E))?null:new M({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:i})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return "item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return h(this.url,t.name);let o=t.name;if(!o&&this.url){const e=p$1(this.url);null!=e&&(o=e.title);}return "item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),m$1(o)}set url(e){const t=g({layer:this,url:e,nonStandardUrlAllowed:!1,logger:A});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId);}writeUrl(e,t,r,o){S(this,e,"layers",t,o);}get parsedUrl(){const e=this._get("url"),t=L(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=r(this.parsedUrl.path,this.rootNode,e,this.apiKey,A,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo);}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,o=e.rootPage?.nodes?.[t];if(null==o||null==o.obb||null==o.obb.center||null==o.obb.halfSize)throw new s("sceneservice:invalid-node-page","Invalid node page.");if(o.obb.center[0]<E||null==this.fullExtent||this.fullExtent.hasZ)return;const i=o.obb.halfSize,s$1=o.obb.center[2],a=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this.fullExtent.zmin=s$1-a,this.fullExtent.zmax=s$1+a;}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<E)return;const r=t[2],o=t[3],{fullExtent:i}=this;i&&(i.zmin=r-o,i.zmax=r+o);}}async _fetchService(e){if(null==this.url)throw new s("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t);}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const r=await j(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){const r=await j(this.parsedUrl?.path??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});r.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let o=!1;if(r.data.layerType&&"Voxel"===r.data.layerType&&(o=!0),o)return this._fetchVoxelServiceLayer();const i=r.data;this.read(i,this._getServiceContext()),this.validateLayer(i);}async _fetchVoxelServiceLayer(e){const r=(await j(this.parsedUrl?.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,this._getServiceContext()),this.validateLayer(r);}_getServiceContext(){return {origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave();}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const i of o)e.typeKeywords.push(i);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===U.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))));}async _saveAs(e,t){const o={...O,...t};let i$1=x.from(e);i$1||(A.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new s("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),i$1.id&&(i$1=i$1.clone(),i$1.id=null);const s$1=i$1.portal||j$2.getDefault();await this._ensureLoadBeforeSave(),i$1.type=T,i$1.portal=s$1;const a={origin:"portal-item",url:null,messages:[],portal:s$1,portalItem:i$1,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write({},a)]};return await Promise.all(a.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(n,a,o),i$1.url=this.url,i$1.title||(i$1.title=this.title),this._updateTypeKeywords(i$1,o,U.newItem),await s$1.signIn(),await(s$1.user?.addItem({item:i$1,folder:o&&o.folder,data:n})),await p(this.resourceReferences,a,null),this.portalItem=i$1,i(a),a.portalItem=i$1,i$1}async _save(e){const t={...O,...e};if(!this.portalItem)throw A.error("_save(): requires the .portalItem property to be set"),new s("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==T)throw A.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+T),new s("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${T}"`);await this._ensureLoadBeforeSave();const o={origin:"portal-item",url:this.portalItem.itemUrl&&L(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||j$2.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},i$1={layers:[this.write({},o)]};return await Promise.all(o.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(i$1,o,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,U.existingItem),await this.portalItem.update({data:i$1}),await p(this.resourceReferences,o,null),i(o),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let i=t.messages?.filter((e=>"error"===e.type)).map((e=>new s(e.name,e.message,e.details)))??[];o?.validationOptions?.ignoreUnsupported&&(i=i.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name)));const s$1=o?.validationOptions,a=s$1?.enabled,n=u();if(a&&n){const t=(await n()).validate(e,o.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(A.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===s$1.failPolicy){const e=t.map((e=>new s("sceneservice:schema-validation",e))).concat(i);throw new s("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(i.length>0)throw new s("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i})}};return e([y(v)],N.prototype,"id",void 0),e([y({type:f})],N.prototype,"spatialReference",void 0),e([o("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],N.prototype,"readSpatialReference",null),e([y({type:M})],N.prototype,"fullExtent",void 0),e([o("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],N.prototype,"readFullExtent",null),e([y({readOnly:!0,type:v$1})],N.prototype,"heightModelInfo",void 0),e([y({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],N.prototype,"minScale",void 0),e([y({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],N.prototype,"maxScale",void 0),e([y({readOnly:!0})],N.prototype,"version",void 0),e([o("version",["store.version"])],N.prototype,"readVersion",null),e([y({type:String,json:{read:{source:"copyrightText"}}})],N.prototype,"copyright",void 0),e([y({type:String,json:{read:!1}})],N.prototype,"sublayerTitleMode",void 0),e([y({type:String})],N.prototype,"title",void 0),e([o("portal-item","title")],N.prototype,"readTitlePortalItem",null),e([o("service","title",["name"])],N.prototype,"readTitleService",null),e([y({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],N.prototype,"layerId",void 0),e([y(f$1)],N.prototype,"url",null),e([r$1("url")],N.prototype,"writeUrl",null),e([y()],N.prototype,"parsedUrl",null),e([y({readOnly:!0})],N.prototype,"store",void 0),e([y({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],N.prototype,"rootNode",void 0),N=e([a$1(R)],N),N},E=-1e38;var U;!function(e){e[e.existingItem=0]="existingItem",e[e.newItem=1]="newItem";}(U||(U={}));const T="Scene Service",O={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var K;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS";}(K||(K={}));

export { K, N, r };

//# sourceMappingURL=SceneService-74e10bff.js.map