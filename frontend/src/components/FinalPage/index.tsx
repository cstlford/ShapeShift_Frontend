import { useNavigate } from "react-router-dom";
import "./index.css";
import "../../index.css";
import logo from "../../assets/logo.ico";
import { useFormContext } from "../../FormContext";

const FinalPage: React.FC = () => {
  const navigate = useNavigate();
  const { formData } = useFormContext();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle data
    console.log(formData);
    navigate("/");
  };

  return (
    <div className="fp-container">
      <form className="fp-form" onSubmit={handleSubmit}>
        <div className="fp-header">
          <div className="fp-title-container">
            <h1 className="fp-title">You're all set!</h1>
            <p className="fp-subtitle">
              Welcome to the <span className="highlight">Shape Shift</span>{" "}
              community!
            </p>
          </div>
          <img src={logo} alt="Logo" />
          <p className="fp-text">
            Thanks for taking the time to tell us about yourself. We're creatng
            your personalized dashboard now. Get ready to transform your
            lifestyle and achieve your fitness goals!
          </p>
        </div>
        <button type="submit" className="fp-submit-btn">
          Take Me to My Dashboard
        </button>
      </form>
    </div>
  );
};

export default FinalPage;
