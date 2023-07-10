import { bO as a, bT as n, mj as s, a1 as e, a3 as a$1 } from './hub-compass-map-4d751555.js';
import { b as c$1 } from './definitions-780d8bac.js';
import { p as p$1 } from './BaseProcessor-6edaded4.js';
import { o } from './tileUtils-c39d05c6.js';
import './index-d436d5f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class d{constructor(e,t){this.offset=e,this.extent=t;}}function l(e){const t=e.key,s=new Map,r=256,i=c$1,a=e.tileInfoView.tileInfo.isWrappable;return s.set(o(t,-1,-1,a).id,new d([-i,-i],[i-r,i-r,i,i])),s.set(o(t,0,-1,a).id,new d([0,-i],[0,i-r,i,i])),s.set(o(t,1,-1,a).id,new d([i,-i],[0,i-r,r,i])),s.set(o(t,-1,0,a).id,new d([-i,0],[i-r,0,i,i])),s.set(o(t,1,0,a).id,new d([i,0],[0,0,r,i])),s.set(o(t,-1,1,a).id,new d([-i,i],[i-r,0,i,r])),s.set(o(t,0,1,a).id,new d([0,i],[0,0,i,r])),s.set(o(t,1,1,a).id,new d([i,i],[0,0,r,r])),s}let p=class extends p$1{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map;}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]);}async update(e,t){const s=t.schema.processors[0];if("heatmap"!==s.type)return;a(this._schema,s)&&(e.mesh=!0,this._schema=s);}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id);}onTileClear(e){const t={clear:!0};return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}async onTileMessage(e,s$1,r){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const o=this._tileKeyToFeatureSets.get(e.key.id);if(o&&null!=s$1.addOrUpdate&&s$1.addOrUpdate.hasFeatures&&o.set(s$1.addOrUpdate.instance,s$1),s$1.end){const s$1=[],o=l(e);this._tileKeyToFeatureSets.forEach(((r,i)=>{if(i===e.key.id)r.forEach((e=>n(e.addOrUpdate,(e=>s$1.push(e)))));else if(o.has(i)){const e=o.get(i),[a,n$1]=e.offset;r.forEach((e=>n(e.addOrUpdate,(e=>{const t=e.transform(a,n$1,1,1);s$1.push(t);}))));}}));const a=s(s$1,this._schema.mesh,512,512),n$1={tileKey:e.key.id,intensityInfo:a},d=[a.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",n$1,{...r,transferList:d})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};p=e([a$1("esri.views.2d.layers.features.processors.HeatmapProcessor")],p);const c=p;

export default c;

//# sourceMappingURL=HeatmapProcessor-ba37cb55.js.map