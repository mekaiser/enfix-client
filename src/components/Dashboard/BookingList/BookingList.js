import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import DashboardSidebar from "../../Shared/DashboardSidebar/DashboardSidebar";
import NavbarHeader from "../../Shared/NavbarHeader/NavbarHeader";
import BookingListSingle from "../BookingListSingle/BookingListSingle";

const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/loadAllBookingsByEmail/" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookingList(data);
      });
  }, [loggedInUser.email]);

  return (
    <section style={{ backgroundColor: "#091022", height: "1000px" }}>
      <NavbarHeader></NavbarHeader>
      <div className="container">
        <div className="row mt-5">
          <DashboardSidebar></DashboardSidebar>
          <div className="col-md-9">
            <div className="dashboard-details-div">
              <div className="row py-3 px-2">
                {
                    bookingList.map(singleBook => <BookingListSingle key={singleBook._id} singleBook={singleBook}></BookingListSingle> )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingList;
