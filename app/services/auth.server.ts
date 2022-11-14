// app/utils/auth.server.ts
import { Authenticator } from 'remix-auth'
import { Auth0Strategy } from 'remix-auth-auth0'
import { sessionStorage } from '~/services/session.server'

import type { StrategyVerifyCallback } from 'remix-auth'
import type { OAuth2StrategyVerifyParams } from 'remix-auth-oauth2'
import type {
  Auth0StrategyOptions,
  Auth0Profile,
  Auth0ExtraParams,
} from 'remix-auth-auth0'

export type User = {
  id: string
  name: string
  token: string
}

// Create an instance of the authenticator, pass a generic with what your
// strategies will return and will be stored in the session
export const authenticator = new Authenticator<User>(sessionStorage)

const auth0Options: Auth0StrategyOptions = {
  callbackURL: 'https://prep.envision.dev:3000/auth/callback',
  clientID: `${process.env.AUTH0_CLIENT_ID}`,
  clientSecret: `${process.env.AUTH0_CLIENT_SECRET}`,
  domain: 'envraddev.auth0.com',
  audience: '',
  organization: '',
  scope: '',
}

const loginCallback: StrategyVerifyCallback<
  User,
  OAuth2StrategyVerifyParams<Auth0Profile, Auth0ExtraParams>
> = async ({ accessToken, refreshToken, extraParams, profile, context }) => {
  // Get the user data from your DB or API using the tokens and profile
  //return User.findOrCreate({ email: profile.emails[0].value })
  return { id: profile.id, name: profile.displayName, token: accessToken }
}

const auth0Strategy = new Auth0Strategy(auth0Options, loginCallback)

authenticator.use(auth0Strategy, 'auth0')
