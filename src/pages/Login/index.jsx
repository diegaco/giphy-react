import { useState } from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <button onClick={() => setShowLogin(true)}>Sign In</button>
      <button onClick={() => setShowLogin(false)}>Sign Up</button>
      {
        showLogin ?
        <SignIn /> :
        <SignUp />
      }
    </>
  )
}
