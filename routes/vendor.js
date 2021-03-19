const express = require('express');
const router = express.Router();

const vendorController = require('../controllers/vendor');

router.get('/vendor', vendorController.getPanel);

module.exports = router;