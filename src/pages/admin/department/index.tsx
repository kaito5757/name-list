import DepartmentCreateDialog from "@/components/pages/Department/DepartmentCreateDialog";
import DepartmentTable from "@/components/pages/Department/DepartmentTable";
import BasicButtons from "@/components/parts/BasicButtons";
import GlobalLayout from "@/components/parts/common/GlobalLayout";
import { DepartmentFormSchemaType } from "@/components/schema/departmentFormSchema";
import { Departments } from "@/types";
import { trpc } from "@/utils/trpc";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, SxProps, Theme } from "@mui/material";
import { useEffect, useState } from "react";

const css: {
  departmentContainer: SxProps<Theme>;
  departmentRow: SxProps<Theme>;
} = {
  departmentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  departmentRow: {
    overflowX: "auto",
    margin: "-0.375rem",
    width: "75%",
    "@media (min-width: 640px)": { width: "50%" },
  },
};

export default function Department() {
  const departmentsQuery = trpc.department.getAllDepartments.useQuery();
  const refetchDepartments = {
    onSuccess: () => departmentsQuery.refetch(),
  };
  const createDepartmentMutation =
    trpc.department.createDepartment.useMutation(refetchDepartments);
  const updateDepartmentMutation =
    trpc.department.updateDepartmentById.useMutation(refetchDepartments);
  const updateDepartmentsOrderMutation =
    trpc.department.updateDepartmentsOrder.useMutation();
  const deleteDepartmentMutation =
    trpc.department.deleteDepartmentById.useMutation(refetchDepartments);

  const [departments, setDepartments] = useState<Departments>();

  useEffect(() => {
    setDepartments(departmentsQuery.data);
  }, [departmentsQuery.data]);

  const updateDepartmentsOrder = () => {
    if (!departments) return;
    updateDepartmentsOrderMutation.mutate(departments);
  };

  const createDepartmentData = (data: DepartmentFormSchemaType) => {
    createDepartmentMutation.mutate(data);
  };

  const updateDepartmentData = (
    departmentId: number,
    data: DepartmentFormSchemaType,
  ) => {
    updateDepartmentMutation.mutate({ id: departmentId, name: data.name });
  };

  const deleteDepartmentData = (departmentId: number) => {
    deleteDepartmentMutation.mutate({ id: departmentId });
  };

  return (
    <GlobalLayout>
      <Box component="div" sx={css.departmentContainer}>
        <Box component="div" sx={css.departmentRow}>
          <DepartmentCreateDialog createDepartmentData={createDepartmentData} />
          <DepartmentTable
            departments={departments}
            setDepartments={setDepartments}
            updateOrder={updateDepartmentsOrder}
            updateDepartmentData={updateDepartmentData}
            deleteDepartmentData={deleteDepartmentData}
          />
          <BasicButtons
            btnInfoList={[
              {
                linkUrl: "/admin",
                btnAttr: {
                  variant: "outlined",
                  size: "large",
                  startIcon: <ArrowBackIcon />,
                  children: "管理画面に戻る",
                },
              },
            ]}
          />
        </Box>
      </Box>
    </GlobalLayout>
  );
}
