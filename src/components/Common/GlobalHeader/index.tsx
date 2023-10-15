import AdbIcon from "@mui/icons-material/Adb";
import { SxProps, Theme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface GlobalHeaderProps extends React.ComponentPropsWithoutRef<"div"> {
  logoName: string;
  listNameText: string;
}

type CssTypes = {
  box: SxProps<Theme>;
  adbIcon: SxProps<Theme>;
  typography: SxProps<Theme>;
};

const css: CssTypes = {
  box: {
    flexGrow: 1,
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

const GlobalHeader = (props: GlobalHeaderProps) => {
  return (
    <Box component="div" sx={css.box}>
      <AppBar position="static">
        <Toolbar>
          <AdbIcon sx={css.adbIcon} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={css.typography}
          >
            {props.logoName}
          </Typography>
          <Button color="inherit" href="/api/hello">
            {props.listNameText}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default GlobalHeader;
