/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
function addButtonToTextBoxes() {
    let textBoxes = document.querySelectorAll("input[type='text'], textarea");
    // Words to underline and their styles
    const wordsToUnderline = ['rashid', 'cool'];
    const underlineColors = ['red', 'green'];
    textBoxes.forEach((textBox) => {
        let container = document.createElement("div");
        container.style.position = "relative";
        container.style.display = "inline-block";
        textBox.before(container);
        container.appendChild(textBox);
        // Create mirror element for measuring word widths
        let mirror = document.createElement("div");
        mirror.style.visibility = "hidden";
        mirror.style.whiteSpace = "pre";
        mirror.style.position = "absolute";
        mirror.style.top = "0";
        mirror.style.left = "0";
        mirror.style.font = window.getComputedStyle(textBox).font;
        document.body.appendChild(mirror);
        // Create overlay for underlines
        let overlay = document.createElement("div");
        overlay.style.position = "absolute";
        overlay.style.pointerEvents = "none"; // Allow clicks to pass through the overlay
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        container.appendChild(overlay);
        // Update underlines
        const updateUnderlines = () => {
            overlay.innerHTML = ''; // Clear previous underlines
            const text = textBox.value;
            const words = text.split(' ');
            let currentPos = 0;
            words.forEach((word) => {
                const underlineIndex = wordsToUnderline.indexOf(word);
                if (underlineIndex !== -1) {
                    // Measure word width using mirror element
                    mirror.textContent = word;
                    const wordWidth = mirror.offsetWidth;
                    const underline = document.createElement('div');
                    underline.style.borderBottom = `2px solid ${underlineColors[underlineIndex]}`;
                    underline.style.position = 'absolute';
                    underline.style.left = currentPos + 'px';
                    underline.style.width = wordWidth + 'px';
                    underline.style.top = 'calc(100% - 45px)';
                    overlay.appendChild(underline);
                }
                // Measure word + space width using mirror element
                mirror.textContent = word + ' ';
                currentPos += mirror.offsetWidth;
            });
        };
        textBox.addEventListener('input', updateUnderlines);
        updateUnderlines(); // Initial update of underlines
        let button = document.createElement("button");
        button.innerText = "RI";
        button.style.backgroundColor = "teal";
        button.style.position = "absolute";
        button.style.borderRadius = "100%";
        button.style.padding = "0.5em";
        button.style.border = "none";
        button.style.color = "#fff";
        button.style.bottom = "2px";
        button.style.right = "2px";
        container.appendChild(button);
        // Variable to store the menu container element
        let menuContainer = null;
        button.addEventListener("click", (event) => {
            event.preventDefault(); // prevent form submission
            const buttonRect = button.getBoundingClientRect();
            const buttonCoordinates = {
                x: buttonRect.x + window.scrollX,
                y: buttonRect.y + window.scrollY,
            };
            // Check if the menu is already open
            if (menuContainer) {
                // If the menu is open, close it and set menuContainer to null
                menuContainer.remove();
                menuContainer = null;
            }
            else {
                // If the menu is not open, create the menu container element
                menuContainer = document.createElement('div');
                menuContainer.style.position = 'absolute';
                menuContainer.style.top = buttonRect.y + buttonRect.height + window.scrollY + 'px';
                menuContainer.style.left = buttonRect.x + window.scrollX + "px";
                menuContainer.style.zIndex = '9999'; // ensure the menu is on top
                // Append the menu container to the body
                document.body.appendChild(menuContainer);
                // Inject the menu component into the menu container
                menuContainer.innerHTML = `
      <iframe
        src="${chrome.runtime.getURL('menu.html')}"
        style="border: none; width: 400px; height: 300px;"
      ></iframe>
    `;
            }
        });
        textBox.addEventListener("focus", () => {
            button.style.display = "inline-block";
        });
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
// Send a message to the background script with the textbox text
function copyTextboxTextToBackground() {
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement) {
        const textboxText = activeElement.value;
        if (textboxText) {
            chrome.runtime.sendMessage({ type: 'textboxText', text: textboxText });
        }
    }
}
document.addEventListener('focusin', copyTextboxTextToBackground);
document.addEventListener('input', copyTextboxTextToBackground);
document.addEventListener('mouseup', copyTextboxTextToBackground);
document.addEventListener('keyup', copyTextboxTextToBackground);

/******/ })()
;
//# sourceMappingURL=contentScript.js.map