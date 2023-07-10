import { a0 as m, dh as o, fN as tn, bN as j$1, a1 as e$1, a2 as y, a3 as a, l as n, q as o$1, fO as S, fP as o$2, Y as r, bK as s, bL as i$2, fQ as c$1 } from './hub-compass-map-68308039.js';
import { c } from './normalizeUtilsSync-4f2d25b3.js';
import { e as e$2 } from './mat3f64-9c2c37f3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
let i$1=class extends m{constructor(o){super(o);}get bounds(){const o$1=this.coords;return null==o$1||null==o$1.extent?null:o(o$1.extent)}get coords(){const o=this.element.georeference?.coords;return tn(o,this.spatialReference).geometry}get normalizedCoords(){return j$1.fromJSON(c(this.coords))}get normalizedBounds(){const o$1=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=o$1?o(o$1):null}};e$1([y()],i$1.prototype,"spatialReference",void 0),e$1([y()],i$1.prototype,"element",void 0),e$1([y()],i$1.prototype,"bounds",null),e$1([y()],i$1.prototype,"coords",null),e$1([y()],i$1.prototype,"normalizedCoords",null),e$1([y()],i$1.prototype,"normalizedBounds",null),i$1=e$1([a("esri.layers.support.MediaElementView")],i$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const f=n(),i=e$2(),e=e$2(),p=e$2();function h(t,r$1,n){return o$1(f,r$1[0],r$1[1],1),S(f,f,o$2(i,n)),0===f[2]?r(t,f[0],f[1]):r(t,f[0]/f[2],f[1]/f[2])}function j(s,n,o){return k(e,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),k(p,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),i$2(s,c$1(e,e),p),0!==s[8]&&(s[0]/=s[8],s[1]/=s[8],s[2]/=s[8],s[3]/=s[8],s[4]/=s[8],s[5]/=s[8],s[6]/=s[8],s[7]/=s[8],s[8]/=s[8]),s}function k(o,c,u,e,p,h,j,k,v){s(o,c,e,h,u,p,j,1,1,1),o$1(f,k,v,1),c$1(i,o);const[x,b,d]=S(f,f,o$2(i,i));return s(i,x,0,0,0,b,0,0,0,d),i$2(o,i,o)}

export { h, i$1 as i, j };

//# sourceMappingURL=perspectiveUtils-24213c99.js.map