const { Schema, model } = require('mongoose');

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
        volumeCommitment: {
            type: Number,
        },
        regularBales: {
            type: Boolean
        },
        url: {
            type: String,
            maxlength: 50,
        },
        status: {
            type: String,
            required: true,
            maxlength: 50,
        },
        recommendation: {
            type: String,
            maxlength: 50,
        }
     }
);

const Customer = model('customer', customerSchema);

module.exports = Customer;