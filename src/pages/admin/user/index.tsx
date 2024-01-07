import UserCreateDialog from "@/components/pages/User/UserCreateDialog";
import { useBasicBackdropStore } from "@/components/parts/BasicBackdrop";
import ReturnAdminButton from "@/components/parts/BasicButtons/ReturnAdminButton";
import { useBasicSnackbarStore } from "@/components/parts/BasicSnackbar";
import { UserFormSchemaType } from "@/components/schema/userFormSchema";
import { Users } from "@/types";
import { addMainImage, getMainImageUrl } from "@/utils/supabase/storage";
import { trpc } from "@/utils/trpc";
import { Box, SxProps, Theme } from "@mui/material";
import { AlertColor } from "@mui/material/Alert";
import { useEffect, useState } from "react";

const css: {
  userContainer: SxProps<Theme>;
  userRow: SxProps<Theme>;
} = {
  userContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  userRow: {
    overflowX: "auto",
    margin: "-0.375rem",
    width: "75%",
    "@media (min-width: 640px)": { width: "50%" },
  },
};

export default function User() {
  const [users, setUsers] = useState<Users>();

  const setBackdrop = useBasicBackdropStore((state) => state.setOpen);
  const setSnackbar = useBasicSnackbarStore((state) => state.setSnackbar);

  const departmentsData = trpc.department.getAllDepartments.useQuery().data;
  const departmentList = new Map<number, string>();
  if (departmentsData) {
    departmentsData.forEach(data => departmentList.set(data.id, data.name));
  }

  const teamsData = trpc.team.getAllTeams.useQuery().data;
  const teamList = new Map<number, string>();
  if (teamsData) {
    teamsData.forEach(data => teamList.set(data.id, data.name));
  }

  const usersQuery = trpc.user.findUserAll.useQuery();
  const setBackdropAndSnackbar = (severity: AlertColor, message: string) => {
    setBackdrop(false);
    setSnackbar(severity, message);
  };
  const refetchDepartments = async (severity: AlertColor, message: string) => {
    await usersQuery.refetch();
    setBackdropAndSnackbar(severity, message);
  };

  const createUserMutation = trpc.user.createUser.useMutation(
    {
      onSuccess: () =>
        refetchDepartments("success", "社員の作成が完了しました。"),
      onError: () =>
        setBackdropAndSnackbar("error", "社員の作成に失敗しました。"),
    },
  );

  useEffect(() => {
    usersQuery.data ? setBackdrop(false) : setBackdrop(true);
    setUsers(usersQuery.data)
  }, [setBackdrop, usersQuery.data])

  const createUserData = async (data: UserFormSchemaType) => {
    setBackdrop(true);

    const mainImagePath = await addMainImage(data.main_image);
    const variables = {
      main_image_url: mainImagePath,
      full_name: data.full_name,
      full_name_kana: data.full_name_kana,
      department_id: Number(data.department_id),
      team_id: Number(data.team_id),
      official_position: data.official_position,
      occupation: data.occupation,
      mail_address: data.mail_address,
      slack_name: data.slack_name,
    };
    createUserMutation.mutate(variables);
  }

  return (
    <Box component="div" sx={css.userContainer}>
      <Box component="div" sx={css.userRow}>
        <UserCreateDialog
          createUserData={createUserData}
          departmentList={departmentList}
          teamList={teamList}
        />
          {users?.map((user) => {
            const departmentIds = user.departments.map(depart => depart.department_id);
            const displayDepartments = departmentsData?.filter(data => departmentIds.includes(data.id));
            const teamIds = user.teams.map(team => team.team_id);
            const displayTeams = teamsData?.filter(data => teamIds.includes(data.id));
            return (
              <div key={user.id}>
                <p>プロフィール画像：{getMainImageUrl(user.main_image_url)}</p>
                <p>名前：{user.full_name}</p>
                <p>名前(カナ)：{user.full_name_kana}</p>
                { displayDepartments?.map(depart => (
                  <p key={depart.id}>部署：{ depart.name }</p>
                )) }
                { displayTeams?.map(team => (
                  <p key={team.id}>課：{ team.name }</p>
                )) }
                <p>役職：{ user.official_position }</p>
                <p>職種：{ user.occupation }</p>
                <p>メールアドレス：{ user.mail_address }</p>
                <p>スラック名：{ user.slack_name }</p><br />
              </div>
            );
          })}
        <ReturnAdminButton />
      </Box>
    </Box>
  );
}

