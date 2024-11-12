import React from "react";
import "./index.css";

interface Props {
  children: React.ReactNode;
  style: "blue" | "orange" | "white";
  onClick?: () => void;
  type?: "submit";
}
const Button: React.FC<Props> = ({ children, style, type, onClick }) => {
  return (
    <button className={`btn btn-${style}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
