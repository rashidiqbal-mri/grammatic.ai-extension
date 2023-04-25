import React from "react";
import { createRoot } from "react-dom/client";
import Tabs from "./tabs"

function init(){
    const appContainer=document.createElement("div");
    document.body.appendChild(appContainer);
    if(!appContainer){
        throw new Error("can not find AppContainer");
    }
    const root=createRoot(appContainer);
    console.log(appContainer);
    root.render(<Tabs/>)

}

init()
