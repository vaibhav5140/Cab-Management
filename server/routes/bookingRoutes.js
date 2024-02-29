
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/available-cabs', bookingController.getAllAvailableCabs);
router.post('/book-cab/:cabId', bookingController.bookCab);
module.exports = router;
