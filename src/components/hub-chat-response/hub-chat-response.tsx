import { Component, Host, Prop, h } from '@stencil/core';
import { HubChatMessage } from '../../types/types';
import { addResponseFeedback, deleteResponse } from '../../util/discussions';
import { PostReaction } from '@esri/hub-discussions';

@Component({
  tag: 'hub-chat-response',
  styleUrl: 'hub-chat-response.css',
  shadow: true,
})
export class HubChatResponse {

  messageEl: HTMLDivElement;

  /**
   * Message to display
   * If this message is deleted, this will be removed.
   */
  @Prop({mutable:true, reflect: true}) message: HubChatMessage = null;

  /**
   * Option to show feedback from AI
   */
  @Prop() allowFeedback: boolean = null;

  componentWillLoad() {
    this.allowFeedback = this.message.author === "hub" && this.allowFeedback === null;
    
  }

  cleanMessageText(text): string {
    console.debug("Response", text)
    let output = text.replace(/(?:\r\n|\r|\n|\\n)/g, '<br>');
    return output;
  }

  async removeResponse() {
    const deleteResult = await deleteResponse(this.message.postId);
    if(deleteResult.success) {
      this.messageEl.classList.add('removed');
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
        
        <div
          id={this.message?.postId}
          class={`message author-${this.message?.author}`}
          ref={(el) => this.messageEl = el}
          
          >
          <div
            class="avatar"
          ></div>
          <div 
            class="text"
            innerHTML={this.cleanMessageText(this.message?.text)}
          >
            
          </div>
          
          {this.message.postId ? 
            <calcite-action onClick={(_ev) => this.removeResponse.call(this)} text="" icon="x" text-enabled></calcite-action>
            : null }
          
          {this.allowFeedback ? this.renderFeedback() : null}  
        </div>
      </Host>
    );
  }


  addFeedback(postId:string, reaction: PostReaction) {
    console.debug("Response: addFeedback", {postId})
    addResponseFeedback(postId, reaction)
  }

  private renderFeedback() {
    return <div
      class="feedback">
      <calcite-block heading="" description="AI may be incorrect. Help us improve">
        {/* <calcite-icon scale="s" slot="icon" icon="effects"></calcite-icon> */}
        {/* <calcite-notice open>
            <div slot="warning">Use layer effects sparingly, for emphasis</div>
        </calcite-notice> */}
        <calcite-action onClick={() => this.addFeedback(this.message?.postId, PostReaction.THUMBS_UP)} slot="control" text="Good Response" icon="thumbs-up"></calcite-action>
        <calcite-action onClick={() => this.addFeedback(this.message?.postId, PostReaction.THUMBS_DOWN)} slot="control" text="Bad Response" icon="thumbs-down"></calcite-action>
        {/* <div slot="header-menu-actions">
            <calcite-action text="Information" icon="information" text-enabled></calcite-action>
        </div> */}
      </calcite-block>
    </div>;
  }
}
