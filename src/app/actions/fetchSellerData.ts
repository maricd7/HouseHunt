"use server"
import supabase from "../supabase";


export const fetchSellerData = async (sellerId: number) => {
    const { data, error } = await supabase
      .from("users")
      .select("name,username,avatar")
      .eq("id", sellerId)
      .single();
  
    if (error) {
      console.log('error fetching seller data', error);
      return null;
    }
    
    return data;
  };