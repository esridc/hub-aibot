/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */
function e(){}function i(i,t=false){if(i.disabled){i.el.setAttribute("tabindex","-1");i.el.setAttribute("aria-disabled","true");if(i.el.contains(document.activeElement)){document.activeElement.blur()}i.el.click=e;return}i.el.click=HTMLElement.prototype.click;if(typeof t==="function"){i.el.setAttribute("tabindex",t.call(i)?"0":"-1")}else if(t===true){i.el.setAttribute("tabindex","0")}else if(t===false){i.el.removeAttribute("tabindex")}else;i.el.removeAttribute("aria-disabled")}export{i as u};
//# sourceMappingURL=p-a35da274.js.map