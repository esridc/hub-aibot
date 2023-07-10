import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
export declare class HubCompassMap {
  /**
   * Optional Map id to display
   */
  mapId: string;
  /**
   * Optional [longitude, latitude] map center
   */
  center: [number, number];
  /**
   * Optional map zoom level
   */
  zoom: number;
  /**
   * Optional array of datasets to add to map
   */
  datasetIds: string[];
  /**
   * TODO: only add new datasets, likely by diffing with old list
   */
  updateDatasets(newDatasetIds: any): void;
  /**
   * Optional travel mode: walking, etc.
   *  TODO fix travel mode type and values
   */
  travelMode: any;
  /**
   * Optional location to calculate service center.
   * Changing this will update the point
   */
  serviceAreaPoint: any;
  updateServiceArea(newServicePoint: any): void;
  mapEl: HTMLDivElement;
  webMap: Map;
  mapView: MapView;
  serviceAreaUrl: string;
  componentDidRender(): void;
  private createServiceAreas;
  private createGraphic;
  findServiceArea(locationFeature: any): Promise<void>;
  showServiceAreas(serviceAreaPolygons: any): void;
  render(): any;
}
