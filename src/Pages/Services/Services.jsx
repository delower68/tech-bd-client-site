import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import ServiceCard from "./ServiceCard";

const Services = () => {


  const [services, setServices] = useState([]);
  const { loading } = useContext(AuthContext);

  
  
    useEffect(() => {
      document.title= 'TechBD-service'

      fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => {
          if (loading) {
            return (
              <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-900"></div>
            );
          }
          else{
            setServices(data)

          }
        });
    }, [setServices, loading]);
  


  return (
    <div>
      <div className="grid gap-4 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
