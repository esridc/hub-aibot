import { Component, h, Listen, Method, Prop, State } from '@stencil/core';
import { setAssetPath } from "@esri/calcite-components/dist/components";
import { ChatbotLayout, HubAIModel, HubChatAuthor, HubChatMessage } from '../../types/types';
import { fetchArcGIS, fetchImageChat, fetchTextChat, setModelUrl } from '../../util/api';
import { addChatHistory, createChatHistory, getChannels, getChatChannel, getChatHistory, getGroupChannel } from '../../util/discussions';
import { IChannel } from '@esri/hub-discussions';
import state from '../../util/state';

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
  @Prop() useAI: boolean = true;

  /**
   * Option for Chatbot to be a FAB popup, or a full screen window
   */
  @Prop() layout:ChatbotLayout = ChatbotLayout.Modal;

  @Prop() language:string = 'en';
  @State() messages: HubChatMessage[] = [];
  @State() loading = false;
  @State() currentChannel: IChannel = null
  @State() availableChannels: IChannel[] = []
  @State() showCreateChannel: boolean = false;

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
  @Method()
  public async loadHistory(channelId:string = null) {
    if(!channelId) {
      channelId = this.currentChannel.id;
    }
    console.debug("loadHistory", {channelId})
    const posts = await getChatHistory(channelId);

    console.debug("User signed in, getting chat history", {channelId, posts})
    this.messages = [];
    posts.map((post) => {
      // We store AI responses with the User, but prefix with "AI: ...".
      let author = post.creator !== state.user.username ? post.creator : "user";

      if(post.body.match(/^AI:/))  {
        author = "hub";
        post.body = post.body.replace(/^AI: /,'');
      }


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

    if(this.useAI) {
      await this.queryAI(message, post);      
    }
    
  }

  private async queryAI(message: HubChatMessage, post) {
    this.messages = [...this.messages, message];
    this.loading = true;
    let responseText = "";
    console.debug("calling model", [this.model, message]);
    switch (this.model) {
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
    console.debug("added to chat history", { message, aiPost });

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
        {this.showCreateChannel ? this.renderCreateChannel() : null}
        {this.loading ? this.renderLoading() : null}
      </div>
      <hub-chat-input class="chat-input" disabled={this.loading}></hub-chat-input>
    </div>;
  }

  private async createChannel() {
    // this is actually a group
    console.debug("Create Channel", {groupId: this.currentChannel.id})
    //@ts-ignore
    const newChannel = await createChatHistory(this.currentChannel);
    this.currentChannel = newChannel;

    this.showCreateChannel = false;
    this.loading = false;
  }
  private renderCreateChannel() {
    return([
        <em>There is not yet a Discussion channel for this group</em>,
        <calcite-button onClick={() => this.createChannel.call(this)}>Create a new Channel</calcite-button>
      ]
    )
  }

  private renderChatModal(open: boolean, content: any[]) {
    return <calcite-modal fullscreen={true} open={open} aria-labelledby="modal-title" id="example-modal">
      <div slot="header" id="modal-title">
        AI Chat
      </div>
      <div class="content" slot="content">
        {this.renderShell(content)}
      </div>
    </calcite-modal>;
  }

  private actionChannelsEl:HTMLCalciteActionElement;
  private actionMapEl:HTMLCalciteActionElement;
  private channelsPanelEl:HTMLCalcitePanelElement;
  private shellPanelEl:HTMLCalciteShellPanelElement;
  private shellMapEl:HTMLCalciteShellPanelElement;

  private renderShell(content) {
    return (
      <calcite-shell>
      <calcite-shell-panel ref={(el) => this.shellPanelEl = el} collapsed={true} slot="panel-start" position="start" id="shell-panel-start">
          <calcite-action-bar slot="action-bar">
              <calcite-action ref={(el) => this.actionChannelsEl = el} 
                onClick={() => { this.shellPanelEl.collapsed = !this.shellPanelEl.collapsed; this.actionMapEl.active = !this.shellPanelEl.collapsed}}
                active text="Channels" icon="speech-bubble" indicator></calcite-action>
              {/* <calcite-action ref={(el) => this.actionMapEl = el} 
                onClick={() => { this.shellMapEl.collapsed = !this.shellMapEl.collapsed; this.actionMapEl.active = !this.shellMapEl.collapsed}}
                icon="Map" text="Map"></calcite-action> */}
          </calcite-action-bar>
          <calcite-panel ref={(el) => this.channelsPanelEl = el} heading="Channels" id="panel-start">
            {this.availableChannels.map((channel) => {
              return this.renderHistorySelect(channel)
            })}
          </calcite-panel>
      </calcite-shell-panel>

      <calcite-panel heading={`Channel: ${this.currentChannel.name || this.currentChannel['title'] }`}>
        {content}
      </calcite-panel>
      {/* <calcite-shell-panel ref={(el) => this.shellMapEl = el} collapsed={true} slot="panel-end" id="shell-panel-end"> */}
        <calcite-panel heading="Map" slot="panel-end" >
          <hub-chat-map></hub-chat-map>
        </calcite-panel>
      {/* </calcite-shell-panel> */}
  </calcite-shell>
    );
  }
  
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
      this.loading = false;
      this.showCreateChannel = false;
      await this.loadHistory(this.currentChannel.id)
    } else {
      this.messages = [];
      this.loading = true;
      this.showCreateChannel = true;
    }
  }
  private renderHistorySelect(channel: any = null, active:boolean = false) {
    return <calcite-block class="channel" heading={channel.title} onClick={(_ev) => this.selectChannel(channel)}>
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