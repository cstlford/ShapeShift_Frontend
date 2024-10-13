import { useState } from "react";
import Button from "../../../components/Button";
import InputForm from "../../../components/InputForm";
import MealCarousel from "../../../components/MealCarousel";
import SelectForm from "../../../components/SelectForm";
import AppLayout from "../../../layouts/AppLayout";
import "./index.css";

const NutritionPage = () => {
  const [planDuration, setPlanDuration] = useState("");
  const [foodsToAvoid, setFoodsToAvoid] = useState("");
  const [mealCount, setMealCount] = useState("");
  const [flavorPreferences, setFlavorPreferences] = useState("");
  const meals = [
    [
      {
        title: "Eggs & Toast",
        calories: 350,
        macros: { protein: 20, carbs: 40, fat: 10 },
        ingredients: ["2 Eggs", "1Tb Butter", "1pc Toast"],
        directions: "",
      },
      {
        title: "Carrot Soup",
        calories: 500,
        macros: { protein: 30, carbs: 50, fat: 20 },
        ingredients: [],
        directions: "",
      },
      {
        title: "Meatloaf",
        calories: 600,
        macros: { protein: 35, carbs: 60, fat: 25 },
        ingredients: [],
        directions: "",
      },
    ],
    [
      {
        title: "Eggs & Toast",
        calories: 350,
        macros: { protein: 20, carbs: 40, fat: 10 },
        ingredients: ["2 Eggs", "1Tb Butter", "1pc Toast"],
        directions: "",
      },
      {
        title: "Carrot Soup",
        calories: 500,
        macros: { protein: 30, carbs: 50, fat: 20 },
        ingredients: [],
        directions: "",
      },
      {
        title: "Meatloaf",
        calories: 600,
        macros: { protein: 35, carbs: 60, fat: 25 },
        ingredients: [],
        directions: "",
      },
    ],
    [
      {
        title: "Eggs & Toast",
        calories: 350,
        macros: { protein: 20, carbs: 40, fat: 10 },
        ingredients: ["2 Eggs", "1Tb Butter", "1pc Toast"],
        directions: "",
      },
      {
        title: "Carrot Soup",
        calories: 500,
        macros: { protein: 30, carbs: 50, fat: 20 },
        ingredients: [],
        directions: "",
      },
      {
        title: "Meatloaf",
        calories: 600,
        macros: { protein: 35, carbs: 60, fat: 25 },
        ingredients: [],
        directions: "",
      },
    ],
    [
      {
        title: "Eggs & Toast",
        calories: 350,
        macros: { protein: 20, carbs: 40, fat: 10 },
        ingredients: ["2 Eggs", "1Tb Butter", "1pc Toast"],
        directions: "",
      },
      {
        title: "Carrot Soup",
        calories: 500,
        macros: { protein: 30, carbs: 50, fat: 20 },
        ingredients: [],
        directions: "",
      },
      {
        title: "Meatloaf",
        calories: 600,
        macros: { protein: 35, carbs: 60, fat: 25 },
        ingredients: [],
        directions: "",
      },
    ],
    [
      {
        title: "Eggs & Toast",
        calories: 350,
        macros: { protein: 20, carbs: 40, fat: 10 },
        ingredients: ["2 Eggs", "1Tb Butter", "1pc Toast"],
        directions: "",
      },
      {
        title: "Carrot Soup",
        calories: 500,
        macros: { protein: 30, carbs: 50, fat: 20 },
        ingredients: [],
        directions: "",
      },
      {
        title: "Meatloaf",
        calories: 600,
        macros: { protein: 35, carbs: 60, fat: 25 },
        ingredients: [],
        directions: "",
      },
    ],
    [
      {
        title: "Eggs & Toast",
        calories: 350,
        macros: { protein: 20, carbs: 40, fat: 10 },
        ingredients: ["2 Eggs", "1Tb Butter", "1pc Toast"],
        directions: "",
      },
      {
        title: "Carrot Soup",
        calories: 500,
        macros: { protein: 30, carbs: 50, fat: 20 },
        ingredients: [],
        directions: "",
      },
      {
        title: "Meatloaf",
        calories: 600,
        macros: { protein: 35, carbs: 60, fat: 25 },
        ingredients: [],
        directions: "",
      },
    ],
  ];

  const nutritionInfo = {
    dietaryPreference: "Vegetarian",
    nutritionGoal: "Gain Weight",
    dailyCaloricGoal: 2563,
    macroSplit: {
      protein: 122,
      fat: 83,
      carbohydrates: 315,
    },
  };
  const handlePlanDurationChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPlanDuration(e.target.value);
  };

  const handleFoodsToAvoidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFoodsToAvoid(e.target.value);
  };

  const handleMealCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMealCount(e.target.value);
  };

  const handleFlavorPreferencesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFlavorPreferences(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted with the following data:");
    console.log({
      planDuration,
      foodsToAvoid,
      mealCount,
      flavorPreferences,
    });
  };
  const timeOptions = [
    { name: "This week", id: 1 },
    { name: "Next 14 days", id: 2 },
  ];
  const numberOptions = [
    { name: "One", id: 1 },
    { name: "Two", id: 2 },
    { name: "Three", id: 3 },
    { name: "Four", id: 4 },
    { name: "Five", id: 5 },
    { name: "Six", id: 6 },
  ];

  return (
    <AppLayout>
      <h1>Create Your Personal Nutritional Plan</h1>
      <div className="nutrition-container">
        <div className="nutrition-info">
          <h2>Your Nutritional Blueprint</h2>
          <p>
            <strong>Dietary Preference:</strong>{" "}
            {nutritionInfo.dietaryPreference}
          </p>
          <p>
            <strong>Nutrition Goal:</strong> {nutritionInfo.nutritionGoal}
          </p>
          <p>
            <strong>Daily Caloric Goal:</strong>{" "}
            {nutritionInfo.dailyCaloricGoal} kcal
          </p>
          <p>
            <strong>Daily Macro Split:</strong>
          </p>
          <ul>
            <li>
              <strong>protein:</strong> {nutritionInfo.macroSplit.protein}g
            </li>
            <li>
              <strong>fat:</strong> {nutritionInfo.macroSplit.fat}g
            </li>
            <li>
              <strong>carbohydrate:</strong>{" "}
              {nutritionInfo.macroSplit.carbohydrates}g
            </li>
          </ul>
        </div>
        <form className="customize" onSubmit={handleSubmit}>
          <h2>Customize Your Meal Plan</h2>
          <div className="cols">
            <div className="col">
              <SelectForm
                value={planDuration}
                label="Select Your Plan Duration"
                options={timeOptions}
                onChange={handlePlanDurationChange}
              />
              <InputForm
                placeholder="E.g., Shellfish, Gluten"
                label="Any foods to avoid?"
                value={foodsToAvoid}
                type="text"
                onChange={handleFoodsToAvoidChange}
              />
            </div>
            <div className="col">
              <SelectForm
                value={mealCount}
                label="How many meals do you eat per day?"
                options={numberOptions}
                onChange={handleMealCountChange}
              />
              <InputForm
                placeholder="E.g., Mediterranean, Italian..."
                label="What flavors excite your palate?"
                value={flavorPreferences}
                type="text"
                onChange={handleFlavorPreferencesChange}
              />
            </div>
          </div>
          <Button style="blue">Create My Meal Plan</Button>
        </form>
      </div>
      <h2 id="schedule-heading">Your Meal Schedule</h2>
      <MealCarousel mealData={meals} />
    </AppLayout>
  );
};

export default NutritionPage;
