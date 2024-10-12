import { useNavigate } from "react-router-dom";
import "./index.css";
import logo from "../../../assets/logo.ico";
import { useFormContext } from "../../../FormContext";
import axios from "axios";
import Button from "../../../components/Button";
import FormLayout from "../../../layouts/FormLayout";

const FinalPage: React.FC = () => {
  const navigate = useNavigate();
  const { formData } = useFormContext();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(
      `Name: ${formData.name} \n${formData.bodyInfo.weightUnit}: ${formData.bodyInfo.weight}\n${formData.bodyInfo.heightUnit}: ${formData.bodyInfo.height}\nWeight management: ${formData.fitnessGoals.weightManagement}\nCardio: ${formData.fitnessGoals.cardioGoals}\nResistance: ${formData.fitnessGoals.resistanceTrainingGoals}\nDiet: ${formData.dailyRoutine.particularDiet}\nActivity:${formData.dailyRoutine.typicalDay}`
    );
    navigate("/dashboard");
    try {
      const response = await axios.post(
        "http://localhost:5000/api/formData",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error: ", error);
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
      </form>
    </FormLayout>
  );
};

export default FinalPage;
