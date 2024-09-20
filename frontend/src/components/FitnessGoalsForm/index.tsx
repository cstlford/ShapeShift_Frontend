import React, { useState } from "react";
import "./index.css";
import "../../index.css";
import { Multiselect } from "multiselect-react-dropdown";

const FitnessGoalsForm: React.FC = () => {
  const [other, setOther] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({
    enduranceAndCardio: [],
    flexibilityAndMobility: [],
    overallHealth: [],
    weightManagement: [],
    strengthAndMuscle: [],
  });

  const handleMultiSelectChange = (category: string, selectedList: any) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: selectedList,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(selectedOptions); // You can handle the form submission here
  };

  const options = {
    enduranceAndCardio: [
      { name: "Improve endurance", id: 1 },
      { name: "Enhance stamina for sports or activities", id: 2 },
      { name: "Train for a specific event", id: 3 },
    ],
    flexibilityAndMobility: [
      { name: "Increase flexibility", id: 1 },
      { name: "Improve joint mobility", id: 2 },
      { name: "Enhance balance and coordination", id: 3 },
    ],
    overallHealth: [
      { name: "Improve overall health and wellness", id: 1 },
      { name: "Boost enery levels", id: 2 },
      { name: "Reduce stress", id: 3 },
      { name: "Improve sleep quality", id: 4 },
    ],
    weightManagement: [
      { name: "Gain weight", id: 1 },
      { name: "Lose weight", id: 2 },
      { name: "Maintain weight", id: 3 },
    ],
    strengthAndMuscle: [
      { name: "Build muscle mass", id: 1 },
      { name: "Increase strength", id: 2 },
      { name: "Tone and define", id: 3 },
    ],
  };

  return (
    <form className="body-info-form" onSubmit={handleSubmit}>
      <h2>What do <span className="highlight">you</span> want to achieve?</h2>

      <div className="form-group">
        <label>Endurance & Cardio</label>
        <Multiselect
          options={options.enduranceAndCardio}
          displayValue="name"
          onSelect={(selectedList) => handleMultiSelectChange('enduranceAndCardio', selectedList)}
          onRemove={(selectedList) => handleMultiSelectChange('enduranceAndCardio', selectedList)}
          className="custom-multiselect"
        />
      </div>

      <div className="form-group">
        <label>Flexibility & Mobility</label>
        <Multiselect
          options={options.flexibilityAndMobility}
          displayValue="name"
          onSelect={(selectedList) => handleMultiSelectChange('flexibilityAndMobility', selectedList)}
          onRemove={(selectedList) => handleMultiSelectChange('flexibilityAndMobility', selectedList)}
          className="custom-multiselect"
        />
      </div>

      <div className="form-group">
        <label>Overall Health</label>
        <Multiselect
          options={options.overallHealth}
          displayValue="name"
          onSelect={(selectedList) => handleMultiSelectChange('overallHealth', selectedList)}
          onRemove={(selectedList) => handleMultiSelectChange('overallHealth', selectedList)}
          className="custom-multiselect"
        />
      </div>

      <div className="form-group">
        <label>Weight Management</label>
        <Multiselect
          options={options.weightManagement}
          displayValue="name"
          onSelect={(selectedList) => handleMultiSelectChange('weightManagement', selectedList)}
          onRemove={(selectedList) => handleMultiSelectChange('weightManagement', selectedList)}
          className="custom-multiselect"
        />
      </div>

      <div className="form-group">
        <label>Strength & Muscle</label>
        <Multiselect
          options={options.strengthAndMuscle}
          displayValue="name"
          onSelect={(selectedList) => handleMultiSelectChange('strengthAndMuscle', selectedList)}
          onRemove={(selectedList) => handleMultiSelectChange('strengthAndMuscle', selectedList)}
          className="custom-multiselect"
        />
      </div>

      <div className="form-group">
        <label>Other, please specify</label>
        <input
          type="string"
          placeholder="E.g., Prepare for a hiking trip, rehab an injury, etc."
          value={other}
          onChange={(e) => setOther(e.target.value)}
        />
      </div>

      <button type="submit" className="submit-button">
        Next: Your Preferences
      </button>
    </form>
  );
};

export default FitnessGoalsForm;
