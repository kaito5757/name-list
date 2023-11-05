// @ts-check
/**
 * 無効な環境変数を使用してアプリが構成されないようにする（next.config.jsに含まれている）
 * ※ インポートするために、.jsファイルで作成する必要がある。
 */

const { z } = require("zod");

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]),
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error("無効な環境変数", JSON.stringify(env.error.format(), null, 4));
  process.exit(1);
}
module.exports.env = env.data;
