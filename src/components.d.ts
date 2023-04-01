/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HubAibot {
        "apikey": string;
        "chatOpen": boolean;
        "model": string;
        "personality": string;
    }
}
declare global {
    interface HTMLHubAibotElement extends Components.HubAibot, HTMLStencilElement {
    }
    var HTMLHubAibotElement: {
        prototype: HTMLHubAibotElement;
        new (): HTMLHubAibotElement;
    };
    interface HTMLElementTagNameMap {
        "hub-aibot": HTMLHubAibotElement;
    }
}
declare namespace LocalJSX {
    interface HubAibot {
        "apikey"?: string;
        "chatOpen"?: boolean;
        "model"?: string;
        "personality"?: string;
    }
    interface IntrinsicElements {
        "hub-aibot": HubAibot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "hub-aibot": LocalJSX.HubAibot & JSXBase.HTMLAttributes<HTMLHubAibotElement>;
        }
    }
}
