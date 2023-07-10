import { s, f as s$1 } from './hub-compass-map-f4225e12.js';
import { e, n } from './enums-63fd0640.js';
import { F as F$1, C as C$1, U as U$1 } from './enums-f1bebe6f.js';
import { t as t$1 } from './VertexElementDescriptor-33a64685.js';
import { x as x$1 } from './number-4aaa92a3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
var E$1,T$1,I$1,L$1,A$1,_$1,S$1;!function(E){E[E.FILL=0]="FILL",E[E.LINE=1]="LINE",E[E.MARKER=2]="MARKER",E[E.TEXT=3]="TEXT",E[E.LABEL=4]="LABEL";}(E$1||(E$1={})),function(E){E[E.NONE=0]="NONE",E[E.MAP=1]="MAP",E[E.LABEL=2]="LABEL",E[E.LABEL_ALPHA=4]="LABEL_ALPHA",E[E.HITTEST=8]="HITTEST",E[E.HIGHLIGHT=16]="HIGHLIGHT",E[E.CLIP=32]="CLIP",E[E.DEBUG=64]="DEBUG",E[E.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES";}(T$1||(T$1={})),function(E){E[E.SIZE=0]="SIZE",E[E.COLOR=1]="COLOR",E[E.OPACITY=2]="OPACITY",E[E.ROTATION=3]="ROTATION";}(I$1||(I$1={})),function(E){E[E.NONE=0]="NONE",E[E.OPACITY=1]="OPACITY",E[E.COLOR=2]="COLOR",E[E.ROTATION=4]="ROTATION",E[E.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",E[E.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",E[E.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",E[E.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE";}(L$1||(L$1={})),function(E){E[E.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",E[E.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",E[E.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",E[E.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE";}(A$1||(A$1={})),function(E){E[E.SPRITE=0]="SPRITE",E[E.GLYPH=1]="GLYPH";}(_$1||(_$1={})),function(E){E[E.DEFAULT=0]="DEFAULT",E[E.SIMPLE=1]="SIMPLE",E[E.DOT_DENSITY=2]="DOT_DENSITY",E[E.OUTLINE_FILL=3]="OUTLINE_FILL",E[E.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",E[E.HEATMAP=5]="HEATMAP",E[E.PIE_CHART=6]="PIE_CHART";}(S$1||(S$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const m=s.getLogger("esri.views.2d.engine.webgl.Utils"),f="geometry",d=[{name:f,strideInBytes:12}],p=[{name:f,strideInBytes:36}],y=[{name:f,strideInBytes:24}],I=[{name:f,strideInBytes:12}],g=[{name:f,strideInBytes:40}],S=[{name:f,strideInBytes:36}],T=[{name:f,strideInBytes:36}];function w(e){const t={};for(const n of e)t[n.name]=n.strideInBytes;return t}const E=w([{name:f,strideInBytes:36}]),h=w(d),L=w(p),N=w(y),D=w(I),A=w(g),M=w(S),U=w(T);function R(e,t){switch(e){case E$1.MARKER:return t===S$1.HEATMAP?h:E;case E$1.FILL:switch(t){case S$1.DOT_DENSITY:return D;case S$1.SIMPLE:case S$1.OUTLINE_FILL_SIMPLE:return N;default:return L}case E$1.LINE:return A;case E$1.TEXT:return M;case E$1.LABEL:return U}}const _=[f],v=[f],B=[f],O=[f],C=[f];function b(e){switch(e){case E$1.MARKER:return _;case E$1.FILL:return v;case E$1.LINE:return B;case E$1.TEXT:return O;case E$1.LABEL:return C}}function F(e){switch(e%4){case 0:case 2:return 4;case 1:case 3:return 1}}function x(e,t){switch(t%4){case 0:case 2:return new Uint32Array(Math.floor(e*t/4));case 1:case 3:return new Uint8Array(e*t)}}function P(e,t){switch(t%4){case 0:case 2:return new Uint32Array(e);case 1:case 3:return new Uint8Array(e)}}function z(e){return null!=e}function $(e){return "number"==typeof e}function k(t){switch(t){case"butt":return e.BUTT;case"round":return e.ROUND;case"square":return e.SQUARE;default:return m.error(new s$1("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),e.ROUND}}function G(t){switch(t){case"miter":return n.MITER;case"bevel":return n.BEVEL;case"round":return n.ROUND;default:return m.error(new s$1("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),n.ROUND}}function V(e){switch(e){case"opacity":return I$1.OPACITY;case"color":return I$1.COLOR;case"rotation":return I$1.ROTATION;case"size":return I$1.SIZE;default:return m.error(`Cannot interpret unknown vv: ${e}`),null}}function j(e,t,n,r,s,a,i){for(const c in a){const t=a[c].stride,r=F(t),i=a[c].data,o=n[c].data;if(null==i||null==o)continue;const u=t*s.vertexCount/r,l=t*e/r,m=t*s.vertexFrom/r;for(let e=0;e<u;++e)o[e+l]=i[e+m];}if(null!=i&&null!=r){const n=s.indexCount;for(let a=0;a<n;++a)r[a+t]=i[a+s.indexFrom]-s.vertexFrom+e;}}const Y={[f]:F$1.STATIC_DRAW};function H(e,t){const n=[];for(let r=0;r<5;++r){const s=b(r),a={};for(const e of s)a[e]={data:t(r,e)};n.push({data:e(r),buffers:a});}return n}function q(e){switch(e){case C$1.BYTE:case C$1.UNSIGNED_BYTE:return 1;case C$1.SHORT:case C$1.UNSIGNED_SHORT:return 2;case C$1.FLOAT:case C$1.INT:case C$1.UNSIGNED_INT:return 4}}function K(t){switch(t){case U$1.UNSIGNED_BYTE:return 1;case U$1.UNSIGNED_SHORT_4_4_4_4:return 2;case U$1.FLOAT:return 4;default:return void m.error(new s$1("webgl-utils",`Unable to handle type ${t}`))}}function W(t){switch(t){case U$1.UNSIGNED_BYTE:return Uint8Array;case U$1.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case U$1.FLOAT:return Float32Array;default:return void m.error(new s$1("webgl-utils",`Unable to handle type ${t}`))}}function X(e){const t={};for(const n in e){const r=e[n];let s=0;t[n]=r.map((e=>{const t=new t$1(e.name,e.count,e.type,s,0,e.normalized||!1);return s+=e.count*q(e.type),t})),t[n]?.forEach((e=>e.stride=s));}return t}const J=e=>{const t=new Map;for(const n in e)for(const r of e[n])t.set(r.name,r.location);return t},Q=e=>{const t={};for(const n in e){const r=e[n];t[n]=r?.length?r[0].stride:0;}return t},Z=new Map,ee=(e,t)=>{if(!Z.has(e)){const n=X(t),r={strides:Q(n),bufferLayouts:n,attributes:J(t)};Z.set(e,r);}return Z.get(e)};function te(e){e(E$1.FILL),e(E$1.LINE),e(E$1.MARKER),e(E$1.TEXT),e(E$1.LABEL);}const ne=e=>"path"in e&&ye(e.path),re=e=>"url"in e&&e.url||"imageData"in e&&e.imageData,se=e=>"imageData"in e&&e.imageData&&"contentType"in e&&e.contentType?`data:${e.contentType};base64,${e.imageData}`:"url"in e?e.url:null,ae=e=>null!=e&&e.startsWith("data:image/gif"),ie=e=>"url"in e&&e.url&&(e.url.includes(".gif")||ae(e.url))||"contentType"in e&&"image/gif"===e.contentType||"imageData"in e&&ae(e.imageData),ce=e=>null!=e&&e.startsWith("data:image/png"),oe=e=>"url"in e&&e.url&&(e.url.includes(".png")||ce(e.url))||"contentType"in e&&"image/png"===e.contentType||"imageData"in e&&ce(e.imageData),ue=e=>e.type&&e.type.toLowerCase().includes("3d");function le(e){switch(e.type){case"line":{const t=e;return "CIMSolidStroke"===t.cim.type&&!t.dashTemplate}case"fill":return "CIMSolidFill"===e.cim.type;case"esriSFS":return "esriSFSSolid"===e.style||"esriSFSNull"===e.style;case"esriSLS":return "esriSLSSolid"===e.style||"esriSLSNull"===e.style;default:return !1}}const me=e=>e.includes("data:image/svg+xml");function fe(e){switch("cim"in e?e.cim.type:e.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":return !1;case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":return Ie(e);default:return !0}}function de(e){const t="maxVVSize"in e&&e.maxVVSize,n="width"in e&&e.width||"size"in e&&e.size||0;return t||n}function pe(e){const t=[];for(let n=0;n<e.length;n++)t.push(e.charCodeAt(n));return t}const ye=e=>!!e&&(e=e.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4)),Ie=e=>"fill"===e.type&&"CIMMarkerPlacementInsidePolygon"===e?.cim?.markerPlacement?.type;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function r(n,r=0,t=!1){const o=n[r+3];return n[r]*=o,n[r+1]*=o,n[r+2]*=o,t||(n[r+3]*=255),n}function t(r){if(!r)return 0;const{r:t,g:o,b:u,a:i}=r;return x$1(t*i,o*i,u*i,255*i)}function o(r){if(!r)return 0;const[t,o,u,i]=r;return x$1(t*(i/255),o*(i/255),u*(i/255),i)}function u(n,r,t=0){if(null==r)return n[t]=0,n[t+1]=0,n[t+2]=0,void(n[t+3]=0);const{r:o,g:u,b:i,a:c}=r;n[t]=o*c/255,n[t+1]=u*c/255,n[t+2]=i*c/255,n[t+3]=c;}

export { $, A$1 as A, E$1 as E, F, G, H, Ie as I, K, L$1 as L, P, R, S$1 as S, T$1 as T, V, W, Y, _$1 as _, u as a, o as b, t as c, de as d, ee as e, fe as f, r as g, ie as i, j, k, le as l, me as m, ne as n, oe as o, pe as p, re as r, se as s, te as t, ue as u, x, z };

//# sourceMappingURL=color-07edd940.js.map