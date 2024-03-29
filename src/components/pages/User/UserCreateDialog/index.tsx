import { useUserForm } from "@/components/hooks/useUserForm";
import FormDialog from "@/components/parts/FormDialog";
import { UserFormSchemaType } from "@/components/schema/userFormSchema";
import { fileReader } from "@/utils/file";
import { mainImageCss } from "@/utils/styles";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ChangeEvent, ComponentProps, Fragment, useState } from "react";
import Image from "next/image"

interface UserCreateDialogProps extends ComponentProps<"div"> {
  departmentList: Map<number, string>;
  teamList: Map<number, string>;
  createUserData: (data: UserFormSchemaType) => void;
}

export default function UserCreateDialog(props: UserCreateDialogProps) {
  const { register, handleSubmit, errors, reset } = useUserForm();
  const [imageData, setImageData] = useState<string | undefined>(undefined);

  const onChangeForImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.files && fileReader(e.target.files, setImageData);
  };

  const resetForm = () => {
    setImageData(undefined);
    return reset();
  };

  const formData = (data: UserFormSchemaType) => {
    props.createUserData(data);
  };

  return (
    <Fragment>
      <FormDialog<UserFormSchemaType>
        dialogTriggerType={{ type: "button", text: "社員を追加する" }}
        title="社員の追加"
        channelButtonText="閉じる"
        submitButtonText="追加"
        handleSubmit={handleSubmit}
        reset={resetForm}
        formData={formData}
      >
        {imageData && (
          <Image
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
            defaultValue={0}
            {...register("department_id")}
          >
            <MenuItem value={0}>未選択</MenuItem>
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
            defaultValue={0}
            {...register("team_id")}
          >
            <MenuItem value={0}>未選択</MenuItem>
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
