import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FE from './components/FE.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <FE />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();