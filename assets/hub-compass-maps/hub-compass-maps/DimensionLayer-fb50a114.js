import { jx as u$2, iQ as l$1, aX as h, a1 as e, a2 as y$1, eE as T, bD as o, bk as e$1, a3 as a$1, a9 as x, dK as s, dw as s$1, jy as a$2, cL as V, J as l$2, eK as w, eL as n, jz as ln, cs as M, fo as t$1, gq as c$2, gs as O, dc as b, eS as r$1 } from './hub-compass-map-4d751555.js';
import { c as c$1 } from './Analysis-8edbe7b2.js';
import './index-d436d5f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let c=class extends(u$2(l$1)){constructor(o){super(o),this.type="simple",this.color=new h("black"),this.lineSize=2,this.fontSize=10,this.textColor=new h("black"),this.textBackgroundColor=new h([255,255,255,.6]);}};e([y$1({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),e([y$1({type:h,nonNullable:!0,json:{type:[T],write:{isRequired:!0}}})],c.prototype,"color",void 0),e([y$1({type:Number,cast:o,nonNullable:!0,range:{min:e$1(1)},json:{write:{isRequired:!0}}})],c.prototype,"lineSize",void 0),e([y$1({type:Number,cast:o,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"fontSize",void 0),e([y$1({type:h,nonNullable:!0,json:{type:[T],write:{isRequired:!0}}})],c.prototype,"textColor",void 0),e([y$1({type:h,nonNullable:!0,json:{type:[T],write:{isRequired:!0}}})],c.prototype,"textBackgroundColor",void 0),c=e([a$1("esri.analysis.DimensionSimpleStyle")],c);const a=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var t;!function(t){t.Horizontal="horizontal",t.Vertical="vertical",t.Direct="direct";}(t||(t={}));const r=[t.Horizontal,t.Vertical,t.Direct];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let l=class extends(u$2(l$1)){constructor(o){super(o),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=t.Direct,this.offset=0,this.orientation=0;}};e([y$1({type:["length"],json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),e([y$1({type:x,json:{write:!0}})],l.prototype,"startPoint",void 0),e([y$1({type:x,json:{write:!0}})],l.prototype,"endPoint",void 0),e([y$1({type:r,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"measureType",void 0),e([y$1({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"offset",void 0),e([y$1({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),s((o=>s$1.normalize(a$2(o),0,!0)))],l.prototype,"orientation",void 0),l=e([a$1("esri.analysis.LengthDimension")],l);const u$1=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const d$1=V.ofType(u$1);let y=class extends c$1{constructor(e){super(e),this.type="dimension",this.style=new a,this.extent=null;}initialize(){this.addHandles(l$2((()=>this._computeExtent()),(e=>{null!=e&&null!=e.pending||this._set("extent",null!=e?e.extent:null);}),w));}get dimensions(){return this._get("dimensions")||new d$1}set dimensions(e){this._set("dimensions",n(e,this.dimensions,d$1));}get spatialReference(){for(const e of this.dimensions){if(null!=e.startPoint)return e.startPoint.spatialReference;if(null!=e.endPoint)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce(((e,t)=>(e.push(t.startPoint,t.endPoint),e)),[])}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(null==e)return {pending:null,extent:null};const t=[];for(const s of this.dimensions)null!=s.startPoint&&t.push(s.startPoint),null!=s.endPoint&&t.push(s.endPoint);const n=ln(t,e);if(null!=n.pending)return {pending:n.pending,extent:null};let o=null;return null!=n.geometries&&(o=n.geometries.reduce(((e,t)=>null==e?null!=t?M.fromPoint(t):null:null!=t?e.union(M.fromPoint(t)):e),null)),{pending:null,extent:o}}clear(){this.dimensions.removeAll();}};e([y$1({type:["dimension"]})],y.prototype,"type",void 0),e([y$1({cast:t$1,type:d$1,nonNullable:!0})],y.prototype,"dimensions",null),e([y$1({readOnly:!0})],y.prototype,"spatialReference",null),e([y$1({types:{key:"type",base:null,typeMap:{simple:a}},nonNullable:!0})],y.prototype,"style",void 0),e([y$1({value:null,readOnly:!0})],y.prototype,"extent",void 0),e([y$1({readOnly:!0})],y.prototype,"requiredPropertiesForEditing",null),y=e([a$1("esri.analysis.DimensionAnalysis")],y);const f=y;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let u=class extends(c$2(O(b))){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new f,this.opacity=1,e){const{source:s,style:r}=e;s&&r&&(s.style=r);}}initialize(){this.addHandles([l$2((()=>this.source),((e,s)=>{null!=s&&s.parent===this&&(s.parent=null),null!=e&&(e.parent=this);}),w)]);}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e;}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new f);}get analysis(){return this.source}set analysis(e){this.source=e;}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e;}writeDimensions(e,s,r,t){s.dimensions=e.filter((({startPoint:e,endPoint:s})=>null!=e&&null!=s)).map((e=>e.toJSON(t))).toJSON();}};e([y$1({json:{read:!1},readOnly:!0})],u.prototype,"type",void 0),e([y$1({type:["ArcGISDimensionLayer"]})],u.prototype,"operationalLayerType",void 0),e([y$1({nonNullable:!0})],u.prototype,"source",void 0),e([y$1({readOnly:!0})],u.prototype,"spatialReference",null),e([y$1({types:{key:"type",base:null,typeMap:{simple:a}},json:{write:{ignoreOrigin:!0}}})],u.prototype,"style",null),e([y$1({readOnly:!0})],u.prototype,"fullExtent",null),e([y$1({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],u.prototype,"opacity",void 0),e([y$1({type:["show","hide"]})],u.prototype,"listMode",void 0),e([y$1({type:V.ofType(u$1),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],u.prototype,"dimensions",null),e([r$1("web-scene","dimensions")],u.prototype,"writeDimensions",null),u=e([a$1("esri.layers.DimensionLayer")],u);const d=u;

export default d;

//# sourceMappingURL=DimensionLayer-fb50a114.js.map