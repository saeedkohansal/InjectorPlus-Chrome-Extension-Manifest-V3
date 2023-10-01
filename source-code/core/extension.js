/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
/* Perform actions for the `first install` of the extension */
/* 'install' = Extension was just installed ••••••••••••••• */
/* 'update' = Extension was updated or reloaded ••••••••••• */
/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
chrome.runtime.onInstalled.addListener(details => {
    if (details.reason === 'install') {
        // Set extension initial state
        chrome.storage.local.set({ state: true });

        // Call the function to update the extension icon
        updateExtensionIcon();
    } else if (details.reason === 'update') {
        // Call the function to update the extension icon
        updateExtensionIcon();
    }
});


/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
/* Perform actions for when the Google Chrome starts (launched) */
/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
chrome.runtime.onStartup.addListener(() => {
    // Call the function to update the extension icon
    updateExtensionIcon();
});


/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
/* Perform actions for when user clicks on the extension button */
/* •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
chrome.action.onClicked.addListener(() => {
    // Call the function to change the extension icon
    changeExtensionIcon();

    // Reload page
    chrome.tabs.reload();
});


/* ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
/* Perform actions for when the extension turned off and turned on by user */
/* ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */

// Call the function to update the extension icon
updateExtensionIcon();
