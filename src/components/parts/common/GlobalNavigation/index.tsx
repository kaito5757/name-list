import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import TwitterIcon from "@mui/icons-material/Twitter";
import { SxProps, Theme } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import { memo } from "react";

interface GlobalNavigationProps extends React.ComponentPropsWithoutRef<"div"> {}

type CssTypes = {
  box: SxProps<Theme>;
};

const css: CssTypes = {
  box: {
    marginTop: "3rem",
  },
};
export default memo(function GlobalNavigation(props: GlobalNavigationProps) {
  return (
    <Box component="div" sx={css.box}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} href="/" />
        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} href="/" />
        <BottomNavigationAction label="X" icon={<TwitterIcon />} href="/" />
      </BottomNavigation>
    </Box>
  );
});
