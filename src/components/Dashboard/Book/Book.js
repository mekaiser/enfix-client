import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";

const Book = ({ serviceId, bookPlease }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [cart, setCart] = useState(null);
  const [shippingData, setShippingData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://glacial-inlet-47759.herokuapp.com/loadSingleService/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        const serviceCart = {
          serviceId: data[0]?.id,
          serviceName: data[0]?.name,
          servicePrice: data[0]?.price,
        };
        setCart(serviceCart);
      });
  }, [serviceId]);

  const serviceIdStatus = () => {
    if(Number(serviceId)){
      return true;
    }
    else if(!Number(serviceId)){
      return false;
    }
  }

  const handlePaymentSuccess = (paymentId) => {
    const loggedInUserInfo = {
      name: loggedInUser.name,
      email: loggedInUser.email,
    };
    const serviceId = cart.serviceId;
    const orderedDetails = {
      ...loggedInUserInfo,
      serviceId,
      serviceStatus: "Pending",
      services: cart,
      shipment: shippingData,
      paymentId,
      orderTime: new Date(),
    };

    fetch("https://glacial-inlet-47759.herokuapp.com/addOrderedService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderedDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Your order placed successfully");
        }
      });
  };

  const onSubmit = (data) => {
    setShippingData(data);
  };
  return (
    <>
      {!serviceIdStatus() && bookPlease && (
        <div className="dashboard-details-div">
          <h1 className="text-center text-white">
            Please Book Your Order <br /> From Home Page!
          </h1>
        </div>
      )}

      {serviceIdStatus() && (
        <div className="dashboard-details-div">
          <div>
            <h1 className="text-center text-white mb-5">
              Let's Book Your Order
            </h1>
            <div className="row">
              <div className="col-md-9 text-white">
                <h4>Service Name: {cart?.serviceName}</h4>
              </div>
              <div className="col-md-3 text-white">
                <h4>Price: ${cart?.servicePrice}</h4>
              </div>
            </div>
            <h2 style={{ color: "#fd374e" }} className="text-center mt-5 mb-3">
              Please Fill Up The Form Below
            </h2>
            <form
              style={{ display: shippingData ? "none" : "block" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row">
                <div className="mb-3">
                  <label
                    for="exampleInputEmail1"
                    className="form-label contact-form-label text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3">
                  <label
                    for="exampleInputEmail1"
                    className="form-label contact-form-label text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    {...register("email", { required: true })}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label
                  for="exampleInputPassword1"
                  className="form-label contact-form-label text-white"
                >
                  Your Address
                </label>
                <input
                  style={{ height: "200px" }}
                  type="text"
                  name="address"
                  {...register("address", { required: true })}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-services-card my-4">
                Submit
              </button>
            </form>
            <div style={{ display: shippingData ? "block" : "none" }}>
              <ProcessPayment
                handlePaymentSuccess={handlePaymentSuccess}
              ></ProcessPayment>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Book;
