import { Form } from '@remix-run/react'

export default function Index() {
  return (
    <div className="antialised text-gray-900 px-6">
      <h1>Welcome to Remix</h1>
      <Form action="/auth/login" method="post">
        <button className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Login
        </button>
      </Form>
      <Form action="/auth/logout" method="post">
        <button className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Logout
        </button>
      </Form>
    </div>
  )
}
