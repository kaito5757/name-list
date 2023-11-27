import { router, publicProcedure } from "@/server/trpc";
import { prisma } from "@/server/prisma";
import { z } from "zod";

const departmentObj = z.object({
  id: z.number(),
  name: z.optional(z.string()),
  order: z.optional(z.number()),
});

export const departmentRouter = router({
  getAllDepartments: publicProcedure.query(async () => {
    return await getDepartmentsAsc();
  }),
  getDepartmentById: publicProcedure
    .input(departmentObj)
    .query(async ({ input }) => {
      return await prisma.department.findUnique({
        where: {
          id: input.id,
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
          order: await prisma.department.count(),
        },
      });
    }),
  updateDepartmentById: publicProcedure
    .input(departmentObj)
    .mutation(async ({ input }) => {
      return await prisma.department.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          order: input.order,
        },
      });
    }),
  updateDepartmentsOrder: publicProcedure
    .input(departmentObj.array())
    .mutation(async ({ input }) => {
      return await updateOrder(input);
    }),
  deleteDepartmentById: publicProcedure
    .input(departmentObj)
    .mutation(async ({ input }) => {
      await prisma.department.delete({
        where: {
          id: input.id,
        },
      });
      const departments = await getDepartmentsAsc();
      await updateOrder(departments);
    }),
});

const getDepartmentsAsc = async () => {
  return await prisma.department.findMany({
    orderBy: [
      {
        order: "asc",
      },
    ],
  });
};

const updateOrder = async (input: z.infer<typeof departmentObj>[]) => {
  const dataList = input.map((dept, index) => {
    return {
      where: {
        id: dept.id,
      },
      data: {
        order: index,
      },
    };
  });
  return await prisma.$transaction(
    dataList.map((data) => prisma.department.update(data)),
  );
};
