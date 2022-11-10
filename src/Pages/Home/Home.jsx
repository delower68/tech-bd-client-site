import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Services from "../Services/Services";
import Bannar from "./Bannar";
import LimitedServices from "./LimitedServices/LimitedServices";

const Home = () => {
  const [services, setServices] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    document.title = "TechBD-home";

    fetch("https://dream-vally-services-server.vercel.app/")
      .then((res) => res.json())
      .then((data) => {
        if (loading) {
          return (
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-900"></div>
          );
        } else {
          setServices(data);
        }
      });
  }, [setServices, loading]);

  return (
    <div>
      <Bannar />
      <div className="grid gap-4 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <LimitedServices
            key={service._id}
            service={service}
          ></LimitedServices>
        ))}
      </div>
      <div className=" text-center py-6 pb-12">
        <Link to="services">
          <button className="btn btn-primary">Sell All</button>
        </Link>
      </div>

      <div>
        <div className="p-6 py-28 dark:bg-violet-400 dark:text-gray-900">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracking-tighter font-bold">
                Up to 50% Off
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0">
                <span>Plus free reading! Use promo code:</span>
                <span className="font-bold text-lg">Tech-BD</span>
              </div>
              <Link
                to="/services"
                rel="noreferrer noopener"
                className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
              >
                Read Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
