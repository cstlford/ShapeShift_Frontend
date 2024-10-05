import { useNavigate } from "react-router-dom";
import FormLayout from "../../layouts/FormLayout";
import Button from "../../components/Button";
import "./index.css";
const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/about-yourself");
  };
  return (
    <>
      <FormLayout>
        <form className="wp-form" onSubmit={handleSubmit}>
          <h1 className="wp-title">
            Welcome to <span className="highlight">Shape Shift</span>
          </h1>
          <p className="wp-subtitle">
            Your journey to a healthier you starts here.
          </p>
          <Button style="blue">Let's Begin!</Button>

          <p className="wp-text">
            Let's get started by setting up your profile. This will only take a
            few minutes, and will help us create a personalized plan just for
            you.
          </p>
        </form>
      </FormLayout>
    </>
  );
};

export default WelcomePage;
