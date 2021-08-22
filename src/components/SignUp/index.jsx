import { useState } from "react"
import useUser from '../../hooks/useUser';
import Spinner from "../Spinner";
import Message from "../Message/Message";
import FormInput from "../FormInput"

export default function SignUp() {
  const { register, loading, error, message } = useUser();
  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = name => ev => setState( state => ({...state, [name]: ev.target.value }))

  const handleSubmit = async ev => {
    ev.preventDefault();
    const { displayName, email, password, confirmPassword } = state;
    register({displayName, email, password, confirmPassword});
  }

  const messageColor = state.hasError ? 'red' : 'green';

  return (
    <>
      <h2 className="text-2xl font-bold tracking-wide mb-7">
        Create an account for free.
      </h2>
      {
        message ?
        <div className="mb-5">
          <Message error={error} message={message} />
        </div> :
          null
      }
      <form className="sign-up-form" action="/" onSubmit={handleSubmit}>
        {
          state.showMessage ?
            <div className={`bg-${messageColor}-300 p-4 rounded-sm flex items-center`}>
            <div className={`w-8 h-8 bg-${messageColor}-400 rounded-full text-${messageColor}-700 mr-3 flex items-center justify-center text-xl`}>&#x02713;</div>
              <p className={`mb-0 text-${messageColor}-800 text-xl`}>
                { state.message }
              </p>
            </div> :
            null
        }
        <FormInput
          type="text"
          name="displayName"
          id="displayName"
          value={state.displayName}
          label="Name"
          onChange={handleChange('displayName')}
          required
        />
        <FormInput
          type="email"
          name="email"
          id="email"
          value={state.email}
          label="Email"
          onChange={handleChange('email')}
          required
        />
        <FormInput
          type="password"
          name="password"
          id="password"
          value={state.password}
          label="Password"
          onChange={handleChange('password')}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={state.confirmPassword}
          label="Confirm Password"
          onChange={handleChange('confirmPassword')}
          required
        />

        {
          loading ?
            <div className="flex justify-center flex-grow">
              <Spinner />
            </div> :
            <div className="flex justify-center flex-grow">
              <button type="submit" className="px-5 py-3 font-semibold bg-purple-500 text-white focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all">Create an account</button>
            </div>
        }
      </form>
    </>
  )
}
