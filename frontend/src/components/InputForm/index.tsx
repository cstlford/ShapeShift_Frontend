import React from "react";
import "./index.css";

interface Props {
  type: "text" | "email" | "password" | "date" | "number";
  placeholder?: string;
  label?: string;
  value: string | number;
  width?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<Props> = ({
  type,
  placeholder,
  label,
  value,
  width,
  onChange,
}) => {
  return (
    <div className="input-group">
      {label && <label>{label}</label>}

      <input
        className={`input input-${type}`}
        style={{ width: width }}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputForm;
