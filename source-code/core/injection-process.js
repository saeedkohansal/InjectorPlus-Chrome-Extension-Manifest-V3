/* ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
/* This code listens for tab updates in the whole browser and, ••••••• */
/* upon page load completion, checks whether the tab's URL matches any */
/* predefined websites in the `injectTo` array. •••••••••••••••••••••• */
/* If there's a match and the 'state' value is truthy, ••••••••••••••• */
/* it injects specified content scripts into all frames of the tab. •• */
/* ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••• */
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // When a webpage loaded completely
    if (changeInfo.status === 'complete') {
        // Get the 'state' data from Chrome local storage
        chrome.storage.local.get('state', (result) => {
            // Get the current state
            const currentState = result.state;

            // Continue only if the extension's 'state' is true
            if (currentState) {
                // Check if 'tab.url' is defined and not null
                if (typeof tab.url !== 'undefined' && tab.url !== null) {
                    // Loop through each website in the `injectTo` array
                    injectTo.forEach(website => {
                        // Check if 'tab.url' includes the current 'website', based on 'hostname'
                        if (tab.url.includes(website)) {
                            // Execute scripts in the specified tab and its all frames
                            chrome.scripting.executeScript({
                                target: { tabId: tabId, allFrames: true },
                                // Content script runs alongside page's main JavaScript
                                world: 'MAIN',
                                files: [
                                    // Include the core injection types
                                    'core/injection-types.js',
                                    // Include the specific content script for the website
                                    `inject-to/${website}.js` // Equivalent: 'inject-to/' + website + '.js'
                                ]
                            });
                        }
                    });
                }
            }
        });
    }
});
