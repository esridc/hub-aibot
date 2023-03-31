import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'hub-aibot',
  styleUrl: 'hub-aibot.css',
  shadow: true,
})
export class HubAibot {
  private chatbotRef!: HTMLDivElement;

  @Prop() apikey = '';
  @State() chatOpen = false;
  @State() messages: string[] = [];

  private async sendMessage(message: string) {
    this.messages = [...this.messages, message];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apikey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: message}],
        temperature: 0.7
      }),
    });

    const data = await response.json();
    const text = data.choices[0]?.message?.content;

    console.debug("response", {text})
    this.messages = [...this.messages, text];
  }

  private toggleChat() {
    this.chatOpen = !this.chatOpen;
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && event.shiftKey === false) {
      event.preventDefault();
      const message = this.chatbotRef.textContent?.trim() || '';
      this.sendMessage(message);
      this.chatbotRef.textContent = '';
    }
  }

  render() {
    return (
      <div>
        {this.chatOpen ? (
          <div class="chat-window">
            <div class="messages">
              {this.messages.map((message) => (
                <div class="message" innerHTML={message.replace(/(?:\r\n|\r|\n)/g, '<br>')}></div>
              ))}
            </div>
            <div
              class="input"
              contentEditable={true}
              onKeyDown={(event: KeyboardEvent) => this.handleKeyDown(event)}
              ref={(el) => (this.chatbotRef = el!)}
            ></div>
          </div>
        ) : null}
        <div class="fab" onClick={() => this.toggleChat()}>
          <span class="material-icons">&#129302;</span>
        </div>
      </div>
    );
  }
}