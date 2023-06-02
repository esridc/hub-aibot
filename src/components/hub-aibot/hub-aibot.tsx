import { Component, h, Prop, State } from '@stencil/core';
import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath("./assets");

@Component({
  tag: 'hub-aibot',
  styleUrl: 'hub-aibot.css',
  shadow: true,
})
export class HubAibot {
  private chatbotRef!: HTMLDivElement;

  @Prop() apikey = '';
  @Prop() model = 'text'
  @Prop() personality = "You are writing for a government websites readable by 8th graders.";
  @Prop() chatOpen:boolean = false;
  @Prop() welcome:string = null;

  @State() messages: string[] = [];
  @State() loading = false;

  models = {
    'text': 'https://api.openai.com/v1/chat/completions',
    'image': 'https://api.openai.com/v1/images/generations'
  }

  componentWillLoad() {
    if(!!this.welcome) {
      this.messages.push(this.welcome);
    }
  }
  private async sendMessage(message: string, language: string = 'en') {
    this.messages = [...this.messages, message];
    this.loading = true;

    const modelMap = {
      en: "gpt-3.5-turbo",
      es: 'curie',
      fr: 'davinci',
    };
    const model = modelMap[language] || "gpt-3.5-turbo";


    const response = await fetch( this.models['text'], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apikey}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {"role": "system", "content": this.personality},
          {role: "user", content: message}
        ],
        temperature: 0.4
      }),
    });

    const data = await response.json();
    const text = data.choices[0]?.message?.content;

    console.debug("response", {text})
    this.messages = [...this.messages, text];
    this.loading = false;
  }

  private async getImage(message: string) {
    this.messages = [...this.messages, message];
    this.loading = true;

    const response = await fetch( this.models['image'], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apikey}`,
      },
      body: JSON.stringify({
        prompt: message,
      }),
    });

    const data = await response.json();
    const imageUrl = data.data[0]?.url;

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
      
      switch(this.model){
        case 'text': 
          this.sendMessage(message);
          break;
        case 'image':
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