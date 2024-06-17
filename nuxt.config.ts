// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
   devtools: { enabled: true },
   modules: ['@nuxt/ui', '@pinia/nuxt'],

   runtimeConfig: {
      sessionSecret: '', // get it from .env file -> NUXT_SESSION_SECRET
      public: {
         baseURL: '/',
      },
   },

});
