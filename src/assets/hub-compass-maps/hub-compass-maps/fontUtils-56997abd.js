import { X as s$1 } from './hub-compass-map-68308039.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const t="arial-unicode-ms",n="woff2",r=new Map,s=new Set;class o{constructor(e,t){this.fontFace=e,this.promise=t;}}async function c(t){const c=f(t),a=r.get(c);if(a)return a.promise;const i=new FontFace(t.family,`url('${s$1.fontsUrl}/woff2/${c}.${n}') format('${n}')`,{style:t.style,weight:t.weight}),u=document.fonts;if(u.has(i)&&"loading"===i.status)return i.loaded;const l=i.load().then((()=>(u.add(i),i)));return r.set(c,new o(i,l)),s.add(i),l}function a(){const e=document.fonts;r.forEach((t=>{e.delete(t.fontFace);})),r.clear(),s.clear();}function i(e){return s.has(e)}function u(e){if(!e)return t;const n=e.toLowerCase().split(" ").join("-");switch(n){case"serif":return "noto-serif";case"sans-serif":return "arial-unicode-ms";case"monospace":return "ubuntu-mono";case"fantasy":return "cabin-sketch";case"cursive":return "redressed";default:return n}}function f(e){const t=l(e)+d(e);return u(e.family)+(t.length>0?t:"-regular")}function l(e){if(!e.weight)return "";switch(e.weight.toLowerCase()){case"bold":case"bolder":return "-bold"}return ""}function d(e){if(!e.style)return "";switch(e.style.toLowerCase()){case"italic":case"oblique":return "-italic"}return ""}

export { c, f, t, u };

//# sourceMappingURL=fontUtils-56997abd.js.map