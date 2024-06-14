"use server"
import supabase from "../supabase";

export const fetchMembers = async () => {
    try {
      const { data, error } = await supabase.from("users").select();
      console.log(data);
      if (data) {
        return{data}
      }
    } catch (error) {
      console.log("There was error fetching members.");
    }
  };