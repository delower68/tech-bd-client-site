import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const AddService = () => {
  const [user, setUser] = useState({});


  const handleAddService = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("http://localhost:5000/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("New service added successfully");
          event.target.reset();
        }
      });
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-base-100 dark:text-gray-100">
        <h1 className="text-4xl font-bold text-center">Add a new service</h1>
        <form
          onSubmit={handleAddService}
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="name" className="block dark:text-gray-400">
              Name
            </label>
            <input
              onBlur={handleInputBlur}
              type="text"
              name="name"
              id="name"
              required
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="name" className="block dark:text-gray-400">
              Price
            </label>
            <input
              onBlur={handleInputBlur}
              type="text"
              name="price"
              id="name"
              required
              placeholder="Price"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="name" className="block dark:text-gray-400">
              Rating
            </label>
            <input
              onBlur={handleInputBlur}
              type="text"
              name="rating"
              id="name"
              required
              placeholder="Rating"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="email" className="block dark:text-gray-400">
              Description
            </label>
            <input
              onBlur={handleInputBlur}
              type="text"
              name="description"
              required
              placeholder="Description"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="photoURL" className="block dark:text-gray-400">
              image_url
            </label>
            <input
              onBlur={handleInputBlur}
              type="photoURL"
              name="image_url"
              id="photoURL"
              required
              placeholder="PhotoURL"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>

          <div>
            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
