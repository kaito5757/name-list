import GlobalLayout from "@/components/Common/GlobalLayout";
import TopCard from "@/components/Top/TopCard";
import TopComboBox from "@/components/Top/TopComboBox";
import type { TopComboBoxSelectOption, userInfo } from "@types";
import { useState } from "react";
import SampleImage from "../../public/Sample/150x150.png";

const topComboBoxSelectOptions: TopComboBoxSelectOption[] = [
  {
    id: 1,
    label: "田中",
    labelKana: "タナカ",
    department: "SS本部",
    team: "インプリメント",
  },
  {
    id: 2,
    label: "山田",
    labelKana: "ヤマダ",
    department: "DS本部",
    team: "デザイン",
  },
  {
    id: 3,
    label: "鈴木",
    labelKana: "スズキ",
    department: "SS本部",
    team: "AI",
  },
  {
    id: 4,
    label: "伊藤",
    labelKana: "イトウ",
    department: "DS本部",
    team: "デザイン",
  },
  {
    id: 5,
    label: "渡辺",
    labelKana: "ワタナベ",
    department: "管理部",
    team: "管理",
  },
  {
    id: 6,
    label: "加藤",
    labelKana: "カトウ",
    department: "SS本部",
    team: "データサイエンス",
  },
  {
    id: 7,
    label: "中村",
    labelKana: "ナカムラ",
    department: "DS本部",
    team: "赤組",
  },
  {
    id: 8,
    label: "山口",
    labelKana: "ヤマグチ",
    department: "SS本部",
    team: "青組",
  },
  {
    id: 9,
    label: "小林",
    labelKana: "コバヤシ",
    department: "管理部",
    team: "事務",
  },
  {
    id: 10,
    label: "松本",
    labelKana: "マツモト",
    department: "SS本部",
    team: "プラットフォーム",
  },
];

const userInfoList: userInfo[] = [
  {
    id: 1,
    profile: {
      image: SampleImage,
      fullName: "田中 一郎",
      fullNameKana: "タナカ イチロウ",
      department: "SS本部 DX推進部",
      team: "インプリメント",
    },
    item: {
      officialPosition: "メンバー",
      occupation: "エンジニア",
      mailAddress: "tanaka@test.ne.jp",
      slackName: "tanaka0725",
    },
  },
  {
    id: 2,
    profile: {
      image: SampleImage,
      fullName: "山田 二郎",
      fullNameKana: "ヤマダ ジロウ",
      department: "DS本部",
      team: "デザイン",
    },
    item: {
      officialPosition: "メンバー",
      occupation: "エンジニア",
      mailAddress: "yamada@test.ne.jp",
      slackName: "yamada0725",
    },
  },
  {
    id: 3,
    profile: {
      image: SampleImage,
      fullName: "鈴木 三郎",
      fullNameKana: "スズキ サブロウ",
      department: "SS本部 DX推進部",
      team: "AI",
    },
    item: {
      officialPosition: "メンバー",
      occupation: "エンジニア",
      mailAddress: "suzuki@test.ne.jp",
      slackName: "suzuki0725",
    },
  },
  {
    id: 4,
    profile: {
      image: SampleImage,
      fullName: "伊藤 四郎",
      fullNameKana: "イトウ シロウ",
      department: "DS本部",
      team: "デザイン",
    },
    item: {
      officialPosition: "メンバー",
      occupation: "デザイナー",
      mailAddress: "ito@test.ne.jp",
      slackName: "ito0725",
    },
  },
  {
    id: 5,
    profile: {
      image: SampleImage,
      fullName: "渡辺 五郎",
      fullNameKana: "ワタナベ ゴロウ",
      department: "管理部",
      team: "管理",
    },
    item: {
      officialPosition: "メンバー",
      occupation: "管理者",
      mailAddress: "watanabe@test.ne.jp",
      slackName: "watanabe0725",
    },
  },
  {
    id: 6,
    profile: {
      image: SampleImage,
      fullName: "加藤 六郎",
      fullNameKana: "カトウ ロクロウ",
      department: "SS本部 DX推進部",
      team: "データサイエンス",
    },
    item: {
      officialPosition: "メンバー",
      occupation: "データサイエンティスト",
      mailAddress: "kato@test.ne.jp",
      slackName: "kato0725",
    },
  },
  {
    id: 7,
    profile: {
      image: SampleImage,
      fullName: "中村 七郎",
      fullNameKana: "ナカムラ シチロウ",
      department: "DS本部",
      team: "データサイエンス",
    },
    item: {
      officialPosition: "メンバー",
      occupation: "エンジニア",
      mailAddress: "nakamura@test.ne.jp",
      slackName: "nakamura0725",
    },
  },
  {
    id: 8,
    profile: {
      image: SampleImage,
      fullName: "山口 八郎",
      fullNameKana: "ヤマグチ ハチロウ",
      department: "SS本部 マネージド部",
      team: "プラットフォーム",
    },
    item: {
      officialPosition: "メンバー",
      occupation: "エンジニア",
      mailAddress: "yamaguchi@test.ne.jp",
      slackName: "yamaguchi0725",
    },
  },
  {
    id: 9,
    profile: {
      image: SampleImage,
      fullName: "小林 九郎",
      fullNameKana: "コバヤシ キュウロウ",
      department: "管理部",
      team: "事務",
    },
    item: {
      officialPosition: "メンバー",
      occupation: "事務員",
      mailAddress: "kobayashi@test.ne.jp",
      slackName: "kobayashi0725",
    },
  },
  {
    id: 10,
    profile: {
      image: SampleImage,
      fullName: "松本 十郎",
      fullNameKana: "マツモト ジュウロウ",
      department: "SS本部",
      team: "プラットフォーム",
    },
    item: {
      officialPosition: "メンバー",
      occupation: "エンジニア",
      mailAddress: "matsumoto@test.ne.jp",
      slackName: "matsumoto0725",
    },
  },
];

const Home = () => {
  const [id, setId] = useState(0);
  const handleChange = (id: number) => {
    setId(id);
  };

  return (
    <GlobalLayout>
      <TopComboBox
        selectOptions={topComboBoxSelectOptions}
        placeholderText="名前（漢字, カナ）、部署名、チーム名をで検索可能"
        noOptionsText="存在しません"
        handleChange={handleChange}
      />
      <TopCard userInfo={userInfoList.find((info) => info.id == id)} />
    </GlobalLayout>
  );
};

export default Home;
