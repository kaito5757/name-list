import { prisma } from "@/server/prisma";
import { publicProcedure, router } from "@/server/trpc";
import { z } from "zod";

export const userRouter = router({
  findUserAll: publicProcedure.query(async () => {
    return await prisma.user.findMany({
      include: {
        departments: true,
        teams: true,
      },
      orderBy: [
        {
          id: "asc",
        },
      ],
    });
  }),
  createUser: publicProcedure
    .input(
      z.object({
        main_image_url: z.string(),
        full_name: z.string(),
        full_name_kana: z.string(),
        department_id: z.number(),
        team_id: z.number(),
        official_position: z.string(),
        occupation: z.string(),
        mail_address: z.string(),
        slack_name: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return await prisma.user.create({
        data: {
          main_image_url: input.main_image_url,
          full_name: input.full_name,
          full_name_kana: input.full_name_kana,
          departments: {
            create: [
              {
                assigned_by: "admin",
                department: {
                  connect: {
                    id: input.department_id,
                  },
                },
              },
            ],
          },
          teams: {
            create: [
              {
                assigned_by: "admin",
                team: {
                  connect: {
                    id: input.team_id,
                  },
                },
              },
            ],
          },
          official_position: input.official_position,
          occupation: input.occupation,
          mail_address: input.mail_address,
          slack_name: input.slack_name,
        },
      });
    }),
  updateUser: publicProcedure
    .input(
      z.object({
        user_id: z.number(),
        main_image_url: z.string(),
        full_name: z.string(),
        full_name_kana: z.string(),
        new_department_id: z.number(),
        old_department_id: z.number(),
        new_team_id: z.number(),
        old_team_id: z.number(),
        official_position: z.string(),
        occupation: z.string(),
        mail_address: z.string(),
        slack_name: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return await prisma.user.update({
        where: { id: input.user_id },
        data: {
          main_image_url: input.main_image_url,
          full_name: input.full_name,
          full_name_kana: input.full_name_kana,
          departments: {
            update: [
              {
                where: {
                  user_id_department_id: {
                    user_id: input.user_id,
                    department_id: input.old_department_id,
                  },
                },
                data: {
                  department_id: input.new_department_id,
                },
              },
            ],
          },
          teams: {
            update: [
              {
                where: {
                  user_id_team_id: {
                    user_id: input.user_id,
                    team_id: input.old_team_id,
                  },
                },
                data: {
                  team_id: input.new_team_id,
                },
              },
            ],
          },
          official_position: input.official_position,
          occupation: input.occupation,
          mail_address: input.mail_address,
          slack_name: input.slack_name,
        },
      });
    }),
  deleteUser: publicProcedure
    .input(
      z.object({
        user_id: z.number(),
        department_id_ary: z.number().array(),
        team_id_ary: z.number().array(),
      }),
    )
    .mutation(async ({ input }) => {
      const arg: any[] = [];

      input.department_id_ary.map((departId) =>
        arg.push(
          prisma.departmentsOnUsers.delete({
            where: {
              user_id_department_id: {
                user_id: input.user_id,
                department_id: departId,
              },
            },
          }),
        ),
      );

      input.team_id_ary.map((teamId) =>
        arg.push(
          prisma.teamsOnUsers.delete({
            where: {
              user_id_team_id: {
                user_id: input.user_id,
                team_id: teamId,
              },
            },
          }),
        ),
      );

      arg.push(
        prisma.user.delete({
          where: { id: input.user_id },
        }),
      );
      await prisma.$transaction(arg);
    }),
});
