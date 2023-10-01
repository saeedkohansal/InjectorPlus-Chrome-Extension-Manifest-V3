/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
/* Right here, you have access to the `injector` global object. */
/* So you can inject unlimited codes using: ••••••••••••••••••• */
/* injector.injectInlineJs(); ••••••••••••••••••••••••••••••••• */
/* injector.injectExternalJs(); ••••••••••••••••••••••••••••••• */
/* injector.injectInternalCss(); •••••••••••••••••••••••••••••• */
/* injector.injectExternalCss(); •••••••••••••••••••••••••••••• */
/* Anyway it's OPTIONAL, you can also define your logic. •••••• */
/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
injector.injectInternalCss(`
    html {
        filter: invert(1);
    }
`);
