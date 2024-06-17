import { defineStore } from 'pinia';
import type { SessionUser } from '~/types/auth-types';

export const useAuthStore = defineStore(
   'auth',
   () => {
      const user = useCookie<SessionUser | undefined>('session-user');

      const accessToken = useCookie<string>('access-token');

      const isAuthenticated = computed(() => {
         return user.value !== undefined;
      });

      /* ------------------------------------------------------------------------------------------- */

      /**
       * Get the user from session
       */
      const getSessionUser = async () => {
         try {
            return await $fetch<SessionUser>('/api/session');
         }
         catch (e) {
         }
         return null;
      };

      /**
       * Handle login event, on success, it will set user details in client side cookie
       */
      const login = async (formFields: { email: string; password: string }) => {
         await $fetch<SessionUser>('/api/auth/login', {
            method: 'POST',
            body: formFields,
         });

         const sessionUser = await getSessionUser();

         if (sessionUser) {
            user.value = {
               fullName: sessionUser.fullName,
               email: sessionUser.email,
               role: sessionUser.role,
            };

            accessToken.value = sessionUser.token || '';
         }
      };

      const logout = async () => {
         try {
            await $fetch('/api/auth/logout', {
               method: 'POST',
            });

            user.value = undefined;
            accessToken.value = '';
         }
         catch (e) {
            console.log(e);
         }
      };

      const isAdmin = async () => {
         const sessionUser = await getSessionUser();
         if (sessionUser) {
            return sessionUser.role === 'ADMIN';
         }
         return false;
      };

      const isCustomer = async () => {
         const sessionUser = await getSessionUser();
         if (sessionUser) {
            return sessionUser.role === 'CUSTOMER';
         }
         return false;
      };

      return {
         user,
         accessToken,
         isAuthenticated,
         isAdmin,
         isCustomer,
         login,
         logout,
      };
   },
   {},
);
