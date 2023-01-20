const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Opportunity {
    _id: ID
    customer: Customer
    # materials: [materialSchema]
    # volumeCommitment: Number
    opportunityUrl: String
    status: String
    # recommendation: [recommendationSchema]
    printNotes: String
  }

  type Customer {
    _id: ID
    customerName: String
    accountManager: String
    opportunities: [Opportunity]
  }

  type Query {
    customers: [Customer]
    opportunities: [Opportunity]
    # opportunity(_id: ID!): Opportunity
    # user: User
    # order(_id: ID!): Order 
    # checkout(products: [ID]!): Checkout 
  }
`;

module.exports = typeDefs;
