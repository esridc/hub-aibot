import { Component, Host, Prop, h } from '@stencil/core';
// import Map from '@arcgis/core/Map';
// import MapView from '@arcgis/core/views/MapView';

// import { setAssetPath } from "@arcgis/map-components/dist/components";
// setAssetPath(`${location.origin}${location.pathname}assets`);


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
        <arcgis-map 
          id="viewDiv"
          item-id="d5dda743788a4b0688fe48f43ae7beb9" />
          Map will display here
          < br/>Dataset {this.datasets.join(", ")}
          < br/>@ {this.location} [{this.longitude}, {this.latitude}]
        </div>
      </Host>
    );
  }

}
