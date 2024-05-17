"use client";
import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import supabase from "../supabase";

interface Property {
  id: number;
  name: string;
  price: number;
  description: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  address: string;
}

interface PropertiesContextProps {
  properties: Property[];
}

const PropertiesContext = createContext<PropertiesContextProps>({
  properties: [],
});

export const PropertiesContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("properties1").select("*");
        if (error) {
          throw error;
        }
        setProperties(data);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  const contextValue: PropertiesContextProps = {
    properties: properties,
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
