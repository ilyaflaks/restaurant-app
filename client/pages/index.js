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

function Home() {
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/graphql";
  //console.log(`URL: ${process.env.NEXT_PUBLIC_API_URL}`);
  const [query, setQuery] = useState("");

  // console.log("process.env.NEXT_PUBLIC_API_URL:");
  // console.log(process.env.NEXT_PUBLIC_API_URL);

  // console.log("API_URL: ");
  // console.log(API_URL);
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
  });

  // client
  //   .query({
  //     query: gql`
  //       query Restaurants {
  //         restaurants {
  //           id
  //           name
  //           description
  //           dishes {
  //             name
  //           }
  //         }
  //       }
  //     `,
  //   })
  //   .then((result) => console.log(result));

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
