import {
  teamFormSchema,
  TeamFormSchemaType,
} from "@/components/schema/teamFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useTeamForm = (data?: TeamFormSchemaType) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<TeamFormSchemaType>({
    resolver: zodResolver(teamFormSchema),
    mode: "onChange",
    defaultValues: {
      name: data?.name,
    },
    values: data,
  });

  return {
    register,
    handleSubmit,
    errors,
    isDirty,
    reset,
  };
};
