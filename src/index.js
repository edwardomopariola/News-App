import React from "react";
import { createRoot } from "react-dom/client";
import App from './App';
// import "./index.css"; // Importing the CSS file for styling

const el = document.getElementById('root');
const root = createRoot(el);

root.render(<App />);