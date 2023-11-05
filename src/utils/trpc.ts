import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { NextPageContext } from "next";

import type { AppRouter } from "@/server/routers/_app";
import { transformer } from "./transformer";

function getBaseUrl() {
  if (typeof window !== "undefined") {
    return "";
  }

  // vercel.comのリファレンス
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // render.comのリファレンス
  if (process.env.RENDER_INTERNAL_HOSTNAME) {
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
  }

  // ローカルホスト
  return `http://127.0.0.1:${process.env.PORT ?? 3000}`;
}

/**
 * サーバーサイドのレンダリング時に `responseMeta()` によって取得できるメタデータで `NextPageContext` を拡張
 */
export interface SSRContext extends NextPageContext {
  /**
   * HTTPステータスコードを設定
   * @example
   * const utils = trpc.useUtils();
   * if (utils.ssrContext) {
   * utils.ssrContext.status = 404;
   * }
   */
  status?: number;
}

/**
 * `createReactQueryHooks`を使用した`AppRouter`型シグネチャからの、厳密に型指定されたReactフックのセット
 * @link https://trpc.io/docs/react#3-create-trpc-hooks
 */
export const trpc = createTRPCNext<AppRouter, SSRContext>({
  config({ ctx }) {
    /**
     ※ SSRを使用する場合はサーバーのフルURLを使用する必要がある
     * @link https://trpc.io/docs/ssr
     */
    return {
      /**
       * @link https://trpc.io/docs/data-transformers
       */
      transformer,
      /**
       * @link https://trpc.io/docs/client/links
       */
      links: [
        // 開発時にはコンソールにログを追加し、本番環境ではエラーを記録
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          /**
           * tRPCからのすべてのリクエストに、カスタムリクエストヘッダーを設定
           * @link https://trpc.io/docs/ssr
           */
          headers() {
            if (!ctx?.req?.headers) {
              return {};
            }

            // SSRを適切に使用するには、クライアントのヘッダーをサーバーに転送する必要
            // →サーバー側でレンダリングするときにCookieなどを通過できるようにするため
            const {
              // 18.15.0より前のNode18を使用している場合は、「connection」ヘッダーを省略する
              connection: _connection,
              ...headers
            } = ctx.req.headers;
            return headers;
          },
        }),
      ],
      /**
       * @link https://tanstack.com/query/v4/docs/react/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
  /**
   * SSR実行時のヘッダーまたはステータスコードを設定
   */
  responseMeta(opts) {
    const ctx = opts.ctx as SSRContext;
    if (ctx.status) {
      // HTTP ステータスが設定されている場合は、それを伝播
      return {
        status: ctx.status,
      };
    }

    const error = opts.clientErrors[0];
    if (error) {
      return {
        // API 呼び出しから http の最初のエラーを伝播
        status: error.data?.httpStatus ?? 500,
      };
    }

    // SSRを使用したアプリのキャッシュについては、「https://trpc.io/docs/caching」を参照
    return {};
  },
});

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
