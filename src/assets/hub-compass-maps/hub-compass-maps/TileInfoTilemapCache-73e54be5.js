import { gw as $, f as s, W as d } from './hub-compass-map-68308039.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class e{constructor(l,t=0,i=l.lods[l.lods.length-1].level){this.tileInfo=l,this.minLOD=t,this.maxLOD=i,l.lodAt(t)||(this.minLOD=l.lods[0].level),l.lodAt(i)||(this.maxLOD=l.lods[l.lods.length-1].level);}get effectiveMinLOD(){return this.minLOD??this.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(l,t,i){const e=this.tileInfo?.lodAt(l);return !e||l<this.minLOD||l>this.maxLOD?"unavailable":e.cols&&e.rows?i>=e.cols[0]&&i<=e.cols[1]&&t>=e.rows[0]&&t<=e.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(i,e,o,s$1){await $(s$1);const a=this.getAvailability(i,e,o);if("unavailable"===a)throw new s("tile-map:tile-unavailable","Tile is not available",{level:i,row:e,col:o});return a}async fetchAvailabilityUpsample(l,e,o,s,a){await $(a),s.level=l,s.row=e,s.col=o;const n=this.tileInfo;return n.updateTileInfo(s),this.fetchAvailability(l,e,o,a).catch((l=>{if(d(l))throw l;if(n.upsampleTile(s))return this.fetchAvailabilityUpsample(s.level,s.row,s.col,s,a);throw l}))}}

export { e };

//# sourceMappingURL=TileInfoTilemapCache-73e54be5.js.map