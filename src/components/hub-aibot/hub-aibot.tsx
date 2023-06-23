import { Component, h, Prop, State } from '@stencil/core';
import { setAssetPath } from "@esri/calcite-components/dist/components";
import { HubAIModel } from '../../types/types';
import { fetchArcGIS, fetchImageChat, fetchTextChat } from '../../util/api';
setAssetPath("./assets");

type HubAIMessage = {
  text:string,
  author: string
}
@Component({
  tag: 'hub-aibot',
  styleUrl: 'hub-aibot.css',
  shadow: true,
})
export class HubAibot {
  private chatbotRef!: HTMLDivElement;

  
  @Prop() apikey = '';
  @Prop() model:HubAIModel = HubAIModel.Nearby; // 
  @Prop() personality = "You are writing for a government websites readable by 8th graders.";
  @Prop() chatOpen:boolean = false;
  @Prop() welcome:string = null;

  @Prop() language:string = 'en';
  @State() messages: HubAIMessage[] = [];
  @State() loading = false;


  componentWillLoad() {
    if(!!this.welcome) {
      this.messages.push({
        author: "AI",
        text: this.welcome       
      });
    }
  }

  private toggleChat() {
    this.chatOpen = !this.chatOpen;
  }

  async sendMessage() {
    const message = this.chatbotRef.textContent?.trim() || '';

    this.messages = [...this.messages, {
      author: "AI",
      text: message}];
    this.loading = true;
    let text = "";
    console.debug("calling model", [this.model, message])
    switch(this.model){
      case HubAIModel.Nearby: 
        text = await fetchArcGIS(message);
        break;
      case HubAIModel.Text: 
        text = await fetchTextChat(message, this.language, this.personality, this.apikey);
        break;
      case HubAIModel.Image:
        text = await fetchImageChat(message, this.apikey);
        break;
    }

    this.messages = [...this.messages, {
      author: "AI",
      text: text}];
    this.loading = false;      
    this.chatbotRef.textContent = '';
  }

  private async handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && event.shiftKey === false) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  render() {
    return (
      <div>
        {this.chatOpen ? (
          <div class="chat-window">
            <div class="messages">
              {this.renderIntro()}
              {this.messages.map((message) => (
                <div class="message" innerHTML={message.text.replace(/(?:\r\n|\r|\n)/g, '<br>')}></div>
              ))}
              {this.loading ? this.renderLoading() : null}
            </div>
            <div class="input-container">
              <div
                class="input"
                contentEditable={true}
                onKeyDown={(event: KeyboardEvent) => this.handleKeyDown(event)}
                ref={(el) => (this.chatbotRef = el!)}
              ></div>
              <button class="send-button" onClick={() => this.sendMessage()}>
              <calcite-icon icon="send" text-label="Send message"></calcite-icon>
              </button>
            </div>
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
    return <div class="intro">
      <p>Welcome to the Hub Compass Chatbot!</p>
      <p>How can I assist you today?</p>
    </div>;
  }
}