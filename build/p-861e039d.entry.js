import{r as t,h as e}from"./p-48186cc4.js";import{H as o,C as a,g as s,a as i,b as n}from"./p-481973a7.js";import"./p-6c99a78d.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const r="calcite-mode-auto";const c="calcite-mode-dark";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */function l(){const{classList:t}=document.body;const e=window.matchMedia("(prefers-color-scheme: dark)").matches;const o=()=>t.contains(c)||t.contains(r)&&e?"dark":"light";const a=t=>document.body.dispatchEvent(new CustomEvent("calciteModeChange",{bubbles:true,detail:{mode:t}}));const s=t=>{i!==t&&a(t);i=t};let i=o();a(i);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(t=>s(t.matches?"dark":"light")));new MutationObserver((()=>s(o()))).observe(document.body,{attributes:true,attributeFilter:["class"]})}function h(){const t=typeof window!=="undefined"&&typeof location!=="undefined"&&typeof document!=="undefined"&&window.location===location&&window.document===document;if(t){if(document.readyState==="interactive"){l()}else{document.addEventListener("DOMContentLoaded",(()=>l()),{once:true})}}}const d=h;d();const p={nearby:"https://ajturner-refactored-space-cod-6rr7x76f4gg6-8000.preview.app.github.dev/chat",text:"https://api.openai.com/v1/chat/completions",image:"https://api.openai.com/v1/images/generations"};function u(t,e){p[t]=e}async function b(t){const e=await fetch(p["nearby"]+"?"+new URLSearchParams({query:t}));const o=await e.text();return o}async function g(t,e="en",o,a){var s,i;const n={en:"gpt-3.5-turbo",es:"curie",fr:"davinci"};const r=n[e]||"gpt-3.5-turbo";const c=await fetch(p["text"],{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({model:r,messages:[{role:"system",content:o},{role:"user",content:t}],temperature:.4})});const l=await c.json();const h=(i=(s=l.choices[0])===null||s===void 0?void 0:s.message)===null||i===void 0?void 0:i.content;return h}async function m(t,e){var o;const a=await fetch(p["image"],{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({prompt:t})});const s=await a.json();const i=(o=s.data[0])===null||o===void 0?void 0:o.url;return i}const f=":host{display:block;position:fixed;bottom:20px;right:20px;}.fab{display:flex;justify-content:center;align-items:center;position:relative;color:white;font-size:28px;cursor:pointer;transition:width 0.3s;width:140px}.content{height:80vh}.fab:hover .fab-icon{background-color:gray;border-color:#0077c2}.fab .fab-icon{width:56px;background-color:#0077c2;width:56px;height:56px;border-radius:50%;box-shadow:0px 4px 10px rgba(0, 0, 0, 0.1)}.tooltip{position:absolute;top:-30px;left:0;right:0;margin:auto;display:none;background-color:rgba(0, 0, 0, 0.8);color:white;padding:4px 8px;border-radius:4px;font-size:12px;text-align:center;pointer-events:none}.fab:hover .tooltip{display:block}.chat-window.popup{position:fixed;bottom:90px;right:20px;width:350px;max-height:80vh;border-radius:10px;background-color:white;box-shadow:0px 4px 10px rgba(0, 0, 0, 0.1);overflow:hidden;height:600px}.chat-window{display:flex;height:100%;flex-direction:column}.messages{flex:1;display:flex;width:95%;padding:10px;overflow-y:scroll;flex-direction:column;gap:1rem}.chat-input{height:100px;width:100%;background-color:white;flex:0}.loading{display:flex;align-items:center;justify-content:center;height:40px}.dot{display:inline-block;width:8px;height:8px;margin:0 2px;background-color:#0077c2;border-radius:50%;animation:dot-pulse 1.2s infinite ease-in-out}@keyframes dot-pulse{0%{transform:scale(1)}50%{transform:scale(1.3)}100%{transform:scale(1)}}.example-prompts{display:flex;justify-content:center;padding:10px}.example-prompts button{margin:0 5px;padding:8px 16px;border:none;border-radius:20px;background-color:#0077c2;color:white;font-size:14px;cursor:pointer}.example-prompts button:focus{outline:none}.example-prompts button:active{background-color:#005da8}.language-buttons{display:flex;justify-content:center;margin-top:10px}.language-buttons button{margin:0 5px;padding:5px 10px;border:none;border-radius:20px;background-color:#0077c2;color:white;font-size:14px;cursor:pointer}.language-buttons button:focus{outline:none}.language-buttons button:active{background-color:#005da8}";const x=class{constructor(s){t(this,s);this.renderFeedback=e("div",{slot:"header-menu-actions"},e("calcite-action",{text:"Delete this Chat",icon:"x","text-enabled":true}));this.renderMap=`<hub-chat-map></hub-chat-map>`;this.apikey="";this.modelUrl=null;this.model=o.Nearby;this.personality="You are writing for a government websites readable by 8th graders.";this.chatOpen=false;this.welcome=null;this.layout=a.Modal;this.language="en";this.messages=[];this.loading=false;this.chatHistory=null}async componentWillLoad(){if(!!this.modelUrl){u(this.model,this.modelUrl)}if(!!this.welcome){this.messages.push({author:"AI",text:this.welcome})}await this.loadHistory()}async loadHistory(){const t=await s();console.debug("User signed in, getting chat history",{posts:t});t.map((t=>{const e=t.body.match(/^AI:/)?"hub":"user";t.body=t.body.replace(/^AI: /,"");this.messages.push({author:e,text:t.body,postId:t.id})}))}toggleChat(){this.chatOpen=!this.chatOpen}async sendMessage(t){const e=t.detail;const a=i(e.text);console.debug("added to chat history",{message:e,post:a});this.messages=[...this.messages,e];this.loading=true;let s="";console.debug("calling model",[this.model,e]);switch(this.model){case o.Nearby:s=await b(e.text);break;case o.Text:s=await g(e.text,this.language,this.personality,this.apikey);break;case o.Image:s=await m(e.text,this.apikey);break}const r=i(`AI: ${s}`);console.debug("added to chat history",{message:e,aiPost:r});this.messages=[...this.messages,{author:n.hub,text:s}];this.loading=false}async viewChat(){console.debug("viewChat")}async setupChat(){console.debug("setupChat")}render(){return e("div",null,this.renderChatWindow(this.chatOpen),this.renderChatFAB())}scrollToLastMessage(){this.messagesEl.scrollTo({top:this.messagesEl.scrollHeight,behavior:"smooth"})}componentDidRender(){this.scrollToLastMessage()}componentDidUpdate(){this.scrollToLastMessage()}renderChatFAB(){return e("div",{class:"fab",onClick:()=>this.toggleChat()},e("span",{class:"tooltip"},"Open Hub Compass"),e("calcite-icon",{class:"fab-icon",icon:"explore","text-label":"Open Hub Compass"}))}renderChatWindow(t=false){const e=this.renderChatBody();if(this.layout===a.Modal){return this.renderChatModal(t,e)}else if(t){return e}return null}renderChatBody(){return e("div",{class:`chat-window ${this.layout}`},e("div",{class:"messages",ref:t=>this.messagesEl=t},this.renderIntro(),this.messages.map((t=>e("hub-chat-response",{class:`message author-${t.author}`,message:t}))),this.loading?this.renderLoading():null),e("hub-chat-input",{class:"chat-input"}))}renderChatModal(t,o){return e("calcite-modal",{open:t,"aria-labelledby":"modal-title",id:"example-modal"},e("div",{slot:"header",id:"modal-title"},"AI Chat"),e("div",{class:"content",slot:"content"},this.renderShell(o)))}renderShell(t){return e("calcite-shell",null,e("calcite-shell-panel",{collapsed:true,slot:"panel-start",position:"start",id:"shell-panel-start"},e("calcite-action-bar",{slot:"action-bar"},e("calcite-action",{active:true,text:"Chats",icon:"speech-bubble",indicator:true}),e("calcite-action",{icon:"configure",text:"Configure"})),e("calcite-panel",{heading:"Previous Chats",id:"panel-start"},this.renderHistorySelect("Today",true),this.renderHistorySelect("June 25, 2023"))),e("calcite-panel",{heading:"Active Chat"},t))}renderHistorySelect(t="",o=false){return e("calcite-block",{heading:t},e("calcite-icon",{scale:"s",slot:"icon",icon:o?"check-circle":""}),this.renderFeedback)}renderLoading(){return e("div",{class:"loading"},e("div",{class:"dot"}),e("div",{class:"dot"}),e("div",{class:"dot"}))}renderIntro(){return[e("hub-chat-response",{class:`message author-hub`,message:{author:"hub",text:"Welcome to the Hub Compass Chatbot!"},allowFeedback:false}),e("hub-chat-response",{class:`message author-hub`,message:{author:"hub",text:"How can I assist you today?"},allowFeedback:false}),e("hub-chat-response",{class:`message author-hub`,message:{author:"hub",text:`Here is where we are. ${this.renderMap}`},allowFeedback:false})]}};x.style=f;export{x as hub_aibot};
//# sourceMappingURL=p-861e039d.entry.js.map