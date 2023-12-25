import { useTeamForm } from "@/components/hooks/useTeamForm";
import FormDialog from "@/components/parts/FormDialog";
import { TeamFormSchemaType } from "@/components/schema/teamFormSchema";
import { TextField } from "@mui/material";
import { Fragment } from "react";

interface TeamCreateDialogProps extends React.ComponentPropsWithoutRef<"div"> {
  createTeamData: (data: TeamFormSchemaType) => void;
}

export default function TeamCreateDialog(props: TeamCreateDialogProps) {
  const { register, handleSubmit, errors, reset } = useTeamForm();

  const formData = (data: TeamFormSchemaType) => {
    props.createTeamData(data);
  };

  return (
    <Fragment>
      <FormDialog<TeamFormSchemaType>
        dialogTriggerType={{ type: "button", text: "課を追加する" }}
        title="課の追加"
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
          label="課"
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
