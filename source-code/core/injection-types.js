/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
/* This `injector` object provides functions to ••••••••••••••••••••• */
/* dynamically inject inline and external JavaScript code, •••••••••• */
/* as well as internal and external CSS styles into a web page's DOM. */
/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */

// Injection types global object
var injector = {
    // Function to inject inline JavaScript code
    injectInlineJs: (code) => {
        const scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'text/javascript');
        scriptElement.textContent = code;
        // Inject before closing HTML tag `</html>`
        document.documentElement.appendChild(scriptElement);
    },

    // Function to inject external JavaScript file
    injectExternalJs: (src) => {
        const scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'text/javascript');
        scriptElement.setAttribute('src', src);
        // Inject before closing HTML tag `</html>`
        document.documentElement.appendChild(scriptElement);
    },

    // Function to inject internal CSS code
    injectInternalCss: (styles) => {
        const styleElement = document.createElement('style');
        styleElement.textContent = styles;
        // Inject before closing HTML tag `</html>`
        document.documentElement.appendChild(styleElement);
    },

    // Function to inject external CSS file
    injectExternalCss: (href) => {
        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('type', 'text/css');
        linkElement.setAttribute('href', href);
        // Inject before closing HTML tag `</html>`
        document.documentElement.appendChild(linkElement);
    }
};
