import MealCard from "../../../components/MealCard";
import MealCarousel from "../../../components/MealCarousel";
import AppLayout from "../../../layouts/AppLayout";

const NutritionPage = () => {
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
  return (
    <AppLayout>
      <MealCarousel mealData={meals} />
    </AppLayout>
  );
};

export default NutritionPage;
