import { cR as d, cQ as f, cD as b } from './hub-compass-map-68308039.js';
import { m } from './query-d5b899b4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function s(r,t,e){const s=await a(r,t,e);return d.fromJSON(s)}async function a(o,s,a){const n=f(o),i={...a},p=b.from(s),{data:u}=await m(n,p,p.sourceSpatialReference,i);return u}

export { a, s };

//# sourceMappingURL=executeQueryJSON-446b438b.js.map