import { A, ap as b$1, X as Pe, Q, E, aq as _e, o as oe, V, ar as be, as as Le, at as Ye, au as ge, av as Je, aw as he, ax as se, v, ay as Ge } from './arcadeUtils-2095a3a1.js';
import { t, e } from './executionError-5ec41157.js';
import './hub-compass-map-f4225e12.js';
import './index-d436d5f8.js';
import './arcadeTimeUtils-351d37f2.js';
import './number-cca575f1.js';
import './featureConversionUtils-aa77f433.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function h(a,e){return a&&a.domain?"coded-value"===a.domain.type||"codedValue"===a.domain.type?A.convertObjectToArcadeDictionary({type:"codedValue",name:a.domain.name,dataType:b$1[a.field.type],codedValues:a.domain.codedValues.map((n=>({name:n.name,code:n.code})))},Pe(e)):A.convertObjectToArcadeDictionary({type:"range",name:a.domain.name,dataType:b$1[a.field.type],min:a.domain.min,max:a.domain.max},Pe(e)):null}function b(T){"async"===T.mode&&(T.functions.domain=function(n,d){return T.standardFunctionAsync(n,d,(async(u,m,f)=>{if(Q(f,2,3,n,d),E(f[0])){return h(_e(f[0],oe(f[1]),void 0===f[2]?void 0:f[2]),n)}if(V(f[0])){await f[0]._ensureLoaded();return h(be(oe(f[1]),f[0],null,void 0===f[2]?void 0:f[2]),n)}throw new t(n,e.InvalidParameter,d)}))},T.functions.subtypes=function(o,i){return T.standardFunctionAsync(o,i,(async(s,m,f)=>{if(Q(f,1,1,o,i),E(f[0])){const a=Le(f[0]);return a?A.convertObjectToArcadeDictionary(a,Pe(o)):null}if(V(f[0])){await f[0]._ensureLoaded();const a=f[0].subtypes();return a?A.convertObjectToArcadeDictionary(a,Pe(o)):null}throw new t(o,e.InvalidParameter,i)}))},T.functions.domainname=function(n,o){return T.standardFunctionAsync(n,o,(async(d,u,l)=>{if(Q(l,2,4,n,o),E(l[0]))return Ye(l[0],oe(l[1]),l[2],void 0===l[3]?void 0:l[3]);if(V(l[0])){await l[0]._ensureLoaded();const n=be(oe(l[1]),l[0],null,void 0===l[3]?void 0:l[3]);return ge(n,l[2])}throw new t(n,e.InvalidParameter,o)}))},T.signatures.push({name:"domainname",min:2,max:4}),T.functions.domaincode=function(n,o){return T.standardFunctionAsync(n,o,(async(d,u,m)=>{if(Q(m,2,4,n,o),E(m[0]))return Je(m[0],oe(m[1]),m[2],void 0===m[3]?void 0:m[3]);if(V(m[0])){await m[0]._ensureLoaded();const n=be(oe(m[1]),m[0],null,void 0===m[3]?void 0:m[3]);return he(n,m[2])}throw new t(n,e.InvalidParameter,o)}))},T.signatures.push({name:"domaincode",min:2,max:4})),T.functions.text=function(n,a){return T.standardFunctionAsync(n,a,((e,r,o)=>{if(Q(o,1,2,n,a),!V(o[0]))return se(o[0],o[1]);{const n=v(o[1],"");if(""===n)return o[0].castToText();if("schema"===n.toLowerCase())return o[0].convertToText("schema",e.abortSignal);if("featureset"===n.toLowerCase())return o[0].convertToText("featureset",e.abortSignal)}}))},T.functions.gdbversion=function(n,o){return T.standardFunctionAsync(n,o,(async(i,s,d)=>{if(Q(d,1,1,n,o),E(d[0]))return d[0].gdbVersion();if(V(d[0])){return (await d[0].load()).gdbVersion}throw new t(n,e.InvalidParameter,o)}))},T.functions.schema=function(o,i){return T.standardFunctionAsync(o,i,(async(s,d,m)=>{if(Q(m,1,1,o,i),V(m[0]))return await m[0].load(),A.convertObjectToArcadeDictionary(m[0].schema(),Pe(o));if(E(m[0])){const a=Ge(m[0]);return a?A.convertObjectToArcadeDictionary(a,Pe(o)):null}throw new t(o,e.InvalidParameter,i)}))};}

export { b as registerFunctions };

//# sourceMappingURL=featuresetstring-7d83b814.js.map