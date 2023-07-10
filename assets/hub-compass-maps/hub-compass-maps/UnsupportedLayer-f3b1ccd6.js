import { gr as j, gs as O, dc as b, ly as v, f as s, a1 as e, a2 as y, a3 as a } from './hub-compass-map-4d751555.js';
import './index-d436d5f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let c=class extends(j(O(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unsupported";}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{v((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unsupported layer type";r&&(s$1+=" "+r),o(new s("layer:unsupported-layer-type",s$1,{layerType:r}));}));})));}read(r,e){const o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),super.read(o,e);}write(r,e){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};e([y({readOnly:!0})],c.prototype,"resourceInfo",void 0),e([y({type:["show","hide"]})],c.prototype,"listMode",void 0),e([y({json:{read:!1},readOnly:!0,value:"unsupported"})],c.prototype,"type",void 0),c=e([a("esri.layers.UnsupportedLayer")],c);const u=c;

export default u;

//# sourceMappingURL=UnsupportedLayer-f3b1ccd6.js.map