import { Component, Host, Prop, h } from '@stencil/core';
import { HubChatMessage } from '../../types/types';

@Component({
  tag: 'hub-chat-response',
  styleUrl: 'hub-chat-response.css',
  shadow: true,
})
export class HubChatResponse {

  @Prop() message: HubChatMessage = null;

  cleanMessageText(text): string {
    return text.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }
  render() {
    return (
      <Host>
        <slot></slot>
        <div 
          class={`message author-${this.message.author}`}
          >
        <div
          class="avatar"
        ></div>
        <div 
          class="text"
          innerHTML={this.cleanMessageText(this.message.text)}
        ></div>
        </div>
      </Host>
    );
  }

}
