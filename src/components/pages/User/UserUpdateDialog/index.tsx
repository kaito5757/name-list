import { useUserForm } from "@/components/hooks/useUserForm";
import FormDialog from "@/components/parts/FormDialog";
import { UserFormSchemaType } from "@/components/schema/userFormSchema";
import { User } from "@/types";
import { fileReader } from "@/utils/file";
import { mainImageCss } from "@/utils/styles";
import { getMainImageUrl } from "@/utils/supabase/storage";
import EditIcon from "@mui/icons-material/Edit";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ChangeEvent, ComponentProps, Fragment, useState } from "react";

interface UserUpdateDialogProps extends ComponentProps<"div"> {
  userData: User;
  departmentList: Map<number, string>;
  teamList: Map<number, string>;
  onUpdateSubmitClick: (data: UserFormSchemaType) => void;
}

export default function UserUpdateDialog(props: UserUpdateDialogProps) {
  // NOTE:現状では部署、課は、1つしか持たない想定のため、一覧の先頭を取得している。
  const department = props.userData.departments[0];
  const team = props.userData.teams[0];
  const userFormData: UserFormSchemaType = {
    main_image: new File([], "", { type: "image/png" }),
    full_name: props.userData.full_name,
    full_name_kana: props.userData.full_name_kana,
    department_id: department.department_id,
    team_id: team.team_id,
    official_position: props.userData.official_position,
    occupation: props.userData.occupation,
    mail_address: props.userData.mail_address,
    slack_name: props.userData.slack_name,
  };
  const mainImageUrl = getMainImageUrl(props.userData.main_image_url, props.userData.updated_at.toISOString());

  const { register, handleSubmit, errors, isDirty, reset } =
    useUserForm(userFormData);
  const [imageData, setImageData] = useState<string | undefined>(mainImageUrl);

  const onChangeForImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.files && fileReader(e.target.files, setImageData);
  };

  const resetForm = () => {
    setImageData(mainImageUrl);
    return reset();
  };

  const formData = (data: UserFormSchemaType) => {
    if (imageData !== mainImageUrl || isDirty) {
      props.onUpdateSubmitClick(data);
    }
  };

  return (
    <Fragment>
      <FormDialog<UserFormSchemaType>
        title="社員の編集"
        dialogTriggerType={{ type: "icon", icon: EditIcon }}
        channelButtonText="閉じる"
        submitButtonText="編集する"
        handleSubmit={handleSubmit}
        reset={resetForm}
        formData={formData}
      >
        {imageData && (
          <img
            css={mainImageCss}
            width={160}
            height={160}
            src={imageData}
            alt="main-image"
          />
        )}
        <TextField
          error={!!errors.main_image}
          helperText={errors.main_image?.message}
          margin="normal"
          label="プロフィール画像"
          type="file"
          fullWidth
          variant="standard"
          focused
          {...register("main_image")}
          onChange={onChangeForImage}
        />
        <TextField
          error={!!errors.full_name}
          helperText={errors.full_name?.message}
          autoFocus
          margin="normal"
          label="名前"
          type="text"
          fullWidth
          variant="standard"
          autoComplete="off"
          {...register("full_name")}
        />
        <TextField
          error={!!errors.full_name_kana}
          helperText={errors.full_name_kana?.message}
          margin="normal"
          label="名前（カナ）"
          type="text"
          fullWidth
          variant="standard"
          autoComplete="off"
          {...register("full_name_kana")}
        />
        <FormControl
          margin="normal"
          variant="standard"
          fullWidth
          error={!!errors.department_id}
        >
          <InputLabel id="department-select-label">部署</InputLabel>
          <Select
            labelId="department-select-label"
            defaultValue={department.department_id}
            {...register("department_id")}
          >
            {Array.from(props.departmentList).map(([id, value]) => (
              <MenuItem value={id} key={id}>
                {value}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.department_id?.message}</FormHelperText>
        </FormControl>
        <FormControl
          margin="normal"
          variant="standard"
          fullWidth
          error={!!errors.team_id}
        >
          <InputLabel id="team-select-label">課</InputLabel>
          <Select
            labelId="team-select-label"
            defaultValue={team.team_id}
            {...register("team_id")}
          >
            {Array.from(props.teamList).map(([id, value]) => (
              <MenuItem value={id} key={id}>
                {value}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.team_id?.message}</FormHelperText>
        </FormControl>
        <TextField
          error={!!errors.official_position}
          helperText={errors.official_position?.message}
          margin="normal"
          label="役職"
          type="text"
          fullWidth
          variant="standard"
          autoComplete="off"
          {...register("official_position")}
        />
        <TextField
          error={!!errors.occupation}
          helperText={errors.occupation?.message}
          margin="normal"
          label="職種"
          type="text"
          fullWidth
          variant="standard"
          autoComplete="off"
          {...register("occupation")}
        />
        <TextField
          error={!!errors.mail_address}
          helperText={errors.mail_address?.message}
          margin="normal"
          label="メールアドレス"
          type="text"
          fullWidth
          variant="standard"
          autoComplete="off"
          {...register("mail_address")}
        />
        <TextField
          error={!!errors.slack_name}
          helperText={errors.slack_name?.message}
          margin="normal"
          label="スラック名"
          type="text"
          fullWidth
          variant="standard"
          autoComplete="off"
          {...register("slack_name")}
        />
      </FormDialog>
    </Fragment>
  );
}
