/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function n(){return new Float32Array(3)}function t(n){const t=new Float32Array(3);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function r(n,t,r){const e=new Float32Array(3);return e[0]=n,e[1]=t,e[2]=r,e}function e(n,t){return new Float32Array(n,t,3)}function a(){return n()}function o(){return r(1,1,1)}function u(){return r(1,0,0)}function s(){return r(0,1,0)}function c(){return r(0,0,1)}const i=a(),f=o(),l=u(),_=s(),y=c(),w=Object.freeze(Object.defineProperty({__proto__:null,ONES:f,UNIT_X:l,UNIT_Y:_,UNIT_Z:y,ZEROS:i,clone:t,create:n,createView:e,fromValues:r,ones:o,unitX:u,unitY:s,unitZ:c,zeros:a},Symbol.toStringTag,{value:"Module"}));

export { e, n, r, t };

//# sourceMappingURL=vec3f32-77e8c64f.js.map