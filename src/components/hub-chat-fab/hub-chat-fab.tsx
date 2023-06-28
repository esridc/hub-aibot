import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hub-chat-fab',
  styleUrl: 'hub-chat-fab.css',
  shadow: true,
})
export class HubChatFab {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
