import DndBasicTable from "@/components/parts/DndBasicTable";
import { DepartmentFormSchemaType } from "@/components/schema/departmentFormSchema";
import { Department, Departments, TableCollType } from "@/types";
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

export default function DepartmentTable(props: DepartmentTableProps) {
  const tableHeadCollAry: TableCollType[] = [
    {
      collChild: "",
      collCss: { ...css.tableHeadTh, width: "8.333333%" },
    },
    {
      collChild: "部署名",
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
