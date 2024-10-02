import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../../FormContext";
import "./index.css";
import "../../../index.css";

const FitnessGoalsForm: React.FC = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormContext();

  const handleRadioChange = (category: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      fitnessGoals: {
        ...prev.fitnessGoals,
        [category]: value,
      },
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/daily-routine");
  };

  const options = {
    weightManagement: [
      { name: "Gain weight", id: "gain" },
      { name: "Lose weight", id: "lose" },
      { name: "Maintain weight", id: "maintain" },
    ],
    cardioGoals: [
      { name: "Improve Endurance", id: "endurance" },
      { name: "Increase Speed", id: "speed" },
      { name: "Maximize Fat Burn", id: "fatBurn" },
      { name: "Improve Overall Fitness", id: "overallFitness" },
    ],
    resistanceTrainingGoals: [
      { name: "Increase Muscle Mass", id: "muscleMass" },
      { name: "Improve Overall Strength", id: "overallStrength" },
      { name: "Enhance Muscle Endurance", id: "muscleEndurance" },
      { name: "Improve Functional Strength", id: "functionalStrength" },
    ],
  };

  return (
    <div className="fg-form-container">
      <form className="fg-form" onSubmit={handleSubmit}>
        <h2>
          What do you want to <span className="highlight">achieve</span>?
        </h2>

        <div className="fg-form-group">
          <div className="card">
            <h3>Weight Management</h3>
            {options.weightManagement.map((option) => (
              <div key={option.id}>
                <input
                  type="radio"
                  id={`weightManagement-${option.id}`}
                  name="weightManagement"
                  value={option.id}
                  checked={formData.fitnessGoals.weightManagement === option.id}
                  onChange={() =>
                    handleRadioChange("weightManagement", option.id)
                  }
                />
                <label htmlFor={`weightManagement-${option.id}`}>
                  {option.name}
                </label>
              </div>
            ))}
          </div>

          <div className="card">
            <h3>Cardio Goals</h3>
            {options.cardioGoals.map((option) => (
              <div key={option.id}>
                <input
                  type="radio"
                  id={`cardioGoals-${option.id}`}
                  name="cardioGoals"
                  value={option.id}
                  checked={formData.fitnessGoals.cardioGoals === option.id}
                  onChange={() => handleRadioChange("cardioGoals", option.id)}
                />
                <label htmlFor={`cardioGoals-${option.id}`}>
                  {option.name}
                </label>
              </div>
            ))}
          </div>

          <div className="card">
            <h3>Resistance Training Goals</h3>
            {options.resistanceTrainingGoals.map((option) => (
              <div key={option.id}>
                <input
                  type="radio"
                  id={`resistanceTrainingGoals-${option.id}`}
                  name="resistanceTrainingGoals"
                  value={option.id}
                  checked={
                    formData.fitnessGoals.resistanceTrainingGoals === option.id
                  }
                  onChange={() =>
                    handleRadioChange("resistanceTrainingGoals", option.id)
                  }
                />
                <label htmlFor={`resistanceTrainingGoals-${option.id}`}>
                  {option.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="fg-submit-btn">
          Next: Your Lifestyle
        </button>
      </form>
    </div>
  );
};

export default FitnessGoalsForm;
