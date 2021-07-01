import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const OrderListSingle = ({ singleBooking }) => {
  const [loadedStatus, setLoadedStatus] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [firstTimePageLoad, setFirstTimePageLoad] = useState(true);

  const handleStatus = (updatedStatus, serviceId) => {
    setFirstTimePageLoad(false);
    console.log("handleStatus", updatedStatus, serviceId);
    setServiceId(serviceId);

    fetch(`http://localhost:5000/loadSingleService/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        const serviceWithNewStatus = { ...data[0] };
        serviceWithNewStatus.status = updatedStatus;
        console.log("not useState", serviceWithNewStatus);
        handleStatusUpdate(serviceWithNewStatus);
      });
  };

  const handleStatusUpdate = (changedStatus) => {
    const url =
      "http://localhost:5000/updateOrderedService/" + changedStatus.id;

    fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(changedStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        loadUpdatedStatus(serviceId);
      });
  };

  const loadUpdatedStatus = () => {
    const url = "http://localhost:5000/loadSingleOrder/" + serviceId;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("loaded Status", data[0].serviceStatus);
        setLoadedStatus(data[0].serviceStatus);
      });
  };

  return (
    <div style={{ borderRadius: "0.5em" }} className="row py-2 px-2">
      <div className="col-md-2 d-flex align-items-center">
        <p style={{ fontWeight: "600" }} className="my-0 text-white">
          {singleBooking.shipment.name}
        </p>
      </div>
      <div className="col-md-3 d-flex align-items-center">
        <p style={{ fontWeight: "600" }} className="my-0 text-white">
          {singleBooking.shipment.email}
        </p>
      </div>
      <div className="col-md-3 d-flex align-items-center">
        <p style={{ fontWeight: "600" }} className="my-0 text-white">
          {singleBooking.services.serviceName}
        </p>
      </div>
      <div className="col-md-4">
        <ButtonGroup className="mt-4" aria-label="Basic example">
          <Button
            onClick={() =>
              handleStatus("Pending", singleBooking.services.serviceId)
            }
            variant="danger"
          >
            Pending
          </Button>
          <Button
            onClick={() =>
              handleStatus("On Going", singleBooking.services.serviceId)
            }
            variant="warning"
          >
            On Going
          </Button>
          <Button
            onClick={() =>
              handleStatus("Done", singleBooking.services.serviceId)
            }
            variant="success"
          >
            Done
          </Button>
        </ButtonGroup>
        <p className="my-0 py-1 text-white text-center">
          {firstTimePageLoad ? singleBooking.serviceStatus : loadedStatus}
        </p>
      </div>
    </div>
  );
};

export default OrderListSingle;
