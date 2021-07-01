import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import NavbarHeader from "../../Shared/NavbarHeader/NavbarHeader";
import DashboardChecker from "../DashboardChecker/DashboardChecker";
import "./Dashboard.css";

const Dashboard = () => {
  const {serviceId} = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/isAdminLoggedIn/" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setAdminLoggedIn(true);
          setSpinner(false);
        }
        else{
          setSpinner(false);
        }
      });
  }, [loggedInUser.email, setSpinner]);

  return (
    <section style={{ backgroundColor: "#091022", height: "1000px" }}>
      <NavbarHeader></NavbarHeader>
      <div className="container">
        {spinner ? (
          <div className="d-flex justify-content-center mt-5">
            <div class="spinner-border text-light" role="status">
              <span class="visually-hidden"></span>
            </div>
          </div>
        ) : (
          <DashboardChecker
            adminLoggedIn={adminLoggedIn}
            serviceId={serviceId}
          ></DashboardChecker>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
