import {getCharacters} from "./components/tarjeta/tarjeta.js";
import { Personajes } from "./dataApi.js";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const personajes = await getCharacters();
        this.render(personajes);
    }

    render(personajes: Array<Personajes>) {
        if (!this.shadowRoot) return;

        const components = personajes.map(({id, imageUrl, name, originplanet, role, specie, status, transform, universe}) => `
        <link rel="stylesheet" href=" ./app/components/tarjeta/style.css"
        <section>
        <article>
        <div class="contenedor">
        <image class="imagen" src="${imageUrl}"></image>
        <image class="logo" src="./imagenes/Dragon_Ball_Super.png"></image>
        <h1 class="numero"><strong><font color="red">${id}:</font></strong> ${name}</h1>
        <h1 class="planeta"><strong><font color="red">Planeta de origen:</font></strong> ${originplanet}</h1>
        <h1 class="rol"><strong><font color="red">Rol:</font></strong> ${role}</h1>
        <h1 class="especie"><strong><font color="red">Especie:</font></strong> ${specie}</h1>
        <h1 class="status"><strong><font color="red">Estatus:</font></strong> ${status}</h1>
        <h1 class="transformacion"><strong><font color="red">Trasnformación:</font></strong> ${transform}</h1>
        <h1 class="universo"><strong><font color="red">Universo:</font></strong> ${universe}</h1>
        </div>
        </article>
        </section>
        `);
        this.shadowRoot.innerHTML = `<section>
            ${components.join("")}
        </section>`;
    }
}

customElements.define("app-container", AppContainer);