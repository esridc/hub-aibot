import { O as j, x as u } from './hub-compass-map-f4225e12.js';
import { a0 as t } from './Popup-86d06e3a.js';
import { q } from './utils-d329d094.js';
import './index-d436d5f8.js';
import './throttle-4b0bde7a.js';
import './ByteSizeUnit-f75ee973.js';
import './AttachmentInfo-281619f1.js';
import './widget-68c4e693.js';
import './executeQueryJSON-d895488c.js';
import './query-2dbdcab5.js';
import './pbfQueryUtils-f0f40243.js';
import './pbf-2ae522ce.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './featureConversionUtils-aa77f433.js';
import './colorUtils-3c42b70c.js';
import './webStyleSymbolUtils-e2984068.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './utils-0c7c3308.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function h(e,i,h){const s=e.thumbnail&&e.thumbnail.url;return s?j(s,{responseType:"image"}).then((t=>{const e=r(t.data,h);return h&&h.node?(h.node.appendChild(e),h.node):e})):q(e).then((t=>t?i(t,h):null))}function r(t$1,n){const h=!/\\.svg$/i.test(t$1.src)&&n&&n.disableUpsampling,r=Math.max(t$1.width,t$1.height);let s=n&&null!=n.maxSize?u(n.maxSize):t.maxSize;h&&(s=Math.min(r,s));const o="number"==typeof n?.size?n?.size:null,m=Math.min(s,null!=o?u(o):r);if(m!==r){const e=0!==t$1.width&&0!==t$1.height?t$1.width/t$1.height:1;e>=1?(t$1.width=m,t$1.height=m/e):(t$1.width=m*e,t$1.height=m);}return t$1}

export { h as previewWebStyleSymbol };

//# sourceMappingURL=previewWebStyleSymbol-0588815c.js.map