import { Form } from '@remix-run/react'

export default function Index() {
  return (
    <Form action="/auth/login" method="post">
      <button>Login with Auth0</button>
    </Form>
  )
}
