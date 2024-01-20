import GlobalLayout from "@/components/parts/common/GlobalLayout";
import TransitionProgress from "@/components/parts/common/TransitionProgress";
import "@/styles/globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { AppProps } from "next/app";
import { trpc } from "../utils/trpc";

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <TransitionProgress />
      <Component {...pageProps} />
      <SpeedInsights />
    </GlobalLayout>
  );
}

export default trpc.withTRPC(App);
