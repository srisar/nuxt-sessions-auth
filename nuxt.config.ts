// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
   devtools: { enabled: true },
   modules: ['@nuxt/ui', '@pinia/nuxt'],

   colorMode: {
      preference: 'light',
   },

   runtimeConfig: {
      // eslint-disable-next-line node/prefer-global/process
      sessionSecret: process.env.NUXT_SESSION_SECRET, // get it from .env file -> NUXT_SESSION_SECRET
      public: {
         baseURL: '/',
      },
   },

});
