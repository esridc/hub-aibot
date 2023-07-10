import { m as e, ap as i$1 } from './hub-compass-map-68308039.js';
import { T } from './Bitmap-79eabc67.js';
import { r as r$1 } from './TiledDisplayObject-99ff23bf.js';
import { w } from './WGLContainer-25c01575.js';
import { T as T$1 } from './color-e6670fe4.js';
import { i } from './TileContainer-4d717575.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class r extends r$1{constructor(t,s,r,i,a,n,m=null){super(t,s,r,i,a,n),this.bitmap=new T(m),this.bitmap.coordScale=[a,n],this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy();}beforeRender(t){super.beforeRender(t),this.bitmap.beforeRender(t);}afterRender(t){super.afterRender(t),this.bitmap.afterRender(t);}set stencilRef(t){this.bitmap.stencilRef=t;}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return {dvs:e(),tileMat3:e()}}setTransform(t){super.setTransform(t),this.bitmap.transforms.dvs=this.transforms.dvs;}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap&&(this.bitmap.stage=null);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class n extends i{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(r$1){const t=this._tileInfoView.getTileBounds(i$1(),r$1),s=this._tileInfoView.getTileResolution(r$1.level),[n,o]=this._tileInfoView.tileInfo.size;return new r(r$1,s,t[0],t[3],n,o)}prepareRenderPasses(e){const i=e.registerRenderPass({name:"bitmap (tile)",brushes:[w.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:T$1.MAP});return [...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===T$1.MAP&&super.doRender(e);}}

export { n };

//# sourceMappingURL=BitmapTileContainer-67e7a717.js.map