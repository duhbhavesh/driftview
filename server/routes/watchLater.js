const express = require('express');
const {
   getVideosWatchLaterItems,
   addVideoWatchLaterItem,
   removeVideoWatchLaterItem,
} = require('../controllers/watchLater');
const router = express.Router();

router.route('/').get(getVideosWatchLaterItems).post(addVideoWatchLaterItem);

router.route('/:id').delete(removeVideoWatchLaterItem);

module.exports = router;
