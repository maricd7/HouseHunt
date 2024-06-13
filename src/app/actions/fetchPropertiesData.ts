import supabase from "../supabase";
import { Property } from "../types/Property";

export const fetchData = async (
  setProperties: (data: Property[]) => void,
  getSpecialOffer: (offers: Property[]) => void
) => {
  try {
    const { data, error } = await supabase.from("properties1").select("*");
    if (error) {
      throw error;
    }
    setProperties(data);
    getSpecialOffer(data);
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
  }
};