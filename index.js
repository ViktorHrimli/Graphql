const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");

const shemaQuery = require("./shemaGraph/shema");

const app = express();

app.use(cors());
app.use(express.json());

const users = [{ id: 1, username: "Vitya", age: 30 }];

const newUser = (input) => {
  const id = Date.now();

  return {
    id,
    ...input,
  };
};

const root = {
  getAllUsers: () => {
    return users;
  },

  getUser: ({ id }) => {
    return users.find((user) => user.id === id);
  },

  createUser: ({ input }) => {
    const user = newUser(input);
    users.push(user);
    return user;
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

app.listen(5000, () => {
  console.log("Server run on 5000 port!");
});
