/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
/* Right here, you have access to the `injector` global object. */
/* So you can inject unlimited codes using: ••••••••••••••••••• */
/* injector.injectInlineJs(); ••••••••••••••••••••••••••••••••• */
/* injector.injectExternalJs(); ••••••••••••••••••••••••••••••• */
/* injector.injectInternalCss(); •••••••••••••••••••••••••••••• */
/* injector.injectExternalCss(); •••••••••••••••••••••••••••••• */
/* Anyway it's OPTIONAL, you can also define your logic. •••••• */
/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
injector.injectExternalCss('https://fonts.googleapis.com/css?family=Oswald');

injector.injectInternalCss(`
    * {
        font-family: "Oswald" !important;
    }

    body {
        filter: hue-rotate(122deg);
    }
`);
