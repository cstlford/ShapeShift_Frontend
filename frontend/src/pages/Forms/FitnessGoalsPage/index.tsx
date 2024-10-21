import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "../../../UserInfoContext";
import "./index.css";
import FormLayout from "../../../layouts/FormLayout";
import Button from "../../../components/Button";
import RadioCard from "../../../components/RadioCard";

const options = {
  weight_management: [
    { name: "Gain weight", id: "gain" },
    { name: "Lose weight", id: "lose" },
    { name: "Maintain weight", id: "maintain" },
  ],
  cardio_goals: [
    { name: "Improve Endurance", id: "endurance" },
    { name: "Increase Speed", id: "speed" },
    { name: "Maximize Fat Burn", id: "fat_burn" },
    { name: "Improve Overall Fitness", id: "overall_fitness" },
  ],
  resistance_training_goals: [
    { name: "Increase Muscle Mass", id: "muscle_mass" },
    { name: "Improve Overall Strength", id: "overall_strength" },
    { name: "Enhance Muscle Endurance", id: "muscle_endurance" },
    { name: "Improve Functional Strength", id: "functional_strength" },
  ],
};

const FitnessGoalsForm: React.FC = () => {
  const navigate = useNavigate();
  const { userInfoData, setUserInfoData } = useUserInfoContext();

  const handleRadioChange = (category: string, value: string) => {
    setUserInfoData((prev: any) => ({
      ...prev,
      fitness_goals: {
        ...prev.fitness_goals,
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
            options={options.weight_management}
            selectedOption={userInfoData.fitness_goals.weight_management}
            onChange={(value) => handleRadioChange("weight_management", value)}
          />
          <RadioCard
            title="Cardio Goals"
            options={options.cardio_goals}
            selectedOption={userInfoData.fitness_goals.cardio_goals}
            onChange={(value) => handleRadioChange("cardio_goals", value)}
          />
          <RadioCard
            title="Resistance Training Goals"
            options={options.resistance_training_goals}
            selectedOption={
              userInfoData.fitness_goals.resistance_training_goals
            }
            onChange={(value) =>
              handleRadioChange("resistance_training_goals", value)
            }
          />
        </div>

        <Button style="orange">Next: Your Lifestyle</Button>
      </form>
    </FormLayout>
  );
};

export default FitnessGoalsForm;
