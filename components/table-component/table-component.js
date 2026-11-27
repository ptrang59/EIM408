new gridjs.Grid({
  columns: ["", "Parameter", "Working Distance", "Size & Portability"],
  data: [
    ["LDF", "Blood flow", "Contact", "Benchtop, Large (~4kg) [21]"],
    ["Traditional LSS", "Contact", "Short (10-50cm)", "Benchtop, Large (~2.3kg) [22]"],
    ["rPPG", "Pulsatile blood volume", "Short (~1m)", "Portable"],
  ]
}).render(document.getElementById("table-1"));

new gridjs.Grid({
  columns: ["", "Parameter", "Working Distance", "Size & Portability"],
  data: [
    ["LDF", "Blood flow", "Contact", "Benchtop, Large (~4kg) [21]"],
    ["Traditional LSS", "Contact", "Short (10-50cm)", "Benchtop, Large (~2.3kg) [22]"],
    ["rPPG", "Pulsatile blood volume", "Short (~1m)", "Portable"],
    ["Proposed Solution", "Blood flow", "Long (>1m)", "Portable"]
  ]
}).render(document.getElementById("table-2"));

class TableComponent extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <slot></slot>
    <sub>${this.subtitle}</sub>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("table-component", TableComponent);
