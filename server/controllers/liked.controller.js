const getVideosLikedItems = async (req, res) => {
   const user = req.user;
   res.json({
      success: true,
      videosLiked: user.videosLiked,
   });
};

const addVideoLikedItem = async (req, res) => {
   const user = req.user;
   const { videoId } = req.body;
   try {
      user.videosLiked.push(videoId);
      await user.save();
      res.status(201).json({
         success: true,
         message: 'Video added to Liked Videos',
         videosLiked: videoId,
      });
   } catch (error) {
      res.status(401).json({
         success: false,
         message: 'Unable to add video to liked videos',
         errorMessage: error.message,
      });
   }
};

const removeVideoLikedItem = async (req, res) => {
   const user = req.user;
   const { videoId } = req.body;
   try {
      user.videosLiked.pull(videoId);
      await user.save();
      res.status(201).json({
         success: true,
         message: 'Video removed from Liked Videos',
      });
   } catch (error) {
      res.status(401).json({
         success: false,
         message: 'Unable to remove video from liked videos',
         errorMessage: error.message,
      });
   }
};

module.exports = {
   getVideosLikedItems,
   addVideoLikedItem,
   removeVideoLikedItem,
};
