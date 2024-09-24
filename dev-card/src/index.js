// importing react
import React from "react";
import ReactDOM from "react-dom";

// importing css
import "./index.css";

// app component

function App() {}

// render root method
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
