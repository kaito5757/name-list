import { z } from "zod";

const IMAGE_TYPES = ['image/jpeg', 'image/png'];

export const userFormSchema = z.object({
  main_image: z
    .custom<FileList>()
    .refine(file => file.length != 0, { message: "画像は必須です。"})
    .transform((file) => file[0])
    .refine(file => file?.size < 500000 , { message: 'ファイルサイズは最大5MBです。' })
    .refine(file => IMAGE_TYPES.includes(file?.type),{ message: "拡張子が「jpg、png」の画像を選択してください。" }),
  full_name: z
    .string()
    .max(20, { message: "20文字以下で入力してください。"})
    .refine(value => value.trim().length > 0, { message: "名前は必須です。"}),
  full_name_kana: z
    .string()
    .max(30, { message: "30文字以下で入力してください。"})
    .refine(value => value.trim().length > 0, { message: "名前（カナ）は必須です。"}),
  department_id: z
    .custom<number | string>() // numberだと初期状態で送信するstring型が返ってきてtypeエラーになる。
    .refine(value => value != 0, { message: "部署は必須です。"}),
  team_id: z
    .custom<number | string>()
    .refine(value => value != 0, { message: "課は必須です。"}),
  official_position: z
    .string()
    .max(20, { message: "20文字以下で入力してください。"})
    .refine(value => value.trim().length > 0, { message: "役職は必須です。"}),
  occupation: z
    .string()
    .max(20, { message: "20文字以下で入力してください。"})
    .refine(value => value.trim().length > 0, { message: "職種は必須です。"}),
  mail_address: z
    .string()
    .max(50, { message: "50文字以下で入力してください。"})
    .refine(value => value.trim().length > 0, { message: "メールアドレスは必須です。"})
    .refine(value => 
      (/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/).test(value),
      { message: "正しい形式で入力してください。"}
    ),
  slack_name: z
    .string()
    .max(30, { message: "30文字以下で入力してください。"})
    .refine(value => value.trim().length > 0, { message: "スラック名は必須です。"}),
});

export type UserFormSchemaType = z.infer<typeof userFormSchema>;