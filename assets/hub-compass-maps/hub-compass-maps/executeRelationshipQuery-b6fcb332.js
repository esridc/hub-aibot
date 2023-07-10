import { O as j, d$ as d, cQ as f, cR as d$1 } from './hub-compass-map-f4225e12.js';
import { t } from './query-2dbdcab5.js';
import './index-d436d5f8.js';
import './pbfQueryUtils-f0f40243.js';
import './pbf-2ae522ce.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),o.outFields&&!t?.returnCountOnly?o.outFields.includes("*")?o.outFields="*":o.outFields=o.outFields.join(","):delete o.outFields,o.outSpatialReference&&(o.outSR=o.outSR.wkid||JSON.stringify(o.outSR.toJSON()),delete o.outSpatialReference),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function r(e,t,o){const r=await n$1(e,t,o),s=r.data,a=s.geometryType,d=s.spatialReference,c={};for(const n of s.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:d,hasZ:!!s.hasZ,hasM:!!s.hasM,features:n.relatedRecords};if(null!=n.objectId)c[n.objectId]=e;else for(const t of Object.keys(n))"relatedRecords"!==t&&(c[n[t]]=e);}return {...r,data:c}}async function s(e,t,o){const r=await n$1(e,t,o,{returnCountOnly:!0}),s=r.data,a={};for(const n of s.relatedRecordGroups)null!=n.objectId&&(a[n.objectId]=n.count);return {...r,data:a}}async function n$1(r,s,n={},a){const d=t({...r.query,f:"json",...a,...o(s,a)});return j(r.path+"/queryRelatedRecords",{...n,query:{...n.query,...d}})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function n(e,n,u){n=d.from(n);const a=f(e);return r(a,n,u).then((t=>{const r=t.data,e={};return Object.keys(r).forEach((t=>e[t]=d$1.fromJSON(r[t]))),e}))}async function u(r,o,n){o=d.from(o);const u=f(r);return s(u,o,{...n}).then((t=>t.data))}

export { n as executeRelationshipQuery, u as executeRelationshipQueryForCount };

//# sourceMappingURL=executeRelationshipQuery-b6fcb332.js.map