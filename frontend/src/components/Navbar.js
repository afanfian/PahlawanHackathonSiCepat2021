import React from 'react';
import "./Style.css";
import "./components-css/Navbar.css";
import logo from "./img/logo2.svg";

const Navbar = (msg) =>{
    return (
        <nav>
            <ul>
                <li id="Web-Logo"><a href="/"><img src={ logo } alt="Logo" className="logo"/></a></li>
                <li><a href="/" className="nav-li">Feedback</a></li>
                <li><a href="/isiFeedbacks" className="nav-li">Isi Feedback</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;