import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import custom CSS
import './css/core-style.css';
import './css/classy-nav.min.css';
import './css/animate.css';
import './css/font-awesome.min.css';
import './css/jquery-ui.min.css';
import './css/magnific-popup.css';
import './css/nice-select.css';
import './css/owl.carousel.css';

// Import jQuery and Bootstrap JS
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 