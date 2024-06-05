import supabase from "@/app/supabase";
import { UserInterface } from "@/app/types/User";
import Image from "next/image";
import React from "react";

interface MemberCardProps {
  member: UserInterface;
}

const MemberCard = ({ member }: MemberCardProps) => {
  console.log(member);
  return (
    <div>
      <Image alt="profile" height={128} width={128} src={member.avatar} />
    </div>
  );
};

export default MemberCard;
