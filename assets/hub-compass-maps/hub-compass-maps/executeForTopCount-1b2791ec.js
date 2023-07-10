import { cQ as f, iT as S } from './hub-compass-map-4d751555.js';
import { m } from './queryTopFeatures-1a526cef.js';
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
async function s(s,e,p){const u=f(s);return (await m(u,S.from(e),{...p})).data.count}

export { s as executeForTopCount };

//# sourceMappingURL=executeForTopCount-1b2791ec.js.map