import React, { useEffect, useState } from "react";
import DashboardSidebar from "../../Shared/DashboardSidebar/DashboardSidebar";
import NavbarHeader from "../../Shared/NavbarHeader/NavbarHeader";
import OrderListSingle from "../OrderListSingle/OrderListSingle";
import "./OrderList.css";

const OrderList = () => {
  const [loadedBookings, setLoadedBookings] = useState([]);
  useEffect(() => {
    fetch("https://glacial-inlet-47759.herokuapp.com/loadAllBookings")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoadedBookings(data);
      });
  }, []);
  return (
    <section style={{ backgroundColor: "#091022", height: "1000px" }}>
      <NavbarHeader></NavbarHeader>
      <div className="container">
        <div className="row mt-5">
          <DashboardSidebar></DashboardSidebar>
          <div className="col-md-9">
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
              {
                loadedBookings.map(singleBooking=> <OrderListSingle key={singleBooking._id} singleBooking={singleBooking}></OrderListSingle>)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
