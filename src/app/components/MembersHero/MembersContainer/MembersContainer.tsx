"use client";
import supabase from "@/app/supabase";
import React, { useEffect, useState } from "react";
import MemberCard from "../MemberCard/MemberCard";
import { UserInterface } from "@/app/types/User";

const MembersContainer = () => {
  const [members, setMembers] = useState<UserInterface[]>();

  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, []);
  return (
    <div>
      {members ? (
        members.map((member, index) => (
          <MemberCard member={member} key={index} />
        ))
      ) : (
        <span>Loading</span>
      )}
    </div>
  );
};

export default MembersContainer;
