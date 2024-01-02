import { useTeamForm } from "@/components/hooks/useTeamForm";
import FormDialog from "@/components/parts/FormDialog";
import { TeamFormSchemaType } from "@/components/schema/teamFormSchema";
import EditIcon from "@mui/icons-material/Edit";
import { TextField } from "@mui/material";
import { ComponentProps, Fragment } from "react";

interface TeamUpdateDialogProps extends ComponentProps<"div"> {
  teamData: TeamFormSchemaType;
  onUpdateSubmitClick: (data: TeamFormSchemaType) => void;
}

export default function TeamUpdateDialog(props: TeamUpdateDialogProps) {
  const { register, handleSubmit, errors, isDirty, reset } = useTeamForm(
    props.teamData,
  );

  const formData = (data: TeamFormSchemaType) => {
    isDirty && props.onUpdateSubmitClick(data);
  };

  return (
    <Fragment>
      <FormDialog<TeamFormSchemaType>
        title="課の編集"
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
