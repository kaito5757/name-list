import BasicButtons from "..";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ReturnAdminButton() {
  return (
    <BasicButtons
      btnInfoList={[
        {
          linkUrl: "/admin",
          btnAttr: {
            variant: "outlined",
            size: "large",
            startIcon: <ArrowBackIcon />,
            children: "管理画面に戻る",
          },
        },
      ]}
    />
  );
}
