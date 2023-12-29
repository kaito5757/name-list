import GlobalLayout from "@/components/parts/common/GlobalLayout";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AdminList from "@/components/pages/Admin/AdminList";
import { adminItemType } from "@/components/pages/Admin/AdminItem";

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
  return <AdminList adminItemAry={adminList} />;
}
