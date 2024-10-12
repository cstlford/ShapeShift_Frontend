import "./index.css";
import carrot from "../../assets/carrot.png";
import MealItem from "../MealItem";

interface Meal {
  title: string;
  calories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
  ingredients: string[];
  directions: string;
}
interface Props {
  meals: Meal[];
  date: Date;
}

const MealCard: React.FC<Props> = ({ meals, date }) => {
  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const formatDate = (date: Date) => {
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  const getDayName = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };
  return (
    <div className="meal-card">
      <div className="card-header">
        <p>{formatDate(date)}</p>
        <h3>{getDayName(date)}</h3>
        <img id="carrot" src={carrot} alt="Carrot icon" />
      </div>

      <div className="card-body">
        {meals.map((meal, index) => (
          <div key={index} className="meal-section">
            <strong>{`Meal ${index + 1}:`}</strong>
            <MealItem meal={meal} />
          </div>
        ))}
      </div>

      <div className="calories">
        <p>{totalCalories} kcal</p>
      </div>
    </div>
  );
};

export default MealCard;
