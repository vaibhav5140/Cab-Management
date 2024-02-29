
const express = require('express');
const router = express.Router();
const cabController = require('../controllers/cabController');

router.get('/cabs', cabController.getAllCabs);
router.post('/cabs', cabController.createCab);
router.put('/cabs/:id', cabController.updateCab);
router.delete('/cabs/:id', cabController.deleteCab);

module.exports = router;
