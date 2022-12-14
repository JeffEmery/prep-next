import type { ActionFunction } from '@remix-run/node'
import { authenticator } from '~/services/auth.server'

export const action: ActionFunction = async ({ request }) => {
  console.log('/auth/logout -> Action Function')
  return await authenticator.logout(request, { redirectTo: '/' })
}
