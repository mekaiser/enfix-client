import React, { useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./Services.css";

const Services = () => {

  const [loadedServices, setLoadedServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/loadServices')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setLoadedServices(data);
    })
  }, [])

  return (
    <section className='services-section'>
      <h1 className="text-center section-title-dark">Our Awesome Services</h1>
      <div className="row d-flex justify-content-center services-container">
        
        {
          loadedServices.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
        }
      </div>
    </section>
  );
};

export default Services;
