const { Schema, model } = require('mongoose');
// const opportunity = require('./Opportunity');

const customerSchema = new Schema(
    {
        customerId: {
            type: Number,
            required: true,
            unique: true
        },
        customerName: {
            type: String,
            required: true,
            maxlength: 50,
            unique: true,
        },
        productionPlant: {
            type: String,
            required: true,
            maxlength: 50,
        },
        accountManager: {
            type: String,
            maxlength: 50,
        },
        regularBales: {
            type: Boolean
        },
        ticketUrl: {
            type: String,
            maxlength: 50,
        },
        opportunities: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Opportunity'
            },
        ],
    }
);

const Customer = model('Customer', customerSchema);

module.exports = Customer;