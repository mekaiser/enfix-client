import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const SimpleCardForm = ({handlePaymentSuccess}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handlePaymentSuccess(paymentMethod.id);
    }
  };

  const cardElementDivStyle = {
    backgroundColor: "white",
    padding: "1em",
    borderRadius: '0.2em'
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4" style={cardElementDivStyle}>
        <CardElement />
        </div>
        <button className="btn btn-services-card my-4"type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {paymentError && <h5 className='text-center' style={{ color: "#fd374e" }}> {paymentError} </h5>}
      {paymentSuccess && (
        <h5 className='text-center' style={{ color: "#00c851" }}>Your payment was successful</h5>
      )}
    </div>
  );
};

export default SimpleCardForm;
