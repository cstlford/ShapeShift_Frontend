import React, { useState } from "react";
import FormLayout from "../../../layouts/FormLayout";
import InputForm from "../../../components/InputForm";
import Button from "../../../components/Button";
import { NavLink } from "react-router-dom";
import "./index.css";
import shapeshift from "../../../assets/shapeshift.ico";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate("/dashboard");
        setError("");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <FormLayout>
      <div className="login-container">
        <div className="login-heading">
          <img src={shapeshift} alt="logo" />
          <h1>Sign in.</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login-forms">
            <InputForm
              type="email"
              value={email}
              placeholder="Email"
              onChange={handleEmailChange}
            />
            <InputForm
              type="password"
              value={password}
              placeholder="Password"
              onChange={handlePasswordChange}
            />
          </div>
          <Button style="orange">Sign in</Button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="subtext">
          Don't have an account?{" "}
          <NavLink to="/begin" className="create-account">
            Create Account
          </NavLink>
        </p>
        <p className="subtext">
          <NavLink to="/forgot" className="create-account">
            Forgot Password?
          </NavLink>
        </p>
      </div>
    </FormLayout>
  );
};

export default LoginPage;
