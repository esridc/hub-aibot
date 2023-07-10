import { H as l$1, f as s, a1 as e, a2 as y$1, fg as b, a3 as a, W as d$1, s as s$1, J as l$2, cs as M } from './hub-compass-map-4d751555.js';
import { a as a$2 } from './BitmapContainer-acc35c22.js';
import { f, d } from './LayerView-686abf7a.js';
import { v } from './ExportStrategy-51cdcc87.js';
import { a as a$1 } from './RefreshableLayerView-a7422109.js';
import { l } from './ExportWMSImageParameters-680cd685.js';
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
const i=i=>{let m=class extends i{initialize(){this.exportImageParameters=new l({layer:this.layer});}destroy(){this.exportImageParameters=l$1(this.exportImageParameters);}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:o}=t;if(!o)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const s$1=this.createFetchPopupFeaturesQuery(e);if(!s$1)return Promise.resolve([]);const{extent:p,width:a,height:i,x:m,y:n}=s$1;if(!(p&&a&&i))throw new s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:a,height:i});return t.fetchFeatureInfo(p,a,i,m,n)}};return e([y$1()],m.prototype,"exportImageParameters",void 0),e([y$1({readOnly:!0})],m.prototype,"exportImageVersion",null),e([y$1()],m.prototype,"layer",void 0),e([y$1(b)],m.prototype,"timeExtent",void 0),m=e([a("esri.layers.mixins.WMSLayerView")],m),m};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let y=class extends(i(a$1(f(d)))){constructor(){super(...arguments),this.bitmapContainer=new a$2;}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{d$1(e)||s$1.getLogger(this).error(e);}));}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new a$2,this.container.addChild(this.bitmapContainer),this.strategy=new v({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(l$2((()=>this.exportImageVersion),(()=>this.requestUpdate())));}detach(){this.strategy=l$1(this.strategy),this.container.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:i,y:s}=e,{spatialReference:a}=t;let o,n=0,m=0;if(r.children.some((e=>{const{width:t,height:r,resolution:h,x:c,y:d}=e,u=c+h*t,y=d-h*r;return i>=c&&i<=u&&s<=d&&s>=y&&(o=new M({xmin:c,ymin:y,xmax:u,ymax:d,spatialReference:a}),n=t,m=r,!0)})),!o)return null;const h=o.width/n,c=Math.round((i-o.xmin)/h),d=Math.round((o.ymax-s)/h);return {extent:o,width:n,height:m,x:c,y:d}}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...i})}};e([y$1()],y.prototype,"strategy",void 0),e([y$1()],y.prototype,"updating",void 0),y=e([a("esri.views.2d.layers.WMSLayerView2D")],y);const g=y;

export default g;

//# sourceMappingURL=WMSLayerView2D-7e7a95e0.js.map