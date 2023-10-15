import { TailwindCssProp } from "../../../../types";
import { convertCssPropToClasses } from "../../../../utils/styles";

interface CardProp extends React.ComponentPropsWithoutRef<"div"> {
  variant: keyof typeof variants;
  flexVariant: keyof typeof flexVariants;
}

const variants = {
  topCard: {
    width: "w-full",
    maxWidth: "max-w-xs",
    backgroundColor: "bg-white",
    borderWidth: "border",
    borderColor: "border-gray-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow",
    margin: ["mt-6", "mx-2"],
  } as TailwindCssProp,
};

const flexVariants = {
  topCardFlex: {
    flexBox: "flex",
    flexDirection: "flex-col",
    alignItems: "items-center",
    padding: ["pb-10", "pt-10"],
  } as TailwindCssProp,
};

const Card = (prop: CardProp) => {
  return (
    <div className={convertCssPropToClasses(variants[prop.variant])}>
      <div className={convertCssPropToClasses(flexVariants[prop.flexVariant])}>
        {prop.children}
      </div>
    </div>
  );
};

export default Card;
