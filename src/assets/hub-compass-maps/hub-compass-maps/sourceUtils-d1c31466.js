import { i3 as me, i4 as pe, i5 as _e, e0 as se, gP as ae, by as s } from './hub-compass-map-f4225e12.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class o{constructor(){this.code=null,this.description=null;}}class l{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e;}}function u(e){return new l(e)}class a{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e;}}function c(e){return new a(e)}const f=new Set;function d(e,i,r,s=!1,o){f.clear();for(const l in r){const a=e.get(l);if(!a)continue;const c=r[l],d=m(a,c);if(d!==c&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:c,sanitizedValue:d}}),f.add(a.name),a&&(s||a.editable)){const e=pe(a,d);if(e)return u(_e(e,a,d));i[a.name]=d;}}for(const t of e?.requiredFields??[])if(!f.has(t.name))return u(`missing required field "${t.name}"`);return null}function m(e,t){let n=t;return "string"==typeof t&&se(e)?n=parseFloat(t):null!=t&&ae(e)&&"string"!=typeof t&&(n=String(t)),me(n)}let p;function h(t,n){if(!t||!s(n))return t;if("rings"in t||"paths"in t){if(null==p)throw new TypeError("geometry engine not loaded");return p.simplify(n,t)}return t}async function g(){return null==p&&(p=await import('./geometryEngineJSON-dda25823.js')),p}async function y(t,n){!s(t)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n||await g();}

export { c, d, h, u, y };

//# sourceMappingURL=sourceUtils-d1c31466.js.map