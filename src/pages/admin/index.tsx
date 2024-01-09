import { adminItemType } from "@/components/pages/Admin/AdminItem";
import AdminList from "@/components/pages/Admin/AdminList";
import ReturnTopButton from "@/components/parts/BasicButtons/ReturnTopButton";
import Meta from "@/components/parts/Meta";
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
    name: "課",
    url: "/admin/team",
    icon: GroupsIcon,
  },
];

export default function Admin() {
  return (
    <>
      <Meta title="管理画面一覧" url="/admin" />
      <AdminList adminItemAry={adminList} />
      <ReturnTopButton />
    </>
  )
}
