import{r as e,d as t,h as n,H as i,g as o}from"./p-4d42db0b.js";import{d as a,e as c,g as s,t as r,v as l,n as d}from"./p-c673c097.js";import{c as h,d as m}from"./p-7cbf006d.js";import{c as u,d as f,u as p}from"./p-27680149.js";import{C as b}from"./p-2a7cd91f.js";import"./p-386d1501.js";import"./p-6207f8cf.js";import"./p-779078e6.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const v={actionsEnd:"actions-end",checkboxLabel:"checkbox-label",checkbox:"checkbox",chevron:"chevron",nodeContainer:"node-container",childrenContainer:"children-container",bulletPointIcon:"bullet-point",checkmarkIcon:"checkmark",itemExpanded:"item--expanded",iconStart:"icon-start",nodeAndActionsContainer:"node-actions-container"};const k={actionsEnd:"actions-end",children:"children"};const g={bulletPoint:"bullet-point",checkmark:"check",chevronRight:"chevron-right",blank:"blank"};const x='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;max-inline-size:100%;cursor:pointer;color:var(--calcite-ui-text-3)}[hidden]{display:none}.node-actions-container{display:flex;justify-content:space-between}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .node-actions-container{min-block-size:1.5rem}:host([scale=s]) .node-actions-container .node-container .checkbox,:host([scale=s]) .node-actions-container .node-container .chevron,:host([scale=s]) .node-actions-container .node-container .checkmark,:host([scale=s]) .node-actions-container .node-container .bullet-point{margin-inline:0.25rem}:host([scale=s]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .node-actions-container{min-block-size:2rem}:host([scale=m]) .node-actions-container .node-container .checkbox,:host([scale=m]) .node-actions-container .node-container .chevron,:host([scale=m]) .node-actions-container .node-container .checkmark,:host([scale=m]) .node-actions-container .node-container .bullet-point{margin-inline:0.5rem}:host([scale=m]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .node-actions-container{min-block-size:2.75rem}:host([scale=l]) .node-actions-container .node-container .checkbox,:host([scale=l]) .node-actions-container .node-container .chevron,:host([scale=l]) .node-actions-container .node-container .checkmark,:host([scale=l]) .node-actions-container .node-container .bullet-point{margin-inline:0.75rem}:host([scale=l]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([lines]) .children-container:after{position:absolute;inset-block-start:0px;z-index:var(--calcite-app-z-index);inline-size:1px;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;block-size:96%;content:"";background-color:var(--calcite-ui-border-2)}:host(:not([lines])) .node-container:after{display:none}::slotted(*){min-inline-size:0px;max-inline-size:100%;overflow-wrap:break-word;color:inherit;text-decoration:none !important}::slotted(*):hover{text-decoration:none !important}::slotted(a){inline-size:100%;text-decoration-line:none}:host{outline-color:transparent}:host:focus,:host:active{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host(:focus:not([disabled])){outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.actions-end{display:flex;flex-direction:row;align-items:center;align-self:stretch}.checkbox{line-height:0}.checkbox-label{pointer-events:none;display:flex;align-items:center}.checkbox:focus{outline:2px solid transparent;outline-offset:2px}.children-container{position:relative;block-size:0px;transform-origin:top;overflow:hidden;opacity:0;margin-inline-start:1.25rem;transform:scaleY(0);transition:var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}.item--expanded>.children-container{overflow:visible;opacity:1;transform:none;block-size:auto}.node-container{position:relative;display:flex;min-inline-size:0px;align-items:center}.node-container .checkmark,.node-container .bullet-point{opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;color:var(--calcite-ui-border-1)}.node-container:hover .checkmark,.node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark,:host([selected]) .node-container:hover .bullet-point,:host(:focus:not([disabled])) .node-container .checkmark,:host(:focus:not([disabled])) .node-container .bullet-point{opacity:1}:host([selected]) .node-container,:host([selected]) .node-container:hover{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selected]) .node-container .bullet-point,:host([selected]) .node-container .checkmark,:host([selected]) .node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark{opacity:1;color:var(--calcite-ui-brand)}:host([selection-mode=none]:not([has-children])):host([scale=s]) .node-container{padding-inline-start:0.5rem}:host([selection-mode=none]:not([has-children])):host([scale=m]) .node-container{padding-inline-start:1rem}:host([selection-mode=none]:not([has-children])):host([scale=l]) .node-container{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=s]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.25rem}:host(:not([has-children])):host([scale=m]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=l]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.75rem}:host([has-children]) .node-container[data-selection-mode=ancestors] .checkbox{margin-inline-start:0}:host([has-children]) .node-container .bullet-point,:host([has-children]) .node-container .checkmark{display:none}:host([has-children][expanded]:not([selected]):not([selection-mode=none])) .node-container ::slotted(*){font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([has-children][selected]) .node-container[data-selection-mode=children],:host([has-children][selected]) .node-container[data-selection-mode=multichildren]{color:var(--calcite-ui-brand)}.chevron{position:relative;align-self:center;color:var(--calcite-ui-text-3);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;flex:0 0 auto;transform:rotate(0deg)}.calcite--rtl .chevron{transform:rotate(180deg)}.item--expanded .node-container>.chevron{transform:rotate(90deg)}:host([selected]) .checkmark,:host([selected]) .bullet-point{color:var(--calcite-ui-brand)}';const y=class{constructor(n){e(this,n);this.calciteInternalTreeItemSelect=t(this,"calciteInternalTreeItemSelect",6);this.iconClickHandler=e=>{e.stopPropagation();this.expanded=!this.expanded};this.childrenClickHandler=e=>e.stopPropagation();this.updateParentIsExpanded=(e,t)=>{const n=a(e,k.children,{all:true,selector:"calcite-tree-item"});n.forEach((e=>e.parentExpanded=t))};this.actionsEndSlotChangeHandler=e=>{this.hasEndActions=c(e)};this.disabled=false;this.expanded=false;this.iconFlipRtl=undefined;this.iconStart=undefined;this.selected=false;this.parentExpanded=false;this.depth=-1;this.hasChildren=null;this.lines=undefined;this.scale=undefined;this.indeterminate=false;this.selectionMode=undefined;this.updateAfterInitialRender=false;this.hasEndActions=false}expandedHandler(e){this.updateParentIsExpanded(this.el,e)}getSelectionMode(){this.isSelectionMultiLike=this.selectionMode==="multiple"||this.selectionMode==="multichildren"}connectedCallback(){var e;this.parentTreeItem=(e=this.el.parentElement)===null||e===void 0?void 0:e.closest("calcite-tree-item");if(this.parentTreeItem){const{expanded:e}=this.parentTreeItem;this.updateParentIsExpanded(this.parentTreeItem,e)}h(this);u(this)}disconnectedCallback(){m(this);f(this)}componentWillRender(){var e;this.hasChildren=!!this.el.querySelector("calcite-tree");this.depth=0;let t=this.el.closest("calcite-tree");if(!t){return}this.selectionMode=t.selectionMode;this.scale=t.scale||"m";this.lines=t.lines;let n;while(t){n=(e=t.parentElement)===null||e===void 0?void 0:e.closest("calcite-tree");if(n===t){break}else{t=n;this.depth=this.depth+1}}}componentWillLoad(){requestAnimationFrame((()=>this.updateAfterInitialRender=true))}componentDidLoad(){this.updateAncestorTree()}componentDidRender(){p(this,(()=>this.parentExpanded||this.depth===1))}render(){const e=s(this.el)==="rtl";const t=this.selectionMode==="single"||this.selectionMode==="children";const o=this.selectionMode==="multiple"||this.selectionMode==="multichildren";const a=this.selectionMode==="none"&&!this.hasChildren;const c=this.hasChildren?n("calcite-icon",{class:{[v.chevron]:true,[b.rtl]:e},"data-test-id":"icon",icon:g.chevronRight,onClick:this.iconClickHandler,scale:this.scale==="l"?"m":"s"}):null;const l=n("slot",{key:"default-slot"});const d=this.selectionMode==="ancestors"?n("label",{class:v.checkboxLabel,key:"checkbox-label"},n("calcite-checkbox",{checked:this.selected,class:v.checkbox,"data-test-id":"checkbox",indeterminate:this.hasChildren&&this.indeterminate,scale:this.scale,tabIndex:-1}),l):null;const h=t?g.bulletPoint:o?g.checkmark:a?g.blank:null;const m=h?n("calcite-icon",{class:{[v.bulletPointIcon]:h===g.bulletPoint,[v.checkmarkIcon]:h===g.checkmark,[b.rtl]:e},icon:h,scale:this.scale==="l"?"m":"s"}):null;const u=!(this.parentExpanded||this.depth===1);const f=this.updateAfterInitialRender&&this.expanded;const{hasEndActions:p}=this;const x=n("slot",{key:"actionsEndSlot",name:k.actionsEnd,onSlotchange:this.actionsEndSlotChangeHandler});const y=n("calcite-icon",{class:v.iconStart,flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:this.scale==="l"?"m":"s"});return n(i,{"aria-expanded":this.hasChildren?r(f):undefined,"aria-hidden":r(u),"aria-selected":this.selected?"true":o?"false":undefined,"calcite-hydrated-hidden":u,role:"treeitem"},n("div",{class:{[v.itemExpanded]:f}},n("div",{class:v.nodeAndActionsContainer},n("div",{class:{[v.nodeContainer]:true,[b.rtl]:e},"data-selection-mode":this.selectionMode,ref:e=>this.defaultSlotWrapper=e},c,m,this.iconStart?y:null,d?d:l),n("div",{class:v.actionsEnd,hidden:!p,ref:e=>this.actionSlotWrapper=e},x)),n("div",{class:{[v.childrenContainer]:true,[b.rtl]:e},"data-test-id":"calcite-tree-children",onClick:this.childrenClickHandler,role:this.hasChildren?"group":undefined},n("slot",{name:k.children}))))}onClick(e){if(this.disabled||this.isActionEndEvent(e)){return}const[t]=l(this.el,"a");if(t&&e.composedPath()[0].tagName.toLowerCase()!=="a"){const e=t.target===""?"_self":t.target;window.open(t.href,e)}this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:this.selectionMode==="ancestors"||this.isSelectionMultiLike,forceToggle:false})}keyDownHandler(e){let t;if(this.isActionEndEvent(e)){return}switch(e.key){case" ":if(this.selectionMode==="none"){return}this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:this.isSelectionMultiLike,forceToggle:false});e.preventDefault();break;case"Enter":if(this.selectionMode==="none"){return}const n=d(this.el.children).find((e=>e.matches("a")));if(n){n.click();this.selected=true}else{this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:this.isSelectionMultiLike,forceToggle:false})}e.preventDefault();break;case"Home":t=this.el.closest("calcite-tree:not([child])");const i=t.querySelector("calcite-tree-item");i===null||i===void 0?void 0:i.focus();break;case"End":t=this.el.closest("calcite-tree:not([child])");let o=t.children[t.children.length-1];let a=d(o.children).find((e=>e.matches("calcite-tree")));while(a){o=a.children[t.children.length-1];a=d(o.children).find((e=>e.matches("calcite-tree")))}o===null||o===void 0?void 0:o.focus();break}}isActionEndEvent(e){const t=e.composedPath();return t.includes(this.actionSlotWrapper)}updateAncestorTree(){const e=this.parentTreeItem;if(this.selectionMode!=="ancestors"||!e){return}if(this.selected){const t=this.el.parentElement;const n=Array.from(t===null||t===void 0?void 0:t.children);const i=n.filter((e=>e.selected));if(n.length===i.length){e.selected=true;e.indeterminate=false}else if(i.length>0){e.indeterminate=true}}else if(this.indeterminate){const e=this.parentTreeItem;e.indeterminate=true}}get el(){return o(this)}static get watchers(){return{expanded:["expandedHandler"],selectionMode:["getSelectionMode"]}}};y.style=x;export{y as calcite_tree_item};
//# sourceMappingURL=p-a71af515.entry.js.map