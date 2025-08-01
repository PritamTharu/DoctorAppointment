const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authentication')
const { getAllDoctors, getAllAvailableSlots } = require('../controllers/doctorControllers');

router.get('/',verifyToken, getAllDoctors);
router.get('/:id/availableslots',verifyToken, getAllAvailableSlots);

module.exports = router;
