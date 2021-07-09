const { PlaylistItem } = require('../models/playlist.model');

const getPlaylists = async (req, res) => {
   const user = req.user;
   try {
      const userPlaylists = user.playlists;
      const populatedPromises = await userPlaylists.map(async (one) =>
         one.populate('videos').execPopulate(),
      );
      const populatedPlaylist = await Promise.all(populatedPromises);
      res.status(201).json({
         success: true,
         response: populatedPlaylist,
      });
   } catch (error) {
      res.status(401).json({
         success: false,
         message: 'Unable to retrieve playlists',
         errorMessage: error.message,
      });
   }
};

const addNewPlaylist = async (req, res) => {
   const playlistData = req.body;
   const newPlaylist = new PlaylistItem({ ...playlistData, videos: [] });
   let user = req.user;

   try {
      const savedPlaylist = await newPlaylist.save();
      user.playlists.push(savedPlaylist._id);
      await user.save();

      res.json({
         success: true,
         message: 'Created new Playlist',
         response: savedPlaylist,
      });
   } catch (err) {
      res.status(400).json({
         success: false,
         error: 'Error creating new playlist',
         errMessage: err.message,
      });
   }
};

const addVideoToPlaylist = async (req, res) => {
   const { videoId } = req.body;
   let currentPlaylist = req.playlist;
   try {
      currentPlaylist.videos.push(videoId);
      const updatedPlaylist = await currentPlaylist.save();

      res.status(201).json({
         success: true,
         message: 'Added video to Playlist',
         response: updatedPlaylist,
      });
   } catch (err) {
      res.status(400).json({
         success: false,
         error: 'Error adding to the playlist',
         errMessage: err.message,
      });
   }
};

const removeVideoFromPlaylist = async (req, res) => {
   const { videoId } = req.body;
   let currentPlaylist = req.playlist;
   try {
      currentPlaylist.videos.pull(videoId);
      const updatedPlaylist = await currentPlaylist.save();

      res.status(201).json({
         success: true,
         message: 'Removed video from playlist',
         response: updatedPlaylist,
      });
   } catch (err) {
      res.status(400).json({
         success: false,
         error: 'Error removing from the playlist',
         errMessage: err.message,
      });
   }
};

const removePlaylist = async (req, res) => {
   const user = req.user;
   const { playlistId } = req.body;
   try {
      await PlaylistItem.deleteOne({ _id: playlistId });
      await user.save();
      res.status(200).json({
         succes: true,
         message: 'Playlist deleted',
      });
   } catch (err) {
      res.status(400).json({
         success: false,
         error: 'Error removing the playlist',
         errMessage: err.message,
      });
   }
};

module.exports = {
   getPlaylists,
   addNewPlaylist,
   addVideoToPlaylist,
   removeVideoFromPlaylist,
   removePlaylist,
};
