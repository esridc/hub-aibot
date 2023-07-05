import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hub-chat-gallery',
  styleUrl: 'hub-chat-gallery.css',
  shadow: true,
})
export class HubChatGallery {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
