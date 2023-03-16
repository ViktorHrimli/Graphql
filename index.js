const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");

const shemaQuery = require("./shemaGraph/shema");
const {
  UserContorllers,
  FindUserController,
  CreateUserController,
} = require("./contorllers");

const app = express();

app.use(cors());
app.use(express.json());

const root = {
  getAllUsers: async () => {
    return await UserContorllers();
  },

  getUser: async ({ id }) => {
    return await FindUserController(id);
  },

  createUser: async ({ input }) => {
    return await CreateUserController(input);
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: shemaQuery,
    rootValue: root,
  })
);

module.exports = app;
