import{a as n}from"./p-4d42db0b.js";import{c as o}from"./p-d479e518.js";import{g as s}from"./p-79237d37.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const t={};const r={};async function a(o){const i=s(o);if(t[i]){return t[i]}if(!r[i]){r[i]=fetch(n(`./assets/date-picker/nls/${i}.json`)).then((n=>n.json())).catch((()=>{console.error(`Translations for "${i}" not found or invalid, falling back to english`);return a("en")}))}const e=await r[i];t[i]=e;return e}function i(n){return n.map(((n,s)=>o(n,s===1)))}export{a,i as g};
//# sourceMappingURL=p-a1c777b8.js.map