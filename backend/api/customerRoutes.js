const router = require('express').Router();

const {
    getCustomers,
    getSingleCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
} = require('../controller/customerController');

// /customer
router.route('/').get(getCustomers).post(createCustomer);

// /customer/:customerId
router.route('/:customerId')
.get(getSingleCustomer)
.put(updateCustomer)
.delete(deleteCustomer);



module.exports = router;