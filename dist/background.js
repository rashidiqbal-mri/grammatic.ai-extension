/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "openMenu") {
        console.log("Received openMenu message");
        // ...
    }
});

/******/ })()
;
//# sourceMappingURL=background.js.map