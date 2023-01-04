const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
// const materialRoutes = require('./materialRoutes');
const opportunityRoutes = require('./opportunityRoutes');

router.use('/customer', customerRoutes);
// router.use('./material', materialRoutes);
router.use('/opportunity', opportunityRoutes); 

module.exports = router;