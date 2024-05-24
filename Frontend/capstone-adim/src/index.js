import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

if (process.env.NODE_ENV === 'production') {
  
  console.log('Running in production mode');
} else {
  
  console.log('Running in development mode');
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
