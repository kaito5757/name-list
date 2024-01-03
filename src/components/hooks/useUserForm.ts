import { useForm } from "react-hook-form";
import { UserFormSchemaType, userFormSchema } from "../schema/userFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";


export const useUserForm = (data?: UserFormSchemaType) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    control,
  } = useForm<UserFormSchemaType>({
    resolver: zodResolver(userFormSchema),
    mode: "onChange",
    defaultValues: {
      main_image: data?.main_image,
      full_name: data?.full_name,
      full_name_kana: data?.full_name_kana,
      department_id: data?.department_id,
      team_id: data?.team_id,
      official_position: data?.official_position,
      occupation: data?.occupation,
      mail_address: data?.mail_address,
      slack_name: data?.slack_name,
    }
  });

  return {
    register,
    handleSubmit,
    errors,
    isDirty,
    reset,
    control,
  };
};