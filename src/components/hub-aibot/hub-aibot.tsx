import { Component, h, Listen, Prop, State } from '@stencil/core';
import { setAssetPath } from "@esri/calcite-components/dist/components";
import { ChatbotLayout, HubAIModel, HubChatAuthor, HubChatMessage } from '../../types/types';
import { fetchArcGIS, fetchImageChat, fetchTextChat, setModelUrl } from '../../util/api';
import { addChatHistory, getChatHistory } from '../../util/discussions';
import { IChannel } from '@esri/hub-discussions';

// setAssetPath("./assets");
setAssetPath("https://js.arcgis.com/calcite-components/1.4.3/assets");


@Component({
  tag: 'hub-aibot',
  styleUrl: 'hub-aibot.css',
  shadow: true,
})
export class HubAibot {

  
  @Prop() apikey = '';
  @Prop() modelUrl:string = null;
  @Prop() model:HubAIModel = HubAIModel.Nearby; // 
  @Prop() personality = "You are writing for a government websites readable by 8th graders.";
  @Prop() chatOpen:boolean = false;
  @Prop() welcome:string = null;

  /**
   * Option for Chatbot to be a FAB popup, or a full screen window
   */
  @Prop() layout:ChatbotLayout = ChatbotLayout.Modal;

  @Prop() language:string = 'en';
  @State() messages: HubChatMessage[] = [];
  @State() loading = false;
  @State() chatHistory: IChannel = null

// this.sendMessage();
  async componentWillLoad() {

    if(!!this.modelUrl) {
      setModelUrl(this.model, this.modelUrl);
    }

    if(!!this.welcome) {
      this.messages.push({
        author: "AI",
        text: this.welcome       
      });
    }

    await this.loadHistory();

  }

  // We need to load user context first
  // @Listen('signInCompleted')
  async loadHistory() {
    
    const posts = await getChatHistory();

    console.debug("User signed in, getting chat history", {posts})
    
    posts.map((post) => {
      // We store AI responses with the User, but prefix with "AI: ...".
      const author = post.body.match(/^AI:/) ? "hub" : "user";
      post.body = post.body.replace(/^AI: /,'');

      this.messages.push({
        author: author,
        text: post.body,
        postId: post.id
      })
    })
  }
  
  private toggleChat() {
    this.chatOpen = !this.chatOpen;
  }

  @Listen('hubChatInputEntered')
  async sendMessage(event: CustomEvent<HubChatMessage>) {
    const message = event.detail;

    const post = addChatHistory(message.text);

    console.debug("added to chat history", {message, post})

    this.messages = [...this.messages, message];
    this.loading = true;
    let responseText = "";
    console.debug("calling model", [this.model, message])
    switch(this.model){
      case HubAIModel.Nearby: 
        responseText = await fetchArcGIS(message.text);
        break;
      case HubAIModel.Text: 
        responseText = await fetchTextChat(message.text, this.language, this.personality, this.apikey);
        break;
      case HubAIModel.Image:
        responseText = await fetchImageChat(message.text, this.apikey);
        break;
    }
    
    const aiPost = addChatHistory(`AI: ${responseText}`);
    console.debug("added to chat history", {message, aiPost})

    this.messages = [...this.messages, {
      author: HubChatAuthor.hub,
      text: responseText}];
    this.loading = false;      
  }

  async viewChat() {
    console.debug("viewChat")
    // this.chatHistory = await getChatHistory();
  }
  async setupChat() {
    console.debug("setupChat");
    // const channel = await createChatHistory();
    // console.log("channel", channel);
  }
  render() {
    return (
      <div>
        {this.renderChatBody(this.chatOpen)}
        {this.renderChatFAB()}
      </div>
    );
  }

  private renderChatFAB() {
    return <div class="fab" onClick={() => this.toggleChat()}>
      <span class="tooltip">Open Hub Compass</span>
      <calcite-icon class="fab-icon" icon="explore" text-label="Open Hub Compass"></calcite-icon>
    </div>;
  }

  private renderChatBody(open: boolean = false) {
    const content = [];
    content.push(<div class={`chat-window ${this.layout}`}>
      <div class="messages">
        {this.renderIntro()}
        {/* Placeholders for dev */}
        {/* <hub-chat-action actionLink={() => this.viewChat()}>Get Chat History</hub-chat-action>
        <hub-chat-action actionLink={() => this.setupChat()}>Create Chat History</hub-chat-action> */}

        {this.messages.map((message) => (
          <hub-chat-response 
            class={`message author-${message.author}`} 
            message={message}></hub-chat-response>
        ))}
        {this.loading ? this.renderLoading() : null}
      </div>
      <hub-chat-input class="chat-input"></hub-chat-input>
      {/* <div class="example-prompts">
          <button onClick={() => this.sendMessage('Tell me about your services.', 'en')}>Services</button>
          <button onClick={() => this.sendMessage('What are your office hours?', 'en')}>Office Hours</button>
        </div> */}
    </div>);

    if(this.layout === ChatbotLayout.Modal) {
      return (<calcite-modal open={open} aria-labelledby="modal-title" id="example-modal">
        <div slot="header" id="modal-title">
            AI Chat
        </div>
        <div class="content" slot="content">
          {this.renderShell(content)}
        </div>
      </calcite-modal>)
    } else if (open) {
        return content;
    }
    return null;
  }

  private renderShell(content) {
    return (
      <calcite-shell>
      <calcite-shell-panel collapsed slot="panel-start" position="start" id="shell-panel-start">
          <calcite-action-bar slot="action-bar">
              <calcite-action active text="Chats" icon="speech-bubble" indicator></calcite-action>
              <calcite-action icon="configure" text="Configure"></calcite-action>
          </calcite-action-bar>
          <calcite-panel heading="Previous Chats" id="panel-start">
            {this.renderHistorySelect("Today", true)}
            {this.renderHistorySelect("June 25, 2023")}
          </calcite-panel>
      </calcite-shell-panel>
      {/* <calcite-shell-panel slot="panel-end" position="end" id="shell-panel-end" collapsed>
          <calcite-action-bar slot="action-bar">
              <calcite-action text="Layer properties" icon="sliders-horizontal"></calcite-action>
              <calcite-action text="Styles" icon="shapes"></calcite-action>
              <calcite-action text="Filter" icon="layer-filter"></calcite-action>
              <calcite-action text="Configure pop-ups" icon="popup"></calcite-action>
          </calcite-action-bar>
          <calcite-panel heading="Panel 2" id="panel-end" closable closed>
              <calcite-block heading="Block 1" collapsible></calcite-block>
          </calcite-panel>
      </calcite-shell-panel> */}
      <calcite-panel heading="Active Chat">
        {content}
      </calcite-panel>
  </calcite-shell>
    );
  }

//   <!--         
//   <script>
//     const shellPanelStart = document.getElementById("shell-panel-start");
//     const shellPanelEnd = document.getElementById("shell-panel-end");
//     const panelStart = document.getElementById("panel-start");
//     const panelEnd = document.getElementById("panel-end");

//     const actionsStart = shellPanelStart?.querySelectorAll("calcite-action");
//     const actionsEnd = shellPanelEnd?.querySelectorAll("calcite-action");

//     actionsStart?.forEach(el => {
//         el.addEventListener("click", function(event) {
//             actionsStart?.forEach(action => (action.active = false));
//             el.active = panelStart.closed;
//             shellPanelStart.collapsed = !shellPanelStart.collapsed;
//             panelStart.closed = !panelStart.closed;
//         });
//     });

//     panelEnd?.addEventListener("calcitePanelClose", function(event) {
//         actionsEnd.forEach(action => (action.active = false));
//         shellPanelEnd.collapsed = true;
//     });

//     actionsEnd?.forEach(el => {
//         el.addEventListener("click", function(event) {
//             actionsEnd?.forEach(action => (action.active = false));
//             el.active = panelEnd.closed;
//             shellPanelEnd.collapsed = !shellPanelEnd.collapsed;
//             panelEnd.closed = !panelEnd.closed;
//         });
//     });
// </script> -->  
  private renderHistorySelect(heading:string = "", active:boolean = false) {
    return <calcite-block heading={heading}>
      <calcite-icon scale="s" slot="icon" icon={active ? "check-circle" : ""}></calcite-icon>

      <div slot="header-menu-actions">
        <calcite-action text="Delete this Chat" icon="x" text-enabled></calcite-action>
      </div>
    </calcite-block>;
  }

  private renderLoading() {
    return (
      <div class="loading">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>);
  }

  private renderIntro() {
    return [
      <hub-chat-response class={`message author-hub`} message={{author: 'hub', text:'Welcome to the Hub Compass Chatbot!' }} allowFeedback={false}></hub-chat-response>,
      <hub-chat-response class={`message author-hub`} message={{author: 'hub', text:'How can I assist you today?' }} allowFeedback={false}></hub-chat-response>
    ]
  }
}