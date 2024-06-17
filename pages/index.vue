<script setup lang="ts">
import { storeToRefs } from 'pinia';

/* ---------------------------------------------------------------------------------------------- */

const authStore = useAuthStore();
const { isAuthenticated, accessToken } = storeToRefs(authStore);

/* ---------------------------------------------------------------------------------------------- */

const authHeader = computed(() => {
   return `Bearer ${accessToken.value}`;
});

const { data, execute, error } = await useFetch('/api/token-check', {
   method: 'POST',
   headers: {
      Authorization: authHeader,
   },
   immediate: false,
   watch: false,

   onResponseError({ response }) {
      console.log(response.status);
      if (response.status === 401) {
         navigateTo('/login');
      }
   },

});

async function handleDummyRequest() {
   console.log('accessToken: ', accessToken.value);

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

      <p class="">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid deleniti dolores ea
         eaque, maxime, nam odit pariatur, possimus quae quasi quidem repellat repellendus? Dolor
         dolorem est facere vel. Libero.
      </p>

      <div>{{ accessToken }}</div>

      <template v-if="isAuthenticated">
         <p>Your access token is {{ accessToken }}</p>
      </template>

      <div class="flex w-full items-center justify-center">
         <UButton label="Dummy request from here" @click="handleDummyRequest()" />
      </div>

      <div>
         <pre>{{ data }}</pre>
         <pre>{{ error }}</pre>
      </div>
   </main>
</template>

<style scoped>

</style>
