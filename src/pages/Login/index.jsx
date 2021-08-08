import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import Spinner from '../../components/Spinner';
import useUser from '../../hooks/useUser';

export default function Login() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [, setLocation] = useLocation();
  const { user, login, isLoggedIn, loading } = useUser();

  useEffect(() => {
    if (isLoggedIn) setLocation('/')
  },[isLoggedIn, setLocation])

  const handleSubmit = ev => {
    ev.preventDefault();
    login();
  }

  const handleUserChange = ev => setName(ev.target.value);
  const handlePassChange = ev => setPass(ev.target.value);

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-medium text-purple-300 mb-7 text-center">
        Login { isLoggedIn ? user.displayName : null }
      </h2>
      <form className="flex-grow flex md:w-auto w-full" action="" onSubmit={handleSubmit}>
        {/* <input
          className="flex-grow p-3 rounded border-2 border-purple-500 mr-4 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all"
          onChange={handleUserChange}
          value={name}
          type="text"
          name="user"
          id="user"
          placeholder="Username"
        />
        <input
          className="flex-grow p-3 rounded border-2 border-purple-500 mr-4 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all"
          onChange={handlePassChange}
          value={pass}
          type="password"
          name="pass"
          id="pass"
        />
        <button
          type="submit"
          className="px-5 py-3 font-medium rounded bg-purple-500 text-white focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all"
        >
          Login
        </button> */}
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
