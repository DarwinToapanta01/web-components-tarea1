class FormularioAccion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.agregarEventos();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <form id="formulario">
                <label for="nuevoContenido">Ingresa un nuevo nombre:</label>
                <input type="text" id="nuevoContenido" name="nuevoContenido" />
                <slot name="boton-enviar"></slot>
            </form>
            <style>
                form {
                    padding: 1rem;
                    margin-top: 1rem;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                    width: 30%;
                }
                label, input {
                    display: block;
                    margin-bottom: 0.5rem;
                    width: 100%;
                }
                
            </style>
        `;
    }

    agregarEventos() {
        this.shadowRoot.querySelector('slot[name="boton-enviar"]').addEventListener('click', (e) => {
            e.preventDefault();
            const nuevoTexto = this.shadowRoot.querySelector('#nuevoContenido').value;

            // aqui cambiamos slot contenido donde esta mi nombre del componente <tarjeta-usuario>
            const tarjeta = document.querySelector('tarjeta-usuario');
            if (tarjeta) {
                const slotContenido = tarjeta.querySelector('[slot="contenido"]');
                if (slotContenido) {
                    slotContenido.textContent = nuevoTexto;
                }
            }
        });
    }
}

customElements.define('formulario-cambio', FormularioAccion);
