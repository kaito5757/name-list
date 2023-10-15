import ComboBox from "@/components/molecules/Combobox/Combobox";
import TopCardArea from "@/components/organisms/TopCardArea/TopCardArea";
import CommonLayout from "@/components/templates/CommonLayout/CommonLayout";

const Home = (): JSX.Element => {
  return (
    <CommonLayout>
      <ComboBox />
      <TopCardArea />
    </CommonLayout>
  );
};

export default Home;
