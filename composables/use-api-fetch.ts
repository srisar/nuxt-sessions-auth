import type { Ref } from 'vue';
import { storeToRefs } from 'pinia';
import type { UseFetchOptions } from '#app';

/**
 * Wrapper around useFetch() to automatically include auth-token and extra options
 */
export function useApiFetch<T>(url: string | Ref<string>, extraOptions: Partial<UseFetchOptions<T>>) {
   const authStore = useAuthStore();
   const { accessToken } = storeToRefs(authStore);

   const authHeader = computed(() => {
      return `Bearer ${accessToken.value}`;
   });

   const options: Partial<UseFetchOptions<T>> = {
      baseURL: useRuntimeConfig().app.baseURL,
      immediate: false,
      watch: false,
      headers: {
         Authorization: authHeader,
      },

      onResponseError({ response }) {
         if (response.status === 401) {
            navigateTo('/login');
         }
      },

   };

   return useFetch(url, { ...options, ...extraOptions });
}
