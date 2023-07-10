import { s, f as s$1, c_ as p, c$ as i, d0 as l, d1 as a, d2 as Be, d3 as j$1, d4 as d, d5 as x$1, c1 as j$2, d6 as p$1, d7 as a$1, d8 as u, cp as k } from './hub-compass-map-f4225e12.js';
import { i as i$1 } from './originUtils-ad3e2fe4.js';
import { r } from './fetchService-f2cb8e89.js';
import { o } from './jsonContext-1cc8cf2c.js';
import './index-d436d5f8.js';
import './multiOriginJSONSupportUtils-c04f5031.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const v=s.getLogger("esri.layers.FeatureLayer"),b="Feature Service";function I(e,t){return `Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function S(e,r){if(r.type!==b)throw new s$1("feature-layer:portal-item-wrong-type",I(e,`should have portal item of type "${b}"`))}async function g(e){if(await e.load(),p(e))throw new s$1("feature-layer:save",I(e,"using an in-memory source cannot be saved to a portal item"))}function j(e,r){let a=(e.messages??[]).filter((({type:e})=>"error"===e)).map((({name:e,message:r,details:a})=>new s$1(e,r,a)));if(r?.ignoreUnsupported&&(a=a.filter((({name:e})=>"layer:unsupported"!==e&&"symbol:unsupported"!==e&&"symbol-layer:unsupported"!==e&&"property:unsupported"!==e&&"url:unsupported"!==e))),a.length>0)throw new s$1("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}async function L(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return j(t,r),a}function P(e){const{layer:t,layerJSON:r}=e;return t.isTable?{layers:[],tables:[r]}:{layers:[r],tables:[]}}function J(e){i(e,l.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)));}function N(e){const r=e.portalItem;if(!r)throw v.error("save: requires the portalItem property to be set"),new s$1("feature-layer:portal-item-not-set",I(e,"requires the portalItem property to be set"));if(!r.loaded)throw new s$1("feature-layer:portal-item-not-loaded",I(e,"cannot be saved to a portal item that does not exist or is inaccessible"));S(e,r);}async function O(e,t){return /\/\d+\/?$/.test(e.url??"")?P(t[0]):E(e,t)}async function E(e,t){const{layer:{url:r,customParameters:a,apiKey:o}}=t[0];let l=await e.fetchData("json");l&&null!=l.layers&&null!=l.tables||(l=await T(l,{url:r??"",customParameters:a,apiKey:o},t.map((e=>e.layer.layerId))));for(const s of t)A(s.layer,s.layerJSON,l);return l}async function T(e,t,r$1){e||={},e.layers||=[],e.tables||=[];const{url:a,customParameters:o,apiKey:l}=t,{serviceJSON:s,layersJSON:n}=await r(a,{customParameters:o,apiKey:l}),u=$(e.layers,s.layers,r$1),p=$(e.tables,s.tables,r$1);e.layers=u.itemResources,e.tables=p.itemResources;const c=[...u.added,...p.added],d=n?[...n.layers,...n.tables]:[];return await x(e,c,a,d),e}function $(t,r,a$1){const o=a(t,r,((e,t)=>e.id===t.id));t=t.filter((e=>!o.removed.some((t=>t.id===e.id))));const l=o.added.map((({id:e})=>({id:e})));return l.forEach((({id:e})=>{t.push({id:e});})),{itemResources:t,added:l.filter((({id:e})=>!a$1.includes(e)))}}async function x(e,t,r,a){const l=t.map((({id:e})=>new Be({url:r,layerId:e,sourceJSON:a.find((({id:t})=>t===e))})));await j$1(l.map((e=>e.load()))),l.forEach((t=>{const{layerId:r,loaded:a,defaultPopupTemplate:o}=t;if(!a||null==o)return;A(t,{id:r,popupInfo:o.toJSON()},e);}));}function A(e,t,r){e.isTable?U(r.tables,t):U(r.layers,t);}function U(e,t){if(!e)return;const r=e.findIndex((({id:e})=>e===t.id));-1===r?e.push(t):e[r]=t;}function K(e){const{portalItem:t}=e;return d(e)&&!e.dynamicDataSource&&!!t?.loaded&&t.type===b}async function F(e){if(!e?.length)throw new s$1("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(e.map((e=>e.load())));for(const o of e)if(!K(o))throw new s$1("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${I(o,"does not conform")}`,{layer:o});const r=e.map((e=>e.portalItem.id));if(new Set(r).size>1)throw new s$1("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const a=e.map((e=>e.layerId));if(new Set(a).size!==a.length)throw new s$1("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function R(e,t){let r=x$1.from(t);return r.id&&(r=r.clone(),r.id=null),r.type??=b,r.portal??=j$2.getDefault(),S(e,r),r}async function D(e,t){const{url:r,layerId:a,title:o,fullExtent:l$1,isTable:s}=e,i$1=p$1(r),u$1=null!=i$1&&"FeatureServer"===i$1.serverType;t.url=u$1?r:`${r}/${a}`,t.title||=o,t.extent=null,s||null==l$1||(t.extent=await a$1(l$1)),u(t,l.METADATA),u(t,l.MULTI_LAYER),i(t,l.SINGLE_LAYER),s&&i(t,l.TABLE),J(t);}async function q(e,t,r){const a=e.portal;await(a?.signIn()),await(a?.user?.addItem({item:e,data:t,folder:r?.folder}));}const z=k(C);async function C(e,t){await g(e),N(e);const r=e.portalItem,a=o(r),o$1=await L(e,a,t),s=await O(r,[{layer:e,layerJSON:o$1}]);return J(r),await r.update({data:s}),i$1(a),r}const M=k((async(e,t)=>{await F(e);const r=e[0].portalItem,a=o(r),o$1=await Promise.all(e.map((e=>L(e,a,t)))),s=await O(r,e.map(((e,t)=>({layer:e,layerJSON:o$1[t]}))));return J(r),await r.update({data:s}),await Promise.all(e.slice(1).map((e=>e.portalItem.reload()))),i$1(a),r.clone()})),Y=k(_);async function _(e,t,r){await g(e);const a=R(e,t),o$1=o(a),s=P({layer:e,layerJSON:await L(e,o$1,r)});return await D(e,a),await q(a,s,r),e.portalItem=a,i$1(o$1),a}

export { z as save, M as saveAll, Y as saveAs };

//# sourceMappingURL=featureLayerUtils-eea892f3.js.map