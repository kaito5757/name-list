import BasicTable from "@/components/parts/BasicTable";
import { UserFormSchemaType } from "@/components/schema/userFormSchema";
import { TableCollType, User, Users } from "@/types";
import { tableHeadThCss } from "@/utils/styles";
import UserDeleteDialog from "../UserDeleteDialog";
import UserUpdateDialog from "../UserUpdateDialog";
import UserViewDialog from "../UserViewDialog";

interface UserTableProps {
  users: Users;
  departmentList: Map<number, string>;
  teamList: Map<number, string>;
  updateUserData: (
    userId: number,
    mainImagePath: string,
    data: UserFormSchemaType,
  ) => void;
  deleteUserData: (
    userId: number,
    departmentId: number,
    teamId: number,
    mainImagePath: string,
  ) => void;
}

export default function UserTable(props: UserTableProps) {
  const tableHeadCollAry: TableCollType[] = [
    {
      collChild: "社員名",
      collCss: { ...tableHeadThCss, width: "75%" },
    },
    {
      collChild: "詳細",
      collCss: {
        ...tableHeadThCss,
        width: "8.333333%",
        textAlign: "center",
      },
    },
    {
      collChild: "編集",
      collCss: {
        ...tableHeadThCss,
        width: "8.333333%",
        textAlign: "center",
      },
    },
    {
      collChild: "削除",
      collCss: {
        ...tableHeadThCss,
        width: "8.333333%",
        textAlign: "center",
      },
    },
  ];

  const onUpdateSubmitClick = (
    userId: number,
    mainImagePath: string,
    data: UserFormSchemaType,
  ): void => {
    props.updateUserData(userId, mainImagePath, data);
  };

  const onDeleteSubmitClick = (
    userId: number,
    departmentId: number,
    teamId: number,
    mainImagePath: string,
  ): void => {
    props.deleteUserData(userId, departmentId, teamId, mainImagePath);
  };

  const tableBodyRowAry =
    props.users?.map((user: User) => {
      return {
        tableCollAry: [
          {
            collChild: user.full_name,
          },
          {
            collChild: (
              <UserViewDialog
                userData={user}
                departmentList={props.departmentList}
                teamList={props.teamList}
              />
            ),
            collCss: { textAlign: "center" },
          },
          {
            collChild: (
              <UserUpdateDialog
                userData={user}
                departmentList={props.departmentList}
                teamList={props.teamList}
                onUpdateSubmitClick={(data: UserFormSchemaType) => {
                  onUpdateSubmitClick(user.id, user.main_image_url, data);
                }}
              />
            ),
            collCss: { textAlign: "center" },
          },
          {
            collChild: (
              <UserDeleteDialog
                userName={user.full_name}
                onDeleteSubmitClick={() => {
                  const departmentId = user.departments[0].department_id;
                  const teamId = user.teams[0].team_id;
                  onDeleteSubmitClick(
                    user.id,
                    departmentId,
                    teamId,
                    user.main_image_url,
                  );
                }}
              />
            ),
            collCss: { textAlign: "center" },
          },
        ],
      };
    }) ?? [];

  return (
    <BasicTable
      tableHeadCollAry={tableHeadCollAry}
      tableBodyRowAry={tableBodyRowAry}
    />
  );
}
