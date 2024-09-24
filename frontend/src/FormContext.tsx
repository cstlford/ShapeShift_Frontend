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
        enduranceAndCardio: any[];
        flexibilityAndMobility: any[];
        overallHealth: any[];
        weightManagement: any[];
        strengthAndMuscle: any[];
        other: string;
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
        enduranceAndCardio: [],
        flexibilityAndMobility: [],
        overallHealth: [],
        weightManagement: [],
        strengthAndMuscle: [],
        other: "",
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
