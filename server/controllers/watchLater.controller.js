const getVideosWatchLaterItems = async (req, res) => {
   const user = req.user;
   res.json({
      success: true,
      videosWatchLater: user.videosWatchLater,
   });
};

const addVideoWatchLaterItem = async (req, res) => {
   const user = req.user;
   const { videoId } = req.body;

   try {
      user.videosWatchLater.push(videoId);
      await user.save();
      res.status(201).json({
         success: true,
         message: 'Video added to Watch Later',
         videosWatchLater: videoId,
      });
   } catch (error) {
      res.status(401).json({
         success: false,
         message: 'Unable to add video to watch later',
         errorMessage: error.message,
      });
   }
};

const removeVideoWatchLaterItem = async (req, res) => {
   const user = req.user;
   const { videoId } = req.body;
   try {
      user.videosWatchLater.pull(videoId);
      await user.save();
      res.status(201).json({
         success: true,
         message: 'video removed from watch later',
      });
   } catch (error) {
      res.status(401).json({
         success: false,
         message: 'Unable to remove video from watch later',
         errorMessage: error.message,
      });
   }
};

module.exports = {
   getVideosWatchLaterItems,
   addVideoWatchLaterItem,
   removeVideoWatchLaterItem,
};
