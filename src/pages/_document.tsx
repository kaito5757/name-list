import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head prefix="og: http://ogp.me/ns#">
        <title>NAME-LIST</title>
        <meta name="description" content="NAME-LISTは、社員情報を閲覧するためのサイトです。" />
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48 62x62" type="image/vnd.microsoft.icon" />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NAME-LIST" />
        <meta property="og:description" content="NAME-LISTは、社員情報を閲覧するためのサイトです。" />
        <meta property="og:site_name" content="NAME-LIST" />
        <meta property="og:image" content="https://name-list.vercel.app/name-list.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
