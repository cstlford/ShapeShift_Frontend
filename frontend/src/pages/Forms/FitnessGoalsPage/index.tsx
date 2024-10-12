import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../../FormContext";
import "./index.css";
import FormLayout from "../../../layouts/FormLayout";
import Button from "../../../components/Button";
import RadioCard from "../../../components/RadioCard";

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

  return (
    <FormLayout>
      <form className="fg-form" onSubmit={handleSubmit}>
        <h2>
          What do you want to <span className="highlight">achieve</span>?
        </h2>
        <h5>
          Your fitness journey is unique. Select all the goals that apply to
          you:
        </h5>
        <div className="fg-form-group">
          <RadioCard
            title="Weight Management"
            options={options.weightManagement}
            selectedOption={formData.fitnessGoals.weightManagement}
            onChange={(value) => handleRadioChange("weightManagement", value)}
          />
          <RadioCard
            title="Cardio Goals"
            options={options.cardioGoals}
            selectedOption={formData.fitnessGoals.cardioGoals}
            onChange={(value) => handleRadioChange("cardioGoals", value)}
          />
          <RadioCard
            title="Resistance Training Goals"
            options={options.resistanceTrainingGoals}
            selectedOption={formData.fitnessGoals.resistanceTrainingGoals}
            onChange={(value) =>
              handleRadioChange("resistanceTrainingGoals", value)
            }
          />
        </div>

        <Button style="orange">Next: Your Lifestyle</Button>
      </form>
    </FormLayout>
  );
};

export default FitnessGoalsForm;
