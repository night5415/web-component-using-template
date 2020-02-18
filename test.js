const template = document.createElement('template');
template.innerHTML = `
<style>
button {
  background: #1E88E5;
  color: white;
  padding: 2rem 4rem;
  border: 0;
  font-size: 1.5rem;
}
</style>
<button>Sup?</button>`;

function getButton(params) {
    let me = this,
        btn = document.createElement('button');
    btn.innerText = params; 
    return btn;
}
function getStyle(params) {

}

class CrButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() { 
        let btn = getButton(this.getAttribute('name'));
 
        this.addEventListener('click', function () { 
            var event = new Event('build', { detail: "test" });
            this.dispatchEvent(event);
        })
        this.shadowRoot.appendChild(btn);
    }

    disconnectedCallback() {
        console.log('disconnect')
    }

    static get observedAttributes() {
        return ['name']
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log(`${name} value changed from ${oldVal} to ${newVal}`)
    }
}

customElements.define('cr-button', CrButton);

class CrButtonSub extends CrButton {
    constructor() {
        super();
    }
}

customElements.define('cr-button-submit', CrButtonSub);