window.customElements.define('c-header', class extends HTMLElement {
    constructor() {super();}
    async connectedCallback() {
        this.innerHTML = await (await fetch('/components/header.html')).text();
    }
});
window.customElements.define('c-portfolio', class extends HTMLElement {
    constructor() {super();}
    async connectedCallback() {
        this.innerHTML = await (await fetch('/components/portfolio.html')).text();
    }
});
window.customElements.define('c-skill', class extends HTMLElement {
    constructor() {super();}
    async connectedCallback() {
        this.innerHTML = await (await fetch('/components/skill.html')).text();
    }
});
window.customElements.define('c-timeline', class extends HTMLElement {
    constructor() {super();}
    async connectedCallback() {
        this.innerHTML = await (await fetch('/components/timeline.html')).text();
    }
});