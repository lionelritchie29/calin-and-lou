import { LitElement, html, property, customElement } from 'lit-element';

import './navbar.ts';
@customElement('app-root')
class AppRoot extends LitElement {
    @property({type: String}) name = 'defaultName'

    render() {
        return html`
            <main>
                <nav-bar></nav-bar>    
            </main>
        `;
    }

    createRenderRoot() {
        return this;
    }
};