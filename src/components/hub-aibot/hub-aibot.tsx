import { Component, h, Listen, Prop, State } from '@stencil/core';
import { setAssetPath } from "@esri/calcite-components/dist/components";
import { ChatbotLayout, HubAIModel, HubChatAuthor, HubChatMessage } from '../../types/types';
import { fetchArcGIS, fetchImageChat, fetchTextChat, setModelUrl } from '../../util/api';
import { addChatHistory, getChannels, getChatChannel, getChatHistory, getGroupChannel } from '../../util/discussions';
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
  @State() currentChannel: IChannel = null
  @State() availableChannels: IChannel[] = []

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

    this.availableChannels = getChannels();
    this.currentChannel = await getChatChannel();
    await this.loadHistory(this.currentChannel.id);

  }

  // We need to load user context first
  // @Listen('signInCompleted')
  async loadHistory(channelId:string = null) {
    console.debug("loadHistory", {channelId})
    const posts = await getChatHistory(channelId);

    console.debug("User signed in, getting chat history", {channelId, posts})
    this.messages = [];
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
    // TODO: clean up this snippet for storing  message history.
    const message = event.detail;
    const post = await addChatHistory(this.currentChannel.id, message.text);
    message.postId = post.id;

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
    
    const aiPost = await addChatHistory(this.currentChannel.id, `AI: ${responseText}`, post.id);
    console.debug("added to chat history", {message, aiPost})

    this.messages = [...this.messages, {
      author: HubChatAuthor.hub,
      text: responseText,
      postId: aiPost.id
    }];
    this.loading = false;      
  }

  async viewChat() {
    console.debug("viewChat")
    // this.currentChannel = await getChatHistory();
  }
  async setupChat() {
    console.debug("setupChat");
    // const channel = await createcurrentChannel();
    // console.log("channel", channel);
  }
  render() {
    return (
      <div>
        {this.renderChatWindow(this.chatOpen)}
        {this.renderChatFAB()}
      </div>
    );
  }

  scrollToLastMessage() {
    this.messagesEl.scrollTo({ top: this.messagesEl.scrollHeight, behavior: 'smooth' });    
  }
  componentDidRender() {
    this.scrollToLastMessage();
  }
  componentDidUpdate() {
    this.scrollToLastMessage();
  }
  
  private renderChatFAB() {
    return <div class="fab" onClick={() => this.toggleChat()}>
      <span class="tooltip">Open Hub Compass</span>
      <calcite-icon class="fab-icon" icon="explore" text-label="Open Hub Compass"></calcite-icon>
    </div>;
  }

  private renderChatWindow(open: boolean = false) {
    const content = this.renderChatBody();
    
    if(this.layout === ChatbotLayout.Modal) {
      return (this.renderChatModal(open, content))
    } else if (open) {
        return content;
    }
    return null;
  }

  messagesEl: HTMLDivElement;
  private renderChatBody(): any {
    return <div class={`chat-window ${this.layout}`}>
      <div class="messages" ref={(el) => this.messagesEl = el}>
        {/* {this.renderIntro()} */}

        {this.messages.map((message) => (
          <hub-chat-response
            class={`message author-${message.author}`}
            message={message}></hub-chat-response>
        ))}
        {this.loading ? this.renderLoading() : null}
      </div>
      <hub-chat-input class="chat-input"></hub-chat-input>
    </div>;
  }

  private renderChatModal(open: boolean, content: any[]) {
    return <calcite-modal fullscreen open={open} aria-labelledby="modal-title" id="example-modal">
      <div slot="header" id="modal-title">
        AI Chat
      </div>
      <div class="content" slot="content">
        {this.renderShell(content)}
      </div>
    </calcite-modal>;
  }

  private renderShell(content) {
    return (
      <calcite-shell>
      <calcite-shell-panel collapsed={false} slot="panel-start" position="start" id="shell-panel-start">
          <calcite-action-bar slot="action-bar">
              <calcite-action active text="Chats" icon="speech-bubble" indicator></calcite-action>
              <calcite-action icon="configure" text="Configure"></calcite-action>
          </calcite-action-bar>
          <calcite-panel heading="Channels" id="panel-start">
            {this.availableChannels.map((channel) => {
              return this.renderHistorySelect(channel)
            })}
          </calcite-panel>
      </calcite-shell-panel>

      <calcite-panel heading={`Channel: ${this.currentChannel['title'] || this.currentChannel.name}`}>
        {content}
      </calcite-panel>
      <calcite-panel heading="Map" slot="panel-end"  >
        <hub-chat-map></hub-chat-map>
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

  /**
   * Change to this channel body
   */
  private async selectChannel(channel: IChannel) {
    this.currentChannel = channel;
    console.debug("selectChannel", channel)
    
    // We're actually showing groups, so get the corresponding Channel, if it exists.
    const groupChannel = await getGroupChannel(channel.id);
    
    if(!!groupChannel) {
      this.currentChannel = groupChannel;
      await this.loadHistory(this.currentChannel.id)
    } else {
      this.messages = [];
    }
  }
  private renderHistorySelect(channel: any = null, active:boolean = false) {
    return <calcite-block heading={channel.title} onClick={(_ev) => this.selectChannel(channel)}>
      <calcite-icon scale="s" slot="icon" icon={active ? "check-circle" : ""}></calcite-icon>

      {this.renderFeedback}
    </calcite-block>;
  }
  private readonly renderFeedback = <div slot="header-menu-actions">
    <calcite-action text="Delete this Chat" icon="x" text-enabled></calcite-action>
  </div>;


  private renderLoading() {
    return (
      <div class="loading">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>);
  }

  private readonly renderMap = `<hub-chat-map></hub-chat-map>`;

  private renderIntro() {
    return [
      <hub-chat-response class={`message author-hub`} message={{author: 'hub', text:'Welcome to the Hub Compass Chatbot!' }} allowFeedback={false}></hub-chat-response>,
      <hub-chat-response class={`message author-hub`} message={{author: 'hub', text:'How can I assist you today?' }} allowFeedback={false}></hub-chat-response>,
      <hub-chat-response class={`message author-hub`} message={{author: 'hub', text:`Here is where we are. ${this.renderMap}` }} allowFeedback={false}></hub-chat-response>
    ]
  }
}