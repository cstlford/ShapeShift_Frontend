import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BodyInfoPage from "./pages/BodyInfoPage";
import FitnessGoalsPage from "./pages/FitnessGoalsPage";
import UserPreferencesForm from "./components/UserPreferencesForm";
import WelcomePage from "./pages/WelcomePage";
import DailyRoutinePage from "./pages/DailyRoutinePage";
import AboutYourselfPage from "./pages/AboutYourselfPage";
import FinalPage from "./pages/FinalPage";
import DashboardComponent from "./components/Dashboard/DashboardComponent";
import ChatWithCoach from "./components/ChatWithCoach";
import { FormProvider } from "./FormContext";
import GenerateMealPlan from "./components/GenerateMealPlan";
const App: React.FC = () => {
  return (
    <>
      <FormProvider>
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/about-yourself" element={<AboutYourselfPage />} />
            <Route path="/body-info" element={<BodyInfoPage />} />
            <Route path="/fitness-goals" element={<FitnessGoalsPage />} />
            <Route path="/daily-routine" element={<DailyRoutinePage />} />
            <Route path="/final-page" element={<FinalPage />} />
            <Route path="/dashboard" element={<DashboardComponent />} />
            <Route path="/preferences" element={<UserPreferencesForm />} />
            <Route path="/chat-with-coach" element={<ChatWithCoach />} />
            <Route path="/generate-meal-plan" element={<GenerateMealPlan />} />
          </Routes>
        </Router>
      </FormProvider>
    </>
  );
};

export default App;
