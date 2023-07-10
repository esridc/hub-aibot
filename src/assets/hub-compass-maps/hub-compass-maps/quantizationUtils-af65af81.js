import { aK as l$1, aH as s$1, aq as f$1, aL as u, aI as m$1 } from './hub-compass-map-f4225e12.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function l(n){return n&&"upperLeft"===n.originPosition}const i=(n,t,e)=>[t,e],o=(n,t,e)=>[t,e,n[2]],a=(n,t,e)=>[t,e,n[2],n[3]];function m(n){if(!n)return null;return {originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance]:[1,1],translate:null!=n.extent?[n.extent.xmin,n.extent.ymax]:[0,0]}}function c(n,t){if(n===t||null==n&&null==t)return !0;if(null==n||null==t)return !1;let e,r,u,i,o,a;return l(n)?(e=n.translate[0],r=n.translate[1],u=n.scale[0]):(e=null!=n.extent?n.extent.xmin:0,r=null!=n.extent?n.extent.ymax:0,u=n.tolerance),l(t)?(i=t.translate[0],o=t.translate[1],a=t.scale[0]):(i=null!=t.extent?t.extent.xmin:0,o=null!=t.extent?t.extent.ymax:0,a=t.tolerance),e===i&&r===o&&u===a}function s({scale:n,translate:t},e){return Math.round((e-t[0])/n[0])}function f({scale:n,translate:t},e){return Math.round((t[1]-e)/n[1])}function x(n,t,e){const r=[];let u,l,i,o;for(let a=0;a<e.length;a++){const m=e[a];a>0?(i=s(n,m[0]),o=f(n,m[1]),i===u&&o===l||(r.push(t(m,i-u,o-l)),u=i,l=o)):(u=s(n,m[0]),l=f(n,m[1]),r.push(t(m,u,l)));}return r.length>0?r:null}function h(n,t,e){return t[0]=s(n,e[0]),t[3]=f(n,e[1]),t[2]=s(n,e[2]),t[1]=f(n,e[3]),t}function I(n,t,e,r){return x(n,e?r?a:o:r?o:i,t)}function g(n,t,e,r){const u=[],l=e?r?a:o:r?o:i;for(let i=0;i<t.length;i++){const e=x(n,l,t[i]);e&&e.length>=3&&u.push(e);}return u.length?u:null}function N(n,t,e,r){const u=[],l=e?r?a:o:r?o:i;for(let i=0;i<t.length;i++){const e=x(n,l,t[i]);e&&e.length>=2&&u.push(e);}return u.length?u:null}function p({scale:n,translate:t},e){return e*n[0]+t[0]}function y({scale:n,translate:t},e){return t[1]-e*n[1]}function z(n,t,e){const r=new Array(e.length);if(!e.length)return r;const[u,l]=n.scale;let i=p(n,e[0][0]),o=y(n,e[0][1]);r[0]=t(e[0],i,o);for(let a=1;a<e.length;a++){const n=e[a];i+=n[0]*u,o-=n[1]*l,r[a]=t(n,i,o);}return r}function T(n,t,e){const r=new Array(e.length);for(let u=0;u<e.length;u++)r[u]=z(n,t,e[u]);return r}function M(n,t,e){return e?(t[0]=p(n,e[0]),t[1]=y(n,e[3]),t[2]=p(n,e[2]),t[3]=y(n,e[1]),t):[p(n,t[0]),y(n,t[3]),p(n,t[2]),y(n,t[1])]}function E(n,t,e,r){return z(n,e?r?a:o:r?o:i,t)}function P(n,t,e,r){return T(n,e?r?a:o:r?o:i,t)}function b(n,t,e,r){return T(n,e?r?a:o:r?o:i,t)}function F(n,t,e){let[r,u]=e[0],l=Math.min(r,t[0]),i=Math.min(u,t[1]),o=Math.max(r,t[2]),a=Math.max(u,t[3]);for(let m=1;m<e.length;m++){const[n,t]=e[m];r+=n,u+=t,n<0&&(l=Math.min(l,r)),n>0&&(o=Math.max(o,r)),t<0?i=Math.min(i,u):t>0&&(a=Math.max(a,u));}return n[0]=l,n[1]=i,n[2]=o,n[3]=a,n}function V(n,t){if(!t.length)return null;n[0]=n[1]=Number.POSITIVE_INFINITY,n[2]=n[3]=Number.NEGATIVE_INFINITY;for(let e=0;e<t.length;e++)F(n,n,t[e]);return n}function Y(n){const t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return F(t,t,n)}function _(n){return V([0,0,0,0],n)}function A(n){return V([0,0,0,0],n)}function w(n,t,e,r,u){return t.xmin=s(n,e.xmin),t.ymin=f(n,e.ymin),t.xmax=s(n,e.xmax),t.ymax=f(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),u&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}function G(n,t,e,r,u){return t.points=I(n,e.points,r,u)??[],t}function L(n,t,e,r,u){return t.x=s(n,e.x),t.y=f(n,e.y),t!==e&&(r&&(t.z=e.z),u&&(t.m=e.m)),t}function O(n,t,e,r,u){const l=g(n,e.rings,r,u);return l?(t.rings=l,t):null}function S(n,t,e,r,u){const l=N(n,e.paths,r,u);return l?(t.paths=l,t):null}function d(l,i){return l&&i?l$1(i)?L(l,{},i,!1,!1):s$1(i)?S(l,{},i,!1,!1):f$1(i)?O(l,{},i,!1,!1):u(i)?G(l,{},i,!1,!1):m$1(i)?w(l,{},i,!1,!1):null:null}function j(n,t,e,r,u){return t.xmin=p(n,e.xmin),t.ymin=y(n,e.ymin),t.xmax=p(n,e.xmax),t.ymax=y(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),u&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}function U(n,t,e,r,u){return null!=e&&(t.points=E(n,e.points,r,u)),t}function k(n,t,e,r,u){return null==e||(t.x=p(n,e.x),t.y=y(n,e.y),t!==e&&(r&&(t.z=e.z),u&&(t.m=e.m))),t}function q(n,t,e,r,u){return null!=e&&(t.rings=b(n,e.rings,r,u)),t}function v(n,t,e,r,u){return null!=e&&(t.paths=P(n,e.paths,r,u)),t}

export { L, U, d, k, m, q, v };

//# sourceMappingURL=quantizationUtils-af65af81.js.map