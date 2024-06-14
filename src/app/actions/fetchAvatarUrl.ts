"use server"
import supabase from "../supabase";

export const fetchAvatarUrl = async (userId: number) => {
  const { data, error } = await supabase
    .from("users")
    .select("avatar")
    .eq("id", userId)
    .single();

    if (data) {
      return {data}; 
    
  } else if (error) {
    console.error(error);
  }
};