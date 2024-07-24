import { createContext, useState } from "react";

const initialState = {
  name: "",
  age: "",
};

export const InformationContext = createContext();

export const InformationProvider = ({ children }) => {
  const [info, setInfo] = useState(initialState);

  return (
    <InformationContext.Provider value={{ info, setInfo }}>
      {children}
    </InformationContext.Provider>
  );
};
