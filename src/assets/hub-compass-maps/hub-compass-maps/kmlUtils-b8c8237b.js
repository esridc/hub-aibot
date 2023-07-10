import { aQ as a, fF as B, fG as C, aE as f, cr as n, fH as kt, X as s, O as j$1, cR as d$1, fm as t, fl as k, fI as i, fJ as m, fK as o } from './hub-compass-map-f4225e12.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const c={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(e){const o=e.folders||[],t=o.slice(),r=new Map,n=new Map,i=new Map,f=new Map,a$1=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:f};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const o=a(e);o.featureSet.features=[];const t=e.featureSet.geometryType;r.set(t,o);const a$1=e.layerDefinition.objectIdField;"esriGeometryPoint"===t?G(n,a$1,e.featureSet.features):"esriGeometryPolyline"===t?G(i,a$1,e.featureSet.features):"esriGeometryPolygon"===t&&G(f,a$1,e.featureSet.features);})),e.groundOverlays&&e.groundOverlays.forEach((e=>{a$1.set(e.id,e);})),o.forEach((o=>{o.networkLinkIds.forEach((r=>{const s=P(r,o.id,e.networkLinks);s&&t.push(s);}));})),t.forEach((e=>{if(e.featureInfos){e.points=a(r.get("esriGeometryPoint")),e.polylines=a(r.get("esriGeometryPolyline")),e.polygons=a(r.get("esriGeometryPolygon")),e.mapImages=[];for(const o of e.featureInfos)switch(o.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const t=l[o.type].get(o.id);t&&e[c[o.type]]?.featureSet.features.push(t);break}case"GroundOverlay":{const t=a$1.get(o.id);t&&e.mapImages.push(t);break}}e.fullExtent=j([e]);}}));const u=j(t);return {folders:o,sublayers:t,extent:u}}function g(t,s$1,i,f){const a=n&&n.findCredential(t);t=kt(t,{token:a&&a.token});const l=s.kmlServiceUrl;return j$1(l,{query:{url:t,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(s$1)},responseType:"json",signal:f})}function S(e,o,t=null,r=[]){const s=[],n={},i=o.sublayers,f=o.folders.map((e=>e.id));return i.forEach((o=>{const i=new e;if(t?i.read(o,t):i.read(o),r.length&&f.includes(i.id)&&(i.visible=r.includes(i.id)),n[o.id]=i,null!=o.parentFolderId&&-1!==o.parentFolderId){const e=n[o.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers?.unshift(i);}else s.unshift(i);})),s}function G(e,o,t){t.forEach((t=>{e.set(t.attributes[o],t);}));}function h(e,o){let t;return o.some((o=>o.id===e&&(t=o,!0))),t}function P(e,o,t){const r=h(e,t);return r&&(r.parentFolderId=o,r.networkLink=r),r}async function b(e){const o=d$1.fromJSON(e.featureSet).features,r=e.layerDefinition,s=t(r.drawingInfo.renderer),n=k.fromJSON(e.popupInfo),i=[];for(const t of o){const e=await s.getSymbolAsync(t);t.symbol=e,t.popupTemplate=n,t.visible=!0,i.push(t);}return i}function j(e){const o$1=i(C),t=i(C);for(const r of e){if(r.polygons&&r.polygons.featureSet&&r.polygons.featureSet.features)for(const e of r.polygons.featureSet.features)m(o$1,e.geometry),o(t,o$1);if(r.polylines&&r.polylines.featureSet&&r.polylines.featureSet.features)for(const e of r.polylines.featureSet.features)m(o$1,e.geometry),o(t,o$1);if(r.points&&r.points.featureSet&&r.points.featureSet.features)for(const e of r.points.featureSet.features)m(o$1,e.geometry),o(t,o$1);if(r.mapImages)for(const e of r.mapImages)m(o$1,e.extent),o(t,o$1);}return B(t,C)?void 0:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:f.WGS84}}

export { S, b, d, g, j };

//# sourceMappingURL=kmlUtils-b8c8237b.js.map