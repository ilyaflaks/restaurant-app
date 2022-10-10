import React, { useState } from "react";
import Cart from "../components/cart";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import RestaurantList from "../components/restaurantList";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";

const cache = new InMemoryCache();

const API_URL = "https://ilya-server-restaurant.herokuapp.com/graphql";

const client = new ApolloClient({
  uri: API_URL,
  cache: cache,
});

function Home() {
  const [query, setQuery] = useState("");

  return (
    <ApolloProvider client={client}>
      <div className="search">
        <h2> Local Restaurants</h2>
        <InputGroup>
          <InputGroupAddon addonType="append"> Search </InputGroupAddon>
          <Input
            onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
            value={query}
          />
        </InputGroup>
        <br></br>
      </div>
      <RestaurantList search={query} />
      <Cart> </Cart>
    </ApolloProvider>
  );
}
export default Home;
