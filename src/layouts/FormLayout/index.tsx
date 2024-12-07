import React from "react";
import logo from "../../assets/logo.ico";
import "./index.css";

interface Props {
  children: React.ReactNode;
}
const FormLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <img id="logo" src={logo} alt="Logo" />

      <div className="container">{children}</div>
    </>
  );
};

export default FormLayout;
