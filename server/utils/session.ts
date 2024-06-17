import type { H3Event } from 'h3';
import type { SessionPayload } from '~/types/auth-types';

/**
 * Returns a session composable with predefined config
 * @param event
 */
export async function useSessionAuth(event: H3Event) {
   return await useSession<SessionPayload>(event, {
      password: useRuntimeConfig().sessionSecret,
   });
}
