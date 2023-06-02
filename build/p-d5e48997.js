import{a as n}from"./p-5b036533.js";import{c as o}from"./p-d8f1522b.js";import{g as s}from"./p-d56d6a03.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const t={};const r={};async function a(o){const i=s(o);if(t[i]){return t[i]}if(!r[i]){r[i]=fetch(n(`./assets/date-picker/nls/${i}.json`)).then((n=>n.json())).catch((()=>{console.error(`Translations for "${i}" not found or invalid, falling back to english`);return a("en")}))}const c=await r[i];t[i]=c;return c}function i(n){return n.map(((n,s)=>o(n,s===1)))}export{a,i as g};
//# sourceMappingURL=p-d5e48997.js.map