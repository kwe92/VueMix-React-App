import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const ele = document.getElementById("root");

const root = ReactDOM.createRoot(ele);
root.render(
  <React.StrictMode>
    {/* Wrap App element with the BrowserRouter element */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
