const { PlaylistItem } = require('../models/playlist.model');
const { Video } = require('../models/video.model');

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
      const playlist = await PlaylistItem.findById(id);
      req.playlist = playlist;
      next();
   } catch (err) {
      return res.status(400).json({ success: false, err: err.message });
   }
};

module.exports = { getVideoById, getPlaylistById };
