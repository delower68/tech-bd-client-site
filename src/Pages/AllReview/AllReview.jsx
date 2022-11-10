import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const AllReview = () => {
  const { user } = useContext(AuthContext);
  const { reviews, setReviews } = useState([]);

  useEffect(() => {
    fetch("https://dream-vally-services-server.vercel.app/AllReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return <div>ghgsw</div>;
};

export default AllReview;
