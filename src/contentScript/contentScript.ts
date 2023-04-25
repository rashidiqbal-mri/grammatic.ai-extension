function addButtonToTextBoxes() {
    let textBoxes = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input[type='text'], textarea");
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
      button.style.top = "50%";
      button.style.borderRadius = "100%";
      button.style.transform = "translateY(-50%)";
      button.style.right = "0";
      button.style.padding = "0.5em";
      button.style.border = "none";
      button.style.color = "#fff";
      button.style.display = "none";
      button.addEventListener('click', () => {
        chrome.runtime.sendMessage({ type: 'openMenu' });
      });
      container.appendChild(button);
  
      textBox.addEventListener("focus", () => {
        button.style.display = "inline-block";
      });
  
      textBox.addEventListener("blur", () => {
        button.style.display = "none";
      });
    });
  
    let iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      try {
        let iframeDocument = iframe.contentDocument;
        let iframeTextBoxes = iframeDocument.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
          "input[type='text'], textarea"
        );
        iframeTextBoxes.forEach((textBox) => {
          let container = document.createElement("div");
          container.style.position = "relative";
          container.style.display = "inline-block";
          textBox.before(container);
  
          container.appendChild(textBox);
  
          let button = document.createElement("button");
          button.innerText = "RI";
          button.style.backgroundColor = "teal";
          button.style.position = "absolute";
          button.style.top = "50%";
          button.style.borderRadius = "100%";
          button.style.transform = "translateY(-50%)";
          button.style.right = "calc(5% + 40px)";
          button.style.padding = "0.5em";
          button.style.border = "none";
          button.style.color = "#fff";
          button.style.display = "none";
          button.addEventListener("click", () => {
            chrome.runtime.sendMessage({ type: 'openMenu' });
          });
          container.appendChild(button);
  
          textBox.addEventListener("focus", () => {
            button.style.display = "inline-block";
          });
  
          textBox.addEventListener("blur", () => {
            button.style.display = "none";
          });
        });
      } catch (e) {
        console.error(e);
      }
    });
  }
  
  addButtonToTextBoxes();
  
  
  //copy text

  function copySelectedTextToClipboard() {
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement) {
      const selectedText = activeElement.value.substring(activeElement.selectionStart, activeElement.selectionEnd);
      if (selectedText) {
        
        
        chrome.runtime.sendMessage({ type: 'selectedText', text: selectedText }, function(response) {
            console.log('Response:', response);
          });
      }
    }
  }
  
  document.addEventListener('select', copySelectedTextToClipboard);
  