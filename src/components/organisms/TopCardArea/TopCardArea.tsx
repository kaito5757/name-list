import TopReftCard from "@/components/molecules/Card/TopLeftCard";
import TopRightCard from "@/components/molecules/Card/TopRightCard";

import SampleImage from "../../../../public/Sample/150x150.png";

const TopCardArea = () => {
  return (
    <div className="flex items-center justify-center flex-wrap">
      <TopReftCard imageSrc={SampleImage} imageAlt="alt" fullName="Bonnie Green" subName="Visual Designer" />
      <TopRightCard />
    </div>
  );
};

export default TopCardArea;
