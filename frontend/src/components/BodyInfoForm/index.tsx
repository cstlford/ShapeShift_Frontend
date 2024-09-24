import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import "../../index.css";
const BodyInfoForm: React.FC = () => {
  const navigate = useNavigate();

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [sex, setSex] = useState("Male");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    navigate("/fitness-goals");
    event.preventDefault();
  };

  return (
    <div className="bi-form-container">
      <form className="bi-form" onSubmit={handleSubmit}>
        <h2>
          Now, let's get to know <span className="highlight">your</span> body...
        </h2>
        <div className="bi-form-group">
          <label className="bi-input-label">What's your current weight?</label>
          <input
            className="bi-input-text"
            type="number"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <select>
            <option value="lb">lb</option> <option value="kg">kg</option>
          </select>
        </div>
        <div className="bi-form-group">
          <label className="bi-input-label">How tall are you?</label>
          <input
            className="bi-input-text"
            type="number"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <select>
            <option value="in">in</option> <option value="cm">cm</option>
          </select>
        </div>
        <div className="bi-form-group">
          <label className="bi-input-label">What is your sex?</label>
          <select value={sex} onChange={(e) => setSex(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="bi-form-group">
          <label className="bi-input-label">When's your birthday?</label>
          <input
            className="bi-input-text"
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <button type="submit" className="bi-submit-btn">
          Next: Your Fitness Goals
        </button>
      </form>
    </div>
  );
};
export default BodyInfoForm;
