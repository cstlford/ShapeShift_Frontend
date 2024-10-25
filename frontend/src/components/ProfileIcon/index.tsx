import React, { useState, useRef, useEffect } from "react";
import { useGlobalState } from "../../contexts/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import "./index.css";

const ProfileIcon: React.FC = () => {
  const { state, setState } = useGlobalState();
  const userName = state.user ? state.user.name : "";
  const firstLetter = userName.charAt(0).toUpperCase();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    navigate("/profile");
    setIsOpen(false);
  };

  const handleLogoutClick = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        // Clear user data from global state
        setState((prevState) => ({
          ...prevState,
          isAuthenticated: false,
          user: null,
        }));
        navigate("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
    setIsOpen(false);
  };

  return (
    <div className="profile-icon-container" ref={dropdownRef}>
      <div className="avatar" onClick={toggleDropdown}>
        {firstLetter}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <button onClick={handleProfileClick}>Profile Page</button>
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
