/* eslint-disable import/prefer-default-export */
import { html, css, LitElement } from 'lit';

export class VulkanoWebcomponent extends LitElement {

  createRenderRoot() {
    return this;
  }

  static styles = css`p {
    color: black;
    border: 1px solid #333;
    padding: 5px;
  }`;

  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    this.name = 'webcomponent';
  }

  render() {
    return html`
<!--
<embed src="http://example.com/the.pdf" width="500" height="375"
type="application/pdf"> -->

      <iframe src="/img/Netflix_Squid Games 2 - 4.56K Run Event_Official Rules_FINAL.pdf" style="width:100%; height:100vh;"></iframe>

      <!-- <object data="/img/Netflix_Squid Games 2 - 4.56K Run Event_Official Rules_FINAL.pdf" type="application/pdf" style="width: 100%; height: 100vh">
      </object> -->

    `;
  }
}

customElements.define('vulkano-webcomponent', VulkanoWebcomponent);
