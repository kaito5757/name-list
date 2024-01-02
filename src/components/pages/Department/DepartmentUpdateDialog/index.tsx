import { useDepartmentForm } from "@/components/hooks/useDepartmentForm";
import FormDialog from "@/components/parts/FormDialog";
import { DepartmentFormSchemaType } from "@/components/schema/departmentFormSchema";
import EditIcon from "@mui/icons-material/Edit";
import { TextField } from "@mui/material";
import { ComponentProps, Fragment } from "react";

interface DepartmentUpdateDialogProps extends ComponentProps<"div"> {
  departmentData: DepartmentFormSchemaType;
  onUpdateSubmitClick: (data: DepartmentFormSchemaType) => void;
}

export default function DepartmentUpdateDialog(
  props: DepartmentUpdateDialogProps,
) {
  const { register, handleSubmit, errors, isDirty, reset } = useDepartmentForm(
    props.departmentData,
  );

  const formData = (data: DepartmentFormSchemaType) => {
    isDirty && props.onUpdateSubmitClick(data);
  };

  return (
    <Fragment>
      <FormDialog<DepartmentFormSchemaType>
        title="部署の編集"
        dialogTriggerType={{ type: "icon", icon: EditIcon }}
        channelButtonText="閉じる"
        submitButtonText="編集する"
        handleSubmit={handleSubmit}
        reset={reset}
        formData={formData}
      >
        <TextField
          error={!!errors.name}
          helperText={errors.name?.message}
          autoFocus
          margin="dense"
          label="部署"
          type="text"
          fullWidth
          variant="standard"
          autoComplete="off"
          {...register("name")}
        />
      </FormDialog>
    </Fragment>
  );
}
