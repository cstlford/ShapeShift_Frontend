import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BodyInfoForm from './components/BodyInfoForm';
import FitnessGoalsForm from './components/FitnessGoalsForm';
import UserPreferencesForm from './components/UserPreferencesForm';
import WelcomePage from './components/WelcomePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/body-info" element={<BodyInfoForm />} />
        <Route path="/fitness-goals" element={<FitnessGoalsForm />} />
        <Route path="/preferences" element={<UserPreferencesForm />} />
      </Routes>
    </Router>
  );
};

export default App;
