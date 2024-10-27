import { useState } from "react";
import Button from "../../../components/Button";
import InputForm from "../../../components/InputForm";
import MealCarousel from "../../../components/MealCarousel";
import SelectForm from "../../../components/SelectForm";
import AppLayout from "../../../layouts/AppLayout";
import "./index.css";
import { useGlobalState } from "../../../contexts/GlobalStateContext";
import Loading from "../../../components/LoadingPage";

const NutritionPage = () => {
  const [planDuration, setPlanDuration] = useState("");
  const [foodsToAvoid, setFoodsToAvoid] = useState("");
  const [mealCount, setMealCount] = useState("");
  const [flavorPreferences, setFlavorPreferences] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [meals, setMeals] = useState([]);
  const { state } = useGlobalState();
  const [isLoading, setLoading] = useState(false)

  const nutritionInfo = {
    dietaryPreference: state.user?.diet_type,
    nutritionGoal: state.user?.goals?.weight_goal,
    dailyCaloricGoal: state.user?.calories,
    macroSplit: {
      protein: state.user?.macronutrients?.protein,
      fat: state.user?.macronutrients?.fat,
      carbohydrates: state.user?.macronutrients?.carbs,
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      planDuration,
      foodsToAvoid,
      mealCount,
      flavorPreferences,
    };
    setLoading(true); 
    try {
      const response = await fetch("http://127.0.0.1:5000/generate-meal-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Meal plan request sent to backend:", formData);
      const mealData = await response.json();
      console.log("Received meal data from backend:", mealData["ai"]);

      // Update the state with the received meal data
      setMeals(mealData["meals"]);
    } catch (error) {
      console.error("Error fetching meal plan:", error);
      setErrorMessage("Failed to generate meal plan. Please try again.");
    }
    finally {
      setLoading(false); // Reset loading to false after the API call completes
    }
  };

  const timeOptions = [
    { name: "One week", id: 7 },
    { name: "Two weeks", id: 14 },
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
            <strong>Nutrition Goal:</strong> {nutritionInfo.nutritionGoal}{" "}
            Weight
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
                maxLength={255}
                required={false}
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
                maxLength={255}
                required={false}
                onChange={handleFlavorPreferencesChange}
              />
            </div>
          </div>
          <Button style="blue">Create My Meal Plan</Button>
        </form>
      </div>
      <h2 id="schedule-heading">Your Meal Schedule</h2>
      {isLoading && <Loading />}

      {errorMessage && <p className="error">{errorMessage}</p>}
      <MealCarousel mealData={meals} />
    </AppLayout>
  );
};

export default NutritionPage;
