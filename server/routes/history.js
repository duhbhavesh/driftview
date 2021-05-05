const express = require('express');
const {
   getVideosHistoryItems,
   addVideoHistoryItem,
   removeVideoHistoryItem,
} = require('../controllers/history');
const router = express.Router();

router.route('/').get(getVideosHistoryItems).post(addVideoHistoryItem);

router.route('/:id').delete(removeVideoHistoryItem);

module.exports = router;
