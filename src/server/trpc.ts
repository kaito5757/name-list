/**
 * これは、サーバー上で tRPC のルート構成をセットアップするためのエントリ ポイントです。
 * - `initTRPC` はアプリごとに 1 回のみ使用する必要があります。
 * - どの基本プロシージャを使用するかを強制できるように、使用する機能のみをエクスポートします。
 *
 * 保護されたベース プロシージャおよびその他の作成方法については、以下をご覧ください。
 * @https://trpc.io/docs/v10/router を参照
 * @https://trpc.io/docs/v10/procedures を参照
 */

import { initTRPC } from "@trpc/server";
import { transformer } from "../utils/transformer";
import type { Context } from "./context";

const t = initTRPC.context<Context>().create({
  transformer,
  errorFormatter({ shape }) {
    return shape;
  },
});

/**
 * ルーターを作成
 * @see https://trpc.io/docs/v10/router
 */
export const router = t.router;

/**
 * 保護されていないプロシージャを作成
 * @see https://trpc.io/docs/v10/procedures
 */
export const publicProcedure = t.procedure;

/**
 * @see https://trpc.io/docs/v10/middlewares
 */
export const middleware = t.middleware;

/**
 * @see https://trpc.io/docs/v10/merging-routers
 */
export const mergeRouters = t.mergeRouters;
