import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div>
      <h1 className="container flex mt-6 flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">You sent {reviews.length} reviews</h1>
      <div className="grid gap-4 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                {
                    reviews.map(review => <ReviewRow
                        key={review._id}
                        review= {review}
                    ></ReviewRow>)
                }
        </div>
      </div>
  );
};

export default MyReviews;
