import { z } from "zod";

export const teamFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "チーム（課）を入力してください。" })
    .max(20, { message: "20文字以下で入力してください。" }),
});

export type TeamFormSchemaType = z.infer<typeof teamFormSchema>;
