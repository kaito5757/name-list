import BasicDialog from "@/components/parts/BasicDialog";
import { User } from "@/types";
import { mainImageCss } from "@/utils/styles";
import { getMainImageUrl } from "@/utils/supabase/storage";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import { TextField } from "@mui/material";

interface UserViewDialogProps {
  userData: User;
  departmentList: Map<number, string>;
  teamList: Map<number, string>;
}

export default function UserViewDialog(props: UserViewDialogProps) {
  const department = props.userData.departments[0];
  const team = props.userData.teams[0];

  return (
    <BasicDialog
      dialogTriggerType={{ type: "icon", icon: SettingsAccessibilityIcon }}
      title={props.userData.full_name}
      channelButtonText="閉じる"
    >
      <img
        css={mainImageCss}
        width={160}
        height={160}
        src={getMainImageUrl(props.userData.main_image_url, props.userData.updated_at.toISOString())}
        alt="main-image"
      />
      <TextField
        disabled
        margin="normal"
        label="名前"
        type="text"
        fullWidth
        variant="standard"
        defaultValue={props.userData.full_name}
      />
      <TextField
        disabled
        margin="normal"
        label="名前（カナ）"
        type="text"
        fullWidth
        variant="standard"
        defaultValue={props.userData.full_name_kana}
      />
      <TextField
        disabled
        margin="normal"
        label="部署"
        type="text"
        fullWidth
        variant="standard"
        defaultValue={props.departmentList.get(department.department_id)}
      />
      <TextField
        disabled
        margin="normal"
        label="課"
        type="text"
        fullWidth
        variant="standard"
        defaultValue={props.teamList.get(team.team_id)}
      />
      <TextField
        disabled
        margin="normal"
        label="役職"
        type="text"
        fullWidth
        variant="standard"
        defaultValue={props.userData.official_position}
      />
      <TextField
        disabled
        margin="normal"
        label="職種"
        type="text"
        fullWidth
        variant="standard"
        defaultValue={props.userData.occupation}
      />
      <TextField
        disabled
        margin="normal"
        label="メールアドレス"
        type="text"
        fullWidth
        variant="standard"
        defaultValue={props.userData.mail_address}
      />
      <TextField
        disabled
        margin="normal"
        label="スラック名"
        type="text"
        fullWidth
        variant="standard"
        defaultValue={props.userData.slack_name}
      />
    </BasicDialog>
  );
}
