import { cQ as f, iT as S } from './hub-compass-map-68308039.js';
import { m } from './queryTopFeatures-0c042515.js';
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
async function s(s,e,p){const u=f(s);return (await m(u,S.from(e),{...p})).data.count}

export { s as executeForTopCount };

//# sourceMappingURL=executeForTopCount-12de2a25.js.map