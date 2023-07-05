import{d as n}from"./p-48186cc4.js";import{c as o}from"./p-a78b2b15.js";import{g as s}from"./p-78ad5571.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const t={};const r={};async function a(o){const c=s(o);if(t[c]){return t[c]}if(!r[c]){r[c]=fetch(n(`./assets/date-picker/nls/${c}.json`)).then((n=>n.json())).catch((()=>{console.error(`Translations for "${c}" not found or invalid, falling back to english`);return a("en")}))}const i=await r[c];t[c]=i;return i}function c(n){return n.map(((n,s)=>o(n,s===1)))}export{a,c as g};
//# sourceMappingURL=p-a893cb30.js.map