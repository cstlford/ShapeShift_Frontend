import React, { useState } from "react";
import FormLayout from "../../../layouts/FormLayout";
import { useNavigate } from "react-router-dom";
import InputForm from "../../../components/InputForm";
import { useAuthContext } from "../../../AuthenticationContext";
import Button from "../../../components/Button";
import "./index.css";
import axios from "axios";

const AboutYourselfPage: React.FC = () => {
  const navigate = useNavigate();
  const { authData, setAuthData } = useAuthContext();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/auth/register",
        authData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("Data posted successfully:", response.data);
      navigate("/body-info");
    } catch (error) {
      console.error("Error posting data: ", error);
      setErrorMessage("Registration failed. Please try again.");
    }
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
            value={authData.name}
            onChange={(e) => setAuthData({ ...authData, name: e.target.value })}
          />

          <InputForm
            label="What's your email?"
            type="email"
            placeholder="Enter your email"
            value={authData.email}
            onChange={(e) =>
              setAuthData({ ...authData, email: e.target.value })
            }
          />

          <InputForm
            label="Create a password"
            type="password"
            placeholder="Enter a strong password"
            value={authData.password}
            onChange={(e) =>
              setAuthData({ ...authData, password: e.target.value })
            }
          />
        </div>
        <Button style="orange">Next: Your Physical Stats</Button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </FormLayout>
  );
};

export default AboutYourselfPage;
