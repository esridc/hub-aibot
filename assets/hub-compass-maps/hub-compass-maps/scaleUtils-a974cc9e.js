import { ca as H, eY as l } from './hub-compass-map-f4225e12.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const e=96;function i(i,r){const o=r||i.extent,c=i.width,d=H(o&&o.spatialReference);return o&&c?o.width/c*d*l*e:0}function r(i,r){return i/(H(r)*l*e)}function o(t){return t/(l*e)}function c(i,r){return i*(H(r)*l*e)}function d(t,n){const e=t.extent,i=t.width-(t.padding?t.padding.left+t.padding.right:0),o=r(n,e.spatialReference);return e.clone().expand(o*i/e.width)}

export { i, r };

//# sourceMappingURL=scaleUtils-a974cc9e.js.map