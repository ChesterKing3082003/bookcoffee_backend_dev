const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/auth');
// const verifyPermission = require('../middleware/permission')
const staffController = require('../controllers/staffController');

router.get('/show', staffController.show);
router.get('/showReservation', verifyToken, staffController.showReservation);
router.post(
    '/confirmReservation',
    verifyToken,
    staffController.confirmReservation,
);
router.post('/bookBorrowing', verifyToken, staffController.createBookBorrowing);

module.exports = router;
