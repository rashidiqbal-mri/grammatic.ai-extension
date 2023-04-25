chrome.runtime.onInstalled.addListener(()=>{
    console.log("I just Installed my Extension");
    
})

chrome.bookmarks.onCreated.addListener(()=>{
    console.log("I created a BookMark of this page");
    
})