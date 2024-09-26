import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BodyInfoForm from './components/BodyInfoForm';
import FitnessGoalsForm from './components/FitnessGoalsForm';
//import UserPreferencesForm from './components/UserPreferencesForm';
import ChatWithCoach from './components/ChatWithCoach';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BodyInfoForm />} />
        <Route path="/fitness-goals" element={<FitnessGoalsForm />} />
        <Route path="/preferences" element={<ChatWithCoach/>} />
      </Routes>
    </Router>
  );
};

export default App;
