import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import "./DashboardSidebar.css";

const DashboardSidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  useEffect(() => {
    fetch("https://glacial-inlet-47759.herokuapp.com/isAdminLoggedIn/" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length) {
          setAdminLoggedIn(true);
        }
      });
  }, [loggedInUser.email]);

  const history = useHistory();

  const handleOrderList = () => {
    history.push("/orderList");
  };

  const handleAddService = () => {
    history.push("/addService");
  };

  const handleAddAdmin = () => {
    history.push("/addAdmin");
  };
  const handleManageServices = () => {
    history.push("/manageServices");
  };
  const handleBook = () => {
    history.push("/book/0");
  };
  const handleBookingList = () => {
    history.push("/bookingList");
  };
  const handleReview = () => {
    history.push("/review");
  };
  return (
    <div className="col-md-3">
      <div className="dashboard-sidebar-style">
        <div style={{ display: adminLoggedIn ? "block" : "none" }}>
          <button
            type="button"
            onClick={handleOrderList}
            className="btn dashboard-sidebar-btn text-white d-block"
          >
            Order List
          </button>
        </div>
        <div style={{ display: adminLoggedIn ? "block" : "none" }}>
          <button
            type="button"
            onClick={handleAddService}
            className="btn dashboard-sidebar-btn text-white d-block"
          >
            Add Service
          </button>
        </div>
        <div style={{ display: adminLoggedIn ? "block" : "none" }}>
          <button
            type="button"
            onClick={handleAddAdmin}
            className="btn dashboard-sidebar-btn text-white d-block"
          >
            Make Admin
          </button>
        </div>
        <div style={{ display: adminLoggedIn ? "block" : "none" }}>
          <button
            type="button"
            onClick={handleManageServices}
            className="btn dashboard-sidebar-btn text-white d-block"
          >
            Manage Services
          </button>
        </div>
        <div style={{ display: adminLoggedIn ? "none" : "block" }}>
          <button
            type="button"
            onClick={handleBook}
            className="btn dashboard-sidebar-btn text-white d-block"
          >
            Book
          </button>
        </div>
        <div style={{ display: adminLoggedIn ? "none" : "block" }}>
          <button
            type="button"
            onClick={handleBookingList}
            className="btn dashboard-sidebar-btn text-white d-block"
          >
            Booking List
          </button>
        </div>
        <div style={{ display: adminLoggedIn ? "none" : "block" }}>
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
  );
};

export default DashboardSidebar;
