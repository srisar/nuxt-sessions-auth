import { defineEventHandler } from 'h3';
import { z } from 'zod';
import { useSessionAuth } from '#imports';

/* ---------------------------------------------------------------------------------------------- */

export default defineEventHandler(async (event) => {
   /*
    * Desc: Clear session cookies and data
    */

   const session = await useSessionAuth(event);

   await session.clear();

   return 'Success';
});
