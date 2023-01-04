const router = require('express').Router();

const {
    getOpportunities,
    getSingleOpportunity,
    createOpportunity,
    updateOpportunity,
    deleteOpportunity,
} = require('../controller/opportunityController');

// /api/opportunity/
router.route('/opportunity')
.get(getOpportunities)
.post(createOpportunity)

// /api/opportunity/:opportunityId
.get(getSingleOpportunity)
.put(updateOpportunity)
.delete(deleteOpportunity);

module.exports = router;

