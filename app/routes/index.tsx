import SignIn from '~/components/signin'

/*


  if we are not logged in - show the SignIn component
    login is a redirect to Auth0 custom login page - using our domain, but it's a different server so we won't have the base/root page anymore. It will be an entirely new page that gets redirected to whatever is set in Auth0 callback.

  if we are logged in - redirect to the users preferred landing page e.g. /dashboard

  1. How do we test if the user is logged in?
    a. Look at the session object?
    b. Explicitl call authenticator.isAuthenticated?


*/

export default function Index() {
  return <SignIn />
}
