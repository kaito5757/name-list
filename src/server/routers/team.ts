import { router, publicProcedure } from "@/server/trpc";
import { prisma } from "@/server/prisma";
import { z } from "zod";

export const teamRouter = router({
  findTeamAll: publicProcedure.query(async () => {
    return await prisma.team.findMany();
  }),
  findTeam: publicProcedure
    .input(
      z.object({
        team_id: z.number(),
      }),
    )
    .query(async ({ input }) => {
      return await prisma.team.findUnique({
        where: {
          id: input.team_id,
        },
      });
    }),
  createTeam: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return await prisma.team.create({
        data: {
          name: input.name,
        },
      });
    }),
  updateTeam: publicProcedure
    .input(
      z.object({
        team_id: z.number(),
        name: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return await prisma.team.update({
        where: {
          id: input.team_id,
        },
        data: {
          name: input.name,
        },
      });
    }),
  deleteTeam: publicProcedure
    .input(
      z.object({
        team_id: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      return await prisma.team.delete({
        where: {
          id: input.team_id,
        },
      });
    }),
});
