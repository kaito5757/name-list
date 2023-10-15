import SampleImage from "../../public/Sample/150x150.png";

export const sampleUserInfo = {
  id: 1,
  profile: {
    image: SampleImage,
    fullName: "氏名",
    fullNameKana: "氏名（カナ）",
    department: "部署",
    team: "課（チーム）",
  },
  item: {
    officialPosition: "役職",
    occupation: "職種",
    mailAddress: "メールアドレス",
    slackName: "スラック名",
  },
};

export const SampleTopComboBoxSelectOption01 = {
  id: 1,
  label: "氏名01",
  labelKana: "氏名01（カナ）",
  department: "部署01",
  team: "チーム01",
};

export const SampleTopComboBoxSelectOption02 = {
  id: 2,
  label: "氏名02",
  labelKana: "氏名02（カナ）",
  department: "部署02",
  team: "チーム02",
};

export const SampleTopComboBoxSelectOptionAry = [
  SampleTopComboBoxSelectOption01,
  SampleTopComboBoxSelectOption02,
];

export const sampleItemInfo01 = {
  itemName: "項目名01（テキスト）",
  itemText: "項目値01",
  isButton: false,
};

export const sampleItemInfo02 = {
  itemName: "項目名02（ボタン）",
  itemText: "項目値02",
  isButton: true,
};

export const sampleItemInfoAry = [sampleItemInfo01, sampleItemInfo02];
