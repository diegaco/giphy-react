import { Formik, Form, Field, ErrorMessage } from "formik";
import useUser from "../../hooks/useUser";
import Message from "../Message/Message";
import Spinner from "../Spinner";

export default function SignIn() {
  const { login, loginWithGoogle, loading } = useUser();

  const validateFields = values => {
    const errors = {};

    if (!values.isLoggedInWithGoogle && !values.email) {
      errors.email = 'The email is required';
    } else if (!values.isLoggedInWithGoogle && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.isLoggedInWithGoogle && !values.password) {
      errors.password = 'The password is required';
    }

    return errors;
  }

  const handleSubmit = async (values, actions) => {
    const { email, password, isLoggedInWithGoogle } = values
    actions.setStatus();

    try {
      if (isLoggedInWithGoogle) {
        await loginWithGoogle();
      } else {
        await login({email, password});
        actions.setStatus({ error: false, message: 'Login successfully.' });
      }
    } catch (err) {
      actions.setStatus({ error: true, message: err.message });
    }
  }

  return (
    <>
      <h2 className="text-2xl font-bold tracking-wide mb-7">
        Login In.
      </h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
          isLoggedInWithGoogle: false
        }}
        validate={validateFields}
        onSubmit={handleSubmit}
      >
        {
          ({ isSubmitting, status, errors, touched, setFieldValue }) => (
            <>
              {
                status ?
                <div className="mb-4">
                  <Message error={status.error} message={status.message} />
                </div> :
                  null
              }
              <Form>

                <div className="pb-5 mb-2">
                  <Field
                    type="text"
                    placeholder="Your Email"
                    name="email"
                    className={`form-control block w-full border-b-2 border-gray-300 px-2 py-3 text-lg font-light text-purple-700 h-12${errors.email && touched.email ? ' border-red-500' : ''}`}
                  />
                  <ErrorMessage className="text-red-500 text-sm absolute" name="email" component="div" />
                </div>
                <div className="pb-5 mb-2">
                  <Field
                    type="password"
                    placeholder="Your password"
                    autoComplete="new-password"
                    name="password"
                    className={`form-control block w-full border-b-2 border-gray-300 px-2 py-3 text-lg font-light text-purple-700 h-12${errors.password && touched.password ? ' border-red-500' : ''}`}
                  />
                  <ErrorMessage className="text-red-500 text-sm absolute" name="password" component="div" />
                </div>
                {
                  loading || isSubmitting ?
                    <div className="flex justify-center flex-grow">
                      <Spinner />
                    </div> :
                    <div className="flex flex-col items-center justify-center flex-grow">
                      <button type="submit" className="px-5 py-3 font-semibold bg-purple-500 text-white focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all">Sign in</button>
                      <p className="my-5 text-gray-400">
                        - OR conect with social media -
                      </p>
                      <button onClick={e => setFieldValue('isLoggedInWithGoogle', true)} className="px-5 py-3 font-semibold bg-white text-purple-500 hover:bg-purple-500 hover:text-white focus:bg-purple-500 focus:text-white border-purple-500 border-2 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all">Sign in with Google</button>
                    </div>
                }
              </Form>
            </>
          )
        }
      </Formik>
    </>
  )
}
