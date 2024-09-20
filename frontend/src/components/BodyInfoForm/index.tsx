import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./index.css";
import "../../index.css";
const BodyInfoForm: React.FC = () => {
  const navigate = useNavigate();

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [sex, setSex] = useState("Male");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    navigate('/fitness-goals');
    event.preventDefault();
  };

  return (
    <form className="body-info-form" onSubmit={handleSubmit}>
      {" "}
      <h2>Now, let's get to know <span className="highlight">your</span> body...</h2>{" "}
      <div className="form-group">
        {" "}
        <label>What's your current weight?</label>{" "}
        <input
          type="number"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />{" "}
        <select>
          {" "}
          <option value="kg">kg</option> <option value="lb">lb</option>{" "}
        </select>{" "}
      </div>{" "}
      <div className="form-group">
        {" "}
        <label>How tall are you?</label>{" "}
        <input
          type="number"
          placeholder="Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />{" "}
        <select>
          {" "}
          <option value="cm">cm</option> <option value="in">in</option>{" "}
        </select>{" "}
      </div>{" "}
      <div className="form-group">
        {" "}
        <label>What is your sex?</label>{" "}
        <select value={sex} onChange={(e) => setSex(e.target.value)}>
          {" "}
          <option value="Male">Male</option>{" "}
          <option value="Female">Female</option>{" "}
        </select>{" "}
      </div>{" "}
      <div className="form-group">
        {" "}
        <label>When's your birthday?</label>{" "}
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />{" "}
      </div>{" "}
      <button type="submit" className="submit-button">
        {" "}
        Next: Your Fitness Goals{" "}
      </button>{" "}
    </form>
  );
};
export default BodyInfoForm;
