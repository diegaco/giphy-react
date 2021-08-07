import { Link } from 'wouter';
import useUser from '../../hooks/userUser';

export default function Header() {
  const { isLoggedIn, logout } = useUser();

  return (
    <header className="py-4 px-4 bg-gray-900">
      <div className="container mx-auto flex justify-end">
        {
          isLoggedIn ?
            <button onClick={()=>logout()} className="text-white">Log out</button> :
            <Link to="/login" className="text-white">Login</Link>
        }
      </div>
    </header>
  );
}
