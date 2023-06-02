import{r as t,c as e,h as i,H as a,g as s}from"./p-5b036533.js";import{s as n,e as o,t as l,a as r}from"./p-bc44344d.js";import{a as c,s as d,c as h}from"./p-59cddcfc.js";import{c as u,d as m,n as p}from"./p-d56d6a03.js";import{c as f,d as g}from"./p-8bd0b9ae.js";import{c as v,s as b,d as k,u as w}from"./p-13972dcc.js";import{K as x}from"./p-cc28c0e8.js";import"./p-5bbe86c4.js";import"./p-24210133.js";import"./p-10c7b964.js";import"./p-4f3a57d9.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const y={slow:14e3,medium:1e4,fast:6e3};const z={actionsEnd:"actions-end",title:"title",message:"message",link:"link"};const q={actionsEnd:"actions-end",container:"container",close:"alert-close",slottedInShell:"slotted-in-shell"};const D='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([scale=s]){--calcite-alert-width:40em;--calcite-alert-spacing-token-small:0.5rem;--calcite-alert-spacing-token-large:0.75rem}:host([scale=s]) slot[name=title]::slotted(*),:host([scale=s]) *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) slot[name=message]::slotted(*),:host([scale=s]) *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) slot[name=link]::slotted(*),:host([scale=s]) *::slotted([slot=link]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .alert-queue-count{margin-inline:0.5rem}:host([scale=s]) .container{--calcite-alert-min-height:3.5rem}:host([scale=s]) .alert-close{padding:0.5rem}:host([scale=m]){--calcite-alert-width:50em;--calcite-alert-spacing-token-small:0.75rem;--calcite-alert-spacing-token-large:1rem}:host([scale=m]) slot[name=title]::slotted(*),:host([scale=m]) *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) slot[name=message]::slotted(*),:host([scale=m]) *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) slot[name=link]::slotted(*),:host([scale=m]) *::slotted([slot=link]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .alert-queue-count{margin-inline:0.75rem}:host([scale=m]) .container{--calcite-alert-min-height:4.1875rem}:host([scale=l]){--calcite-alert-width:60em;--calcite-alert-spacing-token-small:1rem;--calcite-alert-spacing-token-large:1.25rem}:host([scale=l]) slot[name=title]::slotted(*),:host([scale=l]) *::slotted([slot=title]){margin-block-end:0.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) slot[name=message]::slotted(*),:host([scale=l]) *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) slot[name=link]::slotted(*),:host([scale=l]) *::slotted([slot=link]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .alert-queue-count{margin-inline:1rem}:host([scale=l]) .container{--calcite-alert-min-height:5.625rem}:host{--calcite-alert-edge-distance:2rem;display:block}:host .container{pointer-events:none;position:fixed;z-index:500;margin-block:0px;margin-inline:auto;display:flex;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);opacity:0;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius);border-block-start:0px solid transparent;border-inline:1px solid var(--calcite-ui-border-3);border-block-end:1px solid var(--calcite-ui-border-3);min-block-size:var(--calcite-alert-min-height);inline-size:var(--calcite-alert-width);max-inline-size:calc(100% - (var(--calcite-alert-edge-distance) * 2 + 2px));max-block-size:0;transition:var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}:host .container.bottom,:host .container.top{inset-inline-end:0;inset-inline-start:0}:host .container[class*=bottom]{transform:translate3d(0, var(--calcite-alert-edge-distance), 0);inset-block-end:var(--calcite-alert-edge-distance)}:host .container[class*=top]{transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), 0);inset-block-start:var(--calcite-alert-edge-distance)}:host .container[class*=-start]{inset-inline-start:var(--calcite-alert-edge-distance);inset-inline-end:auto}:host .container[class*=-end]{inset-inline-end:var(--calcite-alert-edge-distance);inset-inline-start:auto}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}[hidden]{display:none}.container{display:flex;inline-size:100%;align-items:center;justify-content:center}.alert-close{outline-color:transparent}.alert-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([open]) .container:not(.queued){max-block-size:100%;border-block-start-width:2px;opacity:1;pointer-events:initial}:host([open]) .container:not(.queued)[class*=bottom]{transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), inherit)}:host([open]) .container:not(.queued)[class*=top]{transform:translate3d(0, var(--calcite-alert-edge-distance), inherit)}slot[name=title]::slotted(*),*::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}slot[name=message]::slotted(*),*::slotted([slot=message]){margin:0px;display:inline;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-inline-end:0.5rem}slot[name=link]::slotted(*),*::slotted([slot=link]){display:inline-flex;color:var(--calcite-ui-text-link)}.alert-content{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-alert-spacing-token-large);flex:0 0 auto;display:flex;flex-direction:column;overflow-wrap:break-word;background-color:var(--calcite-ui-foreground-1);flex:1 1 0;min-inline-size:0;padding-block:var(--calcite-alert-spacing-token-small);padding-inline:0 var(--calcite-alert-spacing-token-small);border-radius:var(--calcite-border-radius)}.alert-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-alert-spacing-token-large)}.alert-content:only-child{padding:var(--calcite-alert-spacing-token-small)}.alert-icon{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-alert-spacing-token-small);padding-inline:var(--calcite-alert-spacing-token-large);flex:0 0 auto;display:flex;align-items:center;align-self:stretch;background-color:var(--calcite-ui-foreground-1);padding-block:0px;border-start-start-radius:var(--calcite-border-radius);border-end-start-radius:var(--calcite-border-radius)}.alert-close{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-alert-spacing-token-small);padding-inline:var(--calcite-alert-spacing-token-large);flex:0 0 auto;cursor:pointer;align-self:stretch;overflow:hidden;border-style:none;background-color:var(--calcite-ui-foreground-1);padding-block:0px;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;border-end-end-radius:var(--calcite-border-radius);border-start-end-radius:var(--calcite-border-radius)}.alert-close:hover,.alert-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.alert-close:open{background-color:var(--calcite-ui-foreground-3)}.alert-queue-count{visibility:hidden;display:flex;cursor:default;align-items:center;justify-content:space-around;align-self:stretch;overflow:hidden;background-color:var(--calcite-ui-foreground-1);text-align:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline:0px solid transparent;border-start-end-radius:0}.alert-queue-count.active{visibility:visible;opacity:1}:host([auto-close])>.alert-queue-count{border-inline-end:0px solid transparent}.alert-dismiss-progress{position:absolute;display:block;inline-size:100%;overflow:hidden;inset-inline:0;inset-block-start:-2px;block-size:2px;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.alert-dismiss-progress:after{position:absolute;inset-block-start:0px;display:block;block-size:2px;content:"";background-color:var(--calcite-alert-dismiss-progress-background);inset-inline-end:0}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-block-start-color:var(--calcite-ui-brand)}:host([kind=brand]) .container .alert-icon{color:var(--calcite-ui-brand)}:host([kind=info]) .container{border-block-start-color:var(--calcite-ui-info)}:host([kind=info]) .container .alert-icon{color:var(--calcite-ui-info)}:host([kind=danger]) .container{border-block-start-color:var(--calcite-ui-danger)}:host([kind=danger]) .container .alert-icon{color:var(--calcite-ui-danger)}:host([kind=success]) .container{border-block-start-color:var(--calcite-ui-success)}:host([kind=success]) .container .alert-icon{color:var(--calcite-ui-success)}:host([kind=warning]) .container{border-block-start-color:var(--calcite-ui-warning)}:host([kind=warning]) .container .alert-icon{color:var(--calcite-ui-warning)}:host([auto-close-duration=fast]) .alert-dismiss-progress:after{animation:dismissProgress 6000ms ease-out}:host(:hover[auto-close-duration=fast]) .alert-dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=medium]) .alert-dismiss-progress:after{animation:dismissProgress 10000ms ease-out}:host(:hover[auto-close-duration=medium]) .alert-dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=slow]) .alert-dismiss-progress:after{animation:dismissProgress 14000ms ease-out}:host(:hover[auto-close-duration=slow]) .alert-dismiss-progress:after{animation-play-state:paused}@keyframes dismissProgress{0%{inline-size:0px;opacity:0.75}100%{inline-size:100%;opacity:1}}.container.slotted-in-shell{position:absolute}';const j=class{constructor(i){t(this,i);this.calciteAlertBeforeClose=e(this,"calciteAlertBeforeClose",6);this.calciteAlertClose=e(this,"calciteAlertClose",6);this.calciteAlertBeforeOpen=e(this,"calciteAlertBeforeOpen",6);this.calciteAlertOpen=e(this,"calciteAlertOpen",6);this.calciteInternalAlertSync=e(this,"calciteInternalAlertSync",6);this.calciteInternalAlertRegister=e(this,"calciteInternalAlertRegister",6);this.autoCloseTimeoutId=null;this.totalOpenTime=0;this.totalHoverTime=0;this.openTransitionProp="opacity";this.setTransitionEl=t=>{this.transitionEl=t;f(this)};this.closeAlert=()=>{this.autoCloseTimeoutId=null;this.queued=false;this.open=false;this.queue=this.queue.filter((t=>t!==this.el));this.determineActiveAlert();this.calciteInternalAlertSync.emit({queue:this.queue})};this.actionsEndSlotChangeHandler=t=>{this.hasEndActions=n(t)};this.handleMouseOver=()=>{window.clearTimeout(this.autoCloseTimeoutId);this.totalOpenTime=Date.now()-this.initialOpenTime;this.lastMouseOverBegin=Date.now()};this.handleMouseLeave=()=>{const t=Date.now()-this.lastMouseOverBegin;const e=y[this.autoCloseDuration]-this.totalOpenTime+this.totalHoverTime;this.totalHoverTime=this.totalHoverTime?t+this.totalHoverTime:t;this.autoCloseTimeoutId=window.setTimeout((()=>this.closeAlert()),e)};this.open=false;this.autoClose=false;this.autoCloseDuration=this.autoClose?"medium":null;this.kind="brand";this.icon=undefined;this.iconFlipRtl=false;this.label=undefined;this.numberingSystem=undefined;this.placement="bottom";this.scale="m";this.messages=undefined;this.messageOverrides=undefined;this.slottedInShell=undefined;this.effectiveLocale="";this.defaultMessages=undefined;this.hasEndActions=false;this.queue=[];this.queueLength=0;this.queued=false;this.requestedIcon=undefined}openHandler(){if(this.open&&!this.queued){this.calciteInternalAlertRegister.emit()}if(!this.open){this.queue=this.queue.filter((t=>t!==this.el));this.calciteInternalAlertSync.emit({queue:this.queue})}}onMessagesChange(){}updateRequestedIcon(){this.requestedIcon=o(x,this.icon,this.kind)}updateDuration(){if(this.autoClose&&this.autoCloseTimeoutId){window.clearTimeout(this.autoCloseTimeoutId);this.autoCloseTimeoutId=window.setTimeout((()=>this.closeAlert()),y[this.autoCloseDuration])}}connectedCallback(){u(this);v(this);const t=this.open;if(t&&!this.queued){this.openHandler();this.calciteInternalAlertRegister.emit()}f(this)}async componentWillLoad(){c(this);this.requestedIcon=o(x,this.icon,this.kind);await b(this)}componentDidLoad(){d(this)}disconnectedCallback(){window.clearTimeout(this.autoCloseTimeoutId);window.clearTimeout(this.queueTimeout);g(this);m(this);k(this);this.slottedInShell=false}render(){const{hasEndActions:t}=this;const e=i("button",{"aria-label":this.messages.close,class:"alert-close",onClick:this.closeAlert,ref:t=>this.closeButton=t,type:"button"},i("calcite-icon",{icon:"x",scale:this.scale==="l"?"m":"s"}));p.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"};const s=this.queueLength>2?this.queueLength-1:1;const n=p.numberFormatter.format(s);const o=i("div",{class:`${this.queueLength>1?"active ":""}alert-queue-count`},i("calcite-chip",{scale:this.scale,value:n},n));const{open:r,autoClose:c,label:d,placement:h,queued:u,requestedIcon:m,iconFlipRtl:f}=this;const g=c?"alert":"alertdialog";const v=!r;const b=i("slot",{key:"actionsEndSlot",name:z.actionsEnd,onSlotchange:this.actionsEndSlotChangeHandler});return i(a,{"aria-hidden":l(v),"aria-label":d,"calcite-hydrated-hidden":v,role:g},i("div",{class:{container:true,queued:u,[h]:true,[q.slottedInShell]:this.slottedInShell},onPointerEnter:this.autoClose&&this.autoCloseTimeoutId?this.handleMouseOver:null,onPointerLeave:this.autoClose&&this.autoCloseTimeoutId?this.handleMouseLeave:null,ref:this.setTransitionEl},m?i("div",{class:"alert-icon"},i("calcite-icon",{flipRtl:f,icon:m,scale:this.scale==="l"?"m":"s"})):null,i("div",{class:"alert-content"},i("slot",{name:z.title}),i("slot",{name:z.message}),i("slot",{name:z.link})),i("div",{class:q.actionsEnd,hidden:!t},b),this.queueLength>1?o:null,e,r&&!u&&c?i("div",{class:"alert-dismiss-progress"}):null))}alertSync(t){if(this.queue!==t.detail.queue){this.queue=t.detail.queue}this.queueLength=this.queue.length;this.determineActiveAlert();t.stopPropagation()}alertRegister(){if(this.open&&!this.queue.includes(this.el)){this.queued=true;this.queue.push(this.el)}this.calciteInternalAlertSync.emit({queue:this.queue});this.determineActiveAlert()}async setFocus(){await h(this);const t=r(this.el,{selector:"calcite-link"});if(!this.closeButton&&!t){return}else if(t){t.setFocus()}else if(this.closeButton){this.closeButton.focus()}}effectiveLocaleChange(){w(this,this.effectiveLocale)}determineActiveAlert(){var t;if(((t=this.queue)===null||t===void 0?void 0:t[0])===this.el){this.openAlert();if(this.autoClose&&!this.autoCloseTimeoutId){this.initialOpenTime=Date.now();this.autoCloseTimeoutId=window.setTimeout((()=>this.closeAlert()),y[this.autoCloseDuration])}}else{return}}onBeforeOpen(){this.calciteAlertBeforeOpen.emit()}onOpen(){this.calciteAlertOpen.emit()}onBeforeClose(){this.calciteAlertBeforeClose.emit()}onClose(){this.calciteAlertClose.emit()}openAlert(){window.clearTimeout(this.queueTimeout);this.queueTimeout=window.setTimeout((()=>this.queued=false),300)}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],icon:["updateRequestedIcon"],kind:["updateRequestedIcon"],autoCloseDuration:["updateDuration"],effectiveLocale:["effectiveLocaleChange"]}}};j.style=D;export{j as calcite_alert};
//# sourceMappingURL=p-791fe5c5.entry.js.map