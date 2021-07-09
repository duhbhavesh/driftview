const getVideosHistoryItems = async (req, res) => {
   const user = req.user;
   res.json({
      success: true,
      videosHistory: user.videosHistory,
   });
};

const addVideoHistoryItem = async (req, res) => {
   const user = req.user;
   const { videoId } = req.body;

   try {
      user.videosHistory.push(videoId);
      await user.save();
      res.status(201).json({
         success: true,
         message: 'Video added to History Videos',
         videosHistory: videoId,
      });
   } catch (error) {
      res.status(401).json({
         success: false,
         message: 'Unable to add video to history videos',
         errorMessage: error.message,
      });
   }
};

const removeVideoHistoryItem = async (req, res) => {
   const user = req.user;
   const { videoId } = req.body;
   try {
      user.videosHistory.pull(videoId);
      await user.save();
      res.status(201).json({
         success: true,
         message: 'Video removed from History videos',
      });
   } catch (error) {
      res.status(401).json({
         success: false,
         message: 'Unable to remove video from History videos',
         errorMessage: error.message,
      });
   }
};

module.exports = {
   getVideosHistoryItems,
   addVideoHistoryItem,
   removeVideoHistoryItem,
};
