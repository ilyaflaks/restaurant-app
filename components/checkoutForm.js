import React, { useState, useContext } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import fetch from "isomorphic-fetch";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CardSection from "./cardSection";
import AppContext from "./context";
import Cookies from "js-cookie";
import axios from "axios";

function CheckoutForm() {
  const [data, setData] = useState({
    address: "",
    city: "",
    state: "",
    stripe_id: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const stripe = useStripe(); //from stripe
  const elements = useElements(); //also from stripe
  const appContext = useContext(AppContext);
  //context has items in the cart and potentially user

  function onChange(e) {
    //this is pretty clever, keep
    //called by the ipouts for Address, city and state
    // set the key = to the name property equal to the value typed
    const updateItem = (data[e.target.name] = e.target.value);
    // update the state data object
    setData({ ...data, updateItem });
  }

  console.log("appContext in Checkout form:");
  console.log(appContext);
  const { user, cart } = appContext;
  console.log("user");
  console.log(user);
  console.log("cart");
  console.log(cart);
  console.log("cart total");
  console.log(cart.total);

  async function submitOrder(event) {
    event.preventDefault();
    // console.log("data inside submitOrder");
    // console.log(data.address);
    // console.log(data.city);
    // console.log(data.state);

    const regex1 = /[a-zA-Z]/;
    // console.log("regex1.test(data.address");
    // console.log(regex1.test(data.address));
    // console.log("regex1.test(data.city)");
    // console.log(regex1.test(data.city));
    // console.log("regex1.test(data.state)");
    // console.log(regex1.test(data.state));

    if (
      data.address.length === 0 ||
      data.city.length === 0 ||
      data.state.length === 0 ||
      regex1.test(data.city) === false ||
      regex1.test(data.state) === false
    ) {
      alert("Invalid address, please try again");
    } else if (cart.total === 0) {
      alert("You must add items to the cart first");
    }

    const paymentAmnt =
      Number(Math.round(appContext.cart.total + "e2") + "e-2") * 100;

    console.log("paymentAmnt: " + paymentAmnt);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        console.log("INSIDE TRY ");
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://ilya-server-restaurant.herokuapp.com/payment",
          {
            amount: paymentAmnt,
            id,
          }
        );

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        } else {
          console.log(response);
          let newError = { message: response.data.message };
          setError(newError);
        }
      } catch (error) {
        console.log("Error", error);
        //       setError(error);
      }
    } else {
      console.log(error.message);
      setError(error);
    }
  }

  // const response = await fetch(`${API_URL}/orders`, {
  //     method: "POST",
  //     headers: userToken && { Authorization: `Bearer ${userToken}` },
  //     body: JSON.stringify({
  //       amount: Number(Math.round(appContext.cart.total + "e2") + "e-2"),
  //       dishes: appContext.cart.items,
  //       address: data.address,
  //       city: data.city,
  //       state: data.state,
  //       token: token.token.id,
  //     }),
  //   });

  // // Use elements.getElement to get a reference to the mounted Element.
  //const cardElement = elements.getElement();
  //CardElement is imported from Stripe
  //elements is the instance of the useElement Stripe hook

  // // Pass the Element directly to other Stripe.js methods:
  // // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
  // get token back from stripe to process credit card
  // const API_URL =
  //   process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/payment";

  // const token = await stripe.createToken(cardElement);
  // const userToken = Cookies.get("token");
  // const response = await fetch(`${API_URL}/orders`, {
  //   method: "POST",
  //   headers: userToken && { Authorization: `Bearer ${userToken}` },
  //   body: JSON.stringify({
  //     amount: Number(Math.round(appContext.cart.total + "e2") + "e-2"),
  //     dishes: appContext.cart.items,
  //     address: data.address,
  //     city: data.city,
  //     state: data.state,
  //     token: token.token.id,
  //   }),
  // });

  // if (!response.ok) {
  //   setError(response.statusText);
  //   console.log("SUCCESS");
  // }

  // OTHER stripe methods you can use depending on app
  // // or createPaymentMethod - https://stripe.com/docs/js/payment_intents/create_payment_method
  // stripe.createPaymentMethod({
  //   type: "card",
  //   card: cardElement,
  // });

  // // or confirmCardPayment - https://stripe.com/docs/js/payment_intents/confirm_card_payment
  // stripe.confirmCardPayment(paymentIntentClientSecret, {
  //   payment_method: {
  //     card: cardElement,
  //   },
  // });
  //  }

  return (
    <div className="paper">
      <h5>Your information:</h5>
      <hr />
      <FormGroup style={{ display: "flex" }}>
        <div style={{ flex: "0.90", marginRight: 10 }}>
          <Label>Address</Label>
          <Input name="address" onChange={onChange} />
        </div>
      </FormGroup>
      <FormGroup style={{ display: "flex" }}>
        <div style={{ flex: "0.65", marginRight: "6%" }}>
          <Label>City</Label>
          <Input name="city" onChange={onChange} />
        </div>
        <div style={{ flex: "0.25", marginRight: 0 }}>
          <Label>State</Label>
          <Input name="state" onChange={onChange} />
        </div>
      </FormGroup>

      <CardSection data={data} stripeError={error} submitOrder={submitOrder} />
      {success && (
        <div>
          <br />
          <br />
          <h3>Thank you for your order, your payment was successful</h3>
        </div>
      )}
      {error && (
        <div>
          <br />
          <br />
          <h3>There was a problem with your payment: {error.message}</h3>
        </div>
      )}

      <style jsx global>
        {`
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            height: 550px;
            padding: 30px;
            background: #fff;
            border-radius: 6px;
            margin-top: 90px;
          }
          .form-half {
            flex: 0.5;
          }
          * {
            box-sizing: border-box;
          }
          body,
          html {
            background-color: #f6f9fc;
            font-size: 18px;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          }
          h1 {
            color: #32325d;
            font-weight: 400;
            line-height: 50px;
            font-size: 40px;
            margin: 20px 0;
            padding: 0;
          }
          .Checkout {
            margin: 0 auto;
            max-width: 800px;
            box-sizing: border-box;
            padding: 0 5px;
          }
          label {
            color: #6b7c93;
            font-weight: 300;
            letter-spacing: 0.025em;
          }
          button {
            white-space: nowrap;
            border: 0;
            outline: 0;
            display: inline-block;
            height: 40px;
            line-height: 40px;
            padding: 0 14px;
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
            color: #fff;
            border-radius: 4px;
            font-size: 15px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.025em;
            background-color: #6772e5;
            text-decoration: none;
            -webkit-transition: all 150ms ease;
            transition: all 150ms ease;
            margin-top: 10px;
          }
          form {
            margin-bottom: 40px;
            padding-bottom: 40px;
            border-bottom: 3px solid #e6ebf1;
          }
          button:hover {
            color: #fff;
            cursor: pointer;
            background-color: #7795f8;
            transform: translateY(-1px);
            box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
              0 3px 6px rgba(0, 0, 0, 0.08);
          }
          input,
          .StripeElement {
            display: block;
            background-color: #f8f9fa !important;
            margin: 10px 0 20px 0;
            max-width: 500px;
            padding: 10px 14px;
            font-size: 1em;
            font-family: "Source Code Pro", monospace;
            box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
              rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
            border: 0;
            outline: 0;
            border-radius: 4px;
            background: white;
          }
          input::placeholder {
            color: #aab7c4;
          }
          input:focus,
          .StripeElement--focus {
            box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
              rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
            -webkit-transition: all 150ms ease;
            transition: all 150ms ease;
          }
          .StripeElement.IdealBankElement,
          .StripeElement.PaymentRequestButton {
            padding: 0;
          }
        `}
      </style>
    </div>
  );
}
export default CheckoutForm;
