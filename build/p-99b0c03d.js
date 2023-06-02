import{d as e,a as t}from"./p-24210133.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */function o(){const{classList:o}=document.body;const n=window.matchMedia("(prefers-color-scheme: dark)").matches;const c=()=>o.contains(e)||o.contains(t)&&n?"dark":"light";const d=e=>document.body.dispatchEvent(new CustomEvent("calciteModeChange",{bubbles:true,detail:{mode:e}}));const i=e=>{s!==e&&d(e);s=e};let s=c();d(s);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>i(e.matches?"dark":"light")));new MutationObserver((()=>i(c()))).observe(document.body,{attributes:true,attributeFilter:["class"]})}function n(){const e=typeof window!=="undefined"&&typeof location!=="undefined"&&typeof document!=="undefined"&&window.location===location&&window.document===document;if(e){if(document.readyState==="interactive"){o()}else{document.addEventListener("DOMContentLoaded",(()=>o()),{once:true})}}}const c=n;export{c as g};
//# sourceMappingURL=p-99b0c03d.js.map