// @/src/server/context.ts
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

interface CreateContextOptions {
  // session: Session | null
}

/**
 * コンテキストを作成する `createContext` の内部関数。
 * これは、Next.js のリクエスト/レスポンスをモックしたくない場合のテストに役立ちます
 */
export async function createContextInner(_opts: CreateContextOptions) {
  return {};
}
export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;

/**
 * 受信リクエストのコンテキストを作成
 * @link https://trpc.io/docs/context
 */
export async function createContext(
  opts: trpcNext.CreateNextContextOptions,
): Promise<Context> {
  // API応答のキャッシュについては、「https://trpc.io/docs/caching」を参照

  return await createContextInner({});
}
