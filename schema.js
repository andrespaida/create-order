import { gql } from 'apollo-server';

const typeDefs = gql`
  type Order {
    id: ID!
    userId: String!
    productId: String!
    quantity: Int!
    status: String!
    created_at: String!
  }

  type Query {
    _empty: String
  }

  type Mutation {
    createOrder(userId: String!, productId: String!, quantity: Int!): Order
  }
`;

export default typeDefs;