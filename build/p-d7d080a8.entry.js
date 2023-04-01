import{r as t,h as o}from"./p-c6528cc2.js";const e=":host{display:block;position:fixed;bottom:20px;right:20px;z-index:9999}.fab{display:flex;justify-content:center;align-items:center;width:56px;height:56px;border-radius:50%;background-color:#0077c2;box-shadow:0px 4px 10px rgba(0, 0, 0, 0.1);color:white;font-size:28px;cursor:pointer}.chat-window{position:fixed;bottom:90px;right:20px;width:350px;height:400px;border-radius:10px;background-color:white;box-shadow:0px 4px 10px rgba(0, 0, 0, 0.1);overflow:hidden}.messages{padding:10px;height:330px;overflow-y:scroll}.message{margin-bottom:10px;padding:10px;border-radius:10px;background-color:#f5f5f5}.input{padding:10px;height:60px;border-top:1px solid #e0e0e0;outline:none}.language-buttons{display:flex;justify-content:center;margin-top:10px}.language-buttons button{margin:0 5px;padding:5px 10px;border:none;border-radius:20px;border-color:#0077c2;background-color:white;color:white;font-size:14px;cursor:pointer}.language-buttons button:focus{outline:none}.language-buttons button:active{background-color:#005da8}";const i=class{constructor(o){t(this,o);this.models={text:"https://api.openai.com/v1/chat/completions",image:"https://api.openai.com/v1/images/generations"};this.apikey="";this.model="text";this.personality="You are writing for a government websites readable by 8th graders.";this.chatOpen=false;this.messages=["Hi! I'm Andy AI. Let me know what you're thinking..."]}async sendMessage(t){var o,e;this.messages=[...this.messages,t];const i=await fetch(this.models["text"],{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apikey}`},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"system",content:this.personality},{role:"user",content:t}],temperature:.4})});const s=await i.json();const n=(e=(o=s.choices[0])===null||o===void 0?void 0:o.message)===null||e===void 0?void 0:e.content;console.debug("response",{text:n});this.messages=[...this.messages,n]}async getImage(t){var o;this.messages=[...this.messages,t];const e=await fetch(this.models["image"],{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apikey}`},body:JSON.stringify({prompt:t})});const i=await e.json();const s=(o=i.data[0])===null||o===void 0?void 0:o.url;console.debug("response",{imageUrl:s});this.messages=[...this.messages,s]}toggleChat(){this.chatOpen=!this.chatOpen}handleKeyDown(t){var o;if(t.key==="Enter"&&t.shiftKey===false){t.preventDefault();const e=((o=this.chatbotRef.textContent)===null||o===void 0?void 0:o.trim())||"";switch(this.model){case"text":this.sendMessage(e);break;case"image":this.getImage(e);break}this.chatbotRef.textContent=""}}render(){return o("div",null,this.chatOpen?o("div",{class:"chat-window"},o("div",{class:"messages"},this.messages.map((t=>o("div",{class:"message",innerHTML:t.replace(/(?:\r\n|\r|\n)/g,"<br>")})))),o("div",{class:"input",contentEditable:true,onKeyDown:t=>this.handleKeyDown(t),ref:t=>this.chatbotRef=t})):null,o("div",{class:"fab",onClick:()=>this.toggleChat()},o("span",{class:"material-icons"},"🤖")))}};i.style=e;export{i as hub_aibot};
//# sourceMappingURL=p-d7d080a8.entry.js.map