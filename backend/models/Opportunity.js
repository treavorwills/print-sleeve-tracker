const { Schema, model } = require('mongoose');

const MaterialSchema = new Schema(
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
        customerId: {
            type: Number,
            required: true,
            unique: true
        },
        materials: [MaterialSchema],
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
        }
     }
);

const Opportunity = model('opportunity', opportunitySchema);

module.exports = Opportunity;