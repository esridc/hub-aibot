import { cQ as f, iT as S, cR as d } from './hub-compass-map-68308039.js';
import { y } from './queryTopFeatures-0c042515.js';
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
async function s(s,p,u,a){const m=f(s),i={...a},{data:f$1}=await y(m,S.from(p),u,i);return d.fromJSON(f$1)}

export { s as executeTopFeaturesQuery };

//# sourceMappingURL=executeTopFeaturesQuery-ff3ab962.js.map