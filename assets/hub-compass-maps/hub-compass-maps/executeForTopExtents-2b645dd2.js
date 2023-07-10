import { cQ as f, iT as S, cs as M } from './hub-compass-map-f4225e12.js';
import { p } from './queryTopFeatures-48e6b15f.js';
import './index-d436d5f8.js';
import './query-2dbdcab5.js';
import './pbfQueryUtils-f0f40243.js';
import './pbf-2ae522ce.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function m(m,s,n){const p$1=f(m),a=await p(p$1,S.from(s),{...n});return {count:a.data.count,extent:M.fromJSON(a.data.extent)}}

export { m as executeForTopExtents };

//# sourceMappingURL=executeForTopExtents-2b645dd2.js.map