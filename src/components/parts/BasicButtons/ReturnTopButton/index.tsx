import BasicButtons from "..";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ReturnTopButton() {
  return (
    <BasicButtons
      btnInfoList={[
        {
          linkUrl: "/",
          btnAttr: {
            variant: "outlined",
            size: "large",
            startIcon: <ArrowBackIcon />,
            children: "TOPに戻る",
          },
        },
      ]}
    />
  );
}
