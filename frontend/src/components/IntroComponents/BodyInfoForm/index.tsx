import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../../FormContext";
import "./index.css";
import "../../../index.css";

const BodyInfoForm: React.FC = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormContext();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/fitness-goals");
  };

  return (
    <div className="bi-form-container">
      <form className="bi-form" onSubmit={handleSubmit}>
        <h2>
          Now, let's get to know <span className="highlight">your</span> body...
        </h2>
        <div className="bi-form-group">
          <label className="bi-input-label">What's your current weight?</label>
          <div className="bi-input-container">
            <input
              className="bi-input-text"
              type="number"
              placeholder="Weight"
              value={formData.bodyInfo.weight}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bodyInfo: { ...formData.bodyInfo, weight: e.target.value },
                })
              }
            />
            <select
              className="bi-select"
              value={formData.bodyInfo.weightUnit}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bodyInfo: {
                    ...formData.bodyInfo,
                    weightUnit: e.target.value,
                  },
                })
              }
            >
              <option value="lb">lb</option>
              <option value="kg">kg</option>
            </select>
          </div>
        </div>
        <div className="bi-form-group">
          <label className="bi-input-label">How tall are you?</label>
          <div className="bi-input-container">
            <input
              className="bi-input-text"
              type="number"
              placeholder="Height"
              value={formData.bodyInfo.height}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bodyInfo: { ...formData.bodyInfo, height: e.target.value },
                })
              }
            />
            <select
              className="bi-select"
              value={formData.bodyInfo.heightUnit}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bodyInfo: {
                    ...formData.bodyInfo,
                    heightUnit: e.target.value,
                  },
                })
              }
            >
              <option value="in">in</option>
              <option value="cm">cm</option>
            </select>
          </div>
        </div>
        <div className="bi-form-group">
          <label className="bi-input-label">What is your sex?</label>
          <div className="bi-input-container">
            <select
              className="bi-select-sex"
              value={formData.bodyInfo.sex}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bodyInfo: { ...formData.bodyInfo, sex: e.target.value },
                })
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div className="bi-form-group">
          <label className="bi-input-label">When's your birthday?</label>
          <div className="bi-input-container">
            <input
              className="bi-input-text"
              type="date"
              value={formData.bodyInfo.birthday}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bodyInfo: { ...formData.bodyInfo, birthday: e.target.value },
                })
              }
            />
          </div>
        </div>
        <button type="submit" className="bi-submit-btn">
          Next: Your Fitness Goals
        </button>
      </form>
    </div>
  );
};

export default BodyInfoForm;
