import GlobalHeader from "@/components/Common/GlobalHeader";
import GlobalNavigation from "@/components/Common/GlobalNavigation";
import { Box, SxProps, Theme } from "@mui/material";

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

const GlobalLayout = (props: GlobalLayoutProps) => {
  return (
    <Box component="div" sx={css.layoutBox}>
      <GlobalHeader logoName="NAME-LIST" listNameText="名簿一覧" />
      <Box component="div" sx={css.mainBox}>
        {props.children}
      </Box>
      <GlobalNavigation />
    </Box>
  );
};

export default GlobalLayout;
