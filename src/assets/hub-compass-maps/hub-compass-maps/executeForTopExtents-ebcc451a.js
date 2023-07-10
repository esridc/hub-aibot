import { cQ as f, iT as S, cs as M } from './hub-compass-map-4d751555.js';
import { p } from './queryTopFeatures-1a526cef.js';
import './index-d436d5f8.js';
import './query-281c4009.js';
import './pbfQueryUtils-605db89c.js';
import './pbf-62769da7.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function m(m,s,n){const p$1=f(m),a=await p(p$1,S.from(s),{...n});return {count:a.data.count,extent:M.fromJSON(a.data.extent)}}

export { m as executeForTopExtents };

//# sourceMappingURL=executeForTopExtents-ebcc451a.js.map