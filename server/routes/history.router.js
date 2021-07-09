const express = require('express');
const {
   getVideosHistoryItems,
   addVideoHistoryItem,
   removeVideoHistoryItem,
} = require('../controllers/history.controller');
const {
   handleAuthVerify,
} = require('../middlewares/handleAuthVerify.middleware');
const router = express.Router();

router.get('/history', handleAuthVerify, getVideosHistoryItems);
router.post('/history', handleAuthVerify, addVideoHistoryItem);
router.delete('/history', handleAuthVerify, removeVideoHistoryItem);

module.exports = router;
