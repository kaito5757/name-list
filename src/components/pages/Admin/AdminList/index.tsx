import { Box, SxProps, Theme } from "@mui/material";
import { ComponentProps } from "react";
import AdminItem, { adminItemType } from "../AdminItem";

interface AdminListProps extends ComponentProps<"div"> {
  adminItemAry: adminItemType[];
}

type CssTypes = {
  box: SxProps<Theme>;
};

const css: CssTypes = {
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
};

export default function AdminList(props: AdminListProps) {
  return (
    <Box component="div" sx={css.box}>
      {props.adminItemAry.map((item) => {
        return <AdminItem adminItem={item} key={item.name} />;
      })}
    </Box>
  );
}
