import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Login from "./components/Login.js";
import Navbar from "./components/Navbar.js";
// import Feedbacks1 from "./components/Feedbacks1.js";
// import Feedbacks2 from "./components/Feedbacks2.js";
// import Feedbacks3 from "./components/Feedbacks3.js";
// import Feedbacks4 from "./components/Feedbacks4.js";
// import Feedbacks5 from "./components/Feedbacks5.js";
import IsiFeedbacks from "./components/IsiFeedbacks.js";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar /> 
    {/* <Login />
    <Feedbacks1 />
    <Feedbacks2 />
    <Feedbacks3 />
    <Feedbacks4 />
    <Feedbacks5 /> */}
    <IsiFeedbacks/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();