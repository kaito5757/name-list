import { Theme as EmotionTheme } from "@emotion/react";
import { Interpolation } from "@emotion/serialize";
import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Image, { StaticImageData } from "next/image";
import Card from "../../../Parts/Card";

interface LeftCardProps extends React.ComponentPropsWithoutRef<"div"> {
  imageSrc: StaticImageData;
  imageAlt: string;
  fullName: string;
  fullNameKana: string;
  department: string;
  team: string;
}

type CssTypes = {
  box: SxProps<Theme>;
  image: Interpolation<EmotionTheme>;
  fullName: SxProps<Theme>;
  fullNameKana: SxProps<Theme>;
  subBox: SxProps<Theme>;
  department: SxProps<Theme>;
  team: SxProps<Theme>;
};

const css: CssTypes = {
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2.5rem 0",
  },
  image: {
    width: "10rem",
    height: "10rem",
    marginTop: "0.75rem",
    marginBottom: "0.75rem",
    borderRadius: "9999px",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
  fullName: {
    margin: "0.25rem",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    fontWeight: "500",
    color: "rgb(17 24 39)",
  },
  fullNameKana: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "rgb(107 114 128)",
  },
  subBox: {
    display: "flex",
    marginTop: "1.5rem",
  },
  department: {
    display: "inline-flex",
    alignItems: "center",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: "500",
    textAlign: "center",
    color: "rgb(17 24 39)",
    borderWidth: "1px",
    borderColor: "rgb(209 213 219)",
    borderRadius: "0.5rem",
  },
  team: {
    display: "inline-flex",
    alignItems: "center",
    marginLeft: "0.75rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: "500",
    textAlign: "center",
    color: "rgb(17 24 39)",
    borderWidth: "1px",
    borderColor: "rgb(209 213 219)",
    borderRadius: "0.5rem",
  },
};

export default function LeftCard(props: LeftCardProps) {
  return (
    <Card>
      <Box component="div" sx={css.box}>
        <Image
          css={css.image}
          src={props.imageSrc}
          alt={props.imageAlt}
          priority
        ></Image>
        <Box component="h5" sx={css.fullName}>
          {props.fullName}
        </Box>
        <Box component="span" sx={css.fullNameKana}>
          {props.fullNameKana}
        </Box>
        <Box component="div" sx={css.subBox}>
          <Box sx={css.department}>{props.department}</Box>
          <Box sx={css.team}>{props.team}</Box>
        </Box>
      </Box>
    </Card>
  );
}
