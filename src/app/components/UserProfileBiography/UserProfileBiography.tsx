import React, { useState } from "react";

import supabase from "@/app/supabase";

interface UserProfileBiographyProps {
  biography: string;
}

const UserProfileBiography = ({ biography }: UserProfileBiographyProps) => {
  const [editBiography, setEditBiography] = useState<boolean>(false);

  return (
    <div>
      {editBiography ? (
        <textarea value={biography}></textarea>
      ) : (
        <p className="w-1/2 text-gray-500">{biography}</p>
      )}
    </div>
  );
};

export default UserProfileBiography;
