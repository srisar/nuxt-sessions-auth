import { navigateTo } from '#app';
import type { SessionUser } from '~/types/auth-types';

export default defineNuxtRouteMiddleware(async () => {
   if (import.meta.server)
      return;

   const authStore = useAuthStore();

   if (!await authStore.isAdmin()) {
      return navigateTo('/login');
   }
});
