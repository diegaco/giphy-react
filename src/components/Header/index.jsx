import { Link } from 'wouter';
import useUser from '../../hooks/useUser';
import { ReactComponent as UserLogo } from '../../assets/user.svg';
import avatar from '../../assets/avatar.svg';

export default function Header() {
  const { user, isLoggedIn, logout } = useUser();

  return (
    <header className="py-3 px-4 bg-gray-900">
      <div className={`container mx-auto flex items-center ${isLoggedIn ? 'justify-between' : 'justify-end'}`}>
        {
          isLoggedIn ?
            <>
              <div className="flex items-center">
                <img className="rounded-full h-10 w-10 mr-2" src={user.photoURL ? user.photoURL : avatar} alt={user.displayName} /><div className="text-white">{user.displayName}</div>
              </div>
              <button onClick={() => logout()} className="text-white">
                Log out
              </button>
            </> :
            <Link to="/login" className="text-white inline-flex items-center bg-purple-700 border-0 py-1 px-3 focus:outline-none hover:bg-purple-800 rounded text-base">
              <UserLogo className="mr-2 text-white" />
              Login
            </Link>
        }
      </div>
    </header>
  );
}
