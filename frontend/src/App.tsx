import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BodyInfoPage from "./pages/Forms/BodyInfoPage";
import FitnessGoalsPage from "./pages/Forms/FitnessGoalsPage";
import UserPreferencesForm from "./components/UserPreferencesForm";
import WelcomePage from "./pages/Forms/WelcomePage";
import DailyRoutinePage from "./pages/Forms/DailyRoutinePage";
import AboutYourselfPage from "./pages/Forms/AboutYourselfPage";
import FinalPage from "./pages/Forms/FinalPage";
import ChatWithCoach from "./components/ChatWithCoach";
import { AuthProvider } from "./AuthenticationContext";
import { UserInfoProvider } from "./UserInfoContext";
import GenerateMealPlan from "./components/GenerateMealPlan";
import ExcerciseGuideComponent from "./components/Dashboard/Exercise/ExerciseGuideComponent";
import ExcerciseLoggingComponent from "./components/Dashboard/Exercise/ExerciseLoggingComponent";
import ExcercisePlanComponent from "./components/Dashboard/Exercise/ExercisePlanComponent";
import NutritionLoggingComponent from "./components/Dashboard/Nutrition/NutritionLoggingComponent";
import NutritionRecipeComponent from "./components/Dashboard/Nutrition/NutritionRecipeComponent";
import ProgressLoggingComponent from "./components/Dashboard/Progress/ProgressLoggingComponent";
import NutritionPage from "./pages/App/NutritionPage";
import DashboardPage from "./pages/App/DashboardPage";
import LoginPage from "./pages/App/LoginPage";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <UserInfoProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/begin" element={<WelcomePage />} />
              <Route path="/about-yourself" element={<AboutYourselfPage />} />
              <Route path="/body-info" element={<BodyInfoPage />} />
              <Route path="/fitness-goals" element={<FitnessGoalsPage />} />
              <Route path="/daily-routine" element={<DailyRoutinePage />} />
              <Route path="/final-page" element={<FinalPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/preferences" element={<UserPreferencesForm />} />
              <Route path="/chat-with-coach" element={<ChatWithCoach />} />
              <Route
                path="/generate-meal-plan"
                element={<GenerateMealPlan />}
              />
              <Route
                path="/dashboard/exercise/guide"
                element={<ExcerciseGuideComponent />}
              />
              <Route
                path="/dashboard/exercise/logging"
                element={<ExcerciseLoggingComponent />}
              />
              <Route
                path="/dashboard/exercise/plan"
                element={<ExcercisePlanComponent />}
              />
              <Route
                path="/dashboard/nutrition/recipes"
                element={<NutritionRecipeComponent />}
              />
              <Route
                path="/dashboard/nutrition/logging"
                element={<NutritionLoggingComponent />}
              />
              <Route
                path="/dashboard/nutrition/plan"
                element={<NutritionPage />}
              />
              <Route
                path="/dashboard/progress/logging"
                element={<ProgressLoggingComponent />}
              />
            </Routes>
          </Router>
        </UserInfoProvider>
      </AuthProvider>
    </>
  );
};

export default App;
