import * as trpcNext from "@trpc/server/adapters/next";
import { createContext } from "@/server/context";
import { appRouter } from "@/server/routers/_app";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError: (data) => {
    if (data.error.code === "INTERNAL_SERVER_ERROR") {
      // send to bug reporting
      console.error("Something went wrong", data.error);
    }
  },
  batching: {
    enabled: true,
  },
});
