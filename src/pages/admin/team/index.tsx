import TeamCreateDialog from "@/components/pages/Team/TeamCreateDialog";
import TeamTable from "@/components/pages/Team/TeamTable";
import { useBasicBackdropStore } from "@/components/parts/BasicBackdrop";
import ReturnAdminButton from "@/components/parts/BasicButtons/ReturnAdminButton";
import { useBasicSnackbarStore } from "@/components/parts/BasicSnackbar";
import GlobalLayout from "@/components/parts/common/GlobalLayout";
import { TeamFormSchemaType } from "@/components/schema/teamFormSchema";
import { Teams } from "@/types";
import { trpc } from "@/utils/trpc";
import { Box, SxProps, Theme } from "@mui/material";
import { AlertColor } from "@mui/material/Alert";
import { useEffect, useState } from "react";

const css: {
  teamContainer: SxProps<Theme>;
  teamRow: SxProps<Theme>;
} = {
  teamContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  teamRow: {
    overflowX: "auto",
    margin: "-0.375rem",
    width: "75%",
    "@media (min-width: 640px)": { width: "50%" },
  },
};

export default function Team() {
  const [teams, setTeams] = useState<Teams>();

  const setBackdrop = useBasicBackdropStore((state) => state.setOpen);
  const setSnackbar = useBasicSnackbarStore((state) => state.setSnackbar);

  const teamsQuery = trpc.team.getAllTeams.useQuery();
  const setBackdropAndSnackbar = (severity: AlertColor, message: string) => {
    setBackdrop(false);
    setSnackbar(severity, message);
  };
  const refetchTeams = async (severity: AlertColor, message: string) => {
    await teamsQuery.refetch();
    setBackdropAndSnackbar(severity, message);
  };
  const createTeamMutation = trpc.team.createTeam.useMutation({
    onSuccess: () => refetchTeams("success", "課の作成が完了しました。"),
    onError: () => setBackdropAndSnackbar("error", "課の作成に失敗しました。"),
  });
  const updateTeamMutation = trpc.team.updateTeamById.useMutation({
    onSuccess: () => refetchTeams("success", "課の更新が完了しました。"),
    onError: () => setBackdropAndSnackbar("error", "課の更新に失敗しました。"),
  });
  const updateTeamsOrderMutation = trpc.team.updateTeamsOrder.useMutation();
  const deleteTeamMutation = trpc.team.deleteTeamById.useMutation({
    onSuccess: () => refetchTeams("success", "課の削除が完了しました。"),
    onError: () => setBackdropAndSnackbar("error", "課の削除に失敗しました。"),
  });

  useEffect(() => {
    setTeams(teamsQuery.data);
  }, [teamsQuery.data]);

  const updateTeamOrder = () => {
    if (!teams) return;
    updateTeamsOrderMutation.mutate(teams);
  };

  const createTeamData = (data: TeamFormSchemaType) => {
    setBackdrop(true);
    createTeamMutation.mutate(data);
  };

  const updateTeamData = (teamId: number, data: TeamFormSchemaType) => {
    setBackdrop(true);
    updateTeamMutation.mutate({ id: teamId, name: data.name });
  };

  const deleteTeamData = (teamId: number) => {
    setBackdrop(true);
    deleteTeamMutation.mutate({ id: teamId });
  };

  return (
    <GlobalLayout>
      <Box component="div" sx={css.teamContainer}>
        <Box component="div" sx={css.teamRow}>
          <TeamCreateDialog createTeamData={createTeamData} />
          <TeamTable
            teams={teams}
            setTeams={setTeams}
            updateOrder={updateTeamOrder}
            updateTeamData={updateTeamData}
            deleteTeamData={deleteTeamData}
          />
          <ReturnAdminButton />
        </Box>
      </Box>
    </GlobalLayout>
  );
}
