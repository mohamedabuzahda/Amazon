import { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../../assets/Logo/logo-2.webp";

const nameRegex = /^[A-Za-z\s]{4,}$/;
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e && e.preventDefault && e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!nameRegex.test(name.trim())) {
      setError("Name must be at least 4 letters.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters and include letters and numbers."
      );
      return;
    }
    setError("");

    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    alert("Account created successfully!");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={containerStyle}>
      <Link to="/" style={logoBoxStyle}>
        <img src={logo2} alt="Amazon Logo" style={{ width: "100px" }} />
      </Link>

      <div
        style={{
          width: "100%",
          maxWidth: "350px",
          margin: "0 auto",
          border: "1px solid #ddd",
          padding: "20px 26px",
          borderRadius: "8px",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{ fontWeight: "400", fontSize: "28px", marginBottom: "20px" }}
        >
          Create account
        </h2>

        <label style={labelStyle}>Your name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}> email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}

        <button onClick={handleRegister} style={buttonStyle}>
          Continue
        </button>

        <p style={{ fontSize: "12px", marginTop: "15px" }}>
          By continuing, you agree to Amazon's <a href="#">Conditions of Use</a>{" "}
          and <a href="#">Privacy Notice</a>.
        </p>

        <hr style={{ margin: "20px 0" }} />

        <div style={{ textAlign: "center", fontSize: "12px", color: "#555" }}>
          <div style={{ marginBottom: "5px" }}>
            <a href="#">Conditions of Use</a> &nbsp;&nbsp;
            <a href="#">Privacy Notice</a> &nbsp;&nbsp;
            <a href="#">Help</a>
          </div>
          <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
        <Link to="/login">
          <button style={buttonsStyle}>already have account</button>
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
const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  marginBottom: "15px",
  borderRadius: "4px",
  border: "1px solid #a6a6a6",
};
const logoBoxStyle = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "30px",
};
const labelStyle = {
  fontWeight: "bold",
  fontSize: "14px",
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
const buttonsStyle = {
  width: "100%",
  padding: "8px",
  backgroundColor: "#fff",
  border: "1px solid #a88734",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold",
  display: "block",
  margin: "10px auto 0",
  textAlign: "center",
};

export default Register;
