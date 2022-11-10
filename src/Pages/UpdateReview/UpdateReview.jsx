import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateReview = () => {
  const storedUser = useLoaderData();
  const [user, setUser] = useState(storedUser);

  useEffect(() => {
    document.title = "TechBD-myReviews/update";
  });

  const handleUpdateReview = (event) => {
    event.preventDefault();

    fetch(
      `https://dream-vally-services-server.vercel.app/reviews/${storedUser._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Your review Updated");
          console.log(data);
        }
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
    console.log(newUser);
  };

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
              onChange={handleInputChange}
              defaultValue={storedUser.name}
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
              onChange={handleInputChange}
              defaultValue={storedUser?.email}
              type="text"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>

          <div>
            <div className="space-y-1 text-sm">
              <textarea
                onChange={handleInputChange}
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
