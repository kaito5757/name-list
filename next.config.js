// @ts-check
const { env } = require("./src/server/env");

/**
 * こちらを使用すると、オートコンプリートが提供される
 * @template {import('next').NextConfig} T
 * @param { T } config
 * @constraint {{import('next').NextConfig}}
 */
function getConfig(config) {
  return config;
}

const nextConfig = getConfig({
  /**
   * アプリケーション内の潜在的な問題を強調表示するための開発モード専用の機能（推奨）
   * @link https://nextjs.org/docs/pages/api-reference/next-config-js/reactStrictMode
   */
  reactStrictMode: true,
  /**
   * ランタイム構成
   * @link https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
   */
  publicRuntimeConfig: {
    NODE_ENV: env.NODE_ENV,
  },
  compiler: {
    /**
     * emotionのコンパイラ設定
     * https://nextjs.org/docs/architecture/nextjs-compiler#emotion
     */
    emotion: true,
  },
  /**
   * @link https://nextjs.org/docs/pages/api-reference/next-config-js/eslint
   */
  eslint: { ignoreDuringBuilds: !!process.env.CI },
});

module.exports = nextConfig;
