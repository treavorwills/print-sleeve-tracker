const { Customer, Opportunity } = require('../models');

const resolvers = {
    Query: {
        customers: async () => Customer.find(),
        opportunities: async () => Opportunity.find()
    },
};

module.exports = resolvers;