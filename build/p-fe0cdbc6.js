import{f as t}from"./p-5b036533.js";import{c as o}from"./p-4f3a57d9.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const n=new Set;let f;const s={childList:true};function c(t){if(!f){f=o("mutation",r)}f.observe(t.el,s)}function i(t){n.delete(t.el);r(f.takeRecords());f.disconnect();for(const[t]of n.entries()){f.observe(t,s)}}function r(o){o.forEach((({target:o})=>{t(o)}))}export{c,i as d};
//# sourceMappingURL=p-fe0cdbc6.js.map