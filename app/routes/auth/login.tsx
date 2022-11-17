import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { authenticator } from '~/services/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
  console.log('/auth/login -> Loader Function')
  return redirect('/good')
}

export let action: ActionFunction = ({ request }) => {
  console.log('/auth/login -> Action Function')
  return authenticator.authenticate('auth0', request)
}
