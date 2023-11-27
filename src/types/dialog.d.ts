import { SvgIconTypeMap } from "@mui/material";
import { SxProps, Theme } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type ButtonType = {
  type: "button";
  text: string;
};

export type IconType = {
  type: "icon";
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

export type TableCollType = {
  collChild: string | JSX.Element;
  collCss?: SxProps<Theme>;
};

export type TableRowType = {
  tableCollAry: TableCollType[];
};
