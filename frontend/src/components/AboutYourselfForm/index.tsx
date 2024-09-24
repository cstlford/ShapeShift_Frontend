import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import "../../index.css";
const AboutYourselfForm: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    navigate("/body-info");
    event.preventDefault();
  };

  return (
    <div className="ay-form-container">
      <form className="ay-form" onSubmit={handleSubmit}>
        {" "}
        <h2>
          First, tell us a bit about <span className="highlight">yourself</span>
          ...
        </h2>{" "}
        <div className="ay-form-group">
          {" "}
          <label className="ay-input-label">What's your name?</label>{" "}
          <input
            className="ay-input-text"
            type="string"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
        </div>{" "}
        <div className="ay-form-group">
          {" "}
          <label className="ay-input-label">What's your email?</label>{" "}
          <input
            className="ay-input-text"
            type="string"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </div>{" "}
        <div className="ay-form-group">
          {" "}
          <label className="ay-input-label">Create a password</label>{" "}
          <input
            className="ay-input-text"
            type="string"
            placeholder="Enter a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
        </div>{" "}
        <p>or</p>
        <div className="ay-btn-1">
          <button type="submit" className="ay-google-submit-btn">
            {" "}
            Sign in with Google{" "}
          </button>{" "}
        </div>
        <div className="ay-btn-2">
          <button type="submit" className="ay-submit-btn">
            {" "}
            Next: Your Physical Stats{" "}
          </button>{" "}
        </div>
      </form>
    </div>
  );
};
export default AboutYourselfForm;
