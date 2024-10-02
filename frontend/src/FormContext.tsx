import React, { createContext, useContext, useState } from "react";

interface FormData {
  bodyInfo: {
    weight: string;
    weightUnit: string;
    height: string;
    heightUnit: string;
    sex: string;
    birthday: string;
  };
  fitnessGoals: {
    weightManagement: string;
    cardioGoals: string;
    resistanceTrainingGoals: string;
  };
  dailyRoutine: {
    particularDiet: string;
    typicalDay: string;
  };
}

const FormContext = createContext<any>(null);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({
    bodyInfo: {
      weight: "",
      weightUnit: "lb",
      height: "",
      heightUnit: "in",
      sex: "Male",
      birthday: "",
    },
    fitnessGoals: {
      weightManagement: "",
      cardioGoals: "",
      resistanceTrainingGoals: "",
    },
    dailyRoutine: {
      particularDiet: "",
      typicalDay: "",
    },
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
