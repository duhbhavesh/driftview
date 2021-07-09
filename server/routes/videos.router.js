const express = require('express');
const { getVideos, getVideo } = require('../controllers/videos.controller');
const router = express.Router();

router.route('/videos').get(getVideos);

router.route('/videos/:videoId').get(getVideo);

module.exports = router;
