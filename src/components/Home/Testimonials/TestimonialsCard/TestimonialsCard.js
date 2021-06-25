import React from 'react';
import './TestimonialsCard.css';

const TestimonialsCard = ({review}) => {
    return (
        <div className="card card-custom shadow">
          <div className="card-body text-center">
            <h5 style={{fontWeight: '400'}} className="card-text my-4">
            {review.review}
            </h5>
            <h4 style={{fontWeight: '600', color: '#fd374e'}} className="card-title mt-4">{review.name}</h4>
            <p style={{fontSize:'1em', fontWeight: '600'}}>{review.position}</p>
          </div>
        </div>
    );
};

export default TestimonialsCard;