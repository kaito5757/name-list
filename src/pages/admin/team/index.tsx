import GlobalLayout from "@/components/parts/common/GlobalLayout";
import { TeamFormSchemaType } from "@/components/schema/teamFormSchema";
import { Teams } from "@/types";
import { trpc } from "@/utils/trpc";
import { Box, SxProps, Theme } from "@mui/material";
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
  const teamsQuery = trpc.team.getAllTeams.useQuery();
  const refetchTeams = {
    onSuccess: () => teamsQuery.refetch(),
  };
  const createTeamMutation = trpc.team.createTeam.useMutation(refetchTeams);
  const updateTeamMutation = trpc.team.updateTeamById.useMutation(refetchTeams);
  const updateTeamsOrderMutation = trpc.team.updateTeamsOrder.useMutation();
  const deleteTeamMutation = trpc.team.deleteTeamById.useMutation(refetchTeams);

  const [teams, setTeams] = useState<Teams>();

  useEffect(() => {
    setTeams(teamsQuery.data);
  }, [teamsQuery.data]);

  const createTeamData = (data: TeamFormSchemaType) => {
    createTeamMutation.mutate(data);
  };

  return (
    <GlobalLayout>
      <Box component="div" sx={css.teamContainer}>
        <Box component="div" sx={css.teamRow}>
          {teams?.map((team) => {
            return <p key={team.id}>{team.name}</p>;
          })}
        </Box>
      </Box>
    </GlobalLayout>
  );
}
