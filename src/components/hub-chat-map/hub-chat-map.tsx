import { Component, Host, Prop, h } from '@stencil/core';
// import Map from '@arcgis/core/Map';
// import MapView from '@arcgis/core/views/MapView';

@Component({
  tag: 'hub-chat-map',
  styleUrl: 'hub-chat-map.css',
  shadow: false,
})
export class HubChatMap {

  @Prop() datasets: string[] = [];
  @Prop() location: string = "";
  @Prop() longitude: number = null;
  @Prop() latitude: number = null;
  
  componentWillRender() {

  }

  render() {
    return (
      <Host>
        <slot></slot>
        <div id="map">
          Map will display here
          < br/>Dataset {this.datasets.join(", ")}
          < br/>@ {this.location} [{this.longitude}, {this.latitude}]
        </div>
      </Host>
    );
  }

}
