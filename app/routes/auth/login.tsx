import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { authenticator } from '~/services/auth.server'

export const loader: LoaderFunction = () => {
  console.log('/auth/login -> Loader Function')
  redirect('/')
}

export const action: ActionFunction = async ({ request }) => {
  console.log('/auth/login -> Action Function')
  return await authenticator.authenticate('auth0', request)
}
