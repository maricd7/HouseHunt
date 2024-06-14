"use client";
import React, { useEffect, useState } from "react";
import MemberCard from "../MemberCard/MemberCard";
import { UserInterface } from "@/app/types/User";
import { fetchMembers } from "@/app/actions/fetchMembers";

const MembersContainer = () => {
  const [members, setMembers] = useState<UserInterface[]>();

  useEffect(() => {
    const getMembers = async () => {
      const data = await fetchMembers();
      if (data) {
        setMembers(data.data);
      }
    };
    getMembers();
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
