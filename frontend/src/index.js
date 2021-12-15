import React from 'react';
import ReactDOM from 'react-dom';
// import App from "./App.js";
// import axios from "axios";
import FeedbacksPerusahaan from './components/FeedbacksPerusahaan.js';
import Navbar from './components/Navbar.js';
// axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar/>
    <FeedbacksPerusahaan/>
  </React.StrictMode>,
  document.getElementById('root')
);