import { cQ as f, iT as S, cs as M } from './hub-compass-map-68308039.js';
import { p } from './queryTopFeatures-0c042515.js';
import './index-d436d5f8.js';
import './query-d5b899b4.js';
import './pbfQueryUtils-c8cadfda.js';
import './pbf-bcfa39bd.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function m(m,s,n){const p$1=f(m),a=await p(p$1,S.from(s),{...n});return {count:a.data.count,extent:M.fromJSON(a.data.extent)}}

export { m as executeForTopExtents };

//# sourceMappingURL=executeForTopExtents-9439f6b9.js.map