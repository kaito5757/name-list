export * from "./department";
export * from "./dialog";
export * from "./link";
export * from "./team";

export type TopComboBoxSelectOption = {
  id: number;
  label: string;
  labelKana: string;
  department: string;
  team: string;
};

export type userInfo = {
  id: number;
  profile: userProfile;
  item: userItem;
};

export type userProfile = {
  image: StaticImageData;
  fullName: string;
  fullNameKana: string;
  department: string;
  team: string;
};

export type userItem = {
  officialPosition: string;
  occupation: string;
  mailAddress: string;
  slackName: string;
};

export type itemInfo = {
  itemName: string;
  itemText: string;
  isButton: boolean;
};
