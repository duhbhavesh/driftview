const { VideoLikedItem } = require('../models/liked');

const getVideosLikedItems = async (req, res) => {
   let videosLiked;
   try {
      videosLiked = await VideoLikedItem.find({}).populate('_id');
      const videosLikedItems = videosLiked.map((item) => {
         const { _id, ...doc } = item._id._doc;
         return { id: _id, ...doc };
      });
      res.json({ success: true, videosLiked: videosLikedItems });
   } catch (err) {
      res.status(400).json({
         success: false,
         message: 'Error retrieving liked videos',
         errMessage: err.errMessage,
      });
   }
};

const addVideoLikedItem = async (req, res) => {
   const videoLikedItem = req.body;
   const newVideoLikedItem = new VideoLikedItem(videoLikedItem);

   try {
      const saveVideoLikedItem = await newVideoLikedItem.save();
      res.status(201).json({
         success: true,
         message: 'Added a new item to liked videos',
         videoLikedItem: saveVideoLikedItem,
      });
   } catch (err) {
      res.status(400).json({
         success: false,
         error: 'Error adding video to liked videos',
         errMessage: err.errMessage,
      });
   }
};

const removeVideoLikedItem = async (req, res) => {
   try {
      const { id } = req.params;
      await VideoLikedItem.findByIdAndRemove(id);
      res.json({
         success: true,
         message: 'Removed from liked videos',
      });
   } catch (err) {
      res.json({
         success: false,
         message: 'Error removing liked video',
         errMessage: err.errMessage,
      });
   }
};

module.exports = {
   getVideosLikedItems,
   addVideoLikedItem,
   removeVideoLikedItem,
};
