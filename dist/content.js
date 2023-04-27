/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
function addButtonToTextBoxes() {
    let textBoxes = document.querySelectorAll("input[type='text'], textarea");
    textBoxes.forEach((textBox) => {
        let container = document.createElement("div");
        container.style.position = "relative";
        container.style.display = "inline-block";
        textBox.before(container);
        container.appendChild(textBox);
        let button = document.createElement("button");
        button.innerText = "RI";
        button.style.backgroundColor = "teal";
        button.style.position = "absolute";
        button.style.borderRadius = "100%";
        button.style.padding = "0.5em";
        button.style.border = "none";
        button.style.color = "#fff";
        //   button.style.display = "none";
        button.style.bottom = "2px";
        button.style.right = "2px";
        container.appendChild(button);
        console.log(button);
        console.log('addButtonToTextBoxes function is being executed!');
        button.addEventListener("click", (event) => {
            event.preventDefault(); // prevent form submission
            console.log("rashid");
            let message = {
                type: "open_menu"
            };
            chrome.runtime.sendMessage(message, (response) => {
                console.log(response);
            });
        });
        textBox.addEventListener("focus", () => {
            button.style.display = "inline-block";
        });
        //   textBox.addEventListener("blur", () => {
        //     button.style.display = "none";
        //   });
    });
}
addButtonToTextBoxes();
// Send a message to the background script with the selected text
function copySelectedTextToBackground() {
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement) {
        const selectedText = activeElement.value.substring(activeElement.selectionStart, activeElement.selectionEnd);
        if (selectedText) {
            chrome.runtime.sendMessage({ type: 'selectedText', text: selectedText });
        }
    }
}
document.addEventListener('mouseup', copySelectedTextToBackground);
document.addEventListener('keyup', copySelectedTextToBackground);
//textbox
function copyTextboxTextToBackground() {
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement) {
        const textboxText = activeElement.value;
        if (textboxText) {
            chrome.runtime.sendMessage({ type: 'textboxText', text: textboxText });
        }
    }
}
document.addEventListener('mouseup', copyTextboxTextToBackground);
document.addEventListener('keyup', copyTextboxTextToBackground);

/******/ })()
;
//# sourceMappingURL=content.js.map