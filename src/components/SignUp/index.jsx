import useUser from "../../hooks/useUser";
import Spinner from "../Spinner";
import { Formik } from "formik";

export default function SignUp() {
  const { register } = useUser();
  return (
    <>
      <h2 className="text-2xl font-bold tracking-wide mb-7">
        Create an account for free.
      </h2>
      <Formik
        initialValues={{
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validate={values => {
          const errors = {};

          if (!values.displayName) {
            errors.displayName = 'The name is required';
          }

          if (!values.email) {
            errors.email = 'The email is required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          if (!values.password) {
            errors.password = 'The password is required';
          }

          if (!values.confirmPassword) {
            errors.confirmPassword = 'The confirm password is required';
          } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = 'Passwords don`t match';
          }

          return errors;
        }}
        onSubmit={async (values, actions) => {
          try {
            await register(values);
            actions.setStatus({ status: 'Your account was succesfully created' });
          } catch (err) {
            console.log(err);
            actions.setStatus({ status: err.message });
          }
        }}
      >
        {
          ({ values, handleSubmit, handleChange, isSubmitting, errors, touched, status }) => (
            <form action="/" onSubmit={handleSubmit}>
              {
                console.log(status)
              }
              <div className="form-group mb-4">
                <label htmlFor="displayName" className="block text-gray-600 font-semibold tracking-wide">Name</label>
                <input
                  className="form-control block w-full border-b-2 border-gray-300 px-2 py-3 text-lg font-light text-purple-700 h-12"
                  type="text"
                  name="displayName"
                  id="displayName"
                  onChange={handleChange}
                  required
                />
                { errors.displayName && touched.displayName && errors.displayName }
              </div>
              <div className="form-group mb-4">
                <label htmlFor="displayName" className="block text-gray-600 font-semibold tracking-wide">Email</label>
                <input
                  className="form-control block w-full border-b-2 border-gray-300 px-2 py-3 text-lg font-light text-purple-700 h-12"
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="displayName" className="block text-gray-600 font-semibold tracking-wide">Password</label>
                <input
                  className="form-control block w-full border-b-2 border-gray-300 px-2 py-3 text-lg font-light text-purple-700 h-12"
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="displayName" className="block text-gray-600 font-semibold tracking-wide">Confirm Password</label>
                <input
                  className="form-control block w-full border-b-2 border-gray-300 px-2 py-3 text-lg font-light text-purple-700 h-12"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={handleChange}
                  required
                />
                { errors.confirmPassword && touched.confirmPassword && errors.confirmPassword }
              </div>
              {
                isSubmitting ?
                  <div className="flex justify-center flex-grow">
                    <Spinner />
                  </div> :
                  <div className="flex justify-center flex-grow">
                    <button type="submit" className="px-5 py-3 font-semibold bg-purple-500 text-white focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all">Create an account</button>
                  </div>
              }
            </form>
          )
        }
      </Formik>
    </>
  )
}
