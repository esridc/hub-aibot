import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { HubChatAuthor, HubChatMessage } from '../../types/types';

@Component({
  tag: 'hub-chat-input',
  styleUrl: 'hub-chat-input.css',
  shadow: true,
})
export class HubChatInput {
  private inputEl!: HTMLDivElement;

  @Prop() disabled:boolean = false;

  @Event() hubChatInputEntered: EventEmitter<HubChatMessage>;


  handleInput() {
    this.hubChatInputEntered.emit({
      author: HubChatAuthor.user,
      text: this.inputEl.textContent?.trim() || ''
    });
    this.inputEl.textContent = '';
  }
  private async handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && event.shiftKey === false) {
      event.preventDefault();
      this.handleInput();
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
        <div class={`input-container ${this.disabled ? 'disabled' : ''}`}>
          <div
            class={`input`}
            contentEditable={!this.disabled}
            onKeyDown={(event: KeyboardEvent) => this.handleKeyDown(event)}
            ref={(el) => (this.inputEl = el!)}
          ></div>
          <button class="send-button" onClick={() => this.handleInput()}>
          <calcite-icon icon="send" text-label="Send message"></calcite-icon>
          </button>
        </div>
      </Host>
    );
  }

}
