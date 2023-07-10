import { Component, Host, Prop, h } from '@stencil/core';
import { HubCompassAction } from '../../types/types';

@Component({
  tag: 'hub-compass-history',
  styleUrl: 'hub-compass-history.css',
  shadow: true,
})
export class HubCompassHistory {

  @Prop() history: HubCompassAction[] = []

  render() {
    return (
      <Host>
        <slot></slot>
        <ol>
        {this.history.forEach((action) => 
          <li>{this.renderHistoryAction(action)}</li>
        )}
        </ol>
      </Host>
    );
  }

  renderHistoryAction(action: HubCompassAction) {
    return([
        <span class="type">{action.type}: </span>,
        <span class="data">{JSON.stringify(action.data)}</span>
    ]
    )
  }

}
