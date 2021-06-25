import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const OrderListSingle = ({ singleBooking }) => {
  const [status, setStatus] = useState("");
  const [readyUpService, setReadyUpService] = useState([]);

  const handleStatus = (status, serviceId) => {
    console.log(status, serviceId);
    setStatus(status);

    fetch(`https://glacial-inlet-47759.herokuapp.com/loadSingleService/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        const changedStatus = { ...data[0] };
        changedStatus.status = status;
        console.log(changedStatus);
        setReadyUpService(changedStatus);
      });
  };

  
  useEffect(() => {
    const url = 'https://glacial-inlet-47759.herokuapp.com/updateOrderedService/' + readyUpService.id;

    fetch(url, {
      method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(readyUpService),
    })
      .then((res) => res.json())
      .then((data) => console.log(data[0]));
  }, [readyUpService]);



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
        {/* <p style={{ fontWeight: "600" }} className="my-0 text-white">
        </p> */}
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
        <p className="my-0 py-1 text-white text-center"> {singleBooking.serviceStatus} </p>
      </div>
    </div>
  );
};

export default OrderListSingle;
