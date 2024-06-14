"use server"
import supabase from "../supabase";

export const uploadAvatar = async (
  userId: number,
  file: File,
  setError: (error: any) => void,
  setAvatar: (avatarData: string) => void,
  setOriginalAvatar: (avatarData: string) => void,
  setUploading: (isUploading: boolean) => void,
  setIsFileUploaded: (isFileUploaded: boolean) => void
) => {
  if (!file) return;

  try {
    setUploading(true);
    setIsFileUploaded(false);
    
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(`public/${userId}/avatar.jpg`, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (error) {
      setError(error.message);
      return;
    }

    const { data: avatarData } = await supabase.storage
      .from("avatars")
      .getPublicUrl(`public/${userId}/avatar.jpg`);

    if (avatarData) {
      setAvatar(`${avatarData.publicUrl}?t=${new Date().getTime()}`);
      setOriginalAvatar(`${avatarData.publicUrl}?t=${new Date().getTime()}`);
    }

  } catch (error:any) {
    setError(error.message);
  } finally {
    setUploading(false);
    setIsFileUploaded(false);
  }
};
