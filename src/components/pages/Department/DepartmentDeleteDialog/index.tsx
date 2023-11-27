import BasicDialog from "@/components/parts/BasicDialog";
import { DepartmentFormSchemaType } from "@/components/schema/departmentFormSchema";
import DeleteIcon from "@mui/icons-material/Delete";
import { DialogContentText } from "@mui/material";

interface DepartmentDeleteDialogProps
  extends React.ComponentPropsWithoutRef<"div"> {
  departmentData: DepartmentFormSchemaType;
  onDeleteSubmitClick: () => void;
}

export default function DepartmentDeleteDialog(
  props: DepartmentDeleteDialogProps,
) {
  return (
    <BasicDialog
      dialogTriggerType={{ type: "icon", icon: DeleteIcon }}
      title="部署の削除"
      channelButtonText="閉じる"
      submitButtonText="削除する"
      onSubmitClick={props.onDeleteSubmitClick}
    >
      <DialogContentText>
        「{props.departmentData.name}」を削除してもよろしいでしょうか？
      </DialogContentText>
    </BasicDialog>
  );
}
