import React from "react";
import "./index.css";

interface Props {
  type: "text" | "email" | "password" | "date" | "number";
  placeholder?: string;
  label?: string;
  value: string | number;
  maxLength?: number;
  required?: boolean;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<Props> = ({
  type,
  placeholder,
  label,
  value,
  maxLength,
  required = true,
  onChange,
}) => {
  return (
    <div className="input-group">
      {label && <label>{label}</label>}
      <input
        className={`input input-${type}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        required={required}
      />
    </div>
  );
};

export default InputForm;
