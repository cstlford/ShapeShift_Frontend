import React, { useState } from "react";
import "./index.css";

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
  meal: Meal;
}

const MealItem: React.FC<Props> = ({ meal }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`meal-item ${isExpanded ? "expanded" : "collapsed"}`}
      onClick={toggleExpand}
    >
      <div className="meal-summary">
        <p>{meal.title}:</p>
        <p>
          <span id="cals">{meal.calories}</span> kcal
        </p>
      </div>

      {isExpanded && (
        <div className="meal-details">
          <p>
            <strong>Macros:</strong>
          </p>
          <ul>
            <li>Protein: {meal.macros.protein}g</li>
            <li>Carbs: {meal.macros.carbs}g</li>
            <li>Fat: {meal.macros.fat}g</li>
          </ul>
          <p>
            <strong>Ingredients:</strong>
          </p>
          <ul>
            {meal.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>
            <strong>Directions:</strong>
            <br></br>
            {meal.directions}
          </p>
        </div>
      )}
    </div>
  );
};

export default MealItem;
