import { TeamFormSchemaType } from "@/components/schema/teamFormSchema";
import { TableCollType, Team, Teams } from "@/types";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { SxProps, Theme } from "@mui/material";
import { ComponentPropsWithoutRef, Dispatch, SetStateAction } from "react";
import TeamUpdateDialog from "../TeamUpdateDialog";
import TeamDeleteDialog from "../TeamDeleteDialog";
import DndBasicTable from "@/components/parts/DndBasicTable";

interface TeamTableProps extends ComponentPropsWithoutRef<"div"> {
  teams: Teams;
  setTeams: Dispatch<SetStateAction<Teams>>;
  updateOrder: () => void;
  updateTeamData: (teamId: number, data: TeamFormSchemaType) => void;
  deleteTeamData: (teamId: number) => void;
}

const css: {
  dragIcon: SxProps<Theme>;
  tableHeadTh: SxProps<Theme>;
} = {
  dragIcon: {
    cursor: "move",
    ":active": {
      cursor: "move",
    },
  },
  tableHeadTh: {
    fontSize: "0.75rem",
    lineHeight: "1rem",
    fontWeight: 500,
    color: "#6B7280",
    textTransform: "uppercase",
  },
};

export default function TeamTable(props: TeamTableProps) {
  const tableHeadCollAry: TableCollType[] = [
    {
      collChild: "",
      collCss: { ...css.tableHeadTh, width: "8.333333%" },
    },
    {
      collChild: "課名",
      collCss: { ...css.tableHeadTh, width: "75%" },
    },
    {
      collChild: "編集",
      collCss: {
        ...css.tableHeadTh,
        width: "8.333333%",
        textAlign: "center",
      },
    },
    {
      collChild: "削除",
      collCss: {
        ...css.tableHeadTh,
        width: "8.333333%",
        textAlign: "center",
      },
    },
  ];

  const onUpdateSubmitClick = (
    teamId: number,
    data: TeamFormSchemaType,
  ): void => {
    props.updateTeamData(teamId, data);
  };

  const onDeleteSubmitClick = (teamId: number): void => {
    props.deleteTeamData(teamId);
  };

  const tableBodyRowAry =
    props.teams?.map((team: Team) => {
      return {
        tableCollAry: [
          {
            collChild: <DragIndicatorIcon />,
            collCss: css.dragIcon,
          },
          {
            collChild: team.name,
          },
          {
            collChild: (
              <TeamUpdateDialog
                teamData={team}
                onUpdateSubmitClick={(data: TeamFormSchemaType) => {
                  onUpdateSubmitClick(team.id, data);
                }}
              />
            ),
            collCss: { textAlign: "center" },
          },
          {
            collChild: (
              <TeamDeleteDialog
                teamData={team}
                onDeleteSubmitClick={() => onDeleteSubmitClick(team.id)}
              />
            ),
            collCss: { textAlign: "center" },
          },
        ],
      };
    }) ?? [];

  return (
    <DndBasicTable<Teams>
      tableHeadCollAry={tableHeadCollAry}
      tableBodyRowAry={tableBodyRowAry}
      setTableData={props.setTeams}
      updateTableOrder={props.updateOrder}
    />
  );
}
