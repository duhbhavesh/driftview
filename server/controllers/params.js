const { PlaylistItem } = require('../models/playlist');
const { Video } = require('../models/video');

const getVideoById = async (req, res, next, id) => {
   try {
      const video = await Video.findById(id);
      req.video = video;
      next();
   } catch (err) {
      return res.status(400).json({ success: false, err: err.message });
   }
};

const getPlaylistById = async (req, res, next, id) => {
   try {
      const videosPlaylist = await PlaylistItem.findById(id);
      req.videosPlaylist = videosPlaylist;
      next();
   } catch (err) {
      return res.status(400).json({ success: false, err: err.message });
   }
};

module.exports = { getVideoById, getPlaylistById };
