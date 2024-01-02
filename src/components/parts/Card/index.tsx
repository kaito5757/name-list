import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import { ComponentProps } from "react";

interface CardProps extends ComponentProps<"div"> {}

type CssTypes = {
  box: SxProps<Theme>;
};

const css: CssTypes = {
  box: {
    width: "24rem",
    height: "24rem",
    borderWidth: "1px",
    borderColor: "rgb(229 231 235)",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    margin: "0 0.5rem",
    marginTop: "1.5rem",
  },
};

export default function TopCard(props: CardProps) {
  return (
    <Box component="div" sx={css.box}>
      {props.children}
    </Box>
  );
}
