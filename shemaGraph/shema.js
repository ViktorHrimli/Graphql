const { buildSchema } = require("graphql");

const shemaQuery = buildSchema(`

type User {
    id: ID
    user: String
    tweets: String
    followers: String
    avatar: String
    posts: [Post]
}

type Post {
    id: ID
    title: String
    content: String
}

input UserInput {
    id: ID
    user: String
    tweets: String
    followers: String
    avatar: String
    posts: [PostInput]
}

input PostInput {
    id: ID
    title: String!
    content: String!
}


type Query {
    getAllUsers: [User]
    getUser(id: ID): User
}

type Mutation {
    createUser(input: UserInput): User
}
`);

module.exports = shemaQuery;
