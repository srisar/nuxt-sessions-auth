import { defineEventHandler } from 'h3';
import { useSessionAuth } from '~/server/utils/session';

/* ---------------------------------------------------------------------------------------------- */

export default defineEventHandler(async (event) => {
   /*
    * Desc: Return session's user data
    */

   const session = await useSessionAuth(event);

   const user = session.data.user;

   if (user) {
      return user;
   }

   return createError({
      message: 'Unauthorized',
      status: 401,
   });
});
