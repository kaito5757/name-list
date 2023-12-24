import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { SxProps, Theme } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import Link from "next/link";
import { memo } from "react";

const css: {
  box: SxProps<Theme>;
} = {
  box: {
    marginTop: "3rem",
  },
};
export default function GlobalNavigation() {
  return (
    <Box component="div" sx={css.box}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          LinkComponent={Link}
          label="Home"
          icon={<HomeIcon />}
          href="/"
        />
        <BottomNavigationAction
          LinkComponent={Link}
          label="GitHub"
          icon={<GitHubIcon />}
          href="https://github.com/kaito5757/name-list"
          target="blank"
        />
        <BottomNavigationAction
          LinkComponent={Link}
          label="Qiita"
          icon={<DesignServicesIcon />}
          href="https://qiita.com/kaito121855"
          target="blank"
        />
      </BottomNavigation>
    </Box>
  );
};
