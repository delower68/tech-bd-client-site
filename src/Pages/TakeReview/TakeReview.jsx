import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import ShowAllReview from "./ShowAllReview";

const TakeReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const { image_url, price, _id, name, description } = useLoaderData();

  useEffect(() => {
    document.title = "TechBD-review/addReview";
    fetch("https://dream-vally-services-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleGiveReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const customername = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const photoURL = user?.photoURL;

    const review = {
      service: _id,
      serviceName: name,
      customerName: customername,
      photoURL,
      message,
      email,
    };

    fetch("https://dream-vally-services-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire("Good job!", "You sent a  review!", "successfully");
          form.reset();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="d-block">
      <div className="py-9 px-7 lg:flex md:block ">
        <div className="lg:w-1/2 sm:w-full mr-2 ">
          <div className="card card-compact border-blue-500  bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-56" src={image_url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p className="text-2xl text-orange-600 font-semibold">
                Price: ${price}
              </p>
              <p>{description}</p>
            </div>
          </div>
        </div>
        {/* give a review option  */}
        <div className="lg:w-1/2 sm:w-full">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-base-100 dark:text-gray-100">
            <h1 className="text-2xl font-bold text-center">
              Give a Honest review
            </h1>
            <form
              onSubmit={handleGiveReview}
              novalidate=""
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-1 text-sm">
                <label for="name" className="block dark:text-gray-400">
                  Name
                </label>
                <input
                  defaultValue={user?.displayName}
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
                  defaultValue={user?.email}
                  readOnly
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label for="photoURL" className="block dark:text-gray-400">
                  PhotoURL
                </label>
                <input
                  defaultValue={user?.photoURL}
                  type="photoURL"
                  name="photoURL"
                  id="photoURL"
                  placeholder="PhotoURL"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              {user?.uid ? (
                <div>
                  <div className="space-y-1 text-sm">
                    <textarea
                      className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400"
                      name="message"
                      id="text"
                      cols="30"
                      rows="10"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
                    Give Review
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <div className="container flex mt-6 flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                    <h1> Please login to add a review</h1>{" "}
                  </div>
                </Link>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="grid gap-4 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {reviews.map((rev) => (
          <ShowAllReview key={rev._id} rev={rev}></ShowAllReview>
        ))}
      </div>
    </div>
  );
};

export default TakeReview;
