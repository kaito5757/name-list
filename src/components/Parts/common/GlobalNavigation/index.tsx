import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import TwitterIcon from "@mui/icons-material/Twitter";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";

interface GlobalNavigationProps extends React.ComponentPropsWithoutRef<"div"> {}

type CssTypes = {};
const css: CssTypes = {};

export default function GlobalNavigation(props: GlobalNavigationProps) {
  return (
    <Box component="div">
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} href="/" />
        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} href="/" />
        <BottomNavigationAction label="X" icon={<TwitterIcon />} href="/" />
      </BottomNavigation>
    </Box>
  );
}
