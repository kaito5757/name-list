import BasicDialog from "@/components/parts/BasicDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import { DialogContentText } from "@mui/material";

interface UserDeleteDialog {
  userName: string;
  onDeleteSubmitClick: () => void;
}

export default function UserDeleteDialog(props: UserDeleteDialog) {
  return (
    <BasicDialog
      dialogTriggerType={{ type: "icon", icon: DeleteIcon }}
      title="部署の削除"
      channelButtonText="閉じる"
      submitButtonText="削除する"
      onSubmitClick={props.onDeleteSubmitClick}
    >
      <DialogContentText>
        「{props.userName}」を削除してもよろしいでしょうか？
      </DialogContentText>
    </BasicDialog>
  );
}
