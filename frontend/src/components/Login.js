import React from 'react';
import "./Style.css";
import "./components-css/Login.css";
import logo from "./img/logo2.svg";

const Login = () => {
    return (
        <div className="container" id="container">
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <a href="#"><img src={ logo } alt="Logo" className="logo"/></a>
                    </div>
                </div>
            </div>
            <div className="form-container log-in-container">
                <form action="#">
                    <h1 className="login-form-title">Login</h1>
                    <input className="login-form-input" type="username" placeholder="Username" required/>
                    <input className="form-input" type="password" placeholder="Password" required/>
                    <a href="#">Forgot your password?</a>
                    <button className="login-form-btn">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
