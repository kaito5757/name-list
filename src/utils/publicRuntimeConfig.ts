/**
 * `next.config.js` から設定されたブラウザーとサーバーで使用可能な動的構成。
 * 注: `_app.tsx` の `ssr: true` または `getInitialProps` が必要です
 * @link https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
 */
import type * as config from "../../next.config";
import getConfig from "next/config";

/**
 * `next.config.js` の `publicRuntime` から推論された型
 */
type PublicRuntimeConfig = typeof config.publicRuntimeConfig;

const nextConfig = getConfig();

export const publicRuntimeConfig =
  nextConfig.publicRuntimeConfig as PublicRuntimeConfig;
