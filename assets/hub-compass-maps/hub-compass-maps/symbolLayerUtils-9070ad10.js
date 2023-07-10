import { bJ as e, O as j, f as s, mf as F, l as n, fI as i, mg as c$1 } from './hub-compass-map-68308039.js';
import './index-d436d5f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let c=u();function u(){return new e(50)}function a(){c=u();}async function m(e,o){if(e.resource?.href)return l(e.resource.href).then((e=>[e.width,e.height]));if(e.resource?.primitive)return null!=o?[o,o]:[256,256];throw new s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function l(r){return j(r,{responseType:"image"}).then((e=>e.data))}async function f(e,o=null){if(!e.isPrimitive){const o=e.resource.href;if(!o)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const s$1=c.get(o);if(void 0!==s$1)return s$1;const{fetch:n$1}=await import('./objectResourceUtils-134c6dea.js').then(function (n) { return n.o; }),u=await n$1(o,{disableTextures:!0}),a=F(u.referenceBoundingBox,n());return c.put(o,a),a}if(!e.resource?.primitive)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const u=i(c$1(e.resource.primitive));if(null!=o)for(let r=0;r<u.length;r++)u[r]*=o;return F(u,n())}

export { a as clearBoundingBoxCache, m as computeIconLayerResourceSize, f as computeObjectLayerResourceSize };

//# sourceMappingURL=symbolLayerUtils-9070ad10.js.map