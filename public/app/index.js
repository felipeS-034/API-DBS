var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCharacters } from "./components/tarjeta/tarjeta.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const personajes = yield getCharacters();
            this.render(personajes);
        });
    }
    render(personajes) {
        if (!this.shadowRoot)
            return;
        const components = personajes.map(({ id, imageUrl, name, originplanet, role, specie, status, transform, universe }) => `
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
