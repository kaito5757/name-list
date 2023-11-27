import { z } from "zod";

export const departmentFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "名前を入力してください" })
    .max(20, { message: "20文字以下で入力してください" }),
});

export type DepartmentFormSchemaType = z.infer<typeof departmentFormSchema>;
