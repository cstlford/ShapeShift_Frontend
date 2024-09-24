import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../FormContext";
import "./index.css";
import "../../index.css";

const DailyRoutineForm: React.FC = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormContext();

  const handleSelectChange = (
    category: string,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newValue = event.target.value;
    setFormData((prev: any) => ({
      ...prev,
      dailyRoutine: {
        ...prev.dailyRoutine,
        [category]: newValue,
      },
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/final-page");
  };

  const options = {
    particularDiet: [
      { name: "Not Applicable", id: 1 },
      { name: "Vegetarian", id: 2 },
      { name: "Vegan", id: 3 },
      { name: "Keto", id: 4 },
      { name: "Omnivore", id: 5 },
      { name: "Carnivore", id: 6 },
    ],
    typicalDay: [
      { name: "Sedentary (little to no exercise)", id: 1 },
      { name: "Lightly Active (light exercise 1-3 days/week)", id: 2 },
      { name: "Moderately Active (Moderate exercise 3-5 days/week)", id: 3 },
      { name: "Very Active (Intense exercise 6-7 days/week)", id: 4 },
      {
        name: "Extremely Active (very intense exercise & physical job)",
        id: 5,
      },
    ],
  };

  return (
    <div className="dr-form-container">
      <form className="dr-form" onSubmit={handleSubmit}>
        <h2>
          Tell us about your <span className="highlight">daily routine</span>...
        </h2>

        <div className="dr-form-group">
          <div>
            <label>Do you follow a particular diet?</label>
            <select
              value={formData.dailyRoutine?.particularDiet || ""}
              onChange={(event) => handleSelectChange("particularDiet", event)}
              className="dr-select"
            >
              <option value="" disabled>
                Select your diet
              </option>
              {options.particularDiet.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>How would you describe your typical day?</label>
            <select
              value={formData.dailyRoutine?.typicalDay || ""}
              onChange={(event) => handleSelectChange("typicalDay", event)}
              className="dr-select"
            >
              <option value="" disabled>
                Select activity level
              </option>
              {options.typicalDay.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="dr-submit-btn">
          Create My Profile
        </button>
      </form>
    </div>
  );
};

export default DailyRoutineForm;
