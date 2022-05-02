/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class s{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new s("string"==typeof t?t:t+"",e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n;const r=window.trustedTypes,l=r?r.emptyScript:"",h=window.reactiveElementPolyfillSupport,a={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},d=(t,e)=>e!==t&&(e==e||t==t),c={attribute:!0,type:String,converter:a,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=c){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return s=i,o=this.constructor.elementStyles,t?s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((t=>{const e=document.createElement("style"),i=window.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=t.cssText,s.appendChild(e)})),i;var s,o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=c){var s,o;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:a.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,e){var i,s,o;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),l=t.converter,h=null!==(o=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==o?o:a.fromAttribute;this._$Ei=r,this[r]=h(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var u;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:p}),(null!==(n=globalThis.reactiveElementVersions)&&void 0!==n?n:globalThis.reactiveElementVersions=[]).push("1.3.2");const v=globalThis.trustedTypes,$=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,f="?"+y,_=`<${f}>`,m=document,g=(t="")=>m.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,w=t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,C=/>/g,x=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,T=/"/g,P=/^(?:script|style|textarea|title)$/i,U=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),H=U(1),O=(U(2),Symbol.for("lit-noChange")),R=Symbol.for("lit-nothing"),M=new WeakMap,N=m.createTreeWalker(m,129,null,!1),D=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=E;for(let e=0;e<i;e++){const i=t[e];let l,h,a=-1,d=0;for(;d<i.length&&(r.lastIndex=d,h=r.exec(i),null!==h);)d=r.lastIndex,r===E?"!--"===h[1]?r=S:void 0!==h[1]?r=C:void 0!==h[2]?(P.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=x):void 0!==h[3]&&(r=x):r===x?">"===h[0]?(r=null!=o?o:E,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?x:'"'===h[3]?T:k):r===T||r===k?r=x:r===S||r===C?r=E:(r=x,o=void 0);const c=r===x&&t[e+1].startsWith("/>")?" ":"";n+=r===E?i+_:a>=0?(s.push(l),i.slice(0,a)+"$lit$"+i.slice(a)+y+c):i+y+(-2===a?(s.push(void 0),e):c)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==$?$.createHTML(l):l,s]};class z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[h,a]=D(t,e);if(this.el=z.createElement(h,i),N.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=N.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=a[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?V:"@"===e[1]?W:j})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(P.test(s.tagName)){const t=s.textContent.split(y),e=t.length-1;if(e>0){s.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],g()),N.nextNode(),l.push({type:2,index:++o});s.append(t[e],g())}}}else if(8===s.nodeType)if(s.data===f)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)l.push({type:7,index:o}),t+=y.length-1}o++}}static createElement(t,e){const i=m.createElement("template");return i.innerHTML=t,i}}function L(t,e,i=t,s){var o,n,r,l;if(e===O)return e;let h=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const a=b(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=h:i._$Cu=h),void 0!==h&&(e=L(t,h._$AS(t,e.values),h,s)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:m).importNode(i,!0);N.currentNode=o;let n=N.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new I(n,n.nextSibling,this,t):1===h.type?e=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(e=new F(n,this,t)),this.v.push(e),h=s[++l]}r!==(null==h?void 0:h.index)&&(n=N.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class I{constructor(t,e,i,s){var o;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),b(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==O&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):w(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==R&&b(this._$AH)?this._$AA.nextSibling.data=t:this.k(m.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=z.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new B(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new z(t)),e}S(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new I(this.M(g()),this.M(g()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,i,s,o){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=L(this,t,e,0),n=!b(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=L(this,s[i+r],e,r),l===O&&(l=this._$AH[r]),n||(n=!b(l)||l!==this._$AH[r]),l===R?t=R:t!==R&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.C(t)}C(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends j{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===R?void 0:t}}const K=v?v.emptyScript:"";class V extends j{constructor(){super(...arguments),this.type=4}C(t){t&&t!==R?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class W extends j{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=L(this,t,e,0))&&void 0!==i?i:R)===O)return;const s=this._$AH,o=t===R&&s!==R||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==R&&(s===R||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const Z=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J,G;null==Z||Z(z,I),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.2.3");class Q extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new I(e.insertBefore(g(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return O}}Q.finalized=!0,Q._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:Q});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:Q});(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Y(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var et;null===(et=window.HTMLSlotElement)||void 0===et||et.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=1;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){var e;if(super(t),t.type!==it||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ct){this.ct=new Set;for(const t in e)this.ct.add(t);return this.render(e)}this.ct.forEach((t=>{null==e[t]&&(this.ct.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.ct.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return O}});var ot=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let nt=class extends Q{constructor(){super(...arguments),this.btnTitle="Dropdown",this.links=["Home","About","Contact","Portfolio","Blog","Services","FAQ"],this.showDropdown=!1,this.dropdownStyle={display:"none"}}render(){return H`
      <h3>Daniel's dropdown menu</h3>
      <h4>Keyboard controls</h4>
      <ol>
        <li><b>CTRL + SPACE</b> | Open or close</li>
        <li><b>SHIFT + ALT</b> | Start searching</li>
        <li><b>TAB or SHIFT + TAB</b> | Browse the menu up and down</li>
        <li><b>ENTER</b> | Go to selected link</li>
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
          style=${st(this.dropdownStyle)}
          id="dropdown"
        >
          <input
            type="text"
            placeholder="Search..."
            id="search"
            @keyup=${this.filterSearch}
          />
          ${this.links.map((t=>H` <a id="linkz" href="#${t}">${t}</a> `))}
        </div>
      </div>
    `}toggleDropdown(){this.showDropdown=!this.showDropdown,this.dropdownStyle={display:this.showDropdown?"block":"none"}}filterSearch(t){const e=t.target.value.toLowerCase();this.shadowRoot.querySelectorAll(".dropdown-content a").forEach((t=>{t.textContent.toLowerCase().indexOf(e)>-1?t.style.display="block":t.style.display="none"}))}};nt.styles=((t,...i)=>{const o=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new s(o,e)})`
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
      transition: 0.3s linear !important;
    }
    #search {
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
      transition: 0.3s linear !important;
    }
    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      font-weight: normal;
      font-size: 0.9em;
      transition: 0.1s linear !important;
    }
    #search:focus {
      outline: none;
    }
    .dropdown a:hover {
      background-color: #000;
      color: white;
    }
    .active {
      background-color: #000;
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
  `,ot([tt({type:String})],nt.prototype,"btnTitle",void 0),ot([tt({type:Array})],nt.prototype,"links",void 0),ot([tt({type:Boolean})],nt.prototype,"showDropdown",void 0),nt=ot([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e))("searchable-dropdown")],nt),window.addEventListener("keydown",(t=>{32===t.keyCode&&t.ctrlKey&&document.querySelector("searchable-dropdown").toggleDropdown()})),window.addEventListener("keydown",(t=>{t.altKey&&t.shiftKey&&document.querySelector("searchable-dropdown").shadowRoot.querySelector("#search").focus()}));
//# sourceMappingURL=index.2004d6cd.js.map
