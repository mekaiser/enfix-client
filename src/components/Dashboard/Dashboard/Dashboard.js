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
    fetch("https://glacial-inlet-47759.herokuapp.com/isAdminLoggedIn/" + loggedInUser.email)
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
    <section style={{ backgroundColor: "#091022", height: "100%", minHeight: "100vh" }}>
      <NavbarHeader></NavbarHeader>
      <div className="container">
        {spinner ? (
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden"></span>
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
