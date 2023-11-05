import { userItemInfo } from "../../../contexts/userInfo";
import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import { itemInfo, userInfo, userItem } from "@/types";
import ReftCard from "./LeftCard";
import RightCard from "./RightCard";

interface TopCardProps extends React.ComponentPropsWithoutRef<"div"> {
  userInfo: userInfo | undefined;
}

type CssTypes = {
  box: SxProps<Theme>;
  emptyBox: SxProps<Theme>;
};

const css: CssTypes = {
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  emptyBox: {
    height: "24rem",
    margin: "0 0.5rem",
    marginTop: "1.5rem",
  },
};

const convertItemList = (userItem: userItem): itemInfo[] => {
  const itemListAry: itemInfo[] = [];

  Object.keys(userItem).map((key) => {
    const item = userItemInfo.find((info) => info.key === key);
    if (item != null) {
      itemListAry.push({
        itemName: item.title,
        itemText: userItem[item.key as keyof userItem],
        isButton: item.isButton,
      });
    }
  });
  return itemListAry;
};

export default function TopCard(props: TopCardProps) {
  return props.userInfo ? (
    <Box component="div" sx={css.box}>
      <ReftCard
        imageSrc={props.userInfo.profile.image}
        imageAlt={props.userInfo.profile.image}
        fullName={props.userInfo.profile.fullName}
        fullNameKana={props.userInfo.profile.fullNameKana}
        department={props.userInfo.profile.department}
        team={props.userInfo.profile.team}
      />
      <RightCard
        itemInfoAry={convertItemList(props.userInfo.item)}
        snackbarMessage="クリップボードにコピーされました"
      />
    </Box>
  ) : (
    <Box sx={css.emptyBox}></Box>
  );
}
