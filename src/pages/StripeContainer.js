/** @format */

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51KbjdEGbggZE4zd2ma41KwSGWmfUZmC6cALcKkbdiO726JY6MMJeAixZSUb6TdBAzy9odAzu9oZjiExW9BNMShdM00qODK1Io9";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer({
  placeOrderHandler,
  amount,
  setIsStripeOpen,
}) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm
        placeOrderHandler={placeOrderHandler}
        amount={amount}
        setIsStripeOpen={setIsStripeOpen}
      />
    </Elements>
  );
}
