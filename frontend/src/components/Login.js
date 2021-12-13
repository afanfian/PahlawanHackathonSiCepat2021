import React from 'react';
import "./Style.css";
import "./components-css/Login.css";

const Login = () => {
    return (
        <div class="container" id="container">
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-right">
                        <h1>HTML CSS Login Form</h1>
                        <p>This login form is created using pure HTML and CSS. For social icons, FontAwesome is used.</p>
                    </div>
                </div>
            </div>
            <div class="form-container log-in-container">
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
