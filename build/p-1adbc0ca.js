import{f as t}from"./p-48186cc4.js";import{c as o}from"./p-6207f8cf.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const c=new Set;let f;const n={childList:true};function s(t){if(!f){f=o("mutation",r)}f.observe(t.el,n)}function i(t){c.delete(t.el);r(f.takeRecords());f.disconnect();for(const[t]of c.entries()){f.observe(t,n)}}function r(o){o.forEach((({target:o})=>{t(o)}))}export{s as c,i as d};
//# sourceMappingURL=p-1adbc0ca.js.map