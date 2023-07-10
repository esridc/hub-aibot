import { d5 as x, f as s, da as s$1, db as c } from './hub-compass-map-68308039.js';
import { a } from './lazyLayerLoader-731a51b1.js';
import { getNumLayersAndTables as v$1, preprocessFSItemData as w$1, getFirstLayerOrTableId as I$1, getSubtypeGroupLayerIds as j$1 } from './layersLoader-22d662a1.js';
import { t } from './fetchService-28ae9e5d.js';
import './index-d436d5f8.js';
import './jsonContext-b0c121c7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function l(e){!e.portalItem||e.portalItem instanceof x||(e={...e,portalItem:new x(e.portalItem)});const r=await y(e.portalItem);return new(0,r.constructor)({portalItem:e.portalItem,...r.properties})}async function y(e){await e.load();return p(await m(e))}async function m(r){switch(r.type){case"Map Service":return f(r);case"Feature Service":return L(r);case"Feature Collection":return w(r);case"Scene Service":return N(r);case"Image Service":return d(r);case"Stream Service":return S();case"Vector Tile Service":return I();case"GeoJson":return g();case"CSV":return T();case"KML":return j();case"WFS":return v();case"WMTS":return F();case"WMS":return M();case"Feed":return G();default:throw new s("portal:unknown-item-type","Unknown item type '${type}'",{type:r.type})}}async function p(e){const r=e.className,t=a[r];return {constructor:await t(),properties:e.properties}}async function f(e){return await b(e)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function L(e){if(s$1(e,"Oriented Imagery Layer"))return h(e);const r=await C(e);if("object"==typeof r){const e={};return null!=r.id&&(e.layerId=r.id),{className:r.className||"FeatureLayer",properties:e}}return {className:"GroupLayer"}}async function N(e){const a=await C(e);if("object"==typeof a){const t$1={};let n;if(null!=a.id?(t$1.layerId=a.id,n=`${e.url}/layers/${a.id}`):n=e.url,e.typeKeywords?.length)for(const a of Object.keys(c))if(e.typeKeywords.includes(a))return {className:c[a]};const s=await t(n);return {className:c[s?.layerType]||"SceneLayer",properties:t$1}}if(!1===a){const r=await t(e.url);return "Voxel"===r?.layerType?{className:"VoxelLayer"}:{className:"GroupLayer"}}return {className:"GroupLayer"}}async function w(e){await e.load();const r=s$1(e,"Map Notes"),a=s$1(e,"Markup");if(r||a)return {className:"MapNotesLayer"};if(s$1(e,"Route Layer"))return {className:"RouteLayer"};const t=await e.fetchData();return 1===v$1(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function d(e){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return {className:"ElevationLayer"};if(r.includes("tiled imagery"))return {className:"ImageryTileLayer"};const a=await e.fetchData(),t$1=a?.layerType;if("ArcGISTiledImageServiceLayer"===t$1)return {className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===t$1)return {className:"ImageryLayer"};const n=await t(e.url),s=n.cacheType?.toLowerCase(),c=n.capabilities?.toLowerCase().includes("tilesonly");return "map"===s||c?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function S(){return {className:"StreamLayer"}}function I(){return {className:"VectorTileLayer"}}function g(){return {className:"GeoJSONLayer"}}function T(){return {className:"CSVLayer"}}function j(){return {className:"KMLLayer"}}function v(){return {className:"WFSLayer"}}function M(){return {className:"WMSLayer"}}function F(){return {className:"WMTSLayer"}}function G(){return {className:"StreamLayer"}}async function h(e){await e.load();return {className:"OrientedImageryLayer",properties:await e.fetchData()}}async function b(e){return (await t(e.url)).tileInfo}async function C(e){const r=e.url;if(!r||/\/\d+$/.test(r))return {};await e.load();const a=await e.fetchData();if("Feature Service"===e.type){const e=V(await w$1(a,r));if("object"==typeof e){const r=j$1(a);e.className=null!=e.id&&r.includes(e.id)?"SubtypeGroupLayer":"FeatureLayer";}return e}if(v$1(a)>0)return V(a);return V(await t(r))}function V(e){return 1===v$1(e)&&{id:I$1(e)}}

export { l as fromItem, m as selectLayerClassPath };

//# sourceMappingURL=portalLayers-a3fe2198.js.map