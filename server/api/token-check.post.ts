import { defineEventHandler } from 'h3';

/* ---------------------------------------------------------------------------------------------- */

export default defineEventHandler(async (event) => {
   /*
    * Desc: Check incoming authentication token
    */

   const authTokenString = getHeader(event, 'Authorization');

   if (!authTokenString) {
      return createError({
         status: 401,
         message: 'Unauthorized',
      });
   }

   const authToken = authTokenString.split(' ')[1];

   if (!authToken) {
      return createError({
         status: 401,
         message: 'Unauthorized',
      });
   }

   return {
      data: 'hello world!',
   };
});
