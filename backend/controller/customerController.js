const Customer = require('../models/Customer.js');


module.exports = {
    getCustomers(req,res) {
        Customer.find()
        .populate({ path: 'opportunities' } )
        .then((customers) => res.json(customers))
        .catch((err) => res.status(500).json(err));
    },
    getSingleCustomer(req, res) {
        Customer.findOne({ _id: req.params.customerId })
        .select('-_v')
        .then((customer) =>
        !customer ?
        res.status(404).json({message: 'No Customers found with that ID!'}) :
        res.json(customer)
        )
        .catch((err) => res.status(500).json(err));
    },
    updateCustomer(req, res) {
        Customer.findOneAndUpdate(
            { _id: req.params.customerId },
            { $set: req.body},
            { returnDocument: 'after' }
        )
        .then((customer) =>
        !customer ?
        res.status(404).json({message: 'No Customers found with that ID!'}) :
        res.json(customer)
        )
        .catch((err) => res.status(500).json(err));
    },
    createCustomer(req, res) {
        Customer.create(req.body)
        .then((customer) => res.json(customer))
        .catch((err) => res.status(500).json(err));
    },
    deleteCustomer(req, res) {
        Customer.findOneAndDelete({ _id: req.params.customerId})
        .then((customer) => 
        !customer
        ? res.status(404).json({ message: 'No customer with that ID!' })
        : console.log('add code to delete opportunities too'))
        .then(() => res.json({ message: 'Customer deleted!'}))
        .catch((err) => res.status(500).json(err));
    }
}
