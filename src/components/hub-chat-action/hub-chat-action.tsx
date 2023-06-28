import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hub-chat-action',
  styleUrl: 'hub-chat-action.css',
  shadow: true,
})
export class HubChatAction {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
