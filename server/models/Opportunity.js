const { Schema, model } = require('mongoose');

const materialSchema = new Schema(
    {
        boardGrade: String,
        width: Number,
        percentUsage: Number,
    }
);

const recommendationSchema = new Schema(
    {
        size: Number,
        notes: String,
    }
);

const opportunitySchema = new Schema(
    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: 'Customer'
        },
        customerId: {
            type: Number,
            required: true
        },
        materials: [materialSchema],
        volumeCommitment: {
            type: Number,
        },
        opportunityUrl: {
            type: String,
            maxlength: 50,
        },
        status: {
            type: String,
            required: true,
            maxlength: 50,
        },
        recommendation: [recommendationSchema],
        printNotes: {
            type: String,
            maxlength: 50,
        },
     }
);

const Opportunity = model('Opportunity', opportunitySchema);

module.exports = Opportunity;