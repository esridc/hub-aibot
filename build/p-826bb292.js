/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */
function n(n){for(let e=n;e;e=t(e)){if(!(e instanceof Element)){continue}if(getComputedStyle(e).display==="none"){return null}}for(let e=t(n);e;e=t(e)){if(!(e instanceof Element)){continue}const n=getComputedStyle(e);if(n.display==="contents"){continue}if(n.position!=="static"||n.filter!=="none"){return e}if(e.tagName==="BODY"){return e}}return null}function t(n){if(n.assignedSlot){return n.assignedSlot}if(n.parentNode instanceof ShadowRoot){return n.parentNode.host}return n.parentNode}export{n as offsetParent};
//# sourceMappingURL=p-826bb292.js.map