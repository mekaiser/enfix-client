import React, { useState } from "react";
import Book from "../Book/Book";
import BookingList from "../BookingList/BookingList";
import Review from "../Review/Review";

const DashboardUser = ({ serviceId }) => {
  const [book, setBook] = useState(true);
  const [bookPlease, setBookPlease] = useState(false);
  const [bookingList, setBookingList] = useState(false);
  const [review, setReview] = useState(false);

  const handleBook = () => {
    setBookingList(false);
    setReview(false);
    setBook(true);
    if(!Number(serviceId)){
      setBookPlease(true);
    }
  };
  const handleBookingList = () => {
    setBook(false);
    setReview(false);
    setBookingList(true);
  };
  const handleReview = () => {
    setBook(false);
    setBookingList(false);
    setReview(true);
  };
  return (
    <div className="row mt-5">
      <div className="col-md-3">
        <div className="dashboard-sidebar-style">
          <div>
            <button
              type="button"
              onClick={handleBook}
              className="btn dashboard-sidebar-btn text-white d-block"
            >
              Book
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={handleBookingList}
              className="btn dashboard-sidebar-btn text-white d-block"
            >
              Booking List
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={handleReview}
              className="btn dashboard-sidebar-btn text-white d-block"
            >
              Review
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-9">
        {book && <Book serviceId={serviceId} bookPlease={bookPlease}></Book>}
        {bookingList && <BookingList></BookingList>}
        {review && <Review></Review>}
      </div>
    </div>
  );
};

export default DashboardUser;
