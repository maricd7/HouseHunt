"use client";
import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { Property } from "../types/Property";
import { fetchData } from "../actions/fetchPropertiesData";

interface PropertiesContextProps {
  properties: Property[];
  specialOffer: Property[];
  setProperties: (arg: Property[]) => void;
}

const PropertiesContext = createContext<PropertiesContextProps>({
  properties: [],
  specialOffer: [],
  setProperties: () => [],
});

export const PropertiesContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [specialOffer, setSpecialOffer] = useState<Property[]>([]);

  useEffect(() => {
    fetchData(setProperties, getSpecialOffer);
  }, []);

  //special offers random shuffler
  const getSpecialOffer = (offers: Property[]) => {
    const shuffled = offers && offers.sort(() => 0.5 - Math.random());
    setSpecialOffer(shuffled.slice(0, 4));
  };

  const contextValue: PropertiesContextProps = {
    properties: properties,
    specialOffer: specialOffer,
    setProperties: setProperties,
  };

  return (
    <PropertiesContext.Provider value={contextValue}>
      {children}
    </PropertiesContext.Provider>
  );
};

export const usePropertiesContext = () => {
  const propertiesContext = useContext(PropertiesContext);

  if (!propertiesContext) {
    throw new Error(
      "No PropertiesContext.Provider found when calling usePropertiesContext."
    );
  }
  return propertiesContext;
};
