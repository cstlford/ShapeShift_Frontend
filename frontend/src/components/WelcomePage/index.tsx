import { useNavigate } from 'react-router-dom';
import "./index.css";
import "../../index.css";
import logo from "../../assets/logo.ico";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate('/about-yourself');
  };

  return (
    <div className="wp-container">
      <form className="wp-form" onSubmit={handleSubmit}>
        <div className="wp-header">
          <img src={logo} alt="Logo" />
          <div className="wp-title-container">
            <h1 className="wp-title">
              Welcome to <span className="highlight">Shape Shift</span>
            </h1>
            <p className="wp-subtitle">Your journey to a healthier you starts here.</p>
          </div>
        </div>
        <button type="submit" className="wp-submit-btn">
          Let's Begin!
        </button>

        <p className="wp-text">We're excited to help you achieve your fitness goals. Let's get started by setting up your profile. This will only take a few minutes, and will help us create a personalized plan just for you.</p>
      </form>
    </div>
  );
};

export default WelcomePage;
