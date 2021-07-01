import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServicesCard.css';

const ServicesCard = ({service}) => {
  const history = useHistory();
  const serviceId = service.id;
  const handleBookNow = (id) => {
    history.push(`/dashboard/${id}`);
  }
    return (
        <div className="card card-custom shadow text-center">
          <div className="d-flex justify-content-center">
          <img src={service.imageURL} className="card-img-top img-fluid card-img-custom" alt="..."></img>
          </div>
          <div className="card-body text-center">
            <h3 style={{fontWeight: '600'}} className="card-title my-4">{service.name}</h3>
            <p className="card-text">
            {service.details}
            </p>
            <button onClick={() => handleBookNow(serviceId)} type="button" className="btn btn-services-card my-4">Book Now</button>
          </div>
        </div>
    );
};

export default ServicesCard;