import type { Components, JSX } from "../types/components";

interface HubCompassMap extends Components.HubCompassMap, HTMLElement {}
export const HubCompassMap: {
  prototype: HubCompassMap;
  new (): HubCompassMap;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
