/* pages/checkout.js */

import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkoutForm";
import AppContext from "../components/context";
import Cart from "../components/cart";

function Checkout() {
  // get app context
  const { isAuthenticated } = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display order button
  //const isAuthenticated  = true;

  // load stripe to inject into elements components
  // const stripePromise = loadStripe(
  //   "pk_test_51HaLhVGgpfLkdZwmHVQcCOdUzwLWqV7umg9EbicemJqLOcLBPDrPtszruyxf4UzqH0lKwaNj5se3tHldNx92nPjI00Zoi8VgBN"
  // );

  //My publishable key:
  const stripePromise = loadStripe(
    "pk_test_51LlFJoBbpWw7tohed82ElF5ORyyIWh9OaTucNLazgs6ANCbJH1wsUhU3eX3hGqkKckowFuMl8SQcjUW0oKFtEYga00q2lG1yQl"
  );

  return (
    <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1 style={{ margin: 20 }}>Checkout</h1>
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Col>
    </Row>
  );
  // }
}
export default Checkout;
