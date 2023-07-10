import { W as d$1, s, a1 as e, a2 as y, a3 as a$2 } from './hub-compass-map-68308039.js';
import { a as a$1 } from './BitmapContainer-ebaf75e1.js';
import { f, d } from './LayerView-6ca034b7.js';
import { v } from './ExportStrategy-ce93a97d.js';
import { a } from './RefreshableLayerView-10d77e06.js';
import './index-d436d5f8.js';
import './WGLContainer-25c01575.js';
import './definitions-6e5909d3.js';
import './VertexArrayObject-3e0deefe.js';
import './Texture-2136281d.js';
import './enums-f1bebe6f.js';
import './VertexElementDescriptor-33a64685.js';
import './color-e6670fe4.js';
import './enums-63fd0640.js';
import './number-4aaa92a3.js';
import './ProgramTemplate-f235ba4b.js';
import './GeometryUtils-26db2899.js';
import './alignmentUtils-63467b02.js';
import './StyleDefinition-4cf61a7b.js';
import './config-78edfbcd.js';
import './Container-82f058f5.js';
import './earcut-5b80530c.js';
import './featureConversionUtils-e451106b.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './Bitmap-79eabc67.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let h=class extends(a(f(d))){update(t){this._strategy.update(t).catch((t=>{d$1(t)||s.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a$1,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([a$2("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const c=h;

export default c;

//# sourceMappingURL=BaseDynamicLayerView2D-b4f1fc05.js.map