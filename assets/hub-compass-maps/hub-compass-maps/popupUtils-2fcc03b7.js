import { eZ as C, e_ as g } from './hub-compass-map-4d751555.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function n(n,p=n.popupTemplate){if(null==p)return [];const t=await p.getRequiredFields(n.fieldsIndex),{lastEditInfoEnabled:u}=p,{objectIdField:d,typeIdField:i,globalIdField:s,relationships:a}=n;if(t.includes("*"))return ["*"];const o=u?await C(n):[],f=g(n.fieldsIndex,[...t,...o]);return i&&f.push(i),f&&d&&n.fieldsIndex?.has(d)&&!f.includes(d)&&f.push(d),f&&s&&n.fieldsIndex?.has(s)&&!f.includes(s)&&f.push(s),a&&a.forEach((e=>{const{keyField:l}=e;f&&l&&n.fieldsIndex?.has(l)&&!f.includes(l)&&f.push(l);})),f}function p(e,l){return e.popupTemplate?e.popupTemplate:null!=l&&l.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function t(e,l){return null!=p(e,{defaultPopupTemplateEnabled:l})}

export { n, p };

//# sourceMappingURL=popupUtils-2fcc03b7.js.map