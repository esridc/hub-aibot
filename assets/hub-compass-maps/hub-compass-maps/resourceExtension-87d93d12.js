import { gC as Bt } from './hub-compass-map-68308039.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(i){return o[p(i)]||e}function p(i){return i instanceof Blob?i.type:n(i.url)}function n(t){const p=Bt(t);return g[p]||a}const o={},a="text/plain",e=o[a],g={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const c in g)o[g[c]]=c;

export { t };

//# sourceMappingURL=resourceExtension-87d93d12.js.map