import { s as s$1, f as s$2, bD as o$1, x as u$2 } from './hub-compass-map-4d751555.js';
import { $, L, g as r$2 } from './color-c09f883e.js';
import { a6 as t$1 } from './definitions-780d8bac.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const n$1=8388607,t=8388608,r$1=254,o=255,u$1=0,c$1=1,e=n=>(n&t)>>>23,f$1=t=>t&n$1,i=n=>e(n)===c$1?r$1:o;function p$1(n){return e(n)===c$1}function s(n,r){return ((r?t:0)|n)>>>0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const n=(n,l)=>n&&((...n)=>l.warn("DEBUG:",...n))||(()=>null),l$2=!1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function l$1(l){return $(l.minDataValue)&&$(l.maxDataValue)&&null!=l.minSize&&null!=l.maxSize?L.SIZE_MINMAX_VALUE:(l.expression&&"view.scale"===l.expression||l.valueExpression&&"$view.scale"===l.valueExpression)&&Array.isArray(l.stops)?L.SIZE_SCALE_STOPS:(null!=l.field||l.expression&&"view.scale"!==l.expression||l.valueExpression&&"$view.scale"!==l.valueExpression)&&(Array.isArray(l.stops)||"levels"in l&&l.levels)?L.SIZE_FIELD_STOPS:(null!=l.field||l.expression&&"view.scale"!==l.expression||l.valueExpression&&"$view.scale"!==l.valueExpression)&&null!=l.valueUnit?L.SIZE_UNIT_VALUE:(s$1.getLogger("esri.views.2d.engine.webgl").error(new s$2("mapview-bad-type","Found invalid size VisualVariable",l)),L.NONE)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function l(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function r(t){return {value:t.value,size:o$1(t.size)}}function a(e){return (e??[]).map((e=>r(e)))}function u(t){if("string"==typeof t||"number"==typeof t)return o$1(t);const s=t;return {type:"size",expression:s.expression,stops:a(s.stops)}}const p=e=>{const s=[],o=[],i=a(e),l=i.length;for(let r=0;r<6;r++){const e=i[Math.min(r,l-1)];s.push(e.value),o.push(null==e.size?t$1:u$2(e.size));}return {values:new Float32Array(s),sizes:new Float32Array(o)}};function c(e){const t=e&&e.length>0?{}:null,s=t?{}:null;if(!t||!s)return {vvFields:t,vvRanges:s};for(const n of e)if(n.field&&(t[n.type]=n.field),"size"===n.type){s.size||(s.size={});const e=n;switch(l$1(e)){case L.SIZE_MINMAX_VALUE:s.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:u(e.minSize),maxSize:u(e.maxSize)};break;case L.SIZE_SCALE_STOPS:s.size.scaleStops={stops:a(e.stops)};break;case L.SIZE_FIELD_STOPS:if(e.levels){const t={};for(const s in e.levels)t[s]=p(e.levels[s]);s.size.fieldStops={type:"level-dependent",levels:t};}else s.size.fieldStops={type:"static",...p(e.stops)};break;case L.SIZE_UNIT_VALUE:s.size.unitValue={unit:e.valueUnit,valueRepresentation:e.valueRepresentation??void 0};}}else if("color"===n.type)s.color=m(n);else if("opacity"===n.type)s.opacity=f(n);else if("rotation"===n.type){const e=n;s.rotation={type:e.rotationType};}return {vvFields:t,vvRanges:s}}function f(e){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;{if(e.stops.length>8)return null;const s=e.stops;for(let e=0;e<8;++e){const n=s[Math.min(e,s.length-1)];t.values[e]=n.value,t.opacities[e]=n.opacity;}}}else {if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;for(let e=0;e<8;e++)t.values[e]=1/0,t.opacities[e]=s;}}return t}function v(e,t,s){e[4*t]=s.r/255,e[4*t+1]=s.g/255,e[4*t+2]=s.b/255,e[4*t+3]=s.a;}function m(e){if(null==e)return null;if(e.normalizationField)return null;const t={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;{if(e.stops.length>8)return null;t.field=e.field;const s=e.stops;for(let e=0;e<8;++e){const n=s[Math.min(e,s.length-1)];t.values[e]=n.value,v(t.colors,e,n.color);}}}else {if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0&&e.stops[0].color;for(let e=0;e<8;e++)t.values[e]=1/0,v(t.colors,e,s);}}for(let n=0;n<32;n+=4)r$2(t.colors,n,!0);return t}

export { l$2 as a, l as b, c$1 as c, n$1 as d, e, f$1 as f, c as g, i, l$1 as l, n, p$1 as p, s, u$1 as u };

//# sourceMappingURL=visualVariablesUtils-20c7d45d.js.map