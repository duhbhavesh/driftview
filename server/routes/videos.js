const express = require('express');
const { getVideos, getVideo } = require('../controllers/videos');
const router = express.Router();

router.route('/').get(getVideos);

router.route('/:id').get(getVideo);

module.exports = router;
