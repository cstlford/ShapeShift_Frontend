import React, { createContext, useContext, useState } from "react";

interface AuthData {
  name: string;
  email: string;
  password: string;
}

const AuthContext = createContext<any>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authData, setAuthData] = useState<AuthData>({
    name: "",
    email: "",
    password: "",
  });

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
