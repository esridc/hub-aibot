import{n as t}from"./p-c673c097.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const o="CALCITE-COMBOBOX-ITEM";const n="CALCITE-COMBOBOX-ITEM-GROUP";const c=`${o}, ${n}`;const s={listContainer:"list-container"};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */function e(t){const o=t.parentElement?.closest(c);const n=o?.parentElement?.closest(c);return[o,n].filter((t=>t))}function a(t){return t.ancestors?.filter((t=>t.nodeName==="CALCITE-COMBOBOX-ITEM"))||[]}function i(o){return t(o.querySelectorAll("calcite-combobox-item"))}function r(o){const n=t(o.querySelectorAll("calcite-combobox-item"));return n.filter((t=>t.selected)).length>0}function u(t){const o=document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",t,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return o.snapshotLength}export{c as C,i as a,o as b,n as c,s as d,e,u as f,a as g,r as h};
//# sourceMappingURL=p-8455792f.js.map