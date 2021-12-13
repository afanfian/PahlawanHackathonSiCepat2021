import React from 'react';
import "./Style.css";
import "./components-css/Navbar.css";
import logo from "./img/Logo1.png";

const Navbar = () =>{
    return (
        <nav>
            <ul>
                <li id="Web-Logo"><a href="#"><img src={ logo } alt="Logo" className="logo"/></a></li>
                <li><a href="/" class="nav-li">Feedback</a></li>
                <li><a href="/" class="nav-li">Tulis Feedback</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;