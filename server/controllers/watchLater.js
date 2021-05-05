const { VideoWatchLaterItem } = require('../models/watchLater');

const getVideosWatchLaterItems = async (req, res) => {
   let videosWatchLater;
   try {
      videosWatchLater = await VideoWatchLaterItem.find({}).populate('_id');
      const videoswatchLaterItems = videosWatchLater.map((item) => {
         const { _id, ...doc } = item._id._doc;
         return { id: _id, ...doc };
      });
      res.json({ success: true, videosWatchLater: videoswatchLaterItems });
   } catch (err) {
      res.status(400).json({
         success: false,
         message: 'Error retrieving watch later videos',
         errMessage: err.errMessage,
      });
   }
};

const addVideoWatchLaterItem = async (req, res) => {
   const videoWatchLaterItem = req.body;
   const newWatchLaterItem = new VideoWatchLaterItem(videoWatchLaterItem);

   try {
      const saveWatchLaterItem = await newWatchLaterItem.save();
      res.status(201).json({
         success: true,
         message: 'Added video to watch later',
         videoWatchLaterItem: saveWatchLaterItem,
      });
   } catch (err) {
      res.status(400).json({
         success: false,
         error: 'Error adding video to watch later',
         errMessage: err.errMessage,
      });
   }
};

const removeVideoWatchLaterItem = async (req, res) => {
   try {
      const { id } = req.params;
      await VideoWatchLaterItem.findByIdAndRemove(id);
      res.json({
         success: true,
         message: 'Removed from watch later',
      });
   } catch (err) {
      res.json({
         success: false,
         message: 'Error removing watch later video',
      });
   }
};

module.exports = {
   getVideosWatchLaterItems,
   addVideoWatchLaterItem,
   removeVideoWatchLaterItem,
};
