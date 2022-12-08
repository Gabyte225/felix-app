import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App.js';
import { BrowserRouter } from "react-router-dom";
// import './reset.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

