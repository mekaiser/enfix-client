import React, { useEffect, useState } from "react";

const ManageServicesSingle = (props) => {
  const serviceSingle = props.serviceSingle;

  const servicesLength = props.servicesLength;
  const setServicesLength = props.setServicesLength;
  const [serviceId, setServiceId] = useState("");

  const btnServiceRemove = {
    fontSize: "1em",
    fontWeight: "500",
    color: "white",
    backgroundColor: "#fd374e",
    border: "none",
    padding: "0.5em 1em",
  };

  useEffect(() => {
    fetch("https://glacial-inlet-47759.herokuapp.com/removeService/" + serviceId, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result);
          setServicesLength(servicesLength - 1);
        }
      });
  }, [serviceId, servicesLength, setServicesLength]);
  return (
    <div style={{ borderRadius: "0.5em" }} className="row py-2 px-2">
      <div className="col-md-4 d-flex align-items-center my-2">
        <p style={{ fontWeight: "600" }} className="my-0 text-white">
          {serviceSingle.name}
        </p>
      </div>
      <div className="col-md-3 d-flex align-items-center my-2">
        <p style={{ fontWeight: "600" }} className="my-0 text-white">
          {serviceSingle.id}
        </p>
      </div>
      <div className="col-md-3 d-flex align-items-center my-2">
        <p style={{ fontWeight: "600" }} className="my-0 text-white">
          {serviceSingle.price}
        </p>
      </div>
      <div className="col-md-2">
        <button
          style={btnServiceRemove}
          onClick={() => setServiceId(serviceSingle.id)}
          type="button"
          className="btn my-4 inline-block"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ManageServicesSingle;
