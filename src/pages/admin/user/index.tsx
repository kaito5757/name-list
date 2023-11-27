import GlobalLayout from "@/components/parts/common/GlobalLayout";
import { trpc } from "@/utils/trpc";

export default function User() {
  const userList = trpc.user.findUserAll.useQuery();

  return (
    <GlobalLayout>
      {userList.data?.map((user) => {
        return <p key={user.id}>{user.full_name}</p>;
      })}
    </GlobalLayout>
  );
}
