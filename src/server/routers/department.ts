import { router, publicProcedure } from "@/server/trpc";
import { prisma } from "@/server/prisma";
import { z } from "zod";

export const departmentRouter = router({
  findDepartmentAll: publicProcedure.query(async () => {
    return await prisma.department.findMany();
  }),
  findDepartment: publicProcedure
    .input(
      z.object({
        department_id: z.number(),
      }),
    )
    .query(async ({ input }) => {
      return await prisma.department.findUnique({
        where: {
          id: input.department_id,
        },
      });
    }),
  createDepartment: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return await prisma.department.create({
        data: {
          name: input.name,
        },
      });
    }),
  updateDepartment: publicProcedure
    .input(
      z.object({
        department_id: z.number(),
        name: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return await prisma.department.update({
        where: {
          id: input.department_id,
        },
        data: {
          name: input.name,
        },
      });
    }),
  deleteDepartment: publicProcedure
    .input(
      z.object({
        department_id: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      return await prisma.department.delete({
        where: {
          id: input.department_id,
        },
      });
    }),
});
