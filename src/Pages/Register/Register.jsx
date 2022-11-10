import React, {  useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Register = () => {
    
    const {createUser,setUser,loading,  updateUserProfile} = useContext(AuthContext)
  const { error, setError } = useState();


  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
      console.log(email, name, password, photoURL);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (loading) {
          return (
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-900"></div>
          );
        }
        else{
          setUser(user);

        }
        handleUpdateUserProfile(name);
        setError("");
        Swal.fire("Register Successfully")
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
        console.log("error:", error);
      });
    const handleUpdateUserProfile = (name, photo_url) => {
      const profile = {
        displayName: name,
        photoURL: photo_url,
      };
      updateUserProfile(profile)
        .then(() => {})
        .catch((error) => console.error(error));
    };
  };

  return (
    <div>
      <div className="flex justify-center my-12">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>
          <form
            onSubmit={handleSubmit}
            novalidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label for="username" className="block dark:text-gray-400">
                Full name
              </label>
              <input
                name="name"
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
                name="photoURL"
                id="photoURL"
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

            <p className="text-danger mb-5">{error}</p>
          </form>
          <p className="text-xs text-center sm:px-6 dark:text-gray-400">
            Already have an account?
            <Link
              rel="noopener noreferrer"
              to="/login"
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
