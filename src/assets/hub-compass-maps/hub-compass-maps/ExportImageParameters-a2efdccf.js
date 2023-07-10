import { $ as a, a0 as m$1, bP as n$2, a1 as e, a2 as y$1, fg as b, a3 as a$1 } from './hub-compass-map-68308039.js';
import { n } from './floorFilterUtils-29b268fd.js';
import { n as n$1 } from './sublayerUtils-101a4ab2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const y={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let m=class extends(a(m$1)){constructor(e){super(e),this.floors=null,this.scale=0;}destroy(){this.layer=null;}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=n(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&n$1(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(y[e.propertyName])))],"layer"));}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,r=this.visibleSublayers.filter((r=>null!=r.definitionExpression||e&&null!=r.floorInfo));return r.length?JSON.stringify(r.reduce(((e,r)=>{const s=n(this.floors,r),i=n$2(s,r.definitionExpression);return null!=i&&(e[r.id]=i),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,s=r=>{const t=this.scale,i=0===t,o=0===r.minScale||t<=r.minScale,a=0===r.maxScale||t>=r.maxScale;r.visible&&(i||o&&a)&&(r.sublayers?r.sublayers.forEach(s):e.unshift(r));};r&&r.forEach(s);const t=this._get("visibleSublayers");return !t||t.length!==e.length||t.some(((r,s)=>e[s]!==r))?e:t}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};e([y$1({readOnly:!0})],m.prototype,"dynamicLayers",null),e([y$1()],m.prototype,"floors",void 0),e([y$1({readOnly:!0})],m.prototype,"hasDynamicLayers",null),e([y$1()],m.prototype,"layer",null),e([y$1({readOnly:!0})],m.prototype,"layers",null),e([y$1({readOnly:!0})],m.prototype,"layerDefs",null),e([y$1({type:Number})],m.prototype,"scale",void 0),e([y$1(b)],m.prototype,"timeExtent",void 0),e([y$1({readOnly:!0})],m.prototype,"version",null),e([y$1({readOnly:!0})],m.prototype,"visibleSublayers",null),m=e([a$1("esri.layers.mixins.ExportImageParameters")],m);

export { m };

//# sourceMappingURL=ExportImageParameters-a2efdccf.js.map