/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
/* Right here, you have access to the `injector` global object. */
/* So you can inject unlimited codes using: ••••••••••••••••••• */
/* injector.injectInlineJs(); ••••••••••••••••••••••••••••••••• */
/* injector.injectExternalJs(); ••••••••••••••••••••••••••••••• */
/* injector.injectInternalCss(); •••••••••••••••••••••••••••••• */
/* injector.injectExternalCss(); •••••••••••••••••••••••••••••• */
/* Anyway it's OPTIONAL, you can also define your logic. •••••• */
/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
injector.injectExternalCss('https://fonts.googleapis.com/css?family=Nova+Mono');

injector.injectInternalCss(`
    * {
        font-family: "Nova Mono" !important;
    }

    html {
        filter: saturate(5) brightness(1.2);
    }

    .dark.flex-shrink-0.overflow-x-hidden.bg-gray-900 {
        filter: saturate(5);
    }
`);
