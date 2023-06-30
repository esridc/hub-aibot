import { Component, h, Listen, Prop, State } from '@stencil/core';
import { setAssetPath } from "@esri/calcite-components/dist/components";
import { HubAIModel, HubChatAuthor, HubChatMessage } from '../../types/types';
import { fetchArcGIS, fetchImageChat, fetchTextChat } from '../../util/api';
setAssetPath("./assets");


@Component({
  tag: 'hub-aibot',
  styleUrl: 'hub-aibot.css',
  shadow: true,
})
export class HubAibot {

  
  @Prop() apikey = '';
  @Prop() model:HubAIModel = HubAIModel.Nearby; // 
  @Prop() personality = "You are writing for a government websites readable by 8th graders.";
  @Prop() chatOpen:boolean = false;
  @Prop() welcome:string = null;

  @Prop() language:string = 'en';
  @State() messages: HubChatMessage[] = [];
  @State() loading = false;


// this.sendMessage();
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

  @Listen('hubChatInputEntered')
  async sendMessage(event: CustomEvent<HubChatMessage>) {
    const message = event.detail;

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

    this.messages = [...this.messages, {
      author: HubChatAuthor.hub,
      text: text}];
    this.loading = false;      
  }


  render() {
    return (
      <div>
        {this.chatOpen ? (
          <div class="chat-window">
            <div class="messages">
              {this.renderIntro()}
              {/* Placeholders for dev */}
              <hub-chat-response class={`message author-user`} message={{author: 'user', text:'thank you!' }}></hub-chat-response>
              <hub-chat-response class={`message author-hub`} message={{author: 'hub', text:'welcome' }}></hub-chat-response>
              <hub-chat-action actionLink="https://hub.arcgis.com">Search Near Me</hub-chat-action>
              <hub-chat-action>Enter your Address</hub-chat-action>
              <hub-chat-response class={`message author-user`} message={{author: 'user', text:'thank you!' }}></hub-chat-response>
              <hub-chat-response class={`message author-user`} message={{author: 'user', text:'thank you!' }}></hub-chat-response>

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