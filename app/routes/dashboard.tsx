import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { authenticator } from '~/services/auth.server'

export const loader: LoaderFunction = () => {
  console.log('/dashboard -> Loader Function')
  return redirect('/')
}

export const action: ActionFunction = async ({ request }) => {
  console.log('/dashboard -> Action Function')
  return await authenticator.authenticate('auth0', request)
}

export default function Dashboard() {
  return (
    <>
      <div>Parent Dashboard</div>
      <Outlet />
    </>
  )
}
