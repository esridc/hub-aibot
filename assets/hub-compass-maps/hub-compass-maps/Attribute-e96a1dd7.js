import { L as i$1 } from './hub-compass-map-f4225e12.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var n;function e(t){switch(t){case"multiply":default:return n.Multiply;case"ignore":return n.Ignore;case"replace":return n.Replace;case"tint":return n.Tint}}function r(e,r,a){if(null==e||r===n.Ignore)return a[0]=255,a[1]=255,a[2]=255,void(a[3]=255);const c=i$1(Math.round(e[3]*i),0,i),p=0===c||r===n.Tint?0:r===n.Replace?u:l;a[0]=i$1(Math.round(e[0]*o),0,o),a[1]=i$1(Math.round(e[1]*o),0,o),a[2]=i$1(Math.round(e[2]*o),0,o),a[3]=c+p;}!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint";}(n||(n={}));const o=255,i=85,u=i,l=2*i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
class s{constructor(s,t,i=!1,e=t){this.data=s,this.size=t,this.exclusive=i,this.stride=e;}}

export { e, n, s };

//# sourceMappingURL=Attribute-e96a1dd7.js.map