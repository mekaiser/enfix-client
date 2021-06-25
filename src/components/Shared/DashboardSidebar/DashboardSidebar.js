import React from "react";
import { useHistory } from "react-router-dom";
import "./DashboardSidebar.css";

const DashboardSidebar = () => {
  const history = useHistory();

  const handleOrderList = () => {
    history.push("/orderList");
  }

  const handleAddService = () => {
    history.push("/addService");
  };
  
  const handleAddAdmin = () => {
    history.push("/addAdmin");
  };
  const handleBook = () => {
    history.push("/book/0");
  };
  const handleReview = () => {
    history.push("/review");
  };
  return (
    <div className="col-md-3">
      <div className="dashboard-sidebar-style">
        <button
          type="button"
          onClick={handleOrderList}
          className="btn dashboard-sidebar-btn text-white d-block"
        >
          Order List
        </button>
        <button
          type="button"
          onClick={handleAddService}
          className="btn dashboard-sidebar-btn text-white d-block"
        >
          Add Service
        </button>
        <button
          type="button"
          onClick={handleAddAdmin}
          className="btn dashboard-sidebar-btn text-white d-block"
        >
          Make Admin
        </button>
        <button
          type="button"
          className="btn dashboard-sidebar-btn text-white d-block"
        >
          Manage Services
        </button>
        <button
          type="button"
          onClick={handleBook}
          className="btn dashboard-sidebar-btn text-white d-block"
        >
          Book
        </button>
        <button
          type="button"
          className="btn dashboard-sidebar-btn text-white d-block"
        >
          Booking List
        </button>
        <button
          type="button"
          onClick={handleReview}
          className="btn dashboard-sidebar-btn text-white d-block"
        >
          Review
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
