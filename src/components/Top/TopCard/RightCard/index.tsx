import { Box, Snackbar, SxProps, Theme } from "@mui/material";
import { itemInfo } from "@types";
import { useState } from "react";
import Card from "../../../Parts/Card";

interface RightCardProps extends React.ComponentPropsWithoutRef<"div"> {
  itemInfoAry: itemInfo[];
  snackbarMessage: string;
}

type CssTypes = {
  box: SxProps<Theme>;
  itemName: SxProps<Theme>;
  itemText: SxProps<Theme>;
};

const css: CssTypes = {
  box: {
    padding: "2rem",
    "> :not([hidden]) ~ :not([hidden])": {
      "--tw-space-y-reverse": 0,
      marginTop: "calc(1rem * (1 - var(--tw-space-y-reverse)))",
      marginBottom: "calc(1rem * var(--tw-space-y-reverse))",
    },
  },
  itemName: {
    display: "block",
    marginBottom: "0.5rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    color: "rgb(17 24 39)",
  },
  itemText: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    textAlign: "center",
    color: "rgb(17 24 39)",
    borderWidth: "1px",
    borderColor: "rgb(209 213 219)",
    borderRadius: "0.5rem",
  },
};

export default function TopRightCard(props: RightCardProps) {
  const [open, setOpen] = useState(false);
  const handleClick = (text: string) => {
    setOpen(true);
    navigator.clipboard.writeText(text);
  };

  return (
    <Card>
      <Box component="div" sx={css.box}>
        {props.itemInfoAry.map((item) => {
          return (
            <Box key={item.itemName} component="div">
              <Box component="span" sx={css.itemName}>
                {item.itemName}
              </Box>
              <Box
                component={item.isButton ? "button" : "div"}
                onClick={
                  item.isButton ? () => handleClick(item.itemText) : () => {}
                }
                sx={css.itemText}
              >
                {item.itemText}
              </Box>
            </Box>
          );
        })}
      </Box>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message={props.snackbarMessage}
      />
    </Card>
  );
}
