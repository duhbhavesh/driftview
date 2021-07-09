const express = require('express');
const {
   getVideosLikedItems,
   addVideoLikedItem,
   removeVideoLikedItem,
} = require('../controllers/liked.controller');
const {
   handleAuthVerify,
} = require('../middlewares/handleAuthVerify.middleware');
const router = express.Router();

router.get('/liked', handleAuthVerify, getVideosLikedItems);
router.post('/liked', handleAuthVerify, addVideoLikedItem);
router.delete('/liked', handleAuthVerify, removeVideoLikedItem);

module.exports = router;
