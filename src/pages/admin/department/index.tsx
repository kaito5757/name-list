import DepartmentCreateDialog from "@/components/pages/Department/DepartmentCreateDialog";
import DepartmentTable from "@/components/pages/Department/DepartmentTable";
import { useBasicBackdropStore } from "@/components/parts/BasicBackdrop";
import ReturnAdminButton from "@/components/parts/BasicButtons/ReturnAdminButton";
import { useBasicSnackbarStore } from "@/components/parts/BasicSnackbar";
import { DepartmentFormSchemaType } from "@/components/schema/departmentFormSchema";
import { Departments } from "@/types";
import { trpc } from "@/utils/trpc";
import { Box, SxProps, Theme } from "@mui/material";
import { AlertColor } from "@mui/material/Alert";
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
  const [departments, setDepartments] = useState<Departments>();

  const setBackdrop = useBasicBackdropStore((state) => state.setOpen);
  const setSnackbar = useBasicSnackbarStore((state) => state.setSnackbar);

  const departmentsQuery = trpc.department.getAllDepartments.useQuery();
  const setBackdropAndSnackbar = (severity: AlertColor, message: string) => {
    setBackdrop(false);
    setSnackbar(severity, message);
  };
  const refetchDepartments = async (severity: AlertColor, message: string) => {
    await departmentsQuery.refetch();
    setBackdropAndSnackbar(severity, message);
  };

  const createDepartmentMutation = trpc.department.createDepartment.useMutation(
    {
      onSuccess: () =>
        refetchDepartments("success", "部署の作成が完了しました。"),
      onError: () =>
        setBackdropAndSnackbar("error", "部署の作成に失敗しました。"),
    },
  );
  const updateDepartmentMutation =
    trpc.department.updateDepartmentById.useMutation({
      onSuccess: () =>
        refetchDepartments("success", "部署の更新が完了しました。"),
      onError: () =>
        setBackdropAndSnackbar("error", "部署の更新に失敗しました。"),
    });
  const updateDepartmentsOrderMutation =
    trpc.department.updateDepartmentsOrder.useMutation();
  const deleteDepartmentMutation =
    trpc.department.deleteDepartmentById.useMutation({
      onSuccess: () =>
        refetchDepartments("success", "部署の削除が完了しました。"),
      onError: () =>
        setBackdropAndSnackbar("error", "部署の更新に失敗しました。"),
    });

  useEffect(() => {
    setBackdrop(true);
    setDepartments(departmentsQuery.data);
    setBackdrop(false);
  }, [departmentsQuery.data]);

  const updateDepartmentsOrder = () => {
    if (!departments) return;
    updateDepartmentsOrderMutation.mutate(departments);
  };

  const createDepartmentData = (data: DepartmentFormSchemaType) => {
    setBackdrop(true);
    createDepartmentMutation.mutate(data);
  };

  const updateDepartmentData = (
    departmentId: number,
    data: DepartmentFormSchemaType,
  ) => {
    setBackdrop(true);
    updateDepartmentMutation.mutate({ id: departmentId, name: data.name });
  };

  const deleteDepartmentData = (departmentId: number) => {
    setBackdrop(true);
    deleteDepartmentMutation.mutate({ id: departmentId });
  };

  return (
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
        <ReturnAdminButton />
      </Box>
    </Box>
  );
}
