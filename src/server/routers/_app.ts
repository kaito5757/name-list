/**
 * tRPCバックエンドのルート ルーターが含まれる
 */

import { publicProcedure, router } from "../trpc";
import { userRouter } from "./user";
import { departmentRouter } from "./department";
import { teamRouter } from "./team";

export const appRouter = router({
  healthcheck: publicProcedure.query(() => "yay!"),
  user: userRouter,
  department: departmentRouter,
  team: teamRouter,
});

export type AppRouter = typeof appRouter;
