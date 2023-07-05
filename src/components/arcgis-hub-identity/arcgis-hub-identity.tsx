import { Component, Host, Listen, Prop, h } from '@stencil/core';
import state from "../../util/state";

@Component({
  tag: 'arcgis-hub-identity',
  styleUrl: 'arcgis-hub-identity.css',
  shadow: true,
})
export class ArcgisHubIdentity {
  
  @Prop({ mutable: true }) client:string = null;
  @Prop({ mutable: true }) redirect:string = null;
  @Prop({ mutable: true }) portal:string = "https://www.arcgis.com";


  componentWillLoad() {
    // the redirect may be set after loading based on deploy host
    state.app = {
      client: this.client,
      redirect: this.redirect,
      portal: this.portal
    }    
  }
    /**
     * reference to sign-in button for onclick events
     */
    signinButton:HTMLCalciteButtonElement;
  
    signinClick() {
      const evt = new CustomEvent('arcgisAppIdentityStartSignIn');
      document.dispatchEvent(evt);    
    }
    signoutClick() {
      const evt = new CustomEvent('arcgisAppIdentityStartSignOut');
      document.dispatchEvent(evt);    
    }
    @Listen('arcgisAppIdentitySignedIn')
    signedinEvent(evt) {
      console.debug("arcgis-hub-identity: signedinEvent")
      state.context = evt.detail;
    }
    @Listen('arcgisAppIdentitySignedOut')
    signedoutEvent(_evt) {
      state.context = null;
    }
  
    render() {
      return (
        <Host>
          
            <span id="profile">
            <arcgis-app-identity 
              client-id={state.app.client}
              redirect-uri={state.app.redirect}
              portal={state.app.portal}
            >  
              <slot></slot>
            </arcgis-app-identity>
  
            
            {this.renderIdentity()}
          </span>
        </Host>
      );
    }
  
    renderIdentity() {
      if(!!state.user) {
        return state.user?.fullName
        // return (
        //   <calcite-dropdown>
        //     <calcite-button slot="dropdown-trigger">{state.user?.fullName}</calcite-button>
        //     <calcite-dropdown-group>
        //       <calcite-dropdown-item
        //         onclick={this.signoutClick}
        //       >Sign Out</calcite-dropdown-item>
        //     </calcite-dropdown-group>
        //   </calcite-dropdown>
        // )
      } else {
        return (
          <calcite-button
            ref={el => this.signinButton = el}
            onClick={this.signinClick}
          >
            Sign In
          </calcite-button>
        )
      }
  
            
    }
  
  }
  