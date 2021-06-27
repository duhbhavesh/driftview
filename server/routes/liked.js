const express = require('express');
const {
   getVideosLikedItems,
   addVideoLikedItem,
   removeVideoLikedItem,
} = require('../controllers/liked');
const router = express.Router();

router.route('/').get(getVideosLikedItems).post(addVideoLikedItem);

router.route('/:id').delete(removeVideoLikedItem);

module.exports = router;
