import React from "react";
import "./index.css";

interface Option {
  id: number;
  name: string;
}
interface Props {
  label?: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const SelectForm: React.FC<Props> = ({ label, options, onChange, value }) => {
  return (
    <div className="select-group">
      {label && (
        <label className="select-label" htmlFor="select">
          {label}
        </label>
      )}
      <select className="select" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;
