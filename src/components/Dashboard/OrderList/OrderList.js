import React, { useEffect, useState } from "react";
import OrderListSingle from "../OrderListSingle/OrderListSingle";
import "./OrderList.css";

const OrderList = () => {
  const [loadedBookings, setLoadedBookings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/loadAllBookings")
      .then((res) => res.json())
      .then((data) => {
        setLoadedBookings(data);
      });
  }, []);
  return (
    <div className="dashboard-details-div">
      <div
        style={{ backgroundColor: "white", borderRadius: "0.5em" }}
        className="row py-3 px-2 mb-3"
      >
        <div className="col-md-3">
          <p style={{ fontWeight: "600" }} className="my-0">
            Name
          </p>
        </div>
        <div className="col-md-3">
          <p style={{ fontWeight: "600" }} className="my-0">
            Email
          </p>
        </div>
        <div className="col-md-3">
          <p style={{ fontWeight: "600" }} className="my-0">
            Service
          </p>
        </div>
        <div className="col-md-3">
          <p style={{ fontWeight: "600" }} className="my-0">
            Status
          </p>
        </div>
      </div>
      {loadedBookings.map((singleBooking) => (
        <OrderListSingle
          key={singleBooking._id}
          singleBooking={singleBooking}
        ></OrderListSingle>
      ))}
    </div>
  );
};

export default OrderList;
