import MealItem from "../../../MealItem";

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
  mealData: Meal[];
}

const MealContainer = ({ mealData }: Props) => {
  return (
    <>
      {mealData.map((meal, index) => (
        <div key={index} id="MealContainer">
          <MealItem meal={meal} />
        </div>
      ))}
    </>
  );
};

export default MealContainer;
