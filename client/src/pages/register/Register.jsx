import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="register-input"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="register-input"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="register-input"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-register-button" type="submit">
          Register
        </button>
      </form>
      <button className="register-login-button">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
};

export default Register;
