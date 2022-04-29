import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit-html/directives/style-map.js';

@customElement('searchable-dropdown')
export class SearchableDropdown extends LitElement {
  static styles = css`
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
    }
    button:hover {
      background: var(--my-element-button-hover-background, #f1f1f1);
      color: var(--my-element-button-hover-color, #000);
    }
    .dropdown {
      position: relative;
      padding: 2em;
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
      transtion: all 0.2s ease-in-out;
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

  @property({ type: String })
  btnTitle = 'Dropdown';

  @property({ type: Boolean })
  showDropdown = false;

  dropdownStyle = { display: 'none' };

  render() {
    return html`
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
          <a href="#component">Components</a>
          <a href="#element">Elements</a>
          <a href="#styles">Styles</a>
          <a href="#functions">Functions</a>
        </div>
      </div>
    `;
  }

  // Toggle dropdown menu visibility on click
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
    this.dropdownStyle = { display: this.showDropdown ? 'block' : 'none' };
    console.log(this.dropdownStyle);
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

declare global {
  interface HTMLElementTagNameMap {
    'searchable-dropdown': SearchableDropdown;
  }
}
