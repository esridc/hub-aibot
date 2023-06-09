import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'hub-chat-action',
  styleUrl: 'hub-chat-action.css',
  shadow: true,
})
export class HubChatAction {

  @Prop() actionTitle:string = "";
  @Prop() actionLink:Function;

  actionEl: HTMLDivElement;

  actionClicked() {
    console.debug("Action clicked");
    this.actionEl.classList.toggle("selected");
    this.actionLink.call(this);
  }
  render() {
    return (
      <Host>
        <div
            ref={el => this.actionEl = el} 
            onClick={_ev => this.actionClicked.call(this)} 
            class="action"
          >
          <slot></slot>
          {this.actionTitle}
        </div>
      </Host>
    );
  }

}
