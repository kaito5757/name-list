import { router, publicProcedure } from "@/server/trpc";
import { prisma } from "@/server/prisma";
import { z } from "zod";

const teamObj = z.object({
  id: z.number(),
  name: z.optional(z.string()),
  order: z.optional(z.number()),
});

export const teamRouter = router({
  getAllTeams: publicProcedure.query(async () => {
    return await getTeamsAsc();
  }),
  getTeamById: publicProcedure.input(teamObj).query(async ({ input }) => {
    return await prisma.team.findUnique({
      where: {
        id: input.id,
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
          order: await prisma.team.count(),
        },
      });
    }),
  updateTeamById: publicProcedure.input(teamObj).mutation(async ({ input }) => {
    return await prisma.team.update({
      where: {
        id: input.id,
      },
      data: {
        name: input.name,
        order: input.order,
      },
    });
  }),
  updateTeamsOrder: publicProcedure
    .input(teamObj.array())
    .mutation(async ({ input }) => {
      return await updateOrder(input);
    }),
  deleteTeamById: publicProcedure.input(teamObj).mutation(async ({ input }) => {
    await prisma.team.delete({
      where: {
        id: input.id,
      },
    });
    const teams = await getTeamsAsc();
    await updateOrder(teams);
  }),
});

const getTeamsAsc = async () => {
  return await prisma.team.findMany({
    orderBy: [
      {
        order: "asc",
      },
    ],
  });
};

const updateOrder = async (input: z.infer<typeof teamObj>[]) => {
  const dataList = input.map((team, index) => {
    return {
      where: {
        id: team.id,
      },
      data: {
        order: index,
      },
    };
  });
  return await prisma.$transaction(
    dataList.map((data) => prisma.team.update(data)),
  );
};
