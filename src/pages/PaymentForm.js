/** @format */

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm({
  placeOrderHandler,
  amount,
  setIsStripeOpen,
}) {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:8000/payment", {
          amount: Number(amount),
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (success) {
      placeOrderHandler();
      setIsStripeOpen(false);
    }
  }, [success]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4 className="mb-4">Pay with Stripe</h4>
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <Button type="primary" onClick={handleSubmit}>
          Place an order
        </Button>
      </form>
    </>
  );
}
