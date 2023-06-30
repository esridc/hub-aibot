import { Component, h, Listen, Prop, State } from '@stencil/core';
import { setAssetPath } from "@esri/calcite-components/dist/components";
import { HubAIModel, HubChatAuthor, HubChatMessage } from '../../types/types';
import { fetchArcGIS, fetchImageChat, fetchTextChat, setModelUrl } from '../../util/api';
import { addChatHistory, getChatHistory } from '../../util/discussions';
import { IChannel } from '@esri/hub-discussions';

setAssetPath("./assets");

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
      this.messages.push({
        author: "user",
        text: post.body
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
    let text = "";
    console.debug("calling model", [this.model, message])
    switch(this.model){
      case HubAIModel.Nearby: 
        text = await fetchArcGIS(message.text);
        break;
      case HubAIModel.Text: 
        text = await fetchTextChat(message.text, this.language, this.personality, this.apikey);
        break;
      case HubAIModel.Image:
        text = await fetchImageChat(message.text, this.apikey);
        break;
    }
    
    const aiPost = addChatHistory(`AI: ${message.text}`);
    console.debug("added to chat history", {message, aiPost})

    this.messages = [...this.messages, {
      author: HubChatAuthor.hub,
      text: text}];
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
        {this.chatOpen ? (
          <div class="chat-window">
            <div class="messages">
              {this.renderIntro()}
              {/* Placeholders for dev */}
              {/* <hub-chat-action actionLink={() => this.viewChat()}>Get Chat History</hub-chat-action>
              <hub-chat-action actionLink={() => this.setupChat()}>Create Chat History</hub-chat-action> */}

              {this.messages.map((message) => (
                <hub-chat-response class={`message author-${message.author}`} message={message}></hub-chat-response>
              ))}
              {this.loading ? this.renderLoading() : null}
            </div>
            <hub-chat-input></hub-chat-input>
            {/* <div class="example-prompts">
              <button onClick={() => this.sendMessage('Tell me about your services.', 'en')}>Services</button>
              <button onClick={() => this.sendMessage('What are your office hours?', 'en')}>Office Hours</button>
            </div> */}
          </div>
        ) : null}
        <div class="fab" onClick={() => this.toggleChat()}>
          <span class="tooltip">Open Hub Compass</span>
          <calcite-icon class="fab-icon" icon="explore" text-label="Open Hub Compass"></calcite-icon>
        </div>
      </div>
    );
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
      <hub-chat-response class={`message author-hub`} message={{author: 'hub', text:'Welcome to the Hub Compass Chatbot!' }}></hub-chat-response>,
      <hub-chat-response class={`message author-hub`} message={{author: 'hub', text:'How can I assist you today?' }}></hub-chat-response>
    ]
  }
}