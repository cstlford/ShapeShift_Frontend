import AppLayout from "../../../layouts/AppLayout";
import MealCard from "../../../components/MealCard";
import { useState, useEffect } from "react";
import "./index.css";

interface MealPlan {
  id: number;
  meals: any[];
}
interface Meal {
  title: string;
  calories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
  ingredients: string[];
  directions: string[];
}
const RecipePage = () => {
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getIncrementedDate = (startDate: Date, daysToAdd: number) => {
    const newDate = new Date(startDate);
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate;
  };
  const today = new Date();
  useEffect(() => {
    const fetchMealPlans = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/get-meal-plans", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched meal plans:", data.meal_plans);
        setMealPlans(data.meal_plans);
      } catch (error) {
        console.error("Error fetching meal plans:", error);
        setErrorMessage("Failed to fetch meal plans. Please try again.");
      }
    };

    fetchMealPlans();
  }, []);

  return (
    <AppLayout>
      <div className="recipe-page">
        <h1>Your Meal Plans</h1>
        {mealPlans.length > 0 ? (
          <div className="meal-plan-container">
            {mealPlans.map((plan, index) => (
              <div className="meal-plan" key={plan.id}>
                <h3>Meal Plan: {index + 1}</h3>
                <div className="meal-cards">
                  {plan.meals.map((dayMeals, dayIndex) => (
                    <MealCard
                      key={dayIndex}
                      meals={dayMeals}
                      date={getIncrementedDate(today, dayIndex)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h3>**You have no saved plans yet**</h3>
        )}
      </div>
    </AppLayout>
  );
};

export default RecipePage;
