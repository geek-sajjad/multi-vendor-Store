const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/create-vendor', adminController.getCreateVendor);
router.post('/create-vendor', adminController.postCreateVendor);

module.exports = router;