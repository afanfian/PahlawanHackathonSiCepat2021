import React from 'react';
import "./Style.css";
import "./components-css/Navbar.css";
import logo from "./img/logo2.svg";


const Navbar = () =>{
    return (
        <nav>
            <ul>
                <li id="Web-Logo"><a href="#"><img src={ logo } alt="Logo" className="logo"/></a></li>
                <li><a href="/" class="nav-li">Isi Feedback</a></li>
                <li><a href="/" class="nav-li">Feedback Pelanggan</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;