import React, { useEffect, useState } from "react";
import DashboardSidebar from "../../Shared/DashboardSidebar/DashboardSidebar";
import NavbarHeader from "../../Shared/NavbarHeader/NavbarHeader";
import ManageServicesSingle from "../ManageServicesSingle/ManageServicesSingle";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [servicesLength, setServicesLength] = useState(services?.length);

  useEffect(() => {
    fetch("https://glacial-inlet-47759.herokuapp.com/loadServices")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, [servicesLength]);

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
                <div className="col-md-4">
                  <p style={{ fontWeight: "600" }} className="my-0">
                    Service Name
                  </p>
                </div>
                <div className="col-md-3">
                  <p style={{ fontWeight: "600" }} className="my-0">
                    ID
                  </p>
                </div>
                <div className="col-md-3">
                  <p style={{ fontWeight: "600" }} className="my-0">
                    Price
                  </p>
                </div>
                <div className="col-md-2">
                  <p style={{ fontWeight: "600" }} className="my-0">
                    Remove
                  </p>
                </div>
              </div>
              {services?.map(serviceSingle => (
                <ManageServicesSingle
                  key={serviceSingle._id}
                  servicesLength={servicesLength}
                  setServicesLength={setServicesLength}
                  serviceSingle={serviceSingle}
                ></ManageServicesSingle>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageServices;
