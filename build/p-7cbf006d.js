import{f as t}from"./p-4d42db0b.js";import{c as o}from"./p-6207f8cf.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const f=new Set;let n;const c={childList:true};function s(t){if(!n){n=o("mutation",r)}n.observe(t.el,c)}function i(t){f.delete(t.el);r(n.takeRecords());n.disconnect();for(const[t]of f.entries()){n.observe(t,c)}}function r(o){o.forEach((({target:o})=>{t(o)}))}export{s as c,i as d};
//# sourceMappingURL=p-7cbf006d.js.map