import { router, publicProcedure } from "@/server/trpc";
import { prisma } from "@/server/prisma";
import { z } from "zod";

export const userRouter = router({
  findUserAll: publicProcedure.query(async () => {
    return await prisma.user.findMany({
      include: {
        departments: true,
        teams: true,
      }
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
        main_image_url: z.string().url(),
        full_name: z.string(),
        full_name_kana: z.string(),
        department_id: z.number(),
        team_id: z.number(),
        offcial_position: z.string(),
        occupation: z.string(),
        mail_address: z.string().email(),
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
          official_position: input.offcial_position,
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
      }),
    )
    .mutation(async ({ input }) => {
      return await prisma.user.delete({
        where: { id: input.user_id },
      });
    }),
});
