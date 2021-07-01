import React, { useEffect, useState } from "react";
import ManageServicesSingle from "../ManageServicesSingle/ManageServicesSingle";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [servicesLength, setServicesLength] = useState(services?.length);

  useEffect(() => {
    fetch("http://localhost:5000/loadServices")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [servicesLength]);

  return (
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
      {services?.map((serviceSingle) => (
        <ManageServicesSingle
          key={serviceSingle._id}
          servicesLength={servicesLength}
          setServicesLength={setServicesLength}
          serviceSingle={serviceSingle}
        ></ManageServicesSingle>
      ))}
    </div>
  );
};

export default ManageServices;
