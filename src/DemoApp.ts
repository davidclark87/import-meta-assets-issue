import { LitElement, html } from "lit-element";

export class DemoApp extends LitElement {
  imgSrc = new URL("../../assets/tick-icon.png", import.meta.url).href;

  render() {
    // Some code to try stepping through in the debugger
    const x = 2 + 2;
    const y = 3 + 3;
    const z = x + y;

    return html`
      <main>
        <p>Hello world</p>
        <p>z === ${z}</p>
        <img src="${this.imgSrc}" />
      </main>
    `;
  }
}
