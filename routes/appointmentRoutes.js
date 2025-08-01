const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authentication')
const book = require('../controllers/appointmentControllers');

router.post('/',verifyToken, book);

module.exports = router;
