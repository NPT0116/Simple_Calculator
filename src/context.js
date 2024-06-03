import { createContext, useState } from "react";

const InputCalculatorContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState('0');

  return (
    <InputCalculatorContext.Provider value={{ data, setData }}>
      {children}
    </InputCalculatorContext.Provider>
  );
};

export { InputCalculatorContext, DataProvider };
