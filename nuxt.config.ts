// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
   devtools: { enabled: true },
   modules: ['@nuxt/ui', '@pinia/nuxt'],

   runtimeConfig: {
      sessionSecret: 'M5rs/Dipt/TKb5gPRZAOvuaJeeFw8Fb5CYnvFVs6H2WQNadQ1RQB0Q6wpDmy2PBjOjBRkN0TjE33xMO3C3/Bsw==', // get it from .env file -> NUXT_SESSION_SECRET
      public: {
         baseURL: '/',
      },
   },

});
