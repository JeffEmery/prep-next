import type { LoaderFunction } from '@remix-run/node'
import { authenticator } from '~/services/auth.server'

export const loader: LoaderFunction = ({ request }) => {
  console.log('/auth/callback -> Loader Function')
  return authenticator.authenticate('auth0', request, {
    successRedirect: '/good',
    failureRedirect: '/bad',
  })
}
