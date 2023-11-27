import { useDepartmentForm } from "@/components/hooks/useDepartmentForm";
import FormDialog from "@/components/parts/FormDialog";
import { DepartmentFormSchemaType } from "@/components/schema/departmentFormSchema";
import { TextField } from "@mui/material";
import { Fragment } from "react";

interface DepartmentCreateDialogProps
  extends React.ComponentPropsWithoutRef<"div"> {
  createDepartmentData: (data: DepartmentFormSchemaType) => void;
}

export default function DepartmentCreateDialog(
  props: DepartmentCreateDialogProps,
) {
  const { register, handleSubmit, errors, reset } = useDepartmentForm();

  const formData = (data: DepartmentFormSchemaType) => {
    props.createDepartmentData(data);
  };

  return (
    <Fragment>
      <FormDialog<DepartmentFormSchemaType>
        dialogTriggerType={{ type: "button", text: "部署を追加する" }}
        title="部署の追加"
        channelButtonText="閉じる"
        submitButtonText="追加"
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
