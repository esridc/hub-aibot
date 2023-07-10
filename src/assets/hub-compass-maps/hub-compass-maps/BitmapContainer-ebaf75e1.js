import { i, w } from './WGLContainer-25c01575.js';
import { T } from './color-e6670fe4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class a extends i{constructor(){super(...arguments),this._hasCrossfade=!1;}get requiresDedicatedFBO(){return this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade();}prepareRenderPasses(r){const a=r.registerRenderPass({name:"bitmap",brushes:[w.bitmap],target:()=>this.children,drawPhase:T.MAP});return [...super.prepareRenderPasses(r),a]}_manageFade(){this.children.reduce(((e,s)=>e+(s.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1);}}

export { a };

//# sourceMappingURL=BitmapContainer-ebaf75e1.js.map