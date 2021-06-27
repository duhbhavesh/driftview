const { Video } = require('../models/video');

const getVideos = async (req, res) => {
   try {
      const videos = await Video.find({});
      res.json({ success: true, videos });
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
      const { id } = req.params;
      const video = await Video.findById(id);
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
