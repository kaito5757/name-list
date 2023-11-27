import GlobalLayout from "@/components/parts/common/GlobalLayout";
import { Teams } from "@/types";
import { trpc } from "@/utils/trpc";
import { useEffect, useState } from "react";

export default function Team() {
  const teamsQuery = trpc.team.getAllTeams.useQuery();
  const refetchTeams = {
    onSuccess: () => teamsQuery.refetch()
  }
  const createTeamMutation = trpc.team.createTeam.useMutation(refetchTeams);

  const [teams, setTeams] = useState<Teams>();

  useEffect(() => {
    setTeams(teamsQuery.data);
  }, [teamsQuery.data]);

  return (
    <GlobalLayout>
      {teams?.map((team) => {
        return <p key={team.id}>{team.name}</p>;
      })}
    </GlobalLayout>
  );
}
