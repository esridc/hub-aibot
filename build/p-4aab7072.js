import{h as t}from"./p-48186cc4.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const o={arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"};const r={width:12,height:6,strokeWidth:1};const e=({floatingLayout:e,key:i,ref:s})=>{const{width:a,height:c,strokeWidth:n}=r;const h=a/2;const d=e==="vertical";const l="M0,0"+` H${a}`+` L${a-h},${c}`+` Q${h},${c} ${h},${c}`+" Z";return t("svg",{"aria-hidden":"true",class:o.arrow,height:a,key:i,ref:s,viewBox:`0 0 ${a} ${a+(!d?n:0)}`,width:a+(d?n:0)},n>0&&t("path",{class:o.arrowStroke,d:l,fill:"none","stroke-width":n+1}),t("path",{d:l,stroke:"none"}))};export{e as F};
//# sourceMappingURL=p-4aab7072.js.map