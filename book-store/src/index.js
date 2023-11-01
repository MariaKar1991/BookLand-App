// Importing necessary modules and components from React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Creating a root for concurrent rendering using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the application within the root
root.render(
  <React.StrictMode>
    {/* Wrapping the App component with BrowserRouter for routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
