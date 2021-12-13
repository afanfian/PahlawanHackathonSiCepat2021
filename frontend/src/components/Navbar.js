import React from 'react';
import "./Style.css";
import "./components-css/Navbar.css";

const Navbar = () =>{
    return (
        <nav className='navbar'>
            <div>
                <button className='button1'>Isi Feedback</button>
                <button className='button2'>Feedback Pelanggan</button>
            </div>
        </nav>
    );
}

export default Navbar;