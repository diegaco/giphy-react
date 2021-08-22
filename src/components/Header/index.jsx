import useUser from '../../hooks/useUser';
import { ReactComponent as UserLogo } from '../../assets/user.svg';
import avatar from '../../assets/avatar.svg';
import Modal from '../Modal';
import Login from '../Login';
import useModal from '../../hooks/useModal';

export default function Header() {
  const { user, isLoggedIn, logout } = useUser();
  const { showModal, setShowModal, onClose } = useModal();

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
            <>
            <button onClick={ev => setShowModal(true)} className="text-white inline-flex items-center bg-purple-700 border-0 py-1 px-3 focus:outline-none hover:bg-purple-800 rounded text-base">
              <UserLogo className="mr-2 text-white" />
              Login
            </button>
            {
              showModal ?
              <Modal onClose={onClose}>
                <Login />
              </Modal> :
                null
            }
            </>
        }
      </div>
    </header>
  );
}
