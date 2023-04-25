chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "openMenu") {
    console.log("Received openMenu message");
    // ...
  }
});
