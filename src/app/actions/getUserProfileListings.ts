import { Property } from "@/app/types/Property";
import supabase from "../supabase";



export const getUserProfileListings= async (currentUserId: number): Promise<Property[] | null> => {
  const { data, error } = await supabase
    .from("properties1")
    .select()
    .eq("seller_id", currentUserId);
  if (error) {
    console.error(error);
    return null;
  }
  return data;
};