import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators';
import {styleMap} from 'lit-html/directives/style-map';

@customElement('searchable-dropdown')
export class SearchableDropdown extends LitElement {
  static override styles = css`
    :host {
      display: block;
      position: relative;
      padding: 2em 4em;
    }
    button {
      background: var(--my-element-button-background, #fff);
      color: var(--my-element-button-color, #000);
      border: 1px solid var(--my-element-button-border-color, #000);
      padding: 0.6em 1.2em;
      border-radius: 3px;
      font-size: 0.9em;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      margin-top: 2em;
    }
    button:hover {
      background: var(--my-element-button-hover-background, #f1f1f1);
      color: var(--my-element-button-hover-color, #000);
      box-shadow: 0 0 0 1px var(--my-element-button-hover-border-color, #000);
    }
    .dropdown {
      position: relative;
    }
    i {
      color: red;
    }
    #input {
      border: none;
      color: var(--my-element-button-color, #000);
      font-weight: bold;
      box-sizing: border-box;
      background-image: url('https://icons.veryicon.com/png/o/application/outline-1/search-548.png');
      background-size: 1em;
      background-position: 12px 14px;
      background-repeat: no-repeat;
      font-size: 0.9em;
      padding: 14px 20px 12px 45px;
      border-bottom: 1px solid var(--my-element-button-border-color, #000);
    }
    .dropdown-content {
      position: absolute;
      min-width: 230px;
      overflow: auto;
      border: 1px solid #000;
      background-color: #f1f1f1;
      border-radius: 3px;
      margin-top: 0.5em;
    }
    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      font-weight: normal;
      font-size: 0.9em;
      transition: all 0.1s ease-in-out;
    }
    #input:focus {
      outline: none;
    }
    .dropdown a:hover {
      background-color: #000;
      color: white;
    }
    .drop-ic {
      top: 3px;
      position: relative;
      margin-left: 3px;
    }
    .drop-ic:hover {
      cursor: pointer;
      filter: invert(100%);
    }
  `;

  @property({type: String})
  btnTitle = 'Dropdown';

  @property({type: Array})
  links = ['Home', 'About', 'Contact', 'Portfolio', 'Blog', 'Services', 'FAQ'];

  @property({type: Boolean})
  showDropdown = false;

  dropdownStyle = {display: 'none'};

  override render() {
    return html`
      <h3>Daniel's dropdown menu</h3>
      <h4>Keyboard controls</h4>
      <ol>
        <li><b>CTRL + SPACE</b> | Open or close and start searching</li>
        <li><b>UP or DOWN ARROW KEYS</b> | Browse the menu <i>*not finished</i></li>
        <li><b>ENTER</b> | Go to selected link <i>*not finished</i></li>
      </ol>
      <div class="dropdown">
        <button @click=${this.toggleDropdown}>
          ${this.btnTitle}
          <img
            src="https://cdn-icons-png.flaticon.com/512/7344/7344812.png"
            style="height: .6em;"
          />
        </button>

        <div
          class="dropdown-content"
          style=${styleMap(this.dropdownStyle)}
          id="dropdown"
        >
          <input
            type="text"
            placeholder="Search..."
            }
            id="input"
            @keyup=${this.filterSearch}
          />
          ${this.links.map(
            (link) => html` <a id="linkz" href="#${link}">${link}</a> `
          )}
        </div>
      </div>
    `;
  }

  // Toggle dropdown menu visibility on click
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
    this.dropdownStyle = {display: this.showDropdown ? 'block' : 'none'};
  }

  // Search the drop down menu
  filterSearch(e: Event) {
    // @ts-expect-error
    const input = e.target.value.toLowerCase();
    // @ts-expect-error
    const links = this.shadowRoot.querySelectorAll('.dropdown-content a');

    links.forEach((link) => {
      // @ts-expect-error
      const text = link.textContent.toLowerCase();

      if (text.indexOf(input) > -1) {
        // @ts-expect-error
        link.style.display = 'block';
      } else {
        // @ts-expect-error
        link.style.display = 'none';
      }
    });
  }
}

// Open dropdown with control + space function
window.addEventListener('keydown', (e) => {
  if (e.keyCode === 32 && e.ctrlKey) {
    // @ts-expect-error
    document.querySelector('searchable-dropdown').toggleDropdown();
  }
});

declare global {
  interface HTMLElementTagNameMap {
    'searchable-dropdown': SearchableDropdown;
  }
}
