import { z } from "zod";

export const departmentFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "部署を入力してください。" })
    .max(20, { message: "15文字以下で入力してください。" }),
});

export type DepartmentFormSchemaType = z.infer<typeof departmentFormSchema>;
