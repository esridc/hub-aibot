import { W as d$1, s, a1 as e, a2 as y, a3 as a$2 } from './hub-compass-map-4d751555.js';
import { a as a$1 } from './BitmapContainer-acc35c22.js';
import { f, d } from './LayerView-686abf7a.js';
import { v } from './ExportStrategy-51cdcc87.js';
import { a } from './RefreshableLayerView-a7422109.js';
import './index-d436d5f8.js';
import './WGLContainer-0eba88c0.js';
import './definitions-780d8bac.js';
import './VertexArrayObject-e8140cf7.js';
import './Texture-f70323fa.js';
import './enums-f1bebe6f.js';
import './VertexElementDescriptor-33a64685.js';
import './color-c09f883e.js';
import './enums-63fd0640.js';
import './number-4aaa92a3.js';
import './ProgramTemplate-f0091ff6.js';
import './GeometryUtils-ae7c7d19.js';
import './alignmentUtils-63467b02.js';
import './StyleDefinition-4cf61a7b.js';
import './config-78edfbcd.js';
import './Container-d1c5f8b6.js';
import './earcut-275e4de1.js';
import './featureConversionUtils-80dbaef5.js';
import './OptimizedGeometry-d99be84d.js';
import './OptimizedFeatureSet-c30cfe93.js';
import './Bitmap-f0265bb5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let h=class extends(a(f(d))){update(t){this._strategy.update(t).catch((t=>{d$1(t)||s.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a$1,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([a$2("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const c=h;

export default c;

//# sourceMappingURL=BaseDynamicLayerView2D-ae69fa96.js.map