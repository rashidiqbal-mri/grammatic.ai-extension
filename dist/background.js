/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
let selectedText = '';
let textboxText = '';
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'selectedText') {
        selectedText = message.text;
    }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'getSelectedText') {
        sendResponse({ selectedText: selectedText });
    }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'textboxText') {
        textboxText = message.text;
    }
    else if (message.type === 'getTextboxText') {
        sendResponse({ textboxText: textboxText });
    }
});
// background.ts
// background.js
// Listen for message from content script to open menu
let popupWindowId = null;
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "toggle_menu") {
        const { x, y } = message.coordinates;
        if (popupWindowId === null) {
            // If the popup is not open, create the window
            chrome.windows.create({
                url: chrome.runtime.getURL("menu.html"),
                type: "popup",
                width: 400,
                height: 300,
                left: Math.round(x),
                top: Math.round(y) + 170,
            }, (window) => {
                popupWindowId = window.id;
            });
        }
        else {
            // If the popup is already open, close the window and reset the popupWindowId
            chrome.windows.remove(popupWindowId, () => {
                popupWindowId = null;
            });
        }
    }
    return true;
});

/******/ })()
;
//# sourceMappingURL=background.js.map