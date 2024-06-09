import { UserInterface } from "@/app/types/User";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MemberCardProps {
  member: UserInterface;
}

const MemberCard = ({ member }: MemberCardProps) => {
  const defaultAvatar = "/default-avatar.png";

  return (
    <Link
      href={`/profile/${member.username}`}
      className="flex gap-8 bg-white shadow-sm p-4 cursor-pointer rounded-lg hover:shadow-lg border border-gray-200 items-center"
    >
      <Image
        alt="profile"
        height={128}
        width={128}
        src={member.avatar || defaultAvatar}
        className="rounded-full w-full h-fit"
      />
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-2xl">{member.name}</h2>
        <p className="text-gray-400 text-lg">{member.email}</p>
        <p className="text-gray-400 text-md">
          {member.biography ? member.biography.substring(0, 25) + "..." : ""}
        </p>
        <span className="text-md text-gray-950 px-4 py-2 bg-blue-200 w-fit rounded-lg">
          {member.role}
        </span>
      </div>
    </Link>
  );
};

export default MemberCard;
