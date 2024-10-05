import React from "react";
import "./index.css";

type CustomSelectProps = {
  label?: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};

const SelectForm: React.FC<CustomSelectProps> = ({
  label,
  options,
  onChange,
  value,
}) => {
  return (
    <div className="select-group">
      {label && <label className="select-label">{label}</label>}
      <select className="select" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;
