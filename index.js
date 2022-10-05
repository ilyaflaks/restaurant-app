const express = require("express");
const app = express();
const db = require("./config/connection");
const PORT = process.env.PORT || 4000;
var bodyParser = require("body-parser");
const { Restaurants } = require("./models");
const { Dishes } = require("./models");
const { Testcollections } = require("./models");
const { ApolloServer, gql } = require("apollo-server");
const cors = require("cors");
const path = require("path");

//app.use(express.static("public"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
require("dotenv").config();

app.use(bodyParser.json());

//app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Dishes {
    name: String
    price: Int
    description: String
  }

  type Restaurant {
    id: String
    name: String
    description: String
    dishes: [Dishes]
  }

  type Query {
    books: [Book]
  }
  type Query {
    restaurants: [Restaurant]
  }
`;

const resolvers = {
  Query: {
    restaurants: async () => {
      const response = await Restaurants.find({}).exec();
      console.log("response: " + response);
      return response.map((item) => {
        return {
          id: item._id,
          name: item.Name,
          description: item.Description,
          dishes: item.dishes,
        };
      });
    },
  },
};

const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

app.get("/", (req, res) => {
  res.send("My app");
});

const restList = async () => {
  var data = [];
  console.log("MONGO_URI: " + process.env.MONGO_URI);

  try {
    data = await Restaurants.find({});
    console.log("data", data);
  } catch (error) {
    if (error) {
      console.log(`Error: ${error}`);
    }
    throw error;
  }
};

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  // restList();
});
