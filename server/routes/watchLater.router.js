const express = require('express');
const {
   getVideosWatchLaterItems,
   addVideoWatchLaterItem,
   removeVideoWatchLaterItem,
} = require('../controllers/watchLater.controller');
const {
   handleAuthVerify,
} = require('../middlewares/handleAuthVerify.middleware');
const router = express.Router();

router.get('/watchlater', handleAuthVerify, getVideosWatchLaterItems);
router.post('/watchLater', handleAuthVerify, addVideoWatchLaterItem);
router.delete('/watchLater', handleAuthVerify, removeVideoWatchLaterItem);

module.exports = router;
