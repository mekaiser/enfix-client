import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const OrderListSingle = ({ singleBooking }) => {
  const [loadedStatus, setLoadedStatus] = useState("");
  const [firstTimePageLoad, setFirstTimePageLoad] = useState(true);

  const handleStatus = (updatedStatus, serviceId) => {

    fetch(`https://glacial-inlet-47759.herokuapp.com/loadSingleService/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        const serviceWithNewStatus = { ...data[0] };
        serviceWithNewStatus.status = updatedStatus;
        handleStatusUpdate(serviceWithNewStatus, serviceId);
      });
  };

  const handleStatusUpdate = (changedStatus, serviceId) => {
    const url =
      "https://glacial-inlet-47759.herokuapp.com/updateOrderedService/" + changedStatus.id;

    fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(changedStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        loadUpdatedStatus(serviceId);
      });
  };

  const loadUpdatedStatus = (serviceId) => {
    const url = "https://glacial-inlet-47759.herokuapp.com/loadSingleOrder/" + serviceId;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoadedStatus(data[0].serviceStatus);
        setFirstTimePageLoad(false);
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
