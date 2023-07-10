import { t, e } from './executionError-5ec41157.js';
import { z, aj as l$1, v, q, V, Q, L } from './arcadeUtils-ba7de051.js';
import { f as f$1 } from './WhereClause-5c2264d7.js';
import './hub-compass-map-4d751555.js';
import './index-d436d5f8.js';
import './arcadeTimeUtils-530d2f45.js';
import './number-08e53564.js';
import './featureConversionUtils-80dbaef5.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function f(n,t,r,i,f,d){if(1===i.length){if(z(i[0]))return l$1(n,i[0],v(i[1],-1));if(q(i[0]))return l$1(n,i[0].toArray(),v(i[1],-1))}else if(2===i.length){if(z(i[0]))return l$1(n,i[0],v(i[1],-1));if(q(i[0]))return l$1(n,i[0].toArray(),v(i[1],-1));if(V(i[0])){const r=await i[0].load(),e=await l(f$1.create(i[1],r.getFieldsIndex()),d,f);return i[0].calculateStatistic(n,e,v(i[2],1e3),t.abortSignal)}}else if(3===i.length&&V(i[0])){const r=await i[0].load(),e=await l(f$1.create(i[1],r.getFieldsIndex()),d,f);return i[0].calculateStatistic(n,e,v(i[2],1e3),t.abortSignal)}return l$1(n,i,-1)}async function l(n,t,r){const e=n.getVariables();if(e.length>0){const a=[];for(let n=0;n<e.length;n++){const i={name:e[n]};a.push(await t.evaluateIdentifier(r,i));}const i={};for(let n=0;n<e.length;n++)i[e[n]]=a[n];return n.parameters=i,n}return n}function d(c){"async"===c.mode&&(c.functions.stdev=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("stdev",t,r,e,n,c)))},c.functions.variance=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("variance",t,r,e,n,c)))},c.functions.average=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("mean",t,r,e,n,c)))},c.functions.mean=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("mean",t,r,e,n,c)))},c.functions.sum=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("sum",t,r,e,n,c)))},c.functions.min=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("min",t,r,e,n,c)))},c.functions.max=function(n,t){return c.standardFunctionAsync(n,t,((t,r,e)=>f("max",t,r,e,n,c)))},c.functions.count=function(o,u){return c.standardFunctionAsync(o,u,((c,f,l)=>{if(Q(l,1,1,o,u),V(l[0]))return l[0].count(c.abortSignal);if(z(l[0])||L(l[0]))return l[0].length;if(q(l[0]))return l[0].length();throw new t(o,e.InvalidParameter,u)}))});}

export { d as registerFunctions };

//# sourceMappingURL=featuresetstats-0dd9ea80.js.map