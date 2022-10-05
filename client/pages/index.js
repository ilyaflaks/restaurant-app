import React, { useState } from "react";
import Cart from "../components/cart";
// import {
//   ApolloProvider,
//   ApolloClient,
//   HttpLink,
//   InMemoryCache,
// } from "@apollo/client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import RestaurantList from "../components/restaurantList";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";

function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  console.log(`URL: ${process.env.NEXT_PUBLIC_API_URL}`);
  const [query, setQuery] = useState("");
  //const link = new HttpLink({ uri: `${API_URL}` });
  const cache = new InMemoryCache();
  //const client = new ApolloClient({ link, cache });

  const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql`
        query Restaurants {
          restaurants {
            id
            name
            description
          }
        }
      `,
    })
    .then((result) => console.log(result));

  //console.log("link: " + JSON.stringify(link));

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
