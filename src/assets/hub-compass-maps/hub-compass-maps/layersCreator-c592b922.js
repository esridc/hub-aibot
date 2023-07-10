import { d3 as j, d9 as t$1, d5 as x, cL as V } from './hub-compass-map-68308039.js';
import { a } from './lazyLayerLoader-731a51b1.js';
import { selectLayerClassPath as m$1 } from './portalLayers-a3fe2198.js';
import './index-d436d5f8.js';
import './layersLoader-22d662a1.js';
import './fetchService-28ae9e5d.js';
import './jsonContext-b0c121c7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(e){return t(e,"notes")}function r(e){return t(e,"markup")}function n(e){return t(e,"route")}function t(e,r){return !(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function c(e,a,y){if(!a)return;const t=[];for(const r of a){const e=f(r,y);"GroupLayer"===r.layerType?t.push(b(e,r,y)):t.push(e);}const i=await j(t);for(const r of i)r.value&&e.add(r.value);}const l={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},s={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},p={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},S={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},u={ArcGISFeatureLayer:"FeatureLayer"},d={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},I={...S,LinkChartLayer:"LinkChartLayer"},m={...u},T={...d};async function f(e,r){return g(await G(e,r),e,r)}async function g(e,r,a){const y=new e;return y.read(r,a.context),"group"===y.type&&M(r)&&await w(y,r,a.context),await t$1(y,a.context),y}async function G(e$1,r$1){const o=r$1.context,c=v(o);let l=e$1.layerType||e$1.type;!l&&r$1&&r$1.defaultLayerType&&(l=r$1.defaultLayerType);const s=c[l];let p=s?a[s]:a.UnknownLayer;if(A(e$1)){const r=o?.portal;if(e$1.itemId){const t=new x({id:e$1.itemId,portal:r});await t.load();const i=(await m$1(t)).className||"UnknownLayer";p=a[i];}}else "ArcGISFeatureLayer"===l?e(e$1)||r(e$1)?p=a.MapNotesLayer:n(e$1)?p=a.RouteLayer:M(e$1)&&(p=a.GroupLayer):e$1.wmtsInfo&&e$1.wmtsInfo.url&&e$1.wmtsInfo.layerIdentifier?p=a.WMTSLayer:"WFS"===l&&"2.0.0"!==e$1.wfsInfo?.version&&(p=a.UnsupportedLayer);return p()}function M(e){if("ArcGISFeatureLayer"!==e.layerType||A(e))return !1;return (e.featureCollection?.layers?.length??0)>1}function A(e){return "Feature Collection"===e.type}function v(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=p;break;case"ground":r=s;break;default:r=l;}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=T;break;case"tables":r=m;break;default:r=I;}break;default:switch(e.layerContainerType){case"basemap":r=d;break;case"tables":r=u;break;default:r=S;}}return r}async function b(r,a,y){const t=new V,i=c(t,Array.isArray(a.layers)?a.layers:[],y);try{const e=await r;try{if(await i,"group"===e.type)return e.layers.addMany(t),e}catch(L){e.destroy();for(const e of t)e.destroy();throw L}}catch(L){throw L}}async function w(e,r,y){const t=a.FeatureLayer,i=await t(),L=r.featureCollection,n=L?.showLegend,o=L?.layers?.map(((a,t)=>{const L=new i;L.read(a,y);const o={...y,ignoreDefaults:!0};return L.read({id:`${e.id}-sublayer-${t}`,visibility:r.visibleLayers?.includes(t)??!0},o),null!=n&&L.read({showLegend:n},o),L}));e.layers.addMany(o??[]);}

export { c as populateOperationalLayers };

//# sourceMappingURL=layersCreator-c592b922.js.map