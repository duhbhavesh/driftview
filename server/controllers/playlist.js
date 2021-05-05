const { PlaylistItem } = require('../models/playlist');

const getPlaylistItems = async (req, res) => {
   let videosPlaylist;
   try {
      videosPlaylist = await PlaylistItem.find({});
      res.json({ success: true, videosPlaylist });
   } catch (err) {
      res.status(400).json({
         success: false,
         message: 'Error retrieving playlists',
         errMessage: err.errMessage,
      });
   }
};

const addNewPlaylist = async (req, res) => {
   const playlistItem = req.body;
   const newPlaylistItem = new PlaylistItem(playlistItem);

   try {
      const savePlaylistItem = await newPlaylistItem.save();
      res.status(201).json({
         success: true,
         message: 'Created new Playlist',
         playlistItem: savePlaylistItem,
      });
   } catch (err) {
      res.status(400).json({
         success: false,
         error: 'Error creating new playlist',
         errMessage: err.errMessage,
      });
   }
};

const addToPlaylist = async (req, res) => {
   const { videosPlaylist, video } = req;
   try {
      if (!videosPlaylist.videos.id(video._id)) {
         videosPlaylist.videos.push({ _id: video._id });
         await videosPlaylist.save();
      }
      await videosPlaylist.populate('videos.video').execPopulate();
      res.status(201).json({
         success: true,
         message: 'Added video to Playlist',
         videosPlaylist,
      });
   } catch (err) {
      res.status(400).json({
         success: false,
         error: 'Error adding to the playlist',
         errMessage: err.message,
      });
   }
};

const removeFromPlaylist = async (req, res) => {
   const { videosPlaylist, video } = req;
   try {
      await videosPlaylist.videos.id(video._id).remove();
      await videosPlaylist.save();
      res.status(201).json({
         success: true,
         message: 'Removed video from playlist',
         videosPlaylist,
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
   const { videosPlaylist } = req;
   try {
      await PlaylistItem.remove({ _id: videosPlaylist._id });
      res.status(201).json({
         success: true,
         message: 'Removed playlist',
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
   getPlaylistItems,
   addNewPlaylist,
   addToPlaylist,
   removeFromPlaylist,
   removePlaylist,
};
