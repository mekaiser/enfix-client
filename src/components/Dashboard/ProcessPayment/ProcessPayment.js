import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import SimpleCardForm from "../SimpleCardForm/SimpleCardForm";

const stripePromise = loadStripe(
  "pk_test_51J4oyHJilqE90uetUW7VYHGRDr3lvnbNT3rOeNuguMA1zauTNwitkqtrPl92mBfcqzEFG5g0y3alSATuTyZ522KZ00ZxK5hBFE"
);

const ProcessPayment = ({handlePaymentSuccess}) => {

  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm handlePaymentSuccess={handlePaymentSuccess}></SimpleCardForm>
    </Elements>
  );
};

export default ProcessPayment;
