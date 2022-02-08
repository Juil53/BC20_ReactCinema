import React from "react";
import "./styleSignin.css";
import "./animateSignin.css";

export default function AddUserPage(props) {
  return (
    <div className="container">
      <div className="top">
        <h1 id="title" className="hidden">
          <span id="logo">BOLETO CINEMA</span>
        </h1>
      </div>

      <form className="login-box animated fadeInUp">
        <div className="box-header">
          <h2>Log In</h2>
        </div>

        <label htmlFor="username">Username</label>
        <br />
        <input type="text" id="username" name="taiKhoan" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" name="matKhau" />
        <br />
        <label htmlFor="text">HoTen</label>
        <br />
        <input type="text" id="hoten" name="hoTen" />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="number">So dien thoai</label>
        <br />
        <input type="number" id="sodienthoai" name="soDienThoai" />
        <br />
        <label>Ma Nhom</label>
        <br />
        <input type="text" id="manhom" name="maNhom" />
        <br />
        <label>Ma Nguoi dung</label>
        <br />
        <input type="text" id="manguoidung" name="maLoaiNguoiDung" />
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
