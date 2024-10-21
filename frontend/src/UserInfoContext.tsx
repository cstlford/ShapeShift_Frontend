import React, { createContext, useContext, useState } from "react";

interface UserInfoData {
  body_info: {
    weight: string;
    weight_unit: string;
    height: string;
    height_unit: string;
    sex: string;
    birthday: string;
  };
  fitness_goals: {
    weight_management: string;
    cardio_goals: string;
    resistance_training_goals: string;
  };
  daily_routine: {
    particular_diet: string;
    activity_level: string;
  };
}

const UserInfoContext = createContext<any>(null);

export const UserInfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userInfoData, setUserInfoData] = useState<UserInfoData>({
    body_info: {
      weight: "",
      weight_unit: "lb",
      height: "",
      height_unit: "in",
      sex: "",
      birthday: "",
    },
    fitness_goals: {
      weight_management: "",
      cardio_goals: "",
      resistance_training_goals: "",
    },
    daily_routine: {
      particular_diet: "",
      activity_level: "",
    },
  });

  return (
    <UserInfoContext.Provider value={{ userInfoData, setUserInfoData }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfoContext = () => {
  return useContext(UserInfoContext);
};
