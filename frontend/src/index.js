import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Feedbacks from './components/Feedbacks.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Feedbacks />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();