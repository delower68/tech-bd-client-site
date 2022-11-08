import React from "react";
import { Link } from "react-router-dom";
import image from "../../asset/Traveling.png";

const Bannar = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Let's Travel World!</h1>
            <p className="py-6">
              At Dream Vally, travelling to your favourite holiday destinations
              are now easier than ever. <br /> Offering some of the best deals
              around, you can be sure that we are definitely <br /> the top
              travel agency in Kuala Lumpur.
            </p>
            <Link to='/'>
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
          <div>
            <img
              src={image}
              className="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
