import { LitElement, html, customElement } from 'lit-element';

@customElement('app-root')
class AppRoot extends LitElement {
    render() {
        return html`
            <div class="text-white">Hello</div>
        `;
    }

    createRenderRoot() {
        return this;
    }
};