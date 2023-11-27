import { ComponentPropsWithRef } from "react";
import { adminItemType } from "../AdminItem";
import { Box, SxProps, Theme } from "@mui/material";
import AdminItem from "../AdminItem";

interface AdminListProps extends ComponentPropsWithRef<"div"> {
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
