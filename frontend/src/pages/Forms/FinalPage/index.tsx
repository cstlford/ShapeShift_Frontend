import { useNavigate } from "react-router-dom";
import "./index.css";
import logo from "../../../assets/logo.ico";
import { useUserInfoContext } from "../../../UserInfoContext";
import axios from "axios";
import Button from "../../../components/Button";
import FormLayout from "../../../layouts/FormLayout";
import { useState } from "react";

const FinalPage: React.FC = () => {
  const navigate = useNavigate();
  const { userInfoData } = useUserInfoContext();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(JSON.stringify(userInfoData));
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/submit-profile-data",
        userInfoData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error posting data: ", error);
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  return (
    <FormLayout>
      <form className="fp-form" onSubmit={handleSubmit}>
        <h1 className="fp-title">You're all set!</h1>
        <p className="fp-subtitle">
          Welcome to the <span className="highlight">Shape Shift</span>{" "}
          community!
        </p>
        <img src={logo} alt="Logo" />
        <p className="fp-text">
          Thanks for taking the time to tell us about yourself. We're creatng
          your personalized dashboard now. Get ready to transform your lifestyle
          and achieve your fitness goals!
        </p>

        <Button style="blue">Take Me to My Dashboard</Button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </FormLayout>
  );
};

export default FinalPage;
