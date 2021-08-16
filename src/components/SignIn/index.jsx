import { useEffect } from 'react';
import { useLocation } from 'wouter';
import Spinner from '../Spinner';
import useUser from '../../hooks/useUser';

export default function SignIn() {
  const [, setLocation] = useLocation();
  const { user, login, isLoggedIn, loading } = useUser();

  useEffect(() => {
    if (isLoggedIn) setTimeout(() => setLocation('/'), 1000)
  },[isLoggedIn, setLocation])

  const handleSubmit = ev => {
    ev.preventDefault();
    login();
  }

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-medium text-purple-300 mb-7 text-center">
        Login { isLoggedIn ? user.displayName : null }
      </h2>
      <form className="flex-grow flex md:w-auto w-full" action="" onSubmit={handleSubmit}>
        {
          loading ?
            <div className="flex justify-center flex-grow">
              <Spinner />
            </div> :
            <div className="flex justify-center flex-grow">
              <button className="px-5 py-3 font-medium rounded bg-purple-500 text-white focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all">Sign in with Google</button>
            </div>
        }
      </form>
    </div>
  )
}
