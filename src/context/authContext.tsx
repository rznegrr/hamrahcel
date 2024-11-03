import { createContext, useContext, useState } from "react";

type AuthContextType = {
  formIsOpen: boolean;
  setFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType>({
  formIsOpen: false,
  setFormIsOpen: () => {},
});

const AuthProvider = ({ children }: any) => {
  const [formIsOpen, setFormIsOpen] = useState<boolean>(false);
  const value = {
    formIsOpen,
    setFormIsOpen,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export {AuthProvider, useAuth};
