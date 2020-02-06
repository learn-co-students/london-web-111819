import React from 'react'
import SignInForm from '../components/SignInForm'

const SignIn = ({ signIn, history }) => (
  <div>
    <h1>Sign in page</h1>
    <SignInForm signIn={signIn} history={history} />
  </div>
)

export default SignIn
