const express = require("express");
const mongoose = require("mongoose");
const { createServer } = require("http");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const app = express();

const port = process.env.PORT || 4000;
app.set("port", port);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  subscriptions: "/subscriptions",
});

server.applyMiddleware({ app, path: "/" });

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useNewUrlParser: true, useFindAndModify: false },
  (err) => {
    if (err) throw err;
    console.log("Connected to database");
    httpServer.listen(port, () => {
      console.log(`API is running at localhost: ${port}`);
    });
  }
);
