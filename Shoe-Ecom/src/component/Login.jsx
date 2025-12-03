import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "./StoreContext";
import "./Login.css";
import { RiAccountCircle2Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";

export default function Login() {
  const { login } = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter email");
    login(email);
    nav("/");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="user-icon">
          <RiAccountCircle2Line />
        </div>

        <h2 className="title">CUSTOMER LOGIN</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="icon">
              <MdOutlineEmail />
            </span>
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <span className="icon">
              <CiLock />
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="options">
            <span className="forgot">Forgot Password?</span>
          </div>

          <button className="login-btn" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
