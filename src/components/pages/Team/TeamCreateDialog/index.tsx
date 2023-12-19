import { TeamFormSchemaType } from "@/components/schema/teamFormSchema";
import { Fragment } from "react";

interface TeamCreateDialogProps extends React.ComponentPropsWithoutRef<"div"> {
  createTeamData: (data: TeamFormSchemaType) => void;
}

export default function TeamCreateDialog(props: TeamCreateDialogProps) {
  return <Fragment></Fragment>;
}
