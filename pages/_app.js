import { useContext, useState } from "react";
import Head from "next/head";
import AppContext from "../components/context";
import Home from "./index";
import Layout from "../components/layout";
import Cookie from "js-cookie";

function MyApp(props) {
  var { cart, addItem, removeItem, user, setUser, isAuthenticated } =
    useContext(AppContext);
  const [state, setState] = useState({ cart: cart });
  const [userSignedin, setUserSignedIn] = useState({});
  const [authed, setAuthed] = useState(false);
  const { Component, pageProps } = props;

  //const appContext = useContext(AppContext);
  // console.log("cookie:");
  // console.log(Cookie);
  setUser = (currentUser) => {
    setUserSignedIn(currentUser);
    if (currentUser) {
      setAuthed(true);
    }
  };

  addItem = (item) => {
    let { items } = state.cart;
    //state stores the items and the qty locally in state.cart = items
    //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++
    let foundItem = true;
    if (items.length > 0) {
      foundItem = items.find((i) => i.id === item.id);

      //if cart is not empty, search for item matching the id of the item that called addItem
      //assign it to foundItem. If none found foundItem becomes false
      if (!foundItem) foundItem = false;
    } else {
      //if cart is empty:
      foundItem = false;
    }
    console.log(`Found Item value: ${JSON.stringify(foundItem)}`);
    // if item is not new, add to cart, set quantity to 1
    if (!foundItem) {
      //foundItem is false when cart is empty or when item.id doesnt match whats in it
      //set quantity property to 1
      console.log("if block, foundItem is falsy");
      let temp = JSON.parse(JSON.stringify(item));
      console.log("temp:");
      console.log(temp);
      //you can't set item quantity directly because this is React
      temp.quantity = 1;
      var newCart = {
        items: [...state.cart.items, temp], //copy of item is added to cart with QTY of 1
        total: state.cart.total + item.price,
      };
      setState({ cart: newCart }); //state updated
      console.log(`Total items: ${JSON.stringify(newCart)}`);
    } else {
      //foundItem is truthy, meaning there are things in the cart and the item added matches whats in the cart
      // we already have it so just increase quantity ++
      console.log(
        "else block, foundItem is truthy meaning there are things in the cart and the item added matches whats in the cart"
      );
      console.log(`Total so far:  ${state.cart.total}`);
      //not sure if newCart is in scope of this else statement but it works...
      newCart = {
        items: items.map((item) => {
          //map through the items in the cart, match the id's
          if (item.id === foundItem.id) {
            //Object.assign merges the obejcts after {} with same props into a new obj,
            //in this case it will copy item, and update it's quantity to be +1 of what it was
            //this will essentially return a new object with an update QTY
            return Object.assign({}, item, { quantity: item.quantity + 1 });
          } else {
            //not sure if this condition is necessary since we are already in the else statement for the truthiness of foundItem
            return item;
          }
        }),
        total: state.cart.total + item.price,
      };
    }
    setState({ cart: newCart }); // problem is this is not updated yet
    console.log(`state reset to cart:${JSON.stringify(state)}`);
  };

  ////removeItem is also in the context with no functionality
  removeItem = (item) => {
    //similar to above, items is whats already in the cart
    let { items } = state.cart;
    //check for item already in cart
    const foundItem = items.find((i) => i.id === item.id);
    //find the item for which id of the item added matches
    if (foundItem.quantity > 1) {
      //if item added is already in the cart and the QTY is greater than 1, map through the items
      var newCart = {
        //key "items" is a copy of the item matching the id with a QTY increased by one.
        items: items.map((item) => {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, { quantity: item.quantity - 1 });
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.price,
      };
      //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)
    } else {
      // only 1 item matchng the id in the cart so remove the whole item
      console.log(`Try remove item ${JSON.stringify(foundItem)}`);
      //find the index of the item matching the id of foundItem and splice it out
      const index = items.findIndex((i) => i.id === foundItem.id);
      items.splice(index, 1);
      //not sure if this is a problem with React to uopdate item directly
      var newCart = { items: items, total: state.cart.total - item.price };
    }
    setState({ cart: newCart });
  };

  return (
    //app.js provides the values for this contxt. Otherwise it's empty values. Cart and Dishes all import this context
    //Cart accesses  cart, addItem, removeItem, Dishes accesses addItem
    <AppContext.Provider
      value={{
        cart: state.cart,
        addItem: addItem,
        removeItem: removeItem,
        isAuthenticated: authed,
        user: userSignedin,
        setUser: setUser,
      }}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
