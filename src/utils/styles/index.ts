import { Theme as EmotionTheme } from "@emotion/react";
import { Interpolation } from "@emotion/serialize";
import { SxProps, Theme } from "@mui/material";

export const mainImageCss: Interpolation<EmotionTheme> = {
  width: "10rem",
  height: "10rem",
  margin: "0.75rem auto",
  borderRadius: "9999px",
};

export const tableHeadThCss: SxProps<Theme> = {
  fontSize: "0.75rem",
  lineHeight: "1rem",
  fontWeight: 500,
  color: "#6B7280",
  textTransform: "uppercase",
};
