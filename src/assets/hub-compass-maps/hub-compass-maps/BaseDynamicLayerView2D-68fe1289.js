import { W as d$1, s, a1 as e, a2 as y, a3 as a$2 } from './hub-compass-map-f4225e12.js';
import { a as a$1 } from './BitmapContainer-ca7a4109.js';
import { f, d } from './LayerView-d595c11d.js';
import { v } from './ExportStrategy-2224a780.js';
import { a } from './RefreshableLayerView-5d983d04.js';
import './index-d436d5f8.js';
import './WGLContainer-fc72d08f.js';
import './definitions-2a5e2c90.js';
import './VertexArrayObject-2a8cdbad.js';
import './Texture-52798ec4.js';
import './enums-f1bebe6f.js';
import './VertexElementDescriptor-33a64685.js';
import './color-07edd940.js';
import './enums-63fd0640.js';
import './number-4aaa92a3.js';
import './ProgramTemplate-49989acd.js';
import './GeometryUtils-e7f92760.js';
import './alignmentUtils-63467b02.js';
import './StyleDefinition-4cf61a7b.js';
import './config-78edfbcd.js';
import './Container-a2c22c83.js';
import './earcut-bde06d16.js';
import './featureConversionUtils-aa77f433.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './Bitmap-5b32a246.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let h=class extends(a(f(d))){update(t){this._strategy.update(t).catch((t=>{d$1(t)||s.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a$1,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([a$2("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const c=h;

export default c;

//# sourceMappingURL=BaseDynamicLayerView2D-68fe1289.js.map