const { Video } = require('../models/video.model');

const getVideos = async (req, res) => {
   try {
      const videos = await Video.find({});
      res.json({ success: true, response: videos });
   } catch (err) {
      res.status(500).json({
         success: false,
         message: 'Unable to retrieve videos',
         errorMessage: err.message,
      });
   }
};

const getVideo = async (req, res) => {
   try {
      const { videoId } = req.params;
      const video = await Video.findById(videoId);
      res.json({ success: true, video });
   } catch (err) {
      res.status(500).json({
         success: false,
         message: 'Unable to retrieve the video',
         errorMessage: err.message,
      });
   }
};

module.exports = { getVideos, getVideo };
