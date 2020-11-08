import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import "./styles/normalize.css";
import "./styles/globalStyles.css";
import "./styles/animations.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
