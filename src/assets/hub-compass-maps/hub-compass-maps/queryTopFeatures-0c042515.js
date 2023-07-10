import { ao as v, cM as b, O as j, cv as V, cY as t$1, c2 as L } from './hub-compass-map-68308039.js';
import { t } from './query-d5b899b4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const u="Layer does not support extent calculation.";function l(t,e){const r=t.geometry,o=t.toJSON(),i=o;if(null!=r&&(i.geometry=JSON.stringify(r),i.geometryType=v(r),i.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),o.topFilter?.groupByFields&&(i.topFilter.groupByFields=o.topFilter.groupByFields.join(",")),o.topFilter?.orderByFields&&(i.topFilter.orderByFields=o.topFilter.orderByFields.join(",")),o.topFilter&&(i.topFilter=JSON.stringify(i.topFilter)),o.objectIds&&(i.objectIds=o.objectIds.join(",")),o.orderByFields&&(i.orderByFields=o.orderByFields.join(",")),o.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?o.outFields.includes("*")?i.outFields="*":i.outFields=o.outFields.join(","):delete i.outFields,o.outSR?i.outSR=o.outSR.wkid||JSON.stringify(o.outSR):r&&o.returnGeometry&&(i.outSR=i.inSR),o.returnGeometry&&delete o.returnGeometry,o.timeExtent){const t=o.timeExtent,{start:e,end:r}=t;null==e&&null==r||(i.time=e===r?e:`${e??"null"},${r??"null"}`),delete o.timeExtent;}return i}async function y(t,e,r,n){const o=await a(t,e,"json",n);return t$1(e,r,o.data),o}async function d(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:a(t,e,"json",r,{returnIdsOnly:!0})}async function p(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:a(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(u);if(e.hasOwnProperty("count"))throw new Error(u);return t}))}function m(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):a(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function a(n,s,u,y={},d={}){const p="string"==typeof n?L(n):n,m=s.geometry?[s.geometry]:[];return y.responseType="pbf"===u?"array-buffer":"json",b(m,null,y).then((e=>{const n=e&&e[0];null!=n&&((s=s.clone()).geometry=n);const o=t({...p.query,f:u,...d,...l(s,d)});return j(V(p.path,"queryTopFeatures"),{...y,query:{...o,...y.query}})}))}

export { d, m, p, y };

//# sourceMappingURL=queryTopFeatures-0c042515.js.map