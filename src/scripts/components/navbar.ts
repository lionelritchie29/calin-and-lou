import {LitElement, customElement, html} from 'lit-element';

@customElement('nav-bar')
class Navbar extends LitElement { 

    render() {
        return html`
            <nav class="py-6">
                <div class="container flex justify-between">
                    <h1 class="text-2xl">
                        CalinAndLou
                    </h1>

                    <div class="flex">
                        <ul class="flex mr-3">
                            <li class="mr-4">
                                <a href="#">Home</a>
                            </li> 
                            <li class="mr-4">
                                <a href="#">Product</a>
                            </li>
                            <li class="mr-4">
                                <a href="#">About</a>
                            </li>
                            <li class="mr-4">
                                <a href="#">Contact</a>
                            </li>
                        </ul>

                        <ul class="flex">
                            <li class="mr-3">
                                <a href="#">
                                    <img width="25" class="rounded-full" src="/assets/icons/instagram.svg" />
                                </a>
                            </li>   
                            <li class="mr-3">
                                <a href="#">
                                    <img width="25" class="rounded-full" src="/assets/icons/whatsapp.svg" />
                                </a>
                            </li>
                            <li class="mr-3">
                                <a href="#">
                                    <img width="25" class="rounded-full" src="/assets/icons/line.svg" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }

    createRenderRoot() {
        return this;
    }
}