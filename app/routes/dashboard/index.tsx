import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'

export const loader: LoaderFunction = () => {
  console.log('/dashboard/index -> Loader Function')
  return redirect('/')
}

export default function Dashboard() {
  return <div>The Dashboard Page!!</div>
}
