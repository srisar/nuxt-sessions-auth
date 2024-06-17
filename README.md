# Nuxt3 Simple Session Based Auth and Role Management

This simple repo demonstrates how to implement your own session based auth and roles management and 
how to safeguard routes for each role.

## Running the code

Pull and run as typical Nuxt3 project.

Create an `.env` file and add the following
```
NUXT_SESSION_SECRET=M5rs/Dipt/TKb5gPRZAOvuaJeeFw8Fb5CYnvFVs6H2WQNadQ1RQB0Q6wpDmy2PBjOjBRkN0TjE33xMO3C3/Bsw==
```

Without session secret, Nuxt session won't work. Easiest way to create a secure key using `node`

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('base64'));"
```
