// src/components/AuthHandler.tsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../contexts/GlobalStateContext";
import Loading from "../LoadingPage";

const AuthHandler: React.FC = () => {
  const { setState } = useGlobalState();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/user/profile", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          const userProfile = await response.json();

          // Update global state with the user profile data
          setState((prevState) => ({
            ...prevState,
            isAuthenticated: true,
            user: userProfile,
          }));

          // Redirect based on whether the profile is complete
          if (userProfile.calories) {
            navigate("/dashboard");
          } else {
            navigate("/body-info");
          }
        } else {
          console.error("Failed to fetch user profile");
          // Handle unauthorized access or errors
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        navigate("/login");
      }
      finally {
        setIsLoading(false); // Ensure loading state is updated
      }
    };

    fetchUserProfile();
  }, [navigate, setState]);

  if (isLoading) {
    return <Loading />;
  }

  return null; // or a loading indicator
};

export default AuthHandler;
