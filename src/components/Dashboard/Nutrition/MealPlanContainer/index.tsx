import MealContainer from "../MealContainer";
import "./index.css";

interface Ingredient {
  ingredient: string;
  amount: number;
  unit: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

interface Meal {
  title: string;
  calories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
  ingredients: Ingredient[];
  directions: string;
}

interface Props {
  mealData: Meal[][];
}

const MealPlanContainer = ({ mealData }: Props) => {
  return (
    <div className="MealPlanContainer">
      {mealData.map((meals, index) => (
        <div key={index}>
          <h2>Day {index + 1}:</h2>
          <MealContainer mealData={meals} />
        </div>
      ))}
    </div>
  );
};

export default MealPlanContainer;
