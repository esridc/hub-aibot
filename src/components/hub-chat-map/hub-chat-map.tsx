import { Component, Host, Prop, Watch, h } from '@stencil/core';
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

  @Prop() datasets: string | string[] = [];
  @Prop() location: string = null;
  @Prop() longitude: number = -77;
  @Prop() latitude: number = 38.9;
  @Prop() zoom: number = 14;
  
  componentWillRender() {
    console.debug("hub-chat-map: props", {datasets: this.datasets, location: this.location})
    this.parseDatasets(this.datasets);
  }

  @Watch('datasets')
  parseDatasets(newDatasets) {
    if(!!this.datasets && !Array.isArray(newDatasets)) {
      this.datasets = newDatasets.split(",")
    }
  }
  render() {
    return (
      <Host>
        <slot></slot>

        <div id="map">
        <hub-compass-map
          id="viewDiv"
          center = {[this.longitude, this.latitude]}
          zoom = {this.zoom}
          datasetIds = {this.datasets}
        ></hub-compass-map>
        {/* <arcgis-map 
          id="viewDiv"
          item-id="d5dda743788a4b0688fe48f43ae7beb9" 
          center={[this.longitude, this.latitude]}
          /> */}
          {/* Map will display here
          < br/>Dataset {this.datasets.join(", ")}
          < br/>@ {this.location} [{this.longitude}, {this.latitude}] */}
        </div>
      </Host>
    );
  }

}
