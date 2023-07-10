import { fI as i, _ as n, gO as Z$1, s, f as s$1, ap as i$1 } from './hub-compass-map-68308039.js';
import { y as yt } from './featureConversionUtils-e451106b.js';
import { o as o$1 } from './BoundsStore-56b9a97b.js';
import { t as t$1 } from './projectionSupport-1d172051.js';
import { a as t, t as t$2 } from './OptimizedGeometry-d99be84d.js';
import { Z } from './timeSupport-cb96dffc.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t$1,r)=>new t(r,t$1.attributes,null,t$1.objectId),getGeometry:t=>t.geometry,getCentroid:(e,o)=>(null==e.centroid&&(e.centroid=t$1(new t$2,e.geometry,o.hasZ,o.hasM)),e.centroid)};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const h=i();class m{constructor(e){this.geometryInfo=e,this._boundsStore=new o$1,this._featuresById=new Map,this._markedIds=new Set,this.events=new n,this.featureAdapter=o;}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{null!=t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length);})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(null==this.fullBounds)return null;const[t,s,r,o]=this.fullBounds;return {xmin:t,ymin:s,xmax:r,ymax:o,spatialReference:Z(e)}}add(e){this._add(e),this._emitChanged();}addMany(e){for(const t of e)this._add(t);this._emitChanged();}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged();}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e);}this._emitChanged();}forEachBounds(e,t){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t(Z$1(h,e));}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)));}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e));}));}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear();}sweep(){let e=!1;this._featuresById.forEach(((t,s)=>{this._markedIds.has(s)||(e=!0,this._remove(t));})),this._markedIds.clear(),e&&this._emitChanged();}_emitChanged(){this.events.emit("changed",void 0);}_add(t){if(!t)return;const r=t.objectId;if(null==r)return void s.getLogger("esri.layers.graphics.data.FeatureStore").error(new s$1("featurestore:invalid-feature","feature id is missing",{feature:t}));const o=this._featuresById.get(r);let a;if(this._markedIds.add(r),o?(t.displayId=o.displayId,a=this._boundsStore.get(r),this._boundsStore.delete(r)):null!=this.onFeatureAdd&&this.onFeatureAdd(t),null==t.geometry||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(r,null),void this._featuresById.set(r,t);a=yt(null!=a?a:i$1(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=a&&this._boundsStore.set(r,a),this._featuresById.set(r,t);}_remove(e){null!=this.onFeatureRemove&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}}

export { m };

//# sourceMappingURL=FeatureStore-257f411f.js.map