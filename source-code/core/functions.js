/* ••••••••••••••••••••••••••••••••••• */
/* The extension icon updater function */
/* ••••••••••••••••••••••••••••••••••• */
function updateExtensionIcon() {
    // Get the 'state' data from Chrome local storage
    chrome.storage.local.get('state', (result) => {
        // Get the current state
        const currentState = result.state;

        // Set icon images relative path
        const enabledIconPath = 'assets/icons/enabled/16.png';
        const disabledIconPath = 'assets/icons/disabled/16.png';

        // Specify the correct icon image (enabled or disabled)
        const iconPath = currentState ? enabledIconPath : disabledIconPath;

        // Set the new icon based on the state
        chrome.action.setIcon({ path: iconPath });
    });
}


/* ••••••••••••••••••••••••••••••••••• */
/* The extension icon changer function */
/* ••••••••••••••••••••••••••••••••••• */
function changeExtensionIcon() {
    // Get the 'state' data from Chrome local storage
    chrome.storage.local.get('state', (result) => {
        // Get the current state
        const currentState = result.state;

        // Toggle the state value
        const newState = !currentState;

        // Update the new 'state' data in Chrome local storage
        chrome.storage.local.set({ state: newState }, () => {
            // Set icon images relative path
            const enabledIconPath = 'assets/icons/enabled/16.png';
            const disabledIconPath = 'assets/icons/disabled/16.png';

            // Specify the correct icon image (enabled or disabled)
            const iconPath = newState ? enabledIconPath : disabledIconPath;

            // Set the new icon based on the state
            chrome.action.setIcon({ path: iconPath });
        });
    });
}


/* •••••••••••••••••••••••••••••••••••• */
/* The extension status report function */
/* •••••••••••••••••••••••••••••••••••• */
function extensionStatusReport() {
    // Clear the console to keep it clean
    console.clear();

    // Display a table of the target websites in the console
    console.table(injectTo);

    // Output the number of target websites in the `injectTo` array
    console.log('Target Websites: ' + injectTo.length);

    // Retrieve all data from Chrome local storage
    chrome.storage.local.get(null, result => {
        // Display all data retrieved from Chrome local storage
        console.log('All Chrome local storage data:', result);

        // Output whether the extension is `enabled` or `disabled` based on the 'state' value
        result.state ? console.log('The extension is ENABLED!') : console.log('The extension is DISABLED!');
    });
}
