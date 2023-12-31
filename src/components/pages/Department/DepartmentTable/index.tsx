import DndBasicTable from "@/components/parts/DndBasicTable";
import { DepartmentFormSchemaType } from "@/components/schema/departmentFormSchema";
import { Department, Departments, TableCollType } from "@/types";
import { tableHeadThCss } from "@/utils/styles";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { SxProps, Theme } from "@mui/material";
import { ComponentProps, Dispatch, SetStateAction } from "react";
import DepartmentDeleteDialog from "../DepartmentDeleteDialog";
import DepartmentUpdateDialog from "../DepartmentUpdateDialog";

interface DepartmentTableProps extends ComponentProps<"div"> {
  departments: Departments;
  setDepartments: Dispatch<SetStateAction<Departments>>;
  updateOrder: () => void;
  updateDepartmentData: (
    departmentId: number,
    data: DepartmentFormSchemaType,
  ) => void;
  deleteDepartmentData: (departmentId: number) => void;
}

const css: {
  dragIcon: SxProps<Theme>;
} = {
  dragIcon: {
    cursor: "move",
    ":active": {
      cursor: "move",
    },
    textAlign: "center"
  },
};

export default function DepartmentTable(props: DepartmentTableProps) {
  const tableHeadCollAry: TableCollType[] = [
    {
      collChild: "並替",
      collCss: { ...tableHeadThCss, width: "10%", textAlign: "center", },
    },
    {
      collChild: "部署名",
      collCss: { ...tableHeadThCss, width: "75%" },
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
    departmentId: number,
    data: DepartmentFormSchemaType,
  ): void => {
    props.updateDepartmentData(departmentId, data);
  };

  const onDeleteSubmitClick = (departmentId: number): void => {
    props.deleteDepartmentData(departmentId);
  };

  const tableBodyRowAry =
    props.departments?.map((department: Department) => {
      return {
        tableCollAry: [
          {
            collChild: <DragIndicatorIcon />,
            collCss: css.dragIcon,
          },
          {
            collChild: department.name,
          },
          {
            collChild: (
              <DepartmentUpdateDialog
                departmentData={department}
                onUpdateSubmitClick={(data: DepartmentFormSchemaType) => {
                  onUpdateSubmitClick(department.id, data);
                }}
              />
            ),
            collCss: { textAlign: "center" },
          },
          {
            collChild: (
              <DepartmentDeleteDialog
                departmentData={department}
                onDeleteSubmitClick={() => onDeleteSubmitClick(department.id)}
              />
            ),
            collCss: { textAlign: "center" },
          },
        ],
      };
    }) ?? [];

  return (
    <DndBasicTable<Departments>
      tableHeadCollAry={tableHeadCollAry}
      tableBodyRowAry={tableBodyRowAry}
      setTableData={props.setDepartments}
      updateTableOrder={props.updateOrder}
    />
  );
}
