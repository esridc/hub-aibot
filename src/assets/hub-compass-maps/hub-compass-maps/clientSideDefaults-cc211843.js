import { cN as l, cO as o$1, cP as S, e as has, aQ as a$1 } from './hub-compass-map-68308039.js';
import { t } from './QueryEngineCapabilities-3153ed38.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o(t){return {renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?l:"esriGeometryPolyline"===t?o$1:S}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let n=1;function i(t,s){if(has("esri-csp-restrictions"))return ()=>({[s]:null,...t});try{let r=`this.${s} = null;`;for(const s in t){r+=`this${u.test(s)?`.${s}`:`["${s}"]`} = ${JSON.stringify(t[s])};`;}const e=new Function(`\n      return class AttributesClass$${n++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return ()=>new e}catch(r){return ()=>({[s]:null,...t})}}function a(s={}){return [{name:"New Feature",description:"",prototype:{attributes:a$1(s)}}]}function c(t$1,r){return {analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t$1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:r,supportsDelete:r,supportsEditing:r,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:r,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:t,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:r,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1}}}

export { a, c, i, o };

//# sourceMappingURL=clientSideDefaults-cc211843.js.map