import { nextLinkType } from "@/types";
import GlobalHeader from "@/components/parts/common/GlobalHeader";
import GlobalNavigation from "@/components/parts/common/GlobalNavigation";
import { Box, SxProps, Theme } from "@mui/material";
import BasicSnackbar from "../../BasicSnackbar";
import { memo } from "react";
import BasicBackdrop from "../../BasicBackdrop";

interface GlobalLayoutProps extends React.ComponentPropsWithoutRef<"div"> {}

type CssTypes = {
  layoutBox: SxProps<Theme>;
  mainBox: SxProps<Theme>;
};

const css: CssTypes = {
  layoutBox: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  mainBox: {
    flexGrow: 1,
    padding: "0.75rem",
  },
};

const navLinks: nextLinkType[] = [
  {
    href: "/admin",
    children: "管理",
  },
  {
    href: "/name-list",
    children: "名簿一覧",
  },
];

export default memo(function GlobalLayout(props: GlobalLayoutProps) {
  return (
    <>
      <Box component="div" sx={css.layoutBox}>
        <GlobalHeader logoName="NAME-LIST" navLinks={navLinks} />
        <Box component="div" sx={css.mainBox}>
          {props.children}
        </Box>
        <GlobalNavigation />
      </Box>
      <BasicBackdrop />
      <BasicSnackbar />
    </>
  );
});
