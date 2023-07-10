import { cV as l, ao as v, a1 as e, a2 as y, a3 as a$2, iI as d, cQ as f, eU as i$2, O as j, iJ as o, X as s, f as s$1, c1 as j$1 } from './hub-compass-map-68308039.js';
import './index-d436d5f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let i$1=class extends l{constructor(r){super(r),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null;}toJSON(){const r=this.geometries.map((r=>r.toJSON())),t=this.geometries[0],o={};return o.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),o.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),o.geometries=JSON.stringify({geometryType:v(t),geometries:r}),this.transformation&&(o.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(o.transformForward=this.transformForward),o}};e([y()],i$1.prototype,"geometries",void 0),e([y({json:{read:{source:"outSR"}}})],i$1.prototype,"outSpatialReference",void 0),e([y()],i$1.prototype,"transformation",void 0),e([y()],i$1.prototype,"transformForward",void 0),i$1=e([a$2("esri.rest.support.ProjectParameters")],i$1);const a$1=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const i=d(a$1);async function n$1(o$1,m,n){m=i(m);const u=f(o$1),c={...u.query,f:"json",...m.toJSON()},j$1=m.outSpatialReference,a=v(m.geometries[0]),f$1=i$2(c,n);return j(u.path+"/project",f$1).then((({data:{geometries:r}})=>o(r,a,j$1)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function n(o=null,i){if(s.geometryServiceUrl)return s.geometryServiceUrl;if(!o)throw new s$1("internal:geometry-service-url-not-configured");let n;n="portal"in o?o.portal||j$1.getDefault():o,await n.load({signal:i});const a=n.helperServices?.geometry?.url;if(!a)throw new s$1("internal:geometry-service-url-not-configured");return a}async function a(r,t,a=null,l){const c=await n(a,l),s=new a$1;s.geometries=[r],s.outSpatialReference=t;const m=await n$1(c,s,{signal:l});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new s$1("internal:geometry-service-projection-failed")}

export { n as getGeometryServiceURL, a as projectGeometry };

//# sourceMappingURL=geometryServiceUtils-a339c010.js.map