import React from "react";
import DashboardSidebar from "../../Shared/DashboardSidebar/DashboardSidebar";
import NavbarHeader from "../../Shared/NavbarHeader/NavbarHeader";
import "./Dashboard.css";

const Dashboard = () => {
    // const [orderList, setOrderList] = useState(false);
    // const [addService, setAddService] = useState(false);
    // const [makeAdmin, setMakeAdmin] = useState(false);
    // const [manageServices, setManageServices] = useState(false);
    // const [book, setBook] = useState(false);
    // const [bookingList, setBookingList] = useState(false);
    // const [review, setReview] = useState(false);
  return (
    <section style={{ backgroundColor: "#091022", height: "1000px" }}>
      <NavbarHeader></NavbarHeader>
      <div className="container">
        <div className="row mt-5">
          <DashboardSidebar></DashboardSidebar>
          <div className="col-md-9">
              
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
