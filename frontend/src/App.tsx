import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BodyInfoPage from "./pages/Forms/BodyInfoPage";
import FitnessGoalsPage from "./pages/Forms/FitnessGoalsPage";
import UserPreferencesForm from "./components/UserPreferencesForm";
import WelcomePage from "./pages/Forms/WelcomePage";
import DailyRoutinePage from "./pages/Forms/DailyRoutinePage";
import FinalPage from "./pages/Forms/FinalPage";
import ChatWithCoach from "./components/ChatWithCoach";
import { UserInfoProvider } from "./contexts/UserInfoContext";
import ExcerciseLoggingComponent from "./components/Dashboard/Exercise/ExerciseLoggingComponent";
import NutritionLoggingComponent from "./components/Dashboard/Nutrition/NutritionLoggingComponent";
import ProgressLoggingComponent from "./components/Dashboard/Progress/ProgressLoggingComponent";
import NutritionPage from "./pages/App/NutritionPage";
import DashboardPage from "./pages/App/DashboardPage";
import LoginPage from "./pages/App/LoginPage";
import CreateAccount from "./pages/Forms/CreateAccount";
import { GlobalStateProvider } from "./contexts/GlobalStateContext";
import ProfilePage from "./pages/App/ProfilePage";
import RecipePage from "./pages/App/RecipePage";
import WeightHistory from "./components/Dashboard/Progress/WeightHIstory";
import ExerciseGenerationPage from "./pages/App/ExerciseGenPage";
import SavedExercisePlansPage from "./pages/App/SavedExercisePlansPage";

const App: React.FC = () => {
  return (
    <>
      <GlobalStateProvider>
        <UserInfoProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/begin" element={<WelcomePage />} />
              <Route path="/about-yourself" element={<CreateAccount />} />
              <Route path="/body-info" element={<BodyInfoPage />} />
              <Route path="/fitness-goals" element={<FitnessGoalsPage />} />
              <Route path="/daily-routine" element={<DailyRoutinePage />} />
              <Route path="/final-page" element={<FinalPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/preferences" element={<UserPreferencesForm />} />
              <Route path="/chat-with-coach" element={<ChatWithCoach />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/exercise/saved"
                element={<SavedExercisePlansPage />}
              />
              <Route
                path="/exercise/logging"
                element={<ExcerciseLoggingComponent />}
              />
              <Route
                path="/exercise/plan"
                element={<ExerciseGenerationPage />}
              />
              <Route path="/nutrition/saved" element={<RecipePage />} />
              <Route
                path="nutrition/logging"
                element={<NutritionLoggingComponent />}
              />
              <Route path="/nutrition/plan" element={<NutritionPage />} />
              <Route
                path="/progress/logging"
                element={<ProgressLoggingComponent />}
              />
              <Route path="/profile" element={<ProfilePage />} />

              <Route path="/weight-history" element={<WeightHistory />} />
            </Routes>
          </Router>
        </UserInfoProvider>
      </GlobalStateProvider>
    </>
  );
};

export default App;
