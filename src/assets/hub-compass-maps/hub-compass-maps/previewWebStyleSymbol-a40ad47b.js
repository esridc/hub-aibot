import { O as j, x as u } from './hub-compass-map-4d751555.js';
import { a0 as t } from './Popup-f76fcc73.js';
import { q } from './utils-8977657a.js';
import './index-d436d5f8.js';
import './throttle-4b0bde7a.js';
import './ByteSizeUnit-f75ee973.js';
import './AttachmentInfo-92275b7e.js';
import './widget-0b6988b3.js';
import './executeQueryJSON-d7c1b267.js';
import './query-281c4009.js';
import './pbfQueryUtils-605db89c.js';
import './pbf-62769da7.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './featureConversionUtils-80dbaef5.js';
import './colorUtils-3c42b70c.js';
import './webStyleSymbolUtils-32c225fc.js';
import './devEnvironmentUtils-fbf66ba6.js';
import './utils-daa8d2fa.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function h(e,i,h){const s=e.thumbnail&&e.thumbnail.url;return s?j(s,{responseType:"image"}).then((t=>{const e=r(t.data,h);return h&&h.node?(h.node.appendChild(e),h.node):e})):q(e).then((t=>t?i(t,h):null))}function r(t$1,n){const h=!/\\.svg$/i.test(t$1.src)&&n&&n.disableUpsampling,r=Math.max(t$1.width,t$1.height);let s=n&&null!=n.maxSize?u(n.maxSize):t.maxSize;h&&(s=Math.min(r,s));const o="number"==typeof n?.size?n?.size:null,m=Math.min(s,null!=o?u(o):r);if(m!==r){const e=0!==t$1.width&&0!==t$1.height?t$1.width/t$1.height:1;e>=1?(t$1.width=m,t$1.height=m/e):(t$1.width=m*e,t$1.height=m);}return t$1}

export { h as previewWebStyleSymbol };

//# sourceMappingURL=previewWebStyleSymbol-a40ad47b.js.map