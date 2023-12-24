import { nextLinkType } from "@/types";
import AdbIcon from "@mui/icons-material/Adb";
import { SxProps, Theme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { memo } from "react";

interface GlobalHeaderProps extends React.ComponentPropsWithoutRef<"div"> {
  logoName: string;
  navLinks: nextLinkType[];
}

type CssTypes = {
  box: SxProps<Theme>;
  adbIcon: SxProps<Theme>;
  typography: SxProps<Theme>;
};

const css: CssTypes = {
  box: {
    flexGrow: 1,
    marginBottom: "3rem",
  },
  adbIcon: {
    display: { xs: "none", md: "flex" },
    mr: 1,
  },
  typography: {
    mr: 2,
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
};

export default memo(function GlobalHeader(props: GlobalHeaderProps) {
  return (
    <Box component="div" sx={css.box}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/" data-testid="logoIconLink">
            <AdbIcon sx={css.adbIcon} />
          </Link>
          <Typography variant="h6" sx={css.typography}>
            <Link href="/" data-testid="logoTitleLink">
              {props.logoName}
            </Link>
          </Typography>
          {props.navLinks.map((navLink, index) => (
            <Link
              key={index}
              href={navLink.href}
              css={{ paddingLeft: 20 }}
              data-testid={"navLink" + index}
            >
              {navLink.children}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
});
