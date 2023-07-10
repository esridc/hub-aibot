import { cQ as f, iT as S } from './hub-compass-map-f4225e12.js';
import { m } from './queryTopFeatures-48e6b15f.js';
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
async function s(s,e,p){const u=f(s);return (await m(u,S.from(e),{...p})).data.count}

export { s as executeForTopCount };

//# sourceMappingURL=executeForTopCount-06d9ac2c.js.map