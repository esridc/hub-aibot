import { cQ as f, cD as b } from './hub-compass-map-f4225e12.js';
import { p, d } from './query-2dbdcab5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function n(n,s,m){const p$1=f(n);return p(p$1,b.from(s),{...m}).then((o=>o.data.count))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function s(s,e,m){const n=f(s);return d(n,b.from(e),{...m}).then((o=>o.data.objectIds))}

export { n, s };

//# sourceMappingURL=executeForIds-27b5a391.js.map