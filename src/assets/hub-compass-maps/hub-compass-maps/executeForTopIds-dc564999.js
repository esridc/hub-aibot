import { cQ as f, iT as S } from './hub-compass-map-4d751555.js';
import { d } from './queryTopFeatures-1a526cef.js';
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
async function s(s,e,p){const a=f(s);return (await d(a,S.from(e),{...p})).data.objectIds}

export { s as executeForTopIds };

//# sourceMappingURL=executeForTopIds-dc564999.js.map