import { cR as d, cQ as f, cD as b } from './hub-compass-map-4d751555.js';
import { m } from './query-281c4009.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function s(r,t,e){const s=await a(r,t,e);return d.fromJSON(s)}async function a(o,s,a){const n=f(o),i={...a},p=b.from(s),{data:u}=await m(n,p,p.sourceSpatialReference,i);return u}

export { a, s };

//# sourceMappingURL=executeQueryJSON-d7c1b267.js.map