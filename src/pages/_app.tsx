import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { trpc } from "../utils/trpc";
import GlobalLayout from "@/components/parts/common/GlobalLayout";
import TransitionProgress from "@/components/parts/common/TransitionProgress";

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <TransitionProgress />
      <Component {...pageProps} />
    </GlobalLayout>
  );
}

export default trpc.withTRPC(App);
