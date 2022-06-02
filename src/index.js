import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToastContainer } from 'react-toastify';

import App from './App';

import GlobalStyle from './globalStyle';

import 'react-toastify/ReactToastify.min.css';

const root = ReactDOM.createRoot(document.getElementById('main'));

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <ToastContainer position="bottom-right" newestOnTop />
  </React.StrictMode>
);
