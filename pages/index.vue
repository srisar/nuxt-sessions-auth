<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useApiFetch } from '~/composables/use-api-fetch';

/* ---------------------------------------------------------------------------------------------- */

const authStore = useAuthStore();
const { isAuthenticated, accessToken } = storeToRefs(authStore);

/* ---------------------------------------------------------------------------------------------- */

const { data, execute, error } = await useApiFetch('/api/token-check', {
   method: 'POST',
});

async function handleDummyRequest() {
   await execute();
}
</script>

<template>
   <main>
      <header class="mb-5">
         <h1 class="text-center text-3xl font-bold">
            Welcome to Nuxt Session Authentication Example
         </h1>
      </header>

      <p class="mb-5 text-center">
         This index page is not protected. It has a dummy api fetch call, which will only work, if
         there is a valid auth. Otherwise, it will automatically redirect to login page.
      </p>

      <template v-if="isAuthenticated">
         <div class="bg-green-200 p-2 rounded-xl text-center mx-auto max-w-xl mb-5 break-all">
            <p>Your access token is </p>
            <code>
               {{ accessToken }}
            </code>
         </div>
      </template>

      <div class="flex w-full items-center justify-center mb-5">
         <UButton color="green" label="Make an api request" @click="handleDummyRequest()" />
      </div>

      <div class="max-w-xl bg-amber-50 p-5 mx-auto">
         <pre>{{ data }}</pre>
         <pre>{{ error }}</pre>
      </div>
   </main>
</template>

<style scoped>

</style>
