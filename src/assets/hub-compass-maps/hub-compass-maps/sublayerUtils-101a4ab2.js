import { f0 as r } from './hub-compass-map-68308039.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function e(r,e,n){const o=e.flatten((({sublayers:r})=>r)).length;if(o!==r.length)return !0;return !!r.some((r=>r.originIdOf("minScale")>n||r.originIdOf("maxScale")>n||r.originIdOf("renderer")>n||r.originIdOf("labelingInfo")>n||r.originIdOf("opacity")>n||r.originIdOf("labelsVisible")>n||r.originIdOf("source")>n))||!i(r,e)}function n(e,n,o){return !!e.some((e=>{const n=e.source;return !(!n||"map-layer"===n.type&&n.mapLayerId===e.id&&(null==n.gdbVersion||n.gdbVersion===o))||e.originIdOf("renderer")>r.SERVICE||e.originIdOf("labelingInfo")>r.SERVICE||e.originIdOf("opacity")>r.SERVICE||e.originIdOf("labelsVisible")>r.SERVICE}))||!i(e,n)}function i(r,e){if(!r||!r.length||null==e)return !0;const n=e.slice().reverse().flatten((({sublayers:r})=>r&&r.toArray().reverse())).map((r=>r.id)).toArray();if(r.length>n.length)return !1;let i=0;const o=n.length;for(const{id:t}of r){for(;i<o&&n[i]!==t;)i++;if(i>=o)return !1}return !0}function o(r){return !!r&&r.some((r=>null!=r.minScale||r.layerDefinition&&null!=r.layerDefinition.minScale))}

export { e, n, o };

//# sourceMappingURL=sublayerUtils-101a4ab2.js.map