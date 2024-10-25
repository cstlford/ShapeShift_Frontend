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
  goals: UserGoal | null;
  diet_type: string | null;
  calories: number | null;
  macronutrients: Macronutrients | null;
}
