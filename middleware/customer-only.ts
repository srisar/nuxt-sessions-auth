import { navigateTo } from '#app';

export default defineNuxtRouteMiddleware(async () => {
   if (import.meta.server)
      return;

   const authStore = useAuthStore();

   if (!await authStore.isCustomer()) {
      return navigateTo('/login');
   }
});
