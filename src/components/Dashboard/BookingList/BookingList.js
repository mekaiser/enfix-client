import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import BookingListSingle from "../BookingListSingle/BookingListSingle";

const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    fetch("https://glacial-inlet-47759.herokuapp.com/loadAllBookingsByEmail/" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        setBookingList(data);
      });
  }, [loggedInUser.email]);

  return (
    <div className="dashboard-details-div">
      <div className="row py-3 px-2">
        {bookingList.map((singleBook) => (
          <BookingListSingle
            key={singleBook._id}
            singleBook={singleBook}
          ></BookingListSingle>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
