import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../../assets/Logo/logo-2.webp";

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 6 characters and 2numbers.");
      return;
    }
    // تحقق من وجود المستخدم في localStorage
    // see if data or user in localStorage or no
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.email !== email || user.password !== password) {
      setError("Email or password is incorrect, or user not registered.");
      return;
    }
    setError("");
    alert("Login Successful!");
    navigate("/");
  };

  return (
    <div style={containerStyle}>
      <Link to="/" style={logoBoxStyle}>
        <img src={logo2} alt="Amazon Logo" style={{ width: "100px" }} />
      </Link>

      <div style={boxStyle}>
        <h2
          style={{ fontWeight: "400", fontSize: "28px", marginBottom: "20px" }}
        >
          Sign in
        </h2>
        <label style={{ fontWeight: "bold", fontSize: "14px" }}>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <label style={{ fontWeight: "bold", fontSize: "14px" }}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}

        <button style={buttonStyle} onClick={handleLogin}>
          Continue
        </button>

        <p style={{ fontSize: "12px", marginTop: "15px" }}>
          By continuing, you agree to Amazon's <a href="#">Conditions of Use</a>{" "}
          and <a href="#">Privacy Notice</a>.
        </p>

        <a href="#" style={helpLink}>
          ▸ Need help?
        </a>
        <hr style={{ margin: "20px 0" }} />
        <h5 style={smallText}>New to Amazon?</h5>
        <Link to="/register">
          <button style={grayButton}>Create your Amazon account</button>
        </Link>
      </div>
    </div>
  );
};

const containerStyle = {
  backgroundColor: "#fff",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
};
const logoBoxStyle = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "30px",
};
const boxStyle = {
  width: "100%",
  maxWidth: "350px",
  border: "1px solid #ddd",
  padding: "20px 26px",
  borderRadius: "8px",
  boxSizing: "border-box",
};
const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  marginBottom: "15px",
  borderRadius: "4px",
  border: "1px solid #a6a6a6",
};
const buttonStyle = {
  width: "100%",
  padding: "8px",
  backgroundColor: "#f0c14b",
  border: "1px solid #a88734",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold",
};
const grayButton = {
  ...buttonStyle,
  backgroundColor: "#e7e9ec",
  color: "#000",
  border: "1px solid #adb1b8",
};
const helpLink = {
  fontSize: "13px",
  color: "#0066c0",
  textDecoration: "none",
  display: "block",
  marginTop: "15px",
};
const smallText = {
  textAlign: "center",
  fontSize: "12px",
  color: "#767676",
  marginBottom: "10px",
};

// **Export Default**
export default Login;
