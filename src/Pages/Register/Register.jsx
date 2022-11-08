import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
                <div className="flex justify-center my-12">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block dark:text-gray-400">
              Full name
            </label>
            <input
              name='name'
              type="text"
              id="name"
              placeholder="Full name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="username" className="block dark:text-gray-400">
              Email
            </label>
            <input
              
              type="text"
              name="email"
              id="username"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="username" className="block dark:text-gray-400">
              Photo URL
            </label>
            <input
              type="text"
              name="Photo_url"
              id="username"
              placeholder="Photo URL "
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
            />
            <div className="flex justify-end text-xs dark:text-gray-400">
              <Link rel="noopener noreferrer" href="#">
                Forgot Password?
              </Link>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
            Sign Up
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Already have an account?
          <Link
            rel="noopener noreferrer"
            to='/login'
            className="underline dark:text-gray-100 ml-2"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
        </div>
    );
};

export default Register;