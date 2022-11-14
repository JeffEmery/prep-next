import { Outlet } from '@remix-run/react'

export default function Dashboard() {
  return (
    <>
      <div>Parent Dashboard</div>
      <Outlet />
    </>
  )
}
