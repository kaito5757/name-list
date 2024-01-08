import { Dispatch, SetStateAction } from "react";

export const fileReader = (
  fileList: FileList,
  setImageData: Dispatch<SetStateAction<string | undefined>>,
): void => {
  if (!fileList || fileList.length <= 0) return;
  const file = fileList[0];
  const fileReader = new FileReader();
  fileReader.onload = () => {
    setImageData(fileReader.result as string);
  };
  fileReader.readAsDataURL(file);
};
