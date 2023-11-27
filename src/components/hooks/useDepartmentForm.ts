import {
  departmentFormSchema,
  DepartmentFormSchemaType,
} from "@/components/schema/departmentFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useDepartmentForm = (data?: DepartmentFormSchemaType) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<DepartmentFormSchemaType>({
    resolver: zodResolver(departmentFormSchema),
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
