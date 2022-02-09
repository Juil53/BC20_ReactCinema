import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import "./animate.css";
import { actAuthMovie } from "./modules/action";

export default function AuthPage(props) {
  const loading = useSelector((state) => state.AuthReducer.loading);
  const error = useSelector((state) => state.AuthReducer.error);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actAuthMovie(state, props.history));
  };

  const noti = () => {
    return (
      error && (
        <div className="alert alert-danger">{error.response.data.content}</div>
      )
    );
  };

  return (
      <div className="container">
        <div className="top">
          <h1 id="title" className="hidden">
            <span id="logo">BOLETO CINEMA</span>
          </h1>
        </div>

        <form className="login-box animated fadeInUp" onSubmit={handleSubmit}>
          <div className="box-header">
            <h2>Log In</h2>
          </div>
          {noti()}

          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            id="username"
            name="taiKhoan"
            onChange={handleOnChange}
          />

          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="matKhau"
            onChange={handleOnChange}
          />
          <br />
          <button type="submit">Sign In</button>
          <br />
          <a href="#">
            <p className="small">Forgot your password?</p>
          </a>
        </form>
      </div>
  );
}
