import useUser from "../../hooks/useUser";
import Spinner from "../Spinner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Message from "../Message/Message";

export default function SignUp() {
  const { register } = useUser();

  const validateFields = values => {
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
    } else if (values.password.length < 6) {
      errors.password = 'The password should be at least 6 characters';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'The confirm password is required';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords don`t match';
    }

    return errors;
  }

  const handleSubmit = async (values, actions) => {
    actions.setStatus();
    try {
      await register(values);
      actions.setStatus({ error: false, message: 'Your account was succesfully created' });
    } catch (err) {
      actions.setStatus({ error: true, message: err.message });
    }
  }

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
        validate={validateFields}
        onSubmit={handleSubmit}
      >
        {
          ({ isSubmitting, status, errors, touched}) => (

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
                    placeholder="Name"
                    name="displayName"
                    className={`form-control block w-full border-b-2 border-gray-300 px-2 py-3 text-lg font-light text-purple-700 h-12${errors.displayName && touched.displayName ? ' border-red-500' : ''}`}
                  />
                  <ErrorMessage className="text-red-500 text-sm absolute" name="displayName" component="div" />
                </div>
                <div className="pb-5 mb-2">
                  <Field
                    type="email"
                    placeholder="Email"
                    name="email"
                    className={`form-control block w-full border-b-2 border-gray-300 px-2 py-3 text-lg font-light text-purple-700 h-12${errors.email && touched.email ? ' border-red-500' : ''}`}
                  />
                  <ErrorMessage className="text-red-500 text-sm absolute" name="email" component="div" />
                </div>
                <div className="pb-5 mb-2">
                  <Field
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="new-password"
                    className={`form-control block w-full border-b-2 border-gray-300 px-2 py-3 text-lg font-light text-purple-700 h-12${errors.password && touched.password ? ' border-red-500' : ''}`}
                    />
                  <ErrorMessage className="text-red-500 text-sm absolute" name="password" component="div" />
                </div>
                <div className="pb-5 mb-2">
                  <Field
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    className={`form-control block w-full border-b-2 border-gray-300 px-2 py-3 text-lg font-light text-purple-700 h-12${errors.confirmPassword && touched.confirmPassword ? ' border-red-500' : ''}`}
                  />
                  <ErrorMessage className="text-red-500 text-sm absolute" name="confirmPassword" component="div" />
                </div>
                {
                  isSubmitting ?
                    <div className="flex justify-center flex-grow mt-4">
                      <Spinner />
                    </div> :
                    <div className="flex justify-center flex-grow mt-4">
                      <button type="submit" className="px-5 py-3 font-semibold bg-purple-500 text-white focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all">Create an account</button>
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
