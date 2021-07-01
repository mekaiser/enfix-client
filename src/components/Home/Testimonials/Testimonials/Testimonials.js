import React, { useEffect, useState } from "react";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import './Testimonials.css';
const Testimonials = () => {

  const [loadedReviews, setLoadedReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/loadReviews')
    .then(res => res.json())
    .then(data => {
      setLoadedReviews(data);
    })
  }, [])
  return (
    <section className="testimonials-section">
      <h1 className="text-center section-title-dark">Testimonials</h1>

      <div className="row d-flex justify-content-center services-container">
        {
          loadedReviews.map(review => <TestimonialsCard key={review._id} review={review}></TestimonialsCard>)
        }
      </div>
    </section>
  );
};

export default Testimonials;
