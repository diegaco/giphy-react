import { useState } from "react";
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import LoginBG from '../../assets/login-bg.jpg';


export default function Login() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <div className="grid md:grid-cols-3 lg:grid-cols-2">
        <div className="login-image hidden md:block md:col-span-1">
          <img className="w-full h-full object-cover" src={LoginBG} alt="Login"/>
        </div>
        <div className="login-content py-12 px-12 sm:px-14 md:px-16 lg:px-20 md:col-span-2 lg:col-span-1">
          <div className="mb-10 flex justify-center">
            <button className={`transition-colors duration-200 ease-in-out border-2 border-purple-500 px-3 py-1 rounded-full rounded-r-none ${showLogin ? 'bg-purple-500 text-white' : 'text-purple-700'}`} onClick={() => setShowLogin(true)}>Sign In</button>
            <button className={`transition-colors duration-200 ease-in-out border-2 border-l-0 border-purple-500 px-3 py-1 rounded-full rounded-l-none ${!showLogin ? 'bg-purple-500 text-white' : 'text-purple-700'}`} onClick={() => setShowLogin(false)}>Sign Up</button>
          </div>
          {
            showLogin ?
              <SignIn /> :
              <SignUp />
          }
        </div>
      </div>
    </>
  )
}
