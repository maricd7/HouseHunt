
import supabase from "../supabase";
import { UserInterface } from "../types/User";

export const fetchMembers = async (setMembers:(members:UserInterface[])=>void) => {
    try {
      const { data, error } = await supabase.from("users").select();
      console.log(data);
      if (data) {
        setMembers(data);
      }
    } catch (error) {
      console.log("There was error fetching members.");
    }
  };