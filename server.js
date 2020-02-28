var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
const items = require("./item.js");

// Initialize a GraphQL schema
var schema = buildSchema(`
  type Query {
    item(id: Int!): Item
    items: [Item]
  },
  type Item {
      id: Int
      name: String
      price: Int
  }
`);

// Root resolver
var root = {
    item: items.getItem,
    items: items.retrieveItems
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,  // Must be provided
    rootValue: root,
    graphiql: true,  // Enable GraphiQL when server endpoint is accessed in browser
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));