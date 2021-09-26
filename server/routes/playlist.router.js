const express = require('express');
const {
   getVideoById,
   getPlaylistById,
} = require('../controllers/params.controller');
const {
   getPlaylists,
   addNewPlaylist,
   addVideoToPlaylist,
   removeVideoFromPlaylist,
   removePlaylist,
} = require('../controllers/playlist.controller');
const {
   handleAuthVerify,
} = require('../middlewares/handleAuthVerify.middleware');
const router = express.Router();

router.param('playlistId', getPlaylistById);
router.param('videoId', getVideoById);

router.get('/playlist', handleAuthVerify, getPlaylists);

router.post('/playlist/:playlistId', handleAuthVerify, addVideoToPlaylist);
router.delete(
   '/playlist/:playlistId',
   handleAuthVerify,
   removeVideoFromPlaylist,
);

router.post('/playlist', handleAuthVerify, addNewPlaylist);
router.delete('/playlist', handleAuthVerify, removePlaylist);

module.exports = router;
