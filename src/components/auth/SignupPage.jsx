import CustomInput from "../form/CustomInput";
import { signupInputs } from "../../lib/constants";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function SignupPage({ role }) {
  return (
    <div className="mt-[40px]">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full text-left bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign up your account
              </h1>
              {/* form begins  */}
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  {" "}
                  {signupInputs[role].map(
                    ({ type, name, placeholder, label, required }) => (
                      <CustomInput
                        key={name}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        label={label}
                        required={required}
                      />
                    )
                  )}
                </div>
                {/* submit and other procedure  */}
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign up
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account ?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignupPage;
