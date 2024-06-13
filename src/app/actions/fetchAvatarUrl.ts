import supabase from "../supabase";

export const fetchAvatarUrl = async (userId: number, setAvatar: (url: string) => void, setOriginalAvatar: (avatarData: string) => void) => {
  const { data, error } = await supabase
    .from("users")
    .select("avatar")
    .eq("id", userId)
    .single();

  if (data) {
    const avatarUrl = `${data.avatar}?${new Date().getTime()}`;
    setAvatar(avatarUrl);
    setOriginalAvatar(avatarUrl);
  } else if (error) {
    console.error(error);
  }
};