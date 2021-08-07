import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import useUser from '../../hooks/userUser';

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [, setLocation] = useLocation();
  const { login, isLoggedIn } = useUser();

  useEffect(() => {
    if (isLoggedIn) setLocation('/')
  },[isLoggedIn, setLocation])

  const handleSubmit = ev => {
    ev.preventDefault();
    alert(`${user} - ${pass}`);
    login();
  }

  const handleUserChange = ev => setUser(ev.target.value);
  const handlePassChange = ev => setPass(ev.target.value);

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-medium text-purple-300 mb-7 text-center">
        Login
      </h2>
      <form className="flex-grow flex md:w-auto w-full" action="" onSubmit={handleSubmit}>
        <input
          className="flex-grow p-3 rounded border-2 border-purple-500 mr-4 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all"
          onChange={handleUserChange}
          value={user}
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
        </button>
      </form>
    </div>
  )
}
