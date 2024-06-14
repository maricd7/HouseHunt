"use server"
import supabase from "../supabase";

export const fetchData = async (
) => {
  try {
    const { data, error } = await supabase.from("properties1").select("*");
    if (error) {
      throw error;
    }
    if(data){
      return {data}
    }
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
  }
};