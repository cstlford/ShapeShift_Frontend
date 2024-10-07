import React from "react";
import "./index.css";

interface Option {
  name: string;
  id: string;
}
interface Props {
  title: string;
  options: Option[];
  selectedOption: string;
  onChange: (value: string) => void;
}

const RadioCard: React.FC<Props> = ({
  title,
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      {options.map((option, index) => (
        <label key={option.id}>
          <input
            type="radio"
            name={title}
            value={option.id}
            checked={selectedOption === option.id}
            onChange={(e) => onChange(e.target.value)}
            required={index === 0 && !selectedOption}
          />
          {option.name}
        </label>
      ))}
    </div>
  );
};

export default RadioCard;
