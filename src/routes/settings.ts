import { html } from "lit-html";
import { customElement } from "@simple-html/core";
import {
  subscribeCanDeactivateEvent,
  unSubscribeCanDeactivateEvent,
  stopCanDeactivate,
} from "@simple-html/router";

@customElement("settings-route")
export default class extends HTMLElement {
  private locked = false;

  connectedCallback() {
    subscribeCanDeactivateEvent(this, function () {
      stopCanDeactivate(
        new Promise((resolve) => {
          if (this.locked) {
            alert("sorry");
            resolve(false);
          } else {
            resolve(true);
          }
        })
      );
    });
  }
  
  disconnectedCallback() {
    unSubscribeCanDeactivateEvent(this);
  }

  lockBtn() {
    this.locked = this.locked ? false : true;
  }

  public render() {
    return html`
      <section class="p-2">
        <h1>Settings</h1>
        <br />
        Locked:<input
          type="checkbox"
          @click=${this.lockBtn}
          .checked=${this.locked}
        />
      </section>
    `;
  }
}
