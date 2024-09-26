import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../../FormContext";
import "./index.css";
import "../../../index.css";

const AboutYourselfForm: React.FC = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormContext();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/body-info");
  };

  return (
    <div className="ay-form-container">
      <form className="ay-form" onSubmit={handleSubmit}>
        <h2>
          First, tell us a bit about <span className="highlight">yourself</span>
          ...
        </h2>
        <div className="ay-form-group">
          <label className="ay-input-label">What's your name?</label>
          <input
            className="ay-input-text"
            type="text"
            placeholder="Enter your full name"
            value={formData.name || ""}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="ay-form-group">
          <label className="ay-input-label">What's your email?</label>
          <input
            className="ay-input-text"
            type="email"
            placeholder="Enter your email"
            value={formData.email || ""}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="ay-form-group">
          <label className="ay-input-label">Create a password</label>
          <input
            className="ay-input-text"
            type="password"
            placeholder="Enter a strong password"
            value={formData.password || ""}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <p>or</p>
        <div className="ay-btn-1">
          <button type="button" className="ay-google-submit-btn">
            Sign in with Google
          </button>
        </div>
        <div className="ay-btn-2">
          <button type="submit" className="ay-submit-btn">
            Next: Your Physical Stats
          </button>
        </div>
      </form>
    </div>
  );
};

export default AboutYourselfForm;
