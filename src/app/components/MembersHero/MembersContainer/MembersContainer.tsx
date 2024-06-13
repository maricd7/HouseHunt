"use client";
import supabase from "@/app/supabase";
import React, { useEffect, useState } from "react";
import MemberCard from "../MemberCard/MemberCard";
import { UserInterface } from "@/app/types/User";
import { fetchMembers } from "@/app/actions/fetchMembers";

const MembersContainer = () => {
  const [members, setMembers] = useState<UserInterface[]>();

  useEffect(() => {
    fetchMembers(setMembers);
  }, []);

  return (
    <div className="flex flex-wrap gap-16">
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
