const router = require('express').Router();

const {
    getOpportunities,
    getSingleOpportunity,
    createOpportunity,
    updateOpportunity,
    deleteOpportunity,
} = require('../controller/opportunityController');

// /opportunity/
router.route('/')
.get(getOpportunities)
.post(createOpportunity)

// /opportunity/:opportunityId
router.route('/:opportunityId')
.get(getSingleOpportunity)
.put(updateOpportunity)
.delete(deleteOpportunity);

module.exports = router;

