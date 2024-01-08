import { adminItemType } from "@/components/pages/Admin/AdminItem";
import AdminList from "@/components/pages/Admin/AdminList";
import ReturnTopButton from "@/components/parts/BasicButtons/ReturnTopButton";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";

const adminList: adminItemType[] = [
  {
    name: "社員",
    url: "/admin/user",
    icon: GroupIcon,
  },
  {
    name: "部署",
    url: "/admin/department",
    icon: Diversity3Icon,
  },
  {
    name: "チーム（課）",
    url: "/admin/team",
    icon: GroupsIcon,
  },
];

export default function Admin() {
  return (
    <>
      <AdminList adminItemAry={adminList} />
      <ReturnTopButton />
    </>
  )
}
