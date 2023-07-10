import { s as s$1, f as s$2, ap as i, cD as b, ay as a$1 } from './hub-compass-map-68308039.js';
import { z, a as v, n } from './timeSupport-cb96dffc.js';
import { I } from './FeatureStore2D-3d435a2c.js';
import './index-d436d5f8.js';
import './featureConversionUtils-e451106b.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './projectionSupport-1d172051.js';
import './json-4697dff9.js';
import './CircularArray-00e66d79.js';
import './ComputedAttributeStorage-bafdb263.js';
import './arcadeTimeUtils-f8caff3d.js';
import './executionError-5ec41157.js';
import './definitions-6e5909d3.js';
import './visualVariablesUtils-99504d10.js';
import './color-e6670fe4.js';
import './enums-63fd0640.js';
import './enums-f1bebe6f.js';
import './VertexElementDescriptor-33a64685.js';
import './number-4aaa92a3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const t=s$1.getLogger("esri.views.2d.layers.features.support.whereUtils"),a={getAttribute:(e,r)=>e.field(r)};async function s(r,s){const n=await import('./WhereClause-d316cbe1.js').then(function (n) { return n.W; });try{const o=n.WhereClause.create(r,s);if(!o.isStandardized){const r=new s$2("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",o);t.error(r);}return e=>{const r=e.readArcadeFeature();return o.testFeature(r,a)}}catch(o){return t.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),e=>!0}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const d=1,m=2;class _{constructor(t){this._geometryBounds=i(),this._idToVisibility=new Map,this._serviceInfo=t;}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach(((t,e)=>{this._idToVisibility.set(e,0);}));}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,d);}setTrue(t){const e=[],i=[],s=new Set(t);return this._idToVisibility.forEach(((t,r)=>{const o=!!(this._idToVisibility.get(r)&d),h=s.has(r);!o&&h?e.push(r):o&&!h&&i.push(r),this._idToVisibility.set(r,h?d|m:0);})),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r}=this;return b.fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r})}async update(t,e){this._hash=JSON.stringify(t);const i=await z(t,null,e);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)]);}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await s(t.where,this._serviceInfo.fieldsIndex),this.where=t.where;}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds;}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",o=await v(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);a$1(this._geometryBounds,e),this._spatialQueryOperator=o,this.geometry=e,this.spatialRel=i;}_setTimeFilter(i){if(this.timeExtent=this._timeOperator=null,i&&i.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=i.timeExtent,this._timeOperator=n(this._serviceInfo.timeInfo,i.timeExtent,I);else {const s=new s$2("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",i.timeExtent);s$1.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(s);}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return !this.where||this._clause(t)}_filterById(t){return (!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return !0;const e=t.readHydratedGeometry();return !!e&&this._spatialQueryOperator(e)}_filterByTime(t){return null==this._timeOperator||this._timeOperator(t)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach(((e,i)=>{e&d||(this._idToVisibility.set(i,d),t.push(i));})),t}}

export default _;

//# sourceMappingURL=FeatureFilter-04cba638.js.map