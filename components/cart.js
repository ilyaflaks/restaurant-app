import React, { useContext } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardGroup,
  Badge,
} from "reactstrap";
import AppContext from "./context";
import Link from "next/link";
function Cart({ checkout }) {
  let isAuthenticated = true;
  let { cart, addItem, removeItem, user, clearCart } = useContext(AppContext);
  const router = useRouter();
  const renderItems = () => {
    let { items } = cart;
    //console.log(`items: ${JSON.stringify(items)}`);
    if (items && items.length) {
      var itemList = cart.items.map((item) => {
        if (item.quantity > 0) {
          return (
            <div
              className="items-one"
              style={{ marginBottom: 15 }}
              key={item.id}
            >
              <div>
                <span
                  // id="item-price"
                  style={{ fontSize: "1.3em", color: "rgba(97, 97, 97, 1)" }}
                >
                  &nbsp; ${item.price}
                </span>
                <span
                  style={{ fontSize: "1.3em", color: "rgba(97, 97, 97, 1)" }}
                >
                  &nbsp; {item.name}
                </span>
              </div>
              <div>
                <Button
                  style={{
                    height: 25,
                    padding: 0,
                    width: 15,
                    marginRight: 5,
                    marginLeft: 10,
                  }}
                  onClick={() => addItem(item)}
                  color="link"
                >
                  +
                </Button>
                <Button
                  style={{
                    height: 25,
                    padding: 0,
                    width: 15,
                    marginRight: 10,
                  }}
                  onClick={() => removeItem(item)}
                  color="link"
                >
                  -
                </Button>
                <span
                  style={{
                    marginLeft: 5,
                    fontSize: "0.95em",
                    paddingBottom: "4px",
                    color: "rgba(158, 158, 158, 1)",
                  }}
                >
                  {item.quantity}x
                </span>
              </div>
            </div>
          );
        }
      });
      return itemList;
    } else {
      return <div></div>;
    }
  };
  const checkoutItems = () => {
    return (
      <div>
        <Badge style={{ width: 200, padding: 10 }} color="light">
          <h5 style={{ fontWeight: 100, color: "gray" }}>Total:</h5>
          <h3 style={{ color: "gray" }}>${cart.total}</h3>
        </Badge>
        <br />
        {!checkout && (
          <Link href="/checkout/">
            <Button
              style={{ padding: "5px 60px 5px 60px", marginTop: "20px" }}
              color="primary"
            >
              <a>Checkout</a>
            </Button>
          </Link>
        )}
      </div>
    );
  };

  return (
    <div>
      {user ? (
        <div style={{ marginTop: "50px" }}>
          {/* <br /> */}

          <Card style={{ padding: "10px 5px" }} className="cart">
            <h1> Cart</h1>
            <CardTitle style={{ margin: 10 }}>Your Order:</CardTitle>
            <hr />
            <CardBody style={{ padding: 10 }}>
              <div style={{ marginBottom: 6 }}>
                <small>Items:</small>
              </div>
              <div>{renderItems()}</div>
              <div>{checkoutItems()}</div>
            </CardBody>
          </Card>
        </div>
      ) : (
        <h4 style={{ marginLeft: "50px" }}>
          Please log in or create an account
        </h4>
      )}
    </div>
  );
}
export default Cart;
