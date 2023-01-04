const Opportunity = require('../models/Opportunity');

module.exports={
    getOpportunities(req,res) {
        Opportunity.find()
        .then((opportunities) => res.json(opportunities))
        .catch((err) => res.status(500).json(err));
    },
    getSingleOpportunity(req, res) {
        Opportunity.findOne({ _id: req.params.opportunityId })
        .select('-_v')
        .then((opportunity) =>
        !opportunity ?
        res.status(404).json({message: 'No opportunities found with that ID!'}) :
        res.json(opportunity)
        )
        .catch((err) => res.status(500).json(err));
    },
    updateOpportunity(req, res) {
        Opportunity.findOne({ _id: req.params.opportunityId })
        .select('-_v')
        .then((opportunity) =>
        !opportunity ?
        res.status(404).json({message: 'No opportunities found with that ID!'}) :
        res.json(opportunity)
        )
        .catch((err) => res.status(500).json(err));
    },
    createOpportunity(req, res) {
        Opportunity.create(req.body)
        .then((opportunity) => res.json(opportunity))
        .catch((err) => res.status(500).json(err));
    },
    deleteOpportunity(req, res) {
        Opportunity.findOneAndDelete({ _id: req.params.opportunityId})
        .then((opportunity) => 
        !opportunity
        ? res.status(404).json({ message: 'No opportunity with that ID!' })
        : console.log('add code to delete opportunities too'))
        .then(() => res.json({ message: 'opportunity deleted!'}))
        .catch((err) => res.status(500).json(err));
    }
}