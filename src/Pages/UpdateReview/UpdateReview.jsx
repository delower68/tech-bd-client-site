import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateReview = () => {
  const storedUser = useLoaderData();
  const [user, setUser] = useState(storedUser);

  const handleUpdateReview = (event) => {
    event.preventDefault();

    const form = event.target;
    // const customername = user.customername;
    const message = form.message.value;

    setUser( message);


    console.log(user);
    fetch(`http://localhost:5000/reviews/${storedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Your review Updated");
          console.log(data);
        }
      });
  };


//   const handleInputChange = (event) => {
//     const form = event.target;
//     // const customername = user.customername;
//     const message = form.message.value;

//     setUser( message);


//     console.log(message);
//   };

  //   const handleUpdateReview = e =>{
  //     e.preventDefault();
  //     const form = e.target;
  //     const customername = form.name.value;
  //     const email = form.email.value;
  //     const message = form.message.value;
  //     const photoURL = storedUser?.photoURL;

  //   }

  return (
    <div className="flex justify-center py-7">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-base-100 dark:text-gray-100">
        <h1 className="text-4xl font-bold text-center">
          Please update your review{" "}
        </h1>
        <form
          onSubmit={handleUpdateReview}
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="name" className="block dark:text-gray-400">
              Name
            </label>
            <input
            //   onBlur={handleInputChange}
              defaultValue={storedUser?.customerName}
              readOnly
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="email" className="block dark:text-gray-400">
              Email
            </label>
            <input
            //   onBlur={handleInputChange}
              defaultValue={storedUser?.email}
              readOnly
              type="text"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>

          <div>
            <div className="space-y-1 text-sm">
              <textarea
                // onBlur={handleInputChange}
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
                name="message"
                id="text"
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
            >
              Update Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
