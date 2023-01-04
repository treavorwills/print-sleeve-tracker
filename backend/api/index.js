const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
// const materialRoutes = require('./materialRoutes');
const opportunityRoutes = require('./opportunityRoutes');

router.use('/api/customer', customerRoutes);
// router.use('./material', materialRoutes);
router.use('/api/opportunity', opportunityRoutes); 

module.exports = router;