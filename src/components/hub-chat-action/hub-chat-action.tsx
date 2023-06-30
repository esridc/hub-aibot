import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'hub-chat-action',
  styleUrl: 'hub-chat-action.css',
  shadow: true,
})
export class HubChatAction {

  @Prop() actionTitle:string = "";
  @Prop() actionLink:string = "#";

  actionEl: HTMLAnchorElement;

  actionClicked() {
    console.debug("Action clicked");
    this.actionEl.classList.toggle("selected");
  }
  render() {
    return (
      <Host>
        <a 
            href={this.actionLink}
            target="_new"
            ref={el => this.actionEl = el} 
            onClick={_ev => this.actionClicked.call(this)} 
            class="action"
          >
          <slot></slot>
          {this.actionTitle}
        </a>
      </Host>
    );
  }

}
