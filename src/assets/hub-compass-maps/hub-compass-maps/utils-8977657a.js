import { aX as h$3, bJ as e, x as u$3, c6 as a$1, O as j$1, ck as x$1, bk as e$1, aU as u$4, ez as S$1, eA as p$3, eB as a$2, eC as l$2, eD as i$1 } from './hub-compass-map-4d751555.js';
import { f as f$3, y as y$3, M as M$2, C as C$2, m as m$3, u as u$2 } from './utils-daa8d2fa.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function i(e){const s=f$3(e);if("CIMTextSymbol"===s?.type)return s.height??0;let a=0;if(s?.symbolLayers)for(const t of s.symbolLayers)y$3(t)&&null!=t.size&&t.size>a?a=t.size:M$2(t)&&null!=t.width&&t.width>a?a=t.width:C$2(t);return a}function c$1(e,o,r){if(!e)return;const n=f$3(e),s=i(e);if(0===s)return void f$2(n,o);l$1(n,o/s,!1,r);}function f$2(e,t){if(e)if("CIMTextSymbol"!==e.type){if(e.symbolLayers)for(const o of e.symbolLayers)switch(o.type){case"CIMPictureMarker":case"CIMVectorMarker":o.size=t;break;case"CIMPictureStroke":case"CIMSolidStroke":o.width=t;}}else e.height=t;}function l$1(e,t,o,r){if(e)if("CIMTextSymbol"!==e.type){if(o&&e.effects)for(const o of e.effects)y$2(o,t);if(e.symbolLayers)for(const o of e.symbolLayers)switch(o.type){case"CIMPictureMarker":case"CIMVectorMarker":m$2(o,t,r);break;case"CIMPictureStroke":case"CIMSolidStroke":!r?.preserveOutlineWidth&&o.width&&(o.width*=t);break;case"CIMPictureFill":o.height&&(o.height*=t),o.offsetX&&(o.offsetX*=t),o.offsetY&&(o.offsetY*=t);break;case"CIMHatchFill":l$1(o.lineSymbol,t,!0,{...r,preserveOutlineWidth:!1}),o.offsetX&&(o.offsetX*=t),o.offsetY&&(o.offsetY*=t),o.separation&&(o.separation*=t);}}else null!=e.height&&(e.height*=t);}function m$2(e,t,o){if(e&&(e.markerPlacement&&M$1(e.markerPlacement,t),e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.anchorPoint&&"Absolute"===e.anchorPointUnits&&(e.anchorPoint={x:e.anchorPoint.x*t,y:e.anchorPoint.y*t}),e.size=null!=e.size?e.size*t:0,"CIMVectorMarker"===e.type&&e.markerGraphics))for(const r of e.markerGraphics)e.scaleSymbolsProportionally||l$1(r.symbol,t,!0,o);}function M$1(e,t){switch(m$3(e)&&e.offset&&(e.offset*=t),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.placementTemplate&&e.placementTemplate.length){const o=e.placementTemplate.map((e=>e*t));e.placementTemplate=o;}break;case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset&&(e.maxRandomOffset*=t),e.placementTemplate&&e.placementTemplate.length){const o=e.placementTemplate.map((e=>e*t));e.placementTemplate=o;}break;case"CIMMarkerPlacementOnLine":e.startPointOffset&&(e.startPointOffset*=t);break;case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine&&(e.offsetAlongLine*=t);break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":e.beginPosition&&(e.beginPosition*=t),e.endPosition&&(e.endPosition*=t);break;case"CIMMarkerPlacementPolygonCenter":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMMarkerPlacementInsidePolygon":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.stepX&&(e.stepX*=t),e.stepY&&(e.stepY*=t);}}function y$2(e,t){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width&&(e.width*=t);break;case"CIMGeometricEffectBuffer":e.size&&(e.size*=t);break;case"CIMGeometricEffectCut":e.beginCut&&(e.beginCut*=t),e.endCut&&(e.endCut*=t),e.middleCut&&(e.middleCut*=t);break;case"CIMGeometricEffectDashes":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.dashTemplate&&e.dashTemplate.length){const o=e.dashTemplate.map((e=>e*t));e.dashTemplate=o;}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length&&(e.length*=t);break;case"CIMGeometricEffectMove":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset&&(e.offset*=t);break;case"CIMGeometricEffectRegularPolygon":e.radius&&(e.radius*=t);break;case"CIMGeometricEffectTaperedPolygon":e.fromWidth&&(e.fromWidth*=t),e.length&&(e.length*=t),e.toWidth&&(e.toWidth*=t);break;case"CIMGeometricEffectWave":e.amplitude&&(e.amplitude*=t),e.period&&(e.period*=t);}}function C$1(o){const r=[];return u$1(f$3(o),r),r.length?new h$3(u$2(r[0])):null}function u$1(e,t){if(!e)return;let n;n="CIMTextSymbol"===e.type?e.symbol:e;const a="CIMPolygonSymbol"===e.type;if(n?.symbolLayers)for(const i of n.symbolLayers)if(!(i.colorLocked||a&&(M$2(i)||y$3(i)&&i.markerPlacement&&m$3(i.markerPlacement))))switch(i.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":i.tintColor&&b$1(t,i.tintColor);break;case"CIMVectorMarker":i.markerGraphics?.forEach((e=>{u$1(e.symbol,t);}));break;case"CIMSolidStroke":case"CIMSolidFill":b$1(t,i.color);break;case"CIMHatchFill":u$1(i.lineSymbol,t);}}function b$1(e,t){for(const o of e)if(o.join(".")===t.join("."))return;e.push(t);}function I$1(o,r,n){r instanceof h$3||(r=new h$3(r));const s=f$3(o);s&&k$1(s,r,n);}function k$1(e,t,a){if(!e)return;let i;i="CIMTextSymbol"===e.type?e.symbol:e;const c="CIMPolygonSymbol"===i?.type;if(i?.symbolLayers)for(const f of i.symbolLayers){if(f.colorLocked)continue;if(c)if(a){const{layersToColor:e}=a;if((M$2(f)||y$3(f)&&f.markerPlacement&&m$3(f.markerPlacement))&&"fill"===e||C$2(f)&&"outline"===e)continue}else if(M$2(f)||y$3(f)&&f.markerPlacement&&m$3(f.markerPlacement))continue;const e=t.toArray();switch(f.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":f.tintColor=e;break;case"CIMVectorMarker":f.markerGraphics?.forEach((e=>{k$1(e.symbol,t,a);}));break;case"CIMSolidStroke":case"CIMSolidFill":f.color=e;break;case"CIMHatchFill":k$1(f.lineSymbol,t,a);}}}function p$2(e,o=!1){const r=f$3(e);if("CIMTextSymbol"===r?.type||"CIMPointSymbol"===r?.type){const e=r.angle;return null!=e&&0!==e&&o?360-e:e??0}return 0}function h$2(e,r,n=!1){const s=f$3(e);if(n&&0!==r&&(r=360-r),"CIMTextSymbol"!==s?.type){if("CIMPointSymbol"===s?.type&&s.symbolLayers){const e=r-(s.angle||0);for(const t of s.symbolLayers)if(y$3(t)){let o=t.rotation||0;t.rotateClockwise?o-=e:o+=e,t.rotation=o;}s.angle=r;}}else s.angle=r;}function P(e){const o=f$3(e);if(!o)return null;switch(o.type){case"CIMPointSymbol":return "CIMPointSymbol";case"CIMLineSymbol":return "CIMLineSymbol";case"CIMPolygonSymbol":return "CIMPolygonSymbol";case"CIMTextSymbol":return "CIMTextSymbol";case"CIMMeshSymbol":return "CIMMeshSymbol";default:return null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const n="picture-fill",l="simple-fill",c="simple-line",a="simple-marker",m$1="text",p$1="cim",u=new e(1e3);function f$1(t){const r=t.style;let o=null;if(t)switch(t.type){case a:"cross"!==r&&"x"!==r&&(o=t.color);break;case l:"solid"===r?o=t.color:"none"!==r&&(o={type:"pattern",x:0,y:0,src:a$1(`esri/symbols/patterns/${r}.png`),width:5,height:5});break;case n:o={type:"pattern",src:t.url,width:u$3(t.width)*t.xscale,height:u$3(t.height)*t.yscale,x:u$3(t.xoffset),y:u$3(t.yoffset)};break;case m$1:o=t.color;break;case p$1:o=C$1(t);}return o}function h$1(e,t){const o=e+"-"+t;return void 0!==u.get(o)?Promise.resolve(u.get(o)):j$1(e,{responseType:"image"}).then((e=>{const r=e.data,s=r.naturalWidth,i=r.naturalHeight,n=document.createElement("canvas");n.width=s,n.height=i;const l=n.getContext("2d");l.fillStyle=t,l.fillRect(0,0,s,i),l.globalCompositeOperation="destination-in",l.drawImage(r,0,0);const c=n.toDataURL();return u.put(o,c),c}))}function y$1(e){if(!e)return null;let t=null;switch(e.type){case l:case n:case a:t=y$1(e.outline);break;case c:{const r=u$3(e.width);null!=e.style&&"none"!==e.style&&0!==r&&(t={color:e.color,style:d$1(e.style),width:r,cap:e.cap,join:"miter"===e.join?u$3(e.miterLimit):e.join});break}default:t=null;}return t}const d$1=(()=>{const e={};return t=>{if(e[t])return e[t];const r=t.replaceAll("-","");return e[t]=r,r}})(),g$1=new h$3([128,128,128]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const f=new h$3("white");function m(e){const t=e.symbolLayers?.at(-1);if(t&&"outline"in t)return t?.outline?.size}function y(e){if(!e)return 0;if(x$1(e)){const t=m(e);return null!=t?t:0}return e$1(y$1(e)?.width)}function p(e){if(null==e||!("symbolLayers"in e)||null==e.symbolLayers)return !1;switch(e.type){case"point-3d":return e.symbolLayers.some((e=>"object"===e.type));case"line-3d":return e.symbolLayers.some((e=>"path"===e.type));case"polygon-3d":return e.symbolLayers.some((e=>"object"===e.type||"extrude"===e.type));default:return !1}}function h(e){return u$4(e.resource).href}function b(n,r){if(!n)return null;let l=null;return x$1(n)?l=w(n):S$1(n)&&(l="cim"===n.type?C$1(n):n.color?new h$3(n.color):null),l?d(l,r):null}function w(t){const o=t.symbolLayers;if(!o)return null;let n=null;return o.forEach((e=>{"object"===e.type&&e.resource?.href||(n="water"===e.type?e.color:e.material?e.material.color:null);})),n?new h$3(n):null}function d(t,o){if(null==o||null==t)return t;const n=t.toRgba();return n[3]=n[3]*o,new h$3(n)}function j(e,t,o){const n=e.symbolLayers;if(!n)return;const r=e=>d(t=t??e??(null!=o?f:null),o);n.forEach((e=>{if("object"!==e.type||!e.resource?.href||t)if("water"===e.type)e.color=r(e.color);else {const t=null!=e.material?e.material.color:null,n=r(t);null==e.material?e.material=new p$3({color:n}):e.material.color=n,null!=o&&"outline"in e&&null!=e.outline&&null!=e.outline.color&&(e.outline.color=d(e.outline.color,o));}}));}function k(e,t,o){(t=t??e.color)&&(e.color=d(t,o)),null!=o&&"outline"in e&&e.outline&&e.outline.color&&(e.outline.color=d(e.outline.color,o));}function g(n,r,l){n&&(r||null!=l)&&(r&&(r=new h$3(r)),x$1(n)?j(n,r,l):S$1(n)&&k(n,r,l));}async function L(e,t){const o=e.symbolLayers;o&&await a$2(o,(async e=>z(e,t)));}async function z(e,t){switch(e.type){case"extrude":U(e,t);break;case"icon":case"line":case"text":S(e,t);break;case"path":E(e,t);break;case"object":await v(e,t);}}function S(e,t){const o=x(t);null!=o&&(e.size=o);}function x(e){for(const t of e)if("number"==typeof t)return t;return null}function U(e,t){e.size="number"==typeof t[2]?t[2]:0;}async function v(e,t){const{resourceSize:o,symbolSize:n}=await C(e),r=O(t,o,n);e.width=M(t[0],n[0],o[0],r),e.depth=M(t[1],n[1],o[1],r),e.height=M(t[2],n[2],o[2],r);}function E(e,t){const o=O(t,l$2,[e.width,void 0,e.height]);e.width=M(t[0],e.width,1,o),e.height=M(t[2],e.height,1,o);}function O(e,t,o){for(let n=0;n<3;n++){const r=e[n];switch(r){case"symbol-value":{const e=o[n];return null!=e?e/t[n]:1}case"proportional":break;default:if(r&&t[n])return r/t[n]}}return 1}async function C(e){const{computeObjectLayerResourceSize:t}=await import('./symbolLayerUtils-1daf5f34.js'),o=await t(e,10),{width:n,height:r,depth:l}=e,i=[n,l,r];let c=1;for(let s=0;s<3;s++){const e=i[s];if(null!=e){c=e/o[s];break}}for(let s=0;s<3;s++)null==i[s]&&(i[s]=o[s]*c);return {resourceSize:o,symbolSize:i}}function M(e,t,o,n){switch(e){case"proportional":return o*n;case"symbol-value":return null!=t?t:o;default:return e}}function R(e,t){const o=x(t);if(null!=o)switch(e.type){case"simple-marker":e.size=o;break;case"picture-marker":{const t=e.width/e.height;t>1?(e.width=o,e.height=o*t):(e.width=o*t,e.height=o);break}case"simple-line":e.width=o;break;case"text":e.font.size=o;}}async function D(e,n){if(e&&n)return x$1(e)?L(e,n):void(S$1(e)&&R(e,n))}function I(e,n,r){if(e&&null!=n)if(x$1(e)){const t=e.symbolLayers;t&&t.forEach((e=>{if(e&&"object"===e.type)switch(r){case"tilt":e.tilt=n;break;case"roll":e.roll=n;break;default:e.heading=n;}}));}else S$1(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle=n));}function J(e){if(!e)return null;const t=e.effects.filter((e=>"bloom"!==e.type)).map((e=>e.toJSON()));return i$1(t)}function N(e){return null!=e&&"polygon-3d"===e.type&&e.symbolLayers.some((e=>"extrude"===e.type))}async function q(e,t){const o=await e.fetchSymbol(t);return o||e.fetchCIMSymbol(t)}

export { D, I, J, h$1 as a, b, g as c, d$1 as d, d as e, f$1 as f, g$1 as g, h, m$2 as m, p, q, y$1 as y };

//# sourceMappingURL=utils-8977657a.js.map