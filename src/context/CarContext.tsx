// src/context/CarContext.tsx
import React, { createContext, useContext, useState } from 'react';

const CarContext = createContext<{
  selectedCarName: string;
  setSelectedCarName: (name: string) => void;
}>({
  selectedCarName: '',
  setSelectedCarName: () => {},
});

export const CarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCarName, setSelectedCarName] = useState('');

  return (
    <CarContext.Provider value={{ selectedCarName, setSelectedCarName }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCar = () => useContext(CarContext);
