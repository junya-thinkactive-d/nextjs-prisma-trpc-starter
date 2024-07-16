import { z } from 'zod';

import { db } from './db';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
  getUsers: publicProcedure.query(async () => {
    return db.user.findMany();
  }),
  getUser: publicProcedure.input(z.string()).query(async ({ input }) => {
    const user = await db.user.findUnique({
      where: { auth_id: input },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }),
  updateUser: publicProcedure
    .input(z.object({ auth_id: z.string(), name: z.string() }))
    .mutation((req) => {
      return db.user.update({
        where: { auth_id: req.input.auth_id },
        data: { name: req.input.name },
      });
    }),
});
export type AppRouter = typeof appRouter;
