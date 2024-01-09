import UserCreateDialog from "@/components/pages/User/UserCreateDialog";
import UserTable from "@/components/pages/User/UserTable";
import { useBasicBackdropStore } from "@/components/parts/BasicBackdrop";
import ReturnAdminButton from "@/components/parts/BasicButtons/ReturnAdminButton";
import { useBasicSnackbarStore } from "@/components/parts/BasicSnackbar";
import Meta from "@/components/parts/Meta";
import { UserFormSchemaType } from "@/components/schema/userFormSchema";
import { Users } from "@/types";
import {
  addMainImage,
  deleteMainImage,
  updateMainImage,
} from "@/utils/supabase/storage";
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
    departmentsData.forEach((data) => departmentList.set(data.id, data.name));
  }

  const teamsData = trpc.team.getAllTeams.useQuery().data;
  const teamList = new Map<number, string>();
  if (teamsData) {
    teamsData.forEach((data) => teamList.set(data.id, data.name));
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

  const createUserMutation = trpc.user.createUser.useMutation({
    onSuccess: () =>
      refetchDepartments("success", "社員の作成が完了しました。"),
    onError: () =>
      setBackdropAndSnackbar("error", "社員の作成に失敗しました。"),
  });
  const updateUserMutation = trpc.user.updateUser.useMutation({
    onSuccess: () =>
      refetchDepartments("success", "社員の更新が完了しました。"),
    onError: () =>
      setBackdropAndSnackbar("error", "社員の更新に失敗しました。"),
  });
  const deleteUserMutation = trpc.user.deleteUser.useMutation({
    onSuccess: () =>
      refetchDepartments("success", "社員の削除が完了しました。"),
    onError: () =>
      setBackdropAndSnackbar("error", "社員の削除に失敗しました。"),
  });

  useEffect(() => {
    usersQuery.data ? setBackdrop(false) : setBackdrop(true);
    setUsers(usersQuery.data);
  }, [setBackdrop, usersQuery.data]);

  const createUserData = async (data: UserFormSchemaType) => {
    setBackdrop(true);

    const mainImage = (data.main_image as FileList)[0];
    const mainImagePath = await addMainImage(mainImage);
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
  };

  const updateUserData = async (
    userId: number,
    mainImagePath: string,
    data: UserFormSchemaType,
  ) => {
    setBackdrop(true);

    const mainImage = (data.main_image as FileList)[0];
    if (mainImage?.name) {
      await updateMainImage(mainImage, mainImagePath);
    }
    const oldUserData = users?.find((user) => user.id === userId);
    if (oldUserData) {
      const variables = {
        main_image_url: mainImagePath,
        user_id: userId,
        full_name: data.full_name,
        full_name_kana: data.full_name_kana,
        new_department_id: Number(data.department_id),
        old_department_id: oldUserData.departments[0].department_id,
        new_team_id: Number(data.team_id),
        old_team_id: oldUserData.teams[0].team_id,
        official_position: data.official_position,
        occupation: data.occupation,
        mail_address: data.mail_address,
        slack_name: data.slack_name,
      };
      updateUserMutation.mutate(variables);
    }
  };

  const deleteUserData = async (
    userId: number,
    departmentId: number,
    teamId: number,
    mainImagePath: string,
  ) => {
    setBackdrop(true);
    await deleteMainImage(mainImagePath);
    deleteUserMutation.mutate({
      user_id: userId,
      department_id_ary: [departmentId],
      team_id_ary: [teamId],
    });
  };

  return (
    <>
      <Meta title="社員管理" url="/admin/user" />
      <Box component="div" sx={css.userContainer}>
        <Box component="div" sx={css.userRow}>
          <UserCreateDialog
            createUserData={createUserData}
            departmentList={departmentList}
            teamList={teamList}
          />
          <UserTable
            users={users}
            departmentList={departmentList}
            teamList={teamList}
            updateUserData={updateUserData}
            deleteUserData={deleteUserData}
          />
          <ReturnAdminButton />
        </Box>
      </Box>
    </>
  );
}
