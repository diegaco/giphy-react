import { useState } from "react";
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

export default function Modal({ onClose }) {
  const [showLogin, setShowLogin] = useState(true);

  const handleClose = ev => {
    onClose();
  }

  return (
    <>
      <div onClick={ev=>ev.stopPropagation()}>
        <div  className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-3/5 xl:w-1/3 h-auto p-6 rounded-md bg-white z-20 shadow-lg">
          <div className="modal-header flex">
            <button className="ml-auto" onClick={handleClose}>╳</button>
          </div>
          <div className="modal-content">
              <button onClick={() => setShowLogin(true)}>Sign In</button>
              <button onClick={() => setShowLogin(false)}>Sign Up</button>
              {
                showLogin ?
                  <SignIn /> :
                  <SignUp />
              }
          </div>
        </div>
        <div onClick={handleClose} className="modal-backdrop fixed top-0 left-0 bg-black opacity-50 z-10 w-screen h-screen"></div>
      </div>
    </>
  );
}
