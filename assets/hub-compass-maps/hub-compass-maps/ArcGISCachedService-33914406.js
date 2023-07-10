import { fk as j, a1 as e$1, a2 as y, eR as o, aE as f, a3 as a } from './hub-compass-map-4d751555.js';
import { e } from './TileInfoTilemapCache-65d72248.js';
import { T } from './TilemapCache-46d492ae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const p=p=>{let n=class extends p{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null;}destroy(){this.tilemapCache?.destroy?.();}readMinScale(e,o){return null!=o.minLOD&&null!=o.maxLOD?e:0}readMaxScale(e,o){return null!=o.minLOD&&null!=o.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e$1,o,r){const t=o.capabilities?.includes("Tilemap");let{minLOD:a,maxLOD:p,minScale:n,maxScale:c}=o;if(null==a&&null==p&&0!==n&&0!==c){const e=e=>Math.round(1e4*e)/1e4;n=e(n||o.tileInfo.lods[0].scale),c=e(c||o.tileInfo.lods[o.tileInfo.lods.length-1].scale);for(const r of o.tileInfo.lods){const o=e(r.scale);a=o>=n?r.level:a,p=o>=c?r.level:p;}}if(t)return new T({layer:this,minLOD:a,maxLOD:p});if(o.tileInfo){const e$1=new j;return e$1.read(o.tileInfo,r),new e(e$1,a,p)}return null}};return e$1([y({json:{read:{source:"copyrightText"}}})],n.prototype,"copyright",void 0),e$1([y()],n.prototype,"minScale",void 0),e$1([o("service","minScale")],n.prototype,"readMinScale",null),e$1([y()],n.prototype,"maxScale",void 0),e$1([o("service","maxScale")],n.prototype,"readMaxScale",null),e$1([y({type:f})],n.prototype,"spatialReference",void 0),e$1([y({readOnly:!0})],n.prototype,"supportsBlankTile",null),e$1([y({type:j})],n.prototype,"tileInfo",void 0),e$1([y()],n.prototype,"tilemapCache",void 0),e$1([o("service","tilemapCache",["capabilities","tileInfo"])],n.prototype,"readTilemapCache",null),e$1([y()],n.prototype,"version",void 0),n=e$1([a("esri.layers.mixins.ArcGISCachedService")],n),n};

export { p };

//# sourceMappingURL=ArcGISCachedService-33914406.js.map