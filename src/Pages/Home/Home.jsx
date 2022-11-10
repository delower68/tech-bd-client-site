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
    fetch("http://localhost:5000/")
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
      <div className=" text-center py-6">
        <Link to="services">
          <button className="btn btn-primary">Sell All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
