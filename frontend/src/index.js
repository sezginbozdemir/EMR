import React from "react";
import ReactDOM from "react-dom/client";

import App,{andreea} from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App /> 
    {andreea}
  </React.StrictMode>
);

