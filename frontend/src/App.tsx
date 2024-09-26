import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BodyInfoForm from './components/IntroComponents/BodyInfoForm';
import FitnessGoalsForm from './components/IntroComponents/FitnessGoalsForm';
import UserPreferencesForm from './components/IntroComponents/UserPreferencesForm';
import WelcomePage from './components/IntroComponents/WelcomePage';
import DailyRoutineForm from './components/IntroComponents/DailyRoutineForm';
import AboutYourselfForm from './components/IntroComponents/AboutYourselfForm';
import FinalPage from './components/IntroComponents/FinalPage';
import DashboardComponent from './components/MainComponents/DashboardComponent';
import ChatWithCoach from './components/ChatWithCoach';  // Merged from the HEAD version
import { FormProvider } from './FormContext';

const App: React.FC = () => {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about-yourself" element={<AboutYourselfForm />} />
          <Route path="/body-info" element={<BodyInfoForm />} />
          <Route path="/fitness-goals" element={<FitnessGoalsForm />} />
          <Route path="/daily-routine" element={<DailyRoutineForm />} />
          <Route path="/final-page" element={<FinalPage />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route path="/preferences" element={<UserPreferencesForm />} />
          <Route path="/chat-with-coach" element={<ChatWithCoach />} />  {/* Merged route */}
        </Routes>
      </Router>
    </FormProvider>
  );
};

export default App;
