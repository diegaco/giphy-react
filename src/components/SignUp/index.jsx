import { useState } from "react"
import FormInput from "../FormInput"
import { auth, createUserProfileDoc } from '../../services/firebase.utils';

export default function SignUp() {
  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    hasError: false,
    showMessage: false,
    message: ''
  });

  const handleChange = name => ev => setState( state => ({...state, [name]: ev.target.value }))

  const handleSubmit = async ev => {
    ev.preventDefault();
    const { displayName, email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      console.log('Password dont match');
      setState(state => ({
        ...state,
        message: 'Password don\'t match',
        showMessage: true,
        hasError: true
      }))
    }

    try {
      console.log(state);
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDoc(user, { displayName });
      setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        hasError: false,
        showMessage: true,
        message: 'Your account was succesfully created.'
      });
    } catch (error) {
      console.log(error);
      setState(state => ({
        ...state,
        message: error.message,
        showMessage: true,
        hasError: true
      }))
    }
  }

  const messageColor = state.hasError ? 'red' : 'green';

  return (
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
      <div className="flex justify-center flex-grow">
        <button type="submit" className="px-5 py-3 font-medium rounded bg-purple-500 text-white focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all">Create an account</button>
      </div>
    </form>
  )
}
