import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  
  

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data)
      });
  }, [user?.email]);


  // review delere 
  const handleDelete = id =>{
    const proced = window.confirm("Are You are sure, You wanna Delete this review");
    if(proced){
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire("Your review has been deleted successfully");
                const remainning = reviews.filter(rew => rew._id !== id);
                setReviews(remainning);
            }
        })
    }
}


  return (
    <div>
      {
        user?.email?
        <div>
            <h1 className="container flex mt-6 flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">You sent {reviews.length} reviews</h1>
      <div className="grid gap-4 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                {
                    reviews.map(review => <ReviewRow
                        key={review._id}
                        review= {review}
                        handleDelete={handleDelete}
                    ></ReviewRow>)
                }
        </div>
        </div>
        :
        <div>
            <h1 className="container flex mt-6 flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">No reviews were added</h1>
        </div>
      }
      </div>
  );
};

export default MyReviews;
