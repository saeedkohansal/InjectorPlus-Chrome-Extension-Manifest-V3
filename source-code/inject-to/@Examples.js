/* •••••••••••••••••••••••••••••••• */
/* Injecting Inline JavaScript Code */
/* •••••••••••••••••••••••••••••••• */

// Example inline JavaScript code to be injected
const inlineJsCode = `
    function greet() {
        alert('Hello, world!');
    }
    greet();
`;

// Inject the inline JavaScript code
injector.injectInlineJs(inlineJsCode);




/* •••••••••••••••••••••••••••••••••• */
/* Injecting External JavaScript File */
/* •••••••••••••••••••••••••••••••••• */

// URL of the external JavaScript file to be injected
const externalJsFile = 'https://example.com/scripts/script.js';

// Inject the external JavaScript file
injector.injectExternalJs(externalJsFile);




/* ••••••••••••••••••••••••••• */
/* Injecting Internal CSS Code */
/* ••••••••••••••••••••••••••• */

// Example internal CSS styles to be injected
const internalCssStyles = `
    body {
        background-color: lightblue;
    }
    h1 {
        color: darkblue;
    }
`;

// Inject the internal CSS styles
injector.injectInternalCss(internalCssStyles);




/* ••••••••••••••••••••••••••• */
/* Injecting External CSS File */
/* ••••••••••••••••••••••••••• */

// URL of the external CSS file to be injected
const externalCssFile = 'https://example.com/styles/styles.css';

// Inject the external CSS file
injector.injectExternalCss(externalCssFile);
