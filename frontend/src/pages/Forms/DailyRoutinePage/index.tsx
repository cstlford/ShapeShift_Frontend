import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfoContext } from "../../../contexts/UserInfoContext";
import "./index.css";
import Button from "../../../components/Button";
import FormLayout from "../../../layouts/FormLayout";
import SelectForm from "../../../components/SelectForm";

const DailyRoutineForm: React.FC = () => {
  const navigate = useNavigate();
  const { userInfoData, setUserInfoData } = useUserInfoContext();

  const handleSelectChange = (
    category: string,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newValue = event.target.value;
    setUserInfoData((prev: any) => ({
      ...prev,
      daily_routine: {
        ...prev.daily_routine,
        [category]: newValue,
      },
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/final-page");
  };

  const options = {
    particular_diet: [
      { name: "Vegetarian", id: "vegetarian" },
      { name: "Vegan", id: "vegan" },
      { name: "Keto", id: "keto" },
      { name: "Omnivore", id: "omnivore" },
      { name: "Paleo", id: "paleo" },
    ],
    activity_level: [
      { name: "Sedentary (little to no exercise)", id: "sedentary" },
      {
        name: "Lightly Active (light exercise 1-3 days/week)",
        id: "lightly_active",
      },
      {
        name: "Moderately Active (Moderate exercise 3-5 days/week)",
        id: "moderately_active",
      },
      {
        name: "Very Active (Intense exercise 6-7 days/week)",
        id: "very_active",
      },
      {
        name: "Extremely Active (very intense exercise & physical job)",
        id: "extremely_active",
      },
    ],
  };
  return (
    <FormLayout>
      <form onSubmit={handleSubmit}>
        <h2>
          Tell us about your <span className="highlight">daily routine</span>...
        </h2>

        <div className="inputs">
          <SelectForm
            label="Do you follow a particular diet?"
            value={userInfoData.daily_routine?.particular_diet || ""}
            options={options.particular_diet}
            onChange={(event) => handleSelectChange("particular_diet", event)}
          />
          <SelectForm
            label="How would you describe your typical day?"
            value={userInfoData.daily_routine?.activity_level || ""}
            options={options.activity_level}
            onChange={(event) => handleSelectChange("activity_level", event)}
          />
        </div>

        <Button style="orange">Create My Profile</Button>
      </form>
    </FormLayout>
  );
};

export default DailyRoutineForm;
