import React from "react";
import "../register/register.css";
const Login = () => {
  return (
    <div>
      <div className="background">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <div className="row">
            <div className="col-md-12 register_user">
            <button href="register" className="register-button">  Register User? </button>
            </div>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
