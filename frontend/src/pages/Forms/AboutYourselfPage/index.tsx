import React from "react";
import FormLayout from "../../../layouts/FormLayout";
import { useNavigate } from "react-router-dom";
import InputForm from "../../../components/InputForm";
import { useFormContext } from "../../../FormContext";
import Button from "../../../components/Button";
import "./index.css";

const AboutYourselfPage: React.FC = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useFormContext();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/body-info");
  };

  return (
    <FormLayout>
      <form onSubmit={handleSubmit}>
        <h2>
          First, tell us a bit about <span className="highlight">yourself</span>
          ...
        </h2>
        <div className="forms">
          <InputForm
            label="What's your name?"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <InputForm
            label="What's your email?"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <InputForm
            label="Create a password"
            type="password"
            placeholder="Enter a strong password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <p>or</p>
        <Button style="white">Sign up with Google</Button>
        <Button style="orange">Next: Your Physical Stats</Button>
      </form>
    </FormLayout>
  );
};

export default AboutYourselfPage;
