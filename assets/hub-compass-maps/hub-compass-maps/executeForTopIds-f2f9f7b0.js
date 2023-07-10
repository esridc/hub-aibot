import { cQ as f, iT as S } from './hub-compass-map-f4225e12.js';
import { d } from './queryTopFeatures-48e6b15f.js';
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
async function s(s,e,p){const a=f(s);return (await d(a,S.from(e),{...p})).data.objectIds}

export { s as executeForTopIds };

//# sourceMappingURL=executeForTopIds-f2f9f7b0.js.map