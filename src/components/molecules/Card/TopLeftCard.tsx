import { TailwindCssProp } from "../../../../types";
import { convertCssPropToClasses } from "../../../../utils/styles";
import Card from "./Card";
import Image, { StaticImageData } from "next/image";
import SampleImage from "../../../../public/Sample/150x150.png";

const imageCssProp: TailwindCssProp = {
  width: "w-40",
  height: "h-40",
  margin: ["my-3"],
  borderRadius: "rounded-full",
  boxShadow: "shadow-lg",
};

const fullNameCssProp: TailwindCssProp = {
  margin: ["mb-1"],
  fontSize: "text-xl",
  fontWeight: "font-medium",
  textColor: "text-gray-900"
};

const SubNameCssProp: TailwindCssProp = {
  fontSize: "text-sm",
  textColor: "text-gray-500"
}

type TopLeftCardProp = {
  imageSrc: StaticImageData
  imageAlt: string
  fullName: string
  subName: string
}

const TopLeftCard = (prop: TopLeftCardProp) => {
  return (
    <Card variant="topCard" flexVariant="topCardFlex">
      <Image
        className={convertCssPropToClasses(imageCssProp)}
        src={SampleImage}
        alt={prop.imageAlt}
      ></Image>
      <h5 className={convertCssPropToClasses(fullNameCssProp)}>
        {prop.fullName}
      </h5>
      <span className={convertCssPropToClasses(SubNameCssProp)}>
        {prop.subName}
      </span>
      <div className="flex mt-4 space-x-3 md:mt-6">
        <div
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg"
        >
          Add friend
        </div>
        <div
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg"
        >
          Message
        </div>
      </div>
    </Card>
  );
};

export default TopLeftCard;
