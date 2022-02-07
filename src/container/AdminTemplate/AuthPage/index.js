import React from "react";
import "./style.css";
import "./animate.css";

export default function AuthPage() {
  return (
    <div className="container">
      <div className="top">
        <h1 id="title" className="hidden">
          <span id="logo">
            BOLETO CINEMA
          </span>
        </h1>
      </div>
      <div className="login-box animated fadeInUp">
        <div className="box-header">
          <h2>Log In</h2>
        </div>
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" id="username" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" />
        <br />
        <button type="submit">Sign In</button>
        <br />
        <a href="#">
          <p className="small">Forgot your password?</p>
        </a>
      </div>
    </div>
  );
}
