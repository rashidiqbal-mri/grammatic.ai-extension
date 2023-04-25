import React from "react";
import {createRoot} from "react-dom/client";
import "../assets/tailwind.css";
const test= (
    <>
      <div>
        <h1 className="text-pink-500 text-7xl">Options</h1>
      </div>
      <p>This is a Grammar</p>
</>
)
const container =document.createElement("div");
document.body.appendChild(container);
const root=createRoot(container);
root.render(test)