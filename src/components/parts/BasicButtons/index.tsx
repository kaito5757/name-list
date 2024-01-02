import { Box, Button, SxProps, Theme } from "@mui/material";
import { ButtonOwnProps } from "@mui/material/Button/Button";
import Link from "next/link";
import { ComponentProps } from "react";

interface BasicButtonsProps extends ComponentProps<"div"> {
  btnInfoList: {
    linkUrl: string;
    btnAttr: ButtonOwnProps;
  }[];
}

const css: {
  buttonGroup: SxProps<Theme>;
  button: SxProps<Theme>;
} = {
  buttonGroup: {
    display: "flex",
    marginTop: "2.5rem",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: { xs: "column", sm: "row" },
  },
  button: {
    marginBottom: { xs: 2, sm: 0 },
  },
};

export default function BasicButtons(props: BasicButtonsProps) {
  return (
    <Box component="div" sx={css.buttonGroup}>
      {props.btnInfoList.map((btnInfo, index) => (
        <Link href={btnInfo.linkUrl} key={index}>
          <Button {...btnInfo.btnAttr} sx={css.button}>
            管理画面に戻る
          </Button>
        </Link>
      ))}
    </Box>
  );
}
