import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GloabalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>
);
