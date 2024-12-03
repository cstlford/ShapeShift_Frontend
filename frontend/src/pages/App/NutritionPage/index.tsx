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
  const [isLoading, setLoading] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      planDuration,
      foodsToAvoid,
      mealCount,
      flavorPreferences,
    };

    setLoading(true);
    setErrorMessage("");

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
      console.log("Received meal data from backend:", mealData["meals"]);

      // Update the state with the received meal data
      setMeals(mealData["ai"]);
    } catch (error) {
      console.error("Error fetching meal plan:", error);
      setErrorMessage("Failed to generate meal plan. Please try again.");
    } finally {
      setLoading(false); // update loading state
    }
  };

  const handleSavePlan = async () => {
    console.log("clicked");
    try {
      const response = await fetch("http://127.0.0.1:5000/save-meal-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ meals }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Meal plan saved:", result);
      setSaveMessage("Plan saved successfully.");
    } catch (error) {
      console.error("Error saving meal plan:", error);
      setSaveMessage("Could not save plan.");
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
      <div className="nutrition-container">
        <h1>Create Your Personal Nutritional Plan</h1>
        {/* <div className="nutrition-info">
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
        </div> */}
        <div className="nutrition-forms">
          <form onSubmit={handleSubmit}>
            <div className="form-columns">
              <div className="form-column">
                <SelectForm
                  value={planDuration}
                  label="Select Your Plan Duration"
                  options={timeOptions}
                  onChange={(e) => setPlanDuration(e.target.value)}
                />
                <InputForm
                  placeholder="E.g., Shellfish, Gluten"
                  label="Any foods to avoid?"
                  value={foodsToAvoid}
                  type="text"
                  maxLength={255}
                  required={false}
                  onChange={(e) => setFoodsToAvoid(e.target.value)}
                />
              </div>
              <div className="form-column">
                <SelectForm
                  value={mealCount}
                  label="How many meals do you eat per day?"
                  options={numberOptions}
                  onChange={(e) => setMealCount(e.target.value)}
                />
                <InputForm
                  placeholder="E.g., Mediterranean, Italian..."
                  label="What flavors excite your palate?"
                  value={flavorPreferences}
                  type="text"
                  maxLength={255}
                  required={false}
                  onChange={(e) => setFlavorPreferences(e.target.value)}
                />
              </div>
            </div>
            <Button style="blue">Create My Meal Plan</Button>
          </form>
        </div>

        {isLoading && <Loading />}
        {errorMessage && <p className="error">{errorMessage}</p>}
        {meals.length > 0 && (
          <div className="meal-carousel">
            <h2 id="schedule-heading">Your Meal Schedule</h2>
            <MealCarousel mealData={meals} />
            {saveMessage && <p className="error">{saveMessage}</p>}
            <Button style="orange" onClick={handleSavePlan}>
              Save Plan
            </Button>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default NutritionPage;
