import * as Backgrounds from "./tailwind/Backgrounds";
import * as Borders from "./tailwind/Borders";
import * as Effects from "./tailwind/Effects";
import * as FlexBoxGrid from "./tailwind/FlexBoxGrid";
import * as Sizing from "./tailwind/Sizing";
import * as Spacing from "./tailwind/Spacing";
import * as Typography from "./tailwind/Typography";

type CommonTailwindProps = {
  backgroundColor?: Backgrounds.BackgroundColor;
  borderColor?: Borders.BorderColor;
  borderRadius?: Borders.BorderRadius;
  borderWidth?: Borders.BorderWidth;
  boxShadow?: Effects.BoxShadow;
  flexBox?: FlexBoxGrid.FlexBox;
  alignItems?: FlexBoxGrid.AlignItems;
  flexDirection?: FlexBoxGrid.FlexDirection;
  height?: Sizing.Height;
  maxWidth?: Sizing.MaxWidth;
  width?: Sizing.Width;
  margin?: Spacing.Margin[];
  padding?: Spacing.Padding[];
  fontSize?: Typography.FontSize;
  fontWeight?: Typography.FontWeight;
  textColor?: Typography.TextColor;
};

export type TailwindCssProp = {
  responsiveDesign?: [
    {
      breakpoint: "sm" | "md" | "lg" | "xl" | "2xl"
    } & CommonTailwindProps
  ] 
} & CommonTailwindProps;
