import Head from "next/head";

interface MetaProps {
  title: string;
  url: string;
}

export default function Meta(props: MetaProps) {
  return (
    <Head>
      <title>{ props.title } | NAME-LIST</title>
      <meta name="description" content="NAME-LISTは、社員情報を閲覧するためのサイトです。" />
      <meta property="og:url" content={ props.url } />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ props.title } />
      <meta property="og:description" content="NAME-LISTは、社員情報を閲覧するためのサイトです。" />
      <meta property="og:site_name" content={ props.title + "| NAME-LIST" }  />
      <meta property="og:image" content="https://name-list.vercel.app/name-list.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}