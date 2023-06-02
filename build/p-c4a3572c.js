/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */
const t={container:"container",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",contentContainer:"content-container",contentContainerSelectable:"content-container--selectable",contentContainerHasCenterContent:"content-container--has-center-content",nestedContainer:"nested-container",nestedContainerHidden:"nested-container--hidden",content:"content",customContent:"custom-content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",actionsEnd:"actions-end",selectionContainer:"selection-container",openContainer:"open-container"};const n={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentEnd:"content-end",actionsEnd:"actions-end"};const e=5;const c={selectedMultiple:"check-circle-f",selectedSingle:"circle-f",unselected:"blank",closedLTR:"caret-right",closedRTL:"caret-left",open:"caret-down",blank:"blank"};
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const o="calcite-list-item-group";const a="calcite-list-item";function s(t){const n=t.target.assignedElements({flatten:true});const e=n.filter((t=>t?.matches(o))).map((t=>Array.from(t.querySelectorAll(a)))).reduce(((t,n)=>[...t,...n]),[]);const c=n.filter((t=>t?.matches(a)));return[...e,...c]}function i(t){t.forEach((n=>{n.setPosition=t.indexOf(n)+1;n.setSize=t.length}))}function r(t,n=false){const e=n?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";const c=document.evaluate(e,t,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return c.snapshotLength}export{t as C,c as I,e as M,n as S,r as a,s as g,i as u};
//# sourceMappingURL=p-c4a3572c.js.map