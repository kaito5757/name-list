import { supabase } from "./supabase";

const MAIN_IMAGE_BUCKET_NAME = "pictures";

export const getMainImageUrl = (filePath: string): string => {
  return getFileUrl(MAIN_IMAGE_BUCKET_NAME, filePath);
}

export const addMainImage = async (file: File): Promise<string> => {
  const folderPath = "main-images";
  return await uploadFile(MAIN_IMAGE_BUCKET_NAME, file, folderPath);
}

export const updateMainImage = async (newFile: File, filePath: string): Promise<string> => {
  return await replaceFile(MAIN_IMAGE_BUCKET_NAME, newFile, filePath);
}

export const deleteMainImage = async (filePath: string): Promise<void> => {
  return await deleteFile(MAIN_IMAGE_BUCKET_NAME, filePath);
}



const getFileUrl = (bucketName: string, filePath: string): string => {
  const dbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  return`${dbUrl}/storage/v1/object/public/${bucketName}/${filePath}`;
}

const uploadFile = async (bucketName: string, file: File, folderPath?: string): Promise<string> => {
  const date = new Date().getTime().toString(16);
  const pathName = folderPath ? `${folderPath}/${date}` : date;

  const res = await supabase.storage
    .from(bucketName)
    .upload(pathName, file, {
      cacheControl: "3600",
      upsert: false
    });
  
  if (res.error) throw res.error;
  return res.data.path;
}

const replaceFile = async (bucketName: string, newFile: File, filePath: string): Promise<string> => {
  const res = await supabase.storage
  .from(bucketName)
  .update(filePath, newFile, {
    cacheControl: "3600",
    upsert: false
  });

  if (res.error) throw res.error;
  return res.data.path;
}

const deleteFile = async (bucketName: string, filePath: string): Promise<void> => {
  const res = await supabase
    .storage
    .from(bucketName)
    .remove([filePath]);
  
  if (res.error) throw res.error;
}