export interface UserGoal {
  weight_goal: string | null;
  cardio_goal: string | null;
  resistance_goal: string | null;
}

export interface Macronutrients {
  protein: number | null;
  fat: number | null;
  carbs: number | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
  height: number;
  weight: number;
  sex: string;
  birthday: string;
  activity_level: string;
  diet: string;
  goals: UserGoal | null;
  diet_type: string | null;
  calories: number | null;
  macronutrients: Macronutrients | null;
}
