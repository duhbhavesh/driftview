const { VideoHistoryItem } = require('../models/history');

const getVideosHistoryItems = async (req, res) => {
   let videosHistory;
   try {
      videosHistory = await VideoHistoryItem.find({}).populate('_id');
      const videosHistoryItems = videosHistory.map((item) => {
         const { _id, ...doc } = item._id._doc;
         return { id: _id, ...doc };
      });
      res.json({ success: true, videosHistory: videosHistoryItems });
   } catch (err) {
      res.status(400).json({
         success: false,
         message: 'Error retrieving history videos',
         errMessage: err.errMessage,
      });
   }
};

const addVideoHistoryItem = async (req, res) => {
   const videoHistoryItem = req.body;
   const newVideoHistoryItem = new VideoHistoryItem(videoHistoryItem);

   try {
      const saveVideoHistoryItem = await newVideoHistoryItem.save();
      res.status(201).json({
         success: true,
         messaage: 'Added video to history',
         videoHistoryItem: saveVideoHistoryItem,
      });
   } catch (err) {
      res.status(400).json({
         success: false,
         error: 'Error adding video to history',
         errMessage: err.errMessage,
      });
   }
};

const removeVideoHistoryItem = async (req, res) => {
   try {
      const { id } = req.params;
      await VideoHistoryItem.findByIdAndRemove(id);
      res.json({
         success: true,
         messaage: 'Removed from History',
      });
   } catch (err) {
      res.json({
         success: false,
         messaage: 'Error removing from history',
         errMessage: err.errMessage,
      });
   }
};

module.exports = {
   getVideosHistoryItems,
   addVideoHistoryItem,
   removeVideoHistoryItem,
};
