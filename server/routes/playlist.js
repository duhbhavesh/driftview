const express = require('express');
const { getVideoById, getPlaylistById } = require('../controllers/params');
const {
   getPlaylistItems,
   addNewPlaylist,
   addToPlaylist,
   removeFromPlaylist,
   removePlaylist,
} = require('../controllers/playlist');
const router = express.Router();

router.param('playlistId', getPlaylistById);
router.param('videoId', getVideoById);

router.route('/').get(getPlaylistItems).post(addNewPlaylist);

router
   .route('/:playlistId/:videoId')
   .post(addToPlaylist)
   .delete(removeFromPlaylist);

router.route('/:playlistId').delete(removePlaylist);

module.exports = router;
