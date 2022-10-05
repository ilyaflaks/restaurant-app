const express = require("express");
const app = express();
const db = require("./config/connection");
const PORT = process.env.PORT || 4000;
var bodyParser = require("body-parser");
const { Restaurants } = require("./models");
const { Dishes } = require("./models");
const { Testcollections } = require("./models");
//const { ApolloServer, gql } = require("apollo-server");
const { ApolloServer, gql } = require("apollo-server-express");
const http = require("http");

const cors = require("cors");
const path = require("path");

//app.use(express.static("public"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
require("dotenv").config();

app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "./.next/static")));

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Dishes {
    name: String
    price: Int
    description: String
    id: Int
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

let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();
const httpserver = http.createServer(app);

app.get("/rest", function (req, res) {
  res.json({ data: "api working" });
});

app.get("/", (req, res) => {
  res.send("My app");
});

app.listen(4000, function () {
  console.log(`server running on port 4000`);
  console.log(`gql path is ${apolloServer.graphqlPath}`);
});

// const {
//   ApolloServerPluginLandingPageLocalDefault,
// } = require("apollo-server-core");

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   csrfPrevention: true,
//   cache: "bounded",
//   plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
// });

// const restList = async () => {
//   var data = [];
//   console.log("MONGO_URI: " + process.env.MONGO_URI);

//   try {
//     data = await Restaurants.find({});
//     console.log("data", data);
//   } catch (error) {
//     if (error) {
//       console.log(`Error: ${error}`);
//     }
//     throw error;
//   }
// };

// server.listen(process.env.PORT || 4000).then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
//   // restList();
// });

// app.listen({ port: 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// );
