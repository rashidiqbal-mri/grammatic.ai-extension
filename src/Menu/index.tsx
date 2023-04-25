import React from "react";
import { createRoot } from "react-dom/client";
import Menu from "./menu";

function init(){
    const appContainer=document.createElement("div");
    document.body.appendChild(appContainer);
    if(!appContainer){
        throw new Error("can not find AppContainer");
    }
    const root=createRoot(appContainer);
    
    root.render(<Menu/>)

}

init()
