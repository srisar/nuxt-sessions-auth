import { defineEventHandler } from 'h3';
import { z } from 'zod';
import { useSessionAuth } from '~/server/utils/session';
import { findUser } from '~/server/utils/users-db';

/* ---------------------------------------------------------------------------------------------- */

const requestBodySchema = z.object({
   email: z.string().email(),
   password: z.string(),
});

/* ---------------------------------------------------------------------------------------------- */

/**
 * Event handler for login
 */
export default defineEventHandler(async (event) => {
   const body = await readValidatedBody(event, body => requestBodySchema.parse(body));

   const foundUser = findUser(body.email, body.password);

   console.log(foundUser);

   if (!foundUser) {
      return createError({
         status: 401,
         message: 'Invalid credentials',
      });
   }

   const session = await useSessionAuth(event);

   await session.update({
      user: {
         fullName: foundUser.fullName,
         email: foundUser.email,
         role: foundUser.role,
      },
   });

   return 'Success';
});
