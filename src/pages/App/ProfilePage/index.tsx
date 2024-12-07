import { useGlobalState } from "../../../contexts/GlobalStateContext";
import AppLayout from "../../../layouts/AppLayout";
import "./index.css";

const ProfilePage = () => {
  const { state } = useGlobalState();
  const userInformation = {
    name: state.user?.name,
    height: state.user?.height,
    weight: state.user?.weight,
    sex: state.user?.sex,
    dietaryPreference: state.user?.diet_type,
    nutritionGoal: state.user?.goals?.weight_goal,
    dailyCaloricGoal: state.user?.calories,
    macroSplit: {
      protein: state.user?.macronutrients?.protein,
      fat: state.user?.macronutrients?.fat,
      carbohydrates: state.user?.macronutrients?.carbs,
    },
  };
  return (
    <AppLayout>
      <div className="profile-container">
        <div className="profile-user-info">
          <h2>Your Information</h2>
          <ul>
            <li>Name: {userInformation.name}</li>
            <li>Height: {userInformation.height} cm</li>
            <li>Weight: {userInformation.weight} kg</li>
            <li>Sex: {userInformation.sex}</li>
            <li>Dietary Preference: {userInformation.dietaryPreference}</li>
            <li>Weight Management Goal: {userInformation.nutritionGoal}</li>
          </ul>
          <h2>Calculated Nutritional Profile</h2>
          <ul>
            <li>Daily Caloric Goal: {userInformation.dailyCaloricGoal}</li>
            <li>Protein Goal: {userInformation.macroSplit.protein}g</li>
            <li>
              Carbohydrate Goal: {userInformation.macroSplit.carbohydrates}g
            </li>
            <li>Fat Goal: {userInformation.macroSplit.fat}g</li>
          </ul>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
