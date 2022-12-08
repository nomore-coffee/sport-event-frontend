import React from "react";
import "./register.css";
const Register = () => {
  return (
    <div>
      <div className="background">
      <div className="login-box">
        <h2>Register</h2>
        <form>
        <div className="user-box">
            <input type="text" name="" required="" />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <a >
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

export default Register;
