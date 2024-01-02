import { Theme as EmotionTheme, Interpolation } from "@emotion/react";
import { Box, SvgIconTypeMap, SxProps, Theme } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Link from "next/link";
import { ComponentProps } from "react";

export type adminItemType = {
  name: string;
  url: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

interface AdminItemProps extends ComponentProps<"div"> {
  adminItem: adminItemType;
}

type CssTypes = {
  box: SxProps<Theme>;
  link: Interpolation<EmotionTheme>;
  icon: SxProps<Theme>;
};

const css: CssTypes = {
  box: {
    width: "50%",
    margin: "1rem",
    color: "rgb(17 24 39)",
    backgroundColor: "rgb(255 255 255)",
    borderWidth: "1px",
    borderColor: "rgb(229 231 235)",
    borderRadius: "0.5rem",
  },
  link: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    width: "100%",
    padding: "2rem 1rem",
    fontWeight: 500,
    borderBottomWidth: "1px",
    borderColor: "rgb(229 231 235)",
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
    ":hover": {
      backgroundColor: "rgb(243 244 246)",
      color: "rgb(29 78 216)",
    },
    ":focus": {
      zIndex: 10,
      boxShadow:
        "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
      color: "rgb(29 78 216)",
    },
  },
  icon: {
    width: "2rem",
    height: "2rem",
    marginRight: "0.625rem",
  },
};

export default function AdminItem(props: AdminItemProps) {
  return (
    <Box component="div" sx={css.box}>
      <Link href={props.adminItem.url} css={css.link}>
        <props.adminItem.icon sx={css.icon} />
        {props.adminItem.name}
      </Link>
      {/* <Button href={props.adminItem.url} css={css.link}>
        <props.adminItem.icon sx={css.icon} />
        {props.adminItem.name}
      </Button> */}
    </Box>
  );
}
