"use server"
import supabase from "../supabase";

export  const setListingAsSold = async (propId: number) => {
    const { error } = await supabase
      .from("properties1")
      .update({ status: false })
      .eq("id", propId);
  };