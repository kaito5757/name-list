import BasicDialog from "@/components/parts/BasicDialog";
import { TeamFormSchemaType } from "@/components/schema/teamFormSchema";
import DeleteIcon from "@mui/icons-material/Delete";
import { DialogContentText } from "@mui/material";
import { ComponentPropsWithoutRef } from "react";

interface TeamDeleteDialogProps extends ComponentPropsWithoutRef<"div"> {
  teamData: TeamFormSchemaType;
  onDeleteSubmitClick: () => void;
}

export default function TeamDeleteDialog(props: TeamDeleteDialogProps) {
  return (
    <BasicDialog
      dialogTriggerType={{ type: "icon", icon: DeleteIcon }}
      title="課の削除"
      channelButtonText="閉じる"
      submitButtonText="削除する"
      onSubmitClick={props.onDeleteSubmitClick}
    >
      <DialogContentText>
        「{props.teamData.name}」を削除してもよろしいでしょうか？
      </DialogContentText>
    </BasicDialog>
  );
}
