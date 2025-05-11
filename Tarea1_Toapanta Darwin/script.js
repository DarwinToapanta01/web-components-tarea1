class TarjetaUsuario extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
      <section class="card">
        <slot name="foto"></slot>
        <slot name="titulo"></slot>
        <slot name="contenido"></slot>
      </section>
      ${this.getStyles()}
    `;
        return template;
    }

    getStyles() {
        return `
      <style>
        .card {
        border: 2px solid #333;
        padding: 1rem;
        border-radius: 8px;
        background-color:rgb(226, 226, 226);
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        }

        ::slotted([slot="titulo"]) {
          font-weight: bold;
          font-size: 1.2rem;
          color: #007acc;
        }

        ::slotted([slot="contenido"]) {
          font-size: 1rem;
          color: #444;
        }

        ::slotted([slot="foto"]) {
          display: block;
          width: 70%;
          height: auto;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 1rem;
        }
      </style>
    `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
}

customElements.define('tarjeta-usuario', TarjetaUsuario);