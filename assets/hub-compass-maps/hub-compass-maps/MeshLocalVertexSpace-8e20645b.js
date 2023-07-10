import { gx as A, gy as s, cU as i, cV as l, a1 as e$1, cW as o$1, a3 as a$1, l as n$1, a9 as x, ad as r, a2 as y$1 } from './hub-compass-map-f4225e12.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function t(n,t=!1){return n<=A?t?new Array(n).fill(0):new Array(n):new Float64Array(n)}function e(t){return (s(t)?t.length:t.byteLength/8)<=A?Array.from(t):new Float64Array(t)}function a(r,n,t){return Array.isArray(r)?r.slice(n,n+t):r.subarray(n,n+t)}function o(r,n){for(let t=0;t<n.length;++t)r[t]=n[t];return r}function y(r){return Array.isArray(r)?new Float64Array(r):r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let c=class extends(i(l)){constructor(){super({}),this.type="georeferenced",this.isRelative=!1,this.isGeoreferenced=!0;}};e$1([o$1({georeferenced:"georeferenced"},{readOnly:!0})],c.prototype,"type",void 0),c=e$1([a$1("esri.geometry.support.MeshGeoreferencedVertexSpace")],c);const p=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let n=class extends(i(l)){constructor(o){super(o),this.type="local",this.isRelative=!0,this.isGeoreferenced=!1,this.origin=n$1();}getOriginPoint(o){const[r,e,s]=this.origin;return new x({x:r,y:e,z:s,spatialReference:o})}setOriginFormPoint({x:o,y:r$1,z:e}){this.origin=r(o,r$1,e??0);}};e$1([o$1({local:"local"},{readOnly:!0})],n.prototype,"type",void 0),e$1([y$1({type:[Number],nonNullable:!0,json:{write:!0}})],n.prototype,"origin",void 0),n=e$1([a$1("esri.geometry.support.MeshLocalVertexSpace")],n);const m=n;

export { a, e, m, o, p, t, y };

//# sourceMappingURL=MeshLocalVertexSpace-8e20645b.js.map