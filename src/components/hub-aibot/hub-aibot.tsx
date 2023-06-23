import { Component, h, Prop, State } from '@stencil/core';
import { setAssetPath } from "@esri/calcite-components/dist/components";
import { HubAIModel } from '../../types/types';
import { fetchImageChat, fetchTextChat } from '../../util/chatgpt';
setAssetPath("./assets");

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

  @State() messages: string[] = [];
  @State() loading = false;

  models = {
    'nearby': 'http://localui.arcgis.com:8000/chat',
    'text': 'https://api.openai.com/v1/chat/completions',
    'image': 'https://api.openai.com/v1/images/generations'
  }

  componentWillLoad() {
    if(!!this.welcome) {
      this.messages.push(this.welcome);
    }
  }

  /**
   * Call the Hub Compass API - langchain
   */
  private async sendNearby(message: string) {
    this.messages = [...this.messages, message];
    this.loading = true;

    const response = await fetch( this.models['nearby'] + '?' + new URLSearchParams({
      query: message
    }));

    // Currently just the text directly!
    const text:string = await response.text();

    console.debug("response", {text})
    this.messages = [...this.messages, text];
    this.loading = false;
  }

  /**
   * Query ChatGPT directly
   */
  private async sendMessage(message: string, language: string = 'en') {
    this.messages = [...this.messages, message];
    this.loading = true;

    const text = await fetchTextChat(message, language, this.personality, this.apikey);

    console.debug("response", {text})
    this.messages = [...this.messages, text];
    this.loading = false;
  }

  private async getImage(message: string) {
    this.messages = [...this.messages, message];
    this.loading = true;

    const imageUrl = await fetchImageChat(message, this.apikey);

    console.debug("response", {imageUrl})
    this.messages = [...this.messages, imageUrl];
    
    this.loading = false;

  }  

  private toggleChat() {
    this.chatOpen = !this.chatOpen;
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && event.shiftKey === false) {
      event.preventDefault();
      const message = this.chatbotRef.textContent?.trim() || '';
      
      console.debug("calling model", [this.model, message])
      switch(this.model){
        case HubAIModel.Nearby: 
          this.sendNearby(message);
          break;
        case HubAIModel.Text: 
          this.sendMessage(message);
          break;
        case HubAIModel.Image:
          this.getImage(message);
          break;
      }
      
      this.chatbotRef.textContent = '';
    }
  }

  render() {
    return (
      <div>
        {this.chatOpen ? (
          <div class="chat-window">
            {this.renderIntro()}
            <div class="messages">
              {this.messages.map((message) => (
                <div class="message" innerHTML={message.replace(/(?:\r\n|\r|\n)/g, '<br>')}></div>
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
              <button class="send-button" onClick={() => this.sendMessage('en')}>
              <calcite-icon icon="send" text-label="Send message"></calcite-icon>
              </button>
            </div>
            <div class="example-prompts">
              <button onClick={() => this.sendMessage('Tell me about your services.', 'en')}>Services</button>
              <button onClick={() => this.sendMessage('What are your office hours?', 'en')}>Office Hours</button>
            </div>
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