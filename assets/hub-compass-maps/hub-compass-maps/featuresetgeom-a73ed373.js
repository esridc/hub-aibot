import { t, e } from './executionError-5ec41157.js';
import { t as Ne, V, ao as s, Q, o as oe } from './arcadeUtils-2095a3a1.js';
import { d as f, e as u } from './SpatialFilter-5819e9ca.js';
import { eJ as p } from './hub-compass-map-f4225e12.js';
import { m, S as S$1, x, O, p as p$1, h, R as R$1 } from './geometryEngineAsync-c404e17f.js';
import './arcadeTimeUtils-351d37f2.js';
import './number-cca575f1.js';
import './featureConversionUtils-aa77f433.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './WhereClause-fbad3eb1.js';
import './index-d436d5f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function y(e){return e instanceof p}function S(i,a,c,S){return S(i,a,(async(S,R,v)=>{if(v.length<2)throw new t(i,e.WrongNumberOfParameters,a);if(null===(v=Ne(v))[0]&&null===v[1])return !1;if(V(v[0])){if(v[1]instanceof p)return new f({parentfeatureset:v[0],relation:c,relationGeom:v[1]});if(null===v[1])return new u({parentfeatureset:v[0]});throw new t(i,e.InvalidParameter,a)}if(y(v[0])){if(y(v[1])){switch(c){case"esriSpatialRelEnvelopeIntersects":return h(s(v[0]),s(v[1]));case"esriSpatialRelIntersects":return h(v[0],v[1]);case"esriSpatialRelContains":return p$1(v[0],v[1]);case"esriSpatialRelOverlaps":return O(v[0],v[1]);case"esriSpatialRelWithin":return x(v[0],v[1]);case"esriSpatialRelTouches":return S$1(v[0],v[1]);case"esriSpatialRelCrosses":return m(v[0],v[1])}throw new t(i,e.InvalidParameter,a)}if(V(v[1]))return new f({parentfeatureset:v[1],relation:c,relationGeom:v[0]});if(null===v[1])return !1;throw new t(i,e.InvalidParameter,a)}if(null!==v[0])throw new t(i,e.InvalidParameter,a);return V(v[1])?new u({parentfeatureset:v[1]}):!(v[1]instanceof p||null===v[1])&&void 0}))}function R(t$1){"async"===t$1.mode&&(t$1.functions.intersects=function(e,n){return S(e,n,"esriSpatialRelIntersects",t$1.standardFunctionAsync)},t$1.functions.envelopeintersects=function(e,n){return S(e,n,"esriSpatialRelEnvelopeIntersects",t$1.standardFunctionAsync)},t$1.signatures.push({name:"envelopeintersects",min:2,max:2}),t$1.functions.contains=function(e,n){return S(e,n,"esriSpatialRelContains",t$1.standardFunctionAsync)},t$1.functions.overlaps=function(e,n){return S(e,n,"esriSpatialRelOverlaps",t$1.standardFunctionAsync)},t$1.functions.within=function(e,n){return S(e,n,"esriSpatialRelWithin",t$1.standardFunctionAsync)},t$1.functions.touches=function(e,n){return S(e,n,"esriSpatialRelTouches",t$1.standardFunctionAsync)},t$1.functions.crosses=function(e,n){return S(e,n,"esriSpatialRelCrosses",t$1.standardFunctionAsync)},t$1.functions.relate=function(u$1,f){return t$1.standardFunctionAsync(u$1,f,((t$1,p$1,m)=>{if(m=Ne(m),Q(m,3,3,u$1,f),y(m[0])&&y(m[1]))return R$1(m[0],m[1],oe(m[2]));if(m[0]instanceof p&&null===m[1])return !1;if(m[1]instanceof p&&null===m[0])return !1;if(V(m[0])&&null===m[1])return new u({parentfeatureset:m[0]});if(V(m[1])&&null===m[0])return new u({parentfeatureset:m[1]});if(V(m[0])&&m[1]instanceof p)return m[0].relate(m[1],oe(m[2]));if(V(m[1])&&m[0]instanceof p)return m[1].relate(m[0],oe(m[2]));if(null===m[0]&&null===m[1])return !1;throw new t(u$1,e.InvalidParameter,f)}))});}

export { R as registerFunctions };

//# sourceMappingURL=featuresetgeom-a73ed373.js.map